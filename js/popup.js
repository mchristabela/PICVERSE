document.addEventListener('DOMContentLoaded', function() {
    const artItems = document.querySelectorAll('.art-item');
    const popup = document.getElementById('popup-overlay');
    const closeBtn = document.getElementById('close-popup');
    
    artItems.forEach(item => {
        item.onclick = () => {
            const img = item.querySelector('img');
            document.getElementById('popup-image').src = img.src;
            popup.classList.add('active');
            document.body.style.overflow = 'hidden';
        };
    });
    
    closeBtn.onclick = () => {
        popup.classList.remove('active');
        document.body.style.overflow = '';
    };
});