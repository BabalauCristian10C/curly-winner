const categoriesScroll = () =>{
    const topMen = document.querySelector(".top-menu"),
        a = topMen.querySelectorAll("a") 
    a.forEach(i=>{
        i.href.replace(/(\#[A-z]+)/gi, (match,val)=>{
            const l = val;
            const topScroll = document.querySelector(l).offsetTop;
            i.addEventListener("click", (e)=>{
                e.preventDefault()
                window.scrollTo(0,topScroll)     
            })
        })
    })       
}
export default categoriesScroll;