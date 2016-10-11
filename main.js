var color = " "

function time(){

	var time = new Date();

	h = time.getHours();
	if (h<10){
		h= "0"+h;
	}

	m = time.getMinutes();
	if (m<10){
		m = '0'+m;
	}

	s = time.getSeconds();
	if (s<10){
		s = '0'+s;
	}

	color = '#' + h + m + s;

	// console.log(color)

	document.getElementById('clock').innerHTML = color;
	document.body.style.backgroundColor = color;
}

// console.log(color)

// function backgroundColor(){
// 	console.log(color);
// 	document.body.style.backgroundColor = color;
// }

setInterval(function(){
	time()
},1000)

