
$("#btn_origin_ajax_req1").click(function(){
    // 获取url 拼接参数以后
    var current_url = urlHandle();

    // 发起请求
    ajaxReq(current_url, req_method, isAsyn, beforSend, requestComplete, requestSuccess, requestError);
})

// 原生ajax请求封装
function ajaxReq(url, method, isAsyn, beforSend, completeCallback, successCallback, errorCallback){
    //第一步：创建xhr对象
    var xhr = null;
    if(window.XMLHttpRequest){//标准浏览器
        xhr = new XMLHttpRequest();
    }else{//早期的IE浏览器
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    
    // 发送请求前执行处理
    if(typeof(beforSend) == "function"){
        beforSend(xhr);
    }

    //第二步：准备发送请求-配置发送请求的一些行为
    xhr.open(method, url, isAsyn);
    
    //第三步：执行发送的动作
    xhr.send(null);

    //第四步：指定一些回调函数
    xhr.onreadystatechange = function(){
        reqResponseHandle(xhr, completeCallback, successCallback, errorCallback);
    }

    // 同步请求处理
    if(!isAsyn){
        reqResponseHandle(xhr, completeCallback, successCallback, errorCallback);
    }
}

// 处理返回结果
function reqResponseHandle(xhr, completeCallback, successCallback, errorCallback){
    if(xhr.readyState == 4){
        // 请求完成
        if(typeof(completeCallback) == "function"){
            completeCallback(xhr, xhr.statusText);
        }

        // 请求成功
        if(xhr.status == 200){
            if(typeof(successCallback) == "function"){
                successCallback(xhr.responseText, xhr.statusText, xhr);
            }
        }else {
            // 请求失败
            if(typeof(errorCallback) == "function"){
                errorCallback(xhr, xhr.statusText, null);
            }
        }
    }
}