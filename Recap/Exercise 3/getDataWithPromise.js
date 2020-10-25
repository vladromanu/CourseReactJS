/**
 * Get data with PROMISE
 * @param {*} obj 
 */
const getDataWithPromise = (url, obj) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        const method = obj.method || "GET";// <-- here set the method
        xhr.open(method, url, true); // <-- set async true && use the url from the param
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) { // for 200, 201, 204, etc. 
                resolve(xhr.response);
            } else {
                reject(xhr.statusText);
            }
        };

        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(obj.payload); // <-- here add payloads
    });
};

getDataWithPromise("https://restcountries.eu/rest/v2/region/europe", { method: "GET" })
    .then(data => {
        let countries = JSON.parse(data);
        console.log(countries);
    })
    .catch(error => {
        console.log(error);
    });
