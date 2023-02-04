function paperRequirements(firstBookQuantity, secondBookQuantity, thirdBookQuantity) {
    const firstBookPages = 100;
    const secondBookPages = 200;
    const thirdBookPages = 300;

    const totalFirstBookPages = firstBookQuantity * firstBookPages;
    const totalSecondBookPages = secondBookQuantity * secondBookPages;
    const totalThirdBookPages = thirdBookQuantity * thirdBookPages;

    const totalPagesRequired = totalFirstBookPages + totalSecondBookPages + totalThirdBookPages;
    return totalPagesRequired;
};

const totalPages = paperRequirements(5, 3, 2);
console.log(totalPages);