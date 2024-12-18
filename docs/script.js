function baSlider(e) {
    if ($(e)[0]) {
        let t = $(e);
        t.each(function() {
            let e = $(this).width() + "px";
            $(this).find(".resize img").css({
                width: e
            }), drags($(this).find(".divider"), $(this).find(".resize"), $(this))
        }), $(window).on("resize", function() {
            let e = t.width() + "px";
            t.find(".resize img").css({
                width: e
            })
        })
    }
}

function drags(e, t, s) {
    let n = !1;
    window.addEventListener("touchstart", function() {
        n = !0
    }), window.addEventListener("touchend", function() {
        n = !1
    }), e.on("mousedown touchstart", function(i) {
        e.addClass("draggable"), t.addClass("resizable");
        let o = i.pageX ? i.pageX : i.originalEvent.touches[0].pageX,
            a = e.outerWidth(),
            d = e.offset().left + a - o,
            l = s.offset().left,
            c = s.outerWidth(),
            r = l,
            u = l + c - a;
        e.parents().on("mousemove touchmove", function(e) {
            !1 === n && e.preventDefault();
            let s = (e.pageX ? e.pageX : e.originalEvent.touches[0].pageX) + d - a;
            s < r ? s = r : s > u && (s = u);
            let i = 100 * (s + a / 2 - l) / c + "%";
            $(".draggable").css("left", i).on("mouseup touchend touchcancel", function() {
                $(this).removeClass("draggable"), t.removeClass("resizable")
            }), $(".resizable").css("width", i)
        }).on("mouseup touchend touchcancel", function() {
            e.removeClass("draggable"), t.removeClass("resizable")
        })
    }).on("mouseup touchend touchcancel", function(s) {
        e.removeClass("draggable"), t.removeClass("resizable")
    })
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item-slide");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
}