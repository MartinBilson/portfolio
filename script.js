// Dark Mode Toggle
const darkModeToggle = document.getElementById('toggleDark');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
});

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active');
});

// Form Submission using Formspree (or Netlify Forms)
const form = document.getElementById('contactForm');
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);
  
  try {
    // Example for Formspree
    const response = await fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      alert('Thank you for contacting me!');
      form.reset();
    } else {
      alert('There was an issue submitting the form. Please try again.');
    }
  } catch (error) {
    alert('An error occurred. Please try again later.');
  }
});

// CV Download Button (Optional)
const downloadBtn = document.getElementById('downloadCV');
downloadBtn.addEventListener('click', () => {
  const cvLink = 'path/to/your/cv.pdf'; // Replace with actual CV URL
  window.open(cvLink, '_blank');
});

// Optional: Add smooth scroll behavior (enhance UX)
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 70, // Adjust the scroll offset for header
      behavior: 'smooth'
    });
  });
});
