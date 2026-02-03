const main = document.getElementById("main")

function bildFild(){
    let img

    
    for(let i = 1;i <= 80*36;i++){
     img = document.createElement("img")
     
        img.setAttribute("alt","")
     
        if(i > 16*80 && i <= 17*80){
            img.setAttribute("src","pictures/download4.png")
               img.classList.add("font")
        }
        else if(i > 17*80 && i <= 21*80){
            img.setAttribute("src","pictures/soil.png")
               img.classList.add("font")
        }
        else if(i> 21*80 && i <= 34*80){
            img.setAttribute("src","pictures/img.png")
               img.classList.add("font")
        }
        else if(i > 34*80){
            img.setAttribute("src","pictures/download5.png")
               img.classList.add("font")
        }
   
        main.appendChild(img)
    }
  
}

function bildtriers(){
   
}

function restars(){
    const button = document.getElementById("button")
    button.addEventListener("click",()=>{
        window.open("index.html")
        window.close("index.html")
    })
}

bildFild()
restars()