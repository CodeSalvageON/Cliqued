const hud_ip = document.getElementById("hud-ip");
const hud_dtype = document.getElementById("hud-dtype");
const hud_battery = document.getElementById("hud-battery");

$.getJSON("https://api.ipify.org?format=json", function(data) {
  hud_ip.innerText = "Your IP: " + data.ip;
});

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  hud_dtype.innerText = "Device Type: Mobile Device or Tablet";
}

else {
  hud_dtype.innerText = "Device Type: Desktop or Laptop";
}

setInterval(function () {
  navigator.getBattery().then(function(battery) {
    const level = battery.level;
    const level_string = String(level * 100);

    hud_battery.innerText = "Energy: " + level_string + "%"
  });
}, 500);