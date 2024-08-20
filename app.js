let character = document.getElementById('character')
let right = 0;

function animation(){
    console.log(event.keyCode)
    if(event.keyCode===39 && right <1400){
        character.src= "images/ingrid-run.gif"
        right = right +10
        character.style.left = right +"px"
        setTimeout(function(){
            character.src = "images/ingrid-stance.gif"
        },1000)
}
if(event.keyCode == 37 && right >10){
    character.src = "images/ingrid_wlkforward.gif"
    right = right -10
    character.style.left = right + "px"
    setTimeout(function(){
        character.src = "images/ingrid-stance.gif"
    },1000)
}
}
window.onkeydown = animation;

