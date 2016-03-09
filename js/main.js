$(document).ready(function() {
	$('#my-icon').css('height', $('#my-name').height());

	$('.project').each(function() {
	    var link = $(this).find('a').attr('href');
	    $(this).find('.project-image').wrap('<a href="' + link + '" target="_blank"></a>');
	});
});