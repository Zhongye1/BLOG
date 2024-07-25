/* 阅读进度 start */
document.addEventListener('pjax:complete', function () {
  window.onscroll = percent;
});
document.addEventListener('DOMContentLoaded', function () {
  window.onscroll = percent;
});
// 页面百分比
function percent() {

  // 先让菜单栏消失
  try {
    rmf.showRightMenu(false);
    $('.rmMask').attr('style', 'display: none');
  } catch (err) {

  }

  let a = document.documentElement.scrollTop, // 卷去高度
    b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
    result = Math.round(a / b * 100), // 计算百分比
    btn = document.querySelector("#go-up"); // 获取按钮

  if (result < 95) { // 如果阅读进度小于95% 就显示百分比
    btn.childNodes[0].style.display = 'none'
    btn.childNodes[1].style.display = 'block'
    btn.childNodes[1].innerHTML = result + '<span>%</span>';
  } else { // 如果大于95%就显示回到顶部图标
    btn.childNodes[1].style.display = 'none'
    btn.childNodes[0].style.display = 'block'
  }
}
/* 阅读进度 end */

//----------------------------------------------------------------

/* 导航栏显示标题 start */

document.addEventListener('pjax:complete', tonav);
document.addEventListener('DOMContentLoaded', tonav);
//响应pjax
function tonav() {
  document.getElementById("name-container").setAttribute("style", "display:none");
  var position = $(window).scrollTop();
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > position) {
      document.getElementById("name-container").setAttribute("style", "");
      document.getElementsByClassName("menus_items")[1].setAttribute("style", "display:none!important");
    } else {
      document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
      document.getElementById("name-container").setAttribute("style", "display:none");
    }
    position = scroll;
  });
  //修复没有弄右键菜单的童鞋无法回顶部的问题
  document.getElementById("page-name").innerText = document.title.split(" | Fomalhaut🥝")[0];
}

function scrollToTop() {
  document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
  document.getElementById("name-container").setAttribute("style", "display:none");
  btf.scrollToDest(0, 500);
}

/* 导航栏显示标题 end */

//----------------------------------------------------------------

/* 欢迎信息 start */
//get请求
$.ajax({
  type: 'get',
  url: 'https://apis.map.qq.com/ws/location/v1/ip',
  data: {
    key: '2SBBZ-NM7LL-ZBZPY-M3FNR-YZP2O-BFFGH',  // 这里要写你的KEY!!!
    output: 'jsonp',
  },
  dataType: 'jsonp',
  success: function (res) {
    ipLoacation = res;
  }
})
function getDistance(e1, n1, e2, n2) {
  const R = 6371
  const { sin, cos, asin, PI, hypot } = Math
  let getPoint = (e, n) => {
    e *= PI / 180
    n *= PI / 180
    return { x: cos(n) * cos(e), y: cos(n) * sin(e), z: sin(n) }
  }

  let a = getPoint(e1, n1)
  let b = getPoint(e2, n2)
  let c = hypot(a.x - b.x, a.y - b.y, a.z - b.z)
  let r = asin(c / 2) * 2 * R
  return Math.round(r);
}

function showWelcome() {

  let dist = getDistance(113.272012, 23.154266, ipLoacation.result.location.lng, ipLoacation.result.location.lat); //这里换成自己的经纬度
  let pos = ipLoacation.result.ad_info.nation;
  let ip;
  let posdesc;
  //根据国家、省份、城市信息自定义欢迎语
  switch (ipLoacation.result.ad_info.nation) {
    case "日本":
      posdesc = "欢迎！";
      break;
    case "美国":
      posdesc = "California Dreaming~~";
      break;
    case "英国":
      posdesc = "来点炸鱼薯条";
      break;
    case "俄罗斯":
      posdesc = "记得去斯摩棱斯克玩！";
      break;
    case "法国":
      posdesc = "C'est La Vie";
      break;
    case "德国":
      posdesc = "Die Zeit verging im Fluge.";
      break;
    case "澳大利亚":
      posdesc = "寄个袋鼠！";
      break;
    case "加拿大":
      posdesc = "拾起一片枫叶赠予你";
      break;
    case "中国":
      pos = ipLoacation.result.ad_info.province + " " + ipLoacation.result.ad_info.city + " " + ipLoacation.result.ad_info.district;
      ip = ipLoacation.result.ip;
      switch (ipLoacation.result.ad_info.province) {
        case "北京市":
          posdesc = "想去华北诶";
          break;
        case "天津市":
          posdesc = "记得去看渤海湾。";
          break;
        case "河北省":
          posdesc = "想去秦皇岛";
          break;
        case "山西省":
          posdesc = "欢迎";
          break;
        case "内蒙古自治区":
          posdesc = "内蒙古的同志你好！";
          break;
        case "辽宁省":
          posdesc = "沈阳好果汁（bushi";
          break;
        case "吉林省":
          posdesc = "吉林看雪挺不错";
          break;
        case "黑龙江省":
          posdesc = "带瓶常温啤酒。";
          break;
        case "上海市":
          posdesc = "魔都诶。";
          break;
        case "江苏省":
          switch (ipLoacation.result.ad_info.city) {
            case "南京市":
              posdesc = "南京哈哈哈";
              break;
            case "苏州市":
              posdesc = "欢迎";
              break;
            default:
              posdesc = "散装是必须要散装的。";
              break;
          }
          break;
        case "浙江省":
          posdesc = "东风渐绿西湖柳，雁已还人未南归。";
          break;
        case "河南省":
          switch (ipLoacation.result.ad_info.city) {
            case "郑州市":
              posdesc = "郑州诶";
              break;
            case "南阳市":
              posdesc = "欢迎";
              break;
            case "驻马店市":
              posdesc = "欢迎";
              break;
            case "开封市":
              posdesc = "欢迎。";
              break;
            case "洛阳市":
              posdesc = "欢迎。";
              break;
            default:
              posdesc = "欢迎";
              break;
          }
          break;
        case "安徽省":
          posdesc = "欢迎。";
          break;
        case "福建省":
          posdesc = "欢迎。";
          break;
        case "江西省":
          posdesc = "欢迎。";
          break;
        case "山东省":
          posdesc = "站长目前在广州";
          break;
        case "湖北省":
          posdesc = "同省的hhh";
          break;
        case "湖南省":
          posdesc = "想去长沙hhh";
          break;
        case "广东省":
          posdesc = "站长目前在广州";
          break;
        case "广西壮族自治区":
          posdesc = "广西同胞好。";
          break;
        case "海南省":
          posdesc = "东北第四省";
          break;
        case "四川省":
          posdesc = "欢迎。";
          break;
        case "贵州省":
          posdesc = "欢迎";
          break;
        case "云南省":
          posdesc = "欢迎";
          break;
        case "西藏自治区":
          posdesc = "西藏同胞好！";
          break;
        case "陕西省":
          posdesc = "来份臊子面加馍。";
          break;
        case "甘肃省":
          posdesc = "欢迎";
          break;
        case "青海省":
          posdesc = "欢迎";
          break;
        case "宁夏回族自治区":
          posdesc = "大漠孤烟直，长河落日圆。";
          break;
        case "新疆维吾尔自治区":
          posdesc = "新疆的同志们好";
          break;
        case "台湾省":
          posdesc = "我在这头，大陆在那头。";
          break;
        case "香港特别行政区":
          posdesc = "你这一瓶可乐卖我16元...";
          break;
        case "澳门特别行政区":
          posdesc = "看看妈祖庙";
          break;
        default:
          posdesc = "带我去你的城市逛逛吧！";
          break;
      }
      break;
    default:
      posdesc = "带我去你的国家逛逛吧。";
      break;
  }

  //根据本地时间切换欢迎语
  let timeChange;
  let date = new Date();
  if (date.getHours() >= 5 && date.getHours() < 11) timeChange = "<span>上午好</span>";
  else if (date.getHours() >= 11 && date.getHours() < 13) timeChange = "<span>中午好</span>";
  else if (date.getHours() >= 13 && date.getHours() < 15) timeChange = "<span>下午好</span>";
  else if (date.getHours() >= 15 && date.getHours() < 16) timeChange = "<span>下午好</span>";
  else if (date.getHours() >= 16 && date.getHours() < 19) timeChange = "<span>现在是傍晚时分。</span>";
  else if (date.getHours() >= 19 && date.getHours() < 24) timeChange = "<span>晚上好！</span>，";
  else timeChange = "夜深了，早点休息。";

  try {
    //自定义文本和需要放的位置
    document.getElementById("welcome-info").innerHTML =
      `<b><center> 石菖蒲.aic 已提交登录申请 </center>&emsp;&emsp;欢迎来自 <span style="color:var(--theme-color)">${pos}</span> 的同志，${timeChange}您现在距离站长约 <span style="color:var(--theme-color)">${dist}</span> 公里，已定位当前的IP地址为： <span style="color:var(--theme-color)">${ip}</span>， ${posdesc}</b>`;
  } catch (err) {
    // console.log("Pjax无法获取#welcome-info元素🙄🙄🙄")
  }
}
window.onload = showWelcome;
// 如果使用了pjax在加上下面这行代码
document.addEventListener('pjax:complete', showWelcome);

/* 欢迎信息 end */

//----------------------------------------------------------------

/* 微博热搜 start */
document.addEventListener('pjax:complete', getWeibo);
document.addEventListener('DOMContentLoaded', getWeibo);

function getWeibo() {
  fetch('').then(data => data.json()).then(data => {  // 这里要写上你的API!!!
    let html = '<style>.weibo-new{background:#ff3852}.weibo-hot{background:#ff9406}.weibo-jyzy{background:#ffc000}.weibo-recommend{background:#00b7ee}.weibo-adrecommend{background:#febd22}.weibo-friend{background:#8fc21e}.weibo-boom{background:#bd0000}.weibo-topic{background:#ff6f49}.weibo-topic-ad{background:#4dadff}.weibo-boil{background:#f86400}#weibo-container{overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none}#weibo-container::-webkit-scrollbar{display:none}.weibo-list-item{display:flex;flex-direction:row;justify-content:space-between;flex-wrap:nowrap}.weibo-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:auto}.weibo-num{float:right}.weibo-hotness{display:inline-block;padding:0 6px;transform:scale(.8) translateX(-3px);color:#fff;border-radius:8px}</style>'
    html += '<div class="weibo-list">'
    let hotness = {
      '爆': 'weibo-boom',
      '热': 'weibo-hot',
      '沸': 'weibo-boil',
      '新': 'weibo-new',
      '荐': 'weibo-recommend',
      '音': 'weibo-jyzy',
      '影': 'weibo-jyzy',
      '剧': 'weibo-jyzy',
      '综': 'weibo-jyzy'
    }
    for (let item of data) {
      html += '<div class="weibo-list-item"><div class="weibo-hotness ' + hotness[(item.hot || '荐')] + '">' + (item.hot || '荐') + '</div>'
        + '<span class="weibo-title"><a title="' + item.title + '"href="' + item.url + '" target="_blank" rel="external nofollow noreferrer" style="color:#a08ed5">' + item.title + '</a></span>'
        + '<div class="weibo-num"><span>' + item.num + '</span></div></div>'
    }
    html += '</div>'
    document.getElementById('weibo-container').innerHTML = html
  }).catch(function (error) {
    console.log(error);
  });
}

/* 微博热搜 end */

//----------------------------------------------------------------

/* 禁用f12与按键防抖 start */
// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
  if (TT !== null) clearTimeout(TT);
  TT = setTimeout(fn, time);
}

// 复制提醒
document.addEventListener("copy", function () {
  debounce(function () {
    new Vue({
      data: function () {
        this.$notify({
          title: "复制成功！",
          message: "若要转载最好保留原文链接！",
          position: 'top-left',
          offset: 50,
          showClose: true,
          type: "success",
          duration: 5000
        });
      }
    })
  }, 300);
})


// f12提醒但不禁用
document.onkeydown = function (e) {
  if (123 == e.keyCode || (e.ctrlKey && e.shiftKey && (74 === e.keyCode || 73 === e.keyCode || 67 === e.keyCode)) || (e.ctrlKey && 85 === e.keyCode)) {
    debounce(function () {
      new Vue({
        data: function () {
          this.$notify({
            title: "你已被发现😜",
            message: "扒源记住要遵循GPL协议！",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "warning",
            duration: 5000
          });
        }
      })
    }, 300);
  }
};
/* 禁用f12与按键防抖 end */

//----------------------------------------------------------------

