"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById('registrationForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Get values from form

    var name = document.getElementById('studentName').value;
    var grade = document.getElementById('grade').value;
    var phone = document.getElementById('parentPhone').value; // Get Checked Subjects

    var subjects = [];
    document.querySelectorAll('input[name="subject"]:checked').forEach(function (checkbox) {
      subjects.push(checkbox.value);
    });

    if (subjects.length === 0) {
      alert("Please select at least one subject (Maths or Science).");
      return;
    } // Create the WhatsApp Message


    var message = "Hello Mvula Institute! I would like to register a student:%0A%0A" + "*Student Name:* ".concat(name, "%0A") + "*Grade:* ".concat(grade, "%0A") + "*Subjects:* ".concat(subjects.join(" & "), "%0A") + "*Parent Contact:* ".concat(phone, "%0A%0A") + "Please let me know the next steps for registration at Rebonwe Primary."; // Your primary WhatsApp number

    var myNumber = "27642412738"; // Redirect to WhatsApp

    window.open("https://wa.me/".concat(myNumber, "?text=").concat(message), '_blank');
  }); // Scroll reveal logic (keep your previous scroll logic here)

  revealElements();
});

var revealElements = function revealElements() {
  var reveals = document.querySelectorAll("section, header");
  reveals.forEach(function (el) {
    var windowHeight = window.innerHeight;
    var elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

window.addEventListener("scroll", revealElements); // FAQ Accordion Logic

document.querySelectorAll('.faq-question').forEach(function (button) {
  button.addEventListener('click', function () {
    var faqItem = button.parentElement;
    var answer = button.nextElementSibling;
    var icon = button.querySelector('i'); // Close other FAQ items

    document.querySelectorAll('.faq-answer').forEach(function (el) {
      if (el !== answer) {
        el.style.maxHeight = null;
        el.parentElement.classList.remove('border-blue-500');
        el.previousElementSibling.querySelector('i').style.transform = "rotate(0deg)";
      }
    }); // Toggle current item

    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      icon.style.transform = "rotate(0deg)";
      faqItem.classList.remove('border-blue-500', 'shadow-lg');
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      icon.style.transform = "rotate(180deg)";
      faqItem.classList.add('border-blue-500', 'shadow-lg');
    }
  });
});
//# sourceMappingURL=script.dev.js.map
