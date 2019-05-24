#!/usr/bin/env bash
set -eo pipefail



if [ -f "env/.env" ]; then
    export $(grep 'ROOT_DIR' env/.env | xargs);
    echo ""
    echo "⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠ [DEPRECATION NOTICE] ⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠"
    echo " Plz copy your file env/.env to the protonmail-settings/.env"
    echo "For a proton dev you, if i18n is not yet setup plz read"
    echo "read https://github.com/ProtonMail/proton-i18n#how-to-setup-"
    echo "⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠ [/DEPRECATION NOTICE] ⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠⚠"
    echo ""
    echo ""
fi;

if [ -f ".env" ]; then
    export $(grep 'ROOT_DIR' .env | xargs);
fi;


function openProject {
    cd "$ROOT_DIR/$1";
}

function startAngular {
    openProject "${WEBCLIENT_APP:-Angular}";
    npm run start:raw -- "$1";
}

function startSettings {
    openProject "${SETTINGS_APP:-protonmail-settings}";
    npm start -- "$1";
}

function startProxy {
    openProject "${PROXY_APP:-fe-proxy}";
    npm start;
}

if [[ "$1" == "dev" ]]; then
    startAngular "$2" &
    sleep 3 && startSettings "$2" &
    startProxy
fi;

if [[ "$1" == "help" ]]; then
    echo " => How to use the command";
    echo
    echo "./app <target> <flag>"
    echo
    echo "- <target>"
    echo -e "\tdev: to run the webclient + settings + the proxy. Default to 8040"
    echo "- <flag>"
    echo -e "\t--api=blue: to use blue API"
fi;
