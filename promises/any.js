// Params: Array of promise
// Returns: first result resolved
// Returns: Aggregate Error
Promise.myAny = function (promises) {
  let errors = [];
  let errorCount = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((res) => resolve(res))
        .catch((err) => {
          errorCount++;
          errors[index] = err;
        })
        .finally(() => {
          if (errorCount == promises.length) {
            reject(new AggregateError(errors));
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

let p5 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P5 rejected"), 2000);
});

let p6 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P6 rejected"), 3000);
});

// First resolved scenario
Promise.any([p1, p2, p3, p4]).then((res) => console.log(res));

Promise.myAny([p1, p2, p3, p4]).then((res) => console.log(res));

// All error scenario
Promise.any([p4, p5, p6]).catch((res) => console.log(res));

Promise.myAny([p4, p5, p6]).catch((res) => console.log(res));
