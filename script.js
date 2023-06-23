var splash = [
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
    "404 Error.",
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
    "Is that a soup, brah?",
    "My friends channel link is somewhere here...",
    "youtube.com/LoneWolfGaming04",
    "Login?",
    "Where's my anime music when I need it?",
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
    "The waffle house has found its new host.",
    "¿Quieres?",
    "Amogus",
    "You're going to brazil.",
    "POV:",
    "Me:",
    "My reaction to that information:",
    "I'm dead.",
    "Was that the bite of \'87?!",
    "Bro went to Brazil.💀",
    "She is such a bad bitch though.",
    "Star light, star bright,",
    "First star I see tonight,",
    "I wish I may, I wish I might,",
    "Have this wish I wish tonight.",
    "...",
    "That's it."
];

splash[-2] = "There's " + splash.length.toString() + " of these babies.";

document.getElementById("splashText").innerHTML = splash[Math.round(Math.random() * (splash.length - 1))];

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


const Point2D = function(x, y) { this.x = x; this.y = y; };
const Point3D = function(x, y, z) { this.x = x; this.y = y; this.z = z; };
const Cube = function(x, y, z, size) {
    Point3D.call(this, x, y, z);

    size *= 0.5;

    this.vertices = [
        new Point3D(x - size, y - size, z - size),
        new Point3D(x + size, y - size, z - size),
        new Point3D(x + size, y + size, z - size),
        new Point3D(x - size, y + size, z - size),
        new Point3D(x - size, y - size, z + size),
        new Point3D(x + size, y - size, z + size),
        new Point3D(x + size, y + size, z + size),
        new Point3D(x - size, y + size, z + size)
    ];

    this.faces = [
        [0, 1, 2, 3],
        [0, 4, 5, 1],
        [1, 5, 6, 2],
        [3, 2, 6, 7],
        [0, 3, 7, 4],
        [4, 7, 6, 5]
    ];
};

Cube.prototype = {
    rotateX:function(radian) {
        var cosine = Math.cos(radian);
        var sine   = Math.sin(radian);

        for (let index = this.vertices.length - 1; index > -1; -- index) {
            let p = this.vertices[index];

            let y = (p.y - this.y) * cosine - (p.z - this.z) * sine;
            let z = (p.y - this.y) * sine + (p.z - this.z) * cosine;

            p.y = y + this.y;
            p.z = z + this.z;
        }
    },
    rotateY:function(radian) {
        var cosine = Math.cos(radian);
        var sine   = Math.sin(radian);

        for (let index = this.vertices.length - 1; index > -1; -- index) {
            let p = this.vertices[index];
            let x = (p.z - this.z) * sine + (p.x - this.x) * cosine;
            let z = (p.z - this.z) * cosine - (p.x - this.x) * sine;
            p.x = x + this.x;
            p.z = z + this.z;
        }
    }
};

var canvas = document.getElementById("canvas-background")
var context = canvas.getContext("2d")
var pointer = new Point2D(0, 0);
var cube = new Cube(0, 0, 1000, 500);

var height = document.documentElement.clientHeight;
var width = document.documentElement.clientWidth;

function project(points3d, width, height) {

    var points2d = new Array(points3d.length);

    var focal_length = 500;

    for (let index = points3d.length - 1; index > -1; -- index) {
        let p = points3d[index];

        let x = p.x * (focal_length / p.z) + width * 0.5;
        let y = p.y * (focal_length / p.z) + height * 0.5;

        points2d[index] = new Point2D(x, y);
    }
    return points2d;
}

function loop() {
    window.requestAnimationFrame(loop);

    height = document.documentElement.clientHeight;
    width = document.documentElement.clientWidth;

    context.canvas.height = height;
    context.canvas.width  = width;
    
    if (document.getElementById("splashText").innerHTML == "Yes master?") {
        document.getElementById("canvas-background").style.backgroundImage = "url('waifu.jpg')";
        document.getElementById("canvas-background").style.backgroundSize = "cover";
        document.getElementById("canvas-background").style.backgroundRepeat = "no-repeat";
    } else {
        context.fillStyle = "#10101f";
        context.fillRect(0, 0, width, height);
    }

    context.strokeStyle = "white";

    cube.rotateX(pointer.y * 0.00015);
    cube.rotateY(-pointer.x * 0.00015);
    
    if (supPressed) {
        context.fillStyle = "hsl(" + hue + ", 100%, 50%)";
    } else {
        context.fillStyle = "red";
    }

    var vertices = project(cube.vertices, width, height);

    for (let index = cube.faces.length - 1; index > -1; -- index) {

        let face = cube.faces[index];
        
        let p1 = cube.vertices[face[0]];
        let p2 = cube.vertices[face[1]];
        let p3 = cube.vertices[face[2]];

        let v1 = new Point3D(p2.x - p1.x, p2.y - p1.y, p2.z - p1.z);
        let v2 = new Point3D(p3.x - p1.x, p3.y - p1.y, p3.z - p1.z);

        let n  = new Point3D(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);

        if (-p1.x * n.x + -p1.y * n.y + -p1.z * n.z <= 0) {
            context.beginPath();
            context.moveTo(vertices[face[0]].x, vertices[face[0]].y);
            context.lineTo(vertices[face[1]].x, vertices[face[1]].y);
            context.lineTo(vertices[face[2]].x, vertices[face[2]].y);
            context.lineTo(vertices[face[3]].x, vertices[face[3]].y);
            context.closePath();
            context.fill();
            context.stroke();
        }
    }
}
loop();
(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var eventDoc, doc, body;

        event = event || window.event;
        
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
            (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
            (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
            (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        pointer.x = event.pageX - width * 0.5;
        pointer.y = event.pageY - height * 0.5;
    }
})();

//document.body.style.background = 'url(' + canvas.toDataURL() + ')';
