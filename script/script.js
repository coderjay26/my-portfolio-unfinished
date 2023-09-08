
    window.addEventListener('load', () => {
        // Hide the loader
        const loader = document.querySelector('.loader');
        loader.style.display = 'none';
    
        // Show the content
        const content = document.querySelector('.content');
        content.style.opacity = '1';
    });