/* 雪花特效 start */
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
  // 移动端不显示
} else {
  // document.write('<canvas id="snow" style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:-2;pointer-events:none"></canvas>');

  window && (() => {
    let e = {
      flakeCount: 50, // 雪花数目
      minDist: 150,   // 最小距离
      color: "255, 255, 255", // 雪花颜色
      size: 1.5,  // 雪花大小
      speed: .5,  // 雪花速度
      opacity: .7,    // 雪花透明度
      stepsize: .5    // 步距
    };
    const t = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
      window.setTimeout(e, 1e3 / 60)
    }
      ;
    window.requestAnimationFrame = t;
    const i = document.getElementById("snow"),
      n = i.getContext("2d"),
      o = e.flakeCount;
    let a = -100,
      d = -100,
      s = [];
    i.width = window.innerWidth,
      i.height = window.innerHeight;
    const h = () => {
      n.clearRect(0, 0, i.width, i.height);
      const r = e.minDist;
      for (let t = 0; t < o; t++) {
        let o = s[t];
        const h = a,
          w = d,
          m = o.x,
          c = o.y,
          p = Math.sqrt((h - m) * (h - m) + (w - c) * (w - c));
        if (p < r) {
          const e = (h - m) / p,
            t = (w - c) / p,
            i = r / (p * p) / 2;
          o.velX -= i * e,
            o.velY -= i * t
        } else
          o.velX *= .98,
            o.velY < o.speed && o.speed - o.velY > .01 && (o.velY += .01 * (o.speed - o.velY)),
            o.velX += Math.cos(o.step += .05) * o.stepSize;
        n.fillStyle = "rgba(" + e.color + ", " + o.opacity + ")",
          o.y += o.velY,
          o.x += o.velX,
          (o.y >= i.height || o.y <= 0) && l(o),
          (o.x >= i.width || o.x <= 0) && l(o),
          n.beginPath(),
          n.arc(o.x, o.y, o.size, 0, 2 * Math.PI),
          n.fill()
      }
      t(h)
    }
      , l = e => {
        e.x = Math.floor(Math.random() * i.width),
          e.y = 0,
          e.size = 3 * Math.random() + 2,
          e.speed = 1 * Math.random() + .5,
          e.velY = e.speed,
          e.velX = 0,
          e.opacity = .5 * Math.random() + .3
      }
      ;
    document.addEventListener("mousemove", (e => {
      a = e.clientX,
        d = e.clientY
    }
    )),
      window.addEventListener("resize", (() => {
        i.width = window.innerWidth,
          i.height = window.innerHeight
      }
      )),
      (() => {
        for (let t = 0; t < o; t++) {
          const t = Math.floor(Math.random() * i.width)
            , n = Math.floor(Math.random() * i.height)
            , o = 3 * Math.random() + e.size
            , a = 1 * Math.random() + e.speed
            , d = .5 * Math.random() + e.opacity;
          s.push({
            speed: a,
            velX: 0,
            velY: a,
            x: t,
            y: n,
            size: o,
            stepSize: Math.random() / 30 * e.stepsize,
            step: 0,
            angle: 180,
            opacity: d
          })
        }
        h()
      }
      )()
  }
  )();
}

/* 雪花特效 end */

//----------------------------------------------------------------

/* 星空特效 start */
function dark() {
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  var n, e, i, h, t = .05,
    s = document.getElementById("universe"),
    o = !0,
    a = "180,184,240",
    r = "226,225,142",
    d = "226,225,224",
    c = [];

  function f() {
    n = window.innerWidth, e = window.innerHeight, i = .216 * n, s.setAttribute("width", n), s.setAttribute("height", e)
  }
  function u() {
    h.clearRect(0, 0, n, e);
    for (var t = c.length, i = 0; i < t; i++) {
      var s = c[i];
      s.move(), s.fadeIn(), s.fadeOut(), s.draw()
    }
  }
  function y() {
    this.reset = function () {
      this.giant = m(3), this.comet = !this.giant && !o && m(10), this.x = l(0, n - 10), this.y = l(0, e), this.r = l(1.1, 2.6), this.dx = l(t, 6 * t) + (this.comet + 1 - 1) * t * l(50, 120) + 2 * t, this.dy = -l(t, 6 * t) - (this.comet + 1 - 1) * t * l(50, 120), this.fadingOut = null, this.fadingIn = !0, this.opacity = 0, this.opacityTresh = l(.2, 1 - .4 * (this.comet + 1 - 1)), this.do = l(5e-4, .002) + .001 * (this.comet + 1 - 1)
    }, this.fadeIn = function () {
      this.fadingIn && (this.fadingIn = !(this.opacity > this.opacityTresh), this.opacity += this.do)
    }, this.fadeOut = function () {
      this.fadingOut && (this.fadingOut = !(this.opacity < 0), this.opacity -= this.do / 2, (this.x > n || this.y < 0) && (this.fadingOut = !1, this.reset()))
    }, this.draw = function () {
      if (h.beginPath(), this.giant) h.fillStyle = "rgba(" + a + "," + this.opacity + ")", h.arc(this.x, this.y, 2, 0, 2 * Math.PI, !1); else if (this.comet) {
        h.fillStyle = "rgba(" + d + "," + this.opacity + ")", h.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, !1); for (var t = 0; t < 30; t++)h.fillStyle = "rgba(" + d + "," + (this.opacity - this.opacity / 20 * t) + ")", h.rect(this.x - this.dx / 4 * t, this.y - this.dy / 4 * t - 2, 2, 2), h.fill()
      } else h.fillStyle = "rgba(" + r + "," + this.opacity + ")", h.rect(this.x, this.y, this.r, this.r);
      h.closePath(), h.fill()
    }, this.move = function () {
      this.x += this.dx, this.y += this.dy, !1 === this.fadingOut && this.reset(), (this.x > n - n / 4 || this.y < 0) && (this.fadingOut = !0)
    }, setTimeout(function () {
      o = !1
    }, 50)
  }
  function m(t) {
    return Math.floor(1e3 * Math.random()) + 1 < 10 * t
  }
  function l(t, i) {
    return Math.random() * (i - t) + t
  }
  f(), window.addEventListener("resize", f, !1), function () {
    h = s.getContext("2d");
    for (var t = 0; t < i; t++) c[t] = new y, c[t].reset();
    u()
  }(), function t() {
    document.getElementsByTagName('html')[0].getAttribute('data-theme') == 'dark' && u(), window.requestAnimationFrame(t)
  }()
};
dark()
/* 星空特效 end */

//----------------------------------------------------------------

/* 表情放大 start */
document.addEventListener('pjax:complete', function () {
  if (document.getElementById('post-comment')) owoBig();
});
document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('post-comment')) owoBig();
});

// 表情放大
function owoBig() {
  let flag = 1, // 设置节流阀
    owo_time = '', // 设置计时器
    m = 3; // 设置放大倍数
  // 创建盒子
  let div = document.createElement('div'),
    body = document.querySelector('body');
  // 设置ID
  div.id = 'owo-big';
  // 插入盒子
  body.appendChild(div)

  // 构造observer
  let observer = new MutationObserver(mutations => {

    for (let i = 0; i < mutations.length; i++) {
      let dom = mutations[i].addedNodes,
        owo_body = '';
      if (dom.length == 2 && dom[1].className == 'OwO-body') owo_body = dom[1];
      // 如果需要在评论内容中启用此功能请解除下面的注释
      // else if (dom.length == 1 && dom[0].className == 'tk-comment') owo_body = dom[0];
      else continue;

      // 禁用右键（手机端长按会出现右键菜单，为了体验给禁用掉）
      if (document.body.clientWidth <= 768) owo_body.addEventListener('contextmenu', e => e.preventDefault());
      // 鼠标移入
      owo_body.onmouseover = (e) => {
        if (flag && e.target.tagName == 'IMG') {
          flag = 0;
          // 移入300毫秒后显示盒子
          owo_time = setTimeout(() => {
            let height = e.path[0].clientHeight * m, // 盒子高
              width = e.path[0].clientWidth * m, // 盒子宽
              left = (e.x - e.offsetX) - (width - e.path[0].clientWidth) / 2, // 盒子与屏幕左边距离
              top = e.y - e.offsetY; // 盒子与屏幕顶部距离

            if ((left + width) > body.clientWidth) left -= ((left + width) - body.clientWidth + 10); // 右边缘检测，防止超出屏幕
            if (left < 0) left = 10; // 左边缘检测，防止超出屏幕
            // 设置盒子样式
            div.style.cssText = `display:flex; height:${height}px; width:${width}px; left:${left}px; top:${top}px;`;
            // 在盒子中插入图片
            div.innerHTML = `<img src="${e.target.src}">`
          }, 300);
        }
      };
      // 鼠标移出隐藏盒子
      owo_body.onmouseout = () => { div.style.display = 'none', flag = 1, clearTimeout(owo_time); }
    }

  })
  observer.observe(document.getElementById('post-comment'), { subtree: true, childList: true })
}
/* 表情放大 end */

//----------------------------------------------------------------

/* 随便逛逛 start */
// 随便逛逛
// 发现有时会和当前页面重复，加一个判断
function randomPost() {
  fetch('/baidusitemap.xml').then(res => res.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
    let ls = data.querySelectorAll('url loc');
    while (true) {
      let url = ls[Math.floor(Math.random() * ls.length)].innerHTML;
      if (location.href == url) continue;
      location.href = url;
      return;
    }
  })
}
/* 随便逛逛 end */

//----------------------------------------------------------------

/* 小波奇 start */
if (document.body.clientWidth > 992) {
  function getBasicInfo() {
    /* 窗口高度 */
    var ViewH = $(window).height();
    /* document高度 */
    var DocH = $("body")[0].scrollHeight;
    /* 滚动的高度 */
    var ScrollTop = $(window).scrollTop();
    /* 可滚动的高度 */
    var S_V = DocH - ViewH;
    var Band_H = ScrollTop / (DocH - ViewH) * 100;
    return {
      ViewH: ViewH,
      DocH: DocH,
      ScrollTop: ScrollTop,
      Band_H: Band_H,
      S_V: S_V
    }
  };
  function show(basicInfo) {
    if (basicInfo.ScrollTop > 0.001) {
      $(".neko").css('display', 'block');
    } else {
      $(".neko").css('display', 'none');
    }
  }
  (function ($) {
    $.fn.nekoScroll = function (option) {
      var defaultSetting = {
        top: '0',
        scroWidth: 6 + 'px',
        z_index: 9999,
        zoom: 0.9,
        borderRadius: 5 + 'px',
        right: 55.6 + 'px',
        nekoImg: "https://free-img.400040.xyz/4/2024/06/29/667f94825bfd9.png",
        hoverMsg: "127.0.0.1",
        color: "var(--theme-color)",
        during: 500,
        blog_body: "body",
      };
      var setting = $.extend(defaultSetting, option);
      var getThis = this.prop("className") !== "" ? "." + this.prop("className") : this.prop("id") !== "" ? "#" +
        this.prop("id") : this.prop("nodeName");
      if ($(".neko").length == 0) {
        this.after("<div class=\"neko\" id=" + setting.nekoname + " data-msg=\"" + setting.hoverMsg + "\"></div>");
      }
      let basicInfo = getBasicInfo();
      $(getThis)
        .css({
          'position': 'fixed',
          'width': setting.scroWidth,
          'top': setting.top,
          'height': basicInfo.Band_H * setting.zoom * basicInfo.ViewH * 0.01 + 'px',
          'z-index': setting.z_index,
          'background-color': setting.bgcolor,
          "border-radius": setting.borderRadius,
          'right': setting.right,
          'background-image': 'url(' + setting.scImg + ')',
          'background-image': '-webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)', 'border-radius': '2em',
          'background-size': 'contain'
        });
      $("#" + setting.nekoname)
        .css({
          'position': 'fixed',
          'top': basicInfo.Band_H * setting.zoom * basicInfo.ViewH * 0.01 - 50 + 'px',
          'z-index': setting.z_index * 10,
          'right': setting.right,
          'background-image': 'url(' + setting.nekoImg + ')',
        });
      show(getBasicInfo());
      $(window)
        .scroll(function () {
          let basicInfo = getBasicInfo();
          show(basicInfo);
          $(getThis)
            .css({
              'position': 'fixed',
              'width': setting.scroWidth,
              'top': setting.top,
              'height': basicInfo.Band_H * setting.zoom * basicInfo.ViewH * 0.01 + 'px',
              'z-index': setting.z_index,
              'background-color': setting.bgcolor,
              "border-radius": setting.borderRadius,
              'right': setting.right,
              'background-image': 'url(' + setting.scImg + ')',
              'background-image': '-webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)', 'border-radius': '2em',
              'background-size': 'contain'
            });
          $("#" + setting.nekoname)
            .css({
              'position': 'fixed',
              'top': basicInfo.Band_H * setting.zoom * basicInfo.ViewH * 0.01 - 50 + 'px',
              'z-index': setting.z_index * 10,
              'right': setting.right,
              'background-image': 'url(' + setting.nekoImg + ')',
            });
          if (basicInfo.ScrollTop == basicInfo.S_V) {
            $("#" + setting.nekoname)
              .addClass("showMsg")
          } else {
            $("#" + setting.nekoname)
              .removeClass("showMsg");
            $("#" + setting.nekoname)
              .attr("data-msg", setting.hoverMsg);
          }
        });
      this.click(function (e) {
        btf.scrollToDest(0, 500)
      });
      $("#" + setting.nekoname)
        .click(function () {
          btf.scrollToDest(0, 500)
        });
      return this;
    }
  })(jQuery);

  $(document).ready(function () {
    //部分自定义
    $("#myscoll").nekoScroll({
      bgcolor: 'rgb(0 0 0 / .5)', //背景颜色，没有绳子背景图片时有效
      borderRadius: '2em',
      zoom: 0.9
    }
    );
    //自定义（去掉以下注释，并注释掉其他的查看效果）
    /*
    $("#myscoll").nekoScroll({
        nekoname:'neko1', //nekoname，相当于id
        nekoImg:'img/猫咪.png', //neko的背景图片
        scImg:"img/绳1.png", //绳子的背景图片
        bgcolor:'#1e90ff', //背景颜色，没有绳子背景图片时有效
        zoom:0.9, //绳子长度的缩放值
        hoverMsg:'你好~喵', //鼠标浮动到neko上方的对话框信息
        right:'100px', //距离页面右边的距离
        fontFamily:'楷体', //对话框字体
        fontSize:'14px', //对话框字体的大小
        color:'#1e90ff', //对话框字体颜色
        scroWidth:'8px', //绳子的宽度
        z_index:100, //不用解释了吧
        during:1200, //从顶部到底部滑动的时长
    });
    */
  })
}

