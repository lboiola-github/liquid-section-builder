const newSection = require('./commands/new-section')
const newSectionSchema = require('./commands/new-section-schema')
const newSlider = require('./commands/slider')
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
        rl.close()
        newSection(sectionName)
    },
    'new-section-schema': (sectionName)=> {
        rl.close()
        newSectionSchema(sectionName)
    },
    'new-section-slider': (sectionName)=> {
        rl.question('Number of slides: ', (inputSlides) => {
            if (inputSlides <= 10 && inputSlides >= 1) {
                rl.close();
                newSlider(sectionName, inputSlides)
            } else {
                rl.close();
                console.log("WRONG VALUE")
                console.log(`Value must be between 1 and 10!
                // Using 3 slides as default value!`)
                newSlider(sectionName, 3)
            }
        });
    }
}

commands['greet']()

rl.question('Please, enter a comand: ', (commandInput) => {
    if (commands.hasOwnProperty(commandInput)) {
        rl.question('Enter the section name: ', (sectionInput) => {
            commands[commandInput](sectionInput);
            
        });
    } else {
        console.log(`Sorry. "${commandInput}" is not a valid command`)
        rl.close();
    }
});
