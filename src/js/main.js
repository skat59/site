function getOffsetRect(a) {
    var b = a.getBoundingClientRect(),
        c = document.body,
        d = document.documentElement,
        e = window.pageYOffset || d.scrollTop || c.scrollTop,
        f = window.pageXOffset || d.scrollLeft || c.scrollLeft,
        g = d.clientTop || c.clientTop || 0,
        h = d.clientLeft || c.clientLeft || 0,
        i = b.top + e - g,
        j = b.left + f - h;
    return {
        top: Math.round(i),
        left: Math.round(j)
    }
}

function initTooltips(a) {
    $(a).tooltip().on("click focus", function(a) {
        $(this).tooltip("hide")
    })
}

var swipe = !1,
    $body = $("BODY");

$(function() {
        $("*[data-jarallax]").jarallax({
            speed: .2
        })
    }),
    function(a) {
        1 == a.cookie("pixelskat", Number) ? a(".pixelskat").removeClass("policy") : a(".pixelskat").addClass("policy"), a(".pixelskat").on("click", ".pixelskat-wrapper-close, .police-close", function(b) {
            return b.preventDefault(), a.cookie("pixelskat", "1", {
                expires: 7,
                path: "/"
            }), a(".pixelskat").removeClass("policy"), !1
        })
    }(jQuery),
    function(a) {
        a(".mixit").each(function() {
            var b, c, d = a(this),
                e = a(".mixit-container", d),
                f = a(".select-filter", d),
                g = "name";
            e.length && f.length && (b = mixitup(e[0], {
                classNames: {
                    delineatorElement: "_",
                    delineatorModifier: " "
                }
            }), c = f.on("change", function(c) {
                c.preventDefault();
                var d = a(this).val();
                return g = "name" == g ? "alias" : "name", b.multimix({
                    filter: d,
                    sort: g + ":asc"
                }), !1
            }).val(), b.multimix({
                filter: c,
                sort: g + ":asc"
            }))
        })
    }(jQuery),
    $(function() {
        $(".slick-partners").slick({
            dots: !1,
            arrows: !0,
            infinite: !0,
            autoplay: !0,
            autoplaySpeed: 1500,
            cssEase: "ease-out",
            easing: "easeInOutBounce",
            swipeToSlide: !0,
            nextArrow: '<span class="glyphicon glyphicon-menu-right slick-arrow slick-right" role="button" type="button"></span>',
            prevArrow: '<span class="glyphicon glyphicon-menu-left slick-arrow slick-left" role="button" type="button"></span>',
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }]
        }),
        $(".slick-proizvoditel").slick({
            dots: !1,
            arrows: !1,
            infinite: !0,
            autoplay: !0,
            autoplaySpeed: 1500,
            cssEase: "ease-out",
            easing: "easeInOutBounce",
            swipeToSlide: !0,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }]
        }),
        $(".slickphotos").each(function() {
            var a = $(".photos-slick", this),
                b = $(".photos-slick-arrows", this);
            a.slick({
                nextArrow: '<span class="glyphicon glyphicon-menu-right slick-arrow slick-right" role="button" type="button"></span>',
                prevArrow: '<span class="glyphicon glyphicon-menu-left slick-arrow slick-left" role="button" type="button"></span>',
                appendArrows: b,
                arrows: !0,
                infinite: !1,
                centerPadding: "60px",
                slidesToShow: 3,
                dots: !1,
                responsive: [{
                    breakpoint: 992,
                    settings: {
                        infinite: !1,
                        centerPadding: "40px",
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        infinite: !1,
                        centerPadding: "40px",
                        slidesToShow: 1
                    }
                }]
            }).on("beforeChange", function(a, b, c, d) {
                swipe = !0
            }).on("afterChange", function(a, b, c, d) {
                swipe = !1
            })
        })
    }),
    $(function() {
        var a = ($body[0], window.scrollY);
        $(window).on("scroll resize", function(b) {
            a = window.scrollY
        }).trigger("scroll");
        var b = $(".dropdown-toggle");
        b.on("mouseenter", function(a) {
            window.innerWidth > 767 && $(this).dropdown("toggle")
        }), $(".dropdown").on("mouseleave", function(a) {
            window.innerWidth > 767 && $(">a", $(this)).dropdown("toggle")
        }).on("show.bs.dropdown", function(a) {
            if (window.innerWidth < 768) {
                var b = getOffsetRect(this);
                window.scrollTo(0, b.top)
            }
        }), $(".dropdown-menu li").on("click", function() {
            $(".dropdown").unbind("mouseleave show.bs.dropdown"), b.unbind("mouseenter"), setTimeout(function() {
                $(this).closest(".dropdown").dropdown("toggle")
            }, 10)
        }), $(".docsert *[data-fancybox], .photos *[data-fancybox]").fancybox();
        var c = $(".photos-slick *[data-fancybox]");
        c.on("click", function(a) {
            return a.preventDefault(), swipe || $.fancybox.open(c, {}, c.index(this)), !1
        })
    }),
    $(function() {
        $(".home-news-item-description *, .specprod_list_item_description_wrapper, table .value2 *, table .value3 *, table .name2 *").hyphenate("ru"), $("table td, table th, table td *, table th *").hyphenate("ru")
    }),
    $(function() {
        setTimeout(function() {
            if (window.slider_data && window.slider_data.length) {
                var a = null,
                    b = null,
                    c = 0,
                    d = 0,
                    e = 0,
                    f = 0,
                    g = function() {
                        clearTimeout(a), e < d - 1 ? ++e : e = 0, b.removeClass("active"), $(b[e]).addClass("active"), a = setTimeout(g, 5e3)
                    },
                    h = function(a) {
                        if (++f, "load" == a.type) {
                            var b = c ? "" : " active";
                            c = 1, $(".slick-data").append($("<div>", {
                                class: "slick-data-item" + b
                            }).attr({
                                style: "background-image: url('" + $(this).attr("src") + "');"
                            }))
                        }
                        i()
                    },
                    i = function() {
                        f > 0 && f == window.slider_data.length && ($(".slick-data").show(), b = $(".slick-data-item", $(".slick-data")), d = b.length, a = setTimeout(g, 5e3))
                    };
                $(".slick-data").hide(), $.each(window.slider_data, function(a, b) {
                    $("<img />", {
                        src: b
                    }).on("load", h).on("error", h)
                })
            }
        }, 1500)
    }),
    $(function() {
        $(".sidebar").on("click", function() {
            $("html").removeClass("open_sidebar"), $body.css({
                marginRight: 0
            }).removeClass("sidebar_open"), $(".sidebar .sidebar-wrapper").stop().animate({
                "z-index": 6
            }, 300, function() {
                $(".sidebar .sidebar-wrapper").stop().animate({
                    left: "-310px"
                }, 200), $(".sidebar").stop().animate({
                    opacity: 0
                }, 200, function() {
                    $(".sidebar").css({
                        right: "100%"
                    })
                })
            })
        }),
        $(".buttonMenu").on("click", function() {
            var a = $body.outerWidth(!0);
            $("html").addClass("open_sidebar");
            var b = $body.outerWidth(!0),
                c = b - a;
            a != b && $body.css({
                marginRight: c + "px"
            }), $(".sidebar-wrapper-nav nav").scrollTop(0), $(".sidebar").stop().css({
                opacity: 0,
                right: "0%"
            }).animate({
                opacity: 1
            }, 200, function() {
                $(".sidebar .sidebar-wrapper").stop().animate({
                    left: "0px",
                    "z-index": 1
                }, 200, function() {
                    $body.addClass("sidebar_open")
                })
            })
        })
    }),
    $(function() {
        var a = 0,
            b = function(b) {
                $("*[placeholder]", $body).unbind("focus blur").on("focus", function(a) {
                    $(this).data({
                        placeholder: $(this).attr("placeholder")
                    }).attr({
                        placeholder: ""
                    })
                }).on("blur", function(a) {
                    $(this).attr({
                        placeholder: $(this).data("placeholder")
                    })
                }), $(".form-group", b).each(function() {
                    ++a;
                    var b = $("label", this),
                        c = b.attr("for"),
                        d = $("#" + c, this),
                        e = "for_id_" + a;
                    b.attr({
                        for: e
                    }), d.attr({
                        id: e
                    })
                })
            };
        $(".techic").on("click", function(a) {
            a.preventDefault();
            var c = $("#zayavka_render").html(),
                d = $('<div class="box-modal form-modal"><div class="form_replacer"></div></div>'),
                e = $(".form_replacer", d);
            e.append(c), d.prepend('<div class="box-modal_close arcticmodal-close"></div>');
            var f = $.arcticmodal({
                    content: d
                }),
                g = function(a) {
                    a.preventDefault();
                    var c = new FormData(this);
                    return $.ajax({
                        url: window.location.origin + window.location.pathname,
                        data: c,
                        processData: !1,
                        contentType: !1,
                        type: "POST",
                        dataType: "JSON",
                        success: function(a) {
                            var c = $(a.forms.zayavka);
                            $("form", f).unbind("submit", g), e.empty().append(c.clone()), $("#zayavka_render").empty().append(c.clone()), b($("form", f)), $("form", f).bind("submit", g), $("input[name=phone]", f).mask("+7(999)999-99-99")
                        },
                        error: function(a, b, c) {
                            console.log(a, b, c)
                        }
                    }), !1
                };
            return b($("form", f)), $("form", f).bind("submit", g), $("input[name=phone]", f).mask("+7(999)999-99-99"), !1
        }),
        $(".technic_btn").on("click", function(a) {
            a.preventDefault();
            var c = $("#technic_render").html(),
                d = $('<div class="box-modal form-modal"><div class="form_replacer"></div></div>'),
                e = $(".form_replacer", d);
            e.append(c), d.prepend('<div class="box-modal_close arcticmodal-close"></div>');
            var f = $.arcticmodal({
                    content: d
                }),
                g = function(a) {
                    a.preventDefault();
                    var c = new FormData(this);
                    return $.ajax({
                        url: window.location.origin + window.location.pathname,
                        data: c,
                        processData: !1,
                        contentType: !1,
                        type: "POST",
                        dataType: "JSON",
                        success: function(a) {
                            var c = $(a.forms.technic);
                            $("form", f).unbind("submit", g), e.empty().append(c.clone()), $("#technic_render").empty().append(c.clone()), b($("form", f)), $("form", f).bind("submit", g), $("input[name=phone]", f).mask("+7(999)999-99-99")
                        },
                        error: function(a, b, c) {
                            console.log(a, b, c)
                        }
                    }), !1
                };
            return b($("form", f)), $("form", f).bind("submit", g), $("input[name=phone]", f).mask("+7(999)999-99-99"), !1
        }),
        $(".zapchast").on("click", function(a) {
            a.preventDefault();
            var c = $("#tehnic_render").html(),
                d = $('<div class="box-modal form-modal"><div class="form_replacer"></div></div>'),
                e = $(".form_replacer", d);
            e.append(c), d.prepend('<div class="box-modal_close arcticmodal-close"></div>');
            var f = $.arcticmodal({
                    content: d
                }),
                g = function(a) {
                    a.preventDefault();
                    var c = new FormData(this);
                    return $.ajax({
                        url: window.location.origin + window.location.pathname,
                        data: c,
                        processData: !1,
                        contentType: !1,
                        type: "POST",
                        dataType: "JSON",
                        success: function(a) {
                            var c = $(a.forms.zapchast);
                            $("form", f).unbind("submit", g), e.empty().append(c.clone()), $("#tehnic_render").empty().append(c.clone()), b($("form", f)), $("form", f).bind("submit", g), $("input[name=phone]", f).mask("+7(999)999-99-99")
                        },
                        error: function(a, b, c) {
                            console.log(a, b, c)
                        }
                    }), !1
                };
            return b($("form", f)), $("form", f).bind("submit", g), $("input[name=phone]", f).mask("+7(999)999-99-99"), !1
        }),
        $(".devbutton").click(function(a) {
            a.preventDefault();
            var c = $("#develop_render").html(),
                d = $('<div class="box-modal form-modal"><div class="form_replacer"></div></div>'),
                e = $(".form_replacer", d);
            e.append(c), d.prepend('<div class="box-modal_close arcticmodal-close"></div>');
            var f = $.arcticmodal({
                    content: d
                }),
                g = function(a) {
                    a.preventDefault();
                    var c = new FormData(this);
                    return $.ajax({
                        url: window.location.origin + window.location.pathname,
                        data: c,
                        processData: !1,
                        contentType: !1,
                        type: "POST",
                        dataType: "JSON",
                        success: function(a) {
                            var c = $(a.forms.develop);
                            $("form", f).unbind("submit", g), e.empty().append(c.clone()), $("#develop_render").empty().append(c.clone()), b($("form", f)), $("form", f).bind("submit", g), $("input[name=phone]", f).mask("+7(999)999-99-99")
                        },
                        error: function(a, b, c) {
                            console.log(a, b, c)
                        }
                    }), !1
                };
            return b($("form", f)), $("form", f).bind("submit", g), $("input[name=phone]", f).mask("+7(999)999-99-99"), !1
        }), b($body)
    }),
    $(function() {
        var a = $("#slogan");
        a.prepend($(".search", $("#fsearch"))), $(".search-icon", a).on("click", function(b) {
            var c = $(this);
            return b.preventDefault(), a.hasClass("open") ? (a.removeClass("open"), c.attr({
                title: "\u041f\u043e\u0438\u0441\u043a"
            })) : (a.addClass("open"), c.attr({
                title: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c"
            })), !1
        }).attr({
            title: "\u041f\u043e\u0438\u0441\u043a"
        })
    }),
    $(function() {
        $("#map").length && $("body").append($("<script><\/script>", {
            async: "",
            defer: "",
            src: "https://maps.googleapis.com/maps/api/js?key=" + window.googleKey + "&callback=initMapContact&libraries=places"
        }))
    }),
    $(function() {
        $(".formcallme").on("click", ".callme .callme-circle", function(a) {
            if ($D = $("body"), "hidden" != $D.css("overflow")) {
                $D.data("callmeOaverly", $D.css("overflow")), $D.data("callmeMargin", $D.css("marginRight"));
                var b = $D.outerWidth(!0);
                $D.css("overflow", "hidden");
                var c = $D.outerWidth(!0);
                c != b && $D.css("marginRight", c - b + "px")
            }
            $(a.delegateTarget).addClass("open"), setTimeout(function() {
                $(".formcallme input[name='phone']").mask("+7(999)999-99-99").focus()
            }, 10)
        }).on("click", ".overlay, .custom-close", function(a) {
            $(a.delegateTarget).removeClass("open"), setTimeout(function() {
                $(".formcallme").focus()
            }, 5), $("body").css("overflow", $("body").data("callmeOaverly")).css("marginRight", $("body").data("callmeMargin"))
        }),
        $(document).on("submit", ".formcallme form", function(a) {
            a.preventDefault();
            var b = $(".formcallme"),
                c = new FormData(this);
            return $.ajax({
                url: window.location.origin + window.location.pathname,
                data: c,
                processData: !1,
                contentType: !1,
                type: "POST",
                dataType: "JSON",
                success: function(a) {
                    var c = $(a.forms.callme),
                        d = $("#message_form_success", c),
                        e = $("#callme-message ul", c);
                    return d.length ? (confirmDialog("", d.clone().wrap("<div>").parent().html(), "success", !1, {
                        text: "\u0414\u0430",
                        callback: function() {
                            $("body").css("overflow", $("body").data("callmeOaverly")).css("marginRight", $("body").data("callmeMargin"))
                        }
                    }), b.remove()) : e.length ? confirmDialog("\u041e\u0448\u0438\u0431\u043a\u0430", e.clone().wrap("<div>").parent().html(), "error") : (confirmDialog("\u041e\u0448\u0438\u0431\u043a\u0430", "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430.<br>\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.", "error"), console.log(a.forms)), !1
                },
                error: function(a, b, c) {
                    confirmDialog("\u041e\u0448\u0438\u0431\u043a\u0430", "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430.<br>\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.", "error"), console.log(a, b, c)
                }
            }), !1
        })
    }),
    window.confirmDialog = function(a, b, c, d, e) {
        var f = $('<div class="confirmDialog">\t\t\t\t\t<div class="overlay"></div>\t\t\t\t\t<div class="confirm" role="alertdialog">\t\t\t\t\t\t<div class="confirm-title">\t\t\t\t\t\t\t<div class="title"></div>\t\t\t\t\t\t\t<div class="close sk-close" role="button"></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="confirm-message"></div>\t\t\t\t\t\t<div class="confirm-buttons">\t\t\t\t\t</div>\t\t\t\t</div>'),
            g = $(".confirm-title .title", f),
            h = $(".confirm-message", f),
            i = $(".confirm-buttons", f),
            j = function() {
                f.remove(), $("body").css("overflow", $("body").data("confirmOaverly")).css("marginRight", $("body").data("confirmMargin")), $(window).unbind("keydown", o)
            },
            k = function() {
                j(), "object" == typeof e && "function" == typeof e.callback && e.callback()
            },
            l = function() {
                j(), "object" == typeof d && "function" == typeof d.callback && d.callback()
            },
            m = $("<button />", {
                class: "btn btn-blue btn-confirm",
                role: "button",
                type: "button",
                text: "\u0414\u0430"
            }).on("click", k),
            n = $("<button />", {
                class: "btn btn-blue btn-confirm",
                role: "button",
                type: "button",
                text: "\u041d\u0435\u0442"
            }).on("click", l),
            o = ($(".close", f).on("click", l), $(".overlay", f).on("click", l), function(a) {
                if (9 == a.keyCode) return a.preventDefault(), m.is(":focus") && n.is(":focus") ? m.focus() : m.is(":focus") ? n.is(":focus") || n.focus() : m.focus(), !1
            });
        "string" == typeof c && f.addClass(c), "string" == typeof a && g.text(a), "string" == typeof b && h.html(b), "object" == typeof e && ("string" == typeof e.text && m.text(e.text), i.append(m)), i.append(m), "object" == typeof d && ("string" == typeof d.text && n.text(d.text), i.append(n)),
            function() {
                var a = $("body");
                a.data("confirmOaverly", a.css("overflow")), a.data("confirmMargin", a.css("marginRight"));
                var b = a.outerWidth(!0);
                a.css("overflow", "hidden");
                var c = a.outerWidth(!0);
                c != b && a.css("marginRight", c - b + "px"), $("body").append(f), setTimeout(function() {
                    m.focus(), $(window).bind("keydown", o)
                }, 10)
            }()
    },
    function(a) {
        function b(b) {
            var c = document.createElement("input");
            c.type = "text", c.value = b, document.body.appendChild(c), a(c).css({
                opacity: "0px",
                position: "fixed",
                top: "0px",
                left: "0px"
            }), c.focus(), c.select();
            try {
                document.execCommand("copy") ? (a("#modalTitle").empty().text("\u0423\u0441\u043f\u0435\u0448\u043d\u043e"), a("#modalContent").empty().html(b + "<br><br>\u041a\u043e\u0440\u043e\u0442\u043a\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430."), setTimeout(function() {
                    a("#copyLink").modal("hide")
                }, 4e3)) : (a("#modalTitle").empty().text("\u041e\u0448\u0438\u0431\u043a\u0430"), a("#modalContent").empty().html("\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430.<br>\u0421\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443:<br>" + b))
            } catch (c) {
                a("#modalTitle").empty().text("\u041e\u0448\u0438\u0431\u043a\u0430"), a("#modalContent").empty().html("\u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430.<br>\u0421\u043a\u043e\u043f\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443:<br>" + b)
            }
            document.body.removeChild(c), a("#copyLink").modal("show")
        }

        function c(c) {
            if (!navigator.clipboard) return void b(c);
            navigator.clipboard.writeText(c).then(function() {
                a("#modalTitle").empty().text("\u0423\u0441\u043f\u0435\u0448\u043d\u043e"), a("#modalContent").empty().html(c + "<br><br>\u041a\u043e\u0440\u043e\u0442\u043a\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430."), a("#copyLink").modal("show"), setTimeout(function() {
                    a("#copyLink").modal("hide")
                }, 4e3)
            }, function(a) {
                b(c)
            })
        }
        initTooltips("*[data-toggle=tooltip]"),
        a(document).on("click", ".footer-links-user .links--panel-list li i", function(b) {
            var d = a(b.currentTarget);
            if (d.blur().trigger("blur"), d.closest("li").blur().trigger("blur"), !d.hasClass("ic-shool-ico-07")) {
                b.preventDefault();
                var e, f = d.attr("data-icon"),
                    g = a("head meta[name=short_link]").attr("content"),
                    h = encodeURIComponent(g),
                    i = encodeURIComponent(a("head meta[name=longtitle]").attr("content")),
                    j = encodeURIComponent(a("head meta[name=description]").attr("content")),
                    k = encodeURIComponent(a("head meta[itemprop=image]").attr("content")),
                    l = a("head meta[name=description]").attr("content");
                switch (d.blur(), f) {
                    case "1":
                        c(g);
                        break;
                    case "2":
                        e = "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=" + h;
                        break;
                    case "3":
                        e = "https://vk.com/share.php?url=" + h + "&title=" + i + "&image=" + k + "&description=" + j;
                        break;
                    case "4":
                        l = l.replace(/\s+/gm, " ").slice(0, 250), e = "https://twitter.com/intent/tweet?url=" + h + "&text=" + encodeURIComponent(l);
                        break;
                    case "5":
                        e = "http://www.facebook.com/sharer.php?s=100&p[url]=" + h + "&p[images][0]=" + k + "&p[title]=" + i + "&p[summary]=" + j;
                        break;
                    default:
                        return !1
                }
                return e && window.open(e, "rdext", "width=1200,height=500,status=no,toolbar=no,menubar=no"), !1
            }
        }),
        a(".ic-shool-ico-01").click(function(b) {
            a(this).closest(".font-icons-toggle").toggleClass("open")
        }),
        a("#copyLink").on("show.bs.modal", function(a) {})
    }(jQuery),
    window.initMapContact = function() {
        $(function() {
            var a = $("#map");
            if (a.on("contextmenu", function(a) {
                    return a.preventDefault(), !1
                }), a.length) {
                var b = {
                        latitude: 0,
                        longitude: 0,
                        marker: !1,
                        addr: !1,
                        address: !1,
                        duration: !1,
                        phone: !1,
                        title: "Info Window",
                        zoom: 15,
                        animation: 0
                    },
                    c = $.extend({}, b, a.data()),
                    d = (c.zoom, c.latlng),
                    e = !1,
                    f = function(a) {
                        return a.preventDefault(), infoWindow.close(), e && setTimeout(function() {
                            window.open(e)
                        }, 100), !1
                    },
                    g = c.phone.replace(/[\s()-]/g, ""),
                    h = c.address ? "<dt>\u0410\u0434\u0440\u0435\u0441:</dt><dd>" + c.address + "</dd>" : "",
                    i = c.duration ? "<dt>\u0420\u0435\u0436\u0438\u043c \u0440\u0430\u0431\u043e\u0442\u044b:</dt><dd>" + c.duration + "</dd>" : "",
                    j = c.phone ? '<dt>\u0422\u0435\u043b\u0435\u0444\u043e\u043d:</dt><dd><a href="tel:' + g + '">' + c.phone + "</a></dd>" : "";
                new google.maps.LatLng(0, 0);
                htmlInfo = "", infoContent = $(function() {
                    var a = '<div class="page-contact-detail-infowindow"><h5 class="page-contact-detail-infowindow-title">';
                    return a += c.title, a += '</h5><div class="page-contact-detail-infowindow-content"><dl>', a += h + i + j, a += "</dl>", a += '<span class="page-contact-detail-infowindow-content-link">\u041f\u0440\u043e\u043b\u043e\u0436\u0438\u0442\u044c \u043c\u0430\u0440\u0448\u0440\u0443\u0442</span>', a += "</div></div>", $(a)
                }()).on("click", ".page-contact-detail-infowindow-content-link", f).on("contextmenu", function(a) {
                    return a.preventDefault(), !1
                })[0],
                ControlGetDirections = function(a, b, c) {
                    var d = $("<div />", {
                            class: "page-contact-detail-control-ui-wrapper navigate"
                        }),
                        e = $("<span />", {
                            class: "page-contact-detail-control-ui-link navigate-link"
                        }).css({
                            "text-decoration": "none",
                            color: "#3a84df"
                        }).attr({
                            title: "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443<br>\u041f\u0440\u043e\u043b\u043e\u0436\u0438\u0442\u044c \u043c\u0430\u0440\u0448\u0440\u0443\u0442",
                            "data-toggle": "tooltip",
                            "data-container": "body",
                            "data-html": "true"
                        }).append('<div class="icon navigate-icon"></div>');
                    $(".icon", e).css({
                        "background-image": "url(https://maps.gstatic.com/mapfiles/embed/images/entity11.png)",
                        "background-size": "70px 210px",
                        "background-position": "0px 0px",
                        width: "22px",
                        height: "22px",
                        overflow: "hidden",
                        margin: "0 auto"
                    }), c && ($(a).append(d.append(e)), initTooltips(e))
                },
                zz = 3,
                map = new google.maps.Map(document.getElementById("map"), {
                    zoom: zz,
                    center: d
                }),
                markerOptions = c.marker ? {
                    icon: c.marker,
                    title: c.title
                } : {
                    title: c.title
                },
                marker = new google.maps.Marker(markerOptions), infoWindow = new google.maps.InfoWindow({
                    content: infoContent
                }),
                controlContainer = $("<span />", {
                    class: "page-contact-detail-control-ui place-card"
                }).on("click", f),
                controlUI = null,
                setLL = 0,
                ii = 0,
                geocoder = new google.maps.Geocoder,
                initDefaultMarker = function() {
                    setTimeout(function() {
                        marker.setAnimation(0);
                        var a = new google.maps.LatLng(d.lat, d.lng);
                        map.panTo(a), marker.setPosition(a), marker.setAnimation(c.animation), marker.setMap(map), map.setZoom(c.zoom), map.setClickableIcons(!1), google.maps.event.addListener(marker, "click", function() {
                            infoWindow.open(map, marker)
                        }), google.maps.event.addListener(map, "resize", function() {
                            clearTimeout(setLL), setLL = setTimeout(function() {
                                var a = new google.maps.LatLng(d.lat, d.lng);
                                map.panTo(a)
                            }, 10)
                        }), $(window).on("resize", function() {
                            clearTimeout(setLL), setLL = setTimeout(function() {
                                var a = new google.maps.LatLng(d.lat, d.lng);
                                map.panTo(a)
                            }, 100)
                        })
                    }, 50)
                },
                setTimeout(function() {
                    geocoder.geocode({
                        address: c.addr
                    }, function(a, b) {
                        initDefaultMarker(), map.controls[google.maps.ControlPosition.TOP_LEFT].push(controlContainer[0]), map.addListener("click", function(a) {
                            infoWindow.close()
                        });
                        var c = function(a, b) {
                                "OK" == b && (e = a.url, controlUI = new ControlGetDirections(controlContainer, map, e))
                            },
                            d = {
                                placeId: "ChIJPyJWDhbH6EMRYJb8jPTrJ-g",
                                fields: ["address_component", "adr_address", "formatted_address", "geometry", "icon", "name", "permanently_closed", "photo", "place_id", "plus_code", "type", "url", "utc_offset", "vicinity"]
                            };
                        new google.maps.places.PlacesService(map).getDetails(d, c)
                    })
                }, 50)
            }
        })
    };