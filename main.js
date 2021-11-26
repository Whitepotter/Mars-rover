canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
imgs_array = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];

random_number = Math.floor(Math.random()*4);
console.log(random_number);
rover_width = 100;
rover_height = 90;
background_img = imgs_array[random_number];
console.log("background img = " + background_img);
rover_img = "rover.png";
rover_x = 10;
rover_y = 10;

function add(){
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_img;

    rover_imgtag = new Image();
    rover_imgtag.onload = uploadRover;
    rover_imgtag.src = rover_img;
}
function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == '37'){
        Left();
        console.log("Left");

    }
    if (keypressed == '38'){
        Up();
        console.log("up");
        
    }
    if (keypressed == '39'){
        Right();
        console.log("Right");
        
    }
    if (keypressed == '40'){
        Down();
        console.log("Down");
        
    }
}

function Up(){
    if(rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("when up arrow is pressed: x= "+ rover_x +" y= "+ rover_y);
    uploadBackground();
    uploadRover();
    }
}
function Down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        console.log("when down arrow is pressed: x= "+ rover_x +" y= "+ rover_y);
    uploadBackground();
    uploadRover();
    }
}
function Left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("when left arrow is pressed: x= "+ rover_x +" y= "+ rover_y);
    uploadBackground();
    uploadRover();
    }
}
function Right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        console.log("when right arrow is pressed: x= "+ rover_x +" y= "+ rover_y);
    uploadBackground();
    uploadRover();
    }
}