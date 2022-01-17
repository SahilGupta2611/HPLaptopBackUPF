let promiseCall = function (returnData, message) {
  return function (resolve, reject) {
    setTimeout(() => {
      console.log(`The ${message} has been resolved`);
      resolve(returnData);
    }, returnData * 100);
  };
};

let p1 = new Promise(promiseCall(10, "First Promise"));
let p2 = new Promise(promiseCall(20, "Second Promise"));
let p3 = new Promise(promiseCall(30, "Third Promise"));
// let p4 = new Promise(function (resolve, reject) {
//   reject("49");
// });

Promise.all([p1, p2, p3])
  .then((result) => {
    console.log(`Results :${result}`);
  })
  .catch((error) => {
    console.log(`Error :${error}`);
  });
