class Dustbin{
    constructor(x, y, width, height){

    var options={
        isStatic:true,
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    this.image=loadImage("sprites/dustbin.png")
    World.add(world,this.body);
    }

    display(){
        var binPos=this.body.position; 
        push();
        translate(binPos.x,binPos.y);
        rect(0,0,this.width,this.height);
        scale(1.4,2.7)
        imageMode(CENTER);
        image(this.image,0,0);
        pop();
        }

    }