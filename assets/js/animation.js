console.log("animations.js loaded successfully!");

document.addEventListener("DOMContentLoaded", () => {
    console.log("Animations initialized.");

    // Ensuring elements fade in dynamically
    const subheading = document.querySelector(".subheading");
    const heroTitle = document.querySelector(".hero-title");
    const quickLinks = document.querySelector(".quick-links-container");

    setTimeout(() => subheading.classList.add("fade-in"), 300);
    setTimeout(() => heroTitle.classList.add("fade-in"), 600);
    setTimeout(() => quickLinks.classList.add("fade-in"), 900);

    // Fixing Logo Hover Effect
    const logo = document.querySelector(".logo img");
    if (logo) {
        logo.addEventListener("mouseenter", () => {
            logo.style.transform = "scale(1.1)";
        });
        logo.addEventListener("mouseleave", () => {
            logo.style.transform = "scale(1)";
        });
    }

    // NEON SLIDER EFFECT
    const directionalCards = document.querySelectorAll(".directional-card");
    directionalCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("neon-glow");
        }, 1200 + index * 150);
    });
});
