// main.js

document.addEventListener("DOMContentLoaded", () => {
  setYear();
  loadServices();
});

// Put current year in footer
function setYear() {
  const yearSpan = document.getElementById("year");
  if (!yearSpan) return;
  yearSpan.textContent = new Date().getFullYear();
}

// Load services from data/services.json (Services page only)
function loadServices() {
  const container = document.getElementById("services-grid");
  if (!container) return;

  fetch("data/services.json")
    .then((res) => res.json())
    .then((services) => {
      services.forEach((service) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <h3>${service.title}</h3>
          <p>${service.summary}</p>
          <p class="form-note"><strong>Best for:</strong> ${service.idealClient}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch((err) => {
      console.error("Error loading services:", err);
      container.innerHTML =
        "<p>We’ll update our service list shortly. Please contact us for details.</p>";
    });
}
