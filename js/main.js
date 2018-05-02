
function main(){

	//For links in sidebar
	$(".dash-it").on('click', function(){
		if($(this).hasClass('dl-active')){
				$(this).removeClass('dl-active').next('.dash-it-li').slideUp();
		}else{
			$('.dash-it-li').slideUp();
			$(this).addClass('dl-active').next('.dash-it-li').slideDown();
		}
		$(this).next('.dash-it-li').css("background", "#17131c");
	});

	//For links in sidebar

	//For searchbar
	// $(document).click(function(e){
	// 	closeSearch();
	// });

	// function closeSearch(){
	// 	$(".searchbar").fadeOut(200);
	// }

	// $(".search").on('click', function(e){
	// 	e.stopPropagation();
	// 	$('.searchbar').fadeToggle();
	// 	$('.searchbar').focus();
	// });
	
	// $('.actions').on('click', function(e){
	// 	e.stopPropagation();
	// 	$('.actions-li').fadeToggle();
	// 	$(this).toggleClass('active');
	// });

	// $('.reports-li').hide();
	// $('.reports').on('click', function(e){
	// 	e.stopPropagation();
	// 	$('.reports-li').fadeToggle();
	// 	$(this).toggleClass('active');
	// });

	// $('.quick-act').on('click', function(e){
	// 	e.stopPropagation();
	// 	$('.quick-actions').fadeToggle();
	// });

	//For sidebar toggler
	$('.sidebar-toglr').on('click', function(){
		if($(this).hasClass('sb-active')){
			$(this).removeClass('sb-active');
			$('.logo1').removeClass('logo1').addClass('logo');
			$('.sidebar1').removeClass('sidebar1').addClass('sidebar');
		}else{
			$(this).addClass('sb-active');
			$('.logo').removeClass('logo').addClass('logo1');
			$('.sidebar').removeClass('sidebar').addClass('sidebar1');
		}
	});

	$('[data-toggle="tooltip"]').tooltip();
	$(".tip-top").tooltip({placement : 'top'});


	
	$('.all').mouseenter(function(){
		$('.all-hover').show(500);
		$('.all-hover').mouseenter(function(){
			$(this).show();
		});
	}).mouseleave(function(){
		$('.all-hover').hide();
		$('.all-hover').mouseleave(function(){
			$(this).hide();
		});
	});
	$('.ti-control-record').mouseenter(function(){
		$('.actions-hover').show(500);
		$('.actions-hover').mouseenter(function(){
			$(this).show();
		});
	}).mouseleave(function(){
		$('.actions-hover').hide();
		$('.actions-hover').mouseleave(function(){
			$(this).hide();
		});
	});
}

$(document).ready(main);

