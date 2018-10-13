
var swipe = false;
var $body = $("BODY");

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

// jarallax
$(function(){
	$('*[data-jarallax]').jarallax({
		speed: 0.2
	});
});
// pixel

(function($){
	var pixel = $.cookie('pixelskat', Number);
	console.log(pixel);
	if(Boolean(pixel)){
		$('.pixelskat').removeClass('policy');
	}
	$('.pixelskat').on('click', '.pixelskat-wrapper-close', function(e){
		e.preventDefault();
		$.cookie('pixelskat', '1', { expires: 7, path: '/' });
		$('.pixelskat').removeClass('policy');
		return !1;
	});
}(jQuery));


(function($){
	var $mixit = $(".mixit");
	$mixit.each(function(){
		var $this = $(this),
			$containerEl = $('.mixit-container', $this),
			$filter = $('.select-filter', $this),
			mixer,
			startFilter;
		if($containerEl.length && $filter.length)
		{
			mixer = mixitup($containerEl[0],
				{
					classNames: {
						delineatorElement: '_',
						delineatorModifier: ' '
					}
				}
			);
			startFilter = $filter.on("change", function(e){
				e.preventDefault();
				var val = $(this).val();
				mixer.filter(val);
				return !1;
			}).val();
			mixer.filter(startFilter);
		}
			
	});/*
	var containerEl = document.querySelector('.mixit-container'),
		
	var mixer = mixitup(containerEl,
		{
			classNames: {
				delineatorElement: '_',
				delineatorModifier: ' '
			}
		}
	);*/
})(jQuery);


// slick sliders partners proizvoditel photos
$(function(){
	$('.slick-partners').slick({
		dots: false,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500,
		cssEase: 'ease-out',
		easing: 'easeInOutBounce',
		swipeToSlide: true,
		nextArrow: '<span class="glyphicon glyphicon-menu-right slick-arrow slick-right" role="button" type="button"></span>',
		prevArrow: '<span class="glyphicon glyphicon-menu-left slick-arrow slick-left" role="button" type="button"></span>',
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 6,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});
	$('.slick-proizvoditel').slick({
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500,
		cssEase: 'ease-out',
		easing: 'easeInOutBounce',
		swipeToSlide: true,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 6,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			}
		]
	});
	$(".slickphotos").each(function(){
		var $slick = $('.photos-slick', this),
			$arrows = $(".photos-slick-arrows", this);
		$slick.slick({
			nextArrow: '<span class="glyphicon glyphicon-menu-right slick-arrow slick-right" role="button" type="button"></span>',
			prevArrow: '<span class="glyphicon glyphicon-menu-left slick-arrow slick-left" role="button" type="button"></span>',
			appendArrows: $arrows,
			arrows: true,
			infinite: false,
			centerPadding: '60px',
			slidesToShow: 3,
			dots: false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						infinite: false,
						centerPadding: '40px',
						slidesToShow: 2
					}
				},
				{
					breakpoint: 768,
					settings: {
						infinite: false,
						centerPadding: '40px',
						slidesToShow: 1
					}
				}
			]
		}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
			swipe = true;
		}).on('afterChange', function(event, slick, currentSlide, nextSlide){
			swipe = false;
		});
	});
});

// dropdown, fancybox
$(function(){
	var body = $body[0],
		scrollY = window.scrollY;
	
	$(window).on('scroll resize', function(e){
		scrollY = window.scrollY;
	}).trigger('scroll');
	var $dt = $('.dropdown-toggle'),
		click = false;
	$dt.on('mouseenter', function(e){
		if(window.innerWidth > 767){
			$(this).dropdown('toggle');
			//return !1;
		}
	});
	$('.dropdown').on('mouseleave', function(e){
		if(window.innerWidth > 767){
			$('>a', $(this)).dropdown('toggle');
			//return !1;
		}
	}).on('show.bs.dropdown', function(e){
		if(window.innerWidth < 768){
			var rect = getOffsetRect(this);
			window.scrollTo(0, rect.top);
		}
	});
	$(".dropdown-menu li").on('click', function(){
		$('.dropdown').unbind("mouseleave show.bs.dropdown");
		$dt.unbind("mouseenter");
		setTimeout(function(){
			$(this).closest('.dropdown').dropdown("toggle");
		}, 10);
	})
	// fancybox
	$(".docsert *[data-fancybox], .photos *[data-fancybox]").fancybox();
	var $links = $(".photos-slick *[data-fancybox]");
	$links.on("click", function(e){
		e.preventDefault();
		if(!swipe){
			$.fancybox.open( $links, {
				// Custom options
			}, $links.index( this ));
		}
		return !1;
	});
});

