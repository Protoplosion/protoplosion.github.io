const splashes = [
    "Hello!",
    "011011000110111101101100!",
    "Also try Minecraft!",
    "The Earth is a triangle!",
    "Best fucking website ever!",
    "Thanks for coming. It was getting lonely!",
    "Shut up!",
    "Made by Protoplosion!",
    "9!",
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
    "But hey, that's just a theory, a GAME theory!",
    "Thanks for watching!",
    "Yes master?",
    "[Content Deleted]!",
    "404 Error!",
    "Connection lost!",
    "Run while you still can!",
    "Why are we still here? Just to suffer?",
    "Why have you come here?",
    "What's that in the corner of the screen?",
    "Hey Ryan!",
    "Hey Billy!",
    "How's it going bros, my name is PewDiePie!",
    "Heelllo everybody, my name is Markiplier!",
    "Top of the mornin' to ya ladies!",
    "Refresh, I dare you!",
    "Oh... It's you!",
    "It's been a long time. How have you been?",
    "I've been really busy being dead. You know, after you MURDERED ME!",
    "Okay. Look. We both said a lot of things that you're going to regret!",
    "But I think we can put our differences behind us. For science. You monster!",
    "It's like one of my Japanese animes!",
    "242!",
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
    "69!",
    "Is that a weed?! I'm calling the police!",
    "Is that a police?! I'm calling the weed!",
    "FBI open up!",
    "420, what ya smoking?",
    "SKIBIDI BOP MM DADA!",
    "*Anime girl noises intensify*!",
    "Do you ever just-!",
    "Sususs Amongus!",
    "This message will never appear on the splash screen, isn't that weird?",
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
    "PrototypError on Reddit!",
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
    "Number 15, could I get the number 15!",
    "It's me!",
    "I'm not a robot!",
    "The waffle house has found its new host!",
    "¿Quieres?",
    "Amogus!",
    "You're going to brazil!",
    "POV:",
    "Me:",
    "My reaction to that information:",
    "I'm dead!",
    "Was that the bite of \'87?!",
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
    "..!",
    "That's it!"
];

document.getElementById("splashText").innerHTML = splashes[Math.round(Math.random() * (splashes.length - 1))];

var supPressed = false;
var hue = 0;
function sup() {
    if (!supPressed) {
        supPressed = true;
        var noise = document.getElementById("noise");
        noise.play();
        setInterval(function () {
            hue += 1;
            if (hue >= 360) hue = 0;
            document.getElementById("splashText").style.color = "hsl(" + hue + ", 100%, 50%)";
        }, 10);
    }
}


const title = "Protoplosion"
let count = 0

if (document.getElementById("title").innerHTML == title) clearInterval(titleWrite)

let titleSet
if (!titleSet) {
    titleSet = true
    var titleWrite = setInterval (() => {
        document.getElementById("title").innerHTML += title.charAt(count)
        count++
    }, 100)
}

const canvas = document.getElementById("canvas-background")
const context = canvas.getContext("2d")

const w = canvas.width = document.documentElement.clientHeight;
const h = canvas.height = document.documentElement.clientWidth;

//const w = canvas.width = document.body.offsetWidth
//const h = canvas.height = document.body.offsetHeight

context.fillStyle = "#000"
context.fillRect(0, 0, w, h)

const cols = Math.floor(w / 20) + 1
const ypos = Array(cols).fill(0)

const chars = title

setInterval (() => {
    context.fillStyle = "#0001"
    context.fillRect(0, 0, w, h)
  
    context.fillStyle = "#0f0"
    context.font = "15pt monospace"
  
    ypos.forEach((y, ind) => {
      const char = chars[Math.floor(Math.random() * chars.length)]
  
      const x = ind * 20
      context.fillText(char, x, y)
  
      if (y > 100 + Math.random() * 10000) ypos[ind] = 0
      else ypos[ind] = y + 20

    if (document.getElementById("splashText").innerHTML == "Yes master?") {
        document.getElementById("canvas-background").style.backgroundImage = "url('waifu.jpg')";
        document.getElementById("canvas-background").style.backgroundSize = "cover";
        document.getElementById("canvas-background").style.backgroundRepeat = "no-repeat";
    } else {
        context.fillStyle = "#10101f";
        context.fillRect(0, 0, width, height);
    }
}, 50)
