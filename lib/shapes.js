//classes for different shapes

class Circle {
    constructor( shColor,text){
        //this.shape='circle';
        this.color=shColor;
        this.text=text;
    }
    render(){
        return `<circle cx='100' cy='100' r='100' style='stroke: none; fill: ${this.color}'/>`
    }
}

class Square {
    constructor(shColor,text){
        this.shape='squire';
        this.color=shColor;
        this.text=text;
    }
    render(){
        return `<rect x='0' y='0' height='200' width='200' style='stroke: none; fill: ${this.color}'/>`
    }
}


class Triangle {
    constructor(shColor,text){
        //this.shape='triangle';
        this.color=shColor;
        this.text=text;
    }
    render(){
        return `<polygon points='100,0 200,180 0,180' style='stroke: none; fill: ${this.color}'/>`
    }
}

class Text {
    constructor(text,font, txColor, shape){
       this.text=text;
       this.font=font;
        this.color=txColor;
        this.shape=shape;
    }
    render(){
         if(this.shape=='Circle'){
            return `<text x='30' y='150' textLength='140' lengthAdjust='spacingAndGlyphs' style='font: 150px ${this.font};stroke: black; fill: ${this.color}'>${this.text}</text>`
         } else if(this.shape=='Triangle'){
        return `<text x='60' y='170' textLength='80' lengthAdjust='spacingAndGlyphs' style='font: 150px ${this.font};stroke: black; fill: ${this.color}'>${this.text}</text>`
       } else if(this.shape=='Square'){
        return `<text x='30' y='150' textLength='140' lengthAdjust='spacingAndGlyphs' style='font: 150px ${this.font};stroke: black; fill: ${this.color}'>${this.text}</text>`
       }
}
}

module.exports={
    Circle: Circle,
    Square: Square,
    Triangle: Triangle,
    Text:Text
}