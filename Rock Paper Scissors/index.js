var stone = document.getElementById("stone");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

// ? score
var player_Score = Document.getElementById("score_a");
var computer_Score = Document.getElementById("score_b");

var player = 0;
var computer = 0;
var in_Game = 0;
var choice;
var computer_Choice;

// ? function to generate a random number
function random_Choice() {
    var random_Choice = Math.floor(Math.random() * 3) + 1;
    computer_Choice = random_Choice; //?defining the variable of the computer choice
}

// ? function for pick option
function pick_Option(e) {
    if (choice == undefined) {
        choice = e;

        if (e == 1) {
            stone.classList = "player";
        } else if (e == 2) {
            paper.classList = "player";
        } else {
            scissor.classList = "player";
        }
        if (computer_Choice == undefined) {
            random_Choice();
            while (computer_Choice == choice) {
                random_Choice();
            }

            if (computer_Choice == 1) {
                stone.classList = "computer";
            } else if (computer_Choice == 2) {
                paper.classList = "computer";
            } else {
                scissors.classList = "computer";
            }
        }
        get_Win(choice.computer_Choice); //? Function to verify if won passing the player choice and the computer choice
    } else {
        alert("Already played!!!");
    }
    in_Game = 0;
}

function get_Win(p, c) {
    //? Verify the player choice and the computer choose to see who won
    if (in_Game == 1) {
        if (p == 1 && c == 2) {
            computer++;
        } else if (p == 1 && c == 3) {
            player++;
        } else if (p == 2 && c == 1) {
            player++;
        } else if (p == 2 && c == 3) {
            computer++;
        } else if (p == 3 && c == 1) {
            computer++;
        } else if (p == 3 && c == 2) {
            player++;
        }

        player_Score.innerHTML = player;
        computer_Score.innerHTML = computer;
    }
}

function new_Game() {
    if (in_Game == 0) {
        in_Game = 1;
        choice = undefined;
        computer_Choice = undefined;

        stone.classList = "";
        paper.classList = "";
        scissors.classList = "";

        player_Score.innerHTML = player;
        computer_Choice.innerHTML = computer;
    }
}
