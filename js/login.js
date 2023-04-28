const HIDDEN_CLASSNAME = "hidden";
const USERINFO = "userinfo";
const savedUserInfo = JSON.parse(localStorage.getItem(USERINFO));

(() => {
    const loginForm = document.querySelector(".login");
    const loginInput = document.querySelector(".login input");
    const loginSelect = document.querySelector(".login__select");

    const profileName = document.querySelector(".user_info .profile__name");
    const profileImg = document.querySelector(".user_info .profile__img-icon");
    const main_page = document.querySelector(".contentBox");

    function onLoginSubmit(event) {
        event.preventDefault();
        loginForm.classList.add("hidden");

        const username = loginInput.value;
        const userImg = loginSelect.options[loginSelect.selectedIndex].value;
        localStorage.setItem(USERINFO, JSON.stringify({ username, userImg }));
        paintGreeting({ username, userImg });
        console.log();
    }

    function paintGreeting({ username, userImg }) {
        profileName.innerText = username;
        profileImg.innerHTML = userImg;
        main_page.classList.remove(HIDDEN_CLASSNAME);
    }

    if (savedUserInfo === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    } else {
        paintGreeting(savedUserInfo);
    }
})();
