function GameWorld() 
{
    this.cueball = new Ball(new Vector2(400, 400));
    this.stick = new Stick();

}

// updating the gameworld object
GameWorld.prototype.update = function()
{
    this.cueball.update();
    this.stick.update();
}

GameWorld.prototype.draw = function()
{
    Canvas.drawImage(sprites.background, {x:0, y:0});
    this.cueball.draw();
    this.stick.draw();
}