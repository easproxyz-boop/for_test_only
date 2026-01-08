// /src/helper/serverside/server_nodejs.js
export const SERVER_NODEJS = (() => {
    const host = window.location.hostname;
    if (host === 'localhost' || host === '127.0.0.1') {
        // Local development
        return 'http://localhost:3000';
    } else {
        // Production
        return 'https://backend.whinxyz.online';
    }
})();
