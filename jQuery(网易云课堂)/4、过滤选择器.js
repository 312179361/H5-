// 过滤选择器，其实就是伪类选择器

$(function(){
	// --------基本过滤器 以冒号开头------------------
	// :first 第一个元素
	// $('li:first').css('background','#ccc');


	// :last 最后一个元素
	// $('li:last').css('background','#ccc');
	// $('ul:first li:last').css('background','#ccc');//第一个ul下的最后一个li


	// :not() 除了class=red的元素
	// $('li:not(.red)').css('background','#ccc');

	// 偶数元素
	// $('li:even').css('background','#ccc');

	// 奇数元素
	// $('li:odd').css('background','red');


	// eq()括号内是下标，
	// $('li:eq(2)').css('background','#ccc');//下标为2的li
	// $('li:eq(-2)').css('background','#ccc');//下标为-2的li，即倒数第二个li


	// 下标大于3的li 不包含3
	// $('li:gt(3)').css('background','#ccc');
	// 下标小于3的li 不包含3
	// $('li:lt(3)').css('background','red');

	// :header是选择标题元素，
	// $('div :header').css('background','red'); //选择了div下的标题元素

	//:focus选择了焦点的元素
	$('input').get(0).focus(); //指定input开始的焦点
	$('input:focus').css('background','red');


	//针对上面的常用过滤器，常用的jQuery提供了专用方法
	// 第一个元素 即:first
	// $('li').first().css('background','red');

	// 最后一个元素 即:last
	// $('li').last().css('background','red');

	// 非 即:not()
	// $('li').not('.red').css('background','red');
	
	// 获取下标元素，即eq
	// $('li').eq(3).css('background','red');

	// ---------内容过滤器---------
	// :contains() div内容包含yck的
	// $('div:contains("yck")').css('background','red');

	// 选择空的标签 即没有子元素也没有内容的
	// $('div:empty').css('background','#ccc').css('height','20px')

	// 有子元素或者有内容的标签
	// $('div:parent').css('background','#ccc');

	// 父元素中的子元素有class=red的，父元素变色
	// 父元素:has(子元素的class值)
	// $('ul:has(.red)').css('background','red');

	// jQuery提供了一个has方法
	// $("ul").has('.red').css('background','red');

	// jQuery 的三个parent方法
	// parent()选择当前元素的父元素
	// $('li').parent().css('background','red');

	//parents()选择当前元素的父元素及其祖先节点
	// $('li').parents().css('background','red');
	//parents()选择当前元素的父元素及其祖先节点,直到遇到Until括号内部的元素
	// $('li').parentsUntil('ul').css('background','red');


	// ---------可见性过滤器---------
	// :hidden选择隐藏的元素
	alert($('div:hidden').length)
	// $('div:hidden').css('background','#ccc').show(1000);//show(1000)代表1000毫秒后动画显示
	
	// :visible选择可见的元素
	alert($('div:visible').length)
	$('div:visible').css('background','red');


});
