<?php   
    // header('content-type:application/json;charset=utf8');   
    $arr = array('1','2','asda');  
    print_r($arr);  
    // 生成json接口  
    $json = json_encode($arr);  
    echo $json;  
?>