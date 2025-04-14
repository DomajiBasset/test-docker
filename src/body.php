<?php
$html .= '<BODY>';
$html .= '<div class="wrapper blue font_M change rwd">';
$html .= '<input type="checkbox" id="toggle-btn" />';
$html .= '<header id="top">';
$html .= '<div class="toplogo">';
$html .=    '<div class="logo"></div>';
$html .=    '<div class="mini-logo"></div>';
$html .= '</div>';
$html .= '<div class="topinfor">';
$html .=    '<div class="topbtn"></div><div class="message"></div>';
$html .= '</div>';
$html .= '</header>';

$go_page = 0;
$html .= '<div class="home_btn"><a href="' . $go_page . '"><i class="icon-return3"></i><span>回初始功能頁面</span></a></div>';
$html .= '<div class="left-menu_switch-area">
            <div class="scrollbar-inner"><ul class="nav"></ul></div>
          </div>
          <div class="left-menu fav-area"></div>
          <div class="left-menu nav-area"></div>';

$html .= '<div class="system_bg">
            <div class="system_name" style="cursor: default">
                <label class="bars" for="toggle-btn" href="#">
                <div>
                    <i class="icon-minsize"></i>
                    <div class="arrow"><span></span></div>
                </div>
                </label>
                <div class="name_ch"><i class="icon-location"></i></div>
                <div class="name_ch hide"><i class="icon-location"></i></div>
                <div class="name_en"></div>
            </div>';
//system_bg end
$html .= '</div>';
