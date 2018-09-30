let answer1 = prompt("Введите свой ход");
let answer2 = prompt("Введите свой ход");

if(answer1 == "scissors" && (answer2 == "paper" || answer2 == "rock")) {
    (answer2 == "paper") ? alert("User1 winner") : alert("User2 winner");
} else if(answer1 == "rock" && (answer2 == "paper" || answer2 == "scissors")) {
    (answer2 == "paper") ? alert("User2 winner") : alert("User1 winner");
} else if(answer1 == "paper" && (answer2 == "scissors" || answer2 == "rock")){
    (answer2 == "scissors") ? alert("User1 winner") : alert("User1 winner");
} else if(answer1 == answer2){
    answer1 = prompt("Введите свой ход");
    answer2 = prompt("Введите свой ход");
}