

const express = require('express');
const app = express();

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


exports.modules = app;