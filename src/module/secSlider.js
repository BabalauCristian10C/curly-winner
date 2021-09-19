const secSlider = () =>{
    const rarr = document.querySelector(".arrow-right"),
        larr = document.querySelector(".arrow-left"),
        box = document.querySelector(".services-carousel"),
        slide = box.getElementsByClassName("col-sm-6");
    let pos = 0;

    for(let i=3; i<6;i++){
        slide[i].style.display = "none";
    }
    document.querySelector(".services-arrow").addEventListener("click", (e)=>{
        const target = e.target;
        const curHei = window.scrollY;    
        
        if(target === rarr){
            slide[0].style.display = "none";
            box.append(slide[0])
            slide[2].style.display = "flex";
            
        } else if( target == larr){
            slide[2].style.display = "none";
            box.prepend(slide[5])
            slide[0].style.display = "flex";
        }
        for(let i=3; i<6;i++){
            slide[i].display = "none";
        }
        window.scrollTo(0,curHei)
    })

}
export default secSlider;