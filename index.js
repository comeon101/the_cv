$(document).ready(function () {
	var	obj_navOptions    = $("nav a[data-section]"),
		obj_timelineBlobs = $("div.timeline-blob"),

		obj_activeSection,

		obj_timelineInfo,
		tl_start, tl_length, tl_color,

		relativeDelta, tl_assocInfo;


	$(obj_navOptions).click(function () {
		activeObject = $(this).attr("data-section");
		obj_activeSection = $(".section#"+activeObject);

		console.log(obj_activeSection);

		$("html, body").animate({
			scrollTop: $(obj_activeSection).offset().top - $(obj_activeSection).height() / 2
		}, 500);
	});


	(function () {
		$.each(obj_timelineBlobs, function() {
			tl_length = $(this).attr("data-dateend") - $(this).attr("data-datestart");
			tl_start  = $(this).attr("data-datestart") - 1997;
			tl_color  = $(this).attr("data-color");

			$(this)
				.css("width", 5 * tl_length+"%")
				.css("left",  5 * tl_start+"%")
				.css("background-color", tl_color);

			obj_timelineInfo = $(this).children("div");

			relativeDelta = 0.5 * ($(obj_timelineInfo).width() - $(this).width());;
			$(obj_timelineInfo).css("left", "-"+relativeDelta+"px");
		});
	})();


	$(window).resize(function() {
		$.each(obj_timelineBlobs, function() {
			obj_timelineInfo = $(this).children("div");
			relativeDelta = 0.5 * ($(obj_timelineInfo).width() - $(this).width());;
			$(obj_timelineInfo).css("left", "-"+relativeDelta+"px");
		});
	});
});
