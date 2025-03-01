// Params: Array of promise
// Returns: Array of result
// Throws: Error from first rejected promise
Promise.myAll = function (promises) {
  let result = [];
  let resolvedPromise = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          result[index] = res;
          resolvedPromise++;
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          if (resolvedPromise == promises.length) {
            resolve(result);
          }
        });
    });
  });
};

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P1 resolved"), 3000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 resolved"), 1500);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P3 resolved"), 2000);
});

let p4 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P4 rejected"), 1000);
});

// All resolved scenario
Promise.all([p1, p2, p3]).then((res) => console.log(res));

Promise.myAll([p1, p2, p3]).then((res) => console.log(res));

// Error scenario
Promise.all([p1, p2, p3, p4]).catch((res) => console.log(res));

Promise.myAll([p1, p2, p3, p4]).catch((res) => console.log(res));
