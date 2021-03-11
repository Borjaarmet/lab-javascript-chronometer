class Chronometer {
    constructor() {
        this.currentTime = 0;
        this.intervalId = 0;
    }


    startClick(func) {
        this.intervalId =
            setInterval(() => {
                this.currentTime += 1;

                func()
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
    twoDigitsNumber(number) {
        if (number < 10) {
            return '0' + number.toString()
        } else {
            return number.toString()
        }
    }
    stopClick() {
        clearInterval(this.intervalId)
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