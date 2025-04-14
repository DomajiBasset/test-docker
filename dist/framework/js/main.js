
// import { createApp } from 'vue';

// const app = createApp({
//   data() {
//     return {
//       message: 'Hello Vue!'
//     };
//   }
// });

// app.mount('#app');

function HambergerFunction() {
  var RWDham = document.getElementById("toggle-btn");
  if (RWDham) {
    var screenRWD = window.screen.width;
    var scroll_screenRWD = document.body.clientWidth;
    if (screenRWD < 900 || scroll_screenRWD < 900) {
      if (RWDham.checked == true) {
        $(".left-menu").removeClass("block");
      } else {
        $(".left-menu").addClass("block");
      }
    }
  }
}

//畫面resize時去判斷，縮小前去儲存縮小前是否toggle，展開後去讀取那個變數
function reset_toggle() {
  var RWDham = document.getElementById("toggle-btn");
  if (RWDham) {
    var screenRWD = window.screen.width;
    var scroll_screenRWD = document.body.clientWidth;
    if (screenRWD < 901 || scroll_screenRWD < 901) {
      tmpHam = RWDham.checked;
      //縮小前先清掉
      RWDham.checked = "";
    } else if (screenRWD > 899 || scroll_screenRWD > 899) {
      //讀取變數
      RWDham.checked = tmpHam;
      //移除RWD的class
      $(".left-menu").removeClass("block");
    }
  }
}
//文字溢出
//var origintext = [];

function ellipsis() {
  //新方法
  $('.ellipsis').each(function () {
    //取得顯示行數
    var dataRow = parseInt($(this).attr('data-row')),
      //取得行距
      lineHeight = Math.ceil(parseFloat($(this).css('line-height').replace(/[^0-9\.]/g, ""))),
      //計算顯示資料所需高度
      ellipsisHeight = dataRow * lineHeight,
      //取得原本資料高度
      thisHeight = $(this).height();
    //若原本資料高度>顯示資料所需高度
    if (thisHeight > ellipsisHeight) {
      //改為顯示資料所需高度
      $(this).css('height', ellipsisHeight);
      //增加省略符號(...)樣式
      $(this).addClass('eps-dot');
    }
  });

  /*舊方法載入過久
  var count = 0;
  var count2 = 0;
  if (origintext.length == 0) {
      $(".ellipsis").each(function () {
          origintext[count] = $(this).html();
          count++;
      });
  }
  
  $(".ellipsis").each(function () {
      var row = parseInt($(this).attr("data-row"));
      var text = origintext[count2];
      if ($(this).html().indexOf("&nbsp;")) {
          text = text.replace(/&nbsp;/g, " ");
      }
      $(this).html("");
      var minH = $(this).height();
      var m = 0;
      var ellipsis_text = "";
      for (var i = 1; i < text.length + 1; i++) {
          var new_text = text.substring(0, i);
          $(this).html(new_text);

          if (nowH == undefined) {
              var nowH = $(this).height();
          } else if ($(this).height() > nowH) {
              nowH = $(this).height();
          }

          if (nowH != minH && m < row) {
              minH = nowH;
              m++;
          } else if (nowH != minH && m >= row) {
              new_text = text.substring(0, i - 3) + "...";
              ellipsis_text = text.substring(i - 3);
              if (new_text.match("<" + /[a-zA-Z]/ + "...") != -1) {
                  new_text = text.substring(0, i - 5) + "...";
              }
              $(this).html(new_text);
              break;
          }
      }

      
      //移入顯示完整內容，此標準尚未採用
      $(this).mouseover(function() {
    var del_ellipsis = new_text.replace('...','');	
    $(this).html(del_ellipsis+ellipsis_text);
  }).mouseleave(function() {
    $(this).html(new_text);
      });

      count2++;
  }); */

}
/**
 *loading開啟時的判斷，因為開啟loading統一讀取外面的shade跟 loading，因此新增此判斷
 *
 */
function show_bar() {
  var parent_shade = window.parent.document.querySelector(".shade");
  var loading_style = window.parent.document.querySelector(".loading-style1");
  var loading_text = window.parent.document.querySelector(".loading-style1 > .load-cont");
  if (self.frameElement && self.frameElement.tagName == "IFRAME") {
    setTimeout(function () {
      $(parent_shade).removeClass("hide"); //開啟遮色片
      $(loading_style).css("display", "block"); //開啟Loading樣式
      var loadContArray = ["處理中..."]; //處理程序說明
      $(loading_text).text(loadContArray[0]); //第一個程序說明
    }, 1000);
  } else {
    setTimeout(function () {
      $(".shade").removeClass("hide"); //開啟遮色片
      $(".loading-style1").css("display", "block"); //開啟Loading樣式
      var loadContArray = ["處理中..."]; //處理程序說明
      $(".loading-style1 > .load-cont").text(loadContArray[0]); //第一個程序說明
    }, 1000);
  }
}
var dialogWidth = 0;
var dialogHeight = 0;
var dialogId;

/**
 *遮罩控制，因為遮罩在fixed裡面因此z-index會蓋不過去，所以用js去控制
 *使用方式在需要遮罩的地方使用這個function
 * @param {*} control 開啟請輸入(opne) 關閉則輸入(close)
 * @param {*} type    彈跳視窗(dialog) 成批編輯(batchedit)
 */
function shade(control, type) {
  if (control == "open" && type == "dialog") {
    $(".shade").removeClass("hide");
    $(".system_bg").css("z-index", "320");
    $(".home_btn").css("z-index", "320");
    $("body").css("overflow", "hidden");
  } else if (control == "open" && type == "batchedit") {
    $(".shade").removeClass("hide");
    $(".system_bg").css("z-index", "320");
    $(".home_btn").css("z-index", "320");
    $("body").css("overflow", "");
  } else {
    $(".shade").addClass("hide");
    $(".system_bg").css("z-index", "");
    $(".home_btn").css("z-index", "");
    $("body").css("overflow", "");
  }
}

var system_shade = {};
system_shade.arr_control = []; //儲存目前有開啟遮罩的功能
system_shade.shade = function (control, type) {
  //遮罩 zindex 1047
  //dialog zindex 1050
  //成批  zindex 1048
  //zindex列表
  var shade_zindex = {
    shade: 1047,
    dialog: 1050,
    batchedit: 1048,
  };
  var shade = system_shade;
  //打開的時候
  if (control == 'open') {
    shade_switch('open');
    if (type == 'dialog') {
      //打開彈窗卷軸一定關閉
      $('body').css('overflow', 'hidden');
      shade.arr_control.push(type);
    }
    if (type == 'batchedit') {
      $('body').css('overflow', '');
      shade.arr_control.push(type);
    }
  } else {
    //關閉的時候，判斷是誰刪掉就從遮罩陣列把元素刪除
    var tmp_index = shade.arr_control.indexOf(type);
    shade.arr_control.splice(tmp_index, 1);
    //如果需要遮罩的元素陣列都沒了就關遮罩
    if (shade.arr_control.length == 0) {
      shade_switch('close');
    }
    //判斷如果遮罩陣列還有彈窗就要關卷軸
    if (shade.arr_control.indexOf('dialog') !== -1) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', '');
    }
  }

  //判斷如果開啟兩個以上用到遮罩元素
  if (system_shade.arr_control.length > 1) {
    //找出最後一個進來的zindex 讓遮罩抓她的index 去-1 使用 
    var curr_index = shade_zindex[type];
    $('.shade').css('zIndex', curr_index - 1);
  } else if (system_shade.arr_control.length == 1) {
    //如果只有一個就抓除存陣列的元素 讓遮罩抓她的index 去-1 使用
    var curr_index = shade_zindex[system_shade.arr_control[0]];
    $('.shade').css('zIndex', curr_index - 1);
  }
  //共通的
  function shade_switch(is_switch) {
    if (is_switch == 'open') {
      $('.shade').removeClass('hide');
      $('.system_bg').css('z-index', '320');
      $('.home_btn').css('z-index', '320');
    } else {
      $('.shade').addClass('hide');
      $('.system_bg').css('z-index', '');
      $('.home_btn').css('z-index', '');
    }
  }
};



/**
 *開啟彈跳視窗時處理遮罩，處理完畢再將參數傳送到彈跳視窗設定的function
 *在onclick時輸入參數
 *restart值只會是close，若restart有值表示關閉當前dialog開啟新dialog
 * @param {*} showDialogId 彈跳視窗的ID
 * @param {*} dialogContentWidth 彈跳視窗的寬度
 * @param {*} restart
 */
function showDialog(showDialogId, dialogContentWidth, restart) {
  if (restart == "close") {
    closeDialog();
  }

  dialogId = '#' + showDialogId;
  dialogWidth = dialogContentWidth;

  if ($(dialogId).length > 0) {
    system_shade.shade("open", "dialog");

    $(dialogId).css('display', 'block');

    $(".dialog-all").css({
      display: "flex",
      "z-index": "1050"
    });
    setDialog();
  }
}

/**
 *彈跳視窗顯示設定，當輸入寬度參數時進行判斷，若螢幕寬度>參數寬度的話，保留輸入參數的設定
 *反之則取消參數寬度設定，和iframe裡面fixed的元素必須跑js才能產生效果
 */
function setDialog() {
  var dialogHeight = $(dialogId).height();
  var ww2 = window.innerWidth;
  //彈窗寬大於螢幕寬
  if (dialogWidth > ww2) {
    $(dialogId).css('width', 'calc(100% - 40px)');
    if (dialogHeight > window.innerHeight) {
      $(dialogId).css('margin', 20)
    } else {
      $(dialogId).css('margin', '');
    }
  } else {
    $(dialogId).css('width', dialogWidth);
    //如果彈窗高度>整體dialog-all高度就處理
    if (dialogHeight > window.innerHeight) {
      $('.dialog-all').css('display', 'block');
      $(dialogId).css('margin', '20px auto');
    } else {
      $('.dialog-all').css('display', 'flex');
      $(dialogId).css('margin', '');
    }
  }
}

/**
 *關閉的時候判斷shade有沒有hide
 *
 * @param {*} re 是否重新刷新頁面
 */
function closeDialog(re) {
  if ($(".shade").hasClass("hide") == false) {
    system_shade.shade("close", "dialog");
  }
  $(".dialog").css("display", "none");
  $(".dialog-all").css({
    display: "none",
    "z-index": ""
  });
  if (re) {
    location.reload();
  }
}

//改變iframe標題名稱
var changeIframeDialogTitle = function (changeiframetitle) {
  $(".iframe-dialog-title").text(changeiframetitle);
};

function findIframe() {
  //搜尋iframe
  var iframe = document.getElementsByTagName("iframe");
  for (var i = 0; i < iframe.length; i++) {
    //找到iframe的話設置屬性
    // iframe[i].setAttribute("onload", "delatePdtop()");
    iframe[i].addEventListener("load", function (event) {
      clearFixContainer();
      delatePdtop();
    });
  }
}

function delatePdtop() {
  //將iframe的contennt的pd-top設置成10
  var content = document
    .querySelector("iframe")
    .contentWindow.document.querySelector(".rightmain");
  if (content) {
    content.style.padding = 0;
  }
}

function clearFixContainer() {
  var container = document
    .querySelector("iframe")
    .contentWindow.document.querySelector(".content");
  if (container) {
    container.style.position = "static";
    container.style.overflowY = "auto";
  }
}

function comparer(index) {
  return function (a, b) {
    var valA = getCellValue(a, index),
      valB = getCellValue(b, index);
    return $.isNumeric(valA) && $.isNumeric(valB) ?
      valA - valB :
      valA.localeCompare(valB);
  };
}

function getCellValue(row, index) {
  return $(row)
    .children("td")
    .eq(index)
    .text();
}

$(".close-dialog").click(function () {
  closeDialog();
});

$(document).ready(function (e) {
  //視窗help
  $(".icon-alert-help-btn").click(function () {
    var helpContent = $(this).attr("data-help");
    alert(helpContent);
  });

  showDialog('msg-dialog1', '500');
});
$(document).ready(function (e) {
  //隱藏/顯示查詢
  $(".search_arrow").click(function () {
    $(".search").toggle();
    $(this).toggleClass("active");
  });

  //進階篩選隱藏/顯示
  $(".filter-sw").click(function () {
    $(".filter-area").toggle();
  });
});

function searchShow() {
  //進入網頁先判斷是否大於父元素寬度
  var screenRWD = window.screen.width;
  var scroll_screenRWD = document.body.clientWidth;

  if (
    $(".search-conditions-style2").width() +
    $(".search-retrieval").width() +
    $(".search-btn").width() <
    $(".filter").width() &&
    scroll_screenRWD > 1100
  ) {
    //$('.filter-area').swap('.search-conditions-style2');
    $(".search-conditions-style2").insertBefore(".filter-area");
  } else if (scroll_screenRWD < 1100) {
    $(".search-conditions-style2").insertAfter(".filter-area");
  } else {
    $(".search-conditions-style2").insertAfter(".filter-area");
  }
}
$(document).ready(function () {
  //OP系統左選單增加頁籤功能
  // 預設顯示第一個 Tab
  /*var tmp_index = document.form1.f_index.value;
          var tmp_pno = document.form1.f_menupno.value;
      
          if (0 <= tmp_index && 'OP1T01' != tmp_pno) {
              var _showTab = 1;
          } else {
              var _showTab = 0;
          }  記錄停留在哪個頁籤*/
  $(".abgne_tab").each(function () {
    // 目前的頁籤區塊
    var $tab = $(this);
    var $defaultLi = $(".left_tabs li", $tab).eq(_showTab).addClass("active");
    $($defaultLi.find("a").attr("href")).siblings().hide();
    // 當 li 頁籤被點擊時...
    // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
    $(".left_tabs li", $tab).click(function () {
      // 找出 li 中的超連結 href(#id)
      var $this = $(this),
        _clickTab = $this.find("a").attr("href");
      // 把目前點擊到的 li 頁籤加上 .active
      // 並把兄弟元素中有 .active 的?m移除 class
      $this.addClass("active").siblings(".active").removeClass("active");
      // 淡入相對應的內容並隱藏兄弟元素
      $(_clickTab).stop(false, true).fadeIn().siblings().hide();
      return false;
    })
      .find("a")
      .focus(function () {
        this.blur();
      });
  });
  // mumber
  $("#member>li>a").click(function () {
    // 假如點選的不是已開啟, 則收合全部再展開目前點選的
    if (
      $(this)
        .parent("li")
        .index() != curr
    ) {
      $("#member ul").slideUp(400);
      $(this)
        .next()
        .slideDown(500);
      curr = $(this)
        .parent("li")
        .index();
    } else {
      $(this)
        .next()
        .slideUp(400);
      curr = null;
    }
  });
  //隱藏/顯示簽核待處理夾明細
  $(".process-btn").click(function () {
    $(this)
      .next("tr")
      .slideToggle();
  });
  //週期性設定
  $(".rd-item input[type=radio]").each(function () {
    var nameId = $(this).attr("data-name");
    if ($(this).is(":checked") && nameId != '') {
      $("#" + nameId).css("display", "block");
    }
  });

  $(".rd-item input[type=radio]").click(function () {
    var nameId = $(this).attr("data-name");
    $(".rd-cont").css("display", "none");
    if ($(this).is(":checked") && nameId != '') {
      $("#" + nameId).css("display", "block");
    }
  });

  $(".rd-cont input[type=radio]").each(function () {
    var nameId = $(this).attr("data-name");
    if ($(this).prop("checked") == false) {
      $("#" + nameId)
        .find("select,:checkbox")
        .prop("disabled", true);
    }
  });
  $(".rd-cont input[type=radio]").click(function () {
    var nameId = $(this).attr("data-name");
    if ($(this).is(":checked")) {
      if (
        $("#" + nameId)
          .parent()
          .is(".rd-cont-sec")
      ) {
        $("#" + nameId)
          .parent()
          .siblings()
          .find("select,:checkbox")
          .prop("disabled", true);
      } else {
        $("#" + nameId)
          .siblings()
          .find("select,:checkbox")
          .prop("disabled", true);
      }
      $("#" + nameId)
        .find("select,:checkbox")
        .prop("disabled", false);
    }
  });
  //圖示化流程隱藏
  var element = $(".circuit-graphic > li");
  var slider = $(".circuit-graphic");
  var slidermenu_bg = $(".circuit-graphic-area");
  var totalWidth = slidermenu_bg.innerWidth();
  var count = 1; //計數器
  var elementWidth = $(
    ".circuit-graphic > li:nth-child(" + count + ")"
  ).outerWidth();
  var sliderWidth = 0;
  var newPositionSlideX = 30;
  slidermenu_bg.append(
    '<div class="move-left2"><span></span></div><div class="move-right2"><span></span></div>'
  );
  element.each(function () {
    sliderWidth = sliderWidth + $(this).outerWidth(true);
  });
  slider.css({
    width: sliderWidth
  });
  $(".move-right2").click(function () {
    if (newPositionSlideX > totalWidth - sliderWidth) {
      newPositionSlideX =
        newPositionSlideX -
        $(".circuit-graphic > li:nth-child(" + count + ")").outerWidth(true);
      count++;
      slider.css({
        "margin-left": newPositionSlideX
      }, check());
    }
  });
  $(".move-left2").click(function () {
    if (newPositionSlideX >= -sliderWidth) {
      count--;
      newPositionSlideX =
        newPositionSlideX +
        $(".circuit-graphic > li:nth-child(" + count + ")").outerWidth(true);
      if (newPositionSlideX > 0) {
        slider.css({
          "margin-left": 0
        }, check());
      } else {
        slider.css({
          "margin-left": newPositionSlideX
        }, check());
      }
    }
  });

  function check() {
    if (
      sliderWidth >= totalWidth &&
      newPositionSlideX > totalWidth - sliderWidth
    ) {
      $(".move-right2").css({
        right: 0,
        display: "block"
      });
    } else {
      $(".move-right2").css({
        right: -$(this).width(),
        display: "none"
      });
    }
    if (newPositionSlideX < 0) {
      $(".move-left2").css({
        left: 0,
        display: "block"
      });
    } else {
      $(".move-left2").css({
        left: -$(this).width(),
        display: "none"
      });
    }
  }
  $(window).resize(function () {
    totalWidth = slidermenu_bg.innerWidth();
    check();
  });
});
//公文系統工具列頁籤
function toobarTab() {
  // 預設顯示第一個 Tab
  var _showTab2 = 0;
  $(".toolbar-tabs-area").each(function () {
    // 目前的頁籤區塊
    var $tab = $(this);
    var $defaultLi = $(".toolbar-tabs li", $tab)
      .eq(_showTab2)
      .addClass("active");
    $($defaultLi.find("a").attr("href"))
      .siblings()
      .hide();
    // 當 li 頁籤被點擊時...
    // 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
    $(".toolbar-tabs li", $tab)
      .click(function () {
        // 找出 li 中的超連結 href(#id)
        var $this = $(this),
          _clickTab2 = $this.find("a").attr("href");
        // 把目前點擊到的 li 頁籤加上 .active
        // 並把兄弟元素中有 .active 的?m移除 class
        $this
          .addClass("active")
          .siblings(".active")
          .removeClass("active");
        // 淡入相對應的內容並隱藏兄弟元素
        $(_clickTab2)
          .stop(false, true)
          .fadeIn()
          .siblings()
          .hide();
        return false;
      })
      .find("a")
      .focus(function () {
        this.blur();
      });
  });
}
//表格欄位標題四字寬
function titleFourWord() {
  $(".area:even div").each(function () {
    var text = $(this).html(); //標題文字
    var text_length = text.length; //標題文字長度
    var star = '*';
    var star2 = '<star>*</star>';
    var ex = '!';
    var ex2 = '<exclamation>!</exclamation>';
    var per = '%';
    var keystar = '★';
    var blank = '<spacing5>&nbsp;</spacing5>'; //有符號時換行補空白置中
    var get_word = "";
    var th_en = function (e) {
      var re = /[a-zA-Z\d\D]+[^\u4e00-\u9fa5/、/]/; //英文,數字,符號,不包含中文字
      if (re.test(e)) {

      }
      return (re.test(e));
    };
    if ((text.indexOf(star) > -1 && text.indexOf(ex) > -1) || (text.indexOf(star) > -1 && text.indexOf(per) > -1)) {
      var twoMark1 = '<exclamation>!</exclamation><star>*</star>'; //"!*"樣式
      var twoMark2 = '<percentage>%</percentage><star>*</star>'; //"%*"樣式

      if (text.indexOf(star) > -1 && text.indexOf(ex) > -1) {
        var text = text.substr(2); //去掉字符
        var twoMark = twoMark1;
        var blank = '<spacing12>&nbsp;</spacing12>'; //有符號時換行補空白置中
        var lastBlankStart = '<spacing15>';
        var lastBlankEnd = '</spacing15>';
      } else {
        var text = text.substr(2); //去掉字符
        var twoMark = twoMark2;
        var blank = '<spacing18>&nbsp;</spacing18>'; //有符號時換行補空白置中
        var lastBlankStart = '<spacing20>';
        var lastBlankEnd = '</spacing20>';
      }
      if (th_en(text) || text.length == 1) {
        $(this).html(twoMark + text);
      } else {
        var text_length = text.length; //去掉"*"後標題文字長度
        var remainder = text.length % 4; //取餘數
        var integer = Math.floor(text.length / 4); //取四字有幾行
        if (remainder == 1 && integer != 0) { //字數為5、9、13、17、21、25、29...時
          for (var i = 0, len = text.length - 5; i < len; i++) {
            get_word += text[i];
            if (i % 4 == 3) get_word += '</spacing15><br>' + blank;
            if (i % 4 == 2) get_word += '<spacing15>';
          }
          var remainder_text = '<spacing6>' + text.substr(-5, 2) + '</spacing6>' + lastBlankStart + text.substr(-3, 1) + lastBlankEnd + '<br>' + blank + '<spacing24>' + text.substr(-2, 1) + '</spacing24>' + lastBlankStart + text.substr(-1, 1) + lastBlankEnd;
          $(this).html(twoMark + get_word + remainder_text);
        } else {
          for (var i = 0, len = text.length - remainder; i < len; i++) {
            if (i != 0) {
              if (i % 4 == 0) get_word += blank;
            }
            get_word += text[i];
            if (i % 4 == 3) get_word += lastBlankEnd + '<br>';
            if (i % 4 == 2) get_word += lastBlankStart;
          }
          $(this).html(twoMark + get_word);
          if (integer == 0) {
            if (remainder == 2) { //字數為2時
              var remainder_text = '<spacing24>' + text.substr(-2, 1) + '</spacing24>' + lastBlankStart + text.substr(-1, 1) + lastBlankEnd;
              $(this).html(twoMark + get_word + remainder_text);
            }
            if (remainder == 3) { //字數為3時
              var remainder_text = '<spacing6>' + text.substr(-3, 2) + '</spacing6>' + lastBlankStart + text.substr(-1, 1) + lastBlankEnd;
              $(this).html(twoMark + get_word + remainder_text);
            }
          } else {
            if (remainder == 2) { //字數為6、10、14、18、22、26...時
              var remainder_text = '<spacing24>' + text.substr(-2, 1) + '</spacing24>' + lastBlankStart + text.substr(-1, 1) + lastBlankEnd;
              $(this).html(twoMark + get_word + blank + remainder_text);
            }
            if (remainder == 3) { //字數為7、11、15、19、23、27...時
              var remainder_text = '<spacing6>' + text.substr(-3, 2) + '</spacing6>' + lastBlankStart + text.substr(-1, 1) + lastBlankEnd;
              $(this).html(twoMark + get_word + blank + remainder_text);
            }
          }
        }
      }
    } else if (text.indexOf(star2) > -1 || text.indexOf(star) > -1) { //標題文字是否有"*"
      if (text.indexOf(star2) > -1) {
        var text = text.substr(14); //去掉"<star>*</star>"字符
      } else if (text.indexOf(star) > -1) {
        var text = text.substr(1); //去掉"*"字符
      }
      var star = '<star>*</star>'; //"*"樣式
      if (th_en(text) || text.length == 1) {
        $(this).html(star + text);
      } else {
        var text_length = text.length; //去掉"*"後標題文字長度
        var remainder = text.length % 4; //取餘數
        var integer = Math.floor(text.length / 4); //取四字有幾行
        if (remainder == 1 && integer != 0) { //字數為5、9、13、17、21、25、29...時
          for (var i = 0, len = text.length - 5; i < len; i++) {
            get_word += text[i];
            if (i % 4 == 3) get_word += '</spacing8><br>' + blank;
            if (i % 4 == 2) get_word += '<spacing8>';
          }
          var remainder_text = '<spacing6>' + text.substr(-5, 2) + '</spacing6><spacing8>' + text.substr(-3, 1) + '</spacing8><br>' + blank + '<spacing24>' + text.substr(-2, 1) + '</spacing24><spacing8>' + text.substr(-1, 1) + '</spacing8>';
          $(this).html(star + get_word + remainder_text);
        } else {
          for (var i = 0, len = text.length - remainder; i < len; i++) {
            if (i != 0) {
              if (i % 4 == 0) get_word += blank;
            }
            get_word += text[i];
            if (i % 4 == 3) get_word += '</spacing8><br>';
            if (i % 4 == 2) get_word += '<spacing8>';
          }
          $(this).html(star + get_word);
          if (integer == 0) {
            if (remainder == 2) { //字數為2時
              var remainder_text = '<spacing24>' + text.substr(-2, 1) + '</spacing24><spacing8>' + text.substr(-1, 1) + '</spacing8>';
              $(this).html(star + get_word + remainder_text);
            }
            if (remainder == 3) { //字數為3時
              var remainder_text = '<spacing6>' + text.substr(-3, 2) + '</spacing6><spacing8>' + text.substr(-1, 1) + '</spacing8>';
              $(this).html(star + get_word + remainder_text);
            }
          } else {
            if (remainder == 2) { //字數為6、10、14、18、22、26...時
              var remainder_text = '<spacing24>' + text.substr(-2, 1) + '</spacing24><spacing8>' + text.substr(-1, 1) + '</spacing8>';
              $(this).html(star + get_word + blank + remainder_text);
            }
            if (remainder == 3) { //字數為7、11、15、19、23、27...時
              var remainder_text = '<spacing6>' + text.substr(-3, 2) + '</spacing6><spacing8>' + text.substr(-1, 1) + '</spacing8>';
              $(this).html(star + get_word + blank + remainder_text);
            }
          }
        }
      }
    } else if (text.indexOf(ex2) > -1 || text.indexOf(ex) > -1) { //標題文字是否有"!"
      if (text.indexOf(ex2) > -1) {
        var text = text.substr(28); //去掉"<exclamation>!</exclamation>"字符
      } else if (text.indexOf(ex) > -1) {
        var text = text.substr(1); //去掉"!"字符
      }
      var ex = '<exclamation>!</exclamation>'; //"!"樣式
      var blank = '<spacing4>&nbsp;</spacing4>'; //有符號時換行補空白置
      if (th_en(text) || text.length == 1) {
        $(this).html(ex + text);
      } else {
        var text_length = text.length; //去掉"!"後標題文字長度
        var remainder = text.length % 4; //取餘數
        var integer = Math.floor(text.length / 4); //取四字有幾行
        if (remainder == 1 && integer != 0) { //字數為5、9、13、17、21、25、29...時
          for (var i = 0, len = text.length - 5; i < len; i++) {
            get_word += text[i];
            if (i % 4 == 3) get_word += '</spacing8><br>' + blank;
            if (i % 4 == 2) get_word += '<spacing8>';
          }
          var remainder_text = '<spacing6>' + text.substr(-5, 2) + '</spacing6><spacing8>' + text.substr(-3, 1) + '</spacing8><br>' + blank + '<spacing24>' + text.substr(-2, 1) + '</spacing24><spacing8>' + text.substr(-1, 1) + '</spacing8>';
          $(this).html(ex + get_word + remainder_text);
        } else {
          for (var i = 0, len = text.length - remainder; i < len; i++) {
            if (i != 0) {
              if (i % 4 == 0) get_word += blank;
            }
            get_word += text[i];
            if (i % 4 == 3) get_word += '</spacing8><br>';
            if (i % 4 == 2) get_word += '<spacing8>';
          }
          $(this).html(ex + get_word);
          if (integer == 0) {
            if (remainder == 2) { //字數為2時
              var remainder_text = '<spacing24>' + text.substr(-2, 1) + '</spacing24><spacing8>' + text.substr(-1, 1) + '</spacing8>';
              $(this).html(ex + get_word + remainder_text);
            }
            if (remainder == 3) { //字數為3時
              var remainder_text = '<spacing6>' + text.substr(-3, 2) + '</spacing6><spacing8>' + text.substr(-1, 1) + '</spacing8>';
              $(this).html(ex + get_word + remainder_text);
            }
          } else {
            if (remainder == 2) { //字數為6、10、14、18、22、26...時
              var remainder_text = '<spacing24>' + text.substr(-2, 1) + '</spacing24><spacing8>' + text.substr(-1, 1) + '</spacing8>';
              $(this).html(ex + get_word + blank + remainder_text);
            }
            if (remainder == 3) { //字數為7、11、15、19、23、27...時
              var remainder_text = '<spacing6>' + text.substr(-3, 2) + '</spacing6><spacing8>' + text.substr(-1, 1) + '</spacing8>';
              $(this).html(ex + get_word + blank + remainder_text);
            }
          }
        }
      }
    } else if (text.indexOf(per) > -1) { //標題文字是否有"%"
      var text = text.substr(1); //去掉"%"字符
      var per = '<percentage>%</percentage>'; //"%"樣式
      var blank = '<spacing9>&nbsp;</spacing9>'; //有符號時換行補空白置中
      if (th_en(text) || text.length == 1) {
        $(this).html(per + text);
      } else {
        var text_length = text.length; //去掉"%"後標題文字長度
        var remainder = text.length % 4; //取餘數
        var integer = Math.floor(text.length / 4); //取四字有幾行
        if (remainder == 1 && integer != 0) { //字數為5、9、13、17、21、25、29...時
          for (var i = 0, len = text.length - 5; i < len; i++) {
            get_word += text[i];
            if (i % 4 == 3) get_word += '</spacing12><br>' + blank;
            if (i % 4 == 2) get_word += '<spacing12>';
          }
          var remainder_text = '<spacing6>' + text.substr(-5, 2) + '</spacing6><spacing12>' + text.substr(-3, 1) + '</spacing12><br>' + blank + '<spacing24>' + text.substr(-2, 1) + '</spacing24><spacing12>' + text.substr(-1, 1) + '</spacing12>';
          $(this).html(per + get_word + remainder_text);
        } else {
          for (var i = 0, len = text.length - remainder; i < len; i++) {
            if (i != 0) {
              if (i % 4 == 0) get_word += blank;
            }
            get_word += text[i];
            if (i % 4 == 3) get_word += '</spacing12><br>';
            if (i % 4 == 2) get_word += '<spacing12>';
          }
          $(this).html(per + get_word);
          if (integer == 0) {
            if (remainder == 2) { //字數為2時
              var remainder_text = '<spacing24>' + text.substr(-2, 1) + '</spacing24><spacing12>' + text.substr(-1, 1) + '</spacing12>';
              $(this).html(per + get_word + remainder_text);
            }
            if (remainder == 3) { //字數為3時
              var remainder_text = '<spacing6>' + text.substr(-3, 2) + '</spacing6><spacing12>' + text.substr(-1, 1) + '</spacing12>';
              $(this).html(per + get_word + remainder_text);
            }
          } else {
            if (remainder == 2) { //字數為6、10、14、18、22、26...時
              var remainder_text = '<spacing24>' + text.substr(-2, 1) + '</spacing24><spacing12>' + text.substr(-1, 1) + '</spacing12>';
              $(this).html(per + get_word + blank + remainder_text);
            }
            if (remainder == 3) { //字數為7、11、15、19、23、27...時
              var remainder_text = '<spacing6>' + text.substr(-3, 2) + '</spacing6><spacing12>' + text.substr(-1, 1) + '</spacing12>';
              $(this).html(per + get_word + blank + remainder_text);
            }
          }
        }
      }
    } else if (text.indexOf(keystar) > -1) { //標題文字是否有"★"
      var text = text.substr(1); //去掉"★"字符
      var keystar = '<keystar>★</keystar>'; //"★"樣式
      var blank = '<spacing9>&nbsp;</spacing9>'; //有符號時換行補空白置中
      if (th_en(text) || text.length == 1) {
        $(this).html(keystar + text);
      } else {
        var text_length = text.length; //去掉"★"後標題文字長度
        var remainder = text.length % 4; //取餘數
        var integer = Math.floor(text.length / 4); //取四字有幾行
        if (remainder == 1 && integer != 0) { //字數為5、9、13、17、21、25、29...時
          for (var i = 0, len = text.length - 5; i < len; i++) {
            get_word += text[i];
            if (i % 4 == 3) get_word += '</spacing12><br>' + blank;
            if (i % 4 == 2) get_word += '<spacing12>';
          }
          var remainder_text = '<spacing6>' + text.substr(-5, 2) + '</spacing6><spacing12>' + text.substr(-3, 1) + '</spacing12><br>' + blank + '<spacing24>' + text.substr(-2, 1) + '</spacing24><spacing12>' + text.substr(-1, 1) + '</spacing12>';
          $(this).html(keystar + get_word + remainder_text);
        } else {
          for (var i = 0, len = text.length - remainder; i < len; i++) {
            if (i != 0) {
              if (i % 4 == 0) get_word += blank;
            }
            get_word += text[i];
            if (i % 4 == 3) get_word += '</spacing12><br>';
            if (i % 4 == 2) get_word += '<spacing12>';
          }
          $(this).html(keystar + get_word);
          if (integer == 0) {
            if (remainder == 2) { //字數為2時
              var remainder_text = '<spacing24>' + text.substr(-2, 1) + '</spacing24><spacing12>' + text.substr(-1, 1) + '</spacing12>';
              $(this).html(keystar + get_word + remainder_text);
            }
            if (remainder == 3) { //字數為3時
              var remainder_text = '<spacing6>' + text.substr(-3, 2) + '</spacing6><spacing12>' + text.substr(-1, 1) + '</spacing12>';
              $(this).html(keystar + get_word + remainder_text);
            }
          } else {
            if (remainder == 2) { //字數為6、10、14、18、22、26...時
              var remainder_text = '<spacing24>' + text.substr(-2, 1) + '</spacing24><spacing12>' + text.substr(-1, 1) + '</spacing12>';
              $(this).html(keystar + get_word + blank + remainder_text);
            }
            if (remainder == 3) { //字數為7、11、15、19、23、27...時
              var remainder_text = '<spacing6>' + text.substr(-3, 2) + '</spacing6><spacing12>' + text.substr(-1, 1) + '</spacing12>';
              $(this).html(keystar + get_word + blank + remainder_text);
            }
          }
        }
      }
    } else if (th_en(text) || text.length == 1) {
      $(this).html(text); //標題文字中有英文、數字、符號直接寫入原來的樣式
    } else {
      var remainder = text.length % 4;
      var integer = Math.floor(text.length / 4); //取四字有幾行
      if (remainder == 1 && integer != 0) {
        for (var i = 0, len = text.length - 5; i < len; i++) {
          get_word += text[i];
          if (i % 4 == 3) get_word += '<br>';
        }
        var remainder_text = '<spacing6>' + text.substr(-5, 2) + '</spacing6>' + text.substr(-3, 1) + '<br><spacing24>' + text.substr(-2, 1) + '</spacing24>' + text.substr(-1, 1);
        $(this).html(get_word + remainder_text);
      } else {
        for (var i = 0, len = text.length - remainder; i < len; i++) {
          get_word += text[i];
          if (i % 4 == 3) get_word += '<br>';
        }
        $(this).html(get_word);
        if (remainder == 2) {
          var remainder_text = '<spacing24>' + text.substr(-2, 1) + '</spacing24>' + text.substr(-1, 1);
          $(this).html(get_word + remainder_text);
        }
        if (remainder == 3) {
          var remainder_text = '<spacing6>' + text.substr(-3, 2) + '</spacing6>' + text.substr(-1, 1);
          $(this).html(get_word + remainder_text);
        }
      }
    }
  });
}
//填表時間、表單單號、使用者IP寬度調整
function wfTtimeNumIpWd() {
  if (ww > 768) {
    if ($(".usetime").length > 0 && $(".filenumber").length > 0) {
      $(".usetime").css("width", "50%");
      $(".filenumber").css("width", "50%");
    } else if ($(".useip").length > 0 && $(".filenumber").length > 0) {
      $(".useip").css("width", "50%");
      $(".filenumber").css("width", "50%");
    }
  } else if (ww <= 768) {
    $(".usetime").css("width", "100%");
    $(".filenumber").css("width", "100%");
    $(".useip").css("width", "100%");
  }
}
var head = $("head").html();
var ww = window.innerWidth;
var tmpHam; //儲存RWD行為的變數
$(document).ready(function (e) {
  //裡面判斷是否是iframe
  $("iframe", window.parent.document).each(function (e) {
    if (self.frameElement && self.frameElement.tagName == "IFRAME") {
      $(".container").css("position", "static");
      $("html").css("height", "auto");
    }
    var frame_height = $(this).contents().find("body").height();
    if (frame_height < 300) {
      frame_height = 300;
      $(this).contents().find("body").height("300");
    }
    $(this).height(frame_height);
  });
  //預設打開function
  wfTtimeNumIpWd(); //填表時間、表單單號、使用者IP寬度調整。
  ellipsis(); //文字溢出
  titleFourWord(); //四字
  findIframe(); //尋找iframe
  toobarTab(); //公文系統工具列頁籤
  detectScroll(); //偵測scrollbar
  searchShow(); //隱藏搜尋顯示
  HambergerFunction(); //漢堡選單

  window.addEventListener("resize", searchShow); //隱藏搜尋顯示
  window.addEventListener("resize", reset_toggle); //使用者視窗大小改變時觸發漢堡選單事件
  window.addEventListener("resize", setIframeHeight); //重新計算IFRAME高度
  window.addEventListener("DOMContentLoaded", HambergerFunction); //漢堡選單事件
  $(".bars").click(function (e) {
    HambergerFunction();
  });
  //捲軸樣式

  if (head.indexOf("scrollbar.js") > -1) {
    ("use strict");
    $(".scrollbar-inner").scrollbar();
  }
});

function setIframeHeight() {
  //RWD時重新計算IFRAME高度
  $("iframe", window.parent.document).each(function () {
    var frame_height = $(this).contents().find("body").height();
    if (frame_height < 300) {
      frame_height = 300;
      $(this).contents().find("body").height("300");
    }
    $(this).height(frame_height);
  });
}
function open_batch_edit(obj) {
  if (!$(obj).hasClass("disabled")) {
    $(obj).parents(".data-tr").addClass("hide");
    $(obj).parents(".data-tr").next().removeClass("hide");
    system_shade.shade("open", "batchedit");
    input_content_get_height($(obj));
    $(obj).parents(".data-tr").next().find("tr").css("background", "#FFF");
  }
}

