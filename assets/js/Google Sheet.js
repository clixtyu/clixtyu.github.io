document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const pesan = document.getElementById('pesan').value;

  fetch('https://script.google.com/macros/s/AKfycbymF5cb0q_8AD96hqQw6DbO9uMdv7KS549RVkN6r8e8C49Kkxi9uncw6ze-P6NrKktT6w/exec', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `nama=${encodeURIComponent(nama)}&email=${encodeURIComponent(email)}&pesan=${encodeURIComponent(pesan)}`
  })
  .then(response => response.json())
  .then(data => {
    if (data.result === 'success') {
      document.getElementById('status').innerText = 'Message sent successfully!';
    } else {
      document.getElementById('status').innerText = 'Error sending message!';
    }
  })
  .catch(error => {
    document.getElementById('status').innerText = 'Error sending message!';
    console.error('Error:', error);
  });

  document.getElementById('contact-form').reset();
}
