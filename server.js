import http from 'http';


const server = http.createServer((req, res)=>{
res.write('hello world');
res.end();
})

server.listen(8000 , () =>{
    console.log('server listening on port  8000')
});