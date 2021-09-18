const accordeon = () =>{
    const accordeon = document.querySelector(".accordeon"),
        elements = accordeon.querySelectorAll(".element");
    const closer = (l) =>{
        elements.forEach((i)=>{
            if (i!==l){
                if(i.classList.contains("active")){
                    i.classList.remove("active")
                    i.querySelector(".element-content").style.display = "none"
                }    
            } else {
                if(!i.classList.contains("active")){
                    i.classList.add("active")              
                    i.querySelector(".element-content").style.display = "inline-block"
                } else {
                    i.classList.remove("active")
                    i.querySelector(".element-content").style.display = "none"
                }
            }
        })
    }
    accordeon.addEventListener('click',(e)=>{
        let target = e.target;
        target = target.closest(".element")
        if (target.closest(".element")){
            elements.forEach((i)=>{
                if(target===i){
                    closer(i)
                }
            })
        }
    })
}
export default accordeon;