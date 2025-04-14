var ww = window.innerWidth;
$(document).ready(function () {

    if ($('.listbox-style2').length > 0) {
        $(window).resize(function () {
            var wwListBox = window.innerWidth;

            if (wwListBox > 768) {
                $('.listbox').before($('.select_targetbox'));
            } else {
                $('.targetbox-area').before($('.select_targetbox'));
            }
            var classSelectVal = $('.class_select2').val();
            getTbNameVal(classSelectVal);

        });

    } else if ($('.listbox-style1').length > 0) {
        $(window).resize(function () {
            var wwListBox = window.innerWidth;
            if (wwListBox >= 768) {
                $('.select_targetbox').css('display', 'none');
                $('.targetbox-content').css('display', 'table');
            } else {
                $('.targetbox-content').css('display', 'none');
                $('.select_targetbox').css('display', 'block');
                var classSelectVal = $('.class_select2').val();
                getTbNameVal(classSelectVal);
            }
        });
    }

    $(window).bind('resize orientationchange', function () {
        if (RWD_status == 'Y') {
            if (ww >= 768) {
                if ($('.listbox-style2').length == 0) {
                    $('.targetbox>div').css('max-height', '' + 300 / $('.targetbox-content').length + 'px');
                }
                max_height();
                min_height();
            } else {
                $('.targetbox').height('auto');
                $('.targetbox>div').css('max-height', '300px');
            }
        } else {
            min_height();
        }
    });
});
var wwm = window.innerWidth;

