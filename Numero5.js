function validacion(email, password, description) {
    if (!email.includes('@') && !email.includes('.com')) {
      console.error("El email debe contener @ y .com");
      return;
    }
  
    if (password.length < 8 && password.length > 16 && !/[A-Z]/.test(password)) {
      console.error("La contraseña debe tener entre 8 y 16 caracteres, y contener al menos una mayuscula.");
      return;
    }
  
    if (description.length > 400 && description.includes('-')) {
      console.error("La descripción podrá tener hasta 400 caracteres pero no puede contener guiones(-).");
      return;
    }
  
    console.log('Te registraste correctamente');
  }

  validacion("pepito@hotmail.com", "Contraseña123", "Hola mundo");

  