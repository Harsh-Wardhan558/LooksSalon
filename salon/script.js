document.addEventListener("DOMContentLoaded", function () {
    // Mobile Navigation Toggle
    const navToggle = document.createElement("button");
    navToggle.innerText = "☰";
    navToggle.classList.add("nav-toggle");
    document.querySelector("header nav").prepend(navToggle);

    navToggle.addEventListener("click", function () {
        document.querySelector("nav ul").classList.toggle("show");
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");
            if (targetId.startsWith("#")) {
                event.preventDefault();
                document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Form Validation (For Booking & Contact Forms)
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission
            let isValid = true;
            const inputs = this.querySelectorAll("input, textarea");

            inputs.forEach(input => {
                if (input.hasAttribute("required") && input.value.trim() === "") {
                    input.classList.add("error");
                    isValid = false;
                } else {
                    input.classList.remove("error");
                }
            });

            if (isValid) {
                alert("Form submitted successfully!");
                this.reset();
            }
        });
    });

    // Auto-update Footer Year
    document.querySelector("footer p").innerHTML = `&copy; ${new Date().getFullYear()} Looks Salon. All Rights Reserved.`;
});
