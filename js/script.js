// Smooth fade-in for elements
document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("main");
    main.style.opacity = 0;
    main.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        main.style.transition = "all 0.8s ease-in-out";
        main.style.opacity = 1;
        main.style.transform = "translateY(0)";
    }, 200);

    // Input placeholder animation
    const searchInput = document.querySelector("main input");
    searchInput.addEventListener("focus", () => {
        searchInput.placeholder = "Type something delicious...";
    });
    searchInput.addEventListener("blur", () => {
        searchInput.placeholder = "Search for restaurant, cuisine or a dish";
    });

    document.querySelectorAll("header ul li a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); // Stop immediate navigation
        link.style.transform = "scale(0.9)";
        setTimeout(() => {
            link.style.transform = "scale(1)";
            window.location.href = link.href; // Navigate after animation
        }, 150);
    });
});

//About page JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const aboutHeading = document.querySelector("main h1");
    const aboutContainer = document.querySelector(".about-container");

    if (aboutHeading && aboutContainer) {
        aboutHeading.style.opacity = 0;
        aboutContainer.style.opacity = 0;

        setTimeout(() => {
            aboutHeading.style.transition = "opacity 0.8s ease-in-out";
            aboutHeading.style.opacity = 1;
        }, 200);

        setTimeout(() => {
            aboutContainer.style.transition = "opacity 1s ease-in-out";
            aboutContainer.style.opacity = 1;
        }, 500);
    }
});




/*
//Contact page JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent form from actually submitting

            // Get values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Simple validation
            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }

            // Email format check
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Success message
            alert("Thank you for contacting us, " + name + "! We will get back to you soon.");
            form.reset();
        });
    }
});

*/

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault(); // Prevent form from actually submitting

            // Get values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            // Remove any old success messages
            const oldMsg = document.querySelector(".success-message");
            if (oldMsg) oldMsg.remove();

            // Simple validation
            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }

            // Email format check
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // ✅ Success message on page
            const successMsg = document.createElement("p");
            successMsg.textContent = "✅ Thank you for contacting us, " + name + "! We will get back to you soon.";
            successMsg.classList.add("success-message");
            successMsg.style.color = "green";
            successMsg.style.marginTop = "10px";
            form.appendChild(successMsg);

            // Reset form
            form.reset();
        });
    }
});
