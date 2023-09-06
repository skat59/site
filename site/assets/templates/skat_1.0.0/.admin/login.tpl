<!DOCTYPE html>
<html>
<head>
	<title>[(site_name)] (Evolution CMS Manager Login)</title>
	<meta http-equiv="content-type" content="text/html; charset=[+modx_charset+]" />
	<meta name="robots" content="noindex, nofollow" />
	<meta name="viewport" content="width=device-width">
	<link rel="icon" type="image/ico" href="[+favicon+]" />
	<link rel="stylesheet" type="text/css" href="media/style/[(manager_theme)]/style.css" />
	<style>
		html, body { min-height: 100%; height: 100%; }
		html body,
		html body.dark {
			background-position: 50% 50% !important;
			background-size: cover !important;
			background-repeat: no-repeat !important;
			background-color: black !important;
			background-image: url("/assets/templates/skat_1.0.0/images/evo.jpg") !important;
		}
		@keyframes ani-loginbox {
			0% {
				opacity: 1;
				visibility: show;
				transform: translateY(0);
			}
			99% {
				opacity: 0;
				visibility: show;
				transform: translateY(30px);
			}
			100% {
				opacity: 0;
				visibility: hidden;
				transform: translateY(30px);
			}
		}
		@-webkit-keyframes ani-loginbox {
			0% {
				opacity: 1;
				visibility: show;
				transform: translateY(0);
			}
			99% {
				opacity: 0;
				visibility: show;
				transform: translateY(30px);
			}
			100% {
				opacity: 0;
				visibility: hidden;
				transform: translateY(30px);
			}
		}
		
		@keyframes anim-loginbox {
			0% {
				opacity: 0;
				visibility: hidden;
				transform: translateY(30px);
			}
			1% {
				opacity: 0;
				visibility: show;
				transform: translateY(30px);
			}
			100% {
				opacity: 1;
				visibility: show;
				transform: translateY(0);
			}
		}
		@-webkit-keyframes anim-loginbox {
			0% {
				opacity: 0;
				visibility: hidden;
				transform: translateY(30px);
			}
			1% {
				opacity: 0;
				visibility: show;
				transform: translateY(30px);
			}
			100% {
				opacity: 1;
				transform: translateY(0);
			}
		}

		.page { height: 100%; padding-top: 0px; }
		.loginbox { width: 90%; max-width: 25rem; margin: 0 auto; position: relative; top: calc((100% - 314px) / 2);z-index: 100;}
		.copyrights {user-select: none; position: absolute; left: 0; right: 0; bottom: 0; padding: .5rem 1rem; font-size: .675rem; color: #aaa; text-align: right }
		.copyrights a { color: #777 }
		#submitButton { float: right; }
		#FMP-email_label { color: #818a91 }
		#FMP-email { margin-bottom: 1rem }
		#FMP-email_button { float: right; }
		label, .logo, .caption, .caption + p, #ForgotManagerPassword-show_form {user-select: none;}
		/* mainloader */
		#mainloader { position: absolute; z-index: 50000; top: 0; left: 0; width: 100%; height: 100%; text-align: center; vertical-align: middle; padding: 15% 0 0 0; background-color: rgba(255, 255, 255, 0.64); opacity: 0; visibility: hidden; -webkit-transition-duration: 0.3s; transition-duration: 0.3s }
		#mainloader.show { opacity: 0.75; visibility: visible; -webkit-transition-duration: 0.1s; transition-duration: 0.1s }
		#mainloader::before { content: ""; display: block; position: absolute; z-index: 1; left: 50%; top: 30%; width: 120px; height: 120px; margin: -60px 0 0 -60px; border-radius: 50%; animation: rotate 2s linear infinite; box-shadow: 5px 5px 0 0 rgb(234, 132, 82), 14px -7px 0 0 rgba(111, 163, 219, 0.7), -7px 11px 0 0 rgba(112, 193, 92, 0.74), -11px -7px 0 0 rgba(147, 205, 99, 0.78); }
		@keyframes rotate {
			to { transform: rotate(360deg) }
			}
		.loginLicense {
			position: absolute;
			left: 5px;
			right: 5px;
			top: 7px;
			margin-bottom: 0;
			font-size: .675rem;
			color: #aaa;
			user-select: none;
			text-align: center;
			z-index: 1;
		}
		.loginLicense p {
			margin-bottom: 0px;
		}
		.loginLicense p + p {
			margin-top: 5px;
		}
		.loginLicense a {
			color: #fff;
		}
		.loginbox.show {
			-webkit-animation-name: anim-loginbox;
			-webkit-animation-duration: .5s;
			-webkit-animation-iteration-count: 1;
			-webkit-animation-timing-function: ease;
			-webkit-animation-fill-mode: forwards;
			-moz-animation-name: anim-loginbox;
			-moz-animation-duration: .5s;
			-moz-animation-iteration-count: 1;
			-moz-animation-timing-function: ease;
			-moz-animation-fill-mode: forwards;
			animation-name: anim-loginbox;
			animation-duration: .5s;
			animation-iteration-count: 1;
			animation-timing-function: ease;
			animation-fill-mode: forwards;
		}
		.loginbox.hiden {
			-webkit-animation-name: ani-loginbox;
			-webkit-animation-duration: .3s;
			-webkit-animation-iteration-count: 1;
			-webkit-animation-timing-function: ease;
			-webkit-animation-fill-mode: forwards;
			-moz-animation-name: ani-loginbox;
			-moz-animation-duration: .3s;
			-moz-animation-iteration-count: 1;
			-moz-animation-timing-function: ease;
			-moz-animation-fill-mode: forwards;
			animation-name: ani-loginbox;
			animation-duration: .3s;
			animation-iteration-count: 1;
			animation-timing-function: ease;
			animation-fill-mode: forwards;
		}
	</style>
</head>
<body class="white">
<div class="page">
	<div class="loginLicense">
		<p>[+pa+]Разработка и продвижение сайта: <a href="https://studionions.ru/">ProjectSoft & STUDIONIONS</a> &copy; 2010-[+GetYear+]</p>
		<p>[(site_name)] [+company_copyright+]</p>
	</div>
	<div id="loginbox" class="tab-page loginbox hide">
		<form method="post" name="loginfrm" id="loginfrm" class="container container-body" action="processors/login.processor.php">
			[+OnManagerLoginFormPrerender+]
			<div class="form-group text-center">
				<a class="logo" href="../" title="Перейти на сайт [(site_name)]">
					<img src="/assets/templates/skat_1.0.0/images/loginlogo.png" alt="[(site_name)]" id="logo" />
				</a>
			</div>
			<div class="form-group">
				<label for="username" class="text-muted">[+username+]</label>
				<input type="text" class="form-control" name="username" id="username" tabindex="1" value="[+uid+]" />
			</div>
			<div class="form-group">
				<label for="password" class="text-muted">[+password+]</label>
				<input type="password" class="form-control" name="password" id="password" tabindex="2" value="" />
			</div>
			<div class="clearfix">
				<div class="caption">[+login_captcha_message+]</div>
				<p>[+captcha_image+]</p>
				[+captcha_input+]
			</div>
			<div class="form-group">
				<label for="rememberme" class="text-muted">
					<input type="checkbox" id="rememberme" name="rememberme" value="1" class="checkbox" [+remember_me+] /> [+remember_username+]</label>
				<button type="submit" name="submitButton" class="btn btn-success float-xs-right" id="submitButton">[+login_button+]</button>
			</div>
			[+OnManagerLoginFormRender+]
		</form>
	</div>
	<div class="copyrights">
		<div class="gpl">&copy; 2005-[+GetYear+] by the <a href="http://evo.im/" target="_blank">EVO</a>. <strong>EVO</strong>&trade; is licensed under the GPL.</div>
	</div>
</div>
<div id="mainloader"></div>
<script type="text/javascript">
	/* <![CDATA[ */
	if(window.frames.length) {
		window.location = self.document.location;
	}
	var form = document.loginfrm;
	if(form.username.value !== '') {
		form.password.focus()
	} else {
		form.username.focus()
	}
	form.onsubmit = function(e) {
		document.getElementById('mainloader').classList.add('show');
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'processors/login.processor.php', true);
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
		xhr.onload = function() {
			if(this.readyState === 4) {
				var header = this.response.substr(0, 9);
				if(header.toLowerCase() === 'location:') {
					window.location = this.response.substr(10);
				} else {
					var cimg = document.getElementById('captcha_image');
					if(cimg) cimg.src = 'includes/veriword.php?rand=' + Math.random();
					document.getElementById('mainloader').classList.remove('show');
					alert(this.response);
				}
			}
		};
		xhr.send('ajax=1&username=' + encodeURIComponent(form.username.value) + '&password=' + encodeURIComponent(form.password.value) + (form.captcha_code ? '&captcha_code=' + encodeURIComponent(form.captcha_code.value) : '') + '&rememberme=' + form.rememberme.value);
		e.preventDefault();
	}
	document.onkeydown = function(e){
		if(e.altKey && e.ctrlKey && e.keyCode==83){
			e.preventDefault();
			var lf = document.getElementById("loginbox");
			lf.classList.contains("hide") && lf.classList.remove("hide");
			lf.classList.contains("show") ? (lf.classList.add("hiden"), lf.classList.remove("show")) : (lf.classList.remove("hiden"), lf.classList.add("show"));
			return !1;
		}
	}
	/* ]]> */
</script>
</body>
</html>