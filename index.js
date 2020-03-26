$(document).ready(function () {
	$('#githubImg').mouseleave(function(event) {
		$('#githubImg').stop().animate({
			height: '30px'
		}, 300, function() {
			$('#githubImg').addClass('iconExpand');
		});
    });
	$('#githubImg').mouseover(function(event) {
		$('#githubImg').stop().animate({
			height: '36px'
		}, 300, function() {		
            $('#githubImg').removeClass('iconExpand');
		});
    });
});
$(document).ready(function () {
	$('#emailImg').mouseleave(function(event) {
		$('#emailImg').stop().animate({
			height: '30px'
		}, 300, function() {
			$('#emailImg').addClass('iconExpand');
		});
    });
	$('#emailImg').mouseover(function(event) {
		$('#emailImg').stop().animate({
			height: '36px'
		}, 300, function() {		
            $('#emailImg').removeClass('iconExpand');
		});
    });
});
$(document).ready(function () {
	$('#linkedinImg').mouseleave(function(event) {
		$('#linkedinImg').stop().animate({
			height: '30px'
		}, 300, function() {
			$('#linkedinImg').addClass('iconExpand');
		});
    });
	$('#linkedinImg').mouseover(function(event) {
		$('#linkedinImg').stop().animate({
			height: '36px'
		}, 300, function() {		
            $('#linkedinImg').removeClass('iconExpand');
		});
    });
});

