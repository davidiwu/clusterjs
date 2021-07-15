

const cluster = require('cluster');
const numCPUs = 2; //require('os').cpus().length;
const http = require('http');
const app = require('./apiserver');

const port = 3000;

const startWorker = require('./worker');

const initApp = async () => {
    await startWorker();
}

if(cluster.isMaster) {
    for(let j = 0; j<numCPUs; j++) {
        cluster.fork();
    }
} else {

    initApp().catch(err => {
        console.log(`init app error: ${err}`);
    })


    const server = http.createServer(app);

    server.listen(port);

    server.on('listening', () => {
        console.log(`started express at http://localhost${port} at process ${process.pid}`);
    })

    server.on('error', (error) => {
        console.log(error);
    })

    // process.on('unhandledRejection', up => { 
    //     console.log(`process rejection happened, ${up}`);
    //  })

}