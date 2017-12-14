$(document).ready(function() {

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC-p5vXvySUglv6cUPtY8p9SLgU54MLCzc",
  authDomain: "train-schedule-c9279.firebaseapp.com",
  databaseURL: "https://train-schedule-c9279.firebaseio.com",
  projectId: "train-schedule-c9279",
  storageBucket: "train-schedule-c9279.appspot.com",
  messagingSenderId: "830054784394"
};

firebase.initializeApp(config);

// creates firebase link
var database = firebase.database();

// starts on click event
$('#submit-button').on('click', function(){
  var name = $('#train-name').val().trim();
  var destination = $('#train-destination').val().trim();
  var firstTime = moment($('#first-time').val().trim(), "HH:mm").format("");
  var frequency = $('#frequency').val().trim();


  // set information in an object
  var trainInput = {
    trainName: name,
    trainDestination: destination,
    trainFirstTime: firstTime,
    trainFrequency: frequency
  };

  // push collected info to database
  database.ref().push(trainInput);
  
  // clears values
  $('#train-name').val("");
  $('#train-destination').val("");
  $('#first-time').val("");
  $('#frequency').val("");


  // Prevent Default action for submit button here and potentially elsewhere.
  return false;
});

  //Logs trains and would manage the timer if I could figure it out. 

database.ref().on("child_added", function(snapshot){

  //sets variables to log from previous submission
  var trainName = snapshot.val().trainName;
  var trainDestination = snapshot.val().trainDestination;
  var trainFirstTime = snapshot.val().trainFirstTime;
  var trainFrequency = snapshot.val().trainFrequency;


  //appends new train data to table
  $("#train-display > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + "Every " + trainFrequency + " minutes" + "</td><td>" + "My Brain Hurts" + "</td><td>" + "The equation to figure this part out is hard" + "</td></tr>");

});


});
