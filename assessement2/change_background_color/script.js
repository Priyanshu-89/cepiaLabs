let color=["#FF5733", "#089221ff", "#0e2db7ff", "#ab9207ff", "#FF33A1", "#356876"]
let colorBtn=document.getElementById("colorBtn")

document.body.style.background = "teal";

colorBtn.addEventListener('click', ()=>{
    let randomColor=color[Math.floor(Math.random()*color.length)]
    document.body.style.background=randomColor
})