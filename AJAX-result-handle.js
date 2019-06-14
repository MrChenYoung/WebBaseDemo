
// 请求结果数据绑定
function resultDataHandle(data,currentSelect,resultBox){

   if(typeof(data) != "object" && currentSelect != "baidu"){
       data = jQuery.parseJSON(data);
   }
   
    switch(currentSelect){
        // 天气预报
        case "weather":
            weatherInfoHandle(data, resultBox);
            break;
        case "phone":
            phoneNumberInfoHandle(data, resultBox);
            break;
        case "identity":
            identityInfoHandle(data, resultBox);
            break;
        case "ip":
            ipInfoHandle(data, resultBox);
            break;
        case "jokes":
            jokesInfoHandle(data, resultBox);
            break;
        case "wechat":
            wechateInfoHandle(data, resultBox);
            break;
        case "news":
            newsInfoHandle(data, resultBox);
            break;
        case "history":
            historyInfoHandle(data, resultBox);
            break;
        case "baidu":
            baiduInfoHandle(data, resultBox);
            break;
    }
}

// 天气信息数据绑定
function weatherInfoHandle(data, resultBox){
    // 请求结果错误码
    var errorCode = data["error_code"];

    // 错误信息描述
    var errorMessage = data.reason;

    if(errorCode == 0){
        // 返回正确数据

        // 移除上次查询添加的元素
        resultBox.children("#weather_future").children("#weather_inner_box").first().siblings().remove();
        
        // 查询结果信息
        var resultInfo = data.result;
        // 当前天气
        var realtime = resultInfo["realtime"];
        // 未来天气
        var future = resultInfo["future"];
        
        // 城市显示
        resultBox.find("#my_city").text(resultInfo.city);
        // 当前天气
        resultBox.find("#weather_info").text(realtime["info"]);
        // 当前温度
        resultBox.find("#weather_temp").text(realtime["temperature"] + "°");
        // 当前湿度
        resultBox.find("#weather_humidity").text(realtime["humidity"] + "%");
        // 风向
        resultBox.find("#weather_wind_direction").text(realtime["direct"]);
        // 风力
        resultBox.find("#weather_wind_size").text(realtime["power"]);
        // 空气质量
        resultBox.find("#weather_quality").text(realtime["aqi"]);

        // 未来天气
        var $future_weather = resultBox.children("#weather_future").children("#weather_inner_box");
        for(var key in future){
            var current_weather = future[key];
            if(key != 0){
                // 克隆第一个并添加
                $future_weather = resultBox.children("#weather_future").children("#weather_inner_box").first().clone(true);
            }

            // 绑定数据
            // 日期
            $future_weather.children("#weather_fut_date").text(current_weather["date"]);
            // 天气
            $future_weather.find("#weather_info").text(current_weather["weather"]);
            // 温度
            $future_weather.find("#weather_temp").text(current_weather["temperature"]);
            // 风向
            $future_weather.find("#weather_wind_dir").text(current_weather["direct"]);

            if(key != 0){
                resultBox.children("#weather_future").append($future_weather);
            }
        }

        // 动画显示
        resultBox.children("#current_weather_box").show("slow");
        resultBox.children("#weather_future").show("slow");
        resultBox.children("#weather_wrong_box").hide();
    }else {
        // 请求错误
        resultBox.children("#weather_wrong_box").text(errorMessage);
        resultBox.children("#weather_wrong_box").show();
        resultBox.children("#current_weather_box").hide();
        resultBox.children("#weather_future").hide();
    }
}

// 手机归属地结果数据绑定
function phoneNumberInfoHandle(data, resultBox) {
    // 请求结果错误码
    var errorCode = data.error_code;

    // 查询结果信息
    var resultInfo = data.result;

    // 错误信息描述
    var errorMessage = data.reason;

    if (errorCode == 0) {
        // 查询结果正确

        // 请求成功 界面赋值 省
        resultBox.find("#province").text(resultInfo.province);
        // 市
        resultBox.find("#city").text(resultInfo.city);
        // 区号
        resultBox.find("#loc_number").text(resultInfo.areacode);
        // 邮编
        resultBox.find("#postcode").text(resultInfo.zip);
        // 运营商
        resultBox.find("#company").text(resultInfo.company);

        resultBox.children("#phone_right_box").show("slow");
        resultBox.children("#phone_wrong_box").hide();
    }else {
        // 查询出错
        resultBox.children("#phone_right_box").hide();
        resultBox.children("#phone_wrong_box").show();
        resultBox.children("#phone_wrong_box").text(errorMessage);
    }
}

