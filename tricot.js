const panels = document.querySelectorAll('.panel'); // obtengo contenedor con clase panel
console.log(panels);

function removeActive() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
};

panels.forEach(panel => {
    panel.addEventListener('mouseover', () => {
        console.log('mouseover detected');
        removeActive();
        panel.classList.add('active');
    });
});