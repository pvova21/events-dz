!function(){var t={107:function(){document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementsByTagName("td"),e=document.getElementById("dead"),n=document.getElementById("lost");let o=0,r=0,i=!1;var c;c=t,[...c].forEach((t=>{t.addEventListener("click",(()=>{t.classList.contains("cell_has-goblin")?e.textContent++:n.textContent++,10==e.textContent?(e.textContent=0,n.textContent=0,alert("Победа!")):5==n.textContent&&(n.textContent=0,e.textContent=0,alert("Вы проиграли")),i=!0}))})),setInterval((()=>{for(;o===r;)c=t,o=Math.floor(Math.random()*c.length);var c;r>=0&&(t[r].innerHTML="",i||(n.textContent++,5==n.textContent&&(n.textContent=0,e.textContent=0,alert("Вы проиграли"))),t[r].classList.remove("cell_has-goblin")),t[o].innerHTML='<img src="https://github.com/netology-code/ahj-homeworks/raw/master/dom/pic/goblin.png">',i=!1,t[o].classList.add("cell_has-goblin"),r=o}),1e3)}))}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t}(),function(){"use strict";n(107),n.p}()}();