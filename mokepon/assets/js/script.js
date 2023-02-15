
let AtaqueJugador 
let AtaqueEnemigo



//FUNCIÓN PARA GENERAR NÚMEROS ALEATORIOS
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//FUNCION QUE INICIA EL JUEGO AL CARGAR LA PAGINA
function iniciarjuego() {

    let BotonMascotaJugador = document.getElementById('boton-mascotas')
    BotonMascotaJugador.addEventListener('click', selectMascotaJugador)

    let BotonFuego = document.getElementById('boton-fuego')
    BotonFuego.addEventListener('click', AtaqueFuego)
    let BotonAgua = document.getElementById('boton-agua')
    BotonAgua.addEventListener('click', AtaqueAgua)
    let BotonTierra = document.getElementById('boton-tierra')
    BotonTierra.addEventListener('click', AtaqueTierra)


}

    ///SELECIONAR MASCOTA JUGADOR
    function selectMascotaJugador() {
        let hipoInp = document.getElementById('hipodoge')
        let capiInp = document.getElementById('capipepo')
        let ratiInp = document.getElementById('ratigueya')
        let spanmascotajugador = document.getElementById('mascota-jugador')
        let spanmascotajugadorvidas = document.getElementById('mascota-jugador-vidas')
        if (hipoInp.checked) {
            spanmascotajugador.innerHTML = ("hipodoge")
        } else if (capiInp.checked) {
            spanmascotajugador.innerHTML = ("capipepo")
        } else if (ratiInp.checked) {
            spanmascotajugador.innerHTML = ("ratigueya")
        } else {
            alert("DEBES SELECIONAR UN MOKEPON")
        }
        selectMascotaEnemigo()
    }



    ///SELECIONAR MASCOTA Enemigo ALEATORIO 
    function selectMascotaEnemigo() {
        let MascotaAleatorio = numeroAleatorio(1, 3)
        let spanmascotaEnemigo = document.getElementById('mascota-enemigo')

        if (MascotaAleatorio == 1) {
            spanmascotaEnemigo.innerHTML = ("hipodoge")
        } else if (MascotaAleatorio == 2) {
            spanmascotaEnemigo.innerHTML = ("capipepo")
        } else {
            spanmascotaEnemigo.innerHTML = ("ratigueya")
        }
    }

   /// Ataque Jugador
function AtaqueFuego(){
    AtaqueJugador = 'FUEGO'
    AtaqueAleatorioEnemigo()
}
function AtaqueAgua(){
    AtaqueJugador = 'AGUA'
    AtaqueAleatorioEnemigo()
}
function AtaqueTierra(){
    AtaqueJugador = 'TIERRA'
    AtaqueAleatorioEnemigo()
}



    ///Ataque Enemigo ALEATORIO 
    function AtaqueAleatorioEnemigo() {
        let AtaqueAleatorio = numeroAleatorio(1, 3)

        if (AtaqueAleatorio == 1) {
            AtaqueEnemigo = 'FUEGO'
        
        } else if (AtaqueAleatorio == 2) {
            AtaqueEnemigo = 'AGUA'
     
        } else {
            AtaqueEnemigo = 'TIERRA'
     
        }
        CrearMensajesPartida()
    }

function CrearMensajesPartida(){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con '+AtaqueJugador+', la mascota del enemigo atacó con '+AtaqueEnemigo+''

    sectionMensajes.appendChild(parrafo)
    }


























window.addEventListener('load', iniciarjuego)