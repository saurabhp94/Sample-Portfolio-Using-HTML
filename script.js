const form = document.getElementById('form');
const recommendationsSection = document.getElementById('recommendations');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nameInput = document.getElementById('nametext');
    const messageInput = document.getElementById('textmessage');

    if (messageInput.value.trim() === '') {
        alert('Please enter a message before submitting.');
        return;
    }

    const newRecommendation = document.createElement('div');
    newRecommendation.className = 'recommendation';

    const recommendationText = document.createElement('p');
    const nameValue = nameInput.value.trim() || 'Anonymous';
    recommendationText.textContent = `"${messageInput.value.trim()}" - ${nameValue}`;

    newRecommendation.appendChild(recommendationText);
    recommendationsSection.appendChild(newRecommendation);

    alert('Your recommendation has been submitted successfully!');

    nameInput.value = '';
    messageInput.value = '';
});