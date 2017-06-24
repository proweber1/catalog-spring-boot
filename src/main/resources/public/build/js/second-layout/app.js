$(document).ready(function() {

    // Tooltips & Popovers
    // --------------------------------------------------

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    // Counter-Up
    // --------------------------------------------------

    if ($('.counter').length > 0) {
        $('.counter').counterUp();
    }

    // Element Blocking
    // --------------------------------------------------

    function blockUI(element) {
        $(element).block({
            message: '<div class=\'sk-wave\'><div class=\'sk-rect sk-rect1\'></div><div class=\'sk-rect sk-rect2\'></div><div class=\'sk-rect sk-rect3\'></div><div class=\'sk-rect sk-rect4\'></div><div class=\'sk-rect sk-rect5\'></div></div>',
            css: {
                border: 'none',
                backgroundColor: 'transparent'
            },
            overlayCSS: {
                backgroundColor: '#FAFEFF',
                opacity: 0.5,
                cursor: 'wait'
            }
        });
    }

    function unblockUI(element) {
        $(element).unblock();
    }

    // Toggle Sidebar
    // --------------------------------------------------

    $('.hamburger-menu').on('click', function() {
        $(this).toggleClass('active');
        $('body').toggleClass('sidebar-toggled');
    });

    // Toogle Searchbar
    // --------------------------------------------------

    $('.search-bar-toggle').on('click', function() {
        $('.search-bar').toggleClass('closed');
    });

    // Toggle Right Sidebar
    // --------------------------------------------------

    $('.right-sidebar-toggle').on('click', function() {
        $('.right-sidebar').toggleClass('closed');
    });

    // Toggle Chat Sidebar
    // --------------------------------------------------

    $('.chat-sidebar-toggle').on('click', function() {
        $('.chat-sidebar').toggleClass('closed');
    });

    // Toggle Page Sidebar
    // --------------------------------------------------

    $('.page-sidebar-toggle').on('click', function() {
        $('.page-sidebar-container').toggleClass('toggled');
        $(this).find('i').toggleClass('ti-angle-right ti-angle-left');
    });

    // Widget Controls
    // --------------------------------------------------

    $('.widget-collapse').on('click', function() {
        $(this).closest('.widget').find('.widget-body').slideToggle(200);
        $(this).text($(this).text() == 'Collapse' ? 'Expand' : 'Collapse');
    });
    $('.widget-reload').on('click', function() {
        var element = $(this).closest('.widget');
        blockUI(element);
        window.setTimeout(function() {
            unblockUI(element);
        }, 3000);
    });
    $('.widget-remove').on('click', function() {
        $(this).closest('.widget').fadeOut(200);
    });

    // Bootstrap DropDown Effects with Animate.css
    // --------------------------------------------------

    var dropdownSelectors = $('.dropdown, .dropup');

    // Custom function to read dropdown data
    //
    function dropdownEffectData(target) {
        // @todo - page level global?
        var effectInDefault = null,
            effectOutDefault = null;
        var dropdown = $(target),
            dropdownMenu = $('.dropdown-menu', target);

        return {
            target: target,
            dropdown: dropdown,
            dropdownMenu: dropdownMenu,
            effectIn: dropdownMenu.data('dropdown-in') || effectInDefault,
            effectOut: dropdownMenu.data('dropdown-out') || effectOutDefault,
        };
    }

    // Custom function to start effect (in or out)
    //
    function dropdownEffectStart(data, effectToStart) {
        if (effectToStart) {
            data.dropdown.addClass('dropdown-animating');
            data.dropdownMenu.addClass('animated');
            data.dropdownMenu.addClass(effectToStart);
        }
    }

    // Custom function to read when animation is over
    //
    function dropdownEffectEnd(data, callbackFunc) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        data.dropdown.one(animationEnd, function() {
            data.dropdown.removeClass('dropdown-animating');
            data.dropdownMenu.removeClass('animated');
            data.dropdownMenu.removeClass(data.effectIn);
            data.dropdownMenu.removeClass(data.effectOut);

            // Custom callback option, used to remove open class in out effect
            if (typeof callbackFunc == 'function') {
                callbackFunc();
            }
        });
    }

    // Bootstrap API hooks
    //
    dropdownSelectors.on({
        "show.bs.dropdown": function() {
            // On show, start in effect
            var dropdown = dropdownEffectData(this);
            dropdownEffectStart(dropdown, dropdown.effectIn);
        },
        "shown.bs.dropdown": function() {
            // On shown, remove in effect once complete
            var dropdown = dropdownEffectData(this);
            if (dropdown.effectIn && dropdown.effectOut) {
                dropdownEffectEnd(dropdown, function() {});
            }
        },
        "hide.bs.dropdown": function(e) {
            // On hide, start out effect
            var dropdown = dropdownEffectData(this);
            if (dropdown.effectOut) {
                e.preventDefault();
                dropdownEffectStart(dropdown, dropdown.effectOut);
                dropdownEffectEnd(dropdown, function() {
                    dropdown.dropdown.removeClass('show');
                });
            }
        }
    });
});