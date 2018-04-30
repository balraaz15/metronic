var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

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
	$(document.body).click(function(e){
		closeMenu();
	});

	function closeMenu(){
		$(".searchbar").fadeOut(200);
	}

	$(".search").on('click', function(e){
		e.stopPropagation();
		$('.searchbar').fadeToggle();
		$('.searchbar').focus().css("border", "1px solid white");
	});
	//For searchbar

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
	//For sidebar toggler

	$('.all, .ti-control-record').hover(function(){
		$('.all-hover').fadeToggle();
	});

	// $('.sidebar1').next('.dash-it').on('hover', function(){
	// 	$('.dash-it-li').show();
	// });
}

$(document).ready(main);