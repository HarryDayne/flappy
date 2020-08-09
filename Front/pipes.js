class pipes
{
    constructor()// same thing but for the pipes
    {
        this.width=100;
        this.height=200;
        this.vx=-10;
        this.y=100;
        this.x=innerWidth;
    }
    ShowAndMove()
    {
        if(this.x<=-100)//controls the new pipes
        {
            this.x=innerWidth;
            this.y=(Math.floor((Math.random() * 10) + 1))*100;//random production
            this.y=constrain(this.y,200,700);//constrains for the pipes these need some serious tweaking
        }
        rect(this.x,this.y,this.width,this.height);
        this.x+=this.vx;
    }
}