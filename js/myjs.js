jQuery(function($){
	$('#back-to-top')
	.hide()
	.click(function(){
		$('body,html').animate({
			scrollTop:0
		}, 500);
		return false;
	});

	$(window).scroll(function(){
		if($(this).scrollTop() > 60){
			$('#back-to-top').fadeIn();
		}else{
			$('#back-to-top').fadeOut();
		}
	});

	$('#mores').hide();
	$('#more').click(function() {
		$('#mores').show();
		$('#more').hide();
	});
});
!function(d,s,id){
	var js,fjs=d
	.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){
		js=d.createElement(s);
		js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);
	}
}(document, 'script', 'twitter-wjs');
