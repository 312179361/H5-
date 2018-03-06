// 延迟加载
$(function (){

	// 基本选择器，$('...')。引号内的写法和css写法一致
	// 元素标签选择器.获取所有div的标签，然后修改颜色
	$('div').css('color','green');

	// 类选择器，获取class为yellow的标签，然后修改颜色
	$('.yellow').css('color','yellow');
	// length即元素个数
	console.log($('.yellow').length);
	// eq(1)获取第二个元素
	$('.yellow').eq(1).css('color','purple');

	// id选择器。获取id为box的标签，然后修改颜色。
	$('#red').css('color','red');
	console.log($('#red').length);

	// alert($('#red')[0]);

	// 进阶选择器 并集选择器 后代选择器 通配选择器 交集选择器
	$('p, section').css('color','pink');//并集选择器

	$('div p').css('color','skyblue'); //后代选择器
	// $('div').find('p').css('color','skyblue');//等价的后台选择器

	$('section.green').css('color','green'); //交集选择器

	// $('*').css('color','blue');//通配选择器 用在局部环境，不要用在全局，那样耗费资源
	$('div > *').css('color','blue'); //div下的所有元素
	console.log($('div > *').length);

	 // 高级选择器 子选择器(>) 兄弟选择器(+) 后面所有的同级节点(~) 

	 //next('p') 下一个节点
	 //nextAll('p') 下面所有的p节点
	 //prev('p') 上一个p节点
	 //prevAll('p')  上面所有的p节点
	 //sliblings('p')上面和下面所有的p节点

	 // nextUntil('p') 向下开始到p标签结束，中间所有的节点
	 // prevUntil('p') 向上开始到p标签结束，中间所有的节点






});