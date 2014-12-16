var MakeGene = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.prepend('<img width=500 height=500 src="images/gene.gif" />');
  this.$node.css({
    "border": 0,
    "height": 0,
    "width": 0
    });
};
  MakeGene.prototype = Object.create(MakeDancer.prototype);
  MakeGene.prototype.constructor = MakeGene;

  MakeGene.prototype.step = function(){
    MakeDancer.prototype.step.call(this);
    //this.$node.toggle();
  };
