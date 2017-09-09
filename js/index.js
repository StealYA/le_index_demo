/*
	design by yaer;
	time : 2016-8-8
	email : WangY_web@163.com
*/

/* 头部下拉 */
(function(){
	//alert($);
	var $a = $('a');
	var $li1 = $('.top-left ul li:first-child');
	var $li2 = $('.top-right .help');
	var $li3 = $('.top-right .stNav');
	var $Hide1 = $('.top-left .hide');
	var $Hide2 = $('.top-right .help .hide');
	var $Hide3 = $('.top-right .stNav .hide');
	
	slideShow($li1,$Hide1);
	slideShow($li2,$Hide2);
	slideShow($li3,$Hide3);
	/* 头部链接下拉封装 */
	function slideShow( $oLi , $oHide ){
		$oLi.hover(function(){
			//alert(1);
			$oHide.stop().slideDown(500);
			$oHide.css({'border':'1px solid #dfdfdf','border-top':'none'});
			$(this).find('a').css('color','#222');
		},function(){
			$oHide.stop().slideUp(500);
			$oHide.css('border','1px solid transparent');
			$(this).find('a').css('color','#999');
		});
	};
})();

/* 搜索框 */
(function(){
	var $txt = $('.txt');
	var $sHide = $('.search-hide');
	var $key = $('.key-searchs');
	
	$txt.focus(function(){
		$(this).val('');
		$(this).css('color','#666');
		$sHide.show(200);
		$key.hide();
	});
	$txt.blur(function(){
		$(this).val('乐2');
		$(this).css('color','rgb(204,204,204)');
		$sHide.hide(200);
		$key.show();
	});
})();

/* 菜单栏 */
(function(){
	var $listLi = $('.all-products-list ul li');
	var $itemShow = $('.all-products .item');
	
	$listLi.hover(function(){
		var index = $(this).index();
		$itemShow.eq(index).show();
	},function(){
		var index = $(this).index();
		$itemShow.eq(index).hide();
		//alert(1);
	});
	$itemShow.hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	});
})();

/* banner轮播部分 */
(function(){
	var $banner = $('.banner');
	var $bannerBtn = $('.banner-btn div');
	var $imgLi = $('.banner-wrap ul li');
	var $Li = $('.banner-tab ul li'); 
	var $prev = $('.prev');
	var $next = $('.next');
	var index1 = 0;
	var timer = null;
	$imgLi.eq(0).css('display','block');
	$Li.click(function(){
		var index = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$imgLi.eq(index).fadeIn().siblings().fadeOut();
		index1 = $(this).index();
	});
	$next.click(function(){
		index1++;
		index1 %= $Li.length;
		paly();
	});
	$prev.click(function(){
		index1--;
		if ( index1<0 )
		{
			index1 = $Li.length-1;
		}
		paly();
	});
	$banner.hover(function(){
		clearInterval(timer);
		$bannerBtn.show();
	},function(){
		autoPlay();
		$bannerBtn.hide();
	});
	autoPlay();
	function paly(){
		$Li.eq(index1).addClass('on').siblings().removeClass('on');
		$imgLi.eq(index1).fadeIn().siblings().fadeOut();
	};
	function autoPlay(){
		timer = setInterval(function(){
			index1++;
			index1 %= $Li.length;
			paly();
		},2000)
	};
})();
/* 显示图片 */
(function(){
	var $wrap = $('.product_9_wrap');
	var $span = $('.product_9_wrap span')
	var $spanTxt = $('.product_9_wrap .txt');
	var $spanNum = $('.product_9_wrap .num');
	var $Img = $('.product_9_wrap .product-img');

	$wrap.mouseenter(function(){
		var index = $(this).index();
		$(this).find($span).addClass('on').parent().parent().siblings().find($span).removeClass('on');
		$(this).find($spanNum).hide().parent().parent().siblings().find($spanNum).show();;
		$(this).find($Img).show().parent().parent().siblings().find($Img).hide();
	});
})();

//
(function(){
	var $filmLi = $('.eight_F_left ul li');
	var $filmWrap = $('.eight_F_left .film-wrap');
	var $buy = $('.buy');
	
	$filmLi.hover(function(){
		$(this).find($filmWrap).hide();
		$(this).find($buy).css('display','block');
	},function(){
		$(this).find($filmWrap).show();
		$(this).find($buy).css('display','none');
	});
})();

