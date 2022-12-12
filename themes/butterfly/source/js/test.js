function getCurrentPosition() {//调用浏览器定位服务
    map = new AMap.Map('container', {
        resizeEnable : true
    });
    map.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy : true, //是否使用高精度定位，默认:true
            timeout : 10000, //超过10秒后停止定位，默认：无穷大
            buttonOffset : new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            zoomToAccuracy : true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            buttonPosition : 'RB'
        });
        map.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', onComplete);
        //返回定位信息
        AMap.event.addListener(geolocation, 'error', onError);
        //返回定位出错信息
    });
};
//解析定位结果
function onComplete(data) {
    map = new AMap.Map('container', {
        resizeEnable : true,
        zoom : 14,
        center : [data.position.getLng(), data.position.getLat()]
    });
    marker = new AMap.Marker({
        position : [data.position.getLng(), data.position.getLat()],
        map : map
    });
    posX = data.position.getLng();
    poxY = data.position.getLat();
    geocoder(data.position.getLng(), data.position.getLat(), data.addressComponent.citycode);

};
function onError(data) {//解析定位错误信息
    mobile.window.alert({
        title : '提示信息',
        content : '获取定位信息失败！',
        buttons : '确定'
    });
    $("#nowAddress").html("定位失败");
    var str = '<p>定位失败</p>';
    switch(data.info) {
    case 'PERMISSION_DENIED':
        str += '浏览器阻止了定位操作';
        break;
    case 'POSITION_UNAVAILBLE':
        str += '无法获得当前位置';
        break;
    case 'TIMEOUT':
        str += '定位超时';
        break;
    default:
        str += '未知错误';
        break;
    }
};
function geocoder(lnglatX, lnglatY, cityCode) {
    var geocoder = new AMap.Geocoder({
        city : cityCode, //城市，默认：“全国”
        radius : 1000 //范围，默认：500
    });
    geocoder.getAddress([lnglatX, lnglatY], function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
            geocoder_CallBack(result);
        }
    });
}

function geocoder_CallBack(data) {
    var geocode = data.regeocode;
    $("#nowAddress").html(geocode.formattedAddress);
}