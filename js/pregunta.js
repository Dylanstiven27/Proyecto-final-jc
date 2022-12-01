escogerpregunta(0)

let base_preguntas = readText("base de preguntas.json")
let interprete_bp = JSON.parse(base_de_base_preguntas)

function escogerpreguntaAleatoria(){
    escogerpregunta(Math.floor(Math.random()*interprete_bp.lenght))
}

function escogerpregunta(){
    pregunta = interprete_bp[n]
    select_id("opcion 1").innerHTML = pregunta.respuesta
    select_id("opcion 2").innerHTML = pregunta.incorrecta1
    select_id("opcion 3").innerHTML = pregunta.incorrecta2
    select_id("opcion 4").innerHTML = pregunta.incorrecta3
    select_id("opcion 5").innerHTML = pregunta.incorrecta4
}