
function main(){

	$('.search .ti-close').on('click', function(){
		$('.searchbar.show').removeClass('show');
	});

	$('.dropdown-toggle').dropdown();

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

	// $(window).resize(expandCollapse);

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

	$('.sm-sidebar-togler').on('click', function(){
		if($('.sidebar').hasClass('sidebar-show')){
			$('.sidebar').removeClass('sidebar-show')
		}else{
			$('.sidebar').addClass('sidebar-show');
		}
	});

	$('.dropdown-menu').on('click', function(e){
		 e.stopPropagation();		 
	});

	// For trends and activity div
	$('.all').mouseenter(function(){
		$('.all-hover').show(400);
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
		$('.actions-hover').show(400);
		$('.actions-hover').mouseenter(function(){
			$(this).show();
		});
	}).mouseleave(function(){
		$('.actions-hover').hide();
		$('.actions-hover').mouseleave(function(){
			$(this).hide();
		});
	});
	// For trends and activity div

	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});

	//For tabs
	$('.nav-tabs a').on('click', function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	});

	// $('.nav-tabs a[href="#events"]').tab('show');
	// $('.nav-tabs li:first-child a').tab('show');
	// $('.nav-tabs li:last-child a').tab('show'); 

	//For searchbar
	

}

$(document).ready(main);

