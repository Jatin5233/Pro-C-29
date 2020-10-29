class Gate{
    constructor(){
        var options={
            'isStatic':true
        }
        this.image=loadImage("gateway.png");
        this.body=Bodies.rectangle(580,340,274,350,options);
        this.width=274;
        this.height=350;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
    rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}