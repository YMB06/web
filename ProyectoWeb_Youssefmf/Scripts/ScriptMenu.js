function toggleMenu() {
    var menu = document.getElementById('mobileMenu');
    var menuIcon = document.getElementById('menuIcon');
    menu.classList.toggle('show');
    menuIcon.style.display = menu.classList.contains('show') ? 'none' : 'block';
}

// Mostrar menú al hacer clic en el icono
document.getElementById('menuIcon').addEventListener('click', function(event) {
    event.stopPropagation(); // Evita que el clic se propague y cierre inmediatamente el menú
    toggleMenu();
});

// Cerrar menú si se hace clic fuera de él
document.addEventListener('click', function(event) {
    var menu = document.getElementById('mobileMenu');
    var menuIcon = document.getElementById('menuIcon');

    if (menu.classList.contains('show') && !menu.contains(event.target) && event.target !== menuIcon) {
        menu.classList.remove('show');
        menuIcon.style.display = 'block';
    }
});

// Cerrar menú al hacer clic en una opción
document.querySelectorAll('.mobile-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
        var menu = document.getElementById('mobileMenu');
        var menuIcon = document.getElementById('menuIcon');
        menu.classList.remove('show');
        menuIcon.style.display = 'block';
    });
});
