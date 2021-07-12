const Bluebird = require("bluebird");

async function testPromise() {
    let i = 0;

    function sleep(time) {
        return new Promise((resolve, reject)=> {
            setTimeout(() => {
                i += 1;
                if(i % 2 == 0) {
                    console.log(`resolve for ${i}`);
                    resolve(i)
                } else {
                    console.log(`reject for ${i}`);
                    reject(i)
                }
            }, time)
        })
    }


    const promsies = [];

    promsies.push(sleep(1000));
    promsies.push(sleep(1000));
    promsies.push(sleep(1000));
    promsies.push(sleep(1000));

    async function getResults() {

        const [a, b, c, d] = await Bluebird.all(promsies);

        return {a, b, c, d};
    }


    async function test() {
        const result = await getResults();
        console.log(result);
        return result;
    }

    return await test();

}


const startWorker = async () => {
    setTimeout(async () => {
        console.log('generateReports started.')
        await testPromise();
        console.log('generateReports finished.')
        await startWorker();
    }, 1000);
  
}

module.exports = startWorker;