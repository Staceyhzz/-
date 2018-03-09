/* 
* @Author: zhangwei
* @Date:   2016-08-07 09:28:16
* @Last Modified by:   anchen
* @Last Modified time: 2016-08-10 15:59:51
*/

var loadImg = []; // 创建一个数组，用于存储所有要预加载的图片路径
// 通过push方法，将
loadImg.push("images/z-center-title.jpg");
loadImg.push("images/logo.png" );
loadImg.push("images/z-center-01.jpg");
loadImg.push("images/z-center-project.jpg");
loadImg.push("images/z-center-nature.jpg");
loadImg.push("images/z-center-occupy.jpg");
loadImg.push("images/z-center-nature.jpg");
loadImg.push("images/z-center-transport.jpg");
loadImg.push("images/z-hotel.jpg");
loadImg.push("images/lg-tuandui.jpg");
loadImg.push("images/commercial_orientation_lhai.png"); 
loadImg.push("images/home_01.jpg");
loadImg.push("images/z-Supporting.jpg");
var imgsNum = loadImg.length;
var nowPercentage = 0; // 用于显示加载每一张图片之后，能够给出百分比
 
// 通过for循环，针对loadImg整个数组进行遍历
for (var i = 0; i < imgsNum; i++) {  
    // 每一次i变化之后，都需要执行这样的内容 - 创建一个img对象，将img对象的src设置为相应的图片地址
    var newImg = new Image();
    newImg.src = loadImg[i];
};