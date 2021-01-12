import express from "express";
import * as http from "http";
import * as WebSocket from "ws";

// rest of the code remains same
const app = express();

// initialize a simple http server
const server = http.createServer(app);

// initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws: WebSocket) => {

    // connection is up, let's add a simple simple event
    ws.on("message", (message: string) => {
        wss.clients.forEach((c) => {
            // tslint:disable-next-line:triple-equals
            if (c != ws) {
                c.send(message);
            }
        });
    });
});

server.listen(process.env.PORT || 8080, () => {
    console.log(`Server started :)`);
});
