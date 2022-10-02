var arr = ["alma", "armud", "banan", "hangman", "sahib", "elxan", "sabir", "nizami"];

var oyun = document.querySelector("#oyun");
var herf = document.querySelector("#herf");
var wans = document.querySelector(".wans");
var button = document.querySelector(".button");

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sec = Math.ceil(Math.random() * 5);
var soz = arr[sec - 1];
var xet = "_";
var say = [];
for (var i = 0; i < soz.length; i++) {
  say.push(xet);
}
var sayy = say.join("");
oyun.innerHTML = sayy;
console.log(sayy);
var sans = 9;
var texminler = [];
window.onkeyup = function (e) {
  if (alphabet.includes(e.key)) {
    for (var i = 0; i < soz.length; i++) {
      if (soz[i] === e.key) {
        sayy = sayy.substring(0, i) + e.key + sayy.substring(i + 1);
        oyun.innerHTML = sayy;
      }
    }
    console.log(sayy);
  } else {
    alert("Herf daxil edin!");
  }
  texminler.push(e.key);
  wans.innerHTML = sans--;
  var t = texminler.join(',')
  herf.innerHTML = t;
  if (oyun.innerHTML === soz) {
    alert("Siz qalibsiniz");
  }
  if (sans === -1) {
    alert("Oyun Bitdi!");
  }
};
button.addEventListener('click', function () {
  window.location.reload();
})