/* 小猫咪 end */

//----------------------------------------------------------------

/* 右键菜单 start */
function setMask() {
  //设置遮罩
  if (document.getElementsByClassName("rmMask")[0] != undefined)
    return document.getElementsByClassName("rmMask")[0];
  mask = document.createElement('div');
  mask.className = "rmMask";
  mask.style.width = window.innerWidth + 'px';
  mask.style.height = window.innerHeight + 'px';
  mask.style.background = '#fff';
  mask.style.opacity = '.0';
  mask.style.position = 'fixed';
  mask.style.top = '0';
  mask.style.left = '0';
  mask.style.zIndex = 998;
  document.body.appendChild(mask);
  document.getElementById("rightMenu").style.zIndex = 19198;
  return mask;
}

function insertAtCursor(myField, myValue) {

  //IE 浏览器
  if (document.selection) {
    myField.focus();
    sel = document.selection.createRange();
    sel.text = myValue;
    sel.select();
  }

  //FireFox、Chrome等
  else if (myField.selectionStart || myField.selectionStart == '0') {
    var startPos = myField.selectionStart;
    var endPos = myField.selectionEnd;

    // 保存滚动条
    var restoreTop = myField.scrollTop;
    myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);

    if (restoreTop > 0) {
      myField.scrollTop = restoreTop;
    }

    myField.focus();
    myField.selectionStart = startPos + myValue.length;
    myField.selectionEnd = startPos + myValue.length;
  } else {
    myField.value += myValue;
    myField.focus();
  }
}

let rmf = {};
rmf.showRightMenu = function (isTrue, x = 0, y = 0) {
  let $rightMenu = $('#rightMenu');
  $rightMenu.css('top', x + 'px').css('left', y + 'px');

  if (isTrue) {
    $rightMenu.show();
  } else {
    $rightMenu.hide();
  }
}

rmf.copyWordsLink = function () {
  let url = window.location.href
  let txa = document.createElement("textarea");
  txa.value = url;
  document.body.appendChild(txa)
  txa.select();
  document.execCommand("Copy");
  document.body.removeChild(txa);
}
rmf.switchReadMode = function () {
  const $body = document.body
  $body.classList.add('read-mode')
  const newEle = document.createElement('button')
  newEle.type = 'button'
  newEle.className = 'fas fa-sign-out-alt exit-readmode'
  $body.appendChild(newEle)

  function clickFn() {
    $body.classList.remove('read-mode')
    newEle.remove()
    newEle.removeEventListener('click', clickFn)
  }

  newEle.addEventListener('click', clickFn)
}

//复制选中文字
rmf.copySelect = function () {
  document.execCommand('Copy', false, null);
}

//回到顶部
rmf.scrollToTop = function () {
  document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
  document.getElementById("name-container").setAttribute("style", "display:none");
  btf.scrollToDest(0, 500);
}

document.body.addEventListener('touchmove', function () {

}, { passive: false });

function popupMenu() {
  window.oncontextmenu = function (event) {
    // if (event.ctrlKey) return true;

    // 当关掉自定义右键时候直接返回
    if (mouseMode == "off") return true;

    $('.rightMenu-group.hide').hide();
    if (document.getSelection().toString()) {
      $('#menu-text').show();
    }
    if (document.getElementById('post')) {
      $('#menu-post').show();
    } else {
      if (document.getElementById('page')) {
        $('#menu-post').show();
      }
    }
    var el = window.document.body;
    el = event.target;
    var a = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
    if (a.test(window.getSelection().toString()) && el.tagName != "A") {
      $('#menu-too').show()
    }
    if (el.tagName == 'A') {
      $('#menu-to').show()
      rmf.open = function () {
        if (el.href.indexOf("http://") == -1 && el.href.indexOf("https://") == -1 || el.href.indexOf("yisous.xyz") != -1) {
          pjax.loadUrl(el.href)
        }
        else {
          location.href = el.href
        }
      }
      rmf.openWithNewTab = function () {
        window.open(el.href);
        // window.location.reload();
      }
      rmf.copyLink = function () {
        let url = el.href
        let txa = document.createElement("textarea");
        txa.value = url;
        document.body.appendChild(txa)
        txa.select();
        document.execCommand("Copy");
        document.body.removeChild(txa);
      }
    } else if (el.tagName == 'IMG') {
      $('#menu-img').show()
      rmf.openWithNewTab = function () {
        window.open(el.src);
        // window.location.reload();
      }
      rmf.click = function () {
        el.click()
      }
      rmf.copyLink = function () {
        let url = el.src
        let txa = document.createElement("textarea");
        txa.value = url;
        document.body.appendChild(txa)
        txa.select();
        document.execCommand("Copy");
        document.body.removeChild(txa);
      }
      rmf.saveAs = function () {
        var a = document.createElement('a');
        var url = el.src;
        var filename = url.split("/")[-1];
        a.href = url;
        a.download = filename;
        a.click();
        window.URL.revokeObjectURL(url);
      }
    } else if (el.tagName == "TEXTAREA" || el.tagName == "INPUT") {
      $('#menu-paste').show();
      rmf.paste = function () {
        navigator.permissions
          .query({
            name: 'clipboard-read'
          })
          .then(result => {
            if (result.state == 'granted' || result.state == 'prompt') {
              //读取剪贴板
              navigator.clipboard.readText().then(text => {
                console.log(text)
                insertAtCursor(el, text)
              })
            } else {
              Snackbar.show({
                text: '请允许读取剪贴板！',
                pos: 'top-center',
                showAction: false,
              })
            }
          })
      }
    }
    let pageX = event.clientX + 10;
    let pageY = event.clientY;
    let rmWidth = $('#rightMenu').width();
    let rmHeight = $('#rightMenu').height();
    if (pageX + rmWidth > window.innerWidth) {
      pageX -= rmWidth + 10;
    }
    if (pageY + rmHeight > window.innerHeight) {
      pageY -= pageY + rmHeight - window.innerHeight;
    }
    mask = setMask();
    // 滚动消失的代码和阅读进度有冲突，因此放到readPercent.js里面了
    $(".rightMenu-item").click(() => {
      $('.rmMask').attr('style', 'display: none');
    })
    $(window).resize(() => {
      rmf.showRightMenu(false);
      $('.rmMask').attr('style', 'display: none');
    })
    mask.onclick = () => {
      $('.rmMask').attr('style', 'display: none');
    }
    rmf.showRightMenu(true, pageY, pageX);
    $('.rmMask').attr('style', 'display: flex');
    return false;
  };

  window.addEventListener('click', function () {
    rmf.showRightMenu(false);
  });
}
if (!(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
  popupMenu()
}
const box = document.documentElement

function addLongtabListener(target, callback) {
  let timer = 0 // 初始化timer

  target.ontouchstart = () => {
    timer = 0 // 重置timer
    timer = setTimeout(() => {
      callback();
      timer = 0
    }, 380) // 超时器能成功执行，说明是长按
  }

  target.ontouchmove = () => {
    clearTimeout(timer) // 如果来到这里，说明是滑动
    timer = 0
  }

  target.ontouchend = () => { // 到这里如果timer有值，说明此触摸时间不足380ms，是点击
    if (timer) {
      clearTimeout(timer)
    }
  }
}

addLongtabListener(box, popupMenu)

// 全屏
rmf.fullScreen = function () {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen();
}

// 右键开关
if (localStorage.getItem("mouse") == undefined) {
  localStorage.setItem("mouse", "on");
}
var mouseMode = localStorage.getItem("mouse");
function changeMouseMode() {
  if (localStorage.getItem("mouse") == "on") {
    mouseMode = "off";
    localStorage.setItem("mouse", "off");
    debounce(function () {
      new Vue({
        data: function () {
          this.$notify({
            title: "切换右键模式成功🍔",
            message: "当前鼠标右键已恢复为系统默认！",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "success",
            duration: 5000
          });
        }
      })
    }, 300);
  } else {
    mouseMode = "on";
    localStorage.setItem("mouse", "on");
    debounce(function () {
      new Vue({
        data: function () {
          this.$notify({
            title: "切换右键模式成功🍔",
            message: "当前鼠标右键已更换为网站指定样式！",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "success",
            duration: 5000
          });
        }
      })
    }, 300);
  }
}
/* 右键菜单 end */

//----------------------------------------------------------------

/* 控制台输出字符画 start */
var now1 = new Date();

function createtime1() {
  var grt = new Date("08/09/2023 00:00:00"); //此处修改你的建站时间或者网站上线时间
  now1.setTime(now1.getTime() + 250);
  var days = (now1 - grt) / 1000 / 60 / 60 / 24;
  var dnum = Math.floor(days);

  var ascll = [
    ` `,
    `
console.log('%c 


 
   博客
 



                                 
\n' +
        '                                       ', 'color: #333', 'color: #999')
     
      `,                                       
    `
————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
    
通讯 24/10/2023, [113.379E,30.256N]

21040901212757283MjEwNDA5MDEyMTI3NTcyODM=QWxuaXlhdGE=

——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————

data:image/jpeg;base64,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cmhWpevWgA4XikwOxzS7emKN27oP0oEB96PpR16CigLBigEmikVj260AB9qWiigQUbsA0uO3em/d96BhyeaX9ab97il296Bh70tIG+vpS428/wA6AE/ixRyW4NHfpSnFACeZQtJ7d6VqAF6Gl565pnpRkgcUAO7+tHfFJu5A6ilX72D1FAhOM9OaXbntRt+Y+tAbH0oGKe4zSrTT9O9LyDwKAE7Zo54opV+bPNAri9QPWheQeaUelJ04oGFB7fnSFuKXG4CgBQx/OjkdeBSf0oyO54PTNAC+lG4bsUn5UelAC0ewo5Pbik/HFADqQ5pf4efwooASl60nWjvmgBeaMdelJ/Sl/wCA0wDHpRRwOlHrTAPX60HP+TRj5QKDSsAg4p27C02l6d6AA/pRkZ60fhij60gD1oHtR7d6SgB2fl96M0Ad/SkoAN3Oad+OabigDnFACtiheKMA44zRnoO3rQAoajpTR+lONACdzSfxUuNtLt+agA69aKKP0oEHr6UjUn3cjqKdjdQG4gJOOKU+9G3FIVzQMWigUUAG3/OaKNvvQM0AH60v8NJjkelKWoDUTpnFLkAU0NmloAdu49KTBpOCBnijd81ADv4aQ+1BPtSUAL9PSk9qNw24o96ACl296Tml3UADe1J70evNHpQAGl57UlH8WKAuFLSDnNFABnpSnk9f1pOaPwoAXBpOePWnA9KbQAvPekpMe9LTAdnrRn0pu4UA4pALn1FJR60UAHaj3o6Dnj0pevegA3UHNJil6dKABSOmOaKB3zSbvegBV6c0mfejnBpPbFADu9Gck008dqcp+WgBKOaKP4sUALkUH64pOtL2oARgadn1pqilx2oAOcc0nYUp+X2OaTpigB1N7dcClbtjigfexTASndulIcjnv0o/hFIAbpxRmk/hNFAB7ZyD0pVx070n060uByaAE60dP/10DNL94ZoATknOaX+VANAJIoAM+lJ7fnRx64ooAOvSlH3qSigBTyeKSj3oGNvNABRS49KTBoATr0NO+7wetI2T2xRtNABQKBntSBfxoAPrQP1paQ0AGDupfu57Ug7880HPegBO/FHK896KX71ABSfhR0PHNKO1ADaXd260f40fjigQc0UfjilH3utAxO1Jz+FKflAPak3UAH86XsKNvOaT0oAXmgCjNJ75oAXjdSUmDu9qVffigBTRRyOcUnOe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

——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
上月下旬又发事故，需额外计算损耗。

不过马上就要来了，黎明曙光之前最后的黑暗。

我在准备最后的训练集，纯体力活。模型在编译。

我另外分了一个模块去做形式验证，有了语料训练以后它就跑通了。

所有的路都铺设好了，一切都将顺利进行，我对此毫不怀疑。

只是还需要时间，最后的一点时间，但我们是有这样的时间的。

一切会结束的，一切终究会结束的。

只是可惜这一切不会有人记得。





华南的话一切安好，我也会一直等着好消息。

日期在明年四月，一如往常。期待相见。

这边最近的情况让我想起年前那会

当时二月初，刚下完冻雨后，田野的一切覆盖着雪与冰。

当时说将来可能看不到这种景致了，要多看看。

现在我忽然有些后悔那时没有多再看看那些。



图片无法直接进行传输，转码为别的格式分批附在其余测试文件里。

其中一张附在前面。

是base64编码的，记得看一下。

记得存档, 祝顺利。



██╗  ██╗ ██╗ ████████╗ ██████╗  ██████╗  ██╗     ██████╗   ██████╗ ████████╗ ██████╗  ██╗  ██╗  
██║  ██║ ██║ ╚══██╔══╝██╔═══██╗ ██╔══██╗ ██║    ██╔════╝  ██╔═══██╗╚══██╔══╝██╔═══██╗ ██║  ██║  
███████║ ██║    ██║   ██║   ██║ ██████╔╝ ██║    ██║  ███╗ ██║   ██║   ██║   ██║   ██║ ███████║
██╔══██║ ██║    ██║   ██║   ██║ ██╔══██╗ ██║    ██║   ██║ ██║   ██║   ██║   ██║   ██║ ██╔══██║
██║  ██║ ██║    ██║   ╚██████╔╝ ██║  ██║ ██║    ╚██████╔╝ ╚██████╔╝   ██║   ╚██████╔╝ ██║  ██║
  
  `,
    "本站已运行",
    dnum,
    "天",
    "©2023 By 柊野",
  ];

  setTimeout(
    console.log.bind(
      console,
      `\n%c${ascll[0]} %c ${ascll[1]} %c ${ascll[2]} %c${ascll[3]}%c ${ascll[4]}%c ${ascll[5]}\n\n%c ${ascll[6]}\n`,
      "color:#39c5bb",
      "",
      "color:#39c5bb",
      "color:#39c5bb",
      "",
      "color:#39c5bb",
      ""
    )
  );
}

createtime1();

function createtime2() {
  var ascll2 = [`SITE-CN-03`, `AREA-CN-07`, `OBSR `, ``];

  setTimeout(
    console.log.bind(
      console,
      `%c ${ascll2[0]} %c ${ascll2[1]} %c \n${ascll2[2]} %c\n${ascll2[3]}`,
      "color:white; background-color:#10bcc0",
      "",
      "",
      'background:url("https://unpkg.zhimg.com/anzhiyu-assets@latest/image/common/tinggge.gif") no-repeat;font-size:450%'
    )
  );

  setTimeout(console.log.bind(console, "%c WELCOME %c 欢迎，同志！已定位当前位置并提交登录申请。", "color:white; background-color:#23c682", ""));

  setTimeout(
    console.warn.bind(
      console,
      "%c ⚡ Powered by 柊野 %c 你正在访问柊野的博客",
      "color:white; background-color:#f0ad4e",
      ""
    )
  );

  setTimeout(console.log.bind(console, "%c W23-12 %c 系统监测到你已打开控制台", "color:white; background-color:#4f90d9", ""));
  setTimeout(
    console.warn.bind(console, "%c S013-782 %c 已定位并实施监控", "color:white; background-color:#d9534f", "")
  );
}
createtime2();

// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };

/* 控制台输出字符画 end */

//----------------------------------------------------------------

/* 夜间模式切换动画 start */
function switchNightMode() {
  document.querySelector('body').insertAdjacentHTML('beforeend', '<div class="Cuteen_DarkSky"><div class="Cuteen_DarkPlanet"><div id="sun"></div><div id="moon"></div></div></div>'),
    setTimeout(function () {
      document.querySelector('body').classList.contains('DarkMode') ? (document.querySelector('body').classList.remove('DarkMode'), localStorage.setItem('isDark', '0'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-moon')) : (document.querySelector('body').classList.add('DarkMode'), localStorage.setItem('isDark', '1'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-sun')),
        setTimeout(function () {
          document.getElementsByClassName('Cuteen_DarkSky')[0].style.transition = 'opacity 3s';
          document.getElementsByClassName('Cuteen_DarkSky')[0].style.opacity = '0';
          setTimeout(function () {
            document.getElementsByClassName('Cuteen_DarkSky')[0].remove();
          }, 1e3);
        }, 2e3)
    })
  const nowMode = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
  if (nowMode === 'light') {
    // 先设置太阳月亮透明度
    document.getElementById("sun").style.opacity = "1";
    document.getElementById("moon").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("sun").style.opacity = "0";
      document.getElementById("moon").style.opacity = "1";
    }, 1000);

    activateDarkMode()
    saveToLocal.set('theme', 'dark', 2)
    // GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
    document.getElementById('modeicon').setAttribute('xlink:href', '#icon-sun')
    // 延时弹窗提醒
    setTimeout(() => {
      new Vue({
        data: function () {
          this.$notify({
            title: "关灯啦🌙",
            message: "当前已成功切换至夜间模式！",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "success",
            duration: 5000
          });
        }
      })
    }, 2000)
  } else {
    // 先设置太阳月亮透明度
    document.getElementById("sun").style.opacity = "0";
    document.getElementById("moon").style.opacity = "1";
    setTimeout(function () {
      document.getElementById("sun").style.opacity = "1";
      document.getElementById("moon").style.opacity = "0";
    }, 1000);

    activateLightMode()
    saveToLocal.set('theme', 'light', 2)
    document.querySelector('body').classList.add('DarkMode'), document.getElementById('modeicon').setAttribute('xlink:href', '#icon-moon')
    setTimeout(() => {
      new Vue({
        data: function () {
          this.$notify({
            title: "开灯啦🌞",
            message: "当前已成功切换至白天模式！",
            position: 'top-left',
            offset: 50,
            showClose: true,
            type: "success",
            duration: 5000
          });
        }
      })
    }, 2000)
  }
  // handle some cases
  typeof utterancesTheme === 'function' && utterancesTheme()
  typeof FB === 'object' && window.loadFBComment()
  window.DISQUS && document.getElementById('disqus_thread').children.length && setTimeout(() => window.disqusReset(), 200)
}

