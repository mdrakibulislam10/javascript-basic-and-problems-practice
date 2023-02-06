function milliliterToLiter(ml) {
    const lt = ml / 1000; // 1 lt = 1000 ml;
    return lt;
};

const litters = milliliterToLiter(10000);
console.log(litters);