let startnum = 0;
function setup() {
    createCanvas(1000, 700);
    noFill()
    stroke(255);
    frameRate(10);
}


function draw() 
{
    
    background(25);
    startnum++;
    let num = startnum;
    let angle = PI/2.5;

    textSize(32);
    text(num, width/2, 50);

    translate(width/2, height-200);
    
    while(num != 1) {
        let tmp = map(num, 1, startnum, 1, 8);


        if (isEven(num)) {
            rotate(angle)
        }
        else {
            rotate(-angle);
        }

        console.log(tmp);
        line(0, 0, 0, -tmp);
        translate(0, -tmp);
        num = collitzalgorithm(num);
    }
}


function collitzalgorithm(num) {

    //even
    if (isEven(num)) {
        return num / 2;
    }
    else {
        return 3 * num + 1;
    }
}


function isEven(num) {
    return num % 2 === 0;
}
