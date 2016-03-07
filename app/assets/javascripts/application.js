// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs

//= require dataTables/jquery.dataTables
//= require fancybox
//= require_tree .

$(document).ready(function() {
	$("a.fancybox").fancybox();
	$(".flash").click(function(){
		$(".flash").addClass('animated bounceOutUp');
		$(".flash").slideUp(5000);
	});
});

// $(document).ready(function(){

// 	$(document).snowfall();
// 	document.body.className  = "darkBg";
// 	$(document).snowfall({collection : '.collectonme', flakeCount : 250});

// });

