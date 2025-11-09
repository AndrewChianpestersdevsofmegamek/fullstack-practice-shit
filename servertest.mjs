import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3001;

const server = createServer((req, res) => {
    console.log('Request URL:', req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, () => {
    console.log('Server running');
});