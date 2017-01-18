function mobileHandler() {
	var width=window.innerWidth;
	if (width<768) {
		
		var picture=document.getElementById('test-service-1').innerHTML;
		var content=document.getElementById('test-service-2').innerHTML; 

		document.getElementById('test-service-1').innerHTML=content;
		document.getElementById('test-service-2').innerHTML=picture;
	} 
}

window.onload=mobileHandler;
window.onresize=mobileHandler;
