const adviceNumber = document.querySelector(".number");
const authorName = document.querySelector(".author");

const adviceText = document.querySelector(".advice");
const diceBtn = document.querySelector(".dice");

const url = "https://api.adviceslip.com/advice";

diceBtn.addEventListener("click", getAdvice);

async function getAdvice() {
    const response = await fetch(url);
    const {slip:{id,advice}} = await response.json();
    adviceNumber.innerText = id;
    adviceText.innerText = advice;
}
