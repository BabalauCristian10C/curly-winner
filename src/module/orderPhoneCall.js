const orderProneCall = () => {
    const trigger = document.querySelector("#callBtn"),
        modalWindow = document.querySelector(".modal-callback"),
        modalOverlay = document.querySelector(".modal-overlay");
    trigger.addEventListener('click', (e)=>{
        e.preventDefault();
        modalWindow.style.display = "inline-block";
        if (!modalWindow.classList.contains("callBackActive")){
            modalWindow.classList.add("callBackActive")
        }
        modalOverlay.style.display = "inline-block";
    })

}
export default orderProneCall;