const splashes = [
    "Hello!",
    "011011000110111101101100!",
    "Also try Minecraft!",
    "Also try Terraria!",
    "The Earth is a triangle!",
    "Theres's no escape!",
    "Thanks for coming. It was getting lonely!",
    "Shut up!",
    "9!",
    "Made by Protoplosion!",
    "There's nothing to see here!",
    "What?",
    "Nothing is what it seems!",
    "Your wrong!",
    "How do you know that?",
    "It doesn't seem right!",
    "Don't look further!",
    "Why?",
    "You're not supposed to!",
    "What's 9 + 10?",
    "Can I have you cut, G?",
    "Base boosted!",
    "Sex!",
    "No don't do it!",
    "New phone, who dis?",
    "Wrong chat!",
    "Sorry!",
    "Are you a Redditor AND a Discord admin?",
    "YANKEE WITH NO BRIM!",
    "I'm so bored I peed!",
    "Hello internet! Welcome to Game Theory!",
    "But hey, that's just a theory, a GAME theory!",
    "But hey, that's just a theory, a FILM theory!",
    "But hey, that's just a theory, a FOOD theory!",
    "But hey, that's just a theory, a STYLE theory!",
    "But hey, that's just a stream, a LIVE stream!",
    "Thanks for watching!",
    "MatPat's final thoughts!",
    "I think NOT!",
    "Let's talk about that!",
    "Need more proof?",
    "Hi, it's me! Austin!",
    "Yes master?",
    "It's bigger on the inside!",
    "It's smaller on the outside!",
    "Reverse the polarity of the neutron flow!",
    "Never be cruel. never be cowardly!",
    "There's no point in being grown up if you can't act childish sometimes!",
    "Fantastic!",
    "Allons-y!",
    "Geronimo!",
    "Hello Sweetie!",
    "Spoilers!",
    "Planet of the Pudding Brains!",
    "[Content Deleted]!",
    "404 Error!",
    "Connection lost!",
    "Run while you still can!",
    "Why are we still here? Just to suffer?",
    "Why have you come here?",
    "What's that in the corner of the screen?",
    "Hey Ryan! Hey Billy!",
    "How's it going bros, my name is PewDiePie!",
    "Heelllo everybody, my name is Markiplier!",
    "Top of the mornin' to ya ladies!",
    "I put my pants on one nipple at a time!",
    "Refresh, I dare you!",
    "It's you!",
    "Despite everything, it's still you!",
    "69!",
    "When life give you lemons, don't make lemonade!",
    "make life take the lemons back! Get mad!",
    "I don't want your damn lemons!",
    "Demand to see life's manager! Make life rue the day!",
    "It's like one of my Japanese animes!",
    "Use the mouse pad!",
    "Use the track pad!",
    "document.getElementById!",
    "Oh dear, it seams I have the education till the morrow!",
    "Oh, fiddlesticks. What know?",
    "Plot armor!",
    "Plot armour!",
    "Leeeeeave this place!",
    "Oof!",
    "Bruh!",
    "Did you get this message?",
    "I'm not throwing away my shot!",
    "Wow!",
    "How many of these are there?",
    "Hello?",
    "Is that a weed?! I'm calling the police!",
    "Is that a police?! I'm calling the weed!",
    "FBI open up!",
    "420, whatcha smoking?",
    "SKIBIDI BOP MM DADA!",
    "*Anime girl noises intensify*!",
    "Do you ever just-!",
    "Amoonguss!",
    "This message will never appear on the splash screen, isn't that weird?", // It infact, does.
    "IS THAT A SUPRA?!",
    "Is that a soup, brah?!",
    "Subscribe and I'll give you a cookie!",
    "youtube.com/LoneWolfGaming04!",
    "Login?!",
    "Where's my anime music when I need it?!",
    "...!",
    "Sub to Protoplosion!",
    "u/PrototypError on Reddit!",
    "Totally cooked him bro!",
    "He's actually trying!",
    "Well played!",
    "Show me ya moves!",
    "Sorry, mic muted. What were you saying?",
    "Friend request received!",
    "Imagine if Minecraft had a marketplace haha!",
    "Nanomachines son!",
    "Free from FOXDIE, free from the System, free from ID control!",
    "Engravings, give you no tactical advantage, whatsoever!",
    "RULES OF NATURE!!!!",
    "121!",
    "Number 15, could I get the number 15!",
    "It's me!",
    "I'm not a robot!",
    "What? No, I am a real person!",
    "Maybe we have a bad connection I'm sorry about that!",
    "I am a real person!",
    "I'm dead!",
    "¿Quieres?",
    "Amogus!",
    "ඞ!",
    "You're going to brazil!",
    "POV:",
    "Me:",
    "My reaction to that information:",
    "Nobody:",
    "Was that the bite of \'87?!",
    "Was that the bite of 9/11?!",
    "Bro visited his friend!",
    "She is such a bad bitch though!",
    "Star light, star bright!",
    "First star I see tonight!",
    "I wish I may, I wish I might!",
    "Have this wish I wish tonight!",
    "Shine Get!",
    "Achievement get!",
    "Advancement Made!",
    "New Recipes Unlocked!",
    "You have earned a trophy!",
    "Trophy earned!",
    "Achievement unlocked!",
    "Pet the cat!",
    "Try my games please!",
    "16 + 1 + 4 ≠ 51090942171709440000",
    "It's a terrible day for rain.",
    "Kabosu was the best boy!",
    "wow such splash! very fun!",
    "Kabosu-chan!",
    "I use Arch btw!",
    "Safety torch!",
    "No officer, it's a Jojo reference!",
    "These splashes arn't useless!",
    "I'm not in denial!",
    "I thought it would be cool!",
    "Splash text!",
    "This is the greatest plan!",
    "ShamWOOHOO!",
    "OMG LOL BTW OMW ASAP TTYL IRL!",
    "I never asked for this!",
    "Why is 6 afraid of 7? Tuesday!"
]

