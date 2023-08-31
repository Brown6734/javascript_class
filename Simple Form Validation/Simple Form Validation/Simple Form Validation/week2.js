// JavaScript Document

/*
create a simple submission screen with simple error handing capabilities/feedback and a confirmation display.
use regular expressions and the RegExP.test() [https://www.w3schools.com/jsref/jsref_regexp_test.asp] function to ensure that the input values are correct

error message formatting:

    upon clicking the submit button, if any of the text input fields are empty or don't meet the RegEx pattterns described below the field will:

        get a red asterix next to it in the <span> tag

        the label will get changed to red by swapping its class

        if all is good:
            the <span> will become blank again
            HINT - innerHTML = ''

            the label will turn black

RegEx and Validation Requirements

    first name and last name fields can not include special characters (excluding dashes). also, the names should not include underscores

    the error message should state what went wrong.
    you entered your name wrong. your input included characters that are not allowed...

    the email address fields should be valid email address
    hint - find an expression to help with this

    the phone number field must contain a phone number in the following format: xxxxxxxxxx
    if all the fields are filled in upon click the submission button
    and
    the email and email confirm must match

once submit is clicked

    the form div will get hidden by setting its display style to none

    construct an object to hold the information from the form and write the object's information into the confirmation

    the confirmation div will show up with the information from the object in the following format:


*/

//error message formatting

//upon clicking the submit button, if any of the text fields are empty
//or don't meet the RegEx patterns described below the field will:

//only one button - the submit button
//an event listener (function)?

//need to document select `button`


//before event listener happens, check to make sure all fields are filled in (A)
//AND they meet RegEx requirments/patterns (B)

//first name input field
//id = `first-name`

var firstName = document.getElementById(`first-name`)

//last name
//id = `last-name`

var lastName = document.getElementById(`last-name`)

//email (id: email)
var email = document.getElementById(`email`)

//phone number (id: phone)
var phone = document.getElementById(`phone`)

//console.log(`first name`, firstName)

//console.log(`last name`, lastName)

//console.log(`email`, email)

//console.log(`phone`, phone)

//event listener for submit var

//submit.addEventListener(`click`, testF1)

//console.log(`first name length`, firstName.attributes.length)

var thingss = document.querySelector(`#first-name`)

var confirmEmail = document.getElementById(`confirm-email`)

console.log(" __")

var submit = document.querySelector(`button`)

var ferror = document.getElementById(`fn-error`)

var lerror = document.getElementById(`ln-error`)

var emerror = document.getElementById(`email-error`)

var cferror = document.getElementById(`cfemail-error`)

var perror = document.getElementById(`phone-error`)

//submit.addEventListener(`mouseover`, testThree)

//if (10 < 30)
//{

//for loop?

var firstCheck = `f`

var lastCheck = `l`

var emailCheck = `e`

var phoneCheck = `p`

var confirmCheck = `j`

var nums = 3

if(nums != 30)
{
    console.log("how does conditional statements work?")
}

if(nums !== 30)
{
    console.log("conditional two")
}

if(nums !== 3)
{
    console.log("condtional statemtn three")
}

if (nums != 'stuff')
{
    console.log('nums not equal to string 1')
}

if (nums !== 'sfds')
{
    console.log('nums not equal to a string 2')
}



//for (i = 0; i < 1; i ++)
//{

//if firstName has a value

//if(10 < 30)
//{f

console.log("first name city flowers", firstName)


//if(firstName != null && firstName != undefined)

    console.log("first name is towers", firstName)

    firstName = addEventListener(`input`, someFun)

    console.log("first name is meat", firstName)

    function someFun(e)
    {
        
        //e.target
        firstName = e.target.value

        console.log("first name is gold", firstName)
            //console.log("e target value length",e.target.value.length.valueOf())

        if(e.target.value !== null)
        {
            var firstString = /\b([a-z]{0,})(\-{0,})/gi

            var nameFirst = firstName

            var result = firstString.test(nameFirst)

        
            if(result)
            {
                console.log("result first name", result)

                firstCheck = `YES`
            }
            else
            {
                e.target.nextElementSibling.innerHTML = `first name error`

                //works
            
                //firstName.nextElementSibling.innerHTML(`first name error`)
            }

            

            

        }

            

        
        //run submit event listener?
            //allow submit event listener to happen?
            //set a certain var to true 
            //or a certain value?

        
            //at some point, check to see if ___check vars equal `YES`
            //if all equal `YES`, run submit event listener

            //ALSO, check that RegEx is good

            //firstName RegEx validation

            //first name field can not include special character (excluding dashes)

        //name(s) should not include underscores

            

            

            /*

            \b([a-z]{0,})(\-{0,})

            */

            // \w - words
            //includes underscore

    }


    

