let fotosAniversario = [
    './imagens/aniversario/aniversario.png',
    './imagens/aniversario/aniversario2.png',
    './imagens/aniversario/aniversario3.png',
    './imagens/aniversario/aniversario4.png',
    './imagens/aniversario/aniversario5.png'
]

let diversos = [
    './imagens/diversos/cerveja.png',
    './imagens/diversos/chapanela.png',
    './imagens/diversos/diversos.png',
    './imagens/diversos/diversos2.png',
    './imagens/diversos/diversos3.png',
    './imagens/diversos/tiktok.png'
]

let eventos = [
    './imagens/eventos/eventos.png',
    './imagens/eventos/eventos2.png',
    './imagens/eventos/eventos3.png',
    './imagens/eventos/eventos4.png',
    './imagens/eventos/eventos5.png',
    './imagens/eventos/eventos6.png'
]

let infantis = [
    './imagens/infantil/aniversario-menina.png',
    './imagens/infantil/aniversario-menina2.png',
    './imagens/infantil/infantil-menina.png',
    './imagens/infantil/infantil-menina2.png',
    './imagens/infantil/infantil-menina3.png',
    './imagens/infantil/infantil-menino.png',
    './imagens/infantil/infantil-menino2.png',
    './imagens/infantil/infantil-menino3.png',
    './imagens/infantil/infantil-menino4.png',
    './imagens/infantil/infantil-neutro.png',
    './imagens/infantil/infantil-neutro2.png',
    './imagens/infantil/infantil-neutro3.png'
]

let times = [
    './imagens/times/corinthians.png',
    './imagens/times/palmeiras.png',
    './imagens/times/vila.png'
]

function gerarGaleria(titulo, arr) {

    galeria = `<p class="text-center fs-1 inriaSerif">${titulo}</p>
    <div class="row" >`

    fotos = arr.forEach(foto => {
        galeria += `<div class="col-6 col-md-4 p-4">
                        <img class="col-12 rounded-3 shadow" src="${foto}" alt="" >
                    </div>`
        
    });

    galeria += `</div><div style="height: 150px;"></div>`

    return galeria  
}
