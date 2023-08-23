const faqs = document.querySelectorAll(".faq-right");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})
