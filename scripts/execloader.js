loadingScreenLoad();

setTimeout(function () {
  waitForElement("body", 3000).then(function () {
    loadingScreen.style.display = "none";
    singleMult.style.display = "block";

    loadBack("/bgs/ballroom.jpeg", singleMult);
  }).catch(() => {
    console.log("Error: did not load!");
  });
}, 3000);