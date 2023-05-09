const passwordinput = document.querySelector(".pass-field input")
const eyeIcon = document.querySelector(".pass-field i")
const requrimentList = document.querySelectorAll(".requirments-list li")

//An array of password requirments with corresponding
//regular expressions and index of the requirments list item
const requirments = [
{ regex: /.{8,}/, index: 0},//Minimum 8 characters
{ regex: /.[0-9]/, index: 1},//at leaast one number
{ regex: /.[a-z]/, index: 2},//at least one character
{ regex: /.[^A-Za-z0-9]/, index: 3},//at least one special charcter
{ regex: /.[A-Z]/, index: 4}//at least one uppercase letter
];

passwordinput.addEventListener("keyup",(e) =>{
    requirments.forEach(item => {
  //check password if the password matches the requriment regex
  const isValid = item.regex.test(e.target.value);
  const requirmentItem = requrimentList[item.index]; 

  //updating class and icon of the requirment item if requirment matched or not
  if(isValid){
      requirmentItem.firstElementChild.className = "fa-solid fa-check";
      requirmentItem.classList.add("valid");
  }else{
      requirmentItem.firstElementChild.className = "fa-solid fa-check";
      requirmentItem.classList.remove("valid")
  }
    });
});

eyeIcon.addEventListener("click",()=>{
    //toggle password input type between "password" and text
 passwordinput.type = passwordinput.type === "password" ? "text" :"password";

 //
 eyeIcon.className = `fa-solid fa-eye${passwordinput.type === "password" ? "" : "-slash"}`;
})