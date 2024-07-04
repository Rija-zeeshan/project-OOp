#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

//create class
class Person {
    private _personality: string;
    constructor() {
        this._personality = 'Mystery';
    }
    //user input
    userInput(input:string){
        //if else statements
        if (input.includes ('talk to other about yourself openly')){
            this._personality = 'talk happly';
        } else if (input.includes ('keep your word to yourself')) {
            this._personality = 'talk rudes';
        }
    }

    //return function
    get personality() {
        return this._personality
    }
}

//create objects
class Main {
    public async main () {
        const ans = await inquirer.prompt({
            type: 'list',
            name:'choice',
            message: chalk.yellow('tell your behaviour'),
            choices:[
                '1: talk to others about my self.',
                '2: keep quite and dont ask questions'
            ]
        })

        //create a peronal class
        let myPerson = new Person()
        myPerson.userInput(ans.choice);

        console.log(`you are ${myPerson.personality}`)
    }
} 

const myObject = new Main()
myObject.main();

