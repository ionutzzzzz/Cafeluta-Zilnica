var beamer_config = {
    product_id: 'TsDqfEQn54522'
};
$('.carousel').carousel({
    interval: 2000
})

async function setupCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const videoElement = document.getElementById('live-camera-feed');
        videoElement.srcObject = stream;
    } catch (error) {
        console.error('Error accessing the camera:', error);
    }
}

window.addEventListener('load', setupCamera);