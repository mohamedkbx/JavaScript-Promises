// chaining promises
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data from server");
      } else {
        reject("Error fetching data");
      }
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${data} processed`);
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log(data); // Logs: "Data from server"
    return processData(data); // Returning a new promise
  })
  .then((processedData) => {
    console.log(processedData); // Logs: "Data from server processed"
  })
  .catch((error) => {
    console.error(error);
  });
