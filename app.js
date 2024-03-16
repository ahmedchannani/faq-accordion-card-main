let elements = document.querySelectorAll(".faq").forEach(element => {
  element.addEventListener("click", function(){
    // this.querySelector("img").style.transform="rotate(180deg)"
   this.classList.toggle("active");


  })
});