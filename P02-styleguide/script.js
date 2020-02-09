function changeNavBackground() {
    var scroll = document.scrollTop();
    
    if (scroll >= 97) {
        document.getElementById("top-nav").backgroundColor = 'white';
    } else {
        document.getElementById("top-nav").backgroundColor = 'rgb(255, 255, 255, 0)';
    }
}