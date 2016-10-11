

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

	var timeNow = h + ':' + m + ':' + s;

	console.log(timeNow)

	document.getElementById('clock').innerHTML = timeNow;
}

setInterval(function(){
	time()
},1000)
