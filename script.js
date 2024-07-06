document.addEventListener('DOMContentLoaded', () => {
    // Accordion functionality
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name === '' || email === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    // Fetch data from external API
    const dataContainer = document.getElementById('dataContainer');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('data-item');
                div.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
                dataContainer.appendChild(div);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            dataContainer.innerHTML = '<p>Failed to load data.</p>';
        });
});
