var mye = document.getElementById("con");//获取元素 存储在mye中

// document.write(mye);
/*获取的元素是一个对象，如想对元素进行操作，我们要通过它的属性或方法*/

//一、innerHTML 属性用于获取或替换HTML元素的内容
var my1 = mye.innerHTML //获取mye元素的内容

document.write("原来的内容：" + my1);


mye.innerHTML = "i love you";//将mye的内容替换成 i love you
document.write("修改后的内容:" + mye.innerHTML);


//二、style.property=new style 改变HTML的样式
//获取元素
var mye2 = document.getElementById("con2");

//改变颜色
mye2.style.color = "red";
//改变大小
mye2.style.fontSize = "30px";


//三、显示和隐藏（display属性） style.display = value;
//value 是 none 这个元素隐藏;value 是block 这个元素将显示为块状元素（即显示）

var mye3 = document.getElementById("con3");
mye3.style.display = "none";
mye3.style.display = "block";

//四、控制类名 className属性。语法：className = classname;
/*作用：
1、获取元素的className属性
2、为网页内的某个元素制定一个css样式来更改元素的外观
*/

function add(){
	var p1 = document.getElementById("p1");
	p1.className = "one";//改变className。进而修改css样式
}

function modify(){
	var p2 = document.getElementById("p2");
	p2.className = "two";//改变className。进而修改css样式
}