//else
//{
    //console.log("first name field is currently nulll")
//}

//}

//

//


    //lastName is null



if(lastName !== null)
{
    lastName = addEventListener(`input`, funLast)

    function funLast(e)
    {
        console.log("e.target", e.target)
        console.log("e.target.value", e.target.value)

        lastName = e.target.value

        console.log(lastName)

        //check if lastName has a value
        
        //console.log("last name length thing",lastName.getAttribute.length.valueOf())
        //undefined

        console.log("e target value length",e.target.value.length.valueOf())

        //changes, yes!!

        var lastString = /\b([a-z]{0,})(\-{0,})/gi

        var nameLast = lastName

        var result4 = lastString.test(nameLast)

        if(result4)
        {
            console.log("result last name", result4)

            lastCheck = `YES`
        }
        else
        {
            e.target.nextElementSibling.innerHTMl = `last name error`
        }

        //console.log("last name has attribute length to fixed", lastName.hasAttribute.length.toFixed())

        console.log("pleassee workrrks")
        

    }
}



    

    //email part

//regEx validation - ([a-z]{0,})([0-9]{0,})([a-z]{0,})([0-9]{0,})(\@)([a-z]{0,})([0-9]{0,})(\.{0,})([a-z]{0,})(\.{0,})([a-z]{0,})(\.{0,})([a-z]{0,})

if(email !== null)
{
    email = addEventListener(`input`, emailFun)

    function emailFun(e)
    {   
        email = e.target.value

        console.log("eamil is", email)

        var emailString = /[a-z](\w*\.?\w*)\@[a-z](\w*\.?\w{2,3}){2}/gi

        /*

        /[a-Za-z](\w*\.?\w*)\@[A-Za-z](\w*\.?\w{2,3}){2}/i

        */

        var emailName = email

        var result2 = emailString.test(emailName)

        if(result2)
        {
            console.log("result email", result2)

            emailCheck = `YES`
        }
        else
        {
            e.target.nextElementSibling.innerHTML = `email error`
        }

    }
}






    //phone number field must contain a phone number in the following format
    // xxxxxxxxxx

/*
    
(\({0,})([0-9]{0,})(\){0,})(\-{0,})(\.{0,})
    
*/

if (phone !== null)
{
    phone = addEventListener(`input`, phoneFun)

    function phoneFun(e)
    {
        phone = e.target.value

        var phoneString = /(?:\(\d{3}\)-\d{3}-\d{4}|\d{3}-\d{3}-\d{4}|\d{10}|\(\d{3}\)\.\d{3}\.\d{4}|\d{3}\.\d{3}\.\d{4}|\(\d{3}\)\d{3}-\d{4})/gi

        /*
        ^\d{3}-\d{3}-\d{4}$

        (?:\(\d{3}\)-\d{3}-\d{4}|\d{3}-\d{3}-\d{4}|\d{10}|\(\d{3}\)\.\d{3}\.\d{4}|\d{3}\.\d{3}\.\d{4}|\(\d{3}\)\d{3}-\d{4})

        */

        var phoneName = phone

        var result3 = phoneString.test(phoneName)

        if(result3)
        {
            console.log("result phone number", result3)

            phoneCheck = `YES`
        }

        else
        {
            e.target.nextElementSibling.innerHTML = `phone number error`
        }
    }
}





//email and email confirm must match

if(confirmEmail !== null)
{
    confirmEmail = addEventListener(`input`, confirmFun)

    function confirmFun(e)
    {

        confirmEmail = e.target.value

        var confirmString = /[a-z](\w*\.?\w*)\@[a-z](\w*\.?\w{2,3}){2}/gi

        var confirmName = confirmEmail

        var result5 = confirmString.test(confirmName)


        if(result5)
        {
            console.log("thing")
        }
        else{
            e.target.nextElementSibling.innerHTMl = `confirm email error`
        }

        if (confirmEmail == email)
        {
            confirmCheck = `YES`

            e.target.nextElementSibling.innerHTMl = `confirm email match`

        }

    }
}




    
if (firstCheck == `YES` && lastCheck == `YES` && emailCheck == `YES` && phoneCheck == `YES` && confirmCheck == `YES`)
{
    //run submit event listener

    submit = addEventListener(`click`, testThree)

    function testThree(e)
    {
        //stuff in here

        //once submit is clicked



    }
}





//if all check vars = YES, run submit event listener


    

    
    

/*
console.log("first name attributes item")
console.log(firstName.attributes.item)
console.log("first name contains to string")
console.log(firstName.contains.toString(`ff`))
*/

//console.log(`first name length`, firstName.attributes.length)
//firstName is null


//}








