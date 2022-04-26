const rutas = {
    inicio:'/',
    aprende:'/aprende',
    conocenos:'/conocenos',
    inicio_de_sesion:'/usuarios',
}

function getPagina(index = int) {
    ruta = String;
    switch(index){
        case 1:
            ruta = rutas.inicio;
            break;
        case 2:
            ruta = rutas.aprende;
            break;
        case 3:
            ruta = rutas.conocenos;
            break;
        case 4:
            ruta = rutas.inicio_de_sesion;
            break;
    }
    setTimeout(() => {
        window.location.href = ruta;
        },0);    
}