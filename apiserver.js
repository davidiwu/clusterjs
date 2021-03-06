

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors()); // enable cors

let count = 0;

app.get('/', async (req, res) => {

    count += 1;

    async function doSth() {
        return new Promise((resolve, reject)=> {
            setTimeout(() => {
                if(count % 3 == 2) {
                    reject(count);
                } else {
                    resolve(count);
                }

            }, 1000);
        })
    }

    const result = await doSth();

    res.send(`Hello World! with result ${result}`);
})


module.exports = app;