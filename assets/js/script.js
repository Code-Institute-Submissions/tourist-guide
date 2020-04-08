$(document).ready(function () {
      $(".menu-icon").on("click", function () {
            $("nav ul").toggleClass("showing");
      });
});

// Scrolling Effect

$(window).on("scroll", function () {
      if ($(window).scrollTop()) {
            $('nav').addClass('black');
      } else {
            $('nav').removeClass('black');
      }
})

/*garelly */
$(function () {
      var btn = $(".slider__btn");

      btn.on("click", function () {
            $(".slider__item").first().clone().appendTo(".slider");
            $(".slider__image").first().css({
                  transform: "rotateX(-180deg)",
                  opacity: 0
            });
            setTimeout(function () {
                  $(".slider__item").first().remove();
            }, 200);
      });
});
/* email */
(function () {
      emailjs.init("user_PfKdr4g0Xy587kbdqzLqb");
})();
/*google translate */
function googleTranslateElementInit() {
      new google.translate.TranslateElement({
            pageLanguage: 'en'
      }, 'google_translate_element');
}
/*small scroll */
//scroll to the map
window.smoothScroll = function (target) {
      var scrollContainer = target;
      do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
      } while (scrollContainer.scrollTop == 0);

      var targetY = 0;
      do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
      } while (target = target.offsetParent);

      scroll = function (c, a, b, i) {
            i++;
            if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function () {
                  scroll(c, a, b, i);
            }, 20);
      }
      // start scrolling
      scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}