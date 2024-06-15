document.addEventListener('DOMContentLoaded', () => {
    const playPauseBtn = document.getElementById('play-pause-btn');
    const audioPlayer = document.getElementById('audio-player');
    const seekSlider = document.getElementById('seek-slider');
    const currentTimeElem = document.getElementById('current-time');
    const durationElem = document.getElementById('duration');

    if (!playPauseBtn || !audioPlayer || !seekSlider || !currentTimeElem || !durationElem) {
        console.error('One or more audio player elements are missing');
        return;
    }

    console.log('Audio player elements found:', {
        playPauseBtn,
        audioPlayer,
        seekSlider,
        currentTimeElem,
        durationElem
    });

    playPauseBtn.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = 'Pause';
            console.log('Audio playing');
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = 'Play';
            console.log('Audio paused');
        }
    });

    audioPlayer.addEventListener('loadedmetadata', function() {
        seekSlider.max = audioPlayer.duration;
        durationElem.textContent = formatTime(audioPlayer.duration);
        console.log('Metadata loaded, duration:', audioPlayer.duration);
    });

    audioPlayer.addEventListener('timeupdate', function() {
        seekSlider.value = audioPlayer.currentTime;
        currentTimeElem.textContent = formatTime(audioPlayer.currentTime);
        console.log('Time update, current time:', audioPlayer.currentTime);
    });

    seekSlider.addEventListener('input', function() {
        audioPlayer.currentTime = seekSlider.value;
        console.log('Seek slider input, current time set to:', seekSlider.value);
    });

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
});
