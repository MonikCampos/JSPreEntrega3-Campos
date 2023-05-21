const acordeon = document.getElementsByClassName("acordeon");
const icon = document.getElementsByClassName("icon");

for (let i = 0; i < acordeon.length; i++) {
    acordeon[i].addEventListener("click", function () {
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            icon[i].classList.remove('fa-minus');
            icon[i].classList.add('fa-plus');
            panel.style.display = "none";
        } else { 
            if ( panel.style.display = "none") {
            icon[i].classList.remove('fa-plus');
            icon[i].classList.add('fa-minus');
            panel.style.display = "block";
            }
        }
    });
}