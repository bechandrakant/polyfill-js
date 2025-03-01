// Params: Array of promise
// Returns: first result resolved or rejected
Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then((res) => resolve(res)).catch((err) => reject(err));
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
Promise.race([p1, p2, p3]).then((res) => console.log(res));

Promise.myRace([p1, p2, p3]).then((res) => console.log(res));

// Error scenario
Promise.race([p1, p2, p3, p4]).catch((res) => console.log(res));

Promise.myRace([p1, p2, p3, p4]).catch((res) => console.log(res));
