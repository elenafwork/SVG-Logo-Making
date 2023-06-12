const {Circle, Square, Triangle, Text}=require('../lib/shapes')


describe('Circle', () =>{
    describe('for Circle', ()=> {
        it('should return Circle description line', () =>{
            
            const circle=new Circle('blue','elena');
            expect(circle.render()).toEqual("<circle cx='100' cy='100' r='100' style='stroke: none; fill: blue'/>")
        })
    })
})

describe('Square', () =>{
    describe('for Square', ()=> {
        it('should return Square description line', () =>{
            
            const square=new Square('blue','elena');
            expect(square.render()).toEqual("<rect x='0' y='0' height='200' width='200' style='stroke: none; fill: blue'/>")
        })
    })
})

describe('Triangle', () =>{
    describe('for Triangle', ()=> {
        it('should return Triangle description line', () =>{
            
            const triangle=new Triangle('blue');
            expect(triangle.render()).toEqual("<polygon points='100,0 200,180 0,180' style='stroke: none; fill: blue'/>")
        })
    })
})

describe('Text', () =>{
    describe('for Text', ()=> {
        it('should return Text description line for triangle shape', () =>{
            
            const text=new Text('elena','Arial', 'blue', 'Triangle');
            expect(text.render()).toEqual("<text x='60' y='170' textLength='80' lengthAdjust='spacingAndGlyphs' style='font: 150px Arial;stroke: black; fill: blue'>elena</text>")
        })
    })
})


describe('Text', () =>{
    describe('for Text', ()=> {
        it('should return Text description line for Square shape', () =>{
            
            const text=new Text('elena','Arial', 'blue', 'Square');
            expect(text.render()).toEqual("<text x='30' y='150' textLength='140' lengthAdjust='spacingAndGlyphs' style='font: 150px Arial;stroke: black; fill: blue'>elena</text>")
        })
    })
})

describe('Text', () =>{
    describe('for Text', ()=> {
        it('should return Text description line for Circle shape', () =>{
            
            const text=new Text('EF', 'Arial','red', 'Circle');
            expect(text.render()).toEqual("<text x='30' y='150' textLength='140' lengthAdjust='spacingAndGlyphs' style='font: 150px Arial;stroke: black; fill: red'>EF</text>")
        })
    })
})