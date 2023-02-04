function positiveNum(numbers) {
    let positive = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number >= 0) {
            positive.push(number);
        }
        else {
            break;
        }
    }
    return positive;
};

const numbers = [12, 67, 89, 32, 14, -78, 45, -34, -51, 15, -12, 56];
const result = positiveNum(numbers);
console.log(result);