document.addEventListener('DOMContentLoaded', ()=> {
  const form = document.getElementById('contactForm');
  const result = document.getElementById('formResult');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if(!name || !email || !message){
      result.textContent = 'Please fill all fields.';
      result.style.color = 'crimson';
      return;
    }

    // Simulate send (since no backend) and show Summary
    result.style.color = 'green';
    result.textContent = `Thanks ${name}! Your message was "sent" — (demo). We'll email you at ${email}.`;

    // Reset after a short delay
    setTimeout(() => form.reset(), 1200);
  });
});