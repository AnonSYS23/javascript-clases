// Este código se ejecutará cuando el DOM haya sido completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene la referencia a los elementos del menú de navegación
    var menuItems = document.querySelectorAll('nav ul li');
  
    // Agrega el evento 'click' a cada elemento del menú
    menuItems.forEach(function(item) {
      item.addEventListener('click', function(event) {
        // Evita el comportamiento predeterminado del enlace
        event.preventDefault();
  
        // Obtiene el valor del atributo 'href' del enlace
        var target = this.querySelector('a').getAttribute('href');
  
        // Desplaza suavemente la ventana hacia el objetivo utilizando el método 'scrollIntoView'
        document.querySelector(target).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  