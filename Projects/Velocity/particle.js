var particle = {

    position: null,
    velocity: null,
    gravity: null,

    create: function(x, y, speed, direction, grav ){
        var obj = Object.create(this);
        obj.position = vector.create(x,y);
        obj.velocity = vector.create(0,0);
        obj.velocity.setLength(speed);
        obj.velocity.setAngle(direction);
        obj.gravity = vector.create(0, grav||0);
        return obj;
    },

    accelerate: function(vec){
        this.velocity.addTo(vec);
    },

    getVelocity: function(){
       return this.velocity;
    },

    getPosition: function () {
        return this.position;
    },

    update: function(){
        this.position.addTo(this.velocity);
        this.velocity.addTo(this.gravity);
    },
};