var MakeTina = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.$node.prepend('<img width=550 height=550 src="images/tina.gif" />');
  this.$node.css({
    "border": 0,
    "height": 0,
    "width": 0
	});
};
  MakeTina.prototype = Object.create(MakeDancer.prototype);
  MakeTina.prototype.constructor = MakeTina;

  MakeTina.prototype.step = function(){
    MakeDancer.prototype.step.call(this);
    //this.$node.toggle();
  };