// hyphenate
$(function(){
	$('.home-news-item-description *, .specprod_list_item_description_wrapper, table .value2 *, table .value3 *, table .name2 *').hyphenate('ru');
	$('table td, table th, table td *, table th *').hyphenate('ru');
});

// baner home
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
});

// sidebar menu
$(function(){
	$('.sidebar').on('click', function(){
		$("html").removeClass('open_sidebar');
		$body.css({"marginRight": 0}).removeClass('sidebar_open');
		$(".sidebar .sidebar-wrapper").stop().animate(
			{
				'z-index': 6
			},
			300,
			function(){
				$(".sidebar .sidebar-wrapper").stop().animate(
					{
						left: "-310px"
					},
					200
				);
				$(".sidebar").stop().animate(
					{
						opacity: 0
					},
					200,
					function(){
						$(".sidebar").css({right: '100%'});
					}
				);
			}
		);
	});
	$('.buttonMenu').on('click', function(){
		var w1 = $body.outerWidth(true);
		$("html").addClass('open_sidebar');
		var w2 = $body.outerWidth(true),
			w3 = w2-w1;
		if(w1 != w2) {
			$body.css({
				"marginRight": w3+'px'
			});
		}
		$('.sidebar-wrapper-nav nav').scrollTop(0);
		$(".sidebar").stop().css({
			opacity: 0,
			right: '0%'
		}).animate(
			{
				opacity: 1
			},
			200,
			function(){
				$(".sidebar .sidebar-wrapper").stop().animate(
					{
						left: "0px",
						'z-index': 1
					},
					200,
					function(){
						$body.addClass('sidebar_open');
					}
				);
			}
		);
	});
});

