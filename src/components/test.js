var d = new Date();
var zenith = d.getHours();

if (zenith >= 0 && zenith <= 12) {
  console.log('a.m.')
} else {
  console.log('p.m.');
}

console.log(zenith);