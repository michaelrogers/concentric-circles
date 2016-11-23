document.addEventListener('DOMContentLoaded', () => { 
	var backgroundLayerRed;
	var backgroundLayerBlack;
	var timeoutResizeVariable;
	var intSet; var intervalTimes;
	var contextRed;
	var contextBlack;


	const getCanvasContext = () => {
		backgroundLayerRed = document.getElementById("canvasRed");
		contextRed = backgroundLayerRed.getContext("2d");
		backgroundLayerBlack = document.getElementById("canvasBlack");
		contextBlack = backgroundLayerBlack.getContext("2d");
		console.log(contextRed);
	}

	const timeoutResize = () => {
		clearTimeout(timeoutResize);
		timeoutResizeVariable = setTimeout(function(){resizeCanvas()},200);
	}

	const resizeCanvas = () => {
		backgroundLayerRed.width = window.innerWidth;
		backgroundLayerRed.height = window.innerHeight;
		backgroundLayerBlack.width = window.innerWidth;
		backgroundLayerBlack.height = window.innerHeight;
		console.log({width: backgroundLayerRed.width, height: backgroundLayerRed.height});
		drawBorder();
		
	}

	const drawCircles = (xCoordinate, yCoordinate, radius, color, lineWidth) => {
		if (radius > 0){
			var context;
			if (color == "rgba(255,0,0,.7)") {context = contextRed}
			else if (color == 'rgba(0,0,0,1)') {context = contextBlack}
			context.beginPath();
			context.arc(xCoordinate, yCoordinate, radius, 0, 2 * Math.PI, false);
			context.strokeStyle = color;
			context.lineWidth = lineWidth;

			if (color == "rgba(255,0,0,.7)") {
				context.shadowBlur = 20;
				context.shadowColor = 'rgba(255,0,0,0.8)';
				contextRed.shadowOffsetX = 0;

			}
			else {
				context.shadowColor = "transparent";
				
			}
			// contextRed.saturate = '0.5';
			// contextRed.imageSmoothingEnabled = false;
			context.stroke();

		}
		else return false;
	}

	//TESTING BORDER
	const drawBorder = () => {
		contextRed.strokeStyle = 'rgba(255,0,0,0.4';
	    contextRed.lineWidth = '5';
	    contextRed.strokeRect(0, 0, window.innerWidth, window.innerHeight);
	}	
	
	const init = () => {
		getCanvasContext();
		document.title = "Canvas-Animation";
		window.addEventListener("resize", timeoutResize);
		resizeCanvas();
	}

	init();
	let radius;
	let lineWidth = 10;
	let redColor = 'rgba(255,0,0,.7)';
	let blackColor = 'rgba(0,0,0,1)';
	let outsideRadius = 500;
	let spacingBetweenCircles = 15;
	for (let i = 0; i < 20; i++) {
		radius = (outsideRadius - i * spacingBetweenCircles)*2;
		drawCircles(-outsideRadius, 300, radius, redColor, lineWidth);
		
	}
	for (let i = 0; i < 20; i++) {
		radius = (outsideRadius - i * spacingBetweenCircles)*2;
		drawCircles(outsideRadius*3, 300, radius, blackColor, lineWidth);
	}
});