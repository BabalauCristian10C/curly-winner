const smoothScroll = () =>{
    const scroller = document.querySelector("#scroller")
    scroller.style.display = "None"

    window.addEventListener("scroll", (e)=>{
        const heiY = window.scrollY;
        if (heiY >= 400){
            scroller.style.display = "BLock"
            scroller.classList.add('callBackActive')
        } else{
            scroller.style.display = "None"  
        }
    })
    scroller.addEventListener("click",()=>{
        let heiY = window.scrollY;
        const scrolFunc = setInterval(()=>{
            heiY= heiY - 30;
            if(window.scrollY > 10){
                window.scrollTo(0, heiY)
            } else{
                clearInterval(scrolFunc);
            }
        },1)
    })
}
export default smoothScroll;