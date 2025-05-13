// Mostrar el año actual en el pie de página
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Mostrar la fecha de la última modificación del documento
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
