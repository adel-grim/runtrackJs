$(document).ready(function() {
   
    var originalOrder = $("#rainbow img").toArray();

   
    function shuffleImages() {
        var images = $("#rainbow img").toArray();
        images.sort(function() {
            return 0.5 - Math.random();
        });
        $("#rainbow").empty().append(images);
    }

    function checkOrder() {
        var currentOrder = $("#rainbow img").toArray();
        for (var i = 0; i < currentOrder.length; i++) {
            if (currentOrder[i] !== originalOrder[i]) {
                return false;
            }
        }
        return true;
    }

    
    $("#shuffleButton").click(function() {
        shuffleImages();
        $("#message").empty();
    });

    
    $("#rainbow img").draggable({
        revert: "invalid"
    });

    
    $("#droppable").droppable({
        drop: function(event, ui) {
            var draggable = ui.draggable;
            
            if (draggable.parent().attr('id') === "rainbow") {
                $(this).append(draggable);
                if (checkOrder()) {
                    $("#message").text("Vous avez gagné").css("color", "green");
                } else {
                    $("#message").text("Vous avez perdu").css("color", "red");
                }
            }
        }
    });
});