/***必須要放在main.js之後，否則$('.blank-name')還沒生成會抓不到對像***/
$(document).ready(function () {
    //1024px以下移除多餘空白
    var empty_1024 = function () {
        $('.blank-name').hide();
        $('.blank-cb').hide();
        //補空白
        $('.member2,.member2-style2').each(function () {
            if (
                $(this).find('.member2-name').length % 4 == 1 ||
                $(this).find('.member2-name').length % 4 == 3
            ) {
                $(this).find('.blank-name:first').show();
                $(this).find('.blank-cb:first').show();
            }
        });
        $('.mb-cont').each(function () {
            if ($(this).find('.mb-cont-name').length % 4 == 1 || $(this).find('.mb-cont-name').length % 4 == 3) {
                $(this).find('.blank-name:first').show();
                $(this).find('.blank-cb:first').show();
            }
        });
    };
    //判斷寬度
    var width_judge = function () {
        if (wwm <= 480) {
            $('.blank-name').hide();
            $('.blank-cb').hide();
        } else if (wwm <= 1024) {
            empty_1024();
        } else {
            $('.blank-name').show();
            $('.blank-cb').show();
        }
    };

    $(window).bind('resize orientationchange', function () {
        if (wwm != window.innerWidth) {
            wwm = window.innerWidth;
            width_judge();
        }
    });

    width_judge();
});
var head = $("head").html();
var ww = window.innerWidth;
$(document).ready(function () {
    $(window).bind("resize orientationchange", function () {
        if (ww != window.innerWidth) {
            //若實際上有改變就更新ww並執行adjustMenu()//for iphone resize bug
            ww = window.innerWidth;
            wfTtimeNumIpWd();
            ellipsis();
            //彈跳視窗
            if ($(".dialog-all").css("display") == "block") {
                setDialog();
            }
        }
    });
});
$(document).ready(function () {
    var tabs_qut = $('.tabs').length; //頁籤數量
    var total_width = []; //總和
    var tabsLevel2TotalWidth = []; //第二層總和
    var b = 0; //第二層計數器

    //第一層頁籤
    for (var a = 0; a < tabs_qut; a++) {
        //產生下拉選單
        $('.tabs:eq(' + a + ')').before('<div class="select_tabs"><select class="class_select" onchange="javascript:location.href=this.value;"></select></div>');

        //第一層頁籤寬度
        var li_width = 0;
        var li_qut = $('.tabs:eq(' + a + ')').find('li').length;
        for (var i = 1; i <= li_qut; i++) {
            li_width = li_width + $('.tabs:eq(' + a + ')').find('li:nth-child(' + i + ')').width();
        }
        total_width[a] = li_width;

        //第一層data-tgroup名稱
        var groupName = $('.tabs:eq(' + a + ')').attr('data-tgroup');

        //第一層與第二層data-tgroup名稱是否相同
        if ($('.tabs-level2:eq(' + b + ')').attr('data-tgroup') == groupName && groupName != undefined) {
            //顯示第二層頁籤的寬度
            var tabsLevel2_li_width = 0;
            var tabsLevel2_li_qut = $('.tabs-level2:eq(' + b + ')').find('li').length;
            for (var l = 1; l <= tabsLevel2_li_qut; l++) {
                if ($('.tabs-level2:eq(' + b + ') li:nth-child(' + l + ')').css("display") == "block") {
                    var tabsLevel2_blockLi_a_qut = $('.tabs-level2:eq(' + b + ') li:nth-child(' + l + ')').find('a').length;
                    for (var m = 1; m <= tabsLevel2_blockLi_a_qut; m++) {
                        tabsLevel2_li_width = tabsLevel2_li_width + ($('.tabs-level2:eq(' + b + ') li:nth-child(' + l + ')').find('a:nth-child(' + m + ')').width() + 50);

                    }
                }
            }
            tabsLevel2TotalWidth[b] = tabsLevel2_li_width;

            //第一層+第二層頁籤的選項
            for (var j = 0; j < li_qut; j++) {
                var li_text = $('.tabs:eq(' + a + ')').find('li:eq(' + j + ')').text();
                var tabsLevel2_li_a_qut = $('.tabs-level2:eq(' + b + ')').find('li:eq(' + j + ') a').length;
                for (var k = 1; k <= tabsLevel2_li_a_qut; k++) {
                    var tabsLevel2_li_text = $('.tabs-level2:eq(' + b + ')').find('li:eq(' + j + ') a:eq(' + (k - 1) + ')').text();
                    var tabsLevel2_li_link = $('.tabs-level2:eq(' + b + ')').find('li:eq(' + j + ') a:eq(' + (k - 1) + ')').attr('href');
                    if ($('.tabs-level2:eq(' + b + ')').find('li:eq(' + j + ') >  a:eq(' + (k - 1) + ')').hasClass('active')) {
                        $('.class_select:eq(' + a + ')').append('<option value="' + tabsLevel2_li_link + '" selected>' + li_text + ' -' + tabsLevel2_li_text + '</option>');
                    } else {
                        $('.class_select:eq(' + a + ')').append('<option value="' + tabsLevel2_li_link + '">' + li_text + ' -' + tabsLevel2_li_text + '</option>');
                    }
                }
            }

            //RWD
            if ($('.rightmain').width() > total_width[a] + 300 && $('.rightmain').width() > tabsLevel2TotalWidth[b] + 300) {
                $('.select_tabs:eq(' + a + ')').css('display', 'none');
                $('.tabs:eq(' + a + '),.tabs-level2:eq(' + b + ')').css('display', 'flex');
            } else {
                $('.select_tabs:eq(' + a + ')').css('display', 'block');
                $('.tabs:eq(' + a + '),.tabs-level2:eq(' + b + ')').css('display', 'none');
            }

            b = b + 1;

        } else {
            //第一層頁籤的選項
            var tabStr = '';
            for (var j = 1; j <= li_qut; j++) {
                var li_text = $('.tabs:eq(' + a + ')').find('li:nth-child(' + j + ')').text();
                var li_link = $('.tabs:eq(' + a + ')').find('li:nth-child(' + j + ') a').attr('href');
                if ($('.tabs:eq(' + a + ')').find('li:nth-child(' + j + ') a').is('#currentid')) {
                    tabStr += '<option value="' + li_link + '" selected>' + li_text + '</option>';
                } else {
                    tabStr += '<option value="' + li_link + '">' + li_text + '</option>';
                }
            }

            $('.class_select:eq(' + a + ')').append(tabStr);

            //RWD
            if ($('.rightmain').width() > total_width[a] + 300) {
                $('.select_tabs:eq(' + a + ')').css('display', 'none');
                $('.tabs:eq(' + a + ')').css('display', 'flex');
            } else {
                $('.select_tabs:eq(' + a + ')').css('display', 'block');
                $('.tabs:eq(' + a + ')').css('display', 'none');
            }
        }
    }
    //拉動視窗時
    function resizeTabs() {
        var tabs_qut = $('.tabs').length; //頁籤數量
        var b = 0; //第二層計數器

        //第一層頁籤
        for (var a = 0; a < tabs_qut; a++) {
            var groupName = $('.tabs:eq(' + a + ')').attr('data-tgroup');
            if ($('.tabs-level2:eq(' + b + ')').attr('data-tgroup') == groupName && groupName != undefined) {

                if ($('.rightmain').width() > total_width[a] + 50 && $('.rightmain').width() > tabsLevel2TotalWidth[b] + 500) {
                    $('.select_tabs:eq(' + a + ')').css('display', 'none');
                    $('.tabs:eq(' + a + '),.tabs-level2:eq(' + b + ')').css('display', 'flex');
                } else {
                    $('.select_tabs:eq(' + a + ')').css('display', 'block');
                    $('.tabs:eq(' + a + '),.tabs-level2:eq(' + b + ')').css('display', 'none');
                }

                b = b + 1;
            } else {
                if ($('.rightmain').width() > total_width[a] + 500) {
                    $('.select_tabs:eq(' + a + ')').css('display', 'none');
                    $('.tabs:eq(' + a + ')').css('display', 'flex');
                } else {
                    $('.select_tabs:eq(' + a + ')').css('display', 'block');
                    $('.tabs:eq(' + a + ')').css('display', 'none');
                }
            }
        };
    }
    $(window).resize(function () {
        resizeTabs();
    });
});