//
(function(){
	var $Li = $('.media-wrap ul li');
	var $Img = $('.comment-img img');
	$Img.eq(0).css('display','block');
	$Li.mouseenter(function(){
		var index = $(this).index();
		//alert(index);
		$(this).find('a').addClass('on').parent().siblings().find('a').removeClass('on');
		$(this).find('.media-num').addClass('hover').parent().parent().siblings().find('.media-num').removeClass('hover');
		$(this).find('.media-txt').addClass('col').parent().parent().siblings().find('.media-txt').removeClass('col');
		$(this).find('i').show().parent().parent().siblings().find('i').hide();
		$Img.eq(index).show().siblings().hide();
	});
})();

/* 侧边栏及返回顶部 */
(function(){
	var $Li = $('.aside ul li');
	var $Hide = $('.aside-hide');
	var $Top = $('.gotop');
	$Li.hover(function(){
		$(this).addClass('hoverLi');
		$(this).find($Hide).fadeIn();
	},function(){
		$(this).removeClass('hoverLi');
		$(this).find($Hide).fadeOut();
	});
	$Hide.mouseenter(function(){
		$(this).stop();
	});
	$(window).scroll(function(){
		var T = $(window).scrollTop();
		//alert(T);
		if ( T > 200)
		{
			$Top.fadeIn();
		}
		else 
		{
			$Top.fadeOut();
		}
	});
	$Top.click(function(){
		$('body,html').animate({scrollTop:0+'px'},500);
	});
})();

/*
(function(){
	var $btn = $('.comment-title');
	var $Ul1 = $('.comment-wrap ul');
	var $Li1 = $('.comment-wrap ul Li');
	var T1 = $Li1.height();
	var $btn = $('.comment-title');
	var $Ul2 = $('.firend-link ul');
	var $Li2 = $('.firend-link ul Li');
	var T2 = $Li2.height();
	var index = 0;

	$btn.click(function(){
		index++;
		$Ul1.animate({marginTop:-T1*index+'px'},2000,function(){
			if (index == $Li1.length-1)
			{
				$Ul1.css('marginTop',-T1+'px');
				index = 0;
			}
		});
	});

	setInterval(function(){
		index++;
		$Ul1.animate({marginTop:-T1*index+'px'},2000,function(){
			if (index == $Li1.length-1)
			{
				$Ul1.css('marginTop',-T1+'px');
				index = 0;
			}
		});
	},2000);
})();*/

/* 楼层导航 */
(function(){
	var $floorNav = $('.floor-nav');
	var $navLi = $('.floor-nav ul li');
	var $H2 = $('.stair .floor-title h2');
	var $Stair = $('.stair');
	var color;
	var onOff = true;
	$H2.mouseenter(function(){
		//alert($(this).css('color'));
	});
	
	$navLi.eq(0).css('backgroundColor','#2d6cd4');
	$navLi.eq(0).find('.floor-num').css('display','block');
	$navLi.click(function(){
		onOff = false;
		var index = $(this).index();
		color = $H2.eq(index).css('color');
		//$(this).find('a').css({'width':'35px','margin':'0 auto'}).parent().siblings().find('a').css('width','55px');;
		//$(this).find('span').css({'width':'35px','color':'#fff'}).parent().parent().siblings().find('span').css({'width':'55px','color':'#555'});
		$(this).find('a').addClass('on').parent().siblings().find('a').removeClass('on');
		$(this).find('span').addClass('active').parent().parent().siblings().find('span').removeClass('active');
		$(this).find('.floor-num').css('display','block').parent().parent().siblings().find('.floor-num').css('display','none');
		$(this).css('backgroundColor',color).siblings().css('backgroundColor','#f9f9f9');
		
		//console.log(sTop);
		var sTop = $Stair.eq(index).offset().top;
		$('html,body').stop().animate({scrollTop:sTop},1000,function(){setTimeout(function(){onOff = true;},100)});
	});                                             //设置一个开关，再点击执行窗口滚动的时候，关闭窗口滚动事件函数
	
	$(window).scroll(function(){
		var T = $(window).scrollTop();
		if ( T > 960)
		{
			$floorNav.fadeIn();
		}
		else 
		{
			$floorNav.fadeOut();
		}
		if(!onOff) return false;
		for (var i=0;i<$navLi.length;i++)
		{
			var Top = $Stair.eq(i).offset().top-200;
			//alert(Top);
			color = $H2.eq(i).css('color');
			if (T>Top)
			{
				$navLi.eq(i).find('a').addClass('on').parent().siblings().find('a').removeClass('on');
				$navLi.eq(i).find('span').addClass('active').parent().parent().siblings().find('span').removeClass('active');
				$navLi.eq(i).find('.floor-num').css('display','block').parent().parent().siblings().find('.floor-num').css('display','none');
				$navLi.eq(i).css('backgroundColor',color).siblings().css('backgroundColor','#f9f9f9');
			}
			
		}
	});
})();
