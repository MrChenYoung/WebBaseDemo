<?php 
    // php网络请求封装
    //curl:用于网络请求
    //curl：是一个利用URL语法规定来传输文件和数据的工具，可用于HTTP、https、FTP等协议

    //用法
    // 1、初始化
    // curl_init();
    // 2、设置变量
    // curl_setopt();
    // 3、执行并获得结果
    // curl_exec();
    // 4、释放curl
    // curl_close;

    // get请求封装
    function http_get($url){
        $curl = curl_init();
        curl_setopt($curl,CURLOPT_URL,$url);
        // CURLOPT_RETURNTRANSFER  设置是否有返回值
        curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
        //执行完以后的返回值
        $response = curl_exec($curl);
        //释放curl
        curl_close($curl);
        return $response;
    }

    // post请求封装
    function http_post($url,$postbody){
        $curl = curl_init();
        curl_setopt($curl,CURLOPT_URL,$url);
        // CURLOPT_RETURNTRANSFER  设置是否有返回值
        curl_setopt($curl,CURLOPT_RETURNTRANSFER,true);
        curl_setopt($curl,CURLOPT_POST,true);
        curl_setopt($curl,CURLOPT_POSTFIELDS,$postbody);//get方式通过网址传递参数，但post通过CURLOPT_POSTFIELDS传递参数，但这仅仅只针对于curl而言
        //执行完以后的返回值
        $response = curl_exec($curl);
        //释放curl
        curl_close($curl);
        return $response;
    }

?>