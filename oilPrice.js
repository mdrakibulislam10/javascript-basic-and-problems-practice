function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    const dieselPricePerLitter = 114;
    const petrolPricePerLitter = 130;
    const octanePricePerLitter = 135;

    const dieselPrice = dieselQuantity * dieselPricePerLitter;
    const petrolPrice = petrolQuantity * petrolPricePerLitter;
    const octanePrice = octaneQuantity * octanePricePerLitter;

    const totalPrice = dieselPrice + petrolPrice + octanePrice;
    return totalPrice;
};

const totalPrice = oilPrice(0, 2, 3);
console.log(totalPrice);