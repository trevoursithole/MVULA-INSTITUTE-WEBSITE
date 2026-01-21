document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get values from form
        const name = document.getElementById('studentName').value;
        const grade = document.getElementById('grade').value;
        const phone = document.getElementById('parentPhone').value;
        
        // Get Checked Subjects
        const subjects = [];
        document.querySelectorAll('input[name="subject"]:checked').forEach((checkbox) => {
            subjects.push(checkbox.value);
        });

        if (subjects.length === 0) {
            alert("Please select at least one subject (Maths or Science).");
            return;
        }

        // Create the WhatsApp Message
        const message = `Hello Mvula Institute! I would like to register a student:%0A%0A` +
                        `*Student Name:* ${name}%0A` +
                        `*Grade:* ${grade}%0A` +
                        `*Subjects:* ${subjects.join(" & ")}%0A` +
                        `*Parent Contact:* ${phone}%0A%0A` +
                        `Please let me know the next steps for registration at Rebonwe Primary.`;

        // Your primary WhatsApp number
        const myNumber = "27642412738"; 

        // Redirect to WhatsApp
        window.open(`https://wa.me/${myNumber}?text=${message}`, '_blank');
    });

    // Scroll reveal logic (keep your previous scroll logic here)
    revealElements();
});

const revealElements = () => {
    const reveals = document.querySelectorAll("section, header");
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
};
window.addEventListener("scroll", revealElements);
// FAQ Accordion Logic
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const answer = button.nextElementSibling;
        const icon = button.querySelector('i');

        // Close other FAQ items
        document.querySelectorAll('.faq-answer').forEach(el => {
            if (el !== answer) {
                el.style.maxHeight = null;
                el.parentElement.classList.remove('border-blue-500');
                el.previousElementSibling.querySelector('i').style.transform = "rotate(0deg)";
            }
        });

        // Toggle current item
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