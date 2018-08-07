$(function() {
	var effects = 'animated bounceIn';
	var effectsEnd = 'animationend oAnimationEnd mozAnimationEnd WebkitAnimationEnd';
	
	$('a.btn').click(function() {
		$(this).addClass(effects).one(effectsEnd, function() {
			$(this).removeClass(effects);
		});
	});
	
	
//	var effectsHover = 'animated pulse';
//	
//	$('a.btn').hover(function() {
//		$(this).addClass(effectsHover).one(effectsEnd, function() {
//			$(this).removeClass(effectsHover);
//		});
//	});
});