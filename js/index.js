$(function(){
	var WinTop=0;
	var oldWinTop=0;
	var subTop=0;
	var wtjcTop=0;
	var n=0;
	console.log(wtjcTop);
	$(window).scroll(function(){
		
		oldWinTop=WinTop;
		//滚动条高度
		WinTop=$(document).scrollTop();
		//判断向上还是向下滚动，>0 向下，<0向上
		subTop=WinTop-oldWinTop;
		console.log(0-subTop,WinTop);
		if(WinTop>200){
			$('.navbar-fixed-top').css({
				'top':'0',
				'background':'#26282c'
			});
			$('.navbar-fixed-top').removeClass('container');
		}
		if(WinTop<100&&(0-subTop)>0){
			console.log(0-subTop,WinTop);
			$('.navbar-fixed-top').css({
				'top':'20px',
				'background':'none'
			});
			$('.navbar-fixed-top').addClass('container');
		}
		//五天集彩到文档顶部的距离
//		wtjcTop=$('#wtjc').offset().top;
//		if(WinTop>(wtjcTop-200)&&(0-subTop)<0){
//			$('.section-works-wtjc-bg').css({
//				'background-position':'0 '+(n--)+'px'
//			});
//		}
//		if(WinTop>（wtjcTop-200)&&(0-subTop)>0){
//			$('.section-works-wtjc-bg').css({
//				'background-position':'0 '+(n++)+'px'
//			});
//		}
		if(WinTop>2000){
				$('#back').css('display','block');
		}else{
			$('#back').css('display','none');
		}
		
	});
	
	
	
	//返回到顶部
	$('#back').hover(function(){
		$(this).find('span').animate({
			top:'-30px'
		});
		$(this).find('i').animate({
			top:'0px'
		});
	},function(){
		$(this).find('span').animate({
			top:'0px'
		});
		$(this).find('i').animate({
			top:'30px'
		});
	})
	$('#back').click(function(){
		$(document).scrollTop(0);
		
	});
});
