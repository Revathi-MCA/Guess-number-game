// selection element
var inputbox=document.getElementById("inputbox")
var result=document.getElementById("result")
var guesscount=document.getElementById("guesscount")
var count=3

// generate random number from 1 to 5
var randomnumber =Math.floor(Math.random()*10)+1
if(randomnumber>5)
{
    randomnumber=randomnumber-5
}
// check guess
function checkguess()
{
    if(randomnumber==inputbox.value)
    {
        result.textContent="Your= are Right!"
        alert("You guess is right congratuation!")
    }
    else
    {
        count=count-1
        if(count==0)
        {
            alert("You last the chance the number is: "+randomnumber)
        }
        else{
            guesscount.textContent="Avaliable guess: "+count
            result.textContent="you are wrong"
        }
    }
}