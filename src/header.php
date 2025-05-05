<?php

$manifest = json_decode(file_get_contents(__DIR__ . '/dist/.vite/manifest.json'), true);

// 根據 manifest.json 中的資料動態引入 JS 和 CSS
$scripts = [];
foreach ($manifest as $key => $value) {
    if (isset($value['file'])) {
        $scripts[] = '/dist/' . $value['file'];
    }
}

$html = '<!DOCTYPE HTML>';
$html .= '<HTML>';
$html .= '<HEAD>';
$html .= '<meta http-equiv="Content-Type" content="text/html; charset=utf-8">';
$html .= '<meta name="format-detection" content="telephone=no">';
$html .= '<meta name="format-detection" content="address=no">';
$html .= '<meta name="format-detection" content="email=no">';
$html .= '<meta name="format-detection" content="date=no">';
$html .= '<meta name="viewport" content="width=device-width, initial-scale=1.0">';

/* Include CSS */
if (!isset($array_css_file) || !is_array($array_css_file)) {
    $array_css_file = array();
}
$array_css_file[] = './dist/framework/css/main.css'; // 載入主要樣式

foreach ($array_css_file as $head_css_file) {
    if (file_exists($head_css_file)) {
        $version_time = filemtime($head_css_file);
        $html .= '<link rel="stylesheet" type="text/css" href="' . $head_css_file . '?ver= ' . $version_time . '" />';
    }
}

/* Include JavaScript */
if (!isset($array_js_file) || !is_array($array_js_file)) {
    $array_js_file = array();
}

foreach ($scripts as $script) {
    $html .= '<script type="module" src="' . $script . '"></script>';
}
// $html .= '<script type="module" crossorigin src="/dist/assets/index-Db6ourCX.js"></script>';
// $html .= '<script type="module" src="/dist/' . $jsFile . '"></script>';
$html .= '</HEAD>';
