$(document).ready(function($){

    $(".embed-responsive iframe").addClass("embed-responsive-item");
    $(".carousel-inner .item:first-child").addClass("active");

    $('[data-toggle="tooltip]').tooltip();

    $(".staff-list").owlCarousel({
        items: 1,
        autoplay: false,
        margin:30,
        nav:true,
    });
});