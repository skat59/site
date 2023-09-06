<!DOCTYPE html>
<html class="no-js" lang="ru" prefix="og: http://ogp.me/ns#"><?php
function getFileTime($path){
	$file = "/".trim(trim($path),"\t .&?\\/");
	$server = $_SERVER["DOCUMENT_ROOT"];
	if(is_file($server.$file)){
		$file = $path."?".filemtime($server.$file);
	}else{
		$file = $path."?".time();
	}
	return $file;
}
function getFileContent($path, $type="html"){
	$return = "";
	$file = "/".trim(trim($path),"\t .&?\\/");
	$server = $_SERVER["DOCUMENT_ROOT"];
	if(is_file($server.$file)){
		$return = file_get_contents($server.$file);
		switch($type){
			case "js":
				$return = "<script>\n".$return."\n</script>";
				break;
			case "css":
				$return = "<style>\n".$return."\n</style>";
				break;
		}
	}
	return $return;
}
?>

	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta content="width=device-width, initial-scale=1" name="viewport">
		<title>ООО «СКАТ»</title>
		<meta name="title" content="">
		<meta name="description" content="">
		<meta name="keywords" content="">
		<meta name="robots" content="index, follow">
		<base href="/">
		<link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
		<link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
		<link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
		<link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
		<link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
		<link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
		<link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
		<link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="194x194" href="/favicon-194x194.png">
		<link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
		<link rel="shortcut Icon" href="/favicon.ico" type="image/x-icon">
		<link rel="icon" href="/favicon.ico" type="image/x-icon">
		<link rel="manifest" href="/manifest.json">
		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
		<meta name="apple-mobile-web-app-title" content="СКАТ">
		<meta name="application-name" content="СКАТ">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="/mstile-144x144.png">
		<meta name="theme-color" content="#ffffff">
		<meta property="og:title" content="">
		<meta property="og:description" content="">
		<meta property="og:url" content="">
		<meta property="og:locale" content="ru_RU">
		<meta property="og:image" content="">
		<meta property="og:type" content="website">
		<meta property="og:site_name" content=""><?=getFileContent('/assets/templates/skat_1.0.0/css/main.css', 'css');?>
	</head>
	<body class="preload">
		<header class="header container-fluid">
			<div class="row header-line">
				<div class="header-title">
					<p>ООО «СКАТ» - надежный поставщик спецтехники на Западном Урале</p>
				</div>
				<div class="header-line-container container-fluid">
					<div class="header-line-container-row row">
						<div class="header-line-container-row-container">
							<div class="header-line-flex row">
								<div class="column-flex color_01 clearfix"><a id="header-home-link" href="/"><img class="img-logotip" src="/assets/templates/skat_1.0.0/images/logotip.png" alt="ООО «СКАТ» - надежный поставщик спецтехники на Западном Урале"><span class="svg-logotip"><?=getFileContent('/assets/templates/skat_1.0.0/images/oval_02.svg');?></span></a></div>
								<div class="column-flex color_02 clearfix">
									<div class="column-flex-block"><i class="icon sk-map"></i>
										<div class="column-flex-block-wrapper"><span class="column-flex-block-wrapper-title">Адрес:</span>
											<p class="address"><span class="index">614990</span>, <span class="city">г. Пермь</span>, <br><span class="street">ул. Окулова 75, </span><span class="korpus">корпус 8</span></p>
										</div>
									</div>
								</div>
								<div class="column-flex color_03 clearfix">
									<div class="column-flex-block"><i class="icon sk-work"></i>
										<div class="column-flex-block-wrapper"><span class="column-flex-block-wrapper-title">Режим работы:</span>
											<p class="work"><span class="work-days">ПН — ПТ с 8.00 до 17.00</span><br><span class="work-cb"><span class="hred">СБ — ВС </span>выходные</span></p>
										</div>
									</div>
								</div>
								<div class="column-flex color_04 clearfix">
									<div class="column-flex-block">
										<div class="column-flex-block-wrapper">
											<p class="contact-block-phone"><span class="column-flex-block-wrapper-title">Телефон:</span><span class="column-flex-block-wrapper-phone"><a class="hred" href="tel:+73422700010">+7 (342) 270-00-10</a></span><span class="column-flex-block-wrapper-title">Телефон / Факс:</span><span class="column-flex-block-wrapper-phone"><a class="hred" href="tel:+73422332062">+7 (342) 233-20-62</a></span></p>
											<p class="contact-block-email"><span class="column-flex-block-wrapper-title">E-mail:</span><span class="column-flex-block-wrapper-email"><a class="hred" href="mailto:ofis@skat59.ru">ofis@skat59.ru</a></span></p>
										</div>
									</div>
								</div>
							</div>
							<div class="hidden" itemscope="" itemtype="http://schema.org/LocalBusiness">
								<meta itemprop="priceRange" content="RUB">
								<meta itemprop="image" content="/assets/templates/skat_1.0.0/images/logotip.png"><span itemprop="name">ООО «СКАТ»</span>
								<div itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress"><span itemprop="addressCountry">Россия</span><span itemprop="postalCode">614990</span><span itemprop="addressRegion">Пермский край</span><span itemprop="addressLocality">Пермь</span><span itemprop="streetAddress">ул. Окулова 75, корпус 8</span><span itemprop="telephone">8-342-270-00-10</span><span itemprop="faxNumber">8-342-233-20-62</span><span itemprop="email">ofis@skat59.ru</span></div>
								<div itemprop="openingHours" datetime="Mo-Fr 8:00−17:00" itemtype="http://schema.org/Duration">
									<p>Понедельник-пятница</p>
									<p>8:00-17:00 без обеда</p>
								</div>
								<div itemtype="http://schema.org/GeoCoordinates" itemscope="" itemprop="geo">
									<meta itemprop="latitude" content="58.011835">
									<meta itemprop="longitude" content="56.204424">
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<div class="menu">
			<nav class="navbar navbar-skat" role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
				<div class="container-fluid navbar-container">
					<div class="navbar-header">
						<button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand sk-home" href="/"></a>
					</div>
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul class="nav navbar-nav">
							<li class="active dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown">Компания<b class="caret"></b></a>
								<ul class="dropdown-menu">
									<li class="nav-header"><a href="/" itemprop="url"><span>Компания</span></a></li>
									<li class="divider"></li>
									<li><a href="/" itemprop="url"><span>Новости</span></a></li>
									<li><a href="/" itemprop="url"><span>Сертификаты, дипломы и награды</span></a></li>
									<li><a href="/" itemprop="url"><span>Партнеры</span></a></li>
									<li><a href="/" itemprop="url"><span>Производители техники</span></a></li>
									<li><a href="/" itemprop="url"><span>Спецпредложения</span></a></li>
									<li><a href="/" itemprop="url"><span>Контакты</span></a></li>
								</ul>
							</li>
							<li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown">Каталог<b class="caret"></b></a>
								<ul class="dropdown-menu">
									<li class="nav-header"><a href="/" itemprop="url"><span>Каталог</span></a></li>
									<li class="divider"></li>
									<li><a href="/" itemprop="url"><span>Лесозаготовительная техника</span></a></li>
									<li><a href="/" itemprop="url"><span>Дорожно-строительная техника</span></a></li>
									<li><a href="/" itemprop="url"><span>Косилки</span></a></li>
									<li><a href="/" itemprop="url"><span>Навесное оборудование</span></a></li>
									<li><a href="/" itemprop="url"><span>Запчасти для техники "АМКОДОР"</span></a></li>
									<li><a href="/" itemprop="url"><span>Погрузчики вилочные</span></a></li>
									<li><a href="/" itemprop="url"><span>Складская техника</span></a></li>
									<li><a href="/" itemprop="url"><span>Подъемники</span></a></li>
									<li><a href="/" itemprop="url"><span>Запчасти для вилочных погрузчиков</span></a></li>
									<li><a href="/" itemprop="url"><span>Машины торфодобывающей отрасли</span></a></li>
									<li><a href="/" itemprop="url"><span>Зерноочистительные комплексы</span></a></li>
									<li><a href="/" itemprop="url"><span>Пневмоавтоматика SMC</span></a></li>
								</ul>
							</li>
							<li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown">Услуги<b class="caret"></b></a>
								<ul class="dropdown-menu dropdown-menu-right">
									<li class="nav-header"><a href="/" itemprop="url"><span>Услуги</span></a></li>
									<li class="divider"></li>
									<li><a href="/" itemprop="url"><span>Продажа спецтехники</span></a></li>
									<li><a href="/" itemprop="url"><span>Гарантийное и сервисное обслуживание</span></a></li>
									<li><a href="/" itemprop="url"><span>Текущий и капитальный ремонт</span></a></li>
									<li><a href="/" itemprop="url"><span>Лизинг</span></a></li>
									<li><a href="/" itemprop="url"><span>Тrade-In</span></a></li>
									<li><a href="/" itemprop="url"><span>Магазин автозапчестей для спецтехники</span></a></li>
								</ul>
							</li>
							<li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown">Информация<b class="caret"></b></a>
								<ul class="dropdown-menu dropdown-menu-right">
									<li class="nav-header"><a href="/" itemprop="url"><span>Информация</span></a></li>
									<li class="divider"></li>
									<li><a href="/" itemprop="url"><span>Статьи</span></a></li>
									<li><a href="/" itemprop="url"><span>Видео</span></a></li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
		<div class="slider container-fluid">
			<div class="row">
				<div class="container-fluid text-center">
					<div class="row">
						<div class="slick" style="background-image: url('/assets/templates/skat_1.0.0/images/dsc_0001.jpg');">
							<div class="slick-item">
								<div class="container">
									<div class="row">
										<div class="col-md-8 col-lg-6 pull-right">
											<p class="slick-item-title"><strong>18 лет для наших клиентов!</strong></p>
											<p class="slick-item-description">Компания «СКАТ» уже более 18 лет заслуженно считается одним из лидеров регионального рынка спецтехники. Это значит, что мы прекрасно знаем ваши потребности, отлично разбираемся в своем деле и с готовностью идем навстречу клиенту.<br>«СКАТ» - это поставки, техническое обслуживание и аренда погрузчиков и профессиональной спецтехники.</p>
										</div>
									</div>
								</div>
							</div>
							<div class="slick-data"><script>
	window.slider_data = [
		'/assets/templates/skat_1.0.0/images/dsc_0001.jpg',
		'/assets/templates/skat_1.0.0/images/dsc_0003.jpg',
		'/assets/templates/skat_1.0.0/images/dsc_0005.jpg',
		'/assets/templates/skat_1.0.0/images/dsc_0007.jpg',
		'/assets/templates/skat_1.0.0/images/dsc_0002.jpg',
		'/assets/templates/skat_1.0.0/images/dsc_0004.jpg',
		'/assets/templates/skat_1.0.0/images/dsc_0006.jpg'
	];
