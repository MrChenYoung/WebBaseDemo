// 不同功能对应的参数信息
var request_info = {
    // 手机号码归属地查询
    "phone": {
        url: "http://apis.juhe.cn/mobile/get",
        appkey: "f3c0e48da13bf0793f67e021f062703b",
        params: [
            "phone", "dtype"
        ],
        onlyGet: false,
        jsonp: true,
        supportSyn: false,
        dis_btns: [$("#btn_load1"), $("#btn_load2"), $("#btn_origin_ajax_req1")]
    },
    // 身份证查询
    "identity": {
        url: "http://apis.juhe.cn/idcard/index",
        appkey: "4c42edd122b2a4eb3bfc190bfd36c010",
        params: [
            "cardno", "dtype"
        ],
        onlyGet: false,
        jsonp: true,
        supportSyn: false,
        dis_btns: [$("#btn_load1"), $("#btn_load2"), $("#btn_origin_ajax_req1")]
    },
    // IP查询
    "ip": {
        url: "http://apis.juhe.cn/ip/ipNew",
        appkey: "74c1c1c7882f034f028f59d2462efdad",
        params: ["ip"],
        onlyGet: false,
        jsonp: true,
        supportSyn: false,
        dis_btns: [$("#btn_load1"), $("#btn_load2"), $("#btn_origin_ajax_req1")]
    },
    // 笑话大全
    "jokes": {
        url: "http://v.juhe.cn/joke/content/list.php",
        appkey: "612f292e6a4a3d022c56abf1f92fa13a",
        params: [
            "sort", "page", "pagesize", "time"
        ],
        onlyGet: false,
        jsonp: true,
        supportSyn: false,
        dis_btns: [$("#btn_load1"), $("#btn_load2"), $("#btn_origin_ajax_req1")]
    },
    // 天气预报
    "weather": {
        url: "./jQuery/php/weather.php",
        appkey: "d19e809c098780def41f3be0921aaef2",
        params: ["city"],
        onlyGet: false,
        jsonp: false,
        supportSyn: true
    },
    // 微信精选
    "wechat": {
        url: "./jQuery/php/wechat.php",
        appkey: "b2ae6c8199202c22841bbb1a76098b68",
        params: [
            "pno", "ps", "dtype"
        ],
        onlyGet: false,
        jsonp: false,
        supportSyn: true
    },
    // 新闻头条
    "news": {
        url: "./jQuery/php/news.php",
        appkey: "b0ed05cedb5c70148be25e392a09ccbb",
        params: ["type"],
        onlyGet: false,
        jsonp: false,
        supportSyn: true
    },
    // 历史上的今天
    "history": {
        url: "./jQuery/php/history.php",
        appkey: "2d6479fcfd18aa080a0ea69534343597",
        params: [
            "v", "month", "day"
        ],
        onlyGet: true,
        jsonp: false,
        supportSyn: true,
        dis_btns: [$("#btn_load2")]
    },
    "baidu": {
        url: "./jQuery/php/baidu.php",
        appkey: "",
        params: [],
        onlyGet: true,
        jsonp: false,
        supportSyn: true,
    },
    // 空
    "default": {
        url: "",
        appkey: "",
        params: [],
        onlyGet: false,
        jsonp: false,
        supportSyn: false
    }
}

