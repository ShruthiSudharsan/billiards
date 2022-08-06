// function constructor
function Canvas2D()
{
    this._canvas = document.getElementById('screen');
    this._canvasContext = this._canvas.getContext('2d');
}

//prototype attaches other properties to the instances of the constructor function
Canvas2D.prototype.clear = function()
{
    // underscore tells if something is a function
    // 0, 0 is there to completely clear x and y positions
    this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.length);
}

Canvas2D.prototype.drawImage = function(image, position, origin)
{
    if(!position)
    {
        position = new Vector2();
    }
    if(!origin)
    {
        origin = new Vector2();
    }
    // saves the canvas to current state of context
    this._canvasContext.save();
    this._canvasContext.translate(position.x, position.y);
    this._canvasContext.drawImage(image, -origin.x, -origin.y);
    this._canvasContext.restore();
}

let Canvas = new Canvas2D();

//test
let image = new Image();

image.src = "./assets/spr_background.png";

setTimeout(() => 
{
    Canvas.drawImage(image, {x:0, y:0});
}, 1000); 

