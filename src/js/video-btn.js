document.addEventListener('DOMContentLoaded', function () {
  var playButtons = document.querySelectorAll('.play-button');
  playButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var video = this.previousElementSibling;
      video.play();
      this.style.display = 'none';
    });
  });

  var videos = document.querySelectorAll('.reviews__video');
  videos.forEach(function (video) {
    video.addEventListener('play', function () {
      var playButton = this.nextElementSibling;
      playButton.style.display = 'none';
    });
  });
});