$('.tab-itemText').on('click', function(event){
    event.target.classList.css({color:white});
    
});

$('.wrapper').each(function() {

	$('.wrapper').find('.right-side_text-item').not(':first').hide();

	$('.wrapper').find('.tab-item').click(function() {
		$('.wrapper').find('.tab-item').removeClass('tab-itemText--active').eq($(this).index()).addClass('tab-itemText--active');

    $('.wrapper').find('.right-side_text-item').hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass('tab-itemText--active');
});