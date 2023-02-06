function radianToDegree(radian) {
    const degree = parseFloat((radian * (180 / Math.PI)).toFixed(2));
    return degree;
};

const radian = 10;
const deg = radianToDegree(radian);
console.log(deg);