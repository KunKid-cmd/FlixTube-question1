const express = require("express");

if (!process.env.PORT) {
    throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");
}

const PORT = process.env.PORT;

//
// Application entry point.
//
async function main() {
    const app = express();

    //
    // HTTP GET route to retrieve advertisements.
    //
    app.get('/ads', (req, res) => {
        res.json([
            { name: "Shopee", image: "/static/shopee.png", url: "https://shopee.co.th" },
            { name: "Lazada", image: "/static/lazada.png", url: "https://www.lazada.co.th" },
            { name: "Kaidee", image: "/static/kaidee.png", url: "https://www.kaidee.com" }
        ]);
    });

    //
    // Starts the HTTP server.
    //
    app.listen(PORT, () => {
        console.log(`Advertise service is running on port ${PORT}`);
    });
}

main()
    .catch(err => {
        console.error("Microservice failed to start.");
        console.error(err && err.stack || err);
    });
