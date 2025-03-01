const http = require('http');
const fs = require('fs');
const port = 3333;

const server = http.createServer((req, res) => { 
    if (req.method == 'GET' && req.url == '/') {
        const indexPage = fs.readFileSync('./index.html', 'utf-8');
        res.writeHead(200,
            'ok',
            {'Content-Type': 'text/html'});
            res.end(indexPage);
    } else if (req.method == 'GET' && req.url == '/style.css') {
        const style = fs.readFileSync('./style.css', 'utf-8');
        res.writeHead(200,
            'ok',
            {'Content-Type': 'text/css'});
            res.end(style);
    } else if (req.method == 'GET' && req.url == '/script.js') {
        const script = fs.readFileSync('./script.js', 'utf-8');
        res.writeHead(200,
            'ok',
            {'Content-Type': 'text/javascript'});
            res.end(script);
    }
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});