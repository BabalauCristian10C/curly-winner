const formSender = () =>{
    const name = document.querySelector(".form-control"),
        phone = document.querySelector(".tel");

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

        if(target.value){
            if(target.value.length <2){
                if(!target.classList.contains("unactive"))     
                {
                    target.classList.add("unactive");
                }    
            }
            else if (target.value.length > 1){
                if(target.classList.contains("unactive")) 
                {
                    target.classList.remove("unactive")   
                }  
            }
        }
        
    }
    const phoneCheck = (e) =>{
        const target = e.target;
        target.value = target.value.replace(/[^0-9+]/gi, "")
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
                        console.log(response.status)
                        statusMessage.textContent = "Completed"
                    }
                }
            ).catch(error => {statusMessage.textContent = "Error"});
        } else {
            statusMessage.textContent = "Error"
        }
    })


}
export default formSender;