</script>
							</div>
							<div class="slider-buttons">
								<div class="slider-buttons-techic col-lg-6 col-md-6 col-sm-6 col-xs-12"><a class="btn btn-zayavka text-uppercase techic" href="#">Заявка на технику</a></div>
								<div class="slider-buttons-zapcast col-lg-6 col-md-6 col-sm-6 col-xs-12"><a class="btn btn-zayavka text-uppercase zapchast" href="#">Заявка на запчасти</a></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div><?=getFileContent('/assets/templates/skat_1.0.0/js/modernizr.js', 'js');?>
		<section class="section_home_01 container-fluid">
			<div class="row">
				<div class="container">
					<h2 class="section_h2 text-center">В нашем каталоге более 325 наименований техники.</h2>
					<div class="row">
						<div class="container-fluid">
							<div class="section_block">
								<p>С 1999 года компания «СКАТ» работает для того, чтобы наши клиенты получали прибыль, используя современную и надежную технику, обеспеченную сервисом и запасными частями. За эти годы нашими клиентами стали многие крупнейшие компании Западного Урала.</p>
								<p>Можем предложить Вам большой выбор погрузчиков и подъемников, складской, лесозаготовительной и дорожно-строительной техники, манипуляторов и краноустановок, зерноочистительных комплексов. Рассмотрим любые удобные для Вас варианты приобретения спецтехники, в том числе лизинг, бартер и «trade-in». Ваша покупка будет выгодной!</p>
								<p>Спецтехника <strong>Амкодор</strong>, <strong>Велмаш</strong>, <strong>Heli</strong>, <strong>Haulotte</strong>, <strong>Wecan </strong>и <a href="#">других производителей</a>, официальными представителями которых является компания «СКАТ», будет служить вам верой и правдой долгие годы, а мы сделаем все, чтобы в течение срока службы с ней не возникало проблем. Мы организуем учебу ваших операторов, если у них нет опыта работы на данной технике.</p>
								<h4 class="section_h4 text-center text-uppercase fs-25 mt-20 mb-20">Производители</h4>
								<div class="slick-proizvoditel">
									<div class="slick-proizvoditel-item text-center"><a class="slick-proizvoditel-item-link" href="#"><span class="slick-proizvoditel-item-link-bg" style="background-image: url('/assets/templates/skat_1.0.0/images/partners/amkodor.jpg');"></span><span class="slick-proizvoditel-item-link-txt">Амкодор</span></a></div>
									<div class="slick-proizvoditel-item text-center"><a class="slick-proizvoditel-item-link" href="#"><span class="slick-proizvoditel-item-link-bg" style="background-image: url('/assets/templates/skat_1.0.0/images/partners/velmash.jpg');"></span><span class="slick-proizvoditel-item-link-txt">Велмаш</span></a></div>
									<div class="slick-proizvoditel-item text-center"><a class="slick-proizvoditel-item-link" href="#"><span class="slick-proizvoditel-item-link-bg" style="background-image: url('/assets/templates/skat_1.0.0/images/partners/heli.jpg');"></span><span class="slick-proizvoditel-item-link-txt">Heli</span></a></div>
									<div class="slick-proizvoditel-item text-center"><a class="slick-proizvoditel-item-link" href="#"><span class="slick-proizvoditel-item-link-bg" style="background-image: url('/assets/templates/skat_1.0.0/images/partners/haulotte.jpg');"></span><span class="slick-proizvoditel-item-link-txt">Haulotte</span></a></div>
									<div class="slick-proizvoditel-item text-center"><a class="slick-proizvoditel-item-link" href="#"><span class="slick-proizvoditel-item-link-bg" style="background-image: url('/assets/templates/skat_1.0.0/images/partners/wecan.jpg');"></span><span class="slick-proizvoditel-item-link-txt">Wecan</span></a></div>
									<div class="slick-proizvoditel-item text-center"><a class="slick-proizvoditel-item-link" href="#"><span class="slick-proizvoditel-item-link-bg" style="background-image: url('/assets/templates/skat_1.0.0/images/partners/warun.jpg');"></span><span class="slick-proizvoditel-item-link-txt">WARUN</span></a></div>
									<div class="slick-proizvoditel-item text-center"><a class="slick-proizvoditel-item-link" href="#"><span class="slick-proizvoditel-item-link-bg" style="background-image: url('/assets/templates/skat_1.0.0/images/partners/balkancar.jpg');"></span><span class="slick-proizvoditel-item-link-txt">Balkancar</span></a></div>
									<div class="slick-proizvoditel-item text-center"><a class="slick-proizvoditel-item-link" href="#"><span class="slick-proizvoditel-item-link-bg" style="background-image: url('/assets/templates/skat_1.0.0/images/partners/smc.jpg');"></span><span class="slick-proizvoditel-item-link-txt">SMC</span></a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="section_home_02 container-fluid">
			<div class="row">
				<div class="container catalog_home">
					<h3 class="section_h2 text-center">Каталог</h3>
					<div class="row anonce_block">
						<div class="col-lg-8 col-lg-push-2 col-md-10 col-md-push-1 text-center">
							<div class="container-fluid anonce_block_wrapper">
								<h4 class="anonce_block_title text-uppercase red">ВНИМАНИЕ!</h4>
								<p>При приобретении продукции холдинга «АМКОДОР» <br>работает программа льготного кредитования в ОАО «АК БАРС» БАНК <br>Дополнительная информация по тел.: 8(342) 259-22-14, 239-07-00</p>
							</div>
						</div>
					</div>
					<ul class="catalog_home_list row">
						<li class="catalog_home_item col-lg-4 col-md-4 col-sm-6 col-xs-12"><a class="catalog_home_item_link" href="#"><span class="catalog_home_item_link_background" style="background-image: url('/assets/templates/skat_1.0.0/images/lesozag_tech.png');"></span><span class="catalog_home_item_link_title text-center">Лесозаготовительная техника</span></a></li>
						<li class="catalog_home_item col-lg-4 col-md-4 col-sm-6 col-xs-12"><a class="catalog_home_item_link" href="#"><span class="catalog_home_item_link_background" style="background-image: url('/assets/templates/skat_1.0.0/images/dor_stroy.png');"></span><span class="catalog_home_item_link_title text-center">Дорожно-строительная техника</span></a></li>
						<li class="catalog_home_item col-lg-4 col-md-4 col-sm-6 col-xs-12"><a class="catalog_home_item_link" href="#"><span class="catalog_home_item_link_background" style="background-image: url('/assets/templates/skat_1.0.0/images/kosilka.png');"></span><span class="catalog_home_item_link_title text-center">Косилки</span></a></li>
						<li class="catalog_home_item col-lg-4 col-md-4 col-sm-6 col-xs-12"><a class="catalog_home_item_link" href="#"><span class="catalog_home_item_link_background" style="background-image: url('/assets/templates/skat_1.0.0/images/nav_ob-otval.png');"></span><span class="catalog_home_item_link_title text-center">Навесное оборудование</span></a></li>
						<li class="catalog_home_item col-lg-4 col-md-4 col-sm-6 col-xs-12"><a class="catalog_home_item_link" href="#"><span class="catalog_home_item_link_background" style="background-image: url('/assets/templates/skat_1.0.0/images/zpch_amkodor.png');"></span><span class="catalog_home_item_link_title text-center">Запчасти для техники "АМКОДОР"</span></a></li>
						<li class="catalog_home_item col-lg-4 col-md-4 col-sm-6 col-xs-12"><a class="catalog_home_item_link" href="#"><span class="catalog_home_item_link_background" style="background-image: url('/assets/templates/skat_1.0.0/images/pogr_vilochl.png');"></span><span class="catalog_home_item_link_title text-center">Погрузчики вилочные</span></a></li>
						<li class="catalog_home_item col-lg-4 col-md-4 col-sm-6 col-xs-12"><a class="catalog_home_item_link" href="#"><span class="catalog_home_item_link_background" style="background-image: url('/assets/templates/skat_1.0.0/images/rohlya.png');"></span><span class="catalog_home_item_link_title text-center">Складская техника</span></a></li>
						<li class="catalog_home_item col-lg-4 col-md-4 col-sm-6 col-xs-12"><a class="catalog_home_item_link" href="#"><span class="catalog_home_item_link_background" style="background-image: url('/assets/templates/skat_1.0.0/images/shtabeler.png');"></span><span class="catalog_home_item_link_title text-center">Подъемники</span></a></li>
						<li class="catalog_home_item col-lg-4 col-md-4 col-sm-6 col-xs-12"><a class="catalog_home_item_link" href="#"><span class="catalog_home_item_link_background" style="background-image: url('/assets/templates/skat_1.0.0/images/zap_vil.png');"></span><span class="catalog_home_item_link_title text-center">Запчасти для вилочных погрузчиков</span></a></li>
						<li class="catalog_home_item col-lg-4 col-md-4 col-sm-6 col-xs-12"><a class="catalog_home_item_link" href="#"><span class="catalog_home_item_link_background" style="background-image: url('/assets/templates/skat_1.0.0/images/torf.png');"></span><span class="catalog_home_item_link_title text-center">Машины торфодобывающей отрасли</span></a></li>
						<li class="catalog_home_item col-lg-4 col-md-4 col-sm-6 col-xs-12"><a class="catalog_home_item_link" href="#"><span class="catalog_home_item_link_background" style="background-image: url('/assets/templates/skat_1.0.0/images/serno.png');"></span><span class="catalog_home_item_link_title text-center">Зерноочистительные комплексы</span></a></li>
						<li class="catalog_home_item col-lg-4 col-md-4 col-sm-6 col-xs-12"><a class="catalog_home_item_link" href="#"><span class="catalog_home_item_link_background" style="background-image: url('/assets/templates/skat_1.0.0/images/smc.png');"></span><span class="catalog_home_item_link_title text-center">Пневмоавтоматика SMC</span></a></li>
					</ul>
				</div>
			</div>
		</section>
		<section class="section_home_03 container-fluid">
			<!--.row(data-parallax="scroll" data-image-src="/assets/templates/skat_1.0.0/images/skat_okulova.jpg" data-speed="0.2")-->
			<div class="row jarallax" style="background-image: url('/assets/templates/skat_1.0.0/images/skat_okulova.jpg');" data-jarallax="{&quot;speed&quot;: 0.2}">
				<div class="container">
					<h3 class="section_h2 text-center">МЫ ВСЕГДА РАДЫ<br>предложить Вам полный спектр услуг</h3>
					<div class="row mb-30">
						<div class="container-fluid">
							<div class="section_block">
								<p>Компания «СКАТ» не стремится просто продать вам нужную технику – мы делаем все, чтобы ее приобретение было удобным, а обладание техникой не доставляло неприятностей. Именно поэтому мы предлагаем любые удобные варианты приобретения спецтехники, в том числе лизинг, бартер и «trade-in». Для этого работает команда специалистов, занимающихся ремонтом и техническим обслуживанием любых погрузчиков и спецтехники. Для этих целей при компании открыт большой розничный магазин запчастей и комплектующих, где вы всегда можете купить или заказать любые необходимые вам запчасти.</p>
								<p class="text-center">Мы работаем для вас!</p>
							</div>
						</div>
					</div>
					<ul class="catalog_home_list row">
						<li class="catalog_home_item col-lg-4 col-md-4 col-sm-6 col-xs-12"><a class="catalog_home_item_link" href="#"><span class="catalog_home_item_link_background" style="background-image: url('/assets/templates/skat_1.0.0/images/excovator.png');"></span><span class="catalog_home_item_link_title text-center">Продажа спецтехники</span></a></li>
						<li class="catalog_home_item col-lg-4 col-md-4 col-sm-6 col-xs-12"><a class="catalog_home_item_link" href="#"><span class="catalog_home_item_link_background" style="background-image: url('/assets/templates/skat_1.0.0/images/garantiyny.png');"></span><span class="catalog_home_item_link_title text-center">Гарантийное и сервисное обслуживание</span></a></li>
						<li class="catalog_home_item col-lg-4 col-md-4 col-sm-6 col-xs-12"><a class="catalog_home_item_link" href="#"><span class="catalog_home_item_link_background" style="background-image: url('/assets/templates/skat_1.0.0/images/remont_in.png');"></span><span class="catalog_home_item_link_title text-center">Текущий и капитальный ремонт</span></a></li>
						<li class="catalog_home_item col-lg-4 col-md-4 col-sm-6 col-xs-12"><a class="catalog_home_item_link" href="#"><span class="catalog_home_item_link_background" style="background-image: url('/assets/templates/skat_1.0.0/images/lizing.png');"></span><span class="catalog_home_item_link_title text-center">Лизинг</span></a></li>
						<li class="catalog_home_item col-lg-4 col-md-4 col-sm-6 col-xs-12"><a class="catalog_home_item_link" href="#"><span class="catalog_home_item_link_background" style="background-image: url('/assets/templates/skat_1.0.0/images/tradein.png');"></span><span class="catalog_home_item_link_title text-center">Тrade-In</span></a></li>
						<li class="catalog_home_item col-lg-4 col-md-4 col-sm-6 col-xs-12"><a class="catalog_home_item_link" href="#"><span class="catalog_home_item_link_background" style="background-image: url('/assets/templates/skat_1.0.0/images/magazin.png');"></span><span class="catalog_home_item_link_title text-center">Магазин автозапчестей для спецтехники</span></a></li>
					</ul>
				</div>
			</div>
		</section>
		<section class="section_home_04 container-fluid">
			<div class="row">
				<div class="container">
					<h4 class="section_h2 text-center">СПЕЦПРЕДЛОЖЕНИЯ</h4>
					<div class="specprod_list row">
						<div class="specprod_list_item container-fluid">
							<h4 class="specprod_list_item_title pull-right col-lg-9 col-md-8 col-sm-9 col-xs-8"><a href="#">Запчасти для техники «АМКОДОР»</a></h4>
							<div class="specprod_list_item_image col-lg-3 col-md-4 col-sm-3 col-xs-4"><a href="#"><img class="img-responsive center-block" src="/assets/templates/skat_1.0.0/images/lesozag_tech.png"></a></div>
							<div class="specprod_list_item_description pull-right col-lg-9 col-md-8 col-sm-9 col-xs-8">
								<p class="specprod_list_item_description_wrapper">Специальное предложение от магазина запчастей для спец. техники компании «СКАТ».<br>Запчасти по старым ценам в нашем магазине.</p>
								<p class="specprod_list_item_description_cena"><strong>Цена по спецпредложению: </strong><strong class="red specprod_list_item_description_cena_speccena">ЗВОНИТЕ +7 (342) 270-00-10 доб. 2 - отдел запчастей</strong></p>
							</div>
						</div>
						<div class="specprod_list_item container-fluid">
							<h4 class="specprod_list_item_title pull-right col-lg-9 col-md-8 col-sm-9 col-xs-8"><a href="#">Запчасти для техники «АМКОДОР»</a></h4>
							<div class="specprod_list_item_image col-lg-3 col-md-4 col-sm-3 col-xs-4"><a href="#"><img class="img-responsive center-block" src="/assets/templates/skat_1.0.0/images/lesozag_tech.png"></a></div>
							<div class="specprod_list_item_description col-lg-9 col-md-8 col-sm-9 col-xs-8 pull-right">
								<p class="specprod_list_item_description_wrapper">Специальное предложение от магазина запчастей для спец. техники компании «СКАТ».<br>Запчасти по старым ценам в нашем магазине.</p>
								<p class="specprod_list_item_description_cena"><strong>Цена по спецпредложению: </strong><strong class="red specprod_list_item_description_cena_speccena">ЗВОНИТЕ +7 (342) 270-00-10 доб. 2 - отдел запчастей</strong></p>
							</div>
						</div>
						<div class="specprod_list_item container-fluid">
							<h4 class="specprod_list_item_title pull-right col-lg-9 col-md-8 col-sm-9 col-xs-8"><a href="#">Запчасти для техники «АМКОДОР»</a></h4>
							<div class="specprod_list_item_image col-lg-3 col-md-4 col-sm-3 col-xs-4"><a href="#"><img class="img-responsive center-block" src="/assets/templates/skat_1.0.0/images/lesozag_tech.png"></a></div>
							<div class="specprod_list_item_description pull-right col-lg-9 col-md-8 col-sm-9 col-xs-8">
								<p class="specprod_list_item_description_wrapper">Специальное предложение от магазина запчастей для спец. техники компании «СКАТ».<br>Запчасти по старым ценам в нашем магазине.</p>
								<p class="specprod_list_item_description_cena"><strong>Цена по спецпредложению: </strong><strong class="red specprod_list_item_description_cena_speccena">ЗВОНИТЕ +7 (342) 270-00-10 доб. 2 - отдел запчастей</strong></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="home-news container-fluid">
			<!--.row(data-parallax="scroll" data-image-src="/assets/templates/skat_1.0.0/images/skat_okulova.jpg" data-speed="0.2")-->
			<div class="row jaralax" style="background-image: url('/assets/templates/skat_1.0.0/images/predlogeniya.jpg');" data-jarallax="{&quot;speed&quot;: 0.2}">
				<div class="container">
					<h3 class="text-center text-uppercase section_h2 mb-30 mt-30 title-line-white">Новости компании</h3>
					<div class="clearfix home-news-wrapper">
						<article class="container-fluid home-news-item">
							<div class="row">
								<div class="col-lg-9 col-md-8 col-sm-9 col-xs-8 pull-right home-news-item-title">
									<h4><a href="#">Тяжелый сельскохозяйственный трактор «АМКОДОР 5300» на выставке «БелАгро-2017»</a></h4>
								</div>
								<div class="col-lg-3 col-md-4 col-sm-3 col-xs-4 home-news-item-image"><a href="#" style="background-image: url('/assets/images/item_news_001.jpg');"></a></div>
								<div class="col-lg-9 col-md-8 col-sm-9 col-xs-8 pull-right home-news-item-description">
									<p>Самая главная премьера выставки  тракторная премьера выставки «БелАгро-2017» – тяжелый сельскохозяйственный «Амкодор 5300». Публике машина демонстрируется впервые. Новое здесь абсолютно все, начиная собственно с жанра.</p>
								</div>
							</div>
						</article>
						<article class="container-fluid home-news-item">
							<div class="row">
								<div class="col-lg-9 col-md-8 col-sm-9 col-xs-8 pull-right home-news-item-title">
									<h4><a href="#">«Стройкомплекс регионов России 2015» г. Пермь</a></h4>
								</div>
								<div class="col-lg-3 col-md-4 col-sm-3 col-xs-4 home-news-item-image"><a href="#" style="background-image: url('/assets/images/item_news_003.jpg');"></a></div>
								<div class="col-lg-9 col-md-8 col-sm-9 col-xs-8 pull-right home-news-item-description">
									<p>16 мая 2015 года завершилась 21-я международная специализированная строительная выставка современных технологий и оборудования для стройиндустрии, дорожно-строительной техники, инженерных сетей, а также строительных и отделочных материалов – «Стройкомплекс регионов России 2015», проходившая на территории выставочного комплекса «Пермская ярмарка» в г. Перми.</p>
								</div>
							</div>
						</article>
						<article class="container-fluid home-news-item">
							<div class="row">
								<div class="col-lg-9 col-md-8 col-sm-9 col-xs-8 pull-right home-news-item-title">
									<h4><a href="#">АНО «ПОИКК» представляет новую рабочую специальность</a></h4>
								</div>
								<div class="col-lg-3 col-md-4 col-sm-3 col-xs-4 home-news-item-image"><a href="#" style="background-image: url('/assets/images/item_news_002.jpg');"></a></div>
								<div class="col-lg-9 col-md-8 col-sm-9 col-xs-8 pull-right home-news-item-description">
									<p>Автономная некоммерческая образовательная организация «Пермский открытый институт конверсии кадров» представляет новую перспективную рабочую специальность «Машинист лесопромышленного комплекса»</p>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
		<div class="section_home_partners container-fluid">
			<div class="row">
				<div class="container">
					<h3 class="section_h2 text-center text-uppercase title-line-black">Наши партнёры</h3>
					<div class="row">
						<div class="container-fluid">
							<div class="slick-partners slick-slider">
								<div class="slick-partners-item"><a class="slick-partners-item-link" href="#" style="background-image: url('/assets/templates/skat_1.0.0/images/partners/carcade_partner.jpg')"><span class="hidden">Партнёр</span></a></div>
								<div class="slick-partners-item"><a class="slick-partners-item-link" href="#" style="background-image: url('/assets/templates/skat_1.0.0/images/partners/peco_lising_partner.jpg')"><span class="hidden">Партнёр</span></a></div>
								<div class="slick-partners-item"><a class="slick-partners-item-link" href="#" style="background-image: url('/assets/templates/skat_1.0.0/images/partners/raflizing_partner.jpg')"><span class="hidden">Партнёр</span></a></div>
								<div class="slick-partners-item"><a class="slick-partners-item-link" href="#" style="background-image: url('/assets/templates/skat_1.0.0/images/partners/rosselhozbank_partner.jpg')"><span class="hidden">Партнёр</span></a></div>
								<div class="slick-partners-item"><a class="slick-partners-item-link" href="#" style="background-image: url('/assets/templates/skat_1.0.0/images/partners/siemens_partner.jpg')"><span class="hidden">Партнёр</span></a></div>
								<div class="slick-partners-item"><a class="slick-partners-item-link" href="#" style="background-image: url('/assets/templates/skat_1.0.0/images/partners/uralsib_partner.jpg')"><span class="hidden">Партнёр</span></a></div>
								<div class="slick-partners-item"><a class="slick-partners-item-link" href="#" style="background-image: url('/assets/templates/skat_1.0.0/images/partners/vtb_partner.jpg')"><span class="hidden">Партнёр</span></a></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<section class="container-fluid map-home">
			<div class="row">
				<div class="container">
					<h3 class="section_h2 text-center text-uppercase mb-30 mt-30 title-line-black">Как к нам проехать</h3>
				</div>
			</div>
			<div class="row embed-responsive data-map">
				<div class="embed-responsive-item" id="map" data-latitude="58.011835" data-longitude="56.204424" data-title="ООО «Скат»" data-addr="ООО+«Скат»,+улица+Окулова,+75,+корпус 8,+Пермь,+Пермский+край,+Россия,+614990" data-address="614990, г. Пермь, ул. Окулова 75, корпус 8" data-duration="ПН — ПТ с 9.00 до 18.00" data-phone="+7 (342) 270-00-10" data-marker="/assets/images/marker.png" data-animation="2"></div>
			</div>
		</section>
		<!--script(async src="//jsfiddle.net/ProjectSoft/81syzjo3/embed/result,html,css/")-->
		<footer class="footer container-fluid">
			<div class="row">
				<div class="container">
					<div class="row footer-wrapper mt-35">
						<div class="col-lg-4 col-md-4 footer-wrapper-left"><span><a href=""><img class="img-respomsive" src="/assets/templates/skat_1.0.0/images/logotip.png"><span>ООО «СКАТ»</span></a></span></div>
						<div class="col-lg-4 col-md-4 footer-wrapper-center text-center">614990, г. Пермь, ул. Окулова 75, корпус 8<br>+7 (342) 270-00-10</div>
						<div class="col-lg-4 col-md-4 footer-wrapper-right"><a class="btn btn-zayavka text-uppercase techic" href="#">Заявка на технику</a><a class="btn btn-zayavka text-uppercase zapchast" href="#">Заявка на запчасти</a></div>
						<div class="col-xs-12 footer-wrapper-copyright text-center clearfix">
							<ul class="copyright-menu mt-20">
								<li><a href="#">Контакты</a></li>
								<li><a href="#">Написать нам</a></li>
								<li><a href="#">Карта сайта</a></li>
							</ul>
							<div class="copyright-wrapper"><span>Все права защищены<br>ООО «СКАТ» © 1991 — 2017</span></div>
						</div>
					</div>
				</div>
			</div>
		</footer>
		<script src="<?=getFileTime('/assets/templates/skat_1.0.0/js/app.js');?>"></script>
		<script src="<?=getFileTime('/assets/templates/skat_1.0.0/js/hypher.js');?>"></script>
		<script src="<?=getFileTime('/assets/templates/skat_1.0.0/js/main.js');?>"></script>
	</body>
</html>