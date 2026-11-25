// Task 2: cambia entre modo claro y oscuro con una clase en el body
// Task 2: switches between light and dark mode with a class on the body
function toggleDark() {
    document.body.classList.toggle('dark');
    saveStyle();
}

// Task 2: cambia entre formato horizontal y vertical
// Task 2: switches between horizontal and vertical layout
function toggleLayout() {
    document.body.classList.toggle('vertical');
    saveStyle();
}

// Guarda la eleccion para que siga en las otras paginas
// Saves the choice so it stays on the other pages
function saveStyle() {
    localStorage.dark = document.body.classList.contains('dark');
    localStorage.vertical = document.body.classList.contains('vertical');
}

// Al cargar la pagina se lee lo guardado (localStorage guarda texto)
// When the page loads the saved choice is read (localStorage stores text)
window.addEventListener('load', function () {
    if (localStorage.dark === 'true') {
        document.body.classList.add('dark');
    }
    if (localStorage.vertical === 'true') {
        document.body.classList.add('vertical');
    }
});