// forms
$(function(){
	var tld = "for_id_",
		index = 0,
		initPlaceholder = function(form){
			$("*[placeholder]", $body)
			.unbind("focus blur")
			.on("focus", function(e){
				$(this)
					.data({
						"placeholder": $(this).attr("placeholder")
					})
					.attr({
						"placeholder": ""
					})
			})
			.on("blur", function(e){
				$(this).attr({
					"placeholder": $(this).data("placeholder")
				})
			});
			$(".form-group", form).each(function(){
				++index;
				var label = $("label", this),
					id = label.attr('for'),
					input = $("#" + id, this),
					titl = tld + index;
				label.attr({
					"for": titl
				});
				input.attr({
					"id" : titl
				});
			});
		};
	$(".techic").on("click", function(e){
		e.preventDefault();
		var $content = $("#zayavka_render").html(),
			$c = $('<div class="box-modal form-modal"><div class="form_replacer"></div></div>'),
			$repl = $(".form_replacer", $c);
		$repl.append($content);
		$c.prepend('<div class="box-modal_close arcticmodal-close"></div>');
		var artic = $.arcticmodal({
			content: $c
		}),
		ajaxFZ = function(e){
			e.preventDefault();
			var formData = new FormData(this);;
			$.ajax({
				url: window.location.origin + window.location.pathname,
				data: formData,
				processData: false,
				contentType: false,
				type: 'POST',
				dataType: 'JSON',
				success: function(data){
					var zayavka = $(data.forms.zayavka);
					$("form", artic).unbind("submit", ajaxFZ);
					$repl.empty().append(zayavka.clone());
					$("#zayavka_render").empty().append(zayavka.clone());
					initPlaceholder($("form", artic));
					$("form", artic).bind("submit", ajaxFZ);
					$("input[name=phone]", artic).mask("+7(999)999-99-99");
				},
				error: function(a, b, c){
					console.log(a, b, c);
				}
			});
			return !1;
		};
		initPlaceholder($("form", artic));
		$("form", artic).bind("submit", ajaxFZ);
		$("input[name=phone]", artic).mask("+7(999)999-99-99");
		return !1;
	});
	$(".zapchast").on("click", function(e){
		e.preventDefault();
		var $content = $("#tehnic_render").html(),
			$c = $('<div class="box-modal form-modal"><div class="form_replacer"></div></div>'),
			$repl = $(".form_replacer", $c);
		$repl.append($content);
		$c.prepend('<div class="box-modal_close arcticmodal-close"></div>');
		var artic = $.arcticmodal({
			content: $c
		}),
		ajaxFZ = function(e){
			e.preventDefault();
			var formData = new FormData(this);;
			$.ajax({
				url: window.location.origin + window.location.pathname,
				data: formData,
				processData: false,
				contentType: false,
				type: 'POST',
				dataType: 'JSON',
				success: function(data){
					var zayavka = $(data.forms.zapchast);
					$("form", artic).unbind("submit", ajaxFZ);
					$repl.empty().append(zayavka.clone());
					$("#tehnic_render").empty().append(zayavka.clone());
					initPlaceholder($("form", artic));
					$("form", artic).bind("submit", ajaxFZ);
					$("input[name=phone]", artic).mask("+7(999)999-99-99");
				},
				error: function(a, b, c){
					console.log(a, b, c);
				}
			});
			return !1;
		};
		initPlaceholder($("form", artic));
		$("form", artic).bind("submit", ajaxFZ);
		$("input[name=phone]", artic).mask("+7(999)999-99-99");
		return !1;
	});
	$(".devbutton").click(function(e){
		e.preventDefault();
		var $content = $("#develop_render").html(),
			$c = $('<div class="box-modal form-modal"><div class="form_replacer"></div></div>'),
			$repl = $(".form_replacer", $c);
		$repl.append($content);
		$c.prepend('<div class="box-modal_close arcticmodal-close"></div>');
		var artic = $.arcticmodal({
			content: $c
		}),
		ajaxFZ = function(e){
			e.preventDefault();
			var formData = new FormData(this);;
			$.ajax({
				url: window.location.origin + window.location.pathname,
				data: formData,
				processData: false,
				contentType: false,
				type: 'POST',
				dataType: 'JSON',
				success: function(data){
					var zayavka = $(data.forms.develop);
					$("form", artic).unbind("submit", ajaxFZ);
					$repl.empty().append(zayavka.clone());
					$("#develop_render").empty().append(zayavka.clone());
					initPlaceholder($("form", artic));
					$("form", artic).bind("submit", ajaxFZ);
					$("input[name=phone]", artic).mask("+7(999)999-99-99");
				},
				error: function(a, b, c){
					console.log(a, b, c);
				}
			});
			return !1;
		};
		initPlaceholder($("form", artic));
		$("form", artic).bind("submit", ajaxFZ);
		$("input[name=phone]", artic).mask("+7(999)999-99-99");
		return !1;
	});
	initPlaceholder($body);
});

// Search
$(function(){
	var $slogan = $("#slogan");
	$slogan.prepend($(".search", $("#fsearch")));
	$(".search-icon", $slogan).on("click", function(e){
		var $this = $(this);
		e.preventDefault();
		$slogan.hasClass("open") ? ($slogan.removeClass("open"), $this.attr({title: "Поиск"})) : ($slogan.addClass("open"), $this.attr({title: "Закрыть"}));
		return !1;
	}).attr({title: "Поиск"});
});

// map
$(function(){
	if($("#map").length){
		$("body").append($("<script></script>", {
			async: "",
			defer: "",
			src: "https://maps.googleapis.com/maps/api/js?key="+window.googleKey+"&callback=initMapContact"
		}));
	}
});

