$(document).ready(() => {

    // submit button functionality

    $(".create-form").on("submit", () => {
        event.preventDefault(); 
        if (($("#burger_name").val().trim()).length > 0) {
          let newBurger = {
            burger_name: $("#burger_name").val().trim()
          }
          // use AJAX to send Post Request using form data
          $.ajax("/api/newburger", {
            type: "POST",
            data: newBurger
          }).then(
            function () {
              console.log("Created a new burger and with True value");
              // Reload the page to get the updated list
              location.reload();
            }
          );
    
        } 
      });

      $(".btn-burger").on("click", function () {
        let selectedID = {
          id: $(this).data("id")
        }
    
        $.ajax("/api/update", {
          type: "PUT",
          data: selectedID
        }).then(
          function () {
            console.log("Updated burger by setting devoured to True");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      })
    

});