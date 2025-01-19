document.addEventListener("DOMContentLoaded", function() {
    const btns = document.querySelectorAll(".btn");

    btns.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.2)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
        });
    });
});
