app = {

	init: function(){
		console.log('Test');
		// check if video and audio have both loaded before adding a play button
		checkLoadStatus();
	},

	checkLoadStatus:function(){

	},
};

console.log('hello');

	var audio = document.createElement('audio');
	var video = document.getElementById('video');
	var button = document.getElementById('play');
	var data = document.getElementById('data');

function playSound(url){
	audio.style.display = "none";
	audio.src = url;
	document.body.appendChild(audio);
	audio.currentTime = video.currentTime;
	audio.play();
	video.play();
}

button.addEventListener('click',function(){
	console.log('click');
	playSound('video/sound.mp4');
	console.log(video.currentTime);
});

audio.addEventListener('timeupdate', function(){
	console.log("AUDIO =>",audio.currentTime, ' //  VIDEO=>', video.currentTime);
});