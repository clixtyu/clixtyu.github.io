const scriptURL = 'https://script.google.com/macros/s/AKfycby7uE1HGaPxqjkgsAYNlvWAF6eSSiI2YLAydmEHl2w2zi1k6dykN-PEsoINNvajzzM7/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})