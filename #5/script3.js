// Función para manejar los tabs
function openCity(evt, cityName) {
    // Ocultar todo el contenido de las pestañas
    document.querySelectorAll(".tabcontent").forEach(tab => {
      tab.style.display = "none";
    });
  
    // Eliminar la clase "active" de todos los botones
    document.querySelectorAll(".tablinks").forEach(link => {
      link.classList.remove("active");
    });
  
    // Mostrar el contenido seleccionado y marcar el botón activo
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add("active");
  }
  
  // Configuración inicial
  document.addEventListener("DOMContentLoaded", () => {
    // Mostrar solo el primer tab y marcarlo como activo
    document.querySelector(".tabcontent").style.display = "block";
    document.querySelector(".tablinks").classList.add("active");
  });
  
  document.getElementById("defaultOpen").click();