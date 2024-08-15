$(document).ready(function() {
	$('#signin-btn').click(function(event) {
	event.preventDefault();
	var username = $('#username').val();
	var password = $('#password').val();
	
	// JSON data
	var jsonData = {
	"username": username,
	"password": password
	};
	
	// AJAX request
	$.ajax({
	type: 'POST',
	url: 'signin.php', // replace with your server-side script
	data: jsonData,
	dataType: 'json',
	success: function(response) {
	if (response.status === 'success') {
	// Sign in successful, redirect to dashboard
	window.location.href = 'dashboard.html';
	} else {
	// Sign in failed, display error message
	$('#error-message').html(response.message);
	}
	}
	});
	});
	});
	