function open_batch_add(obj) {
  var addtr_obj = $(obj).parents('table').find(".add-tr");
  $(addtr_obj).removeClass("hide");
  var input_content_h = $(addtr_obj).find(".input-content").height();
  system_shade.shade("open", "batchedit");
  $(addtr_obj).css("height", input_content_h);
  $(addtr_obj).find("tr").css("background", "#FFF");
}

function close_batch_edit() {
  $('.input-tr,.add-tr').addClass('hide');
  $('.data-tr').removeClass('hide');
  system_shade.shade("close", "batchedit");
}

/**
 *判斷成批編輯高度
 *如果是編輯紐去觸發則跑第一個，如果是裡面的原件去觸發則跑第二個
 * @param {*} n
 */
function input_content_get_height(n) {
  //按下編輯紐執行
  if ($(n).attr("class").trim().indexOf("icon-edit-btn") >= 0) {
    var input_content = $(n).parents(".data-tr").next().find(".input-content");
    var input_content_parent = $(input_content).parents(".input-tr");
    $(input_content_parent).height(input_content.height());
  } else {
    //按下下拉選單後去執行
    var input_content = $(n).closest(".input-content");
    var input_content_parent = $(input_content).parents(".input-tr");
    $(input_content_parent).height(input_content.height());
  }
}

//因綁點擊事，PR判斷上會有問題，改由程式呼叫function方式
/* $(document).ready(function () {
    //編輯
    $(".icon-edit-btn").click(function () {
        open_batch_edit($(this));
    });

    //新增
    $(".add-btn").click(function () {
        open_batch_add($(this));
    });

    //確認
    $(".icon-check-btn").click(function () {
        close_batch_edit();
    });

    //返回
    $(".icon-back-btn").click(function () {
        close_batch_edit();
    });

    //儲存
    $(".icon-floppy-btn").click(function () {
        close_batch_edit();
    });
}); */
$(function () {
  $.datepicker.__proto__.__generateHTML = $.datepicker.__proto__._generateHTML;

  $.extend($.datepicker.__proto__, {
    _generateHTML: function (inst) {
      var html = this.__generateHTML.apply(this, arguments);
      var tmp_input = $(this._lastInput);

      if (tmp_input.parent().hasClass('format_calendar')) {
        //WP格式如果選擇第二次，可以抓input裡面的值去代入選擇的日期
        var current_date = $.datepicker.parseDate('Rmmdd', tmp_input.val());
        //抓使用者定義格式
        var data_format = tmp_input.data('format');
        var data_format_arr;

        if (data_format !== undefined && data_format !== "") {
          data_format_arr = data_format.split(',');
          chines_format = data_format_arr;
        }
        var cal_ele = $(this.dpDiv);
        cal_ele.addClass('data_format');
        var all_html = '';
        chines_format.forEach(function (item, index, array) {
          var html_str = print_date(item, current_date);
          tmp_html =
            '<div id="data_format_' + index + '">' + html_str + '</div>';
          all_html += tmp_html;
        });
        all_html =
          '<div class="data_format_wrapper">' + all_html + '</div>';
        html += all_html;
        //jq WP民國格式萬年曆選擇後不能消失是用程式控制，因此預設的關閉功能按鈕會消失，所以選擇後用程式補上去關閉按鈕
        if (html.indexOf('關閉') == -1) {
          html = html.replace(
            "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>今天</button>",
            "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>今天</button><button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>關閉</button>"
          );
        }
      }
      return html;

      function print_date(str, current_date) {
        var full_week = new Array(
          '星期日',
          '星期一',
          '星期二',
          '星期三',
          '星期四',
          '星期五',
          '星期六',
          '星期日'
        );
        var date;
        if (current_date == undefined) {
          date = new Date();
        } else {
          date = new Date(current_date);
        }
        var m = date.getMonth();
        var d = date.getDate();
        var y = date.getFullYear();
        var w = date.getDay();
        var s = {};
        s['%W'] = y; //西元年
        s['%Y'] = y - 1911; //民國年
        s['%M'] = m + 1; //幾月
        s['%D'] = d; //幾日
        s['%A'] = full_week[w]; //星期幾
        var re = /%./g;
        var a = str.match(re);
        for (var i = 0; i < a.length; i++) {
          var tmp = s[a[i]];
          if (tmp) {
            re = new RegExp(a[i], 'g');
            str = str.replace(re, tmp);
          }
        }
        return str;
      }
    },
  });
});
jq_calendar.prototype.format_calendar = function () {
  var input = this;
  var save_select_date;
  input.all_input.each(function (index, element) {
    var tmp_min_day = input.west_date_array(
      $(this).attr('data-min_day'),
      'min'
    );
    var tmp_max_day = input.west_date_array(
      $(this).attr('data-max_day'),
      'max'
    );
    var data_format = $(this).data('format');
    var data_format_arr;
    if (data_format !== undefined && data_format !== '') {
      data_format_arr = data_format.split(',');
      chines_format = data_format_arr;
    }
    //宣告jquery 日曆
    $(this)
      .datepicker({
        changeYear: true, //開啟下拉年分
        changeMonth: true, //開啟下拉月分
        dateFormat: 'Rmmdd',
        showButtonPanel: true,
        yearRange: '-100:+100', //下拉年分範圍
        firstDay: 0, //0是從星期日開始
        minDate: new Date(tmp_min_day[0], tmp_min_day[1], tmp_min_day[2]),
        //minDate: new Date(2011, 06, 01),
        maxDate: new Date(tmp_max_day[0], tmp_max_day[1], tmp_max_day[2]),
        //selectOtherMonths: true,
        showOn: 'button',
        buttonText: '', //按鈕文字
        beforeShow: function (dateText, inst) {
          //打開之前的動作
          var tmp_cal = $(inst.dpDiv); //日曆面板
          var tmp_input = $(dateText);
          //共用的日曆位置處理
          input.calendar_position_css(tmp_input, tmp_cal);
        },
        beforeShowDay: function (date) {
          // 國定假日測試var Holiday = ['109/05/06', '109/05/07'];
          if (input.holiday.length > 0) {
            var holiday = input.holiday;
            var tmp_date_arr = [];
            for (var i = 0; i < holiday.length; ++i) {
              var tmp_holidays = input.west_date_array(holiday[i]);
              var tmp_date = new Date(
                tmp_holidays[0],
                parseInt(tmp_holidays[1]),
                tmp_holidays[2]
              );
              tmp_date_arr.push(tmp_date);
            }
            var tmp_is_date = input.index_of_date(tmp_date_arr, new Date(date));

            if (tmp_is_date !== -1) {
              return [true, 'holiday'];
            }
          }
          return [true, ''];
        },
        onChangeMonthYear: function () {
          //換月、日事件
        },
        onSelect: function (selectedDate) {
          var cal = $($(this).data('datepicker').dpDiv);
          var tmp_date = $.datepicker.parseDate('Rmmdd', selectedDate);
          save_select_date = tmp_date; //選了先存起來
          input.creat_format_html(cal, chines_format, tmp_date);
          if (chines_format.length == 1) {
            ///如果只有一個陣列選完就是直接寫進去input
            $(this).data('datepicker').inline = false;
          } else {
            $(this).data('datepicker').inline = true;
          }
        },
        onClose: function () {
          $(this).data('datepicker').inline = false;
          var tmp_input = $(this);
          var cal = $($(this).data('datepicker').dpDiv);
          //消失時顯示優化
          cal.find('.data_format_wrapper').hide();
          cal.removeClass('data_format');

          var del_html = '<div class="calendar_function_box">';
          var show_del_icon = tmp_input.data('show_del_icon');
          if (false !== show_del_icon) {
            del_html += '<div class="calendar_delate_icon"></div>';
          }
          del_html += '</div>';
          tmp_input.parent().append(del_html);

          // if (tmp_input.parent().find('.calendar_function_box').length == 0) {
          //   tmp_input.parent().append(del_html);
          // }
          //選第二次加入刪除按鈕"X"
          ///如果只有一個陣列選完就是直接寫進去input
          if (chines_format.length == 1) {
            setTimeout(function () {
              tmp_input
                .siblings('.show_date_format_input')
                .val($('.data_format_wrapper div:first').text());
            }, 0);
          }
        },
      })
      .next('.ui-datepicker-trigger')
      .addClass('calendar_icon');
    $(this).off('input').on('input', function () {
      input.adjustInputWidth($(this));
    });
    $(this).off('change').on('change', function () {
      input.adjustInputWidth($(this));
    });
  });
};
// cal 萬年曆div
//data_arr 民國格式
//date 帶入的選擇日期
jq_calendar.prototype.creat_format_html = function (cal, data_arr, date) {
  var input = this;
  var cal = cal;
  var data_arr = data_arr;
  //如果不是選擇日期就不用變
  setTimeout(function () {
    cal.addClass('data_format');
    tmp_format_wrapper = cal.find('.data_format_wrapper');
    tmp_format_wrapper.empty();
    var all_html = '';
    data_arr.forEach(function (item, index, array) {
      var html_str = print_date(item, date);
      tmp_html = '<div id="data_format_' + index + '">' + html_str + '</div>';
      all_html += tmp_html;
    });
    tmp_format_wrapper.append(all_html);
  }, 0);


  function print_date(str, current_date) {
    var full_week = new Array(
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
      '星期日'
    );
    var date;
    if (current_date == undefined) {
      date = new Date();
    } else {
      date = new Date(current_date);
    }
    var m = date.getMonth();
    var d = date.getDate();
    var y = date.getFullYear();
    var w = date.getDay();
    var s = {};
    s['%W'] = y; //西元年
    s['%Y'] = y - 1911; //民國年
    s['%M'] = m + 1; //幾月
    s['%D'] = d; //幾日
    s['%A'] = full_week[w]; //星期幾
    var re = /%./g;
    var a = str.match(re);
    for (var i = 0; i < a.length; i++) {
      var tmp = s[a[i]];
      if (tmp) {
        re = new RegExp(a[i], 'g');
        str = str.replace(re, tmp);
      }
    }
    return str;
  }
}
///////////////////////jquery datepicker套件日曆中文化和民國年格式修改/////////////
$(function () {
  //先設定預設西元年的datepicker必要功能
  var old_generateMonthYearHeader = $.datepicker._generateMonthYearHeader;
  var old_formatDate = $.datepicker.formatDate;
  var old_parseDate = $.datepicker.parseDate;
  $.extend($.datepicker, {
    //轉民國年
    mingoFormat: function (format, date) {
      if (format == 'Rmmdd') {
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();
        var fm = function (v) {
          return (v < 10 ? '0' : '') + v;
        };
        if (y - 1911 >= 100) {
          y = y - 1911;
        } else {
          y = '0' + String(y - 1911);
        }

        return y + '/' + fm(m) + '/' + fm(d);
      }
      // return oformatDate;
    },
    //選擇日期之後的value
    //formatDate主要是覆蓋前面的jq ui的方法因此請別改這支，要轉民國年請用上面複製下來的方法
    formatDate: function (format, date, settings) {
      var oformatDate = old_formatDate(format, date, settings);
      if (oformatDate.indexOf('NaN') !== -1) {
        return '';
      }
      if (format == 'Rmmdd') {
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();
        var fm = function (v) {
          return (v < 10 ? '0' : '') + v;
        };
        if (y - 1911 >= 100) {
          y = y - 1911;
        } else {
          y = '0' + String(y - 1911);
        }

        return y + '/' + fm(m) + '/' + fm(d);
      }
      return oformatDate;
    },
    //點取已存在日期的parse
    parseDate: function (format, value, settings) {
      var v = new String(value.toString().replace(/[&\/\\\*^%$#@\-]/g, ''));
      var Y, M, D;
      if (format == 'Rmmdd') {
        if (v.length == 7) {
          /*1001215*/
          Y = v.substring(0, 3) - 0 + 1911;
          M = v.substring(3, 5) - 0 - 1;
          D = v.substring(5, 7) - 0;
          return new Date(Y, M, D);
        } else if (v.length == 6) {
          /*0981215*/
          Y = '0' + String(v.substring(0, 2) - 0 + 1911);
          M = v.substring(2, 4) - 0 - 1;
          D = v.substring(4, 6) - 0;
          return new Date(Y, M, D);
        }
        return new Date();
      } else {
        var oparseDate = old_parseDate.apply(this, [format, value, settings]);
        return oparseDate;
      }
    },
    //改變小工具的年
    _generateMonthYearHeader: function (
      inst,
      drawMonth,
      drawYear,
      minDate,
      maxDate,
      secondary,
      monthNames,
      monthNamesShort
    ) {
      var dateFormat = this._get(inst, 'dateFormat');

      var htmlYearMonth = old_generateMonthYearHeader.apply(this, [
        inst,
        drawMonth,
        drawYear,
        minDate,
        maxDate,
        secondary,
        monthNames,
        monthNamesShort,
      ]);

      if (dateFormat) {
        if ($(htmlYearMonth).find('.ui-datepicker-year').length > 0) {
          htmlYearMonth = $(htmlYearMonth)
            .find('.ui-datepicker-year')
            .find('option')
            .each(function (i, e) {
              if (Number(e.value) - 1911 > 0) {
                $(e).text(Number(e.textContent) - 1911 + '年');
              }
            })
            .end()
            .end()
            .get(0).outerHTML;
        }
      }
      return htmlYearMonth;
    },
  });
});
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../widgets/datepicker'], factory);
  } else {
    // Browser globals
    factory(jQuery.datepicker);
  }
})(function (datepicker) {
  datepicker.regional['zh-TW'] = {
    closeText: '關閉',
    prevText: '&#x3C;上個月',
    nextText: '下個月&#x3E;',
    currentText: '今天',
    monthNames: [
      '一月',
      '二月',
      '三月',
      '四月',
      '五月',
      '六月',
      '七月',
      '八月',
      '九月',
      '十月',
      '十一月',
      '十二月',
    ],
    monthNamesShort: [
      '1月',
      '2月',
      '3月',
      '4月',
      '5月',
      '6月',
      '7月',
      '8月',
      '9月',
      '10月',
      '11月',
      '12月',
    ],
    dayNames: [
      '星期日',
      '星期一',
      '星期二',
      '星期三',
      '星期四',
      '星期五',
      '星期六',
    ],
    dayNamesShort: ['週日', '週一', '週二', '週三', '週四', '週五', '週六'],
    dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
    weekHeader: '週',
    dateFormat: 'yy/mm/dd',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: true,
    // yearSuffix: "年" //中間的文字
  };
  datepicker.setDefaults(datepicker.regional['zh-TW']);

  return datepicker.regional['zh-TW'];
});
///////以下為功能實現區/////////////
/**
 *
 *
 * @param {*} input 代入的input
 * @param {*} is_type_calendar 1.簡單版 2.標準版 3.起訖日版
 * @param {*} holiday 帶入國定假日
 *
 */
//TODO:建構子HEADER
function jq_calendar(input, is_type_calendar, holiday) {
  this.all_input = input; //所有的input
  this.id; //input ID存取
  this.date_length = 90; //打字時日立長度 maxlength="9"
  this.placeholder = 'YYYMMDD'; //placeholder
  this.is_type_calendar = is_type_calendar; //顯示何種類型的萬年曆
  this.set_range_first; //選取範圍第一個位置
  this.set_range_last; //選取範圍最後一個位置
  this.select_val; //選取的文字存取
  this.arr_position; //陣列位置存取(這邊的設計是文字切成陣列)ex:108/08/08 -->[108,08,08]
  this.big_month_group = [1, 3, 5, 7, 8, 10, 12]; //大月
  this.small_month_group = [4, 6, 9, 11]; //小月
  this.leap_month = [2]; //潤年判斷
  this.str_key = ''; //打字存取地方
  this.click_name = ['top', 'down']; //上下按鈕名稱
  this.focus_pos;
  this.default_min_day = '09/01/01'; //預設最小值
  this.default_max_day = '209/01/01'; //預設最大值
  this.holiday = holiday;
  this.range_obj; //儲存一欄式起訖日的值
  var input = this; //存取的物件屬性名稱
  //萬年曆顯示功能控制
  this.calendar_display = function () {
    //處理最大最小日期
    switch (input.is_type_calendar) {
      case 1: //簡單版
        input.display_basic_calendar();
        //簡單版的萬年曆不提供修改日期功能
        input.all_input.attr('readonly', true); //禁止輸入效果(IE不行)
        input.all_input.attr('unselectable', 'on'); //for IE用禁止輸入效果
        break;
      case 2: //標準版(加入輸入模式、含雙欄式起訖日)
        input.display_basic_calendar();
        input.display_function_box();
        //輸入防呆處理，IE chrome分別為兩種方式，IE(IE10)和chrome可以用HTML5的input tel格式讓使用者只輸入數字排除特殊符號，此外IE 可以透過設定ime-mode去限制使用者指能使用英文輸入法
        input.all_input.css('ime-mode', 'disabled').attr('type', 'tel');
        //設定日曆長度
        input.all_input.attr('maxlength', this.date_length);
        break;
      case 3: //單欄式起訖日到期日版本
        input.display_range_calendar();
        input.all_input.attr('readonly', true); //禁止輸入效果(IE不行)
        input.all_input.attr('unselectable', 'on'); //for IE用禁止輸入效果
        break;
      case 4: //行事曆版本
        input.display_inline_calendar();
        break;
      case 5: //IFTWP格式版本
        input.format_calendar();
        break;
      default:
        input.display_basic_calendar();
        input.display_function_box();
        break;
    }
  };

  this.calendar_display();
}

//共用方法區

/**
 * 基本功能(jq萬年曆)
 *
 *
 * **/
