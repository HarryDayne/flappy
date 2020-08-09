function setup()
{
    createCanvas(innerWidth,innerHeight);
    bird=new Bird();
    Pipes=new pipes();
}
function draw()// here is where the main thing happens it is the core file
{
    background(000);
    bird.show();
    bird.move();
    Pipes.ShowAndMove();
    if(Pipes.y==-100)
    {
        Pipes.ShowAndMove();
    }
    if(collideRectCircle(Pipes.x,Pipes.y,Pipes.width,Pipes.height,bird.x,bird.y,bird.r))// this is the hit mech which i have not activated
    {
        //setTimeout(GameCheck(),10000);
    }
    
}
function escapebutton()
{
    eButton=new Clickable();
    eButton.locate(20,20);
    eButton.onPress= function(){
       noLoop();
       alert("Paused");
    }
}
function GameCheck()
{
    alert("hit");
    noLoop();
}
function keyPressed()
{
    if(key== ' ')
    {
        bird.jump();
    }
    if(key== 'k')
    {
        console.log("k is pressed")
        noLoop();
    }
    if(key == 'l')
    {
        loop();
    }
}