let sprites = {};
let assetsStillLoading = 0;
// made to activate the callback function / make sure images are done loading
function assetsLoadingLoop(callback)
{
    if (assetsStillLoading)
    {
        requestAnimationFrame(assetsLoadingLoop.bind(this, callback))
    }
    else 
    {
        callback();
    }
}
// will also activate callback function after finished loading assets
function loadAssets(callback)
{
    function loadSprite(fileName)
    {
        assetsStillLoading ++;
        let SpriteImage = new Image();
        SpriteImage.src = "./assets/" + fileName;
        SpriteImage.onload = function()
        {
            assetsStillLoading--;
        }
        return SpriteImage;
    }
    sprites.background = loadSprite('spr_background.png');
    sprites.stick = loadSprite('spr_stick.png');
    sprites.cueball = loadSprite('cueball.png');
    assetsLoadingLoop(callback);
}