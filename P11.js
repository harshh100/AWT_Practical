function fetchData(callback) {
    setTimeout(() => {
      const data = {
        Name: "Jaivin",
        City: "Surat",
        Institute: "CSPIT",
        Age: 20,
      };
  
      callback(null, data); // Pass null as it is not actual error
    }, 500);
  }
  
  function cb(error, data) {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Data:", data);
    }
  }
  
  console.log("Started.");
  console.log("Running...");
  fetchData(cb);
  console.log("End.");
  