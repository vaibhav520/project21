var wall, thickness;
var bullet, speed, weight;

function setup() {
    createCanvas(1600, 400);
    speed = random(223, 321);
    thickness = random(22, 83);
    weight = random(30, 52);
    bullet = createSprite(30, 200, 60, 20);
    bullet.velocityX = speed;
    wall = createSprite(1200, 200, thickness, 70);
}

function draw() {
    background("black");
    bullet.shapeColor = "white";
    wall.shapeColor = "grey";
    if (wall.x - bullet.x < (bullet.width - wall.width) / 2) {
        bullet.velocityX = 0;
        var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
        if (damage > 10) {
            wall.shapeColor = color(255, 0, 0);
        }

        if (damage < 10) {
            wall.shapeColor = color(0, 255, 0);
        }
    }
    drawSprites();
}