/**
 * Get data with Callback
 * @param {*} url 
 * @param {*} callback 
 */
const getDataWithCallback = (url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.send();

    xhr.addEventListener("load", function () {
        const error = (xhr.status >= 200 && xhr.status < 300) ? null : xhr.statusText;
        callback(error, xhr.response);
    });

    xhr.addEventListener("error", function (e) {
        callback(e, null);
    });
};

getDataWithCallback("https://restcountries.eu/rest/v2/region/europe", (err, value) => {
    console.log(err);

    if (value != null) {
        let countries = JSON.parse(value);
        console.log(countries);
    }
});