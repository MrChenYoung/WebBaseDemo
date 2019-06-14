<?php 
    // 取消php警告和报错信息
    ini_set("display_errors", 0);
    error_reporting(E_ALL ^ E_NOTICE);
    error_reporting(E_ALL ^ E_WARNING);


    include_once("netCenter.php");
    
    // 获取拼接到url后面的参数
    $$getParams;
    foreach ($_GET as $key=>$value){
        $getParams[$key] = $value;
    }

    // 获取通过data传过来的参数
    $$postParams;
    foreach ($_POST as $key=>$value){
        $postParams[$key] = $value;
    }

    // 获取所有的get参数并拼接
    $$params;
    if(isGet()){
        // get请求
        if($getParams){
            foreach ($getParams as $key=>$value){
                $params = $params.$key."=".$value."&";
            }
        }else {
            foreach ($postParams as $key=>$value){
                $params = $params.$key."=".$value."&";
            }
        }

        $url = "http://apis.juhe.cn/simpleWeather/query?".$params;
        echo http_get($url);
    }else {
        // post请求
        if($getParams){
            $params = $getParams;
        }else {
            $params = $postParams;
        }

        echo http_post("http://apis.juhe.cn/simpleWeather/query", $params);
    }

    //是否是GET提交
    function isGet(){
        return $_SERVER['REQUEST_METHOD'] == 'GET' ? true : false;
    }
    
    //是否是POST提交
    function isPost(){
        return ($_SERVER['REQUEST_METHOD'] == 'POST' && checkurlHash($GLOBALS['verify'])&&(empty($_SERVER['HTTP_REFERER']) || preg_replace("~https?:\/\/([^\:\/]+).*~i", "\\1", $_SERVER['HTTP_REFERER']) == preg_replace("~([^\:]+).*~", "\\1", $_SERVER['HTTP_HOST']))) ? 1 : 0;
    }
?>