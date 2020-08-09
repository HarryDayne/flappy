class Bird
{
    constructor()//this is where the core numbers are for the bird
    {
        this.r=75;
        this.x=500;//this is the x of the spawn
        this.y=innerHeight/2;
        this.gravity=0.75;//now see this
        this.vy=0;
    }
    show()
    {
        fill('white');
        ellipse(this.x,this.y,this.r,this.r);
    }
    move() 
    {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, this.r/2, height-(this.r/2));
      
    }
    jump()
    {
        this.vy += -30;//this is the jump value tweaking is required
        if(this.y<=this.r)
        {
          this.vy=0;
        }
    }
}