// The code in add.js handles what happens when the user clicks the "Add a book" button.
$.get("/api/new").then(function (data) {
    $(".member-name").text(data.email);
    console.log(data);
  });
  // When user clicks add-btn
  $("#add-btn").on("click", function (event) {
    event.preventDefault();

    // Make a newBook object
    var newRole = {
      title: $("#title").val().trim(),
      salary: $("#salary").val().trim(),
      department_name: $("#department_name").val().trim(),
    };
    console.log(newRole);
    // Send an AJAX POST-request with jQuery
    $.post("/api/newRole", newRole)
      // On success, run the following code
      .then(function (data) {
        // Log the data we found
    console.log(data);
      });
    // Empty each input box by replacing the value with an empty string
    $("#title").val("");
    $("#salary").val("");
    $("#department_name").val("");
  });