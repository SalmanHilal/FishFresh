$(function() {
    var num;

    $('.button-count:first-child').click(function(){
      num = parseInt($('.number-product').val());
      if (num > 1) {
        $('.number-product').val(num - 1);
      }
      if (num == 2) {
        $('.button-count:first-child').prop('disabled', true);
      }
      if (num == 99) {
        $('.button-count:last-child').prop('disabled', false);
      }
    });
    
    $('.button-count:last-child').click(function(){
      num = parseInt($('.number-product').val());
      if (num < 99) {
        $('.number-product').val(num + 1);
      }
      if (num > 0) {
        $('.button-count:first-child').prop('disabled', false);
      }
      if (num == 98) {
        $('.button-count:last-child').prop('disabled', true);
      }
    });
    
    
    
});