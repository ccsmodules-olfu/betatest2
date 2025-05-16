document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scrolling for Navbar Links (Only for Same-Page Links)
  document.querySelectorAll(".nav-links a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        e.preventDefault();
        window.scrollTo({
          top: targetSection.offsetTop - 50, // Adjust for fixed navbar
          behavior: "smooth",
        });
      }
    });
  });

  // Highlight Active Navigation Link Based on Page
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const linkPath = link.getAttribute("href").split("/").pop();
    const currentPage = window.location.pathname.split("/").pop();

    if (linkPath === currentPage) {
      link.classList.add("active");
    }
  });

  // Floating Contact Tooltip Animation
  document.querySelectorAll(".contact-hover").forEach((item) => {
    const details = item.querySelector(".contact-popup");
    if (details) {
      let timeout;

      item.addEventListener("mouseenter", () => {
        clearTimeout(timeout);
        details.style.display = "block";
        setTimeout(() => {
          details.style.opacity = "1";
          details.style.transform = "translateY(0)";
          details.style.visibility = "visible";
        }, 50);
      });

      item.addEventListener("mouseleave", () => {
        timeout = setTimeout(() => {
          details.style.opacity = "0";
          details.style.transform = "translateY(10px)";
          details.style.visibility = "hidden";
        }, 1000); // Increased delay so it doesn't disappear too quickly
      });
    }
  });

  // Scroll Animation for Sections (Fade + Slide-Up)
  const sections = document.querySelectorAll(
    "section, .floating-contact-bar, .address"
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));

  // Event Filtering Function
  function showEvents(type) {
    document.querySelectorAll(".event-card").forEach((eventCard) => {
      eventCard.style.display =
        type === "all" ||
        eventCard.querySelector("h3").textContent.includes(type)
          ? "block"
          : "none";
    });
  }

  // Initialize Showing All Events
  showEvents("all");

  // Login Form Validation with inline message instead of alert
  const loginForm = document.getElementById("login-form");
  const loginError = document.getElementById("login-error");

  if (loginForm && loginError) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      const validPassword = "SURNAME-OLFU-VAL"; // Your actual password

      if (validateEmail(email) && password === validPassword) {
        loginError.style.display = "none";
        loginError.style.color = "green";
        loginError.textContent = "Login Successful! Redirecting...";
        setTimeout(() => {
          window.location.href = "home.html";
        }, 1000);
      } else {
        loginError.style.display = "block";
        loginError.style.color = "red";
        loginError.textContent =
          "Invalid login. Please use your Fatima Gmail and the correct password.";
      }
    });
  }

  // Email Validation Function
  function validateEmail(email) {
    return email.endsWith("@student.fatima.edu.ph");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  dropdown.addEventListener("click", function (event) {
    event.preventDefault();
    this.classList.toggle("active");
    this.querySelector(".dropdown-menu").classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let fcmsMenuItem = document.querySelector(".fcms-dropdown");
  let subMenu = document.querySelector(".fcms-dropdown .sub-menu");

  if (fcmsMenuItem && subMenu) {
    fcmsMenuItem.addEventListener("mouseenter", function () {
      subMenu.style.display = "block";
    });

    fcmsMenuItem.addEventListener("mouseleave", function () {
      subMenu.style.display = "none";
    });
  }
});
