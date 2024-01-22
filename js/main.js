
var drone = new Drone();
$(document).ready(function() {
    function isPlaced(drone){
        return drone.get('x') != null  && drone.get('y') != null && drone.get('f') != null;
    }
    // Get the canvas element and its context
    const canvas = document.getElementById('surfaceCanvas');
    const ctx = canvas.getContext('2d');

    // Load the sprite image
    const spriteImage = new Image();
    spriteImage.src = 'public/images/drone-sprite.png'; 

    const spriteWidth = 100;
    const spriteHeight = 100;

    // Draw the sprite on the canvas
    function drawRotated(degrees, x, y, sprite){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.save();
        ctx.translate(canvas.width/2,canvas.height/2);
        ctx.rotate(degrees*Math.PI/180);
        ctx.drawImage(spriteImage,x,y,-spriteWidth/2, -spriteHeight/2);
        ctx.restore();
    }
    $('#placementSaveBtn').click(function() {
        var formData = new FormData(document.querySelector('form'))
        const x = formData.get('inputX');
        const y = formData.get('inputY');
        const direction = formData.get('inputDirection');
        drone.set('x',parseInt(x));
        drone.set('y',parseInt(y))
        drone.set('f',direction.toUpperCase());
        drone.place()
        console.log(drone);
        alert("Drone placed successfully");
        $('#placeModal').modal('hide');
        drawRotated(drone.getRotationAngle(drone.get('f')), drone.get('x'), drone.get('y'), spriteWidth, spriteHeight);
        
    });
    
    $('#moveBtn').on('click', function(e){
        e.preventDefault();
        if (isPlaced(drone)){
            alert(`Drone moved by 1 unit towards ${drone.get('f')}`);
            drone.move();
            console.log(drone);
        }
        else {
            alert('Error invalid command, the drone has not been placed!');
        }
    }); 

    $('#leftBtn').on('click', function(e){
        e.preventDefault();
        if (isPlaced(drone)){
            const oldDirection = drone.get('f');
            drone.left();
            alert(`Drone rotated from ${oldDirection} to ${drone.get('f')}`);
            console.log(drone);
        }
        else {
            alert('Error invalid command, the drone has not been placed!');
        }
    });
    $('#rightBtn').on('click', function(e){
        e.preventDefault();
        if (isPlaced(drone)){
            const oldDirection = drone.get('f');
            drone.right();
            alert(`Drone rotated from ${oldDirection} to ${drone.get('f')}`);
            console.log(drone);
        }
        else {
            alert('Error invalid command, the drone has not been placed!');
        }
    });
    $('#reportBtn').on('click', function(e) {
        e.preventDefault();
        if(isPlaced(drone)){
            alert(drone.report());
        }
        else {
            alert('Error invalid command, the drone has not been placed!');
        }
    });
});

       
        
        
        // function main(){
        //     // gt canvas element and its context
        //     const canvas = document.getElementById('surfaceCanvas');
        //     console.log("********Test1*********")
        //     drone.place(0, 0, 'NORTH');
        //     drone.move();
        //     drone.left();
        //     drone.left();
        //     drone.attack();
        //     drone.report(); // Output: 0,1,SOUTH
    
        //     console.log("********Test2*********")
        //     drone.place(0,0,'NORTH');
        //     drone.left()
        //     drone.report(); // Output: 0,0,WEST
    
        //     console.log("********Test3*********")
        //     drone.place(1,2,'EAST');
        //     drone.move();
        //     drone.move();
        //     drone.left();
        //     drone.move();
        //     drone.attack();
        //     drone.report(); // Output: 3,3,NORTH
        // }
        
        //document.querySelector('body').addEventListener('onload', function(){
            //main()
        //})