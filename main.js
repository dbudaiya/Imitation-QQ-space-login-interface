var imgs = ["./imges/背景图片.jpg", "./imges/背景图片1.jpg"];
var i = 0;
var body = document.getElementById("budai");
body.style.backgroundImage = "url(./imges/背景图片.jpg)";
setInterval(() => {
  i++;
  i = i % 2;
  body.style.backgroundImage = "url(" + imgs[i] + ")"
}, 13000)