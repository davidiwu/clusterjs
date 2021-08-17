

async function sleep(time, msg, error) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(msg);
      if(error) {
          reject(time);
      }
      resolve(time);
    }, time);
  });
}

async function createOrUpdateLicenses() {
  const firstTry = await sleep(1000, "first try to wait 1s to print this.");

  console.log(`return value for the first try: ${firstTry}`);

  try {
    sleep(1000, "sencond try to wait 1s to print this", false);
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
