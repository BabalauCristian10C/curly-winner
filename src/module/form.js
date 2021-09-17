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
    name.addEventListener("blur", nameCyr);
    phone.addEventListener("blur", phoneCheck);

}
export default formSender;