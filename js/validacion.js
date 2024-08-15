function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const form = document.getElementById('myForm');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const alertSuccess = document.getElementById('alert-success');
const alertDanger = document.getElementById('alert-danger');

const regBtn = document.getElementById('regBtn');

regBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default form submission

  const passwordValue1 = password1.value;
  const passwordValue2 = password2.value;

  if (passwordValue1 === passwordValue2) {
    // Passwords match, potentially submit the form or show success message
    alertSuccess.classList.remove('d-none'); // Show success alert
    alertDanger.classList.add('d-none'); // Hide danger alert (optional)
    // You can uncomment the line below to submit the form after a short delay
    // setTimeout(() => form.submit(), 2000); 
  } else {
    // Passwords don't match, show error message
    alertDanger.classList.remove('d-none'); // Show danger alert
    alertSuccess.classList.add('d-none'); // Hide success alert (optional)
  }
});