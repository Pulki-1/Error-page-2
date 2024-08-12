document.querySelector('.home-button').addEventListener('click', function() {
    window.location.href = '/';
});

document.querySelector('.contact-button').addEventListener('click', function() {
    window.location.href = '/contact';
});

document.addEventListener('DOMContentLoaded', () => {
    const errorBox = document.querySelector('.container');
    errorBox.classList.add('fade-in');
});

const style = document.createElement('style');
style.innerHTML = `
.fade-in {
    opacity: 0;
    animation: fadeIn 2.5s forwards;
}

@keyframes fadeIn {
    100% { opacity: 1; }
}`;
document.head.appendChild(style);

setTimeout(() => {
    document.querySelector('.error-code').style.color = '#FF9933';
    document.querySelector('.error-message').style.color = '#1A1A1A';
}, 1000);

const footerLinks = document.querySelectorAll('.footer a');
footerLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#138808';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#FF9933';
    });
});
