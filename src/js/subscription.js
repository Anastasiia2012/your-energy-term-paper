const form = document.getElementById('subscription-form');
const message = document.getElementById('subscription-message');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  const email = event.target.email.value;

  fetch('https://your-energy.b.goit.study/api/subscription', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
    .then(response => response.json())
    .then(data => {
      message.innerHTML = data.message
        message.classList.remove('opacity-0');
        message.classList.add('opacity-100');
    })
    .catch(error => {
      console.error('Error:', error);
    });
});