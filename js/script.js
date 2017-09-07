// Slider
var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var translateWidth = 0;
var slideInterval = 4000;

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

$(document).ready(function () {
    setInterval(nextSlide, slideInterval);
});

// Hover
$(document).ready(function(){
    $('.services .service-list .list-item').hover(function(){
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });
    $('.price .price-table .table').hover(function(){
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });
});

// change of classes
$(document).ready(function(){
    $(".price .edition-pick a:first-of-type").click(function(){
        $(".price .edition-pick a").removeClass("current");
        $(this).toggleClass("current");
        $(".price .price-table").removeClass("active");
        $(".price .price-table.business").addClass("active");
    });
    $(".price .edition-pick a:last-of-type").click(function(){
        $(".price .edition-pick a").removeClass("current");
        $(this).toggleClass("current");
        $(".price .price-table").removeClass("active");
        $(".price .price-table.community").addClass("active");
    });
    // steps
    $(".signup .sign-steps .step:first-of-type a").click(function(){
        $(".signup .sign-steps .step a").removeClass("current");
        $(this).toggleClass("current");
        $(".signup .process h3, .signup .process ol").removeClass("current");
        $(".signup .process i").removeClass().addClass('fa fa-5x fa-sign-in');
        $(".signup .process h3:first-of-type, .signup .process ol:first-of-type").addClass("current");
    });
    $(".signup .sign-steps .step:nth-of-type(2) a").click(function(){
        $(".signup .sign-steps .step a").removeClass("current");
        $(this).toggleClass("current");
        $(".signup .process h3, .signup .process ol").removeClass("current");
        $(".signup .process i").removeClass().addClass('fa fa-5x fa-unlink');
        $(".signup .process h3:nth-of-type(2), .signup .process ol:nth-of-type(2)").addClass("current");
    });
    $(".signup .sign-steps .step:last-of-type a").click(function(){
        $(".signup .sign-steps .step a").removeClass("current");
        $(this).toggleClass("current");
        $(".signup .process h3, .signup .process ol").removeClass("current");
        $(".signup .process i").removeClass().addClass('fa fa-5x fa-check-square-o');
        $(".signup .process h3:last-of-type, .signup .process ol:last-of-type").addClass("current");
    });
});
