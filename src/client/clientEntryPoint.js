//console.log("test");
//require('phaser/dist/phaser');
require('phaser/dist/phaser.min');
/*
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        //preload: preload,//function(){}
        //create: create,//function(){}
        //update: update //function(){}
    }
};
*/
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

function preload ()
{
    this.load.setBaseURL('http://localhost:3000');
    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
}

function create ()
{
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    var logo = this.physics.add.image(400, 100, 'logo');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
}
var game;

document.addEventListener('DOMContentLoaded', function(e){
    game = new Phaser.Game(config);
});