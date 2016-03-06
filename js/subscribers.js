var listId = "b891a37349";
var apiKey = "baa6a183159622c2810481cb35574337-us12";
var defUrl = "https://us12.api.mailchimp.com";
var listUrl = defUrl + "/3.0/lists/" + listId;

//radilo iz terminala
/*curl --request POST --url 'https://us12.api.mailchimp.com/3.0/lists/b891a37349/members' 
--user 'anystring:baa6a183159622c2810481cb35574337-us12' 
-d '{"email_address": "urist.mcvankab@freddiesjokes.com",
	"status": "subscribed",
	"merge_fields": {"FNAME": "Urist","LNAME": "McVankab"}}'
*/
$("#signUpButton").click(function(){
	name = $('#signUpName').val();
	surname = $('#signUpSurname').val();
	email = $('#signUpEmail').val();
	userType = $('#select-options').val();

	object = new Object();
	object.email_address = email;
	object.status =  "subscribed";
	object.merge_fields = new Object();
	object.merge_fields.FNAME = name;
	object.merge_fields.LNAME = surname;
	var newObject = {
		'email_address': email,
		'status': 'subscribed',
		'merge_fields': {
			'FNAME': name,
			'LNAME': surname
		}
	};
	//object.name = name;
	//object.surname = surname;
	//object.email = email;
	//object.userType = userType;
	console.log(newObject);
	var data = JSON.stringify(newObject);
	console.log(data);

	membersUrl = listUrl + "/members/";
	user = "anystring:" + apiKey; 

	// var request = $.ajax({
	// 	url: "https://us12.api.mailchimp.com/3.0/lists/b891a37349/members",
	// 	method: "POST",
	// 	//beforeSend: function(xhr) { xhr.setRequestHeader("Authorization", "Basic " + btoa("apikey:" + apiKey)); },
	// 	headers: {"Authorization":"Basic " + btoa("api:" + apiKey)},
	// 	data: newObject,
	// 	dataType: 'jsonp',
	// 	error: function(res, text){
 //            alert('error' + res + "  " + text);
 //        },
	// 	success: function(){
	// 		alert('sydsgffds');
	// 	}
	// });

	// request.done(function(msg) {
	// 	alert( "Request done: " + msg );
	// });

	// request.fail(function(jqXHR, textStatus) {
	// 	alert( "Request failed: " + textStatus );
	// });

	$.ajax({
		url:'https://us12.api.mailchimp.com/3.0/lists/b891a37349/members',
		type: 'POST',
		headers: {
			Authorization: 'Basic ' + btoa('anystring' + ':' + 'baa6a183159622c2810481cb35574337-us12')
  		},
		data: newObject,
		dataType: 'jsonp',
		crossDomain: true
	}).done(function(response){
		console.log('success', response);
	}).fail(function(response){
		console.log('error', response);	
	});
});