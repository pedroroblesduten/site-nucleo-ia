/**
 * header-bg.js
 * Gradiente interativo ultraleve para o <header>.
 * Nenhuma dependência externa.
 */
(function () {
    const header = document.querySelector('.interactive-bg');
    if (!header) return;        // segurança

    /** Move o ponto focal do gradiente */
    function updateGradient(evt) {
        const rect = header.getBoundingClientRect();
        const x = ((evt.clientX - rect.left) / rect.width) * 100;
        const y = ((evt.clientY - rect.top) / rect.height) * 100;
        header.style.setProperty('--mx', `${x}%`);
        header.style.setProperty('--my', `${y}%`);
    }

    header.addEventListener('mousemove', updateGradient, false);
    header.addEventListener('touchmove', e => updateGradient(e.touches[0]), false);

    /* volta suavemente para o centro ao sair do header */
    header.addEventListener('mouseleave', () => {
        header.style.setProperty('--mx', '50%');
        header.style.setProperty('--my', '50%');
    }, false);
})();
