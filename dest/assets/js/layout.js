"use strict";!function s(o,r,c){function l(i,t){if(!r[i]){if(!o[i]){var e="function"==typeof require&&require;if(!t&&e)return e(i,!0);if(d)return d(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var n=r[i]={exports:{}};o[i][0].call(n.exports,function(t){return l(o[i][1][t]||t)},n,n.exports,s,o,r,c)}return r[i].exports}for(var d="function"==typeof require&&require,t=0;t<c.length;t++)l(c[t]);return l}({1:[function(t,i,e){$("[data-accordion-head]").each(function(t){$(this).on("click",function(){$(this).toggleClass("is-open").next().slideToggle()})})},{}],2:[function(t,i,e){$("[data-popup-video]").magnificPopup({type:"iframe",mainClass:"modal-video",removalDelay:200,preloader:!1})},{}],3:[function(t,i,e){$("[data-tabs-list] li").click(function(){var t=$("[data-tabs-list] li").index(this);$(this).addClass("is-active").siblings("li").removeClass("is-active"),$(this).closest("[data-tabs-list]").next("[data-tabs-content]").find("[data-tabs-item]").removeClass("is-active"),$("[data-tabs-item]").eq(t).addClass("is-active")})},{}]},{},[3,2,1]);