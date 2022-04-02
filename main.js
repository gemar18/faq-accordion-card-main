
const questions=document.querySelectorAll(".question");

     questions.forEach((question) => {
     question.addEventListener("click", validate);
     });  
   
function validate() {
     this.classList.toggle("active-question");
     this.classList.toggle("active");

     this.nextElementSibling.classList.toggle("active-answer");

}