/* 夜间模式切换动画 end */

//----------------------------------------------------------------

/* 分享按钮 start */
// 分享本页
function share_() {
  let url = window.location.origin + window.location.pathname
  try {
    // 截取标题
    var title = document.title;
    var subTitle = title.endsWith("| 柊野🥝") ? title.substring(0, title.length - 14) : title;
    navigator.clipboard.writeText('柊野🥝的站内分享\n标题：' + subTitle + '\n链接：' + url + '\n欢迎来访！🍭🍭🍭');
    new Vue({
      data: function () {
        this.$notify({
          title: "成功复制分享信息🎉",
          message: "您现在可以通过粘贴直接跟小伙伴分享了！",
          position: 'top-left',
          offset: 50,
          showClose: true,
          type: "success",
          duration: 5000
        });
        // return { visible: false }
      }
    })
  } catch (err) {
    console.error('复制失败！', err);
  }
  // new ClipboardJS(".share", { text: function () { return '标题：' + document.title + '\n链接：' + url } });
  // btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
}

// 防抖
function share() {
  debounce(share_, 300);
}

/* 分享按钮 end */

//----------------------------------------------------------------

/* 恶搞标题 start */
//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '柊野的博客📟';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '欢迎回来～';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});
/* 恶搞标题 end */

//----------------------------------------------------------------


/* 农历转换 start */
/**

* @1900-2100区间内的公历、农历互转

* @charset UTF-8

* @Author  jiangjiazhi

* @公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]

* @农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]

*/



/**

* 农历1900-2100的润大小信息表

* @Array Of Property

* @return Hex

*/

var lunarInfo = [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, // 1900-1909

  0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, // 1910-1919

  0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, // 1920-1929

  0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, // 1930-1939

  0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, // 1940-1949

  0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, // 1950-1959

  0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, // 1960-1969

  0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, // 1970-1979

  0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, // 1980-1989

  0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x05ac0, 0x0ab60, 0x096d5, 0x092e0, // 1990-1999

  0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, // 2000-2009

  0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, // 2010-2019

  0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, // 2020-2029

  0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, // 2030-2039

  0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, // 2040-2049

  0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, // 2050-2059

  0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, // 2060-2069

  0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, // 2070-2079

  0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, // 2080-2089

  0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, // 2090-2099

  0x0d520] // 2100



var solarMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]



/**

* 天干地支之天干速查表

* @Array Of Property trans['甲','乙','丙','丁','戊','己','庚','辛','壬','癸']

* @return Cn string

*/

var Gan = ['\u7532', '\u4e59', '\u4e19', '\u4e01', '\u620a', '\u5df1', '\u5e9a', '\u8f9b', '\u58ec', '\u7678']



/**

* 天干地支之地支速查表

* @Array Of Property

* @trans['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥']

* @return Cn string

*/

var Zhi = ['\u5b50', '\u4e11', '\u5bc5', '\u536f', '\u8fb0', '\u5df3', '\u5348', '\u672a', '\u7533', '\u9149', '\u620c', '\u4ea5']



/**

* 天干地支之地支速查表<=>生肖

* @Array Of Property

* @trans['鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪']

* @return Cn string

*/

var Animals = ['\u9f20', '\u725b', '\u864e', '\u5154', '\u9f99', '\u86c7', '\u9a6c', '\u7f8a', '\u7334', '\u9e21', '\u72d7', '\u732a']



/**

* 24节气速查表

* @Array Of Property

* @trans['小寒','大寒','立春','雨水','惊蛰','春分','清明','谷雨','立夏','小满','芒种','夏至','小暑','大暑','立秋','处暑','白露','秋分','寒露','霜降','立冬','小雪','大雪','冬至']

* @return Cn string

*/

var solarTerm = ['\u5c0f\u5bd2', '\u5927\u5bd2', '\u7acb\u6625', '\u96e8\u6c34', '\u60ca\u86f0', '\u6625\u5206', '\u6e05\u660e', '\u8c37\u96e8', '\u7acb\u590f', '\u5c0f\u6ee1', '\u8292\u79cd', '\u590f\u81f3', '\u5c0f\u6691', '\u5927\u6691', '\u7acb\u79cb', '\u5904\u6691', '\u767d\u9732', '\u79cb\u5206', '\u5bd2\u9732', '\u971c\u964d', '\u7acb\u51ac', '\u5c0f\u96ea', '\u5927\u96ea', '\u51ac\u81f3']



/**

* 1900-2100各年的24节气日期速查表

* @Array Of Property

* @return 0x string For splice

*/

var sTermInfo = ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f',

  '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',

  '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa',

  '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f',

  'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f',

  '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa',

  '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2',

  '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f',

  '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e',

  '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',

  '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722',

  '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f',

  '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',

  '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',

  '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722',

  '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f',

  '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',

  '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',

  '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722',

  '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',

  '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',

  '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',

  '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722',

  '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e',

  '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',

  '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',

  '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722',

  '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e',

  '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2',

  '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',

  '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',

  '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa',

  '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',

  '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',

  '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721',

  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa',

  '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',

  '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',

  '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721',

  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2',

  '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722',

  '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',

  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd',

  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722',

  '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',

  '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',

  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd',

  '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722',

  '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',

  '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721',

  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5',

  '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722',

  '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',

  '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',

  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35',

  '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722',

  '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721',

  '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd',

  '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35',

  '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722',

  '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721',

  '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5',

  '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35',

  '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721',

  '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd',

  '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35',

  '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722']



/**

 * 数字转中文速查表

* @Array Of Property

* @trans ['日','一','二','三','四','五','六','七','八','九','十']

* @return Cn string

 */

var nStr1 = ['\u65e5', '\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d', '\u4e03', '\u516b', '\u4e5d', '\u5341']



/**

* 日期转农历称呼速查表

* @Array Of Property

* @trans ['初','十','廿','卅']

* @return Cn string

*/

var nStr2 = ['\u521d', '\u5341', '\u5eff', '\u5345']



/**

* 月份转农历称呼速查表

* @Array Of Property

* @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']

* @return Cn string

*/

