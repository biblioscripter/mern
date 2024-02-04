const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let path = 'views'
    switch(req.url) {
        case '/':
            path += '/index.html'
            res.statusCode = 200
            break
        case '/about':
            path += '/about.html'
            res.statusCode = 200
            break
        default:
            path += '/404.html'
            res.statusCode = 404
            break
    }

    res.setHeader('content-type', 'text/html')
    fs.readFile(path, (err, data) => {
        res.write(data)
        res.end()
    })
})

server.listen(3000, 'localhost')