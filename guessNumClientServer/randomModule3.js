let randomModule3 = function(minVal=1,maxVal=10) {
    this.minValue = minVal;
    this.maxValue = maxVal;
}

randomModule3.prototype.setMinMax = function(minVal,maxVal) {
    this.minValue = minVal;
    this.maxValue = maxVal;
}

randomModule3.prototype.getMin = function() {
    return this.minValue;
}
randomModule3.prototype.getMax = function() {
    return this.maxValue;
}

randomModule3.prototype.randomInteger = function() {
    return (Math.floor((Math.random() * (this.getRange()) + this.minValue)));
}
randomModule3.prototype.getRange = function() {
    return (this.maxValue+1-this.minValue);
}

module.exports = randomModule3;