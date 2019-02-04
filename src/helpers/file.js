export function download(blob, fileName) {
    saveAs(blob, fileName);
}
