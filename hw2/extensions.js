Array.prototype.random = function(){
    return this[Math.trunc(this.length * Math.random())];
}
