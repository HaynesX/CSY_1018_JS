var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var lastPressed = false;

var gameStarted = false;



function keyup(event) {
	if (event.keyCode == 37) {
		leftPressed = false;
		lastPressed = 'left';
	}
	if (event.keyCode == 39) {
		rightPressed = false;
		lastPressed = 'right';
	}
	if (event.keyCode == 38) {
		upPressed = false;
		lastPressed = 'up';
	}
	if (event.keyCode == 40) {
		downPressed = false;
		lastPressed = 'down';
	}

	player.character.className = 'character stand ' + lastPressed;
}




function keydown(event) {
	if (event.keyCode == 37) {
		leftPressed = true;
	}
	if (event.keyCode == 39) {
		rightPressed = true;
	}
	if (event.keyCode == 38) {
		upPressed = true;
	}
	if (event.keyCode == 40) {
		downPressed = true;
	}
}





class Player {
	constructor() {
		this.character = document.getElementById('player')
		
	}


	skyCollisionDetection(objectB) {

		if (this.character.offsetTop-1 <= objectB.offsetHeight) {
			return true;	
		}
		else{
			return false;
		}

	}

	grassCollisionDetection(direction) {

		var objectB = window

		if (direction == "left") {
			if (this.character.offsetLeft-1 <= 0) {
				return true;
			}
			else {
				return false;
			}
		}
		else if (direction == "right") {

			if (parseInt(this.character.style.left, 10)+1+this.character.offsetWidth >= objectB.innerWidth) {
				return true;
			}
			else {
				return false;
			}

		}
		else {
			if (parseInt(this.character.style.top, 10)+1+this.character.offsetHeight >= objectB.innerHeight) {
				return true;
			}
			else {
				return false;
			}
		}

	}



	move() {

		var positionLeft = this.character.offsetLeft;
		var positionTop = this.character.offsetTop;

		if (gameStarted == false) {
			return;
		}
		




		if (downPressed) {
			var newTop = positionTop+1;

			if (this.grassCollisionDetection('down') == false) {
				this.character.style.top = newTop + 'px';
			}
	
			if (leftPressed == false) {
				if (rightPressed == false) {
					this.character.className = 'character walk down';
				}
			}
		}


		if (upPressed) {
			var newTop = positionTop-1;

			if (this.skyCollisionDetection(skyElement) == false) {
				this.character.style.top = newTop + 'px';
			}

			
			if (leftPressed == false) {
				if (rightPressed == false) {
					this.character.className = 'character walk up';
				}
			}
		}
		if (leftPressed) {
			var newLeft = positionLeft-1;

			if (this.grassCollisionDetection('left') == false) {
				this.character.style.left = newLeft + 'px';	
			}



	

	
	
			this.character.className = 'character walk left';
		}
		if (rightPressed) {
			var newLeft = positionLeft+1;

			if (this.grassCollisionDetection('right') == false) {
				this.character.style.left = newLeft + 'px';	
			}
			

	
			this.character.className = 'character walk right';
		}
	
	}
	



}



class Spaceship {
	constructor() {
		
	}
}



class Round {
	constructor() {
		
	}
}




class Bomb {
	constructor() {
		
	}
}





function startGame(event) {
	var startElement = document.getElementsByClassName('start')[0];
	startElement.style = "display: none";
	player.character.style = "display: block";
	gameStarted = true;
}





function continuousAnimation() {
	requestAnimationFrame(continuousAnimation);
	player.move();


}






function myLoadFunction() {
	// timeout = setInterval(move, 10);
	player = new Player();

	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);

	skyElement = document.getElementById("sky");

	var element = document.getElementsByClassName('start')[0];
	element.addEventListener('click', startGame);
	continuousAnimation();
}


document.addEventListener('DOMContentLoaded', myLoadFunction);