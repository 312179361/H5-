//一、输入内容
//1、输出内容用""括起，
document.write("I love you!");
//2、通过变量输出内容
var myStr = "hello world";
document.write(myStr);
//3。混合输出
document.write("拼接"+myStr);
//输出html标签,标签用""括起来
document.write("<br>"+myStr+" javaScript");

//二、提醒alert
alert("提醒1");
alert("提醒2");

/*三、确认confirm，带有返回值，boolean类型。 
消息对话框通常用于允许用户做选择的动作。弹出对话框(包括一个确定按钮和一个取消按钮)
*/
var myMessage = confirm("你喜欢我吗？")
if (myMessage == true) {
	document.write("喜欢");
}else{
	document.write("不喜欢");
}


/*四、prompt弹出消息对话框,通常用于询问一些需要与用户交互的信息。
弹出消息对话框（包含一个确定按钮、取消按钮与一个文本输入框）。
*/
//参数1，就是弹出框上的文字，参数2是输入框内的文字
var myScore = prompt("请输入分数","你的分数");
/*
1. 点击确定按钮，文本框中的内容将作为函数返回值
2. 点击取消按钮，将返回null
*/
if (myScore != null) {
	if (myScore < 60) {
		alert("不及格");
	}else if ( myScore >=60 && myScore < 90) {
		alert("及格");
	}else {
		alert("优秀");
	}

}else {
	alert("你取消了");
}


//五、打开一个新的窗口
/*语法： 
window.open([URL], [窗口名称], [参数字符串])
	窗口名称：
	   _blank：在新窗口显示目标网页
       _self：在当前窗口显示目标网页
       _top：框架网页中在上部窗口中显示目标网页

    参数字符串：可选参数，设置窗口参数，各参数用逗号隔开。
	
	top 窗口顶部离开屏幕顶部的像素数
	left 窗口左端离开屏幕左端的像素数
	width 窗口的宽度
	height 窗口的高度
	menubar 窗口有没有菜单
	toolbar 窗口有没有工具栏
	scrollbars 窗口有没有滚动条
	status 窗口有没有状态栏



*/
// window.open('http://www.nongyao001.com','_blank','width=300,height=200,menubar=no,toolbar=no, status=no,scrollbars=yes');

//六、关闭窗口
/*
语法：
窗口对象.close();
*/

//首先打开一个窗口
var myWin = window.open('https://www.baidu.com','_blank','width=300,height=200,menubar=no,toolbar=no, status=no,scrollbars=yes');
//关闭窗口
myWin.close();




