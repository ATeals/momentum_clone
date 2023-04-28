function clock() {
    const now = new Date();
    const h = now.getHours(); // 시간(0~23)
    const m = now.getMinutes(); // 분(0~59)
    const s = now.getSeconds(); // 초(0~59)

    // 시계 바늘의 각도 반영

    // 시침(시침은 시와 함께 분의 각도도 고려)
    const degH = h * (360 / 12) + m * (360 / 12 / 60);
    // 분침
    const degM = m * (360 / 60);
    // 초침
    const degS = s * (360 / 60);

    const elementH = document.querySelector(".hour");
    const elementM = document.querySelector(".min");
    const elementS = document.querySelector(".sec");

    elementH.style.transform = `rotate(${degH}deg)`;
    elementM.style.transform = `rotate(${degM}deg)`;
    elementS.style.transform = `rotate(${degS}deg)`;
}

clock();
setInterval(() => {
    clock();
}, 1000);
