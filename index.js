const note = document.querySelectorAll("button");
var mode = document.getElementById("switch");
var sun = document.querySelector(".fa-sun");
var error = document.querySelector(".error");

mode.onclick = function(txt){
    document.body.classList.toggle("light-mode");

    sun.classList.toggle("fa-moon");
    txt.target.textContent == "Light Mode" ?
    txt.target.textContent = "Dark Mode" : 
    txt.target.textContent = "Light Mode";
}

