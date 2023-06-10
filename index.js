const inquirer=require('inquirer');
const fs=require('fs')
//const jest=require('jest');
console.log('Welcome to SVG Logo Generator!');
console.log('Please, answer the questions below');

// array with the prompt questions
const questions = [
    {
        type: 'input',
        message: 'Please, pick a background color',
        name: 'bgColor'
    },
    {
        type: 'list',
        message: 'Please, pick a shape',
        choices: ['Triangle', 'Squire', 'Circle'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Please, pick a chape color',
        name: 'shColor'
    },
    {
        type: 'input',
        message: 'Please, write a logo message',
        name: 'message'
    },
    {
        type: 'input',
        message: 'Please, pick the logo message color',
        name: 'mgColor'
    }
]

//svg gen function
function svgGenerator(fileName,data){
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(error)
        : console.log('success!');
        
    })

}

//function for prot questions and user input\
function init(){
    inquirer
         .prompt(questions)
         .then((data) => {
            console.log(data);
            
            console.log('Thank you!');
            //here will be svg gen function
            //svgGenerator("./userInput.js", data)
         })
}
init();