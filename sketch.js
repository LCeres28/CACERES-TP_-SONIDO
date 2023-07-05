var image1;
var image2;
var image3;
var image4;
var image5;
var image6;
var image7;
var image8;
var image9;
var image10;
var image11;
var image12;
var image13;
var image14;
var image15;
var image16;


let CodigoDeColor=1;
let obraVerificacion = false;

//-------CONFIGURACION----
let AMP_MIN = 0.05 ; // umbral mínimo de amplitud. Señal que supera al ruido de fondo
let AMP_MAX = 0.1; // umbral máximo de amplitud. 
let FREC_MIN = 880;
let FREC_MAX = 2000;

let IMPRIMIR = false; //variable de monitoreo de lq info del sonido

//-----ENTRADA DE AUDIO----
let mic, fft;

//-----AMPLITUD----

let amp;
let haySonido = false;
let antesHabiaSonido = false;

//----FRECUENCIA -----
let audioContext;
let frecuencia;

const pichModel = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';

let imagenactual = false;

let isDrawing = false;
let startTime = 0;

//crear una variable
//cada vez que un color se dibuja esta variable cambie de valoe

function preload() {
  image1= loadImage( 'fondo1.png');  
  image2= loadImage( 'rojo3.png'); 
  image3= loadImage( 'amarillo1.png');  
  image4= loadImage( 'azul1.png');
  image5= loadImage( 'azul4.png'); 
  image6= loadImage( 'fondo2.png');  
  image7= loadImage( 'rojo2.png'); 
  image8= loadImage( 'amarillo4.png');  
  image9= loadImage( 'azul2.png');
  image10=loadImage( 'naranja2.png'); 
  image11=loadImage(' azul3.png');
  image12=loadImage('naranja3.png');
  image13=loadImage('fondo3.png');
  image14=loadImage('rojo4.png');
  image15=loadImage('amarillo3.png');
  image16=loadImage('naranja4.png');
}
 
function setup() 
{
	createCanvas(430,600);
  background(2400);     
  
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(startPitch);
  userStartAudio(); // esto lo utilizo porque en algunos navigadores no carga el audio. Esto hace un reset del motor de audio (audio context)
}

function draw()
{

  
  amp = mic.getLevel();

  haySonido = amp > AMP_MIN;

  if(haySonido){
    startTime = millis();
  }
  
  //imprimirData();


   if (key == '1' || (haySonido && frecuencia>100 && frecuencia<190 )){ 

    image(image1,0,0,430,600);
    CodigoDeColor=1;
    tint(255,15);
    key='a';
    imagenactual=true;
   }
   

   if (key == '2'|| (haySonido && frecuencia>300 && frecuencia<400 )){
    CodigoDeColor=2;
    tint(255,75);
    image(image6,0,0,430,600);
    key='a';
  
   }
   if (key == '3'|| (haySonido && frecuencia>1600 && frecuencia<1500 )){
    CodigoDeColor=3;
    tint(255,15);
    image(image13,0,0,430,600);
    key='a';
   
  }

   if (key==' '){
    background(255,255,255);
    //key=='A'; 
    obraVerificacion=false;
    
  }


  if (mouseIsPressed && mouseX<50 && CodigoDeColor==1 ||(haySonido && frecuencia<300 && frecuencia>200 )){ 
    tint(255,55);
   image(image2,0,0,190,680);
   obraVerificacion=true;

  }   

  if (mouseIsPressed && mouseX > 350 && CodigoDeColor==1 ||(haySonido && frecuencia<350 && frecuencia>250 )){ 
  
   tint(255,35);
    image(image3,230,0, 200,600);
    
  }

  if (mouseIsPressed && mouseX > 50 && mouseX<350 && CodigoDeColor==1 || (haySonido && frecuencia<200 && frecuencia>100 )){ 
   
    tint(255,60);
    image(image4,150,0, 110,500);
     
    }
  

 if (mouseIsPressed && mouseX > 300 && CodigoDeColor==2||(haySonido && frecuencia<300 && frecuencia>200 )){
    tint(255,30);
    image(image7,250,0, 180,600);
    
  }
  
  if (mouseIsPressed && mouseX<50 && CodigoDeColor==2||(haySonido && frecuencia<300 && frecuencia>200 )){ 
    //tint(255,75);
   image(image10,0,0,280,600);
   obraVerificacion=true;2
     }  

  if (mouseIsPressed && mouseX > 50 && mouseX<320 && CodigoDeColor==2||(haySonido && frecuencia<300 && frecuencia>200 )){
    tint(255,55);
    image(image9,140,0, 120,600);
   
  
  }
  
  if (mouseIsPressed && mouseX > 50 && mouseX<320 && CodigoDeColor==3||(haySonido && frecuencia<200 && frecuencia>300 )){
  tint(255,20);
  image(image15,290,0, 70,480);
  
  }

  if (mouseIsPressed && mouseX>390 && CodigoDeColor==3||(haySonido && frecuencia<300 && frecuencia>200 )){ 
  //tint(255,65);
 image(image14,280,0,180,610);
 obraVerificacion=true;3
   }  

  if (mouseIsPressed && mouseX < 50  && CodigoDeColor==3||(haySonido && frecuencia<400 && frecuencia>300 )){
 // tint(255,45);
  image(image16,0,0, 200,700);
  }
  if (keyIsPressed) {
    if ( keyCode == LEFT_ARROW ||(haySonido && frecuencia<200 && frecuencia>150 )){
      tint(255,65)
      image(image11,70,0,210,680);
      key='a';
    }
  }

  if (keyIsPressed) {
    if ( keyCode == DOWN_ARROW ||(haySonido && frecuencia<300 && frecuencia>200 )){
     tint(255,25)
      image(image12,150,0,130,700);
      key='a';
    }
  }
  if (keyIsPressed) {
    if ( keyCode == UP_ARROW ||(haySonido && frecuencia<100 && frecuencia>150 )){
      tint(255,60)
      image(image5,210,0,110,500);
      key='a';
    }
  }

  if (keyIsPressed) {
    if ( keyCode == RIGHT_ARROW ||(haySonido && frecuencia<200 && frecuencia>100 )){
      tint(255,20)
      image(image8,0 ,0,150,680);
      key='a';
    }
  }
}


//-------FRECUENCIA-----

function startPitch() {
  pitch = ml5.pitchDetection(pichModel, audioContext , mic.stream, modelLoaded);
}
function modelLoaded() {
  getPitch();
}

function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (frequency) {
      frecuencia = frequency;
    } else {
    }
    getPitch();
  })
}


//-------IMPRIMIR -------
function imprimirData(){

  background(255);
  push();
  textSize(16);
  fill(0);
  let texto;
  texto = 'amplitud: ' + amp;
  text(texto, 10, 20);

  texto = 'frecuencia: ' + frecuencia;
  text(texto, 10, 40);
  pop();

}