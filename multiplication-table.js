function multiplicationTable(num) {
    const results = [];
    for (let i = 1; i <= 10; i++) {
        const multiply = i * num;
        results.push(num + "X" + i + "=" + multiply);
    }
    const result = results.join(", ");
    return result;
};

const result = multiplicationTable(3);
console.log(result);