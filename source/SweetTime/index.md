---
layout: false
---
{% raw %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>💗</title>
    <style>
       * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #FF627B;
      }
      body {
          overflow-x: hidden;
      }
      .logo {
          width: 60px;
          display: flex;
          position: absolute;
          left: 80px;
          top: 50px;
      }
      .logo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
      }
      .logo h3 {
          padding-left: 20px;
          font-weight: 600;
          font-size: 16px;
      }
      .menu {
          width: 60px;
          position: absolute;
          right: 80px;
          top: 80px;
      }
      .menu img {
          width: 100%;
          height: 100%;
          object-fit: cover;
      }
      .section {
          width: 100%;
          height: 100vh;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      .slogan {
          width: 50%;
          height: 20%;
          margin-top: -12%;
          text-align: center;
          z-index: 1;
      }
      .slogan h3 {
          font-size: 35px;
          font-weight: 300;
      }
      .slogan h1 {
          font-size: 100px;
          font-weight: 400;
      }
      .slogan p {
          font-size: 38px;
          color: #707070;
          line-height: 1.8;
          padding-top: 20px;
      }
      .img1 {
          position: absolute;
          top: 5%;
          left: 10%;
      }
      .img2 {
          position: absolute;
          top: 10%;
          right: 20%;
      }
      .img3 {
          position: absolute;
          top: 40%;
          left: 30%;
      }
      .img4 {
          position: absolute;
          top: 50%;
          right: 25%;
      }
      .img5 {
          position: absolute;
          top: 50%;
          left: -10%;
      }
      .img6 {
          position: absolute;
          top: 50%;
          left: 15%;
      }
      .img7 {
          position: absolute;
          top: 60%;
          right: 2 0%;
      }
      .img8 {
          position: absolute;
          top: 40%;
          right: -10%;
      }
      .img9 {
          position: absolute;
          top: 55%;
          left: 0%;
      }
      .img10 {
          position: absolute;
          top: 55%;
          right: 0%;
      }
    </style>
</head>
<body>
    <div class="logo">
        <img src="img/logo.svg" alt="" />
        <h3>My Girl JiaHua</h3>
      </div>
      <div class="menu"><img src="img/menu.svg" alt="" /></div>
      <div class="section">
        <div class="slogan">
          <h3 class="rellax" data-rellax-speed="6">Gentle & Pretty</h3>
          <h1 class="rellax" data-rellax-speed="5">My Girl JiaHua</h1>
          <p class="rellax" data-rellax-speed="3" style="font-size:38px">
                we've been together
          </p>
        </div>
        <img class="img1 rellax" data-rellax-speed="-2" src="img/1.png" alt="" />
        <img class="img2 rellax" data-rellax-speed="9" src="img/2.png" alt="" />
        <img class="img3 rellax" data-rellax-speed="5" src="img/3.png" alt="" />
        <img class="img4 rellax" data-rellax-speed="-4" src="img/4.png" alt="" />
        <img class="img5 rellax" data-rellax-speed="9" src="img/5.png" alt="" />
        <img class="img6 rellax" data-rellax-speed="-5" src="img/6.png" alt="" />
        <img class="img7 rellax" data-rellax-speed="5" src="img/8.png" alt="" />
        <img class="img8 rellax" data-rellax-speed="-3" src="img/9.png" alt="" />
      </div>
      <div class="section">
        <div class="slogan">
          <h3 >纪念</h3>
          <h1>4年3月5天</h1>
          <p>
            2018.07.14——2022.10.29
          </p>
        </div>
        <img
          src="img/y1.png"
          class="img8 rellax"
          data-rellax-speed="-3"
          data-rellax-vertical-scroll-axis="x"
          alt=""
        />
        <img
          src="img/y2.png"
          class="img9 rellax"
          data-rellax-speed="6"
          data-rellax-vertical-scroll-axis="x"
          alt=""
        />
      </div>
      <div class="section"></div>
      <script >
              (function (q, g) { "function" === typeof define && define.amd ? define([], g) : "object" === typeof module && module.exports ? module.exports = g() : q.Rellax = g() })("undefined" !== typeof window ? window : global, function () {
          var q = function (g, u) {
              function C() { if (3 === a.options.breakpoints.length && Array.isArray(a.options.breakpoints)) { var f = !0, c = !0, b; a.options.breakpoints.forEach(function (a) { "number" !== typeof a && (c = !1); null !== b && a < b && (f = !1); b = a }); if (f && c) return } a.options.breakpoints = [576, 768, 1201]; console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted") }
              var a = Object.create(q.prototype), l = 0, v = 0, m = 0, n = 0, d = [], w = !0, A = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (a) { return setTimeout(a, 1E3 / 60) }, p = null, x = !1; try { var k = Object.defineProperty({}, "passive", { get: function () { x = !0 } }); window.addEventListener("testPassive", null, k); window.removeEventListener("testPassive", null, k) } catch (f) { } var D = window.cancelAnimationFrame || window.mozCancelAnimationFrame ||
                  clearTimeout, E = window.transformProp || function () { var a = document.createElement("div"); if (null === a.style.transform) { var c = ["Webkit", "Moz", "ms"], b; for (b in c) if (void 0 !== a.style[c[b] + "Transform"]) return c[b] + "Transform" } return "transform" }(); a.options = { speed: -2, verticalSpeed: null, horizontalSpeed: null, breakpoints: [576, 768, 1201], center: !1, wrapper: null, relativeToWrapper: !1, round: !0, vertical: !0, horizontal: !1, verticalScrollAxis: "y", horizontalScrollAxis: "x", callback: function () { } }; u && Object.keys(u).forEach(function (d) {
                      a.options[d] =
                      u[d]
                  }); u && u.breakpoints && C(); g || (g = ".rellax"); k = "string" === typeof g ? document.querySelectorAll(g) : [g]; if (0 < k.length) {
                      a.elems = k; if (a.options.wrapper && !a.options.wrapper.nodeType) if (k = document.querySelector(a.options.wrapper)) a.options.wrapper = k; else { console.warn("Rellax: The wrapper you're trying to use doesn't exist."); return } var F, B = function () {
                          for (var f = 0; f < d.length; f++)a.elems[f].style.cssText = d[f].style; d = []; v = window.innerHeight; n = window.innerWidth; f = a.options.breakpoints; F = n < f[0] ? "xs" : n >= f[0] && n <
                              f[1] ? "sm" : n >= f[1] && n < f[2] ? "md" : "lg"; H(); for (f = 0; f < a.elems.length; f++) {
                                  var c = void 0, b = a.elems[f], e = b.getAttribute("data-rellax-percentage"), y = b.getAttribute("data-rellax-speed"), t = b.getAttribute("data-rellax-xs-speed"), g = b.getAttribute("data-rellax-mobile-speed"), h = b.getAttribute("data-rellax-tablet-speed"), k = b.getAttribute("data-rellax-desktop-speed"), l = b.getAttribute("data-rellax-vertical-speed"), m = b.getAttribute("data-rellax-horizontal-speed"), p = b.getAttribute("data-rellax-vertical-scroll-axis"),
                                  q = b.getAttribute("data-rellax-horizontal-scroll-axis"), u = b.getAttribute("data-rellax-zindex") || 0, x = b.getAttribute("data-rellax-min"), A = b.getAttribute("data-rellax-max"), C = b.getAttribute("data-rellax-min-x"), D = b.getAttribute("data-rellax-max-x"), E = b.getAttribute("data-rellax-min-y"), L = b.getAttribute("data-rellax-max-y"), r = !0; t || g || h || k ? c = { xs: t, sm: g, md: h, lg: k } : r = !1; t = a.options.wrapper ? a.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop; a.options.relativeToWrapper &&
                                      (t = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - a.options.wrapper.offsetTop); var z = a.options.vertical ? e || a.options.center ? t : 0 : 0, I = a.options.horizontal ? e || a.options.center ? a.options.wrapper ? a.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0 : 0; t = z + b.getBoundingClientRect().top; g = b.clientHeight || b.offsetHeight || b.scrollHeight; h = I + b.getBoundingClientRect().left; k = b.clientWidth || b.offsetWidth || b.scrollWidth;
                                  z = e ? e : (z - t + v) / (g + v); e = e ? e : (I - h + n) / (k + n); a.options.center && (z = e = .5); c = r && null !== c[F] ? Number(c[F]) : y ? y : a.options.speed; l = l ? l : a.options.verticalSpeed; m = m ? m : a.options.horizontalSpeed; p = p ? p : a.options.verticalScrollAxis; q = q ? q : a.options.horizontalScrollAxis; y = J(e, z, c, l, m); b = b.style.cssText; r = ""; if (e = /transform\s*:/i.exec(b)) r = b.slice(e.index), r = (e = r.indexOf(";")) ? " " + r.slice(11, e).replace(/\s/g, "") : " " + r.slice(11).replace(/\s/g, ""); d.push({
                                      baseX: y.x, baseY: y.y, top: t, left: h, height: g, width: k, speed: c, verticalSpeed: l,
                                      horizontalSpeed: m, verticalScrollAxis: p, horizontalScrollAxis: q, style: b, transform: r, zindex: u, min: x, max: A, minX: C, maxX: D, minY: E, maxY: L
                                  })
                              } K(); w && (window.addEventListener("resize", B), w = !1, G())
                      }, H = function () {
                          var d = l, c = m; l = a.options.wrapper ? a.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset; m = a.options.wrapper ? a.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset;
                          a.options.relativeToWrapper && (l = ((document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset) - a.options.wrapper.offsetTop); return d != l && a.options.vertical || c != m && a.options.horizontal ? !0 : !1
                      }, J = function (d, c, b, e, g) { var f = {}; d = 100 * (g ? g : b) * (1 - d); c = 100 * (e ? e : b) * (1 - c); f.x = a.options.round ? Math.round(d) : Math.round(100 * d) / 100; f.y = a.options.round ? Math.round(c) : Math.round(100 * c) / 100; return f }, h = function () {
                          window.removeEventListener("resize", h); window.removeEventListener("orientationchange",
                              h); (a.options.wrapper ? a.options.wrapper : window).removeEventListener("scroll", h); (a.options.wrapper ? a.options.wrapper : document).removeEventListener("touchmove", h); p = A(G)
                      }, G = function () { H() && !1 === w ? (K(), p = A(G)) : (p = null, window.addEventListener("resize", h), window.addEventListener("orientationchange", h), (a.options.wrapper ? a.options.wrapper : window).addEventListener("scroll", h, x ? { passive: !0 } : !1), (a.options.wrapper ? a.options.wrapper : document).addEventListener("touchmove", h, x ? { passive: !0 } : !1)) }, K = function () {
                          for (var f,
                              c = 0; c < a.elems.length; c++) {
                                  var b = d[c].verticalScrollAxis.toLowerCase(), e = d[c].horizontalScrollAxis.toLowerCase(); f = -1 != b.indexOf("x") ? l : 0; b = -1 != b.indexOf("y") ? l : 0; var g = -1 != e.indexOf("x") ? m : 0; e = -1 != e.indexOf("y") ? m : 0; f = J((f + g - d[c].left + n) / (d[c].width + n), (b + e - d[c].top + v) / (d[c].height + v), d[c].speed, d[c].verticalSpeed, d[c].horizontalSpeed); e = f.y - d[c].baseY; b = f.x - d[c].baseX; null !== d[c].min && (a.options.vertical && !a.options.horizontal && (e = e <= d[c].min ? d[c].min : e), a.options.horizontal && !a.options.vertical &&
                                      (b = b <= d[c].min ? d[c].min : b)); null != d[c].minY && (e = e <= d[c].minY ? d[c].minY : e); null != d[c].minX && (b = b <= d[c].minX ? d[c].minX : b); null !== d[c].max && (a.options.vertical && !a.options.horizontal && (e = e >= d[c].max ? d[c].max : e), a.options.horizontal && !a.options.vertical && (b = b >= d[c].max ? d[c].max : b)); null != d[c].maxY && (e = e >= d[c].maxY ? d[c].maxY : e); null != d[c].maxX && (b = b >= d[c].maxX ? d[c].maxX : b); a.elems[c].style[E] = "translate3d(" + (a.options.horizontal ? b : "0") + "px," + (a.options.vertical ? e : "0") + "px," + d[c].zindex + "px) " + d[c].transform
                          } a.options.callback(f)
                      };
                      a.destroy = function () { for (var f = 0; f < a.elems.length; f++)a.elems[f].style.cssText = d[f].style; w || (window.removeEventListener("resize", B), w = !0); D(p); p = null }; B(); a.refresh = B; return a
                  } console.warn("Rellax: The elements you're trying to select don't exist.")
          }; return q
      });
      </script>
      <script>
        var rellax = new Rellax(".rellax", {
          horizontal: true,
        });
      </script>
</body>
</html>
{% endraw %}
