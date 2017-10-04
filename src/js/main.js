


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

	$('*[data-jarallax]').jarallax({
		speed: 0.2
	});
	
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
			//nextArrow: '<span class="glyphicon glyphicon-menu-right slick-arrow slick-right" role="button" type="button"></span>',
			//prevArrow: '<span class="glyphicon glyphicon-menu-left slick-arrow slick-left" role="button" type="button"></span>',
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
	});

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
		$('.dropdown').on('mouseleave', function(e){
			if(window.innerWidth > 767){
				$('>a', $(this)).dropdown('toggle');
				return !1;
			}
		}).on('show.bs.dropdown', function(e){
			if(window.innerWidth < 768){
				var rect = getOffsetRect(this);
				window.scrollTo(0, rect.top);
			}
		});
		
	});
	$(function(){
		//$('.slider .slick-item-description')
		$('.home-news-item-description *, .specprod_list_item_description_wrapper').hyphenate('ru');
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
	});
	$(function(){
		$("[data-fancybox]").fancybox();
	});


window.initMapContact = function(){
	$(function(){
		var mapDiv = $("#map");
		mapDiv.on('contextmenu', function(e){
			e.preventDefault();
			return !1;
		});
		if($('#map').length){
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
				q = (data.addr ? "https://www.google.com/maps?z="+data.zoom+"&daddr="+data.addr : false),//58.011878,56.204041",
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
					//position: latlong,
					//animation: data.animation,
					icon: data.marker,
					title: data.title
				} : {
					//position: latlong,
					//animation: data.animation,
					title: data.title
				}
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
							latlong = {lat: data.latitude, lng: data.longitude}
							/*var latLng = new google.maps.LatLng(latlong.lat, latlong.lng);
							map.panTo(latLng);
							marker.setPosition(latLng);
							marker.setAnimation(data.animation);
							marker.setMap(map);
							map.setZoom(data.zoom);
							google.maps.event.addListener(marker, 'click', function() {
								infoWindow.open(map, marker);
							});
							google.maps.event.addListener(map, 'resize', function() {
								clearTimeout(setLL);
								setLL = setTimeout(function(){
									var latLng = new google.maps.LatLng(latlong.lat, latlong.lng);
									map.panTo(latLng);
								}, 10);
							});*/
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

$("body").append($("<script></script>", {
	async: "",
	defer: "",
	src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBdyyogHS8akX69w-K6Wb_PSO2N2E9GxsQ&callback=initMapContact"
}));