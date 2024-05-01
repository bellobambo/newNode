import { createServer } from 'http';

const PORT = process.env.PORT || 8000;

const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Jim Doe' },
];

// Logger Middleware
const logger = (req, res, next) => {
    console.log(`Middleware, ${req.method} ${req.url}`);
    next();
};

// JSON Middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
};

// Route Handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
};

// Route Handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = parseInt(req.url.split('/')[3]);
    const user = users.find((user) => user.id === id);

    if (user) {
        res.end(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'User Not found' }));
    }
};

// Route Handler for POST /api/users
const createUserHandler = (req, res) => {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.end(JSON.stringify(newUser));
    });
};

// Not Found Handler
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Route Not found' }));
};

const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if (req.url === '/api/users' && req.method === 'GET') {
                getUsersHandler(req, res);
            } else if (req.url.match(/^\/api\/users\/\d+$/) && req.method === 'GET') {
                getUserByIdHandler(req, res);
            } else if (req.url === '/api/users' && req.method === 'POST') {
                createUserHandler(req, res);
            } else {
                notFoundHandler(req, res);
            }
        });
    });
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
