(() => {
    const images = ["a.jpg", "b.jpeg", "c.jpeg", "d.jpeg", "e.jpeg", "f.jpeg", "g.jpeg", "h.jpg"];

    const randomItems = [
        {
            quote: "달을 향해 쏘아라, 빗나간다면 별이라도 맞출 것이다.",
            author: "W. Clement Stone",
            img: images[0],
        },
        {
            quote: `세상에서 가장 어리석고 못난 변명은 "시간이 없어서"라는 말이다. `,
            author: "Thomas Alva Edison",
            img: images[1],
        },
        {
            quote: `사실을 직시해라. 걱정을 집어치워라. 해결하기 위해 행동하라.`,
            author: "Dale Carnegle",
            img: images[2],
        },
        {
            quote: "때를 놓치지 말라. 사람들은 이것을 대단치 않게 여기기 때문에 기회가 와도 그것을 잡을 줄 모르고 때가 오지 않는다고 불평만 한다. 기회는 누구에게나 온다.",
            author: "Andrew Carnegle",
            img: images[3],
        },
        {
            quote: "태어날 때 가난한 것은 당신의 잘못이 아니지만, 죽을 때 가난하게 죽는 것은 당신의 잘못이다.",
            author: "Bill Gates",
            img: images[4],
        },
        {
            quote: "내일의 계획은 오늘의 행동에서 나온다.",
            author: "lao tzu",
            img: images[5],
        },
        {
            quote: "아무것도 하지 않으면 의심과 공포가 생긴다. 행동하면 자신감과 용기가 생긴다. 두려움을 정복하고 싶다면 집에 앉아서 생각만 하지 말고 나가서 바쁘게 움직여라.",
            author: "Dale Carnegle",
            img: images[6],
        },
        {
            quote: "실력 차이가 아니라, 시간 차이이다.",
            author: "Kim Mikyung",
            img: images[7],
        },
    ];
    const randoming = document.querySelector(".randoming");

    const author = document.querySelector(".randoming__author");
    const text = document.querySelector(".randoming__text");

    function changeItem() {
        const random = Math.floor(Math.random() * randomItems.length);
        changeText(random);
        changeImg(random);
    }

    function changeImg(random) {
        const img = document.createElement("img");
        img.src = `img/${randomItems[random].img}`;
        randoming.appendChild(img);
    }
    function changeText(random) {
        author.innerText = `-${randomItems[random].author}-`;
        text.innerText = `${randomItems[random].quote}`;
    }

    changeItem();
    setInterval(() => {
        changeItem();
    }, 60000);

    randoming.addEventListener("click", changeItem);
})();
