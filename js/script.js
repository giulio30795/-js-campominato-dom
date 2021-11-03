// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l’utente clicca su ogni cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

let container = document.querySelector('.grid-container')
const btn = document. querySelector('.btn')
const scelta = document.getElementById('difficoltà')

btn.addEventListener('click' , function(){
        container.innerHTML =''
        container.classList.remove('end-game')
    let numeroCelle = 0
    let numeroElementi = 0
    if (scelta.value == 'facile'){
        numeroCelle = 100
        numeroElementi = 10
    } else if 
        (scelta.value == 'medio'){
        numeroCelle = 81
        numeroElementi = 9
    }else if (scelta.value == 'difficile') {
        numeroCelle = 49
        numeroElementi = 7
    }
    for(let i = 1; i <= numeroCelle; i++){
        const square = DivGenerator()
        container.append(square)
        square.style.width=`calc(100% / ${numeroElementi})`
        let number = i
        square.append(number)

        square.addEventListener('click', function(){
            if(!bombList.includes(number)){
                square.classList.add('safe')
            } else {
                square.classList.add('bomb')
                container.classList.add('end-game')
                const squares = document.querySelectorAll('.square')

                for(let i = 0; i <= squares.length; i++)
                    if (bombList.includes(parseInt(squares[i].innerHTML))) {
                        squares[i].classList.add('bomb')
                    }
            }
        })
    }

    const bombList = BombGenerator (16, numeroCelle)
    const tentativiMax = numeroCelle - bombList.length
    const tentativi = []
})



// Funzioni
function DivGenerator (){
const square = document.createElement('div')
square.classList.add('square')

return square
}

function randNumGenerator( min, max,){
    const randNum = Math.floor( Math.random()*(max - min + 1) + min)
    return randNum
}

function BombGenerator (bombnumber, numeroCelle){
    const bombList = []
    while(bombList.length < bombnumber){
     let bomb = randNumGenerator(1, numeroCelle)
        if (!bombList.includes(bomb)){
            bombList.push(bomb)
        }
    }
    return bombList
}

// function EndGame() {
//     vittoria = document.createElement('div')
//     vittoria.innerHTML = `Complimenti, hai eseguito ${tentativi.length} e hai vinto! Gioca ancora`

//     }
// }
