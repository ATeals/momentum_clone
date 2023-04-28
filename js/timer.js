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
        });
    });

    Notification.requestPermission().then(function (result) {
        result === "granted" ? console.log("알림 허용!") : console.log("알림 허용 안함!");
    });

    function alertEndTime() {
        if (Notification.permission !== "granted") {
            alert("notification is disabled");
            console.log(Notification.permission);
        } else {
            var notification = new Notification("노마드 코더 모맨텀!", {
                icon: `https://www.google.com/s2/favicons?domain=${nomadcoders.co}&sz=32`,
                body: "타이머가 종료 되었습니다!",
            });

            // notification.onclick = function () {
            //     window.open("http://google.com");
            // };
        }
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
