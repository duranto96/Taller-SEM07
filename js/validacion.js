function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.addEventListener('DOMContentLoaded', function() {
    const regBtn = document.getElementById('regBtn');
    const checkbox = document.getElementById('terminos');
    const alertSuccess = document.getElementById('alert-success');
    const alertDanger = document.getElementById('alert-danger');
  
    regBtn.addEventListener('click', function() {
      if (!checkbox.checked) {
        
        alertDanger.classList.add('show');
        alertSuccess.classList.remove('show');
      } else {
       
        alertSuccess.classList.add('show');
        alertDanger.classList.remove('show');
      }
    });
  });