const Bluebird = require("bluebird");

async function testPromise() {
    let i = 0;

    async function sleep(time) {
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

    async function wrapper(time) {
        try {
            return await sleep(time);
        } catch(e) {
            return null;
        }
    }

    async function wrapper2(time) {
        return await sleep(time).catch(error => {
            console.log(error);
        })
    }


    const promsies = [];

    promsies.push(wrapper(1000)); // promsies.push(wrapper2(1000));
    promsies.push(wrapper(1000));
    promsies.push(wrapper(1000));
    promsies.push(wrapper(1000));

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