var currentDayDisplay = document.getElementById("currentDay");
var currentHour = moment().hour();

// Displays the current day at the top of the page 
var showCurrentDay = function() {
    var currentDay = moment().format("dddd MMM Do");
    currentDayDisplay.append(currentDay);
};

// save button 
$(".saveBtn").click(function() {
    // gets the textarea value
    var text = $(this).siblings("textarea").val()
   
    // gets the id of row
    var time = $(this).siblings("textarea").attr("id")
    console.log(time);
    //save info to local storage
    localStorage.setItem(time, text)
  });

  // loop through time rows and display localstorage info
 for ( i = 9; i < 18; i++) {
  $("#" + i).val(localStorage.getItem(i))
};

// checks time to set color 
 var checkTime = function() {
$("textarea").each(function() {
    
    var time = $(this).attr("id");
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
})
}


const interval = setInterval(function() {
   checkTime();
}, 5000);

checkTime();
showCurrentDay();