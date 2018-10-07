// JavaScript source code
window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

        var particles = [],
        numParticles = 500;

        var radius = 10,
		p1 = particle.create(100, height, 10, -Math.PI / 2, 0),
        accel = vector.create(0.1, 0),
        gravity = vector.create(0, 0.1),
        angle = 0;

        for(var i = 0; i < numParticles; i++){
            particles.push(particle.create(width/2, height-(height/1.1), Math.random()* 4 + 5, Math.random()*Math.PI *2, 0.1 ));
        }

        update();

        function update(){
            context.clearRect(0,0, width, height);
            context.fillStyle = "rgba(0,0,0,255)";
            context.fillRect(0,0, width, height);
            fireWorksColor();
            requestAnimationFrame(update);
        }

       document.addEventListener("click", function(event){
           var x = event.clientX;
           var y = event.clientY;
           particles = []
        for(var i = 0; i < numParticles; i++){
            particles.push(particle.create(x, y, Math.random()* 4 + 5, Math.random()*Math.PI *2, 0.1 ));
        }
       });

        function fireWorksColor(){

            //var y = centerY + Math.sin(angle) * offset;
            var sine = 60 * Math.sin(0.1*Math.sin(0.05*angle)*angle);
            var cosine = 255*Math.abs(Math.cos(0.5*angle))
            for(var i = 0; i < numParticles; i++){
                var p = particles[i];
                context.fillStyle = "rgba("+(Math.random()*254 + 1)+ ","+(Math.random()*254 + 1)+","+(Math.random()*254+1)+",255)";
                context.beginPath();
               
                context.arc(p.position.getX(), p.position.getY(), radius/2, 0, Math.PI *2, false);
                context.fill();
                p.update();
            }
            angle += 0.01;
        }

        function ballFlying(){
            
            p1.accelerate(accel);
            p1.update();

            context.beginPath();
            context.arc(p1.position.getX(), p1.position.getY(), radius, 0, Math.PI *2, false);
            context.fill();

            console.log(p1.getVelocity());
            console.log(p1.getPosition());
        }

        function fireWorks(){
            //context.clearRect(0,0, width, height);
            for(var i = 0; i < numParticles; i++){
                var p = particles[i];
                context.beginPath();
                context.arc(p.position.getX(), p.position.getY(), radius/2, 0, Math.PI *2, false);
                context.fill();

                //p.accelerate(gravity);
                p.update();
            }
        }
};