// 不同功能对应的参数选项区和请求结果显示区
var params_result_area = {
    // 天气
    weather: {
        // 参数选择区
        params_area: [$("#weather_select")],
        // 结果显示区
        result_area: $("#weather_result"),
        // 结果是否分页
        result_paging: false
    },
    // 手机号归属地查询
    phone: {
        // 参数选择区
        params_area: [$("#srk")],
        // 结果显示区
        result_area: $("#phone_result"),
        // 结果是否分页
        result_paging: false
    },
    identity: {
        // 参数选择区
        params_area: [$("#srk")],
        // 结果显示区
        result_area: $("#identity_result"),
        // 结果是否分页
        result_paging: false
    },
    ip: {
        // 参数选择区
        params_area: [$("#srk")],
        // 结果显示区
        result_area: $("#ip_result"),
        // 结果是否分页
        result_paging: false
    },
    jokes: {
        // 参数选择区
        params_area: [],
        // 结果显示区
        result_area: $("#jokes_result"),
        // 结果是否分页
        result_paging: true
    },
    wechat: {
        // 参数选择区
        params_area: [],
        // 结果显示区
        result_area: $("#wechat_result"),
        // 结果是否分页
        result_paging: true
    },
    news: {
        // 参数选择区
        params_area: [$("#news_select")],
        // 结果显示区
        result_area: $("#news_result"),
        // 结果是否分页
        result_paging: false
    },
    history: {
        // 参数选择区
        params_area: [$("#history_date_select")],
        // 结果显示区
        result_area: $("#history_result"),
        // 结果是否分页
        result_paging: false
    },
    baidu: {
        // 参数选择区
        params_area: [],
        // 结果显示区
        result_area: $("#baidu_result"),
        // 结果是否分页
        result_paging: false
    }
}

// 不可用按钮列表
var unabled_btns = {
    GET: [
        $("#btn_post1"), 
        $("#btn_post2"), 
        $("#btn_load2")],
    POST: [
        $("#btn_get_json1"), 
        $("#btn_get_json2"), 
        $("#btn_get1"), 
        $("#btn_get2"), 
        $("#btn_load1")],
    syn: [
        $("#btn_get_json1"), 
        $("#btn_get_json2"), 
        $("#btn_get1"), 
        $("#btn_get2"), 
        $("#btn_post1"), 
        $("#btn_post2"),
        $("#btn_load1"), 
        $("#btn_load2")]
}

// 输入框
var $srk = $("#srk");
// 当前选择的功能key 默认选择天气预报
var current_select_fn = "phone";

// 网络请求设置信息 请求方式
var req_method = "GET";
// 请求类型 是否是异步请求
var isAsyn = true;
// 是否支持同步请求
var supportSyn = false;
// 是否支持jsonp请求
var supportJsonp = false;
// url
var req_url = request_info[current_select_fn].url;
// appkey
var appKey = request_info[current_select_fn].appkey;
// 参数列表
var params = request_info[current_select_fn].params;
// 是否只能用GET请求
var onlyGet = request_info[current_select_fn].onlyGet;
// 当前页码
var pageIndex = 1;
// 新闻类型
var news_type = "top";
// 当前调用的网络请求函数
var current_req_function = null;

// 当前请求对应的request_info里面对象
var current_info_obj = request_info.default;

// 更新请求参数
updateReqInfo();
function updateReqInfo(){
    current_info_obj = request_info[current_select_fn];

    // 重置当前页码
    pageIndex = 1;

    // 更新界面
    paramsAreaHandle();

    // 隐藏所有结果显示区
    hiddenResultArea();

    switch (current_select_fn) {
        case "weather":
            // 天气预报
            $srk.attr("placeholder", "请输入城市名");
            break;
        case "phone":
            // 手机号码归属地查询
            $srk.attr("placeholder", "请输入手机号码");
            $srk.val("13761943167");
            break;
        case "identity":
            // 身份证查询
            $srk.attr("placeholder", "请输入身份证号");
            $srk.val("410325199105160512");
            break;
        case "ip":
            // ip查询
            $srk.attr("placeholder", "请输入ip地址");
            $srk.val("112.112.11.11");
            break;
    }

    // url
    req_url = current_info_obj.url;
    // appkey
    appKey = current_info_obj.appkey;
    // 参数列表
    params = current_info_obj.params;
    // 是否只能用GET请求
    onlyGet = current_info_obj.onlyGet;
    // 是否支持同步请求
    supportSyn = current_info_obj.supportSyn;
    // 是否支持jsonp
    supportJsonp = request_info[current_select_fn].jsonp;

    // 设置请求方式选择框
    if (onlyGet) {
        $("#req_method").val("GET");
        $("#opt_post").attr("disabled", true);
    } else {
        $("#opt_post").attr("disabled", false);
    }

    // 跨域的请求只支持异步
    if (!supportSyn) {
        // 选中互联网功能 只能选择异步
        $("option[value=syn]").attr("disabled", true);
        $("#req_type").val("asyn");
        isAsyn = true;
    } else {
        // 选中本地功能 可以切换同步 异步
        $("option[value=syn]").attr("disabled", false);
    }

    // 设置不可点击按钮变为灰色
    $("button").attr("disabled", false);
    var get_unabled_btns = unabled_btns[req_method];

    // get/post方法下不可点击按钮
    for (var key in get_unabled_btns) {
        get_unabled_btns[key].attr("disabled", true);
    }

    // 同步请求下不可点击按钮
    if(isAsyn == false) {
        for (var key in unabled_btns["syn"]) {
            unabled_btns["syn"][key].attr("disabled", true);
        }
    }

    // 指定功能不能点击的按钮
    var dis_btns = current_info_obj["dis_btns"];
    if(dis_btns != undefined){
        for (var key in dis_btns) {
            dis_btns[key].attr("disabled", true);
        }
    }
    
}

