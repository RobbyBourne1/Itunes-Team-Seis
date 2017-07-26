// let duration;
// let music = document.querySelector('#music')
// let playhead = document.querySelector('#playhead')
// let pButton = document.querySelector('#pButton')
// let audioTimeline = document.querySelector("#audio-timeline")
// music.src= "http://developer.mozilla.org/@api/deki/files/2926/=AudioTest_(1).ogg"
//
// //this calculates the difference between the layout width of the audioTimeline and the playhead
// var timelineWidth = audioTimeline.offsetWidth - playhead.offsetWidth;
//
// //
// playhead.addEventListener( "click", timeUpdate, false )
//
// function timeUpdate() {
// 	var playPercent = 100 * (playhead.currentTime / duration);
// 	playhead.style.marginLeft = playPercent + "%";
// }
// // Gets audio file duration
// music.addEventListener("canplaythrough", function () {
// 	duration = music.duration; //this can be changed via iTunes API to appropriate name
// }, false);
//
// //allows pButton to be clicked and activates playAudio function
// pButton.addEventListener("click", playAudio)
//
// //changes the png based on whether the audio plays/pauses
// function playAudio() {
//     if (music.paused) {
//         music.play()
//         pButton.className = ""
//         pButton.className = "pause"
//     } else {
//         music.pause()
//         pButton.className = ""
//         pButton.className = "play"
//     }
// }
//
// //adds event listener to audioTimeline
// audioTimeline.addEventListener("click", event => {
//     moveplayhead(event)
//     music.currentTime = duration * clickPercent(event)
// })
//
// //this will return the click position as a decimal of the total timelineWidth
// function clickPercent(event) {
//     return (event.clientX - getPosition(audioTimeline)) / timelineWidth;
// }
//
// //this will move the playhead around based on length of song playing
// function moveplayhead(event) {
//     var newMargLeft = event.clientX - getPosition(audioTimeline);
//
// 	if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
// 		playhead.style.marginLeft = newMargLeft + "px";
// 	}
// 	if (newMargLeft < 0) {
// 		playhead.style.marginLeft = "0px";
// 	}
// 	if (newMargLeft > timelineWidth) {
// 		playhead.style.marginLeft = timelineWidth + "px";
// 	}
// }
//
// // Returns elements left position relative to top-left of viewport
// function getPosition(event) {
//     return event.getBoundingClientRect().left;
// }
//
// // synchronize playhead position with current point in audio
//
//
//
//
//
//
//
//
//
// //