//TODO:呼叫-基本功能(jq萬年曆)
jq_calendar.prototype.display_basic_calendar = function () {
  var input = this;

  //宣告jquery 日曆
  input.all_input.each(function (index, element) {
    //先抓最大最小值轉西元(如果沒設定會給預設值1920,0,01 2120,0,01)
    var tmp_min_day = input.west_date_array(
      $(this).attr('data-min_day'),
      'min'
    );
    var tmp_max_day = input.west_date_array(
      $(this).attr('data-max_day'),
      'max'
    );
    $(this)
      .datepicker({
        changeYear: true, //開啟下拉年分
        changeMonth: true, //開啟下拉月分
        dateFormat: 'Rmmdd',
        showButtonPanel: true,
        yearRange: '-100:+100', //下拉年分範圍
        firstDay: 0, //0是從星期日開始
        minDate: new Date(tmp_min_day[0], tmp_min_day[1], tmp_min_day[2]), //西元
        maxDate: new Date(tmp_max_day[0], tmp_max_day[1], tmp_max_day[2]),
        showOn: 'button',
        buttonText: '', //按鈕文字
        beforeShowDay: function (date) {
          // 國定假日測試var Holiday = ['109/05/06', '109/05/07'];
          if (input.holiday.length > 0) {
            var holiday = input.holiday;
            var tmp_date_arr = [];
            for (var i = 0; i < holiday.length; ++i) {
              var tmp_holidays = input.west_date_array(holiday[i]);
              var tmp_date = new Date(
                tmp_holidays[0],
                parseInt(tmp_holidays[1]),
                tmp_holidays[2]
              );
              tmp_date_arr.push(tmp_date);
            }
            var tmp_is_date = input.index_of_date(tmp_date_arr, new Date(date));

            if (tmp_is_date !== -1) {
              return [true, 'holiday'];
            }
          }
          return [true, ''];
        },
        beforeShow: function (dateText, inst) {
          $(this).blur();
          //日曆位置和z-index處理
          var tmp_cal = $(inst.dpDiv); //日曆面板
          var tmp_input = $(dateText);
          input.calendar_position_css(tmp_input, tmp_cal);
          input.calendar_def_display(tmp_cal);
          //群組式兩欄式起訖日處理
          if ($(this).closest('.range_group_calendar').length > 0) {
            var tmp_next_ele = $(this)
              .parent()
              .nextAll('.stander_calendar')
              .find('input');
            var tmp_prev_ele = $(this)
              .parent()
              .prevAll('.stander_calendar')
              .find('input');
            start_end_date($(this), tmp_prev_ele, tmp_next_ele);
          }

          //不同欄位起訖日處理
          //用data抓就不用轉格式
          if ($(this).data('calendar_group') !== undefined) {
            //找出起訖日input帶入function
            var tmp_cal_obj = $(this).data('calendar_group');
            var tmp_curr_group = tmp_cal_obj.group;
            var tmp_cal_next_ele;
            var tmp_cal_prev_ele;
            //確認目前的順序
            if (tmp_cal_obj.order == 'first') {
              tmp_cal_prev_ele = $(this);
            } else {
              tmp_cal_next_ele = $(this);
            }
            input.all_input.each(function (index, element) {
              // element == this
              var tmp_all_cal_obj = $(this).data('calendar_group');
              if (tmp_all_cal_obj !== undefined) {
                if (tmp_all_cal_obj.group == tmp_curr_group) {
                  //找到群組後確認順序
                  if (tmp_all_cal_obj.order == 'first') {
                    tmp_cal_prev_ele = $(this);
                  } else {
                    tmp_cal_next_ele = $(this);
                  }
                }
              }
            });
            start_end_date($(this), tmp_cal_prev_ele, tmp_cal_next_ele);
          }

          /**
           *起訖日處理最大值最小值處理
           *
           * @param {*} current_ele 目前的input
           * @param {*} prev_ele 起日Input
           * @param {*} next_ele 迄日Input
           */
          function start_end_date(current_ele, prev_ele, next_ele) {
            var prev_ele = prev_ele.length == 0 ? current_ele : prev_ele;
            var next_ele = next_ele.length == 0 ? current_ele : next_ele;
            //預設最大最小日期
            var default_max_day = new Date(
              tmp_max_day[0],
              tmp_max_day[1],
              tmp_max_day[2]
            );
            var default_min_day = new Date(
              tmp_min_day[0],
              tmp_min_day[1],
              tmp_min_day[2]
            );
            //如果打開時兩個欄位都是是空值就清除先前設定的最大最小值，跑預設的最大最小值
            //兩邊有值的情況或是一邊有值且點選的不是自己
            //，這邊是如果起日打開，就要設定最大值
            if (
              next_ele.length > 0 &&
              next_ele.val() !== '' &&
              current_ele.attr('id') !== next_ele.attr('id')
            ) {
              //這邊是自己是起日打開，因此要去抓旁邊的迄日，然後在修改自己的maxdate
              var tmp_next_input_arr = input.west_date_array(next_ele.val());
              var tmp_new_val = new Date(
                tmp_next_input_arr[0],
                tmp_next_input_arr[1],
                tmp_next_input_arr[2]
              );
              current_ele
                .datepicker('option', {
                  maxDate: tmp_new_val,
                  minDate: default_min_day,
                })
                .next('.ui-datepicker-trigger')
                .addClass('calendar_icon');
              return false;
            }
            //兩邊有值的情況或是一邊有值且點選的不是自己
            //這邊如果是迄日打開就要抓隔壁設定最小值
            if (
              prev_ele.length > 0 &&
              prev_ele.val() !== '' &&
              current_ele.attr('id') !== prev_ele.attr('id')
            ) {
              //這邊是自己是到期日打開，因此要去抓前面的起訖日，然後在修改自己的mindate
              var tmp_prev_input_arr = input.west_date_array(prev_ele.val());
              var tmp_new_val = new Date(
                tmp_prev_input_arr[0],
                tmp_prev_input_arr[1],
                tmp_prev_input_arr[2]
              );
              current_ele
                .datepicker('option', {
                  maxDate: default_max_day,
                  minDate: tmp_new_val,
                })
                .next('.ui-datepicker-trigger')
                .addClass('calendar_icon');
              return false;
            }
            //兩邊都無值或是一邊有值且點選的是自己跑這段
            current_ele
              .datepicker('option', {
                maxDate: default_max_day,
                minDate: default_min_day,
              })
              .next('.ui-datepicker-trigger')
              .addClass('calendar_icon');
          }
        },
        onClose: function (e) {
          //將抓下來的去除"/"
          var curDate = e.replace(/[&\/\\\*^%$#@\-]/g, ''); //jquery 插件傳進來的日期
          var js_today = get_today(); //JS抓的日期
          //兩欄式處理使用變數
          var current_ele = $(this);
          var current_ele_val = current_ele.val();

          //比對完後就是點選今天部會關閉
          if (js_today == curDate) {
            $(this).data('datepicker').inline = false;
          } else {
            $(this).data('datepicker').inline = '';
          }
          this.blur();
          //沒有選日期的話就跳出
          if ($(this).val() == '') {
            return false;
          }

          //兩欄式起訖日處理
          if (current_ele.closest('.range_group_calendar').length > 0) {
            var rage_group_calendar_wrapper = current_ele.closest(
              '.range_group_calendar'
            );
            var tmp_next = current_ele
              .parent()
              .nextAll('.stander_calendar')
              .find('input');
            var tmp_prev = current_ele
              .parent()
              .prevAll('.stander_calendar')

              .find('input');
            //如果有設定間隔月數
            //EX:參數設定2個月，如果是109/06/06，結果是109/08/06
            if (rage_group_calendar_wrapper.data('calc_month') !== undefined) {
              //有設定參數
              var calc_num = rage_group_calendar_wrapper.data('calc_month');
              var save_date;
              //如果我選的是起日就要計算迄日的值
              if (tmp_next.length > 0) {
                save_date = input.month_calc_num(
                  'after',
                  current_ele_val,
                  calc_num
                );
                tmp_next.val(save_date);
                input.key_function(tmp_next);

                //最大值判斷
                var limit_max_day = input.is_limit_or_mini_num(
                  tmp_next,
                  save_date,
                  'max'
                );
                if (limit_max_day !== false) {
                  tmp_next.val(limit_max_day);
                  input.key_function(tmp_next);
                }
              } else if (tmp_prev.length > 0) {
                //反之選擇迄日就要計算起日的值
                save_date = input.month_calc_num(
                  'prev',
                  current_ele_val,
                  calc_num
                );
                tmp_prev.val(save_date);
                input.key_function(tmp_prev);

                //是否超過最小值判斷
                var limit_min_day = input.is_limit_or_mini_num(
                  tmp_prev,
                  save_date,
                  'min'
                );
                if (limit_min_day !== false) {
                  tmp_prev.val(limit_min_day);
                  input.key_function(tmp_prev);
                }
              }
            }
            //如果有設定間隔天數
            //EX:參數設定10天，如果是109/06/06，結果是109/06/16
            if (rage_group_calendar_wrapper.data('calc_day') !== undefined) {
              //有設定參數
              var calc_num = rage_group_calendar_wrapper.data('calc_day');
              var save_date;
              //如果我選的是起日就要計算迄日的值
              if (tmp_next.length > 0) {
                save_date = input.day_calc_num(
                  'after',
                  current_ele_val,
                  calc_num
                );
                tmp_next.val(save_date);
                input.key_function(tmp_next);
                //最大值判斷
                var limit_max_day = input.is_limit_or_mini_num(
                  tmp_next,
                  save_date,
                  'max'
                );
                if (limit_max_day !== false) {
                  tmp_next.val(limit_max_day);
                  input.key_function(tmp_next);
                }
              } else if (tmp_prev.length > 0) {
                //反之選擇迄日就要計算起日的值
                save_date = input.day_calc_num(
                  'prev',
                  current_ele_val,
                  calc_num
                );
                tmp_prev.val(save_date);
                input.key_function(tmp_prev);
                //是否超過最小值判斷
                var limit_min_day = input.is_limit_or_mini_num(
                  tmp_prev,
                  save_date,
                  'min'
                );
                if (limit_min_day !== false) {
                  tmp_prev.val(limit_min_day);
                  input.key_function(tmp_prev);
                }
              }
            }
          }
        },
        onSelect: function (e) {
          input.blur_function($(this)); //選完檢查格式
          $(this).val(e + "~~~~~~~~~");
          $(this).change();
        },
      })
      .next('.ui-datepicker-trigger')
      .addClass('calendar_icon'); //按鈕的class
    $(this).off('input').on('input', function () {
      input.adjustInputWidth($(this));
    });
    $(this).off('change').on('change', function () {
      input.adjustInputWidth($(this));
    });
  });

  function get_today() {
    var Today = new Date();
    var tmp_year = (Today.getFullYear() - 1911).toString();
    //月份從0開始要+1
    var tmp_month = input.padding_zero(Today.getMonth() + 1, 2).toString();
    var tmp_date = Today.getDate().toString();

    var tmp_today = tmp_year + tmp_month + tmp_date;
    return tmp_today;
  }
};
/**
 * 顯示功能區(打字)
 *
 *
 * **/
//TODO:產生HTML功能區
jq_calendar.prototype.display_function_box = function () {
  var input = this;
  input.all_input.attr('placeholder', this.placeholder); //顯示placeholder
  //已經有的就不加入，防止動態產生的情況載兩次
  input.all_input.each(function (index, element) {
    if ($(this).parent().find('.calendar_function_box').length == 0) {
      var show_del_icon = $(element).data('show_del_icon');
      var function_html = ''; //功能的html
      //按鈕的包裝
      function_html += '<div class="calendar_function_box">';
      //刪除紐
      if (false !== show_del_icon) {
        function_html += '<div class="calendar_delate_icon"></div>';
      }
      //上下功能
      function_html += '<div class="calendar_click_function">';
      function_html += '<i class="calendar_click_function_top"></i>';
      function_html += '<i class="calendar_click_function_down"></i>';
      function_html += '</div>';
      //
      function_html += '</div>';

      $(this).after(function_html);
    }
  });
};
//TODO:日曆兩欄式起訖日輸入後blur、上下+-1按鈕防呆處理
jq_calendar.prototype.group_calendar_blur_function = function (current_ele) {
  var input = this;
  var current_ele = current_ele;
  var current_ele_val = current_ele.val();
  //兩欄式起訖日處理
  if (current_ele.closest('.range_group_calendar').length > 0) {
    var rage_group_calendar_wrapper = current_ele.closest(
      '.range_group_calendar'
    );
    var tmp_next = current_ele
      .parent()
      .nextAll('.stander_calendar')
      .find('input');
    var tmp_prev = current_ele
      .parent()
      .prevAll('.stander_calendar')
      .find('input');
    //如果有參數的情況
    //兩欄式起訖日帶入參數(參數設在<span class="stander_calendar" data-calc="3">)例如:參數設定三個月，起日選擇完，迄日就帶入三個月後的日期，反之迄日選則日期，起日就帶入三個月前的日期。
    if (rage_group_calendar_wrapper.data('calc_month') !== undefined) {
      //有設定參數
      var calc_num = rage_group_calendar_wrapper.data('calc_month');
      var save_date; //要放進輸入框的值
      //如果我選的是起日就要計算迄日的值
      if (tmp_next.length > 0) {
        save_date = input.month_calc_num('after', current_ele_val, calc_num);
        tmp_next.val(save_date);
        input.key_function(tmp_next);
        //是否超過最大值判斷
        var limit_max_day = input.is_limit_or_mini_num(
          tmp_next,
          save_date,
          'max'
        );
        if (limit_max_day !== false) {
          tmp_next.val(limit_max_day);
          input.key_function(tmp_next);
        }
      } else if (tmp_prev.length > 0) {
        //反之選擇迄日就要計算起日的值
        save_date = input.month_calc_num('prev', current_ele_val, calc_num);
        tmp_prev.val(save_date);
        input.key_function(tmp_prev);
        //是否超過最小值判斷
        var limit_min_day = input.is_limit_or_mini_num(
          tmp_prev,
          save_date,
          'min'
        );
        if (limit_min_day !== false) {
          tmp_prev.val(limit_min_day);
          input.key_function(tmp_prev);
        }
      }
    } else if (rage_group_calendar_wrapper.data('calc_day') !== undefined) {
      var calc_day = rage_group_calendar_wrapper.data('calc_day');
      if (tmp_next.length > 0) {
        save_date = input.day_calc_num('after', current_ele_val, calc_day);
        tmp_next.val(save_date);
        input.key_function(tmp_next);
        //是否超過最大值判斷
        var limit_max_day = input.is_limit_or_mini_num(
          tmp_next,
          save_date,
          'max'
        );
        if (limit_max_day !== false) {
          tmp_next.val(limit_max_day);
          input.key_function(tmp_next);
        }
      } else if (tmp_prev.length > 0) {
        save_date = input.day_calc_num('prev', current_ele_val, calc_day);
        tmp_prev.val(save_date);
        input.key_function(tmp_prev);
        //是否超過最小值判斷
        var limit_min_day = input.is_limit_or_mini_num(
          tmp_prev,
          save_date,
          'min'
        );
        if (limit_min_day !== false) {
          tmp_prev.val(limit_min_day);
          input.key_function(tmp_prev);
        }
      }
    } else {
      //防呆起日比迄日大的情況
      start_end_date_process(current_ele, tmp_prev, tmp_next);
    }
  }

  //不同欄位起訖日處理
  if (current_ele.data('calendar_group') !== undefined) {
    //找出起訖日input帶入function
    var tmp_cal_obj = current_ele.data('calendar_group'); //用data抓就不用轉格式
    var tmp_curr_group = tmp_cal_obj.group;
    var tmp_cal_next_ele;
    var tmp_cal_prev_ele;
    //確認目前的順序
    if (tmp_cal_obj.order == 'first') {
      tmp_cal_prev_ele = current_ele;
    } else {
      tmp_cal_next_ele = current_ele;
    }
    input.all_input.each(function (index, element) {
      // element == this
      var tmp_all_cal_obj = $(this).data('calendar_group');
      if (tmp_all_cal_obj !== undefined) {
        if (tmp_all_cal_obj.group == tmp_curr_group) {
          //找到群組後確認順序
          if (tmp_all_cal_obj.order == 'first') {
            tmp_cal_prev_ele = $(this);
          } else {
            tmp_cal_next_ele = $(this);
          }
        }
      }
    });
    start_end_date_process(current_ele, tmp_cal_prev_ele, tmp_cal_next_ele);
  }

  /**防呆處理如果起日比迄日大或是迄日比起日大，修改輸入框值
   *
   *
   * @param {*} tmp_current_ele 目前的元素
   * @param {*} prev_ele 起日元素
   * @param {*} next_ele 迄日元素
   */
  function start_end_date_process(tmp_current_ele, prev_ele, next_ele) {
    var current_ele = tmp_current_ele;
    var prev_ele = prev_ele;
    var next_ele = next_ele;
    var current_ele_val;
    var tmp_next_ele_val;
    var tmp_prev_ele_val;
    //計算目前自己的西元值
    if (current_ele.val() !== '') {
      var tmp_current_arr = input.west_date_array(current_ele.val());
      var tmp_current_west_val = new Date(
        tmp_current_arr[0],
        tmp_current_arr[1],
        tmp_current_arr[2]
      );
      var tmp_current_time_stamp = Date.parse(tmp_current_west_val);
      current_ele_val = tmp_current_time_stamp;
    }
    //自己是前面的欄位，就去處理後面的
    if (next_ele.length > 0 && next_ele.val() !== '') {
      var tmp_next_arr = input.west_date_array(next_ele.val());
      var tmp_next_west_val = new Date(
        tmp_next_arr[0],
        tmp_next_arr[1],
        tmp_next_arr[2]
      );
      var tmp_next_time_stamp = Date.parse(tmp_next_west_val);
      tmp_next_ele_val = tmp_next_time_stamp;
      //如果目前欄位日曆值大於後面欄位就是錯的，修改輸入框值
      if (current_ele_val > tmp_next_ele_val) {
        current_ele.val(next_ele.val());
      }
    }
    //自己是後面的欄位，就去處理前面的
    if (prev_ele.length > 0 && prev_ele.val() !== '') {
      var tmp_prev_arr = input.west_date_array(prev_ele.val());
      var tmp_prev_west_val = new Date(
        tmp_prev_arr[0],
        tmp_prev_arr[1],
        tmp_prev_arr[2]
      );

      var tmp_prev_time_stamp = Date.parse(tmp_prev_west_val);
      tmp_prev_ele_val = tmp_prev_time_stamp;
      //如果目前欄位日曆值小於前面欄位就是錯的，修改輸入框值
      if (current_ele_val < tmp_prev_ele_val) {
        current_ele.val(prev_ele.val());
      }
    }
  }
};
//TODO:工具-判斷最大最小值回傳最大最小值
jq_calendar.prototype.is_limit_or_mini_num = function (ele, date_str, type) {
  var input = this;
  var max_day = ele.data('max_day');
  var west_date_max_day;
  var max_day_west_timestamp;
  var min_day = ele.data('min_day');
  var west_date_min_day;
  var min_day_west_timestamp;
  var current_west_date = input.west_date(date_str);
  var current_west_timestamp = Date.parse(current_west_date);

  if (type == 'max') {
    if (max_day == undefined) {
      return false;
    }
    west_date_max_day = input.west_date(max_day);
    max_day_west_timestamp = Date.parse(west_date_max_day);
    //如果目前的值>最大值 就返回最大值
    if (current_west_timestamp > max_day_west_timestamp) {
      return max_day;
    } else {
      return false;
    }
  } else if (type == 'min') {
    if (min_day == undefined) {
      return false;
    }
    west_date_min_day = input.west_date(min_day);
    min_day_west_timestamp = Date.parse(west_date_min_day);
    //如果目前的值<最小值 就返回最小值
    if (current_west_timestamp < min_day_west_timestamp) {
      return min_day;
    } else {
      return false;
    }
  }
};
//TODO:display-日曆面滿的左右按鈕處理
jq_calendar.prototype.calendar_def_display = function (calendar_div) {
  setTimeout(function () {
    var prev = calendar_div.find('.ui-datepicker-prev');
    var title = calendar_div.find('.ui-datepicker-title');
    // console.log(
    //   '--',
    //   calendar_div,
    //   calendar_div[0].id,
    //   $('#ui-datepicker-div'),
    //   prev,
    //   title
    // );
    prev.after(title);
  }, 0);
};
//TODO:display-日曆面板的位置處理和z-index處理
jq_calendar.prototype.calendar_position_css = function (
  input_dom,
  calendar_div
) {
  $('#ui-datepicker-div').draggable(); //可拖曳
  setTimeout(function () {
    calendar_div.css('z-index', 9999);
    var tmp_input_top = input_dom.offset().top;
    var tmp_input_left = Math.floor(input_dom.offset().left);
    var tmp_cal_top = parseInt(calendar_div.css('top').replace('px', ''));
    var tmp_cal_left = Math.floor(
      parseInt(calendar_div.css('left').replace('px', ''))
    );
    //調整上下位置
    if (tmp_input_top > tmp_cal_top) {
      calendar_div.css({
        marginTop: -3 + 'px',
      });
    } else {
      calendar_div.css({
        marginTop: 3 + 'px',
      });
    }
    //調整日曆左右定位點，因為輸入框如果太靠右邊日曆會貼齊網頁右邊沒有留空隙
    if (tmp_input_left > tmp_cal_left) {
      calendar_div.css({
        marginLeft: -10 + 'px',
      });
    } else {
      calendar_div.css({
        marginLeft: '',
      });
    }
  }, 0);
};
/**取得分隔的"/"位置
 *
 *
 * @param {*} arr 帶入陣列
 * @param {*} val 要取得值
 */
jq_calendar.prototype.get_all_indexes = function (arr, val) {
  var indexes = [],
    i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
    indexes.push(i);
  }
  return indexes;
};
/**
 *
 *
 * @param {*} num 帶入的數字
 * @param {*} length 限制的長度
 * @param {*} way 增加的方向
 */
//TODO:工具-左右補00
jq_calendar.prototype.padding_zero = function (num, length, way) {
  var num = parseInt(num);
  var length = parseInt(length);
  for (var len = (num + '').length; len < length; len = num.length) {
    if (way == 'right') {
      num = num + '0';
    } else {
      num = '0' + num;
    }
  }
  return num.toString();
};
/**
 *選取位置
 *
 *
 *
 */
//TODO:字串反白選取位置
jq_calendar.prototype.change_cursor_pos = function (forward) {
  var input = this;
  //ex:109/02/06--->可知"/"在陣列第3位和第6位
  //轉陣列前面加入-1尾巴加入字串長度

  var inpObj = document.getElementById(input.id);
  var tmp_arr = inpObj.value.split(''); //分割所有字串
  var focus_pos = inpObj.selectionStart; //目前的焦點
  var indexes = input.get_all_indexes(tmp_arr, '/'); //取得分隔的"/"位置
  //如果是打完字下一個一定是"/"因此+1
  if (forward) {
    focus_pos += 1;
  }

  indexes.unshift(-1); //初始位置
  indexes.push(tmp_arr.length); //最後位置

  $.each(indexes, function (indexInArray, valueOfElement) {
    //console.log("陣列和焦點", valueOfElement, focus_pos, indexInArray);
    //如果焦點大於分隔的位置
    //陣列[-1,3,6,9]
    //ex 焦點在4，然後4>陣列的3(3是陣列的值)，選取的range就是3+1到陣列的下一個數字(下一個index)
    if (focus_pos > valueOfElement) {
      input.set_range_first = valueOfElement + 1;
      input.set_range_last = indexes[indexInArray + 1];
      //超出陣列不執行
      if (indexes[indexInArray + 1] !== undefined) {
        inpObj.setSelectionRange(valueOfElement + 1, indexes[indexInArray + 1]);
        input.select_val = window.getSelection().toString();
        input.arr_position = indexInArray;
      }
    }
    input.select_val = window.getSelection().toString();
  });
};
//TODO:打字時的功能含防呆(大小月、閏年)
jq_calendar.prototype.key_function = function (key_input, e) {
  //這邊的設計是打字存取str_key，在與點選select_val進行比對，如果字數一樣，就會跳至下一個區域。
  //如果預設沒選取，就不用比對直接打到限制的字串長度
  //此函示包含0的處理000/00/00
  //此函示包含月份>12日期>31時處理
  //此函示包含閏年月份==2日期>29處理
  //input.id = $(this).attr("id");
  //ex:1080808 總共7位數
  var input = this;
  var tmp_val = key_input.val();

  tmp_val = tmp_val.replace(/[&\/\\\*^%$#@\-]/g, ''); //把"/"去除
  //去除"/"掉後的數量==7
  if (tmp_val.length == 7) {
    //確認輸入框是否都沒有"/"，沒有的就補"/"
    var tmp_str2 = ''; //存input vlue

    //判斷第三位數或第六位數是否為"/"，如果使用者刪除"/"就會補"/"
    if (key_input.val()[3] !== '/' || key_input.val()[6] !== '/') {
      tmp_str2 = key_input.val();
      tmp_str2 = input.replace_str(tmp_str2, '/');

      key_input.val(tmp_str2);
    }
  }
  if (key_input.val().length == 9) {
    //先拆陣列
    var tmp_arr = key_input.val().split('/');
    //判斷月份是否大於12
    if (parseInt(tmp_arr[1]) > 12) {
      tmp_arr[1] = 12;
    }
    if (parseInt(tmp_arr[2]) >= 31) {
      //日期處理是否大於31
      if (input.big_month_group.indexOf(parseInt(tmp_arr[1])) !== -1) {
        tmp_arr[2] = 31;
      } else if (input.small_month_group.indexOf(parseInt(tmp_arr[1])) !== -1) {
        tmp_arr[2] = 30;
      }
    }
    //000/00/00的處理
    if (parseInt(tmp_arr[0]) == 0) {
      tmp_arr[0] = input.padding_zero(1, 3);
    }
    if (parseInt(tmp_arr[1]) == 0) {
      tmp_arr[1] = input.padding_zero(1, 2);
    }
    if (parseInt(tmp_arr[2]) == 0) {
      tmp_arr[2] = input.padding_zero(1, 2);
    }
    //判斷是否是閏年
    if (input.is_leapyear(tmp_arr[0])) {
      //判斷如果輸入2月，是閏年
      if (parseInt(tmp_arr[1]) == 2 && parseInt(tmp_arr[2]) > 29) {
        tmp_arr[2] = 29;
      }
    } else {
      //判斷如果輸入2月，不是閏年
      if (parseInt(tmp_arr[1]) == 2 && parseInt(tmp_arr[2]) > 28) {
        tmp_arr[2] = 28;
      }
    }
    key_input.val(tmp_arr.join('/')); //陣列合併
  }
};
//TODO:打字往前的功能
jq_calendar.prototype.key_forward = function (key_input, e) {
  var input = this;
  var is_num = /\d/; //是否含數字
  var tmp_val = key_input.val();

  //先判斷是否有兩個"/"，有兩個才能拆陣列
  var tmp_arr = tmp_val.split('/'); //先拆陣列
  var tmp_count_str_length = tmp_arr.length - 1; //計算"/"個數
  tmp_val = tmp_val.replace(/[&\/\\\*^%$#@\-]/g, '');
  //判斷"/"有兩個時再進去
  if (tmp_count_str_length == 2) {
    if (input.select_val !== undefined && input.select_val !== '') {
      //這邊的判斷如果是使用英文輸入法去打數字e.originalEvent.key判斷出來會是數字，如果使用中文輸入法去打數字e.originalEvent.key會不是數字
      //確認是否為數字(英文輸入法)
      if (!isNaN(e.originalEvent.key)) {
        //先存進暫存
        input.str_key += e.originalEvent.key;
      } else if (is_num.test(e.originalEvent.code)) {
        //切到中文輸入法去打數字使用e.originalEvent.key會被判斷成不是數字因此改用e.originalEvent.code，但裡面包含的字串要先刪除
        input.str_key += e.originalEvent.code.replace('Numpad', '');
      } else if (e.originalEvent.key == 'Backspace') {
        //按下刪除鈕的話不會刪除剛儲存的字串，因此需手動刪除儲存字串的最後一個字
        if (input.str_key.length > 0) {
          input.str_key = input.str_key.substring(0, input.str_key.length - 1);
        }
      }
      // console.warn(
      //   '暫存文字',
      //   input.str_key,
      //   '暫存長度',
      //   input.str_key.length,
      //   '選取文字',
      //   input.select_val,
      //   '選取長度',
      //   input.select_val.length
      // );
      //如果選取長度==修改的值長度要跳至下一個選取區域
      if (input.select_val.length == input.str_key.length) {
        //打完清理站存
        input.str_key = '';
        input.change_cursor_pos(true);
      }
    }
    //IE 的input.select_val(選取文字不能使用)，因此考慮另一種判斷方法如果選取的最後位置-選取的開始位置>0在執行，利用最後位置-開使位置獲得字串長度進行判斷
    if (
      navigator.userAgent.indexOf('MSIE') !== -1 ||
      navigator.appVersion.indexOf('Trident/') > 0
    ) {
      if (input.set_range_last - input.set_range_first > 0) {
        //確認是否為數字
        if (!isNaN(e.originalEvent.key)) {
          //先存進站存
          input.str_key += e.originalEvent.key;
        } else if (is_num.test(e.originalEvent.code)) {
          //切到中文輸入法去打數字使用e.originalEvent.key會被判斷成不是數字因此改用e.originalEvent.code
          input.str_key += e.originalEvent.code.replace('Numpad', '');
        }
        // console.log(
        //   '暫存文字',
        //   input.str_key,
        //   '暫存長度',
        //   input.str_key.length,
        //   '選取文字',
        //   input.select_val,
        //   '選取長度',
        //   input.set_range_last - input.set_range_first
        // );
        //如果選取長度==修改的值長度要跳至下一個選取區域
        if (
          input.set_range_last - input.set_range_first ==
          input.str_key.length
        ) {
          input.str_key = '';

          input.change_cursor_pos(true);
        }
      }
    }
  }
};
//TODO:離開焦點的判斷
jq_calendar.prototype.blur_function = function (key_input, e) {
  var input = this;
  var is_min_day = key_input.attr('data-min_day');
  var is_max_day = key_input.attr('data-max_day');
  var tmp_west_min_day;
  var tmp_west_max_day;
  //輸入框的值
  var input_val = key_input.val();

  //如果數字有少先補0
  var full_val = input.fill_mingo_format(input_val);

  //如果有設定最大最小值先抓下來沒有就跑預設
  if (is_min_day !== undefined && is_min_day !== '') {
    tmp_west_min_day = $.datepicker.parseDate(
      'Rmmdd',
      key_input.attr('data-min_day')
    );
  } else {
    tmp_west_min_day = $.datepicker.parseDate('Rmmdd', input.default_min_day);
  }
  if (is_max_day !== undefined && is_min_day !== '') {
    tmp_west_max_day = $.datepicker.parseDate(
      'Rmmdd',
      key_input.attr('data-max_day')
    );
  } else {
    tmp_west_max_day = $.datepicker.parseDate('Rmmdd', input.default_max_day);
  }

  //輸入框的西元值
  var west_input_val = $.datepicker.parseDate('Rmmdd', full_val);

  //利用上方轉換出的西元值去做比大小的計算
  if (
    !(
      west_input_val.valueOf() >= tmp_west_min_day.valueOf() &&
      west_input_val.valueOf() <= tmp_west_max_day.valueOf()
    )
  ) {
    var tmp_year;
    var tmp_month;
    var tmp_day;
    var tmp_date;
    //判斷超過最大日期就給予最大日期
    if (west_input_val > tmp_west_max_day) {
      tmp_year = tmp_west_max_day.getFullYear() - 1911;
      tmp_month = tmp_west_max_day.getMonth() + 1;
      tmp_day = tmp_west_max_day.getDate();
      tmp_date = tmp_year + '/' + tmp_month + '/' + tmp_day;
    } else if (west_input_val < tmp_west_min_day) {
      tmp_year = tmp_west_min_day.getFullYear() - 1911;
      tmp_month = tmp_west_min_day.getMonth() + 1;
      tmp_day = tmp_west_min_day.getDate();
      tmp_date = tmp_year + '/' + tmp_month + '/' + tmp_day;
    }
    key_input.val(input.fill_mingo_format(tmp_date));
  } else {
    key_input.val(full_val);
  }
};
jq_calendar.prototype.fill_mingo_format = function (date) {
  var input = this;
  //先判斷是否有兩個"/"，有兩個才能拆陣列
  var tmp_arr = date.split('/'); //先拆陣列
  var tmp_count_str_length = tmp_arr.length - 1; //計算"/"個數
  switch (tmp_count_str_length) {
    case 2:
      if (tmp_arr[0].length !== 3) {
        tmp_arr[0] = input.padding_zero(tmp_arr[0], 3);
      }
      if (tmp_arr[1].length !== 2) {
        tmp_arr[1] = input.padding_zero(tmp_arr[1], 2);
      }
      if (tmp_arr[2].length !== 2) {
        tmp_arr[2] = input.padding_zero(tmp_arr[2], 2);
      }
      return tmp_arr.join('/');
      break;
    default:
      //數字總共有7個不含'/'32
      //如果沒有斜線直接往後補0
      tmp_val = date.replace(/[&\/\\\*^%$#@\-]/g, ''); //去除特殊符號
      tmp_val = input.padding_zero(tmp_val, 7, 'right');
      return tmp_val;
      break;
  }
};
/**
 *點擊上下按鈕+1 -1
 *含大月小月判斷、閏年判斷
 *
 *
 */
//TODO:點上下+1-1處理
jq_calendar.prototype.click_calc_function = function (valueOfElement) {
  var input = this;
  var tmp_input = $('#' + input.id);
  //如果input是disalbled功能區域就不能使用
  if (tmp_input.attr('disabled') == 'disabled') {
    return false;
  }
  //限制輸入完成長度為9才能進行操作
  if (
    tmp_input.length > 0 &&
    tmp_input.val() !== '' &&
    tmp_input.val().length == 9
  ) {
    var tmp_arr = tmp_input.val().split('/');
    //預設如果沒點選，就是在跑一次點選顯示今天
    if (input.arr_position == undefined) {
      tmp_input.click();
    }

    if (valueOfElement == 'top') {
      //input.arr_position 點選的位置 0年 1月 2日期
      switch (input.arr_position) {
        case 0:
          //年
          if (parseInt(tmp_arr[input.arr_position]) + 1 == 1000) {
            tmp_arr[input.arr_position] = input.padding_zero(1, 3);
          } else {
            tmp_arr[input.arr_position] = input.padding_zero(
              parseInt(tmp_arr[input.arr_position]) + 1,
              3
            );
          }
          break;
        case 1:
          //如果月份+1超過12的話要變成1
          if (parseInt(tmp_arr[input.arr_position]) + 1 == 13) {
            tmp_arr[input.arr_position] = input.padding_zero(1, 2);
          } else {
            tmp_arr[input.arr_position] = input.padding_zero(
              parseInt(tmp_arr[input.arr_position]) + 1,
              2
            );
          }
          break;
        case 2:
          //日期處理->分大月、小月、閏年判斷
          //如果日期是大月群組就從31跳回1(indexof要注意型別轉換否則查找會找不到)
          if (input.big_month_group.indexOf(parseInt(tmp_arr[1])) !== -1) {
            //如果是大月
            if (parseInt(tmp_arr[input.arr_position]) + 1 == 32) {
              tmp_arr[input.arr_position] = input.padding_zero(1, 2);
            } else {
              tmp_arr[input.arr_position] = input.padding_zero(
                parseInt(tmp_arr[input.arr_position]) + 1,
                2
              );
            }
          } else if (
            input.small_month_group.indexOf(parseInt(tmp_arr[1])) !== -1
          ) {
            //小月就從30->1
            if (parseInt(tmp_arr[input.arr_position]) + 1 == 31) {
              tmp_arr[input.arr_position] = input.padding_zero(1, 2);
            } else {
              tmp_arr[input.arr_position] = input.padding_zero(
                parseInt(tmp_arr[input.arr_position]) + 1,
                2
              );
            }
          } else if (input.leap_month.indexOf(parseInt(tmp_arr[1])) !== -1) {
            //判斷是否為2月，然後判斷是否為閏年，閏年2月有29因此+1=30
            if (input.is_leapyear(tmp_arr[0])) {
              if (parseInt(tmp_arr[input.arr_position]) + 1 == 30) {
                tmp_arr[input.arr_position] = input.padding_zero(1, 2);
              } else {
                tmp_arr[input.arr_position] = input.padding_zero(
                  parseInt(tmp_arr[input.arr_position]) + 1,
                  2
                );
              }
            } else {
              if (parseInt(tmp_arr[input.arr_position]) + 1 == 29) {
                tmp_arr[input.arr_position] = input.padding_zero(1, 2);
              } else {
                tmp_arr[input.arr_position] = input.padding_zero(
                  parseInt(tmp_arr[input.arr_position]) + 1,
                  2
                );
              }
            }
          }
          break;
        default:
          break;
      }
    } else if (valueOfElement == 'down') {
      switch (input.arr_position) {
        case 0:
          //年
          tmp_arr[input.arr_position] = input.padding_zero(
            parseInt(tmp_arr[input.arr_position]) - 1,
            3
          );
          break;
        case 1:
          //如果月份是0要跳回12
          if (parseInt(tmp_arr[input.arr_position]) - 1 == 0) {
            tmp_arr[input.arr_position] = input.padding_zero(12, 2);
          } else {
            tmp_arr[input.arr_position] = input.padding_zero(
              parseInt(tmp_arr[input.arr_position]) - 1,
              2
            );
          }
          break;
        case 2:
          //如果日期是大月群組就從31跳回1
          if (input.big_month_group.indexOf(parseInt(tmp_arr[1])) !== -1) {
            if (parseInt(tmp_arr[input.arr_position]) - 1 == 0) {
              tmp_arr[input.arr_position] = input.padding_zero(31, 2);
            } else {
              tmp_arr[input.arr_position] = input.padding_zero(
                parseInt(tmp_arr[input.arr_position]) - 1,
                2
              );
            }
          } else if (
            input.small_month_group.indexOf(parseInt(tmp_arr[1])) !== -1
          ) {
            //小月就從30->1
            if (parseInt(tmp_arr[input.arr_position]) - 1 == 0) {
              tmp_arr[input.arr_position] = input.padding_zero(30, 2);
            } else {
              tmp_arr[input.arr_position] = input.padding_zero(
                parseInt(tmp_arr[input.arr_position]) - 1,
                2
              );
            }
          } else if (input.leap_month.indexOf(parseInt(tmp_arr[1])) !== -1) {
            //判斷是否為2月，然後判斷是否為閏年
            if (input.is_leapyear(tmp_arr[0])) {
              if (parseInt(tmp_arr[input.arr_position]) - 1 == 0) {
                tmp_arr[input.arr_position] = input.padding_zero(29, 2);
              } else {
                tmp_arr[input.arr_position] = input.padding_zero(
                  parseInt(tmp_arr[input.arr_position]) - 1,
                  2
                );
              }
            } else {
              if (parseInt(tmp_arr[input.arr_position]) - 1 == 0) {
                tmp_arr[input.arr_position] = input.padding_zero(28, 2);
              } else {
                tmp_arr[input.arr_position] = input.padding_zero(
                  parseInt(tmp_arr[input.arr_position]) - 1,
                  2
                );
              }
            }
          }
          break;
        default:
          break;
      }
    }
    //如果指標不在日期上可能在月份上，因此變動月份就要檢查日期，下列是變動月份或年的小月處理、2月處理
    if (
      input.small_month_group.indexOf(parseInt(tmp_arr[1])) !== -1 &&
      parseInt(tmp_arr[2]) > 30
    ) {
      tmp_arr[2] = 30;
    } else if (
      input.leap_month.indexOf(parseInt(tmp_arr[1])) !== -1 &&
      parseInt(tmp_arr[2]) > 28
    ) {
      //閏年處理
      if (input.is_leapyear(tmp_arr[0])) {
        tmp_arr[2] = 29;
      } else {
        tmp_arr[2] = 28;
      }
    }

    tmp_input.val(tmp_arr.join('/'));
    tmp_input.focus();
    tmp_input[0].setSelectionRange(input.set_range_first, input.set_range_last); //要這樣寫否則抓步道
    input.select_val = window.getSelection().toString();
  }
};
//TODO:刪除輸入框值
jq_calendar.prototype.del_calendar_val = function (ele) {
  var input = this;
  var tmp_id = ele.closest('.stander_calendar').find('.date_picker').attr('id');
  //因為點擊事件是先點外面給ID存進去，再去觸發刪除功能，因此點擊不同輸入框就要判斷
  if (tmp_id == input.id) {
    $('#' + input.id)
      .val('')
      .change();
    input.select_val = ''; //按下刪除要清掉原本所選的，否則在打字的判斷會有問題
  }
};
//TODO:工具-閏年判斷
jq_calendar.prototype.is_leapyear = function (num) {
  var tmp_num = parseInt(num) + 1911; //民國轉西元
  if ((tmp_num % 4 === 0 && tmp_num % 100 !== 0) || tmp_num % 400 === 0) {
    return true;
  } else {
    return false;
  }
};
//TODO:工具-回傳西元格式陣列
//date_str為傳進的日曆str
//type判斷最大最小
jq_calendar.prototype.west_date_array = function (date_str, type) {
  var input = this;
  //如果沒設定就跑預設
  if (date_str === undefined || date_str === null || date_str === '') {
    if (type == 'min') {
      date_str = input.default_min_day;
    } else if (type == 'max') {
      date_str = input.default_max_day;
    }
  }
  var tmp_arr = date_str.split('/');
  tmp_arr[0] = parseInt(tmp_arr[0]) + 1911;
  tmp_arr[1] = parseInt(tmp_arr[1]) - 1;
  return tmp_arr;
};
//TODO:工具-回傳西元格式日期
jq_calendar.prototype.west_date = function (date_str) {
  var input = this;
  var west_date_arr = input.west_date_array(date_str);
  var new_west_date = new Date(
    west_date_arr[0],
    west_date_arr[1],
    west_date_arr[2]
  );
  return new_west_date;
};
//TODO:工具-計算日期相差天數
jq_calendar.prototype.date_calc_minus = function (date1, date2) {
  var input = this;
  var date1 = new Date(date1);
  var date2 = new Date(date2);
  var Days = parseInt(Math.abs(date1 - date2) / 1000 / 60 / 60 / 24); // 把相差的毫秒數轉換為天數
  return Days;
};
//TODO:工具-計算幾個月前、後的日期
//type:起日、迄日
//input_val:目前民國日期EX:110/03/03
// num:+幾個月-幾個月
jq_calendar.prototype.month_calc_num = function (type, input_val, num) {
  var input = this;
  var tmp_west_current_arr = input.west_date_array(input_val); //目前的時間
  //轉西元去+1-1變成新的日期
  var tmp_current_west_val = new Date(
    tmp_west_current_arr[0],
    tmp_west_current_arr[1],
    tmp_west_current_arr[2]
  );
  var new_date_west_val = tmp_current_west_val;
  var num = parseInt(num);
  if (type === 'prev') {
    //提供迄日值求起日值，計算起日就是用減的
    new_date_west_val.setMonth(new_date_west_val.getMonth() - num);
  } else if (type === 'after') {
    //提供起日值求迄日值
    new_date_west_val.setMonth(new_date_west_val.getMonth() + num);
  }

  // console.log('mingo', $.datepicker.mingoFormat('Rmmdd', new_date_west_val));
  //回傳民國格式
  return $.datepicker.mingoFormat('Rmmdd', new_date_west_val);
};
//TODO:工具-計算幾天前、幾天後
//type:起日、迄日
//input_val:民國日期
//num:+-的天數
jq_calendar.prototype.day_calc_num = function (type, input_val, num) {
  var input = this;
  var mingo_date = input_val;
  var new_west_date = input.west_date(mingo_date); //轉西元格式
  var calc_day = parseInt(num); //+-的天數
  //下面轉西元格式才能做計算日期
  //求起日
  if (type == 'prev') {
    new_west_date.setDate(new_west_date.getDate() - calc_day);
  } else if (type == 'after') {
    //求迄日
    new_west_date.setDate(new_west_date.getDate() + calc_day);
  }

  //回傳民國格式
  return $.datepicker.mingoFormat('Rmmdd', new_west_date);
};
//日曆查找陣列是否有一樣，會轉成這種格式--->1588608000000 1602259200000
//TODO:工具-日曆查找陣列裡面的日期是否有一樣
jq_calendar.prototype.index_of_date = function (arr, date) {
  for (var i = 0; i < arr.length; i++) {
    if (+arr[i] === +date) return i;
  }
  return -1;
};
//TODO:工具-格式化日期加入"/"
//加入"/"
//@ string 為代入的符號
jq_calendar.prototype.replace_str = function (raw_string, add_string) {
  var tmp = raw_string.replace(/[&\/\\\*^%$#@\-]/g, ''); //先正規化只留數字，找出確切日期
  //ex "108" + / + "08" + / + "08"
  return (
    tmp.substring(0, 3) +
    add_string +
    tmp.substring(3, 5) +
    add_string +
    tmp.substring(5, tmp.length)
  );
};

/**
 *日曆開關包裝
 *
 * @param {*} holiday 帶入國定假日的陣列
 */
function set_calendar(holiday) {
  var holiday = holiday || [];
  //簡單版日曆
  if ($('.simple_calendar .date_picker').length !== 0) {
    var simple_calendar = new jq_calendar(
      $('.simple_calendar .date_picker'),
      1,
      holiday
    );
  }
  //標準版日曆
  if ($('.stander_calendar .date_picker').length !== 0) {
    //標準版
    var stander_calendar = new jq_calendar(
      $('.stander_calendar .date_picker'),
      2,
      holiday
    );
    //dom操作
    var stander_calendar_wrapper = $('.stander_calendar');
    var date_picker_input = stander_calendar_wrapper.find('.date_picker');
    //基本點擊選取，將input ID帶入物件，在觸發選取
    stander_calendar_wrapper.click(function (e) {
      var tmp_input = $(this).find('.date_picker');
      stander_calendar.id = $(this).find('.date_picker').attr('id');
      if (tmp_input.val().length == 9) {
        stander_calendar.change_cursor_pos();
      }
    });
    //上下按鈕
    $.each(stander_calendar.click_name, function (index, val) {
      $('.calendar_click_function_' + val)
        .off('click')
        .on('click', function () {
          var tmp_input = $(this)
            .closest('.stander_calendar')
            .find('.date_picker');
          //先存ID
          save_calendar_id($(this));
          //上下按鈕預設如果沒有值就顯示今天
          if (
            tmp_input.val() == '' &&
            tmp_input.attr('disabled') !== 'disabled'
          ) {
            tmp_input.datepicker('setDate', 'today');
          } else {
            stander_calendar.click_calc_function(val);
          }
          stander_calendar.group_calendar_blur_function(tmp_input); //兩欄式輸入起訖日防呆
          tmp_input.change();
        });
    });

    //打字鍵盤往上
    date_picker_input.off('keyup').keyup(function (e) {
      stander_calendar.key_function($(this), e);
      stander_calendar.key_forward($(this), e); //鍵盤往上鬆開才前進
    });
    //鍵盤往下
    date_picker_input.off('keydown').keydown(function (e) {
      stander_calendar.key_function($(this), e);
    });
    //鍵盤離開焦點
    date_picker_input.off('blur').blur(function (e) {
      if ($(this).val() !== '') {
        var tmp_input = $(this)
          .closest('.stander_calendar')
          .find('.date_picker');
        stander_calendar.blur_function($(this), e); //檢查並補0
        stander_calendar.key_function($(this), e); //防呆判斷
        stander_calendar.group_calendar_blur_function($(this)); //兩欄式blur起訖日防呆
        tmp_input.change();
      }
    });
    //點擊今天在帶入日期
    $(document)
      .off('click')
      .on('click', 'button.ui-datepicker-current', function () {
        $.datepicker._curInst.input.datepicker('setDate', new Date());
        $.datepicker._curInst.input.change();
      });

    function save_calendar_id(ele) {
      stander_calendar.id = ele
        .closest(stander_calendar_wrapper)
        .find('.date_picker')
        .attr('id');
    }
  }
  //TODO:click-刪除鈕
  $('.rightmain')
    .off('click')
    .on('click', '.calendar_delate_icon', function (e) {
      var $tmp_input = $(this)
        .closest('.stander_calendar')
        .find('.date_picker');
      var $range_input = $(this)
        .closest('.range_calendar')
        .find('.fake_range_calendar');
      var $format_input = $(this)
        .closest('.format_calendar')
        .find('.show_date_format_input');
      var $range_group_calendar = $(this).closest('.range_group_calendar');
      if ($tmp_input.length > 0 && $tmp_input.attr('disabled') !== 'disabled') {
        save_calendar_id($(this));
        stander_calendar.del_calendar_val($(this));
      }
      //範圍的萬年曆點X進行清除
      if ($range_input.length > 0 && $range_input.val() !== '') {
        var $real_input = $range_input.siblings('.date_picker');
        $range_input.val('').change();
        $real_input.attr('data-real_val', '').change();
        //把"X"刪除
        $(this).parent().remove();
        //刪除紀錄的起迄
        range_calendar.remove_range_calendar_val();
      }
      //Wp格式刪除
      if ($format_input.length > 0 && $format_input.val() !== '') {
        $format_input.val('').change();
        $(this).parent().remove();
      }
      //如果是帶入參數的group_calendar，按下刪除兩個輸入框都要清除值
      if ($range_group_calendar.length > 0) {
        var parameter_month = $range_group_calendar.data('calc_month');
        var parameter_day = $range_group_calendar.data('calc_day');
        if (parameter_month !== undefined || parameter_day !== undefined) {
          $range_group_calendar.find('input').val('');
          $range_group_calendar.adjustInputWidth($range_group_calendar.find('input'));
        }
      }
    });
  //單一輸入框起訖日
  if ($('.range_calendar .date_picker').length !== 0) {
    //起訖日版
    var range_calendar = new jq_calendar(
      $('.range_calendar .date_picker'),
      3,
      holiday
    );
  }

  //行事曆版本
  if ($('.inline_calendar').length !== 0) {
    var inline_calendar = new jq_calendar($('.inline_calendar'), 4, holiday);
  }
  if ($('.format_calendar').length !== 0) {
    var format_calendar = new jq_calendar(
      $('.format_calendar .date_picker'),
      5,
      holiday
    );
  }
}
$(document).ready(function () {
  //個別輸入標記日期的範例
  //   var holiday = ['109/05/05', '109/05/06', '109/05/07', '109/04/01', '109/04/08'];
  //   set_calendar(holiday);
  set_calendar();
  $('span .date_picker.disabled').switch_calendar('disable'); //disabled萬年曆
  //$('span .date_picker').switch_calendar('enable'); //enabled萬年曆

  //WP選好格式的關閉事件
  $(document).on('click', 'div[id^=data_format_]', function () {
    var date_picker = $.datepicker._curInst.input;
    var show_date_format_input = $(date_picker).siblings(
      '.show_date_format_input'
    );
    show_date_format_input.val($(this).text()).change();
    $('.ui-datepicker-close').click();
  });
});
//禁用啟用function
(function ($) {
  $.fn.switch_calendar = function (action) {
    var function_box = this.parent().find('.calendar_function_box');
    var fake_range_calendar = this.parent().find('.fake_range_calendar');
    if (action == 'enable') {
      this.datepicker('enable');
      if (function_box.length > 0) {
        function_box.css('display', '');
      }
      if (fake_range_calendar.length > 0) {
        fake_range_calendar.attr('disabled', '');
      }
    }
    if (action === 'disable') {
      this.datepicker('disable');
      if (function_box.length > 0) {
        function_box.hide();
      }
      if (fake_range_calendar.length > 0) {
        fake_range_calendar.attr('disabled', 'disabled');
      }
    }
  };
})(jQuery);

/**
 * 起訖日區間(jq萬年曆)單個欄位
 *
 *
 * **/
jq_calendar.prototype.display_range_calendar = function () {
  var input = this;
  // 定義選取範圍儲存區
  input.range_obj = {
    from: '',
    to: ''
  }

  input.all_input.each(function (index, element) {
    var fake_input = "<input type='text' class='fake_range_calendar'>";
    if ($(this).parent().find('.fake_range_calendar').length == 0) {
      $(this).after(fake_input);
      $('.fake_range_calendar').off('input').on('input', function () {
        input.adjustInputWidth($(this));
      });
      $('.fake_range_calendar').off('change').on('change', function () {
        input.adjustInputWidth($(this));
      });
    }

    var tmp_min_day = input.west_date_array(
      $(this).attr('data-min_day'),
      'min'
    );
    var tmp_max_day = input.west_date_array(
      $(this).attr('data-max_day'),
      'max'
    );
    //宣告jquery 日曆
    $(this)
      .datepicker({
        changeYear: true, //開啟下拉年分
        changeMonth: true, //開啟下拉月分
        dateFormat: 'Rmmdd',
        showButtonPanel: true,
        yearRange: '-100:+100', //下拉年分範圍
        firstDay: 0, //0是從星期日開始
        minDate: new Date(tmp_min_day[0], tmp_min_day[1], tmp_min_day[2]),
        //minDate: new Date(2011, 06, 01),
        maxDate: new Date(tmp_max_day[0], tmp_max_day[1], tmp_max_day[2]),
        //selectOtherMonths: true,
        showOn: 'button',
        buttonText: '', //按鈕文字
        numberOfMonths: 2,
        rangeSelect: true,
        beforeShow: function (dateText, inst) {
          //打開之前的動作
          //假輸入框位置處理
          var tmp_cal = $(inst.dpDiv); //日曆面板
          var tmp_input = $(dateText);
          //共用的日曆位置處理
          input.calendar_position_css(tmp_input, tmp_cal);
          //假輸入框日曆位置處理
          // var fake_ele = $(this).siblings('.fake_range_calendar'); //假的輸入框
          // var top = fake_ele.offset().top + fake_ele.outerHeight(); //去抓假的輸入框位置
          //日曆面板只會聽真的萬年曆輸入框，因此需加入假的輸入框高度
          // setTimeout(function () {
          //   tmp_cal.css('top', top);
          // }, 10);

          //假輸入框顯示起始值處理
          $(this).val(input.range_obj.from);
        },
        beforeShowDay: function (date) {
          //日曆起訖區間處理、國定假入代入處理
          if (input.range_obj.from !== '') {
            var found = false; //開關
            var From = input.range_obj.from.split('/');
            From[0] = parseInt(From[0]) + 1911;
            var To = input.range_obj.to.split('/');
            To[0] = parseInt(To[0]) + 1911;
            // Format them as dates : Year, Month (zero-based), Date
            var FromDate = new Date(From[0], From[1] - 1, From[2]);
            var ToDate = new Date(To[0], To[1] - 1, To[2]);

            //起訖日區間處理
            if (date >= FromDate && date <= ToDate) {
              found = true;
              var is_holiday = count_holiday(date);
              var returedClass = '';
              if (is_holiday) {
                returedClass = 'mark_range holiday';
              } else {
                returedClass = 'mark_range';
              }
              return [true, returedClass];
            }
          }
          //國定假日處理
          // var Holiday = ['109/05/06', '109/05/07'];
          if (input.holiday.length > 0) {

            var is_holiday = count_holiday(date);
            if (is_holiday) {
              return [true, 'holiday'];
            } else {
              return [true, ''];
            }
          }
          if (!found) {
            return [true, ''];
          }

          function count_holiday(date) {
            found = true;
            var holiday = input.holiday;
            var tmp_date_arr = [];
            for (var i = 0; i < holiday.length; ++i) {
              var tmp_holidays = input.west_date_array(holiday[i]);
              var tmp_date = new Date(
                tmp_holidays[0],
                parseInt(tmp_holidays[1]),
                tmp_holidays[2]
              );
              tmp_date_arr.push(tmp_date);
            }
            var tmp_is_date = input.index_of_date(tmp_date_arr, new Date(date));
            if (tmp_is_date !== -1) {
              return true;
            }
          }


        },
        onSelect: function (selectedDate) {
          if (!$(this).data().datepicker.first) {
            //先清除跑預設
            input.range_obj.from = '';
            input.range_obj.to = '';
            //如果沒有第一個數字跑這段
            $(this).data().datepicker.inline = true;
            $(this).data().datepicker.first = selectedDate;
            input.range_obj.from = $(this).data().datepicker.first;
          } else {
            //選第二次
            //如果有第一個數字且第二個數字比第一個大的時候
            if (selectedDate > $(this).data().datepicker.first) {
              //存到自己的attr
              $(this).attr(
                'data-real_val',
                $(this).data().datepicker.first + ' ~ ' + selectedDate
              ).change();
              //選完之後要填入假的輸入框
              $(this)
                .siblings('input')
                .val($(this).data().datepicker.first + ' ~ ' + selectedDate).change();
              input.range_obj.to = selectedDate;
            } else {
              //存到自己的attr
              $(this).attr(
                'data-real_val',
                selectedDate + ' ~ ' + $(this).data().datepicker.first
              ).change();
              //選完之後要填入假的輸入框
              $(this)
                .siblings('input')
                .val(selectedDate + ' ~ ' + $(this).data().datepicker.first).change();
              input.range_obj.from = selectedDate;
              input.range_obj.to = $(this).data().datepicker.first;
            }
            var del_html = '<div class="calendar_function_box">';
            var show_del_icon = $(this).data('show_del_icon');
            if (false !== show_del_icon) {
              del_html += '<div class="calendar_delate_icon"></div>';
            }
            del_html += '</div>';
            //選第二次加入刪除按鈕"X"
            $(this).parent().append(del_html);
            $(this).data().datepicker.inline = false;
          }
        },
        onClose: function () {
          //要清掉每次選才能重新
          delete $(this).data().datepicker.first;
          $(this).data().datepicker.inline = false;
        },
      })
      .next('.ui-datepicker-trigger')
      .addClass('calendar_icon');
  });
};
jq_calendar.prototype.remove_range_calendar_val = function () {
  var input = this;
  input.range_obj.from = '';
  input.range_obj.to = '';
}
//key_input is jquery object
jq_calendar.prototype.adjustInputWidth = function (key_input) {
  const span = document.createElement('span');
  key_input.parent().append(span);
  // 設置 span 的樣式與 input 相匹配
  span.style.visibility = 'hidden'; // 確保它不會影響頁面
  span.style.position = 'absolute'; // 避免影響排版
  span.style.whiteSpace = 'pre'; // 確保空白字符正確計算
  span.style.fontSize = key_input.css('fontSize');
  span.style.fontFamily = key_input.css('fontFamily');
  span.style.fontWeight = key_input.css('fontWeight');
  span.style.letterSpacing = key_input.css('letterSpacing');
  // 將 input 的內容設置到 span
  span.textContent = key_input.get(0).value || key_input.get(0).placeholder;
  // main.css .calendar_delate_icon width = 11.25
  const icon_width = $('.calendar_delate_icon').length > 0 ? parseInt($('.calendar_delate_icon').css('width')) : 11.25;
  let fn_box_width = 0;
  this.all_input.each(function (index, element) {
    const showDelIcon = $(element).data("show_del_icon") === false ? 4 : 5.5;
    const key_input_id = key_input.data("datepicker") ? key_input.data("datepicker").id : undefined;
    const element_id = $(element).data("datepicker") ? $(element).data("datepicker").id : undefined;
    if (!key_input_id || !element_id || key_input_id === element_id) {
      fn_box_width = icon_width * showDelIcon;
    }
  });
  const fake_width = span.offsetWidth + fn_box_width;
  //先設定成原寬度
  key_input.css('width', '');
  if (fake_width > key_input.outerWidth()) {
    key_input.css('width', fake_width + 'px');
  } else {
    key_input.css('width', '');
  }
  span.remove();
};

$(document).ready(function () {
  $('.icon-change-btn').click(function () {
    //取得要交換的物件名稱
    var changeVal = $(this).attr('data-change');
    //分割物件名稱
    changeVal = changeVal.split(' ');
    //取得要交換的物件value
    var changeValFir = $('input[data-val="' + changeVal[0] + '"]').val(),
      changeValSec = $('input[data-val="' + changeVal[1] + '"]').val();
    //交換value
    $('input[data-val="' + changeVal[0] + '"]').val(changeValSec);
    $('input[data-val="' + changeVal[1] + '"]').val(changeValFir);
  });

  $('.icon-change2-btn').click(function () {
    //取得要交換的物件名稱
    var changeVal = $(this).attr('data-change');
    //分割物件名稱
    changeVal = changeVal.split(' ');
    //取得要交換的物件value
    var changeContFir = $('span[data-val="' + changeVal[0] + '"] span:eq(0)').text(),
      changeValFir = $('span[data-val="' + changeVal[0] + '"] input').val(),
      changeUnitFir = $('span[data-val="' + changeVal[0] + '"] span:eq(1)').text(),
      changeContSec = $('span[data-val="' + changeVal[1] + '"] span:eq(0)').text(),
      changeValSec = $('span[data-val="' + changeVal[1] + '"] span:eq(1)').text(),
      changeUnitSec = $('span[data-val="' + changeVal[1] + '"] span:eq(2)').text();
    //交換value
    $('span[data-val="' + changeVal[0] + '"] span:eq(0)').text(changeContSec);
    $('span[data-val="' + changeVal[0] + '"] input').val(changeValSec);
    $('span[data-val="' + changeVal[0] + '"] span:eq(1)').text(changeUnitSec);
    $('span[data-val="' + changeVal[1] + '"] span:eq(0)').text(changeContFir);
    $('span[data-val="' + changeVal[1] + '"] span:eq(1)').text(changeValFir);
    $('span[data-val="' + changeVal[1] + '"] span:eq(2)').text(changeUnitFir);
  });
});
$(document).ready(function () {
  //限制行數
  $('.contentedit').plugin_form_set_max_row();
  $("div[contenteditable='true']").on('keyup change', function (e) {
    //存進隱藏的input
    $(this).next('input[type="hidden"]').val($(this).plugin_form_getPreText());
  });
  //限制IE只能輸入純文本
  $("div[contenteditable='true']").plugin_form_ie_contenteditable_pure_text();
  //限制打字長度
  $(
    "div[contenteditable='true'][maxlength]"
  ).plugin_form_set_contenteditable_max_length();
});
//限制行數
(function ($) {
  $.fn.plugin_form_set_max_row = function () {
    this.each(function (index, element) {
      var font = [{
        font: 'font_S',
        num: 10,
      },
      {
        font: 'font_M',
        num: 12,
      },
      {
        font: 'font_L',
        num: 14,
      },
      {
        font: 'font_XL',
        num: 16,
      },
      {
        font: 'font_XXL',
        num: 18,
      },
      ];
      var content_ele = $(this);
      //限制行數如果不寫就是預設6行
      var max_row = content_ele.attr('data-maxrow') || 6;
      max_row = parseInt(max_row);
      //如果亂填0要修正變成1
      if (max_row == 0) {
        max_row = 1;
      }
      //抓font的class
      var type_arr = $('.wrapper').attr('class').split(/\s+/);
      var type = type_arr.filter(function (item, index, array) {
        return item.match(/font/g);
      });
      //這邊的判斷是-除了IE瀏覽器外文字的最小高度只有12，因此font_S的大小再除了IE瀏覽器都無法顯示10，因此要改成font_M
      if (type[0] == 'font_S') {
        if (
          !(navigator.userAgent.indexOf('MSIE') !== -1 ||
            navigator.appVersion.indexOf('Trident/') > 0)
        ) {
          // 不是IE改M
          type[0] = 'font_M';
        }
      }
      var get_content = font.filter(function (item, index, array) {
        if (item.font == type[0]) {
          return item;
        }
      });
      //抓字形大小
      var font_height = get_content[0].num;
      //原始內容高(不含padding)
      var content_height = parseInt(font_height * 1.2);
      //內容padding
      var content_padding = parseInt(content_ele.css('paddingTop')) + parseInt(content_ele.css('paddingBottom'));
      //容器邊框
      var wrapper_border =
        parseInt(content_ele.parent().css('borderTopWidth')) +
        parseInt(content_ele.parent().css('borderBottomWidth'));

      //裝計算後的容器高=內容乘行數+padding+容器的邊框
      var wrapper_height = content_height * max_row + content_padding + wrapper_border + 5;
      //給容器最大高度  
      content_ele.parent().css('maxHeight', wrapper_height);
    });
  };
})(jQuery);
//IE打字換行轉成'\n'的功能
(function ($) {
  $.fn.plugin_form_getPreText = function () {
    var isIE = !!window.ActiveXObject || 'ActiveXObject' in window;
    var ce = $('<pre />').html(this.html());
    if (isIE) {
      ce.find('p').replaceWith(function () {
        return this.innerHTML + '\r\n';
      });
    }

    return ce.text();
  };
})(jQuery);
//IE貼上或打字時變成純文本的方法
(function ($) {
  $.fn.plugin_form_ie_contenteditable_pure_text = function () {
    this.each(function () {
      // 去除http地址的自動連結
      try {
        document.execCommand('AutoUrlDetect', false, false);
      } catch (e) { }

      $(this).on('paste', function (e) {
        e.preventDefault();
        var text = null;

        if (window.clipboardData && clipboardData.setData) {
          // IE
          text = window.clipboardData.getData('text');
        } else {
          text =
            (e.originalEvent || e).clipboardData.getData('text/plain') ||
            prompt('在這裡輸入文本');
        }
        if (document.body.createTextRange) {
          if (document.selection) {
            textRange = document.selection.createRange();
          } else if (window.getSelection) {
            sel = window.getSelection();
            var range = sel.getRangeAt(0);

            // 創建臨時元素 讓text range能到正確位置
            var tempEl = document.createElement('span');
            tempEl.innerHTML = '&#FEFF;';
            range.deleteContents();
            range.insertNode(tempEl);
            textRange = document.body.createTextRange();
            textRange.moveToElementText(tempEl);
            tempEl.parentNode.removeChild(tempEl);
          }
          textRange.text = text;
          textRange.collapse(false);
          textRange.select();
        } else {
          // Chrome之類瀏覽器
          document.execCommand('insertText', false, text);
        }
      });
      // 去除Crtl+b/Ctrl+i/Ctrl+u等快捷键
      $(this).on('keydown', function (e) {
        // e.metaKey for mac
        if (e.ctrlKey || e.metaKey) {
          switch (e.keyCode) {
            case 66: //ctrl+B or ctrl+b
            case 98:
            case 73: //ctrl+I or ctrl+i
            case 105:
            case 85: //ctrl+U or ctrl+u
            case 117: {
              e.preventDefault();
              break;
            }
          }
        }
      });
    });
  };
})(jQuery);
//限制輸入長度
(function ($) {
  $.fn.plugin_form_set_contenteditable_max_length = function () {
    var sw = false; //中文輸入法定義關閉的開關
    this.on('keydown paste', function (event) {
      var cntMaxLength = parseInt($(this).attr('maxlength'));
      if (
        $(this).plugin_form_getPreText().length >= cntMaxLength &&
        event.keyCode != 8 &&
        event.keyCode != 37 &&
        event.keyCode != 38 &&
        event.keyCode != 39 &&
        event.keyCode != 40
      ) {
        if (sw !== false) {
          return false;
        }
        event.preventDefault();
        progress($(this), cntMaxLength);
      }
    });
    //離開焦點處理
    this.on('blur', function () {
      var cntMaxLength = parseInt($(this).attr('maxlength'));
      if ($(this).getPreText().length >= cntMaxLength) {
        $(this).html(function (i, currentHtml) {
          progress($(this), cntMaxLength);
        });
      }
    });
    //如果開啟中文輸入會觸發下列事件此事件會在key事件之後
    this.on('compositionstart', function () {
      sw = true;
    });
    this.on('compositionend', function () {
      sw = false;
      if (sw == false) {
        var cntMaxLength = parseInt($(this).attr('maxlength'));
        if ($(this).getPreText().length >= cntMaxLength) {
          progress($(this), cntMaxLength);
        }
      }
    });
  };
  //處理返回字串，跟光標
  function progress(ele, cntMaxLength) {
    ele.html(function (i, currentHtml) {
      var text = ele.getPreText();
      //如果限制10個字就是返回9
      return text.substring(0, cntMaxLength);
    });
    var node = ele[0];
    node.focus();
    var textNode = node.childNodes[0];
    var caret = cntMaxLength; // insert caret after the 10th character say
    var range = document.createRange();
    range.setStart(textNode, caret);
    range.setEnd(textNode, caret);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }
})(jQuery);
//隱藏顯示功能
$(document).ready(function (e) {
  //隱藏單選資料
  $(".clear-btn2 > span,.data-selected > span").click(function () {
    $(this).parents(".clear-btn2,.data-selected").css("display", "none");
  });

  //隱藏/顯示表格
  $(".extend-btn2").click(function () {
    $(this).next().slideToggle();
    ellipsis();
  });

  //表格只顯示最新一筆資料
  $(".extend-table tbody tr").css("display", "none");
  $(".latest-item").show();
  $(".extend-btn").on("click", function () {
    $(".extend-table tbody tr").not(".latest-item").slideToggle();
    $(".extend-btn").show();
    $(this).hide();
  });

  //隱藏顯示開關
  $(".switch-btn").click(function () {
    if ($(this).find("i").length > 0) {
      $(this).find("i").toggleClass("hide");
      var id = $(this).attr("id");
      var id_num = id.substr(10);

      $("#switch-content" + id_num).toggleClass("switch-content-show");
    }
  });
});
//上傳圖片拖曳
$(document).ready(function () {
  if (head.indexOf("jquery-ui.min.js") > -1) {
    $(".draggable").sortable({
      connectWith: ".file-img-table li",
      handle: "img", //限制排序的動作只能在item元素中的某種元素
      items: ".file-img-table li",
      placeholder: "placeholder",
      opacity: 0.5,
      revert: false, //拖曳的元素在返回新位置時，會有一?襤妗e效果
      coneHelperSize: true,
      forcePlaceholderSize: true,
      tolerance: "pointer",
      grid: [5, 5] //每次移動按一個格子大小移動
    });
  }
});
$(document).ready(function () {
  function selectPlh(_this) {
    if (_this.val() == 'opt-plh') {
      _this.addClass('color4');
    } else {
      _this.removeClass('color4');
    }
  }
  $('.select-plh').each(function () {
    $(this).change(function () {
      selectPlh($(this));
    });

    selectPlh($(this));
  });

  $('.sec-pick select').change(function () {
    var dataName = $(this).find('option:selected').attr('data-name');
    if (dataName != 'undefined' || dataName != '') {
      $(this).prev().val(dataName);
    }
  });
});
$(document).ready(function (e) {
  if ($('.left-menu_switch-area').length === 0) {
    return;
  }
  var store = sessionStorage;
  //拿出快捷選單記憶的資料
  var session_f_culeftmenu = store.getItem('f_culeftmenu');

  //快捷選單顯示
  if (
    session_f_culeftmenu === undefined ||
    session_f_culeftmenu === null ||
    session_f_culeftmenu === 'nav'
  ) {
    $('#m2').prop('checked', true);
  } else if (session_f_culeftmenu === 'fav') {
    $('#m1').prop('checked', true);
  }
  //儲存快捷選單
  $('input[type="radio"][name="f_menu"]').change(function () {
    store.setItem('f_culeftmenu', $(this).val());
  });
});

$(document).ready(function () {
  function fixedArea() {
    this.fixed_area_ele = $('.fixed-area') || null; //系統fixed區域
    this.fake_height_html = '<div class="system_fixed_fake_height_ele"></div>';
    this.fake_height_ele; //假高度元素
    this.system_toggle_ele = $('#toggle-btn'); //系統toggle按鈕

    this.creat_fake_height = function () {
      //製造假高度元素放到後面去
      var fixed = this;
      if (fixed.fixed_area_ele.length > 0) {
        fixed.fixed_area_ele.after(fixed.fake_height_html);
        fixed.fake_height_ele = $('.system_fixed_fake_height_ele');
      }
    };

    //統一進去網頁先計算假高度
    this.creat_fake_height();
    this.calc_height();
  }

  //計算高度
  fixedArea.prototype.calc_height = function () {
    var fixed = this;
    if (fixed.fixed_area_ele.length > 0 && $('.fixed-area').find($(':last-child')).is('.new-top-msg') && ($('.fixed-area').find($(':last-child')).is('.close') || $('.fixed-area').find($(':last-child')).is('.show'))) {
      fixed.fake_height_ele.height(fixed.fixed_area_ele.outerHeight() + 4);
    } else if (fixed.fixed_area_ele.length > 0 && $('.fixed-area').find($(':last-child')).is('.new-top-msg')) {
      fixed.fake_height_ele.height(fixed.fixed_area_ele.outerHeight() - 3);
    } else if (fixed.fixed_area_ele.length > 0) {
      fixed.fake_height_ele.height(fixed.fixed_area_ele.outerHeight());
    }
  }

  //如果點縮放按鈕要把fixed區塊貼其邊緣做toggle
  fixedArea.prototype.is_toggle = function () {
    var fixed = this;
    if (fixed.system_toggle_ele.prop('checked') == true) {
      fixed.fixed_area_ele.css('left', '10px');
    } else if (fixed.system_toggle_ele.prop('checked') == false) {
      fixed.fixed_area_ele.css('left', '');
    }
  }

  //如果沒有選單banner
  fixedArea.prototype.no_structure_process = function () {
    var fixed = this;
    var banner_detect = $('input[name="f_banner"]').val();
    var leftmenu_detect = $('input[name="f_leftmenu"]').val();
    var righttmenu_detect = $('input[name="f_rightmenu"]').val();
    if (banner_detect == 'N' && leftmenu_detect == 'N' && righttmenu_detect == 'N') {
      fixed.fixed_area_ele.css({
        left: '0px',
        top: '0px',
        right: '0px',
      });
    }
  };

  var new_fixed_area = new fixedArea();
  //定義規定高度 banner + system高度 +5 (5為原本內容的pd-top)
  var rule_height = $('#top').height() + $('.system_bg').height() + 5;
  //上訊息窗
  var all_msg = $('.new-top-msg');
  var all_msg_offset_top;
  if (all_msg.length > 0) {
    all_msg_offset_top = all_msg.offset().top - $(window).scrollTop() - 8;
  }
  var toggle_btn = $('#toggle-btn');
  //進去網頁確定沒有縮放
  new_fixed_area.is_toggle();
  //進去網頁偵測有沒有banner、menu，然後去判斷顯示
  new_fixed_area.no_structure_process();

  //banner縮放做監聽，去改左邊的寬
  toggle_btn.change(function () {
    new_fixed_area.is_toggle();
  });
  $(window).resize(function () {
    var banner_detect = $('input[name="f_banner"]').val();
    var leftmenu_detect = $('input[name="f_leftmenu"]').val();
    var righttmenu_detect = $('input[name="f_rightmenu"]').val();
    if (tmpHam == true) {
      new_fixed_area.fixed_area_ele.css('left', '10px');
    } else {
      if (
        banner_detect == 'N' &&
        leftmenu_detect == 'N' &&
        righttmenu_detect == 'N'
      ) {
        //沒有左邊選單的情況下
        new_fixed_area.fixed_area_ele.css('left', '0px');
      } else {
        new_fixed_area.fixed_area_ele.css('left', '');
      }
    }
    new_fixed_area.calc_height();
  });

  //搜尋欄進階搜尋
  $('.filter-sw').click(function () {
    var fixedToolbar = $('.fixed-area').length;
    if (fixedToolbar > 0) {
      new_fixed_area.calc_height();
    }
  });

  //如果網頁卷軸往下捲錯誤訊息展開時要往上顯示
  $(window).on("scroll", function () {
    //如果有錯誤訊息才跑
    if (all_msg.length > 0) {
      //滾動高度>規定高度 && 訊息高度>規定高度
      if ($(window).scrollTop() > rule_height && all_msg.height() > rule_height && toggle_btn.prop('checked') == false) {
        //滑動的話錯誤訊息要往上移動，zindex要改否則無法蓋過banner
        all_msg.css('marginTop', -all_msg_offset_top);
        new_fixed_area.fixed_area_ele.css('z-index', 1400);
      } else {
        all_msg.css('marginTop', '');
      }

      //卷軸==0 就是沒有滑動了因此zindex要調整回來 否則RWD時會蓋到選單
      if ($(window).scrollTop() == 0) {
        new_fixed_area.fixed_area_ele.css('z-index', '');
      }
    }
  });

  //確認是上訊息窗還是彈跳視窗回傳父層class name
  function checkParent(_this) {
    if (_this.closest('.new-top-msg').length > 0) {
      return $('.new-top-msg');
    } else {
      return $('.dialog-top-msg');
    }
  }

  //關閉訊息
  $('.error-hide-btn').click(function () {
    $(this).parent().addClass('del');
    var checkParentClass = checkParent($(this));
    var is_length = $(this).parent().siblings('li:not(.del)').length;
    switch (is_length) {
      case 2:
        //數量剩2時
        $(this).parent().attr('id', 'del_3');
        break;
      case 1:
        //數量剩1時
        $(this).parent().attr('id', 'del_2');
        //剩最後一個要加上去
        $(this).parent().siblings('li:not(.del)').attr('id', 'del_1').addClass('del').find('.error-hide-btn').addClass('hide');
        $(this).closest(checkParentClass).addClass('show');
        break;
    }

    //若為最後一筆訊息，則不顯示隱藏鈕
    if ($(this).parent().siblings('li:visible').length <= 1) {
      $('.error-hide-btn').addClass('hide');
    }
    $('.icon-up_circle').addClass('hide');
    $('.icon-down_circle').removeClass('hide');
    $('.error-show-btn').addClass('show');
    //按完刪除就監聽
    if ($(this).closest('.new-top-msg').length > 0) {
      new_fixed_area.calc_height();
    }
  });

  //收合-展開
  $('.error-show-btn').click(function () {
    var checkParentClass = checkParent($(this));
    $(this).find('i').toggleClass('hide');
    $(this).closest(checkParentClass).removeClass('show');
    $(this).closest(checkParentClass).find('ul li').removeClass('del').removeClass('show').attr('id', '');
    if ($(this).hasClass('show')) {
      $(this).closest(checkParentClass).removeClass('close');
      $('.error-hide-btn').removeClass('hide');
    } else {
      $(this).closest(checkParentClass).addClass('close');
      $('.error-hide-btn').addClass('hide');
    }
    $(this).toggleClass('show');
    //按完收合就監聽
    if ($(this).closest('.new-top-msg').length > 0) {
      new_fixed_area.calc_height();
    }
  });

  //固定表頭功能
  fixed_data_table_th();
  ///data_table 表頭處理
  function fixed_data_table_th() {
    //這邊要抓有fixed-head的去判斷不能抓每個data_table
    var table = $('.data_table.fixed-head').not('.fixed-area .data_table');
    //固定表頭的功能只有一個
    if (table.length !== 1) {
      return false;
    }
    var wrapper = $('.wrapper');
    var body = $('body');
    var table_head = table.find('thead tr');
    var clone_head = table_head.clone();
    var fake_table_html = "<table class='data_table'></table>";
    var fake_table = $(fake_table_html).append(clone_head);
    var fixed_area = $('.fixed-area');
    //進去就判斷如果網頁內容長度大於body就固定表頭
    if (wrapper.height() > body.height() && fixed_area.find('.' + fake_table.attr('class')).length == 0) {
      table_head.hide();
      fixed_area.append(fake_table);
    } else {
      table_head.show();
      fixed_area.find('.' + fake_table.attr('class')).remove();
    }
    new_fixed_area.calc_height();
  }
});
$(document).ready(function () {
  //呼叫此功能範例:
  $('.fixed-table').plugin_fixed_table();
});

(function ($, window, document, undefined) {
  /**
   * 表頭自適應功能
   *
   *
   *
   *
   */
  //TODO:表格固定入口
  $.fn.plugin_fixed_table = function (options) {
    if (this.length == 0) {
      return false;
    }
    if (this.length > 1) {
      console.error('格式錯誤-畫面中只能帶入一個fixed-table');
      return false;
    }
    if ($('.fixed-table-pagination').length == 0) {
      console.error('格式錯誤-請把table後的元素用.fixed-table-pagination包好');
      return false;
    }
    var _table = this;
    //預設參數
    var def_options = {
      ele: _table,
    };
    var new_options = $.extend(def_options, options);
    var new_fixed_table = new Fixed_table(new_options);
    //TODO:事件區
    //插件table滑入的話如果有文字溢出dot底色處理
    new_fixed_table.table_wrapper.on('mouseenter', 'tr', function () {
      reset_text_overflow($(this));
    });
    //原始table 滑入的話如果有文字溢出dot底色處理
    _table.on('mouseenter', 'tr', function () {
      reset_text_overflow($(this));
    });
    //插件table滑鼠滑出dot底色處理
    new_fixed_table.table_wrapper.on('mouseleave', 'tr', function () {
      reset_text_overflow($(this));
    });
    //原始table滑鼠滑出dot底色處理
    _table.on('mouseleave', 'tr', function () {
      reset_text_overflow($(this));
    });
    //畫面拉動處理
    $(window).on('resize', function () {
      $('.text-overflow').plugin_check_overflow_text();
      setTimeout(function () {
        new_fixed_table.is_rwd();
        new_fixed_table.get_use_height(); //收合一定要重新抓高度
        new_fixed_table.set_render_height_attr();
        new_fixed_table.set_render_width_attr(); //收合要重新設定TABLE數值
        new_fixed_table.set_render_header_attr();
      }, 0);
      setTimeout(function () {
        new_fixed_table.is_rwd();
        new_fixed_table.get_use_height(); //收合一定要重新抓高度
        new_fixed_table.set_render_height_attr();
        new_fixed_table.set_render_width_attr(); //收合要重新設定TABLE數值
        new_fixed_table.set_render_header_attr();
      }, 100);
    });
    //如果搜尋區域收合就重新設定table數值
    $('.search_arrow').on('click', function () {
      new_fixed_table.get_use_height(); //收合一定要重新抓高度
      new_fixed_table.set_render_height_attr();
      new_fixed_table.set_render_width_attr(); //收合要重新設定TABLE數值
      new_fixed_table.set_render_header_attr();
    });
    //錯誤訊息收合就重新設定table數值
    $('.error-show-btn').on('click', function () {
      new_fixed_table.get_use_height(); //收合一定要重新抓高度
      new_fixed_table.set_render_height_attr();
      new_fixed_table.set_render_width_attr(); //收合要重新設定TABLE數值
      new_fixed_table.set_render_header_attr();
    });
    //網頁收合
    $('.bars').on('click', function () {
      //要等畫面變換完載去算高度
      setTimeout(function () {
        new_fixed_table.is_rwd();
        new_fixed_table.get_use_height(); //收合一定要重新抓高度
        new_fixed_table.set_render_height_attr();
        new_fixed_table.set_render_width_attr();
        new_fixed_table.set_render_header_attr();
      }, 0);
      //要算第二次才會正確
      setTimeout(function () {
        new_fixed_table.is_rwd();
        new_fixed_table.get_use_height(); //收合一定要重新抓高度
        new_fixed_table.set_render_height_attr();
        new_fixed_table.set_render_width_attr();
        new_fixed_table.set_render_header_attr();
      }, 100);
    });
    //tr hover時重新呼叫文字溢出去改變...底色
    function reset_text_overflow($ele) {
      var $text_overflow = $ele.find('.text-overflow');
      if ($text_overflow.length == 0) {
        return false;
      }
      $text_overflow.plugin_check_overflow_text({
        show_row: parseInt($text_overflow.attr('data-showrow')),
      });
    }
  };
  //TODO:表格固定建構子
  function Fixed_table(options) {
    var fixed_table = this;
    this.table_ele = options.ele;
    this.use_height; //table存可使用的高度
    this.text_overflow_list_height = parseInt(
      options.text_overflow_list_height
    ); //文字溢出限制高度
    this.text_overflow_show_row = parseInt(options.text_overflow_show_row); //文字溢出顯示幾行
    this.table_class = options.ele.attr('class');
    this.table_wrapper; //插件的包裝
    this.table_header; //插件的表頭
    this.table_body; //插件的表格內容
    this.rwd_num = 900; //RWD斷點設定數值900以上就跑功能900以下就跑原本

    this.get_use_height();
    this.creat_html();
    this.set_render_height_attr();
    setTimeout(function () {
      fixed_table.set_render_width_attr();
      fixed_table.set_render_header_attr();
    }, 0);
    this.is_rwd(); //判斷是否RWD並顯示對應的table
  }
  //抓可使用的高
  Fixed_table.prototype.get_use_height = function () {
    //先抓table-offset-top後面的空白可用高度
    //在抓fixed-table-pagination的高度
    //視窗高-table-offset-top定位-fixed-table-pagination的高度=可使用的高

    var table = this;
    var other_ele_height = parseInt(
      $('.fixed-table-pagination').outerHeight(true)
    );
    //加入定位點
    if ($('.table-offset-top').length == 0) {
      table.table_ele.before('<div class="table-offset-top"></div>');
    }
    var table_offset_top = $('.table-offset-top').offset().top;
    //視窗高-table定位-剩下已使用的高=可使用的高
    var delta = $(window).height() - table_offset_top - (other_ele_height + 15);
    table.use_height = delta;
  };
  //TODO:產生假TABLE
  Fixed_table.prototype.creat_html = function () {
    if ($('.fixed-table-wrapper').length > 0) {
      return false;
    }
    var table = this;
    var $table = table.table_ele;
    var $clone_table = $table.clone();
    var $table_wrapper;
    var html = [];
    //最外層
    var fixed_table_header_html = $table.find('thead').clone().html();

    //組header
    var header_html = [
      '<div class="fixed-table-header"><table class="' +
      table.table_class +
      '"><thead>' +
      fixed_table_header_html +
      '</thead></table></div>',
    ];
    //組bodybody_width
    var body_html = [
      '<div class="fixed-table-body"><table class="' +
      table.table_class +
      '">' +
      $clone_table.html() +
      '</table></div>',
    ];
    //合併
    html.push(
      '<div class="fixed-table-wrapper">' +
      header_html.concat(body_html).join('') +
      '</div>'
    );
    $table.after(html);
    $table.show();
    $table_wrapper = $('.fixed-table-wrapper');
    $table_wrapper.find('table').show();
    $table_header = $table_wrapper.find('.fixed-table-header');
    $table_body = $table_wrapper.find('.fixed-table-body');
    table.table_wrapper = $table_wrapper;
    table.table_header = $table_header;
    table.table_body = $table_body;
  };
  //TODO:插件的表格設置高
  Fixed_table.prototype.set_render_height_attr = function () {
    //表格內容寬度要給傳給表頭寬度
    var table = this;
    var $table_header = table.table_header; //插件表頭
    var $table_body = table.table_body; //插件表格內容
    //表頭高
    var header_height = $table_header.outerHeight();
    //限制高度產生滾動條
    //這邊表格內容使用的高=整個表格使用的高-表頭使用的高
    $table_body.height(table.use_height - parseInt(header_height));
    //插件表格的表頭要往上隱藏起來才不會變成顯示兩個表頭
    $table_body.find('table').css('marginTop', -header_height);
  };
  //TODO:插件的表格設置寬
  Fixed_table.prototype.set_render_width_attr = function () {
    //表格內容寬度要給傳給表頭寬度
    var table = this;
    var $table_header = table.table_header; //插件表頭
    var $table_body = table.table_body; //插件表格內容
    var body_width = parseInt($table_body[0].clientWidth); //不含滾輪寬度

    //表頭表尾表格寬度一樣
    $table_header.find('table').width(body_width);
    //如果有滾動條，表頭就要給padding
    if ($table_body[0].scrollHeight > $table_body[0].clientHeight) {
      $table_header.css({
        paddingRight: '17px',
      });
    } else {
      $table_header.css({
        paddingRight: '',
      });
    }
  };
  //TODO:插件的表格往上移
  Fixed_table.prototype.set_render_header_attr = function () {
    //表格內容寬度要給傳給表頭寬度
    var table = this;
    var $table_header = table.table_header; //插件表頭
    var $table_body = table.table_body; //插件表格內容
    //body的table往上隱藏表頭
    var header_height = $table_header.outerHeight();
    //插件表格的表頭要往上隱藏起來才不會變成顯示兩個表頭
    $table_body.find('table').css('marginTop', -header_height);
  };
  //TODO:表格固定功能RWD顯示切換開關
  Fixed_table.prototype.is_rwd = function () {
    var table = this;
    var rwd_num = table.rwd_num;
    if (parseInt(window.innerWidth) > rwd_num) {
      table.table_wrapper.show();
      table.raw_table_display('hide');
    } else {
      table.table_wrapper.hide();
      table.raw_table_display('show');
    }
  };
  //TODO:原始TABLE顯示處理
  Fixed_table.prototype.raw_table_display = function (type) {
    var table = this;
    var $table = table.table_ele;
    if (type == 'show') {
      $table.css({
        margin: '',
      });
      $table.show();
    } else {
      $table.css({
        margin: 0,
      });
      $table.hide();
    }
    $('.text-overflow').plugin_check_overflow_text();
  };
  Fixed_table.prototype.is_ie = function () {
    //ie?
    if (!!window.ActiveXObject || 'ActiveXObject' in window) return true;
    else return false;
  };
})(jQuery, window, document);

$(document).ready(function () {
  var wrapper = $('.wrapper'),
    tmp_rightmain = $('.rightmain');
  wrapper.append('<a href="#" id="top-btn"></a>');
  var tmp_top_btn = $('#top-btn');

  $('iframe').each(function () {
    $(this).contents().find('#top-btn').remove();
  });

  //等畫面都變化完畢再進行判斷，wrapper內容大於視窗高度，因此要給padding bottom
  setTimeout(function () {
    if (parseInt(wrapper.height()) > parseInt($(window).height())) {
      tmp_rightmain.css('padding-bottom', 60);
    }
  }, 0);
  // 此函数在resize结束的時候執行
  var resizeTimer;
  $(window).on('resize', function (e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      tmp_rightmain.css('padding-bottom', 0);
      if (parseInt(wrapper.height()) > parseInt($(window).height())) {
        tmp_rightmain.css('padding-bottom', 60);
      } else {
        tmp_rightmain.css('padding-bottom', 0);
      }
    }, 250);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
      //滾動大於50顯示
      tmp_top_btn.addClass('show');
    } else {
      tmp_top_btn.removeClass('show');
    }
  });
  tmp_top_btn.click(function () {
    // When arrow is clicked
    $('body,html').animate(
      {
        scrollTop: 0, // Scroll to top of body
      },
      500
    );
  });
});

$(document).ready(function (e) {
  var curr = null;

  if ($('.mainForm').length === 0) {
    return;
  }
  if (
    document.form1.f_index.value === '' ||
    document.form1.f_index.value === undefined
  ) {
    return;
  }
  //去抓form裡面的f_index值然後去抓母選單比對
  var nth_index = parseInt(document.form1.f_index.value) + 1;
  curr = parseInt(document.form1.f_index.value);
  return;
  if ($('.nav > li:nth-child(' + nth_index + ')').length === 0) {
    console.error('請確認選單f_index');
    return;
  }

  $('.nav > li:nth-child(' + nth_index + ')').addClass('active');
  $('.nav > li:nth-child(' + nth_index + ') ul').addClass('active');
  //toggle按鈕呈現打開
  $('.nav > li:nth-child(' + nth_index + ')')
    .find('.nav-arrow-btn')
    .addClass('active');
  //判斷母選單底色
  control_nav_first_level_color();

  $('.nav > li > a').click(function () {
    //假如點選的不是已開啟, 則收合全部再展開目前點選的
    if ($(this).parent('li').index() != curr) {
      $('.nav .hide_ul').removeClass('active');
      $('.nav-arrow-btn').removeClass('active');
      $('.nav > li').removeClass('active');
      $(this).parent().addClass('active');
      $(this).next().addClass('active');
      $(this).find('.nav-arrow-btn').addClass('active');
      control_nav_first_level_color();
      curr = $(this).parent('li').index();
    } else {
      $('.nav > li').removeClass('active');
      $(this).next().removeClass('active'); //隱藏子選單
      $('.nav-arrow-btn').removeClass('active'); //">"按鈕返回原樣
      control_nav_first_level_color();
      curr = null;
    }
  });

  //判斷母選單是否有選到的底色
  function control_nav_first_level_color() {
    //抓目前所在的選單
    var first_level_current_ele = $('.nav-second-current-ele')
      .closest('ul')
      .siblings('a');
    //子選單有打開就不給母選單底色，反之就給底色
    if (first_level_current_ele.siblings('.hide_ul').hasClass('active')) {
      first_level_current_ele.removeClass('active');
    } else {
      first_level_current_ele.addClass('active');
    }
  }
});

//判斷是否有RWD
var RWD_status = 'N';
$(document).ready(function () {
  if ($('.wrapper').hasClass('rwd')) {
    RWD_status = 'Y';
  }
});
var wwlb = window.innerWidth;

function detectScroll() {
  if ($('.listbox').length == 0) {
    return false;
  }
  if (Math.round($('.sourcebox .lb-table tbody').prop('scrollHeight')) > Math.round($('.sourcebox div').innerHeight())) {
    $('.sourcebox .lb-table thead tr').addClass('get-width');
  } else {
    $('.sourcebox .lb-table thead tr').removeClass('get-width');
  }
  if (Math.round($('.targetbox .lb-table tbody').prop('scrollHeight')) > Math.round($('.targetbox div').innerHeight())) {
    $('.targetbox .lb-table thead tr').addClass('get-width');
  } else {
    $('.targetbox .lb-table thead tr').removeClass('get-width');
  }
}

var max_height = function () {
  //調整sourcebox max-height
  if ($('.listbox-style1').length > 0) {
    var target_num = $('.targetbox-content').length;
  } else {
    var target_num = 1;
  }
  $('.targetbox-area').each(function () {
    var target_max = $(this).find('.targetbox > div').css('max-height');
    var target_margin = $(this).find('.targetbox-content').css('margin-bottom');
    var target_border = $(this).find('.targetbox').css('borderTopWidth');
    var soucrce_max = 300;
    if (target_num > 1) {
      soucrce_max =
        target_num * parseInt(target_max) +
        parseInt(target_margin) * (target_num - 1) +
        parseInt(target_border) * target_num * 2;
    }
    $(this).prev('.sourcebox').find('div').css('max-height', soucrce_max);
  });
};

var min_height = function () {
  if ($('.listbox-style1').length > 0) {
    var target_num = $('.targetbox-content').length;
  } else {
    var target_num = 1;
  }
  $('.targetbox-area').each(function () {
    var target_height = $(this).find('.targetbox > div').height();
    var target_margin = $(this).find('.targetbox-content').css('margin-bottom');
    var target_border = $(this).find('.targetbox').css('borderTopWidth');
    var target_max = $(this).find('.targetbox > div').css('max-height');
    var soucrce_height = $(this).prev('.sourcebox').find('div').height();
    if (target_height < soucrce_height && target_height <= parseInt(target_max)) {
      $(this).find('.targetbox').height((soucrce_height -
        parseInt(target_margin) * (target_num - 1) -
        parseInt(target_border) * target_num * 2 +
        2) / target_num);
    }
  });
};

function getTbNameVal(getTbNameVal) {
  $('.targetbox-content').css('display', 'none');
  $('.class_select2').val(getTbNameVal);
  $('.targetbox-content').each(function () {
    if ($(this).attr('data-tbname') == getTbNameVal) {
      $(this).css('display', 'table');
      if ($('.listbox-style2').length > 0) {
        $(this).find('.put-btn-area').append($('.targetbox-content').not(this).find('.put-btn'));
      }
    }
  });

  detectScroll();
}

//預防圖示不見的應急處理
setTimeout(function () {
  //li點擊時勾選checkbox
  var li_event = function () {
    var key = 0; //判斷ctrl或shift
    var sel_start = -1; //shift選取?始點
    var sel_end = -1; //shift選取終點
    var input_click = 0; //是否點擊input
    $('listbox input:enabled').click(function () {
      input_click = 1;
    });
    $('.listbox tr').click(function () {
      //如果listbox沒有nowclick表示現在所點擊的是另一個lisbox
      if (
        $(this).parentsUntil($('.rightmain'), '.listbox').hasClass('nowclick') == false) {
        //移除上一個listbox的標記
        $('.nowclick input').prop('checked', false);
        $('.nowclick .checked').removeClass('checked');
        $('.listbox .lb-up-btn,.listbox .lb-down-btn,.listbox .put-target,.listbox .put-source').addClass('disabled');
        //移除nowclick
        $('.nowclick').removeClass('nowclick');
        //將新點擊的listbox加上nowclick
        $(this).parentsUntil($('.rightmain'), '.listbox').addClass('nowclick');
      }

      var source_box = $(this).parentsUntil($('.rightmain'), '.sourcebox').attr('class');
      var target_box = $(this).parentsUntil($('.rightmain'), '.targetbox').attr('class');
      var now_box = '';
      var now_group = $(this).parentsUntil($('.rightmain'), '.targetbox').attr('data-group');
      var other_box = '';

      if (source_box != undefined) {
        now_box = '.sourcebox';
        other_box = '.targetbox';
      } else {
        now_box = '.targetbox';
        other_box = '.sourcebox';
      }

      $('.nowclick ' + other_box + ' .checked').find('input').prop('checked', false); //移除另一邊被選擇的對象
      $('.nowclick ' + other_box + ' .checked').removeClass('checked'); //移除另一邊的標記
      //移除同box不同group的對象和標記
      if (now_box == '.targetbox') {
        $('.nowclick ' + now_box + '[data-group!=' + now_group + ']').find('input').prop('checked', false);
        $('.nowclick ' + now_box + '[data-group!=' + now_group + '] .checked').removeClass('checked');
      }
      $('.nowclick ' + other_box + ' tr:first').find('input').prop('checked', false);
      //點TH選
      if ($(this).find('th').html() != undefined) {
        //範例41跑這段-用hasclass去判斷使用者點li再去給input checked
        if ($(this).find('th').hasClass('sort-th') == true && $(this).hasClass('checked') == false) {
          $(this).parent().siblings().find('tr').addClass('checked');
          $(this).parent().siblings().find('input').prop('checked', true);
          $(this).addClass('checked');
          disabled();
          input_click = 0;
        } else if ($(this).find('th').hasClass('sort-th') == false) {
          //點TH選
          if ($(this).hasClass('checked')) {
            $(this).find('input').prop('checked', false);
            $('.checked').find('input').prop('checked', false); //true/false""不能""加引號!!
            $('.checked').removeClass('checked');
            disabled();
          } else {
            $(this).find('input:enabled').prop('checked', true);
            $(this).parent().siblings().find('tr').addClass('checked');
            $(this).parent().siblings().find('input:enabled').prop('checked', true);
            $(this).addClass('checked');
            disabled();
          }
          input_click = 0;
        } else {
          $(this).find('input').prop('checked', false);
          $('.checked').find('input').prop('checked', false); //true/false""不能""加引號!!
          $('.checked').removeClass('checked');
          $(this).removeClass('checked');
        }
      }
      //按ctrl時點擊
      else if (key == 17) {
        //若點擊已選取對像則取消選取
        if ($(this).hasClass('checked')) {
          $(this)
            .find('input')
            .prop('checked', false); //true/false""不能""加引號!!
          $(this).removeClass('checked');
        } else {
          $(this)
            .find('input')
            .prop('checked', true);
          $(this).addClass('checked');
        }
      }
      //按shift時點擊
      else if (key == 16) {
        //在sel_start被刷新成-1前只會記錄一次?始點
        if (sel_start == -1) {
          sel_start = $('.checked').index();
          if (sel_start == -1) {
            sel_start = 0;
          }
        }
        sel_end = $(this).index();
        var i = Math.abs(sel_start - sel_end);
        if (now_box == '.targetbox') {
          var now_box = now_box + '[data-group=' + now_group + ']';
        }
        $('' + now_box + ' tr')
          .find('input')
          .prop('checked', false); //true/false""不能""加引號!!
        $('' + now_box + ' tr').removeClass('checked');
        while (i >= 0) {
          if (sel_start > sel_end) {
            i = 0 - i;
          }
          $('.nowclick ' + now_box + ' tbody tr:eq(' + (sel_start + i) + ')')
            .find('input')
            .prop('checked', true);
          $(
            '.nowclick ' + now_box + ' tbody tr:eq(' + (sel_start + i) + ')'
          ).addClass('checked');
          i = Math.abs(i) - 1;
        }
      } else if ($(this).hasClass('checked')) {
        $(this)
          .find('input')
          .prop('checked', false); //true/false""不能""加引號!!
        $(this).removeClass('checked');
      } else {
        //若點擊已選取對象，且選取對像等於1個時則取消選取
        if (
          $(this).hasClass('checked') &&
          $('' + now_box + ' .checked').length == 1
        ) {
          $(this)
            .find('input')
            .prop('checked', false); //true/false""不能""加引號!!
          $(this).removeClass('checked');
        } else {
          //$('.checked').find('input').prop('checked',false); //true/false""不能""加引號!!
          //$('.checked').removeClass('checked');
          $(this)
            .find('input:enabled')
            .prop('checked', true);
          $(this).addClass('checked');
          $('input:disabled')
            .parents('tr')
            .removeClass('checked');
        }

        sel_start = -1;
        sel_end = -1;
      }
      if ($(this).parent().find('.checked').length == $(this).parent().find('tr').length) {
        if ($(this).parent().parent().find('th').html() != undefined && $(this).parent().parent().find('th input').prop('checked') != true) {
          $(this).parent().parent().find('th input').prop('checked', true);
          //$(this).parent().parent().addClass('checked');
        }
      } else if ($(this).find('th').html() == undefined) {
        $(this).parent().parent().find('th input').prop('checked', false);
      }

      //上下移判斷
      btn_disable();
      btn_click();
    });

    $(document).keydown(function (e) {
      if (e.keyCode == 17) {
        key = e.keyCode;
      } else if (e.keyCode == 16) {
        key = e.keyCode;
      }
    });

    $(document).keyup(function (e) {
      key = 0;
    });
  };

  function disabled() {
    $('input:disabled')
      .parents('tr')
      .removeClass('checked')
      .addClass('disabled_tr');
    $('input:disabled').prop('checked', false);
  }

  //判斷是否禁用按鍵
  var btn_disable = function () {
    var group = $('.nowclick .targetbox')
      .has('.checked')
      .attr('data-group');
    var source_chklen = $('.nowclick .sourcebox .checked:has(td)').length; //sourcebox選到的數量
    var target_chklen = $(
      '.nowclick .targetbox[data-group=' + group + '] .checked:has(td)'
    ).length; //targetbox選到的數量
    var up_status = 0;
    var down_status = 0;

    //只要被選擇到的對象前後不是checked的狀態就能繼續上下移
    $('.nowclick .targetbox .checked').each(function () {
      if (
        $(this)
          .prev()
          .hasClass('checked') == false &&
        $(this)
          .prev()
          .html() != undefined
      ) {
        up_status = 1;
      }
      if (
        $(this)
          .next()
          .hasClass('checked') == false &&
        $(this)
          .next()
          .html() != undefined
      ) {
        down_status = 1;
      }
    });

    //判斷是否禁用上鍵//如果第一個前面沒有東西且up_status = 0
    if (target_chklen > 1 || up_status == 0) {
      $('.nowclick .lb-up-btn').addClass('disabled');
    } else {
      $('.nowclick .move-btn[data-group=' + group + '] .lb-up-btn').removeClass(
        'disabled'
      );
      $('.nowclick .move-btn[data-group!=' + group + '] .lb-up-btn').addClass(
        'disabled'
      );
    }

    //判斷是否禁用下鍵//如果最後一個後面沒有東西且down_status = 0
    if (target_chklen > 1 || down_status == 0) {
      $('.nowclick .lb-down-btn').addClass('disabled');
    } else {
      $(
        '.nowclick .move-btn[data-group=' + group + '] .lb-down-btn'
      ).removeClass('disabled');
      $('.nowclick .move-btn[data-group!=' + group + '] .lb-down-btn').addClass(
        'disabled'
      );
    }
    //判斷是否禁用左右鍵
    if (source_chklen > 0) {
      $('.nowclick .put-btn .put-target')
        .removeClass('disabled')
        .css('display', 'block');
      $('.nowclick .put-btn .put-source')
        .addClass('disabled')
        .css('display', 'none');
    } else if (target_chklen > 0) {
      $('.nowclick .put-btn[data-group=' + group + '] .put-source')
        .removeClass('disabled')
        .css('display', 'block');
      $('.nowclick .put-btn[data-group=' + group + '] .put-target')
        .addClass('disabled')
        .css('display', 'none');
      $('.nowclick .put-btn[data-group!=' + group + '] i').addClass('disabled');
    } else {
      $('.nowclick .put-btn i').addClass('disabled');
    }
  };

  var btn_click = function () {
    //點擊put-source(target -> source)
    //將listbox內的按鍵?綁上事件，內容再用nowclick來區分對像
    $(
      '.listbox .lb-up-btn,.listbox .lb-down-btn,.listbox .put-target,.listbox .put-source'
    ).off('click');

    $('.nowclick .put-source').click(function () {
      if ($(this).hasClass('disabled')) {
        return false;
      }
      var group = $(this)
        .parent()
        .attr('data-group');
      $('.nowclick .targetbox .checked:has(td)').each(function () {
        $('.nowclick .sourcebox table').append(
          '<tr>' + $(this).html() + '</tr>'
        );
        $('.nowclick .sourcebox table')
          .find('input[name="target"]')
          .attr('name', 'source');
        $(this).remove();
      });
      $('.put-source').addClass('disabled');
      $('.targetbox[data-group = ' + group + '] tr:first input').prop(
        'checked',
        false
      );
      //因為li_event會將全部li綁上事件所以用.listbox而不是用.nowclick
      $('.listbox tr').off('click'); //將全部li解除綁定click事件，避免重複綁定
      li_event(); //綁定click事件
      btn_disable();
      detectScroll();
      changeopt(
        $(this)
          .parent()
          .text()
          .trim()
      );
      if ($('.listbox-style2').length > 0) {
        getTbNameVal(
          $(this)
            .parent()
            .text()
            .trim()
        );
      }

      if (RWD_status == 'Y') {
        if (ww >= 768) {
          min_height();
        } else {
          $('.targetbox>div').css('max-height', '300px');
        }
      } else {
        min_height();
      }
    });

    //點擊put-target(source -> target)
    $('.nowclick .put-target').click(function () {
      if ($(this).hasClass('disabled')) {
        return false;
      }
      var group = $(this)
        .parent()
        .attr('data-group');
      $('.nowclick .sourcebox .checked:has(td)').each(function () {
        $('.nowclick .targetbox[data-group = ' + group + '] table').append(
          '<tr>' + $(this).html() + '</tr>'
        );
        $('.nowclick .targetbox table')
          .find('input[name="source"]')
          .attr('name', 'target');
        $(this).remove();
      });
      $('.put-target').addClass('disabled');
      $('.sourcebox tr:first input').prop('checked', false);
      $('.listbox tr').off('click');
      li_event();
      btn_disable();
      detectScroll();
      changeopt(
        $(this)
          .parent()
          .text()
          .trim()
      );
      if ($('.listbox-style2').length > 0) {
        getTbNameVal(
          $(this)
            .parent()
            .text()
            .trim()
        );
      }

      if (RWD_status == 'Y') {
        if (ww >= 768) {
          min_height();
        } else {
          $('.targetbox>div').css('max-height', '300px');
        }
      } else {
        min_height();
      }
    });

    //點擊上移
    $('.nowclick .lb-up-btn').click(function () {
      //若有禁止點擊的class就不進行動作
      if ($(this).hasClass('disabled') == true) {
        return false;
      }
      var up_array = [];
      var i = 0;
      var j = 0;
      $('.nowclick .targetbox .checked').each(function () {
        up_array[i] = $(this); //將被選擇的項目存成陣列
        i++;
      });

      for (j = 0; j < up_array.length; j++) {
        //若前一項沒有東西且前一項有checked則不進行動作
        if (
          up_array[j].prev().html() != undefined &&
          up_array[j].prev().hasClass('checked') == false
        ) {
          if (j == 0) {
            up_array[j]
              .prev()
              .before('<tr class="newchecked">' + up_array[j].html() + '</tr>');
          } else {
            var last_up = j - 1;
            $('.nowclick .targetbox .checked:eq(' + last_up + ')')
              .next()
              .before('<tr class="newchecked">' + up_array[j].html() + '</tr>');
          }
          up_array[j].remove();
          $('.nowclick .targetbox .newchecked')
            .find('input')
            .prop('checked', true);
          $('.nowclick .targetbox .newchecked')
            .removeClass('newchecked')
            .addClass('checked');
          $('.listbox tr').off('click');
        }
      }
      li_event();
      btn_disable();
    });

    //點擊下移
    $('.nowclick .lb-down-btn').click(function () {
      //若有禁止點擊的class就不進行動作
      if ($(this).hasClass('disabled') == true) {
        return false;
      }
      var down_array = [];
      var i = 0;
      var j = 0;
      $('.nowclick .targetbox .checked').each(function () {
        down_array[i] = $(this); //將被選擇的項目存成陣列
        i++;
      });

      var re_down = down_array.reverse(); //倒轉down_array，讓被選擇項目能以倒序執行
      for (j = 0; j < re_down.length; j++) {
        //若下一項沒有東西且下一項有checked則不進行動作
        if (
          re_down[j].next().html() != undefined &&
          re_down[j].next().hasClass('checked') == false
        ) {
          if (j == 0) {
            re_down[j]
              .next()
              .after('<tr class="newchecked">' + re_down[j].html() + '</tr>');
          } else {
            var last_down = re_down.length - j;
            $('.nowclick .targetbox .checked:eq(' + last_down + ')')
              .prev()
              .after('<tr class="newchecked">' + re_down[j].html() + '</tr>');
          }
          re_down[j].remove();
          $('.nowclick .targetbox .newchecked')
            .find('input')
            .prop('checked', true);
          $('.targetbox .newchecked')
            .removeClass('newchecked')
            .addClass('checked');
          $('.listbox tr').off('click');
        }
      }
      li_event();
      btn_disable();
    });
  };

  //判斷是否有data-title
  var listboxDataTitle = function () {
    if (
      $('.sourcebox[data-title]').html() != undefined ||
      $('.targetbox[data-title]').html() != undefined
    ) {
      $('.sourcebox')
        .parent('.listbox')
        .css('padding-top', 30);
      if (wwlb > 768) {
        $('.targetbox').css('margin-top', 0);
      } else if (wwlb <= 768) {
        $('.targetbox').css('margin-top', 30);
      }
    } else {
      $('.sourcebox')
        .parent('.listbox')
        .css('padding-top', 0);
    }
  };

  function changeopt(tbname) {
    var tbIndex = $('.class_select2 option[value="' + tbname + '"]').index();
    var tbNum = $('.targetbox:eq(' + tbIndex + ') table tbody tr').length;
    $('.class_select2')
      .find('option[value=' + tbname + ']')
      .text(tbname + '(' + tbNum + ')');
  }

  //菜籃式挑選
  $(document).ready(function () {
    $(function () {
      //關閉反白選取
      $('.listbox').attr('unselectable', 'on');
      $('.listbox').css('user-select', 'none');
      $('.listbox').on('selectstart', false);
    });

    //關閉所有左右上下按鍵
    $(
      '.listbox .lb-up-btn,.listbox .lb-down-btn,.listbox .put-target,.listbox .put-source'
    ).addClass('disabled');
    $('.listbox .put-source').css('display', 'none');
    //取消所有選取
    $('.listbox th,.listbox td')
      .find('input')
      .prop('checked', false);
    //設定高度
    if (RWD_status == 'Y') {
      if (ww >= 768) {
        //setTimeout(function(){
        max_height();
        min_height();
        //},100);
      } else {
        $('.targetbox>div').css('max-height', '300px');
      }
    } else {
      min_height();
    }

    //產生切換targetbox用選單
    var targetboxQut = 0;
    if ($('.listbox-style2').length > 0) {
      var targetboxQut = $('.targetbox-content').length;
    }
    if (targetboxQut > 1 && RWD_status == 'Y') {
      if ($('.listbox-style2').length > 0) {
        $('.listbox').before(
          '<div class="select_targetbox"><select class="class_select2" onchange="getTbNameVal($(this).val())"></select></div>'
        );
      } else {
        $('.targetbox-area').before(
          '<div class="select_targetbox"><select class="class_select2" onchange="getTbNameVal($(this).val())"></select></div>'
        );
      }

      var tmpStr = '';
      for (var i = 0; i < targetboxQut; i++) {
        var tbName = $('.targetbox-content:eq(' + i + ')').attr('data-tbname');
        var tbNum = $('.targetbox:eq(' + i + ') table tbody tr').length;
        tmpStr += '<option value="' + tbName + '">' + tbName + '(' + tbNum + ')</option>';
      }

      $('.class_select2').append(tmpStr);

      var wwListBox = window.innerWidth;
      if ($('.listbox-style2').length > 0) {
        if (wwListBox > 768) {
          $('.listbox').before($('.select_targetbox'));
        } else {
          $('.targetbox-area').before($('.select_targetbox'));
        }
        var classSelectVal = $('.class_select2').val();
        getTbNameVal(classSelectVal);
      } else {
        if (wwListBox >= 768) {
          $('.select_targetbox').css('display', 'none');
          $('.targetbox-content').css('display', 'block');
        } else {
          $('.targetbox-content').css('display', 'none');
          $('.select_targetbox').css('display', 'block');
          var classSelectVal = $('.class_select2').val();
          getTbNameVal(classSelectVal);
        }
      }
    }
    detectScroll();
    li_event();
    btn_disable();
    listboxDataTitle();

    $('.sort-th').click(function () {
      $('.listbox tr').off('click');
      li_event();
    });

    if (RWD_status == 'Y') {
      $(window).bind('resize orientationchange', function () {
        if (wwlb != window.innerWidth) {
          //若實際上有改變就更新ww並執行adjustMenu()//for iphone resize bug
          wwlb = window.innerWidth;
          listboxDataTitle();
        }
      });
    }
  });
}, 300);
//人員選擇
$(document).ready(function (e) {
  //判斷選擇人員版本
  if ($(".member").find(".member2").length > 0) {
    var member = ".member2";
  } else if ($(".member").find(".member2-style2").length > 0) {
    var member = ".member2-style2";
  }

  //選擇部門、人員填補空位
  $(member).each(function () {
    var quantity = $(this).find(".member2-name").length;
    var remainder = quantity % 4;
    if (remainder == 1) {
      $(this).append('<div class="blank-cb">&nbsp;</div><div class="blank-name">&nbsp;</div>');
      $(this).append('<div class="blank-cb">&nbsp;</div><div class="blank-name">&nbsp;</div>');
      $(this).append('<div class="blank-cb">&nbsp;</div><div class="blank-name">&nbsp;</div>');
    } else if (remainder == 2) {
      $(this).append('<div class="blank-cb">&nbsp;</div><div class="blank-name">&nbsp;</div>');
      $(this).append('<div class="blank-cb">&nbsp;</div><div class="blank-name">&nbsp;</div>');
    } else if (remainder == 3) {
      $(this).append('<div class="blank-cb">&nbsp;</div><div class="blank-name">&nbsp;</div>');
    }
  });

  //隱藏/顯示已選擇人員
  $(".mb-selected-switch").addClass("active");
  $(".mb-selected-switch").click(function () {
    $(this).toggleClass("active");
    $(".mb-selected").toggleClass("active");
    mbSelectedStyle();
  });
  //隱藏/顯示全部部門、人員
  $(".mb-switch-all,.name-all").click(function () {
    $(".mb-switch-all").toggleClass("active");
    if ($(".mb-switch-all").hasClass("active")) {
      $(".member2-style2").addClass("mb2-show");
      $(".mb-switch").addClass("active");
    } else {
      $(".member2-style2").removeClass("mb2-show");
      $(".mb-switch").removeClass("active");
    }
  });

  //隱藏/顯示該部門、人員
  $(".mb-switch").click(function () {
    $(this).toggleClass("active");
    $(this).parent().next(".member2-style2").toggleClass("mb2-show");
  });
  $(".member1-name").click(function () {
    $(this).toggleClass("active");
    $(this).next(".mb-switch").toggleClass("active");
    $(this).parent().next(".member2-style2").toggleClass("mb2-show");
  });

  //取得有打勾之人員資料並顯示
  $('.member2-style2 .checkbox input[type="checkbox"]').each(function () {
    if ($(this).is(":checked")) {
      var nameId = $(this).attr("data-name"); //取得id
      $("#" + nameId).css("display", "inline-block"); //顯示相對應id人員資料
      $("#" + nameId).parents(".mb-selected-member2").prev(".mb-selected-member1").addClass("show"); //顯示部門名稱
      $("#" + nameId).parents(".mb-selected-member2").addClass("show"); //顯示人員群組
    }
  });

  //人員名稱點擊時
  $(member + ' .checkbox input[type="checkbox"]').change(function () {
    var nameId = $(this).attr("data-name");
    if ($(this).is(":checked")) {
      $("#" + nameId).css("display", "inline-block");
      $("#" + nameId).parents(".mb-selected-member2").prev(".mb-selected-member1").addClass("show");
      $("#" + nameId).parents(".mb-selected-member2").addClass("show");
      //直到該部門人員全部勾選時
      if ($(this).parents(member).find('input[type="checkbox"]:checked').length ==
        $(this).parents(member).find('input[type="checkbox"]').length) {
        $(this).parents(member).prev().find(":checkbox").prop("checked", true);
      }
      //直到所有人員勾選完時
      if ($(member + ' .checkbox input[type="checkbox"]').length ==
        $(member + ' .checkbox input[type="checkbox"]:checked').length) {
        //全部打勾
        $("#all-cb").prop("checked", true);
      }
    } else if ($(this).not(":checked")) {
      $("#" + nameId).css("display", "none");
      //直到最後一個後取消勾選時，隱藏部門名稱及人員群組
      if ($("#" + nameId).siblings(":visible").length == 0) {
        $("#" + nameId).parents(".mb-selected-member2").prev(".mb-selected-member1").removeClass("show");
        $("#" + nameId).parents(".mb-selected-member2").removeClass("show");
      }

      $(this).parents(member).prev().find(":checkbox").prop("checked", false); //將部門名稱取消勾選
      $("#all-cb").prop("checked", false); //將全部取消勾選
    }
    mbSelectedNum();
    mbSelectedStyle();
  });

  //部門名稱點擊時
  $('.member1 .checkbox input[type="checkbox"]').change(function () {
    var nameId = $(this).attr("data-name");
    if ($(this).is(":checked")) {
      $("#" + nameId).next(".mb-selected-member2").find(".mb-selected-data").css("display", "inline-block");
      $("#" + nameId).next(".mb-selected-member2").addClass("show");
      $("#" + nameId).addClass("show");
      $(this).parents(".member1").next().find(":checkbox").prop("checked", true);
      //直到所有部門勾選完時
      if ($('.member1 .checkbox input[type="checkbox"]').length - 1 ==
        $('.member1 .checkbox input[type="checkbox"]:checked').length) {
        //全部打勾
        $("#all-cb").prop("checked", true);
      }
    } else if ($(this).not(":checked")) {
      $("#" + nameId).next(".mb-selected-member2").find(".mb-selected-data").css("display", "none");
      $("#" + nameId).next(".mb-selected-member2").removeClass("show");
      $("#" + nameId).removeClass("show");

      $(this).parents(".member1").next().find(":checkbox").prop("checked", false); //將該部門人員取消勾選
      $("#all-cb").prop("checked", false); //將全部取消勾選
    }
    mbSelectedNum();
    mbSelectedStyle();
  });

  //全部
  $("#all-cb").change(function () {
    if ($(this).is(":checked")) {
      $(this).parents(".member").find(":checkbox").prop("checked", true);
      $(".mb-selected-data").css("display", "inline-block");
      $(".mb-selected-member1,.mb-selected-member2").addClass("show");
    } else if ($(this).not(":checked")) {
      $(this).parents(".member").find(":checkbox").prop("checked", false);
      $(".mb-selected-data").css("display", "none");
      $(".mb-selected-member2,.mb-selected-member1").removeClass("show");
    }
    mbSelectedNum();
    mbSelectedStyle();
  });

  //刪除已選擇人員
  $(".mb-selected-data span").click(function () {
    var nameId = $(this).parent().attr("id");
    $(this).parent().css("display", "none");
    $('input[data-name="' + nameId + '"]').prop("checked", false); //自己取消勾選
    $('input[data-name="' + nameId + '"]').parents(".member2-style2").prev(".member1").find(":checkbox").prop("checked", false); //部門名稱取消勾選
    $("#all-cb").prop("checked", false); //全部取消勾選
    if ($(this).parent().siblings(":visible").length == 0) {
      $(this).parents(".mb-selected-member2").prev(".mb-selected-member1").removeClass("show");
      $(this).parents(".mb-selected-member2").removeClass("show");
      mbSelectedStyle();
    }
    mbSelectedNum();
  });
  mbSelectedNum();
  mbSelectedStyle();
});
//選擇部門、人員
function mbSelectedStyle() {
  $(".mb-selected-member1").removeClass(
    "mb-selected-member1-one mb-selected-member1-first mb-selected-member1-last"
  );
  if ($(".mb-selected-member1:visible").length == 1) {
    $(".mb-selected-member1").addClass("mb-selected-member1-one");
  } else {
    $(".mb-selected-member1:visible").first().addClass("mb-selected-member1-first");
    $(".mb-selected-member1:visible").last().addClass("mb-selected-member1-last");
  }
}

function mbSelectedNum() {
  var selectedNum = $(".member2-style2").find(":checkbox:checked").length;
  $(".mb-selected-num span").text(selectedNum);
}
/**
*判斷勾選的核取方塊
*@param {*} _this 核取方塊
*
*/
function inputDataGroupChange(_this) {
  var dataName = _this.attr('data-name');//取得id
  if (dataName == undefined) {
    //若點擊全部
    if (_this.is(":checked")) {
      _this.parents(".dept-member").find(":checkbox:enabled").prop("checked", true);
      $(".mb-slted-cont1 li").addClass("show");
      $(".mb-slted-group1,.mb-slted-cont1").addClass("show");
    } else if (_this.not(":checked")) {
      _this.parents(".dept-member").find(":checkbox:enabled").prop("checked", false);
      $(".mb-slted-cont1 li").removeClass("show");
      $(".mb-slted-group1,.mb-slted-cont1").removeClass("show");
    }
  } else if (dataName.indexOf('d') > -1) {
    //若點擊部門
    var dataNameStr = dataName.split(' '),     //空白分割字串
      dataNameStrNum = dataNameStr.length,   //個數
      dataNameCont = '',
      groupName = '';

    for (var i = 0; i < dataNameStrNum; i++) {
      if ($('input[data-name="' + dataNameStr[i] + '"]').closest('.mb-group').length > 0) {
        groupName = 'mb-group';
      } else {
        groupName = 'mb-group1';
      }

      var mbCbNum = $('input[data-name="' + dataNameStr[i] + '"]').closest('.' + groupName).next('.mb-cont').find(':checkbox').length,
        mbCbDisNum = $('input[data-name="' + dataNameStr[i] + '"]').closest('.' + groupName).next('.mb-cont').find(':checkbox:disabled:not(:checked)').length;
      if (mbCbNum != mbCbDisNum) {
        dataNameCont += '#' + dataNameStr[i] + ',';
      }
    }

    dataNameCont = dataNameCont.substring(0, dataNameCont.length - 1); //去除最後一個逗號

    if (_this.is(":checked")) {
      $(dataNameCont).addClass("show");
      $(dataNameCont).next(".mb-slted-cont1").addClass("show");
      $(dataNameCont).next(".mb-slted-cont1").find('li').addClass("show");
    } else if (_this.not(":checked")) {
      $(dataNameCont).removeClass("show");
      $(dataNameCont).next(".mb-slted-cont1").removeClass("show");
      $(dataNameCont).next(".mb-slted-cont1").find('li').removeClass("show");
    }
    groupChecked(_this, 'using');
  } else if (dataName.indexOf('p') > -1 || dataName.indexOf('g') > -1) {
    //若點擊職稱或群組名稱
    var mbContObj = _this.closest('.mb-group1').next('.mb-cont'),
      dataNameNum = mbContObj.find(':checkbox:enabled').length,     //個數
      dataNameDCont = '',
      dataNamePCont = '',
      inputDataName = '';
    for (var i = 0; i < dataNameNum; i++) {
      var dataDeptVar = mbContObj.find(':checkbox:enabled:eq(' + i + ')').attr('data-dept'),
        dataNameVar = mbContObj.find(':checkbox:enabled:eq(' + i + ')').attr('data-name');
      dataNameDCont += '#' + dataDeptVar + ',';                              //部門ID
      dataNamePCont += '#' + dataNameVar + ',';                              //人員ID
      inputDataName += 'input[data-name="' + dataNameVar + '"]:enabled,';    //核取方塊
    }

    dataNameDCont = dataNameDCont.substring(0, dataNameDCont.length - 1);   //去除最後一個逗號
    dataNamePCont = dataNamePCont.substring(0, dataNamePCont.length - 1);   //去除最後一個逗號
    inputDataName = inputDataName.substring(0, inputDataName.length - 1);   //去除最後一個逗號

    if (_this.is(":checked")) {
      $(dataNameDCont).addClass("show");
      $(dataNameDCont).next(".mb-slted-cont1").addClass("show");
      $(dataNamePCont).addClass("show");
      $(inputDataName).prop("checked", true);
    } else if (_this.not(":checked")) {
      $(dataNamePCont).removeClass("show");
      $(inputDataName).prop("checked", false);
      mbSltedContIsShow();
    }

    //判斷是否依任務編組排，若是則每個相關的都需確認群組是否需勾起
    if (dataName.indexOf('g') > -1) {
      var inputDataGroupStr = dataName.substr(1).split(','),   //逗點分割字串
        inputDataGroupNum = inputDataGroupStr.length;        //個數
      for (var i = 0; i < inputDataGroupNum; i++) {
        var inputCheckboxNum = $('input[data-group="' + inputDataGroupStr[i] + '"]').closest('.mb-group1').next('.mb-cont').find('input').length,
          inputCheckboxCheckedNum = $('input[data-group="' + inputDataGroupStr[i] + '"]').closest('.mb-group1').next('.mb-cont').find('input:checked').length;

        //判斷群組裡的人員是否全部勾選
        if (inputCheckboxNum == inputCheckboxCheckedNum && inputCheckboxCheckedNum != 0) {
          $('input[data-group="' + inputDataGroupStr[i] + '"]').prop("checked", true);
        } else {
          $('input[data-group="' + inputDataGroupStr[i] + '"]').prop("checked", false);
        }
      }
    }

    groupChecked(_this, 'using');
  } else {
    //若點擊人員姓名
    var nameId = '#' + dataName;
    if (_this.is(":checked")) {
      var type = 'check';
      $(nameId).addClass("show"); //顯示相對應id人員資料
      $(nameId).parents(".mb-slted-cont1").prev(".mb-slted-group1").addClass("show"); //顯示部門名稱
      $(nameId).parents(".mb-slted-cont1").addClass("show"); //顯示人員群組
    } else if (_this.not(":checked")) {
      var type = 'uncheck';
      $(nameId).removeClass("show");
      //直到最後一個後取消勾選時，隱藏部門名稱及人員群組
      if ($(nameId).siblings(":visible").length == 0) {
        $(nameId).parents(".mb-slted-cont1").prev(".mb-slted-group1").removeClass("show");
        $(nameId).parents(".mb-slted-cont1").removeClass("show");
      }
    }

    //判斷是否依任務編組排，若是則每個相關的都需確認群組是否需勾起
    if (selectPersonType == 'taskgroup') {
      if (type == 'check') {
        $('input[data-name="' + dataName + '"]:enabled').prop("checked", true);
      } else {
        $('input[data-name="' + dataName + '"]:enabled').prop("checked", false);
      }

      $('input[data-name="' + dataName + '"]').each(function () {
        groupChecked($(this), 'using');
      });
    } else {
      groupChecked(_this, 'using');
    }
  }

  mbSelectedNumNew();
  mbSelectedStyleNew();
  detectDisabled();
}

/**
*判斷已挑選區部門下是否有人員，若無則隱藏部門名稱
*
*
*
*/
function mbSltedContIsShow() {
  $('.mb-slted-cont1.show').each(function () {
    if ($(this).find('li.show').length == 0) {
      $(this).prev().removeClass("show");
      $(this).removeClass("show");
    }
  });
}

/**
*判斷部門是否勾選
*@param {*} _this 部門核取方塊
*@param {*} type  第一次進入時(loading) 使用中(using)
*/
function groupChecked(_this, type) {
  var dataGroup = _this.attr('data-group'),       //取得data-group值
    dataGroupStr = dataGroup.split('-'),        //分割字串
    dataGroupStrNum = dataGroupStr.length - 1,  //取得層級
    dataGroupStrNum2 = dataGroupStr.length - 1;

  //若勾取群組名稱，則內容勾取
  if (_this.is(":checked")) {
    $('input[data-group^="' + dataGroup + '-"]:enabled').prop("checked", true);
  } else if (_this.not(":checked") && type == 'using') {
    $('input[data-group^="' + dataGroup + '-"]:enabled').prop("checked", false);
  }

  //向上確認是否勾取群組
  for (var i = 0; i < dataGroupStrNum2; i++) {
    var dataGroupCont = '';

    for (var j = 0; j < dataGroupStrNum; j++) {
      dataGroupCont += dataGroupStr[j] + '-';
    }

    var mbCbNum = $('input[data-group^="' + dataGroupCont + '"]').length,
      mbCbCheckedNum = $('input[data-group^="' + dataGroupCont + '"]:checked').length,
      mbCbCheckedDisNum = $('input[data-group^="' + dataGroupCont + '"]:checked:disabled').length,
      mbCbDisNum = $('input[data-group^="' + dataGroupCont + '"]:disabled:not(:checked)').length,
      mbCbEnNum = $('input[data-group^="' + dataGroupCont + '"]:enabled:not(:checked)').length;

    dataGroupCont = dataGroupCont.substring(0, dataGroupCont.length - 1);

    if (mbCbNum == mbCbCheckedNum || (!$('input[data-group="' + dataGroupCont + '"]').is(":disabled") && mbCbNum == mbCbCheckedNum + mbCbDisNum && mbCbCheckedNum > 0 && mbCbEnNum < 0)) {
      $('input[data-group="' + dataGroupCont + '"]').prop("checked", true);

    } else {
      $('input[data-group="' + dataGroupCont + '"]').prop("checked", false);
    }

    if (mbCbNum == mbCbCheckedDisNum || mbCbNum == mbCbDisNum) {
      $('input[data-group="' + dataGroupCont + '"]').prop("disabled", true);
    } else {
      $('input[data-group="' + dataGroupCont + '"]').prop("disabled", false);
    }

    dataGroupStrNum--;
  }

  //全部勾取數量
  var mbCbAllNum = $('.mb-group1 input[type="checkbox"]').length + $('.mb-cont input[type="checkbox"]').length,
    mbCbCheckedAllNum = $('.mb-group1 input[type="checkbox"]:checked').length + $('.mb-cont input[type="checkbox"]:checked').length;

  //直到所有人員勾選完時
  if (mbCbAllNum == mbCbCheckedAllNum) {
    //全部打勾
    $('input[data-group="all"]').prop("checked", true);
  } else {
    //全部取消勾選
    $('input[data-group="all"]').prop("checked", false);
  }
}

//已選擇人員增減樣式
function mbSelectedStyleNew() {
  $('.mb-slted-group1').removeClass('mb-slted-group1-one mb-slted-group1-first mb-slted-group1-last');
  if ($('.mb-slted-group1:visible').length == 1) {
    $('.mb-slted-group1').addClass('mb-slted-group1-one');
  } else {
    $('.mb-slted-group1:visible').first().addClass('mb-slted-group1-first');
    $('.mb-slted-group1:visible').last().addClass('mb-slted-group1-last');
  }
}

//已選擇人員數量
function mbSelectedNumNew() {
  setTimeout(function () {
    var selectedNum = $('.mb-slted-cont1 li.show').length;
    $('.mb-slted-num').find('span').text(selectedNum);
  }, 0);
}

/**
*判斷頁面上disabled的data-name
*
* 
*/
function detectDisabled() {
  var tmp_data_name_check = $('.dept-member').find(":checkbox:disabled:checked");
  var tmp_data_name_no_check = $('.dept-member').find(":checkbox:disabled:not(:checked)");
  var tmp_id_no_check = [];
  var tmp_id_check = [];
  //沒有打勾的先加入陣列
  if (tmp_data_name_no_check.length > 0) {
    for (var i = 0; i < tmp_data_name_no_check.length; i++) {
      tmp_id_no_check.push($(tmp_data_name_no_check[i]).attr('data-name'));
    }
    //放入陣列依序讀出來轉ID
    for (var j = 0; j < tmp_id_no_check.length; j++) {
      //沒打勾的一定不會顯示
      $(".mb-slted-cont1 li#" + tmp_id_no_check[j]).removeClass("show");
      //如果兄弟元素都隱藏，然後自己本身是沒打勾的那一定是隱藏
      if ($(".mb-slted-cont1 li#" + tmp_id_no_check[j]).parent().find('.show').length == 0) {
        $(".mb-slted-cont1 li#" + tmp_id_no_check[j]).closest('.mb-slted-cont1').prev('.mb-slted-group1').removeClass('show');
        $(".mb-slted-cont1 li#" + tmp_id_no_check[j]).closest('.mb-slted-cont1').removeClass('show');
      }
    }
  }
  //打勾的加入陣列
  if (tmp_data_name_check.length > 0) {
    for (var i = 0; i < tmp_data_name_check.length; i++) {
      tmp_id_check.push($(tmp_data_name_check[i]).attr('data-name'));
    }
    //放入陣列依序讀出來轉ID
    for (var j = 0; j < tmp_id_check.length; j++) {
      //因為有打勾所以一定會顯示，因此他的父原素和部門名稱一定要顯示
      $(".mb-slted-cont1 li#" + tmp_id_check[j]).addClass("show");
      $(".mb-slted-cont1 li#" + tmp_id_check[j]).closest('.mb-slted-cont1').prev('.mb-slted-group1').addClass('show');
      $(".mb-slted-cont1 li#" + tmp_id_check[j]).closest('.mb-slted-cont1').addClass('show');
    }

  }

  mbSelectedStyleNew();
}

var selectPersonType = '';
$(document).ready(function () {
  selectPersonType = $('input[name="f_listseq"]:checked').val();
  //全部開合樣式判斷
  function mbSelectedAllSw() {
    var mbGroupSwNum = $(".mb-group-sw").length,
      mbGroupSwActiveNum = $(".mb-group-sw.active").length;
    if (mbGroupSwNum == mbGroupSwActiveNum) {
      $(".mb-all-sw").addClass("active");
    } else {
      $(".mb-all-sw").removeClass("active");
    }
  }

  //補齊空白欄位
  var mbContName = $('.mb-cont-name').parent();
  $(mbContName).each(function () {
    var quantity = $(this).children('.mb-cont-name').length;
    var remainder = quantity % 4;
    var newBlank = '';
    if (remainder != 0) {
      for (var i = 4; i > remainder; i--) {
        newBlank += '<div class="blank-cb">&nbsp;</div><div class="blank-name">&nbsp;</div>';
      }
      if ($(this).children('.mb-group').length > 0) {
        $(this).children('.mb-group:eq(0)').before(newBlank);
      } else {
        $(this).append(newBlank);
      }
    }
  });

  //已選收人員開合
  $('.mb-slted-sw').click(function () {
    $(this).toggleClass('active');
    $('.mb-slted').toggleClass('active');
    mbSelectedStyleNew();
  });

  //全部開合
  $(".mb-all-sw,.mb-all-name").click(function () {
    $(".mb-all-sw").toggleClass("active");
    if ($(".mb-all-sw").hasClass("active")) {
      $(".mb-cont").addClass("mb-show");
      $(".mb-group-sw").addClass("active");
    } else {
      $(".mb-cont").removeClass("mb-show");
      $(".mb-group-sw").removeClass("active");
    }
  });

  //各層開合
  $(".mb-group-sw").click(function () {
    $(this).toggleClass("active");
    $(this).parent().next(".mb-cont").toggleClass("mb-show");
    if ($(this).parent().next(".mb-cont").find('.mb-group').length == 0) {
      $(this).parent().next().find(".mb-cont").toggleClass("mb-show");
    }
    mbSelectedAllSw();
  });
  $(".mb-group-name").click(function () {
    $(this).prev(".mb-group-sw").toggleClass("active");
    $(this).parent().next(".mb-cont").toggleClass("mb-show");
    if ($(this).parent().next(".mb-cont").find('.mb-group').length == 0) {
      $(this).parent().next().find(".mb-cont").toggleClass("mb-show");
    }
    mbSelectedAllSw();
  });

  /* 載入時需要每一個都跑一次，造成效能問題，所以將此寫法註解，若有預設勾起來的值，改由PHP直接顯示相對應內容
  $('input[data-group]').each(function() {
      if ($(this).is(":checked")) {
          var nameId = '#' + $(this).attr('data-name');   //取得id
          $(nameId).css('display','inline-block');        //顯示相對應id人員資料
          $(nameId).parents('.mb-slted-cont1').prev('.mb-slted-group1').addClass('show');  //顯示部門名稱
          $(nameId).parents('.mb-slted-cont1').addClass('show');                           //顯示人員群組
      }
      groupChecked($(this),'loading');
  }); */

  //點擊時
  $('input[data-group]').change(function () {
    inputDataGroupChange($(this));
  });

  //刪除已選擇人員
  $('.mb-slted-cont1 li span').click(function () {
    var liNameId = $(this).parent().attr("id");                      //取得id
    $(this).parent().removeClass("show");                            //隱藏自己
    $('input[data-name="' + liNameId + '"]').prop('checked', false); //取消勾取自己
    //直到最後一個後刪除時，隱藏部門名稱及人員群組
    if ($(this).parent().siblings(":visible").length == 0) {
      $(this).parents('.mb-slted-cont1').prev('.mb-slted-group1').removeClass('show');
      $(this).parents('.mb-slted-cont1').removeClass('show');
      mbSelectedStyleNew();
    }
    groupChecked($('input[data-name="' + liNameId + '"]'), 'using'); //向上確認部門取消勾選
    mbSelectedNumNew();
  });

  mbSelectedStyleNew();
  mbSelectedNumNew();
});
(function ($) {
  //各種方法區
  var methods = {
    //打開彈跳視窗
    init: function (options) {
      clearTimeout(functionMethods.timeout); //需清除如果有設定自動關閉時間
      //都沒填就不行
      if (options === undefined) {
        console.error('訊息彈跳視窗:請檢查參數是否有填');
        return;
      }

      //檢查參數是否有輸入
      if (functionMethods.checkParameter(options) == false) {
        console.error('訊息彈跳視窗:請檢查參數content是否有填');
        return;
      }
      //檢查shade、dilog-all是否存在
      if (functionMethods.checkDialogHtml() == false) {
        console.error(
          '訊息彈跳視窗:請檢查shade、dialog-all元素是否在畫面上'
        );
        return;
      }
      //預設值設定
      var settings = $.extend(
        {
          id: 'msg' + Date.now().toString(),
          customContent: '',//客製化欄位DEMO使用{text:'測試',type:'E'}
          width: 300,
          ajaxUrl: './ajax_server/msgDialog_ajax.php',
          replaceObj: {},
          sysName: ''
        },
        options
      );

      functionMethods.settings = settings;
      //如果有寫客製化欄位在處理
      if (settings.customContent !== '') {
        var text = settings.customContent.text;
        var type = settings.customContent.type;
        functionMethods.creatContent(text, type);
        //產生彈跳視窗加入至畫面
        var boxHtml = functionMethods.creatHtml();
        functionMethods.addView(boxHtml);

        //綁定彈跳視窗的按鈕事件
        functionMethods.bindBtnEvent();

        //彈跳視窗畫面調整(防止彈跳視窗大小亂設定)
        functionMethods.adjustView();

        //如果有設定幾秒內關閉
        functionMethods.timeoutProcess();

        //畫面resize彈跳視窗畫面處理
        endResize();
        startResize();
        return;
      } else {
        //ajax版本
        var whenResult = $.when(functionMethods.getMsgAjax());
        whenResult.done(function (response) {
          var text = response.msgContent;
          var type = response.msgType;
          //查不到資料
          if (text === '') {
            console.error(
              '填入的訊息編號有誤，搜尋不到對應的訊息編號資料'
            );
            return;
          }
          functionMethods.creatContent(text, type);
          //產生彈跳視窗加入至畫面
          var boxHtml = functionMethods.creatHtml();
          functionMethods.addView(boxHtml);

          //綁定彈跳視窗的按鈕事件
          functionMethods.bindBtnEvent();

          //彈跳視窗畫面調整(防止彈跳視窗大小亂設定)
          functionMethods.adjustView();

          //如果有設定幾秒內關閉
          functionMethods.timeoutProcess();
        });
        whenResult.fail(function () {
          console.error('ajax連線失敗');
          //函數內容略
        });
        //畫面resize彈跳視窗畫面處理
        endResize();
        startResize();
        return;
      }





      function startResize() {
        $(window).on('resize.mymethod', function () {
          if (
            $('.dialog-all').css('display') == 'block' ||
            $('.dialog-all').css('display') == 'flex'
          ) {
            functionMethods.adjustView();
          }
        });
      }

      function endResize() {
        //防止重複綁定，
        $(window).off('resize.mymethod');
      }
    },
    //刪除彈跳視窗
    remove: function (id) {
      if ($('#' + id).length === 0) {
        return;
      }
      //關閉彈跳視窗就刪除
      $('#' + id).remove();
      functionMethods.removeView();
    },
  };
  //功能事件
  var functionMethods = {
    settings: {}, //帶入的參數
    timeout: '',
    //確認存放訊息資訊的input是否存在且有值
    checkMsgData: function () {
      if ($('#all_msg_data').length == 0) {
        return false;
      }
      if (JSON.parse($('#all_msg_data').val()) === undefined) {
        return false;
      }
      return true;
    },
    //檢查必要參數是否有填
    checkParameter: function (options) {
      //檢查是否有設定內容
      var checkArr = [options['content']];

      var answer = checkArr.every(function (item, index, array) {
        return item !== undefined;
      });

      return answer;
    },
    //檢查shade及dialog是否都存在
    checkDialogHtml: function () {
      var checkArr = [$('.shade').length, $('.dialog-all').length];
      var answer = checkArr.every(function (item, index, array) {
        return item !== 0;
      });
      return answer;
    },
    getMsgAjax: function () {
      var settings = this.settings;
      var url = settings.ajaxUrl;
      return $.ajax({
        type: 'POST',
        url: url,
        data: {
          msgParms: {
            msgNum: settings.content,
            replaceObj: settings.replaceObj,
            sysName: settings.sysName,
          },
        },
        dataType: 'json',
        success: function (response) { },
        error: function (thrownError) {
        },
      });


    },
    //帶入訊息檔內容
    creatContent: function (text, type) {
      //將代入的訊息檔的數字轉換為內容
      var settings = this.settings;
      var text = text;
      var type = type;
      if (text === '' || text === undefined) {
        return;
      }

      var type = type.toLowerCase();

      settings.showText = text;
      settings.type = getType(type);

      function getType(type) {
        var newType;
        //判斷哪種型態的訊息視窗
        switch (type) {
          case 'e':
            newType = 'error';
            break;
          case 'w':
            newType = 'warning';
            break;
          case 'r':
            newType = 'remind';
            break;
          case 'q':
            newType = 'query';
            break;
          case 's':
            newType = 'success';
            break;
          default:
            break;
        }
        return newType;
      }
    },
    //產生彈跳視窗HTML
    creatHtml: function () {
      var settings = this.settings;
      var dialogId = settings.id;
      var content = settings.showText;
      var type = settings.type;
      var width = settings.width;
      var customsBtn = settings.customsBtn;

      //彈跳視窗內容
      var dialogBodyHtml = [
        '<div class="msg-icon-' + type + '"></div>',
        '<div class="msg-content">' + content + '</div>',
      ].join('');

      //彈跳視窗按鈕HTML處理
      var dialogBtnHtml = (function () {
        if (customsBtn !== undefined) {
          var btnAllhtml = ['<div class="dialog-btn">'];
          var btnHtml = customsBtn.map(function (item, index, array) {
            var btnId = dialogId + '-btn' + index;
            var classStr = item.class || '';
            var btnName = item.name || '';
            var val = item.val;
            return (
              '<input id="' +
              btnId +
              '" class="' +
              classStr +
              '" name="' +
              btnName +
              '" type="button" value="' +
              val +
              '">&nbsp'
            );
          });
          btnAllhtml = btnAllhtml.concat(btnHtml);

          btnAllhtml.push('</div>');
          return btnAllhtml.join('');
        } else {
          return [
            '<div class="dialog-btn">',
            '<input type="button" onclick="$.FRAMEWORK_msgDialog(\'remove\',\'' +
            dialogId +
            '\')" value="關　閉">',
            '</div>',
          ].join('');
        }
      })();

      var dialogAllHtml = [
        '<div class="dialog" id="' +
        dialogId +
        '" style="display: block; width:' +
        width +
        'px;">',
        dialogBodyHtml,
        dialogBtnHtml,
        '</div>',
      ];
      return dialogAllHtml.join('');
    },
    //客製按鈕綁定Click事件
    bindBtnEvent: function () {
      var settings = this.settings;
      var dialogId = settings.id;
      var customsBtn = settings.customsBtn;
      if (customsBtn === undefined) {
        return;
      }
      customsBtn.forEach(function (item, index, array) {
        if (item.btnEvent === undefined) {
          return;
        }
        var btnId = dialogId + '-btn' + index;
        //綁定事件
        $('#' + btnId)
          .off(btnId)
          .on('click.' + btnId, item.btnEvent);
      });
    },
    //新增彈跳視窗畫面處理
    addView: function (html) {
      var dialogAll = $('.dialog-all');
      var shade = $('.shade');
      dialogAll.append(html).css({
        display: 'flex',
        zIndex: '1050',
      });
      //使用共用的打開遮罩方法
      if (system_shade !== undefined) {
        system_shade.shade('open', 'dialog');
      } else {
        shade.removeClass('hide');
        shade.css({
          zIndex: '1049',
        });
      }
    },
    //移除彈跳視窗畫面處理
    removeView: function () {
      var dialogAll = $('.dialog-all');
      var shade = $('.shade');
      dialogAll.css({
        display: 'none',
        zIndex: '',
      });
      if (system_shade !== undefined) {
        system_shade.shade('close', 'dialog');
      } else {
        shade.addClass('hide');
        shade.css({
          zIndex: '',
        });
      }
      //關閉後清除設定
      this.settings = {};
    },
    //判斷如果使用者輸入的寬度大於視窗寬，和彈跳視窗高度大於dialog-all的應對機制
    adjustView: function () {
      var settings = this.settings;
      var id = settings.id;
      if (id === undefined) {
        return;
      }
      var $dialog = $('#' + id);
      var $dialogAll = $('.dialog-all');
      var dialogWidth = settings.width;
      var dialogHeight = parseInt($dialog.height());
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;


      if ($dialog.length === 0) {
        return;
      }


      if (dialogWidth > windowWidth) {
        $dialog.css({
          width: 'calc(100% - 40px)',
        });
      } else {
        //這會發生在resize 回復到原本大小的情況下
        $dialog.css({
          width: dialogWidth,
        });
      }

      if (dialogHeight > windowHeight) {
        $dialogAll.css({
          display: 'block',
        });
        $dialog.css({
          margin: '20px auto',
        });
      } else {
        $dialogAll.css({
          display: 'flex',
        });
        $dialog.css({
          margin: '',
        });
      }
    },
    timeoutProcess: function () {
      var settings = this.settings;
      //如果有設定幾秒內關閉
      if (settings.setCloseTime !== undefined) {
        var num = parseInt(settings.setCloseTime);
        if (isNaN(num)) {
          return;
        }

        this.timeout = setTimeout(function () {
          $.FRAMEWORK_msgDialog('remove', settings.id);
        }, num);
      }
    }
  };

  $.extend({
    FRAMEWORK_msgDialog: function (method) {
      if (methods[method]) {
        //以remove為例子，這邊的argument會帶進remove、跟ID，因此下面數值是1就只會帶入ID這個參數進去function
        return methods[method].apply(
          this,
          Array.prototype.slice.call(arguments, 1)
        );
      } else if (typeof method === 'object' || !method) {
        return methods.init.apply(this, arguments);
      } else {
        $.error('找不到方法');
      }
    },
  });
})(jQuery);

//TODO:測試千分位功能步驟
//1.禁止輸入英文、中文、特殊符號(小數點跟負號除外)
//2.刪除千分位"，"時會跳過"，"並刪除旁邊的數字
//3.如果限制到小數第2位，輸入小數點會自動限制小數的輸入個數123456->1.23
//4.在開頭輸入小數點會自動補0 例如123->0.123
//5.如果整數是0刪除小數點會自動把0去除 例如:0.123->123
//6.如果小數點後面有0，離開輸入框焦點後會自動把0去除 例如0.123000->0.123
//7.如果只有打小數點並馬上離開輸入框焦點，輸入框會自動去除小數點 例如0.->0
//8.如果刪除小數點的0，會把小數點也一併刪除
//9.如果沒限制正數在任何地方打負號，前面會自動補負號
//10.如果輸入框沒有數字時，如果只輸入負號並離開焦點，輸入框的負號會被刪除
//限制:
//1.如果開頭已經有數字，開頭位置禁止輸入0，如果想登打小數點必須在開頭位置打小數點即可自動補0


var money_format_save_key = {};
money_format_save_key.is_special = false;
/**
 *
 *
 * @param {*} ele 帶入的元素
 */
function setNumFormat(ele) {
  var ele = ele;

  ele.each(function (index, element) {
    var ele = $(this);
    //抓HTML元素設定的參數
    var money_format_str = ele.attr('data-numformat');
    money_format_arr = money_format_str.split(',');
    //TODO:參數解釋:[0]是否強制正數 true false  [1]是否加入千分 [2]小數點第幾位
    var params = {
      is_positive: money_format_arr[0],
      is_thousand_format: money_format_arr[1],
      decimal_num: money_format_arr[2],
    };
    var new_money_format = new money_format(params);
    var tmp_val = $(this).val();
    var tmp_ele = $(this);
    new_money_format.get_rule(tmp_ele, tmp_val);
    var is_del = true;

    $(this).on({
      keyup: function (e) {
        //TODO:KEYUP
        //複製貼上的話也會跑這段
        var tmp_val = $(this).val();
        var tmp_ele = $(this);
        //開關打開才能使用千分位
        if (is_del == true) {
          new_money_format.get_rule(tmp_ele, tmp_val);
        }
      },
      keydown: function (e) {
        //TODO:KEYDOWN
        var textObj = $(this).get(0); //ele
        var rangeStart = textObj.selectionStart;
        var rangeEnd = textObj.selectionEnd;
        //光標前的數字
        var prev_del_val = textObj.value.substring(rangeStart - 1, rangeStart);
        //光標後的數字
        var after_del_val = textObj.value.substring(rangeStart, rangeStart + 1);
        //光標前前的數字
        var prev_prev_val = textObj.value.substring(
          rangeStart - 2,
          rangeStart - 1
        );
        //光標後後的數字
        var after_after_del_val = textObj.value.substring(
          rangeStart + 1,
          rangeStart + 2
        );
        is_del = true; //預設值
        ///////
        money_format_save_key.prev_del_val = prev_del_val;
        money_format_save_key.after_del_val = after_del_val;
        money_format_save_key.prev_prev_val = prev_prev_val;
        money_format_save_key.after_after_del_val = after_after_del_val;
        var key = event.keyCode || event.charCode;
        switch (key) {
          //倒退按鈕
          case 8:
            //按倒退按鈕帶入前面的數字去判斷開關
            is_del = get_method(prev_del_val, key);
            
            //is_del回傳false才代表要特殊處理
            if (is_del == false) {
              var tmp_target = [',', '.', '-'];
              //如果找到的不是符號，就改成"*"代表是數字的意思
              if (tmp_target.indexOf(prev_del_val) == -1) {
                prev_del_val = '*';
              }
              position_get_method(
                $(this),
                'back',
                prev_del_val,
                after_del_val,
                e
              );
              //特殊處理完後才給過
              is_del = true;
            }
            break;
          //del
          case 46:
            //按del按鈕帶入後面的數字去判斷開關
            is_del = get_method(after_del_val, key);
            //is_del回傳false才代表要特殊處理
            if (is_del == false) {
              var tmp_target = [',', '.', '-'];
              //如果找到的不是符號，就改成"*"代表是數字的意思
              if (tmp_target.indexOf(after_del_val) == -1) {
                after_del_val = '*';
              }
              position_get_method(
                $(this),
                'del',
                prev_del_val,
                after_del_val,
                e
              );
              //跳過逗號刪除完後才能打開開關
              is_del = true;
            }
            break;
          default:
            break;
        }

        function get_method(target, key) {
          // return true;
          var tmp_target = [',', 0];
          if (tmp_target.indexOf(target) == -1) {
            target = '*';
          }
          var dayType = {
            ',': function () {
              //有找到，
              return false;
            },
            0: function () {
              //如果位置在地0個例如0.1235
              //或是負數的-0.1235
              if (rangeStart == 0) {
                return false;
              } else if (rangeStart == 1 && prev_del_val == '-') {
                return false;
              } else if (rangeStart == 1 && prev_del_val == '0') {
                return false;
              } else if (rangeStart == 2 && prev_del_val == '0') {
                return false;
              } else {
                return true;
              }
            },
            '*': function () {
              var str = textObj.value;
              var is_minus = str.indexOf('-');
              switch (key) {
                //按下倒退按鈕
                case 8:
                  //負數
                  if (is_minus !== -1) {
                    //用光標往前刪除，刪除數字前前面是負號，且光標後面是小數點
                    if (prev_prev_val == '-' && after_del_val == '.') {
                      //EX=-1"起始點".123
                      return false;
                    } else {
                      return true;
                    }
                  } else {
                    //正數
                    //如果是正數前前數值就是''空，光標後面是小數點
                    //EX=1"起始點".123
                    if (prev_prev_val == '' && after_del_val == '.') {
                      return false;
                    } else {
                      return true;
                    }
                  }
                  break;
                case 46:
                  //按下del從前面刪
                  //是負數
                  if (is_minus !== -1) {
                    //如果後後數值是小數點前面為負號;
                    //EX=-"起始點"1.123
                    if (prev_del_val == '-' && after_after_del_val == '.') {
                      return false;
                    } else {
                      return true;
                    }
                  } else {
                    //正數
                    //如果前數字是空，且後後數值為小數點
                    //EX="起始點"1.123
                    if (prev_del_val == '' && after_after_del_val == '.') {
                      return false;
                    } else {
                      return true;
                    }
                  }
                  break;
                default:
                  break;
              }
            },
          };
          if (dayType[target] !== undefined) {
            return dayType[target]();
          } else {
            //沒對應到判斷方法都要執行千分
            return true;
          }
        }
        //光標特殊處理
        function position_get_method(ele, key, prev_del_val, after_del_val, e) {
          //"*"帶入的都是數字
          switch (key) {
            case 'back':
              var tmp_data = {
                '*': function () {
                  //遇到數字要確認後面是不是小數點
                  //判斷光標後面數值是不是小數點，是的話才執行
                  if (after_del_val !== '.') {
                    return false;
                  }
                  var del_start_position = rangeStart;
                  e.preventDefault();
                  var str = ele.val();
                  var is_minus = str.indexOf('-');
                  var decimal_pos = str.indexOf('.');
                  var right_side = str.substring(decimal_pos + 1);
                  //如果是負數
                  if (is_minus !== -1) {
                    str = '-' + right_side;
                  } else {
                    str = right_side;
                  }
                  ele.val(str);
                  ele[0].setSelectionRange(
                    del_start_position - 1,
                    del_start_position - 1
                  );
                  money_format_save_key.is_special = true;
                },
                ',': function () {
                  //跳過逗號的位置
                  var backspace_position = rangeStart - 1;
                  e.preventDefault();
                  //跳過逗號移動光標
                  // ele[0].setSelectionRange(
                  //   backspace_position,
                  //   backspace_position
                  // );
                  var str = ele.val();
                  //刪除光標前的數字
                  str =
                    str.substring(0, backspace_position - 1) +
                    str.substring(backspace_position, str.length);
                  ele.val(str);
                  //重新給光標，因為已經刪除一個字要-1
                  ele[0].setSelectionRange(
                    backspace_position - 1,
                    backspace_position - 1
                  );
                },
              };
              return tmp_data[prev_del_val]();
              break;
            case 'del':
              var tmp_data = {
                ',': function () {
                  var del_start_position = rangeStart + 1;
                  e.preventDefault();
                  //跳過逗號
                  ele[0].setSelectionRange(
                    del_start_position,
                    del_start_position
                  );
                  var str = ele.val();
                  //刪除逗號前面的字
                  str =
                    str.substring(0, del_start_position) +
                    str.substring(del_start_position + 1, str.length);
                  //填回去input欄位
                  ele.val(str);
                  //重新給光標
                  ele[0].setSelectionRange(
                    del_start_position,
                    del_start_position
                  );
                },
                '*': function () {
                  //刪除0.12345中的"0."
                  //判斷光標後面數值是不是小數點，是的話才執行
                  if (after_after_del_val !== '.') {
                    return false;
                  }
                  var del_start_position = rangeStart;
                  e.preventDefault();
                  var str = ele.val();
                  var is_minus = str.indexOf('-');
                  var decimal_pos = str.indexOf('.');
                  var right_side = str.substring(decimal_pos + 1);
                  if (is_minus !== -1) {
                    str = '-' + right_side;
                  } else {
                    str = right_side;
                  }
                  ele.val(str);
                  ele[0].setSelectionRange(
                    del_start_position,
                    del_start_position
                  );
                  money_format_save_key.is_special = true;
                },
              };
              return tmp_data[after_del_val]();
              break;
            default:
              break;
          }
        }
      },
      blur: function () {
        //TODO:KEYDOWN
        var tmp_val = $(this).val();
        var tmp_ele = $(this);
        new_money_format.get_rule(tmp_ele, tmp_val, true);
      },
    });
  });
}

/**
 *
 *
 * @param {*} is_positive 是否強制正數 true false
 * @param {*} is_thousand_format 是否加入 千分格式 true false
 * @param {*} decimal_num 可輸入1、2、3、4以此類推輸入數字多少就是取到第幾位
 */
function money_format(params) {
  this.params = params;
  this.raw_val;
  this.is_positive = JSON.parse(params.is_positive); //是否為正數
  this.is_thousand_format = JSON.parse(params.is_thousand_format); //是否加入千分位格式
  this.decimal_num = parseInt(params.decimal_num); //取到小數點第幾位
  this.save_val; //儲存數字
  this.right_side_num; //小數點右邊
  this.original_len; //從中間刪除會用到-原始長度
  this.raw_creat_pos; //從中間刪除會用到-原始creat
}
//ele帶入的元素、val為元素的值、是否是blur事件
money_format.prototype.get_rule = function (ele, val, blur) {
  var format = this;
  var is_positive = format.is_positive;
  var is_thousand_format = format.is_thousand_format;
  var decimal_num = format.decimal_num;
  var is_blur = blur;
  var is_decimal;
  format.raw_val = val; //原始數值
  format.original_len = val.length; //從中間刪除會用到-原始長度*
  format.raw_caret_pos = ele.prop('selectionStart'); //從中間刪除會用到-原始

  //TODO:確認是否包含負數
  var check_is_positive = format.check_is_positive(val);

  //TODO:先把數字存進去
  format.save_num_event(val);
  //TODO:判斷有小數點先左右切割
  if (decimal_num !== 0) {
    is_decimal = format.is_decimal();
  } else {
    is_decimal = false;
  }

  //TODO:防止數字前面為0
  format.prevent_first_num_is_zero();

  //TODO:格式化符號
  format.positive_format();

  //TODO:是否加入千分位格式
  if (is_thousand_format) {
    format.thousand_format();
  }

  //TODO:blur事件 
  if (is_blur) {
    //如果小數點的數字尾數是0要刪除;
    format.blur_decimal_format();
  }

  //TODO:取道小數第幾位，有小數點才會進去
  if (decimal_num !== 0 && is_decimal) {
    format.decimal_format();
  }

  //TODO:如果可以容納負數，負數的補"-"處理
  if (!is_positive && check_is_positive) {
    format.negative_format();
  }
  //TODO:blur事件判斷
  if (is_blur) {
    //如果輸入框只有輸入"-"要刪除
    format.blur_basic_format();
    //判斷小數點後面如果是空的就移除小數點
    format.blur_dot_format();
  }
  //TODO:把數字讀出來顯示(放回輸入框)
  format.load_num_event(ele);
  //TODO:位置處理(如果從中間刪除數字要跑這段)，沒有焦點時不處理
  if (!is_blur) {
    format.set_input_select_position(ele);
  }
  //TODO:存到input hidden 裡面
  format.save_input_hidden(ele);
};
//防止第一個數字為0
money_format.prototype.prevent_first_num_is_zero = function () {
  var format = this;
  var tmp_val = format.save_val.replace('-', '');
  //這邊小數點不會被計算進來，因為前面已經切割了
  //長度大於一且第一個數字不是"-"
  if (tmp_val.length >= 2) {
    tmp_val = tmp_val.replace(/\D/g, '');
    tmp_val = tmp_val.replace(/^0/g, '');
    var zero_last_index;
    for (let index = 0; index < tmp_val.length; index++) {
      //從第0個開始找沒找到就跳出，因此會得到連續的最後一個的位置
      if (tmp_val[index] == 0) {
        zero_last_index = index;
      } else {
        break;
      }
    }
    //將開頭數字0擷取至連續0的最後一個數字，例如:00000，並轉數字判斷是否為0，如果是0的話就刪除，就可防止數字前面為0
    if (Number(tmp_val.substring(0, zero_last_index) == 0)) {
      tmp_val = tmp_val.replace(tmp_val.substring(0, zero_last_index + 1), '');
    }
    tmp_val = String(tmp_val);
    format.save_val = tmp_val;
  }

};
//正數千分位
money_format.prototype.thousand_format = function () {
  var format = this;
  var tmp_val = format.save_val;

  // format number 1000000 to 1,234,567
  tmp_val = tmp_val.replace(/\D/g, '');

  var after_str = tmp_val.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  format.save_val = after_str;
};
//正數純數字
money_format.prototype.positive_format = function () {
  // format number 1000000 to 1,234,567
  var format = this;
  var tmp_val = format.save_val;

  var right_side = format.right_side;
  if (right_side !== undefined) {
    right_side = right_side.replace(/\D/g, '');
    format.right_side = right_side;
  }
  var after_str = tmp_val.replace(/\D/g, ''); //排除數字以外的東西
  format.save_val = after_str;

};
//確認是否為小數點
money_format.prototype.is_decimal = function () {
  var format = this;
  var tmp_val = format.save_val;
  var decimal_pos = tmp_val.indexOf('.');
  tmp_val = tmp_val.replace('-', '');
  var right_side;
  if (decimal_pos !== -1) {
    right_side = tmp_val.substring(decimal_pos);
    format.save_val = tmp_val.substring(0, decimal_pos).replace(/\D/g, '');
    format.right_side = right_side;
    return true;
  } else {
    return false;
  }



};
//小數點格式
money_format.prototype.decimal_format = function () {
  var format = this;
  var tmp_val = format.save_val; //左邊
  var decimal_num = format.decimal_num;
  var right_side = format.right_side //小數點右邊

  if (decimal_num !== 0 && tmp_val !== '') {
    right_side = right_side.substring(0, decimal_num);

    var total = tmp_val + '.' + right_side;
    format.save_val = total;
  } else {
    //前面空值所以左邊補0
    right_side = right_side.substring(0, decimal_num);
    format.save_val = 0 + '.' + right_side;
  }
};

//確認是否包含負數
money_format.prototype.check_is_positive = function (val) {
  if (val.indexOf('-') !== -1) {
    return true;
  } else {
    return false;
  }
};
//如果有負數加入"-"
money_format.prototype.negative_format = function () {
  var format = this;
  var tmp_val = format.save_val;
  tmp_val = '-' + tmp_val;
  format.save_val = tmp_val;
};
//把數字存進去
money_format.prototype.save_num_event = function (val) {
  var format = this;

  format.save_val = val;
};
//把數字顯示出來
money_format.prototype.load_num_event = function (ele) {
  var format = this;
  ele.val(format.save_val);
};
/////////////blur事件///////////////////
//小數點格式、如果小數點的數字尾數是0要刪除
money_format.prototype.blur_decimal_format = function () {
  var format = this;
  var decimal_num = format.decimal_num;
  var tmp_val = format.right_side || '';
  var tmp_after_val = format.right_side;
  if (tmp_val == '') {
    return false;
  }
  tmp_val = tmp_val.split('').reverse().join('');
  for (var index = 0; index < tmp_val.length; index++) {
    if (tmp_val[index] == 0) {
      //要刪除當下的"0"
      tmp_after_val = tmp_val.substring(index + 1);
      //處理完後反轉回來
      tmp_after_val = tmp_after_val.split('').reverse().join('');
    } else {
      break;
    }
  }

  format.right_side = tmp_after_val;
};
//blur 基本格式化 如果他只輸入一個字且為符號就刪除
money_format.prototype.blur_basic_format = function () {
  var format = this;
  var tmp_val = format.save_val;
  //判斷輸入的符號後面是不是數字
  var regex = new RegExp(/^(\-|\.)?\d/);
  if (tmp_val.length == 1) {
    //長度>1在判斷，因為允許輸入一個符號ex:"-"、"."
    if (!regex.test(tmp_val)) {
      format.save_val = "";
    }
  }
  if (tmp_val.indexOf('-') !== -1) {
    is_tmp_val = tmp_val.replace('-', '');
    if (parseFloat(is_tmp_val) == 0) {
      format.save_val = is_tmp_val;
    }
  }
};
//離開焦點判斷小數點後面如果是空的就移除小數點
money_format.prototype.blur_dot_format = function () {
  var format = this;
  var tmp_val = format.save_val;
  var dot_index = tmp_val.indexOf('.');
  //判斷如果小數點是這個字串的最後一個字就刪除小數點
  if (dot_index + 1 == tmp_val.length) {
    tmp_val = tmp_val.replace('.', '');
    format.save_val = tmp_val;
  }
};
//光標位置處理
money_format.prototype.set_input_select_position = function (ele) {
  var format = this;
  var updated_len = ele.val().length;
  //計算逗號的次數
  var count = ele.val().split(",").length - 1;
  //原理就是輸入完後的長度 - 原始資料長度 = 這次新增的長度
  //新增的長度 + 原始光標位置，就可以算出目前光標的位置
  var caret_pos = updated_len - format.original_len + format.raw_caret_pos;
  //如果算出來的結果是負數就回到初始位置
  if (
    caret_pos < 0 ||
    updated_len - format.original_len < 0 ||
    updated_len - format.original_len > 0
  ) {
    //更新後長度 - 原始資料長度如果是"負數"且結果也小於"原始位置"就給原始資料位置
    //這個情況會是給小數點的時候，因為有限制小數位數因此長度會有限制
    if (
      updated_len - format.original_len < 0
    ) {
      //1657921->16.579
      caret_pos = format.raw_caret_pos;
    }
    if (caret_pos < 0) {
      caret_pos = 0;
    }
  }
  //如果位置是0 就判斷第一個數字是不是負號，是的話就跳到負號後面
  if (caret_pos == 0) {
    var pos_zero_val = ele
      .val()
      .substring(format.raw_caret_pos - 1, format.raw_caret_pos);
    if (pos_zero_val == '-') {
      caret_pos = 1;
    }
  }
  if (money_format_save_key.is_special == true) {
    caret_pos = format.raw_caret_pos;
    money_format_save_key.is_special = false;
  }
  ele[0].setSelectionRange(caret_pos, caret_pos);
};
//去除","，和小數點處理，並存回去hidden欄位
money_format.prototype.save_input_hidden = function (ele) {
  var raw_val = ele.val();
  var hide_input = ele.next('input');
  if (hide_input.length > 0) {
    var final_val = raw_val.replace(/,/g, '');
    var dot_index = final_val.indexOf('.');
    if (dot_index !== -1) {
      //如果有小數點的處理
      var right_side = final_val.substring(dot_index + 1);
      if (parseInt(right_side) == 0 && right_side !== '') {
        //如果小數點後面都是0就捨棄後面小數點
        final_val = final_val.replace('.' + right_side, '');
      } else {
        //如果小數點尾八是0要去掉
        for (var i = 0; i < right_side.length; i++) {
          final_val = final_val.replace(/0$/, '');
        }
      }

    }
    hide_input.val(final_val);
  }
}


/**4捨5入整數和小數處理
 *
 * @param {*} val 代入的數字
 * @param {*} num 取到第幾位
 * @param {*} type 整數或是小數 integer || decimal
 */
function number_rounding(val, num, type) {
  if (type == 'integer') {
    return (
      Math.round(val / Math.pow(10, (num || 0) - 1)) *
      Math.pow(10, (num || 0) - 1)
    );
  } else if (type == 'decimal') {
    return (
      Math.round(Math.round(val * Math.pow(10, (num || 0) + 1)) / 10) /
      Math.pow(10, num || 0)
    );
  }
}

$(document).ready(function () {
  setNumFormat($('.num-format'));
});

$(document).ready(function () {
  var frame_height;
  var frame_width = $(".help-iframe").width();
  /***改變iframe高度***/
  var set_iframe = function () {
    $(".help-iframe").each(function () {
      frame_height = $(this).contents().find("body").height();
      $(this).height(frame_height);
    });
  };

  /***讀取完資料後改變ifrme大小***/
  setTimeout(function () {
    $(window).on("load", function () {
      set_iframe();
    });
  }, 100);

  /***iframe內點擊事件觸發後改變iframe大小***/
  $(window).on("load", function () {
    $(".help-iframe").contents().click(function () {
      $(window).on("load", function () {
        set_iframe();
      });
    });
  });

  /***讀取完資料後改變ifrme大小***/
  var ww = $(window).width();
  $(window).resize(function () {
    if (ww != $(window).width()) {
      setTimeout(function () {
        $(window).on("load", function () {
          set_iframe();
        });
      }, 1);
      ww = $(window).width();
    }
  });
});

//隱藏顯示開關
$(document).ready(function () {
  $('.help-switch-btn').click(function () {
    $(this).parent('.ins-title').toggleClass('content-open');
    var id = $(this).attr("id");
    var id_num = id.substr(10);
    $('#switch-content' + id_num).toggleClass('switch-content-show');
  });
});

$(document).ready(function () {
  //已選擇筆數
  function pickedNum() {
    //抓取已勾選數量
    var pickedAmount = $('.picked-cont tbody tr').length;
    //寫入數量
    $('.picked-area').find('span').text(pickedAmount);
  }

  //判斷未選擇區是否全部都已勾選
  function pickCheckboxNum() {
    var pickCheckboxAmount = $('.pick-cont tbody input[type="checkbox"]').length,
      pickCheckboxedAmount = $('.pick-cont tbody input[type="checkbox"]:checked').length;
    if (pickCheckboxAmount == pickCheckboxedAmount && pickCheckboxAmount != 0) {
      $('.pick-cont .cb-pick-all').prop('checked', true);
    } else {
      $('.pick-cont .cb-pick-all').prop('checked', false);
    }

    if (pickCheckboxedAmount > 0) {
      $('.pick-btn').prop('disabled', false);
    } else {
      $('.pick-btn').prop('disabled', true);
    }
  }

  //判斷已選擇區是否全部都已勾選
  function pickedCheckboxNum() {
    var pickedCheckboxAmount = $('.picked-cont tbody input[type="checkbox"]').length,
      pickedCheckboxedAmount = $('.picked-cont tbody input[type="checkbox"]:checked').length;
    if (pickedCheckboxAmount == pickedCheckboxedAmount && pickedCheckboxAmount != 0) {
      $('.picked-cont .cb-pick-all').prop('checked', true);
    } else {
      $('.picked-cont .cb-pick-all').prop('checked', false);
    }

    if (pickedCheckboxedAmount > 0) {
      $('.cancel-pick-btn').prop('disabled', false);
    } else {
      $('.cancel-pick-btn').prop('disabled', true);
    }
  }

  //判斷顯示已選擇或未選擇區
  function pickShow() {
    if ($('input[name="pick-rd"]:eq(0)').prop('checked') == true) {
      $('.pick-cont,.picked-area input[type="button"]:eq(0)').removeClass('hide');
      $('.picked-cont,.picked-area input[type="button"]:eq(1)').addClass('hide');
    } else {
      $('.pick-cont,.picked-area input[type="button"]:eq(0)').addClass('hide');
      $('.picked-cont,.picked-area input[type="button"]:eq(1)').removeClass('hide');
    }
  }

  //未選擇區勾選內容
  function pickedCont($this) {
    //抓取顯示的內容
    var trChild = $this.closest('tr').html();
    //串標籤
    var trContent = '<tr>' + trChild + '</tr>';
    //產生勾選內容
    $('.picked-cont tbody').append(trContent);
    //刪除自己
    $this.closest('tr').remove();
    //將未選擇區核取方塊取消打勾
    $('.picked-cont tbody').find('input').prop('checked', false);
  }

  //未選擇區取消勾選內容
  function pickedContDelete($this) {
    //抓取顯示的內容
    var trChild = $this.closest('tr').html();
    //串標籤
    var trContent = '<tr>' + trChild + '</tr>';
    //產生勾選內容
    $('.pick-cont tbody').append(trContent);
    //刪除自己
    $this.closest('tr').remove();
    //將已選擇區核取方塊取消打勾
    $('.pick-cont tbody').find('input').prop('checked', false);
  }

  //未、已選擇區收合
  $('input[name="pick-rd"]').click(function () {
    pickShow();
  });

  //勾選未選擇區內容
  $('.pick-btn').click(function () {
    $('.pick-cont tbody input[type="checkbox"]').each(function () {
      var $this = $(this);
      if ($this.prop('checked') == true) {
        pickedCont($this);
      }
    });
    pickedNum();
    pickCheckboxNum();
  });

  $('body').on('click', '.pick-cont tbody input[type="checkbox"]', function () {
    pickCheckboxNum();
  });

  //勾選已選擇區內容
  $('.cancel-pick-btn').click(function () {
    $('.picked-cont tbody input[type="checkbox"]').each(function () {
      var $this = $(this);
      if ($this.prop('checked') == true) {
        pickedContDelete($this);
      }
    });
    pickedNum();
    pickedCheckboxNum();
  });

  $('body').on('click', '.picked-cont tbody input[type="checkbox"]', function () {
    pickedCheckboxNum();
  });


  //未選擇區全部勾選
  $('.pick-cont .cb-pick-all').click(function () {
    if ($(this).prop('checked')) {
      $('.pick-cont tbody input[type="checkbox"]').prop('checked', true);
    } else {
      $('.pick-cont tbody input[type="checkbox"]').prop('checked', false);
    }

    if ($('.pick-cont tbody input[type="checkbox"]:checked').length > 0) {
      $('.pick-btn').prop('disabled', false);
    } else {
      $('.pick-btn').prop('disabled', true);
    }
  });

  //已選擇區全部勾選
  $('.picked-cont .cb-pick-all').click(function () {
    if ($(this).prop('checked')) {
      $('.picked-cont tbody input[type="checkbox"]').prop('checked', true);
    } else {
      $('.picked-cont tbody input[type="checkbox"]').prop('checked', false);
    }

    if ($('.picked-cont tbody input[type="checkbox"]:checked').length > 0) {
      $('.cancel-pick-btn').prop('disabled', false);
    } else {
      $('.cancel-pick-btn').prop('disabled', true);
    }
  });

  pickedNum();
  pickCheckboxNum();
  pickedCheckboxNum();
  pickShow();
});

(function ($) {
  // 各種方法區
  var methods = {
    // 執行模糊搜尋插件
    newSearch: '',
    init: function (options) {
      var options = JSON.parse(JSON.stringify(options));
      var newSearch = new AjaxSelectSearch(options);
      methods.newSearch = newSearch;
      newSearch.init();
    },
    // 設定預設值功能
    setDefVal: function (eleId, val) {
      // eleId為代入的id
      // val為設定的預設值
      var eleId = eleId;
      var $ele = $('#' + eleId);
      var select = $ele.data('select2_allselect'); // 進行深拷貝
      var setVal = val;
      if (val === null || val === '' || val === undefined) {
        var tmpData = {
          id: '',
          text: '',
          linkId: '',
        };
        $('#' + eleId).attr('save_current_data', JSON.stringify(tmpData));
        $('#' + eleId).val(tmpData.id).trigger('change').trigger('select2:select');
        return;
      }
      // 將HTML的參數帶進去
      var finalSelect = select;
      var allSelect = finalSelect.allSelect;
      var currentSelect = allSelect.filter(function (item, index, array) {
        return item.eleId == eleId;
      })[0];
      var format = currentSelect.format;
      var setSearchResultNum = finalSelect.setSearchResultNum;
      var setOpenResultNum = finalSelect.setOpenResultNum;
      $.ajax({
        url: select.ajaxUrl,
        dataType: 'json',
        type: 'POST',
        async: false,
        data: {
          obj: {
            selectId: eleId, // 帶入的下拉ID
            linkName: '', // 上層欄位名稱
            linkVal: '', // 上層欄位值
            q: setVal, // 帶入的預設值,
            setOpenResultNum: setOpenResultNum,
            setSearchResultNum: setSearchResultNum,
            method: currentSelect.method, // 要帶入的方法
            customData: '', // 客製化參數
          },
        },
        success: function (data) {
          var data = data.data;
          // 回傳層級所有資料後去比對抓出當下的id，並取得所有資訊
          $.each(data, function (indexInArray, val) {
            if (val[format.selectId] == setVal) {
              var tmpData = {
                id: val[format.selectId],
                text: val[format.selectText],
                linkId: val[format.linkId] || '',
                disabled: val[format.disabled],
                mark: val[format.mark],
              };
              // 確認是否為離職人員
              if (data.mark === 'def_mark') {
                data.text += '(離職)';
              }
              // 回傳顯示客製參數
              if (format.customColumn !== undefined && format.customColumn.length !== 0) {
                format.customColumn.forEach(function (item, index, array) {
                  var custom = item;
                  tmpData[custom] = val[custom];
                });
              }
              $ele.attr('save_current_data', JSON.stringify(tmpData));
              // 貼上下拉
              setTimeout(function () {
                $ele.append("<option value='" + tmpData.id + "' selected>" + tmpData.text + '</option>');
                $ele.val(tmpData.id).trigger('change').trigger('select2:select');
                select.setPlaceholderColor($ele);
              }, 10);
            }
          });
        },
        error: function (jqXHR, status, error) {
          return {
            results: [],
          }; // Return dataset to load after error
        },
      });
    },
    // 增加下拉選項資料(備註:此增加選項的方法不會寫進資料庫)
    addOption: function (eleId, val, text) {
      // eleId為代入的元素id
      // val為增加選項的id
      // text為增加選項的文字
      var eleId = eleId;
      var $ele = $('#' + eleId);
      var setVal = val;
      var setText = text;
      var select = this.newSearch;
      // 貼上下拉
      setTimeout(function () {
        $ele.append("<option value='" + setVal + "' selected>" + setText + '</option>');
        $ele.trigger('change');
        select.setPlaceholderColor($ele);
      }, 0);
    },
    // 設定寬度
    setWidth: function (eleId, width) {
      var $wrapper = $('#select2-' + eleId + '-container').closest('.select2');
      $wrapper.css('width', width);
    },
  };
  function AjaxSelectSearch(options) {
    this.options = options;
    this.ajaxUrl = options.ajax_server;
    this.customId = options.cutom_id || '';
    this.allSelect; // 整理過後的資料
    this.isSearch = false; // 偵測是否有在搜尋
    this.currentSelectData; // 目前選擇的欄位資料
    this.nowData = []; // 打開當下撈出的資料
    this.switchFindRepeatOpt = {
      isOpen: true,
      setSearchLength: 2, // 規定其他字三字以上才能使用
    }; // 群組資料開關
    this.setOpenResultNum = 500; // 如果是打開的狀態500筆以上就不顯示選單
    this.setSearchResultNum = 500; // 搜尋顯示由後端判筆數在決定要不要顯示，筆數參數設定活的。
  }
  AjaxSelectSearch.prototype = {
    init: function () {
      var select = this;
      select.defDataProcess(); // 資料處理
      select.destroyedSelect2(); // 初始化select2
      select.saveObjToHtml(); // 將物件儲存至HTML(給預設值會用到)
      select.callSelect2(); // 綁上插件
      select.addCustomsHtml(); // 新增客製HTML
      select.bindEvent(); // 下拉事件綁定
      select.setDefVal(); // 如果有設定預設值就帶入預設值
    },
    defDataProcess: function () {
      var select = this;
      var options = select.options;
      var setOpenResultNum = options.setOpenResultNum || select.setOpenResultNum;
      var setSearchResultNum = options.setSearchResultNum || select.setSearchResultNum;
      var allSelect = options.format_params.map(function (item, index, array) {
        var $ele = $('#' + item.select_id);
        var tmpObj = {
          eleId: item.select_id,
          $ele: $ele,
          defaultValue: item.def_val,
          placeholder: placeholder_process(item, index),
          searchPlaceholder: item.search_placeholder,
          prevPlaceholder: item.prev_placeholder,
          noResultText: item.no_data_txt,
          width: item.width,
          method: item.method,
          format: {
            selectId: item.opt_val_field, // 下拉ID欄位
            selectText: item.opt_txt_field, // 下拉名稱欄位
            linkId: item.opt_link_upfield, // 上層下拉ID欄位
            disabled: 'DISABLED',
            mark: 'MARK',
            customColumn: item.rtn_custom_arr, // 回傳資料顯示客製化的欄位
          },
        };
        return tmpObj;
      });
      select.allSelect = allSelect;
      select.setOpenResultNum = setOpenResultNum;
      select.setSearchResultNum = setSearchResultNum;
      /**
       * placeholder顯示處理
       * 
       * @param {*} obj 帶入的下拉物件
       * @param {*} index 排序
       * @returns
       */
      function placeholder_process(obj, index) {
        // 顯示前面的placeholder
        var preElePlaceholder;
        // 自己的placeholder \u00a0 是空白字 如果撰寫的人沒寫就是空白
        var afterSelectPlaceholder = obj.placeholder || '\u00a0';
        if (index !== 0) {
          // 不是第一個元素都要讀前面
          preElePlaceholder = obj.prev_placeholder || '\u00a0';
        } else if (index == 0) {
          // 第一個就要讀自己的placeholder
          preElePlaceholder = obj.placeholder || '\u00a0';
        }
        // 預設選擇後的placeholder
        var tmpElePlaceholder = {
          beforeSelectPlaceholder: preElePlaceholder,
          afterSelectPlaceholder: afterSelectPlaceholder,
        };
        return tmpElePlaceholder;
      }
    },
    callSelect2: function () {
      var select = this;
      var allSelect = select.allSelect;
      var customId = select.customId;
      var setOpenResultNum = select.setOpenResultNum;
      var setSearchResultNum = select.setSearchResultNum;
      allSelect.forEach(function (item, index, array) {
        var $ele = item.$ele;
        var eleId = item.eleId;
        var noResultText = item.noResultText;
        var ajaxUrl = select.ajaxUrl;
        var method = item.method;
        var format = item.format;
        var selectCurrentIndex = index;
        var $prevEle = (function () {
          if (allSelect[selectCurrentIndex - 1] !== undefined) {
            return allSelect[selectCurrentIndex - 1].$ele;
          } else {
            return undefined;
          }
        })();
        var placeholder = (function () {
          var result;
          if (selectCurrentIndex !== 0) {
            // 判斷不是第一個元素，要判斷前面有沒有值去決定顯示placeholder
            if ($prevEle.val() !== undefined && $prevEle.val() !== null) {
              result = item.placeholder.afterSelectPlaceholder;
            } else {
              result = item.placeholder.beforeSelectPlaceholder;
            }
          } else {
            result = item.placeholder.afterSelectPlaceholder;
          }
          return result;
        })();
        var widthCalc = (function () {
          if (item.width !== undefined && item.width !== '') {
            return item.width;
          }
          var beforePlaceholder = item.placeholder.beforeSelectPlaceholder;
          var searchPlaceholder = item.searchPlaceholder;
          var fontSize = parseInt(item.$ele.css('fontSize'));
          var biggerPlaceholder;
          if (parseInt(beforePlaceholder.length) > parseInt(searchPlaceholder.length)) {
            biggerPlaceholder = beforePlaceholder;
          } else {
            biggerPlaceholder = searchPlaceholder;
          }
          var systemWidth = fontSize * biggerPlaceholder.length + 50;
          return systemWidth;
        })();
        $ele.select2({
          language: {
            noResults: function (term) {
              return noResultText;
            },
            searching: function () {
              return '搜尋中...';
            },
          },
          containerCssClass: 'error',
          placeholder: placeholder,
          width: widthCalc,
          ajax: {
            url: ajaxUrl,
            dataType: 'json',
            type: 'POST',
            cache: false,
            delay: 250,
            data: function (params) {
              if (params.term === undefined) {
                params.term = '';
              }
              return {
                obj: {
                  selectId: eleId, // 帶入的下拉ID(利用下拉ID去撈出該層級資料)
                  linkName: format.linkId, // 對應的上層欄位名稱
                  linkVal: (function () {
                    // 上一層下拉選到的值
                    if ($prevEle === undefined) {
                      return '';
                    }
                    if ($prevEle.val() === null) {
                      return '';
                    }
                    return $prevEle.val();
                  })(),
                  q: params.term, // 搜尋的字串
                  setOpenResultNum: setOpenResultNum, // 如果要顯示選單打開限制的筆數
                  setSearchResultNum: setSearchResultNum, // 如果要顯示選單搜尋限制的筆數
                  method: method, // 要傳給後端使用的方法
                  customData: (function () {
                    // 將要傳至後端的客製化處理
                    if (customId === '' || customId === undefined) {
                      return '';
                    }
                    if ($('#' + customId).length === 0) {
                      return '';
                    }
                    if ($('#' + customId).val() === '') {
                      return '';
                    }
                    return JSON.parse($('#' + customId).val());
                  })(), // 帶入的客製化參數
                },
              };
            },
            processResults: function (data, params) {
              params.page = params.page || 1;
              select.nowData = data.data;
              // 需回傳的參數
              var rawData = data.data;
              var show = data.show;
              //
              var filterMethods = {
                // 判斷選項是否打開
                isOpenResult: function () {
                  // 顯示選單條件:
                  // 後端回傳顯示false就不顯示
                  if (show == false) {
                    return false;
                  }
                  // 第一個下拉就能顯示
                  if (selectCurrentIndex == 0) {
                    // 第0個一定顯示
                    return true;
                  }
                  // 如果是搜尋就會顯示
                  if (select.isSearch) {
                    return true;
                  }
                  // 如果前面有沒值得話就不打開
                  if ($prevEle.val() == null || $prevEle.val() == undefined) {
                    return false;
                  }
                  // 前面的下拉有值就顯示
                  return true;
                },
                isSearch: function () {
                  // 偵測如果是搜尋就要把開關打開
                  if (params.term !== undefined && params.term !== '') {
                    return true;
                  } else {
                    return false;
                  }
                },
                isSearchSameName: function (data) {
                  // 判斷搜尋有沒有相同文字
                  if (!select.isSearch) {
                    return;
                  }
                  var newRepeatRrr = [];
                  // 如果是搜尋的話就要考慮是否有相同名子的情況(不同部門同樣名稱)
                  data.forEach(function (item, index, array) {
                    // 抓OBJ arr重複資料的function
                    var tmpResult = findObjectByProporigin(data, 'text', item.text);
                    var sourceText = item.text;
                    // 抓過的文字就不要再抓的判斷
                    var ans = newRepeatRrr.every(function (item, index, array) {
                      return item.text !== sourceText;
                    });
                    if (tmpResult.length > 1 && ans == true) {
                      newRepeatRrr = newRepeatRrr.concat(tmpResult);
                    }
                  });
                  if (newRepeatRrr.length == 0) {
                    return;
                  }
                  newRepeatRrr.forEach(function (item, index, array) {
                    var target = item;
                    data.forEach(function (item, index, array) {
                      if (item.id == target.id) {
                        var linkText = findLinkIdText(selectCurrentIndex, item.linkId);
                        item.linkText = linkText;
                      }
                    });
                  });
                  // 抓OBJ arr重複資料的function
                  function findObjectByProporigin(arr, prop, val) {
                    var result = [];
                    arr.map(function (el) {
                      if (el[prop] === val) {
                        result.push(el);
                      }
                    });
                    return result;
                  }
                  // 找出linkId的文字
                  function findLinkIdText(index, targetId) {
                    // 先找出前一個OBJ
                    var prevObj = allSelect[index - 1];
                    var selectId = prevObj.format.selectId;
                    var selectText = prevObj.format.selectText;
                    var setOpenResultNum = select.setOpenResultNum;
                    var setSearchResultNum = select.setSearchResultNum;
                    var targetText;
                    $.ajax({
                      url: select.ajaxUrl,
                      dataType: 'json',
                      type: 'POST',
                      async: false,
                      data: {
                        obj: {
                          selectId: prevObj.eleId,
                          linkName: '',
                          linkVal: '',
                          q: targetId,
                          setOpenResultNum: setOpenResultNum,
                          setSearchResultNum: setSearchResultNum,
                          method: prevObj.method,
                          customData: '',
                        },
                      },
                      success: function (data) {
                        var data = data.data;
                        // 回傳層級所有資料後去比對抓出當下的id，並取得所有資訊
                        $.each(data, function (indexInArray, val) {
                          if (val[selectId] == targetId) {
                            targetText = val[selectText];
                          }
                        });
                      },
                      error: function (jqXHR, status, error) {
                        return {
                          results: [],
                        }; // Return dataset to load
                        // after error
                      },
                    });
                    return targetText;
                  }
                },
              };
              // 設定是否搜尋的開關
              select.isSearch = filterMethods.isSearch();
              // 判斷是否顯示選單
              if (filterMethods.isOpenResult() === false) {
                return {
                  results: [
                    {
                      id: 'more',
                      text: '請輸入更多搜尋文字',
                      disabled: true,
                    },
                  ],
                };
              }
              // 將回傳的資料組成標準格式
              var resultData = rawData.map(function (item, index, array) {
                var data = item;
                var tmpObj = {
                  id: data[format.selectId],
                  text: data[format.selectText],
                  linkId: data[format.linkId] || '',
                  disabled: data[format.disabled],
                  mark: data[format.mark],
                };
                // 帶入客製化參數
                if (format.customColumn !== undefined && format.customColumn.length !== 0) {
                  format.customColumn.forEach(function (item, index, array) {
                    var custom = item;
                    tmpObj[custom] = data[custom];
                  });
                }
                return tmpObj;
              });
              // 群組功能開關
              // 判斷搜尋時有沒有相同文字的情況 有的話就在資料加入linkText
              // 這邊搜尋數字不會跑因為ID是獨一無二的只有文字才會有相同的情況
              if (select.switchFindRepeatOpt.isOpen) {
                // 搜尋文字長度要大於2才會觸發此功能
                if (isNaN($.trim(params.term))) {
                  if ($.trim(params.term).length >= select.switchFindRepeatOpt.setSearchLength) {
                    filterMethods.isSearchSameName(resultData);
                  }
                }
              }
              return {
                results: resultData,
                pagination: {
                  more: params.page < data.total,
                },
              };
            },
            error: function (jqXHR, status, error) {
              return {
                results: [],
              }; // Return dataset to load after error
            },
          },
          // minimumInputLength: 1,可以設定打出一個字後再搜尋
          templateResult: function (data, container) {
            // 放入額外要顯示的字串EX:離職人員、群組功能
            var extraText = '';
            // 離職人員顯示文字+顏色判斷
            if (data.mark !== undefined && data.mark !== null && data.mark !== '') {
              // 這邊是PR自行給CLASS名稱去控制選項顏色
              $(container).addClass(data.mark);
              // def_mark為離職所以加入文字
              if (data.mark === 'def_mark') {
                data.text += '(離職)';
              }
            }
            // 群組功能顯示文字
            if (data.linkText !== undefined && data.linkText !== null && data.linkText !== '') {
              extraText += '(' + data.linkText + ')';
            }
            if (extraText !== '') {
              var $state = $('<span> ' + data.text + '</span><span class="extra-infor show">' + extraText + '</span>');
              return $state;
            }
            return data.text;
          },
        });
        select.setPlaceholderColor($ele);
      });
    },
    addCustomsHtml: function () {
      // 增加"X"的圖案
      var select = this;
      var allSelect = select.allSelect;
      var delHtml = '<div class="customs-select2-del-wrapper"><div class="customs-select2-del-btn"></div></div>';
      allSelect.forEach(function (item, index, array) {
        var $ele = item.$ele;
        $ele.data('select2').$container.append(delHtml);
        var $delBtn = $ele.data('select2').$container.find('.customs-select2-del-wrapper');
        $ele.data('select2').$delBtn = $delBtn;
      });
    },
    destroyedSelect2: function () {
      // 防呆重複綁定
      var select = this;
      var allSelect = select.allSelect;
      $.each(allSelect, function (index, val) {
        if (val.$ele.attr('class') !== undefined) {
          val.$ele.select2('destroy');
        }
      });
    },
    bindEvent: function () {
      var select = this;
      var allSelect = select.allSelect;
      $.each(allSelect, function (index, val) {
        var selectObj = val;
        var $selectEle = val.$ele;
        // 防呆重複綁定
        $selectEle.off('select2:select');
        $selectEle.off('select2:open');
        var select2 = $selectEle.data('select2');
        var $delBtn = select2.$delBtn;
        $selectEle.off('click:select2Del');
        $delBtn.on('click.select2Del', function () {
          if ($selectEle.val() === null) {
            return;
          }
          var tmpData = {
            id: '',
            text: '',
            linkId: '',
          };
          $selectEle.attr('save_current_data', JSON.stringify(tmpData));
          $selectEle.val('').trigger('change').trigger('select2:select');
          select.setPlaceholderColor($selectEle);
        });
        // 隱藏搜尋中的資料，因為搜尋的話會顯示上次選單的東西'
        select2.on('query', function (e) {
          select2.$results.find('li:not(:nth-child(1))').hide();
        });
        // 選擇事件
        $selectEle.on('select2:select', function (e) {
          var selectData;
          if (e.params === undefined) {
            // 這邊是帶入預設值的情況，如果有預設值e.params就會變成undefine，因此設定完預設值後觸發select事件就要把資料放進去
            selectData = JSON.parse($selectEle.attr('save_current_data'));
          } else {
            // 預設選取就會帶入目前選取到的資料
            selectData = e.params.data;
            $selectEle.attr('save_current_data', JSON.stringify(selectData));
          }
          // 把目前選到的資料存進去
          select.currentSelectData = selectData;
          // 如果是有搜尋然後選擇的狀態就須前後刷新
          if (select.isSearch) {
            select.resetPrevSelect(index);
          }
          // 帶入預設值情況:如果只帶入最後一個預設值，前面沒有值的話就要幫忙連動刷新前面
          if (index !== 0) {
            // 如果是預設值的判斷
            if (e.params === undefined) {
              select.resetPrevSelect(index);
            }
          }
          // 判斷前面的下拉為空的話也要往前刷新(EX:給預設值時你只給最後一個)
          select.resetAfterSelect($selectEle, index);
          select.setPlaceholderColor($selectEle);
          // 選擇完畢都要把搜尋開關關閉
          select.isSearch = false;
        });
        // 打開選單事件
        $selectEle.on('select2:open', function (e) {
          var select2Obj = $(this).data('select2');
          var $listEle = select2Obj.$dropdown.find('.select2-results');
          var $searchDropdown = select2Obj.$dropdown.find('.select2-search--dropdown');
          var $searchBox = select2Obj.$dropdown.find('.select2-search__field');
          var isPrevDef = getIsPrevDef(index, allSelect);
          // 下拉的搜尋框Placeholder處理
          var hint_html = '<span class="hint">' + selectObj.searchPlaceholder + '</span>';
          var $hint = $searchDropdown.find('.hint');
          if ($hint.length > 0) {
            $hint.text(val.search_placeholder);
          } else {
            $searchDropdown.append(hint_html);
            $hint = $searchDropdown.find('.hint');
          }
          // 預設打開一定顯示
          $hint.show();
          // 點假的placeholder還是要觸發input焦點
          $hint.off('click');
          $hint.on({
            click: function () {
              $searchBox.focus();
            },
          });
          // 打開選單如果前面下拉沒有選擇值，就不顯示下拉資料
          if (isPrevDef) {
            $listEle.css('display', 'none');
          } else {
            $listEle.css('display', '');
          }
          $searchDropdown.off('keyup.set');
          $searchDropdown.off('search.set');
          // 前面的輸入框沒有值且打字的情況要去判斷搜尋框的文字是否有值有值才去顯示資料
          $searchDropdown.on('keyup.set search.set', '.select2-search__field', function () {
            if (isPrevDef && $(this).val() === '') {
              $listEle.css('display', 'none');
            } else {
              $listEle.css('display', '');
            }
            // placeholder隱藏
            if ($(this).val().length > 0) {
              $hint.hide();
            } else {
              $hint.show();
            }
          });
        });
      });
      // 判斷前一個元素是否有值
      function getIsPrevDef(index, allSelectObj) {
        var allSelect = allSelectObj;
        var targetIndex = index;
        var prevObj = allSelect.filter(function (item, index, array) {
          return index == targetIndex - 1;
        });
        if (prevObj.length > 0) {
          if (prevObj[0].$ele.val() == undefined || prevObj[0].$ele.val() == null) {
            return true;
          } else {
            return false;
          }
        }
      }
    },
    // 參數:目前的下拉、目前的INDEX
    resetAfterSelect: function ($currentEle, nowIndex) {
      // 刷新清空後面的下拉資料
      var select = this;
      var allSelect = select.allSelect;
      var $currentEle = $currentEle;
      // 找出所有後面的選單資料
      var afterSelectArr = allSelect.filter(function (item, index, array) {
        return index > nowIndex;
      });
      $.each(afterSelectArr, function (index, val) {
        // 清空資料
        val.$ele.empty();
        var tmpData = {
          id: '',
          text: '',
          linkId: '',
        };
        val.$ele.attr('save_current_data', JSON.stringify(tmpData));
        if (index === 0) {
          // 隔壁元素要處理placeholder
          var $select2Container = val.$ele.data('select2').$container;
          var nowPlaceholder = val.placeholder.afterSelectPlaceholder;
          var prevPlaceholder = val.placeholder.beforeSelectPlaceholder;
          if ($currentEle.val() === null || $currentEle.val() === undefined) {
            $select2Container.find('.select2-selection__placeholder').text(prevPlaceholder);
          } else {
            $select2Container.find('.select2-selection__placeholder').text(nowPlaceholder);
          }
        }
        select.setPlaceholderColor(val.$ele);
      });
    },
    resetPrevSelect: function (nowIndex) {
      var select = this;
      var allSelect = select.allSelect;
      var allPreArr = allSelect.filter(function (item, index, array) {
        return index <= nowIndex;
      });
      // 從後面處理因此要反轉陣列
      allPreArr.reverse();
      $.each(allPreArr, function (index, val) {
        // 找出當前的likId
        var linkId = select.currentSelectData.linkId;
        // 判斷第一個下拉就不用往前刷新
        if (index + 1 < allPreArr.length) {
          setPrevAjax(allPreArr[index + 1], linkId); // 這邊linkId就是上一個下拉選到的值
        }
      });
      /**
       * 往前刷新下拉並加上選項
       * 
       * @param {*} nowObj 目前的下拉obj
       * @param {*} nowVal 目前的下拉值
       */
      function setPrevAjax(nowObj, nowVal) {
        var selectId = nowObj.format.selectId;
        var selectText = nowObj.format.selectText;
        var linkId = nowObj.format.linkId;
        var mark = nowObj.format.mark;
        var disabled = nowObj.format.disabled;
        var $ele = nowObj.$ele;
        var setOpenResultNum = select.setOpenResultNum;
        var setSearchResultNum = select.setSearchResultNum;
        var customColumnArr = nowObj.format.customColumn;
        $.ajax({
          url: select.ajaxUrl,
          dataType: 'json',
          type: 'POST',
          async: false,
          data: {
            obj: {
              selectId: nowObj.eleId,
              linkName: '',
              linkVal: '',
              q: nowVal,
              setOpenResultNum: setOpenResultNum,
              setSearchResultNum: setSearchResultNum,
              method: nowObj.method,
              customData: '',
            },
          },
          success: function (data) {
            var data = data.data;
            // 回傳層級所有資料後去比對抓出當下的id，並取得所有資訊
            $.each(data, function (indexInArray, val) {
              if (val[selectId] == nowVal) {
                var tmpData = {
                  id: val[selectId],
                  text: val[selectText],
                  linkId: val[linkId],
                  mark: val[mark],
                  disabled: val[disabled],
                };
                // 找到後存入當下元素
                select.currentSelectData = tmpData;
                // 確認是否為離職人員
                if (tmpData.mark === 'def_mark') {
                  tmpData.text += '(離職)';
                }
                // 回傳顯示客製參數
                if (customColumnArr !== undefined && customColumnArr.length !== 0) {
                  customColumnArr.forEach(function (item, index, array) {
                    var custom = item;
                    tmpData[custom] = val[custom];
                  });
                }
                $ele.attr('save_current_data', JSON.stringify(tmpData));
                // 貼上下拉
                $ele.append("<option value='" + tmpData.id + "' selected>" + tmpData.text + '</option>');
                $ele.trigger('change');
                select.setPlaceholderColor($ele);
              }
            });
          },
          error: function (jqXHR, status, error) {
            return {
              results: [],
            }; // Return dataset to load after error
          },
        });
      }
    },
    setPlaceholderColor: function ($ele) {
      var $ele = $ele;
      var $renderText = $ele.data('select2').$selection.find('.select2-selection__rendered');
      var $container = $ele.data('select2').$container;
      // 如果選到沒有值 預設選項顏色要給灰
      if ($ele.val() === undefined || $ele.val() === null) {
        $renderText.css('color', '#808080');
        if ($container.hasClass('select2-container--disabled') == true) {
          // 如果是是disabled整個下拉要改變文字顏色
          $renderText.css('color', '#bcbcbc');
        }
      } else {
        $renderText.css('color', '');
      }
    },
    // 把下拉資訊存進HTML，因為在給預設值的時候可以使用
    saveObjToHtml: function () {
      var select = this;
      select.allSelect.forEach(function (item, index, array) {
        var $ele = item.$ele;
        $ele.data('select2_allselect', select);
      });
    },
    setDefVal: function () {
      var select = this;
      var all_select = select.allSelect;
      all_select.forEach(function (item, index, array) {
        $ele = item.$ele;
        eleId = item.eleId;
        defVal = item.defaultValue;
        if (defVal !== undefined && defVal !== '' && defVal !== null) {
          methods.setDefVal(eleId, defVal);
        }
      });
    },
  };
  $.extend({
    FRAMEWORK_select2_ajax: function (method) {
      if (methods[method]) {
        // 以remove為例子，這邊的argument會帶進remove、跟ID，因此下面數值是1就只會帶入ID進去function
        return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof method === 'object' || !method) {
        return methods.init.apply(this, arguments);
      } else {
        $.error('找不到方法');
      }
    },
  });
})(jQuery);
function select_search(raw_data) {
  this.raw_data = raw_data;
  this.all_select; //處理完畢的全部參數
  this.save_show_arr = []; //打開選單時候讀的arr
  this.search_arr = []; //搜尋成功的時候存的arr
  this.is_search = false; //搜尋的開關
}
//TODO:raw_data資料參數處理
select_search.prototype.data_process = function () {
  var select = this;
  var data_params_arr = select.raw_data;
  var tmp_all_params_arr = []; //將填的資料重新組裝
  ////資料處理
  $.each(data_params_arr, function (index, val) {
    var tmp_ele = $('#' + val.ele_id);
    var tmp_data = val.data;

    //判斷是PHP給資料還是單機版給資料
    //由於parseJson一定要是字串，如果是單機版JS自己製作資料 傳過來會是obj，因此要做處理
    //如果是php 傳過來的json字串則不用做處理直接parse
    if (typeof val.data === 'object') {
      tmp_data = JSON.stringify(val.data);
    }
    var tmp_data = jQuery.parseJSON(tmp_data);

    //預設選擇後的placeholder
    var tmp_ele_placeholder = placeholder_process(tmp_ele, index);
    var tmp_ele_no_results_text = tmp_ele.attr('no_results_text');
    var search_placeholder = tmp_ele.attr('search_placeholder');
    var prev_placeholder = tmp_ele.attr('prev_placeholder');
    var tmp_format_id = val.format.select_id;
    var tmp_format_text = val.format.select_text;
    var tmp_format_linkId = val.format.linkId;
    var tmp_format_mark = val.format.mark;
    var tmp_format_disabled = val.format.disabled;
    var tmp_after_data = [];
    var search_condition_arr = val.search_condition_arr;
    //將placeholder塞進data
    $.each(tmp_data, function (key, value) {
      var tmp_obj = new Object({
        text: decodeURI(value[tmp_format_text]),
        id: value[tmp_format_id],
        linkId: value[tmp_format_linkId],
        mark: value[tmp_format_mark],
        disabled: value[tmp_format_disabled],
      });
      $.each(search_condition_arr, function (index, val) {
        tmp_obj[val] = value[val];
      });
      tmp_after_data.push(tmp_obj);
    });
    //將placeholder塞進資料前面
    tmp_after_data.unshift(tmp_ele_placeholder);

    var select_params = {
      ele: tmp_ele, //元素
      sort: index, //排序
      data: tmp_after_data, //處理完資料
      no_results_text: tmp_ele_no_results_text, //查不到結果顯示的文字
      search_placeholder: search_placeholder, //打開下拉的搜尋欄位的placeholder
      prev_placeholder: prev_placeholder,
      format: val.format, //格式
      search_condition_arr: search_condition_arr, //搜尋條件陣列
    };
    tmp_all_params_arr.push(select_params);
  });
  select.all_select = tmp_all_params_arr; //資料存回去

  /**
   *placeholder顯示處理
   *
   * @param {*} tmp_ele 帶入的元素
   * @param {*} index 排序
   * @returns
   */
  function placeholder_process(tmp_ele, index) {
    //顯示前面的placeholder
    var pre_ele_placeholder;
    //自己的placeholder \u00a0 是空白字 如果撰寫的人沒寫就是空白
    var after_select_placeholder = tmp_ele.attr('placeholder') || '\u00a0';
    if (index !== 0) {
      //不是第一個元素都要讀前面
      pre_ele_placeholder = tmp_ele.attr('prev_placeholder') || '\u00a0';
    } else if (index == 0) {
      //第一個就要讀自己的placeholder
      pre_ele_placeholder = tmp_ele.attr('placeholder') || '\u00a0';
    }
    //預設選擇後的placeholder
    var tmp_ele_placeholder = {
      id: 'def',
      text: pre_ele_placeholder,
      linkId: 'def',
      before_select_placeholder: pre_ele_placeholder,
      after_select_placeholder: after_select_placeholder,
    };
    return tmp_ele_placeholder;
  }
};
//打開插件顯示下拉資料
//TODO:call_select templateResult 跟  matcher官方插件都有範例
select_search.prototype.call_select = function (next_obj) {
  var select = this;
  var next_obj = next_obj || null;
  //刷新的時候用
  if (next_obj !== null) {
    var system_width = width_calc(next_obj);
    //重新讀的話要先清空
    next_obj.ele.empty();
    next_obj.ele.select2({
      data: next_obj.data,
      language: {
        noResults: function (term) {
          return next_obj.no_results_text;
        },
      },
      width: system_width,
      //結果顯示區
      templateResult: resultState,
      //輸入搜尋框事件 parames是輸入的字 data則是每筆option資料
      matcher: function (params, data) {
        return creat_matcher(params, data, next_obj);
      },
    });
    select.placeholder_color_change(next_obj.ele);
  } else {
    //每個select呼叫plugin時使用
    $.each(select.all_select, function (index, val) {
      var tmp_obj = val;
      var system_width = width_calc(tmp_obj);
      var tmp_ele = tmp_obj.ele;
      var data = val.data;

      //呼叫這個plugin
      tmp_ele.select2({
        data: data,
        //結果顯示區
        templateResult: function (data, container) {
          //找出輸入框
          var search_box = tmp_ele
            .data('select2')
            .$dropdown.find('.select2-search__field');
          //儲存重複的選項
          var new_repeat_arr;
          //搜尋框有直
          if (search_box.val().length > 0) {
            new_repeat_arr = find_repeat_arr(tmp_obj.data);
          }
          if (data.mark !== undefined && data.mark !== null) {
            $(container).addClass(data.mark);
          }
          //拿到link-id 名稱
          var linkId_text = select.find_prev_text(tmp_obj, data.linkId);
          if (new_repeat_arr !== undefined) {
            if (new_repeat_arr.length == 0) {
              return data.text;
            }
            //如果當下DATA符合其中一筆new_repeat_arr資料就是TRUE
            var show_ans = new_repeat_arr.some(function (item, index, array) {
              return item.text == data.text;
            });
            if (show_ans) {
              var $state = $(
                '<span> ' +
                data.text +
                '</span><span class="extra-infor show">(' +
                linkId_text +
                ')</span>'
              );
            } else {
              var $state = $(
                '<span> ' +
                data.text +
                '</span><span class="extra-infor">(' +
                linkId_text +
                ')</span>'
              );
            }
            return $state;
          }
          return data.text;
        },
        language: {
          noResults: function () {
            //沒結果顯示的文字
            return val.no_results_text;
          },
        },
        width: system_width,
        matcher: function (params, data) {
          return creat_matcher(params, data, tmp_obj);
        },
      });
      //初始化的時候處理placeholder顏色
      select.placeholder_color_change(tmp_ele);
    });
  }
  //過濾資料顯示
  function resultState(data, container) {
    //找出輸入框
    var search_box = next_obj.ele
      .data('select2')
      .$dropdown.find('.select2-search__field');
    //判斷前面有沒有值
    var tmp_is_prev = select.is_prev_val(next_obj);
    //儲存重複的選項
    var new_repeat_arr;
    //如果搜尋框有值且前面下拉不是def
    if (search_box.val().trim().length > 0 && !tmp_is_prev) {
      //每次進去都先清空搜尋到的arr
      select.search_arr.length = 0;
      var new_search_condition_arr;
      //防呆-額外搜尋條件
      if (next_obj.search_condition_arr == undefined) {
        next_obj.search_condition_arr = [];
      }
      if (next_obj.search_condition_arr.length !== 0) {
        new_search_condition_arr = next_obj.search_condition_arr;
        if (
          new_search_condition_arr.indexOf('id') == -1 &&
          new_search_condition_arr.indexOf('text') == -1
        ) {
          new_search_condition_arr.push('id', 'text');
        }
      } else {
        new_search_condition_arr = ['id', 'text'];
      }
      //額外搜尋條件-帶進來資料的obj data 去跟搜尋框比對回傳找到東西的arr
      //ex:["黑貓", "0007-00010001", "潔西卡"]
      var all_pre_obj = next_obj.data.filter(function (item, index, array) {
        var tmp_new_arr = new_search_condition_arr.map(function (
          val,
          index,
          array
        ) {
          if (item[val] == undefined) {
            item[val] = '';
          }
          return item[val];
        });
        var flag = false;
        //比對搜尋的字串
        $.each(tmp_new_arr, function (indexInArray, val) {
          if (val.indexOf(search_box.val().trim()) !== -1) {
            flag = true;
          }
        });
        return flag == true;
      });
      //這邊開始抓重複資料
      new_repeat_arr = find_repeat_arr(all_pre_obj);

      select.search_arr = all_pre_obj;

      select.is_search = true;
    } else {
      //前面是DEF
      //如果搜尋框有字才跑群組人員判斷
      if (search_box.val().length > 0) {
        new_repeat_arr = find_repeat_arr(next_obj.data);
      }

      //如果搜尋框沒有值那就是把之前搜尋的清空
      select.search_arr.length = 0;
    }
    //把上面找到資料跟原本資料合併，這邊的原本資料是指如果前面有選那就是帶入前面的linkId去呈現選單
    var tmp_new_arr = select.save_show_arr.concat(select.search_arr);

    //所有的資料都先隱藏
    $(container).addClass('optInvisible');
    $.each(tmp_new_arr, function (index, val) {
      if (data.id == val.id && data.linkId == val.linkId) {
        //將搜尋到的
        $(container).removeClass('optInvisible');
      }
    });
    //離職人員顏色判斷
    if (data.mark !== undefined && data.mark !== null) {
      $(container).addClass(data.mark);
    }
    //拿到link-id 名稱
    var linkId_text = select.find_prev_text(next_obj, data.linkId);
    if (new_repeat_arr !== undefined) {
      if (new_repeat_arr.length == 0) {
        return data.text;
      }
      //如果當下DATA符合其中一筆new_repeat_arr資料就是TRUE
      var show_ans = new_repeat_arr.some(function (item, index, array) {
        return item.text == data.text;
      });

      if (show_ans) {
        var $state = $(
          '<span> ' +
          data.text +
          '</span><span class="extra-infor show">(' +
          linkId_text +
          ')</span>'
        );
      } else {
        var $state = $(
          '<span> ' +
          data.text +
          '</span><span class="extra-infor">(' +
          linkId_text +
          ')</span>'
        );
      }
      return $state;
    }
    return data.text;
  }
  //搜尋功能字串比較
  function creat_matcher(params, data, tmp_obj) {
    var list = tmp_obj.ele.data('select2').$results.parent();
    var tmp_is_prev = select.is_prev_val(tmp_obj);
    //如果是輸入空值
    if (params.term.trim() === '') {
      //這邊的功能是如果搜尋框是空值，原本會回傳全部資料，但除了第一個下拉可以顯示選單，其他的必須隱藏下拉
      //這邊的判斷是如果前面是def預設表示不用顯示選單
      if (tmp_obj.sort !== 0 && tmp_is_prev) {
        list.hide();
      }
      return data;
    }
    if (typeof data.text === 'undefined') {
      return null;
    }
    var new_search_condition_arr;
    //額外搜尋條件防呆
    if (tmp_obj.search_condition_arr == undefined) {
      tmp_obj.search_condition_arr = [];
    }
    //如果沒有條件陣列就跑預設ID　跟ＴＥＸＴ
    if (tmp_obj.search_condition_arr.length == 0) {
      new_search_condition_arr = [];
      new_search_condition_arr.push(data.text, data.id);
    } else {
      //將傳進來的額外條件轉換成物件去找值並轉換陣列
      //ex:["cat", "黑貓", "", "業務部-北", "0003"]轉換成這樣
      new_search_condition_arr = tmp_obj.search_condition_arr.map(function (
        item,
        index,
        array
      ) {
        if (data[item] == undefined) {
          data[item] = '';
        }
        return data[item];
      });
      new_search_condition_arr.push(data.text, data.id);
    }
    var modifiedData;
    //搜尋每個額外條件的文字是否有一樣的，有找到就回傳該筆資料
    //ex:["cat", "黑貓", "", "業務部-北", "0003"]我打"黑"就可以找到
    $.each(new_search_condition_arr, function (index, val) {
      if (val.indexOf(params.term.trim()) > -1) {
        modifiedData = $.extend({}, data, true);
      }
    });
    if (modifiedData !== undefined) {
      return modifiedData;
    }
    // Return `null` if the term should not be displayed
    return null;
  }
  //群組功能-抓重複資料
  function find_repeat_arr(all_arr) {
    var new_repeat_arr = [];
    all_arr.forEach(function (item, index, array) {
      var tmp_resault = findObjectByProporigin(array, 'text', item.text);
      var source_text = item.text;
      //抓過的文字就不要再抓的判斷
      var ans = new_repeat_arr.every(function (item, index, array) {
        return item.text !== source_text;
      });
      if (tmp_resault.length > 1 && ans == true) {
        new_repeat_arr.push(tmp_resault[0]);
      }
    });
    return new_repeat_arr;

    //抓OBJ arr重複資料的function
    function findObjectByProporigin(arr, prop, val) {
      var result = [];
      arr.map(function (el) {
        if (el[prop] === val) {
          result.push(el);
        }
      });
      return result;
    }
  }

  /**
   *系統寬度判斷
   *
   * @param {*} obj
   * @returns
   */
  function width_calc(obj) {
    var prev_placeholder = obj.prev_placeholder;
    var search_placeholder = obj.search_placeholder;
    //先抓元素字形大小
    var system_font_size = parseInt(obj.ele.css('fontSize'));
    //利用placeholder去判斷這個下拉的寬度
    var bigger_placeholder;
    if (
      parseInt(prev_placeholder.length) > parseInt(search_placeholder.length)
    ) {
      bigger_placeholder = prev_placeholder;
    } else {
      bigger_placeholder = search_placeholder;
    }
    //字數乘字形算寬度
    var system_width = system_font_size * bigger_placeholder.length + 50;
    return system_width;
  }
};

//TODO:記下當下的選單資料
select_search.prototype.show_current_data = function (current_obj, linkID) {
  var select = this;
  var select_val_linkId = linkID; //帶入的連結資料
  var tmp_arr = current_obj.data.filter(function (element, index, arr) {
    if (element.linkId == undefined) {
      return element.id !== '';
    }
    //選出部門代號相符的資料，以及帶入預設值
    if (select_val_linkId == 'def') {
      //如果是預設就回傳全部資料
      return element.id !== '';
    } else {
      //回傳等於聯結資料和預設placeholder
      return element.linkId == select_val_linkId || element.id === 'def';
    }
  });

  //修改完存進陣列在帶入此功能
  select.save_show_arr = tmp_arr;
};

//TODO:往前刷新自己的選單並給值給前一個select
//參數為當前的排序，和全部陣列
select_search.prototype.reset_prev_list = function (
  self_sort,
  all_select,
  select_data
) {
  var select = this;
  //找出先前的欄位包掛自己
  var all_pre_obj = all_select.filter(function (item, index, array) {
    return item.sort <= self_sort;
  });
  //目前選到的資訊
  var select_data = select_data;

  //從後面處理因此要反轉陣列
  all_pre_obj.reverse();
  ////先前選單第一個選單有值後往前推選單資料，處理先前的選單
  $.each(all_pre_obj, function (index, val) {
    //先前陣列的當前obj
    var current_pre_obj = val;
    //先前陣列的當前ele 的val
    var current_pre_value = current_pre_obj.ele.val();
    //找出當下的likId
    var linkId;
    //如果是搜尋的話可能會帶入初始進來，因此要禁止
    if (current_pre_value == 'def') {
      return;
    }

    if (index == 0) {
      linkId = select_data.linkId;
    } else {
      linkId = select.find_linkId(current_pre_obj, current_pre_value);
    }
    //往前刷新選單
    //選單要重製的話要先清空在重新讀取回傳的新選單再給值

    select.after_select_placeholder_change(current_pre_obj, current_pre_value);

    select.call_select(current_pre_obj);
    //自己的欄位重新給值
    current_pre_obj.ele.val(current_pre_value).trigger('change.select2');

    //最後一個就不用，利用陣列長度去判斷
    if (index + 1 < all_pre_obj.length) {
      select.call_select(all_pre_obj[index + 1]);
      all_pre_obj[index + 1].ele.val(linkId).trigger('change.select2');
    }
    select.placeholder_color_change(current_pre_obj.ele);
  });
};
//TODO:找出當下元素的link id
//參數為當前的obj和當前的下拉vlaue
select_search.prototype.find_linkId = function (obj, target) {
  var tmp_linkId;
  $.each(obj.data, function (index, val) {
    if (val.id == target) {
      tmp_linkId = val.linkId;
    }
  });
  return tmp_linkId;
};
//TODO:判斷前一個元素是否為預設
select_search.prototype.is_prev_val = function (obj) {
  var select = this;
  var all_select = select.all_select;
  var tmp_prev_obj = all_select.filter(function (item, index, array) {
    return item.sort == parseInt(obj.sort) - 1;
  });
  if (tmp_prev_obj.length > 0) {
    if (tmp_prev_obj[0].ele.val() == 'def') {
      return true;
    } else {
      return false;
    }
  }
};
//TODO:判斷前面的所有的元素是全部是否為預設def
select_search.prototype.is_prev_all_def = function (obj) {
  var select = this;
  var all_select = select.all_select;
  var tmp_val_arr = all_select.map(function (item, index, array) {
    return item.ele.val();
  });
  var new_val_arr = tmp_val_arr.splice(0, obj.sort);
  if (new_val_arr.indexOf('def') !== -1) {
    return true;
  } else {
    return false;
  }
};
//TODO:找前一個元素的名字
select_search.prototype.find_prev_text = function (obj, linkId) {
  var select = this;
  var target_id = linkId || 'def';

  var all_select = select.all_select;
  var tmp_prev_obj = all_select.filter(function (item, index, array) {
    return item.sort == parseInt(obj.sort) - 1;
  });
  if (tmp_prev_obj.length > 0) {
    var linkId_text = tmp_prev_obj[0].data.filter(function (
      item,
      index,
      array
    ) {
      return item.id == target_id;
    });

    return linkId_text[0].text;
  }
};
//TODO:重製所有選單
select_search.prototype.reset_all_list = function () {
  var select = this;
  var all_select = select.all_select;
  $.each(all_select, function (index, val) {
    val.ele.empty();
    select.after_select_placeholder_change(val, 'def');
    select.call_select(val);
  });
};
//TODO:重製自己後面的所有選單
select_search.prototype.reset_after_my_ele = function (tmp_current_obj) {
  var select = this;
  var all_select = select.all_select;
  //找出所有後面的選單資料
  var after_obj_arr = all_select.filter(function (item, index, array) {
    return item.sort > tmp_current_obj.sort;
  });
  $.each(after_obj_arr, function (index, val) {
    val.ele.empty();
    select.after_select_placeholder_change(val, 'def');
    select.call_select(val);
  });
};
//TODO:選擇後刷新placeholder文字
select_search.prototype.after_select_placeholder_change = function (
  current_obj,
  val
) {
  var select = this;
  var all_select = select.all_select;
  var current_obj = current_obj;
  var sort = current_obj.sort;
  var current_data = current_obj.data[0];
  var tmp_is_prev = select.is_prev_val(current_obj);
  if (val !== 'def') {
    current_data.text = current_data.after_select_placeholder;
  } else {
    current_data.text = current_data.before_select_placeholder;
    if (sort !== 0) {
      if (!tmp_is_prev) {
        //如果前面不是def
        current_data.text = current_data.after_select_placeholder;
      }
    }
  }
};
//TODO:placeholder文字顏色判斷
select_search.prototype.placeholder_color_change = function (ele) {
  var tmp_ele = ele;
  var render_text = tmp_ele
    .data('select2')
    .$selection.find('.select2-selection__rendered');
  var container = tmp_ele.data('select2').$container;
  //如果選到def 預設選項顏色要給灰
  if (tmp_ele.val() == 'def') {
    render_text.css('color', '#808080');

    if (container.hasClass('select2-container--disabled') == true) {
      //如果是是disabled整個下拉要改變文字顏色
      render_text.css('color', '#bcbcbc');
    }
  } else {
    render_text.css('color', '');
  }
};
//TODO:初始Select2
select_search.prototype.del_select2 = function () {
  var select = this;
  var all_select = select.all_select;
  $.each(all_select, function (index, val) {
    if (val.ele.attr('class') !== undefined) {
      val.ele.select2('destroy');
    }
  });
};
/**
 *
 *
 * @param {*} data_params_arr 原始資料
 *
 */
//TODO:事件區
function set_select_search(data_params_arr) {
  var new_select_search = new select_search(data_params_arr);
  //資料預處理
  new_select_search.data_process();
  //初始化select2
  new_select_search.del_select2();
  //---讓select都綁上plugin
  new_select_search.call_select();

  //所有下拉
  var all_select = new_select_search.all_select;

  //所有事件
  $.each(all_select, function (index, val) {
    var tmp_current_obj = val;
    var tmp_ele = val.ele;
    //自身排序
    var self_sort = tmp_current_obj.sort;
    //找出隔壁的元素
    var next_obj = all_select.filter(function (item, index, array) {
      return item.sort == self_sort + 1;
    });
    //防呆重複綁定
    tmp_ele.off('select2:select');
    tmp_ele.off('select2:open');

    //選擇的時候
    tmp_ele.on('select2:select', function (e) {
      var select_data;
      if (e.params == undefined) {
        var arr_select_data = tmp_current_obj.data.filter(function (
          item,
          index,
          array
        ) {
          return item.id == tmp_ele.val();
        });
        select_data = arr_select_data[0];
      } else {
        select_data = e.params.data;
      }

      //事件規則-
      ////如果從左邊依序選到右邊，只需使用連動選擇後往後更新選單(多層)的這個function-after_filter_all_data
      ////如果從中間開始挑(含最後一個)就要顧慮前面的選單資料reset_prev_list，跟後面的選單資料after_filter_all_data
      var is_search = new_select_search.is_search;
      //判斷前面全部的元素是不是預設def
      var is_prev_all_def = new_select_search.is_prev_all_def(tmp_current_obj);
      //條件:進來的可能是1、2、3、...個下拉，但確保前面的下拉都有數值(前面的下拉不是預設DEF以及"沒使用搜尋")或我目前點的是第一個下拉(可以搜尋、點擊皆可)
      if ((!is_prev_all_def && is_search == false) || val.sort == 0) {
        //不能是最後一個元素(判斷下一個下拉是否存在才跑)
        if (next_obj.length == 0) {
          //placeholder顏色處理
          new_select_search.placeholder_color_change(tmp_ele);
          return false;
        }
        //1、2、3、4 如果我從2開始選3跟4都要重製
        //重製自己後面的所有選單，因為使用者可能已經全部選過一輪
        new_select_search.reset_after_my_ele(tmp_current_obj);
      } else {
        //條件:
        //1、2、3、4都沒有值，我從中間(例如2)下拉做操作(從中間做搜尋操作)會進來
        //或是前面都有值，在中間的下拉做搜尋操作也會進來，例如:如果從第三個下拉做搜尋，就要刷新1、2

        //往前刷新選單
        new_select_search.reset_prev_list(self_sort, all_select, select_data);
        //處理後面的選單，例如:從2開始要處理2後面的下拉
        new_select_search.reset_after_my_ele(tmp_current_obj);
      }
      //選完如果有使用搜尋框功能，選完要把她關掉
      new_select_search.is_search = false;
      //placeholder顏色處理
      new_select_search.placeholder_color_change(tmp_ele);
    });
    //打開時
    tmp_ele.on('select2:open', function (e) {
      //判斷前面有沒有值
      var tmp_is_prev = new_select_search.is_prev_val(tmp_current_obj);
      var dropdown = $(this)
        .data('select2')
        .$dropdown.find('.select2-search--dropdown');
      //找出輸入框
      var search_box = tmp_current_obj.ele
        .data('select2')
        .$dropdown.find('.select2-search__field');
      //打開時要判斷選單顯示
      if (tmp_is_prev) {
        var data = e.params.data;
        // 打開如果是預設
        //由於一次只會顯示一個選單，因此直接選
        //預設不顯示資料只開放搜尋
        var list_ele = $(this)
          .data('select2')
          .$dropdown.find('.select2-results');
        //預設下拉不顯示
        list_ele.css('display', 'none');
        dropdown.on('keyup', search_box, function (e) {
          var list_ele_children = tmp_ele
            .data('select2')
            .$dropdown.find('.select2-results__options')
            .children();
          if (list_ele_children.length > 0 && search_box.val() !== '') {
            //如果有資料再顯示
            list_ele.css('display', '');
          } else {
            list_ele.css('display', 'none');
          }
        });
      }
      if (index !== 0) {
        //記下當下的資料
        new_select_search.show_current_data(
          tmp_current_obj,
          all_select[index - 1].ele.val()
        );
      } else {
        new_select_search.show_current_data(tmp_current_obj, 'def');
      }

      //假的placeholder處理
      var hint_html =
        '<span class="hint">' + val.search_placeholder + '</span>';
      //假placeholder文字
      //包裝搜尋框的ele
      var hint = $(this).data('select2').$dropdown.find('.hint');
      var dropdown = $(this)
        .data('select2')
        .$dropdown.find('.select2-search--dropdown');
      var search_box = $(this)
        .data('select2')
        .$dropdown.find('.select2-search__field');
      //判斷有沒有假placeholder的class，沒有的話就新增一個
      if (hint.length > 0) {
        hint.text(val.search_placeholder);
      } else {
        dropdown.append(hint_html);
        hint = dropdown.find('.hint');
      }
      //預設打開一定顯示
      hint.show();
      //點假的placeholder還是要觸發input焦點
      hint.on({
        click: function () {
          search_box.focus();
        },
      });
      dropdown.on('keyup', search_box, function (e) {
        is_show(search_box);
      });
      //判斷plceholder顯示
      function is_show(search_box) {
        var tmp_val = search_box.val();
        if (tmp_val.length > 0) {
          hint.hide();
        } else {
          hint.show();
        }
      }
    });
  });
}
//預設值
(function ($) {
  $.fn.set_select_search_def_val = function (val) {
    if (val !== '') {
      this.val(val).trigger('change').trigger('select2:select');
    }
  };
})(jQuery);
//帶入自訂值
(function ($) {
  $.fn.set_select_search_add_option = function (id, text) {
    var id = id;
    var text = text;
    if (id == '') {
      id = 'null';
    }
    if (text == '') {
      text = ' ';
    }
    var data = {
      id: id,
      text: text,
    };
    var select = this;
    setTimeout(function () {
      select.append(
        "<option value='" + data.id + "' selected>" + data.text + '</option>'
      );
      select.trigger('change');
    }, 0);
  };
})(jQuery);
//封裝插件
(function ($) {
  var methods = {
    init: function (options) {
      //判斷存資料的Input存在是否 false就是不存在
      var data_flag = true;
      //下拉存在防呆判斷
      options.ele_id_arr.forEach(function (item, index, array) {
        var select = $('#' + item);
        if (select.length == 0) {
          console.warn('其中的select不存在，請檢查select id');
          data_flag = false;
        }
      });

      //資料parse出來去判斷
      options.data_arr = options.data_arr.map(function (item, index, array) {
        var input = $('#' + item);
        if (input.length == 0) {
          console.warn('其中的input不存在，請檢查input id');
          data_flag = false;
          return false;
        }
        //如果是空值
        if (input.val() == '' || input.val() == undefined) {
          console.warn('請檢查input資料');
          data_flag = false;
          return false;
        }
        //資料有錯的話就會像這樣 [Array(4), false, Array(10), Array(13)]
        return JSON.parse(input.val());
      });
      //有一個不存在就跳出
      if (data_flag == false) {
        return false;
      }
      //元素跟資料數量和格式一定要依樣才給跑
      if (
        options.ele_id_arr.length !== options.data_arr.length ||
        options.ele_id_arr.length !== options.format_arr.length ||
        options.data_arr.length !== options.format_arr.length
      ) {
        console.warn('呼叫格式數量有誤');
        return false;
      }
      //資料處理
      var data_params_arr = options.ele_id_arr.map(function (
        item,
        index,
        array
      ) {
        var tmp_obj = {
          ele_id: item,
          data: options.data_arr[index], //json資料
          search_condition_arr: options.extra_search_condition_arr[index], //多的搜尋條件欄位
          format: options.format_arr[index],
        };
        return tmp_obj;
      });
      set_select_search(data_params_arr);
    },
    setDefVal: function (val) {
      //範例使用方式:
      //$('你的下拉').setSelectSearch('setDefVal','001');
      if (val !== '') {
        this.val(val).trigger('change').trigger('select2:select');
      }
    },
    addOption: function (id, text) {
      //範例使用方式:
      //$('你的下拉').setSelectSearch('addOption','001','選項文字');
      var id = id;
      var text = text;
      if (id == '') {
        id = 'null';
      }
      if (text == '') {
        text = ' ';
      }
      var data = {
        id: id,
        text: text,
      };
      var select = this;
      setTimeout(function () {
        select.append(
          "<option value='" + data.id + "' selected>" + data.text + '</option>'
        );
        select.trigger('change');
      }, 0);
    },
  };

  $.fn.setSelectSearch = function (method) {
    // Method calling logic
    if (methods[method]) {
      return methods[method].apply(
        this,
        Array.prototype.slice.call(arguments, 1)
      );
    } else if (typeof method === 'object' || !method) {
      //如果是帶有參數
      return methods.init.apply(this, arguments);
    } else {
      $.error('找不到此方法');
    }
  };
})(jQuery);

//排序
$(document).ready(function (e) {
  //判斷是升冪還是降冪
  if ($(".sort-table").find(".default-sort-th-down").length > 0) {
    $(".default-sort-th-down").find(".sort-th-content").addClass("sort-down"); //升
    $(".default-sort-th-down").find(".sort-down-last").addClass("sort-down");
    var sort_start = -1;
  } else if ($(".sort-table").find(".default-sort-th-up").length > 0) {
    $(".default-sort-th-up").find(".sort-th-content").addClass("sort-up"); //降
    $(".default-sort-th-up").find(".sort-up-last").addClass("sort-up");
    var sort_start = 1;
  }
  //點擊th進行排序
  $('.sort-th').on('click', function (e) {
    e.stopPropagation();
    var table = $(this).parents('.sort-table').eq(0);
    //如果是固定功能的話將table指向固定table
    if ($(this).closest('.fixed-table-header').length > 0) {
      table = $('.fixed-table-body table');
    }

    var rows = table
      .find('tr:gt(0)')
      .not('tr table tr')
      .toArray()
      .sort(comparer($(this).index()));

    var down_last = $(this).find('.sort-down-last').length; //只能升冪
    var up_last = $(this).find('.sort-up-last').length; //升冪符號
    var down = $(this).find('.sort-down').length; //只能降冪
    var up = $(this).find('.sort-up').length; //降冪符號
    if (down_last > 0 && down == 0) {
      sort_start = -1;
      $(this).find('.sort-down-last').addClass('sort-down');
    } else if (up_last > 0 && up == 0) {
      sort_start = 1;
      $(this).find('.sort-up-last').addClass('sort-up');
    } else if ((down_last > 0 && down > 0) || (up_last > 0 && up > 0)) {
      return;
    } else {
      sort_start *= -1;
    }

    if (sort_start == -1) {
      rows = rows.reverse();
      $(this).find('.sort-th-content').removeClass('sort-up');
      $(this).find('.sort-th-content').addClass('sort-down');
    } else {
      $(this).find('.sort-th-content').removeClass('sort-down');
      $(this).find('.sort-th-content').addClass('sort-up');
    }
    $(this)
      .siblings()
      .find('.sort-th-content,.sort-down-last,.sort-up-last')
      .removeClass('sort-up sort-down');

    if ($(rows[0]).attr('data-name') != undefined) {
      var cd = 0; //count data-name
      var dn = []; //data-name
      $(rows).each(function () {
        dn[cd] = $(this).attr('data-name');
        cd++;
      });

      if (sort_start == -1) {
        for (i = dn.length - 1; i >= dn.length / 2; i--) {
          for (j = 0; j < rows.length / 2; j++) {
            if (
              dn[i] == $(rows[j]).attr('data-name') &&
              rows[dn.length - 1] != rows[j]
            ) {
              var storage = rows[dn.length - 1];
              rows.splice(dn.length - 1, 1);
              rows.splice(j + 1, 0, storage);
              break;
            }
          }
        }
      } else {
        for (i = 0; i < dn.length / 2; i++) {
          for (j = rows.length; j > 0; j--) {
            if (dn[i] == $(rows[j]).attr('data-name') && rows[0] != rows[j]) {
              var storage = rows[0];
              rows.splice(j + 1, 0, storage);
              rows.splice(0, 1);
              break;
            }
          }
        }
      }
    }
    table.children('tbody').empty().html(rows);
    //文字溢出-升密降冪的位置會不一樣導致光棒底色也不一樣，dot"..."的底色也會不一樣因此要重新呼叫
    if ($('.text-overflow').length > 0) {
      $('.text-overflow').plugin_check_overflow_text({
        show_row: parseInt($('.text-overflow').attr('data-showrow')),
      });
    }
  });
});

//step流程
$(document).ready(function () {
  var wws = $(window).width();
  var stepNum = $('.step-ul li').length; //流程數
  var showNum = stepNum; //顯示的流程數
  var stepWidth = (100 / stepNum).toFixed(6); //每個流程寬度
  var startNum; //顯示的第一個編號
  var endNum;	//顯示的最後一個編號
  var currentNum; //現在的編號

  function step_set() {
    $('.step-ul li').css('width', stepWidth + '%');
    //step2專用
    $('.step-ul .step-finish:last .step-arrow').addClass('lastarrow');
    if ($('.step-ul .step-finish').length == stepNum) {
      $('.step-ul .step-finish:last .step-arrow').removeClass('lastarrow').addClass('lastarrow2');
    }

  }

  function step_adjust() {
    //判斷螢幕寬度決定流程個數
    if (wws <= 480) {
      showNum = 3;
    }
    else if (wws <= 768) {
      showNum = 4;
    }
    else if (wws <= 1024) {
      showNum = 5;
    }
    //依項目需求調正
    else if (wws <= 1366) {
      showNum = 7;
    }
    else {
      showNum = $('.step-ul li').length;
      stepWidth = (100 / stepNum).toFixed(6);
      $('.step-ul li').css('width', stepWidth + '%');
      $('.step-ul li').show();
      //return;
    }
    //如果顯示的數量比流程數量還大，showNum = stepNum
    if (showNum >= stepNum) {
      showNum = stepNum;
    }

    //判斷現在編號
    stepWidth = (100 / showNum).toFixed(6);
    $('.step-ul li').css('width', stepWidth + '%');
    $('.step-ul .step-finish:last').addClass('currentStep');
    currentNum = $('.step-ul li').index($('.currentStep')) + 1;
    //顯示箭頭
    $('.stepmoveleft').show();
    $('.stepmoveright').show();
    //判斷左右箭頭是否隱藏
    if (showNum >= stepNum) {
      showNum = stepNum;
      startNum = 1;
      endNum = stepNum;
      $('.stepmoveleft').hide();
      $('.stepmoveright').hide();
    }
    else if (currentNum == 1) {
      startNum = currentNum;
      endNum = startNum + showNum - 1;
      $('.stepmoveleft').hide();
    }
    else if (currentNum + showNum - 2 < stepNum) {
      startNum = currentNum - 1;
      endNum = startNum + showNum - 1;
    }
    else if (currentNum + showNum - 2 >= stepNum) {
      startNum = stepNum - showNum + 1;
      endNum = stepNum;
      $('.stepmoveright').hide();
    }
    //隱藏範圍外的編號
    for (i = 1; i <= $('.step-ul li').length; i++) {
      if (i < startNum || i > endNum) {
        $('.step-ul li:nth-child(' + i + ')').hide();
      }
      else {
        $('.step-ul li:nth-child(' + i + ')').show();
      }
    }
    if (currentNum == 1) {
      $('.laststep').prop('disabled', true);
    } else {
      $('.laststep').prop('disabled', false);
    }
    if (currentNum == stepNum) {
      //$('.nextstep').prop('disabled',true);
      $('.nextstep').val('完　成');
    } else {
      $('.nextstep').prop('disabled', false);
      $('.nextstep').val('下一步');
    }
    $(".area").removeClass("onerow");
    $('.content-ul > li:eq(' + (currentNum - 1) + ')').css('display', 'block');

  }


  //改變高度
  function stepHeight() {
    $('.step-ul li').each(function () {
      $('.step-ul li,.step-name,.step-arrow').removeClass('one-row');
      var stepLiHeight = $(this).outerHeight();
      var stepLiSumHeight = parseInt($(this).css('padding-top')) + parseInt($(this).css('padding-bottom')) + $(this).find('.step-num').outerHeight();
      if (stepLiHeight > stepLiSumHeight) {
        $('.step-name').addClass('one-row');
        return false;
      } else {
        $('.step-ul li,.step-arrow').addClass('one-row');
      }
    });
  }


  //編號右移
  $('.stepmoveright').on('click', function () {
    if (endNum < stepNum) {
      endNum += 1;
      $('.step-ul li:nth-child(' + startNum + ')').hide();
      $('.step-ul li:nth-child(' + endNum + ')').show();
      startNum += 1;
      $('.stepmoveleft').show();
      $('.stepmoveright').show();

      if (endNum == stepNum) {
        $('.stepmoveright').hide();
      }
    }

  });
  //編號左移
  $('.stepmoveleft').on('click', function () {
    if (startNum > 1) {
      startNum -= 1;
      $('.step-ul li:nth-child(' + startNum + ')').show();
      $('.step-ul li:nth-child(' + endNum + ')').hide();
      endNum -= 1;
      $('.stepmoveleft').show();
      $('.stepmoveright').show();

      if (startNum == 1) {
        $('.stepmoveleft').hide();
      }
    }

  });


  //點擊流程會將current移至點擊位置
  /*$('.step-ul li').on('click',function(){
    $('.currentStep').removeClass('currentStep');
    $('.lastarrow').removeClass('lastarrow');
    if($(this).attr('class') == 'step-notyet'){
      $(this).addClass('step-finish').addClass('currentStep').removeClass('step-notyet');
      $(this).prevAll().addClass('step-finish').removeClass('step-notyet');
    }
    else if($(this).attr('class') == 'step-finish'){
      $(this).addClass('currentStep');
      $(this).nextAll('.step-finish').addClass('step-notyet').removeClass('step-finish');
    }

    $('.step-ul .step-finish:last .step-arrow').addClass('lastarrow');
    if($('.step-ul .step-finish').length == stepNum){
      $('.step-ul .step-finish:last .step-arrow').css('background','#0F76BD');
    }
    else{
      $('.step-ul .step-notyet:last .step-arrow').css('background','#E6F7FF');
    }
  });*/

  $('.nextstep').on('click', function () {
    $('.currentStep').removeClass('currentStep');
    $('.lastarrow').removeClass('lastarrow');
    $('.step-notyet:first').addClass('step-finish').addClass('currentStep').removeClass('step-notyet');
    $('.step-ul .step-finish:last .step-arrow').addClass('lastarrow');
    if ($('.step-ul .step-finish').length == stepNum) {
      $('.step-ul .step-finish:last .step-arrow').removeClass('lastarrow').addClass('lastarrow2');
    }
    else {
      $('.step-ul .step-notyet:last .step-arrow').addClass('lastarrow');
    }
    $('.content-ul > li').css('display', 'none');
    //$('.content-ul > li:eq('+(currentNum - 1)+')').css('display','block');

    /*if ($('.nextstep').val() == '完　成') {
      window.close();
    }*/

    step_adjust();
  });

  $('.laststep').on('click', function () {
    $('.currentStep').removeClass('currentStep');
    $('.lastarrow').removeClass('lastarrow');
    $('.step-finish:last').removeClass('step-finish').addClass('step-notyet');
    $('.step-ul .step-finish:last .step-arrow').addClass('lastarrow');
    if ($('.step-ul .step-finish').length == stepNum) {
      $('.step-ul .step-finish:last .step-arrow').removeClass('lastarrow').addClass('lastarrow2');
    }
    else {
      $('.step-ul .step-notyet:last .step-arrow').addClass('lastarrow');
    }
    $('.content-ul > li').css('display', 'none');
    step_adjust();
  });

  $(window).resize(function () {
    wws = $(window).width();
    step_adjust();
    stepHeight();
  });
  step_set();
  step_adjust();
  stepHeight();


});

// 系統路徑名稱
$(document).ready(function () {
  var fullPath = $("input[name='name_ch']").val();
  if (fullPath == "Y") {
    $(".system_name > .name_ch").toggle();
  }
  $(".system_name .name_ch").click(function () {
    $(".system_name .name_ch").toggleClass("hide");
    if (fullPath == "Y") {
      fullPath = "N";
    } else {
      fullPath = "Y";
    }
    $("input[name='name_ch']").val(fullPath);
  });
});
$(document).ready(function () {
  //一對多光棒效果判斷
  $(".table-om tr").each(function () {
    var table_m_qut = $(this).find(".table-many tr").length;

    if ($(this).find("click").length > 0) {
      if (table_m_qut == 1) {
        $(this).addClass("click-table-om");
      }
    }

    //個人工作管理系統用-判斷被交辦人數量
    var lineHeight = parseInt($(this).find(".wk-sys").css("line-height")) * 2; //預設顯示兩行
    var paddingTop = parseInt($(".table-many tr td").css("padding-top")) * 2; //大於兩行時增加內距給高度
    if (table_m_qut >= 2) {
      var table_m_qut_padding = (table_m_qut - 1) * paddingTop;
    } else {
      var table_m_qut_padding = 0;
    }

    $(this).find(".table-one .wk-sys").css("height", table_m_qut * lineHeight + table_m_qut_padding);
    $(this).find(".table-many .wk-sys").css("height", lineHeight);
  });
});
$(document).ready(function () {
  //是否有第二層
  $(".tabs").each(function () {
    if ($(this).next().is(".tabs-level2")) {
      $(this).css("border-bottom", "none");
    }
  });

  //筆數等於0時不顯示
  $(".tabs > li > a .tab-num").each(function () {
    var tabNum = $(this).text();
    if (tabNum == "0") {
      $(this).css("display", "none");
    }
  });
});
$(document).ready(function () {
  $('.text-overflow').plugin_check_overflow_text();
});
/**
 * jQuery自定义函数
 */
(function ($, window, document, undefined) {
  /**
   * 文字溢出
   *
   *   注意：
   *   文字本身容器需设置line-height
   *
   */
  $.fn.plugin_check_overflow_text = function (options) {
    var defaults = {
      position: 'left', //預設顯示左邊
      show_row: 1, //文字溢出預設顯示行數
    };
    var settings = $.extend(defaults, options);

    this.each(function (index, element) {
      var $container = $(this);
      var $content = $container.find('div');
      //限制幾行 HTML有設定就聽HTML的
      var show_row =
        parseInt($container.attr('data-showRow')) ||
        parseInt(settings.show_row);
      //原始lineheight
      var raw_line_height = parseInt($container.css('line-height'));
      //進去先給設定的高
      $container.height(show_row * raw_line_height);
      //一行的處理方式
      if (show_row == 1) {
        $content.css({
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          'white-space': 'nowrap',
        });
        return;
      }

      //抓...的背景色
      var dot_bg_color = rgb2hex(
        $container.closest('tr').css('backgroundColor')
      );
      //如果內容高度大於限制行數高度會加入....
      if ($content.height() > raw_line_height * show_row) {
        //重新分配lineheight
        if ($container.find('.dot').length == 0) {
          //"..."的方向
          if (settings.position == 'right') {
            $container.append('<div class="dot right">......</div>');
          } else {
            $container.append('<div class="dot">......</div>');
          }
        } else {
          $container.find('.dot').show();
        }
        $container.find('>div').css('lineHeight', raw_line_height + 'px');
        $container.find('.dot').css({
          lineHeight: raw_line_height + 'px',
          height: raw_line_height + 1 + 'px',
        });
      } else {
        $container.find('.dot').hide();
      }
      //"..."的背景色須設定，因為滑鼠滑進去會有光棒會讓"..."的底色不一樣
      $container.find('.dot').css('backgroundColor', dot_bg_color);
    });
    //RGB轉HEX
    function rgb2hex(rgb) {
      //沒有RGB或是==黑色
      if (rgb.search('rgb') == -1 || rgb == 'rgba(0, 0, 0, 0)') {
        //返回白色
        return '#ffffff00';
      } else {
        rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);

        function hex(x) {
          return ('0' + parseInt(x).toString(16)).slice(-2);
        }
        return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
      }
    }
  };
})(jQuery);

$(document).ready(function () {
  //單個縮小
  $('.icon-toggle-arrow-btn').on('click', function () {
    $(this).toggleClass('active');
    $(this).closest('.toggleTable-card-header').siblings('.toggleTable-card-content').toggleClass('hide');
    $(this).closest('.toggleTable-card-header').toggleClass('active');
  });
  //全開
  $('.icon-toggle-all-show-btn').on('click', function () {
    $('.icon-toggle-arrow-btn,.toggleTable-card-header').removeClass('active');
    $('.toggleTable-card-content').removeClass('hide');
  });
  //全關
  $('.icon-toggle-all-hide-btn').on('click', function () {
    $('.icon-toggle-arrow-btn,.toggleTable-card-header').addClass('active');
    $('.toggleTable-card-content').addClass('hide');
  });
  //鏈結點擊
  $('.link-select').on('click', function (e) {
    var target = $(this).find('.link-select-bottom');
    if (target.hasClass('show')) {
      target.removeClass('show top');
    } else {
      $('.link-select-bottom').removeClass('show top');
      e.stopPropagation();
      //這邊是判斷如果假下拉會被畫面遮住，就往上顯示
      if (e.target.className == 'icon-link-btn') {
        target.addClass('show');
        var is_out_window = isInViewPortOfOne(target[0]);

        if (is_out_window) {
          target.addClass('top');
        }
      }
    }
    ///是否超過視窗
    function isInViewPortOfOne(el) {
      var viewHeight =
        window.innerHeight || document.documentElement.clientHeight;
      var target = el;
      var clientRect = target.getBoundingClientRect();
      var top = clientRect.top;
      var bottom = clientRect.bottom;
      //判斷如果不超出上下視窗top一定要>0 bottom要小於視窗高
      if (!(top > 0 && bottom < viewHeight)) {
        return true;
      } else {
        return false;
      }
    }
  });
  $(document).on('click', function (e) {
    $('.link-select-bottom').removeClass('show');
  });
  ////滾到指定位置
  $('.link-select').on('click', '.cardMenu', function () {
    var num = $(this).attr('data-menu');
    var card = $('.toggleTable-card[data-cardnum="' + num + '"]');
    var content = card.find('.toggleTable-card-content');
    //如果點鏈結後的內容沒有打開要先打開
    if (content.hasClass('hide')) {
      content.removeClass('hide');
      //箭頭顯示一併處理
      card.find('.icon-toggle-arrow-btn,.toggleTable-card-header').removeClass('active');
    }
    //定位點
    scroll_to_target();

    //點了選單選單要關閉
    $('.link-select-bottom').removeClass('show');
    //滾到指定位置
    function scroll_to_target() {
      //滾至指定位置
      card[0].scrollIntoView();
      var base = $(document).scrollTop();
      var banner_height =
        $('#top').outerHeight() + $('.system_bg').outerHeight() + 15;
      var scrollHeight = $(document).height(); //網頁總高度
      var scrollPosition = $(window).height() + $(window).scrollTop(); //視窗高度+視窗滾輪高度
      //判斷卷軸是否碰到底部，如果碰到底部就不會顯示在banner擋住的位置，就不用減去banner高度
      if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        //滾到底部
        $(document).scrollTop(base);
      } else {
        //被擋住就要剪掉上面Banner擋住的高度
        $(document).scrollTop(base - banner_height);
      }
    }
  });
  //產生選單
  $('.toggleTable-wrapper').plugin_make_toggleTable_dropdown_menu();

});
//產生定位點的下拉選單
(function ($) {
  $.fn.plugin_make_toggleTable_dropdown_menu = function (options) {
    var card = this.find('.toggleTable-card');
    var tmp_li_str = '';
    //組成假下拉
    card.each(function (index, element) {
      // element == this
      $(this).attr('data-cardNum', index);
      var title = $(this).find('.toggleTable-title').text();
      tmp_li_str +=
        '<li><a class="cardMenu" data-menu="' +
        index +
        '">' +
        title +
        '</a></li>';
    });
    var tmp_ul_str = '<ul class="link-select-menu">';
    tmp_ul_str += tmp_li_str;
    tmp_ul_str += '</ul>';
    var tmp_msg_str = '<div class="link-select-bottom">';
    tmp_msg_str += '<i></i>';
    tmp_msg_str += tmp_ul_str;
    tmp_msg_str += '</div>';
    $('.link-select').each(function (index, element) {
      $(this).append(tmp_msg_str);
    });
  };
})(jQuery);