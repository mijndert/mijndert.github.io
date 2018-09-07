(function($,sr,undefined){"use strict";var $document=$(document),debounce=function(func,threshold,execAsap){var timeout;return function debounced(){var obj=this,args=arguments;function delayed(){if(!execAsap){func.apply(obj,args)}
timeout=null}
if(timeout){clearTimeout(timeout)}else if(execAsap){func.apply(obj,args)}
timeout=setTimeout(delayed,threshold||100)}};$document.ready(function(){var $postContent=$(".post-content");$postContent.fitVids();function updateImageWidth(){var $this=$(this),contentWidth=$postContent.outerWidth(),imageWidth=this.naturalWidth;if(imageWidth>=contentWidth){$this.addClass('full-img')}else{$this.removeClass('full-img')}}
var $img=$("img").on('load',updateImageWidth);function casperFullImg(){$img.each(updateImageWidth)}
casperFullImg();$(window).smartresize(casperFullImg);$(".scroll-down").arctic_scroll()});jQuery.fn[sr]=function(fn){return fn?this.bind('resize',debounce(fn)):this.trigger(sr)};$.fn.arctic_scroll=function(options){var defaults={elem:$(this),speed:500},allOptions=$.extend(defaults,options);allOptions.elem.click(function(event){event.preventDefault();var $this=$(this),$htmlBody=$('html, body'),offset=($this.attr('data-offset'))?$this.attr('data-offset'):!1,position=($this.attr('data-position'))?$this.attr('data-position'):!1,toMove;if(offset){toMove=parseInt(offset);$htmlBody.stop(!0,!1).animate({scrollTop:($(this.hash).offset().top+toMove)},allOptions.speed)}else if(position){toMove=parseInt(position);$htmlBody.stop(!0,!1).animate({scrollTop:toMove},allOptions.speed)}else{$htmlBody.stop(!0,!1).animate({scrollTop:($(this.hash).offset().top)},allOptions.speed)}})}})(jQuery,'smartresize')