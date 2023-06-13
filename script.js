// Constantes del juego
const GRID_SIZE = 20;
const CANVAS_WIDTH = Math.floor(window.innerWidth / GRID_SIZE) * GRID_SIZE;
const CANVAS_HEIGHT = Math.floor(window.innerHeight / GRID_SIZE) * GRID_SIZE;

// Crear el lienzo del juego
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// Objeto Pac-Man
const pacman = {
    x: CANVAS_WIDTH / 2,
    y: CANVAS_HEIGHT / 2,
    radius: GRID_SIZE / 2,
    mouthOpen: true,
    direction: null,
    speed: 2,

    draw() {
        context.fillStyle = 'yellow';
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0.15 * Math.PI, 1.85 * Math.PI);
        context.lineTo(this.x, this.y);
        context.closePath();
        context.fill();
    },

    update() {
        if (this.direction === 'left') {
            this.x -= this.speed;
        } else if (this.direction === 'right') {
            this.x += this.speed;
        } else if (this.direction === 'up') {
            this.y -= this.speed;
        } else if (this.direction === 'down') {
            this.y += this.speed;
        }
    }
};

// Controlar las teclas presionadas
document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowLeft') {
        pacman.direction = 'left';
    } else if (event.code === 'ArrowRight') {
        pacman.direction = 'right';
    } else if (event.code === 'ArrowUp') {
        pacman.direction = 'up';
    } else if (event.code === 'ArrowDown') {
        pacman.direction = 'down';
    }
});

// Función de actualización del juego
function updateGame() {
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Dibujar y actualizar a Pac-Man
    pacman.draw();
    pacman.update();

    // Llamar a la función updateGame en cada cuadro de animación
    requestAnimationFrame(updateGame);
}

// Iniciar el juego
updateGame();
