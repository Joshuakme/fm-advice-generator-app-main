// Constants
const api_address = "https://api.adviceslip.com/advice";
let id = 0;
let quote = "";

// Elements
const title = document.getElementsByTagName("h1")[0];
const quoteText = document.getElementById("quoteTxt");
const loadingRing = document.getElementsByClassName("lds-ring")[0];
const diceBtn = document.getElementById("dice");

// Event Listeners
diceBtn.addEventListener("click", async () => {
  startLoading();

  const res = await fetch(api_address);
  const data = await res.json();
  stopLoading();

  id = data.slip.id;
  quote = data.slip.advice;

  title.innerText = `ADVICE # ${id}`;
  quoteText.innerText = `${quote}`;
});

// Functions
function startLoading() {
  quoteText.style.display = "none";
  loadingRing.style.display = "inline-block";
}

function stopLoading() {
  loadingRing.style.display = "none";
  quoteText.style.display = "block";
}
