function toggleMenu() {
    const leftPanel = document.getElementById('leftPanel');
    const overlay = document.getElementById('overlay');

    // Toggle class to show/hide left panel
    if (leftPanel.style.width >= '250px') {
        leftPanel.style.width = '0';
        overlay.style.width = '0';
    } else {
        leftPanel.style.width = '250px';
        overlay.style.width = '30%';
    }
}

// Sample JavaScript for handling media files
document.getElementById('uploadButton').addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
    const fileInput = event.target;
    const files = fileInput.files;

    // Process uploaded files (images, videos, audio)
    // Implement logic for handling each type of media file
}
