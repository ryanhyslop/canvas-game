var Bullet = function(game, alternate){

	this.game = game;
	
	game.bullet.push(this);

	this.player = game.player;

	var bullet = this;
	
	if(alternate){
		this.x = this.player.x + 30;

		this.y = this.player.y + 65;
	} else {
		this.x = this.player.x +  105;

		this.y = this.player.y + 66;	
	}
	this.Width = 2;

	this.Height = 5;

	
}

Bullet.prototype.update = function() {
	this.y -= 1
}

Bullet.prototype.draw = function (){
		this.game.drawRectangle('#f00', this.x, this.y, this.Width, this.Height);
}