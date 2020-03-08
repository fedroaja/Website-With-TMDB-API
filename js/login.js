var cookies = Cookies.get("user");

var us;
var usdat;

us = $.getJSON("js/user.json", function(data){});
us.done(function() {
    if(usdat = JSON.parse(us.responseText)){
    }
});

$(document).ready(function(){
	
	if(cookies != null){
		window.location.href = "home.html";
	}
	$('#password').keypress(function(e){
		if(e.which == 13){
			login();
		}
	})
});

function login(){
	var user = $('#username').val();
	var pas = $('#password').val();
	var cu=0;
	$.each(usdat, function(i, menu) {
		if(user == menu.userName && pas == menu.password){
			cu=1;
		}
	});
	if(cu == 1){
		window.location.href = "home.html";
	}else{
		$(".alert").show();
		$('#username').val("");
		$('#password').val("");
	}
}