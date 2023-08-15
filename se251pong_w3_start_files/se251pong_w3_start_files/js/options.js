/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/

//var something = document query selector
//var options = document.querySelector(`options`)

var options = document.querySelector(`h2`)

//var sides = document.getElementsByClassName(`sides`)

//var sides = document.getElementsByClassName(`sides`)

//var side2 = document.querySelector(`sides`)

var side3 = document.querySelector(`.sides`)



//options.onclick = function(e) {}
/*
options.addEventListener("click", aFun);

function aFun (e)
{
    stuff in here
}

*/

options.addEventListener("click", funShowHide)

function funShowHide(e)
{
    //options.classList.toggle(`hidden`).getElementsByClassName(`sides`)

    //side2.classList.toggle(`hidden`)

    //options.classList.toggle(`hidden`)

    //side2.classList.toggle(`hidden`)
    
    
    
    side3.classList.toggle(`hidden`)
    
    

    //the line above somewhat works - it removes options word from screen - but you can not get it back without refreshing page

    //options.classList.toggle(`hidden`)

    
}






//options.addEventListener("click", optFun)

//function optFun(e)
//{
    //stuff in here
    //make the `sides` div show and hide by using classlist.toggle()
    //to add or remove the `hidden` class



//}


/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/

//select the fill Inputs

//does it mean class "fill"??
//but there are two class "fill" s
//just get it to work first, then figure out how to point it to player 1 or player 2

var fills = document.getElementsByClassName(`fill`)

console.log("fill is: ", fills)

var currentStatus = "8 10 2023. using computer N212B2"
//update
//8 10 2023; using computer N202A6

//i bet I could do:
//fills[0] for player 1

//console.log(fills[1])

//i got the two seperate fill boxes

console.log(fills.length)

for (let i =0; i< fills.length; i++)
{

    fills[i].value = player[i].fill

    fills[i].nextElementSibling.innerHTML = player[i].fill

    fills[i].addEventListener(`input`, oneInput)

    function oneInput(e)
    {
        //oneplayer = e.target.style.color = 'green'
        //how to get color out of input??

        //fill i? input?
        console.log(e)

        console.log(" ")
        console.log("fun stuff please workr")

        console.log(e.target) //which = input fill tag

        oneplayer = e.target

        //console.log(oneplayer)

        player[i].fill = e.target.value

        pad[i].fill = e.target.value

        e.target.nextElementSibling.innerHTML = player[i].fill

        //fills[i] = input value and equal player's fill property??
        //console.log(fills[i])


        


        //console.log("oneplayer ", oneplayer)
    }
}
   

//}





/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/

//select the u inputs
//there are two
//class = "u"

var upKeys = document.getElementsByClassName(`u`)

//console.log(upKeys.length)


for (let i =0; i<upKeys.length; i++)
{

    upKeys[i].addEventListener(`keydown`, changeKeys)

    function changeKeys(e)
    {
        //make the input display the name of the key that was pressed

        //e.target.innerHTML = e.target.value

        //player[0].keys.u = e.target.value

        //upKeys[0].nextElementSibling.innerHTML = e.target
        upKeys[i].value = e.key

        console.log("upkeys 0 is now set: ", upKeys[i])

        //set the player's u key to equal the new value of the input

        player[i].keys.u = e.key

        //set the output to display the player's new u key value

        e.target.nextElementSibling.innerHTML = player[i].keys.u

        //works

        //works!! shows up in textbox

        /*

        <input class="u" type="text" maxlength="1">[object HTMLInputElement]</input>

        */

        //put the value into the textbox??

        //player[0].keys.u.innerHTML = e.target

    }

    //add a focus event listener to the input; `focus`

    upKeys[i].addEventListener(`focus`, funFocus)

    function funFocus(e)
    {
        //if keys `keydown` - current state becomes `pause`

    
        currentState = `pause`
    
    }


}

/*

in this assignment students will make the remaining stroke, down, and straight options function

REMEMBER
the text inputs should pause the game

*/

//classes
//stroke
//d = down
//s = straight

//stroke = player.stroke
//d/down = player keys d
//s/straight = player keys s

var strokes = document.getElementsByClassName(`stroke`)

for (let i=0; i<strokes.length; i++){

    //an `input` event
    //not a `keydown` event
    
    strokes[i].value = player[i].stroke

    strokes[i].nextElementSibling.innerHTML = player[i].stroke

    strokes[i].addEventListener(`input`, changeStroke)

    function changeStroke(e)
    {
        player[i].stroke = e.target.value
        pad[i].stroke = e.target.value

        e.target.nextElementSibling.innerHTML = player[i].stroke


    }


}

//classes
//stroke
//d = down
//s = straight

//stroke = player.stroke
//d/down = player keys d
//s/straight = player keys s

var downs = document.getElementsByClassName(`d`)

for (let i=0; i<downs.length; i++){
    downs[i].addEventListener(`keydown`, changeDown)

    function changeDown(e)
    {
        downs[i].value = e.key

        player[i].keys.d = e.key

        e.target.nextElementSibling.innerHTML = player[i].keys.d


    }

    downs[i].addEventListener(`focus`, downFocus)

    function downFocus(e)
    {
        currentState = `pause`
    }


}

//classes
//stroke
//d = down
//s = straight

//stroke = player.stroke
//d/down = player keys d
//s/straight = player keys s

var straight = document.getElementsByClassName(`s`)

for (let i =0; i<straight.length; i++)
{
    straight[i].addEventListener(`keydown`, changeStraight)

    function changeStraight(e)
    {
        straight[i].value = e.key
        player[i].keys.s = e.key
        e.target.nextElementSibling = player[i].keys.s


    }

    straight[i].addEventListener(`focus`, focusStraight)

    function focusStraight(e)
    {
        currentState = `pause`
    }
}

//Determine a feature of the game that you would like the user to be able to control via an html input
//font (size) of score


//color of canvas
//fill property?
//c.fill ?
//id pong
var ccanvas = document.getElementsByClassName(`ccolor`)

var canvas = document.querySelector(`#pong`)

var body = document.querySelector(`body`)



//for (let i=0; i<ccanvas.length; i++){
    //ccanvas = ctx.fillStyle

    
    //console.log(ccanvas) //undefined

    c.fill = ccanvas[0].value
    canvas.fill = ccanvas[0].value

    //ccanvas[0].value = c.fill

    ccanvas[0].nextElementSibling.innerHTML = c.fill

    ccanvas[0].addEventListener(`input`, changeColor)

    function changeColor(e)
    {
        
       
        //something.fill = e.target.value

        //canvas.fill = e.target.value

        c.fill = e.target.value

        //canvas.fill = body.style.backgroundColor(e.target.value)
        
        canvas.fill = (canvas.style.backgroundColor = e.target.value)

        body.style.backgroundColor = `darkolivegreen`

        e.target.nextElementSibling.innerHTML = c.fill

        //canvas color change works!! yeah!!


        

        //input.color


    }








//}



//size / color of ball

//class = ballc

//ball.property ...



var colBall = document.getElementsByClassName(`ballc`)

for (i = 0; i< colBall.length; i ++){
    //ball.fill = colBall[0].value

    colBall[i].nextElementSibling.innerHTML = ball.fill

    colBall[i].addEventListener(`input`, changeBall)

    function changeBall(e)
    {
        ball.fill = e.target.value

        ball.w = 55
        ball.h = 87

        e.target.nextElementSibling.innerHTML = ball.fill


    }

}
