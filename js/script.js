
let money = prompt("Сколько у вас с собой есть денег?");
let countApple = prompt("Сколько вы купили яблок?");
let countBread = prompt("Сколько вы купили батонов хлеба?");
let costOfApple = +prompt("Сколько стоит одно яблоко?") * + countApple;
let costOfBread = +prompt("Сколько стоит один батон хлеба?") * +countBread;
if(money > costOfApple+costOfBread) alert(true);
else alert(false);