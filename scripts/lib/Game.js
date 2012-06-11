var Game = function() {

	this.fps = 60;
	
	var canvas = document.getElementById('world');

	this.bullet = [];
	this.baddies = [];

	this.context = canvas.getContext('2d');
	
	this.context_width = canvas.width;
	this.context_height = canvas.height;
	
	this.player = new Player(this);
	
	var game = this;
	
	var gameloop = setInterval(function(){
		
		game.updateAll();
		
		game.drawAll();
		
	}, 1000 / this.fps);
	
	
	window.addEventListener('keydown', function(evt) {  
		var charCode = evt.which
		console.log(charCode);
		/*
			left arrow	 37
			up arrow	 38
			right arrow	 39
			down arrow	 40
		*/
		switch(charCode) {
			
			case 37 : 
				game.player.move('left');
			break;
			
			case 38 :
				game.player.move('up');
			break;
			
			case 39 :
				game.player.move('right');
			break;
			
			case 40 :
				game.player.move('down');
			break;
			
			case 32 :
				game.player.fire();
			break;
			
		
		}
	});	

}



Game.prototype.updateAll = function() {
	
	this.player.update();
	
	// Update Bullet Positions
	if(this.bullet.length){
		
		for(var i = 0; i < this.bullet.length; i++ ) {
			this.bullet[i].update();
		}
	}

	if(this.baddies.length){
		
		for(var i = 0; i < this.baddies.length; i++ ) {
			this.baddies[i].update(i);
		}
	}

}

Game.prototype.drawAll = function(){
	this.drawRectangle('#fff', 0,0, this.context_width, this.context_height);
	this.player.draw();
	
	if(this.bullet.length){
		for(var i = 0; i < this.bullet.length; i++ ) {
			this.bullet[i].draw();
		}
		
	}
	
	if(this.baddies.length){
		for(var i = 0; i < this.baddies.length; i++ ) {
			this.baddies[i].draw();
		}
		
	}	
}

Game.prototype.drawRectangle = function(color, x, y, width, height){
	
	this.context.fillStyle = color;
	this.context.fillRect(x,y,width,height);

}