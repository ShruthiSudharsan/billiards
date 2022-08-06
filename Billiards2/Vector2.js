function Vector2(x, y)
{
    //this.x is equal if the type of the x argument is different from undefined and in this case it will be equal to the value fo the x argument otherwise it will be equal to 0; the same thing applies to this.y but with the y argument
    this.x = typeof x !== 'undefined' ? x:0;
    this.y = typeof y !== 'undefined' ? y:0;
}