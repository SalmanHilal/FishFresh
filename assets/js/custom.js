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
    $('.showSearch').click(function(){
      $(this).parent().parent('ul.navigatsion').hide();
      $('ul.search-box').show();
    });
    $('button.cross').click(function(){
      $(this).parent().parent().parent('ul.search-box').hide();
      $('ul.navigatsion').show();
    });
    
});
  let thumbnails = document.getElementsByClassName('thumbnail')

	let activeImages = document.getElementsByClassName('active')

  for (var i=0; i < thumbnails.length; i++){

    thumbnails[i].addEventListener('mouseover', function(){
      console.log(activeImages)
      
      if (activeImages.length > 0){
        activeImages[0].classList.remove('active')
      }
      
      this.classList.add('active')
      document.getElementById('featured').src = this.src
    })
  }
  let buttonRight = document.getElementById('slideRight');
  let buttonLeft = document.getElementById('slideLeft');

  buttonLeft.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft -= 180
  })

  buttonRight.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft += 180
  })
