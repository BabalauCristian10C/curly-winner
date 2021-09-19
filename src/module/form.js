const formSender = () =>{
    const name = document.querySelector(".form-control"),
        phone = document.querySelector(".tel"),
        modalWindow = document.querySelector(".modal-callback"),
        modalOverlay = document.querySelector(".modal-overlay");
    const nameCyr = (event) =>{
        const target = event.target;
        target.value = target.value.replace(/[^А-Яа-яЁё\s]/gi, "")
        target.value = target.value.replace(/\s{2,10000}/g, " ")
        target.value = target.value.trim();
        target.value = target.value.replace(/([а-я])?[А-Яа-яЁё]*/g, (match,v) => {
            if(v){
                match = v.toUpperCase() + match.substr(1);    
            }else{
                match = match;
            }
            return match;
        })

        if(target.value.length <2){
            target.value = ""    
        } 
    }
    const phoneCheck = (e) =>{
        const target = e.target;
        target.value = target.value.replace(/[^0-9+]/gi, "")
        if (target.value.length > 13 || target.value.length < 7){
            target.value= ""
        }
    }

    name.addEventListener("blur", nameCyr);
    phone.addEventListener("blur", phoneCheck);

    const sendServer = (data) => {
        return fetch('./server.php', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
    };

    const statusMessage = document.createElement("div");
    statusMessage.textContent = "Loading..."
    statusMessage.style.cssText = "font-size:2em; color:black;";

    document.querySelector(".sendForm").addEventListener("click", (e)=>{
        e.preventDefault();
        document.querySelector(`[name="form-callback"]`).append(statusMessage)
        let body = {};
        body.name = name.value;
        body.phone = phone.value;
        if(name.value!=="" && phone.value!==""){
            sendServer(body).then(
                response=>{
                    if(response.status==200){
                        statusMessage.textContent = "Completed"
                    }
                    setTimeout(()=>{
                        name.value = ""
                        phone.value = ""
                        statusMessage.remove()
                    },1000)
                    setTimeout(()=>{
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
                    },2000)
                }
            ).catch(error => {
                statusMessage.textContent = "Error"
            });
            
        } else {
            statusMessage.textContent = "Error"
            setTimeout(()=>{
                name.value = ""
                phone.value = ""
                statusMessage.remove()
            },1000)
            
        }
    })


}
export default formSender;