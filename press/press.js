let currentPoemIndex = 0;
const POEMS = ['pressure', 'pressing-juice', 'press', 'pressume'];
const container = document.querySelector(".text");

document.querySelector(".next").addEventListener("click", (event) => {
    let currentPoemEl = document.querySelectorAll(`.${POEMS[currentPoemIndex]}`)[0] // [0] because this is a NodeList
    currentPoemEl.style.opacity = 0;

    // then advance to the next poem
    currentPoemIndex = (currentPoemIndex+1) % POEMS.length
    currentPoemEl = document.querySelectorAll(`.${POEMS[currentPoemIndex]}`)[0] // [0] because this is a NodeList
    currentPoemEl.style.opacity = 1;
});