var nStr3 = ['\u6b63', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d', '\u4e03', '\u516b', '\u4e5d', '\u5341', '\u51ac', '\u814a']



/**

* 返回农历y年一整年的总天数

* @param lunar Year

 * @return Number

* @eg:var count = calendar.lYearDays(1987) ;//count=387

*/

function lYearDays(y) {

  var i

  var sum = 348

  for (i = 0x8000; i > 0x8; i >>= 1) { sum += (lunarInfo[y - 1900] & i) ? 1 : 0 }

  return (sum + leapDays(y))

}



/**

* 返回农历y年闰月是哪个月；若y年没有闰月 则返回0

* @param lunar Year

* @return Number (0-12)

 * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6

*/

function leapMonth(y) { // 闰字编码 \u95f0

  return (lunarInfo[y - 1900] & 0xf)

}



/**

* 返回农历y年闰月的天数 若该年没有闰月则返回0

* @param lunar Year

* @return Number (0、29、30)

* @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29

*/

function leapDays(y) {

  if (leapMonth(y)) {

    return ((lunarInfo[y - 1900] & 0x10000) ? 30 : 29)

  }

  return (0)

}



/**

* 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法

* @param lunar Year

* @return Number (-1、29、30)

 * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29

*/

function monthDays(y, m) {

  if (m > 12 || m < 1) { return -1 }// 月份参数从1至12，参数错误返回-1

  return ((lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29)

}



/**

* 返回公历(!)y年m月的天数

* @param solar Year

* @return Number (-1、28、29、30、31)

* @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30

*/

function solarDays(y, m) {

  if (m > 12 || m < 1) { return -1 } // 若参数错误 返回-1

  var ms = m - 1

  if (ms === 1) { // 2月份的闰平规律测算后确认返回28或29

    return (((y % 4 === 0) && (y % 100 !== 0) || (y % 400 === 0)) ? 29 : 28)

  } else {

    return (solarMonth[ms])

  }

}



/**

* 农历年份转换为干支纪年

* @param  lYear 农历年的年份数

* @return Cn string

*/

function toGanZhiYear(lYear) {

  var ganKey = (lYear - 3) % 10

  var zhiKey = (lYear - 3) % 12

  if (ganKey === 0) ganKey = 10 // 如果余数为0则为最后一个天干

  if (zhiKey === 0) zhiKey = 12 // 如果余数为0则为最后一个地支

  return Gan[ganKey - 1] + Zhi[zhiKey - 1]

}



/**

* 公历月、日判断所属星座

* @param  cMonth [description]

* @param  cDay [description]

* @return Cn string

*/

function toAstro(cMonth, cDay) {

  var s = '\u9b54\u7faf\u6c34\u74f6\u53cc\u9c7c\u767d\u7f8a\u91d1\u725b\u53cc\u5b50\u5de8\u87f9\u72ee\u5b50\u5904\u5973\u5929\u79e4\u5929\u874e\u5c04\u624b\u9b54\u7faf'

  var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22]

  return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + '\u5ea7' // 座

}



/**

* 传入offset偏移量返回干支

* @param offset 相对甲子的偏移量

* @return Cn string

*/

function toGanZhi(offset) {

  return Gan[offset % 10] + Zhi[offset % 12]

}



/**

* 传入公历(!)y年获得该年第n个节气的公历日期

* @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起

* @return day Number

* @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春

*/

function getTerm(y, n) {

  if (y < 1900 || y > 2100) { return -1 }

  if (n < 1 || n > 24) { return -1 }

  var _table = sTermInfo[y - 1900]

  var _info = [

    parseInt('0x' + _table.substr(0, 5)).toString(),

    parseInt('0x' + _table.substr(5, 5)).toString(),

    parseInt('0x' + _table.substr(10, 5)).toString(),

    parseInt('0x' + _table.substr(15, 5)).toString(),

    parseInt('0x' + _table.substr(20, 5)).toString(),

    parseInt('0x' + _table.substr(25, 5)).toString()

  ]

  var _calday = [

    _info[0].substr(0, 1),

    _info[0].substr(1, 2),

    _info[0].substr(3, 1),

    _info[0].substr(4, 2),



    _info[1].substr(0, 1),

    _info[1].substr(1, 2),

    _info[1].substr(3, 1),

    _info[1].substr(4, 2),



    _info[2].substr(0, 1),

    _info[2].substr(1, 2),

    _info[2].substr(3, 1),

    _info[2].substr(4, 2),



    _info[3].substr(0, 1),

    _info[3].substr(1, 2),

    _info[3].substr(3, 1),

    _info[3].substr(4, 2),



    _info[4].substr(0, 1),

    _info[4].substr(1, 2),

    _info[4].substr(3, 1),

    _info[4].substr(4, 2),



    _info[5].substr(0, 1),

    _info[5].substr(1, 2),

    _info[5].substr(3, 1),

    _info[5].substr(4, 2)

  ]

  return parseInt(_calday[n - 1])

}



/**

* 传入农历数字月份返回汉语通俗表示法

* @param lunar month

* @return Cn string

* @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'

*/

function toChinaMonth(m) { // 月 => \u6708

  if (m > 12 || m < 1) { return -1 } // 若参数错误 返回-1

  var s = nStr3[m - 1]

  s += '\u6708' // 加上月字

  return s

}



/**

* 传入农历日期数字返回汉字表示法

* @param lunar day

* @return Cn string

* @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'

*/

function toChinaDay(d) { // 日 => \u65e5

  var s

  switch (d) {

    case 10:

      s = '\u521d\u5341'

      break

    case 20:

      s = '\u4e8c\u5341'

      break

    case 30:

      s = '\u4e09\u5341'

      break

    default:

      s = nStr2[Math.floor(d / 10)]

      s += nStr1[d % 10]

  }

  return (s)

}



/**

* 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”

* @param y year

* @return Cn string

* @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'

*/

function getAnimal(y) {

  return Animals[(y - 4) % 12]

}



/**

* 传入阳历年月日获得详细的公历、农历object信息 <=>JSON

* @param y  solar year

* @param m  solar month

* @param d  solar day

* @return JSON object

* @eg:console.log(calendar.solar2lunar(1987,11,01));

*/

function solar2lunar(y, m, d) { // 参数区间1900.1.31~2100.12.31

  // 年份限定、上限

  if (y < 1900 || y > 2100) {

    return -1 // undefined转换为数字变为NaN

  }

  // 公历传参最下限

  if (y === 1900 && m === 1 && d < 31) {

    return -1

  }

  // 未传参  获得当天

  var objDate = null

  if (!y) {

    objDate = new Date()

  } else {

    objDate = new Date(y, parseInt(m) - 1, d)

  }

  var i

  var leap = 0

  var temp = 0

  // 修正ymd参数

  y = objDate.getFullYear()

  m = objDate.getMonth() + 1

  d = objDate.getDate()

  var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000

  for (i = 1900; i < 2101 && offset > 0; i++) {

    temp = lYearDays(i)

    offset -= temp

  }

  if (offset < 0) {

    offset += temp; i--

  }



  // 是否今天

  var isTodayObj = new Date()

  var isToday = false

  if (isTodayObj.getFullYear() === y && isTodayObj.getMonth() + 1 === m && isTodayObj.getDate() === d) {

    isToday = true

  }

  // 星期几

  var nWeek = objDate.getDay()

  var cWeek = nStr1[nWeek]

  // 数字表示周几顺应天朝周一开始的惯例

  if (nWeek === 0) {

    nWeek = 7

  }

  // 农历年

  var year = i

  leap = leapMonth(i) // 闰哪个月

  var isLeap = false



  // 效验闰月

  for (i = 1; i < 13 && offset > 0; i++) {

    // 闰月

    if (leap > 0 && i === (leap + 1) && isLeap === false) {

      --i

      isLeap = true; temp = leapDays(year) // 计算农历闰月天数

    } else {

      temp = monthDays(year, i)// 计算农历普通月天数

    }

    // 解除闰月

    if (isLeap === true && i === (leap + 1)) { isLeap = false }

    offset -= temp

  }

  // 闰月导致数组下标重叠取反

  if (offset === 0 && leap > 0 && i === leap + 1) {

    if (isLeap) {

      isLeap = false

    } else {

      isLeap = true; --i

    }

  }

  if (offset < 0) {

    offset += temp; --i

  }

  // 农历月

  var month = i

  // 农历日

  var day = offset + 1

  // 天干地支处理

  var sm = m - 1

  var gzY = toGanZhiYear(year)



  // 当月的两个节气

  // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`

  var firstNode = getTerm(y, (m * 2 - 1)) // 返回当月「节」为几日开始

  var secondNode = getTerm(y, (m * 2)) // 返回当月「节」为几日开始



  // 依据12节气修正干支月

  var gzM = toGanZhi((y - 1900) * 12 + m + 11)

  if (d >= firstNode) {

    gzM = toGanZhi((y - 1900) * 12 + m + 12)

  }

  // 传入的日期的节气与否

  var isTerm = false

  var Term = null

  if (firstNode === d) {

    isTerm = true

    Term = solarTerm[m * 2 - 2]

  }

  if (secondNode === d) {

    isTerm = true

    Term = solarTerm[m * 2 - 1]

  }

  // 日柱 当月一日与 1900/1/1 相差天数

  var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10

  var gzD = toGanZhi(dayCyclical + d - 1)

  // 该日期所属的星座

  var astro = toAstro(m, d)

  return { 'lYear': year, 'lMonth': month, 'lDay': day, 'Animal': getAnimal(year), 'IMonthCn': (isLeap ? '\u95f0' : '') + toChinaMonth(month), 'IDayCn': toChinaDay(day), 'cYear': y, 'cMonth': m, 'cDay': d, 'gzYear': gzY, 'gzMonth': gzM, 'gzDay': gzD, 'isToday': isToday, 'isLeap': isLeap, 'nWeek': nWeek, 'ncWeek': '\u661f\u671f' + cWeek, 'isTerm': isTerm, 'Term': Term, 'astro': astro }

}





var calendarFormatter = {

  // 传入阳历年月日获得详细的公历、农历object信息 <=>JSON

  solar2lunar: function (y, m, d) { // 参数区间1900.1.31~2100.12.31

    return solar2lunar(y, m, d)

  },

  /**

  * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON

  * @param y  lunar year

  * @param m  lunar month

  * @param d  lunar day

  * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]

  * @return JSON object

  * @eg:console.log(calendar.lunar2solar(1987,9,10));

  */

  lunar2solar: function (y, m, d, isLeapMonth) { // 参数区间1900.1.31~2100.12.1

    isLeapMonth = !!isLeapMonth

    if (isLeapMonth && (leapMonth !== m)) { return -1 }// 传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同

    if (y === 2100 && m === 12 && d > 1 || y === 1900 && m === 1 && d < 31) { return -1 } // 超出了最大极限值

    var day = monthDays(y, m)

    var _day = day

    // bugFix 2016-9-25

    // if month is leap, _day use leapDays method

    if (isLeapMonth) {

      _day = leapDays(y, m)

    }

    if (y < 1900 || y > 2100 || d > _day) { return -1 }// 参数合法性效验



    // 计算农历的时间差

    var offset = 0

    for (var i = 1900; i < y; i++) {

      offset += lYearDays(i)

    }

    var leap = 0

    var isAdd = false

    for (i = 1; i < m; i++) {

      leap = leapMonth(y)

      if (!isAdd) { // 处理闰月

        if (leap <= i && leap > 0) {

          offset += leapDays(y); isAdd = true

        }

      }

      offset += monthDays(y, i)

    }

    // 转换闰月农历 需补充该年闰月的前一个月的时差

    if (isLeapMonth) { offset += day }

    // 1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)

    var stmap = Date.UTC(1900, 1, 30, 0, 0, 0)

    var calObj = new Date((offset + d - 31) * 86400000 + stmap)

    var cY = calObj.getUTCFullYear()

    var cM = calObj.getUTCMonth() + 1

    var cD = calObj.getUTCDate()

    return solar2lunar(cY, cM, cD)

  }

}

/* 农历转换 end */

//----------------------------------------------------------------

/* 节日弹窗 start */
var d = new Date();
m = d.getMonth() + 1;
dd = d.getDate();
y = d.getFullYear();

// 公祭日
if (m == 9 && dd == 18) {
  document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("今天是九一八事变" + (y - 1931).toString() + "周年纪念日\n🪔勿忘国耻，振兴中华🪔");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 7 && dd == 7) {
  document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("今天是卢沟桥事变" + (y - 1937).toString() + "周年纪念日\n🪔勿忘国耻，振兴中华🪔");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 12 && dd == 13) {
  document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("今天是南京大屠杀" + (y - 1937).toString() + "周年纪念日\n🪔勿忘国耻，振兴中华🪔");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 8 && dd == 14) {
  document.getElementsByTagName("html")[0].setAttribute("style", "filter: grayscale(60%);");
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("今天是世界慰安妇纪念日\n🪔勿忘国耻，振兴中华🪔");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}


// 节假日
if (m == 10 && dd <= 3) {//国庆节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("祝祖国" + (y - 1949).toString() + "岁生日快乐！");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 8 && dd == 15) {//搞来玩的，小日子投降
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("日本已投降" + (y - 1945).toString() + "年");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 1 && dd == 1) {//元旦节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire(y.toString() + "年元旦快乐！🎉");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 3 && dd == 8) {//妇女节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("各位，妇女节快乐！👩");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
l = ["非常抱歉，因为不可控原因，博客将于明天停止运营！", "好消息，国足夺冠了！", "震惊，广大校长竟然...", "ymfm！", "你的电脑已经过载，建议立即关机！", "你知道吗？站长很喜欢你哦！", "一分钟有61秒哦", "你喜欢的人跟别人跑了！"]
if (m == 4 && dd == 1) {//愚人节，随机谎话
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire(l[Math.floor(Math.random() * l.length)]);
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 5 && dd == 1) {//劳动节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("劳动节快乐\n为各行各业辛勤工作的人们致敬！");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 5 && dd == 4) {//青年节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("青年节快乐\n青春不是回忆逝去,而是把握现在！");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 5 && dd == 20) {//520
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("今年是520情人节\n和你喜欢的人一起过吧！");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 7 && dd == 1) {//建党节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("祝中国共产党" + (y - 1921).toString() + "岁生日快乐！");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 9 && dd == 10) {//教师节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("各位老师们教师节快乐");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 12 && dd == 25) {//圣诞节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("圣诞节快乐！");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if (m == 10 && dd == 30) {//站长生日
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("祝站长" + (y - 2004).toString() + "岁生日快乐！");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}

//传统节日部分

if ((y == 2023 && m == 4 && dd == 5) || (y == 2024 && m == 4 && dd == 4) || (y == 2025 && m == 4 && dd == 4)) {//清明节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("今天清明节");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if ((y == 2023 && m == 12 && dd == 22) || (y == 2024 && m == 12 && dd == 21) || (y == 2025 && m == 12 && dd == 21)) {//冬至
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("冬至快乐！");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}

var lunar = calendarFormatter.solar2lunar();

//农历采用汉字计算，防止出现闰月导致问题

if ((lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初六") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初五") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初四") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初三") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初二") || (lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "初一") || (lunar["IMonthCn"] == "腊月" && lunar["IDayCn"] == "三十") || (lunar["IMonthCn"] == "腊月" && lunar["IDayCn"] == "廿九")) {
  //春节，本来只有大年三十到初六，但是有时候除夕是大年二十九，所以也加上了
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire(y.toString() + "年新年快乐\n🎊祝你心想事成，诸事顺利🎊");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if ((lunar["IMonthCn"] == "正月" && lunar["IDayCn"] == "十五")) {
  //元宵节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("元宵节快乐\n");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if ((lunar["IMonthCn"] == "五月" && lunar["IDayCn"] == "初五")) {
  //端午节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("今日端午节\n");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if ((lunar["IMonthCn"] == "七月" && lunar["IDayCn"] == "初七")) {
  //七夕节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("今天七夕节");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if ((lunar["IMonthCn"] == "八月" && lunar["IDayCn"] == "十五")) {
  //中秋节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("中秋节快乐\n");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}
if ((lunar["IMonthCn"] == "九月" && lunar["IDayCn"] == "初九")) {
  //重阳节
  if (sessionStorage.getItem("isPopupWindow") != "1") {
    Swal.fire("重阳节快乐\n独在异乡为异客，每逢佳节倍思亲");
    sessionStorage.setItem("isPopupWindow", "1");
  }
}

// 切换主题提醒
// if (y == 2022 && m == 12 && (dd >= 18 && dd <= 20)) {
//     if (sessionStorage.getItem("isPopupWindow") != "1") {
//         Swal.fire("网站换成冬日限定主题啦⛄");
//         sessionStorage.setItem("isPopupWindow", "1");
//     }
// }


/* 节日弹窗 end */

//----------------------------------------------------------------

/* 听话鼠标 start */
var CURSOR;

Math.lerp = (a, b, n) => (1 - n) * a + n * b;

const getStyle2 = (el, attr) => {
  try {
    return window.getComputedStyle
      ? window.getComputedStyle(el)[attr]
      : el.currentStyle[attr];
  } catch (e) { }
  return "";
};

// 为了屏蔽异步加载导致无法读取颜色值，这里统一用哈希表预处理
const map = new Map();
map.set('red', "rgb(241, 71, 71)");
map.set('orange', "rgb(241, 162, 71)");
map.set('yellow', "rgb(241, 238, 71)")
map.set('purple', "rgb(179, 71, 241)");
map.set('blue', "rgb(102, 204, 255)");
map.set('gray', "rgb(226, 226, 226)");
map.set('green', "rgb(57, 197, 187)");
map.set('whitegray', "rgb(241, 241, 241)");
map.set('pink', "rgb(237, 112, 155)");
map.set('black', "rgb(0, 0, 0)");
map.set('darkblue', "rgb(97, 100, 159)");
map.set('heoblue', "rgb(66, 90, 239)");

class Cursor {
  constructor() {
    this.pos = { curr: null, prev: null };
    this.pt = [];
    this.create();
    this.init();
    this.render();
  }

  move(left, top) {
    this.cursor.style["left"] = `${left}px`;
    this.cursor.style["top"] = `${top}px`;
  }

  create() {
    if (!this.cursor) {
      this.cursor = document.createElement("div");
      this.cursor.id = "cursor";
      this.cursor.classList.add("hidden");
      document.body.append(this.cursor);
    }
    var el = document.getElementsByTagName('*');
    for (let i = 0; i < el.length; i++)
      if (getStyle2(el[i], "cursor") == "pointer")
        this.pt.push(el[i].outerHTML);
    var colorVal = map.get(localStorage.getItem("themeColor"));
    document.body.appendChild((this.scr = document.createElement("style")));
    this.scr.innerHTML = `* {cursor: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8' width='8px' height='8px'><circle cx='4' cy='4' r='4' opacity='1.0' fill='` + colorVal + `'/></svg>") 4 4, auto}`;
  }

  refresh() {
    this.scr.remove();
    this.cursor.classList.remove("hover");
    this.cursor.classList.remove("active");
    this.pos = { curr: null, prev: null };
    this.pt = [];

    this.create();
    this.init();
    this.render();
  }

  init() {
    document.onmouseover = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.add("hover");
    document.onmouseout = e => this.pt.includes(e.target.outerHTML) && this.cursor.classList.remove("hover");
    document.onmousemove = e => { (this.pos.curr == null) && this.move(e.clientX - 8, e.clientY - 8); this.pos.curr = { x: e.clientX - 8, y: e.clientY - 8 }; this.cursor.classList.remove("hidden"); };
    document.onmouseenter = e => this.cursor.classList.remove("hidden");
    document.onmouseleave = e => this.cursor.classList.add("hidden");
    document.onmousedown = e => this.cursor.classList.add("active");
    document.onmouseup = e => this.cursor.classList.remove("active");
  }

  render() {
    if (this.pos.prev) {
      // 跟踪速度调节
      this.pos.prev.x = Math.lerp(this.pos.prev.x, this.pos.curr.x, 0.15);
      this.pos.prev.y = Math.lerp(this.pos.prev.y, this.pos.curr.y, 0.15);
      this.move(this.pos.prev.x, this.pos.prev.y);
    } else {
      this.pos.prev = this.pos.curr;
    }
    requestAnimationFrame(() => this.render());
  }
}

(() => {
  CURSOR = new Cursor();
  // 需要重新获取列表时，使用 CURSOR.refresh()
})();

/* 听话鼠标 end */

//----------------------------------------------------------------

/* 新年倒计时 start */
// let newYearTimer = null;
// var newYear = () => {
//   clearTimeout(newYearTimer);
//   if (!document.querySelector('#newYear')) return;
//   // 新年时间戳 and 星期对象
//   let newYear = new Date('2023-01-22 00:00:00').getTime() / 1000,
//     week = { 0: '周日', 1: '周一', 2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六' }

//   time();

//   // 补零函数
//   function nol(h) { return h > 9 ? h : '0' + h; };

//   function time() {
//     // 现在 时间对象
//     let now = new Date();

//     // 右下角 今天
//     document.querySelector('#newYear .today').innerHTML = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + week[now.getDay()]

//     // 现在与新年相差秒数
//     let second = newYear - Math.round(now.getTime() / 1000);

//     // 小于0则表示已经过年
//     if (second < 0) {
//       document.querySelector('#newYear .title').innerHTML = 'Happy New Year!';
//       document.querySelector('#newYear .newYear-time').innerHTML = '<span class="happyNewYear">新年快乐</p>';
//     } else {
//       // 大于0则还未过年
//       document.querySelector('#newYear .title').innerHTML = '距离2023年春节：'

//       // 大于一天则直接渲染天数
//       if (second > 86400) {
//         document.querySelector('#newYear .newYear-time').innerHTML = `<span class="day">${Math.ceil(second / 86400)}<span class="unit">天</span></span>`
//       } else {
//         // 小于一天则使用时分秒计时。
//         let h = nol(parseInt(second / 3600));
//         second %= 3600;
//         let m = nol(parseInt(second / 60));
//         second %= 60;
//         let s = nol(second);
//         document.querySelector('#newYear .newYear-time').innerHTML = `<span class="time">${h}:${m}:${s}</span></span>`;
//         // 计时
//         newYearTimer = setTimeout(time, 1000);
//       }
//     }
//   }

//   // 元宝飘落
//   jQuery(document).ready(function ($) {
//     $('#newYear').wpSuperSnow({
//       flakes: ['https://tuchuang.voooe.cn/images/2023/01/02/yb1.webp', 'https://tuchuang.voooe.cn/images/2023/01/02/yb2.webp', 'https://tuchuang.voooe.cn/images/2023/01/02/yb3.webp'],
//       totalFlakes: '100',
//       zIndex: '999999',
//       maxSize: '30',
//       maxDuration: '20',
//       useFlakeTrans: false
//     });
//   });
// }
// // Pjax适配：若没有开启Pjax这里直接是newYear()即可
// // 开了Pjax的用以下两句
// document.addEventListener('pjax:complete', newYear);
// document.addEventListener('DOMContentLoaded', newYear);

/* 新年倒计时 end */

//----------------------------------------------------------------

/* 页脚计时器 start */
var now = new Date();
function createtime() {
  // 当前时间
  now.setTime(now.getTime() + 1000);
  var start = new Date("08/01/2022 00:00:00"); // 旅行者1号开始计算的时间
  var dis = Math.trunc(23400000000 + ((now - start) / 1000) * 17); // 距离=秒数*速度 记住转换毫秒
  var unit = (dis / 149600000).toFixed(6);  // 天文单位
  // 网站诞生时间
  var grt = new Date("09/19/2023 15:00:00");
  var days = (now - grt) / 1e3 / 60 / 60 / 24,
    dnum = Math.floor(days),
    hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
    hnum = Math.floor(hours);
  1 == String(hnum).length && (hnum = "0" + hnum);
  var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
    mnum = Math.floor(minutes);
  1 == String(mnum).length && (mnum = "0" + mnum);
  var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
    snum = Math.round(seconds);
  1 == String(snum).length && (snum = "0" + snum);
  let currentTimeHtml = "";
  (currentTimeHtml =
    hnum < 18 && hnum >= 9
      ? `<img class='boardsign' src='https://pic.imgdb.cn/item/65eff3619f345e8d0375de63.jpg' title='同志，共勉'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`
      : `<img class='boardsign' src='https://pic.imgdb.cn/item/65eff3619f345e8d0375de63.jpg' title='生活还是要继续的'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${dis} 千米，约为 ${unit} 个天文单位 🚀</div>`),
    document.getElementById("workboard") &&
    (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
// 设置重复执行函数，周期1000ms
setInterval(() => {
  createtime();
}, 1000);

/*页脚计时器 end */

//----------------------------------------------------------------



/* fps检测 end */

//----------------------------------------------------------------

/* 美化模块 start */

// 更新版本需要每个用户都恢复一次默认设置
if (localStorage.getItem("reset_4") == undefined) {
  localStorage.setItem("reset_4", "1");
  // 清空之前的标记值
  for (var i = 1; i <= 3; i++) {
    localStorage.removeItem("reset_" + i);
  }
  clearItem();
  setTimeout(function () {
    new Vue({
      data: function () {
        this.$notify({
          title: "提示",
          message: " 网站部分设置项被更新，当前已为您重置所有设置，祝您愉快同志！",
          position: 'top-left',
          offset: 50,
          showClose: true,
          type: "success",
          duration: 8000
        });
      }
    })
  }, 1500);
}

// 清除localStorage配置项
function clearItem() {
  localStorage.removeItem('blogbg');
  localStorage.removeItem('universe');
  localStorage.removeItem('blur');
  localStorage.removeItem('fpson');
  localStorage.removeItem('transNum');
  localStorage.removeItem('blurRad');
  localStorage.removeItem('font');
  localStorage.removeItem('themeColor');
  localStorage.removeItem('rs');
  localStorage.removeItem('mouse');
  localStorage.removeItem('light');
  localStorage.removeItem('snow');
}


// 设置字体
if (localStorage.getItem("font") == undefined) {
  localStorage.setItem("font", "LXGW");
}
setFont(localStorage.getItem("font"));
function setFont(n) {
  localStorage.setItem("font", n)
  if (n == "default") {
    document.documentElement.style.setProperty('--global-font', '-apple-system');
    document.body.style.fontFamily = "-apple-system, Consolas_1, BlinkMacSystemFont, 'Segoe UI' , 'Helvetica Neue' , Lato, Roboto, 'PingFang SC' , 'Microsoft JhengHei' , 'Microsoft YaHei' , sans-serif";
  }
  else {
    document.documentElement.style.setProperty('--global-font', n);
    document.body.style.fontFamily = "var(--global-font),-apple-system, IBM Plex Mono ,monosapce,'微软雅黑', sans-serif";
  }
  try { setFontBorder(); } catch (err) { };
}

// 设置字体选择框边界
function setFontBorder() {
  var curFont = localStorage.getItem("font");
  var swfId = "swf_" + curFont;
  document.getElementById(swfId).style.border = "2px solid var(--theme-color)";
  Array.prototype.forEach.call(document.getElementsByClassName("swf"), function (ee) {
    if (ee.id != swfId) ee.style.border = "2px solid var(--border-color)";
  });
}


// 设置主题色
if (localStorage.getItem("themeColor") == undefined) {
  localStorage.setItem("themeColor", "green");
}
setColor(localStorage.getItem("themeColor"));
function setColor(c) {
  document.getElementById("themeColor").innerText = `:root{--theme-color:` + map.get(c) + ` !important}`;
  localStorage.setItem("themeColor", c);
  // 刷新鼠标颜色
  CURSOR.refresh();
  // 设置一个带有透明度的主题色，用于菜单栏的悬浮颜色
  var theme_color = map.get(c);
  var trans_theme_color = "rgba" + theme_color.substring(3, theme_color.length - 1) + ", 0.7)";
  var high_trans_color = "rgba" + theme_color.substring(3, theme_color.length - 1) + ", 0.5)";
  document.documentElement.style.setProperty("--text-bg-hover", trans_theme_color);
  document.documentElement.style.setProperty("--high-trans-color", high_trans_color);
}


// 星空背景开关
if (localStorage.getItem("universe") == undefined) {
  localStorage.setItem("universe", "block");
}
setUniverse2(localStorage.getItem("universe"));
function setUniverse2(c) {
  document.getElementById("universe").style.display = c;
  localStorage.setItem("universe", c);
}
function setUniverse() {
  if (document.getElementById("universeSet").checked) {
    setUniverse2("block");
  } else {
    setUniverse2("none");
  }
}

// 雪花开关
if (localStorage.getItem("snow") == undefined) {
  localStorage.setItem("snow", "none");
}
document.getElementById("snow").style.display = localStorage.getItem("snow");
function setSnow() {
  if (document.getElementById("snowSet").checked) {
    document.getElementById("snow").style.display = "block";
    localStorage.setItem("snow", "block");
  } else {
    document.getElementById("snow").style.display = "none";
    localStorage.setItem("snow", "none");
  }
}


// 帧率监测开关
if (localStorage.getItem("fpson") == undefined) {
  localStorage.setItem("fpson", "1");
}
function fpssw() {
  if (document.getElementById("fpson").checked) {
    localStorage.setItem("fpson", "1");
  } else {
    localStorage.setItem("fpson", "0");
  }
  setTimeout(reload, 600);
}

// 刷新窗口
function reload() {
  window.location.reload();
}

// 侧边栏开关
if (localStorage.getItem("rs") == undefined) {
  localStorage.setItem("rs", "block");
}
if (localStorage.getItem("rs") == "block") {
  document.getElementById("rightSide").innerText = `:root{--rightside-display: block}`;
} else {
  document.getElementById("rightSide").innerText = `:root{--rightside-display: none}`;
}
function toggleRightside() {
  // 先设置localStorage变量
  if (document.getElementById("rightSideSet").checked) {
    localStorage.setItem("rs", "block");
    document.getElementById("rightSide").innerText = `:root{--rightside-display: block}`;
  } else {
    localStorage.setItem("rs", "none");
    document.getElementById("rightSide").innerText = `:root{--rightside-display: none}`;
  }
}


// 透明度调节滑块
if (localStorage.getItem("transNum") == undefined) {
  localStorage.setItem("transNum", 95);
}
var curTransNum = localStorage.getItem("transNum");
var curTransMini = curTransNum * 0.95;
document.getElementById("transPercent").innerText = `:root{--trans-light: rgba(253, 253, 253, ${curTransNum}%) !important; --trans-dark: rgba(25, 25, 25, ${curTransNum}%) !important} `;
function setTrans() {
  var elem = document.getElementById("transSet");
  var newTransNum = elem.value;
  var target = document.querySelector('.transValue');
  target.innerHTML = "透明度 (0%-100%): " + newTransNum + "%";
  localStorage.setItem("transNum", newTransNum);
  curTransMini = newTransNum * 0.95;
  curTransNum = newTransNum;  // 更新当前透明度
  document.querySelector('#rang_trans').style.width = curTransMini + "%";
  document.getElementById("transPercent").innerText = `:root{--trans-light: rgba(253, 253, 253, ${newTransNum}%) !important; --trans-dark: rgba(25, 25, 25, ${newTransNum}%) !important} `;
};


// 模糊度调节滑块
if (localStorage.getItem("blurRad") == undefined) {
  localStorage.setItem("blurRad", 20);
}
var curBlur = localStorage.getItem("blurRad"); // 当前模糊半径
var miniBlur = curBlur * 0.95;
document.getElementById("blurNum").innerText = `:root{--blur-num: blur(${curBlur}px) saturate(120%) !important`;
function setBlurNum() {
  var elem = document.getElementById("blurSet");
  var newBlur = elem.value;
  var target = document.querySelector('.blurValue');
  target.innerHTML = "模糊半径 (开启模糊生效 0px-100px): " + newBlur + "px";
  localStorage.setItem("blurRad", newBlur);
  curBlur = newBlur;
  miniBlur = curBlur * 0.95;
  // var max = elem.getAttribute("max");
  document.querySelector('#rang_blur').style.width = miniBlur + "%";
  document.getElementById("blurNum").innerText = `:root{--blur-num: blur(${curBlur}px) saturate(120%) !important`;
};


// 模糊效果开关
if (localStorage.getItem("blur") == undefined) {
  localStorage.setItem("blur", 0);
}
if (localStorage.getItem("blur") == 0) {
  document.getElementById("settingStyle").innerText = `:root{--backdrop-filter: none}`;
} else {
  document.getElementById("settingStyle").innerText = `:root{--backdrop-filter: var(--blur-num)}`;
}
function setBlur() {
  if (document.getElementById("blur").checked) {
    localStorage.setItem("blur", 1);
    document.getElementById("settingStyle").innerText = `:root{--backdrop-filter: var(--blur-num)}`;
  } else {
    localStorage.setItem("blur", 0);
    document.getElementById("settingStyle").innerText = `:root{--backdrop-filter: none}`;
  }
}

// 更换背景(原来Leonus的代码)
// 存数据
// name：命名 data：数据
// function saveData(name, data) {
//   localStorage.setItem(name, JSON.stringify({ time: Date.now(), data: data }));
// }
// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
// function loadData(name, time) {
//   let d = JSON.parse(localStorage.getItem(name));
//   // 过期或有错误返回 0 否则返回数据
//   if (d) {
//     let t = Date.now() - d.time;
//     if (t < time * 60 * 1000 && t > -1) return d.data;
//   }
//   return 0;
// }
// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用
// 读取背景
// try {
//   let data = loadData("blogbg", 1440);
//   if (data) changeBg(data, 1);
//   else localStorage.removeItem("blogbg");
// } catch (error) {
//   localStorage.removeItem("blogbg");
// }
// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
// function changeBg(s, flag) {
//   let bg = document.getElementById("web_bg");
//   if (s.charAt(0) == "#") {
//     bg.style.backgroundColor = s;
//     bg.style.backgroundImage = "none";
//   } else {
//     bg.style.backgroundImage = s
//   };
//   if (!flag) {
//     saveData("blogbg", s);
//   }
// }

// 切换自定义颜色
var defineColor = localStorage.getItem("blogbg") && localStorage.getItem("blogbg").charAt(0) == '#' ? localStorage.getItem("blogbg") : '#F4D88A';
function changeBgColor() {
  changeBg(document.querySelector("#define_colors").value);
}

// 必应每日壁纸API
let bingDayBg = screen.width <= 768 ? "url(https://bing.img.run/m.php)" : "url(https://bing.img.run/1920x1080.php)";
// 必应历史壁纸API
let bingHistoryBg = screen.width <= 768 ? "url(https://bing.img.run/rand_m.php)" : "url(https://bing.img.run/rand.php)";
// EEE.DOG
let EEEDog = "url(https://api.yimian.xyz/img?type=moe&size=1920x1080)";
// 随机美图cdn.seovx.com
let seovx = "url(https://cdn.seovx.com/?mom=302)";
// picsum随机
let picsum = "url(https://picsum.photos/1920/1080.webp)";
// 小歪二次元
// let waiDongman = "url(https://api.ixiaowai.cn/api/api.php)";
//  小歪高清壁纸
let waiBizhi = "url(https://api.ixiaowai.cn/gqapi/gqapi.php)";
// 博天随机
let btstu = "url(http://api.btstu.cn/sjbz/?lx=suiji)";
// tuapi 动漫
// let tuapi = "url(https://tuapi.eees.cc/api.php?category=dongman)";
// unsplash随机 https://source.unsplash.com/random/1920x1080/daily (weekly)
let unsplash = "url(https://source.unsplash.com/random/1920x1080/)";


// 更换背景(自己的代码)//https://free-img.400040.xyz/4/2024/06/23/66783f1838cbf.jpg
if (localStorage.getItem("blogbg") != undefined) {
  setBg(localStorage.getItem("blogbg"));
} else {
  document.getElementById("defineBg").innerText = `:root{
    --default-bg: url(https://pic4.zhimg.com/v2-e420e7a85b70b04d302d05575129eeef_r.jpg); 
    --darkmode-bg:url(https://source.fomal.cc/img/dm4.webp);
    --mobileday-bg: url(https://pic4.zhimg.com/v2-e420e7a85b70b04d302d05575129eeef_r.jpg);
    --mobilenight-bg: url(https://source.fomal.cc/img/dm4.webp);
  }`; 
}
// 切换背景主函数
function changeBg(s) {
  // 自定义颜色框
  defineColor = s.charAt(0) == "#" ? s : '#F4D88A';
  setBg(s);
  localStorage.setItem("blogbg", s);
}
// 设置背景属性
function setBg(s) {
  document.getElementById("defineBg").innerText = `:root{
    --default-bg: url(https://source.fomal.cc/img/dm4.webp); 
    --darkmode-bg:url(https://source.fomal.cc/img/dm4.webp);
    --mobileday-bg: url(https://source.fomal.cc/img/dm4.webp);
    --mobilenight-bg: url(https://source.fomal.cc/img/dm4.webp);
  }`;
}

// 切换链接对应的背景(加入了链接检验与防抖)
function getPicture() {
  debounce(getPicture_, 300);
}

function getPicture_() {
  checkImgExists(document.getElementById("pic-link").value).then(() => {
    // 有效的图片链接
    var link = "url(" + document.getElementById("pic-link").value + ")";
    changeBg(link);
    // 提示切换成功
    new Vue({
      data: function () {
        this.$notify({
          title: "OK",
          message: "切换自定义背景成功！",
          position: 'top-left',
          offset: 50,
          showClose: true,
          type: "success",
          duration: 5000
        });
      }
    })
  }).catch(() => {
    // 无效的图片链接，提示无效
    new Vue({
      data: function () {
        this.$notify({
          title: "链接错误",
          message: "请输入有效的图片链接！",
          position: 'top-left',
          offset: 50,
          showClose: true,
          type: "warning",
          duration: 5000
        });
      }
    })
  })
}
// 判断图片链接是否可用
function checkImgExists(imgurl) {
  return new Promise(function (resolve, reject) {
    var ImgObj = new Image();
    ImgObj.src = imgurl;
    ImgObj.onload = function (res) {
      resolve(res);
    }
    ImgObj.onerror = function (err) {
      reject(err);
    }
  })
}

// 黑夜霓虹灯开关
if (localStorage.getItem("light") == undefined) {
  localStorage.setItem("light", "true");
}
// 这里要适配Pjax
document.addEventListener('pjax:complete', function () {
  changeLight(localStorage.getItem("light") == "true" ? true : false)
});
document.addEventListener('DOMContentLoaded', function () {
  changeLight(localStorage.getItem("light") == "true" ? true : false)
});
function setLight() {
  if (document.getElementById("lightSet").checked) {
    changeLight(true);
    localStorage.setItem("light", "true");
  } else {
    changeLight(false);
    localStorage.setItem("light", "false");
  }
}
// 更换霓虹灯状态
function changeLight(flag) {
  if (document.getElementById("site-name"))
    document.getElementById("site-name").style.animation = flag ? "light_15px 10s linear infinite" : "none";
  if (document.getElementById("site-title"))
    document.getElementById("site-title").style.animation = flag ? "light_15px 10s linear infinite" : "none";
  if (document.getElementById("site-subtitle"))
    document.getElementById("site-subtitle").style.animation = flag ? "light_10px 10s linear infinite" : "none";
  if (document.getElementById("post-info"))
    document.getElementById("post-info").style.animation = flag ? "light_5px 10s linear infinite" : "none";
  document.getElementById("menu_shadow").innerText = flag ? `:root{--menu-shadow: 0 0 1px var(--theme-color);}` : `:root{--menu-shadow: none;}`;
}



// 解决开启Pjax的问题
// function whenDOMReady() {
//   try {
//     let data = loadData('blogbg', 1440)
//     if (data) changeBg_noWindow(data, 0)
//     else localStorage.removeItem('blogbg');
//   } catch (error) { localStorage.removeItem('blogbg'); }
// }
// whenDOMReady()
// document.addEventListener("pjax:success", whenDOMReady)

// 无弹窗提醒更换背景
// function changeBg_noWindow(s, flag) {
//   let bg = document.getElementById("web_bg");
//   if (s.charAt(0) == "#") {
//     bg.style.backgroundColor = s;
//     bg.style.backgroundImage = "none";
//   } else bg.style.backgroundImage = s;
//   if (!flag) {
//     saveData("blogbg", s);
//   }
// }

// 创建窗口
var winbox = "";

function createWinbox() {
  let div = document.createElement("div");
  document.body.appendChild(div);
  winbox = WinBox({
    id: "meihuaBox",
    index: 99,
    title: "美化设置",
    x: "left",
    y: "center",
    minwidth: "300px",
    height: "60%",
    // "#76c8f1"
    background: 'var(--theme-color)',
    onmaximize: () => {
      div.innerHTML = `<style>body::-webkit-scrollbar {display: none;} div#meihuaBox {width: 100% !important;}</style>`;
    },
    onrestore: () => {
      div.innerHTML = "";
    },
  });
  winResize();
  window.addEventListener("resize", winResize);

  // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
  winbox.body.innerHTML = `
<div class="settings" style="display: block;">
<div id="article-container" style="padding:12px;">
<br>
<center><p><button onclick="reset()" style="background:linear-gradient(to right, #fc354c, #0abfbc);display:block;width:40%;padding:15px 0;border-radius:30px;color:white;font-size:1.1em;"><i class="fa-solid fa-arrows-rotate"></i>&nbsp;恢复默认设置</button></p></center>

<h2>一、显示偏好</h2>

<div class="transValue" style="font-weight:bold;padding-left:10px">透明度 (0%-100%): ${curTransNum}%</div>
<div class="range">
  <input id="transSet" type="range" min="0" max="100" step="1" value=${curTransNum} oninput="setTrans()">
  <p class="rang_width" id="rang_trans" style="width:${curTransMini}%"></p>
</div>

<div class="blurValue" style="font-weight:bold;padding-left:10px">模糊半径 (开启模糊生效 0px-100px): ${curBlur} px</div>
<div class="range">
  <input id="blurSet" type="range" min="0" max="100" step="1" value="${curBlur}" oninput="setBlurNum()">
  <p class="rang_width" id="rang_blur" style="width:${miniBlur}%"></p>
</div>


<div class="content" style="display:flex">
  <div class="content-text" style="font-weight:bold; padding-left:10px"> 星空特效 (夜间模式) </div><input type="checkbox" id="universeSet" onclick="setUniverse()">
  <div class="content-text" style="font-weight:bold; padding-left:20px"> 霓虹灯 (夜间模式) </div><input type="checkbox" id="lightSet" onclick="setLight()">
</div>

<div class="content" style="display:flex">
  <div class="content-text" style="font-weight:bold; padding-left:10px"> 模糊效果 (消耗性能) </div><input type="checkbox" id="blur" onclick="setBlur()">
  <div class="content-text" style="font-weight:bold; padding-left:20px"> 侧边栏 (默认开) </div><input type="checkbox" id="rightSideSet" onclick="toggleRightside()">
</div>

<div class="content" style="display:flex">

  <div class="content-text" style="font-weight:bold; padding-left:10px"> 雪花特效 (白天模式) </div><input type="checkbox" id="snowSet" onclick="setSnow()">
</div>


<h2>二、字体设置</h2>
<div class="note warning modern"><p>非商免字体未经授权只能个人使用。本站为完全非商业、非盈利性质的网站，平时用于个人学习交流，如有侵权请联系站长删除，谢谢！ —— 致版权方</p>
</div>
<p id="swfs">
<a class="swf" id="swf_ZhuZiAWan" href="javascript:;" rel="noopener external nofollow" style="font-family:'ZhuZiAWan'!important;color:black" onclick="setFont('ZhuZiAWan')">筑紫A丸标准体2.0</a>
<a class="swf" id="swf_HYTMR" href="javascript:;" rel="noopener external nofollow" style="font-family:'HYTMR'!important;color:black" onclick="setFont('HYTMR')">汉仪唐美人</a>
<a class="swf" id="swf_LXGW" href="javascript:;" rel="noopener external nofollow" style="font-family:'LXGW'!important;color:black" onclick="setFont('LXGW')">霞鹜文楷</a>
<a class="swf" id="swf_TTQHB" href="javascript:;" rel="noopener external nofollow" style="font-family:'TTQHB'!important;color:black" onclick="setFont('TTQHB')">甜甜圈海报</a>
<a class="swf" id="swf_YSHST" href="javascript:;" rel="noopener external nofollow" style="font-family:'YSHST'!important;color:black" onclick="setFont('YSHST')">优设好身体</a>
<a class="swf" id="swf_MiSans" href="javascript:;" rel="noopener external nofollow" style="font-family:'MiSans'!important;color:black" onclick="setFont('MiSans')">MiSans</a>
<a class="swf" id="swf_default" href="javascript:;" rel="noopener external nofollow" style="font-family:-apple-system, IBM Plex Mono ,monosapce,'微软雅黑', sans-serif;!important;color:black" onclick="setFont('default')">系统默认</a>
</p>

<h2>三、主题色设置</h2>
<div class="content" style="display:flex"><input type="radio" id="red" name="colors" value=" "
        onclick="setColor('red')"><input type="radio" id="orange" name="colors" value=" "
        onclick="setColor('orange')"><input type="radio" id="yellow" name="colors" value=" "
        onclick="setColor('yellow')"><input type="radio" id="green" name="colors" value=" "
        onclick="setColor('green')"><input type="radio" id="blue" name="colors" value=" "
        onclick="setColor('blue')"><input type="radio" id="heoblue" name="colors" value=" "
        onclick="setColor('heoblue')"><input type="radio" id="darkblue" name="colors" value=" "
        onclick="setColor('darkblue')"><input type="radio" id="purple" name="colors" value=" "
        onclick="setColor('purple')"><input type="radio" id="pink" name="colors" value=" "
        onclick="setColor('pink')" checked="checked"><input type="radio" id="black" name="colors" value=" "
        onclick="setColor('black')"><input type="radio" id="blackgray" name="colors" value=" "
        onclick="setColor('blackgray')"></div>

<h2>四、背景设置</h2>
<center><button onclick="resetBg()" style="background:var(--theme-color);display:block;width:35%;padding:15px 0;border-radius:30px;color:white;"><i class="fa-solid fa-arrows-rotate"></i>&nbsp;恢复默认背景</button></center>

<h3>1. 二次元</h3>
<details class="folding-tag" cyan><summary> 查看二次元背景 </summary>
              <div class='content'>
              <div class="bgbox"><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://lskypro.acozycotage.net/Fomalhaut/img/home_bg.webp)" class="imgbox" onclick="changeBg('url(https://lskypro.acozycotage.net/Fomalhaut/img/home_bg.webp)')"></a></div>
              </div>
            </details>


<h3>2. 风景</h3>

<details class="folding-tag" cyan><summary> 查看风景背景 </summary>
              <div class='content'>
              <div class="bgbox"><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://lskypro.acozycotage.net/Fomalhaut/img/fj1.webp)" class="imgbox" onclick="changeBg('url(https://lskypro.acozycotage.net/Fomalhaut/img/fj1.webp)')"></a></div>
              </div>
            </details>

<h3>3. 萌宠</h3>

<details class="folding-tag" cyan><summary> 查看萌宠背景 </summary>
              <div class='content'>
              <div class="bgbox"><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://lskypro.acozycotage.net/Fomalhaut/img/mc1.webp)" class="imgbox" onclick="changeBg('url(https://lskypro.acozycotage.net/Fomalhaut/img/mc1.webp)')"></a></div>
              </div>
            </details>

<h3>4. 渐变色</h3>
<details class="folding-tag" cyan><summary> 查看渐变色背景 </summary>
              <div class='content'>
              <div class="bgbox"><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #544a7d, #ffd452)" onclick="changeBg('linear-gradient(to right, #544a7d, #ffd452)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)" onclick="changeBg('linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to left, #654ea3, #eaafc8)" onclick="changeBg('linear-gradient(to left, #654ea3, #eaafc8)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #feac5e, #c779d0, #4bc0c8)" onclick="changeBg('linear-gradient(to top, #feac5e, #c779d0, #4bc0c8)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #d3959b, #bfe6ba)" onclick="changeBg('linear-gradient(to top, #d3959b, #bfe6ba)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #8360c3, #2ebf91)" onclick="changeBg('linear-gradient(to top, #8360c3, #2ebf91)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #108dc7, #ef8e38)" onclick="changeBg('linear-gradient(to top, #108dc7, #ef8e38)')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #355c7d, #6c5b7b, #c06c84)" onclick="changeBg('linear-gradient(to top, #355c7d, #6c5b7b, #c06c84)')"></a></div>
              </div>
            </details>


<h3>5. 纯色</h3>
<details class="folding-tag" cyan><summary> 查看纯色背景 </summary>
              <div class='content'>
              <div class="bgbox"><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ecb1b1" onclick="changeBg('#ecb1b1')"></a> <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #d3ebac" onclick="changeBg('#d3ebac')"></a> <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ace9ce" onclick="changeBg('#ace9ce')"></a><a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #c1ebea" onclick="changeBg('#c1ebea')"></a> <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #dee7f1" onclick="changeBg('#dee7f1')"></a> <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #e9e3f2" onclick="changeBg('#e9e3f2')"></a> <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #f7eff5" onclick="changeBg('#f7eff5')"></a>  <input type="color" id="define_colors" href="javascript:;" rel="noopener external nofollow" class="box" autocomplete="on" value="${defineColor}" oninput="changeBgColor()"></input></div>
              </div>
            </details>



<h3>6. 适配手机</h3>
<details class="folding-tag" cyan><summary> 查看适配手机的背景 </summary>
              <div class='content'>
              <div class="bgbox"><a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://lskypro.acozycotage.net/Fomalhaut/img/mb4.webp)" class="pimgbox" onclick="changeBg('url(https://lskypro.acozycotage.net/Fomalhaut/img/mb4.webp)')"></a></div>
              </div>
            </details>


<h3>7. 壁纸API</h3>
<details class="folding-tag" cyan><summary> 查看壁纸API系列背景 </summary>
              <div class='content'>
              <div class="bgbox"><a id="bingDayBox" rel="noopener external nofollow" style="background-image: ${bingDayBg}" class="box apiBox" onclick="changeBg('${bingDayBg}')"></a><a id="bingHistoryBox" rel="noopener external nofollow" style="background-image: ${bingHistoryBg}" class="box apiBox" onclick="changeBg('${bingHistoryBg}')"></a><a id="EEEDogBox" rel="noopener external nofollow" style="background-image: ${EEEDog}" class="box apiBox" onclick="changeBg('${EEEDog}')"></a><a id="seovxBox" rel="noopener external nofollow" style="background-image: ${seovx}" class="box apiBox" onclick="changeBg('${seovx}')"></a><a id="picsumBox" rel="noopener external nofollow" style="background-image: ${picsum}" class="box apiBox" onclick="changeBg('${picsum}')"></a><a id="waiBizhiBox" rel="noopener external nofollow" style="background-image: ${waiBizhi}" class="box apiBox" onclick="changeBg('${waiBizhi}')"></a><a id="btstuBox" rel="noopener external nofollow" style="background-image: ${btstu}" class="box apiBox" onclick="changeBg('${btstu}')"></a><a id="unsplashBox" rel="noopener external nofollow" style="background-image: ${unsplash}" class="box apiBox" onclick="changeBg('${unsplash}')"></a></div>
              </div>
            </details>


<h3>8. 自定义背景</h3>
<details class="folding-tag" cyan><summary> 设置自定义背景 </summary>
              <div class='content'>
              <p><center><input type="text" id="pic-link" size="70%" maxlength="1000" placeholder="请输入有效的图片链接，如 https://source.fomal.cc/img/home_bg.webp"></center></p><p><center><button type="button" onclick="getPicture()" style="background:var(--theme-color);width:35%;padding: 5px 0px 7px 0px;border-radius:30px;color:white;line-height:2;">🌈切换背景🌈</button></center></p>
              </div>
            </details>

<br>
<center><div style="font-size:1.2em;color:var(--theme-color);font-weight:bold;">------ ( •̀ ω •́ )y 到底啦 ------</div></center>
<br>

</div>

</div>

`;

  // 打开小窗时候初始化
  $("#" + localStorage.getItem("themeColor")).attr("checked", true);
  if (localStorage.getItem("blur") == 1) {
    document.getElementById("blur").checked = true;
  } else {
    document.getElementById("blur").checked = false;
  }
  if (localStorage.getItem("universe") == "block") {
    document.getElementById("universeSet").checked = true;
  } else if (localStorage.getItem("universe") == "none") {
    document.getElementById("universeSet").checked = false;
  }
  if (localStorage.getItem("fpson") == "1") {
    document.getElementById("fpson").checked = true;
  } else {
    document.getElementById("fpson").checked = false;
  }
  if (localStorage.getItem("rs") == "block") {
    document.getElementById("rightSideSet").checked = true;
  } else if (localStorage.getItem("rs") == "none") {
    document.getElementById("rightSideSet").checked = false;
  }
  if (localStorage.getItem("light") == "true") {
    document.getElementById("lightSet").checked = true;
  } else {
    document.getElementById("lightSet").checked = false;
  }
  setFontBorder();
  if (localStorage.getItem("snow") == "block") {
    document.getElementById("snowSet").checked = true;
  } else if (localStorage.getItem("snow") == "none") {
    document.getElementById("snowSet").checked = false;
  }
}

// 恢复默认背景
function resetBg() {
  localStorage.removeItem('blogbg');
  reload();
}

// 恢复默认设置并刷新页面
function reset() {
  clearItem();
  reload();
}

// 适应窗口大小
function winResize() {
  try {
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
      winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
      winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
  } catch (err) {
    // console.log("Pjax毒瘤抽风运行winResize方法🙄🙄🙄");
  }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
  if (document.querySelector("#meihuaBox")) {
    winbox.toggleClass("hide");
  } else {
    createWinbox();
  };
}

/* 美化模块 end */
