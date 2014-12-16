// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
};

  MakeDancer.prototype.step = function(){
    var that = this;
    setTimeout(function() {that.step();}, this.timeBetweenSteps);
  };

  MakeDancer.prototype.setPosition = function(top, left){
    var styleSettings = {
      top : top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  MakeDancer.prototype.lineUp = function(top, left) {
    var random = Math.random() * 700;
    var newStyle = {
      top : random,
      left: 200
    };
    this.$node.css(newStyle);
  };
