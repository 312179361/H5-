/*
执行一个匿名函数
$(function () {

});


执行ID元素选择器
$('#box');


执行功能函数
$('#box').css('color' , 'red');

*/



$(function(){

	$('#box').css('color' , 'red');
});


/* $(function(){})加载完网页后，才会执行函数内部的，类似于window.onload
	区别1：onload只能写一遍，多次后面的会覆盖前面的。$(function(){})写多次不会覆盖
	区别2：onload是要等全部加载完才执行，包括图片等。$(function(){})只是加载完DOM结构就可以了
*/
$(function () {
	
	alert($); //jQuery对象的内部
	alert($()); //返回jQuery对象
	alert($('#box')); //返回也是jQuery对象
	alert($('#box').css('color','red')); //返回也是jQuery对象
	// 由于返回的都是jQuery，所有可以连写
	$('#box').css('color','red').css('fontSize','100px').css('fontWeight' , '300');

});



$(function(){
	// 通过get止一个()函数可以返回DOM元素，不是jQuery对象。括号里代表下标，因为有的可能不
	alert($('#box').get(0)); //即jQuery->Dom
	
});


