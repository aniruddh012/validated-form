let validName = false;
let validEmail = false;
let validAbout = false;
let checkBoxChecked= false;
let name = document.getElementById("name");
name.addEventListener('blur', ()=>{
    let str= name.value;
    let regex = /^[a-zA-Z]([\ a-zA-Z]){5,40}$/;
    if(regex.test(str)){
        name.classList.remove("is-invalid")
        validName= true;
    }else{
        name.classList.add("is-invalid")
        validName = false;
    }
})

let email = document.getElementById("email");
email.addEventListener('blur', ()=>{
    let str= email.value;
    let regex = /^([a-zA-Z0-9]){5,50}@([a-z]){5,10}\.([a-z]){1,10}$/;
    if(regex.test(str)){
        email.classList.remove("is-invalid")
        validEmail = true;
    }else{
        email.classList.add("is-invalid")
        validEmail = false;
    }
})

let aboutText = document.getElementById("aboutText");
aboutText.addEventListener('blur', ()=>{
    if(aboutText.value != ""){
        aboutText.classList.remove("is-invalid")
        validAbout = true;
    }else{
        aboutText.classList.add("is-invalid")
        validAbout = false;
    }
})
let communityForm = document.getElementById("communityForm");
communityForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(name.value==""){
        name.classList.add("is-invalid")
    }  
    if(email.value==""){
        email.classList.add("is-invalid")
    }
    if(aboutText.value==""){
        aboutText.classList.add("is-invalid")
    }

    let language;
    let pyRadio = document.getElementById("pyRadio");
    let jsRadio = document.getElementById("jsRadio");
    if(pyRadio.checked){
        language = pyRadio.value;
    }
    else if(jsRadio.checked){
        language = jsRadio.value;
    };

    let checkBox = document.getElementById("checkBox");
    if(checkBox.checked){
        checkBoxChecked = true;
        checkBox.classList.remove("is-invalid");
    }
    else{
        checkBox.classList.add("is-invalid");
        checkBoxChecked = false;
    }

    if(validName & validEmail & validAbout & checkBoxChecked){
        alert("All data is valid")
    }
})
