document.addEventListener('DOMContentLoaded', function() {
    const regBtn = document.getElementById('regBtn');
    const checkbox = document.getElementById('terminos');
    const alertSuccess = document.getElementById('alert-success');
    const alertDanger = document.getElementById('alert-danger');
    const form = document.getElementById('myForm');
    

    function showAlertSuccess() {
      document.getElementById("alert-success").classList.add("show");
  }
  
  function showAlertError() {
      document.getElementById("alert-danger").classList.add("show");
  }

  function validarContrasenias() {
    // Obtener los elementos del formulario
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');

    // Obtener los valores de los campos
    const valorContrasena1 = password1.value;
    const valorContrasena2 = password2.value;

    // Validar si las contraseñas coinciden
    if (valorContrasena1 !== valorContrasena2) {
      
      alertDanger.classList.add('show');
      
       
    } else {
      
      alertSuccess.classList.add('show');
      

    }
}
  
    regBtn.addEventListener('click', function() {
      if (!checkbox.checked) {
        
        alertDanger.classList.add('show');

      } else {
       
        // Aquí llamamos a la función de validación
      if (validarContrasenias()) {
        showAlertSuccess();
      } else {
        showAlertError(); // Mostrar error si las contraseñas no coinciden
      }
      }
    });

    
  });

