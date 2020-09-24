// The code in add.js handles what happens when the user clicks the "Add a book" button.
$.get("/api/new").then(function (data) {
    $(".member-name").text(data.email);
    console.log(data);
  });
  // When user clicks add-btn
  $("#add-btn").on("click", function (event) {
    event.preventDefault();

    // Make a newBook object
    var newEmployee = {
      first_name: $("#first_name").val().trim(),
      last_name: $("#last_name").val().trim(),
      title: $("#title").val().trim(),
      email: $("#email").val().trim(),
      
    };
    console.log(newEmployee);
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newEmployee)
      // On success, run the following code
      .then(function (data) {
        // Log the data we found
        console.log(data);
      });
    // Empty each input box by replacing the value with an empty string
    $("#first_name").val("");
    $("#last_name").val("");
    $("#title").val("");
    $("#email").val("");
  });