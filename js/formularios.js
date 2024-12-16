/**
 * Función para mostrar el formulario correspondiente
 * @param {string} formulario - El ID del formulario a mostrar
 */
function mostrarFormulario(formulario) {
    // Ocultar todos los formularios y volver a mostrar los enlaces
    ['busqueda', 'inicio', 'registro'].forEach((id) => {
        document.getElementById(id).classList.add('d-none');
        document.getElementById(`link-${id}`).classList.remove('d-none');
    });

    // Mostrar el formulario correspondiente y ocultar su enlace
    document.getElementById(formulario).classList.remove('d-none');
    document.getElementById(`link-${formulario}`).classList.add('d-none');
}
