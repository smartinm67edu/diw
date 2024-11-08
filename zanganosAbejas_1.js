document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario
    const query = document.getElementById('searchInput').value.trim();

    if (query) {
        // Aquí puedes agregar la lógica del buscador, como redirigir o filtrar productos
        console.log(`Buscando: ${query}`);
        alert(`Buscando productos relacionados con: "${query}"`);
    } else {
        alert('Por favor, ingresa un término de búsqueda.');
    }
});
