const topSlider = () =>{
    const slider = document.querySelector(".top-slider"),
        fslide = slider.getElementsByClassName("item")[0],
        sslide = slider.getElementsByClassName("item")[1],
        tslide = slider.getElementsByClassName("item")[2];
    let counter = 1,
        reverse = false;

    setInterval(()=>{
        counter++;    
        if(counter === 1){
            slider.prepend(fslide)    
        }
        if(counter === 2){
            slider.prepend(sslide)    
        }
        if(counter === 3){
            slider.prepend(tslide)    
        } 
        if (counter>3){counter = 0}
    },3000)
}
export default topSlider;