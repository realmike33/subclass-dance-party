var MakeBreakDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};
  MakeBreakDancer.prototype = Object.create(MakeDancer.prototype);
  MakeBreakDancer.prototype.constructor = MakeBreakDancer;

  MakeBreakDancer.prototype.step = function(){
    MakeDancer.prototype.step.call(this);
    this.$node.toggle();
  };
