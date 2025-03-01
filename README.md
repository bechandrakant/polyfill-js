# Polyfills in JS

- **Promises**
  - **Promise.all**
    - Returns first error
    - Returns array of resolved values if all promises resolves at max time taken by promises.
  - **Promise.allSettled**
    - Returns array of resolved / rejected values if all promises resolves at max time taken by promises.
  - **Promise.race**
    - Returns resolved / rejected value of first settled promise.
  - **Promise.any**
    - Returns resolved value of first resolved promise.
    - Returns AggregateError if all promise fails.
