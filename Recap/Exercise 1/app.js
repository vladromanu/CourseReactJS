const timmerEl = document.getElementById("timmer"),
    lapsEl = document.getElementById("laps"),
    startBtn = document.getElementById('start'),
    stopBtn = document.getElementById('stop'),
    lapBtn = document.getElementById('lap'),
    resetBtn = document.getElementById('reset');

class Stopwatch {
    constructor(timmerEl, lapsEl) {
        this.timer = null;
        this.timmerEl = timmerEl;
        this.lapsEl = lapsEl;
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.started = false;
        this.lapCount = 0;
    }

    /** Clear the timeout func */
    stop = function () {
        if (!this.started) return;

        console.log("STOP");
        this.clear();

        this.started = false;
    }

    clear = function () {
        if (this.timer != null)
            clearTimeout(this.timer);
    }

    /** What happens on a tick */
    tick = function () {
        if (!this.started) return;
        console.log("tick ..");

        // increment the seconds
        this.seconds++;
        if (this.seconds == 60) {
            this.minutes += 1;
            this.seconds = 0;
        }

        if (this.minutes == 60) {
            this.hours += 1;
            this.minutes = 0;
        }

        // dispaly the data
        this.displayTime(this.hours, this.minutes, this.seconds);

        // set the new timeout value in 1 sec
        this.startTimmer();
    }

    start = function () {
        console.log("START");

        this.started = true;

        this.startTimmer();
    }

    startTimmer = function () {
        this.clear();
        this.timer = setTimeout(() => this.tick(), 1000);
    }

    /** Run a lap */
    lap = function () {
        if (!this.started) return;

        console.log("LAP");

        this.displayLap(this.hours, this.minutes, this.seconds);
    }

    /** Reset the timmer */
    reset = function () {
        console.log("RESET");

        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.lapCount = 0;

        this.displayTime(this.hours, this.minutes, this.seconds);

        this.lapsEl.innerHTML = '';

        if (this.started)
            this.tick();

    }

    /** Display 1 lap in the UL element */
    displayLap = (hours, minutes, seconds) =>
        this.lapsEl.innerHTML += `<li>Lap ${++this.lapCount}: 
                    ${(hours < 10) ? "0" + hours : hours}:${(minutes < 10) ? "0" + minutes : minutes}:${(seconds < 10) ? "0" + seconds : seconds}
                    </li>`;

    /** Display time */
    displayTime = (hours, minutes, seconds) =>
        this.timmerEl.innerHTML = `${(hours < 10) ? "0" + hours : hours}:${(minutes < 10) ? "0" + minutes : minutes}:${(seconds < 10) ? "0" + seconds : seconds}`;
}


const stopwatch = new Stopwatch(timmerEl, lapsEl);

startBtn.onclick = () => stopwatch.start();
stopBtn.onclick = () => stopwatch.stop();
lapBtn.onclick = () => stopwatch.lap();
resetBtn.onclick = () => stopwatch.reset();