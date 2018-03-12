 $(function () {

 	// 获取元素中html内容
 	console.log($('#box').html());
 	// 设置元素中html内容
 	$('#box').html('<em>www.youku.com</em>');//将原来的替换成了<em>标签


 	// 获取元素中文本内容
 	console.log($('#box').text());
 	// 设置元素中的文本内容
 	$('#box').text('www.sina.com');//将div内部替换成www.sina.com文字

 	// 获取表单中的内容
 	// console.log($('input').val());
 	// 设置表单内容
 	// $('input').val('洛阳市');

 	// 如果是单选或者复选，val用数组表示，效果是默认选择了这个标签
 	$('input').val(['男','女','唱歌']);


 	// ------元素属性操作---
 	//获取属性值
 	console.log($('#box').attr('id'));//获取属性ID的值
 	// 设置属性名
 	$('#box').attr('name', '我是123');

 	// 批量设置属性名 class属性不建议用attr来设置
 	$('#box').attr({
 		'title': '我是标题',
 		'age': '18岁'
 	});

 	$('#box').attr('title', function(index, value){
 		// value 是原来的属性值，index是索引
 		return '原来的title是'+value+'现在的title是，我是'+index+'号标题';
 	});

 	// 上面的基本上都可以用function来写

 	// 删除属性
 	$('#box').removeAttr('name');



 	// 多个css属性，得到的是个对象数组
 	var box = $('#box').css(['color','width','height']);
 	/*
 	//遍历
 	for (var i in box) {
 		alert(i+':'+box[i]);
 	}
 			
 	

 	//jQuery提供的遍历css属性方法 attr是属性名，value是属性值
 	// $.each是工具方法 遍历原生态的对象数组
 	$.each(box,function(attr, value) {
 		alert(attr+':'+value);
 	});

 	//jquery对象数组也可以调用each方法 index是索引，element是DOM对象
 	$('div').each(function(index, element){
 		alert(index+'---'+element);
 	});
	*/


	/*
	// 连缀写法太多不方便，就可以用下面的列表方法
	//$('#box').css('color','red').css('background','#ccc');
	$('#box').css({
		'color': 'red',
		'background': '#ccc'
	});
	*/

	// $('div').css('width', function(index, value){
	// 	//可以将计算放到函数中返回，这样就是局部操作了
	// 	return parseInt(value)-500+'px';
	// });



	// 给标签添加class 多个class用空格分割
	// $('div').addClass('red bgblue');

	// 删除class 删除多个用空格分割
	// $('div').removeClass('bgblue');


	/*
	// css类的样式切换
	var count = 0;
	$('div').click(function(){
		// 切换class为red size大小，再点击就恢复原状
		// $(this).toggleClass('red bigSize');

		//toggleClass第二个参数为true就切换，是false就恢复原状，
		$(this).toggleClass('red bigSize',count++ % 3 == 0);//这样就是每点三次变红，
	});

	*/

	/*
	$('div').click(function(event) {
		// 如果有红色，就变成绿色，否则是红色
		if ($(this).hasClass('red')) {
			$(this).toggleClass('green');
		}else {
			$(this).toggleClass('red');


		}
	});
	
	// 和上面一样，只是不同的写法，
	$('div').click(function () {
		$(this).toggleClass(function (argument) {
			
			// 局部，更好
			if ($(this).hasClass('red')) {
				$(this).removeClass('red');
				return 'green';
			} else {
				$(this).removeClass('green');
				return 'red';
			}

		})
	});

	

	$('div').click(function () {
		// 函数可以有三个参数 下标、class值、频率
		$(this).toggleClass(function (index, className, switchBool) {

			alert(index+';'+className+';'+switchBool);
			
			// 局部，更好
			if ($(this).hasClass('red')) {
				$(this).removeClass('red');
				return 'green';
			} else {
				$(this).removeClass('green');
				return 'red';
			}

		})
	});

	*/

	/*
	// div的长度 原来这样写
	alert($('div').css('width'));//返回string
	// 现在jquery封装了width函数 获取元素宽度，没有内外边距和边框
	alert($('div').width());//返回number
	// 设置宽度
	$('div').width(300);
	// 匿名函数设置长度，即返回值就是设置的长度
	$('div').width(function(index, width) {
		// px可以不加，但是建议加上px
		return width + 50+'px';
	});

	// 高度是height，和上面宽度一样


	// 获取元素宽度，包含内边距padding
	alert($('div').innerWidth());
	// 获取元素宽度，包含内边距padding和border
	alert($('div').outerWidth()); 
	// 获取元素宽度，包含内边距padding、border、外边距margin
	alert($('div').outerWidth(true)); 
	*/

	// 元素距离窗口的距离，
	// alert($('div').offset().left);
	// alert($('div').offset().top);

	// 距离父视图的距离
	// alert($('strong').position().left);
	// alert($('strong').position().top);

 
	// 获取滚动条的位置
	// alert($(window).scrollTop());
	// 赋值给滚动条滑动到400的位置
	// $(window).scrollTop(400);


 });