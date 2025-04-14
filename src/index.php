<?php

$root_dir = realpath(dirname(__FILE__)) . DIRECTORY_SEPARATOR;
include_once($root_dir . "header.php"); // 引入頁面頭部模板，允許程式繼續執行
include_once($root_dir . "body.php"); // 引入頁面頭部模板，允許程式繼續執行
$PHP_SELF = 0;

$html .= '<div class="content">
          <div class="rightmain">
              <form name="form1" method="POST" action="' . $PHP_SELF . '" enctype="multipart/form-data" class="mainForm">
                  <div class="form">
                      <div class="form_table">';

$html .= '<div class="area"><div>*複製方式</div></div>
          <div class="area">
              <div>
                  <label for="radio-1" class="label-input-item"><input type="radio" name="radio1" id="radio-1"
                      checked>總　額</label>：<input type="text" class="text-right num-format" data-numformat="true,true,0"
                    size="15"><input type="hidden">&nbsp;元<br>
                  <label for="radio-2" class="label-input-item"><input type="radio" name="radio1"
                      id="radio-2">百分比</label>：<input type="text" class="text-right num-format"
                    data-numformat="false,true,3" size="15"><input type="hidden">&nbsp;%
              </div>
          </div>';

$html .= '<div class="area"><div>*合約日期</div></div>
          <div class="area col2">
              <div>
                  <span class="range_calendar">
                    <input type="text" class="date_picker" value="" data-min_day="109/01/01" data-max_day="109/12/31"
                      data-show_del_icon="false" />
                  </span>
                  <!-- <span class="stander_calendar">
                      <input type="text" class="date_picker" value="" data-min_day="109/01/01" data-max_day="109/12/31" data-show_del_icon="false">
                  </span> -->
                  <!-- <span class="range_group_calendar">
                                    <span class="stander_calendar">
                                        <input type="text" class="date_picker" value="" data-min_day="" data-max_day="">
                                    </span>
                                    <br>~<br>
                                    <span class="stander_calendar">
                                        <input type="text" class="date_picker" value="" data-min_day="" data-max_day=""
                                            data-show_del_icon="false">
                                    </span>
                                </span> -->
              </div>
          </div>';

$html .= '<div class="area"><div>*合約案號</div></div>
          <div class="area col2"><div><input type="text" /></div></div>';

$html .= '<div class="area"><div>*名稱</div></div>
          <div class="area col2"><div><input type="text" style="width: 100%" /></div></div>';

$html .= '<div class="area"><div>*維護群組</div></div>
          <div class="area col2">
                <select>
                  <option></option>
                  <option>000003</option>
                </select>
          </div>';

$html .= '<div class="area"><div>停用</div></div>
          <div class="area">
              <div>
                  <label for="radio-1" class="label-input-item"><input type="radio" name="1" id="radio-1" />是</label>&nbsp;
                  <label for="radio-2" class="label-input-item"><input type="radio" name="1" id="radio-2" checked />否</label>
              </div>
          </div>';

$html .= '<div class="area"><div>*起訖地點</div></div>
          <div class="area">
              <div>
                  <input type="text" size="30" value="醫策會" data-val="val1" />
                  &nbsp;
                  <a href="javascript: void(0)" class="icon-change-btn" data-change="val1 val2"></a>
                  &nbsp;
                  <input type="text" size="30" value="葳橋" data-val="val2" />
              </div>
          </div>';

//react id
$html .= '<div class="area"><div>*起訖地點-React</div></div>
          <div class="area">
                <div id="react-app" data-type1="text" data-size1="30" data-val1="react-val" data-type2="text" data-size2="30" data-val2="葳橋2"></div>
          </div>
          <div id="react-app2"></div>';

//class="form_table" end;
$html .= '</div>';
//class="form" end;
$html .= '</div>';

$html .= '<div class="btn">
            <div>
              <input type="button" value="新　增" />
              <input type="button" value="刪　除" disabled />
            </div>
          </div>';

//form end
$html .= '</form>';

$html .= '<div class="divider"></div>';

$html .= '<div class="picked-area">
              <label for="radio-1" class="label-input-item">
                  <input type="radio" name="pick-rd" id="radio-1"checked>未選擇清單
              </label>
                  &nbsp;
              <label for="radio-2" class="label-input-item">
                  <input type="radio" name="pick-rd" id="radio-2">已選擇清單
              </label>：<span></span>筆
                  &nbsp;
              <input type="button" value="選　擇" class="pick-btn" disabled>
              <input type="button" value="取　消" class="cancel-pick-btn hide" disabled>
          </div>';

