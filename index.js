#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { name: "firstVariable",
        type: "number",
        message: "Enter your first number" },
    { name: "secondVariable",
        type: "number",
        message: "Enter your second number" },
    { name: "operator",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "division"],
        message: "choose your operator" },
]);
if (answer.operator === "addition") {
    console.log((answer.firstVariable) + (answer.secondVariable));
}
else if (answer.operator === "subtraction") {
    console.log((answer.firstVariable) - (answer.secondVariable));
}
else if (answer.operator === "multiplication") {
    console.log((answer.firstVariable) * (answer.secondVariable));
}
else if (answer.operator === "division") {
    console.log((answer.firstVariable) / (answer.secondVariable));
}
else {
    console.log("Please select valid operator");
}
