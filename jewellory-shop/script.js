// ---------------------- NAVBAR ----------------------
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  if (navLinks) {
    navLinks.classList.toggle('show');
  }
}

// Highlight current page link
const currentPage = location.pathname.split('/').pop();
document.querySelectorAll('.nav a').forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

// ---------------------- CAROUSEL ----------------------
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  let slides = Array.from(document.querySelectorAll('.slide'));
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  // Only proceed if carousel exists
  if (track && slides.length > 0) {

    // Clone slides once for infinite effect
    slides.forEach(slide => track.appendChild(slide.cloneNode(true)));
    slides = Array.from(document.querySelectorAll('.slide'));

    let index = 0;

    function updateSlides() {
      slides.forEach(slide => {
        slide.classList.remove('active', 'prev-slide', 'next-slide');
      });

      const total = slides.length;
      const active = index % total;
      const prev = (index - 1 + total) % total;
      const next = (index + 1) % total;

      slides[active].classList.add('active');
      slides[prev].classList.add('prev-slide');
      slides[next].classList.add('next-slide');

      const slideWidth = slides[0].clientWidth + 20; // adjust margin/padding
      track.style.transform = `translateX(${-active * slideWidth}px)`;
    }

    // Attach event listeners safely
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        index--;
        updateSlides();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        index++;
        updateSlides();
      });
    }

    // Auto slide every 3s
    setInterval(() => {
      index++;
      updateSlides();
    }, 3000);

    updateSlides();
  }
});

// ---------------------- EMAILJS ----------------------

// Initialize EmailJS
(function() {
  emailjs.init("m3yPlLJvxv8lCx6-d"); // Your PUBLIC KEY
})();

function sendMail() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  // Check if elements exist
  if (!name || !email || !message) {
    alert("Form elements not found!");
    return;
  }

  const params = {
    user_name: name.value.trim(),
    user_email: email.value.trim(),
    message: message.value.trim() // Must match EmailJS template variable
  };

  // Validate fields
  if (!params.user_name || !params.user_email || !params.message) {
    alert("Please fill all fields!");
    return;
  }

  emailjs
    .send("service_m891qkb", "template_1ki01jd", params)
    .then(response => {
      alert("Message Sent Successfully!");
      const form = document.getElementById("contact-form");
      if (form) form.reset();
      console.log("SUCCESS!", response.status, response.text);
    })
    .catch(error => {
      alert("Failed to send message.");
      console.log("FAILED...", error);
    });
}
