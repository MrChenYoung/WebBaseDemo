
// jQuery ajax方法请求数据
jqAjax();
function jqAjax(){
    // 发起ajax请求
    function sendAjaxReq1() {
        // 拼接url
        var current_url = urlHandle();

        // 发起请求
        ajaxReq1(
            current_url,
            req_method,
            isAsyn,
            beforSend,
            requestComplete,
            requestSuccess,
            requestError
        );
    }

    // GET/POST请求方式一
    $("#btn_ajax_req1").click(function () {
        current_req_function = sendAjaxReq1;

        // 发起ajax请求
        current_req_function();
    })

    // 发起ajax请求
    function sendAjaxReq2() {
        // 获取参数列表
        var params = paramsHandle();

        // 发起请求
        ajaxReq2(
            req_url,
            params,
            req_method,
            isAsyn,
            beforSend,
            requestComplete,
            requestSuccess,
            requestError
        );
    }

    // GET/POST请求方式二
    $("#btn_ajax_req2").click(function () {
        current_req_function = sendAjaxReq2;

        // 发起ajax请求
        current_req_function();
    })

    // 发起ajax请求
    function sendAjaxReq3() {
        // 拼接url
        var current_url = urlHandle();

        // 发起请求
        ajaxReq3(
            current_url,
            req_method,
            isAsyn,
            beforSend,
            requestComplete,
            requestSuccess,
            requestError
        );
    }

    // GET/POST请求方式三
    $("#btn_ajax_req3").click(function () {
        current_req_function = sendAjaxReq3;
        current_req_function();
    })

    // 发起ajax请求
    function sendAjaxReq4() {
        // 拼接url
        var params = paramsHandle();

        // 发起请求
        ajaxReq4(
            req_url,
            params,
            req_method,
            isAsyn,
            beforSend,
            requestComplete,
            requestSuccess,
            requestError
        );
    }

    // GET/POST请求方式四
    $("#btn_ajax_req4").click(function () {
        current_req_function = sendAjaxReq4;
        current_req_function();
    })

    // 发起ajax请求
    function sendAjaxReq5() {
        // 拼接url
        var url = urlHandle();

        // 发起请求
        ajaxReq5(
            url,
            req_method,
            isAsyn,
            beforSend,
            requestComplete,
            requestSuccess,
            requestError
        );
    }

    // GET/POST请求方式五
    $("#btn_ajax_req5").click(function () {
        current_req_function = sendAjaxReq5;
        current_req_function();
    })
    
}

// jQuery get方法请求数据
jqGet();
function jqGet(){
    // get请求方式一
    function sendGetReq1(){
        // 获取url 拼接过参数的
        var url = urlHandle();

        // 是否支持jsonp
        var jsonp = supportJsonp ? "jsonp" : "";

        // 发送请求
        getReq1(url, function(response, textStatue, jqXHR){
            requestSuccess(response, textStatue, jqXHR);
            requestComplete(jqXHR, textStatue);
        }, jsonp);
    }

    $("#btn_get1").click(function(){
        current_req_function = sendGetReq1;

        current_req_function();
    })

    // get请求方式二
    function sendGetReq2(){
        // 获取参数列表
        var params = paramsHandle();

        // 是否支持jsonp
        var jsonp = supportJsonp ? "jsonp" : "";

        // 发送请求
        getReq2(req_url, params, function(response, textStatue, jqXHR){
            requestSuccess(response, textStatue, jqXHR);
            requestComplete(jqXHR, textStatue);
        }, jsonp);
    }

    $("#btn_get2").click(function(){
        current_req_function = sendGetReq2;

        current_req_function();
    })
}

// jQuery getJSON方法请求数据
jqGetJson();
function jqGetJson(){
    // getJSON请求方式一 参数拼接到url后面
    function sendGetJsonReq1(){
        // 获取url
        var url = urlHandle();

        // 是否支持jsonp
        supportJsonp ? url += "callback=?" : "";

        // 发起请求
        getJSONReq1(url, function(data, textStatue, jqXHR){
            requestComplete(jqXHR, textStatue);
            requestSuccess(data, textStatue, jqXHR);
        });
    }

    $("#btn_get_json1").click(function(){
        current_req_function = sendGetJsonReq1;
        current_req_function();
    })

    // getJSON请求方式一 参数通过data传递
    function sendGetJsonReq2(){
        // 获取参数
        var params = paramsHandle();

        // 获取url
        var url = supportJsonp ? req_url + "callback=?" : req_url;

        // 发起请求
        getJSONReq2(url, params, function(data, textStatue, jqXHR){
            requestComplete(jqXHR, textStatue);
            requestSuccess(data, textStatue, jqXHR);
        });
    }

    $("#btn_get_json2").click(function(){
        current_req_function = sendGetJsonReq2;
        current_req_function();
    })
}

// jQuery post方法请求数据
jqPost();
function jqPost(){
    // post请求方式一 参数拼接在url后面
    function sendPostReq1(){
        // 获取url 拼接以后的
        var url = urlHandle();

        // 是否支持jsonp
        var jsonp = supportJsonp ? "jsonp" : "";

        // 发送请求
        postReq1(url, function(data, textStatue, jqXHR){
            requestComplete(jqXHR, textStatue);
            requestSuccess(data, textStatue, jqXHR);
        }, jsonp);
    }

    $("#btn_post1").click(function(){
        current_req_function = sendPostReq1;
        current_req_function();
    })

    // post请求方式二 参数通过data传递
    function sendPostReq2(){
        // 获取参数列表
        var params = paramsHandle();

        // 是否支持jsonp
        var jsonp = supportJsonp ? "jsonp" : "";

        // 发送请求
        postReq2(req_url, params, function(data, textStatue, jqXHR){
            requestComplete(jqXHR, textStatue);
            requestSuccess(data, textStatue, jqXHR);
        }, jsonp);
    }

    $("#btn_post2").click(function(){
        current_req_function = sendPostReq2;
        current_req_function();
    })
}

// jQuery load方法请求数据
jqLoad()
function jqLoad(){
    // load请求方式一 参数拼接在url后面
    function sendLoadReq1(){
        // 获取url 拼接以后的
        var url = urlHandle();

        // 发送请求
        loadReq1($("#load_box"), url, function(data, textStatue, jqXHR){
            requestComplete(jqXHR, textStatue);
            requestSuccess(data, textStatue, jqXHR);
        });
    }

    $("#btn_load1").click(function(){
        current_req_function = sendLoadReq1;
        current_req_function();
    })

    // post请求方式二 参数通过data传递
    function sendLoadReq2(){
        // 获取参数列表
        var params = paramsHandle();

        // 发送请求
        loadReq2($("#load_box"), req_url, params, function(data, textStatue, jqXHR){
            requestComplete(jqXHR, textStatue);
            requestSuccess(data, textStatue, jqXHR);
        });
    }

    $("#btn_load2").click(function(){
        current_req_function = sendLoadReq2;
        current_req_function();
    })
}