// 切换功能
$("#req_list").change(function () {
    // 保存选择的功能key
    current_select_fn = $(this).val();
    updateReqInfo();
})

// 请求方式切换
$("#req_method").change(function () {
    req_method = $(this).val();
    updateReqInfo();
})

// 请求类型切换
$("#req_type").change(function () {
    isAsyn = $(this).val() == "asyn"
        ? true
        : false;
    updateReqInfo();
})

// 参数处理
function paramsHandle() {
    // 遍历参数列表
    var params_handled = {};
    for (var i = 0; i < params.length; i++) {
        switch (params[i]) {
            case "phone":
                params_handled.phone = $srk.val();
                break;
            case "city":
                params_handled.city = getWeatherCityId();
                break;
            case "cardno":
                params_handled.cardno = $srk.val();
                break;
            case "ip":
                params_handled.ip = $srk.val();
                break;
            case "dtype":
                params_handled.dtype = "json";
                break;
            case "sort":
                params_handled.sort = "desc";
                break;
            case "page":
                params_handled.page = pageIndex;
                break;
            case "pagesize":
                params_handled.pagesize = 5;
                break;
            case "time":
                params_handled.time = timest();
                break;
            case "pno":
                params_handled.pno = pageIndex;
                break;
            case "ps":
                params_handled.ps = 4;
                break;
            case "type":
                params_handled.type = news_type;
                break;
            case "v":
                params_handled.v = "1.0";
                break;
            case "month":
                params_handled.month = getHistoryDate()[0];
                break;
            case "day":
                params_handled.day = getHistoryDate()[1];
                break;
        }
    }

    // 设置key参数
    params_handled.key = appKey;

    // 设置请求参数
    if (supportJsonp) {
        $.ajaxSetup({dataType: "jsonp"});
    } else {
        $.ajaxSetup({dataType: ""});
    }

    return params_handled;
}

// url拼接
function urlHandle() {
    // 处理以后的参数 转换为键值对
    var current_params = paramsHandle();

    // 拼接url
    var current_url = req_url + "?";
    for (var key in current_params) {
        current_url += (key + "=" + current_params[key] + "&");
    }

    return current_url;
}

// 请求发送前
function beforSend(jqXHR) {
    console.log("准备开始发送请求:" + JSON.stringify(jqXHR));

    // 正在请求显示
    $("#loading_box").show();

    // 隐藏所有结果显示区
    hiddenResultArea();

    // 输入框不可编辑
    closeInputBox();
}

