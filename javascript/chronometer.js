class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }


    startClick(callback) {
        setInterval(() => {
            this.currentTime += 1
        }, 1000)

    }

    getMinutes(minutes) {
        if (this.currentTime <= 0) {
            return 0;
        }
        minutes = this.currentTime / 60;
        return Math.floor(minutes);
    }

    getSeconds(seconds) {
        if (this.currentTime <= 0) {
            return 0;
        }
        seconds = this.currentTime % 60;
        return Math.floor(seconds)
    }
    twoDigitsNumber() {
        let minutes = minutes.toString()
        return typeof(minutes)
    }
    stopClick() {
        clearInterval(setInterval)
    }
    resetClick() {
        this.currentTime = 0;
    }
    splitClick() {
        let min = this.getMinutes();
        let sec = this.getSeconds();

        if (min < 10 && sec < 10) {
            return (`${0}${min}:${0}${sec}`);

        } else if (min < 10 && sec > 10) {
            return (`0${min}:${sec}`);

        } else if (min > 10 && sec < 10) {
            return (`${min}:0${sec}`);

        } else {
            return (`${min}:${sec}`);
        }
    }
}