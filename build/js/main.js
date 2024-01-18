function initApp() {
    const hamburger = document.getElementById('hamburger');
    const dropDown = document.getElementById('dropdown-menu');

    function toggleMenu() {
        dropDown.classList.toggle('hidden');
        dropDown.classList.toggle('flex');
    }
    
    hamburger.addEventListener('click', toggleMenu)
    dropDown.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)