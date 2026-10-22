
document.addEventListener("DOMContentLoaded", function () {

    // Update copyright year automatically
    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Back to Top button
    const backToTop = document.getElementById("backToTop");

    if (backToTop) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // Close mobile navigation after clicking a link
    const navLinks = document.querySelectorAll(
        "#navbarMenu .nav-link"
    );

    const navbarMenu = document.getElementById("navbarMenu");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            if (
                navbarMenu &&
                navbarMenu.classList.contains("show")
            ) {
                const menu = bootstrap.Collapse.getOrCreateInstance(
                    navbarMenu,
                    { toggle: false }
                );

                menu.hide();
            }
        });
    });

});
