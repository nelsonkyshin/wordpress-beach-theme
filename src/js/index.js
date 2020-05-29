var clicked = false;

window.onload = function() {
	$('body').addClass('loaded');
	$(window).scroll();
}

window.ready = function() {
	$(window).trigger('resize');
}

window.onresize = function() {
	$('.myh-100').css({height: $('body').height()});
}

function clickedCTA() {
	if (!clicked) {
		$('body').addClass('clicked');
		clicked = true;
	}
	else {
        $('body').removeClass('clicked');
		clicked = false;
	}
}

if (document.getElementsByClassName("celestial-entity")) {
    const entities = document.getElementsByClassName("celestial-entity");
    for (let entity of entities) {
        entity.addEventListener('click', clickedCTA);
    }
}


$("#ctas").on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(event) {0
	if (event.target.id === 'ctas') {
		$('#ctas').html(`			
			<div id="email"><a href="mailto:nelson@nelsonyiap.com">nelson @ nelsonyiap.com</a></div>
		`);
		$('#ctas').css('opacity', 100);
	}
});

window.onscroll = function() {
	if (window.scrollY < 5) {
		$('#links').removeClass('not-top');
	}
	else {
		$('#links').addClass('not-top');
	}
}

function scrollTo(el) {
	const offset = el.offset();
	$('body, html').animate({scrollTop: offset.top, scrollLeft: offset.left});
}
