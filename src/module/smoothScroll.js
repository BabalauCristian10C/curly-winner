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
}
export default smoothScroll;