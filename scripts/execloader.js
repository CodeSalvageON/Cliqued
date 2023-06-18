loadingScreenLoad();

setTimeout(function () {
  waitForElement("body", 3000).then(function () {
    loadingScreen.style.display = "none";
  }).catch(() => {
    console.log("Error: did not load!");
  });
}, 3000);