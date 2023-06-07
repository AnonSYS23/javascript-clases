document.addEventListener("DOMContentLoaded", function() {
  // Obtener referencias a los elementos del juego
  var gameContainer = document.getElementById("game-container");
  var player = document.getElementById("player");
  var enemy = document.getElementById("enemy");

  // Variables de estado del jugador y enemigo
  var playerX = 280;
  var playerY = 360;
  var enemyX = 280;
  var enemyY = 40;

  // Agregar evento de movimiento del jugador
  document.addEventListener("keydown", function(event) {
    if (event.code === "ArrowLeft" && playerX > 0) {
      playerX -= 5;
    }
    else if (event.code === "ArrowRight" && playerX < 580) {
      playerX += 5;
    }
    player.style.left = playerX + "px";
  });

  // Función para mover al enemigo
  function moveEnemy() {
    if (enemyY < 400) {
      enemyY += 2;
      enemy.style.top = enemyY + "px";
    } else {
      enemyY = 40;
      enemyX = Math.random() * 560;
      enemy.style.left = enemyX + "px";
    }

    // Verificar colisión entre jugador y enemigo
    if (playerX < enemyX + 20 && playerX + 20 > enemyX &&
        playerY < enemyY + 20 && playerY + 20 > enemyY) {
      alert("Game Over");
      resetGame();
    } else {
      requestAnimationFrame(moveEnemy);
    }
  }

  // Función para reiniciar el juego
  function resetGame() {
    playerX = 280;
    player.style.left = playerX + "px";
    enemyY = 40;
    enemyX = Math.random() * 560;
    enemy.style.left = enemyX + "px";
    enemy.style.top = enemyY + "px";
    requestAnimationFrame(moveEnemy);
  }

  // Iniciar el juego
  resetGame();
});
