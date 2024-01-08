function toggleSection(sectionId) {
    var content = document.getElementById(sectionId + '-content');
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

//NewLeter
function subscribe() {
    var email = document.getElementById('email').value;
    if (validateEmail(email)) {
        document.getElementById('confirmation-message').innerHTML = 'Thank you for subscribing to our newsletter!';
        document.getElementById('newsletter-form').reset();
        return false; // Prevents the form from submitting (for demo purposes)
    } else {
        alert('Please enter a valid email address.');
        return false;
    }
}

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
