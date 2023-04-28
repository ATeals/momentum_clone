(() => {
    const shortcut = document.querySelector(".shortcut__list");
    const shortcut__node = document.querySelector(".shortcut__node");

    const addshortcutBtn = document.querySelector(".addshortcutBtn");
    const deleteShortcutBtn = document.querySelector(".deleteshortcutBtn");

    const addShortcut = document.querySelector(".addShortcut");
    const addShortcutForm = addShortcut.querySelector("form");
    const createShortcutBtn = addShortcut.querySelector(".create");
    const cancelShortcutBtn = addShortcut.querySelector(".Cancel");

    const SHORTCUT_KEY = "shortcuts";
    let shortcuts = [];

    const savedShortcut = localStorage.getItem(SHORTCUT_KEY);
    if (savedShortcut) {
        const parsedShortcut = JSON.parse(savedShortcut);
        shortcuts = parsedShortcut;
        parsedShortcut.forEach(paintShortcut);
    }

    function saveShortcut() {
        localStorage.setItem(SHORTCUT_KEY, JSON.stringify(shortcuts));
    }

    function paintShortcut(newShortcutObj) {
        const li = document.createElement("li");
        li.classList.add("shortcut__list-item");

        const a = document.createElement("a");
        if (newShortcutObj.url.includes("https://")) a.href = `${newShortcutObj.url}`;
        else a.href = `https://${newShortcutObj.url}`;

        const span = document.createElement("span");
        span.innerText = newShortcutObj.name;
        const img = document.createElement("img");
        img.src = `https://www.google.com/s2/favicons?domain=${newShortcutObj.url}&sz=32`;
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "❌";
        deleteBtn.classList.add("shortCut__deleteBtn");
        deleteBtn.classList.add("opacity");

        li.appendChild(a);
        a.appendChild(img);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        li.setAttribute("id", newShortcutObj.id);

        deleteBtn.addEventListener("click", deleteShortcut);

        shortcut.prepend(li);
    }

    function newShortcut(newShortcutObj) {
        shortcuts.push(newShortcutObj);
        paintShortcut(newShortcutObj);
        saveShortcut();
    }

    function deleteShortcut(e) {
        const div = e.target.parentElement;

        shortcuts = shortcuts.filter((shortcut) => shortcut.id !== parseInt(div.id));
        div.remove();
        saveShortcut();
        e.stopPropagation();
        e.preventDefault();
    }

    function shortcutFormToggle() {
        addShortcut.classList.toggle(HIDDEN_CLASSNAME);
        shortcut.classList.toggle(HIDDEN_CLASSNAME);
    }

    addshortcutBtn.addEventListener("click", shortcutFormToggle);
    cancelShortcutBtn.addEventListener("click", shortcutFormToggle);

    addShortcutForm.addEventListener("submit", (e) => {
        const newShortcutUrl = document.querySelector(".addShortcut__url");
        const newShortcutName = document.querySelector(".addShortcut__name");

        const newShortcutObj = {
            id: Date.now(),
            name: newShortcutName.value,
            url: newShortcutUrl.value,
        };

        console.dir(newShortcutObj);
        newShortcut(newShortcutObj);

        newShortcutUrl.value = "";
        newShortcutName.value = "";

        shortcutFormToggle();
        e.preventDefault();
    });

    deleteShortcutBtn.addEventListener("click", () => {
        const deleteBtn = document.querySelectorAll(".shortCut__deleteBtn");
        deleteBtn.forEach((data) => {
            data.classList.toggle("opacity");
            // console.log(data.classList.toggle("shortCut__deleteBtn"));
        });
    });
})();
