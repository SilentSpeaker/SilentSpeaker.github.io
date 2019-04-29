/**
 * Sets up Justified Gallery.
 */
if (!!$.prototype.justifiedGallery) {
    var options = {
        rowHeight: 140,
        margins: 4,
        lastRow: "justify"
    };
    $(".article-gallery").justifiedGallery(options);
}

$(document).ready(function () {

    /**
     * Shows the responsive navigation menu on mobile.
     */
    $("#header > #nav > ul > .icon").click(function () {
        $("#header > #nav > ul").toggleClass("responsive");
    });


    /**
     * Controls the different versions of  the menu in blog post articles
     * for Desktop, tablet and mobile.
     */
    if ($(".post").length) {
        var menu = $("#menu");
        var nav = $("#menu > #nav");
        var menuIcon = $("#menu-icon, #menu-icon-tablet");

        /**
         * Display the menu on hi-res laptops and desktops.
         */
        if ($(document).width() >= 1440) {
            menu.css("visibility", "visible");
            menuIcon.addClass("active");
        }

        /**
         * Display the menu if the menu icon is clicked.
         */
        menuIcon.click(function () {
            if (menu.css("visibility") === "hidden") {
                menu.css("visibility", "visible");
                menuIcon.addClass("active");
            } else {
                menu.css("visibility", "hidden");
                menuIcon.removeClass("active");
            }
            return false;
        });

        /**
         * Add a scroll listener to the menu to hide/show the navigation links.
         */
        if (menu.length) {
            $(window).on("scroll", function () {
                var topDistance = menu.offset().top;

                // hide only the navigation links on desktop
                if (!nav.is(":visible") && topDistance < 50) {
                    nav.show();
                } else if (nav.is(":visible") && topDistance > 100) {
                    nav.hide();
                }

                // on tablet, hide the navigation icon as well and show a "scroll to top
                // icon" instead
                if (!$("#menu-icon").is(":visible") && topDistance < 50) {
                    $("#menu-icon-tablet").show();
                    $("#top-icon-tablet").hide();
                } else if (!$("#menu-icon").is(":visible") && topDistance > 100) {
                    $("#menu-icon-tablet").hide();
                    $("#top-icon-tablet").show();
                }
            });
        }

        /**
         * Show mobile navigation menu after scrolling upwards,
         * hide it again after scrolling downwards.
         */
        if ($("#footer-post").length) {
            var lastScrollTop = 0;
            $(window).on("scroll", function () {
                var topDistance = $(window).scrollTop();

                if (topDistance > lastScrollTop) {
                    // downscroll -> show menu
                    $("#footer-post").hide();
                } else {
                    // upscroll -> hide menu
                    $("#footer-post").show();
                }
                lastScrollTop = topDistance;

                // close all submenu"s on scroll
                $("#nav-footer").hide();
                $("#toc-footer").hide();
                $("#share-footer").hide();

                // show a "navigation" icon when close to the top of the page,
                // otherwise show a "scroll to the top" icon
                if (topDistance < 50) {
                    $("#actions-footer > #top").hide();
                } else if (topDistance > 100) {
                    $("#actions-footer > #top").show();
                }
            });
        }
    }
});

$(function () {
    if (location.pathname !== '/') return;
    //$.get("/data/shanbayToday.json", function (data) {
    var data = {
        content1: 'Hello darkness, my old friend^1500',
        content2: 'I’ve come to talk with you again^1500',
        content3: 'Because a vision softly creeping^1500',
        content4: 'Left its seeds while I was sleeping^1500',
        content5: 'And the vision that was planted in my brain^1700',
        content6: 'Still remains^700',
        content7: 'Within the sound of silence^1700',
        author: 'Paul Simon ，Garfunkel'
    }//data.data;
    // var str =  data.content+'\n'
    // + data.translation+"\n---- "
    // +data.author +'\n'
    var str = data.content1 + ', '
        + data.content2 + '<br>'
        + data.content3 + ', '
        + data.content4 + '<br>'
        + data.content5 + '<br>'
        + data.content6 + ', '
        + data.content7 + '<br>---- '

    var options = {
        strings: [
            /*str + "Who??^1000",
            str + "It's me ^3000",
            str + 'Haha, make a joke',*/
            str + data.author,
            // str+"Welcome to my blog. ^1000",
            // str+"Here you can learn the JavaScript",
            // str+"Here you can learn the Css",
        ],
        typeSpeed: 20,
        startDelay: 300,
        // loop: true,
    }
    var typed = new Typed(".description .typed", options);
    //})
});

$(function () {
    if ($("#toc li a")) {
        $("#toc a").each(function (index) {
            var ele = $(this);
            if (ele.attr('href').indexOf('http') != -1) {
                ele.attr('href', ele.prev().attr('href'))
            }
        })

        $("#TableOfContents ul").children().each(function (index) {
            if ($(this).children('a').length === 0) {
                $(this).addClass('no-before')
            }
        })

    }
})
