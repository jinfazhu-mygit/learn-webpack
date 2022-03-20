import '../css/index.css';
import '../css/title.less';
import '../css/image.css';
import zznh from '../image/zznh.png';
import "../font/iconfont.css";
// div
const doc = document.createElement('div');
doc.className = "test";
doc.innerHTML = 'div内容';
// 背景图片内容
const bgEl = document.createElement('div');
bgEl.className = 'image';
// image标签src使用
const img = document.createElement('img');
img.src = zznh;
// i元素
const iEl = document.createElement('i');
iEl.className = "iconfont icon-ashbin";

document.body.appendChild(doc);
document.body.appendChild(bgEl);
document.body.appendChild(img);
document.body.appendChild(iEl);