document.addEventListener("DOMContentLoaded",
function (){
    const form = document.getElementById("form");
    const message = document.getElementById("message");

    form.addEventListener("submit",function(event){
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if(name === "" || email === ""){
            alert("please fill in all fields");
            return;
        }
         message.classList.add("show");
         message.focus();

         setTimeout(function(){
            window.location.href = "about.html";
         }, 2000);
    });
});