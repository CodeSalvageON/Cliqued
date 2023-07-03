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

  loadBack("/bgs/lake.jpg", body);
  starterCliques.style.display = "none";
  controlBoard.style.display = "block";
}

function makeFlag (flagName) {
  infoFlag.src = flagName;
}

function makeName (cliqueName) {
  infoName.innerText = cliqueName;
}

function makeCurrentLeader (currentLeaderName) {
  currentLeader.innerText = "Current Leader: " + currentLeaderName;
}

// leaders
const patelLeaders = ["David Patel", "Vivek Shah", "Aaron Pravadi", "Aadi Dark", "Kameron Kimblay", "William Preppie", "Robert Duka", "Chris Sony", "Alexander Graham"];

cSelectOne.onclick = function () { 
  makeClique("r-c");
  makeFlag("/flags/returnees/returnees.PNG");
  makeName("Returnees");
  makeCurrentLeader("You!");
}
cSelectTwo.onclick = function () { 
  makeClique("pc-c"); 
  makeFlag("/flags/patel-cluster/patel-cluster.PNG");
  makeName("Patel Cluster");
  makeCurrentLeader(patelLeaders[0]);
}
cSelectThree.onclick = function () {
  makeClique("l-c");
  makeFlag("/flags/lakehouse/lakehouse.PNG");
  makeName("Lakehouse");
  makeCurrentLeader("Nathan Priest");
}
cSelectFour.onclick = function () {
  makeClique("w-c");
  makeFlag("/flags/waders/waders.PNG");
  makeName("Waders");
  makeCurrentLeader("Simon Sheppard");
}
cSelectFive.onclick = function () {
  makeClique("bc-c");
  makeFlag("/flags/band-club/band-club.PNG");
  makeName("Band Club");
  makeCurrentLeader("Jared Cook");
}
cSelectSix.onclick = function () { 
  makeClique("ditr-c"); 
  makeFlag("/flags/diamonds-in-the-rough/diamonds-in-the-rough.PNG");
  makeName("Diamonds in the Rough");
  makeCurrentLeader("Ashley Nowak");
}
cSelectSeven.onclick = function () {
  makeClique("tw-c"); 
  makeFlag("/flags/twin-wrecks/twin-wrecks.PNG");
  makeName("Twin Wrecks");
  makeCurrentLeader("Matthew Alky");
}
cSelectEight.onclick = function () {
  makeClique("e-c"); 
  makeFlag("/flags/elites/elites.PNG");
  makeName("Elites");
  makeCurrentLeader("...?");
}