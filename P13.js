    import fetch from "node-fetch";

    const API = "https://dummyjson.com/product/1";
    const func = async () => {
    // returning the promise for the data
    return new Promise((resolve, reject) => {
        fetch(API)
        .then((response) => response.json())
        .then((json) => resolve(json))
        .catch((error) => reject(error));
    });
    };

    // fetching the data
    func()
    .then((data) => console.log(data)) // success handling
    .catch((error) => console.log(error)); // error handling
