var answers = [];
answers[0] = "nunca";
answers[1] = "ni en tus sueños";
answers[2] = "puede ser";
answers[3] = "obvio que sí";
answers[4] = "inténtalo otro día";
answers[5] = "absolutamente";
answers[6] = "haz mérito";
answers[7] = "prueba otra vez";
answers[8] = "¿me estás bromeando?";
answers[9] = "pregúntale a tu perro";
answers[10] = "no dudes que será así";
answers[11]= "cuenta con ello";
answers[12]= "no tengas dudas";

//le hacemos la pregunta
prompt ("Consulta tu fortuna");

//ahora le damos la respuesra
var i=randomNumber(answers.length-1);
alert(answers[i]);

function randomNumber (max){
	return  Math.round(Math.random()*max);
}