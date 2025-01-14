function showVideo(videoSrc) {
    const modalVideo = document.getElementById('modalVideo');
    modalVideo.querySelector('source').src = videoSrc;
    modalVideo.load(); // Memuat ulang video dengan sumber baru
    const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
    videoModal.show();
  }