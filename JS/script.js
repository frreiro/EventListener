function funcaoClique() {
    document.querySelector('.add_in_js h2').innerText = 'houve um clique'
}

/* ---  adicionando EventListener via JS --- */
const cliqueBotao = document.querySelector('.add_in_js button');

cliqueBotao.addEventListener('click', funcaoClique);
        // cliqueBotao.addEventListener('click', function(){console.log('click funcao anonima')})
        // cliqueBotao.addEventListener('click', () => { console.log('click arrow functions') })


/* --- Qual a diferença de um Event Listener de atributos HTML ? ---*/
let asideOnclick = document.querySelector('.onclick_e_event aside h3')
let asideEvent = document.querySelector('.onclick_e_event aside p')

const botao1 = document.querySelector('.onclick_e_event .botao1');
const botao2 = document.querySelector('.onclick_e_event .botao2');

 // eventlistener
botao2.addEventListener('click', () => {asideEvent.innerText += 'Olá'})
botao2.addEventListener('click', () => {asideEvent.innerText += ' Mundo'})

// on click
botao1.onclick = () => {asideOnclick.innerText += `Olá`}
botao1.onclick = () => {asideOnclick.innerText += `Mundo`}


/* --- O que é o objeto Event que é recebido na função de callback? --- */
const sectionEvento = document.querySelector('.receber_evento div div');
const botaoReceberEvento = document.querySelector('.receber_evento button');

botaoReceberEvento.addEventListener('click', (event) => {
    console.log(event)
    sectionEvento.innerHTML = `
        <div style="flex-direction: column;">
            <p>X:${event.x}</p>
            <p>Y:${event.y}</p>
            <p>Alt:${event.altKey}</p>
        </div>`

})

/*--- O que é Event Bubbling em JS? --- */
const avo = document.querySelector('.bubbling');
const pai = document.querySelector('.bubbling .pai');
const filho = document.querySelector('.bubbling .filho');


/*--- O que é Event.stopPropagation--- */
let asideBubbling = document.querySelector('.bubbling aside')
document.querySelector('.bubbling .limpar').addEventListener('click',(e)=>{
    e.stopPropagation();
    limparTelaBubbling()});

function renderizarMensagemBubbling(texto) {
    asideBubbling.innerHTML += `
    <p>${texto}</p>
    `
}

function limparTelaBubbling(){
    asideBubbling.innerHTML = '';
}


let propagacaoActivated = true;

const pararPropagacao = document.querySelector('.bubbling div button');
pararPropagacao.addEventListener('click', (e) => {
    e.stopPropagation()
    naoPropagar()
    toggleButtonNamePropagation(propagacaoActivated)
})

function naoPropagar() {
    if (propagacaoActivated === true) {
        propagacaoActivated = false
    } else {
        propagacaoActivated = true
    }
}

function toggleButtonNamePropagation(isActivated) {
    if (isActivated === false) {
        document.querySelector('.bubbling .propagation').innerText = `Retornar Propagação`
    } else {
        document.querySelector('.bubbling .propagation').innerText = `Parar Propagação`
    }
}

avo.addEventListener('click', (event) => {
    let text1 = 'avô clicado'
    renderizarMensagemBubbling(text1)
    if (propagacaoActivated === false) {
        event.stopPropagation()
    }
}, false);

pai.addEventListener('click', (event) => {
    let text2 = 'pai clicado'
    renderizarMensagemBubbling(text2)
    if (propagacaoActivated === false) {
        event.stopPropagation()
    }
}, false);

filho.addEventListener('click', (event) => {
    let text3 = 'filho clicado'
    renderizarMensagemBubbling(text3)
    if (propagacaoActivated === false) {
        event.stopPropagation()
    }
}, false);



/* ---- alterar useCapture --- */
let aside = document.querySelector('.capture aside')
function renderizarMensagem(texto) {
    aside.innerHTML += `
    <p>${texto}</p>
    `
}

function limparTela(){  
    aside.innerHTML = ''
}


document.querySelector('.capture button').addEventListener('click',(e)=>{
    e.stopPropagation();
    limparTela()
});

const avoCapture = document.querySelector('.capture');
const paiCapture = document.querySelector('.capture .pai');
const filhoCapture = document.querySelector('.capture .filho');

avoCapture.addEventListener('click', (event) => {
    let text1 = 'avô clicado'
    renderizarMensagem(text1)
}, true);

paiCapture.addEventListener('click', (event) => {
    let text2 = 'pai clicado'
    renderizarMensagem(text2)
}, true);

filhoCapture.addEventListener('click', (event) => {
    let text3 = 'filho clicado'
    renderizarMensagem(text3)
}, true)















// let captureActivate = false;
// document.querySelector('.bubbling .use_capture').addEventListener('click', (e)=> {
//     e.stopPropagation()
//     isCapture()
//     toggleButtonNameCapture(captureActivate)
// })

// function isCapture(){
//     if (captureActivate === true) {
//         captureActivate = false
//     } else {
//         captureActivate = true
//     }
// }

// function toggleButtonNameCapture(){
//     if(captureActivate === true){
//         document.querySelector('.bubbling .use_capture').innerText = `Fase de captura`
//     }else{
//         document.querySelector('.bubbling .use_capture').innerText = `Fase de bubbling`
//     }
// }

// function validateCapture(){
//     if(captureActivate){
//         return true
//     }else return false
// }