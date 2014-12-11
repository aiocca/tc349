var backgroundMusic = new Audio("sounds/scream.mp3");

window.onload = init;
function init()
{
	backgroundMusic.play();
	backgroundMusic.volume = 0.175;
	backgroundMusic.loop = true;
}

function play()
{
	backgroundMusic.play();
}

function pause()
{
	backgroundMusic.pause();
}
