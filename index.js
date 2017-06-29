/**
 * Created by LEFAURE on 12/04/2017.
 */
module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'test-skill' );


app.launch( function( request, response ) {
    response.say( 'Welcome to Digicare' ).reprompt( 'What can I do for you today?' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
    console.log(exception)
    console.log(request);
    console.log(response);
    response.say( 'Sorry an error occured ' + error.message);
};

app.intent('sayNumber',
    {
        "slots":{"number":"NUMBER"}
        ,"utterances":[
        "say the number {1-100|number}",
        "give me the number {1-100|number}",
        "tell me the number {1-100|number}",
        "I want to hear you say the number {1-100|number}"]
    },
    function(request,response) {
        var number = request.slot('number');
        response.say("You asked for the number "+number);
    }
);

app.intent('sayMedicationTime',
    {
        "utterances":[
        "What time is my Medication",
        "Medication"]
    },
    function(request,response) {
        response.say("Your medication is due at 7pm");
    }
);

app.intent('sayMedicationDose',
    {
        "utterances":[
            "How many doses do I have to take",
            "Dose"]
    },
    function(request,response) {
        response.say("You have to take 2 doses of your medication");
    }
);

app.intent('sayWeekPlan',
    {
        "utterances":[
            "What do I have to do this week",
            "What is my plan for the week",
            "What are my next tasks",
            "Week plan"
        ]
    },
    function(request,response) {
        response.say("Here is your plan for this week: " +
            "you have an appointment with Doctor Lodge next tuesday at 9am," +
            "You have a follow-up appointment with your physiologist Mrs Evans on wednesday at 2pm," +
            "And don't forget your wellness appointments thursday and sunday.");
    }
);

module.exports = app;