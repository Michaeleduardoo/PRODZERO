let btstart = document.getElementById("start")
let btstop = document.getElementById("stop")
let btreset = document.getElementById("reset")
let hr = document.getElementById("horas")
let min = document.getElementById("minu")
let seg = document.getElementById("segun")
let mili = document.getElementById("numero-verde")

let starTTimer
let ms = "00"
let segu = "00"
let minu = "00"
let hora = "00"

function starts() {
    starTTimer = setInterval(function () {
        ms++

        if (ms < 10) {
            ms = "0" + ms
        }

        if (ms === 100) {
            segu++
            if (segu < 10) {
                segu = "0" + segu
            }
            ms = 0
        }

        if (segu === 60) {
            minu++

            if (minu < 10) {
                minu = "0" + minu
            }

            segu = 0
        }

        if (minu === 60) {
            hora++

            if (hora < 10) {
                hora = "0" + hora
            }

            minu = 0
        }

        btstop.classList.remove("ativo")
        btstart.classList.add("ativo")
        atualizavalor()
    }, 10);


}

function atualizavalor() {
    mili.innerHTML = ms
    seg.innerHTML = segu
    min.innerHTML = minu
    hr.innerHTML = hora
}

function pare() {
    clearInterval(starTTimer)
    btstop.classList.add("ativo")
    btstart.classList.remove("ativo")
}
function zera() {
    clearInterval(starTTimer)
    ms = "00"
    segu = "00"
    minu = "00"
    hora = "00"
    atualizavalor()

    btstart.classList.remove("ativo")
    btstop.classList.remove("ativo")
}



btreset.addEventListener("click", zera)
btstop.addEventListener("click", pare)
btstart.addEventListener("click", starts)