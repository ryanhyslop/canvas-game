var Player = function(game){
	
	this.game = game;
	this.x = 100;
	this.y = 100;
	this.Width = 10;
	this.Height = 10;
	
    this.ship = new Image();
    this.ship.src = 'ship.png';  
}

Player.prototype.update = function() {
	//this.collideReset();
}

Player.prototype.draw = function (){
	
	this.game.context.drawImage(this.ship,this.x, this.y);  	

}

Player.prototype.collideReset = function(){
	
	if(this.x > game.context_width || this.y > game.context_height ) {
		this.x = 100;
		this.y = 100;
		this.Width += this.Width;
		this.Height += this.Height;			
	}

}

Player.prototype.move = function(dir){

		switch(dir) {
			case 'left' : 
				this.x -= 5;
			break;
			case 'up' :
				this.y -= 5;
			break;
			case 'right' :
				this.x += 5;
			break;
			case 'down' :
				this.y += 5;
			break;
		}
}

Player.prototype.fire = function(){
	if(this.game.bullet.length % 2){
		new Bullet(this.game, false);
	} else {
		new Bullet(this.game, true);
	}
	
	new Baddy(this.game);
}