let tru = true;
function bgChange(){
    if(document.getElementById("switch").checked){
        document.getElementById("body").style.background = "white";
        document.getElementsByClassName("header__link").style.color = "#161616";
    }else{
        document.getElementById("body").style.background = "#161616";
    }
}
