const note = document.querySelectorAll("button");
var mode = document.getElementById("switch");
var sun = document.querySelector(".fa-sun");

mode.onclick = function(txt){
    document.body.classList.toggle("light-mode");

    if (sun == ".fa-sun"){
        sun.classList.add("fa.moon");
    }
    else{
        sun.classList.remove("fa.moon");
    }

    txt.target.textContent == "Light Mode" ?
    txt.target.textContent = "Dark Mode" : 
    txt.target.textContent = "Light Mode";
}