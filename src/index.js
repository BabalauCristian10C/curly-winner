import orderProneCall from "./module/orderPhoneCall";
import categoriesScroll from "./module/categoriesScroll";
import topSlider from "./module/topSlider"
import form from "./module/form"

window.addEventListener("DOMContentLoaded", ()=>{
    orderProneCall();
    document.offsetTop = 1000;
    //burgerMenu();
    categoriesScroll();
    topSlider();
    form();
})