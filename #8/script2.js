function openCity(evt, cityName) {
    // Oculta todos los elementos con la clase "tabcontent"
    document.querySelectorAll(".tabcontent").forEach(tab => {
        tab.style.display = "none";
    });

    // Remueve la clase "active" de todos los elementos con la clase "tablinks"
    document.querySelectorAll(".tablinks").forEach(tablink => {
        tablink.classList.remove("active");
    });

    // Muestra el contenido de la pestaña seleccionada
    document.getElementById(cityName).style.display = "block";

    // Añade la clase "active" al botón que activó la función
    evt.currentTarget.classList.add("active");
}