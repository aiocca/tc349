function calculate()
{
	'use strict';
	var average = 0;
    var interest = document.getElementById('interest').valueAsNumber;
    var content = document.getElementById('content').valueAsNumber;
    var easy = document.getElementById('easy').valueAsNumber;
    var quality = document.getElementById('quality').valueAsNumber;
	average = interest + content + easy + quality;
	average /= 4;

	average = average.toFixed(2);
	
	document.getElementById('average').value = average;
	return false;
}