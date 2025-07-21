// script.js
document.getElementById("mobile-menu").addEventListener("click", function () {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
});
// script.js

// const text = "Aanchal Jagga, a Full Stack Web Developer.";
// const subtext = "A passionate developer who crafts scalable web apps and impactful user experiences.";

// let i = 0, j = 0;

// function typeMainText() {
//   if (i < text.length) {
//     document.getElementById("typing-text").innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typeMainText, 100);
//   } else {
//     setTimeout(typeSubText, 300);
//   }
// }

// function typeSubText() {
//   if (j < subtext.length) {
//     document.getElementById("typing-subtext").innerHTML += subtext.charAt(j);
//     j++;
//     setTimeout(typeSubText, 40);
//   }
// }

// window.onload = typeMainText;

const text = "Software Engineer | AI/ML Enthusiast";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 40); // speed of typing
  }
}

window.addEventListener("load", () => {
  typingElement.textContent = ""; // Clear existing text (if any)
  typeWriter();
});


  const form = document.querySelector('.contact-form');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    const response = await fetch(form.action, {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.result === 'success') {
      alert('Your message has been sent successfully!');
      form.reset();
    } else {
      alert('Oops! Something went wrong. Please try again later.');
      console.error(result.error);
    }
  });


  const loader = form.querySelector(".form-loader");
  const successMessage = form.querySelector(".form-success");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    loader.style.display = "flex";
    successMessage.style.display = "none";

    const formData = new FormData(form);
    const url = form.action;

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      loader.style.display = "none";

      if (result.result === "success") {
        successMessage.style.display = "block";
        form.reset();
      } else {
        alert("❌ Something went wrong:\n" + result.error);
      }
    } catch (err) {
      loader.style.display = "none";
      alert("❌ Network error:\n" + err.message);
    }
  });