// ==UserScript==
// @run-at      document-start
// @namespace   https://openuserjs.org/users/MilionMax
// @name        Google Clean Search
// @description Clean up the current look of google search
// @version     0.0.10
// @include     http://www.google.*/search*
// @include     https://www.google.*/search*
// @include     https://www.google.*/*
// @include     https://encrypted.google.*/search*
// @include     https://encrypted.google.*/*
// @license     MIT
// @resource    customCSS https://raw.githubusercontent.com/maximilianotaverna/CleanSearch-CSS/master/googlesearch_rule.css
// @grant       GM_getResourceText
// @grant       GM_addStyle
// ==/UserScript==

var cssTxt  = GM_getResourceText("customCSS");
GM_addStyle (cssTxt);

/* if you have google's  Product Sans font installed uncomment below */
// GM_addStyle('html { --font-main: Product Sans!important; }');
