//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .85

score = document.querySelectorAll(`#score div`)

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




//week 2 creating the players

//in the game file declare an array called player



//add a new Player() to the 0 and 1 Indexes of the player array




//player 1/first player



//player 2/second player



//give the players a paddle by setting the pad property to new Box()


//week 2 - creating an array for the paddles

//add a new array called pad to the game


//player's avatar = paddle

var player1 = new Player()
var player2 = new Player()

var player = [player1, player2]
var pad = []

//first player paddle
player[0].pad = new Box()

//second player paddle
player[1].pad = new Box()

//first player score
player[0].score = 0

//second player score
player[1].score = 0

//set pad 0 equal to player 0 pad property
//this is for first player
pad[0] = player[0].pad

//set pad 1 equal to player 1 pad property
//this is for second player
pad[1] = player[1].pad

//first player
//set values for w, h, and x properties
pad[0].w = 20
pad[0].h = 150
pad[0].x = 0 + pad[0].w/2

//second player
//set values for w, h, x, and dir properties
pad[1].w = 20
pad[1].h = 150
pad[1].x = c.width - pad[1].w/2
pad[1].dir = -1


//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -2
ball.vy = -2
ball.color = `black`





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

        player[1].score++

        //console.log("Second Player Score: " + player1.score)

        //console.log("text")

        console.log(player1.score + " | " + player0.score)
        

        //player 1/first player
        //var player0 = player[0]
        //player0.pad = new Box()
    }

    if(ball.x > 800)
    {
        ball.x = c.width/2;
        ball.y = c.height/2;

        player[0].score++
        
        //console.log("First Player Score: " + player0.score)

        //console.log("text")

        console.log(player0.score + " | " + player1.score)
        
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
    p1.draw();

    //in the main animation loop at the end where the boxes are drawn

    //use a for loop to update each div's inner text to show each player's score

    
    
    for (let i = 0; i < player.length; i++)
    {
        score[i].innerText = player[i].score
    }
    

    
    ball.draw()

    
    
}
