// JavaScript source code
window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

        //context.translate(width/2, height/2);
        var centerX = width/2,
        centerY = height/2,
        radius = 200,
        angle = 0,
        speed = 0.00005,
        x,y;
    var xradius = 600, yradius = 200;
    var xangle = 0, yangle = 0,
    xspeed = .01, yspeed= .02

        //renderChaoticCircle();
        //LissaJousCurve();
        //Circle();
        renderChaoticCircle();
        //Elispe();
        renderCircleGroup();


    function Circle() {
        x = centerX + radius * Math.cos(angle);
        y = centerY + radius * Math.sin(angle);
        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(x, y, 20, 0, Math.PI * 2, false); //Creates an arc at position centerX, Y, and full PI.
        context.fill(); //Fills in the ball.

        angle += speed;
        requestAnimationFrame(Circle);
    }

    function renderCircleGroup() {
        context.clearRect(0, 0, width, height);
        var n = 10;
        for(var i = 0; i < n; i++){
            context.fillStyle = "rgba(" + (Math.random() * 254 + 1) + "," + (Math.random() * 154 + 1) + "," + "255" + ",255)";
            x = centerX + radius * Math.cos(angle);
            y = centerY + radius * Math.sin(angle);
            context.beginPath();
            context.arc(x, y, 20, 0, Math.PI * 2, false);

            context.fill(); //Fills in the ball.
            angle += (Math.PI * 2) / n;
        }
        requestAnimationFrame(renderCircleGroup);
    }

        function renderChaoticCircle(){
            var rad = Math.sqrt(Math.pow(height, 2) + Math.pow(width, 2));
            radius = 300 * Math.abs(Math.cos(speed*10 * angle));
            x = centerX + radius * Math.cos(angle);
            y = centerY + radius * Math.sin(angle);
            context.clearRect(0, 0, width, height);
            context.beginPath();
            context.arc(x, y, 20, 0, Math.PI * 2, false); //Creates an arc at position centerX, Y, and full PI.
            context.fill(); //Fills in the ball.

            angle += speed + Math.abs(Math.sin(speed * angle));
            requestAnimationFrame(renderChaoticCircle);
        }

    function Elispe() {
        var xradius = 600, yradius = 200;
        x = centerX + Math.cos(angle) * xradius;
        y = centerY + Math.sin(angle) * yradius;
        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(x, y, 20, 0, Math.PI * 2, false); //Creates an arc at position centerX, Y, and full PI.
        context.fill(); //Fills in the ball.
        angle += 0.1;
        requestAnimationFrame(Elispe);
    }

    function LissaJousCurve() {
        var xradius = 200, yradius = 400;
        x = centerX + Math.cos(xangle) * xradius;
        y = centerY + Math.sin(yangle) * yradius;
        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(x, y, 20, 0, Math.PI * 2, false); //Creates an arc at position centerX, Y, and full PI.
        context.fill(); //Fills in the ball.
        xangle += xspeed;
        yangle += yspeed;
        requestAnimationFrame(LissaJousCurve);
    }
}
