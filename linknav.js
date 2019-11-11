var links = document.querySelectorAll("a");

links.forEach(link => {
    link.addEventListener("mouseover", function() {
        link.classList.add("active");
    });
    link.addEventListener("mouseleave", function() {
        link.classList.remove("active")
    })
});