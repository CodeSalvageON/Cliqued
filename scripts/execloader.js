loadingScreenLoad();

setTimeout(function () {
  waitForElement("body", 3000).then(function () {
    loadingScreen.style.display = "none";
    singleMult.style.display = "block";

    loadBack("/bgs/ballroom.jpeg", body);
  }).catch(() => {
    console.log("Error: did not load!");
  });
}, 3000);

singleButton.onclick = function () {
  loadBack("/bgs/lexington.jpg", body);
  singleMult.style.display = "none";
  starterCliques.style.display = "block";
}