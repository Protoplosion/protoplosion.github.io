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


// constants
const COLOR_BG = "#10101f";
const COLOR_CUBE = "red";
const SPEED_X = 0; // rps
const SPEED_Y = 0.01; // rps
const SPEED_Z = 0.02; // rps
const POINT3D = function(x, y, z) { this.x = x; this.y = y; this.z = z; };

// set up the canvas and context
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
var ctx = canvas.getCSSCanvasContext("2d", "canvas");

// dimensions
var h = document.documentElement.clientHeight;
var w = document.documentElement.clientWidth;
canvas.height = h;
canvas.width = w;

// colours and lines
ctx.fillStyle = COLOR_BG;
ctx.strokeStyle = COLOR_CUBE;
ctx.lineWidth = w / 100;
ctx.lineCap = "round";

// cube parameters
var cx = w / 2;
var cy = h / 2;
var cz = 0;
var size = h / 4;
var vertices = [
    new POINT3D(cx - size, cy - size, cz - size),
    new POINT3D(cx + size, cy - size, cz - size),
    new POINT3D(cx + size, cy + size, cz - size),
    new POINT3D(cx - size, cy + size, cz - size),
    new POINT3D(cx - size, cy - size, cz + size),
    new POINT3D(cx + size, cy - size, cz + size),
    new POINT3D(cx + size, cy + size, cz + size),
    new POINT3D(cx - size, cy + size, cz + size)
];
var edges = [
    [0, 1], [1, 2], [2, 3], [3, 0], // back face
    [4, 5], [5, 6], [6, 7], [7, 4], // front face
    [0, 4], [1, 5], [2, 6], [3, 7] // connecting sides
];

// set up the animation loop
var timeDelta, timeLast = 0;
requestAnimationFrame(loop);

function loop(timeNow) {

    // calculate the time difference
    timeDelta = timeNow - timeLast;
    timeLast = timeNow;

    // background
    ctx.fillRect(0, 0, w, h);

    // rotate the cube along the z axis
    let angle = timeDelta * 0.001 * SPEED_Z * Math.PI * 2;
    for (let v of vertices) {
        let dx = v.x - cx;
        let dy = v.y - cy;
        let x = dx * Math.cos(angle) - dy * Math.sin(angle);
        let y = dx * Math.sin(angle) + dy * Math.cos(angle);
        v.x = x + cx;
        v.y = y + cy;
    }

    // rotate the cube along the x axis
    angle = timeDelta * 0.001 * SPEED_X * Math.PI * 2;
    for (let v of vertices) {
        let dy = v.y - cy;
        let dz = v.z - cz;
        let y = dy * Math.cos(angle) - dz * Math.sin(angle);
        let z = dy * Math.sin(angle) + dz * Math.cos(angle);
        v.y = y + cy;
        v.z = z + cz;
    }

    // rotate the cube along the y axis
    angle = timeDelta * 0.001 * SPEED_Y * Math.PI * 2;
    for (let v of vertices) {
        let dx = v.x - cx;
        let dz = v.z - cz;
        let x = dz * Math.sin(angle) + dx * Math.cos(angle);
        let z = dz * Math.cos(angle) - dx * Math.sin(angle);
        v.x = x + cx;
        v.z = z + cz;
    }

    // draw each edge
    for (let edge of edges) {
        ctx.beginPath();
        ctx.moveTo(vertices[edge[0]].x, vertices[edge[0]].y);
        ctx.lineTo(vertices[edge[1]].x, vertices[edge[1]].y);
        ctx.stroke();
    }

    // call the next frame
    requestAnimationFrame(loop);
}
