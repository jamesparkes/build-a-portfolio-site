$(document).ready(function() {
	$('.project').each(function() {
	    var link = $(this).find('a').attr('href');
	    $(this).find('.project-image').wrap('<a href="' + link + '" target="_blank"></a>');
	});
});