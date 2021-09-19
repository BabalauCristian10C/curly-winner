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
        if (modalWindow.classList.contains("callBackDeactivate")){
            modalWindow.classList.remove("callBackDeactivate")    
        }
        modalOverlay.style.display = "inline-block";
    })
    document.querySelector(".button-services").addEventListener('click', (e)=>{
        e.preventDefault();
        modalWindow.style.display = "inline-block";
        if (!modalWindow.classList.contains("callBackActive")){
            modalWindow.classList.add("callBackActive")
        }
        if (modalWindow.classList.contains("callBackDeactivate")){
            modalWindow.classList.remove("callBackDeactivate")    
        }
        modalOverlay.style.display = "inline-block";
    })

    document.querySelectorAll(".fancyboxModal").forEach(i=>{   
        if(i.closest(".services-elements")){
            i.addEventListener('click', (e)=>{
                e.preventDefault();
                modalWindow.style.display = "inline-block";
                if (!modalWindow.classList.contains("callBackActive")){
                    modalWindow.classList.add("callBackActive")
                }
                if (modalWindow.classList.contains("callBackDeactivate")){
                    modalWindow.classList.remove("callBackDeactivate")    
                }
                modalOverlay.style.display = "inline-block";
            })
        }
    
    })

    //closing part

    const closeBtn = document.querySelector(".modal-close");

    document.addEventListener("click", (e)=>{
        const target = e.target;
        if(target.closest(".modal-close") || target.closest(".modal-overlay")){
            e.preventDefault();
            if (modalWindow.classList.contains("callBackActive")){
                modalWindow.classList.remove("callBackActive")
            }
            if (!modalWindow.classList.contains("callBackDeactivate")){
                modalWindow.classList.add("callBackDeactivate")    
            }
            setTimeout(()=>{
                modalWindow.style.display = "none";
            },500)
            modalOverlay.style.display = "none";
        }
    })
}
export default orderProneCall;