// 身份证查询结果处理
function identityInfoHandle(data, resultBox){

    // 请求结果错误码
    var errorCode = data.error_code;

    // 查询结果信息
    var resultInfo = data.result;

    // 错误信息描述
    var errorMessage = data.reason;

    var $right_box = resultBox.children("#identity_right_box");
    var $wrong_box = resultBox.children("#idengity_wrong_box");
    if(errorCode == 0){
        // 查询成功

        // 性别
        $right_box.find("#identity_sex").text(resultInfo["sex"]);

        // 出生日期
        $right_box.find("#identity_birthday").text(resultInfo["birthday"]);

        // 出生地
        $right_box.find("#identity_area").text(resultInfo["area"]);

        $right_box.show("slow");
        $wrong_box.hide();
    }else {
        // 查询失败
        errorInfoHandle(errorMessage, $right_box, $wrong_box);
    }
}

// ip查询结果处理
function ipInfoHandle(data, resultBox){
    // 请求结果错误码
    var errorCode = data.error_code;

    // 查询结果信息
    var resultInfo = data.result;

    // 错误信息描述
    var errorMessage = data.reason;

    var $right_box = resultBox.children("#ip_right_box");
    var $wrong_box = resultBox.children("#ip_wrong_box");

    if(errorCode == 0){
        // 查询成功

        // 国家
        $right_box.find("#ip_country").text(resultInfo["Country"]);

        // 省
        $right_box.find("#ip_province").text(resultInfo["Province"]);

        // 市
        $right_box.find("#ip_city").text(resultInfo["City"]);

        // 运营商
        $right_box.find("#ip_isp").text(resultInfo["Isp"]);
    }else {
        // 查询失败
        errorInfoHandle(errorMessage, $right_box, $wrong_box);
    }
}

// 笑话大全结果处理
function jokesInfoHandle(data, resultBox){
    // 请求结果错误码
    var errorCode = data.error_code;

    // 查询结果信息
    var result = data["result"];
    var resultInfo = null;
    if(result != null){
        resultInfo = result["data"];
    }

    // 错误信息描述
    var errorMessage = data.reason;

    $right_box = resultBox.children("#jokes_right_box");
    $wrong_box = resultBox.children("#jokes_wrong_box");

    if(errorCode == 0){
        // 移除老数据
        $right_box.children("#jokes_entry").remove();

        // 绑定数据
        for (var key in resultInfo) {
            var jokes = resultInfo[key];
            var box = '<div class="jokes-entry" id="jokes_entry"><p class="jokes-content dark-text font-italic" id="jokes_content">';
            box += jokes["content"];
            box += '</p><p class="jokes-update-date" id="jokes_update_date">';
            box += jokes["updatetime"];
            box += '</p></div>';
            var $jokes_box = $(box);

            $right_box.append($jokes_box);
        }

    }else {
        // 查询失败
        errorInfoHandle(errorMessage, $right_box, $wrong_box);
    }
}

// 微信精选结果处理
function wechateInfoHandle(data, resultBox){
    // 请求结果错误码
    var errorCode = data.error_code;

    // 查询结果信息
    var result = data["result"];
    var resultInfo = null;
    if(result != null){
        resultInfo = result["list"];
    }

    // 错误信息描述
    var errorMessage = data.reason;

    $right_box = resultBox.children("#wechat_right_box");
    $wrong_box = resultBox.children("#wechat_wrong_box");

    
    if(errorCode == 0){
        // 移除老数据
        $right_box.children("#wechat_entry_box").remove();

        // 绑定数据
        for (var key in resultInfo) {
            var infos = resultInfo[key];
            var box = '<div class="wechat-entry-box" id="wechat_entry_box"><p><span class="font-italic font-size12 dark-text">标题 </span><span class="wechat-title" id="wechate_title">';
            box += infos["title"];
            box += '</span></p><p><span class="font-italic font-size12 dark-text">来源 </span><span class="wechat-source" id="wechat_source">';
            box += infos["source"];
            box += '</span></p><p><span class="font-italic font-size12 dark-text">链接 </span><a href="';
            box += infos["url"];
            box += '" class="wechat-detaile font-size14" id="wechat_detaile">查看详情</a></p></div>';
            var $entry_box = $(box);

            $right_box.append($entry_box);
        }

    }else {
        // 查询失败
        errorInfoHandle(errorMessage, $right_box, $wrong_box);
    }

}

