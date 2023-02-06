const upNum = ((17 * Math.pow(2, 4) * Math.pow(5, 3) + Math.pow(10, 3) / 5 + Math.pow(2, 3) * 5 + Math.pow(2, 2) * 11) * Math.pow(5, 5) * Math.pow(4, 2) * 2 + Math.pow(2, 7) * Math.pow(5, 2) + Math.cbrt(64) + Math.pow(2, 5) * Math.pow(5, 4));

const downNum = ((Math.pow(5, 3) * Math.pow(2, 2) * Math.sqrt(4)) - `${(Math.pow(2, 4) * 3 / 2) / 2}` * (Math.pow(2, 4) * 5 + 3));

const ans = (upNum / downNum) * 11;

console.log("phone number is:", ans);