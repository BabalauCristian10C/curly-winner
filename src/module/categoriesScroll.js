const categoriesScroll = () =>{
    const topMen = document.querySelector(".top-menu"),
        a = topMen.querySelectorAll("a") 
    a.forEach(i=>{
        i.href.replace(/(\#[A-z]+)/gi, (match,val)=>{
            const l = val;
            const topScroll = document.querySelector(l).offsetTop;
            i.addEventListener("click", (e)=>{
                e.preventDefault()
                let l=0;
                const interval = setInterval(() => {
                    l = l+20;
                    window.scrollTo(0,l)
                    if(l>topScroll){
                        clearInterval(interval)
                    }
                }, 1);
                     
            })
        })
    })       
}
export default categoriesScroll;