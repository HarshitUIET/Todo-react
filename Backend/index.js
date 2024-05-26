const http = require('http');
const url = require('url');

let tasks = [];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;


    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if(method == "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    if (path === '/api/tasks' && method === 'GET') {
       res.writeHead(200, { 'Content-Type': 'application/json' });
         res.end(JSON.stringify(tasks));
    }
    else if(path.startsWith('/api/tasks/') && method === 'GET') {
        // GEt a task by id
         const id = parseInt(path.split('/')[3]);
            const task = tasks.find((t) => t.id === id);
            if(task) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(task));
            }
            else {
                res.writeHead(404);
                res.end(JSON.stringify({ message: `Task ${id} not found` }));
            }
    }
    else if(path === '/api/tasks' && method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { title, description, status, duedate } = JSON.parse(body);
             id =  Math.floor(Math.random() * 10000) + 1;
            tasks.push({ id, title, description, status, duedate });
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ id, title, description, status, duedate }));
        });
    }
    else if(path.startsWith('/api/tasks') && method === 'PUT') {
        const id = parseInt(path.split('/')[3]);
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { title, description, status, duedate } = JSON.parse(body);
            const task = tasks.find((t) => t.id === id);
            if(task) {
                task.title = title;
                task.description = description;
                task.status = status;
                task.duedate = duedate;
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(task));
            }
            else {
                res.writeHead(404);
                res.end(JSON.stringify({ message: `Task ${id} not found` }));
            }
        });
    }
    else if(path.startsWith('/api/tasks') && method === 'DELETE') {
        const id = parseInt(path.split('/')[3]);
        tasks = tasks.filter((t) => t.id !== id);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: `Task ${id} deleted` }));
    }
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

    const port = 5000;

    server.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });