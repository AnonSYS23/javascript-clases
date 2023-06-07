const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Variables del jugador
const playerSize = 20;
let playerX = canvas.width / 2;
let playerY = canvas.height - playerSize - 10;
let playerSpeed = 5;
let playerWeapon = "normal";
let playerHealth = 100;

// Variables del jefe enemigo
const bossSize = 50;
let bossX = canvas.width / 2 - bossSize / 2;
let bossY = 50;
let bossSpeed = 2;
let bossHealth = 200;

// Variables de las balas
let playerBullets = [];
let bossBullets = [];

// Detectar entrada del teclado
let leftPressed = false;
let rightPressed = false;
let spacePressed = false;
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(event) {
    if (event.key === "ArrowLeft") {
        leftPressed = true;
    } else if (event.key === "ArrowRight") {
        rightPressed = true;
    } else if (event.key === " ") {
        spacePressed = true;
    }
}

function keyUpHandler(event) {
    if (event.key === "ArrowLeft") {
        leftPressed = false;
    } else if (event.key === "ArrowRight") {
        rightPressed = false;
    } else if (event.key === " ") {
        spacePressed = false;
    }
}

// Actualizar posición del jugador
function movePlayer() {
    if (leftPressed && playerX > 0) {
        playerX -= playerSpeed;
    } else if (rightPressed && playerX + playerSize < canvas.width) {
        playerX += playerSpeed;
    }

    if (spacePressed) {
        if (playerWeapon === "normal") {
            shootPlayerBullet(playerX + playerSize / 2, playerY);
        } else if (playerWeapon === "spread") {
            shootPlayerBullet(playerX + playerSize / 2 - 10, playerY);
            shootPlayerBullet(playerX + playerSize / 2, playerY);
            shootPlayerBullet(playerX + playerSize / 2 + 10, playerY);
        }
    }
}

// Actualizar posición del jefe enemigo
function moveBoss() {
    if (bossX + bossSize > canvas.width || bossX < 0) {
        bossSpeed = -bossSpeed;
    }

    bossX += bossSpeed;
}

// Actualizar posición de las balas
function moveBullets() {
    playerBullets = playerBullets.filter(bullet => bullet.y > 0);
    bossBullets = bossBullets.filter(bullet => bullet.y < canvas.height);

    playerBullets.forEach(bullet => {
        bullet.y -= bullet.speed;
    });

    bossBullets.forEach(bullet => {
        bullet.y += bullet.speed;
    });
}

// Dibujar el jugador
function drawPlayer() {
    ctx.beginPath();
    ctx.rect(playerX, playerY, playerSize, playerSize);
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.closePath();
}

// Dibujar el jefe enemigo
function drawBoss() {
    ctx.beginPath();
    ctx.rect(bossX, bossY, bossSize, bossSize);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

// Dibujar las balas
function drawBullets() {
    playerBullets.forEach(bullet => {
        ctx.beginPath();
        ctx.rect(bullet.x, bullet.y, bullet.size, bullet.size);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
    });

    bossBullets.forEach(bullet => {
        ctx.beginPath();
        ctx.rect(bullet.x, bullet.y, bullet.size, bullet.size);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    });
}

// Dibujar barra de vida
function drawHealthBars() {
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, playerHealth, 10);

    ctx.fillStyle = "red";
    ctx.fillRect(10, 30, bossHealth, 10);
}

// Detectar colisiones
function detectCollisions() {
    playerBullets.forEach(playerBullet => {
        if (
            playerBullet.x > bossX &&
            playerBullet.x < bossX + bossSize &&
            playerBullet.y > bossY &&
            playerBullet.y < bossY + bossSize
        ) {
            bossHealth -= 10;
            playerBullets = playerBullets.filter(bullet => bullet !== playerBullet);
        }
    });

    bossBullets.forEach(bossBullet => {
        if (
            bossBullet.x > playerX &&
            bossBullet.x < playerX + playerSize &&
            bossBullet.y > playerY &&
            bossBullet.y < playerY + playerSize
        ) {
            playerHealth -= 10;
            bossBullets = bossBullets.filter(bullet => bullet !== bossBullet);
        }
    });
}

// Generar balas del jugador
function shootPlayerBullet(x, y) {
    const bullet = {
        x: x,
        y: y,
        size: 5,
        speed: 5
    };
    playerBullets.push(bullet);
}

// Generar balas del jefe enemigo
function shootBossBullet() {
    const bullet = {
        x: bossX + bossSize / 2,
        y: bossY + bossSize,
        size: 5,
        speed: 2
    };
    bossBullets.push(bullet);
}

// Actualizar el juego en cada fotograma
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    movePlayer();
    moveBoss();
    moveBullets();
    detectCollisions();

    drawPlayer();
    drawBoss();
    drawBullets();
    drawHealthBars();

    if (bossHealth <= 0) {
        alert("¡Has derrotado al jefe!");
        document.location.reload();
    } else if (playerHealth <= 0) {
        alert("¡Has perdido!");
        document.location.reload();
    } else {
        requestAnimationFrame(update);
    }

    // Generar balas del jefe en intervalos de tiempo
    if (Math.random() < 0.02) {
        shootBossBullet();
    }
}

update();