const {Circle, Square, Triangle, Text}=require('../lib/shapes');

function shapeUsed(data){
    let shape=data.shape;
    const color=data.shColor;
    if (shape=='Circle'){
        const circle=new Circle(color)
        return circle.render(color)
    } else if(shape=='Triangle'){
        const triangle=new Triangle(color);
        return triangle.render(color)
    } else if(shape=='Square'){
        const square=new Square(color);
        return square.render(color)
    }
}

function textUsed(data){
    const text=data.text;
    const font=data.font;
    const shape=data.shape;
    const txColor=data.txColor;
    const textLogo=new Text(text, font, txColor, shape);
    return textLogo.render(data)
}

function svgGenerator(data){
    return `
    <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    ${shapeUsed(data)}
    ${textUsed(data)}
    </svg>`

}
 module.exports=svgGenerator;