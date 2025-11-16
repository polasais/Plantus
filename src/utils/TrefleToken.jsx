const fetch = require('node-fetch');

// The parameters for our POST request
const params = {
    origin: 'http://localhost:5173',
    ip: 'THE-WEBSITE-USER-IP',
    token: 'TREFLE_API_KEY',
}(async () => {
    const response = await fetch('https://trefle.io/api/auth/claim', {
        method: 'post',
        body: JSON.stringify(params),
        headers: { 'Content-Type': 'application/json' },
    });
    const json = await response.json();
    console.log(json);
})();
