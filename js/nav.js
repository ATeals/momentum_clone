(() => {
    const todoBtn = document.querySelector(".todoBtn");
    const shortcutBtn = document.querySelector(".shortcutBtn");
    const randomingBtn = document.querySelector(".randomingBtn");
    const rockPaperScissorsBtn = document.querySelector(".rockPaperScissorsBtn");
    const timerBtn = document.querySelector(".timerBtn");

    const PUSH_CLASSNAME = "neumorphism-push";

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

    timerBtn.addEventListener("click", toggleTimer);
    todoBtn.addEventListener("click", toggleTodo);
    shortcutBtn.addEventListener("click", toggleShortcut);
    randomingBtn.addEventListener("click", toggleRandoming);
    rockPaperScissorsBtn.addEventListener("click", togglerockPaperScissors);
})();