// 新闻资讯结果处理
function newsInfoHandle(data, resultBox){
    // 请求结果错误码
    var errorCode = data.error_code;

    // 查询结果信息
    var result = data["result"];
    var resultInfo = null;
    if(result != null){
        resultInfo = result["data"];
    }

    // 错误信息描述
    var errorMessage = data.reason;

    $right_box = resultBox.children("#news_right_box");
    $wrong_box = resultBox.children("#news_wrong_box");

    
    if(errorCode == 0){
        // 移除老数据
        $right_box.children("#news_entry_box").remove();

        // 绑定数据
        for (var key in resultInfo) {
            var infos = resultInfo[key];
            var box = '<div class="news-entry-box" id="news_entry_box"><div class="news-pic" id="news_pic"><img src="';
            box += infos["thumbnail_pic_s"];
            box += '"alt=""></div><div class="news-other-info" id="news_other_info"><p class="news-title" id="news_title">';
            box += infos["title"];
            box += '</p><p class="dark-text"><span>';
            box += infos["category"];
            box += '&nbsp;&nbsp;</span><span>';
            box += infos["date"];
            box += '</span></p><p class="news-author dark-text" id="news_author">';
            box += infos["author_name"];
            box += '</p><p><a href="';
            box += infos["url"];
            box += '">查看详情</a></p></div></div>';
            var $entry_box = $(box);

            $right_box.append($entry_box);
        }

    }else {
        // 查询失败
        errorInfoHandle(errorMessage, $right_box, $wrong_box);
    }
}

// 历史上的今天结果处理
function historyInfoHandle(data, resultBox){
    // 请求结果错误码
    var errorCode = data.error_code;

    // 查询结果信息
    var resultInfo = data["result"];

    // 错误信息描述
    var errorMessage = data.reason;

    $right_box = resultBox.children("#history_right_box");
    $wrong_box = resultBox.children("#history_wrong_box");

    
    if(errorCode == 0){
        // 移除老数据
        $right_box.children("#history_entry_box").remove();

        // 绑定数据
        for (var key in resultInfo) {
            var infos = resultInfo[key];
            var box = '<div class="news-entry-box history-entry-box" id="history_entry_box"><div class="news-pic" id="history_pic"><img src="';
            box += infos["pic"];
            box += '" alt=""></div><div class="news-other-info" id="history_other_info"><p class="news-title" id="history_title">';
            box += infos["title"];
            box += '</p><p class="history-des" id="history_des">';
            box += infos["des"];
            box += '</p><p class="dark-text"><span id="history_year">';
            box += infos["year"];
            box += '-</span><span id="history_month">';
            box += infos["month"];
            box += '-</span><span id="history_day">';
            box += infos["day"];
            box += '</span><span id="history_yili_date">&nbsp;&nbsp;';
            box += infos["lunar"];
            box += '</span></p></div></div>';
            var $entry_box = $(box);

            $right_box.append($entry_box);
        }

    }else {
        // 查询失败
        errorInfoHandle(errorMessage, $right_box, $wrong_box);
    }
}

// 百度首页结果处理
function baiduInfoHandle(data, resultBox){
    // 移除旧内容
    resultBox.children("#baidu_right_box").children().remove();

    // 添加新的
    resultBox.children("#baidu_right_box").append(data);
    resultBox.children("#baidu_right_box").css({
        width: "400px",
        height: "500px"
    })

}

// 请求失败处理共用方法
function errorInfoHandle(errMessage, rightBox, wrongBox){
    wrongBox.text(errMessage);
    rightBox.hide();
    wrongBox.show();
}