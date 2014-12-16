var MakeLouise = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img class ="dancingImage" width=500 height=500 src="images/Louise.gif" />');
  this.$node.css({
    "border": 0,
    "height": 0,
    "width": 0
    });
};
  MakeLouise.prototype = Object.create(MakeDancer.prototype);
  MakeLouise.prototype.constructor = MakeLouise;

  MakeLouise.prototype.step = function(){
    MakeDancer.prototype.step.call(this);
    //this.$node.toggle();
  };
