const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const particleContainer = document.querySelector(".particle-container");

for (let i = 0; i < 40; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDuration = (Math.random() * 8 + 5) + "s";
    particle.style.animationDelay = Math.random() * 5 + "s";

    particleContainer.appendChild(particle);
}