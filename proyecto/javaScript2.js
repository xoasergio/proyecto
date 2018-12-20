var hoy= new Date();
var dia= hoy.getDay();
var mes= hoy.getMonth()

function cambiar()  {
				if(mes==0) {
					document.getElementById('tabla').style.backgroundColor= 'lightBlue';
				}
				if(mes==1) {
					document.getElementById('tabla').style.backgroundColor= 'red';
				}
				if(mes==2) {
					document.getElementById('tabla').style.backgroundColor= 'yellow';
				}
				if(mes==3) {
					document.getElementById('tabla').style.backgroundColor= 'blue';
				}
				if(mes==4) {
					document.getElementById('tabla').style.backgroundColor= 'pink';
				}
				if(mes==5) {
					document.getElementById('tabla').style.backgroundColor= 'orange';
				}
				if(mes==6) {
				document.getElementById('tabla').style.backgroundColor= 'lightBlue';	
				}
				if(mes==7) {
					document.getElementById('tabla').style.backgroundColor= 'purple';
				}
				if(mes==8) {
					document.getElementById('tabla').style.backgroundColor= 'black';
				}
				if(mes==9) {
					document.getElementById('tabla').style.backgroundColor= 'white';
					
				}
				if(mes==10) {
					document.getElementById('tabla').style.backgroundColor= 'lightgGray';
				}
				if(mes==11) {
					document.getElementById('tabla').style.backgroundColor= 'orange';
				}
				
				if(dia==2) {
					document.getElementById("martes").style.backgroundColor= 'black';
					
				}
				if(dia==3) {
					document.getElementById("miercoles").style.backgroundColor= 'black';
				}
				if(dia==4) {
					document.getElementById("jueves").style.backgroundColor= 'black';
				}
				if(dia==5) {
					document.getElementById("viernes").style.backgroundColor= 'black';
				}
				if(dia==1) {
					document.getElementById("lunes").style.backgroundColor= 'black';
				}
			}

function matematicas() {
	for(var i=0;i<4;i++){
	document.getElementsByClassName("matematicas")[i].style.borderRadius="25px";
	}
}
function lengua() {
	for(var i=0;i<4;i++){
	document.getElementsByClassName("lengua")[i].style.borderRadius="25px";
	}
}
function historia() {
	for(var i=0;i<4;i++){
	document.getElementsByClassName("historia")[i].style.borderRadius="25px";
	}
}
function ingles() {
	for(var i=0;i<4;i++){
	document.getElementsByClassName("ingles")[i].style.borderRadius="25px";
	}
}
function tic() {
	for(var i=0;i<4;i++){
	document.getElementsByClassName("tic")[i].style.borderRadius="25px";
	}
}
function fisica() {
	for(var i=0;i<4;i++){
	document.getElementsByClassName("fisica")[i].style.borderRadius="25px";
	}
}
function quimica() {
	for(var i=0;i<4;i++){
	document.getElementsByClassName("quimica")[i].style.borderRadius="25px";
	}
}
function biologia() {
	for(var i=0;i<4;i++){
	document.getElementsByClassName("biologia")[i].style.borderRadius="25px";
	}
}

			var k= {
				matematicas : "",
				lengua : "",
				fisica: "",
				biologia: "",
				ingles: "",
				tic: "",
				quimica: "",
				historia: "",
				media: function md(){
				var r=(parseInt(k.quimica)+parseInt(k.matematicas)+parseInt(k.lengua)+parseInt(k.fisica)+parseInt(k.historia)+parseInt(k.ingles)+parseInt(k.biologia)+parseInt(k.tic))/8
				return r;
				}
				}
					
			function media(){
				k.matematicas = document.getElementById("mm").value;
				k.lengua = document.getElementById("ml").value;
				k.historia = document.getElementById("mh").value;
				k.biologia = document.getElementById("mb").value;
				k.ingles = document.getElementById("mi").value;
				k.tic = document.getElementById("mt").value;
				k.fisica = document.getElementById("mf").value;
				k.quimica = document.getElementById("mq").value;
				document.getElementById("resultado").innerHTML = k.media();
				}


function desaparecer(tarea)  {
	var estado= document.getElementById(tarea);
	if(estado.innerHTML === 'document.getElementById(tarea)') {
				estado.innerHTML = "tarea";
				estado.style.color = "black";
	} 
	
	else {
				estado.innerHTML = 'document.getElementById(tarea)';
				estado.style.color = "black";	
	}
	}
		