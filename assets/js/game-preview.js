const spawn = document.getElementById('spawn');
const destroy = document.getElementById('destroy');

var catImage = new Image(); 
const catImages = ["/assets/images/cat-generator/catImage.png"];
catImage.src = catImages[0];

var backgroundImage = new Image();
const backgroundImages = ["/assets/images/cat-generator/space.png"];
backgroundImage.src = backgroundImages[0];

var catWidth = catImage.naturalWidth/6.5;
var catHeight = catImage.naturalHeight/6.5;

/*const catImg = document.getElementById('catImg');
const catImg1 = document.getElementById('catImg1');
const catImg2 = document.getElementById('catImg2');
const catImg3 = document.getElementById('catImg3');

const space = document.getElementById('space');
const sky = document.getElementById('sky');
const city = document.getElementById('city');
const snowy = document.getElementById('snowy');

var rangeslider = document.getElementById("sliderRange");
rangeslider.value = "5.5";*/
var catSpeed = 2.75;


function cat(x, y, xDir, yDir) {
    this.x = x;
    this.y = y;
    this.width = catWidth;
    this.height = catHeight;
    this.xDir = -1 * xDir * catSpeed;
	this.yDir = -1 * yDir * catSpeed;
}

cat.prototype.update = function () {
    if( this.y <= 0 || this.y+this.height*1.2 >= game.gameFieldHeight()) {
        this.yDir *= -1;
		while(this.y <= 0 || this.y+this.height*1.2 >= game.gameFieldHeight()) {
			this.y += this.yDir;
		}
    }
	if( this.x <= 0 || this.x+this.width*1.2 >= game.gameFieldWidth()) {
        this.xDir *= -1;
		while(this.x <= 0 || this.x+this.width*1.2 >= game.gameFieldWidth()) {
			this.x += this.xDir;
		}
    }
};


var renderer = (function () {

    function _drawcat(context, cat) {
        context.drawImage(catImage,cat.x,cat.y,catWidth*1.2,catHeight*1.2);
    }

    function _render() {
        var canvas = document.getElementById("game-layer");
        var context = canvas.getContext("2d");

        /*context.fillStyle = "pink";
        context.fillRect(0, 0, canvas.width, canvas.height);*/
		context.drawImage(backgroundImage,0,0,canvas.width, canvas.height);

        var i,
            entity,
            entities = game.entities();

        for (i=0; i < entities.length; i++) {
            entity = entities[i];
			_drawcat(context, entity);
        }
    }

    return {
        render: _render
    };

})();


var physics = (function () {

    function _update() {
        var i, j, k, m, entities = game.entities();

		// move cats based on x,y Dirs
        for( i=0; i<entities.length; i++) {
            entities[i].y += entities[i].yDir;
			entities[i].x += entities[i].xDir;
        }
		
		// check for collisions
		for(j=0; j<entities.length; j++){
			for(k=0;k<entities.length;k++){
				if(k > j){
						if(entities[j].x < entities[k].x + entities[k].width && entities[j].x + entities[j].width > entities[k].x && entities[j].y < entities[k].y + entities[k].height && entities[j].height + entities[j].y > entities[k].y){
							entities[j].xDir *= -1;
							entities[j].x += entities[j].xDir * 2;
							entities[j].yDir *= -1;
							entities[j].y += entities[j].yDir * 2;
							entities[k].xDir *= -1;
							entities[k].x += entities[k].xDir * 2;
							entities[k].yDir *= -1;
							entities[k].y += entities[k].yDir * 2;
						}
				}
			}
		}
		
		/*rangeslider.oninput = function() {
			catSpeed = this.value * 0.5;
			for(m=0; m<entities.length; m++){
				if(entities[m].yDir < 0){
					entities[m].yDir = -1 * catSpeed;
				}
				else{
					entities[m].yDir = 1 * catSpeed;
				}
				if(entities[m].xDir < 0){
					entities[m].xDir = -1 * catSpeed;
				}
				else{
					entities[m].xDir = 1 * catSpeed;
				}
			}
		}*/
    }

    return {
        update: _update
    };

})();


var game = (function () {
	var _gameFieldHeight = 340;
	var _gameFieldWidth = 450;
    var _entities = [];

    function _start() {
        _entities.push(new cat(Math.floor(Math.random() * (_gameFieldWidth - catWidth)), Math.floor(Math.random() * (_gameFieldHeight - catHeight)),1,1));

        window.requestAnimationFrame(this.update.bind(this));
    }

    function _update() {
        physics.update();

        var i;
        for( i=0; i<_entities.length; i++) {
            _entities[i].update();
        }

        renderer.render();

        window.requestAnimationFrame(this.update.bind(this));
    }
	
	spawn.addEventListener('click', () => {
		if(_entities.length < 8){
			var collision = false;
			do {
				collision = false;
				var randomX = Math.floor(Math.random() * (_gameFieldWidth - catWidth));
				var randomY = Math.floor(Math.random() * (_gameFieldHeight - catHeight));
				for(var i = 0; i<_entities.length; i++){
					if(_entities[i].x < randomX + catWidth && _entities[i].x + _entities[i].width > randomX && _entities[i].y < randomY + catHeight && _entities[i].height + _entities[i].y > randomY) {
						collision = true;
					}
				}
			} while (collision);
			
			if(_entities.length % 4 == 0) {
				_entities.push(new cat(randomX, randomY, 1, 1));
			}
			else if(_entities.length % 4 == 1) {
				_entities.push(new cat(randomX, randomY, -1, 1));
			}
			else if(_entities.length % 4 == 2) {
				_entities.push(new cat(randomX, randomY, 1, -1));
			}
			else {
				_entities.push(new cat(randomX, randomY, -1, -1));
			}
		}
	})
	
	destroy.addEventListener('click', () => {
		if(_entities.length > 0){
			_entities.pop();
		}
	})
	
	/*catImg.addEventListener('click', () => {
		catImage.src = catImages[0];
	})
	
	catImg1.addEventListener('click', () => {
		catImage.src = catImages[1];
	})
	
	catImg2.addEventListener('click', () => {
		catImage.src = catImages[2];
	})
	
	catImg3.addEventListener('click', () => {
		catImage.src = catImages[3];
	})
	
	space.addEventListener('click', () => {
		backgroundImage.src = backgroundImages[0];
	})
	
	sky.addEventListener('click', () => {
		backgroundImage.src = backgroundImages[1];
	})
	
	city.addEventListener('click', () => {
		backgroundImage.src = backgroundImages[2];
	})
	
	snowy.addEventListener('click', () => {
		backgroundImage.src = backgroundImages[3];
	})*/

    return {
        start: _start,
        update: _update,
		entities: function () { return _entities; },
		gameFieldWidth: function () { return _gameFieldWidth; },
        gameFieldHeight: function () { return _gameFieldHeight; }
    };

})();


game.start();
