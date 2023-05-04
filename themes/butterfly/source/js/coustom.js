
//导航栏美化 --
var OriginTitile = document.title;// 防止和动态标题冲突，保持显示原标题
// 返回顶部 显示网页阅读进度
window.onscroll = percent;// 执行函数
// 页面百分比
function percent() {
    let a = document.documentElement.scrollTop, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
        result = Math.round(a / b * 100), // 计算百分比
        btn = document.querySelector("#percent"); // 获取图标

        result<=100||(result=100),btn.innerHTML=result;

        document.getElementById("page-name").innerText = OriginTitile.split(" | SAM")[0] //按照安知鱼的说法，这个放在函数外面也行
}

// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) { saveData('blogbg', s) }
}

// 以下为2.0新增内容

// 创建窗口
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "切换背景",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "60%",
        background: 'var(--leonus-blue)',
        onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
        onrestore: () => { div.innerHTML = '' }
    });
    winResize();
    window.addEventListener('resize', winResize)

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">
    
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
    <h2 id="图片（手机）"><a href="#图片（手机）" class="headerlink" title="图片（手机）"></a>图片（手机）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/63733f0516f2c2beb12a4143.jpg)" class="pimgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/63733f0516f2c2beb12a4143.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/63733f0516f2c2beb12a414d.jpg)" class="pimgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/63733f0516f2c2beb12a414d.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/63733f0516f2c2beb12a4157.jpg)" class="pimgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/63733f0516f2c2beb12a4157.jpg)')"></a>
    
    </div>
    
    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/63733f0516f2c2beb12a4157.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/63733f0516f2c2beb12a4157.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/63733ff416f2c2beb12b64aa.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/63733ff416f2c2beb12b64aa.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/63733ff416f2c2beb12b64af.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/63733ff416f2c2beb12b64af.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/63733ff416f2c2beb12b64b5.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/63733ff416f2c2beb12b64b5.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/6373404716f2c2beb12bda04.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/6373404716f2c2beb12bda04.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/6373411f16f2c2beb12d4917.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/6373411f16f2c2beb12d4917.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://pic.imgdb.cn/item/6373415916f2c2beb12d9047.jpg)" class="imgbox" onclick="changeBg('url(https\://pic.imgdb.cn/item/6373415916f2c2beb12d9047.jpg)')"></a>
    </div>
    
    
    
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    </div>
    
    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a> 
    </div>
