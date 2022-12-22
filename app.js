function obse(str) {
  var chars = str.split("");
  var length = chars.length;
  var half = length / 2;
  for (var i = 0; i < half; i++) {
    var temp = chars[i];
    var mirror = length - i - 1;
    chars[i] = chars[mirror];
    chars[mirror] = temp;
  }
  return chars.join("");
}

console.log(obse("Привет"));
console.log(obse("Привет, как дела"));

function arf (...args) {
  let num = args.reduce ((total, num) => total + num, 0)
  let result = num / args.length;
  return result
}

console.log(arf(32,34.5,34,34,33,35,35));
