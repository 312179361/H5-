$(function(){
	// 属性选择器，
	// a标签有title这个属性就变色
	// $('a[title]').css('color','red');

	// a标签title这个属性是number1的变色
	// $('a[title=number1]').css('color','red');

	// a标签title这个属性是num开头的变色 ^代表开头
	// $('a[title^=num]').css('color','red');

	// a标签title这个属性是ber结尾的变色 $代表开头
	// $('a[title$=ber]').css('color','red');

	// a标签title这个属性是num 或者 以num开头，后面带-。如num-6
	// $('a[title|=num]').css('color','red');

	// a标签title这个属性不等于number1的变色 $代表非
	// $('a[title!=number1]').css('color','red');

	// a标签title这个属性值是以一个空格分割的列表，其中有属性值为num的。变色
	// $('a[title~=num]').css('color','red');

	//  a标签title这个属性值包含num的 就会变色
	// $('a[title*=num]').css('color','red');

	// 多属性选择器，即a标签title=number1 并且name=123 就会变色
	$('a[title=number1][name=123]').css('color','red');

});