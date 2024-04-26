#! /usr/bin/env Node
import inquirer from "inquirer";
let para = await inquirer.prompt([
    {
        name: "paragraph",
        type: "string",
        message: "Enter Your Paragraph"
    }
]);
let answer = para.paragraph.trim().split(" ");
console.log(answer);
console.log(answer.length);
