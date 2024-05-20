function comprar(comida){
    if(sessionStorage.getItem(comida) == null){
        sessionStorage.setItem(comida, 1);
    }else{
        sessionStorage.setItem(comida, parseInt(sessionStorage.getItem(comida)) + 1);
    }
    ver();
}

function ver(){
    carrito.innerHTML = "";
    if(sessionStorage.lenght == 0){
        carrito.innerHTML = "<h2> No tienes nada en el carrito</h2>";
    }else{
        carrito.innerHTML = "table width='90%'><tr><td>Productos</td><td>Cantidad</td></tr></table>";
        for(var i = 0; i <sessionStorage.length; i++){ //creo variable i,mientras i sea menos, sumamos uno a i
            carrito.innerHTML+="<table width='90%'><tr><td>"
            + sessionStorage.key(i) + "</td><img<td>"
            + sessionStorage.getItem(sessionStorage.key(i)) + "</td></tr><table>";
        }
    }
}
function borrar(comida){
    if(sessionStorage.getItem(comida) ==1 ){
        sessionStorage.removeItem(comida);
    }else{
        sessionStorage.setItem(comida, parseInt(sessionStorage.getItem(comida)) - 1);
    }
    ver();
}
    
