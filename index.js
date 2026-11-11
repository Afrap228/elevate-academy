// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    menuBtn.textContent =
        navMenu.classList.contains("active") ? "✕" : "☰";

});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll("#navMenu a").forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});


// SCROLL ANIMATION

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.12
});

revealElements.forEach(function (element) {

    observer.observe(element);

});


// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();

    const email = document.getElementById("studentEmail").value.trim();

    const phone = document.getElementById("studentPhone").value.trim();

    const course = document.getElementById("courseSelect").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !phone || !course) {

        formMessage.textContent = "Please complete all required fields.";

        return;

    }

    if (!emailPattern.test(email)) {

        formMessage.textContent = "Please enter a valid email address.";

        return;

    }

    if (!/^[0-9+\-\s()]{7,20}$/.test(phone)) {

        formMessage.textContent = "Please enter a valid phone number.";

        return;

    }

    formMessage.textContent =
        "Thank you, " + name + "! Your " + course + " enquiry has been submitted (demo).";

    contactForm.reset();

});


// DYNAMIC FOOTER YEAR

document.getElementById("year").textContent = new Date().getFullYear();