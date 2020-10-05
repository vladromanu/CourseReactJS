const Stopwatch = () => {
    var laps = [];
    var timer = null;
    var element = document.getElementById("timmer");
    var lapsEl = document.getElementById("laps");

    const reset = function () {
        this.element.innerHTML = "0:00:00";
    }

    const stop = function () {
        this.timmer.reset();
    }

    const start = function () {
        this.timer = setInterval(function () {
            this.element.innerHTML = "1";
        }, 100);
    }

    const lap = function () {
        this.laps.push("1");

        this.displayLaps(this.laps);
    }

    const displayLaps = function (laps) {

        this.lapsEl.innerHTML = "";

        laps.array.forEach(element => {
            this.lapsEl.innerHTML = `<li>${element}</li>`
        });
    }
}

export default Stopwatch;