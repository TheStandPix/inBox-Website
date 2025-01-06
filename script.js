
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');

  // Handle form submission
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent actual form submission
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      // Simulate form handling
      if (name && email && message) {
        successMessage.classList.remove('hidden'); // Show success message
        successMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        contactForm.reset(); // Reset form
      } else {
        successMessage.classList.remove('hidden');
        successMessage.textContent = 'Please fill out all fields.';
      }
    });
  }
});
