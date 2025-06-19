// Loader Removal
window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Scroll Popup
window.addEventListener("scroll", () => {
  const popup = document.getElementById("popup");
  if (window.scrollY > 200) {
    popup.style.display = "block";
  }
});

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Chart.js - Graph
window.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById('salesGraph').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Sales',
        data: [120, 150, 180, 200, 170],
        backgroundColor: '#8B4513'
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
});