`;
}

// 适应窗口大小
function winResize() {
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}





var rAF = function () {
  return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      function (callback) {
          window.setTimeout(callback, 1000 / 60);
      }
  );
}();
var frame = 0;
var allFrameCount = 0;
var lastTime = Date.now();
var lastFameTime = Date.now();
var loop = function () {
  var now = Date.now();
  var fs = (now - lastFameTime);
  var fps = Math.round(1000 / fs);

  lastFameTime = now;
  // 不置 0，在动画的开头及结尾记录此值的差值算出 FPS
  allFrameCount++;
  frame++;

  if (now > 1000 + lastTime) {
      var fps = Math.round((frame * 1000) / (now - lastTime));
      if(fps<=6){
          var kd=`<span style="color:#bd0000">卡成ppt</span>`
      }
      else if(fps<=10){
          var kd=`<span style="color:red">电竞级帧率</span>`
      }
      else if(fps<=14){
          var kd=`<span style="color:yellow">难受</span>`
      }
      else if(fps<24){
          var kd=`<span style="color:orange">卡</span>`
      }
      else if(fps<=40){
          var kd=`<span style="color:green">...</span>`
      }
      else{
          var kd=`<span style="color:#425aef">正常</span>`
      }
      document.getElementById("fps").innerHTML=`FPS:${fps} ${kd}`;
      frame = 0;
      lastTime = now;
  };

  rAF(loop);
}

loop();

{$("#fps").hide()}


//控制面板js
document.addEventListener('pjax:complete', tosetting);
document.addEventListener('DOMContentLoaded', tosetting);
function tosetting(){
$("#settingWindow").hide();
if(localStorage.getItem("blur")=="false"){
    blur=0;
    }else{
        blur=1;
    
    }
    if(localStorage.getItem("yjjs")=="true"){
        yjjs=1;
    }else{
        yjjs=0;
        
    }
    if(localStorage.getItem("fpson")==undefined){
        localStorage.setItem("fpson","1");
    }
if(!blur){
    document.getElementById("settingStyle").innerText=`
    *,*:not(.card-info)::before,*::after{
        -webkit-backdrop-filter: none!important;
        backdrop-filter: none!important;
        -webkit-filter: none!important;
        filter: none!important;
    }`}
    else{
        document.getElementById("settingStyle").innerText=''
    }
setBlur=function(){
    blur=!blur;
    localStorage.setItem("blur",blur);
    if(!blur){
    document.getElementById("settingStyle").innerText=`
    *{
        -webkit-backdrop-filter: none!important;
        backdrop-filter: none!important;
        -webkit-filter: none!important;
        filter: none!important;
    }`}
    else{
        document.getElementById("settingStyle").innerText=''
    }
}

yjjs1=function(){
    yjjs=!yjjs;
    localStorage.setItem("yjjs",yjjs)
}
if(localStorage.getItem("blogTheme")=="acrylic"){
    document.getElementById("css").href="";
}
switchTheme=function(){
    if(document.getElementById("css").href==window.location.protocol+"//"+window.location.host+"/css/stylessimple.css"){
        document.getElementById("css").href=""
        localStorage.setItem("blogTheme","acrylic");
    }else{
        document.getElementById("css").href="/css/stylessimple.css"
        localStorage.setItem("blogTheme","simple");
    }
}
setColor=function(c){
    document.getElementById("themeColor").innerText=`:root{--lyx-theme:var(--lyx-${c})!important}`;
    localStorage.setItem("themeColor",c);

}
setFont=function(n){
    localStorage.setItem("font",n);
    if(n=="main"){
        var s=document.querySelectorAll("body,.wv-lt-location>a[data-v-4b9dcab4],.wv-lt-location>span[data-v-4b9dcab4],.wv-n-h-now-tmp>span[data-v-5f4c0628],.wv-n-h-now-txt>span[data-v-5f4c0628],.wv-n-h-now-rain>a[data-v-5f4c0628], .wv-n-h-now-rain>span[data-v-5f4c0628],.wv-f-forecast-date>a[data-v-66693262],.wv-f-a,.wv-lt-location>a[data-v-4b9dcab4],.wv-lt-location>span[data-v-4b9dcab4],.wv-n-h-now-tmp>span[data-v-5f4c0628],.wv-n-h-now-txt>span[data-v-5f4c0628],.wv-n-h-now-rain>a[data-v-5f4c0628], .wv-n-h-now-rain>span[data-v-5f4c0628],.wv-f-forecast-date>a[data-v-66693262],.wv-f-a,.aplayer")
        for(var i = 0; i <s.length; i++) {
            s[i].style.fontFamily="-apple-system, IBM Plex Mono ,monospace,'微软雅黑', sans-serif"
        }
    }
    else if(n=="HYPailou"){
        var s=document.querySelectorAll("body,.wv-lt-location>a[data-v-4b9dcab4],.wv-lt-location>span[data-v-4b9dcab4],.wv-n-h-now-tmp>span[data-v-5f4c0628],.wv-n-h-now-txt>span[data-v-5f4c0628],.wv-n-h-now-rain>a[data-v-5f4c0628], .wv-n-h-now-rain>span[data-v-5f4c0628],.wv-f-forecast-date>a[data-v-66693262],.wv-f-a,.wv-lt-location>a[data-v-4b9dcab4],.wv-lt-location>span[data-v-4b9dcab4],.wv-n-h-now-tmp>span[data-v-5f4c0628],.wv-n-h-now-txt>span[data-v-5f4c0628],.wv-n-h-now-rain>a[data-v-5f4c0628], .wv-n-h-now-rain>span[data-v-5f4c0628],.wv-f-forecast-date>a[data-v-66693262],.wv-f-a,.aplayer")
        for(var i = 0; i <s.length; i++) {
            s[i].style.fontFamily="Fredoka,HYPailou,KyoukashoProL,-apple-system, IBM Plex Mono ,monospace,'微软雅黑', sans-serif"
        }
    }
    else{
        var s=document.querySelectorAll("body,.wv-lt-location>a[data-v-4b9dcab4],.wv-lt-location>span[data-v-4b9dcab4],.wv-n-h-now-tmp>span[data-v-5f4c0628],.wv-n-h-now-txt>span[data-v-5f4c0628],.wv-n-h-now-rain>a[data-v-5f4c0628], .wv-n-h-now-rain>span[data-v-5f4c0628],.wv-f-forecast-date>a[data-v-66693262],.wv-f-a,.wv-lt-location>a[data-v-4b9dcab4],.wv-lt-location>span[data-v-4b9dcab4],.wv-n-h-now-tmp>span[data-v-5f4c0628],.wv-n-h-now-txt>span[data-v-5f4c0628],.wv-n-h-now-rain>a[data-v-5f4c0628], .wv-n-h-now-rain>span[data-v-5f4c0628],.wv-f-forecast-date>a[data-v-66693262],.wv-f-a,.aplayer")
        for(var i = 0; i <s.length; i++) {
            s[i].style.fontFamily="var(--global-font),KyoukashoProL,-apple-system, IBM Plex Mono ,monosapce,\"微软雅黑\", sans-serif"
        }
        document.body.style.fontFamily="var(--global-font),KyoukashoProL,-apple-system, IBM Plex Mono ,monosapce,'微软雅黑', sans-serif"
        document.documentElement.style.setProperty('--global-font', n)
    }
}
if(localStorage.getItem("themeColor")==undefined){
    localStorage.setItem("themeColor","pink");
}

setColor(localStorage.getItem("themeColor"));



if(localStorage.getItem("hideRightside")==undefined){
    localStorage.setItem("hideRightside","0");
}

if(localStorage.getItem("hideRightside")=="1"){
    $("#rightside").toggle()
}
toggleRightside=function(){
    $("#rightside").toggle();
    localStorage.setItem("hideRightside",Math.abs(Number(localStorage.getItem("hideRightside"))-1))
}
if(localStorage.getItem("font")==undefined){
    localStorage.setItem("font","HYTMR")
}
setFont(localStorage.getItem("font"))
// 存数据
// name：命名 data：数据
saveData=function(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
loadData=function(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}
// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
changeBg=function(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) { saveData('blogbg', s) }
}
// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }



fpssw=function(){
    if(localStorage.getItem("fpson")=="1"){
        localStorage.setItem("fpson","0");
    }else{
        localStorage.setItem("fpson","1");
    }
}
$(".asetting").hide();
$('#backer').hide();
$("#"+localStorage.getItem("themeColor")).attr("checked", true);
if(localStorage.getItem("blur")=="false"){
    document.getElementById("blur").checked=true;
}
if(localStorage.getItem("yjjs")=="true"){
    document.getElementById("yjjs").checked=true;
}
if(localStorage.getItem("fpson")=="1"){
    document.getElementById("fpson").checked=true;
}


if(localStorage.getItem("sakurahide")=="false"){
    document.getElementById("hideSakura").checked=true;
    isSakura=1;
}
else if(localStorage.getItem("sakurahide")==null){
    localStorage.setItem("sakurahide","false");
    document.getElementById("hideSakura").checked=true;
    isSakura=1;
}
else{
    setTimeout(
    stopp,1000);
    isSakura=0;
}
if(localStorage.getItem("aplayerhide")=="false"){
    document.getElementById("hideAplayer").checked=true;
}
else if(localStorage.getItem("aplayerhide")==null){
    localStorage.setItem("aplayerhide","false");
    document.getElementById("hideAplayer").checked=true;
}
else{
    doStuff=function() {
        flag=0;
        try{
            ap=aplayers[0];
            ap.list;
            flag=1;
        }catch{
            setTimeout(doStuff, 50);
            return;
        }
        if(flag){
            $(".aplayer-fixed").hide()
        }
    }
    doStuff();
    
}

document.getElementsByClassName("reSettings")[0].onclick=function(){
    localStorage.clear()
    window.location.reload()
}

toggleWinbox=function(){
    $("#settingWindow").fadeToggle();
    if(document.getElementById("settingWindow").style.display!="none"){
        document.getElementById("settingWindow").style.display="flex";
    }
}
fullScreen=function() {
    if (document.fullscreenElement) document.exitFullscreen()
    else document.documentElement.requestFullscreen();
}
toggleAside=function(){
    const $htmlDom = document.documentElement.classList
      $htmlDom.contains('hide-aside')
        ? saveToLocal.set('aside-status', 'show', 2)
        : saveToLocal.set('aside-status', 'hide', 2)
      $htmlDom.toggle('hide-aside')
}
toggleAplayer=function(){
    $(".aplayer-fixed").toggle()
    if(localStorage.getItem("aplayerhide")=="true"){
        localStorage.setItem("aplayerhide",false);
    }
    else{
        localStorage.setItem("aplayerhide",true);
    }
}

toggleSakuras=function(){
    isSakura=!isSakura;
    stopp(isSakura);
    if(localStorage.getItem("sakurahide")=="true"){
        localStorage.setItem("sakurahide",false);
    }
    else{
        localStorage.setItem("sakurahide",true);
    }
}
switchAside=function(){
    if(left){
        document.getElementById("aside-content").classList.add("right");
        document.querySelector(".layout > div:first-child").classList.add("left");
        localStorage.setItem("leftAside","false");
    }
    else{
        document.getElementById("aside-content").className="aside-content";
        document.querySelector(".layout > div:first-child").className="";
        try{
        document.querySelector("#recent-posts").className="recent-posts";
    }catch(err){}localStorage.setItem("leftAside","true");}
    left=!left;
}
left=1;
if(localStorage.getItem("leftAside")=="true"||localStorage.getItem("leftAside")==null){
    
}else{
    switchAside();
}
if(localStorage.getItem("autoTheme")=="true"){
    localStorage.setItem("autoTheme","false");
    document.getElementById("autoTheme").checked=true;
    var time=new Date();
    if(time.getHours()<=7||time.getHours()>=19){
        activateDarkMode()
        saveToLocal.set('theme', 'dark', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
    }
    else{
        activateLightMode()
        saveToLocal.set('theme', 'light', 2)
        GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
    }
}
if(location.href.indexOf('posts')!=-1){
    var xhr = new XMLHttpRequest();
    var url = document.querySelector('#page-header').style.backgroundImage.split('url("')[1].split('")')[0];
    xhr.open("GET","https://apis.yisous.xyz/api/imageColor?imgurl="+url, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState===4) {
            if(xhr.status===200) {
                document.getElementById("themeColor").innerText=`:root{--lyx-theme:${xhr.responseText}!important}`;
            }
        }
    }
}
toggleAutoTheme=()=>{
    if(localStorage.getItem("autoTheme")=="true"){
        localStorage.setItem("autoTheme","false");
        $("#con-mode").show();
    }
    else{
        localStorage.setItem("autoTheme","true");
        var time=new Date();
        if(time.getHours()<=7||time.getHours()>=19){
            activateDarkMode()
            saveToLocal.set('theme', 'dark', 2)
            GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
        }
        else{
            activateLightMode()
            saveToLocal.set('theme', 'light', 2)
            GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
        }
        $("#con-mode").hide();
    }
}
}

/*justlove */
if (document.getElementById("post-cover")) {
	const t = document.getElementById("post-cover"),
		e = t.getAttribute("data-lazy-src") || t.getAttribute("src");
	RGBaster.colors(e, {
		paletteSize: 30,
		exclude: ["rgb(255,255,255)", "rgb(0,0,0)", "rgb(254,254,254)"],
		success: function(t) {
			if ("rgb()" != t.dominant) {
				const e = t.dominant.match(/\d+/g);
				e[0] > 210 && e[1] > 210 && e[2] > 210 && (e[0] = 210, e[1] = 210, e[2] = 210);
				const o = `rgba(${e[0]},${e[1]},${e[2]})`;
				let l;
				.213 * e[0] + .715 * e[1] + .072 * e[2] >= 127.5 ? (l = "#000", metaColor = "#1C1C1C") : (l = "#fff", metaColor = "#eee"), document.styleSheets[0].addRule(":root", "--mj-main:" + o + "!important"), document.styleSheets[0].addRule(":root", "--mj-titlecolor:" + l + "!important"), document.styleSheets[0].addRule(":root", "--mj-metacolor:" + metaColor + "!important")
			} else document.styleSheets[0].addRule(":root", "--mj-main: rgba(210,210,210) !important"), document.styleSheets[0].addRule(":root", "--mj-titlecolor: #000 !important"), document.styleSheets[0].addRule(":root", "--mj-metacolor: #1C1C1C !important")
		},
		error: function() {
			document.styleSheets[0].addRule(":root", "--mj-main: rgba(210,210,210) !important"), document.styleSheets[0].addRule(":root", "--mj-titlecolor: #000 !important"), document.styleSheets[0].addRule(":root", "--mj-metacolor: #1C1C1C !important")
		}
	})
} else document.styleSheets[0].addRule(":root", "--mj-titlecolor: var(--mj-fontcolor) !important");