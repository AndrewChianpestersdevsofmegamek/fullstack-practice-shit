import { createServer } from 'node:http';

const server = createServer((req, res) => {
  console.log('Request received!', req.method, req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(3001, () => console.log('Server listening on port 3001'));