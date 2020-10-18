$(function() {
    var num;

    $('.button-count:first-child').click(function(){
      num = parseInt($(this).siblings('.number-product').val());
      if (num > 1) {
        $(this).siblings('.number-product').val(num - 1);
      }
      if ($(this).siblings('.number-product').val() == 2) {
        $(this).siblings('.button-count.first').prop('disabled', true);
      }
      if (num == 99) {
        $(this).siblings('.button-count.last').prop('disabled', false);
      }
    });
    
    $('.button-count:last-child').click(function(){
      num = parseInt($(this).siblings('.number-product').val());
      if (num < 99) {
        $(this).siblings('.number-product').val(num + 1);
      }
      if ($(this).siblings('.number-product').val() > 0) {
        $(this).siblings('.button-count.first').prop('disabled', false);
      }
      if (num == 98) {
        $(this).siblings('.button-count.first').prop('disabled', true);
      }
    });
    
    
    
});