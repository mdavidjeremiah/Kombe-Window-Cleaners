function toggleMenu() {
    document.getElementById('navlinks').classList.toggle('show');
}

function sendQuote(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    const text = `Hello KOMBE The Window Cleaners. My name is ${name}. Phone: ${phone}. I need: ${service}. Details: ${message}`;
    window.open('https://wa.me/256743164138?text=' + encodeURIComponent(text), '_blank');
}