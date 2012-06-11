var Baddy = function(game){

	this.game = game;
	
	game.baddies.push(this);
		
	this.Width = 10;
	
	this.Height = 10;
	
	this.y = -10;
	
	this.x = this.randomCoords(0, game.context_width);

}

Baddy.prototype.update = function(i) {
	this.y += 1;
	collider = this.collision();
	if(collider){
		this.game.baddies.splice(i,1);
		this.game.bullet.splice(collider,1);	
	};
}

Baddy.prototype.draw = function (){	
	this.game.drawRectangle('#f00', this.x, this.y, this.Width, this.Height);
}


Baddy.prototype.randomCoords = function(min, max){
	var range = max - min + 1;
	return Math.floor(Math.random()*range+min);
}

Baddy.prototype.collision = function() {
	
	if(this.game.bullet.length){

		for(var i = 0; i < this.game.bullet.length; i++ ) {
				console.log(this.x);
				console.log(this.y);			
			if ((this.x) == (this.game.bullet[i].x) && (this.y) == (this.game.bullet[i].y)) {
		
				var bullet = i;
				return bullet;
			}
		}
	}
}