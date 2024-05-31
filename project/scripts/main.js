document.addEventListener('DOMContentLoaded', function () {
    // Dynamic Year into Footer
    const yearField = document.getElementById('year');
    let year = new Date();
    year = year.getFullYear();

    yearField.innerText = year;



    // Form Validation
    const form = document.getElementById('inquiryForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const destination = document.getElementById('destination').value;
        const people = document.getElementById('people').value;
        const checkin = new Date(document.getElementById('checkin').value).getDate();
        const checkout = new Date(document.getElementById('checkout').value).getDate();

        if (destination === '' || people === '' || checkin === '' || checkout === '') {
            alert('Please fill in all fields.');
        } else if (isNaN(people) || people <= 0) {
            alert('Please enter a valid number of people.');
        } else if (checkin < checkout) {
            alert('Check out date should be on or after Check in date')
        } else {
            alert('Form submitted successfully!');
            form.submit();
        }
    });


    // Scroll to Top Button
    const scrollToTopButton = document.getElementById('scrollToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('show');
        } else {
            scrollToTopButton.classList.remove('show');
        }
    });

    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})