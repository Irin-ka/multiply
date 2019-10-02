/*module.exports = function multiply(first, second) {
 /*let number = (Number.parseInt(first)*Number.parseInt(second));
return String(number);

*/
module.exports =function multiply(first, second) {
  let f = first.split('').reverse();
  let s = second.split('').reverse();
  let arr1 = [];

  for (let i = 0; i < f.length; i++) {
    for (let j = 0; j < s.length; j++) {
      let arr2 = f[i] * s[j];
      arr1[i + j] = (arr1[i + j]) ? arr1[i + j] + arr2 : arr2;
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    let a = arr1[i] % 10;
    let b = Math.floor(arr1[i] / 10);
    arr1[i] = a;

    if (arr1[i + 1])
    arr1[i + 1] += b;
    else if (b != 0)
    arr1[i + 1] = b;
  }


  return arr1.reverse().join('');
}

