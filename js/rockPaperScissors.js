(({ userName, userImg }) => {
    const startMenu = document.querySelector(".rockPaperScissors__start");
    const resultMenu = document.querySelector(".rockPaperScissors__result");

    const replayBtn = resultMenu.querySelector("button");
    const resultItem = resultMenu.querySelector(".rockPaperScissors__result-items");
    const resultText = resultMenu.querySelector(".rockPaperScissors__result-text");

    const items = document.querySelectorAll(".rockPaperScissors__item");
    const robotDisplayItem = document.querySelector(".rockPaperScissors__robot-item");

    const robotItems = [`✊`, `✌️`, `✋`];
    let animaiton;

    function gameStart() {
        animaiton = setInterval(() => {
            robotDisplayItem.innerText = robotItems[Math.floor(Math.random() * robotItems.length)];
        }, 100);
    }

    function gamePlay(item) {
        const robotItem = robotItems[Math.floor(Math.random() * robotItems.length)];
        const playerItem = item.innerText;

        robotDisplayItem.innerText = robotItem;
        checkResult(playerItem, robotItem);
    }

    function checkResult(playerItem, robotItem) {
        if (playerItem === robotItem) {
            resultItem.innerText = `🤖: ${robotItem} ${userImg}: ${playerItem}`;
            resultText.innerText = "Draw";
        } else if ((playerItem === "✊" && robotItem === "✌️") || (playerItem === "✌️" && robotItem === "✋") || (playerItem === "✋" && robotItem === "✊")) {
            resultItem.innerText = `🤖: ${robotItem} ${userImg}: ${playerItem}`;
            resultText.innerText = "Win";
        } else {
            resultItem.innerText = `🤖: ${robotItem} ${userImg}: ${playerItem}`;
            resultText.innerText = "Lose";
        }
    }

    function toggleDisplay() {
        startMenu.classList.toggle(HIDDEN_CLASSNAME);
        resultMenu.classList.toggle(HIDDEN_CLASSNAME);
    }

    items.forEach((item) => {
        item.addEventListener("click", () => {
            clearInterval(animaiton);
            gamePlay(item);
            toggleDisplay();
        });
    });

    replayBtn.addEventListener("click", () => {
        toggleDisplay();
        gameStart();
    });
    gameStart();
})(savedUserInfo);
