const PUSH_CLASSNAME = "neumorphism-push";
const NAV_KEY = "pushedNav";

(() => {
    const todoBtn = document.querySelector(".todoBtn");
    const shortcutBtn = document.querySelector(".shortcutBtn");
    const randomingBtn = document.querySelector(".randomingBtn");
    const rockPaperScissorsBtn = document.querySelector(".rockPaperScissorsBtn");
    const timerBtn = document.querySelector(".timerBtn");

    let pushedNavs = [];

    const savedNav = localStorage.getItem(NAV_KEY);
    if (savedNav) {
        pushedNavs = [...savedNav.split(",")];
    }

    const navFuncObject = {
        todo: () => {
            toggleTodo();
        },
        timer: () => {
            toggleTimer();
        },
        shortcut: () => {
            toggleShortcut();
        },
        randoming: () => {
            toggleRandoming();
        },
        rockPaperScissors: () => {
            togglerockPaperScissors();
        },
    };

    function showNav() {
        pushedNavs.map((item) => {
            navFuncObject[item]();
            console.log(pushedNavs, item);
        });
    }

    function toggleNav(name) {
        if (!pushedNavs.includes(name)) pushedNavs.push(name);
        else pushedNavs = pushedNavs.filter((item) => item != name);
        localStorage.setItem(NAV_KEY, pushedNavs);
    }

    function toggleTodo() {
        const todo = document.querySelector(".todo");
        todo.classList.toggle(HIDDEN_CLASSNAME);
        todoBtn.classList.toggle(PUSH_CLASSNAME);
    }

    function toggleShortcut() {
        const shortCut = document.querySelector(".shortcut");
        shortCut.classList.toggle(HIDDEN_CLASSNAME);
        shortcutBtn.classList.toggle(PUSH_CLASSNAME);
    }
    function toggleRandoming() {
        const randoming = document.querySelector(".randoming");
        randoming.classList.toggle(HIDDEN_CLASSNAME);
        randomingBtn.classList.toggle(PUSH_CLASSNAME);
    }
    function togglerockPaperScissors() {
        const rockPaperScissors = document.querySelector(".rockPaperScissors");
        rockPaperScissors.classList.toggle(HIDDEN_CLASSNAME);
        rockPaperScissorsBtn.classList.toggle(PUSH_CLASSNAME);
    }
    function toggleTimer() {
        const timer = document.querySelector(".timer");
        timer.classList.toggle(HIDDEN_CLASSNAME);
        timerBtn.classList.toggle(PUSH_CLASSNAME);
    }

    timerBtn.addEventListener("click", () => {
        toggleTimer();
        toggleNav("timer");
    });
    todoBtn.addEventListener("click", () => {
        toggleTodo();
        toggleNav("todo");
    });
    shortcutBtn.addEventListener("click", () => {
        toggleShortcut();
        toggleNav("shortcut");
    });
    randomingBtn.addEventListener("click", () => {
        toggleRandoming();

        toggleNav("randoming");
    });
    rockPaperScissorsBtn.addEventListener("click", () => {
        togglerockPaperScissors();

        toggleNav("rockPaperScissors");
    });
    showNav();
})();
