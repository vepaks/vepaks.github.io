


const greetingContainer = document.querySelector("#greeting-container"),
  greetingTextInSiteBubble = document.querySelector("#greeting"),
  copyBtn = document.querySelector("#copy"),
  newGreetingBtn = document.querySelector("#new-greeting"),
  loaderSpinner = document.querySelector('#loader');

let allGreetingsFromServer = [];
function showLoadingSpinner() {
  loaderSpinner.hidden = false;
  greetingContainer.hidden = true;
}
function hideLoadingSpinner() {
  greetingContainer.hidden = false;
  loaderSpinner.hidden = true;
}
function showRandomGreetingFromServer() {
  showLoadingSpinner();
  const randomGreetingFromArr =
    allGreetingsFromServer[Math.floor(Math.random() * allGreetingsFromServer.length)];
  //Set greeting, Hide Loader (in randomGreetingFromArr have obj`s with key greeting)
  greetingTextInSiteBubble.textContent = randomGreetingFromArr.greeting;
  hideLoadingSpinner();
}

async function getGreetingsFromServer() {
  showLoadingSpinner();
  const apiURL = "https://greetings-b3650-default-rtdb.firebaseio.com/.json";
  try {
    const response = await fetch(apiURL);
    allGreetingsFromServer = await response.json();
    copyBtn.textContent = 'копирай';
    showRandomGreetingFromServer();
  } catch (err) {
    console.error(err);
    throw new Error();
  }
}
const copyGreetingTextToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(greetingTextInSiteBubble.innerHTML);
    copyBtn.textContent = ':)';
  } catch (err) {
    throw new Error();
  }
};

//Event Listeners
copyBtn.addEventListener('click', copyGreetingTextToClipboard);
newGreetingBtn.addEventListener("click", getGreetingsFromServer);
// On load
getGreetingsFromServer();
