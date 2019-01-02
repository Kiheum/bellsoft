(function (win, $) {
	"use strict";

	var winWidth = $(window).innerWidth();

	/* main visual slider start */
	var mainVisualSlider = {
		init : function () {
			this.setElements();
			this.sliderEvents();
			//this.slideMotionEvents();
		},
		setElements : function () {
			this.sliderObj = $(".main__visual");
		},
		sliderEvents : function () {
			if (winWidth > 1200) {
				this.sliderObj.slick({
					speed: 500,
					autoplay: true,
					autoplaySpeed: 7500,
					pauseOnFocus: false,
					slickCurrentSlide: true,
					dots: true,
					infinite : false,
					customPaging : function(slider, i) {
						var thumb = $(slider.$slides[i]).data();
						return "<button type='button' class='visual-slide-dot'>"+(i+1)+" / 3</button>";
					}
				});
				setTimeout(function() {
					$(".slick-slide.main__visual-first").children().children().children().addClass("motion-elem");
					$(".slick-slide.main__visual-first").children().children(".visual-motion-img").addClass("motion-elem-img");
				}, 100);
				this.sliderObj.on({
					beforeChange: function (event, slick, currentSlide, nextSlide) {
						var slideIdx = nextSlide;
						$(".slick-slide").removeClass("slick-active");
						$(".slick-slide").children().children().children().removeClass("motion-elem");
						$(".slick-slide").children().children(".visual-motion-img").removeClass("motion-elem-img");
						$(".slick-slide").eq(slideIdx).addClass("slick-active");
						$(".slick-slide").eq(slideIdx).children().children().children().addClass("motion-elem");
						$(".slick-slide").eq(slideIdx).children().children(".visual-motion-img").addClass("motion-elem-img");
					}
				});
			} else if (winWidth <= 1200) {
				this.sliderObj.slick({
					autoplay: true,
					autoplaySpeed: 7500,
					pauseOnFocus: false
				});
			}
		}
	}
	/* //main visual slider end */

	$(function(){
		mainVisualSlider.init();
		$(".youtube-play-btn").on("click", function(e) {
			e.preventDefault();
			$(this).css({
				"display" : "none"
			});
			$(this).next().css({
				"display" : "block"
			});
			$(".controller-play-btn").css({
				"display" : "none"
			});
			$(".controller-stop-btn").css({
				"display" : "block"
			});
		});
		$(".youtube-stop-btn").on("click", function(e) {
			e.preventDefault();
			$(this).css({
				"display" : "none"
			});
			$(this).prev().css({
				"display" : "block"
			});
			$(".controller-play-btn").css({
				"display" : "block"
			});
			$(".controller-stop-btn").css({
				"display" : "none"
			});
		});
		$(".controller-play-btn").on("click", function(e) {
			e.preventDefault();
			$(this).css({
				"display" : "none"
			});
			$(this).next().css({
				"display" : "block"
			});
			$(".youtube-play-btn").css({
				"display" : "none"
			});
			$(".youtube-stop-btn").css({
				"display" : "block"
			});
		});
		$(".controller-stop-btn").on("click", function(e) {
			e.preventDefault();
			$(this).css({
				"display" : "none"
			});
			$(this).prev().css({
				"display" : "block"
			});
			$(".youtube-stop-btn").css({
				"display" : "none"
			});
			$(".youtube-play-btn").css({
				"display" : "block"
			});
		});
		$(".controller-volume-on-btn").on("click", function(e) {
			e.preventDefault();
			$(this).css({
				"display" : "none"
			});
			$(this).next().css({
				"display" : "block"
			});
		});
		$(".controller-volume-off-btn").on("click", function(e) {
			e.preventDefault();
			$(this).css({
				"display" : "none"
			});
			$(this).prev().css({
				"display" : "block"
			});
		});
		$(".controller-fullscreen-btn").on("click", function(e) {
			e.preventDefault();
			$(this).css({
				"display" : "none"
			});
			$(this).next().css({
				"display" : "block"
			});
		});
		$(".controller-basicscreen-btn").on("click", function(e) {
			e.preventDefault();
			$(this).css({
				"display" : "none"
			});
			$(this).prev().css({
				"display" : "block"
			});
		});
	});

})(window, window.jQuery);