// callback map
window.initMapContact = function(){
	$(function(){
		var mapDiv = $("#map");
		mapDiv.on('contextmenu', function(e){
			e.preventDefault();
			return !1;
		});
		if(mapDiv.length){
			var options = {
					latitude: 0,
					longitude: 0,
					marker: false,
					addr: false,
					address: false,
					duration: false,
					phone: false,
					title: "Info Window",
					zoom: 15,
					animation: 0
				},
				data = $.extend({}, options, mapDiv.data()),
				zoom = data.zoom,
				latlong = {lat: data.latitude, lng: data.longitude},
				q = (data.addr ? "https://www.google.com/maps?z="+data.zoom+"&daddr="+data.addr : false),
				openRoute = function(e){
					e.preventDefault();
					infoWindow.close();
					q && setTimeout(function(){
						window.open(q);
					}, 100);
					return !1;
				},
				LL = new google.maps.LatLng(0, 0),
				infoContent = $("<div class=\"page-contact-detail-infowindow\">"+
					"<h5 class=\"page-contact-detail-infowindow-title\">"+data.title+"</h5>"+
					"<div class=\"page-contact-detail-infowindow-content\">"+
						"<dl>"+
							(data.address ? "<dt>Адрес:</dt><dd>"+data.address+"</dd>" : "")+
							(data.duration ? "<dt>Режим работы:</dt><dd>"+data.duration+"</dd>" : "")+
							(data.phone ? "<dt>Телефон:</dt><dd><a href=\"tel:"+data.phone.replace(/(\s|\(|\)|-)/g, '')+"\">"+data.phone+"</a></dd>" : "")+
						"</dl>"+
						(data.addr ? "<span class=\"page-contact-detail-infowindow-content-link\">Проложить маршрут</span>" : "")+
					"</div>"+
				"</div>").on('click', '.page-contact-detail-infowindow-content-link', openRoute).on('contextmenu', function(e){
					e.preventDefault();
					return !1;
				})[0],
				ControlGetDirections = function(controlUI, id, query){
					var control = this,
						container = $('<div />', {
							'class': 'page-contact-detail-control-ui-wrapper'
						}),
						tag = $('<span />', {
							'class': 'page-contact-detail-control-ui-link',
							'text': "Проложить маршрут"
						});
						query && $(controlUI).append(container.append(tag));
				},
				zz = 3,
				map = new google.maps.Map(document.getElementById('map'), {
					zoom: zz,
					center: latlong
				}),
				markerOptions = data.marker ? {
					icon: data.marker,
					title: data.title
				} : {
					title: data.title
				},
				marker = new google.maps.Marker(markerOptions),
				infoWindow = new google.maps.InfoWindow({
					content: infoContent
				}),
				controlContainer = $('<span />', {
					'class': 'page-contact-detail-control-ui'
				}).on('click', openRoute),
				controlUI = new ControlGetDirections(controlContainer, map, q),
				setLL = 0,
				ii = 0,
				geocoder = new google.maps.Geocoder,
				initDefaultMarker = function(){
					setTimeout(function(){
						marker.setAnimation(0);
						var latLng = new google.maps.LatLng(latlong.lat, latlong.lng);
						map.panTo(latLng);
						marker.setPosition(latLng);
						marker.setAnimation(data.animation);
						marker.setMap(map);
						map.setZoom(data.zoom);
						map.setClickableIcons(false);
						google.maps.event.addListener(marker, 'click', function() {
							infoWindow.open(map, marker);
						});
						google.maps.event.addListener(map, 'resize', function() {
							clearTimeout(setLL);
							setLL = setTimeout(function(){
								var latLng = new google.maps.LatLng(latlong.lat, latlong.lng);
								map.panTo(latLng);
							}, 10);
						});
						$(window).on('resize', function(){
							clearTimeout(setLL);
							setLL = setTimeout(function(){
								var latLng = new google.maps.LatLng(latlong.lat, latlong.lng);
								map.panTo(latLng);
							}, 100);
						});
					}, 50);
				};
			setTimeout(function(){
				geocoder.geocode({'address': data.addr}, function(results, status) {
					if(status=="OK"){
						if(results.length){
							marker.setAnimation(0);
							var dRes = results[0];
							data.latitude = dRes.geometry.location.lat();
							data.longitude = dRes.geometry.location.lng();
							latlong = {lat: data.latitude, lng: data.longitude};
							initDefaultMarker();
						}else{
							initDefaultMarker();
						}
					}else{
						initDefaultMarker();
					}
					map.controls[google.maps.ControlPosition.TOP_LEFT].push(controlContainer[0]);
					map.addListener('click', function(e){
						infoWindow.close();
					});
				});
			}, 50);
		}
	});
};