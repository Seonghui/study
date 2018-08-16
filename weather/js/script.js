$(document).ready(function(){
    var url= 'http://api.openweathermap.org/data/2.5/weather?q=seoul&APPID=e11462160015cffa69954c9f67741b7b';
    $.getJSON(url, function(data){
        console.log(data);

        
        var country = data.sys.country;// 국가
        var city = data.name; // 도시 이름
        var temp = parseInt(data.main.temp - 273.15);// 현재 기온
        var temp_max = parseInt(data.main.temp_max - 273.15);// 최고 온도
        var temp_min = parseInt(data.main.temp_min - 273.15);// 최저 온도
        var icon = data.weather[0].icon// 이미지

        var icon_url = 'http://openweathermap.org/img/w/' + icon + '.png';
        
        $(".country").html(country + " / " + city);
        $(".temp").html(temp);
        $(".temp_min").html(temp_min);
        $(".temp_max").html(temp_max);
        $(".icon").html("<img src=" + icon_url +  ">");

        

    });
});