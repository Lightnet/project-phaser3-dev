console.log("test");

require('phaser/dist/phaser');

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        //preload: this.preload,
        //create: this.create,
        //update: this.update
    }
};

var game;

document.addEventListener('DOMContentLoaded', function(e){
    game = new Phaser.Game(config);
});