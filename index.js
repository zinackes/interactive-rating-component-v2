var submit = document.getElementById("submit");
var mode = document.getElementById("switch");
var sun = document.querySelector(".fa-sun");
var error = document.querySelector(".error");
var txt_mode = document.querySelector("#txt-mode");
var img_mode = document.querySelector("#img-mode");
var values = document.querySelectorAll("#star");
var text = document.querySelectorAll("#note");
var final = document.getElementById("note-final");
var near_final = document.getElementById("note-avant");
var main = document.getElementById("main");
var second = document.getElementById("second");
var active = document.activeElement;
var secondvalues = document.querySelectorAll("#second-star");
var one = document.getElementById("one");
var two = document.querySelectorAll("#two");
var back = document.getElementById("back");
var first_note = document.getElementById("second-star");


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

values.forEach((value, final_value) => {
    value.addEventListener("click", () => {
        for (let i = 0; i<4; i++){
            text[i].innerHTML = value.innerHTML;
        }



        submit.onclick = function(){
            main.classList.add("hidden");
            second.classList.remove("hidden");
        }


        one.classList.add("hidden");
        back.classList.remove("hidden");
        for (let i =0; i<2; i++){
            two[i].classList.remove("hidden");
        }
        first_note.focus();
        near_final.innerHTML = value.innerHTML;

        final_value.addEventListener("click", () => {
            final.innerHTML = value.innerHTML;
    
    
            submit.onclick = function(){
                main.classList.add("hidden");
                second.classList.remove("hidden");
            }
            
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
                value.focus();
            }
        })
    })
})



secondvalues.forEach((value) => {
    value.addEventListener("click", () => {
    })
})

back.onclick = function(){
    one.classList.remove("hidden");
    back.classList.add("hidden");
    for (let i =0; i<3; i++){
        two[i].classList.add("hidden");
    }
}



submit.onclick = function(){
    error.classList.remove("hidden");
}

