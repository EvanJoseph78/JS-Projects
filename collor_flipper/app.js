const colors = ["green", "red", "rgba(133, 122, 200)","#f150025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    // color.textContent = colors[randomNumber];
    color.innerHTML = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * 10);
}



