const faqs = document.querySelectorAll(".faq-right");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})

const intersectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry);
        entry.target.classList.toggle("show", entry.isIntersecting);
    })
})

const elements = document.querySelectorAll(".animate");

elements.forEach(el => intersectObserver.observe(el));