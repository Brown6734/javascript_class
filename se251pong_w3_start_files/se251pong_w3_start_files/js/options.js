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



//to practice adding and removing classes from an element
//so maybe removing class sides from the div???

//options.removeEventListener("click", funShowHide)




//options.addEventListener("click", optFun)

//function optFun(e)
//{
    //stuff in here
    //make the `sides` div show and hide by using classlist.toggle()
    //to add or remove the `hidden` class


    //options.classList.toggle(`hidden`)

    /*

    options.removeEventListener("click", optFun)

    or

    options.addEventListener("click", remove)

    function remove(e)
    {
        e.preventDefault()
        e.currentTarget.style.color = "yellow"
    }
    */


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

//i bet I could do:
//fills[0] for player 1

//fills[1] for player 2

//oneplayer = fills[0]

//console.log(" ")

//console.log(oneplayer)

//console.log(fills[0])

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

        console.log(oneplayer)

        player[i].fill = e.target.value

        pad[i].fill = e.target.value

        e.target.nextElementSibling.innerHTML = player[i].fill

        //fills[i] = input value and equal player's fill property??
        //console.log(fills[i])


        


        //console.log("oneplayer ", oneplayer)
    }
}
    //fills[0] - first player
    //fills[1] - second player

    //fills[0] = ?
    //? = player[0]

    //fills[0] = player[0].fill = "green"

    

    //console.log(fills[0])
    
    //loopControl = "D"

//}





/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
