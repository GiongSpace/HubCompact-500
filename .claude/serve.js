const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 8080;
const base = path.join(__dirname, '..');

const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript' };

http.createServer((req, res) => {
  let url = req.url === '/' ? '/index.html' : req.url;
  const file = path.join(base, url);
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(port, () => console.log(`Server running at http://localhost:${port}/`));
