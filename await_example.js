async function sleep(time, msg, error) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(msg);
      if (error) {
        reject(time);
      } else {
        resolve(time);
      }
    }, time);
  });
}

async function wrapper(time, msg, error) {
    try {
        return await sleep(time, msg, error)
    }catch(e) {
        console.log(`wrapper error: ${e}`);
    }
}

async function createOrUpdateLicenses() {
  const firstTry = await sleep(1000, "first try to wait 1s to print this.");

  console.log(`return value for the first try: ${firstTry}`);

  try {
    wrapper(1000, "sencond try to wait 1s to print this", true);
  } catch (e) {
    console.log(`error in the second try ${e}`);
  }

  console.log("I should be print before the second try.");

  return firstTry;
}

createOrUpdateLicenses().then((res) => {
  console.log(
    `called function createOrUpdateLicenses with return value ${res}`
  );
});


// createOrUpdateLicenses().then((res) => {
//     console.log(
//       `called function createOrUpdateLicenses with return value ${res}`
//     );
//   });
  

// sleep(20000, "wait 2s").then((res) => {
//   console.log(res);
// });
