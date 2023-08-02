//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .85

score = document.querySelectorAll(`#score div`)

//p1 setup



//week 2 cleaning up the code
//in this assignment students will modify their animation loop to utilize for loops for game elements

//use for loops for the paddle movement, collisions, and drawing



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
ball.vx = -3
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
       //p1.vy += -p1.force
       pad[0].vy += -pad[0].force
    }

    if(keys[`s`])
    {
        //p1.vy += p1.force
        pad[0].vy += pad[0].force
    }

    if(keys[`ArrowUp`])
    {
        //p2.vy += -p2.force;
        pad[1].vy += -pad[1].force
    }

    if(keys[`ArrowDown`])
    {
        //p2.vy += p2.force;
        pad[1].vy += pad[1].force
    }


    //keycodes for javascript:
    //ArrowUp
    //ArrowDown
    //1
    //2


    //applies friction


    //use for loops here
    
    for (let i = 0; i < player.length; i ++)
    {
        pad[i].vy *= fy
        pad[i].move()
        //then do ___
        if (pad[i].y > c.height-pad[i].h/2)
        {
            pad[i].y = c.height-pad[i].h/2
        }

        if (pad[i].y < 0+pad[i].h/2)
        {
            pad[i].y = 0+pad[i].h/2
        }
        if (ball.collide(pad[i]))
        {
            //ball.x = (pad[i].x + (pad[i].w/2 + ball.w/2) * pad[i].dir)

            

            ball.x = pad[i].x + (pad[i].w/2 + ball.w/2)
            
            //ball.vx = 3 * pad[i].dir

            ball.vx = -ball.vx
            //ball.vx = pad[i].dir

            /*

            ball.x = p1.x + p1.w/2 + ball.w/2

            ball.vx = - ball.vx

            */

        }
    }
    
    ball.move()

    if (ball.x < 0)
    {
        ball.x = c.width/2
        ball.y = c.height/2

        player[1].score++

        console.log(`${player[0].score} | ${player[1].score}`)

    }

    if (ball.x > c.width-ball.h/2)
    {
        ball.x = c.width/2
        ball.y = c.height/2

        player[0].score++

        console.log(`${player[1].score} | ${player[0].score}`)
    }

    /*
    if (ball.x > c.width)
    {
        ball.x = c.width
        ball.vx = - ball.vx
    }
    */

    if (ball.y < 0+ball.h/2)
    {
        ball.y = 0+ball.h/2
        ball.vy = -ball.vy
    }

    if (ball.y > c.height-ball.h/2)
    {
        ball.y = c.height-ball.h/2

        ball.vy = -ball.vy
    }


    //draw the objects
    //p2.draw();
    //p1.draw();

    //in the main animation loop at the end where the boxes are drawn

    //use a for loop to update each div's inner text to show each player's score

    
    
    for (let i = 0; i < player.length; i++)
    {
        score[i].innerText = player[i].score
        pad[i].draw()
    }
    

    
    ball.draw()

    
    
}
