// Translation note modal
function getTLNote (id){
    var modal = document.getElementById(id);
    modal.style.display = "block";
}

function closeTLNote(id){
    var modal = document.getElementById(id);
    modal.style.display = "none";
}

// Close if @clickaway from modal
window.onclick = function(event) {
    var modal = document.getElementsByClassName("modal");
    
    for(m=0; m<modal.length; m++){
        if (event.target == modal[m]) {
            modal[m].style.display = "none";
            break;
        }
    }
}

const darkToggler = document.querySelector(".dark-toggler");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

darkToggler.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
});