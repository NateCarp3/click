var count=1
var count2=1
var count3=1

var countElement = document.querySelector("#count")
var countElement2 = document.querySelector("#count2")
var countElement3 = document.querySelector("#count3")

console.log(countElement);

function increment() {
    count++;
    countElement.innerText = count  + " Likes";
    console.log(count);
    
}
function increment2() 
{
    count2++
    countElement2.innerText = count2 + " Likes";
    console.log(count2)
    

}
function increment3()
{
    count3++
    countElement3.innerText = count3 + " Likes"
    console.log(count3)
}