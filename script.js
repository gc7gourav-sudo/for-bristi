document.getElementById('reveal-btn').addEventListener('click', function() {
    const curtain = document.getElementById('curtain');
    const mainContent = document.getElementById('main-content');
    
    // 1. Fade out the curtain
    curtain.style.opacity = '0';
    curtain.style.visibility = 'hidden';
    
    // 2. Make main content displayable, then fade it in smoothly
    mainContent.classList.remove('hidden');
    setTimeout(() => {
        mainContent.classList.add('visible');
    }, 100); // Small delay to let the browser register the display change
});
