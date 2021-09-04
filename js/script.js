var currentDayDisplay = document.getElementById("currentDay");

var showCurrentDay = function() {
    var currentDay = moment().format("dddd MMM Do");
    currentDayDisplay.append(currentDay);
};

$(".saveBtn").click(function() {
    var text = $(this).siblings("textarea").val()
    console.log(text);
    var time = $(this).siblings("textarea").attr("id")
    console.log(time);
    localStorage.setItem(time, text)
  });
 for ( i = 9; i < 18; i++) {
  $("#" + i).val(localStorage.getItem(i))
};
 var checkTime = function() {
$("textarea").each(function() {
    var currentHour = moment("2015-01-16T12:00:00").format("hh:mm:ss a");
    var time = $(this).attr("id") 
    time = parseInt(time)

    if (currentHour === time) {
        $(this).addClass("present")
    }
    else if (currentHour < time) {
        $(this).addClass("future")
    }
    else {
        $(this).addClass("past")
    }
    console.log(time);
    
})
}




checkTime();

showCurrentDay();