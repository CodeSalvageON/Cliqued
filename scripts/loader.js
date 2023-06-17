const body = document.body;
const loadingScreen = document.getElementById("loading-screen");

function loadBack (backSrc, elem) {
  let newImg = new Image();

  newImg.onload = function () {
    elem.style.backgroundImage = "url('" + newImg.src + "')";
  }
  newImg.src = backSrc;
}

function loadingScreenLoad () {
  loadingScreen.style.display = "block";
}

const randomImageNum = Math.floor(Math.random() * 6) + 1;
loadBack("/loading/" + String(randomImageNum) + ".jpeg", loadingScreen);

setInterval(function () {
  const randomImageNum = Math.floor(Math.random() * 6) + 1;
  loadBack("/loading/" + String(randomImageNum) + ".jpeg", loadingScreen);
}, 15000);