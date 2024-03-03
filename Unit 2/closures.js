function player() {
    var name = "Bob";
    var hp = 10;
    var rest = 15;
    return {
    hp: 10,
    name: "Bob",
    rest: 15,
    getname() {
    return name;
    },
    gethp() {
    return hp;
    },
    getrest() {
    return rest;
    },
    };
    }

var game = player();

console.log(game);

console.log(game.gethp());
console.log(game.getname());



var player2 = player();
player2.name = "Mom";
player2.rest1 = 50;
player2.rest2 = 10;
player2.rest3 = 5;


console.log(player2.hp);
console.log(player2.name);
console.log(player2.rest1);