let randomSplash = Math.round(Math.random() * (splashes.length - 1))
let splash = splashes[randomSplash]
let count = 0
document.getElementById("splashtext").innerHTML = ""

function newSplash() {
    refresh = true;
    randomSplash = Math.round(Math.random() * (splashes.length - 1))
    splash = splashes[randomSplash]
    count = 0
    document.getElementById("splashtext").innerHTML = ""
    let audio = new Audio('click.mp3')
    audio.play()
}

let splashSet
if (!splashSet) {
    splashSet = true
    var splashWrite = setInterval (() => {
        document.getElementById("splashtext").innerHTML += splash.charAt(count)
        count++
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
    }, 50)
}


const errors = [
    "Error.",
    "Nope!",
    "Can't do!",
    "Nuh Uh.",
    "Not know!",
    "Look away.",
    "No link!",
    "Coming soon!",
    "Maybe not...",
    "No touch.",
    "Eat dust!",
    "Be patient.",
    "Don't click!",
    "404."
]

function linkUnavailable(btnId) {
    let btn = document.getElementById(btnId)
    btn.disabled = true
    btn.innerHTML = errors[Math.round(Math.random() * (errors.length - 1))]
    
    setTimeout(function() {
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

window.onload = (function() {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onmouseover = function() {
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
    if (refresh) document.getElementById("splashtext").innerHTML = ""
    refresh = false
    document.getElementById("splashtext").innerHTML += input;
    let audio = new Audio('click.mp3')
    audio.play()
}

function enter() {
    refresh = true
    let audio
    switch (document.getElementById("splashtext").innerHTML) {
        case "69": splash = "( ͡° ͜ʖ ͡°)"; break
        case "1337": splash = "1 L1K3 Y0UR FUNNY W0RD5 M461C M4N!"; break
        case "666": splash = "THE POWER OF CHRIST COMPELS YOU!"; break
        case "420": splash = "Whatcha smoking?"; break
        case "777": splash = "Jesus Christ!"; break
        case "911": splash = "911, whats the emergancy?"; break
        case "999": splash = "Which service do you require?"; break
        case "123456789": splash = "Wooooow... You can count."; break
        case "9+10": splash = "21!"; break
        case "0.0": splash = "( ⚆o⚆)"; break
        case "+-+": splash = "(✧_✧)"; break
        case "*-*": splash = "(•_•)"; break
        case "1+1": splash = "3!"; break
        case "2+2": splash = "It's a fish!"; break
        case "3.14": splash = "I'd love some!"; break
        case "0/0": splash = "Fuck you."; break
        case "5318008": splash = "Hehe."; break
        case "0.7734": splash = "Hi!"; break
        case "27": splash = "That's weird."; break
        case "04": splash = "Do you work for the Battalion?"; break
        case "02": splash = "Weaklings die. Big deal."; break
        case "000000": splash = "Double rainbow all the way!"; rainbow(); break
        case "16+1+4": splash = "Java 21!"; break
        case "789": splash = "He did?!"; break
        case "400": splash = "Bad request."; break
        case "401": splash = "Unauthorized."; break
        case "402": splash = "Payment required."; break
        case "403": splash = "Forbidden."; break
        case "404": splash = "Not found."; break
        case "418": splash = "I'm a teapot."; break
        case "502": splash = "Bad gateway."; break
        case "621": splash = "E!"; break
        case "707": splash = "Move your body!"; audio = new Audio('707.mp3'); audio.play(); break
        case "808": splash = "Bust a move!"; audio = new Audio('808.mp3'); audio.play(); break
        case "909": splash = "Make some noise!"; audio = new Audio('909.mp3'); audio.play(); break
        case "123": splash = "Incorrect password!"; break
        default:
            splash = ""
            audio = new Audio('clear.mp3')
            audio.play()
            break
    }
    document.getElementById("splashtext").innerHTML = ""
    count = 0
}


function meow() {
    let audio = new Audio("meow.mp3")
    audio.play()
}


let dematerialised = false
function dematerialise() {
    if (!dematerialised) {
        document.getElementById("tardis").classList.add("dematerialise");
        let audio = new Audio("dematerialise.mp3")
        audio.play()
        dematerialised = true
    }
}


let rainbowActive = false
let hue = 0
function rainbow() {
    if (!rainbowActive) {
        supPressed = true
        setInterval(function () {
            hue++
            let hsl = "hsl(" + hue + ", 100%, 50%)"
            document.getElementById("splashtext").style.color = hsl
            document.getElementById("splashbox").style.borderColor = hsl
        }, 1)
    }
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

setInterval (() => {
    context.fillStyle = "#26191910"
    context.fillRect(0, 0, w, h)

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