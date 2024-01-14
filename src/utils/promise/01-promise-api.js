// const promise = new Promise((resolve, reject) => {
//   const canFullfill = Math.random() > 0.5;
//   console.log(canFullfill);
//   if (canFullfill) {
//     resolve(
//       "Promise is executing succesfully with result (executed, fullfilled)"
//     );
//   } else {
//     reject("Promise is executing with an error (error, rejected)");
//   }
// });

// console.log(promise);

// promise.then(
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

const promise = new Promise((resolve, reject) => {
  const canFullfill = Math.random() > 0.5;
  console.log(canFullfill);
  setTimeout(() => {
    if (canFullfill) {
      resolve(
        "Promise is executing succesfully with result (executed, fullfilled)"
      );
    } else {
      reject("Promise is executing with an error (error, rejected)");
    }
  }, 1500);
});

promise.then(onFullfilled, onRejected);

function onFullfilled(result) {
  console.log(`Success: ${result}`);
}

function onRejected(error) {
  console.log(`Error: ${error}`);
}
