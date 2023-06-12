const inquirer=require('inquirer');
const fs=require('fs')
const svgGenerator=require('./lib/svgGenerator')
//const jest=require('jest');
console.log('Welcome to SVG Logo Generator!');
console.log('Please, answer the questions below');

// array with the prompt questions
const questions = [
    
    {
        type: 'list',
        message: 'Please, pick a shape',
        choices: ['Triangle', 'Square', 'Circle'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Please, pick a shape color ( word or hexadecimal color code)',
        name: 'shColor'
    },
    {
        type: 'input',
        message: 'Please, write a logo text',
        name: 'text',
        validate: input => {
            if(input.length>3){
                console.error('  Your logo text should not exceed 3 characters. Please enter again');
                 }   else {
                    return true;
                    
                 } 
                 }
    },
     
    {
        type: 'list',
        message: 'Please, pick a logo font',
        choices: ['Arial', 'Helvetica', 'Times New Roman'],
        name: 'font'
    },
    {
        type: 'input',
        message: 'Please, pick the logo message color',
        name: 'txColor'
    }
]

//svg gen function
function svgGenerate(fileName,data){
    fs.writeFile(fileName, data, (err) => {
         err ? console.log(err)
        : console.log('Generated file logo.svg');
        
    })

}

//function for prot questions and user input\
function init(){
    inquirer
         .prompt(questions)
         .then((data) => {
            
            
            console.log('Thank you!');
            //here will be svg gen function
            svgGenerate("./logo.svg", svgGenerator(data))
         })
}
init();

