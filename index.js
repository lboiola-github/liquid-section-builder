const newSection = require('./commands/new-section')
const newSectionSchema = require('./commands/new-section-schema')
const sayHi = require('./commands/greetings')
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const commands = {
    'greet': () => {
        sayHi();
    },
    'new-section': (sectionName) => {
        newSection(sectionName)
    },
    'new-section-schema': (sectionName)=> {
        newSectionSchema(sectionName)
    }
}

commands['greet']()

rl.question('Please, enter a comand: ', (commandInput) => {
    if (commands.hasOwnProperty(commandInput)) {
        rl.question('Enter the section name: ', (sectionInput) => {
            commands[commandInput](sectionInput);
            rl.close();
        });
    } else {
        console.log(`Sorry. "${commandInput}" is not a valid command`)
        rl.close();
    }
});
