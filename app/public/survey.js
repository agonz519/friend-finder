$(document).ready(function() {
  $('#form').validate({
    rules: {
      name: { required: true },
      photo: { required: true },
      q1: { required: true },
      q2: { required: true },
      q3: { required: true },
      q4: { required: true },
      q5: { required: true },
      q6: { required: true },
      q7: { required: true },
      q8: { required: true },
      q9: { required: true },
      q10: { required: true }
    },
    messages: {
      name: 'Name is required.',
      photo: 'Photo is required.',
      q1: 'This field is required',
      q2: 'This field is required',
      q3: 'This field is required',
      q4: 'This field is required',
      q5: 'This field is required',
      q6: 'This field is required',
      q7: 'This field is required',
      q8: 'This field is required',
      q9: 'This field is required',
      q10: 'This field is required'
    }
  });



  $("#submit").on("click", function(event) {
    // If validation fails, return without calling POST endpoint.
    if (!$('#form').valid()) {
      return;
    }
    event.preventDefault();

    var newFriend = {
      name: $("#name").val(),
      photo: $("#photo").val(),
      scores: [
        $("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("#q10").val()
      ]
    };

    $.post("/api/newfriend", newFriend)
      .then(function(data) {
        $('#match-name').text(data.name);
        $('#match-img').attr('src', data.photo);
        $('#results-modal').modal('toggle');

      });
  });
});