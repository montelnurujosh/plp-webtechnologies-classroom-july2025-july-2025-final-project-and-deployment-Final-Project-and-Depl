// Form validation and message
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const msg = document.getElementById("message").value.trim();

      if (name === "" || email === "" || msg === "") {
        message.textContent = "⚠️ Please fill in all fields.";
        message.style.color = "red";
      } else {
        message.textContent = "✅ Message sent successfully!";
        message.style.color = "green";
        form.reset();
      }
    });
  }
});
