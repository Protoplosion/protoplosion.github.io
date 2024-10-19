let randomSplash = Math.round(Math.random() * (splashes.length - 1))
let splash = splashes[randomSplash]
let count = 0
let splashField = document.getElementById("splashtext")
splashField.innerHTML = ""

function newSplash() {
    refresh = true;
    randomSplash = Math.round(Math.random() * (splashes.length - 1))
    splash = splashes[randomSplash]
    count = 0
    splashField.innerHTML = ""
    let audio = new Audio('click.mp3')
    audio.play()
}

let splashSet
if (!splashSet) {
    splashSet = true
    var splashWrite = setInterval (() => {
        splashField.innerHTML += splash.charAt(count)
        count++
        if (splash[count] !== " ") {
            if (randomSplash >= 30 && randomSplash <= 37) {
                if (splash.length === count) {
                    let audio = new Audio('mat-blip-low.mp3')
                    audio.play()
                } else if (splash.charAt(count) !== "") {
                    let audio = new Audio('mat-blip.mp3')
                    audio.play()
                }
            } else {
                if (splash.length === count) {
                    let audio = new Audio('blip-low.mp3')
                    audio.play()
                } else if (splash.charAt(count) !== "") {
                    let audio = new Audio('blip.mp3')
                    audio.play()
                }
            }
        }
    }, 50)
}


function linkUnavailable(btnId) {
    let btn = document.getElementById(btnId)
    btn.disabled = true
    btn.innerHTML = errors[Math.round(Math.random() * (errors.length - 1))]
    
    setTimeout(() => {
        btn.disabled = false
        switch (btnId) {
            case "twitch":
                btn.innerHTML = "Twitch"
                break
            case "twitter":
                btn.innerHTML = "Twitter"
                break
            case "reddit":
                btn.innerHTML = "Reddit"
                break
        }
    }, 2000)
}

window.onload = (() => {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onmouseover = () => {
            let randomKey = Math.round(Math.random() * 4)
            let audio
            switch (randomKey) {
                case 0:
                    audio = new Audio("keypress-01.mp3")
                    break
                case 1:
                    audio = new Audio("keypress-02.mp3")
                    break
                case 2:
                    audio = new Audio("keypress-03.mp3")
                    break
                case 3:
                    audio = new Audio("keypress-04.mp3")
                    break
                case 4:
                    audio = new Audio("keypress-05.mp3")
                    break
            }
            audio.volume = 0.6
            audio.play()
        }
    }
})

let refresh = true;
function keypad(input) {
    if (refresh) {
        splashField.innerHTML = ""
        count = splash.length
    }
    refresh = false
    splashField.innerHTML += input;
    let audio = new Audio('click.mp3')
    audio.play()
}

function enter() {
    refresh = true
    let audio
    let codeMatches = false
    for (let i = 0; i < codes[0].length; i++) {
        if (splashField.innerHTML === codes[0][i]) {
            splash = codes[1][i]
            switch (codes[0][i]) {
                case "0/0": explode(); break
                case "000000": rainbow(); break
                case "360": roll(); break
                case "404": location.href = "404/"; break
                case "707": audio = new Audio('707.mp3'); audio.play(); break
                case "808": audio = new Audio('808.mp3'); audio.play(); break
                case "909": audio = new Audio('909.mp3'); audio.play(); break
            }
            codeMatches = true
            break
        }
    }
    if (!codeMatches) {
        splash = ""
        audio = new Audio('clear.mp3')
        audio.play()
    }
    codeMatches = false
    splashField.innerHTML = ""
    count = 0
}


function meow() {
    let audio = new Audio("meow.mp3")
    audio.play()
}


let dematerialised = false
function dematerialise() {
    if (!dematerialised) {
        document.getElementById("tardis").classList.add("dematerialise")
        let audio = new Audio("dematerialise.mp3")
        audio.play()
        dematerialised = true
    }
}

function explode() {
    document.querySelectorAll("div").forEach(element => {
        element.classList.add("exploding")
    })
    let white = document.createElement("div")
    white.classList.add("white")
    document.body.appendChild(white)
    white.parentNode.insertBefore(white, white.parentNode.firstChild)
}

let rainbowActive = false
let hue = 0
function rainbow() {
    if (!rainbowActive) {
        supPressed = true
        setInterval(() => {
            hue++
            let hsl = "hsl(" + hue + ", 100%, 50%)"
            splashField.style.color = hsl
            document.getElementById("splashbox").style.borderColor = hsl
        }, 1)
    }
}

function roll() {
    document.body.classList.add("doABarrelRoll")
    setTimeout(() => {
        document.body.classList.remove("doABarrelRoll")
    }, 4000)
}


const canvas = document.getElementById("canvas-background")
const context = canvas.getContext("2d")

const w = canvas.width = document.body.offsetWidth
const h = canvas.height = document.body.offsetHeight

context.fillStyle = "#261919"
context.fillRect(0, 0, w, h)

const cols = Math.floor(w / 20) + 1
const ypos = Array(cols).fill(0)

const chars = splash.replace(/\s|!/g, "")

const randomBackground = Math.round(Math.random() * 2)

let waifuActive = false
const waifu = new Image()
waifu.src = "test.webp"

setInterval (() => {
    if (splash.match("Yes master?") || waifuActive) {
        context.globalAlpha = 0.05
        context.drawImage(waifu, 0, 0, w, h)
        context.globalAlpha = 1
        waifuActive = true
    } else {
        context.fillStyle = "#26191910"
        context.fillRect(0, 0, w, h)
    }

    context.fillStyle = "hsl(" + hue + ", 100%, 50%)"
    context.font = "15pt monospace"

    ypos.forEach((y, ind) => {
        switch (randomBackground) {
            case 0:
                const char = chars[Math.floor(Math.random() * chars.length)]
                
                const x = ind * 20
                context.fillText(char, x, y)
                
                if (y > 100 + Math.random() * 10000) ypos[ind] = 0
                else ypos[ind] = y + 20

                break
            case 1:
                // in this case, x and y are flipped
                const x1 = ind * 20
                context.fillRect(y, x1, 18, 18)
                
                if (y > w + Math.random() * 1000000) ypos[ind] = 0
                else ypos[ind] = y + 20

                break
            case 2:
                const x2 = ind * 60
                context.fillRect(x2, y + h, 60, 10)
                
                if (y < -100 + Math.random() * -10000) ypos[ind] = 0
                else ypos[ind] = y - 10

                break
        }
    })
}, 50)