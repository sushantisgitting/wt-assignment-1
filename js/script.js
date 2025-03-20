document.addEventListener("DOMContentLoaded", function () {
    // Activate Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Form validation for the contact page
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission
            alert("Thank you for reaching out! We will get back to you soon.");
            contactForm.reset(); // Reset form fields
        });
    }

    // Gallery modal functionality
    const galleryImages = document.querySelectorAll(".gallery img");
    galleryImages.forEach(img => {
        img.addEventListener("click", function () {
            const modalImg = document.querySelector("#galleryModal img");
            modalImg.src = this.src;
            new bootstrap.Modal(document.getElementById("galleryModal")).show();
        });
    });
});
