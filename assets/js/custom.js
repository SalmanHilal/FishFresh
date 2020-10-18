$(function() {
    if($('body').hasClass('home')){
        $(".lazy").slick({
            lazyLoad: 'ondemand', // ondemand progressive anticipated
            infinite: true,
            dots: true
        });
    }
    else if($('body').hasClass('products')){
        $('.areas-multi-select').select2();
    }
     $('[data-toggle="tooltip"]').tooltip()
});