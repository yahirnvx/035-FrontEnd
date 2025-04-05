function ordenarHamburguesa(ingredientes) {
    const hamburguesaPromesa = new Promise(function(resolve, reject) {
      setTimeout(function() {
        // Checamos si los ingredientes incluyen "pulpo" o "cebolla"
        if (ingredientes.includes('pulpo') || ingredientes.includes('cebolla')) {
          reject("De momento no cuento con ese ingrediente 😔, una disculpa");
        }
        // Si no, resolvemos con el mensaje de éxito
        resolve(`Hamburguesa con ${ingredientes.join(', ')}`);
      }, 1000);
    });
  
    return hamburguesaPromesa;
  }
  
  // Manejo de error (opcional si quieres usarlo en .catch directamente)
  function manejoError(error) {
    console.log(error);
  }
  