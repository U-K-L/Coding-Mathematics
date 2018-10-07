var vector = {
    
    _x: 0,
    _y: 0,

    create: function(x,y){
        var obj = Object.create(this);
        obj.setX(x);
        obj.setY(y);
        return obj;
    },

    setX: function(value){
        this._x = value;
    },

    getX: function(){
        return this._x;
    },

    setY: function(value){
        this._y = value;
    },

    getY: function(){
        return this._y;
    },

    setAngle: function(value){
        var angle = value;
        this._x = this.getLength() * Math.cos(angle);
        this._y = this.getLength() * Math.sin(angle);
    },

    getAngle: function(){
        return Math.atan2(this._y, this._x);
    },

    getLength: function(){
        var length = Math.sqrt(Math.pow(this._x, 2) + Math.pow(this._y, 2));
        return length;
    },

    setLength: function(length){
        var angle = this.getAngle();
        this._x = length * Math.cos(angle);
        this._y = length * Math.sin(angle);
    },

    add: function(v2){
        return vector.create(this._x + v2.getX(), v2.getY() + this._y);

    },

    substract: function(v2){
        return vector.create(this._x - v2.getX(), this._y - v2.getY());
    },

    scale: function(val){
        return vector.create(val * this._x, val * this._y);
    },

    shrink: function (val) {
        return vector.create(val / this._x, val / this._y);
    },

    addTo: function(v2){
        this._x += v2.getX();
        this._y += v2.getY();
    },

    subtractFrom: function (v2) {
        this._x -= v2.getX();
        this._y -= v2.getY();
    },

    multiplyBy: function (val) {
        this._x *= val;
        this._y *= val;
    },

    divideBy: function (val) {
        this._x /= val;
        this._y /= val;
    },
};