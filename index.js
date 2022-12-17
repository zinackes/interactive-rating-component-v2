var submit = document.getElementById("submit");
var mode = document.getElementById("switch");
var sun = document.querySelector(".fa-sun");
var error = document.querySelector(".error");
var txt_mode = document.querySelector("#txt-mode");
var img_mode = document.querySelector("#img-mode");
var values = document.querySelectorAll("#star");
var text = document.getElementById("note");
var main = document.getElementById("main");
var second = document.getElementById("second");

mode.onclick = function(txt_mode){
    document.body.classList.toggle("light-mode");

    if (txt_mode.target.textContent == "Light Mode"){
        img_mode.src = "./images/dark-mode.png";
    } else {
        img_mode.src = "./images/light-mode.png";
    }
    
    txt_mode.target.textContent == "Light Mode" ?
    txt_mode.target.textContent = "Dark Mode" : 
    txt_mode.target.textContent = "Light Mode";
}

values.forEach((value) => {
    value.addEventListener("click", () => {
        text.innerHTML = value.innerHTML;

        value.style.backgroundColor = "var(--bg-round-selected-x)";
        value.style.color = "white";
        
        submit.onclick = function(){
            main.classList.add("hidden");
            second.classList.remove("hidden");
        }
    })
})

submit.onclick = function(){
    error.classList.remove("hidden");
}

