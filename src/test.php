<?php

?>
<!DOCTYPE html>
<html lang="zh-TW">

<head>
    <meta charset="UTF-8">
    <title>重送 POST 資料測試</title>
</head>

<body>
    <h2>測試 form submit 後 refresh</h2>
    <form name="form1" method="POST" action="/submit.php" class="mainForm">
        <input type="text" name="username" placeholder="輸入名字" required value='123'>
        <button type="submit">送出表單</button>
    </form>
</body>

</html>