function hitTheLoop(){
	for(i=0;i>=4;i++){
	var newDiv = document.createElement("div");
	var lista = getElementById("lista");
	lista.appendChild(newDiv);
	var text = document.createTextNode("Test");
	newDiv.appendChild(text);
	}
}