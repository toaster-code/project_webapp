function toggleMenu() {
    const leftPanel = document.getElementById('leftPanel');
    const overlay = document.getElementById('overlay');

    // Toggle class to show/hide left panel
    if (leftPanel.style.width === '250px') {
        leftPanel.style.width = '0';
        overlay.style.width = '0';
    } else {
        leftPanel.style.width = '250px';
        overlay.style.width = '100%';
    }
}
