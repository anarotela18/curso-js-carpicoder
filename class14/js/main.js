const eventFuture = (res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      res === true
        ? resolve("Promise fulfilled")
        : reject("Promise Promise rejected");
    }, 2000);
  });
};
const value = true;

eventFuture(value)
  .then((response) => {
    console.log(response);
  })
  .catch((response) => {
    console.log(response);
  })
  .finally(()=>{
    console.log("The process is complete");
  });