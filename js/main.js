/*  ---------------------------------------------------
    Template Name: Male Fashion
    Description: Male Fashion - ecommerce teplate
    Author: Colorib
    Author URI: https://www.colorib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.filter__controls li').on('click', function () {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.product__filter').length > 0) {
            var containerEl = document.querySelector('.product__filter');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Search Switch
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    /*-----------------------
        Hero Slider
    ------------------------*/
    $(".hero__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='arrow_left'><span/>", "<span class='arrow_right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false
    });

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*-------------------
		Radio Btn
	--------------------- */
    $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").on('click', function () {
        $(".product__color__select label, .shop__sidebar__size label, .product__details__option__size label").removeClass('active');
        $(this).addClass('active');
    });

    /*-------------------
		Scroll
	--------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#0d0d0d",
        cursorwidth: "5px",
        background: "#e5e5e5",
        cursorborder: "",
        autohidemode: true,
        horizrailenabled: false
    });

    /*------------------
        CountDown
    --------------------*/
    // For demo preview start
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end


    // Uncomment below and use your date //

    /* var timerdate = "2020/12/30" */

    // $("#countdown").countdown(timerdate, function (event) {
    //     $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hours</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Seconds</p> </div>"));
    // });
    function getLastDayOfMonth(year, month) {
        return new Date(year, month + 1, 0, 23, 59, 59); // Last day at 23:59:59
    }
    
    function startMonthlyCountdown() {
        const now = new Date();
        let endOfMonth = getLastDayOfMonth(now.getFullYear(), now.getMonth());
    
        $('#countdown').countdown(endOfMonth, function (event) {
            $(this).html(event.strftime(
                "<div class='cd-item'><span>%D</span> <p>Days</p> </div>" +
                "<div class='cd-item'><span>%H</span> <p>Hours</p> </div>" +
                "<div class='cd-item'><span>%M</span> <p>Minutes</p> </div>" +
                "<div class='cd-item'><span>%S</span> <p>Seconds</p> </div>"
            ));
        }).on('finish.countdown', function () {
            // Restart the countdown with the last date of the next month
            const next = new Date();
            const nextMonth = getLastDayOfMonth(next.getFullYear(), next.getMonth() + 1);
            startMonthlyCountdown(); // Recursive call to restart
        });
    }
    
    // Start the first countdown
    startMonthlyCountdown();
    
    /*------------------
		Magnific
	--------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="fa fa-angle-up dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-down inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    var proQty = $('.pro-qty-2');
    proQty.prepend('<span class="fa fa-angle-left dec qtybtn"></span>');
    proQty.append('<span class="fa fa-angle-right inc qtybtn"></span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    /*------------------
        Achieve Counter
    --------------------*/
    $('.cn_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);


document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.add-cart');

    buttons.forEach(function (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault();

        // Find parent product container
        const productText = button.closest('.product__item__text');
        if (!productText) return;

        const name = productText.querySelector('.product-name')?.innerText.trim();
        const price = productText.querySelector('.product-price')?.innerText.replace(/[^\d.]/g, ''); // ₹740.48 → 740.48

        const phone = '919207889321'; 
        const message = `Hi, I'm interested in buying ${name} for ₹${price}`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');
      });
    });
  });



 // Live search in shop
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearch");
  const productCards = document.querySelectorAll(".col-lg-4");
  const noResultsMessage = document.getElementById("noResults");

  searchInput.addEventListener("input", function () {
    const keyword = searchInput.value.trim().toLowerCase();
    let matchFound = false;

    productCards.forEach(card => {
      const nameEl = card.querySelector(".product-name");
      if (!nameEl) return;

      const productName = nameEl.textContent.toLowerCase();

      if (productName.includes(keyword)) {
        card.style.display = "block";
        matchFound = true;
      } else {
        card.style.display = "none";
      }
    });

    // Show/hide no-results message
    noResultsMessage.style.display = matchFound ? "none" : "block";
  });

  // Clear search
  clearBtn.addEventListener("click", function () {
    searchInput.value = "";
    productCards.forEach(card => {
      card.style.display = "block";
    });
    noResultsMessage.style.display = "none";
  });




// product pagination in shop

  const productsPerPage = 6;
  const allProductCards = document.querySelectorAll("#productList .col-lg-4");
  const totalProducts = allProductCards.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  let currentPage = 1;

  const prevBtn = document.getElementById("prevPage");
  const nextBtn = document.getElementById("nextPage");
  const pageIndicator = document.getElementById("pageIndicator");

  function showPage(page) {
    // Hide all products
    allProductCards.forEach((card) => {
      card.style.display = "none";
    });

    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;

    allProductCards.forEach((card, index) => {
      if (index >= start && index < end) {
        card.style.display = "block";
      }
    });

    // Update pagination UI
    pageIndicator.textContent = `Page ${page} of ${totalPages}`;
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages;
  }

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  // Initialize pagination on first load
  showPage(currentPage);
