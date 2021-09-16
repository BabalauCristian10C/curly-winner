import orderProneCall from "./module/orderPhoneCall";
import categoriesScroll from "./module/categoriesScroll";

window.addEventListener("DOMContentLoaded", ()=>{
    orderProneCall();
    document.offsetTop = 1000;
    //burgerMenu();
    categoriesScroll();
})