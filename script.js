//Esto agrega a la pantalla el valor del boton de la calculadora que toquemos
// el ID de html con un atributo interno del input q es value 

function agregar (valor){
    document.getElementById('pantalla').value += valor   
}

// igualamos a vacio para borrar pantalla

function borrar (){
    document.getElementById('pantalla').value = ''
}

// Esta accion toma el valor d la pantalla y ejecuta los calculos

function calcular (){
    const valorPantalla = document.getElementById('pantalla').value 
    const resultado = eval(valorPantalla) //+,-,*,/ etc
    document.getElementById('pantalla').value = resultado
}