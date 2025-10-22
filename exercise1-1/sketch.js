let circledia = [360,280,200,150];
let colourVals = [60,140,180,255]

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(255);
    for(let i = 0 ; i < circledia.length; i++){
    fill(60,97,colourVals[i])    
    circle(200,200,circledia[i])   

}
    

   
}

function mousePressed(){
    colourVals.unshift (colourVals.pop())
    
}
