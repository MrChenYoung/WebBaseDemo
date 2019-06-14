<?php 
    // 取消php警告和报错信息
    ini_set("display_errors", 0);
    error_reporting(E_ALL ^ E_NOTICE);
    error_reporting(E_ALL ^ E_WARNING);


    include_once("netCenter.php");

    $url = "http://www.baidu.com";
    echo http_get($url);
?>