// Loads the YouTube IFrame API JavaScript code.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
// Inserts YouTube JS code into the page.
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

// onYouTubeIframeAPIReady() is called when the IFrame API is ready to go.
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: 'CQm004JFA9U', // the ID of the video (mentioned above)
    playerVars: {
      autoplay: 1, // start automatically
      controls: 0, // don't show the controls (we can't click them anyways)
      modestbranding: 1, // show smaller logo
      loop: 1, // loop when complete
      playlist: 'kNizPk7xBbs' // required for looping, matches the video ID
    }
  });
}