var count=1
var countElement = document.querySelector("#count")

console.log(countElement);

function increment(element) {
    count++;
    console.log(count);
    countElement.innerText = count  + " Likes";

}