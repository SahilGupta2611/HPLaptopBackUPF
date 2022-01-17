function prom() {
  return new Promise(function (resolve, reject) {
    console.log("Fetching data please wait...");

    setTimeout(() => {
      $.get("htts://jsonplaceholder.typicode.com/posts", function (data) {
        resolve(data);
      }).fail((err) => {
        reject("Failed to load json...");
      });
    }, 3000);
  });
}

prom()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
