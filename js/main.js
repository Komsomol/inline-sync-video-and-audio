var audio = document.getElementById('audio');
var video = document.getElementById('video');
var button = document.getElementById('play');

app = {

	init: function(){
		console.log('Test');
		// check if video and audio have both loaded before adding a play button
		app.checkLoadStatus();
	},

	checkLoadStatus:function(){
		// check if video is loaded
		video.oncanplaythrough = function(){
			console.log('video oncanplaythrough');
		};

		// check if audio is loaded
		audio.oncanplaythrough = function(){
			console.log('audio oncanplaythrough');
		};

		// add play button
		button.addEventListener('click',function(){
			console.log('click');
			app.playVideoAudio();
		});

	},

	playVideoAudio:function(){
		audio.play();
		video.play();
	},

	checkSync:function(){
		audio.addEventListener('timeupdate', function(){
			console.log('checking sync');
		});
		audio.currentTime = video.currentTime;
		// check sync using request animation
		requestAnimationFrame(app.checkSync);
	}


};

window.onload = app.init;

audio.addEventListener('timeupdate', function(){
	console.log("AUDIO =>",audio.currentTime, ' //  VIDEO=>', video.currentTime);
});