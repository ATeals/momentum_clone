(() => {
    const input = document.querySelectorAll(".timer input");
    const text = document.querySelector(".timer__text");
    const form = document.querySelector(".timer__form");

    const playBtn = document.querySelector(".timer__play");
    const pauseBtn = document.querySelector(".timer__pause");
    const resetBtn = document.querySelector(".timer__reset");

    const times = [0, 0, 0];
    let timer;

    input.forEach((item, index) => {
        item.addEventListener("change", () => {
            times[index] = Number(item.value);
            console.log(times);
        });
    });

    Notification.requestPermission().then(function (result) {
        console.log(result);
    });

    function alertEndTime() {
        new Notification("할 일 목록", { body: "안녕! 알람!" });
    }

    function timeChack() {
        if (times[2] !== 0) {
            times[2] -= 1;
        } else if (times[1] !== 0) {
            times[1] -= 1;
            times[2] = 59;
        } else if (times[0] !== 0) {
            times[0] -= 1;
            times[1] = 59;
            times[2] = 59;
        }
        isTimeEnd();
    }

    function isTimeEnd() {
        if (times[2] === 0 && times[1] === 0 && times[0] === 0) {
            clearInterval(timer);
            onForm();
            alert("end!");
        }
    }

    function printTime() {
        const time = times.map((item) => {
            return String(item);
        });
        text.innerText = `${time[0].padStart(2, "0")}:${time[1].padStart(2, "0")}:${time[2].padStart(2, "0")}`;
    }

    function startTimer() {
        printTime();
        timer = setInterval(() => {
            timeChack();
            printTime();
            console.log(times);
        }, 1000);
    }

    function toggleBtn() {
        playBtn.classList.toggle(HIDDEN_CLASSNAME);
        pauseBtn.classList.toggle(HIDDEN_CLASSNAME);
    }

    function offForm() {
        form.classList.add(HIDDEN_CLASSNAME);
        text.classList.remove(HIDDEN_CLASSNAME);
    }
    function onForm() {
        form.classList.remove(HIDDEN_CLASSNAME);
        text.classList.add(HIDDEN_CLASSNAME);
        input.forEach((item, index) => {
            item.value = 0;
        });
    }

    playBtn.addEventListener("click", () => {
        toggleBtn();
        offForm();
        startTimer();
    });

    pauseBtn.addEventListener("click", () => {
        toggleBtn();
        clearInterval(timer);
    });

    resetBtn.addEventListener("click", () => {
        onForm();
        clearInterval(timer);
        playBtn.classList.remove(HIDDEN_CLASSNAME);
        pauseBtn.classList.add(HIDDEN_CLASSNAME);
        times.forEach((item, index) => {
            times[index] = 0;
        });
        printTime();
        alertEndTime();
    });
})();
