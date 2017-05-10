var dataproject = {
	init: function(){
		dataproject.mouseFuncs();
	},
	mouseFuncs: function() {
		var currSlide = 0;
		$('.sliderButton--next').on('click', function(e){
			var width = Math.floor($('.container').width() / 295);
			if ((width + currSlide) > $('.contenders__card').length - 1) {
				currSlide = 0;
			} else {
				currSlide += width;
			};
			var nextPos = $('.contenders__card--'+currSlide).position().left - 12;
			$('.container').animate({scrollLeft: nextPos}, 500);
		});
	}
}
$(document).ready(function(){
	dataproject.init();
	console.log("connected");
});
