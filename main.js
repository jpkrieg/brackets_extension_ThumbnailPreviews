function testingFunc(){
	var x = document.createElement("IMG");
	x.setAttribute("src", "");
	x.setAttribute("width", "200");
	x.setAttribute("height", "200");
	x.setAttribute("alt", "Image Preview");
	DOMAgent.addNode(x);
}