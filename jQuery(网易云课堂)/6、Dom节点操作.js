$(function (){

	//创建节点
	// var box = $('<div id="box">插入的div</div>');
	//插入到页面中。 插入节点 方法一  
	// $('body').append(box);//将box插入到body中



	// 插入节点共分两大类：1内部插入  2外部插入

	// ----------内部插入----------
	/*
	//1、append(); //在指定元素内部的后面 插入
	$('div').append('<strong>插入的Dom</strong>');

	//2、在指定元素内部的前面 插入
	$('div').prepend('<strong>插入的Dom</strong>');


	// 3、利用函数进行插入，在指定元素内部的后面 插入，函数的返回值就是要插入的内容
	$('div').append(function(index, html) {
		// index 是索引 html是原来的内容
		return ('<strong>插入的Dom</strong>'+index+html);
		
	});

	// 4、利用函数进行插入,在指定元素内部的前面 插入，函数的返回值就是要插入的内容
	$('div').prepend(function(index, html){
		return '<strong>插入的Dom</strong>'+index+html;
	});
	
	//5、appendTo 将节点，插入到另一个节点内部的后面。
	$('strong').appendTo('div');//将strong移动到div内部的后面
	
	//6、prependTo 将节点，插入到另一个节点内部的前面。 
	$('strong').prependTo('div');

	//5、6两个方法和1、2两个方法顺序正好是反着



	*/


	/*
	// ----------外部插入----------
	//1、after(); 在指定元素外部(同级)的后面 插入
	$('div').after('<strong>插入的Dom</strong>');

	//2、before(); 在指定元素外部(同级)的前面 插入
	$('div').before('<strong>插入的Dom</strong>');

	//3、在指定元素外部(同级)的后面 插入。利用函数进行插入
	$('div').after(function (index, html) {
		//index是索引。html是原有内容
		return '<strong>插入的Dom</strong>'+index+html;
	});
	//4、在指定元素外部(同级)的前面 插入。利用函数进行插入
	$('div').before(function (index, html) {
		//index是索引。html是原有内容
		return '<strong>插入的Dom</strong>'+index+html;

	});

	//5、insertBefore 将节点，移入到另一个节点外(同级)部的前面。不用创建新的节点
	$('strong').insertBefore('div');
	//6、insertAfter(); 将节点，移入到另一个节点外(同级)部的后面。不用创建新的节点
	$('strong').insertAfter('div');

	*/


	// 包裹节点

	/*
	// 1、将制定节点用wrap在外部包裹起来 warp放HTML代码
	$('div').wrap('<strong>123</strong>');//即strong包裹了div

	// 2、warp可以放DOM节点
	$('div').wrap(document.createElement('strong'));
	
	//3、利用函数 
	$('div').wrap(function(index){
		return '<strong>123</strong>'
	})

	
	//4、 unwarp()移除一层外面包裹的标签
	$('div').wrap('<strong></strong>'); //先加一层
	//移除一层外面包裹的标签	
	$('div').unwrap();
	

	//5、 wrapAll 将所有的 div包裹起来
	$('div').wrapAll('<strong></strong>');
	// 与wrap的区别，wrap是把每个元素当成独立体，分别包裹。wrapAll是将所有元素作为一个整体包裹起来、

	// 6、wrapAll可以放DOM节点
	$('div').wrapAll(document.createElement('strong'));

	// 7、wrapInner 在内部包裹
	$('div').wrapInner('<strong></strong>');//在div内部包裹strong

	// 8、wrapInner 在内部包裹可以放DOM节点
	$('div').wrapInner(document.createElement('strong'));

	// 9、利用函数
	$('div').wrapInner(function(index){
		return '<strong></strong>'

	});

	*/

	// -------- 节点操作 --------------


	$('#box').click(function() {//点击事件


		/*
		// 节点复制 然后添加
		// clone(false)或者不写false，就是只复制内容，没有点击事件
		// clone(true)，不仅复制了内容，事件处理也复制了
		$('#box').clone().appendTo('body');

		
		// 节点删除，remove内部还可以写'.box'，这样就把类是box的删除，更精确
		$('#box').remove();

		// 节点删除
		$('#box').detach();

		// remove和detach的区别，remove删除后，在添加，就没有事件了，detach删除后在添加，保留事件
		$('#box').remove().appendTo('body');
		$('#box').detach().appendTo('body');

		
		// empty把节点内部清空，保留一个空的节点
		$('#box').empty();
		
		// 替换节点 替换后事件行为就消失了
		// $('#box').replaceWith('<span>替换</span>');//将#box替换成span标签
		$('<span>替换</span>').replaceAll('#box');//同上，不同写法而已

		*/




	});









});