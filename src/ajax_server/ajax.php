<?php
// 模擬回傳資料
$response = [
    "data1" => [
        [
            "departmentId" => "0001",
            "departmentName" => "總經理室",
            "linkId" => null,
            "con1" => "1",
            "test" => "test"
        ],
        [
            "departmentId" => "0002",
            "departmentName" => "管理部",
            "linkId" => null,
            "con1" => "2"
        ],
        [
            "departmentId" => "0003",
            "departmentName" => "業務代表組",
            "linkId" => null,
            "con1" => "3"
        ],
        [
            "departmentId" => "0004",
            "departmentName" => "業務秘書組",
            "linkId" => null,
            "con1" => "4"
        ],
        [
            "departmentId" => "0005",
            "departmentName" => "研發部",
            "linkId" => null,
            "con1" => "5"
        ]
    ],
    "data2" => [
        ["epId" => "00010001", "epName" => "潔西卡", "linkId" => "0001"],
        ["epId" => "00020001", "epName" => "吳安妮", "linkId" => "0002"],
        ["epId" => "00020002", "epName" => "陳朵拉", "linkId" => "0002"],
        ["epId" => "00020003", "epName" => "林傑夫", "linkId" => "0002"],
        ["epId" => "00020004", "epName" => "李享利", "linkId" => "0002"],
        ["epId" => "00020005", "epName" => "黃海曼", "linkId" => "0002"],
        ["epId" => "00020006", "epName" => "陳米路(離職)", "linkId" => "0002", "mark" => "def_mark"],
        ["epId" => "00020007", "epName" => "何奧瑪(離職)", "linkId" => "0002", "mark" => "def_mark"],
        ["epId" => "00030001", "epName" => "泰麗莎", "linkId" => "0003"],
        ["epId" => "00030002", "epName" => "吉榭爾", "linkId" => "0003"],
        ["epId" => "00030003", "epName" => "羅漢妮", "linkId" => "0003"],
        ["epId" => "00040001", "epName" => "雷契爾", "linkId" => "0004"],
        ["epId" => "00040002", "epName" => "簡波特", "linkId" => "0004"],
        ["epId" => "00040003", "epName" => "胡爾達", "linkId" => "0004"],
        ["epId" => "00040004", "epName" => "弗莉達(離職)", "linkId" => "0004", "mark" => "def_mark"],
        ["epId" => "00050001", "epName" => "劉凱絲", "linkId" => "0005"],
        ["epId" => "00050002", "epName" => "吳琳賽", "linkId" => "0005"],
        ["epId" => "00050003", "epName" => "丹尼絲", "linkId" => "0005"],
        ["epId" => "00050004", "epName" => "朱麗亞", "linkId" => "0005"]
    ]
];
$response2 = [
    "status" => "success",
    "message" => "Action received"
];


// $action = $_POST['action']; action:參數
// 檢查請求方法 
if ($_SERVER['REQUEST_METHOD'] === 'POST') { // 處理 POST 請求 
    $response = [
        'status' => 'success',
        'message' => 'This is a POST request',
        'data' => $_POST // 或其他處理方式 
    ];
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') { // 處理 GET 請求 
    $response = [
        'status' => 'success',
        'message' => 'This is a GET request',
        'data' => $_GET // 或其他處理方式 
    ];
} else { // 處理其他請求方法 
    $response = ['status' => 'error', 'message' => 'Unsupported request method'];
}

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// 將資料以 JSON 格式輸出
echo json_encode($response);
