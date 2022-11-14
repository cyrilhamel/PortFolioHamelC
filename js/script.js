let body = document.getElementById("theme")
let button = document.getElementById("switch")
button.onclick = change();
function change(){
if (body.classList.contains("dark")){
    body.classList.remove("dark")
}else{
    body.classList.add("dark")
}
}