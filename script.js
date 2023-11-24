const splashes = [
    "Hello!",
    "011011000110111101101100!",
    "Also try Minecraft!",
    "Also try Terraria!",
    "The Earth is a triangle!",
    "Best fucking website ever!",
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
    "Wait no!",
    "New phone, who dis?",
    "Wrong chat!",
    "Sorry!",
    "Are you a Redditor AND a Discord admin?",
    "YANKEE WITH NO BRIM!",
    "I peed!",
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
    "Oh... It's you!",
    "69!",
    "It's been a long time. How have you been?",
    "I've been really busy being dead. You know, after you MURDERED ME!",
    "Okay. Look. We both said a lot of things that you're going to regret!",
    "But I think we can put our differences behind us. For science. You monster!",
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
    "Sususs Amongus!",
    "This message will never appear on the splash screen, isn't that weird?", // Note: Yes, yes it does.
    "IS THAT A SUPRA?!",
    "Is that a soup, brah?!",
    "My friends channel link is somewhere here!",
    "youtube.com/LoneWolfGaming04!",
    "Login?!",
    "Where's my anime music when I need it?!",
    "Look at the little baby!",
    "Now look at the big baby!",
    "WAA!",
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
    "122!",
    "Number 15, could I get the number 15!",
    "It's me!",
    "I'm not a robot!",
    "What? No, I am a real person!",
    "Maybe we have a bad connection I'm sorry about that!",
    "I am a real person!",
    "The waffle house has found its new host!",
    "¿Quieres?",
    "Amogus!",
    "ඞ!",
    "You're going to brazil!",
    "POV:",
    "Me:",
    "My reaction to that information:",
    "I'm dead!",
    "Was that the bite of \'87?!",
    "Was that the bite of 9/11?!",
    "Bro went to Brazil.💀!",
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
    "..!",
    "That's it!"
]

let randomSplash = Math.round(Math.random() * (splashes.length - 1))
let splash = splashes[randomSplash]
let count = 0
document.getElementById("splashtext").innerHTML = ""

function newSplash() {
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
        if(randomSplash >= 30 && randomSplash <= 37) {
            if(splash.length === count) {
                let audio = new Audio('mat-blip-low.mp3')
                audio.play()
            } else if(splash.charAt(count) !== "") {
                let audio = new Audio('mat-blip.mp3')
                audio.play()
            }
        } else {
            if(splash.length === count) {
                let audio = new Audio('blip-low.mp3')
                audio.play()
            } else if(splash.charAt(count) !== "") {
                let audio = new Audio('blip.mp3')
                audio.play()
            }
        }
    }, 50)
}


const errors = [
    "Error",
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
    "Be patient."
]

function linkUnavailable(btnId) {
    let btn = document.getElementById(btnId)
    btn.disabled = true
    btn.innerHTML = errors[Math.round(Math.random() * (errors.length - 1))]
    setTimeout(function() {
        btn.disabled = false
        switch(btnId) {
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


function meow() {
    let audio = new Audio('meow.mp3')
    audio.play()
}


let dematerialised = false
function dematerialise() {
    if (!dematerialised) {
        document.getElementById("tardis").classList.add("dematerialise");
        let audio = new Audio('dematerialise.mp3')
        audio.play()
        dematerialised = true
    }
}


let supPressed = false
let hue = 0
function sup() {
    if (!supPressed) {
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

setInterval (() => {
    context.fillStyle = "#26191910"
    context.fillRect(0, 0, w, h)

    if (!supPressed) context.fillStyle = "#f00"
    else context.fillStyle = "hsl(" + hue + ", 100%, 50%)"
    context.font = "15pt monospace"
    
    ypos.forEach((y, ind) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        
        const x = ind * 20
        context.fillText(char, x, y)
        
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0
        else ypos[ind] = y + 20
    })
}, 50)
