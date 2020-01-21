
$(function() {
  $(".change-completed").on("click", function(event) {
    var id = $(this).data("id");
      var newCompleted = $(this).data("newcompleted");

      var newCompleteState = {
        completed: newCompleted
      };

    $.ajax("/api/tasks/" + id, {
        type: "PUT",
        data: newCompleteState
    }).then(
      function() {
        console.log("changed completed to", newCompleted);
        location.reload();
      }
    );
  });
  
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newTask = {
        task_name: $("#ta").val().trim(),
        completed: $("[name=completed]").val().trim()
    };
    $.ajax("/api/tasks", {
        type: "POST",
        data: newTask
    }).then(
      function() {
        console.log("created new task");
        location.reload();
      }
    );
  });

  $(".delete-task").on("click", function(event) {
    var id = $(this).data("id");
    $.ajax("/api/tasks/" + id, {
        type: "DELETE"
    }).then(
      function() {
        console.log("deleted task", id);
        location.reload();
      }
    );
  });
});
  