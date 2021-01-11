$(function() {
  $(".change-eaten").on("click", function(event) {
      var id = $(this).data("id");
  
      var devoured = {
        devoured: true
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devoured
      }).then(
        function() {
          console.log("Changed to devoured, burger ID: ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
  
    var newBurger = {
      name: $("#burgername").val().trim(),
    };
    
    if (!newBurger.name.toString().replace(/\s/g, '').length){
      $('#errorModal').modal('show');
    } else {
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }
  });

  $(".close").on("click", function(event) {
    $('#errorModal').modal('hide');
  });
});
  