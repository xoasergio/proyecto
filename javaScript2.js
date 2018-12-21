//este archivo esta vinculado al archivo que contiene el html mediante un enlace y debera ir siempre en la misma carpeta que el archivo del html//

var hoy= new Date();//la fecha se recoge en el objeto "hoy" que tendra como propiedades el dia, la hora, el mes...//
var dia= hoy.getDay();// la propiedad "dia" del objeto "hoy" se recogera en esta variable//
var mes= hoy.getMonth()// la propiedad "mes" del objeto "hoy" se recogera en esta variable//
var hora= hoy.getHours()// la propiedad "hora" del objeto "hoy" se recogera en esta variable//
var minutos=hoy.getMinutes()// la propiedad "hora" del objeto "hoy" se recogera en esta variable//
var hym=(hora*60)+minutos//halla los minutos totales para comparar a continuación//

function cambiar()  {//cuando se llama a la función, esta comprueba si los meses y los dias corresponden a sus condicionantes y en caso de que si, cambia el color ya sea del fondo de la tabla o de la celda//
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
				if( hym>510&hym<560&dia==1) {//aqui hay varios condicionantes unidos que comprueban hora y dia para poner la letra amarilla en la asgnatura que toca a esa hora//
					document.getElementById("t1.1").style.color="yellow"
				}
				if( hym>510&hym<560&dia==2) {
					document.getElementById("t2.1").style.color="yellow"
				}	
				if( hym>510&hym<560&dia==3){
					document.getElementById("t1.1").style.color="yellow"
				}	
				if( hym>510&hym<560&dia==4) {
					document.getElementById("t2.1").style.color="yellow"
				}	
				if( hym>510&hym<560&dia==5) {
					document.getElementById("t3.1").style.color="yellow"
				}	
				
				if( hym>565&hym<615&dia==1) {
					document.getElementById("t3.2").style.color="yellow"
				}
				if( hym>565&hym<615&dia==2) {
					document.getElementById("t4.1").style.color="yellow"
				}
				if( hym>565&hym<615&dia==3) {
					document.getElementById("t3.3").style.color="yellow"
				}
				if( hym>565&hym<615&dia==4) {
					document.getElementById("t5.1").style.color="yellow"
				}
				if( hym>565&hym<615&dia==5) {
					document.getElementById("t1.3").style.color="yellow"
				}
				
				if( hym>620&hym<670&dia==1) {
					document.getElementById("t5.2").style.color="yellow"
				}
				if( hym>620&hym<670&dia==2) {
					document.getElementById("t1.4").style.color="yellow"
				} 
				if( hym>620&hym<670&dia==3) {
					document.getElementById("t6.1").style.color="yellow"
				}
				if( hym>620&hym<670&dia==4) {
					document.getElementById("t3.4").style.color="yellow"
				}
				if( hym>620&hym<670&dia==5) {
					document.getElementById("t7.1").style.color="yellow"
				}
				
				if( hym>700&hym<750&dia==1) {
					document.getElementById("t2.3").style.color="yellow"
				}
				if( hym>700&hym<750&dia==2) {
					document.getElementById("t7.2").style.color="yellow"
				}
				if( hym>700&hym<750&dia==3) {
					document.getElementById("t8.1").style.color="yellow"
				}
				if( hym>700&hym<750&dia==4) {
					document.getElementById("t8.2").style.color="yellow"
				}
				if(  hym>700&hym<750&dia==5) {
					document.getElementById("t5.3").style.color="yellow"
				}
				
				if(  hym>755&hym<805&dia==1) {
					document.getElementById("t4.2").style.color="yellow"
				}
				if(  hym>755&hym<805&dia==2) {
					document.getElementById("t6.2").style.color="yellow"
				}
				if( hym>755&hym<805&dia==3) {
					document.getElementById("t2.4").style.color="yellow"
				}
				if( hym>755&hym<805&dia==4) {
					document.getElementById("t7.3").style.color="yellow"
				}
				if( hym>755&hym<805&dia==5) {
					document.getElementById("t8.3").style.color="yellow"
				}
				
				if( hym>810&hym<860&dia==1) {
					document.getElementById("t7.4").style.color="yellow"
				}
				if( hym>810&hym<860&dia==2) {
					document.getElementById("t5.4").style.color="yellow"
				}
				if( hym>810&hym<860&dia==3) {
					document.getElementById("t4.3").style.color="yellow"
				}
				if( hym>810&hym<860&dia==4) {
					document.getElementById("t4.4").style.color="yellow"
				}
				if( hym>810&hym<860&dia==5) {
					document.getElementById("t6.3").style.color="yellow"
				}
			}

