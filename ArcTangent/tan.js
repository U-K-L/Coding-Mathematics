// JavaScript source code
window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

        var arrowx = width/2,
        arrowy = height/2,
        dx,dy, //Difference of the two points.
        theta = 0,
        radius = 200,
        angle = 0;

        var ballx = width/2, bally = height/2;

        renderArrow();
        renderCircleGroup();
        Ball();

        function renderArrow(){
            context.clearRect(0,0, width, height);

            context.save();
            context.translate(arrowx, arrowy);
            context.rotate(angle);

            context.beginPath();
            context.moveTo(30, 0);
            context.lineTo(-30, 0);
            context.moveTo(30,0);
            context.lineTo(15,-15);
            context.moveTo(30,0);
            context.lineTo(15,15);
            context.stroke();


            context.restore();
            requestAnimationFrame(renderArrow);
        }

    function Ball(){
        rad = 15*Math.abs(Math.sin(0.01*theta))+5;
        context.beginPath();
        context.arc(ballx, bally, rad, 0, Math.PI * 2, false);
        context.fill(); //Fills in the ball.

        requestAnimationFrame(Ball);
        }

    function renderCircleGroup() {
        //context.clearRect(0, 0, width, height);
        centerX = width/2;
        centerY = height/2;
        var n = 1000;
        for(var i = 0; i < n; i++){
            x = centerX + radius * Math.cos(theta);
            y = centerY + radius * Math.sin(theta);
            context.beginPath();
            context.arc(x, y, 20, 0, Math.PI * 2, false);

            context.fill(); //Fills in the ball.
            theta += (Math.PI * 2) / n;
        }
        requestAnimationFrame(renderCircleGroup);
    }

        document.addEventListener("mousemove", function(event){
            dx = event.clientX-arrowx;
            dy = event.clientY - arrowy;

            angle = Math.atan2(dy,dx);
            BallTrapped(event);
        });

    function BallTrapped(event){
        //Makes ball go to mouse and stops.
        centerX = width / 2;
        centerY = height / 2;
        var maxrad = 0.82 * radius;
        x = (maxrad) * Math.cos(angle);
        y = (maxrad) * Math.sin(angle);

        var limit = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        var mlimit = Math.sqrt(Math.pow(event.clientX - centerX, 2) + Math.pow(event.clientY - centerY, 2));
        //ballx = (limit-centerX)*(Math.cos(angle))+centerX;
        if (mlimit > limit) {
            ballx = ((limit) * (Math.cos(angle))) + centerX;
            bally = ((limit) * (Math.sin(angle))) + centerY;
        }
        else {
            ballx = event.clientX;
            bally = event.clientY;
        }

    }
}
