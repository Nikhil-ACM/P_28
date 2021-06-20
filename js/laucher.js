class launcher
{
    constructor(body,point){
        var options = {
            bodyA :body, 
            pointB : point ,
            stiffness : 0.004

        }
        this.pointB = point
      this.launcher = Constraint.create(options)
      World.add(world,this.launcher)
    }
    fly(){
        this.launcher.bodyA = null;
    }
    attach(body){
        this.launcher.bodyA = body
    }
    
    display(){
        if(this.launcher.bodyA){      
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}