function matematicas() {//cuando se llama a estas funciones se repite desde que variable "i" es 0 hasta que es 4 la funcion, es decir, 4 veces, y por cada vez que se ejecuta "i" se incrementa para que llegue a 4//
	for(var i=0;i<4;i++){
	document.getElementsByClassName("matematicas")[i].style.borderRadius="25px"; //coge las celdas de cada asignatura y cambia su borde haciendolo curvado, lo hace con todas las asignaturas clickando en sus respectivos botones//
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

			var k= {//se crea un objeto en la que las diferentes propiedades sean las notas y estas estan vacias esperando a que tomen los valores del imput a traves de la función "media"//
				matematicas : "",
				lengua : "",
				fisica: "",
				biologia: "",
				ingles: "",
				tic: "",
				quimica: "",
				historia: "",
				media: function md(){//la prpiedad "media" sera igual a la variable "r" que se crea cuando se llama a la función "md" y es el resultado de la operación a la que se iguala//
				var r=(parseInt(k.quimica)+parseInt(k.matematicas)+parseInt(k.lengua)+parseInt(k.fisica)+parseInt(k.historia)+parseInt(k.ingles)+parseInt(k.biologia)+parseInt(k.tic))/8//todos los operadores poseen un parseInt para que la suma se haga como variables numerics y no como cadena//
				return r;//devuelve la solución de la operacion para que la propiedad tome ese valor//
				}
				}
					
			function media(){//cuando se llama a esta función todas las propiedades de "k" toman los valores de los imputs de las asignaturas correspondientes
				k.matematicas = document.getElementById("mm").value;
				k.lengua = document.getElementById("ml").value;
				k.historia = document.getElementById("mh").value;
				k.biologia = document.getElementById("mb").value;
				k.ingles = document.getElementById("mi").value;
				k.tic = document.getElementById("mt").value;
				k.fisica = document.getElementById("mf").value;
				k.quimica = document.getElementById("mq").value;
				document.getElementById("resultado").innerHTML = k.media();// esta función tambien causa que dentro del span "resultado" se muestre el valor de la propiedad "media" de "k"
				}


function desaparecerbio(tarea)  {//cuando se llama a estas funciones, se toma el valor de la celda donde se clicka y se asigna como "tarea", a continuación se iguala el estado al valor recogido anteriormente
	var estado= document.getElementById(tarea);
	if(estado.innerHTML === ' ') {//se comprueba si el valor del estado y por tanto, si la celda esta vacia o no, en caso de que lo este se pone el nombre de la asignatura correspondiente, si esta llena se vacia
				estado.innerHTML = "Biología";//esto se hace con todas las asignaturas, cada celda tiene un identificador pero diferentes identificadores llaman a la misma funcion si pertenecen a la misma asignatura 
				estado.style.color = "black";
	} 
	
	else {
				estado.innerHTML = " ";
				estado.style.color = "black";	
	}
	}
function desaparecerqui(tarea)  {
	var estado= document.getElementById(tarea);
	if(estado.innerHTML === ' ') {
				estado.innerHTML = "Química";
				estado.style.color = "black";
	} 
	
	else {
				estado.innerHTML = ' ';
				estado.style.color = "black";	
	}
	}
function desaparecerfis(tarea)  {
	var estado= document.getElementById(tarea);
	if(estado.innerHTML === ' ') {
				estado.innerHTML = "Física";
				estado.style.color = "black";
	} 
	
	else {
				estado.innerHTML = ' ';
				estado.style.color = "black";	
	}
	}
function desaparecering(tarea)  {
	var estado= document.getElementById(tarea);
	if(estado.innerHTML === ' ') {
				estado.innerHTML = "Inglés";
				estado.style.color = "black";
	} 
	
	else {
				estado.innerHTML = ' ';
				estado.style.color = "black";	
	}
	}
function desaparecertic(tarea)  {
	var estado= document.getElementById(tarea);
	if(estado.innerHTML === ' ') {
				estado.innerHTML = "TIC";
				estado.style.color = "black";
	} 
	
	else {
				estado.innerHTML = ' ';
				estado.style.color = "black";	
	}
	}
function desaparecerlen(tarea)  {
	var estado= document.getElementById(tarea);
	if(estado.innerHTML === ' ') {
				estado.innerHTML = "Lengua";
				estado.style.color = "black";
	} 
	
	else {
				estado.innerHTML = ' ';
				estado.style.color = "black";	
	}
	}
function desaparecermat(tarea)  {
	var estado= document.getElementById(tarea);
	if(estado.innerHTML === ' ') {
				estado.innerHTML = "Matemáticas";
				estado.style.color = "black";
	} 
	
	else {
				estado.innerHTML = ' ';
				estado.style.color = "black";	
	}
	}
function desaparecerhis(tarea)  {
	var estado= document.getElementById(tarea);
	if(estado.innerHTML === ' ') {
				estado.innerHTML = "Historia";
				estado.style.color = "black";
	} 
	
	else {
				estado.innerHTML = ' ';
				estado.style.color = "black";	
	}
	}
	
	//PROCESSING//
function setup() {//Crea un cuadro con dimensiones de la pagina y el color deseado, azul en este caso//
  createCanvas(windowWidth, windowHeight); 
  background(0, 33, 199);  
  
} 
 
function draw() {//cuando esta clickado el raton, dibuja una linea en la posicion del puntero//
  if (mouseIsPressed)
    line(pmouseX, pmouseY, mouseX, mouseY)
}
function borrar(){//crea otra vez el mismo cuadro del mismo color, es decir, borra todo lo dibujado//
 createCanvas(windowWidth, windowHeight); 
  background(0, 33, 199);  
}
  
  
//PROCESSING2//
/*function setup() {
	createCanvas(20 ,20);
	angleMode(DEGREES);
}

function draw() {
background(0);
		
		let hr = hour();
		let mn = minute();
		let sc = second();
	
	strokeWeight(10);
	noFill();

	stroke(20, 200, 200);
	let end1 = map(sc, 0, 60, 0, 360);
	arc(width/2, height/2, 300, 300, 0, end1);

	stroke(20, 100, 200);
	let end2 = map(mn, 0, 60, 0, 360);
	arc(width/2, height/2, 250, 250, 0, end2);

	stroke(20, 200, 100);
	let end3 = map(hr, 0, 24, 0, 360);
	arc(width/2, height/2, 200, 200, 0, end3);
	
	fill(255);
	noStroke();
	textAlign(CENTER);
	textSize(30);
	textStyle(BOLD);
	text(hr + ':' +  mn + ':' + sc, width/2, height/2);
}*/