function isBestFriend(friend1, friend2) {
    if (friend1.name === friend2.friend && friend1.friend === friend2.name) {
        return true;
    }
    return false;
};

const friend1 = { name: "abul", friend: "babul" };
const friend2 = { name: "babul", friend: "abul" };
const bestFriend = isBestFriend(friend1, friend2);
console.log(bestFriend);