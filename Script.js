// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Simple scroll animation
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

const text = "Cyber Security Student";
const typingText = document.getElementById("typing-text");

let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

const cursorGlow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
});

document.addEventListener("mousemove", (e) => {
    const particle = document.createElement("span");
    particle.className = "cursor-particle";

    particle.style.left = e.clientX + "px";
    particle.style.top = e.clientY + "px";

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 600);
});