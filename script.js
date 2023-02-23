const videoId = document.getElementById("myVideo");

const listVideo = [
  "./src/assets/videos/5 Second Countdown HD.mp4",
  "./src/assets/videos/5 Second Countdown Intro video   YouTube.mp4",
];

videoId.src = listVideo[0];
videoId.addEventListener("ended", function () {
  videoId.src = listVideo[1];
  videoId.play();
  videoId.addEventListener("ended", function () {
    var playPromise = videoId.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          // Automatic playback started!
          // Show playing UI.
          // We can now safely pause video...
          videoId.pause();
        })
        .catch((error) => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
  });
});
