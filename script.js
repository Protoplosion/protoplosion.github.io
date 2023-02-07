const splash = [
    "Hello!",
    "011011000110111101101100",
    "Also try Minecraft!",
    "The Earth is a triangle.",
    "Best fucking website ever.",
    "Thanks for coming. It was getting lonely.",
    "Shut up!",
    "Made by Protoplosion.",
    "9",
    "There's nothing to see here.",
    "What?",
    "Nothing is what it seems.",
    "Your wrong.",
    "How do you know that?",
    "It doesn't seem right.",
    "Don't look further.",
    "Why?",
    "You're not supposed to.",
    "What's 9 + 10?",
    "Can I have you cut, G?",
    "Base boosted!",
    "Sex.",
    "Wait no...",
    "New phone, who dis?",
    "Wrong chat.",
    "Sorry.",
    "Are you a Redditor AND a Discord admin?",
    "YANKEE WITH NO BRIM!",
    "I peed.",
    "But hey, that's just a theory, a GAME theory.",
    "Thanks for watching!",
    "Yes master?",
    "[Content Deleted]",
    "404 error.",
    "Connection lost.",
    "Run while you still can!",
    "Why are we still here? Just to suffer?",
    "Why have you come here?",
    "What's that in the corner of the screen?",
    "Hey Ryan.",
    "Hey Billy.",
    "How's it going bros, my name is PewDiePie!",
    "Heelllo everybody, my name is Markiplier.",
    "Top of the mornin' to ya ladies!",
    "Refresh, I dare you...",
    "Oh... It's you.",
    "It's been a long time. How have you been?",
    "I've been really busy being dead. You know, after you MURDERED ME.",
    "Okay. Look. We both said a lot of things that you're going to regret.",
    "But I think we can put our differences behind us. For science. You monster.",
    "It's like one of my Japanese animes.",
    "242",
    "Use the mouse pad.",
    "Use the track pad.",
    "document.getElementById",
    "Is the jack-o pose still relevant?",
    "Oh dear, it seams I have the education till the morrow.",
    "Oh, fiddlesticks. What know?",
    "Plot armor.",
    "Plot armour.",
    "Leeeeeave this place.",
    "Oof.",
    "Bruh.",
    "Did you get this message?",
    "I'm not throwing away my shot.",
    "Wow.",
    "How many of these are there?",
    "Hello?",
    "69",
    "Is that a weed?! I'm calling the police!",
    "Is that a police?! I'm calling the weed!",
    "FBI open up!",
    "420, what ya smoking?",
    "SKIBIDI BOP MM DADA!",
    "*Anime girl noises intensify*",
    "Do you ever just-",
    "Sususs Amongus.",
    "IS THAT A SUPRA?!",
    "DAS IS SUPRA?!",
    "Is that a soup, brah?",
    "My friends channel link is somewhere here...",
    "youtube.com/c/LoneWolfGaming04",
    "Login?",
    "Babyman found his wiener.",
    "Fat man found his wiener!",
    "Where's my anime music when I need it?",
    "*Octodad noises*",
    "Look at the little baby!",
    "Now look at the big baby.",
    "WAA.",
    "Sub to Protoplosion!",
    "PrototypError on Reddit.",
    "Totally cooked him bro.",
    "He's actually trying.",
    "Well played.",
    "Show me ya moves!",
    "Sorry, mic muted. What were you saying?",
    "Friend request received.",
    "Imagine if Minecraft had a marketplace haha...",
    "Nanomachines son.",
    "Free from FOXDIE, free from the System, free from ID control.",
    "Engravings, give you no tactical advantage, whatsoever.",
    "RULES OF NATURE!!!!",
    "Number 15, could I get the number 15.",
    "It's me.",
    "I'm not a robot.",
    "There's 108 of the babies.",
    "That's it."
];

document.getElementById("splashText").innerHTML = splash[Math.round(Math.random() * (splash.length - 1))];


if (document.getElementById("splashText").innerHTML == "Yes master?") {
    var txtFile = new XMLHttpRequest();
    var allText = "";
    txtFile.onreadystatechange = function () {
        if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
            allText = txtFile.responseText;
            allText = allText.split("\n").join("<br>");
        }
        
        document.getElementById("txt").innerHTML = allText;
    }
    txtFile.open("GET", "waifu.txt", true);
    txtFile.send(null);
}


function sup() {
    var noise = document.getElementById("noise");
    noise.play();
    
    let hue = 0;
    setInterval(function() {
        hue += 10;
        if (hue >= 360) hue = 0;
        document.getElementById("splashText").style.color = "hsl(" + hue + ", 100%, 50%)";
    }, 1);
}
