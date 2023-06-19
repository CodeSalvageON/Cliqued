const body = document.body;
const loadingScreen = document.getElementById("loading-screen");
const singleMult = document.getElementById("single-multie");

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

function waitForElement(querySelector, timeout){
  return new Promise((resolve, reject)=>{
    var timer = false;
    if(document.querySelectorAll(querySelector).length) return resolve();
    const observer = new MutationObserver(()=>{
      if(document.querySelectorAll(querySelector).length){
        observer.disconnect();
        if(timer !== false) clearTimeout(timer);
        return resolve();
      }
    });
    observer.observe(document.body, {
      childList: true, 
      subtree: true
    });
    if(timeout) timer = setTimeout(()=>{
      observer.disconnect();
      reject();
    }, timeout);
  });
}

const randomImageNum = Math.floor(Math.random() * 6) + 1;
loadBack("/loading/" + String(randomImageNum) + ".jpg", loadingScreen);

setInterval(function () {
  const randomImageNum = Math.floor(Math.random() * 6) + 1;
  loadBack("/loading/" + String(randomImageNum) + ".jpg", loadingScreen);
}, 10000);