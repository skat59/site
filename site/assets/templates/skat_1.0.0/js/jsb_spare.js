$(function(){
	var table = $("#table-jcb tbody tr"),
		$tch = $("#spare-jcb--count"),
		ti = 0
		list = {},
		$list = $([]),
		modal = null,
		parseForm = function(f){
			var $form = $(f),
				$l = $("ol.sparejcb_skat--list", f),
				$tr = $("#table-jcb tbody tr.select"),
				txt = [];
			$("li", $l).unbind('click');
			$l.empty();
			$.each($tr, function(a, b){
				var $this = $(b),
					d = $this.data();
				$l.append(
					$("<li></li>", {
						class: "zakaz--list--item"
					}).append(
						$('<span class="zakaz--list--item--title"></span>').text(d.full),
						$('<span class="zakaz--list--item--remove psicon-x-circle"></span>')
					).data({
						target: $this
					})
				);
				txt.push({
					"article": d.article,
					"name": d.name,
					"proizvod": d.proizvod,
					"full": d.full
				});
			});
			$("textarea#sparejcb_all", f).text(JSON.stringify(txt));
			ti = $("#table-jcb tbody tr.select").length;
			$tch.attr({"data-count" : ti}).data({count: ti});
			if(!$tr.length){
				$form.unbind('submit');
				$.arcticmodal("close");
				modal = null;
				return !1;
			}
			$("li", $l).on('click', '.zakaz--list--item--remove', listItemEvent);
			return !1;
		},
		listItemEvent = function(e){
			e.preventDefault();
			var f = $(this).closest('form'),
				$li = $(e.delegateTarget),
				$l = $("ol.sparejcb_skat--list", f),
				data = $li.data(),
				$tr = $(data.target),
				$p = $('.btn-plus', $tr),
				$m = $('.btn-minus', $tr);
			$("li", $l).unbind('click');
			$tr.removeClass('select');
			$p.removeAttr('disabled');
			$m.attr({
				disabled: 'disabled'
			});
			parseForm(f);
			return !1;
		},
		submitForm = function(e){
			e.preventDefault();
			var $tr = $("#table-jcb tbody tr.select"),
				_this = this,
				$form = $(_this),
				$l = $("ol.sparejcb_skat--list", _this);
			if(!$tr.length){
				$form.unbind("submit");
				$("li", $l).unbind('click');
				$l.empty();
				$.arcticmodal("close");
				modal = null;
				return !1;
			}
			var formData = new FormData(_this);
			$.ajax({
				url: window.location.origin + window.location.pathname,
				data: formData,
				processData: !1,
				contentType: !1,
				type: "POST",
				dataType: "JSON",
				success: function(a) {
					var c = $(a.forms.spare);
					$(_this).unbind("submit", submitForm);
					var formReplacer = $(".form_replacer", modal);
					formReplacer.empty().append(c.clone());
					$("#sparejcb_skat").empty().append(c.clone());
					var form = $("form", modal);
					if(form.length){
						form.bind("submit", submitForm);
						$("input[name=phone]", form).mask("+7(999)999-99-99");
						parseForm(form);
						return !1;
					}else{
						$.each($tr, function(a, b){
							var $b = $(b),
								$m = $(".btn-minus", b),
								$p = $(".btn-plus", b);
							$b.removeClass('select').data({
								select: false
							});
							$p.removeAttr('disabled');
							$m.attr({
								disabled: 'disabled'
							});
						});
						$(".spare-jcb").addClass("reaply");
						ti = $("#table-jcb tbody tr.select").length;
						$tch.attr({"data-count" : ti}).data({count: ti});
					}
				},
				error: function(a, b, c) {
					console.log(a, b, c)
				}
			});
			return !1;
		};
	$tch.attr({"data-count" : ti}).data({count: ti});
	
	$.each(table, function(a, b){
		var $_tds = $("td", b),
			$b = $(b),
			article = $.trim($($_tds[0]).text().replace(/&shy;|&#8203;|\xad|\u200B/gm, "").replace(/\s+/gm, " ")),
			name = $.trim($($_tds[1]).text().replace(/&shy;|&#8203;|\xad|\u200B/gm, "").replace(/\s+/gm, " ")),
			proizvod = $.trim($($_tds[2]).text().replace(/&shy;|&#8203;|\xad|\u200B/gm, "").replace(/\s+/gm, " ")),
			full = article + " " + name,
			search = full.toLowerCase(),
			id = (a+1) + "_jcb__" + article,
			select = false,
			ob = {
				id: id,
				article 	: article,
				name 		: name,
				proizvod 	: proizvod,
				full 		: full + " " + proizvod,
				search 		: search,
				select		: select
			};
		ti = parseInt($tch.data().count);
		var obtn = $.extend({}, ob, {target: $b});
		$("button.btn-minus", $_tds[2]).data({target: $b});
		$("button.btn-plus", $_tds[2]).data({target: $b});
		$(b).data(obtn);
		$($_tds[1]).text(name + " (" + proizvod + ")");
		$tch.attr({"data-count" : ti}).data({count: ti});
	});

	$("#search-jcb").keyup(function(){
		/* search */
		var _this = this,
			val = $.trim($(_this).val().toLowerCase().replace(/\s+/gm, " "));
		$.each(table, function() {
			var val_text = $(this).data().search;
			if(val_text.indexOf(val) === -1) {
				$(this).hide();
			} else {
				$(this).show();				
			}
		});
	});

	table.on('click', 'button', function(e){
		/* Добавить/Удалить */
		e.preventDefault();
		var $this = $(this),
			$tr = $this.data('target'),
			data = $tr.data(),
			$p = $('.btn-plus', $tr),
			$m = $('.btn-minus', $tr);
		if(data.select == false){
			$tr.addClass('select').data({'select': true});
			$m.removeAttr('disabled');
			$p.attr({'disabled': 'disabled'});
		}else{
			$tr.removeClass('select').data({'select': false});
			$p.removeAttr('disabled');
			$m.attr({'disabled': 'disabled'});
		}
		ti = $("#table-jcb tbody tr.select").length;
		$tch.attr({"data-count" : ti}).data({count: ti});
		return !1;
	});

	$tch.on('click', function(e){
		/* Подготавливаем данные к отправке */
		e.preventDefault();
		var $tr = $("#table-jcb tbody tr.select");
		if($tr.length) {
			var modalBlock = $("#sparejcb_skat").html(),
				modalBox = $('<div class="box-modal form-modal"><div class="form_replacer"></div></div>'),
				formReplacer = $(".form_replacer", modalBox).append(modalBlock);
			modalBox.prepend('<div class="box-modal_close arcticmodal-close"></div>');
			modal = $.arcticmodal({
					content: modalBox
				}),
				f = $("form", modal);
			f.on("submit", submitForm);
			parseForm(f);
		}
		return !1;
	});
});