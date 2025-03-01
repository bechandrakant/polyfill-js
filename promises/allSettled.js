// Params: Array of promise
// Returns: Array of result
Promise.myAllSettled = function (promises) {
  let result = [];
  let settledPromises = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          result[index] = { status: "fulfilled", value: res };
        })
        .catch((err) => {
          result[index] = { status: "rejected", reason: err };
        })
        .finally(() => {
          settledPromises++;
          if (settledPromises == promises.length) {
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

// allSettled resolved scenario
Promise.allSettled([p1, p2, p3, p4]).then((res) => console.log(res));

Promise.myAllSettled([p1, p2, p3, p4]).then((res) => console.log(res));
