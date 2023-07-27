const messageInput = document.getElementById("message-input");
const submit = document.getElementById("submit");


submit.addEventListener("click", getMessage);



messageInput.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
    getMessage();
}
})


function getMessage(){
    document.getElementById("message-output").innerHTML = messageInput.value;
    messageInput.value = "";
}