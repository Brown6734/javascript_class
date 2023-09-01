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



//last name
//id = `last-name`




//var submit = document.querySelector(`button`)




//submit.addEventListener(`mouseover`, testThree)

//if (10 < 30)
//{

//for loop?

var firstCheck = `f`

var lastCheck = `l`

var emailCheck = `e`

var phoneCheck = `p`

var confirmCheck = `j`





//for (i = 0; i < 1; i ++)
//{

//if firstName has a value

//if(10 < 30)
//{f




//if(firstName != null && firstName != undefined)

//submit = addEventListener(`click`, testThree)
var submit = document.querySelector(`button`)

submit = addEventListener(`click`, testThree)


function testThree(e)
{
    var firstName = document.getElementById(`first-name`).value

    var lastName = document.getElementById(`last-name`).value

    var email = document.getElementById(`email`).value

    var phone = document.getElementById(`phone`).value

    var confirmEmail = document.getElementById(`confirm-email`).value
    
    var somep = document.getElementsByTagName(`p`)

    //stuff in here

    //once submit is clicked



    
    
    //console.log("e target value length",e.target.value.length.valueOf())
    
    //i(e.target.value != null)
    //{

    var firstString = /^([a-z]{0,})[^\.\+\*\?\,\^\$\(\)\[\]\{\}\|\\\/\_\+\=\@\#\%\&\!\<\>\'\"\;\:\~\`]$/gi

    
    
    //works with only special characters
    
    /*
    ([a-z]{0,})(\-{0,})+[^\.\+\*\?\,\^\$\(\)\[\]\{\}\|\\\/\_\+\=\@\#\%\&\!\<\>\'\"\;\:\~\`]

    ([a-z]{0,})(\-{0,})(?=[^\.\+\*\?\,\^\$\(\)\[\]\{\}\|\\\/\_\+\=\@\#\%\&\!\<\>\'\"\;\:\~\`])

    
    ([^\_]{0,})([a-z]{0,})([^\_]{0,})(\-{0,})([^\_]{0,})
    
    [^!@#$%^&*()_+{}\\\[\]:;<>,.?~/|=']
    
    ([a-z]{0,})(\-{0,})
    
    */
    
    var name1 = firstName

    //var testString = firstString + firstSecString
    //console.log("value of testString is", testString)

    
    var result = firstString.test(name1)


    //var anresult = firstSecString.test(name1)

    console.log("result variable for first name is", result)
    
        
    
            
    if(result)
    {
        console.log("result first name", result)

        //console.log("anresult value is", anresult)
        
        document.querySelector(`span`).style.color = `black`

        somep[0].style.color = `black`

        ///document.querySelector(`#fn-error`).innerHTML = `good first name`

        document.querySelector(`#fn-error`).innerHTML = ``

        
        //firstName is undefined
    
        firstCheck = `YES`
    }
    else
    {
        document.querySelector(`span`).style.color = `red`

        document.querySelector(`#fn-error`).innerHTML = `* first name error`

        somep[0].style.color = `red`

        
    
        //works
                
                
    }


    //console.log("e target value length",e.target.value.length.valueOf())
    
    //changes, yes!!
    
    var lastString = /^([a-z]{0,})[^\.\+\*\?\,\^\$\(\)\[\]\{\}\|\\\/\_\+\=\@\#\%\&\!\<\>\'\"\;\:\~\`]$/gi

    /*

    [^[\$\&\+\,\:\;\=\?\@\#\|\'\<\>\.\^\*\(\)\%\!\-\[\]]

    \b([a-z]{0,})(\-{0,})

    [$&+,:;=?@#|'<>.^*()%!-]

    */
    
    var nameLast = lastName
    
    var result4 = lastString.test(nameLast)
    
    if(result4)
    {
        console.log("result last name", result4)
        
        document.querySelector(`span`).style.color = `black`

        somep[1].style.color = `black`

        document.querySelector(`#ln-error`).innerHTML = ``
    
        lastCheck = `YES`
    }
    else
    {
        document.querySelector(`#ln-error`).style.color = `red`

        somep[1].style.color = `red`

        document.querySelector(`#ln-error`).innerHTML = `* last name error`

        

        
    }
    
    //console.log("last name has attribute length to fixed", lastName.hasAttribute.length.toFixed())

        
    
    //email part
    
    //regEx validation - ([a-z]{0,})([0-9]{0,})([a-z]{0,})([0-9]{0,})(\@)([a-z]{0,})([0-9]{0,})(\.{0,})([a-z]{0,})(\.{0,})([a-z]{0,})(\.{0,})([a-z]{0,})

    
    var emailString = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/gi
    
    /*

    [a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}
    
    /[a-Za-z](\w*\.?\w*)\@[A-Za-z](\w*\.?\w{2,3}){2}/i
    
    */
    
    var emailName = email
    console.log("email name value ", emailName)
    
    var result2 = emailString.test(emailName)
    
    if(result2)
    {
        console.log("result email", result2)
        
        document.querySelector(`span`).style.color = `black`

        somep[2].style.color = `black`

        document.querySelector(`#email-error`).innerHTML = ``
    
        emailCheck = `YES`
    }
    if(result2 == false)
    {
        document.querySelector(`#email-error`).style.color = `red`

        somep[2].style.color = `red`

        document.querySelector(`#email-error`).innerHTML = `* email error`

        
    }
    
    
    
    
    
    
    
    
    
        //phone number field must contain a phone number in the following format
        // xxxxxxxxxx
    
    /*
        
    (\({0,})([0-9]{0,})(\){0,})(\-{0,})(\.{0,})
        
    */

    //i am getting an error
    //when i type in first name field i get messgae:
    //phone numbr error

    var phoneString = /^(?:\(\d{3}\)|\d{3})[-. ]?\d{3}[-. ]?\d{4}$/gi
    
    /*
    ^\d{3}-\d{3}-\d{4}$
    
    (?:\(\d{3}\)-\d{3}-\d{4}|\d{3}-\d{3}-\d{4}|\d{10}|\(\d{3}\)\.\d{3}\.\d{4}|\d{3}\.\d{3}\.\d{4}|\(\d{3}\)\d{3}-\d{4})
    
    */
    
    var phoneName = phone
    
    var result3 = phoneString.test(phoneName)
    
        if(result3)
        {
            console.log("result phone number", result3)

            document.querySelector(`span`).style.color = `black`

            somep[4].style.color = `black`
        
            document.querySelector(`#phone-error`).innerHTML = ``
    
            phoneCheck = `YES`
        }
    
        else
        {
            document.querySelector(`#phone-error`).style.color = `red`

            somep[4].style.color = `red`

            document.querySelector(`#phone-error`).innerHTML = `* phone number error`

            
        }
    
    
    
    
    
    
    
    //email and email confirm must match

    
    var confirmString = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/gi
    
    var confirmName = confirmEmail
    
    var result5 = confirmString.test(confirmName)
    
    
    if(result5)
    {
        console.log("thing")

        document.querySelector(`span`).style.color = `black`

        somep[3].style.color = `black`

        document.querySelector(`#cfemail-error`).innerHTML = ``
    }
    else
    {
        document.querySelector(`span`).style.color = `red`

        document.querySelector(`#cfemail-error`).innerHTML = `* bad confirm email`

        somep[3].style.color = `red`
    }
    
    if (confirmEmail === email)
    {
        confirmCheck = `YES`

        document.querySelector(`#cfemail-error`).style.color = `black`

        somep[3].style.color = `black`
    
        document.querySelector(`#cfemail-error`).innerHTML = `confirm email match`
    
    }
    else
    {
        document.querySelector(`#cfemail-error`).style.color = `red`

        somep[3].style.color = `red`

        document.querySelector(`#cfemail-error`).innerHTML = `* email fields do not match`

        

        confirmCheck = `no`
    }


    //after everything gets validated

    //the form div will get hidden by setting its display style to none
    //id = form

    


    //construct an object to hold the information from the form and write the object's information onto the confirmation section/part
    //div id = confirmation
    //h1 - Confirmation
    //p id = info


    if(firstCheck === `YES` && lastCheck === `YES` && emailCheck === `YES` && phoneCheck === `YES` && confirmCheck === `YES`)
    {

        var persons2 = {
            //fname = fNameInput.value,
            //lname, email, confirmemail, phone
    
            fname: firstName,
            lname: lastName,
            email1: email,
            confirmemail: confirmEmail,
            phone1: phone
    
        }

        document.getElementById(`form`).style.display = `none`

        document.getElementById(`confirmation`).style.display = `block`

        //id - confirmation
        //style
        //background-color: aaa

        document.getElementById(`confirmation`).style.width = `400px`

        document.getElementById(`confirmation`).style.backgroundColor = `aaa`

        document.getElementById(`confirmation`).style.border = `1px solid black`

        document.getElementById(`confirmation`).style.padding = `10px`

        document.getElementById(`info`).innerHTML = `${persons2.fname} ` + ` ${persons2.lname} `

        console.log("persons2 phone 1 value field is", persons2.phone1)

        //var exstring = `1231231233`

        //var exphone = exstring.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')

        //console.log("exphone string is ", exphone)

        //var tryphone2 = exphone.split(` `)

        //console.log("tryphone2 value is", tryphone2)

        //console.log(tryphone2[0] + `-` + tryphone2[1] + `-` + tryphone2[2])
        var phoneText = persons2.phone1

        var phoneReplace = phoneText.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')

        var phoneSplit = phoneReplace.split(` `)

        //phoneSplit[0] + `-` + [1] + `-` + [2]

        document.getElementById(`info`).innerHTML += `<br>` + `${persons2.email1}  ` + `<br>`

        document.getElementById(`info`).innerHTML += `${phoneSplit[0]}` + `-` + `${phoneSplit[1]}` + `-` + `${phoneSplit[2]}`



        //document.getElementById(`info`).innerHTML += `&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; words and more words`

        //document.getElementById(`info`).innerHTML += `<br>` + `a new line? /n a new line?22`


    }

    

    

    //put the information into the p tag (id = info)

    

    //info p tag
    //to have the values of
    //fname, lname (in one line)
    //email1
    //phone1 in format:
    // ###-###-####




}





/*
once submit is clicked

the form div will get hidden by setting its display style to none

construct an object to to hold the information from the form and write the object's information onto the confirmation

example of a possible object:

var person = {
    fname: fNameInput.value,
    lname: lNameInput.value,
    ...
}

the confirmatoin div will show up with the information from the Object in the following format - on Canvas page for the assignment

*/

    









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