//<!-- 已選擇內容 -->
$html .= '<table class="data_table picked-cont hide">
              <thead>
                  <tr>
                    <th width="5%"><input type="checkbox" class="cb-pick-all"></th>
                    <th width="10%">計畫編號</th>
                    <th width="6%">年度</th>
                    <th width="13%">英文代號</th>
                    <th>名稱</th>
                    <th width="9%">性質</th>
                    <th width="18%">執行期間</th>
                  </tr>
              </thead>
              <tbody>
              </tbody>
          </table>';
//<!-- 未選擇內容 -->
$html .= '<table class="data_table sort-table pick-cont">
              <thead>
                  <tr>
                    <th width="5%"><input type="checkbox" class="cb-pick-all"></th>
                    <th width="10%" class="default-sort-th">
                      <div class="default-sort-th-descending">計畫編號</div>
                    </th>
                    <th width="6%">年度</th>
                    <th width="13%">英文代號</th>
                    <th>名稱</th>
                    <th width="9%">性質</th>
                    <th width="18%">執行期間</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td data-title=""><input type="checkbox" data-pick="107004(107)"></td>
                    <td data-title="計畫編號：">107004</td>
                    <td data-title="年　　度：">107</td>
                    <td data-title="英文代號：" class="data-table-text-left">HA-PSY</td>
                    <td data-title="名　　稱：" class="data-table-text-left">
                      <div class="ellipsis" data-row="2">2018年品質教育訓練計畫</div>
                    </td>
                    <td data-title="性　　質：" class="data-table-text-left">招標-政府機關</td>
                    <td data-title="執行期間：">107/06/01~107/12/31</td>
                  </tr>
                  <tr>
                    <td data-title=""><input type="checkbox" data-pick="107001(108)"></td>
                    <td data-title="計畫編號：">107001</td>
                    <td data-title="年　　度：">108</td>
                    <td data-title="英文代號：" class="data-table-text-left">PGY-HPTLST</td>
                    <td data-title="名　　稱：" class="data-table-text-left">
                      <div class="ellipsis" data-row="2">107成立年度「整合醫療與產業研發能量，提昇國產醫材使用率計畫(一)整合研發能量、建立國內試煉場域」</div>
                    </td>
                    <td data-title="性　　質：" class="data-table-text-left">補助</td>
                    <td data-title="執行期間：">107/01/01~108/01/01</td>
                  </tr>
                  <tr>
                    <td data-title=""><input type="checkbox" data-pick="107001(107)"></td>
                    <td data-title="計畫編號：">107001</td>
                    <td data-title="年　　度：">107</td>
                    <td data-title="英文代號：" class="data-table-text-left">PGY-HPTLST</td>
                    <td data-title="名　　稱：" class="data-table-text-left">
                      <div class="ellipsis" data-row="2">107成立年度「整合醫療與產業研發能量，提昇國產醫材使用率計畫(一)整合研發能量、建立國內試煉場域」</div>
                    </td>
                    <td data-title="性　　質：" class="data-table-text-left">補助</td>
                    <td data-title="執行期間：">107/01/01~108/01/01</td>
                  </tr>
                  <tr>
                    <td data-title=""><input type="checkbox" data-pick="106010(107)"></td>
                    <td data-title="計畫編號：">106010</td>
                    <td data-title="年　　度：">107</td>
                    <td data-title="英文代號：" class="data-table-text-left">QQ-P4P</td>
                    <td data-title="名　　稱：" class="data-table-text-left">
                      <div class="ellipsis" data-row="2">107成立年度輔導教學醫院辦理臨床醫事人員培訓計畫</div>
                    </td>
                    <td data-title="性　　質：" class="data-table-text-left">自營</td>
                    <td data-title="執行期間：">106/02/23~107/06/23</td>
                  </tr>
              </tbody>
          </table>';

//rightmain end
$html .= '</div>';

//content end
$html .= '</div>';

$html .= '<div class="divider"></div>';
//wrapper end
$html .= '</div>';
$html .= '</body>';
$html .= '</html>';

/**
 * **********************************************************************************************
 */
/*
* print所有的HTML
* /************************************************************************************************
*/
print($html);
unset($html);
/**
 * **********************************************************************************************
 */
/*
* 結束DB連線
* /************************************************************************************************
*/
// include($_root_dir . 'disconnect.php');
?>

<script type="text/javascript">
  console.log('from index.php');

  function set_move(id, key) {
    $("input[name='f_suseno']").val(id);
    button_disabled(key, true);
  }

  function set_move_listseq(id, key) {
    $("input[name='f_seqno']").val(id);
    button_disabled(key, true);
  }
</script>