!function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r,t){"use strict";t.r(r);t(1);var o=document.querySelector(".header__toggle"),n=document.querySelector(".header__nav"),c=document.querySelector(".header__hamburger_close");o.addEventListener("click",(function(){n.classList.add("header__nav_gamburger"),n.classList.add("header__nav_gamburger-black"),c.classList.add("header__hamburger_open")})),c.addEventListener("click",(function(){n.classList.remove("header__nav_gamburger"),n.classList.remove("header__nav_gamburger-black"),c.classList.remove("header__hamburger_open")}));var s=document.querySelector(".reg");document.querySelector(".header__button").addEventListener("click",(function(){n.classList.remove("header__nav_gamburger"),n.classList.remove("header__nav_gamburger-black"),c.classList.remove("header__hamburger_open"),s.classList.add("popup_open"),o.classList.add("header__toggle_hide")}));var a=document.querySelector(".enter-button"),u=document.querySelector(".enter");a.addEventListener("click",(function(){s.classList.remove("popup_open"),u.classList.add("popup_open")})),document.querySelector(".popup__advice-link_big").addEventListener("click",(function(){u.classList.remove("popup_open"),s.classList.add("popup_open")})),document.querySelector(".popup__button-close").addEventListener("click",(function(){u.classList.remove("popup_open"),s.classList.remove("popup_open"),o.classList.remove("header__toggle_hide")})),document.querySelector(".enter-close").addEventListener("click",(function(){u.classList.remove("popup_open"),s.classList.remove("popup_open"),l.classList.remove("popup_open"),o.classList.remove("header__toggle_hide")}));var i=document.querySelector(".success"),l=document.querySelector(".popup__button-reg-enter");l.addEventListener("click",(function(){i.classList.add("popup_open")})),document.querySelector(".success-close").addEventListener("click",(function(){i.classList.remove("popup_open"),u.classList.remove("popup_open"),s.classList.remove("popup_open"),o.classList.remove("header__toggle_hide")}))},function(e,r,t){}]);