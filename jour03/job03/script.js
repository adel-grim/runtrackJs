$(document).ready(function() {
  const tiles = $(".tile");
  const emptyTile = $("#empty");
  const restartButton = $("#restartButton");
  const message = $("#message");

  // Mélanger les tuiles
  shuffleTiles();

  // Activer le glisser-déposer des tuiles
  tiles.draggable({
      containment: "#board", // Limite le mouvement des tuiles au conteneur #board
      revert: "invalid",
      start: function(event, ui) {
          $(this).addClass("dragging");
      },
      stop: function(event, ui) {
          $(this).removeClass("dragging");
          if (checkWin()) {
              message.text("Vous avez gagné").css("color", "green");
          }
      }
  });

  // Définir la case vide comme cible de dépôt valide
  emptyTile.droppable({
      accept: ".tile",
      drop: function(event, ui) {
          const droppedTile = ui.draggable;
          const tempOrder = droppedTile.css("order");
          droppedTile.css("order", emptyTile.css("order"));
          emptyTile.css("order", tempOrder);
          if (checkWin()) {
              message.text("Vous avez gagné").css("color", "green");
          }
      }
  });

  // Ajouter un événement de clic au bouton "Recommencer"
  restartButton.click(function() {
      message.text("");
      shuffleTiles();
  });

  // Fonction pour mélanger les tuiles
  function shuffleTiles() {
      const tileIds = [...Array(9).keys()];
      tileIds.sort(() => Math.random() - 0.5); // Mélanger les positions

      tileIds.forEach((id, index) => {
          if (id === 8) {
              emptyTile.css("order", index);
          } else {
              tiles.eq(id).css("order", index);
          }
      });
  }

  // Fonction pour vérifier si le jeu est gagné
  function checkWin() {
      const tileIds = [...Array(9).keys()].map(id => id.toString());
      return tileIds.every(id => tiles.eq(id).css("order") === id || tiles.eq(id).parent().attr("id") === "empty");
  }
});
