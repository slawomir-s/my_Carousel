$(function() {
    var carouselList = $("#myCarousel ul"),
        carousel = $("#myCarousel"),
        leftControl = $(".left-control"),
        rightControl = $(".right-control"),
        width = $('.slide').width(),
        btnCircle = $(".btn-circle");
    
    function changeSlide() {
        carouselList
            .animate({marginLeft:-400}, 500, placeFirstSlide);
    }    
    
    function interval() {
        interval = setInterval(changeSlide, 5000);
    }
    
    function stopInterval () {
		clearInterval(interval);
    }
    
    carousel.on('mouseenter', stopInterval).on('mouseleave', interval);
    interval();
    
    function placeFirstSlide () {
        var firstItem = carouselList.find("li:first"),
            lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({marginLeft:0});
    }

    function placeLastSlide() {
		var firstItem = carouselList.find("li:first"),
            lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
    }
    
    leftControl.click(function() {
		carouselList.animate({'marginLeft':0}, 500, placeLastSlide);
	});
	rightControl.click(function() {
		carouselList.animate({'marginLeft':-400}, 500, placeFirstSlide);
	});
	btnCircle.on('click', function() {
		var indicatorValue = $(this).data('indicator'),
		    slideSelector = '.slide[data-slide="' + indicatorValue + '"',
		    activeSlide = $(slideSelector);
		carouselList.animate({'marginLeft': "-" + ((indicatorValue)*width) + 'px'}, 500);
	});
});