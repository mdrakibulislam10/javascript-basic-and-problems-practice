function publicBusFare(travelers) {
    // bus and microbus capacity
    const perBusCapacity = 50;
    const perMicrobusCapacity = 11;

    // public bus fare
    const publicBusPerTicketFare = 250; // fare = price;

    // rest travelers after fulfil microbus
    let restTravelersAfterFulfilMicrobus = 0;
    // public bus fare
    let restTravelersPublicBusFare = 0;

    if (travelers >= 50) {
        const restTravelersAfterFulfilBus = travelers % perBusCapacity;

        if (restTravelersAfterFulfilBus >= 11) {
            restTravelersAfterFulfilMicrobus = restTravelersAfterFulfilBus % perMicrobusCapacity;
            restTravelersPublicBusFare = restTravelersAfterFulfilMicrobus * publicBusPerTicketFare;
        }
        else {
            restTravelersPublicBusFare = restTravelersAfterFulfilBus * publicBusPerTicketFare;
        }
    }
    else if (travelers >= 11) {
        restTravelersAfterFulfilMicrobus = travelers % perMicrobusCapacity;
        restTravelersPublicBusFare = restTravelersAfterFulfilMicrobus * publicBusPerTicketFare;
    }
    else {
        return "Minimum 11 travelers are required";
    }

    return restTravelersPublicBusFare;
};

const travelers = 112;
const publicBusTicketFare = publicBusFare(travelers);
console.log("public bus fare for rest travelers:", publicBusTicketFare);