<?php

session_start(); // 啟用 Session

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];

    // 儲存到 Session，以便在重定向後顯示
    $_SESSION['username'] = $username;

    file_put_contents('log.txt', date('Y-m-d H:i:s') . " - 收到一筆 POST: " . $username . "\n", FILE_APPEND);
    sleep(3); // 模擬後端處理需要一段時間
    // echo "已收到 POST，處理完成！";
    // 設置重定向到當前頁面
    header('Location: ' . $_SERVER['PHP_SELF'] . '');
    exit;
}
$html = '';
if (isset($_SESSION['username'])) {
    $html = '<h2>收到的 POST 資料：' . $_SESSION['username'] . '</h2>';
    // unset($_SESSION['username']); // 顯示後，清除 Session 變數
}

print($html);
?>