class Box
{
    constructor(x, y, width, height)
    {
        var bodyOptions=
        {
            restitution:1,
            frictionAir:0,
            friction:0.5,
            frictionStatic:0,
            density:1
        }
        
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,this.width,this.height,bodyOptions);
        World.add(world,this.body);
    }

    display()
    {
        rectMode(CENTER);
        noStroke();

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
}