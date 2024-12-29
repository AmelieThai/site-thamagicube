// script.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.view-details');
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        alert('More details about this project coming soon!');
      });
    });
  
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Thank you for reaching out! I will get back to you shortly.');
      contactForm.reset();
    });
  });