// 请求完成回调函数
function requestComplete(jqXHR, textStatus) {
    // 正在请求隐藏
    $("#loading_box").hide();

    console.log("请求类型:" + jqXHR.type);
    if (jqXHR.status == 200) {
        // 显示当前功能的结果区
        showCurrentFnResultArea();
    } else {
        // 隐藏所有的结果显示区
        hiddenResultArea();
    }

    // 输入框可以输入
    openInputBox();

    // 请求完成 失败和成功都会调用
    console.log("请求完成");
    console.log("请求对象信息:" + JSON.stringify(jqXHR));
    console.log("请求结果状态:" + textStatus);
}

// 请求失败回调
function requestError(jqXHR, textStatus, errorThrown) {
    alert("网络出错:" + errorThrown);

    // 请求出错
    console.log("请求失败");
    console.log("请求对象信息:" + JSON.stringify(jqXHR));
    console.log("请求结果状态:" + textStatus);
}

// 请求成功回调
function requestSuccess(data, textStatus, jqXHR) {
     // 修改当前页码
     $("#current_page").text(pageIndex + "");

    // 解析请求结果
    resultDataHandle(
        data,
        current_select_fn,
        params_result_area[current_select_fn].result_area
    );

    // 请求结果附加信息
    console.log("请求成功");
    console.log("请求结果状态:" + textStatus);
    console.log("请求对象信息:" + JSON.stringify(jqXHR));
}

// 请求过程中禁止输入框输入内容
function closeInputBox() {
    $srk.attr("disabled", true);
    $srk.css("color", "#ccc");
}

// 请求完成后输入框可以输入内容
function openInputBox() {
    $srk.attr("disabled", false);
    $srk.css("color", "#000");
}

// 隐藏所有的参数选择区 显示当前选择的功能参数区
paramsAreaHandle();
function paramsAreaHandle() {
    // 隐藏所有
    for (var key in params_result_area) {
        var params_area = params_result_area[key]["params_area"];

        for (var key1 in params_area) {
            params_area[key1].hide();
        }
    }

    // 显示当前
    if (params_result_area[current_select_fn] != undefined) {
        for (var key in params_result_area[current_select_fn]["params_area"]) {
            params_result_area[current_select_fn]["params_area"][key].show();
        }
    }
}

// 隐藏所有的结果显示区
hiddenResultArea();
function hiddenResultArea() {
    for (var key in params_result_area) {
        var results_area = params_result_area[key]["result_area"];

        results_area.hide();
    }

    // 隐藏页码
    $("#page").hide();
}

// 显示当前选中的功能结果区 包括页码区
function showCurrentFnResultArea() {
    if (params_result_area[current_select_fn] != undefined) {
        params_result_area[current_select_fn]["result_area"].show();
    }

    if (params_result_area[current_select_fn]["result_paging"]) {
        // 结果分页
        $("#page").show();
    } else {
        // 结果不分页
        $("#page").hide();
    }
}

// 请求天气预报支持的省市区
var cities_info = [];
// 省 市 区联动数据
var province_cities_districts = {};
// 当前选择的省
var current_select_province = "";
// 当前选择的市
var current_select_city = "";
// 当前选择的区
var current_select_district = "";

// 加载并处理天气预报支持的城市数据 由于省市区接口不能跨域访问 所以只能保存到本地获取
loadWeatherCities();
function loadWeatherCities() {
    $.ajax({
        url: "./resource/weather_cities.json",
        async: true,
        success: function (data) {
            // 保存请求回来的元数据
            data = $.parseJSON(data);
            cities_info = data.result;

            // 处理数据
            weatherCitiesHandle();
        }
    })
}

