function getOffsetRect(elem) {
    var box = elem.getBoundingClientRect(),
		body = document.body,
		docElem = document.documentElement,
		scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop,
		scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft,
		clientTop = docElem.clientTop || body.clientTop || 0,
		clientLeft = docElem.clientLeft || body.clientLeft || 0,
		top  = box.top +  scrollTop - clientTop,
		left = box.left + scrollLeft - clientLeft;
    return { top: Math.round(top), left: Math.round(left) }
}

$(function(){
	var body = $('body')[0],
		scrollY = window.scrollY;
	body.onload = function(){
		setTimeout(function(){
			$('body').removeClass('preload');
		}, 1000);
	};
	$(window).on('scroll resize', function(e){
		scrollY = window.scrollY;
	}).trigger('scroll');
	
	$('.dropdown-toggle').on('mouseenter', function(e){
		if(window.innerWidth > 767){
			$(this).dropdown('toggle');
			return !1;
		}
	});
	
 /*
 mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup mousewheel
 */
	$('.dropdown').on('mouseleave', function(e){
		if(window.innerWidth > 767){
			$('>a', $(this)).dropdown('toggle');
			return !1;
		}
	}).on('show.bs.dropdown', function(e){
		console.log(e.type);
		if(window.innerWidth < 768){
			var rect = getOffsetRect(this);
			window.scrollTo(0, rect.top);
		}
	});
	
});
$(function(){
	//$('.slider .slick-item-description').hyphenate('ru');
});
$(function() {
	setTimeout(function(){
		if(window.slider_data){
			if(window.slider_data.length){
				var a = null,
					b = null,
					act = 0,
					c = 0,
					d = 0,
					len = 0,
					e = 5000,
					f = function() {
						clearTimeout(a),
						d < c - 1 ? ++d : d = 0,
						b.removeClass("active"),
						$(b[d]).addClass("active"),
						a = setTimeout(f, e)
					},
					fn = function(e){
						++ len;
						if(e.type=="load"){
							var aa = !act ? ' active' : '';
							act = 1;
							$(".slick-data").append(
								$('<div>', {
									'class': 'slick-data-item'+aa
								}).attr({
									'style': "background-image: url('"+$(this).attr('src')+"');"
								})
							);
						}
						start();
					},
					start = function(){
						if(len > 0 && len==window.slider_data.length){
							$(".slick-data").show();
							b = $(".slick-data-item", $(".slick-data"));
							c = b.length;
							a = setTimeout(f, e);
						}
					};
				$(".slick-data").hide();
				$.each(window.slider_data, function(i, c){
					var $img = $("<img />", {"src": c}).on("load", fn).on("error", fn);
				})
			}
		}
	}, 1500);
})