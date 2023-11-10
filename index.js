document.querySelector("#form").addEventListener("submit", submitFun);
function submitFun(elme) { 
    elme.preventDefault();
    username = document.querySelector("#name").value; password = document.querySelector("#password").value;
    if (username == "Himanshutiwari" && password == "2200910139007"){ 
        window.location.href = "student.html";
    } else {
    alert("Invalid username or password"); 
    document.querySelector("#form").reset();
 }
}