// 处理天气预报城市数据
function weatherCitiesHandle() {

    // 遍历城市数据 转换成省市区联动数据
    var provinces_temp = [];
    var cities_temp = {};
    var districts_temp = {};
    for (var i = 0; i < cities_info.length; i++) {
        var current_province = cities_info[i].province;
        var current_city = cities_info[i].city;
        var current_district = cities_info[i].district;

        // 省
        var myProvince = province_cities_districts[current_province];
        if (myProvince == undefined) {
            myProvince = {};
            province_cities_districts[current_province] = myProvince;
        }

        // 市
        var myCity = myProvince[current_city];
        if (myCity == undefined) {
            myCity = [];
            province_cities_districts[current_province][current_city] = myCity;
        }

        // 区
        var myDistrict = myCity.indexOf(current_district);
        if (myDistrict == -1) {
            province_cities_districts[current_province][current_city].push(
                current_district
            );
        }
    }

    // 省显示到界面上
    for (var key in province_cities_districts) {
        // 添加省
        var province_node = $("<option value=" + key + ">" + key + "</option>")
        $("#province").append(province_node);
    }
}

// 省选择发生变化 市和区联动
$("#province").change(function () {
    // 记录当前选择的省
    current_select_province = $(this).val();

    // 移除老的市数据
    $("#city")
        .children()
        .remove("option[value!='']");
    current_select_city = "";

    // 添加新的市数据
    for (var key in province_cities_districts[current_select_province]) {
        var city_node = $("<option value=" + key + ">" + key + "</option>")
        $("#city").append(city_node);
    }

    // 移除老的区数据
    $("#district")
        .children()
        .remove("option[value!='']");
    current_select_district = "";
})

// 市选择繁盛变化 区联动
$("#city").change(function () {
    // 记录选中的市
    current_select_city = $(this).val();

    // 移除老的区数据
    $("#district")
        .children()
        .remove("option[value!='']");
    current_select_district = "";

    // 添加新的区数据
    var current_districts = province_cities_districts[current_select_province][current_select_city];
    for (var i = 0; i < current_districts.length; i++) {
        var district_node = $(
            "<option value=" + current_districts[i] + ">" + current_districts[i] + "</optio" +
            "n>"
        )
        $("#district").append(district_node);
    }
})

// 区选择发生改变 记录选中的区
$("#district").change(function () {
    current_select_district = $(this).val();
})

// 获取选中省市区对应的id
function getWeatherCityId() {
    if (current_select_city.length == 0 && current_select_province.length == 0 && current_select_district == 0) {
        return "";
    }

    current_select_city = current_select_city.length == 0
        ? current_select_province
        : current_select_city;
    current_select_district = current_select_district.length == 0
        ? current_select_city
        : current_select_district;

    // 当前选中的省市区对应的id
    var current_select_result_id = "";
    for (var i = 0; i < cities_info.length; i++) {
        var current_obj = cities_info[i];
        if (current_select_province.length > 0 && current_select_province == current_obj.province) {
            if (current_select_city.length > 0 && current_select_city == current_obj.city) {
                if (current_select_district.length > 0 && current_select_district == current_obj.district) {
                    current_select_result_id = current_obj.id;
                    break;
                }
            }
        }
    }

    return current_select_result_id;
}

// 笑话大全参数 获取10位当前时间戳
function timest() {
    var tmp = Date
        .parse(new Date())
        .toString();
    tmp = tmp.substr(0, 10);
    return tmp;
}

// 点击上一页
$("#pre_page").click(function () {
    if (pageIndex > 1) {
        pageIndex--;
    }

    // 发起ajax请求
    current_req_function();
})

// 点击下一页
$("#next_page").click(function () {
    pageIndex++;

    // 发起ajax请求
    current_req_function();
})

// 新闻类型修改
$("#news_select").change(function () {
    news_type = $(this).val();
})

// 设置历史上的今天日期选择默认选择今天
setHistoryDefaultDate();
function setHistoryDefaultDate(){
    var time = new Date();
        var day = ("0" + time.getDate()).slice(-2);
        var month = ("0" + (time.getMonth() + 1)).slice(-2);
        var today = time.getFullYear() + "-" + (month) + "-" + (day);
        $('#history_date_select').val(today);
}

// 获取历史今天选择的日期
function getHistoryDate(){
    var date = $('#history_date_select').val();
    date = date.substring(date.indexOf("-") + 1);
    return date.split("-");
}

