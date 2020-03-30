$( document ).ready(function() {

    // Set currentDay ID to current date
    $("#currentDay").html(moment().format("MMM Do YYYY"));

    var timeOptions = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    var currentTime = moment().format("H");

    // Change text area color (through class) depending on past/present/future
    for (var i = 0; i < timeOptions.length; i++) {
        if (currentTime < timeOptions[i]) {
            $("#" + timeOptions[i] + "-time-row").addClass("future");
        } else if (currentTime > timeOptions[i]) {
            $("#" + timeOptions[i] + "-time-row").addClass("past");
        } else if (currentTime = timeOptions[i]) {
            $("#" + timeOptions[i] + "-time-row").addClass("present");
        }
    }

    // Save corresponding text area to local storage on save button click
    $(".saveBtn").on("click", function(event) {
        var id = $(this).attr('id');        
        var textAreaContents = $("#" + id + "-time-row").val();
        localStorage.setItem(id, textAreaContents);
    });
});