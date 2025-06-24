const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const feedback = document.querySelector('#feedback');

let selectedRating = 'Happy';

ratingsContainer.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML || e.target.innerHTML;
    }
});

sendBtn.addEventListener('click', () => {
    feedback.innerHTML = `
        <i class="fas fa-heart" style="color: red; font-size: 24px;"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>`;
});

function removeActive() {
    ratings.forEach((rating) => rating.classList.remove('active'));
}
