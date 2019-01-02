(function (win, $) {
	"use strict";
	
	/* header menu start */
	var headerMenu = {
    	init : function () {
    		this.setElements();
    		this.bindEvents();
    	},
    	setElements : function () {
			this.btnLang = $(".util-lang-btn");
			this.headerLang = $(".header__util-lang");
			this.langList = $(".util-lang-list");
			this.btnLangLink = $(".util-lang-link");
    	},
    	bindEvents : function () {
    		this.btnLang.on("mouseenter", $.proxy(this.onEnterFunc, this));
			this.headerLang.on("mouseleave", $.proxy(this.onLeaveFunc, this));
			this.btnLangLink.on("click", $.proxy(this.onClickFunc, this));
			$(win).on("scroll", $.proxy(this.onFixedFunc, this));
		},
    	onEnterFunc : function (e) {
            var target = $(e.currentTarget);

			this.langList.slideDown(300);
        },
		onLeaveFunc : function (e) {
			var target = $(e.currentTarget);

			this.langList.slideUp(300);
		},
		onClickFunc : function (e) {
			e.preventDefault();
			var target = $(e.currentTarget),
				targetTxt = target.text(),
				targetCont = target.parent().parent();

			this.btnLangLink.removeClass("util-lang-link-active");
			target.addClass("util-lang-link-active");
			this.btnLang.text(targetTxt);
			targetCont.hide();
		},
		onFixedFunc : function () {
			var scrollVal = $(win).scrollTop();

			if (scrollVal > 0) {
				$("#header").addClass("header-fixed");
			} else {
				$("#header").removeClass("header-fixed");
			}
		}
    }
	/* //header menu end */

	/* mobile total menu start */
	var totalMenu = {
		init : function () {
			this.setElements();
			this.bindEvents();
		},
		setElements : function () {
			this.totalMenuBtn = $(".header__total-menu-btn");
			this.totalMenuCloseBtn = $(".menu__link-close");
			this.totalMenuDimm = $(".total__menu-dimm");
			this.totalMenu = $(".header__total-menu");
		},
		bindEvents : function () {
			this.totalMenuBtn.on("click", $.proxy(this.onOpenClickFunc, this));
			this.totalMenuCloseBtn.on("click", $.proxy(this.onCloseClickFunc, this));
			this.totalMenuDimm.on("click", $.proxy(this.onCloseClickFunc, this));
		},
		onOpenClickFunc : function (e) {
			e.preventDefault();
			var target = $(e.currentTarget);

			this.totalMenu.animate({
				"right" : "0"
			});
			$("html, body").css({
				"overflowY" : "hidden"
			});
			$("html").css({
				"height" : "auto"
			});
			this.totalMenuDimm.show();
		},
		onCloseClickFunc : function (e) {
			e.preventDefault();
			var target = $(e.currentTarget);

			this.totalMenu.animate({
				"right" : "-100%"
			});
			$("html, body").css({
				"overflowY" : "auto"
			});
			$("html").css({
				"height" : "auto"
			});
			this.totalMenuDimm.hide();
		}
	}
	/* //mobile total menu end */

	$(function(){
		headerMenu.init();
		totalMenu.init();
	});

})(window, window.jQuery);