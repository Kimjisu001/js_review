/**
 * server
 */

import http from 'http';

let server = http.createServer((req, resp) => {
    resp.end("Hello");
});
server.listen(3000, "localhost", function() {
    console.log("http://localhost:3000 server started")
})