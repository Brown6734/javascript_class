//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .85

//p1 setup
var p1 = new Box();
p1.w = 20
p1.h = 150
p1.x = 0 + p1.w/2

//var p2 = new Box();
//p2.w = 120;
//p2.h = 350;
//p2.x = 0 - p2.w/2;
//p2.x = 50 + p2.w/2;
//p2.color = 'green';

//var p2 = new Box();
//p2.w = 220;
//p2.h = 250;
//p2.vx = 0;
//p2.vy = 0;
//p2.x = 0 + p2.w/2;
//p2.color = `black`;

var p2 = new Box();
p2.w = 20
p2.h = 150
p2.x = c.width - p2.w/2
p2.color = `Maroon`;

//console.log(p2);

//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -2
ball.vy = -2
ball.color = `black`


//week 2 creating the players

//in the game file declare an array called player

var player = []

//add a new Player() to the 0 and 1 Indexes of the player array



player[0] = new Player()


player[1] = new Player()

var player0 = player[0]
player0.pad = new Box()

var player1 = player[1]
player1.pad = new Box()


//give the players a paddle by setting the pad property to new Box()


//week 2 - creating an array for the paddles

//add a new array called pad to the game
var pad_array = []

//player's avatar = paddle
pad_array[0] = player[0].pad

pad_array[1] = player[1].pad







function main()
{
    //erases the canvas
    //p2.draw();
    ctx.clearRect(0,0,c.width,c.height)

    //p2.draw();
    
    //p1 accelerates when key is pressed 
    if(keys[`w`])
    {
       p1.vy += -p1.force
    }

    if(keys[`s`])
    {
        p1.vy += p1.force
    }

    if(keys[`ArrowUp`])
    {
        p2.vy += -p2.force;
    }

    if(keys[`ArrowDown`])
    {
        p2.vy += p2.force;
    }


    //keycodes for javascript:
    //ArrowUp
    //ArrowDown
    //1
    //2


    //applies friction
    p1.vy *= fy
    p2.vy *= fy;
    //player movement
    p1.move();

    p2.move();

    //ball movement
    ball.move()

    //p1 collision
    if(p1.y < 0+p1.h/2)
    {
        p1.y = 0+p1.h/2
    }
    if(p1.y > c.height-p1.h/2)
    {
        p1.y = c.height-p1.h/2
    }

    //p2 collision

    if (p2.y < 0 + p2.h/2)
    {
        p2.y = 0 + p2.h/2;
    }

    if (p2.y > c.height - p2.h/2)
    {
        p2.y = c.height - p2.h/2;
    }

    //ball collision 
    if(ball.x < 0)
    {
        ball.x = c.width/2
        ball.y = c.height/2
    }

    if(ball.x > 800)
    {
        ball.x = c.width/2;
        ball.y = c.height/2;
    }

    if(ball.x > c.width)
    {
        ball.x = c.width
        ball.vx = -ball.vx
    }
    if(ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
       
    }

    //p1 with ball collision
    if(ball.collide(p1))
    {
        ball.x = p1.x + p1.w/2 + ball.w/2
        ball.vx = -ball.vx;
    }

    //p2 with ball collision

    if (ball.collide(p2))
    {
        ball.x = p2.x - p2.w/2 - ball.w/2;
        ball.vx = -ball.vx;
    }

    //draw the objects
    p2.draw();
    p1.draw()
    
    ball.draw()
    
}
