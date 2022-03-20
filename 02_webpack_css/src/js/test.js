import '../css/index.css';
import '../css/title.less';

const doc = document.createElement('div');
doc.className = "test";
doc.innerHTML = 'div内容';

document.body.appendChild(doc);