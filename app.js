const cir = document.querySelector("#circle")
const btn = document.querySelector("button")

let flag = 0

btn.addEventListener("click", function(){
if(flag == 0){
    cir.style.backgroundColor = "yellow"
    btn.innerHTML = "OFF"
    console.log("clicked.")
    flag =1
}else{
    cir.style.backgroundColor = "grey"
    btn.innerHTML = "ON"
    console.log("clicked clicked.")
    flag =0
}

})


