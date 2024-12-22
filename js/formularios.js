
function mostrarFormulario(formulario) {
    // Ocultar todos los formularios y agregar la clase d-none
    ['busqueda', 'inicio', 'registro'].forEach((id) => {
        const form = document.getElementById(id);
        form.classList.remove('show');
        form.classList.add('d-none');
        
        // Mostrar el enlace correspondiente
        document.getElementById(`link-${id}`).classList.remove('d-none');
    });

    // Mostrar el formulario correspondiente y agregar la clase show
    const formToShow = document.getElementById(formulario);
    formToShow.classList.remove('d-none');
    formToShow.classList.add('show');

    // Ocultar el enlace del formulario mostrado
    document.getElementById(`link-${formulario}`).classList.add('d-none');
}
