function bestFriend(friends) {
    let large = friends[0];
    for (let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if (friend.length > large.length) {
            large = friend;
        }
    }
    return large;
};

const friends = ["sofi", "rakib", "sadia", "asraful", "nasir", "masum"];
const largeFriend = bestFriend(friends);
console.log(largeFriend);