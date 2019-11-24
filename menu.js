$(document).ready(function(){
	$("#menu > li > a").click(function(){
		$(this).find("~ ul").stop().slideToggle("slow")
	})
})