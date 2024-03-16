const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response
    res.end('Hello, world!\n');
});

// Start the server and listen on port 8000
server.listen(8000, () => {
    console.log('Server is running on port 8000');
});
