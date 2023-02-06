function countNum(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number > 5) {
            // count = count + 1;
            // count += 1;
            count++;
        }
    }
    return count;
};

const above5 = countNum([-1, 2, 20, 24, -3, 4, 5, 6, -7, 8, -9, 10]);
console.log(above5);