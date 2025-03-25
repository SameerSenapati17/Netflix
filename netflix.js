// 1. Language Selection Persistence
document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("language-select");
  if (languageSelect) {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      languageSelect.value = savedLanguage;
    }

    // Save language selection to localStorage
    languageSelect.addEventListener("change", () => {
      localStorage.setItem("selectedLanguage", languageSelect.value);
    });
  }
});

// 2. Email Validation on Sign-up
const emailInput = document.getElementById("email-input");
const signUpButton = document.getElementById("sign-up-button");

if (emailInput && signUpButton) {
  signUpButton.addEventListener("click", (e) => {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      e.preventDefault();
      alert("Please enter a valid email address.");
    }
  });
}

// 3. Video Play on Hover
const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach((card) => {
  const video = card.querySelector("video");
  if (video) {
    card.addEventListener("mouseenter", () => {
      video.play();
    });

    card.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0; // Reset video to the start
    });
  }
});

// 4. Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");

if (darkModeToggle) {
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Toggle the icon
    const icon = darkModeToggle.querySelector("i");
    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }

    // Save dark mode preference in localStorage
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  });

  // Load dark mode preference on page load
  const savedDarkMode = localStorage.getItem("darkMode");
  if (savedDarkMode === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeToggle.querySelector("i").classList.remove("fa-moon");
    darkModeToggle.querySelector("i").classList.add("fa-sun");
  }
}

// 5. Accordion-style FAQ Section
// const faqItems = document.querySelectorAll(".faq-item");

// faqItems.forEach((item) => {
//   const question = item.querySelector(".faq-question");
//   const answer = item.querySelector(".faq-answer");

//   if (question && answer) {
//     question.addEventListener("click", () => {
//       const isExpanded = answer.classList.contains("expanded");

//       // Collapse all other answers
//       faqItems.forEach((otherItem) => {
//         const otherAnswer = otherItem.querySelector(".faq-answer");
//         if (otherAnswer) {
//           otherAnswer.classList.remove("expanded");
//           otherAnswer.style.maxHeight = null;
//         }
//       });

//       // Toggle the clicked answer
//       if (!isExpanded) {
//         answer.classList.add("expanded");
//         answer.style.maxHeight = answer.scrollHeight + "px";
//       } else {
//         answer.classList.remove("expanded");
//         answer.style.maxHeight = null;
//       }
//     });
//   }
// });