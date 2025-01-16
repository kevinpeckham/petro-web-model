

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Cartzilla | Bootstrap E-Commerce Template
 * Copyright 2021 Createx Studio
 * Theme core scripts
 *
 * @author Createx Studio
 * @version 2.0.0
 */
(function () {
  'use strict';
  /**
   * Enable sticky behaviour of navigation bar on page scroll
  */


  var stickyNavbar = function () {
    var navbar = document.querySelector('.navbar-sticky');
    if (navbar == null) return;
    var navbarClass = navbar.classList,
      navbarH = navbar.offsetHeight,
      scrollOffset = 500;
    window.addEventListener('scroll', function (e) {
      if (e.currentTarget.pageYOffset > scrollOffset) {
        document.body.style.paddingTop = navbarH + 'px';
        navbar.classList.add('navbar-stuck');
      } else {
        document.body.style.paddingTop = '';
        navbar.classList.remove('navbar-stuck');
      }
    });
  }();
  /**
   * Menu toggle for 3 level navbar stuck state
  */


  var stuckNavbarMenuToggle = function () {
    var toggler = document.querySelector('.navbar-stuck-toggler'),
      stuckMenu = document.querySelector('.navbar-stuck-menu');
    if (toggler == null) return;
    toggler.addEventListener('click', function (e) {
      stuckMenu.classList.toggle('show');
      e.preventDefault();
    });
  }();
  /**
   * Cascading (Masonry) grid layout
   *
   * @requires https://github.com/desandro/imagesloaded
   * @requires https://github.com/Vestride/Shuffle
  */


  var masonryGrid = function () {
    var grid = document.querySelectorAll('.masonry-grid'),
      masonry;
    if (grid === null) return;

    for (var i = 0; i < grid.length; i++) {
      masonry = new Shuffle(grid[i], {
        itemSelector: '.masonry-grid-item',
        sizer: '.masonry-grid-item'
      });
      imagesLoaded(grid[i]).on('progress', function () {
        masonry.layout();
      });
    }
  }();
  /**
   * Toggling password visibility in password input
  */


  var passwordVisibilityToggle = function () {
    var elements = document.querySelectorAll('.password-toggle');

    var _loop = function _loop(i) {
      var passInput = elements[i].querySelector('.form-control'),
        passToggle = elements[i].querySelector('.password-toggle-btn');
      passToggle.addEventListener('click', function (e) {
        if (e.target.type !== 'checkbox') return;

        if (e.target.checked) {
          passInput.type = 'text';
        } else {
          passInput.type = 'password';
        }
      }, false);
    };

    for (var i = 0; i < elements.length; i++) {
      _loop(i);
    }
  }();
  /**
   * Custom file drag and drop area
  */


  var fileDropArea = function () {
    var fileArea = document.querySelectorAll('.file-drop-area');

    var _loop2 = function _loop2(i) {
      var input = fileArea[i].querySelector('.file-drop-input'),
        message = fileArea[i].querySelector('.file-drop-message'),
        icon = fileArea[i].querySelector('.file-drop-icon'),
        button = fileArea[i].querySelector('.file-drop-btn');
      button.addEventListener('click', function () {
        input.click();
      });
      input.addEventListener('change', function () {
        if (input.files && input.files[0]) {
          var reader = new FileReader();

          reader.onload = function (e) {
            var fileData = e.target.result;
            var fileName = input.files[0].name;
            message.innerHTML = fileName;

            if (fileData.startsWith('data:image')) {
              var image = new Image();
              image.src = fileData;

              image.onload = function () {
                icon.className = 'file-drop-preview img-thumbnail rounded';
                icon.innerHTML = '<img src="' + image.src + '" alt="' + fileName + '">';
              };
            } else if (fileData.startsWith('data:video')) {
              icon.innerHTML = '';
              icon.className = '';
              icon.className = 'file-drop-icon ci-video';
            } else {
              icon.innerHTML = '';
              icon.className = '';
              icon.className = 'file-drop-icon ci-document';
            }
          };

          reader.readAsDataURL(input.files[0]);
        }
      });
    };

    for (var i = 0; i < fileArea.length; i++) {
      _loop2(i);
    }
  }();
  /**
   * Form validation
  */


  var formValidation = function () {
    var selector = 'needs-validation';
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName(selector); // Loop over them and prevent submission

      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (e) {
          if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
          }

          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  }();
  /**
   * Anchor smooth scrolling
   * @requires https://github.com/cferdinandi/smooth-scroll/
  */


  var smoothScroll = function () {
    var selector = '[data-scroll]',
      fixedHeader = '[data-scroll-header]',
      scroll = new SmoothScroll(selector, {
        speed: 800,
        speedAsDuration: true,
        offset: 40,
        header: fixedHeader,
        updateURL: false
      });
  }();
  /**
   * Off-canvas toggler
  */


  var offcanvas = function () {
    var offcanvasTogglers = document.querySelectorAll('[data-bs-toggle="offcanvas"]'),
      offcanvasDismissers = document.querySelectorAll('[data-bs-dismiss="offcanvas"]'),
      offcanvas = document.querySelectorAll('.offcanvas'),
      docBody = document.body,
      fixedElements = document.querySelectorAll('[data-fixed-element]'),
      hasScrollbar = window.innerWidth > docBody.clientWidth; // Creating backdrop

    var backdrop = document.createElement('div');
    backdrop.classList.add('offcanvas-backdrop'); // Open off-canvas function

    var offcanvasOpen = function offcanvasOpen(offcanvasID, toggler) {
      docBody.appendChild(backdrop);
      setTimeout(function () {
        backdrop.classList.add('show');
      }, 20);
      document.querySelector(offcanvasID).classList.add('show');

      if (hasScrollbar) {
        docBody.style.paddingRight = '15px';

        if (fixedElements.length) {
          for (var i = 0; i < fixedElements.length; i++) {
            fixedElements[i].classList.add('right-15');
          }
        }
      }

      docBody.classList.add('offcanvas-open');
    }; // Close off-canvas function


    var offcanvasClose = function offcanvasClose() {
      for (var i = 0; i < offcanvas.length; i++) {
        offcanvas[i].classList.remove('show');
      }

      backdrop.classList.remove('show');
      setTimeout(function () {
        docBody.removeChild(backdrop);
      }, 50);

      if (hasScrollbar) {
        docBody.style.paddingRight = 0;

        if (fixedElements.length) {
          for (var _i = 0; _i < fixedElements.length; _i++) {
            fixedElements[_i].classList.remove('right-15');
          }
        }
      }

      docBody.classList.remove('offcanvas-open');
    }; // Open off-canvas event handler


    for (var i = 0; i < offcanvasTogglers.length; i++) {
      offcanvasTogglers[i].addEventListener('click', function (e) {
        e.preventDefault();
        offcanvasOpen(e.currentTarget.dataset.bsTarget, e.currentTarget);
      });
    } // Close off-canvas event handler


    for (var _i2 = 0; _i2 < offcanvasDismissers.length; _i2++) {
      offcanvasDismissers[_i2].addEventListener('click', function (e) {
        e.preventDefault();
        offcanvasClose();
      });
    } // Close off-canvas by clicking on backdrop


    document.addEventListener('click', function (e) {
      if (e.target.classList[0] === 'offcanvas-backdrop') {
        offcanvasClose();
      }
    });
  }();
  /**
   * Animate scroll to top button in/off view
  */


  var scrollTopButton = function () {
    var element = document.querySelector('.btn-scroll-top'),
      scrollOffset = 600;
    if (element == null) return;
    var offsetFromTop = parseInt(scrollOffset, 10);
    window.addEventListener('scroll', function (e) {
      if (e.currentTarget.pageYOffset > offsetFromTop) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    });
  }();
  /**
   * Tooltip
   * @requires https://getbootstrap.com
   * @requires https://popper.js.org/
  */


  var tooltip = function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl, {
        trigger: 'hover'
      });
    });
  }();
  /**
   * Popover
   * @requires https://getbootstrap.com
   * @requires https://popper.js.org/
  */


  var popover = function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      // console.log('line 330 ', popoverTriggerEl)
      return new bootstrap.Popover(popoverTriggerEl);
    });
  }();
  /**
   * Toast
   * @requires https://getbootstrap.com
  */


  var toast = function () {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'));
    var toastList = toastElList.map(function (toastEl) {
      return new bootstrap.Toast(toastEl);
    });
  }();
  /**
   * Disable dropdown autohide when select is clicked
  */


  var disableDropdownAutohide = function () {
    var elements = document.querySelectorAll('.disable-autohide .form-select');

    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', function (e) {
        e.stopPropagation();
      });
    }
  }();
  /**
   * Content carousel with extensive options to control behaviour and appearance
   * @requires https://github.com/ganlanyuan/tiny-slider
  */


  /**
   * Lightbox component for presenting various types of media
   * @requires https://github.com/sachinchoolur/lightgallery.js
  */



  /**
   * Shop product page gallery with thumbnails
   * @requires https://github.com/sachinchoolur/lightgallery.js
  */


  var productGallery = function () {
    var gallery = document.querySelectorAll('.product-gallery');

    if (gallery.length) {
      var _loop3 = function _loop3(i) {
        var thumbnails = gallery[i].querySelectorAll('.product-gallery-thumblist-item:not(.video-item)'),
          previews = gallery[i].querySelectorAll('.product-gallery-preview-item'),
          videos = gallery[i].querySelectorAll('.product-gallery-thumblist-item.video-item');

        for (var n = 0; n < thumbnails.length; n++) {
          thumbnails[n].addEventListener('click', changePreview);
        } // Changer preview function


        function changePreview(e) {
          e.preventDefault();

          for (var _i3 = 0; _i3 < thumbnails.length; _i3++) {
            previews[_i3].classList.remove('active');

            thumbnails[_i3].classList.remove('active');
          }

          this.classList.add('active');
          gallery[i].querySelector(this.getAttribute('href')).classList.add('active');
        } // Video thumbnail - open video in lightbox


        for (var m = 0; m < videos.length; m++) {
          lightGallery(videos[m], {
            selector: 'this',
            download: false,
            videojs: true,
            youtubePlayerParams: {
              modestbranding: 1,
              showinfo: 0,
              rel: 0,
              controls: 0
            },
            vimeoPlayerParams: {
              byline: 0,
              portrait: 0,
              color: 'fe696a'
            }
          });
        }
      };

      for (var i = 0; i < gallery.length; i++) {
        _loop3(i);
      }
    }
  }();
  /**
   * Image zoom on hover (used inside Product Gallery)
   * @requires https://github.com/imgix/drift
  */


  var imageZoom = function () {
    var images = document.querySelectorAll('.image-zoom');

    for (var i = 0; i < images.length; i++) {
      new Drift(images[i], {
        paneContainer: images[i].parentElement.querySelector('.image-zoom-pane')
      });
    }
  }();
  /**
   * Countdown timer
  */


  var countdown = function () {
    var coundown = document.querySelectorAll('.countdown');
    if (coundown == null) return;

    var _loop4 = function _loop4(i) {
      var endDate = coundown[i].dataset.countdown,
        daysVal = coundown[i].querySelector('.countdown-days .countdown-value'),
        hoursVal = coundown[i].querySelector('.countdown-hours .countdown-value'),
        minutesVal = coundown[i].querySelector('.countdown-minutes .countdown-value'),
        secondsVal = coundown[i].querySelector('.countdown-seconds .countdown-value'),
        days = void 0,
        hours = void 0,
        minutes = void 0,
        seconds = void 0;
      endDate = new Date(endDate).getTime();
      if (isNaN(endDate)) return {
        v: void 0
      };
      setInterval(calculate, 1000);

      function calculate() {
        var startDate = new Date().getTime();
        var timeRemaining = parseInt((endDate - startDate) / 1000);

        if (timeRemaining >= 0) {
          days = parseInt(timeRemaining / 86400);
          timeRemaining = timeRemaining % 86400;
          hours = parseInt(timeRemaining / 3600);
          timeRemaining = timeRemaining % 3600;
          minutes = parseInt(timeRemaining / 60);
          timeRemaining = timeRemaining % 60;
          seconds = parseInt(timeRemaining);

          if (daysVal != null) {
            daysVal.innerHTML = parseInt(days, 10);
          }

          if (hoursVal != null) {
            hoursVal.innerHTML = hours < 10 ? '0' + hours : hours;
          }

          if (minutesVal != null) {
            minutesVal.innerHTML = minutes < 10 ? '0' + minutes : minutes;
          }

          if (secondsVal != null) {
            secondsVal.innerHTML = seconds < 10 ? '0' + seconds : seconds;
          }
        } else {
          return;
        }
      }
    };

    for (var i = 0; i < coundown.length; i++) {
      var _ret = _loop4(i);

      if (_typeof(_ret) === "object") return _ret.v;
    }
  }();
  /**
   * Charts
   * @requires https://github.com/gionkunz/chartist-js
  */


  var charts = function () {
    var lineChart = document.querySelectorAll('[data-line-chart]'),
      barChart = document.querySelectorAll('[data-bar-chart]'),
      pieChart = document.querySelectorAll('[data-pie-chart]');

    var sum = function sum(a, b) {
      return a + b;
    };

    if (lineChart.length === 0 && barChart.length === 0 && pieChart.length === 0) return; // Create <style> tag and put it to <head> for changing colors of charts via data attributes

    var head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style'),
      css;
    head.appendChild(style); // Line chart

    for (var i = 0; i < lineChart.length; i++) {
      var data = JSON.parse(lineChart[i].dataset.lineChart),
        options = lineChart[i].dataset.options != undefined ? JSON.parse(lineChart[i].dataset.options) : '',
        seriesColor = lineChart[i].dataset.seriesColor,
        userColors = void 0;
      lineChart[i].classList.add('line-chart-' + i);

      if (seriesColor != undefined) {
        userColors = JSON.parse(seriesColor);

        for (var n = 0; n < userColors.colors.length; n++) {
          css = "\n          .line-chart-".concat(i, " .ct-series:nth-child(").concat(n + 1, ") .ct-line,\n          .line-chart-").concat(i, " .ct-series:nth-child(").concat(n + 1, ") .ct-point {\n            stroke: ").concat(userColors.colors[n], " !important;\n          }\n        ");
          style.appendChild(document.createTextNode(css));
        }
      }

      new Chartist.Line(lineChart[i], data, options);
    } // Bar chart


    for (var _i4 = 0; _i4 < barChart.length; _i4++) {
      var _data = JSON.parse(barChart[_i4].dataset.barChart),
        _options = barChart[_i4].dataset.options != undefined ? JSON.parse(barChart[_i4].dataset.options) : '',
        _seriesColor = barChart[_i4].dataset.seriesColor,
        _userColors = void 0;

      barChart[_i4].classList.add('bar-chart-' + _i4);

      if (_seriesColor != undefined) {
        _userColors = JSON.parse(_seriesColor);

        for (var _n = 0; _n < _userColors.colors.length; _n++) {
          css = "\n        .bar-chart-".concat(_i4, " .ct-series:nth-child(").concat(_n + 1, ") .ct-bar {\n            stroke: ").concat(_userColors.colors[_n], " !important;\n          }\n        ");
          style.appendChild(document.createTextNode(css));
        }
      }

      new Chartist.Bar(barChart[_i4], _data, _options);
    } // Pie chart


    var _loop5 = function _loop5(_i5) {
      var data = JSON.parse(pieChart[_i5].dataset.pieChart),
        seriesColor = pieChart[_i5].dataset.seriesColor,
        userColors = void 0;

      pieChart[_i5].classList.add('cz-pie-chart-' + _i5);

      if (seriesColor != undefined) {
        userColors = JSON.parse(seriesColor);

        for (var _n2 = 0; _n2 < userColors.colors.length; _n2++) {
          css = "\n        .cz-pie-chart-".concat(_i5, " .ct-series:nth-child(").concat(_n2 + 1, ") .ct-slice-pie {\n            fill: ").concat(userColors.colors[_n2], " !important;\n          }\n        ");
          style.appendChild(document.createTextNode(css));
        }
      }

      new Chartist.Pie(pieChart[_i5], data, {
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return Math.round(value / data.series.reduce(sum) * 100) + '%';
        }
      });
    };

    for (var _i5 = 0; _i5 < pieChart.length; _i5++) {
      _loop5(_i5);
    }
  }();
  /**
   * Open YouTube / Vimeo video in lightbox
   * @requires @requires https://github.com/sachinchoolur/lightgallery.js
  */


  // var videoButton = function () {

  // }();

  /**
   * Ajaxify MailChimp subscription form
  */


  var subscriptionForm = function () {
    var form = document.querySelectorAll('.subscription-form');
    if (form === null) return;

    var _loop6 = function _loop6(i) {
      var button = form[i].querySelector('button[type="submit"]'),
        buttonText = button.innerHTML,
        input = form[i].querySelector('.form-control'),
        antispam = form[i].querySelector('.subscription-form-antispam'),
        status = form[i].querySelector('.subscription-status');
      form[i].addEventListener('submit', function (e) {
        if (e) e.preventDefault();
        if (antispam.value !== '') return;
        register(this, button, input, buttonText, status);
      });
    };

    for (var i = 0; i < form.length; i++) {
      _loop6(i);
    }

    var register = function register(form, button, input, buttonText, status) {
      button.innerHTML = 'Sending...'; // Get url for MailChimp

      var url = form.action.replace('/post?', '/post-json?'); // Add form data to object

      var data = '&' + input.name + '=' + encodeURIComponent(input.value); // Create and add post script to the DOM

      var script = document.createElement('script');
      script.src = url + '&c=callback' + data;
      document.body.appendChild(script); // Callback function

      var callback = 'callback';

      window[callback] = function (response) {
        // Remove post script from the DOM
        delete window[callback];
        document.body.removeChild(script); // Change button text back to initial

        button.innerHTML = buttonText; // Display content and apply styling to response message conditionally

        if (response.result == 'success') {
          input.classList.remove('is-invalid');
          input.classList.add('is-valid');
          status.classList.remove('status-error');
          status.classList.add('status-success');
          status.innerHTML = response.msg;
          setTimeout(function () {
            input.classList.remove('is-valid');
            status.innerHTML = '';
            status.classList.remove('status-success');
          }, 6000);
        } else {
          input.classList.remove('is-valid');
          input.classList.add('is-invalid');
          status.classList.remove('status-success');
          status.classList.add('status-error');
          status.innerHTML = response.msg.substring(4);
          setTimeout(function () {
            input.classList.remove('is-invalid');
            status.innerHTML = '';
            status.classList.remove('status-error');
          }, 6000);
        }
      };
    };
  }();
  /**
   * Range slider
   * @requires https://github.com/leongersen/noUiSlider
  */


  var rangeSlider = function () {
    var rangeSliderWidget = document.querySelectorAll('.range-slider');

    var _loop7 = function _loop7(i) {
      var rangeSlider = rangeSliderWidget[i].querySelector('.range-slider-ui'),
        valueMinInput = rangeSliderWidget[i].querySelector('.range-slider-value-min'),
        valueMaxInput = rangeSliderWidget[i].querySelector('.range-slider-value-max');
      var options = {
        dataStartMin: parseInt(rangeSliderWidget[i].dataset.startMin, 10),
        dataStartMax: parseInt(rangeSliderWidget[i].dataset.startMax, 10),
        dataMin: parseInt(rangeSliderWidget[i].dataset.min, 10),
        dataMax: parseInt(rangeSliderWidget[i].dataset.max, 10),
        dataStep: parseInt(rangeSliderWidget[i].dataset.step, 10)
      };
      noUiSlider.create(rangeSlider, {
        start: [options.dataStartMin, options.dataStartMax],
        connect: true,
        step: options.dataStep,
        pips: {
          mode: 'count',
          values: 5
        },
        tooltips: true,
        range: {
          'min': options.dataMin,
          'max': options.dataMax
        },
        format: {
          to: function to(value) {
            return '$' + parseInt(value, 10);
          },
          from: function from(value) {
            return Number(value);
          }
        }
      });
      rangeSlider.noUiSlider.on('update', function (values, handle) {
        var value = values[handle];
        value = value.replace(/\D/g, '');

        if (handle) {
          valueMaxInput.value = Math.round(value);
        } else {
          valueMinInput.value = Math.round(value);
        }
      });
      valueMinInput.addEventListener('change', function () {
        rangeSlider.noUiSlider.set([this.value, null]);
      });
      valueMaxInput.addEventListener('change', function () {
        rangeSlider.noUiSlider.set([null, this.value]);
      });
    };

    for (var i = 0; i < rangeSliderWidget.length; i++) {
      _loop7(i);
    }
  }();
  /**
   * Filter list of items by typing in the search field
  */


  var filterList = function () {
    var filterListWidget = document.querySelectorAll('.widget-filter');

    var _loop8 = function _loop8(i) {
      var filterInput = filterListWidget[i].querySelector('.widget-filter-search'),
        filterList = filterListWidget[i].querySelector('.widget-filter-list'),
        filterItems = filterList.querySelectorAll('.widget-filter-item');

      if (!filterInput) {
        return "continue";
      }

      filterInput.addEventListener('keyup', filterListFunc);

      function filterListFunc() {
        var filterValue = filterInput.value.toLowerCase();

        for (var _i6 = 0; _i6 < filterItems.length; _i6++) {
          var filterText = filterItems[_i6].querySelector('.widget-filter-item-text').innerHTML;

          if (filterText.toLowerCase().indexOf(filterValue) > -1) {
            filterItems[_i6].classList.remove('d-none');
          } else {
            filterItems[_i6].classList.add('d-none');
          }
        }
      }
    };

    for (var i = 0; i < filterListWidget.length; i++) {
      var _ret2 = _loop8(i);

      if (_ret2 === "continue") continue;
    }
  }();
  /**
   * Data filtering (Comparison table)
  */


  var dataFilter = function () {
    var trigger = document.querySelector('[data-filter-trigger]'),
      target = document.querySelectorAll('[data-filter-target]');
    if (trigger === null) return;
    trigger.addEventListener('change', function () {
      var selected = this.options[this.selectedIndex].value.toLowerCase();

      if (selected === 'all') {
        for (var i = 0; i < target.length; i++) {
          target[i].classList.remove('d-none');
        }
      } else {
        for (var n = 0; n < target.length; n++) {
          target[n].classList.add('d-none');
        }

        document.querySelector('#' + selected).classList.remove('d-none');
      }
    });
  }();
  /**
   * Updated the text of the label when radio button changes (mainly for color options)
  */


  var labelUpdate = function () {
    var radioBtns = document.querySelectorAll('[data-bs-label]');

    for (var i = 0; i < radioBtns.length; i++) {
      radioBtns[i].addEventListener('change', function () {
        var target = this.dataset.bsLabel;

        try {
          document.getElementById(target).textContent = this.value;
        } catch (err) {
          if (err.message = "Cannot set property 'textContent' of null") {
            console.error('Make sure the [data-label] matches with the id of the target element you want to change text of!');
          }
        }
      });
    }
  }();
  /**
   * Change tabs with radio buttons
  */


  var radioTab = function () {
    var radioBtns = document.querySelectorAll('[data-bs-toggle="radioTab"]');

    for (var i = 0; i < radioBtns.length; i++) {
      radioBtns[i].addEventListener('click', function () {
        var target = this.dataset.bsTarget,
          parent = document.querySelector(this.dataset.bsParent),
          children = parent.querySelectorAll('.radio-tab-pane');
        children.forEach(function (element) {
          element.classList.remove('active');
        });
        document.querySelector(target).classList.add('active');
      });
    }
  }();
  /**
   * Change tabs with radio buttons
  */


  var creditCard = function () {
    var selector = document.querySelector('.credit-card-form');
    if (selector === null) return;
    var card = new Card({
      form: selector,
      container: '.credit-card-wrapper'
    });
  }();
  /**
   * Master checkbox that checkes / unchecks all target checkboxes at once
  */


  var masterCheckbox = function () {
    var masterCheckbox = document.querySelectorAll('[data-master-checkbox-for]');
    if (masterCheckbox.length === 0) return;

    for (var i = 0; i < masterCheckbox.length; i++) {
      masterCheckbox[i].addEventListener('change', function () {
        var targetWrapper = document.querySelector(this.dataset.masterCheckboxFor),
          targetCheckboxes = targetWrapper.querySelectorAll('input[type="checkbox"]');

        if (this.checked) {
          for (var n = 0; n < targetCheckboxes.length; n++) {
            targetCheckboxes[n].checked = true;

            if (targetCheckboxes[n].dataset.checkboxToggleClass) {
              document.querySelector(targetCheckboxes[n].dataset.target).classList.add(targetCheckboxes[n].dataset.checkboxToggleClass);
            }
          }
        } else {
          for (var m = 0; m < targetCheckboxes.length; m++) {
            targetCheckboxes[m].checked = false;

            if (targetCheckboxes[m].dataset.checkboxToggleClass) {
              document.querySelector(targetCheckboxes[m].dataset.target).classList.remove(targetCheckboxes[m].dataset.checkboxToggleClass);
            }
          }
        }
      });
    }
  }(); // enable list-view and grid-view buttons in toolbar


  var listViewToggle = function () {
    // identify elements
    var viewButtons = document.querySelectorAll('.view-buttons a');
    var listButton = viewButtons[1];
    var gridButton = viewButtons[0];
    var productsList = document.querySelector('.products-list .view'); // identify other button (than the one just clicked)

    var opposite = function opposite(active) {
      return active == viewButtons[0] ? viewButtons[1] : viewButtons[0];
    }; // toggle button styles


    var toggleButtonStyle = function toggleButtonStyle(active) {
      var _active$classList, _active$classList2, _inactive$classList, _inactive$classList2;

      var a = ['disabled', 'bg-light', 'opacity-100', 'text-dark'];
      var b = ['nav-link-light'];
      var inactive = opposite(active);

      (_active$classList = active.classList).add.apply(_active$classList, a);

      (_active$classList2 = active.classList).remove.apply(_active$classList2, b);

      (_inactive$classList = inactive.classList).remove.apply(_inactive$classList, a);

      (_inactive$classList2 = inactive.classList).add.apply(_inactive$classList2, b);
    }; // toggle view


    var toggleView = function toggleView(active) {
      var lv = 'list-view';
      var gv = 'grid-view';
      var active_class = active == listButton ? lv : gv;
      var inactive_class = active_class == lv ? gv : lv;
      productsList.classList.remove(inactive_class);
      productsList.classList.add(active_class);
    }; // function when button is pressed


    var onViewButtonPress = function onViewButtonPress(e) {
      var active = e.toElement;
      toggleButtonStyle(active);
      toggleView(active);
    }; // Add event listeners to buttons


    viewButtons.forEach(function (button) {
      return button.addEventListener('mousedown', onViewButtonPress);
    });
  }(); // progression map


  var progressionMap = function () {
    var map = document.querySelector('.map');

    if (map != undefined && map != null) {
      var mapstore = {}; // data

      mapstore.data = {};
      mapstore.data.sourceJSON = document.querySelector('.data').textContent;
      mapstore.data.source = JSON.parse(mapstore.data.sourceJSON);
      mapstore.data.settings = mapstore.data.source[0];
      mapstore.data.courses = mapstore.data.source[1];
      mapstore.data.disciplinesList = mapstore.data.settings.disciplinesList;
      mapstore.data.subcategoriesList = mapstore.data.settings.subcategoriesList;
      mapstore.data.levelsList = mapstore.data.settings.levels;
      mapstore.data.primaryDiscipline = mapstore.data.settings.primaryDiscipline; // html fragments

      mapstore.html = {};
      mapstore.html.levels = [];
      mapstore.html.allLevels = "";
      mapstore.html.headings = ""; // functions

      mapstore.functions = {
        buildColumns: function buildColumns(parent) {
          var columns = []; //add the first column

          columns.push('Level'); // iterate discipline and subcategory columns

          mapstore.data.disciplinesList.forEach(function (discipline) {
            if (discipline == ''); else if (discipline == mapstore.data.primaryDiscipline) {
              mapstore.data.subcategoriesList.forEach(function (sc) {
                columns.push(sc);
              });
            } else {
              columns.push(discipline);
            }
          }); // get number of used columns including level labels -- store in parent object

          parent.dataset.columnsCount = columns.length;
          var styleTemplate = "<style> .map {--columns: ".concat(columns.length, "} </style>");
          var head = document.querySelector('head');
          head.insertAdjacentHTML('beforeEnd', styleTemplate); // fill in the blank columns
          //for (let i = columns.length; i < 12; i++) {
          //columns.push('')
          //}

          mapstore.data.columns = columns;
        },
        buildUnderGrid: function buildUnderGrid() {
          // to create the under grid we clone the full map, empty it of content, adjust styling
          var gridColWidth = mapstore.data.columns.length;
          var columns = mapstore.data.columns;
          var disciplines = mapstore.data.disciplinesList;
          var headingColumns = mapstore.data.headingColumns;
          var subcategories = mapstore.data.subcategoriesList;
          var mapContainer = document.querySelector('.map-container');
          var map = document.querySelector('.progression-map');
          var clone = map.cloneNode(true); // style background for course headings

          var setHeadings = function setHeadings() {
            var disciplinesLength = disciplines.length;
            var headingColumnsLength = headingColumns.length;
            var subcategoriesLength = subcategories.length;
            var cloneHeadingsRow = clone.querySelector('.headings-row');
            cloneHeadingsRow.innerHTML = ''; // create columns fragment

            var cols = "";
            var cls = ''; // replace with styled background columns

            for (var i = 0; i < headingColumns.length; i++) {
              cls = 'col-1 bg-transparent border-transparent border-bottom-0 border-top-0';
              var first = disciplines.indexOf(headingColumns[i]) == 0 ? 'first-heading' : '';
              var last = disciplines.indexOf(headingColumns[i]) == disciplinesLength - 1 ? 'last-heading' : ''; // if first col or blank col

              if (i == 0 || headingColumns[i] == '') {
                cls = 'col-1 border-transparent';
              } // if primary
              else if (headingColumns[i] == mapstore.data.primaryDiscipline) {
                cls = "col-".concat(subcategoriesLength, " bg-map-primary border border-bottom-0 border-top-0 border-light ");
              } else {
                cls = "col-1 bg-map-default border border-bottom-0 border-top-0 border-light ".concat(first, " ").concat(last);
              } // if the column index corresponds to a discipline not a subcategory


              cols += "<div class=\"".concat(cls, "\"></div>");
            }

            cloneHeadingsRow.innerHTML = cols;
          };

          setHeadings(); // style background for course subheadings

          var setSubheadings = function setSubheadings() {
            var cloneSubheadingsRow = clone.querySelector('.subheadings-row');
            cloneSubheadingsRow.innerHTML = ''; // create columns fragment

            var cols = ""; // replace with styled background columns

            for (var i = 0; i < gridColWidth; i++) {
              //console.log(gridColWidth)
              //console.log(columns)
              //console.log(subcategories)
              //console.log(i)
              var cls = 'col-1 bg-transparent border border-top-0 border-transparent'; // if subcategory label should be blank

              if (i == 0 || columns[i] == '' || subcategories.indexOf(columns[i]) < 0) {
                cls = 'col-1 border border-top-0 border-transparent';
              } // if first subcategory
              else if (subcategories.indexOf(columns[i]) == 0) {
                cls = 'first-subcategory col-1 bg-map-highlight border border-top-0 border-light';
              } // if last subcategory
              else if (subcategories.indexOf(columns[i]) == subcategories.length - 1) {
                cls = 'last-subcategory col-1 bg-map-highlight border border-top-0 border-light';
              } else {
                cls = 'col-1 bg-map-highlight border border-top-0 border-light';
              } // if the column index corresponds to a discipline not a subcategory


              cols += "<div class=\"".concat(cls, "\"></div>");
            }

            cloneSubheadingsRow.innerHTML = cols;
          };

          setSubheadings(); // style background for course rows

          var setCourseRows = function setCourseRows() {
            var cloneCourseRows = clone.querySelectorAll('.map-course-row');
            cloneCourseRows.forEach(function (row) {
              // clear out existing columns & content
              row.innerHTML = ''; // create columns fragment

              var cols = ""; // replace with styled background columns

              for (var i = 0; i < gridColWidth; i++) {
                var cls = ''; // is discipline?
                // if (disciplines )
                // if first column

                if (i == 0) {
                  cls = 'col-1 map-level-heading';
                } // if first course column
                else if (i - 1 == 0) {
                  cls = 'col-1 bg-map-default first-course-column';
                } // if last course column
                else if (columns[i] != '' && (columns[i + 1] == null || columns[i + 1] == '' || columns[i + 1 == undefined] || i == columns.length - 1)) {
                  cls = 'col-1 bg-map-default last-course-column';
                } // if last column
                //else if (columns[i] == '') { cls = 'col-1'}
                // if a course column is a subcategory
                else if (subcategories.indexOf(columns[i]) >= 0) {
                  cls = 'col-1 bg-map-highlight';
                } else {
                  cls = 'col-1 bg-map-default';
                } // if the column index corresponds to a discipline not a subcategory


                cols += "<div class=\"".concat(cls, "\"></div>");
              }

              row.innerHTML = cols;
            });
          };

          setCourseRows();
          var template = "<div class=\"bg-transparent w-100 h-100 position-absolute map-background-layer\"> </div>";
          mapContainer.insertAdjacentHTML('afterBegin', template);
          var backgroundLayer = document.querySelector('.map-background-layer');
          backgroundLayer.appendChild(clone);
          backgroundLayer.style.pointerEvents = 'auto';
          backgroundLayer.style.zIndex = '-3'; // copy the whole map
        },
        assignIndexNumbersToCourses: function assignIndexNumbersToCourses() {
          var i = 0;
          mapstore.data.courses.forEach(function (course) {
            course.index = i;
            i++;
          });
        },
        assignColumnsToCourses: function assignColumnsToCourses() {
          // get columns data
          var columns = mapstore.data.columns; // create object property

          mapstore.data.courses.forEach(function (course) {
            return course.columns = [];
          }); // iterate through columns and add column data to each course

          columns.forEach(function (column) {
            var colIndex = columns.indexOf(column);

            if (column != '' && column != 'Level') {
              var results = mapstore.data.courses.filter(function (course) {
                return course.disciplines.indexOf(column) >= 0 || course.subcategories.indexOf(column) >= 0;
              });
              results.forEach(function (course) {
                course.columns.push(colIndex);
              });
            }
          });
        },
        getSubcategories: function getSubcategories() {
          var subcategories = [];
          mapstore.data.courses.forEach(function (item) {
            if (item.subcategories != null && item.subcategories != undefined && item.subcategories != '' && item.subcategories != []) {
              item.subcategories.forEach(function (s) {
                subcategories.push(s);
              });
            }
          });
          mapstore.data.subcategoriesList = _toConsumableArray(new Set(subcategories));
        },
        buildHeadings: function buildHeadings() {
          var disciplines = mapstore.data.disciplinesList;
          var primary = mapstore.data.primaryDiscipline;
          var subcategories = mapstore.data.subcategoriesList;
          var subLength = mapstore.data.subcategoriesList.length; // create array for heading columns and start with blank column

          mapstore.data.headingColumns = [''];
          disciplines.forEach(function (item) {
            mapstore.data.headingColumns.push(item);
          }); // Create string to fill with headings

          var headings = ""; // Iterate through headings and create columns

          mapstore.data.headingColumns.forEach(function (column) {
            // width
            var w = column == primary ? subLength : 1; // color

            var prime = column == primary ? ' primary-heading' : '';
            var first = column == disciplines[0] ? ' first-heading' : '';
            var last = column == disciplines[disciplines.length - 1] ? ' last-heading' : '';

            if (column == '' || column == 'Level') {
              headings += "\n      <div class=\"col-1 bg-transparent  border border-transparent map-headings\">\n      </div>  \n      ";
            } else {
              var edited = column.includes(' and ') ? "".concat(column.split(' and ')[0], " & ").concat(column.split(' and ')[1]) : column;
              edited = column.includes('/') ? "".concat(column.replace('/', ' / ')) : edited;
              headings += "\n        <div class=\"col-".concat(w, " bg-transparent  border border-transparent map-headings discipline-heading").concat(prime).concat(first).concat(last, "\" data-bs-container=\"body\" data-bs-toggle=\"popover\" data-bs-trigger=\"click\" data-bs-placement=\"top\" title=\"\" data-bs-html=\"true\" data-bs-content=\"<div class='fw-medium'>").concat(edited, "</div>\">\n        <div>\n        ").concat(edited, "</div>\n        </div>  \n        ");
            }
          }); // create row

          var rowHTML = "\n      <div class=\"g-0 row headings-row\">\n      ".concat(headings, "\n      </div>\n      ");
          mapstore.html.headings += rowHTML;
        },
        buildSubcategories: function buildSubcategories() {
          var subcategoriesList = mapstore.data.subcategoriesList;
          var subLength = subcategoriesList.length; // where in the list of disciplines is primary e.g. 1

          var primaryIndexInColumns = mapstore.data.disciplinesList.indexOf(mapstore.data.primaryDiscipline); // create array of subheadings

          var list = [''];

          for (var i = 0; i < primaryIndexInColumns; i++) {
            list.push('');
          }

          subcategoriesList.forEach(function (item) {
            list.push(item);
          }); //while (list.length < 12 ) { list.push('')};
          // create string

          var subcategories = ""; // iterate through subcategories and create columns

          list.forEach(function (sc) {
            var first = sc == subcategoriesList[0] ? ' first-subcategory' : '';
            var last = sc == subcategoriesList[subLength - 1] ? ' last-subcategory' : '';

            if (sc != '') {
              var edited = sc.includes(' and ') ? "".concat(sc.split(' and ')[0], " & ").concat(sc.split(' and ')[1]) : sc;
              edited = edited.replace("&", "and");
              edited = edited.replace(",", " ");
              edited = edited.replace(",", " ");
              edited = edited.replace("G-4", "G4");
              edited = edited.replace("-", " ");
              edited = edited.replace(".", " ");
              subcategories += "\n      <div class=\"col-1 border border-top-0 p-1 ps-2 border-transparent bg-transparent subcategory".concat(first).concat(last, "\" data-subheading=").concat(edited, " data-bs-container=\"body\" data-bs-toggle=\"popover\" data-bs-trigger=\"click\" data-bs-placement=\"top\" title=\"\" data-bs-html=\"true\" data-bs-content=\"<div class='fw-medium'>").concat(edited, "</div>\">\n      <div class=\"subcategory-heading\">\n      ").concat(sc, "\n      </div>\n      </div> ");
            } else {
              subcategories += "\n       <div class=\"col-1 border border-top-0 p-1 ps-2 border-transparent bg-transparent\">\n       \n       </div> ";
            }
          }); // create row

          var rowHTML = "\n    <div class=\"g-0 row subheadings-row\">\n    ".concat(subcategories, "\n    </div>\n     ");
          mapstore.html.headings += rowHTML;
        },
        buildCourseRow: function buildCourseRow(level, row) {
          var array = mapstore.data.courses;
          var tiles = ""; // find matching course data for each column

          mapstore.data.columns.forEach(function (column) {
            var columns = mapstore.data.columns;
            var colIndex = columns.indexOf(column);
            var courses = [];
            var course; // if it's a row label

            if (colIndex == 0 && row == 0 && column == 'Level') {
              tiles += "\n          <div class=\"col-1 text-truncate map-level-heading\">".concat(level, "</div>\n          ");
            } // if its the first column, but not the first row in level
            else if (colIndex == 0 && row != 0 && column == 'Level') {
              tiles += "\n          <div class=\"col-1 text-truncate text-uppercase\"></div>\n          ";
            } // if it's not the first column, but is a blank column
            else if (colIndex != 0 && column == '') {
              tiles += "\n         <div class=\"col-1 text-truncate text-uppercase\"></div>\n         ";
            } // if it's a column that might have data
            else if (colIndex != 0 && column != '' && column != 'Level') {
              // get course data
              courses = mapstore.data.courses.filter(function (c) {
                return c['level'] == level && c['columns'].indexOf(colIndex) >= 0 && c['rendered'] != true && c['columns'].length > 0;
              }); // use the first matching course, that is not marked 'lower priority'

              course = null; // if one is rendering use that one instead

              if (courses.length > 0) {
                courses.forEach(function (item) {
                  // take the first valid course in the set
                  if (course == null) {
                    course = item;
                  } // overide it if one if rendering


                  if (item.rendering == true) {
                    course = item;
                  }
                });
              } // if there is a course to place


              if (course != null) {
                var courseColumns = course['columns'];
                var cLength = courseColumns.length;
                var firstColumn = courseColumns[0];
                var lastColumn = courseColumns[cLength - 1]; // if course spans only one column

                if (cLength == 1 && colIndex == firstColumn) {
                  // create a course card
                  tiles += "\n                   ".concat(mapstore.functions.createCourseCard(course, row, colIndex), "\n                "); // mark course as rendered

                  course.rendered = true;
                  course.rendering = false;
                } // ** is rendering
                // if course spans many columns and is rendering and this is niether the first or last
                else if (cLength > 1 && course.rendering == true && colIndex != firstColumn && colIndex != lastColumn); // if course spans many columns and is rendering and this is the last
                else if (cLength > 1 && course.rendering == true && colIndex == lastColumn) {
                  // mark course as not rendered
                  course.rendered = true; // mark course as rendering

                  course.rendering = false;
                } // if course spans many columns and is not rendering and this is the first column
                else if (cLength > 1 && course.rendering != true && colIndex == firstColumn) {
                  // create a course card
                  tiles += "\n                   ".concat(mapstore.functions.createCourseCard(course, row, colIndex), "\n                "); // mark course as rendering

                  course.rendered = false;
                  course.rendering = true;
                } // if course spans many columns and is not rendering and this is not the first
                else if (cLength > 1 && colIndex && course.rendering != true && colIndex != firstColumn) {
                  course.rendered = false;
                  course.rendering = false;
                  tiles += "<div class=\"col-1 bg-transparent\"></div>";
                }
              } else {
                // if there is no course
                tiles += "<div class=\"col-1 bg-transparent\"></div>";
              }
            }
          }); // create row

          var cls = '';

          if (row == 0) {
            cls = 'first-row';
          }

          var rowHTML = "<div class=\"g-0 row map-course-row ".concat(cls, " \">\n        ").concat(tiles, "\n       </div>");
          mapstore.html["level-".concat(level)] += rowHTML;
        },
        createCourseCard: function createCourseCard(course, row, colIndex) {
          var columns = mapstore.data.columns;
          var column = columns[colIndex];
          var courseColumns = course.columns;
          var courseTitle = course.title;
          var edited = courseTitle.includes(' and ') ? "".concat(courseTitle.split(' and ')[0], " & ").concat(courseTitle.split(' and ')[1]) : courseTitle;
          edited = edited.includes(' - ') ? "".concat(edited.replace(/ - /g, ' | ')) : edited;
          edited = edited.includes('-') ? "".concat(edited.replace(/-/g, '- ')) : edited;
          var courseLevel = course.level;
          var level = courseLevel.toLowerCase();
          level = level == 'further development' ? 'specialized' : level;
          var courseDisciplines = course.disciplines;
          var courseSubcategories = course.subcategories;
          var url = course.url;
          var w = courseColumns.length;
          mapstore.data.subcategoriesList.forEach(function (sc) { });
          var body = document.querySelector('body');
          var template = "\n            <div class=\"map-course-col col-".concat(w, " bg-transparent p-1 pe-none\">\n                  <div class=\"h-100 d-block text-decoration-none card border-0 overflow-visible shadow-lg bg-transparent text-light pe-auto\" data-level=\"").concat(courseLevel, "\" data-disciplines=\"").concat(courseDisciplines, "\" data-subcategories=\"").concat(courseSubcategories, "\" data-bs-container=\"body\" data-bs-toggle=\"popover\" data-bs-trigger=\"click\" data-bs-placement=\"top\" title=\"\" data-bs-html=\"true\" data-bs-content=\"\n                    <div class='fw-medium'>").concat(courseTitle, "</div>\n                    <a class='d-inline-block mt-3 btn btn-sm btn-accent' href='").concat(url, "'>Learn More</a>\n                    \">\n                    <div class=\"card-body bg-").concat(level, " rounded p-1\">\n                      <div class=\"card-heading pe-none\">\n                        ").concat(edited, "\n                      </div>\n                    </div>\n                  </div>\n                </div>\n            ");
          return template;
        },
        buildLevel: function buildLevel(level) {
          mapstore.html["level-".concat(level)] = "";
          var i = 0;

          while (mapstore.data.courses.filter(function (c) {
            return c['level'] == level && c['rendered'] != true && c['rendering'] != true;
          }).length > 0 && i < mapstore.data.courses.length) {
            mapstore.functions.buildCourseRow(level, i);
            i++;
          }

          mapstore.html.levels.push(mapstore.html["level-".concat(level)]);
        },
        buildMap: function buildMap(parent) {
          // Prep Data & Assign Columns
          mapstore.functions.buildHeadings();
          mapstore.functions.buildSubcategories(); // Build Levels

          mapstore.data.levelsList.forEach(function (level) {
            mapstore.functions.buildLevel(level);
          }); // Add Level HTML to Map

          mapstore.html.levels.forEach(function (level) {
            mapstore.html.allLevels += "<div class='map-level'>".concat(level, "</div>");
          });
          mapstore.html.map = "\n      <div class=\"map-container position-relative\">\n        <div class=\"progression-map mb-5 container-fluid\">\n          ".concat(mapstore.html.headings, "\n          ").concat(mapstore.html.allLevels, "\n        </div>\n      <div>\n      ");
          parent.insertAdjacentHTML('beforeEnd', mapstore.html.map);
        }
      }; // Parse Data
      //mapstore.functions.getSubcategories()

      mapstore.functions.buildColumns(document.querySelector('.map')); // Assign Columns

      mapstore.functions.assignIndexNumbersToCourses();
      mapstore.functions.assignColumnsToCourses(); //mapstore.functions.assignDefaultPriorityToCourses();
      // Build Map

      mapstore.functions.buildMap(document.querySelector('.map'));
      mapstore.functions.buildUnderGrid();
      var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
      var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
      });
    }
  }();

  var globalVars = function globalVars() {
    _classCallCheck(this, globalVars);

    this.store = {};
    window.store = this.store;
  };

  var globalVars$1 = new globalVars();
  var store = globalVars$1.store;

  var regModal = function () {
    // modal
    store.modal = {
      actual: document.querySelector('#product-checkout-modal'),
      header: document.querySelector('#product-checkout-modal .modal-header'),
      content: document.querySelector('#product-checkout-modal .modal-content')
    }; // ready global objects

    store.objects = {
      product: {},
      registration: {
        attendees: []
      },
      cart: {
        name: 'pimcore cart',
        itemCount: 0,
        items: []
      },
      payment: {},
      tmsCart: {
        name: 'tms cart',
        itemCount: 0,
        items: []
      }
    }; // tabs

    store.tabs = {};
    store.tabs.all = store.modal.actual.querySelectorAll('.modal-header ul li a');
    store.tabs.product = store.modal.actual.querySelector('#modal-product-tab');
    store.tabs.cart = store.modal.actual.querySelector('#modal-cart-tab');
    store.tabs.attendee = store.modal.actual.querySelector('#modal-attendee-tab');
    store.tabs.payment = store.modal.actual.querySelector('#modal-payment-tab');
    store.tabs.thankYou = store.modal.actual.querySelector('#modal-thank-you-tab'); // panes

    store.panes = {};
    store.panes.all = store.modal.actual.querySelectorAll('.tab-pane');
    store.panes.product = store.modal.actual.querySelector('#modal-product-pane');
    store.panes.cart = store.modal.actual.querySelector('#modal-cart-pane');
    store.panes.attendee = store.modal.actual.querySelector('#modal-attendee-pane');
    store.panes.payment = store.modal.actual.querySelector('#modal-payment-pane');
    store.panes.thankYou = store.modal.actual.querySelector('#modal-thank-you-pane'); // cards

    store.cards = {};
    store.cards.attendees = {};
    store.cards.attendees.all = store.panes.attendee.querySelector('.card');
    store.cards.customerInfo = store.panes.payment.querySelector("#customer-info-card");
    store.cards.billingAddress = store.panes.payment.querySelector("#billing-address-card");
    store.cards.shippingAddress = store.panes.payment.querySelector("#shipping-address-card");
    store.cards.payment = store.panes.payment.querySelector('#payment-card'); // data

    store.data = {
      allianceMembers: ['gmail'],
      countryList: ["United States", "United Kingdom", "Afghanistan", "Ã…land Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas (the)", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros (the)", "Congo (the Democratic Republic of the)", "Congo (the)", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "CuraÃ§ao", "Cyprus", "Czechia", "CÃ´te d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Falkland Islands (the) [Malvinas]", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (the)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (the Democratic People's Republic of)", "Korea (the Republic of)", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic (the)", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands (the)", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine, State of", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Republic of North Macedonia", "Romania", "Russian Federation (the)", "Rwanda", "RÃ©union", "Saint BarthÃ©lemy", "Saint Helena, Ascension and Tristan da Cunha", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin (French part)", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten (Dutch part)", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan (the)", "Suriname", "Svalbard and Jan Mayen", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan (Province of China)", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Viet Nam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"],
      days: ['M', 'Tu', 'W', 'Th', 'F', 'S', 'Su'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      timezones: [{
        city: 'Aberdeen',
        zone: '+1'
      }, {
        city: 'Calgary',
        zone: '-6'
      }, {
        city: 'Dallas',
        zone: '-5'
      }, {
        city: 'Denver',
        zone: '-6'
      }, {
        city: 'Doha',
        zone: '+3'
      }, {
        city: 'Dubai',
        zone: '+4'
      }, {
        city: 'Houston',
        zone: '-5'
      }, {
        city: 'Kuala Lumpur',
        zone: '+8'
      }, {
        city: 'Kuwait City',
        zone: '+3'
      }, {
        city: 'London',
        zone: '+1'
      }, {
        city: 'Midland',
        zone: '-5'
      }, {
        city: 'Perth',
        zone: '+8'
      }, {
        city: 'Singapore',
        zone: '+8'
      }, {
        city: 'Stavenger',
        zone: '+2'
      }]
    }; // forms

    store.forms = {};
    store.forms.all = store.modal.actual.querySelectorAll('form');
    store.forms.customerInfo = store.panes.payment.querySelector('#your-info');
    store.forms.billingAddress = store.panes.payment.querySelector('#billing-address');
    store.forms.shippingAddress = store.panes.payment.querySelector('#shipping-address');
    store.forms.creditCard = store.panes.payment.querySelector('#credit-card');
    store.forms.purchaseOrder = store.panes.payment.querySelector('#purchase-order'); // buttons

    store.buttons = {}; // on page register buttons

    store.buttons.register = {};
    store.buttons.register.all = document.querySelectorAll('.register'); // next & submit pane buttons

    store.buttons.productNext = store.panes.product.querySelector('.next-button');
    store.buttons.productBack = store.panes.product.querySelector('.back-button');
    store.buttons.attendeeNext = store.panes.attendee.querySelector('.next-button');
    store.buttons.attendeeBack = store.panes.attendee.querySelector('.back-button');
    store.buttons.paymentNext = store.panes.payment.querySelector('.next-button');
    store.buttons.paymentBack = store.panes.payment.querySelector('.back-button');
    store.buttons.thankYouDone = store.panes.thankYou.querySelector('button'); // functions

    store.functions = {
      calendar: {
        createCalendarWeek: function createCalendarWeek(monday, weekRowNum) {
          var product = store.objects.product;
          var joinedHtml = "<div class=\"row coursedates week-".concat(weekRowNum, "\"><div class=\"d-flex align-items-start mb-2\">");
          var i = 0;

          while (i < 7) {
            var thisDate = new Date(monday);
            thisDate.setDate(thisDate.getDate() + i);
            var thisMonth = store.data.months[thisDate.getMonth()].substring(0, 3);
            var thisDateNum = thisDate.getDate();
            var addClass = '';

            if (thisDate.getDay() == 0 && product.courseMeetsSundays == false) {
              addClass = "bg-white text-primary";
            }

            if (thisDate.getDay() == 6 && product.courseMeetsSaturdays == false) {
              addClass = "bg-white text-primary";
            }

            if (thisDate < product.startDate || thisDate > product.endDate) {
              addClass = "bg-white text-primary";
            }

            joinedHtml += "\n                <div class=\"date date-tile ".concat(addClass, "\" data-date=").concat(thisDate.toDateString(), ">\n                  <span class=\"month\">").concat(thisMonth, "</span>\n                  <div>").concat(thisDateNum, "</div>\n                </div>");
            i++;
          }

          joinedHtml += "</div></div>";
          return joinedHtml;
        },
        countDays: function countDays(duration, startDate, countSaturdays, countSundays) {
          var array = [];
          var count = 0;

          while (count < duration) {
            var newDate = new Date(startDate);
            newDate.setDate(startDate.getDate() + count);
            var newDay = newDate.getDay();

            if (newDay != 6 && newDay != 0) {
              array.push(newDate);
            }

            if (countSundays == true && newDay == 0) {
              array.push(newDate);
            }

            if (countSaturdays == true && newDay == 6) {
              array.push(newDate);
            }

            count = count + 1;
          }

          return array;
        },
        countWeeks: function countWeeks(days) {
          var weeks = days > 7 ? Math.floor((days - .01) / 7) + 1 : 1;
          return weeks;
        },
        findMonday: function findMonday(date) {
          var monday;

          if (date.getDay() == 1) {
            monday = date;
          } else {
            var diff = date.getDay() - 1;
            var newDate = new Date(date);
            newDate.setDate(newDate.getDate() - diff);
            monday = newDate;
          }

          return monday;
        },
        populateAdditionalWeeks: function populateAdditionalWeeks(parent, startDate, duration, countWeeks, createCalendarWeek, findMonday) {
          var additionalWeeks = countWeeks(duration) > 1 ? countWeeks(duration) - 1 : 0;
          var i = 0;

          while (i < additionalWeeks) {
            var newDate = new Date(startDate);
            newDate.setDate(newDate.getDate() + 7 * (i + 1));
            var monday = findMonday(newDate);
            var week = createCalendarWeek(monday, i + 1);
            parent.insertAdjacentHTML('beforeend', week);
            i++;
          }
        },
        populateCalendarDates: function populateCalendarDates(parent, startDate, duration, countWeeks, createCalendarWeek, findMonday) {
          store.functions.calendar.populateWeekOne(parent, startDate, createCalendarWeek, findMonday);
          store.functions.calendar.populateAdditionalWeeks(parent, startDate, duration, countWeeks, createCalendarWeek, findMonday);
        },
        populateCourseCalendar: function populateCourseCalendar(parent) {
          var product = store.objects.product; // clear current calendar

          parent.innerHTML = ""; // populate calendar labels

          parent.insertAdjacentHTML('beforeend', store.functions.calendar.populateCalendarLabels(store.data.days)); // populate calendar dates

          store.functions.calendar.populateCalendarDates(parent, product.startDate, product.calendarDuration, store.functions.calendar.countWeeks, store.functions.calendar.createCalendarWeek, store.functions.calendar.findMonday); // populate calendar summary

          store.functions.calendar.populateDateSummary(parent, product.instructionDuration, product.startDateText, product.city);
        },
        populateCalendarLabels: function populateCalendarLabels(days) {
          var joinedHtml = "\n                <div class=\"row mb-0 pe-none coursedates\">\n                <div class=\"d-flex align-items-start mb-1 day-labels\" style=\"height:18px;\">";
          days.forEach(function (day) {
            joinedHtml += "<div class='date-label'>".concat(day, "</div>");
          });
          joinedHtml += "</div></div>";
          return joinedHtml;
        },
        populateDateSummary: function populateDateSummary(parent, duration, start, end, city) {
          var template = "\n              <div class=\"row mt-2\">\n                <p class=\"fs-sm mb-1\">\n                  <strong>Duration:</strong>\n                  <span> ".concat(duration, " instruction days </span>\n                </p>\n                <p class=\"fs-sm mb-1\">\n                  <strong>Dates:</strong>\n                  <span> ").concat(start, " - ").concat(end, " </span>\n                </p>\n                <p class=\"fs-sm mb-1\">\n                <strong>Time:</strong>\n                <span> Instruction begins 09:00 ").concat(city, " local time each day. </span>\n              </p>\n              </div>\n              ");
          parent.insertAdjacentHTML('beforeend', template);
        },
        populateWeekOne: function populateWeekOne(parent, startDate, createCalendarWeek, findMonday) {
          var week1 = createCalendarWeek(findMonday(startDate), 1);
          parent.insertAdjacentHTML('beforeend', week1);
        }
      },
      cards: {
        updateCards: function updateCards() {
          store.cards.attendees.all = store.panes.attendee.querySelector('.card');
          store.cards.customerInfo = store.panes.payment.querySelector("#customer-info-card");
          store.cards.billingAddress = store.panes.payment.querySelector("#billing-address-card");
          store.cards.shippingAddress = store.panes.payment.querySelector("#shipping-address-card");
          store.cards.payment = store.panes.payment.querySelector('#payment-card');
        }
      },
      cart: {
        addProductToCart: function addProductToCart(cart) {
          var product = store.objects.product;
          var productPane = store.panes.product;
          var attendeeForms = store.modal.actual.querySelectorAll('#modal-attendee-pane form.was-validated'); // get quantity from field if physical product

          if (product.type != 'Course' && product.type != 'Module') {
            product.quantity = parseInt(productPane.querySelector('#product-pane-quantity-qty').value);
          } // attendees


          var attendees = [];

          if (product.type == 'Course' || product.type == 'Module') {
            attendees = [];
            var index = 0;
            attendeeForms.forEach(function (form) {
              var firstName = form.querySelector('.first-name').value;
              var lastName = form.querySelector('.last-name').value;
              var title = form.querySelector('.title').value;
              var email = form.querySelector('.email').value;
              var countryCode = form.querySelector('.country-code').value;
              var citizenship = form.querySelector('.citizenship').value;
              var company = form.querySelector('.company').value;
              var address = form.querySelector('.address').value;
              var city = form.querySelector('.city').value;
              var state = form.querySelector('.state').value;
              var postalCode = form.querySelector('.postal-code').value;
              var country = form.querySelector('.country').value;
              attendees[index] = {
                firstName: firstName,
                lastName: lastName,
                title: title,
                email: email,
                countryCode: countryCode,
                citizenship: citizenship,
                company: company,
                address: address,
                city: city,
                state: state,
                postalCode: postalCode,
                country: country
              };
              index = index + 1;
            });
          } // create new object with product values


          var newItem = {
            attendees: attendees,
            author: product.author,
            calendarDuration: product.calendarDuration,
            category: product.category,
            city: product.city,
            code: product.code,
            courseDates: product.courseDates,
            courseMeetsSaturdays: product.courseMeetsSaturdays,
            courseMeetsSundays: product.courseMeetsSundays,
            description: product.description,
            details: product.details,
            detailsSummary: product.detailsSummary,
            duration: product.duration,
            endDate: product.endDate,
            endDateText: product.endDateText,
            format: product.format,
            imageCat: product.imageCat,
            imageSlug: product.imageSlug,
            instructionDates: product.instructionDates,
            instructionDuration: product.instructionDuration,
            instructor: product.instructor,
            jpg: product.jpg,
            pages: product.pages,
            prep: product.prep,
            price: product.price,
            publication: product.publication,
            quantity: product.quantity,
            startDate: product.startDate,
            startDateText: product.startDateText,
            taxRate: product.taxRate,
            timeZone: product.timeZone,
            title: product.title,
            titleSlug: product.titleSlug,
            type: product.type,
            webp: product.webp
          }; // if item is unique push it to cart

          store.functions.cart.pushItemToCartObject(newItem, cart);
        },
        pushItemToCartObject: function pushItemToCartObject(newItem, cart) {
          // if cart is empty
          console.log('pushItemToCart');
          console.log('cart name');
          console.log(cart.name);
          console.log('item code');
          console.log(newItem.code);
          console.log(cart.items.length);
          console.log(cart.items); // if cart is not empty

          if (cart.items.length > 0) {
            cart.items.forEach(function (item) {
              if (item.code != newItem.code) {
                cart.items.push(newItem); // if item is course or module

                if (item.type == 'Course' || item.type == 'Module');
              } else {
                // update quantity of existing matching item
                item.quantity = parseInt(item.quantity) + parseInt(newItem.quantity); // and merge attendees

                newItem.attendees.forEach(function (attendee) {
                  item.attendees.push(attendee);
                });
              }
            });
          } // if cart is empty
          else {
            cart.items.push(newItem);
          }
        },
        calculateCartSubtotal: function calculateCartSubtotal(cart) {
          var subtotal = 0;
          cart.items.forEach(function (item) {
            subtotal += item.price * item.quantity;
          });
          cart.subtotal = subtotal;
          cart.subtotalFormatted = store.functions.price.toDollars(cart.subtotal);
        },
        calculateCartTotals: function calculateCartTotals(cart) {
          var registration = store.objects.registration;
          var helpers = store.functions.helpers;

          if (registration.alliance == true) {
            cart.discountLabel = 'Discount: ';
            cart.discount = .1;
            cart.discountAmount = '10% ';
            cart.discountReason = '(Alliance Member)';
            cart.discountedSubtotalLabel = 'Updated Subtotal: ';
            cart.discountUpdatedSubtotal = cart.subtotal - cart.subtotal * cart.discount;
            cart.discountedSubtotal = store.functions.price.toDollars(cart.subtotal - cart.subtotal * .1);
          } else {
            cart.discountLabel = '';
            cart.discount = 0;
            cart.discountAmount = '';
            cart.discountReason = '';
            cart.discountedSubtotalLabel = '';
            cart.discountUpdatedSubtotal = cart.subtotal - cart.subtotal * cart.discount;
            cart.discountedSubtotal = '';
          } // tax


          cart.estimatedTaxSubtotal = cart.taxRate * cart.discountUpdatedSubtotal;
          cart.totalCostWithTax = cart.discountUpdatedSubtotal + cart.estimatedTaxSubtotal;
        },
        storeAttendeeInfoInCartItem: function storeAttendeeInfoInCartItem(code, cart) {
          // get attendee forms
          var attendeeForms = store.modal.actual.querySelectorAll('#modal-attendee-pane form.was-validated'); // match item being edited in attendee pane with item in cart

          var item;
          cart.items.forEach(function (cartItem) {
            if (cartItem.code == code) {
              item = cartItem;
            }
          });
          item.attendees = [];
          var index = 0;
          attendeeForms.forEach(function (form) {
            var firstName = form.querySelector('.first-name').value;
            var lastName = form.querySelector('.last-name').value;
            var title = form.querySelector('.title').value;
            var email = form.querySelector('.email').value;
            var countryCode = form.querySelector('.country-code').value;
            var citizenship = form.querySelector('.citizenship').value;
            var company = form.querySelector('.company').value;
            var address = form.querySelector('.address').value;
            var city = form.querySelector('.city').value;
            var state = form.querySelector('.state').value;
            var postalCode = form.querySelector('.postal-code').value;
            var country = form.querySelector('.country').value;
            item.attendees[index] = {
              firstName: firstName,
              lastName: lastName,
              title: title,
              email: email,
              countryCode: countryCode,
              citizenship: citizenship,
              company: company,
              address: address,
              city: city,
              state: state,
              postalCode: postalCode,
              country: country
            };
            index = index + 1;
          });
        },
        updateCartItemCount: function updateCartItemCount(cart) {
          var cartItems = cart.items;
          var count = parseInt(0);
          cartItems.forEach(function (item) {
            count = parseInt(count) + parseInt(item.quantity);
          });
          cart.itemCount = parseInt(count);
        }
      },
      data: {
        clearObjectData: function clearObjectData(object) {
          for (var property in object) {
            object[property] = undefined;
          }
        },
        getProductData: function getProductData(e) {
          var product = store.objects.product;
          var payment = store.objects.payment;
          var cart = store.objects.cart;
          var tmsCart = store.objects.tmsCart;
          var registration = store.objects.registration; // all

          product.type = e.target.dataset.ljProductType.length > 0 ? e.target.dataset.ljProductType : 'unknown type';
          product.title = e.target.dataset.ljTitle.length > 0 ? e.target.dataset.ljTitle : 'unknown title';
          product.titleSlug = product.title.replace(/\s+/g, '-').toLowerCase();
          product.price = e.target.dataset.ljPrice.length > 0 ? e.target.dataset.ljPrice : 9998;
          product.quantity = 1;
          product.taxRate = .0875;
          cart.taxRate = .0875;
          tmsCart.taxRate = .0875;
          product.sessionCode = e.target.dataset.ljCode.length > 0 ? e.target.dataset.ljCode : '0001';
          product.category = product.type.toLowerCase() + 's'; // generate random product code for prototype

          product.code = e.target.dataset.ljCode.length > 0 ? e.target.dataset.ljCode : Math.floor(100000 + Math.random() * 900000);
          product.imageFolder = 'img';
          product.imageCat = product.category;
          product.imageString = 'thumb-small-square';
          payment.customerInfo = 'incomplete';
          payment.billingAddress = 'incomplete';
          payment.shippingAddress = 'incomplete';
          payment.creditCard = 'incomplete';
          payment.purchaseOrder = 'incomplete';
          registration.alliance = false;
          registration.allianceMember = ''; // if course

          if (product.type == 'Course') {
            product.format = e.target.dataset.ljFormat.length > 0 ? e.target.dataset.ljFormat : 'In-classroom';
            product.scheduled = product.format == 'Virtual' || product.format == 'In-classroom' ? true : false; // if in-classroom or virtual

            if (product.scheduled == true) {
              product.courseMeetsSaturdays = false;
              product.courseMeetsSundays = false;
              product.city = e.target.dataset.ljCity.length > 0 ? e.target.dataset.ljCity : 'unknown';
              product.imageSlug = product.format == 'In-classroom' ? product.city.replace(/\s+/g, '-').toLowerCase() : 'laptop';
              product.imageCat = 'cities';
              product.prep = product.format == 'Virtual' ? 'from' : 'in';
              product.timeZone = store.functions.helpers.getTimeZone(product.city);
              product.instructor = e.target.dataset.ljInstructor.length > 0 ? e.target.dataset.ljInstructor : 'Instructor Error';
              product.startDate = new Date(e.target.dataset.ljStartDate);
              product.endDate = new Date(e.target.dataset.ljEndDate);
              product.smonth = product.startDate.getMonth();
              product.sdate = product.startDate.getDate();
              product.syear = product.startDate.getFullYear();
              product.emonth = product.endDate.getMonth();
              product.edate = product.endDate.getDate();
              product.eyear = product.endDate.getFullYear();
              product.startDateText = "".concat(product.smonth + 1, "/").concat(product.sdate, "/").concat(product.syear);
              product.endDateText = "".concat(product.emonth + 1, "/").concat(product.edate, "/").concat(product.eyear);
              product.calendarDuration = Math.floor((product.endDate - product.startDate) / 1000 / 60 / 60 / 24) + 1;
              product.instructionDates = store.functions.calendar.countDays(product.calendarDuration, product.startDate, product.courseMeetsSaturdays, product.courseMeetsSundays);
              product.instructionDuration = product.instructionDates.length;
              product.detailsSummary = "".concat(product.format, " Course, ").concat(product.prep, " ").concat(product.city);
              product.courseDates = "".concat(product.startDateText, " - ").concat(product.endDateText);
            } else if (product.format == 'On-demand') {
              product.detailsSummary = "".concat(product.format, " Course");
            }
          }

          if (product.format == 'On-demand' || product.type == 'Module' || product.type == 'Book') {
            product.city = undefined;
            product.prep = undefined;
            product.instructor = undefined;
            product.startDate = undefined;
            product.endDate = undefined;
            product.calendarDuration = 0;
          }

          if (product.type == 'Book') {
            product.author = e.target.dataset.ljAuthor.length > 0 ? e.target.dataset.ljAuthor : '';
            product.pages = e.target.dataset.ljPages > 0 ? e.target.dataset.ljPages : '';
            product.format = e.target.dataset.ljFormat.length > 0 ? e.target.dataset.ljFormat : 'Hardcover';
            product.publication = e.target.dataset.ljPublication.length > 0 ? e.target.dataset.ljPublication : '';
            product.description = e.target.dataset.ljDescription.length > 0 ? e.target.dataset.ljDescription : '';
            product.detailsSummary = "".concat(product.type, ", ").concat(product.format, ", ").concat(product.pages, " pages");
            product.imageSlug = "".concat(product.titleSlug);
          }

          if (product.type == 'Module') {
            product.duration = e.target.dataset.ljDuration > 0 ? e.target.dataset.ljDuration : 0;
            product.description = e.target.dataset.ljDescription.length > 0 ? e.target.dataset.ljDescription : '';
            product.detailsSummary = "".concat(product.type, ", On-demand, approx. ").concat(product.duration, " hours");
            product.imageSlug = "".concat(product.titleSlug);
          }

          product.jpg = store.functions.image.buildImageUrl('jpg');
          product.webp = store.functions.image.buildImageUrl('webp');
        }
      },
      helpers: {
        capitalizeWord: function capitalizeWord(word) {
          return [word.slice(0, 1).toUpperCase(), word.slice(1)].join('');
        },
        createArrayFromElList: function createArrayFromElList(parent, sel) {
          var array = Array.from(parent.querySelectorAll(sel));
          return array;
        },
        getDomainFromEmail: function getDomainFromEmail(email) {
          var domain = email.split('@')[1].split('.')[0];
          return domain;
        },
        getTimeZone: function getTimeZone(city) {
          var timezone;
          store.data.timezones.forEach(function (tz) {
            if (tz.city == city) {
              timezone = tz.zone;
            }
          });
          return timezone;
        },
        hide: function hide(el) {
          el != null ? el.classList.add('d-none') : '';
        },
        phoneFormatting: function phoneFormatting(countryCode, phone) {
          if (countryCode == '1') {
            phone = "+".concat(countryCode, " ").concat(phone.slice(0, 3), "-").concat(phone.slice(3, 6), "-").concat(phone.slice(6));
          } else if (countryCode == '44') {
            phone = "+".concat(countryCode, " ").concat(phone.slice(0, 4), " ").concat(phone.slice(4));
          }

          return phone;
        },
        removeElement: function removeElement(el) {
          el != null ? el.remove() : null;
        },
        reveal: function reveal(el) {
          el != null ? el.classList.remove('d-none') : '';
        },
        stripJunkFromString: function stripJunkFromString(string) {
          string = store.functions.helpers.stripSpecialCharacters(string);
          string = store.functions.helpers.stripWhiteSpaces(string);
          string = string.toLowerCase();
          return string;
        },
        stripSpecialCharacters: function stripSpecialCharacters(string) {
          return string.replace(/[^\w\s]/gi, '');
        },
        stripWhiteSpaces: function stripWhiteSpaces(string) {
          return string.replace(/ /g, "");
        },
        toCamelCase: function toCamelCase(string) {
          string = string.toLowerCase().replace(/-/g, ' ').split(' ');
          string.forEach(function (item) {
            return string.indexOf(item) != 0 ? string[string.indexOf(item)] = store.functions.helpers.capitalizeWord(item) : '';
          });
          string = string.join('');
          return string;
        },
        toggleHidden: function toggleHidden(el) {
          el.classList.contains('d-none') && el != null ? store.functions.helpers.reveal(el) : store.functions.helpers.hide(el);
        },
        toKebabCase: function toKebabCase(string) {
          return string.replace(/ /g, '-').toLowerCase();
        },
        toTitle: function toTitle(id) {
          var string = id.replace(/-/g, ' ').split(' ');
          string.forEach(function (item) {
            return string[string.indexOf(item)] = store.functions.helpers.capitalizeWord(item);
          });
          string = string.join(' ');
          return string;
        }
      },
      image: {
        backUpImage: function backUpImage() {
          var product = store.objects.product;
          var image = "<div class='mx-2 p-2 overflow-hidden backup-image ".concat(product.type, "-cover d-flex flex-wrap h-100 bg-primary'>\n                <div class='").concat(product.type, "-title text-white fw-bold mb-1 fs-sm'>").concat(product.imageHeading, "</div>\n                <div class='fs-xs text-white w-100 lh-1 self-align-end d-flex flex-column justify-content-end'>\n                    <div>").concat(product.imageCaption, "<div>\n                </div>\n              <div>");
          return image;
        },
        buildImageUrl: function buildImageUrl(format) {
          var product = store.objects.product;
          var url = "/".concat(product.imageFolder, "/").concat(product.imageCat, "/").concat(product.imageSlug, "-").concat(product.imageString, ".").concat(format); //console.log(url)

          return url;
        },
        loadBackupImage: function loadBackupImage() {
          //console.log('attempting to load backup image')
          var product = store.objects.product;
          var productPane = store.panes.product; // hide picture tag

          productPane.querySelector('.product-image picture').style.display = 'none'; // set height for picture container

          var productImage = store.panes.product.querySelector('.product-image');
          store.functions.image.setImageHeight(productImage);
          window.addEventListener("resize", store.functions.image.setImageHeight); // set metadata

          product.imageHeading = product.title;

          if (product.type == 'Book' || product.type == 'Module') {
            product.imageCaption = product.type == 'Book' ? product.author : 'Individual Skill Module';
          } else if (product.type == 'Course') {
            product.imageCaption = 'Course';
          }

          productPane.querySelector('.product-image').insertAdjacentHTML('beforeend', store.functions.image.backUpImage());
        },
        loadImage: function loadImage(slug) {
          var product = store.objects.product;
          store.panes.product.querySelector('.city picture source').setAttribute('srcset', "".concat(product.webp));
          store.panes.product.querySelector('.city picture img').setAttribute('src', "".concat(product.jpg));
          store.panes.product.querySelector('.city picture img').setAttribute('alt', "".concat(product.title));
        },
        populateProductImage: function populateProductImage() {
          var productPane = store.panes.product;
          var product = store.objects.product;
          var productImage = productPane.querySelector('.product-image');
          store.functions.image.resetProductImage();
          store.functions.image.testAndLoadImage(product.imageSlug);
        },
        resetProductImage: function resetProductImage() {
          var helpers = store.functions.helpers;
          var backUpImage = store.panes.product.querySelector('.backup-image'); // remove backup image

          helpers.removeElement(backUpImage); // show picture tag

          store.panes.product.querySelector('.product-image picture').style.display = 'inline'; // reset container height

          store.panes.product.querySelector('.product-image').style.height = 'auto';
        },
        setImageHeight: function setImageHeight(productImage) {
          setTimeout(function () {
            productImage.style.height = productImage.offsetWidth + 'px';
          }, 100);
        },
        testAndLoadImage: function testAndLoadImage(slug) {
          var product = store.objects.product;
          var tester = new Image();
          tester.onload = store.functions.image.loadImage();
          setTimeout(function () {
            if (tester.width == 0) {
              store.functions.image.loadBackupImage();
            }
          }, 100);
          tester.src = product.webp;
        }
      },
      forms: {
        addresses: {
          populateAddressSummary: function populateAddressSummary(formId) {
            var registration = store.objects.registration;
            var card = store.modal.actual.querySelector("#".concat(formId, "-card"));
            var summary = card.querySelector("#".concat(formId, "-summary"));
            var helpers = store.functions.helpers;
            var formName = registration["".concat(helpers.toCamelCase(formId))];
            var phone = helpers.phoneFormatting(formName.countryCode, formName.phone);
            var company = formName.company != undefined ? formName.company : '';
            summary.querySelector('.summary-contents').innerHTML = "\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <p class=\"lh-1 mb-1\">".concat(formName.firstName, " ").concat(formName.lastName, "</p>\n                    <p class=\"lh-1 mb-1\">").concat(phone, "</p>\n                    <p class=\"lh-1 mb-1\">").concat(company, "</p>\n                    <p class=\"lh-1 mb-1\">").concat(formName.addressLine1, "</p>\n                    <p class=\"lh-1 mb-1\">").concat(formName.addressLine2, "</p>\n                    <p class=\"lh-1 mb-1\">").concat(formName.city, ", ").concat(formName.state, " ").concat(formName.postalCode, "</p>\n                    <p class=\"lh-1 mb-1\">").concat(formName.country, "</p>\n                  </div>\n                <div>");
          },
          createAddressFormFields: function createAddressFormFields(formId) {
            var creating = store.functions.forms.creating;
            var firstName = creating.createTextInputField(formId, 'First Name', 'text', 'required');
            var lastName = creating.createTextInputField(formId, 'Last Name', 'text', 'required');
            var phoneCountryCode = creating.createTextInputField(formId, 'Country Code', 'number', 'required');
            var phone = creating.createTextInputField(formId, 'Phone', 'text', 'required');
            var company = creating.createTextInputField(formId, 'Company', 'text', '');
            var address1 = creating.createTextInputField(formId, 'Address Line 1', 'text', 'required');
            var address2 = creating.createTextInputField(formId, 'Address Line 2', 'text', '');
            var city = creating.createTextInputField(formId, 'City', 'text', 'required');
            var state = creating.createTextInputField(formId, 'State', 'text', '');
            var postalCode = creating.createTextInputField(formId, 'Postal Code', 'text', '');
            var country = creating.createSelectField(formId, 'Country', creating.countryOptions(), 'required', 'required');
            var form = "\n                  <div class=\"row mb-2 form-body\">\n                    <div class=\"col\">\n                      <div class=\"d-flex\">\n                        <div class=\"pe-2\">".concat(firstName, "</div>\n                        ").concat(lastName, "\n                      </div>\n                      <div class=\"d-flex\">\n                        <div class=\"pe-2 w-50\">").concat(phoneCountryCode, "</div>\n                        <div class=\"pe-2 w-50\">").concat(phone, "</div>\n                      </div> \n                      ").concat(company, "\n                      ").concat(address1, "\n                      ").concat(address2, "\n                      ").concat(city, "\n                      <div class=\"d-flex\">\n                        <div class=\"pe-2\" style=\"width:66%\">").concat(state, "</div>\n                        <div>").concat(postalCode, "</div>\n                      </div>\n                      ").concat(country, "\n                    </div>\n                  </div>\n                    ");
            return form;
          },
          populateShipping: function populateShipping() {
            // update card references
            store.functions.cards.updateCards();
            store.functions.forms.updateForms(); // shortcut references

            var billingAddress = store.forms.billingAddress;
            var shippingAddress = store.forms.shippingAddress;
            var billingFields = Array.from(billingAddress.querySelectorAll('input, select'));
            var shippingFields = Array.from(shippingAddress.querySelectorAll('input, select'));
            shippingFields.forEach(function (field) {
              var i = shippingFields.indexOf(field);
              field.value = billingFields[i].value;
            });
          }
        },
        creating: {
          addListenersToForm: function addListenersToForm(formId) {
            var card = store.modal.actual.querySelector("#".concat(formId, "-card"));
            var form = card.querySelector("form");
            var placeholder = card.querySelector(".placeholder");
            var shippingIsBilling = card.querySelector("#shipping-is-billing");
            var saveButton = form.querySelector(".save-button");
            var deleteButtons = card.querySelectorAll(".delete-button");
            var editButton = card.querySelector('.edit-button'); // add listener to checkbox

            if (shippingIsBilling != null) {
              shippingIsBilling.addEventListener("mousedown", store.functions.forms.states.toggleShipping);
            } // add listener to placeholder


            placeholder.addEventListener("mousedown", store.functions.forms.states.showForm); // add listener to submit button

            saveButton.addEventListener("mousedown", store.functions.forms.saving.saveForm); // add listeners to delete buttons

            deleteButtons.forEach(function (button) {
              button.addEventListener("mousedown", store.functions.forms.resetting.deleteForm);
            }); // add listener to edit button
            // enable edit button

            editButton.addEventListener('mousedown', store.functions.forms.states.showForm);
          },
          cardTemplate: function cardTemplate(formId) {
            var helpers = store.functions.helpers;
            var formHelpers = store.functions.forms.helpers;
            var index = formHelpers.getFormIndex(formId) != undefined ? formHelpers.getFormIndex(formId) : 1;
            var template = "\n                <div id=\"".concat(formId, "-card\" class=\"card mb-4\" data-lj-index=\"").concat(index, "\">\n                  <h6 class=\"card-header bg-faded-info card-title border-bottom-heavy\">").concat(helpers.toTitle(formId), "</h6>\n                  <div class=\"card-body p-3\">\n                    <div class=\"fw-bold mb-1 heading d-none\">").concat(helpers.toTitle(formId), "</div>\n                    ").concat(store.functions.forms.creating.placeholderTemplate(formId), "\n                    ").concat(store.functions.forms.creating.formTemplate(formId), "\n                    ").concat(store.functions.forms.creating.formDataSummaryTemplate(formId), "\n                    ").concat(formId.includes('billing') ? store.functions.forms.creating.checkBoxTemplate('shipping-is-billing') : '', "\n                  </div>\n                </div>\n                ");
            return template;
          },
          checkBoxTemplate: function checkBoxTemplate(id) {
            var template = "\n                <div class=\"checkbox form-check mt-3 mb-1\">\n                  <input class=\"form-check-input\" id=\"".concat(id, "\" type=\"checkbox\" checked=\"\">\n                  <label class=\"form-check-label\" for=\"").concat(id, "\">Shipping address is same as billing</label>\n                </div>\n                ");
            return template;
          },
          countryOptions: function countryOptions() {
            var creating = store.functions.forms.creating;
            var list = creating.createOptionsList(store.data.countryList);
            return list;
          },
          createForm: function createForm(parent, formId) {
            // remove existing form card
            store.functions.forms.resetting.removeFormCard(formId); // add new form card to DOM

            parent.insertAdjacentHTML("afterend", store.functions.forms.creating.cardTemplate(formId)); // update card references

            store.functions.cards.updateCards(); // reference elements in DOM

            var card = store.modal.actual.querySelector("#".concat(formId, "-card"));
            var placeholderText = card.querySelector(".placeholder span"); // change placeholder text for students

            if (formId.includes('student') == true) {
              placeholderText.textContent = "Add Student";
            } // show placeholder at load


            store.functions.forms.states.showPlaceholder(formId); // hide shipping address card at load

            if (formId.includes('shipping')) {
              store.functions.helpers.hide(card);
            } // add event listeners to form


            store.functions.forms.creating.addListenersToForm(formId);
            return card;
          },
          createOptionsList: function createOptionsList(list) {
            var options = "";
            list.forEach(function (item) {
              if (item == "United States") {
                options += "<option value=\"United States\" selected>United States</option>";
              } else {
                options += "<option value=\"".concat(item, "\">").concat(item, "</option>");
              }
            });
            return options;
          },
          createQuantityForm: function createQuantityForm(formId) {
            var creating = store.functions.forms.creating;
            var quantity = creating.createTextInputField(formId, 'Qty', 'number', 'required');
            var form = "\n                <div class=\"d-flex justify-content-end mb-2 quantity-form-container\">\n                  <form class=\"quantity-form\" style=\"width:100px;\" id=\"".concat(formId, "\" d-none\" method=\"post\" onsubmit=\"return false\">\n                      <div class=\"pe-2\">").concat(quantity, "</div>\n                  </form>\n                </div>\n                  ");
            return form;
          },
          createSelectField: function createSelectField(formId, fieldLabel, optionsList, required) {
            var helpers = store.functions.helpers;
            var slug = helpers.toKebabCase(fieldLabel);
            var template = "\n                <div class=\"form-floating mb-3\">\n                    <select class=\"form-select border-field text-primary ".concat(slug, "\" id=\"").concat(formId, "-").concat(slug, "\" name=\"").concat(slug, "\" ").concat(required, ">\n                      <option value=\"\" selected=\"selected\">Select...</option>\n                      ").concat(optionsList, "\n                    </select>\n                    <label class=\"form-label\" for=\"").concat(formId, "-").concat(slug, "\" placeholder=\"").concat(fieldLabel, "\">").concat(fieldLabel, "</label>\n                    <div class=\"invalid-feedback\">required</div>\n                </div> ");
            return template;
          },
          createTextInputField: function createTextInputField(formId, fieldLabel, fieldType, required) {
            var slug = store.functions.helpers.toKebabCase(fieldLabel); //const formName = toCamelCase(formId)

            var value = '',
              name = '',
              min = '';

            if (slug == 'country-code' || slug == 'code') {
              value = 1;
              name = 'tel-country-code';
            }

            if (slug == 'qty') {
              value = 1;
              name = 'quantity';
              min = 1;
            }

            var template = "\n                  <div class=\"form-floating mb-3\">\n                    <input class=\"form-control border-field text-primary ".concat(slug, "\" id=\"").concat(formId, "-").concat(slug, "\" name=\"").concat(name, "\" value=\"").concat(value, "\" min=\"").concat(min, "\" type=\"").concat(fieldType, "\" name=\"").concat(slug, "\" placeholder=\"").concat(fieldLabel, "\" ").concat(required, ">\n                    <label for=\"").concat(formId, "-").concat(slug, "\">").concat(fieldLabel, "</label>\n                    <div class=\"invalid-feedback\">required</div>\n                  </div>");
            return template;
          },
          formDataSummaryTemplate: function formDataSummaryTemplate(formId) {
            var template = "\n                  <div id=\"".concat(formId, "-summary\" class=\"summary d-none\">\n                    <div class=\"summary-contents\"></div>\n                    <a class=\"d-inline-block lh-1 edit-button me-3 text-decoration-underline link-edit\" data-lj-form=\"").concat(formId, "\" type=\"button\">edit</a>\n                    <a class=\"d-inline-block lh-1 delete-button text-decoration-underline link-delete\" data-lj-form=\"").concat(formId, "\" type=\"button\">delete</a>\n                  </div>\n                ");
            return template;
          },
          formTemplate: function formTemplate(formId) {
            var template = "\n                  <form id=\"".concat(formId, "\" class=\"form needs-validation d-none\" method=\"post\" onsubmit=\"return false\" novalidate>\n                    ").concat(store.functions.forms.creating.getFormFieldsTemplate(formId), "\n                    <button class=\"btn btn-delete mt-0 me-2 delete-button\" data-lj-form=\"").concat(formId, "\" form=\"").concat(formId, "\" type=\"reset\">Delete</button>\n                    <button class=\"btn btn-save mt-0 save-button\" data-lj-form=\"").concat(formId, "\" form=\"").concat(formId, "\" type=\"submit\">Save</button>\n                  </form>\n                ");
            return template;
          },
          getFormFieldsTemplate: function getFormFieldsTemplate(formId) {
            var template;

            switch (true) {
              case formId.includes('info'):
                template = store.functions.forms.people.createPersonFormFields(formId);
                break;

              case formId.includes('student'):
                template = store.functions.forms.people.students.createStudentFormFields(formId);
                break;

              default:
                template = store.functions.forms.addresses.createAddressFormFields(formId);
            }

            return template;
          },
          placeholderTemplate: function placeholderTemplate(formId) {
            var helpers = store.functions.helpers;
            var template = "\n                  <button class=\"btn btn-placeholder placeholder w-100\"  data-lj-form=\"".concat(formId, "\" type=\"button\" style=\"\">\n                    <i class=\"ci-add pe-none\"></i><span class=\"d-inline-block ms-3 placeholder-text pe-none fw-medium\">Add ").concat(helpers.toTitle(formId), "</span>\n                  </button>\n                ");
            return template;
          }
        },
        helpers: {
          getFormIndex: function getFormIndex(formId) {
            var index = 1;

            if (formId.includes('student')) {
              var array = formId.split('-');
              index = array[array.length - 1];
              return index;
            }
          }
        },
        payment: {
          hidePaymentForm: function hidePaymentForm(card) {
            var cardsAccepted = card.querySelector('.cards-accepted');
            var cardWrapper = card.querySelector('.credit-card-wrapper');
            var cardHeader = card.querySelector('.card-header');
            var cardBody = card.querySelector('.card-body');
            var payment = store.objects.payment;
            var helpers = store.functions.helpers;
            payment.creditCard = 'incomplete';
            helpers.hide(cardHeader);
            helpers.hide(cardsAccepted);
            helpers.hide(cardWrapper);
            helpers.hide(cardBody);
          },
          populatePurchaseOrderSummary: function populatePurchaseOrderSummary(formId) {
            var registration = store.objects.registration;
            var card = store.modal.actual.querySelector("#payment-card");
            var summary = card.querySelector("#".concat(formId, "-summary"));
            var helpers = store.functions.helpers;
            var formName = registration["".concat(helpers.toCamelCase(formId))]; // let phone = helpers.phoneFormatting(formName.countryCode, formName.phone)

            summary.querySelector('.summary-contents').innerHTML = "\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <p class=\"lh-1 mb-2\">PO Number: ".concat(formName.poNumber, "</p>\n                    <p class=\"lh-1 mb-1\"></p>\n                  </div>\n                <div>\n                ");
          },
          populateCreditCardSummary: function populateCreditCardSummary(formId) {
            var registration = store.objects.registration;
            var card = store.modal.actual.querySelector("#payment-card");
            var summary = card.querySelector("#".concat(formId, "-summary"));
            var helpers = store.functions.helpers;
            var formName = registration["".concat(helpers.toCamelCase(formId))]; // let phone = helpers.phoneFormatting(formName.countryCode, formName.phone)

            summary.querySelector('.summary-contents').innerHTML = "\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <p class=\"lh-1 mb-2\">Credit Card: ending in ".concat(formName.cardNumber.slice(-4), "</p>\n                    <p class=\"lh-1 mb-1\"></p>\n                  </div>\n                <div>\n                ");
          },
          showPaymentForm: function showPaymentForm(card) {
            var cardsAccepted = card.querySelector('.cards-accepted');
            var cardWrapper = card.querySelector('.credit-card-wrapper');
            var cardHeader = card.querySelector('.card-header');
            var cardBody = card.querySelector('.card-body');
            var payment = store.objects.payment;
            var helpers = store.functions.helpers;
            payment.creditCard = 'incomplete';
            helpers.reveal(cardHeader);
            helpers.reveal(cardsAccepted);
            helpers.reveal(cardWrapper);
            helpers.reveal(cardBody);
          },
          resetPaymentForms: function resetPaymentForms() { }
        },
        people: {
          createPersonFormFields: function createPersonFormFields(formId) {
            var sffc = store.functions.forms.creating;
            var firstName = sffc.createTextInputField(formId, 'First Name', 'text', 'required');
            var lastName = sffc.createTextInputField(formId, 'Last Name', 'text', 'required');
            var title = sffc.createTextInputField(formId, 'Title', 'text', '');
            var email = sffc.createTextInputField(formId, 'Email', 'email', 'required');
            var phoneCountryCode = sffc.createTextInputField(formId, 'Country Code', 'number');
            var phone = sffc.createTextInputField(formId, 'Phone', 'text', 'required');
            var citizenship = sffc.createSelectField(formId, 'Citizenship', store.functions.forms.creating.countryOptions(), 'required', 'Please select your country of citizenship');
            var form = "\n                <div class=\"row mb-2 form-body\">\n                  <div class=\"col\">\n                    <div class=\"d-flex\">\n                      <div class=\"pe-2\">".concat(firstName, "</div>\n                      ").concat(lastName, "\n                    </div>\n                    ").concat(title, "\n                    ").concat(email, "\n                    <div class=\"d-flex\">\n                      <div class=\"pe-2 w-50\">").concat(phoneCountryCode, "</div>\n                      <div class=\"pe-2 w-50\">").concat(phone, "</div>\n                    </div>  \n                    ").concat(citizenship, "\n                  </div>\n                </div>\n                  ");
            return form;
          },
          populatePersonSummary: function populatePersonSummary(formId) {
            var registration = store.objects.registration;
            var card = store.modal.actual.querySelector("#".concat(formId, "-card"));
            var summary = card.querySelector("#".concat(formId, "-summary"));
            var helpers = store.functions.helpers;
            var product = store.objects.product;
            var formName = registration["".concat(helpers.toCamelCase(formId))];
            var phone = helpers.phoneFormatting(formName.countryCode, formName.phone);
            summary.querySelector('.summary-contents').innerHTML = "\n                <div class=\"row\">\n                  <div class=\"col-12\">\n                    <p class=\"lh-1 mb-1 text-discount\">".concat(registration.allianceMember, "</p>\n                    <p class=\"lh-1 mb-1\">").concat(formName.firstName, " ").concat(formName.lastName, "</p>\n                    <p class=\"lh-1 mb-1\">").concat(formName.title, "</p>\n                    <p class=\"lh-1 mb-1\">").concat(phone, "</p>\n                    <p class=\"lh-1 mb-1\"><a class=\"link-primary text-decoration-underline\" href=\"mailto:").concat(formName.email, "\">").concat(formName.email, "</a></p>\n                    <p class=\"lh-1 mb-1\">").concat(formName.citizenship, "</p>\n                  </div>\n                <div>\n                ");
          },
          students: {
            addStudentForm: function addStudentForm() {
              var registration = store.objects.registration;
              var attendeePane = store.panes.attendee;
              var count = registration.attendeeFormCount;
              var parent = count > 0 ? attendeePane.querySelector("#student-".concat(count, "-card")) : attendeePane.querySelector('.pane-heading');
              var i = count + 1;
              store.functions.forms.creating.createForm(parent, "student-".concat(i));
              store.functions.panes.attendee.updateAttendeeFormCount();
            },
            createStudentFormFields: function createStudentFormFields(formId) {
              var creating = store.functions.forms.creating;
              var firstName = creating.createTextInputField(formId, 'First Name', 'text', 'required');
              var lastName = creating.createTextInputField(formId, 'Last Name', 'text', 'required');
              var title = creating.createTextInputField(formId, 'Title', 'text', '');
              var email = creating.createTextInputField(formId, 'Email', 'email', 'required');
              var code = creating.createTextInputField(formId, 'Country Code', 'number');
              var phone = creating.createTextInputField(formId, 'Phone', 'text', 'required');
              var citizenship = creating.createSelectField(formId, 'Citizenship', creating.countryOptions(), 'required');
              var company = creating.createTextInputField(formId, 'Company', 'text', '');
              var address = creating.createTextInputField(formId, 'Address', 'text', 'required');
              var city = creating.createTextInputField(formId, 'City', 'text', 'required');
              var state = creating.createTextInputField(formId, 'State', 'text', '');
              var postalCode = creating.createTextInputField(formId, 'Postal Code', 'text', '');
              var country = creating.createSelectField(formId, 'Country', creating.countryOptions(), 'required');
              var form = "\n                  <div class=\"row mt-2 mb-2 form-body\">\n                    \n                    <p class=\"fs-sm fw-bold mt-1 mb-2\">Info</p> \n                    <div class=\"row\">\n                      <div class=\"col-12 col-sm-6\">".concat(firstName, "</div> \n                      <div class=\"col-12 col-sm-6\">").concat(lastName, "</div> \n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-12 col-lg-6\">").concat(title, "</div> \n                      <div class=\"col-12 col-lg-6\">").concat(email, "</div> \n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-12 col-lg-6\">\n                        <div class=\"row\">\n                          <div class=\"col-12 col-sm-6 col-md-5 col-lg-6\">\n                            ").concat(code, "\n                          </div> \n                          <div class=\"col-12 col-sm-6 col-md-7 col-lg-6\">\n                            ").concat(phone, " \n                          </div>\n                        </div>   \n                      </div> \n                      <div class=\"col-12 col-lg-6\">").concat(citizenship, "</div> \n                    </div>\n                    \n                    <p class=\"fs-sm fw-bold mt-1 mb-2\">Company</p> \n                    <div class=\"row\">\n                      <div class=\"col-12 col-lg-6\">").concat(company, "</div> \n                      <div class=\"col-12 col-lg-6\">").concat(address, "</div> \n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-12 col-lg-6\">").concat(city, "</div> \n                      <div class=\"col-12 col-lg-6\">").concat(state, "</div> \n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-12 col-sm-6\">").concat(postalCode, "</div> \n                      <div class=\"col-12 col-sm-6\">").concat(country, "</div> \n                    </div>\n        \n        \n                  </div>\n                    ");
              return form;
            },
            populateStudentSummary: function populateStudentSummary(formId) {
              var registration = store.objects.registration;
              var card = store.modal.actual.querySelector("#".concat(formId, "-card"));
              var summary = card.querySelector("#".concat(formId, "-summary"));
              var helpers = store.functions.helpers;
              var formName = registration["".concat(helpers.toCamelCase(formId))];
              var phone = helpers.phoneFormatting(formName.countryCode, formName.phone);
              summary.querySelector('.summary-contents').innerHTML = "\n                  <div class=\"row\">\n                    <div class=\"col-12 col-sm-6\">\n                      <p class=\"lh-1 mb-1\">".concat(formName.firstName, " ").concat(formName.lastName, "</p>\n                      <p class=\"lh-1 mb-1\">").concat(formName.title, "</p>\n                      <p class=\"lh-1 mb-1\">").concat(phone, "</p>\n                      <p class=\"lh-1 mb-1\"><a class=\"link-primary text-decoration-underline\" href=\"mailto:").concat(formName.email, "\">").concat(formName.email, "</a></p>\n                      <p class=\"lh-1 mb-1\">").concat(formName.citizenship, "</p>\n                    </div>\n                    <div class=\"col-12 col-sm-6\">\n                      <p class=\"lh-1 mb-1\">").concat(formName.company, "</p>\n                      <p class=\"lh-1 mb-1\">").concat(formName.address, "</p>\n                      <p class=\"lh-1 mb-1\">").concat(formName.city, "</p>\n                      <p class=\"lh-1 mb-1\">").concat(formName.state, " ").concat(formName.postalCode, ", ").concat(formName.country, "</p>\n                    </div>\n                  <div>\n                  ");
            },
            renumberStudentForms: function renumberStudentForms() {
              var cards = store.panes.attendee.querySelectorAll('.card');
              cards.forEach(function (card) {
                var heading = card.querySelector('.heading');
                var form = card.querySelector('form');
                var oldFormId = form.id;
                var oldIndex = card.dataset.ljIndex;
                var newIndex = Array.from(cards).indexOf(card) + 1; // update card

                card.dataset.ljIndex = newIndex;
                card.id = "student-".concat(newIndex, "-card"); // update heading text

                heading.textContent = "Student ".concat(newIndex); // update form Id

                form.id = "student-".concat(newIndex); // card descendants

                card.querySelectorAll('*').forEach(function (el) {
                  // updated dataset
                  if (el.dataset.ljForm == oldFormId) {
                    el.dataset.ljForm = form.id;
                  }

                  if (el.dataset.ljIndex == oldIndex) {
                    el.dataset.ljIndex = newIndex;
                  } // update form fields


                  el.id = el.id.includes(oldIndex) ? el.id.replace(oldIndex, newIndex) : el.id; // update form field labels

                  if (el.tagName == 'LABEL') {
                    var oldLabel = el.getAttribute('for');
                    var newLabel = oldLabel.replace(oldIndex, newIndex);
                    el.setAttribute('for', newLabel);
                  }
                });
              });
            }
          }
        },
        resetting: {
          deleteForm: function deleteForm(e) {
            // data object references
            var payment = store.objects.payment;
            var registration = store.objects.registration;
            var thisModal = store.modal.actual;
            var helpers = store.functions.helpers; // update card references

            store.functions.cards.updateCards(); // element references

            var students = store.functions.forms.people.students;
            var formId = e.target.dataset.ljForm;
            var card = formId.includes('purchase-order') || formId.includes('credit-card') ? thisModal.querySelector('#payment-card') : thisModal.querySelector("#".concat(formId, "-card"));
            var forms = card.querySelectorAll("form");
            var thisForm = card.querySelector("#".concat(formId));
            var shippingIsBilling = card.querySelector('#shipping-is-billing'); //const heading = card.querySelector('.heading')
            // remove validated class from this form

            forms.forEach(function (form) {
              form.classList.remove('was-validated');
            }); // reset form

            forms.forEach(function (form) {
              form.reset();
            }); // reset tabs

            if (formId.includes('credit-card') || formId.includes('purchase-order')) {
              var creditCardTab = card.querySelector('#credit-card-tab');
              creditCardTab.click();
            } // show placeholder


            store.functions.forms.states.showPlaceholder(formId); // if form was 'your info' update status

            if (formId.includes('info')) {
              payment.customerInfo = 'incomplete';
            } else if (formId.includes('billing')) {
              payment.billingAddress = 'incomplete'; // if checkbox is selected, also clear shipping

              if (shippingIsBilling.selected) {
                payment.shippingAddress = 'incomplete';
                store.forms.shippingAddress.reset();
              }
            } else if (formId.includes('shipping')) {
              payment.shippingAddress = 'incomplete';
            } else if (formId.includes('credit-card')) {
              payment.creditCard = 'incomplete';
            } else if (formId.includes('purchase-order')) {
              payment.purchaseOrder = 'incomplete';
            } // delete this entire card, if it's a student
            else if (formId.includes('student')) {
              card.remove(); // if any form on the page is showing it was validated, then the form is complete

              if (store.panes.attendee.querySelector('.was-validated') != null) {
                registration.attendees.status = 'complete';
              } else {
                registration.attendees.status = 'incomplete';
              } // update quantity and price


              store.functions.panes.attendee.updateAttendeeCount(); // update form count

              store.functions.panes.attendee.updateAttendeeFormCount(); // publish attendee names
              //store.functions.panes.attendee.publishAttendeeNames()
              // add new form if we need to

              if (registration.attendeeFormCount < registration.attendeeCount + 1) {
                students.addStudentForm();
              } // renumber forms


              students.renumberStudentForms();
            } // update card references


            store.functions.cards.updateCards();

            if (payment.customerInfo != 'complete' || payment.billingAddress != 'complete' || payment.shippingAddress != 'complete' || payment.method != 'complete') {
              store.panes.payment.querySelector('.next-button').classList.add('disabled');
            }
          },
          removeFormCard: function removeFormCard(formId) {
            var helpers = store.functions.helpers;
            var oldCard = store.modal.actual.querySelector("#".concat(formId, "-card"));
            helpers.removeElement(oldCard);
          },
          resetAllForms: function resetAllForms() {
            var forms = store.forms.all;
            forms.forEach(function (form) {
              form.reset();
              form.classList.remove('was-validated');
            });
          }
        },
        saving: {
          saveFormDataInObject: function saveFormDataInObject(dataObject, formId) {
            var form = document.getElementById("".concat(formId));
            var formName = store.functions.helpers.toCamelCase(formId);
            var product = store.objects.product; // prepare object to store data

            dataObject["".concat(formName)] = {}; // create array of form fields

            var array = store.functions.helpers.createArrayFromElList(form, "#".concat(formId, " .form-floating")); // store values of each form field

            array.forEach(function (item) {
              var field = item.firstElementChild;
              var label = item.querySelector('label');
              var slug = ''; // get data from input fields

              if (field.tagName == 'INPUT') {
                slug = store.functions.helpers.toCamelCase(field.placeholder);
                var value = field.value;

                if (label.textContent == 'Phone') {
                  value = store.functions.helpers.stripJunkFromString(value);
                }

                dataObject["".concat(formName)][slug] = value;
              } // get data from select fields
              else {
                //const label = item.querySelector('label')
                slug = store.functions.helpers.toCamelCase(label.textContent);
                var opt = field.options[field.selectedIndex];
                dataObject["".concat(formName)][slug] = opt.value;
              }
            }); // alliance membership test

            if (formId == 'your-info') {
              var email = dataObject["".concat(formName)].email;
              this.lookupAllianceMembership(email);

              if (store.objects.cart.items.length > 0) {
                // get the first item in order summary card, compare it to carts to figure out which cart we're in
                var first = store.modal.actual.querySelector('#modal-payment-pane .cart-tile .product-title').textContent;
                var cart;

                if (first == store.objects.cart.items[0].title) {
                  cart = store.objects.cart;
                } else {
                  cart = store.objects.tmsCart;
                }

                store.functions.panes.cart.updateOrderSummaryFromCart(cart);
              }
            } // if student, publish attendee names


            if (formId.includes('student')); //
          },
          lookupAllianceMembership: function lookupAllianceMembership(email) {
            var registration = store.objects.registration;
            var helpers = store.functions.helpers;
            var domain = helpers.getDomainFromEmail(email); // reset membership

            registration.allianceMember = '';
            registration.alliance = false; // test membership

            var allianceMembers = ['gmail']; // test membership

            allianceMembers.forEach(function (member) {
              if (member == domain) {
                registration.alliance = true;
                registration.allianceMember = 'Alliance Member';
              }
            });
          },
          saveForm: function saveForm(e) {
            //const helpers = store.functions.helpers
            var registration = store.objects.registration; //const people = store.functions.forms.people

            var students = store.functions.forms.people.students;
            var addresses = store.functions.forms.addresses;
            var payment = store.objects.payment;
            var saving = store.functions.forms.saving;
            var states = store.functions.forms.states; // update references

            store.functions.cards.updateCards(); // this form

            var formId = e.target.dataset.ljForm;
            var errorMessage = store.panes.attendee.querySelector('.error-message'); // reference

            var billingCard = store.cards.billingAddress;
            var shippingCard = store.cards.shippingAddress;
            var paymentCard = store.cards.payment;
            var product = store.objects.product; // save data

            saving.saveFormDataInObject(registration, formId); // populate summary

            states.populateFormSummary(formId); // run if form-checking shows no errors

            var successActions = function successActions() {
              // show summary
              store.functions.forms.states.showSummary(formId);

              if (formId.includes('student')) {
                //update attendee count
                store.functions.panes.attendee.updateAttendeeCount(); // update attendee counter

                store.functions.panes.attendee.updateAttendeeCounter(); // update registration status

                registration.attendees.status = 'complete';
                errorMessage.classList.add('d-none'); // updateAttendeePane
                // publish attendee names
                // !!!!! FIX !!!!
                //store.functions.panes.attendee.publishAttendeeNames()
                // if no form needs validation anymore, add a form

                if (registration.attendeeFormCount == registration.attendeeCount) {
                  students.addStudentForm();
                }
              } else if (formId.includes('info')) {
                payment.customerInfo = 'complete'; // update quantity and price
                //if (product.type == 'Course') {
                //  store.functions.price.updateQuantityAndCalculatePrice(store.objects.registration.attendeeCount)
                //}
                //else {
                //  store.functions.panes.cart.updateOrderSummaryFromCart()
                //}
              } else if (formId.includes('billing')) {
                payment.billingAddress = 'complete'; // populate shipping form

                addresses.populateShipping(); // submit shipping form

                var shippingSave = shippingCard.querySelector('.save-button');
                var bypass = {};
                bypass.target = shippingSave;
                saving.saveForm(bypass);
              } else if (formId.includes('shipping')) {
                payment.shippingAddress = 'complete';
              } else if (formId.includes('credit-card')) {
                payment.creditCard = 'complete';
                payment.method = 'complete';
              } else if (formId.includes('purchase-order')) {
                payment.purchaseOrder = 'complete';
                payment.method = 'complete';
              }

              if (payment.customerInfo == 'complete' && payment.billingAddress == 'complete' && payment.shippingAddress == 'complete' && payment.method == 'complete') {
                store.panes.payment.querySelector('.next-button').classList.remove('disabled');
              }
            }; // reveal summary


            saving.checkFormForErrors(formId, successActions);
          },
          checkFormForErrors: function checkFormForErrors(formId, successAction) {
            var form = document.getElementById("".concat(formId));
            var errors = [];
            var requiredFields = form.querySelectorAll('[required]');
            requiredFields.forEach(function (field) {
              return field.validity.valid ? '' : errors.push(field);
            });
            form.classList.add('was-validated');

            if (errors.length == 0) {
              // form.submit() -- turn on for production
              successAction();
            }
          }
        },
        states: {
          populateFormSummary: function populateFormSummary(formId) {
            var people = store.functions.forms.people;
            var students = store.functions.forms.people.students;
            var addresses = store.functions.forms.addresses;
            var payment = store.functions.forms.payment;

            if (formId.includes('info')) {
              people.populatePersonSummary(formId);
            } else if (formId.includes('student')) {
              students.populateStudentSummary(formId);
            } else if (formId.includes('address')) {
              addresses.populateAddressSummary(formId);
            } else if (formId.includes('purchase-order')) {
              payment.populatePurchaseOrderSummary(formId);
            } else if (formId.includes('credit-card')) {
              payment.populateCreditCardSummary(formId);
            }
          },
          showForm: function showForm(e) {
            var thisModal = store.modal.actual;
            var target = e.target;
            var formId = target.dataset.ljForm;
            var card = formId.includes('purchase-order') || formId.includes('credit-card') ? thisModal.querySelector('#payment-card') : thisModal.querySelector("#".concat(formId, "-card")); //const thisForm = card.querySelector('#formId')

            var forms = card.querySelectorAll('form');
            var thisForm = card.querySelector('form');
            var cardHeader = card.querySelector('.card-header');
            var cardBody = card.querySelector('.card-body');
            var heading = cardBody.querySelector('.heading');
            var placeholder = card.querySelector('.placeholder');
            var summaries = card.querySelectorAll('.summary');
            var registration = store.objects.registration;
            var helpers = store.functions.helpers; // payment card header things

            var cardHeading = card.querySelector('.card-heading');
            var paymentNavItems = card.querySelectorAll('.card-header .nav-item');
            card.classList.add('border-heavy');
            card.classList.remove('border-0');
            helpers.hide(placeholder);
            helpers.hide(cardHeader);
            helpers.reveal(cardBody);
            helpers.reveal(heading);
            forms.forEach(function (form) {
              helpers.reveal(form);
            });
            summaries.forEach(function (summary) {
              helpers.hide(summary);
            });
            helpers.reveal(heading);
            card.classList.add('bg-faded-info');

            if (formId.includes('student')) {
              registration.attendees.status = 'incomplete';
            }

            card.classList.remove('border-0');
            cardBody.classList.remove('p-0');
            cardBody.classList.add('p-3');

            if (formId.includes('purchase-order') || formId.includes('credit-card')) {
              store.functions.forms.payment.showPaymentForm(card);
              paymentNavItems.forEach(function (item) {
                helpers.reveal(item);
              });
              helpers.hide(cardHeading);

              if (formId.includes('credit-card')) {
                thisForm.reset();
              }
            }
          },
          showPlaceholder: function showPlaceholder(formId) {
            var thisModal = store.modal.actual;
            var form = thisModal.querySelector("#".concat(formId));
            var card = formId.includes('purchase-order') || formId.includes('credit-card') ? thisModal.querySelector('#payment-card') : thisModal.querySelector("#".concat(formId, "-card"));
            var cardHeader = card.querySelector('.card-header');
            var cardBody = card.querySelector('.card-body');
            var heading = cardBody.querySelector('.heading');
            var placeholder = card.querySelector('.placeholder');
            var summaries = card.querySelectorAll('.summary');
            var checkbox = card.querySelector(".checkbox");
            var helpers = store.functions.helpers;
            var payment = store.objects.payment;
            card.classList.remove('border-heavy');
            card.classList.add('border-0');
            helpers.reveal(placeholder);
            helpers.hide(form);
            helpers.hide(heading);
            helpers.hide(cardHeader);
            summaries.forEach(function (summary) {
              helpers.hide(summary);
            }); // hide checkbox

            if (checkbox != null) {
              helpers.hide(checkbox);
            } // adapt appearance


            card.classList.add('border-0');
            card.classList.remove('bg-faded-info');
            cardBody.classList.remove('p-3');
            cardBody.classList.add('p-0');

            if (formId.includes('student')) {
              placeholder.classList.remove('w-100');
            }

            if (formId.includes('purchase-order') || formId.includes('credit-card')) {
              store.functions.forms.payment.hidePaymentForm(card);
            }
          },
          showSummary: function showSummary(formId) {
            var helpers = store.functions.helpers;
            var thisModal = store.modal.actual;
            var card = formId.includes('purchase-order') || formId.includes('credit-card') ? thisModal.querySelector('#payment-card') : thisModal.querySelector("#".concat(formId, "-card"));
            var summary = store.modal.actual.querySelector("#".concat(formId, "-summary"));
            var form = store.modal.actual.querySelector("#".concat(formId));
            var placeholder = card.querySelector(".placeholder");
            var heading = card.querySelector(".heading");
            var checkbox = card.querySelector('.checkbox');
            var cardHeader = card.querySelector('.card-header');
            var cardHeading = card.querySelector('.card-heading');
            var paymentNavItems = card.querySelectorAll('.card-header .nav-item');
            var creditCardWrapper = card.querySelector('.credit-card-wrapper');
            var cardsAccepted = card.querySelector('.cards-accepted');
            helpers.reveal(summary);
            helpers.hide(form);
            helpers.hide(placeholder);
            helpers.reveal(cardHeader);
            helpers.hide(heading); // for payment card

            paymentNavItems.forEach(function (item) {
              helpers.hide(item);
            });
            helpers.reveal(cardHeading);
            helpers.hide(creditCardWrapper);
            helpers.hide(cardsAccepted);

            if (checkbox != null) {
              helpers.reveal(checkbox);
            }

            card.classList.remove('bg-faded-info');
          },
          toggleShipping: function toggleShipping(e) {
            // references
            store.functions.forms.updateForms();
            store.functions.cards.updateCards();
            var payment = store.objects.payment;

            if (e.target.checked) {
              store.forms.shippingAddress.reset();
              payment.shippingAddress = 'incomplete';
              var x = {};
              x.target = store.cards.shippingAddress.querySelector('button');
              store.functions.forms.states.showForm(x);
              store.functions.helpers.reveal(store.cards.shippingAddress);
            } else {
              store.functions.forms.addresses.populateShipping();
              payment.shippingAddress = 'complete';
              var formId = 'shipping-address';
              store.functions.forms.states.showPlaceholder(formId);
              store.functions.helpers.hide(store.cards.shippingAddress);
            }
          }
        },
        updateForms: function updateForms() {
          store.forms.all = store.modal.actual.querySelectorAll('form');
          store.forms.customerInfo = store.panes.payment.querySelector('#your-info');
          store.forms.billingAddress = store.panes.payment.querySelector('#billing-address');
          store.forms.shippingAddress = store.panes.payment.querySelector('#shipping-address');
        }
      },
      modal: {
        launchModal: function launchModal(e) {
          store.functions.data.clearObjectData(store.objects.product);
          store.functions.data.clearObjectData(store.objects.registration);
          store.functions.data.clearObjectData(store.objects.payment);
          store.functions.data.getProductData(e);
          store.functions.modal.populateModal();
        },
        populateModal: function populateModal() {
          var panes = store.functions.panes;
          panes.product.populateProductPane();
          panes.cart.populateCartPane();
          panes.attendee.populateAttendeePane();
          panes.payment.populatePaymentPane();
          panes.thankYou.populateThankYouPane();
        },
        resetModal: function resetModal() {
          var helpers = store.functions.helpers;
          var thisModal = store.modal.actual;
          var tabs = thisModal.querySelectorAll('.modal-header ul li a'); // show Modal Header

          helpers.reveal(store.modal.header); // hide tabs

          tabs.forEach(function (tab) {
            return helpers.hide(tab);
          }); // show first pane, display first tab

          helpers.reveal(store.tabs.product);
          store.tabs.product.click(); // reset forms

          store.functions.forms.resetting.resetAllForms(); // reset product pane

          store.functions.panes.product.resetProductPane(); // reset attendee and registration data

          store.functions.data.clearObjectData(store.objects.registration);
          store.functions.data.clearObjectData(store.objects.product);
          store.functions.data.clearObjectData(store.objects.payment);
          store.functions.data.clearObjectData(store.objects.tmsCart);
          store.functions.panes.product.resetProductPane(); // remove all forms on Attendee Pane

          store.functions.panes.attendee.resetAttendeePane(); // reset cart pane

          store.functions.panes.cart.resetCartPane(); // reset payment pane

          store.functions.panes.payment.resetPaymentPane();
        }
      },
      panes: {
        attendee: {
          backButtonOnClick: function backButtonOnClick() {
            store.tabs.product.click();
          },
          nextButtonOnClick: function nextButtonOnClick(e) {
            var product = store.objects.product;
            var registration = store.objects.registration;
            var cart = store.objects.cart;
            var tmsCart = store.objects.tmsCart;
            var type = e.target.dataset.ljType;
            var format = e.target.dataset.ljFormat;
            var code = e.target.dataset.ljCode;
            e.preventDefault();

            var successAction = function successAction() {
              // store.forms.attendee.submit() -- turn on for production
              errorMessage.textContent = '';

              if (type == 'Course' && format != 'On-demand') {
                // adding product to tms cart
                product.quantity = registration.attendeeCount;
                store.functions.cart.addProductToCart(tmsCart); //storeAttendeeInfoInCartItem(code, tmsCart)

                store.functions.panes.cart.updateOrderSummaryFromCart(tmsCart);
                store.functions.tabs.paymentTabOnClick();
              } else {
                product.quantity = registration.attendeeCount;
                store.functions.cart.addProductToCart(cart); //storeAttendeeInfoInCartItem(code, cart)

                store.functions.panes.cart.updateOrderSummaryFromCart(cart);
                store.functions.tabs.cartTabOnClick();
              }
            };

            var errorMessage = store.panes.attendee.querySelector('.error-message');

            if (store.objects.registration.attendees.status == 'complete') {
              successAction();
            } else {
              errorMessage.textContent = 'Complete attendee registration to continue';
            }
          },
          populateAttendeePane: function populateAttendeePane() {
            var registration = store.objects.registration; // data objects

            registration.attendeeFormCount = 0;
            registration.attendeeCount = 0;
            registration.attendees = {};
            registration.attendeesList = []; // set attendee registrations status on load

            registration.attendees.status = 'incomplete'; // initial load with a single student form

            store.functions.forms.people.students.addStudentForm();
            store.functions.panes.attendee.updateAttendeeCount(); // add event listeners for buttons

            store.buttons.attendeeBack.addEventListener("mousedown", store.functions.panes.attendee.backButtonOnClick);
            store.buttons.attendeeNext.addEventListener("mousedown", store.functions.panes.attendee.nextButtonOnClick);
          },
          publishAttendeeNames: function publishAttendeeNames() {
            var registration = store.objects.registration; // clear attendees array

            registration.attendeesList = [];
            var attendeesList = registration.attendeesList; // create array of attendee first names

            var firstNameArray = [];
            var courseFirstNameFields = store.panes.attendee.querySelectorAll('.first-name');
            courseFirstNameFields.forEach(function (field) {
              return firstNameArray.push(field.value);
            }); // create array of attendee last names

            var lastNameArray = [];
            var courseLastNameFields = store.panes.attendee.querySelectorAll('.last-name');
            courseLastNameFields.forEach(function (field) {
              return lastNameArray.push(field.value);
            }); // clear attendees array
            //attendees.length = 0
            // push attendee names to array

            firstNameArray.forEach(function (fname) {
              var i = firstNameArray.indexOf(fname);
              attendeesList.push("".concat(fname, " ").concat(lastNameArray[i]));
            }); // populate attendees in Payment and Thank You Panes

            var paymentPaneAttendees = store.panes.payment.querySelector('.attendees');
            var thankYouPaneAttendees = store.panes.thankYou.querySelector('.attendees');
            var attendeesString = '';
            attendeesList.forEach(function (item) {
              attendeesString += "".concat(item, ", ");
            });
            attendeesString = attendeesString.substring(0, attendeesString.length - 2);
            registration.attendeesString = attendeesString; //console.log(attendeesString)
            //console.log(registration.attendeesString)
            //paymentPaneAttendees.textContent = attendeesString
            //thankYouPaneAttendees.textContent = attendeesString
          },
          resetAttendeePane: function resetAttendeePane() {
            var cards = store.panes.attendee.querySelectorAll('.card');
            cards.forEach(function (card) {
              store.functions.helpers.removeElement(card);
            });
          },
          updateAttendeeCount: function updateAttendeeCount() {
            var product = store.objects.product;
            var validatedForms = store.panes.attendee.querySelectorAll('.was-validated');
            store.objects.registration.attendeeCount = validatedForms.length != undefined ? validatedForms.length : 0; // store.functions.price.updateQuantityAndCalculatePrice(store.objects.registration.attendeeCount)

            var cart = product.type == 'Course' && product.type != 'On-demand' ? store.objects.tmsCart : store.objects.cart; //store.functions.panes.cart.updateOrderSummaryFromCart(cart)
          },
          updateAttendeeFormCount: function updateAttendeeFormCount() {
            store.objects.registration.attendeeFormCount = store.panes.attendee.querySelectorAll('form').length;
          },
          updateAttendeeCounter: function updateAttendeeCounter() {
            var registration = store.objects.registration;
            var product = store.objects.product;
            var toDollars = store.functions.price.toDollars;
            var preTaxSubtotal = registration.attendeeCount * product.price;
            var subtotal = "".concat(registration.attendeeCount > 0 ? toDollars(preTaxSubtotal) : toDollars(0));
            var breakdown = "(".concat(registration.attendeeCount, " x ").concat(toDollars(product.price), ")"); //store.panes.attendee.querySelector('.subtotal').textContent = subtotal

            store.panes.attendee.querySelector('.breakdown').textContent = breakdown;
          }
        },
        cart: {
          adaptNextButton: function adaptNextButton() {
            var cartPane = store.panes.cart;
            var nextButton = cartPane.querySelector('.next-button');
            nextButton.addEventListener('mousedown', store.functions.panes.cart.nextButtonOnClick);
          },
          adaptBackButton: function adaptBackButton() {
            var cartPane = store.panes.cart;
            var backButton = store.modal.actual.querySelector('#modal-cart-pane .back-button');
            backButton.addEventListener('mousedown', store.functions.panes.cart.backButtonOnClick);
          },
          backButtonOnClick: function backButtonOnClick(e) {
            //store.tabs.product.querySelector('.back-button').click()
            e.preventDefault();
            var productBack = store.panes.product.querySelector('.back-button');
            store.functions.modal.resetModal();
            productBack.click();
          },
          clearCartItemTiles: function clearCartItemTiles() {
            //const tiles = store.modal.actual.querySelectorAll('#modal-cart-pane .cart-tile')
            //if (tiles != null) {
            //  tiles.forEach(tile => { store.functions.helpers.removeElement(tile)})
            //}
            store.modal.actual.querySelector('#modal-cart-pane .card-body').innerHTML = '';
          },
          createCartItem: function createCartItem(item, index) {
            var registration = store.objects.registration;
            var creating = store.functions.forms.creating;
            var author = item.type == 'Book' ? "by ".concat(item.author) : '';
            var code = item.code;
            var cart = item.type == 'Course' && item.format != 'On-Demand' ? store.objects.tmsCart : store.objects.cart;
            var cartItem;
            cart.items.forEach(function (arrayItem) {
              if (code == item.code) {
                cartItem = arrayItem;
              }
            }); // item details

            var details;

            if (item.type == 'Book') {
              details = "".concat(item.type, ", ").concat(item.format, ", ").concat(item.pages, " pages");
            } else if (item.type == 'Module') {
              details = "".concat(item.type, ", On-demand, ").concat(item.duration, " hours");
            } else if (item.type == 'Course' && item.format != 'On-demand') {
              details = "".concat(item.format, " ").concat(item.type, ", ").concat(item.city);
            } // course dates


            var dates;
            dates = item.type == 'Course' && item.format != 'On-demand' ? "".concat(item.startDateText, " - ").concat(item.endDateText) : ''; // Student List

            var attendeeString = '';

            if (item.type == 'Course' || item.type == 'Module') {
              var i = 0;
              cartItem.attendees.forEach(function (attendee) {
                var separator = ',';

                if (i == cartItem.attendees.length - 1) {
                  separator = '';
                }

                attendeeString += attendee.firstName + ' ';
                attendeeString += "".concat(attendee.lastName, " ").concat(separator, " ");
                i++;
              });
            }

            var inflection = '';

            if (item.type == 'Course' || item.type == 'Module') {
              if (cartItem.attendees.length > 1) inflection = 's';
            }

            var students = item.type == 'Course' || item.type == 'Module' ? "".concat(cartItem.attendees.length, " Student").concat(inflection, ": ").concat(attendeeString) : '';
            var price = store.functions.price.toDollars(item.price);
            var qty = creating.createTextInputField("cart-item-".concat(index, "-quantity"), "Qty", 'number', 'required');
            var qtyContainer = item.type == 'Course' || item.type == 'Module' ? '' : "<div class=\"pt-2 quantity-container\" style=\"width:80px;\">".concat(qty, "</div>"); // show edit button for non-books

            var editButton = item.type == 'Book' ? "" : "<a class=\"pt-2 me-3 edit-button link-edit text-decoration-underline d-inline-block\" data-lj-type=\"".concat(item.type, "\" data-lj-format=\"").concat(item.format, "\" data-lj-code=\"").concat(item.code, "\">edit</a>");
            var template = "\n                  <div class=\"cart-tile\" id=\"cart-tile-".concat(index, "\">\n                    <div class=\"col-12 border-top border-primary mb-2\"></div>\n                      <div class=\"mb-1 row\">\n                        <div class=\"col-7\">\n                          <div class=\"product-title mb-1 fw-bold\">").concat(item.title, "</div>\n                          <p class=\"product-author lh-1 pt-0 mb-1\">").concat(author, "</p>\n                          <p class=\"product-details lh-1 pt-0 mb-1\">").concat(details, "</p>\n                          <p class=\"product-dates lh-1 pt-0 mb-1\">").concat(dates, "</p>\n                          \n                        </div>\n                        <div class=\"col-5 d-flex flex-wrap justify-content-end\">\n                          <p class=\"price lh-1 mb-0 text-end fw-bold w-100\">").concat(price, "</p>\n                          ").concat(qtyContainer, "\n                        </div>\n                      </div>\n                      <div class=\"mb-3 row\">\n                        <p class=\"students lh-1 pt-0 mb-1\">").concat(students, "</p>\n                        <div>\n                          ").concat(editButton, "\n                          <a class=\"pt-2 delete-button link-delete text-decoration-underline d-inline-block\" data-lj-type=\"").concat(item.type, "\" data-lj-format=\"").concat(item.format, "\" data-lj-code=\"").concat(item.code, "\">delete</a>\n                        <div>\n                      </div>\n                  </div>\n                ");
            return template;
          },
          deleteCartItem: function deleteCartItem(e) {
            e.preventDefault();
            var code = e.target.dataset.ljCode;
            var type = e.target.dataset.ljType;
            var format = e.target.dataset.ljFormat;
            var cart = type == 'Course' && format != 'On-demand' ? store.objects.tmsCart : store.objects.cart;

            var deleteItem = function deleteItem(cart, code) {
              var items = cart.items; // removes item from cart items array

              for (var i = 0; i < items.length; i++) {
                if (items[i].code == code) {
                  items.splice(i, 1);
                }
              } // if we're using TMS cart, then also clear Attendee pane

            };

            deleteItem(cart, code);
            store.functions.panes.cart.updateOrderSummaryFromCart(cart);
          },
          editCartItem: function editCartItem(e) {
            //console.log('clicked on edit cart item')
            var code = e.target.dataset.ljCode;
            var type = e.target.dataset.ljType;
            var format = e.target.dataset.ljFormat;

            if (type == 'Course' && format != 'On Demand') {
              // no need to reset attendee pane -- data should still be there
              // we do need to clear & reset the cart
              store.functions.data.clearObjectData(store.objects.tmsCart);
              store.objects.tmsCart.items = []; // and go to the attendee screen

              store.tabs.attendee.click();
            } // store.functions.panes.attendee.resetAttendeePane()
            // store.functions.panes.attendee.populateAttendeePane()

          },
          enableCartItemEditButton: function enableCartItemEditButton(tile) {
            var editButton = tile.querySelector('.edit-button') != null ? tile.querySelector('.edit-button') : null;

            if (editButton != null) {
              editButton.addEventListener('mousedown', store.functions.panes.cart.editCartItem);
            }
          },
          enableCartItemDeleteButton: function enableCartItemDeleteButton(tile) {
            var deleteButton = tile.querySelector('.delete-button');
            deleteButton.addEventListener('mousedown', store.functions.panes.cart.deleteCartItem);
          },
          enableQuantityField: function enableQuantityField(tile, item, index, cart) {
            var ff = tile.querySelector('.form-floating');
            ff.classList.remove('mb-3');
            var qty = tile.querySelector('input'); //qty.setAttribute('min', 1)

            qty.value = item.quantity;
            qty.dataset.ljIndex = index;
            var cartName = cart == store.objects.cart ? 'cart' : 'tmsCart';
            qty.dataset.ljCart = cartName;
            qty.addEventListener('change', store.functions.panes.cart.onQuantityChange);
          },
          nextButtonOnClick: function nextButtonOnClick(e) {
            e.preventDefault();
            store.functions.panes.cart.updateOrderSummaryFromCart(store.objects.cart);
            store.functions.tabs.paymentTabOnClick();
          },
          onQuantityChange: function onQuantityChange(e) {
            var cartItems = store.objects.cart.items;
            var target = e.target;
            var value = target.value;
            var index = target.dataset.ljIndex;
            var cartName = target.dataset.ljCart;
            cartItems[index - 1].quantity = value;
            store.functions.cart.updateCartItemCount(store.objects[cartName]);
            store.functions.cart.calculateCartSubtotal(store.objects[cartName]);
            store.functions.cart.calculateCartTotals(store.objects[cartName]);
            store.functions.panes.cart.updateCartPaneSubtotal(store.objects[cartName]);
            store.functions.panes.cart.updatePaymentPaneSubtotal(store.objects[cartName]);
            store.functions.panes.cart.updateThankYouPaneSubtotal(store.objects[cartName]);
          },
          populateAllCartItemTiles: function populateAllCartItemTiles(parent, cart) {
            var cartItems = cart.items; // populate tiles
            // if cart is empty populate message, else populate cart items

            if (cartItems.length < 1) {
              var populateEmptyCartMessage = function populateEmptyCartMessage(parent) {
                var message = "\n                    <p>There are no items in your cart.</p>\n                    ";
                parent.insertAdjacentHTML('beforeend', message);
              };

              populateEmptyCartMessage(parent);
            } else {
              cartItems.forEach(function (item) {
                // set index
                var index = cartItems.indexOf(item) + 1; // create cartItemTile

                var cartItemTile = store.functions.panes.cart.createCartItem(item, index); // populate cartItemTile

                store.functions.panes.cart.populateCartItemTile(parent, cartItemTile); // reference tile in DOM

                var tile = parent.querySelector("#cart-tile-".concat(index)); // enable quantity control

                if (item.type != 'Course' && item.type != 'Module') {
                  store.functions.panes.cart.enableQuantityField(tile, item, index, cart);
                } // enable cart item edit button


                store.functions.panes.cart.enableCartItemEditButton(tile); // enable cart item delete button

                store.functions.panes.cart.enableCartItemDeleteButton(tile);
              });
            }
          },
          populateCartItemTile: function populateCartItemTile(parent, cartItemTile) {
            parent.insertAdjacentHTML('beforeend', cartItemTile);
          },
          populateCartPane: function populateCartPane() {
            // buttons
            store.functions.panes.cart.adaptNextButton();
            store.functions.panes.cart.adaptBackButton();
          },
          resetCartPane: function resetCartPane() { },
          updateCartPane: function updateCartPane() { },
          updateCartPaneSubtotal: function updateCartPaneSubtotal(cart) {
            store.modal.actual.querySelector('#modal-cart-pane .subtotal').textContent = cart.subtotalFormatted;
            store.modal.actual.querySelector('#modal-cart-pane .item-count').textContent = cart.itemCount;
          },
          updateOrderSummaryFromCart: function updateOrderSummaryFromCart(cart) {
            var product = store.objects.product;
            var cardBody = store.panes.payment.querySelector('.order-summary');
            var toDollars = store.functions.price.toDollars; // calculations

            store.functions.cart.updateCartItemCount(cart);
            store.functions.cart.calculateCartSubtotal(cart);
            store.functions.cart.calculateCartTotals(cart); // clear order summary card on payment and thank you panes

            store.panes.cart.querySelector('.order-summary').innerHTML = '';
            store.panes.payment.querySelector('.order-summary').innerHTML = '';
            store.panes.thankYou.querySelector('.order-summary').innerHTML = ''; // populate cart items on payment and thank you page

            store.functions.panes.cart.populateAllCartItemTiles(store.modal.actual.querySelector('#modal-cart-pane .order-summary'), cart);
            store.functions.panes.cart.populateAllCartItemTiles(store.panes.payment.querySelector('.order-summary'), cart);
            store.functions.panes.cart.populateAllCartItemTiles(store.panes.thankYou.querySelector('.order-summary'), cart); // remove quantity and delete controls from thank you page

            store.panes.thankYou.querySelectorAll('.delete-button').forEach(function (button) {
              button.remove();
            });
            store.panes.thankYou.querySelectorAll('.quantity-container').forEach(function (el) {
              var qty = el.querySelector('.qty');
              var qtyTemplate = "\n                  <p>quantity: ".concat(qty.value, "</p>");
              el.insertAdjacentHTML('afterend', qtyTemplate);
              el.remove();
            });
            store.functions.panes.cart.updateCartPaneSubtotal(cart);
            store.functions.panes.cart.updatePaymentPaneSubtotal(cart);
            store.functions.panes.cart.updateThankYouPaneSubtotal(cart);
          },
          updatePaymentPaneSubtotal: function updatePaymentPaneSubtotal(cart) {
            store.modal.actual.querySelector('#modal-payment-pane .subtotal').textContent = cart.subtotalFormatted;
            store.modal.actual.querySelector('#modal-payment-pane .item-count').textContent = cart.itemCount;
            store.panes.payment.querySelector('.discount-label').textContent = cart.discountLabel;
            store.panes.payment.querySelector('.discount-amount').textContent = cart.discountAmount;
            store.panes.payment.querySelector('.discount-reason').textContent = cart.discountReason;
            store.panes.payment.querySelector('.discounted-subtotal-label').textContent = cart.discountedSubtotalLabel;
            store.panes.payment.querySelector('.discounted-subtotal').textContent = cart.discountedSubtotal;
            store.panes.payment.querySelector('.tax-amount').textContent = store.functions.price.toDollars(cart.estimatedTaxSubtotal);
            store.panes.payment.querySelector('.total').textContent = store.functions.price.toDollars(cart.totalCostWithTax);
          },
          updateThankYouPaneSubtotal: function updateThankYouPaneSubtotal(cart) {
            store.modal.actual.querySelector('#modal-thank-you-pane .subtotal').textContent = cart.subtotalFormatted;
            store.modal.actual.querySelector('#modal-thank-you-pane .item-count').textContent = cart.itemCount;
            store.panes.thankYou.querySelector('.discount-label').textContent = cart.discountLabel;
            store.panes.thankYou.querySelector('.discount-amount').textContent = cart.discountAmount;
            store.panes.thankYou.querySelector('.discount-reason').textContent = cart.discountReason;
            store.panes.thankYou.querySelector('.discounted-subtotal-label').textContent = cart.discountedSubtotalLabel;
            store.panes.thankYou.querySelector('.discounted-subtotal').textContent = cart.discountedSubtotal;
            store.panes.thankYou.querySelector('.tax-amount').textContent = store.functions.price.toDollars(cart.estimatedTaxSubtotal);
            store.panes.thankYou.querySelector('.total').textContent = store.functions.price.toDollars(cart.totalCostWithTax);
          }
        },
        payment: {
          backButtonOnClick: function backButtonOnClick() {
            store.tabs.attendee.click();
          },
          nextButtonOnClick: function nextButtonOnClick() {
            store.functions.tabs.thankYouTabOnClick();
          },
          enablePaymentForms: function enablePaymentForms() {
            // reference elements
            var card = store.cards.payment;
            var cardBody = card.querySelector('.card-body');
            var placeHolder = card.querySelector('.placeholder');
            var saveButtons = card.querySelectorAll('.save-button'); // add purchase order summary

            var purchaseOrderSummaryTemplate = store.functions.forms.creating.formDataSummaryTemplate('purchase-order');
            cardBody.insertAdjacentHTML('beforeend', purchaseOrderSummaryTemplate); // add credit card summary

            var creditCardSummaryTemplate = store.functions.forms.creating.formDataSummaryTemplate('credit-card');
            cardBody.insertAdjacentHTML('beforeend', creditCardSummaryTemplate); // add event listener to payment form

            placeHolder.addEventListener('mousedown', store.functions.forms.states.showForm);
            saveButtons.forEach(function (button) {
              button.addEventListener('mousedown', store.functions.forms.saving.saveForm);
            });
            var editButtons = card.querySelectorAll('.edit-button');
            editButtons.forEach(function (button) {
              button.addEventListener('mousedown', store.functions.forms.states.showForm);
            });
            var deleteButtons = card.querySelectorAll('.delete-button');
            deleteButtons.forEach(function (button) {
              button.addEventListener('mousedown', store.functions.forms.resetting.deleteForm);
            });
          },
          populatePaymentPane: function populatePaymentPane() {
            // update references
            store.functions.forms.updateForms;
            store.functions.cards.updateCards;
            var paymentPane = store.panes.payment;
            var product = store.objects.product;
            var helpers = store.functions.helpers;
            var creating = store.functions.forms.creating; // populate all cart items

            /*
            paymentPane.querySelector('.product-title').textContent = product.title
            paymentPane.querySelector('.product-details').textContent = product.detailsSummary
            paymentPane.querySelector('.course-dates').textContent = (product.courseDates != undefined) ? product.courseDates : ''
            paymentPane.querySelector('.discount-label').textContent = product.discountLabel
            paymentPane.querySelector('.discount-amount').textContent = product.discountAmount
            paymentPane.querySelector('.discount-reason').textContent = product.discountReason
            */

            var cardHeading = paymentPane.querySelector('.customer-information-heading'); // create customer info form

            var customerForm = creating.createForm(cardHeading, 'your-info'); // create billing address form

            var billingForm = creating.createForm(customerForm, 'billing-address'); // create shipping address form

            var shippingForm = creating.createForm(billingForm, 'shipping-address'); // create payment forms

            store.functions.panes.payment.enablePaymentForms(); // addd event listeners for buttons

            store.buttons.paymentNext.addEventListener("mousedown", store.functions.panes.payment.nextButtonOnClick);
            store.buttons.paymentBack.addEventListener("mousedown", store.functions.panes.payment.backButtonOnClick);
          },
          resetPaymentPane: function resetPaymentPane() {
            var paymentPane = store.panes.payment;
            var card = store.cards.payment;
            var cardFooter = card.querySelector('.card-footer');
            var helpers = store.functions.helpers; //cardFooter(cardFooter)

            var x = {};
            x.target = card.querySelector('.delete-button');
            store.functions.forms.resetting.deleteForm(x);
          }
        },
        product: {
          adaptNextButton: function adaptNextButton() {
            var product = store.objects.product;

            if (product.type != 'Course' || product.format == 'On-demand') {
              store.buttons.productNext.querySelector('span').textContent = 'Add to Cart';
              store.buttons.productNext.dataset.ljForm = 'product-pane-quantity';
            }
          },
          addQuantityForm: function addQuantityForm() {
            var product = store.objects.product;

            if (product.type != 'Course' && product.type != 'Module') {
              var productOverview = store.panes.product.querySelector('.product-overview');
              productOverview.insertAdjacentHTML("afterend", store.functions.forms.creating.createQuantityForm('product-pane-quantity'));
            }
          },
          backButtonOnClick: function backButtonOnClick(e) {
            //e.preventDefault()
            store.functions.modal.resetModal();
          },
          nextButtonOnClick: function nextButtonOnClick() {
            var product = store.objects.product; // if we're using the TMS Cart.... don't add to cart yet...

            if (product.type == 'Course' && product.format != 'On-demand') {
              var cart = store.objects.tmsCart;
              store.functions.tabs.attendeeTabOnClick(); // instead... pass product info to action button on attendee screen

              var button = store.panes.attendee.querySelector('.next-button');
              button.dataset.ljType = product.type;
              button.dataset.ljFormat = product.format;
              button.dataset.ljCode = product.code;
            } // we need to use Pimcore cart... but still get attendee info
            else if (product.format == 'On-demand' || product.type == 'Module') {
              var _cart = store.objects.cart;
              store.functions.tabs.attendeeTabOnClick();

              var _button = store.panes.attendee.querySelector('.next-button');

              _button.dataset.ljType = product.type;
              _button.dataset.ljFormat = product.format;
              _button.dataset.ljCode = product.code;
            } else {
              var _cart2 = store.objects.cart;
              store.functions.cart.addProductToCart(_cart2);
              store.functions.panes.cart.updateOrderSummaryFromCart(_cart2);
              store.functions.tabs.cartTabOnClick();
            }
          },
          populateProductPane: function populateProductPane() {
            var product = store.objects.product;
            var productPane = store.panes.product;
            var cards = store.panes.product.querySelectorAll('.card');
            var cardTwoBody = cards[1].querySelector('.card-body'); // populate product details area

            if (product.type == 'Course') {
              product.meta1Heading = 'Format';
              product.meta1 = product.format;

              if (product.scheduled == true) {
                product.meta2Heading = product.format == 'Virtual' ? 'Time Zone' : 'Location';
                product.meta2 = "".concat(product.prep, " ").concat(product.city, " (GMT ").concat(product.timeZone, ")");
                product.meta3Heading = "Instructor";
                product.meta3 = product.instructor;
              }

              if (product.format == 'On-demand') {
                product.meta2Heading = '';
                product.meta2 = '';
                product.meta3Heading = '';
                product.meta3 = '';
              }
            }

            if (product.type == 'Book') {
              product.meta1Heading = 'Author';
              product.meta1 = product.author;
              product.meta2Heading = 'Format';
              product.meta2 = "".concat(product.format, ", ").concat(product.pages, " pages");
              product.meta3Heading = 'Publication';
              product.meta3 = "".concat(product.publication);
            }

            if (product.type == 'Module') {
              product.meta1Heading = 'Format';
              product.meta1 = 'On-demand';
              product.meta2Heading = 'Duration';
              product.meta2 = "Approx. ".concat(product.duration, " hours");
              product.meta3Heading = '';
              product.meta3 = "";
            }

            productPane.querySelector('.product-title').textContent = product.title;
            productPane.querySelector('.meta-heading-1').textContent = product.meta1Heading;
            productPane.querySelector('.meta-1').textContent = product.meta1;
            productPane.querySelector('.meta-heading-2').textContent = product.meta2Heading;
            productPane.querySelector('.meta-2').textContent = product.meta2;
            productPane.querySelector('.meta-heading-3').textContent = product.meta3Heading;
            productPane.querySelector('.course-instructor').textContent = product.meta3; // populate product image

            store.functions.image.populateProductImage(); // clear calendar / more info area

            cardTwoBody.innerHTML = ""; // populate course calendar / more info area

            if (product.type == 'Course' && product.scheduled == true) {
              store.functions.calendar.populateCourseCalendar(cardTwoBody);
            }

            if (product.format == 'On-demand' || product.type != 'Course') {
              var heading;
              heading = product.type == 'Book' || product.type == 'Module' ? 'Description' : '';
              heading = product.type == 'Course' && product.format == 'On-demand' ? 'How it Works' : heading;
              productPane.querySelector('.more-info').textContent = heading;
              var cardBody = productPane.querySelector('.card.dates .card-body');
              var messageContent = '';

              if (product.type == 'Course' && product.format == 'On-demand') {
                messageContent = 'This training course will be delivered on-demand through PetroAcademyâ„¢ providing participants with the knowledge they need at their convenience. All learning activities are self-paced and can be completed at any time';
              }

              if (product.type == 'Book' || product.type == 'Module') {
                messageContent = product.description;
              }

              var message = "<p>".concat(messageContent, "</p>");
              cardBody.insertAdjacentHTML("beforeend", message);
            } // add quantity button for non-courses


            store.functions.panes.product.addQuantityForm(); // adapt buttons

            store.functions.panes.product.adaptNextButton(); // add event listeners for buttons

            var backButton = productPane.querySelector('.back-button');
            backButton.addEventListener("mousedown", store.functions.panes.product.backButtonOnClick);
            store.buttons.productNext.addEventListener("mousedown", store.functions.panes.product.nextButtonOnClick);
          },
          removeQuantityForm: function removeQuantityForm() {
            var helpers = store.functions.helpers;
            var quantityForm = store.panes.product.querySelector('#product-pane-quantity');
            var quantityFormContainer = store.panes.product.querySelector('.quantity-form-container');

            if (quantityForm != null) {
              quantityForm.reset();
            }

            helpers.removeElement(quantityFormContainer);
          },
          resetProductPane: function resetProductPane() {
            store.functions.panes.product.removeQuantityForm();
          }
        },
        thankYou: {
          populateThankYouPane: function populateThankYouPane() {
            var helpers = store.functions.helpers;
            var thankYouPane = store.panes.thankYou;
            var product = store.objects.product;
            /* thankYouPane.querySelector('.product-title').textContent = product.title
            thankYouPane.querySelector('.product-details').textContent = product.detailsSummary
            thankYouPane.querySelector('.course-dates').textContent = (product.courseDates != undefined) ? product.courseDates : ''
            thankYouPane.querySelector('.discount-label').textContent = product.discountLabel
            thankYouPane.querySelector('.discount-amount').textContent = product.discountAmount
            thankYouPane.querySelector('.discount-reason').textContent = product.discountReason */
            //store.buttons.thankYouDone.addEventListener("mousedown", store.functions.panes.thankYou.doneButtonOnClick)
            // tab
            // add event listener to button

            var backButton = thankYouPane.querySelector('.back-button');
            backButton.addEventListener('mousedown', store.functions.panes.thankYou.doneButtonOnClick);
          },
          doneButtonOnClick: function doneButtonOnClick(e) {
            e.preventDefault();
            var productNext = store.panes.product.querySelector('.back-button');
            store.functions.modal.resetModal();
            productNext.click();
          }
        }
      },
      price: {
        toDollars: function toDollars(num) {
          return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(num);
        },
        updateQuantityAndCalculatePrice: function updateQuantityAndCalculatePrice(newQuantity) {
          var product = store.objects.product;
          var registration = store.objects.registration;
          var toDollars = store.functions.price.toDollars;
          var tmsCart = store.objects.tmsCart; // calculations

          tmsCart.items[0].quantity = newQuantity;
          product.preTaxSubtotal = product.price * product.quantity;

          if (registration.alliance == true) {
            product.discountLabel = 'Discount: ';
            product.discount = .1;
            product.discountAmount = '10% ';
            product.discountReason = '(Alliance Member)';
            product.discountedSubtotalLabel = 'Updated Subtotal: ';
            product.discountUpdatedSubtotal = product.preTaxSubtotal - product.preTaxSubtotal * product.discount;
            product.discountedSubtotal = toDollars(product.preTaxSubtotal - product.preTaxSubtotal * .1);
          } else {
            product.discountLabel = '';
            product.discount = 0;
            product.discountAmount = '';
            product.discountReason = '';
            product.discountedSubtotalLabel = '';
            product.discountUpdatedSubtotal = product.preTaxSubtotal - product.preTaxSubtotal * product.discount;
            product.discountedSubtotal = '';
          }

          product.estimatedTaxSubtotal = product.taxRate * product.discountUpdatedSubtotal;
          product.totalCostWithTax = product.discountUpdatedSubtotal + product.estimatedTaxSubtotal; // attendeePane

          var subtotal = "".concat(product.quantity > 0 ? toDollars(product.preTaxSubtotal) : toDollars(0));
          var breakdown = "(".concat(product.quantity, " x ").concat(toDollars(product.price), ")");
          store.panes.attendee.querySelector('.subtotal').textContent = subtotal;
          store.panes.attendee.querySelector('.breakdown').textContent = breakdown;
        }
      },
      tabs: {
        unhideTab: function unhideTab(el) {
          store.functions.helpers.reveal(el);
        },
        cartTabOnClick: function cartTabOnClick() {
          var helpers = store.functions.helpers;
          store.tabs.cart.click();
          helpers.hide(store.modal.header);
        },
        productTabOnClick: function productTabOnClick() {
          store.tabs.product.click();
        },
        attendeeTabOnClick: function attendeeTabOnClick() {
          store.tabs.attendee.click();
          store.functions.helpers.reveal(store.tabs.attendee);
        },
        paymentTabOnClick: function paymentTabOnClick() {
          store.tabs.payment.click();
          store.functions.helpers.reveal(store.tabs.payment);
        },
        thankYouTabOnClick: function thankYouTabOnClick() {
          store.tabs.thankYou.click();
          store.functions.helpers.hide(store.modal.header);
        }
      }
    }; // *** Launch Modal ****

    store.buttons.register.all.forEach(function (button) {
      return button.addEventListener('mousedown', store.functions.modal.launchModal);
    }); // *** clicking outside of modal

    if (store.modal.actual != null) {
      store.modal.actual.addEventListener("mousedown", function (e) {
        if (e.target == store.modal.actual && e.target != store.modal.content) {
          store.functions.modal.resetModal();
        }
      });
    }
  }();

  window.test = 'test';
})();
