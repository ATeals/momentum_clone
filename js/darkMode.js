(() => {
    const root = document.documentElement;

    const darkModeBtn = document.querySelector(".darkModeBtn");
    const lightModeBtn = document.querySelector(".lightModeBtn");

    const isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDarkMode) {
        toggleBtn();
        darkMode();
    }

    function toggleBtn() {
        darkModeBtn.classList.toggle(HIDDEN_CLASSNAME);
        lightModeBtn.classList.toggle(HIDDEN_CLASSNAME);
    }

    function darkMode() {
        root.style.setProperty("--BackgroundColor", "#292929");
        root.style.setProperty("--NeumorphismBackgroundColor", "#545454");
        root.style.setProperty("--NeumorphismTopShadowColor", "#323232");
        root.style.setProperty("--NeumorphismbottomShadowColor", "#585858");
        root.style.setProperty("--FontColor", "#ffffff");
        root.style.setProperty("--BtnBackgroundColor", "#545454");
    }

    function lightMode() {
        root.style.setProperty("--BackgroundColor", "#e3e7e9");
        root.style.setProperty("--NeumorphismBackgroundColor", "#ffffff");
        root.style.setProperty("--NeumorphismTopShadowColor", "#393939");
        root.style.setProperty("--NeumorphismbottomShadowColor", "#585858");
        root.style.setProperty("--FontColor", "#000000");
        root.style.setProperty("--BtnBackgroundColor", "#ffffff");
    }

    darkModeBtn.addEventListener("click", () => {
        toggleBtn();
        darkMode();
    });
    lightModeBtn.addEventListener("click", () => {
        toggleBtn();
        lightMode();
    });
})();
