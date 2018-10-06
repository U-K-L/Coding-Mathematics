// JavaScript source code
window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

        context.translate(0, 0);

    //graphSinCos(context);
    //parabola(context, width, height);
    //graphCos(context);
    //graphSin(context);
    //graphTan(context);
    createBall(context, width, height);

    /*
    //Get a point.
    context.beginPath(); //Start the path.
    var x = 0;
    var y = Math.pow(x,2)*10;
    context.moveTo(x-width,y);
    context.lineTo(width,y);
    context.stroke();
    */



    //Graph any 

    /*
    //Get tangent slope equation of all points tangent.
    //Equation is:
    //Y = F'(X)[x1,x2]F(X)
    //where x1 is the actual input.
    //And x2 is the input of original function.
    for (var x = -width; x < width; x += 0.01) {
        
        //var dy = 2 * x; //xp is x prime.
        //var dx = x; //The x value of the function, x2.
        //var fx = Math.pow(x, 2) * 10;
        //var y = dy*dx*dy*x + fx;
        var y = 4*x - 12;

        //LinearLine(context, y, width);
        context.fillRect(x, -y, 3, 3);

    }

*/
}

createBall = function(context, width, height){

    var centerY = height * .5,
    centerX = width *.5,
    offset = height *.4,
    speed = 0.1,
    angle = 0;

    render()

    function render(){
        var y = centerY + Math.sin(angle) * offset;
        var sine = Math.abs(600 * Math.sin(0.1*Math.sin(0.05*angle)*angle  ));

        var cosine = 255*Math.abs(Math.cos(0.5*angle))

        context.fillStyle = "rgba("+cosine+ ",200,"+cosine+",255)";
        context.clearRect(0,0, width, height);
        context.beginPath();
        context.arc(centerX, y, sine, 0, Math.PI*2, false); //Creates an arc at position centerX, Y, and full PI.
        context.fill(); //Fills in the ball.

        angle += speed;

        requestAnimationFrame(render); //This makes it update every frame.
        
    }
}

tangent = function(x,y){

    //Tangent at a point.
    context.beginPath(); //Start the path.
    context.moveTo(0, 200); //Location to begin.
    context.lineTo(width, 200); //Location to travel.
    context.stroke(); //Stroke it!
}

LinearLine = function(context, y, width){

    for (var x = -width; x < width; x += 0.01) {
        context.fillRect(x, -y, 3, 3);
    }
}

parabola = function(context, width, height){
    for (var x = -width; x < width; x += 0.01) {
        var y = Math.pow(x, 2) * 10;
        context.fillRect(x*40, -y, 7, 7);
    }

}

graphSin = function(context){
    for (var theta = - Math.PI*2; theta < Math.PI * 2; theta += 0.01) {

        var x = theta * 300;
        var y = Math.sin(theta) * 300;
        context.fillRect(x, y, 7, 7);

    }
}

    graphCos = function (context) {
        for (var theta = - Math.PI * 2; theta < Math.PI * 2; theta += 0.01) {

            var x = theta * 300;
            var y = Math.cos(theta) * 300;
            context.fillRect(x, y, 7, 7);

        }
    }


graphTan = function (context) {
    for (var theta = - Math.PI * 2; theta < Math.PI * 2; theta += 0.01) {

        var x = theta * 300;
        var y = Math.tan(theta) * 300;
        context.fillRect(x, y, 7, 7);

    }
}
