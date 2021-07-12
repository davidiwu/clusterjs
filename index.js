
const { throws } = require("assert");
const cluster = require('cluster');
const numCPUs = 2; //require('os').cpus().length;

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
        console.log(err);
    })

    // process.on('unhandledRejection', up => { 
    //     console.log(`process rejection happened, ${up}`);
    //     throws('error');
    //  })

}