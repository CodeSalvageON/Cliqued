const cSelectOne = document.getElementById("returnees-init");
const cSelectTwo = document.getElementById("patel-cluster-init");
const cSelectThree = document.getElementById("lakehouse-init");
const cSelectFour = document.getElementById("waders-init");
const cSelectFive = document.getElementById("band-club-init");
const cSelectSix = document.getElementById("diamonds-in-the-rough-init");
const cSelectSeven = document.getElementById("twin-wrecks-init");
const cSelectEight = document.getElementById("elites-init");

let cliqueSelected = "";

function makeClique (cliqueName) {
  cliqueSelected = cliqueName;
}

cSelectOne.onclick = makeClique("r-c");
cSelectTwo.onclick = makeClique("pc-c");
cSelectThree.onclick = makeClique("l-c");
cSelectFour.onclick = makeClique("w-c");
cSelectFive.onclick = makeClique("bc-c");
cSelectSix.onclick = makeClique("ditr-c");
cSelectSeven.onclick = makeClique("tw-c");
cSelectEight.onclick = makeClique("e-c");