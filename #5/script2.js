function openCity(evt, cityName) {
    // Ocultar todo el contenido de las pestañas
    document.querySelectorAll(".tabcontent").forEach(tab => {
      tab.style.display = "none";
    });
  
    // Eliminar la clase "active" de todos los enlaces de pestañas
    document.querySelectorAll(".tablinks").forEach(link => {
      link.classList.remove("active");
    });
  
    // Mostrar el contenido de la pestaña seleccionada
    document.getElementById(cityName).style.display = "block";
  
    // Añadir la clase "active" al enlace actual
    evt.currentTarget.classList.add("active");
  }
  