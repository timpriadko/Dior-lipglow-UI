"use strict";document.addEventListener("DOMContentLoaded",function(){function e(e){return/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/.test(e)}function s(){$(l).is(":checked")?(f.removeAttr("disabled"),b.removeClass("disabled")):(f.attr("disabled","disabled"),b.addClass("disabled"))}$(document).bind("contextmenu",function(e){return!1});var t=[" 1 2 3 4 5 6 7 8 9 0 -","@ q w e r t y u i o p"," a s d f g h j k l {bksp}","~ z x c v b n m _ .","{accept}"];window.innerWidth>560&&$(".user-form input").length>0&&$(".user-form input").keyboard({layout:"custom",position:{of:".user-form input",my:"center bottom",at2:"center bottom"},usePreview:!1,customLayout:{normal:t},visible:function(e,s){s.$keyboard.find(".ui-keyboard-accept").text("Done"),s.$keyboard.find(".ui-keyboard-bksp").text("Del"),$(".main-contact").addClass("keyboard-active"),$(this).closest("div").removeClass("to-hide"),$(this).closest("div").find("p").removeClass("hidden")},hidden:function(e,s,t){$(".main-contact").removeClass("keyboard-active"),$(this).closest("div").find("p").addClass("hidden"),$(this).closest("div").addClass("to-hide")},autoAccept:!0,appendTo:$(".keyboard")});var a=$("#email"),o=$(".user-form input[type=text]"),i=$("#formSubmitLabel"),d=$("#formSubmit"),n=function(){var s=[],t=!1;o.each(function(){""===$(this).val()?(s.push(!1),$(this).closest("div").addClass("required")):(s.push(!0),$(this).closest("div").removeClass("required"))}),t=!s.includes(!1),e(a.val())||a.hasClass("required")?a.closest("div").removeClass("invalid-email"):a.closest("div").addClass("invalid-email"),e(a.val())&&!0===t&&!a.hasClass("required")?(d.removeAttr("disabled"),i.removeClass("disabled")):(d.attr("disabled","disabled"),i.addClass("disabled"))};a.change(function(){n()}),a.keyup(function(){n()}),o.keyup(function(){n()});var l=$("#terms"),r=$(".terms-btn"),c=$(".policy-btn"),u=$("#modal-terms"),m=$("#modal-policy"),v=$(".ui-close-modal"),b=$("#terms_form_label"),f=$("#terms_form_submit");l.change(s),r.on("click",function(){u.addClass("show")}),c.on("click",function(){m.addClass("show")}),v.on("click",function(){u.removeClass("show"),m.removeClass("show")}),$(".modal-wrap").click(function(e){e.target===$(".modal-wrap.show")[0]&&$(".modal-wrap").removeClass("show")})});