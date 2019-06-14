
// get请求方式一 
// 把参数拼接到url后面
function ajaxReq1(url, type, async, beforSend, requestComplete, requestSuccess, requestError){
    $.ajax(url,{
        type: type,
        async: async,
        beforeSend:beforSend,
        complete: requestComplete,
        success: requestSuccess,
        error: requestError
    })
}

// get请求方式二 
// 把参数以json对象的方式传给data参数
function ajaxReq2(url, data, type, async, beforSend, requestComplete, requestSuccess, requestError){
    $.ajax(url, {
        data: data,
        type: type,
        async: async,
        beforeSend:beforSend,
        complete: requestComplete,
        success: requestSuccess,
        error: requestError
    })
}

// ajax get请求方式三
// 设置settings参数中的url参数为拼接以后的url
function ajaxReq3(url, type, async, beforSend, requestComplete, requestSuccess, requestError){
    $.ajax({
        url: url,
        type: type,
        async: async,
        beforeSend:beforSend,
        complete: requestComplete,
        success: requestSuccess,
        error: requestError
    })
}

// ajax get请求方式四
// 把参数传给settings参数中的data字段
function ajaxReq4(url, data, type, async, beforSend, requestComplete, requestSuccess, requestError){
    $.ajax({
        url: url,
        data: data,
        type: type,
        async: async,
        beforeSend:beforSend,
        complete: requestComplete,
        success: requestSuccess,
        error: requestError
    })
}

// ajax get请求方式五
// 把参数传给settings参数中的data字段
function ajaxReq5(url, type, async, beforSend, requestComplete, requestSuccess, requestError){
    $.ajaxSetup({
        url: url,
        type: type,
        async: async,
        beforSend: beforSend,
        complete: requestComplete,
        success: requestSuccess,
        error: requestError
    })

    // 发起请求
    $.ajax();
}




// jQuery get方法请求方式一
function getReq1(url, requestSuccess, dataType){
    $.get(url, requestSuccess, dataType);
}

// jQuery get方法请求方式二
function getReq2(url, data, requestSuccess, dataType){
    $.get(url, data, requestSuccess, dataType);
}

// jQuery getJSON方法请求方式一
function getJSONReq1(url, requestSuccess){
    $.getJSON(url, requestSuccess);
}

// jQuery getJSON方法请求方式二
function getJSONReq2(url, data, requestSuccess){
    $.getJSON(url, data, requestSuccess);
}

// jQuery post方法请求方式一
function postReq1(url, requestSuccess, jsonType){
    $.post(url, requestSuccess, jsonType);
}

// jQuery post方法请求方式二
function postReq2(url, data, requestSuccess, jsonType){
    $.post(url, data, requestSuccess, jsonType);
}

// jQuery load方法请求方式一
function loadReq1(node, url, requestSuccess){
    node.load(url, requestSuccess);
}

// jQuery load方法请求方式二
function loadReq2(node, url, data, requestSuccess){
    node.load(url, data, requestSuccess);
}