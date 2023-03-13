
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);


let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  

  engine(username, 0, "Please enter a valid name");
  engine(email, 1, "Please enter a valid email address");
  engine(Password, 2, "Password must be at least 8 characters long");
});



let engine = (id, serial, message) =>{
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  }
   else{
    errorMsg[serial].innerHTML = "";
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};




























