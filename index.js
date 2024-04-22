import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
const { userGuess } = await inquirer.prompt({
    type: "number",
    name: "userGuess",
    message: "Guess the number (between 1 to 10):"
});
if (userGuess === systemGeneratedNo) {
    console.log("congratulation you guessed is right.");
}
else {
    console.log("you guessed wrong number. Better luck next time!");
}
