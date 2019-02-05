import { init, createWorker } from 'pmcrypto';

/*
    YOU MUST COPY THESE INSIDE DIST BEFORE ELSE IT WON'T WORK
 */
const OPENPGP = ['openpgp.min.js', 'openpgp.worker.min.js'];

const loadScriptHelper = ({ path, integrity }, cb) => {
    const script = document.createElement('script');

    script.src = path;
    if (integrity) {
        script.integrity = integrity;
    }
    script.onload = (e) => cb(e);
    script.onerror = (e) => cb(undefined, e);

    document.head.appendChild(script);
};

const loadScript = (path, integrity) => {
    return new Promise((resolve, reject) => {
        loadScriptHelper({ path, integrity }, (event, error) => {
            if (error) {
                return reject(error);
            }
            return resolve();
        });
    });
};

const dl = async (path) => {
    const resp = await fetch(path);
    return resp.text();
};

const initLib = async (content) => {
    const mainUrl = URL.createObjectURL(new Blob([content], { type: 'text/javascript' }));
    await loadScript(mainUrl);
    URL.revokeObjectURL(mainUrl);
    init(window.openpgp);
};

const initWorker = async (openpgpContents, content) => {
    const workerUrl = URL.createObjectURL(
        new Blob(
            [
                'postMessage({ event: "load" });self.window = self;',
                openpgpContents,
                content.replace('self.window=self,importScripts("openpgp.min.js");', '')
            ],
            {
                type: 'text/javascript'
            }
        )
    );

    createWorker({
        path: workerUrl
    });

    if (openpgp.getWorker()) {
        // Wait until all workers are loaded
        await Promise.all(
            openpgp.getWorker().workers.map(
                (worker) =>
                    new Promise((resolve) => {
                        const onmessage = worker.onmessage;
                        worker.onmessage = () => {
                            worker.onmessage = onmessage;
                            resolve();
                        };
                    })
            )
        );
    }

    URL.revokeObjectURL(workerUrl);
};

const loadOpenPGP = async () => {
    const [openpgpContents, workerContents] = await Promise.all(OPENPGP.map(dl));

    // wait for the app to be fetched and openpgp main file to be initialized
    await initLib(openpgpContents);
    await initWorker(openpgpContents, workerContents);
};

export default loadOpenPGP;
