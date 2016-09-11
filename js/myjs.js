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
// twitter widgets
!function(d,s,id){
	var js,fjs=d
	.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)){
		js=d.createElement(s);
		js.id=id;js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);
	}
}(document, 'script', 'twitter-wjs');
// google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-83978436-1', 'auto');
ga('send', 'pageview');
