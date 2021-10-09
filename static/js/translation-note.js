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
    var modal = document.getElementsByClassName("modal")[0];
    if (event.target == modal) {
        modal.style.display = "none";
    }
}