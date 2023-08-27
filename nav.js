const navBar = document.getElementById("nav-links");

function openElement(element) {
    const navBarBtn = document.getElementById("nav-menu");

    navBarBtn.addEventListener("click", function () {
        element.classList.add("visible", 'nav-shadow');
    });
}

function hideElement(element) {
    const closeBtn = document.getElementById("close-menu");

    closeBtn.addEventListener("click", function () {
        element.classList.remove("visible", 'nav-shadow');
    });
}

openElement(navBar);
hideElement(navBar);