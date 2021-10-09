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