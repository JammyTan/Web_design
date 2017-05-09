$(document).ready(function(){
  	$('.page').hide();
  	$("#SignIn").show();
  	$('.btnProfile').click(function(){
  		$('.btn').removeClass("active");
  		$('.page').hide();
  		$("#Profile").show();
  		$('.btnProfile').addClass("active");
  	});
	$('.btnChat').click(function(){
		$('.btn').removeClass("active");
  		$('.page').hide();
  		$("#ChatRoom").show();
  		$('.btnChat').addClass("active");
  	});
  	$('.btnEditProfile').click(function(){
  		$('.btn').removeClass("active");
  		$('.page').hide();
  		$("#ProfileUpdate").show();
  		$("#userName").focus();
  		$('.btnEditProfile').addClass("active");
  	});
  	$("#btnSubmit").click(function(){
  		$('.btn').removeClass("active");
  		$('.page').hide();
  		$("#Profile").show();
  		$('.btnProfile').addClass("active");
  	});
  	$("#btnSignUp").click(function(){
  		$('.page').hide();
  		$("#SignIn").show();
  	});
  });
  function SignOut(){
    firebase.auth().signOut();
    console.log('LogOut');
    $('.page').hide();
    $("#SignIn").show();
    $message.html('');
    return true;
  }