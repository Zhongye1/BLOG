var ms = Object.defineProperty;
var gs = (i, e, t) =>
  e in i
    ? ms(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (i[e] = t);
var Q = (i, e, t) => (gs(i, typeof e != "symbol" ? e + "" : e, t), t);
import {
  d as ae,
  u as ht,
  r as L,
  a as G,
  o as ke,
  b as P,
  c as I,
  e as m,
  f as N,
  w as q,
  g as v,
  n as $e,
  T as et,
  h as fe,
  t as Y,
  v as he,
  F as ce,
  i as Ee,
  _ as Ce,
  p as Ue,
  j as Ge,
  k as we,
  l as Tt,
  m as Re,
  q as X,
  s as te,
  x as le,
  y as ys,
  z as Cs,
  A as Te,
  B as an,
  C as ln,
  D as bs,
  E as Le,
  G as _s,
  H as ws,
  I as Es,
  J as Bt,
  K as li,
  L as un,
  M as Si,
  N as xs,
  O as Ss,
  P as Mt,
  Q as ti,
  R as cn,
  S as dn,
  U as ui,
  V as Fs,
  W as Ts,
  X as rt,
  Y as Bs,
  Z as ks,
  $ as Ds,
} from "./index.57e3def5.js";
const As = "" + new URL("carousel_1.78859d4f.png", import.meta.url).href,
  Ms = "" + new URL("carousel_10.515095af.png", import.meta.url).href,
  Ps = "" + new URL("carousel_11.60759b34.png", import.meta.url).href,
  Os = "" + new URL("carousel_12.66d2f009.png", import.meta.url).href,
  Ls = "" + new URL("carousel_13.35d78706.png", import.meta.url).href,
  zs = "" + new URL("carousel_14.8a66797f.png", import.meta.url).href,
  Is = "" + new URL("carousel_15.1e37810b.png", import.meta.url).href,
  Rs = "" + new URL("carousel_16.75b0ee33.png", import.meta.url).href,
  $s = "" + new URL("carousel_17.7f6d6a99.png", import.meta.url).href,
  Ns = "" + new URL("carousel_18.2523f7b3.png", import.meta.url).href,
  Hs = "" + new URL("carousel_2.53aa045f.png", import.meta.url).href,
  Vs = "" + new URL("carousel_3.d4479305.png", import.meta.url).href,
  js = "" + new URL("carousel_4.91113d91.png", import.meta.url).href,
  qs = "" + new URL("carousel_5.105ddefd.png", import.meta.url).href,
  Us = "" + new URL("carousel_6.74208897.png", import.meta.url).href,
  Gs = "" + new URL("carousel_7.32c5fdfa.png", import.meta.url).href,
  Ws = "" + new URL("carousel_8.5b206a00.png", import.meta.url).href,
  Xs = "" + new URL("carousel_9.1fa01571.png", import.meta.url).href;
const Ys = { class: "media-current" },
  Zs = { class: "media-main-pic" },
  Ks = { class: "media-current-info" },
  Js = { class: "media-info-wrapper" },
  Qs = { class: "media-info-detail", ref: "MediaInfoDetail", key: "3" },
  eo = { class: "media-detail-desc" },
  to = { class: "media-nav-wrapper" },
  io = ["data-index", "onClick", "active"],
  no = { class: "media-list-wrapper", id: "media-list" },
  so = ["data-index", "onClick"],
  oo = ["data-title"],
  ro = ae({
    __name: "Section5_swiper",
    setup(i, { expose: e }) {
      ht((F) => ({ "499c4690": v(x), "4db7efee": v(w), "4db7efef": v(S) }));
      let t = L([]),
        n = (F) => {
          t.value.push(F);
        },
        s = L(),
        o = L(),
        r = G([
          {
            serial: "01",
            title: "\u7B2C\u4E8C\u628A\u8D64\u9704",
            desc: "#\u51B3\u6218#",
            active: !0,
          },
          {
            serial: "02",
            title: "\u7B14\u8BB0",
            desc: "#\u4F01\u9E45\u7269\u6D41\u7684\u79D8\u5BC6#",
            active: !1,
          },
          {
            serial: "03",
            title: "\u5B89\u6D01\u8389\u5A1C",
            desc: "#\u4FE1\u4F7F#",
            active: !1,
          },
          {
            serial: "04",
            title: "\u83B1\u8335\u751F\u547D",
            desc: "#\u79D1\u7814#",
            active: !1,
          },
          {
            serial: "05",
            title: "\u7AEF\u5348",
            desc: "#\u708E\u56FD\u5C71\u6C34#",
            active: !1,
          },
          {
            serial: "06",
            title: "\u9F99\u95E8",
            desc: "#\u90BB\u8857\u4E00\u89D2#",
            active: !1,
          },
          {
            serial: "07",
            title: "\u8C1C\u56E2",
            desc: "#\u6E90\u77F3#",
            active: !1,
          },
          {
            serial: "08",
            title: "\u542F\u822A",
            desc: "#\u4EFB\u52A1\u5916\u51FA#",
            active: !1,
          },
          {
            serial: "09",
            title: "\u4F01\u9E45\u7269\u6D41",
            desc: "#\u529E\u516C\u5BA4#",
            active: !1,
          },
          {
            serial: "10",
            title: "\u542F\u793A",
            desc: "#\u5927\u5385#",
            active: !1,
          },
          {
            serial: "11",
            title: "\u6B7B\u7070\u590D\u71C3",
            desc: "#\u4E0D\u6B7B\u7684\u9ED1\u86C7#",
            active: !1,
          },
          {
            serial: "12",
            title: "\u82CF\u9192",
            desc: "#\u77F3\u68FA\u4E4B\u95F4#",
            active: !1,
          },
          {
            serial: "13",
            title: "\u4E4C\u8428\u65AF\u5B66\u751F\u81EA\u6CBB\u56E2",
            desc: "#\u56DE\u5FC6\u4E2D\u7684\u6559\u5BA4#",
            active: !1,
          },
          {
            serial: "14",
            title: "\u971E\u5149",
            desc: "#\u80DC\u5229\u7684\u8363\u5149#",
            active: !1,
          },
          {
            serial: "15",
            title: "\u8C22\u62C9\u683C",
            desc: "#\u5580\u5170\u8D38\u6613#",
            active: !1,
          },
          {
            serial: "16",
            title: "\u9884\u5907\u7EC4",
            desc: "#\u884C\u52A8\u9884\u5907\u7EC4A4#",
            active: !1,
          },
          {
            serial: "17",
            title: "\u6574\u88C5\u51FA\u53D1",
            desc: "#\u5370\u8C61\u56FE#",
            active: !1,
          },
          {
            serial: "18",
            title: "\u8FFD\u5FC6",
            desc: "#\u8FC7\u53BB\u7684\u6751\u5E84#",
            active: !1,
          },
        ]),
        a = G({
          backgroundImage: [],
          transform: [],
          opacity: [],
          PointerEvent: [],
        });
      for (let F = 0; F < r.length; F++) {
        let A = new URL(
          Object.assign({
            "../../assets/img/Five/carousel_1.png": As,
            "../../assets/img/Five/carousel_10.png": Ms,
            "../../assets/img/Five/carousel_11.png": Ps,
            "../../assets/img/Five/carousel_12.png": Os,
            "../../assets/img/Five/carousel_13.png": Ls,
            "../../assets/img/Five/carousel_14.png": zs,
            "../../assets/img/Five/carousel_15.png": Is,
            "../../assets/img/Five/carousel_16.png": Rs,
            "../../assets/img/Five/carousel_17.png": $s,
            "../../assets/img/Five/carousel_18.png": Ns,
            "../../assets/img/Five/carousel_2.png": Hs,
            "../../assets/img/Five/carousel_3.png": Vs,
            "../../assets/img/Five/carousel_4.png": js,
            "../../assets/img/Five/carousel_5.png": qs,
            "../../assets/img/Five/carousel_6.png": Us,
            "../../assets/img/Five/carousel_7.png": Gs,
            "../../assets/img/Five/carousel_8.png": Ws,
            "../../assets/img/Five/carousel_9.png": Xs,
          })[`../../assets/img/Five/carousel_${F + 1}.png`],
          self.location
        ).href;
        a.backgroundImage[F] = `url(${A})`;
      }
      function l() {
        (s.value.style.backgroundImage = a.backgroundImage[0]), u();
      }
      ke(() => {
        var F;
        l(), (F = T.value) == null || F.addEventListener("mousemove", U);
      });
      function u() {
        const F = t.value[0];
        let A = Math.floor(
          Number(getComputedStyle(F).width.replace("px", "")) +
            Number(getComputedStyle(F).paddingRight.replace("px", "")) * 2
        );
        for (let M = 0; M < r.length; M++)
          (a.transform[M] = `translateX(${A * M}px)`),
            (a.opacity[M] = 1),
            (a.PointerEvent[M] = "auto"),
            M > 3 &&
              ((a.transform[M] = `translateX(${A * 3}px)`),
              (a.opacity[M] = 0),
              (a.PointerEvent[M] = "none"));
      }
      let c = L(!0),
        d = L(0);
      const f = (F, A, M) => {
          M.forEach((O) => {
            O.active = !1;
          }),
            (A.active = !0),
            F > d.value && c.value
              ? ((c.value = !1), g(F, "left"))
              : F < d.value && c.value && ((c.value = !1), g(F, "right")),
            (d.value = F);
        },
        p = () => {
          c.value &&
            ((c.value = !1),
            d.value > 0 ? d.value-- : (d.value = r.length - 1),
            g(d.value, "left"),
            r.forEach((F) => {
              F.active = !1;
            }),
            (r[d.value].active = !0));
        },
        h = () => {
          c.value &&
            ((c.value = !1),
            d.value < r.length - 1 ? d.value++ : (d.value = 0),
            g(d.value, "right"),
            r.forEach((F) => {
              F.active = !1;
            }),
            (r[d.value].active = !0));
        },
        g = (F, A) => {
          k(0.45, A, F), b(A, 0.2, 0.45, F), E(F);
        };
      function y(F) {
        return new Promise((A) => setTimeout(A, F));
      }
      const E = async (F) => {
        const A = t.value[0];
        let M = Math.floor(
          Number(getComputedStyle(A).width.replace("px", "")) +
            Number(getComputedStyle(A).paddingRight.replace("px", "")) * 2
        );
        for (let O = 0; O < r.length; O++) {
          let W = M * O - M * (F - 1);
          W <= -M
            ? ((a.transform[O] = `translateX(${-M}px)`),
              (a.opacity[O] = 0),
              (a.PointerEvent[O] = "none"))
            : W >= M * 4
            ? ((a.transform[O] = `translateX(${M * 4}px)`),
              (a.opacity[O] = 0),
              (a.PointerEvent[O] = "none"))
            : ((a.transform[O] = `translateX(${M * O - M * (F - 1)}px)`),
              (a.opacity[O] = 1),
              (a.PointerEvent[O] = "auto"));
        }
        if (F === 0)
          for (let O = 1; O < 2; O++)
            (a.transform[r.length - O] = `translateX(${M * (O - 1)}px)`),
              (a.opacity[r.length - O] = 1),
              (a.PointerEvent[r.length - O] = "auto");
        if (F === r.length - 3)
          for (let O = 0; O < 2; O++)
            (a.transform[O] = `translateX(${M * 4}px)`),
              (a.opacity[O] = 0),
              (a.PointerEvent[O] = "none");
        if (F >= r.length - 2) {
          let O = F % 3;
          for (let W = 0; W < 2; W++)
            (a.transform[W] = `translateX(${M * (4 - O + W)}px)`),
              (a.opacity[W] = 0),
              F === r.length - 2 &&
                ((a.opacity[0] = 1), (a.PointerEvent[0] = "auto")),
              F === r.length - 1 &&
                ((a.opacity[W] = 1), (a.PointerEvent[W] = "auto"));
        }
      };
      let C = G({ TextAnimate: [!0, !0, !0], TextNum: 0, TextDire: !0 });
      const b = async (F, A, M, O) => {
        F == "left" ? (C.TextDire = !0) : F == "right" && (C.TextDire = !1),
          (C.TextAnimate[0] = !C.TextAnimate[0]),
          await y(A * 100),
          (C.TextAnimate[1] = !C.TextAnimate[1]),
          await y(A * 300),
          (C.TextAnimate[2] = !C.TextAnimate[2]),
          await y(M * 1500),
          (C.TextNum = O),
          await y(A * 100),
          (C.TextAnimate[0] = !C.TextAnimate[0]),
          await y(A * 300),
          (C.TextAnimate[1] = !C.TextAnimate[1]),
          await y(A * 500),
          (C.TextAnimate[2] = !C.TextAnimate[2]);
      };
      let _ = G({ MediaImgStyle: {}, imgAnimate: !0 }),
        x = L(""),
        w = L(""),
        S = L("");
      const k = async (F, A, M) => {
          (_.imgAnimate = !_.imgAnimate),
            A == "left"
              ? ((w.value = "left top"), (S.value = "right bottom"))
              : A == "right" &&
                ((w.value = "right bottom"), (S.value = "left top")),
            (_.MediaImgStyle = { backgroundImage: a.backgroundImage[M] }),
            (x.value = F + "s"),
            await y(F * 1e3),
            (c.value = !0);
        },
        T = L(),
        B = L(),
        D = L(),
        z = G({ x: 0, y: 0 }),
        V = G({ x: 0, y: 0 }),
        U = (F) => {
          (z.x = F.clientX), (z.y = F.clientY);
        };
      return (
        requestAnimationFrame(function F() {
          (V.x += (z.x - V.x) / 10), (V.y += (z.y - V.y) / 10);
          const O = (V.x / window.innerWidth) * 20 - 20 / 2,
            W = (V.y / window.innerHeight) * 20 - 20 / 2;
          (B.value.style.transform = `translate3d(${O}px,${W}px, 0) rotateX(${-W}deg) rotateY(${-O}deg)`),
            (D.value.style.transform = `translate3d(${O * 7.7}px,${
              W * 3
            }px,50px) rotateX(${-W}deg) rotateY(${-O}deg)`),
            requestAnimationFrame(F);
        }),
        e({ arrowBtnPrev: p, arrowBtnNext: h }),
        (F, A) => (
          P(),
          I(
            "div",
            {
              class: "media-container-box",
              style: { perspective: "5000px" },
              ref_key: "wapper",
              ref: T,
            },
            [
              m(
                "div",
                {
                  class: "media-main-view",
                  id: "media-layer-view",
                  ref_key: "mediaLayerView",
                  ref: B,
                },
                [
                  m("div", Ys, [
                    m("div", Zs, [
                      N(
                        et,
                        { name: "imgAnimate" },
                        {
                          default: q(() => [
                            v(_).imgAnimate
                              ? (P(),
                                I(
                                  "div",
                                  {
                                    class: "media-img1",
                                    ref_key: "MediaImg1",
                                    ref: s,
                                    key: "1",
                                    style: $e(v(_).MediaImgStyle),
                                  },
                                  null,
                                  4
                                ))
                              : (P(),
                                I(
                                  "div",
                                  {
                                    class: "media-img2",
                                    ref_key: "MediaImg2",
                                    ref: o,
                                    key: "2",
                                    style: $e(v(_).MediaImgStyle),
                                  },
                                  null,
                                  4
                                )),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    m(
                      "div",
                      {
                        class: "media-user-interactive",
                        id: "media-layer-front",
                        ref_key: "mediaLayerFront",
                        ref: D,
                      },
                      [
                        m("div", Ks, [
                          m("div", Js, [
                            N(
                              et,
                              {
                                name: "animate__animated animate__bounc animate__fast",
                                "enter-active-class": v(C).TextDire
                                  ? "animate__fadeInRight"
                                  : "animate__fadeInLeft",
                                "leave-active-class": v(C).TextDire
                                  ? "animate__fadeOutLeft"
                                  : "animate__fadeOutRight",
                              },
                              {
                                default: q(() => [
                                  fe(
                                    m(
                                      "div",
                                      {
                                        class: "media-info-serial",
                                        ref: "MediaInfoSerial",
                                        key: "1",
                                      },
                                      Y(v(r)[v(C).TextNum].serial),
                                      513
                                    ),
                                    [[he, v(C).TextAnimate[0]]]
                                  ),
                                  fe(
                                    m(
                                      "div",
                                      {
                                        class: "media-info-title",
                                        ref: "MediaInfoTitle",
                                        key: "2",
                                      },
                                      Y(v(r)[v(C).TextNum].title),
                                      513
                                    ),
                                    [[he, v(C).TextAnimate[1]]]
                                  ),
                                  fe(
                                    m(
                                      "div",
                                      Qs,
                                      [
                                        m(
                                          "div",
                                          eo,
                                          Y(v(r)[v(C).TextNum].desc),
                                          1
                                        ),
                                      ],
                                      512
                                    ),
                                    [[he, v(C).TextAnimate[2]]]
                                  ),
                                ]),
                                _: 1,
                              },
                              8,
                              ["enter-active-class", "leave-active-class"]
                            ),
                          ]),
                          m("div", to, [
                            (P(!0),
                            I(
                              ce,
                              null,
                              Ee(
                                v(r),
                                (M, O) => (
                                  P(),
                                  I(
                                    "div",
                                    {
                                      class: "media-nav-item",
                                      "data-index": O,
                                      onClick: (W) => f(O, M, v(r)),
                                      active: M.active,
                                      "data-cursor": "pointer",
                                    },
                                    null,
                                    8,
                                    io
                                  )
                                )
                              ),
                              256
                            )),
                          ]),
                        ]),
                      ],
                      512
                    ),
                  ]),
                  m("div", no, [
                    (P(!0),
                    I(
                      ce,
                      null,
                      Ee(
                        v(r),
                        (M, O) => (
                          P(),
                          I(
                            "div",
                            {
                              class: "media-list-item",
                              "data-index": O,
                              ref_for: !0,
                              ref: v(n),
                              style: $e({
                                transform: v(a).transform[O],
                                opacity: v(a).opacity[O],
                                pointerEvents: v(a).PointerEvent[O],
                              }),
                              onClick: (W) => f(O, M, v(r)),
                            },
                            [
                              m(
                                "div",
                                {
                                  class: "media-list-item-img",
                                  style: $e({
                                    backgroundImage: v(a).backgroundImage[O],
                                  }),
                                  "data-title": M.title,
                                  "data-cursor": "pointer",
                                },
                                null,
                                12,
                                oo
                              ),
                            ],
                            12,
                            so
                          )
                        )
                      ),
                      256
                    )),
                  ]),
                ],
                512
              ),
            ],
            512
          )
        )
      );
    },
  });
const ao = Ce(ro, [["__scopeId", "data-v-d5bbf8f8"]]),
  lo = (i) => (Ue("data-v-1a707a3b"), (i = i()), Ge(), i),
  uo = lo(() =>
    m(
      "svg",
      {
        viewBox: "0 0 103 103",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "data-cursor": "pointer",
      },
      [
        m("circle", {
          cx: "36",
          cy: "51.5",
          r: "4.5",
          class: "dot",
          "transform-origin": "34.5% 50%",
          transform: "scale(0)",
          "data-cursor": "pointer",
        }),
        m("g", { transform: "translate(35,15)" }, [
          m(
            "use",
            {
              class: "top",
              "xlink:href": "#arrow-btn-tr",
              "transform-origin": "16.1% 15.9%",
            },
            [
              m("path", {
                id: "arrow-btn-tr",
                "transform-origin": "16.1% 15.9%",
                d: "M31.274,7.155 L7.392,31.037 C5.870,32.559 3.402,32.559 1.880,31.037 C0.358,29.515 0.358,27.048 1.880,25.526 L25.762,1.644 C27.284,0.122 29.752,0.122 31.274,1.644 C32.795,3.166 32.795,5.633 31.274,7.155 Z",
              }),
            ]
          ),
          m(
            "use",
            {
              class: "bot",
              "xlink:href": "#arrow-btn-br",
              "transform-origin": "16.1% 55%",
            },
            [
              m("path", {
                id: "arrow-btn-br",
                "transform-origin": "16.1% 55%",
                d: "M1.880,41.954 C3.402,40.432 5.870,40.432 7.392,41.954 L31.274,65.836 C32.795,67.358 32.795,69.825 31.274,71.347 C29.752,72.869 27.284,72.869 25.762,71.347 L1.880,47.465 C0.358,45.943 0.358,43.476 1.880,41.954 Z",
              }),
            ]
          ),
        ]),
      ],
      -1
    )
  ),
  co = [uo],
  fo = ae({
    __name: "LeftArrow",
    props: { btnprev: null },
    setup(i) {
      const e = i,
        t = () => {
          e.btnprev();
        };
      return (n, s) => (
        P(),
        I(
          "div",
          { class: "arrowBtn", "data-cursor": "pointer", onClick: t },
          co
        )
      );
    },
  });
const fn = Ce(fo, [["__scopeId", "data-v-1a707a3b"]]),
  ho = (i) => (Ue("data-v-9c3b3a5b"), (i = i()), Ge(), i),
  po = ho(() =>
    m(
      "svg",
      {
        viewBox: "0 0 103 103",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        "data-cursor": "pointer",
      },
      [
        m("circle", {
          cx: "67",
          cy: "51.5",
          r: "4.5",
          class: "dot",
          "transform-origin": "66% 50%",
          transform: "scale(0)",
        }),
        m("g", { transform: "translate(35,15)" }, [
          m(
            "use",
            {
              class: "top",
              "xlink:href": "#arrow-btn-tl",
              "transform-origin": "16.1% 15.9%",
            },
            [
              m("path", {
                id: "arrow-btn-tl",
                "transform-origin": "16.1% 15.9%",
                d: "M30.833,30.926 C29.311,32.448 26.844,32.448 25.322,30.926 L1.440,7.044 C-0.082,5.523 -0.082,3.055 1.440,1.533 C2.962,0.011 5.429,0.011 6.951,1.533 L30.833,25.415 C32.355,26.937 32.355,29.405 30.833,30.926 Z",
              }),
            ]
          ),
          m(
            "use",
            {
              class: "bot",
              "xlink:href": "#arrow-btn-bl",
              "transform-origin": "16.1% 55%",
            },
            [
              m("path", {
                id: "arrow-btn-bl",
                "transform-origin": "16.1% 55%",
                d: "M1.440,65.725 L25.322,41.843 C26.844,40.321 29.311,40.321 30.833,41.843 C32.355,43.365 32.355,45.832 30.833,47.354 L6.951,71.236 C5.429,72.758 2.962,72.758 1.440,71.236 C-0.082,69.714 -0.082,67.247 1.440,65.725 Z",
              }),
            ]
          ),
        ]),
      ],
      -1
    )
  ),
  vo = [po],
  mo = ae({
    __name: "RightArrow",
    props: { btnnext: null },
    setup(i) {
      const e = i,
        t = () => {
          e.btnnext();
        };
      return (n, s) => (
        P(),
        I(
          "div",
          { class: "arrowBtn", "data-cursor": "pointer", onClick: t },
          vo
        )
      );
    },
  });
const hn = Ce(mo, [["__scopeId", "data-v-9c3b3a5b"]]),
  go = { id: "section-media" },
  yo = ae({
    __name: "Section5_Fifth",
    setup(i) {
      const e = L(),
        t = () => {
          e.value.arrowBtnPrev();
        },
        n = () => {
          e.value.arrowBtnNext();
        };
      return (s, o) => {
        const r = fn,
          a = ao;
        return (
          P(),
          I("section", go, [
            N(r, { id: "arrow-btn-prev", btnprev: t }),
            N(a, { ref_key: "Swiper", ref: e }, null, 512),
            N(hn, { id: "arrow-btn-next", btnnext: n }),
          ])
        );
      };
    },
  });
const Co = Ce(yo, [["__scopeId", "data-v-66581bc2"]]),
  bo = { class: "canvas-container" },
  _o = ["width", "height"],
  wo = ae({
    __name: "Lizi",
    props: {
      canvasRect: null,
      logos: null,
      ParticlesBoolean: { type: Boolean },
    },
    setup(i, { expose: e }) {
      const t = i,
        n = L(0);
      let s = t.logos;
      const o = G([]);
      let r = L();
      const a = L(null);
      let l = L(null),
        u = L();
      const c = t.canvasRect.width,
        d = t.canvasRect.height,
        f = 30,
        p = 1 / f,
        h = 40,
        g = 0.95;
      class y {
        constructor(T, B, D, z) {
          Q(this, "x");
          Q(this, "y");
          Q(this, "totalX");
          Q(this, "totalY");
          Q(this, "mx");
          Q(this, "my");
          Q(this, "vx");
          Q(this, "vy");
          Q(this, "time");
          Q(this, "r");
          Q(this, "color");
          Q(this, "opacity");
          (this.x = (Math.random() * c) >> 0),
            (this.y = (Math.random() * d) >> 0),
            (this.totalX = T),
            (this.totalY = B),
            (this.time = D),
            (this.r = 1.2),
            (this.color = [...z]),
            (this.opacity = 0);
        }
        draw() {
          (l.value.fillStyle = `rgba(${this.color.toString()})`),
            l.value.fillRect(this.x, this.y, this.r * 2, this.r * 2),
            l.value.fill();
        }
        update(T, B) {
          if (
            ((this.mx = this.totalX - this.x),
            (this.my = this.totalY - this.y),
            (this.vx = this.mx / this.time),
            (this.vy = this.my / this.time),
            T && B)
          ) {
            let D = T - this.x,
              z = B - this.y,
              V = Math.sqrt(D ** 2 + z ** 2),
              U = h / V;
            U = U > 7 ? 7 : U;
            let F = Math.atan2(z, D),
              A = Math.cos(F),
              M = Math.sin(F),
              O = A * U * -g,
              W = M * U * -g;
            (this.vx += O), (this.vy += W);
          }
          (this.x += this.vx),
            (this.y += this.vy),
            this.opacity < 1 && (this.opacity += p);
        }
        change(T, B, D) {
          (this.totalX = T), (this.totalY = B), (this.color = [...D]);
        }
      }
      class E {
        constructor(T, B) {
          Q(this, "src");
          Q(this, "name");
          Q(this, "particleData");
          (this.src = T), (this.name = B), (this.particleData = []);
          let D = new Image();
          (D.crossOrigin = ""),
            (D.src = T),
            (D.onload = () => {
              const z = document.createElement("canvas"),
                V = z.getContext("2d"),
                U = c,
                F = ~~(c * (D.height / D.width));
              (z.width = U),
                (z.height = F),
                V == null || V.drawImage(D, 0, 0, U, F);
              const A = V == null ? void 0 : V.getImageData(0, 0, U, F).data;
              V == null || V.clearRect(0, 0, c, d);
              for (let M = 0; M < F; M += 5)
                for (let O = 0; O < U; O += 5) {
                  const W = (O + M * U) * 4,
                    Me = A[W],
                    We = A[W + 1],
                    Pe = A[W + 2],
                    ot = A[W + 3];
                  if (Me + We + Pe + ot >= 100) {
                    const At = new y(O, M, f, [Me, We, Pe, ot]);
                    this.particleData.push(At);
                  }
                }
              B === "rhodes" && x(u.value, this);
            });
        }
      }
      class C {
        constructor(T) {
          Q(this, "canvasEle");
          Q(this, "ctx");
          Q(this, "width");
          Q(this, "height");
          Q(this, "ParticleArr");
          Q(this, "mouseX");
          Q(this, "mouseY");
          (this.canvasEle = T),
            (this.ctx = T.getContext("2d")),
            (this.width = T.width),
            (this.height = T.height),
            (this.ParticleArr = []),
            this.canvasEle.addEventListener("mousemove", (B) => {
              const { left: D, top: z } =
                  this.canvasEle.getBoundingClientRect(),
                { clientX: V, clientY: U } = B;
              (this.mouseX = V - D), (this.mouseY = U - z);
            }),
            (this.canvasEle.onmouseleave = () => {
              (this.mouseX = 0), (this.mouseY = 0);
            });
        }
        changeImg(T) {
          if (this.ParticleArr.length) {
            if (!T) return !1;
            let B = T.particleData,
              D = B.length,
              z = this.ParticleArr,
              V = z.length;
            for (let F = 0; F < D; F++) {
              const { totalX: A, totalY: M, color: O } = B[F];
              z[F] ? z[F].change(A, M, O) : (z[F] = new y(A, M, f, O));
            }
            D < V && (this.ParticleArr = z.splice(0, D)),
              (z = this.ParticleArr);
            let U = z.length;
            for (; U; ) {
              let F = ~~(Math.random() * U--),
                A = z[F],
                { totalX: M, totalY: O, color: W } = A;
              (A.totalX = z[U].totalX),
                (A.totalY = z[U].totalY),
                (A.color = z[U].color),
                (z[U].totalX = M),
                (z[U].totalY = O),
                (z[U].color = W);
            }
          } else
            this.ParticleArr = T.particleData.map(
              (B) => new y(B.totalX, B.totalY, f, B.color)
            );
        }
        drawCanvas() {
          this.ctx.clearRect(0, 0, this.width, this.height),
            this.ParticleArr.forEach((T) => {
              T.update(this.mouseX, this.mouseY), T.draw();
            }),
            window.requestAnimationFrame(() => this.drawCanvas());
        }
      }
      let b = L(),
        _ = L();
      function x(k, T) {
        k.changeImg(T),
          (_.value = k),
          t.ParticlesBoolean
            ? (clearInterval(b.value),
              (b.value = setInterval(() => {
                n.value++,
                  k.changeImg(o[n.value]),
                  n.value >= 3 && (n.value = -1);
              }, 5e3)))
            : k.changeImg(o[n.value]),
          (r.value = T);
      }
      for (let k of s) o.push(new E(k.url, k.label));
      const w = (k) => {
          _.value.changeImg(o[k]);
        },
        S = () => {
          (_.value.ParticleArr = []),
            t.ParticlesBoolean && clearInterval(b.value);
        };
      return (
        ke(async () => {
          a.value &&
            ((l.value = a.value.getContext("2d")),
            (u.value = new C(a.value)),
            u.value.drawCanvas());
        }),
        we(
          () => t.logos,
          (k, T) => {
            for (let B of k) o.push(new E(B.url, B.label));
          },
          { deep: !0 }
        ),
        Tt(() => {
          clearInterval(b.value);
        }),
        e({ ChoiceImg: w, clearCanvas: S }),
        (k, T) => (
          P(),
          I("div", bo, [
            m(
              "canvas",
              { ref_key: "canvas", ref: a, width: v(c), height: v(d) },
              null,
              8,
              _o
            ),
          ])
        )
      );
    },
  });
const ci = Ce(wo, [["__scopeId", "data-v-2fac201b"]]),
  di = (i) => (Ue("data-v-9cfbcc6d"), (i = i()), Ge(), i),
  Eo = { class: "storyDetailView" },
  xo = di(() =>
    m(
      "svg",
      {
        class: "svgDefs",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 70 70",
      },
      [
        m("defs", null, [
          m("path", {
            id: "close-br",
            d: "M62.324,70.228 L38.768,46.653 L38.768,39.894 L45.522,39.894 L69.077,63.469 L69.077,70.228 L62.324,70.228 Z",
          }),
          m("path", {
            id: "close-tr",
            d: "M38.768,31.269 L38.768,24.509 L62.324,0.935 L69.077,0.935 L69.077,7.694 L45.522,31.269 L38.768,31.269 Z",
          }),
          m("path", {
            id: "close-bl",
            d: "M0.604,70.228 L0.604,63.469 L24.159,39.894 L30.913,39.894 L30.913,46.653 L7.357,70.228 L0.604,70.228 Z",
          }),
          m("path", {
            id: "close-tl",
            d: "M0.604,7.694 L0.604,0.935 L7.357,0.935 L30.913,24.509 L30.913,31.269 L24.159,31.269 L0.604,7.694 Z",
          }),
        ]),
      ],
      -1
    )
  ),
  So = { class: "storyDetailWapper" },
  Fo = { class: "storyClose" },
  To = di(() => m("div", { class: "vertical" }, null, -1)),
  Bo = di(() => m("div", { class: "horizontal" }, null, -1)),
  ko = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "-10 -10 90 90",
    "data-cursor": "pointer",
  },
  Do = { class: "storyInfo" },
  Ao = { key: 0, class: "storyInfoNameWapper" },
  Mo = { key: 0, class: "storyInfoName" },
  Po = { class: "TextContent" },
  Oo = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 534 70",
  },
  Lo = { class: "storyDetailInfoNameText", x: "0", y: "60", "font-size": "68" },
  zo = { key: 0, class: "storyInfoNameEN" },
  Io = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 495 30",
  },
  Ro = { x: "0", y: "27", "font-size": "30", class: "storyEnText" },
  $o = { class: "storyInfoDesc" },
  No = { key: 0, class: "wrapperDown" },
  Ho = { key: 0, class: "storyDetaInfoDesc" },
  Vo = ae({
    __name: "Section4_View",
    props: {
      ListAppear: { type: Boolean },
      ImgMove: null,
      Top: null,
      Rights: null,
      LiziChild: null,
    },
    emits: ["update:ListAppear", "update:ImgMove"],
    setup(i, { emit: e }) {
      const t = i;
      ht((T) => ({
        "0be118da": v(g),
        "79701f5b": v(y),
        "6b337d81": v(h),
        "45d98ab9": v(C),
      }));
      function n(T) {
        return new Promise((B) => setTimeout(B, T));
      }
      const s = G([
          {
            id: 0,
            name: "\u6E90\u77F3",
            en: "ORIGINIYMS",
            desc: "\u5927\u5730\u88AB\u8D77\u56E0\u4E0D\u660E\u7684\u5929\u707E\u56DB\u5904\u8086\u8650\uFF0C\u7ECF\u7531\u5929\u707E\u5E2D\u5377\u8FC7\u7684\u571F\u5730\u4E0A\u51FA\u73B0\u4E86\u5927\u91CF\u7684\u795E\u79D8\u77FF\u7269\u2014\u2014\u201C\u6E90\u77F3\u201D\u3002\u4F9D\u8D56\u4E8E\u6280\u672F\u7684\u8FDB\u6B65\uFF0C\u6E90\u77F3\u8574\u542B\u7684\u80FD\u91CF\u6295\u5165\u5DE5\u4E1A\u540E\u4F7F\u5F97\u6587\u660E\u987A\u5229\u8FC8\u5165\u73B0\u4EE3\uFF0C\u4E0E\u6B64\u540C\u65F6\uFF0C\u6E90\u77F3\u672C\u8EAB\u4E5F\u50AC\u751F\u51FA\u201C\u611F\u67D3\u8005\u201D\u7684\u5B58\u5728\u3002",
          },
          {
            id: 1,
            name: "\u6E90\u77F3\u6280\u827A",
            en: "ORIGINIYM ARTS",
            desc: "\u6E90\u77F3\u88AB\u53D1\u73B0\u4E4B\u540E\uFF0C\u4EBA\u4EEC\u53D1\u6398\u51FA\u4E00\u79CD\u901A\u8FC7\u5B83\u6765\u65BD\u653E\u4E00\u7CFB\u5217\u4EE4\u7269\u8D28\u6539\u53D8\u539F\u6709\u6027\u72B6\u7684\u6280\u672F\uFF0C\u8FD9\u79CD\u6280\u672F\u88AB\u79F0\u4E3A\u6E90\u77F3\u6280\u827A\uFF0C\u5E38\u88AB\u4FD7\u79F0\u4E3A\u201C\u6CD5\u672F\u201D\u3002\u6E90\u77F3\u6280\u827A\u6240\u8FD0\u7528\u7684\u80FD\u6E90\uFF0C\u4E00\u822C\u88AB\u8BA4\u4E3A\u6765\u81EA\u4E8E\u6E90\u77F3\u672C\u8EAB\u3002\u800C\u4EBA\u662F\u5426\u80FD\u65BD\u653E\u6CD5\u672F\uFF0C\u4EE5\u53CA\u6240\u80FD\u65BD\u653E\u6CD5\u672F\u7684\u5F62\u5F0F\u3001\u5F3A\u5EA6\u3001\u6548\u679C\u7B49\uFF0C\u901A\u5E38\u53D7\u5230\u5148\u5929\u5177\u5907\u7684\u7D20\u8D28\u3001\u540E\u5929\u5BF9\u6E90\u77F3\u6280\u827A\u7684\u5B66\u4E60\u80FD\u529B\u8FD9\u4E24\u65B9\u9762\u56E0\u7D20\u7684\u5236\u7EA6\u3002",
          },
          {
            id: 2,
            name: "\u6574\u5408\u8FD0\u52A8",
            en: "REUNION",
            desc: "\u65E0\u79CD\u65CF\u7ACB\u573A\uFF0C\u6781\u7AEF\u6392\u5916\u7684\u611F\u67D3\u8005\u7EC4\u7EC7\u3002\u4ED6\u4EEC\u5BA3\u79F0\u201C\u611F\u67D3\u8005\u5E94\u5BF9\u81EA\u5DF1\u7684\u8EAB\u4EFD\u611F\u5230\u9A84\u50B2\uFF0C\u79EF\u6781\u53BB\u83B7\u53D6\u5E76\u4F7F\u7528\u5C5E\u4E8E\u81EA\u5DF1\u7684\u529B\u91CF\u201D\u3002\u8BD5\u56FE\u7528\u6700\u539F\u59CB\u7684\u624B\u6BB5\u53BB\u4E89\u593A\u4E16\u754C\u7684\u516C\u6B63\u3002\u4EE5\u67D0\u5EA7\u88AB\u6467\u6BC1\u7684\u4F1F\u5927\u57CE\u5E02\u4E3A\u5F00\u7AEF\uFF0C\u533B\u7597\u673A\u6784\u201C\u7F57\u5FB7\u5C9B\u201D\u7684\u7A81\u7136\u4ECB\u5165\uFF0C\u4EE4\u6574\u4E2A\u4E8B\u6001\u5411\u7740\u672A\u77E5\u53D1\u5C55\u3002",
          },
          {
            id: 3,
            name: "\u611F\u67D3\u8005",
            en: "INFECTED",
            desc: "\u88AB\u6E90\u77F3\u6240\u611F\u67D3\u7684\u4EBA\u3002\u7406\u8BBA\u81F4\u6B7B\u7387100% \uFF0C\u6B7B\u4EA1\u65F6\u5B58\u5728\u6269\u6563\u4F20\u67D3\u6027\u4EE5\u53CA\u6F5C\u5728\u5371\u9669\u80FD\u529B\uFF0C\u662F\u5404\u56FD\u9694\u79BB\u9A71\u9010\u7684\u76EE\u6807\u3002\u957F\u4E45\u4EE5\u6765\uFF0C\u6CA1\u4EBA\u544A\u8BC9\u4ED6\u4EEC\u8BE5\u5982\u4F55\u6E21\u8FC7\u4F59\u751F\uFF0C\u5982\u4ECA\u4F34\u968F\u7740\u4E00\u4F4D\u98A0\u8986\u8005\u7684\u51FA\u73B0\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u611F\u67D3\u8005\u88AB\u7EB3\u5165\u4E00\u573A\u540D\u4E3A\u201C\u6574\u5408\u8FD0\u52A8\u201D\u7684\u53CD\u6297\u6D6A\u6F6E\u3002",
          },
          {
            id: 4,
            name: "\u79FB\u52A8\u57CE\u90A6",
            en: "NOMADIC CITY",
            desc: "\u5EFA\u9020\u5728\u53EF\u79FB\u52A8\u8BBE\u5907\u4E0A\u7684\u57CE\u5E02\u3002\u9891\u7E41\u53D1\u751F\u4E14\u7834\u574F\u529B\u5DE8\u5927\u7684\u5929\u707E\uFF0C\u8FEB\u4F7F\u51E0\u4E4E\u6240\u6709\u7684\u56FD\u5BB6\uFF0C\u90FD\u9700\u8981\u91C7\u7528\u5B9A\u671F\u8FC1\u79FB\u5BB6\u56ED\u4E0E\u805A\u843D\u7684\u65B9\u5F0F\u8FDB\u884C\u8EB2\u907F\u3002\u800C\u79FB\u52A8\u57CE\u5E02\uFF0C\u6B63\u662F\u5728\u8FD9\u79CD\u9700\u6C42\u4E0B\u6162\u6162\u8BDE\u751F\u7684\u3002\u4EBA\u4EEC\u5728\u8FC1\u5F99\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5C1D\u8BD5\u5C06\u5EFA\u7B51\u548C\u79CD\u79CD\u88C5\u7F6E\u5B89\u8BBE\u5728\u79FB\u52A8\u8BBE\u5907\u4E4B\u4E0A\uFF0C\u5E76\u4E0D\u65AD\u5730\u6269\u5927\u8F7D\u5177\u7684\u89C4\u6A21\u3002\u5728\u6587\u660E\u4E0E\u6280\u672F\u7684\u6F14\u53D8\u4E4B\u4E0B\uFF0C\u4EBA\u4EEC\u6700\u7EC8\u521B\u9020\u51FA\u4E86\u5341\u5206\u5E9E\u5927\u7684\u79FB\u52A8\u57CE\u5E02",
          },
          {
            id: 5,
            name: "\u7F57\u5FB7\u5C9B",
            en: "RHODES ISLAND",
            desc: "\u7F57\u5FB7\u5C9B\u5236\u836F\u516C\u53F8\u4F5C\u4E3A\u611F\u67D3\u8005\u95EE\u9898\u4E13\u5BB6\uFF0C\u8058\u7528\u611F\u67D3\u8005\uFF0C\u6DF1\u5165\u5371\u9669\u5730\u533A\uFF0C\u901A\u8FC7\u79CD\u79CD\u624B\u6BB5\uFF0C\u5DF2\u7ECF\u6210\u529F\u89E3\u51B3\u4E86\u6570\u8D77\u611F\u67D3\u8005\u5F15\u53D1\u7684\u4E8B\u4EF6\u3002\u800C\u4ECA\uFF0C\u4ED6\u4EEC\u5C06\u9762\u5BF9\u53F2\u65E0\u524D\u4F8B\u7684\u611F\u67D3\u8005\u66B4\u4E71\u3002\u5728\u5404\u4E2A\u52BF\u529B\u95F4\u6E38\u8D70\uFF0C\u53D1\u6398\u4E0D\u4E3A\u4EBA\u77E5\u7684\u5185\u5E55\uFF0C\u62B5\u6321\u611F\u67D3\u8005\u7684\u75AF\u72C2\u8FDB\u653B\uFF0C\u4F60\u7684\u51B3\u7B56\u5C06\u51B3\u5B9A\u7F57\u5FB7\u5C9B\u7684\u65B9\u5411\u3002",
          },
        ]),
        o = G([!0, !0]),
        r = L();
      let a = +localStorage.getItem("ParticleId"),
        l = L(!0);
      const u = async () => {
          l.value &&
            ((l.value = !1),
            (r.value = "StaffRight"),
            (o[0] = !1),
            await n(100),
            (o[1] = !1),
            a == 0 ? (a = s.length - 1) : a--,
            t.LiziChild.ChoiceImg(a),
            await n(1e3),
            (o[0] = !0),
            await n(100),
            (o[1] = !0),
            (l.value = !0));
        },
        c = async () => {
          l.value &&
            ((l.value = !1),
            (r.value = "StaffBottom"),
            (o[0] = !1),
            await n(100),
            (o[1] = !1),
            a == s.length - 1 ? (a = 0) : a++,
            t.LiziChild.ChoiceImg(a),
            await n(1e3),
            (o[0] = !0),
            await n(100),
            (o[1] = !0),
            (l.value = !0));
        };
      let d = G([!1, !1, !1, !1]);
      const f = async () => {
          (d[3] = !0),
            await n(100),
            (d[2] = !0),
            await n(100),
            (d[1] = !0),
            await n(100),
            (d[0] = !0);
        },
        p = async () => {
          (d[3] = !1),
            await n(100),
            (d[2] = !1),
            await n(100),
            (d[1] = !1),
            await n(100),
            (d[0] = !1);
        };
      let h = L("KF_horizotal_show"),
        g = L("KF_vertical_show_2"),
        y = L("0.6s"),
        E = L(!1),
        C = L("storyInfoDis"),
        b = L(!1),
        _ = L(!1),
        x = L(!1),
        w = L(!1),
        S = L(!1);
      const k = async () => {
        localStorage.setItem("ListAppear", "true"),
          S.value &&
            ((E.value = !1),
            (b.value = !1),
            (_.value = !1),
            (x.value = !1),
            (h.value = "KF_horizotal_hide"),
            (g.value = "KF_vertical_hide"),
            (y.value = "0s"),
            await n(500),
            (C.value = "storyInfoHide"),
            (w.value = !1),
            await n(500),
            e("update:ListAppear", !0),
            await n(100),
            t.Top(),
            t.LiziChild.ChoiceImg(0));
      };
      return (
        ke(async () => {
          e("update:ImgMove", "60%"),
            (h.value = "KF_horizotal_show"),
            (g.value = "KF_vertical_show_2"),
            await n(800),
            (E.value = !0),
            (y.value = "0.6s"),
            (C.value = "storyInfoDis"),
            (w.value = !0),
            await n(100),
            (b.value = !0),
            (_.value = !0),
            await n(400),
            (x.value = !0),
            await n(500),
            (S.value = !0);
        }),
        (T, B) => {
          const D = fn,
            z = hn;
          return (
            P(),
            I("div", Eo, [
              xo,
              N(
                te,
                { name: "Arrow" },
                {
                  default: q(() => [
                    v(w)
                      ? (P(), Re(D, { key: 0, class: "leftBtn", btnprev: u }))
                      : X("", !0),
                  ]),
                  _: 1,
                }
              ),
              m("div", So, [
                m("div", Fo, [
                  To,
                  Bo,
                  N(
                    te,
                    { name: "CloseBtn" },
                    {
                      default: q(() => [
                        v(E)
                          ? (P(),
                            I(
                              "div",
                              {
                                key: 0,
                                class: "storyCloseBtn",
                                onMousemove: f,
                                onMouseleave: p,
                                onClick: k,
                              },
                              [
                                (P(),
                                I("svg", ko, [
                                  m(
                                    "use",
                                    {
                                      class: le(v(d)[0] ? "usehover" : ""),
                                      "xlink:href": "#close-br",
                                      "data-cursor": "pointer",
                                    },
                                    null,
                                    2
                                  ),
                                  m(
                                    "use",
                                    {
                                      class: le(v(d)[1] ? "usehover" : ""),
                                      "xlink:href": "#close-tr",
                                      "data-cursor": "pointer",
                                    },
                                    null,
                                    2
                                  ),
                                  m(
                                    "use",
                                    {
                                      class: le(v(d)[2] ? "usehover" : ""),
                                      "xlink:href": "#close-bl",
                                      "data-cursor": "pointer",
                                    },
                                    null,
                                    2
                                  ),
                                  m(
                                    "use",
                                    {
                                      class: le(v(d)[3] ? "usehover" : ""),
                                      "xlink:href": "#close-tl",
                                      "data-cursor": "pointer",
                                    },
                                    null,
                                    2
                                  ),
                                ])),
                              ],
                              32
                            ))
                          : X("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                N(
                  te,
                  { name: v(C) },
                  {
                    default: q(() => [
                      m("div", Do, [
                        N(
                          te,
                          { name: v(r) },
                          {
                            default: q(() => [
                              v(o)[0]
                                ? (P(),
                                  I("div", Ao, [
                                    N(
                                      te,
                                      { name: "InfoName" },
                                      {
                                        default: q(() => [
                                          v(b)
                                            ? (P(),
                                              I("div", Mo, [
                                                m("div", Po, [
                                                  (P(),
                                                  I("svg", Oo, [
                                                    m(
                                                      "text",
                                                      Lo,
                                                      Y(v(s)[v(a)].name),
                                                      1
                                                    ),
                                                  ])),
                                                ]),
                                              ]))
                                            : X("", !0),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                    N(
                                      te,
                                      { name: "InfoNameEN" },
                                      {
                                        default: q(() => [
                                          v(_)
                                            ? (P(),
                                              I("div", zo, [
                                                (P(),
                                                I("svg", Io, [
                                                  m(
                                                    "text",
                                                    Ro,
                                                    Y(v(s)[0].en),
                                                    1
                                                  ),
                                                ])),
                                              ]))
                                            : X("", !0),
                                        ]),
                                        _: 1,
                                      }
                                    ),
                                  ]))
                                : X("", !0),
                            ]),
                            _: 1,
                          },
                          8,
                          ["name"]
                        ),
                        m("div", $o, [
                          N(
                            te,
                            { name: v(r) },
                            {
                              default: q(() => [
                                v(o)[1]
                                  ? (P(),
                                    I("div", No, [
                                      N(
                                        te,
                                        { name: "DescHide" },
                                        {
                                          default: q(() => [
                                            v(x)
                                              ? (P(),
                                                I(
                                                  "div",
                                                  Ho,
                                                  Y(v(s)[v(a)].desc),
                                                  1
                                                ))
                                              : X("", !0),
                                          ]),
                                          _: 1,
                                        }
                                      ),
                                    ]))
                                  : X("", !0),
                              ]),
                              _: 1,
                            },
                            8,
                            ["name"]
                          ),
                        ]),
                      ]),
                    ]),
                    _: 1,
                  },
                  8,
                  ["name"]
                ),
              ]),
              N(
                te,
                { name: "Arrow" },
                {
                  default: q(() => [
                    v(w)
                      ? (P(), Re(z, { key: 0, class: "rightBtn", btnnext: c }))
                      : X("", !0),
                  ]),
                  _: 1,
                }
              ),
            ])
          );
        }
      );
    },
  });
const jo = Ce(Vo, [["__scopeId", "data-v-9cfbcc6d"]]),
  qo = "" + new URL("https://pic3.zhimg.com/80/v2-4947430e910af6440d6edbdd19874752_720w.webp", import.meta.url).href,
  Uo = "" + new URL("https://pic1.zhimg.com/80/v2-1b953078f2e7ca3994328fb7a4fd9670_720w.webp", import.meta.url).href,
  Go = "" + new URL("https://pic3.zhimg.com/v2-ed844c59edf65184004363ea6766c7de_r.jpg", import.meta.url).href,
  Wo = "" + new URL("https://free-img.400040.xyz/4/2024/08/07/66b370a7dd23a.png", import.meta.url).href,
  Xo = "" + new URL("https://free-img.400040.xyz/4/2024/08/07/66b370b2d1a39.png", import.meta.url).href,
  Yo = "" + new URL("https://pic3.zhimg.com/v2-ed844c59edf65184004363ea6766c7de_r.jpg", import.meta.url).href,
  Zo = "" + new URL("https://pic4.zhimg.com/80/v2-d9884f32711e19e80979eac58e943897_720w.webp.png", import.meta.url).href,
  Ko = "" + new URL("https://pic3.zhimg.com/80/v2-d25c4f0b472b19779783fcb6312b6ebe_720w.webp", import.meta.url).href,
  Jo = "" + new URL("https://pic4.zhimg.com/80/v2-18a40e601d3ebb1e852e812ed663bf6f_720w.webp", import.meta.url).href,
  Qo = "" + new URL("https://pic2.zhimg.com/80/v2-ebd7145b6cfd3291169b1c834e6f89cd_720w.webp", import.meta.url).href,
  tt = (i, e, t) => (
    (e.length = 0),
    t
      ? []
      : (i.forEach((n) => {
          let s = new URL(
            Object.assign({
              "../assets/img/Two/lizi/logo_rhine.png": Zo,
              "../assets/img/Two/lizi/logo_rhodes.png": Ko,
              "../assets/img/Two/lizi/logo_yan.png": Jo,
            })[`../assets/img/Two/lizi/logo_${n.label}.png`],
            self.location
          ).href;
          n.label == "penguin"
            ? (n.url = new URL(
                Object.assign({
                  "../assets/img/Two/lizi/logo_penguin.webp": Qo,
                })[`../assets/img/Two/lizi/logo_${n.label}.webp`],
                self.location
              ).href)
            : (n.url = s);
        }),
        i)
  ),
  kt = ys("Off", {
    state: () => ({
      TwoParticlesLogo: !0,
      ThreeParticlesLogo: !0,
      FourParticlesLogo: !0,
      ParticlesOff: 0,
    }),
    getters: {},
    actions: {},
  }),
  er = { key: 0, class: "storyListWapper" },
  tr = { class: "storyList" },
  ir = ["onMousemove", "onClick"],
  nr = { class: "storyItemName" },
  sr = { class: "storyItemEn" },
  or = {
    class: "storyItemNameBack",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 800 125",
    "data-cursor": "pointer",
  },
  rr = { x: "800", y: "95", "text-anchor": "end", "data-cursor": "pointer" },
  ar = ["src"],
  lr = { class: "particle" },
  ur = ae({
    __name: "Section4_Four",
    setup(i) {
      ht((C) => ({ "7fe18b17": v(o) }));
      const e = kt(),
        t = G({ width: 500, height: 500 });
      let n = G([
          { label: "rhodes", url: "" },
          { label: "rhine", url: "" },
          { label: "yan", url: "" },
          { label: "penguin", url: "" },
          { label: "rhine", url: "" },
          { label: "yan", url: "" },
        ]),
        s = G([]);
      s.push(...tt(n, s, e.FourParticlesLogo)),
        we(
          () => e.FourParticlesLogo,
          (C, b) => {
            s.push(...tt(n, s, C)),
              e.FourParticlesLogo && r.value.clearCanvas();
          }
        );
      const o = L("10%"),
        r = L(),
        a = G([
          {
            id: 0,
            name: "\u6E90\u77F3",
            en: "ORIGINIYMS",
            imgURL: "",
            hover: !1,
          },
          {
            id: 1,
            name: "\u6E90\u77F3\u6280\u827A",
            en: "ORIGINIYM ARTS",
            imgURL: "",
            hover: !1,
          },
          {
            id: 2,
            name: "\u6574\u5408\u8FD0\u52A8",
            en: "REUNION",
            imgURL: "",
            hover: !1,
          },
          {
            id: 3,
            name: "\u611F\u67D3\u8005",
            en: "INFECTED",
            imgURL: "",
            hover: !1,
          },
          {
            id: 4,
            name: "\u79FB\u52A8\u57CE\u90A6",
            en: "NOMADIC CITY",
            imgURL: "",
            hover: !1,
          },
          {
            id: 5,
            name: "\u7F57\u5FB7\u5C9B",
            en: "RHODES ISLAND",
            imgURL: "",
            hover: !1,
          },
        ]);
      for (let C = 0; C < a.length; C++) {
        let b = new URL(
          Object.assign({
            "../../assets/img/Four/list_1.png": qo,
            "../../assets/img/Four/list_2.png": Uo,
            "../../assets/img/Four/list_3.png": Go,
            "../../assets/img/Four/list_4.png": Wo,
            "../../assets/img/Four/list_5.png": Xo,
            "../../assets/img/Four/list_6.png": Yo,
          })[`../../assets/img/Four/list_${C + 1}.png`],
          self.location
        ).href;
        a[C].imgURL = b;
      }
      const l = L([]);
      let u = 50;
      const c = (C, b, _) => {
          _.forEach((S) => {
            S.hover = !1;
          }),
            (_[b].hover = !0);
          let x = C.clientX,
            w = C.clientY;
          switch (b) {
            case 0:
              u = 50;
              break;
            case 1:
              u = 61;
              break;
            case 2:
              u = 72;
              break;
            case 3:
              u = 83;
              break;
            case 4:
              u = 94;
              break;
            case 5:
              u = 105;
              break;
          }
          window.requestAnimationFrame(() => {
            (l.value[b].style.left = x + "px"),
              (l.value[b].style.top = w + "px"),
              (l.value[b].style.transform = `translate(-50%,-${u}%)`);
          });
        },
        d = (C) => {
          C.forEach((b) => {
            b.hover = !1;
          });
        },
        f = G({
          ListAppear: !0,
          ListHide: [!1, !1, !1, !1, !1, !1],
          num: 0,
          throttle: !0,
          Rights: 0,
        }),
        p = async (C) => {
          f.throttle &&
            (y(!1),
            localStorage.setItem("ListAppear", "false"),
            localStorage.setItem("ParticleId", C.toString())),
            r.value.ChoiceImg(C);
        },
        h = L([]),
        g = () => {
          let C = L(0);
          h.value.forEach((b) => {
            (b.style.top = C.value + "rem"), (C.value += 7.7857);
          }),
            y(!0),
            (o.value = "10%");
        },
        y = (C) => {
          let b = setInterval(() => {
            (f.ListHide[f.num] = C),
              f.num++,
              f.num > a.length - 1 &&
                (clearInterval(b),
                (f.num = 0),
                setTimeout(() => {
                  (f.ListAppear = C), (f.throttle = !0);
                }, 500));
          }, 100);
        },
        E = () => {
          localStorage.getItem("ListAppear") == null &&
            localStorage.setItem("ListAppear", "true"),
            (f.ListAppear = localStorage.getItem("ListAppear") == "true"),
            f.ListAppear && g();
        };
      return (
        ke(() => {
          E();
        }),
        (C, b) => {
          const _ = jo,
            x = ci;
          return (
            P(),
            I(
              ce,
              null,
              [
                v(f).ListAppear
                  ? (P(),
                    I("div", er, [
                      m("ol", tr, [
                        N(
                          et,
                          { name: "storyitem", appear: "" },
                          {
                            default: q(() => [
                              (P(!0),
                              I(
                                ce,
                                null,
                                Ee(v(a), (w) =>
                                  fe(
                                    (P(),
                                    I(
                                      "li",
                                      {
                                        key: w.id,
                                        class: "storyItem",
                                        ref_for: !0,
                                        ref_key: "StoryLi",
                                        ref: h,
                                        onMousemove: (S) => c(S, w.id, v(a)),
                                        onMouseout:
                                          b[0] || (b[0] = (S) => d(v(a))),
                                        onClick: (S) => p(w.id),
                                      },
                                      [
                                        m("span", nr, Y(w.name), 1),
                                        m("span", sr, Y(w.en), 1),
                                        (P(),
                                        I("svg", or, [
                                          m("text", rr, Y(w.en), 1),
                                        ])),
                                        m(
                                          "div",
                                          {
                                            ref_for: !0,
                                            ref_key: "ImgDiv",
                                            ref: l,
                                            class: "imgdiv",
                                          },
                                          [
                                            w.hover
                                              ? (P(),
                                                I(
                                                  "img",
                                                  { key: 0, src: w.imgURL },
                                                  null,
                                                  8,
                                                  ar
                                                ))
                                              : X("", !0),
                                          ],
                                          512
                                        ),
                                      ],
                                      40,
                                      ir
                                    )),
                                    [[he, v(f).ListHide[w.id]]]
                                  )
                                ),
                                128
                              )),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                    ]))
                  : (P(),
                    Re(
                      _,
                      {
                        key: 1,
                        ListAppear: v(f).ListAppear,
                        "onUpdate:ListAppear":
                          b[1] || (b[1] = (w) => (v(f).ListAppear = w)),
                        ImgMove: v(o),
                        "onUpdate:ImgMove":
                          b[2] ||
                          (b[2] = (w) => (Cs(o) ? (o.value = w) : null)),
                        Top: g,
                        Rights: v(f).Rights,
                        LiziChild: v(r),
                      },
                      null,
                      8,
                      ["ListAppear", "ImgMove", "Rights", "LiziChild"]
                    )),
                m("div", lr, [
                  N(
                    x,
                    {
                      canvasRect: v(t),
                      logos: v(s),
                      ref_key: "LiziChild",
                      ref: r,
                    },
                    null,
                    8,
                    ["canvasRect", "logos"]
                  ),
                ]),
              ],
              64
            )
          );
        }
      );
    },
  });
const cr = Ce(ur, [["__scopeId", "data-v-4df7816c"]]),
  dr = "" + new URL("https://pic3.zhimg.com/80/v2-4ce2714c21f1e8974c07e0eb5c98b88a_720w.webp", import.meta.url).href,
  fr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: dr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  hr = "" + new URL("https://pic2.zhimg.com/80/v2-23b88c36fa2e00fe60772b89177c39f1_720w.webp", import.meta.url).href,
  pr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: hr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  vr = "" + new URL("https://pic4.zhimg.com/80/v2-f52bc0d9931b0680e0bd0f76570b032b_720w.webp", import.meta.url).href,
  mr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: vr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  gr = "" + new URL("https://pic2.zhimg.com/80/v2-32d9982c71765eb61a696d7c0c8bef55_720w.webp", import.meta.url).href,
  yr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: gr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Cr = "" + new URL("https://pic2.zhimg.com/80/v2-c5f7f03b9a3ee839639923383ebd5a59_720w.webp", import.meta.url).href,
  br = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Cr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  _r = "" + new URL("https://pic4.zhimg.com/80/v2-e568f8e45850a81a73955ae5c8b7d9e3_720w.webp", import.meta.url).href,
  wr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: _r },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Er = "" + new URL("https://pic2.zhimg.com/80/v2-29776cb05e3de56622fbb48529abc2a1_720w.webp", import.meta.url).href,
  xr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Er },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Sr = "" + new URL("https://pic2.zhimg.com/80/v2-e1840e58c4dc017f27948e72d64d10dd_720w.webp", import.meta.url).href,
  Fr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Sr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Tr = "" + new URL("https://pic2.zhimg.com/80/v2-8394d938cb8961f950241117bcca470d_720w.webp", import.meta.url).href,
  Br = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Tr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  kr = "" + new URL("https://pic4.zhimg.com/80/v2-ab0faf345980f569604c17ec68b68f47_720w.webp", import.meta.url).href,
  Dr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: kr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ar = "" + new URL("https://pic1.zhimg.com/80/v2-19657ca9d0d9c48a56b1a7b89ef1802c_720w.webp", import.meta.url).href,
  Mr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Ar },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Pr = "" + new URL("https://pic3.zhimg.com/80/v2-0517c3306fa3e634a1a4e3df1dbd2972_720w.webp", import.meta.url).href,
  Or = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Pr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Lr = "" + new URL("https://free-img.400040.xyz/4/2024/08/07/66b3740e26f4b.webp", import.meta.url).href,
  zr = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Lr },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  ge = (i) => new Promise((e) => setTimeout(e, i));
function Fi(i) {
  return (
    i !== null &&
    typeof i == "object" &&
    "constructor" in i &&
    i.constructor === Object
  );
}
function fi(i = {}, e = {}) {
  Object.keys(e).forEach((t) => {
    typeof i[t] > "u"
      ? (i[t] = e[t])
      : Fi(e[t]) && Fi(i[t]) && Object.keys(e[t]).length > 0 && fi(i[t], e[t]);
  });
}
const pn = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function be() {
  const i = typeof document < "u" ? document : {};
  return fi(i, pn), i;
}
const Ir = {
  document: pn,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(i) {
    return typeof setTimeout > "u" ? (i(), null) : setTimeout(i, 0);
  },
  cancelAnimationFrame(i) {
    typeof setTimeout > "u" || clearTimeout(i);
  },
};
function re() {
  const i = typeof window < "u" ? window : {};
  return fi(i, Ir), i;
}
function Rr(i) {
  const e = i.__proto__;
  Object.defineProperty(i, "__proto__", {
    get() {
      return e;
    },
    set(t) {
      e.__proto__ = t;
    },
  });
}
class Ve extends Array {
  constructor(e) {
    typeof e == "number" ? super(e) : (super(...(e || [])), Rr(this));
  }
}
function pt(i = []) {
  const e = [];
  return (
    i.forEach((t) => {
      Array.isArray(t) ? e.push(...pt(t)) : e.push(t);
    }),
    e
  );
}
function vn(i, e) {
  return Array.prototype.filter.call(i, e);
}
function $r(i) {
  const e = [];
  for (let t = 0; t < i.length; t += 1) e.indexOf(i[t]) === -1 && e.push(i[t]);
  return e;
}
function Nr(i, e) {
  if (typeof i != "string") return [i];
  const t = [],
    n = e.querySelectorAll(i);
  for (let s = 0; s < n.length; s += 1) t.push(n[s]);
  return t;
}
function $(i, e) {
  const t = re(),
    n = be();
  let s = [];
  if (!e && i instanceof Ve) return i;
  if (!i) return new Ve(s);
  if (typeof i == "string") {
    const o = i.trim();
    if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
      let r = "div";
      o.indexOf("<li") === 0 && (r = "ul"),
        o.indexOf("<tr") === 0 && (r = "tbody"),
        (o.indexOf("<td") === 0 || o.indexOf("<th") === 0) && (r = "tr"),
        o.indexOf("<tbody") === 0 && (r = "table"),
        o.indexOf("<option") === 0 && (r = "select");
      const a = n.createElement(r);
      a.innerHTML = o;
      for (let l = 0; l < a.childNodes.length; l += 1) s.push(a.childNodes[l]);
    } else s = Nr(i.trim(), e || n);
  } else if (i.nodeType || i === t || i === n) s.push(i);
  else if (Array.isArray(i)) {
    if (i instanceof Ve) return i;
    s = i;
  }
  return new Ve($r(s));
}
$.fn = Ve.prototype;
function Hr(...i) {
  const e = pt(i.map((t) => t.split(" ")));
  return (
    this.forEach((t) => {
      t.classList.add(...e);
    }),
    this
  );
}
function Vr(...i) {
  const e = pt(i.map((t) => t.split(" ")));
  return (
    this.forEach((t) => {
      t.classList.remove(...e);
    }),
    this
  );
}
function jr(...i) {
  const e = pt(i.map((t) => t.split(" ")));
  this.forEach((t) => {
    e.forEach((n) => {
      t.classList.toggle(n);
    });
  });
}
function qr(...i) {
  const e = pt(i.map((t) => t.split(" ")));
  return (
    vn(this, (t) => e.filter((n) => t.classList.contains(n)).length > 0)
      .length > 0
  );
}
function Ur(i, e) {
  if (arguments.length === 1 && typeof i == "string")
    return this[0] ? this[0].getAttribute(i) : void 0;
  for (let t = 0; t < this.length; t += 1)
    if (arguments.length === 2) this[t].setAttribute(i, e);
    else for (const n in i) (this[t][n] = i[n]), this[t].setAttribute(n, i[n]);
  return this;
}
function Gr(i) {
  for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(i);
  return this;
}
function Wr(i) {
  for (let e = 0; e < this.length; e += 1) this[e].style.transform = i;
  return this;
}
function Xr(i) {
  for (let e = 0; e < this.length; e += 1)
    this[e].style.transitionDuration = typeof i != "string" ? `${i}ms` : i;
  return this;
}
function Yr(...i) {
  let [e, t, n, s] = i;
  typeof i[1] == "function" && (([e, n, s] = i), (t = void 0)), s || (s = !1);
  function o(u) {
    const c = u.target;
    if (!c) return;
    const d = u.target.dom7EventData || [];
    if ((d.indexOf(u) < 0 && d.unshift(u), $(c).is(t))) n.apply(c, d);
    else {
      const f = $(c).parents();
      for (let p = 0; p < f.length; p += 1) $(f[p]).is(t) && n.apply(f[p], d);
    }
  }
  function r(u) {
    const c = u && u.target ? u.target.dom7EventData || [] : [];
    c.indexOf(u) < 0 && c.unshift(u), n.apply(this, c);
  }
  const a = e.split(" ");
  let l;
  for (let u = 0; u < this.length; u += 1) {
    const c = this[u];
    if (t)
      for (l = 0; l < a.length; l += 1) {
        const d = a[l];
        c.dom7LiveListeners || (c.dom7LiveListeners = {}),
          c.dom7LiveListeners[d] || (c.dom7LiveListeners[d] = []),
          c.dom7LiveListeners[d].push({ listener: n, proxyListener: o }),
          c.addEventListener(d, o, s);
      }
    else
      for (l = 0; l < a.length; l += 1) {
        const d = a[l];
        c.dom7Listeners || (c.dom7Listeners = {}),
          c.dom7Listeners[d] || (c.dom7Listeners[d] = []),
          c.dom7Listeners[d].push({ listener: n, proxyListener: r }),
          c.addEventListener(d, r, s);
      }
  }
  return this;
}
function Zr(...i) {
  let [e, t, n, s] = i;
  typeof i[1] == "function" && (([e, n, s] = i), (t = void 0)), s || (s = !1);
  const o = e.split(" ");
  for (let r = 0; r < o.length; r += 1) {
    const a = o[r];
    for (let l = 0; l < this.length; l += 1) {
      const u = this[l];
      let c;
      if (
        (!t && u.dom7Listeners
          ? (c = u.dom7Listeners[a])
          : t && u.dom7LiveListeners && (c = u.dom7LiveListeners[a]),
        c && c.length)
      )
        for (let d = c.length - 1; d >= 0; d -= 1) {
          const f = c[d];
          (n && f.listener === n) ||
          (n &&
            f.listener &&
            f.listener.dom7proxy &&
            f.listener.dom7proxy === n)
            ? (u.removeEventListener(a, f.proxyListener, s), c.splice(d, 1))
            : n ||
              (u.removeEventListener(a, f.proxyListener, s), c.splice(d, 1));
        }
    }
  }
  return this;
}
function Kr(...i) {
  const e = re(),
    t = i[0].split(" "),
    n = i[1];
  for (let s = 0; s < t.length; s += 1) {
    const o = t[s];
    for (let r = 0; r < this.length; r += 1) {
      const a = this[r];
      if (e.CustomEvent) {
        const l = new e.CustomEvent(o, {
          detail: n,
          bubbles: !0,
          cancelable: !0,
        });
        (a.dom7EventData = i.filter((u, c) => c > 0)),
          a.dispatchEvent(l),
          (a.dom7EventData = []),
          delete a.dom7EventData;
      }
    }
  }
  return this;
}
function Jr(i) {
  const e = this;
  function t(n) {
    n.target === this && (i.call(this, n), e.off("transitionend", t));
  }
  return i && e.on("transitionend", t), this;
}
function Qr(i) {
  if (this.length > 0) {
    if (i) {
      const e = this.styles();
      return (
        this[0].offsetWidth +
        parseFloat(e.getPropertyValue("margin-right")) +
        parseFloat(e.getPropertyValue("margin-left"))
      );
    }
    return this[0].offsetWidth;
  }
  return null;
}
function ea(i) {
  if (this.length > 0) {
    if (i) {
      const e = this.styles();
      return (
        this[0].offsetHeight +
        parseFloat(e.getPropertyValue("margin-top")) +
        parseFloat(e.getPropertyValue("margin-bottom"))
      );
    }
    return this[0].offsetHeight;
  }
  return null;
}
function ta() {
  if (this.length > 0) {
    const i = re(),
      e = be(),
      t = this[0],
      n = t.getBoundingClientRect(),
      s = e.body,
      o = t.clientTop || s.clientTop || 0,
      r = t.clientLeft || s.clientLeft || 0,
      a = t === i ? i.scrollY : t.scrollTop,
      l = t === i ? i.scrollX : t.scrollLeft;
    return { top: n.top + a - o, left: n.left + l - r };
  }
  return null;
}
function ia() {
  const i = re();
  return this[0] ? i.getComputedStyle(this[0], null) : {};
}
function na(i, e) {
  const t = re();
  let n;
  if (arguments.length === 1)
    if (typeof i == "string") {
      if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(i);
    } else {
      for (n = 0; n < this.length; n += 1)
        for (const s in i) this[n].style[s] = i[s];
      return this;
    }
  if (arguments.length === 2 && typeof i == "string") {
    for (n = 0; n < this.length; n += 1) this[n].style[i] = e;
    return this;
  }
  return this;
}
function sa(i) {
  return i
    ? (this.forEach((e, t) => {
        i.apply(e, [e, t]);
      }),
      this)
    : this;
}
function oa(i) {
  const e = vn(this, i);
  return $(e);
}
function ra(i) {
  if (typeof i > "u") return this[0] ? this[0].innerHTML : null;
  for (let e = 0; e < this.length; e += 1) this[e].innerHTML = i;
  return this;
}
function aa(i) {
  if (typeof i > "u") return this[0] ? this[0].textContent.trim() : null;
  for (let e = 0; e < this.length; e += 1) this[e].textContent = i;
  return this;
}
function la(i) {
  const e = re(),
    t = be(),
    n = this[0];
  let s, o;
  if (!n || typeof i > "u") return !1;
  if (typeof i == "string") {
    if (n.matches) return n.matches(i);
    if (n.webkitMatchesSelector) return n.webkitMatchesSelector(i);
    if (n.msMatchesSelector) return n.msMatchesSelector(i);
    for (s = $(i), o = 0; o < s.length; o += 1) if (s[o] === n) return !0;
    return !1;
  }
  if (i === t) return n === t;
  if (i === e) return n === e;
  if (i.nodeType || i instanceof Ve) {
    for (s = i.nodeType ? [i] : i, o = 0; o < s.length; o += 1)
      if (s[o] === n) return !0;
    return !1;
  }
  return !1;
}
function ua() {
  let i = this[0],
    e;
  if (i) {
    for (e = 0; (i = i.previousSibling) !== null; )
      i.nodeType === 1 && (e += 1);
    return e;
  }
}
function ca(i) {
  if (typeof i > "u") return this;
  const e = this.length;
  if (i > e - 1) return $([]);
  if (i < 0) {
    const t = e + i;
    return t < 0 ? $([]) : $([this[t]]);
  }
  return $([this[i]]);
}
function da(...i) {
  let e;
  const t = be();
  for (let n = 0; n < i.length; n += 1) {
    e = i[n];
    for (let s = 0; s < this.length; s += 1)
      if (typeof e == "string") {
        const o = t.createElement("div");
        for (o.innerHTML = e; o.firstChild; ) this[s].appendChild(o.firstChild);
      } else if (e instanceof Ve)
        for (let o = 0; o < e.length; o += 1) this[s].appendChild(e[o]);
      else this[s].appendChild(e);
  }
  return this;
}
function fa(i) {
  const e = be();
  let t, n;
  for (t = 0; t < this.length; t += 1)
    if (typeof i == "string") {
      const s = e.createElement("div");
      for (s.innerHTML = i, n = s.childNodes.length - 1; n >= 0; n -= 1)
        this[t].insertBefore(s.childNodes[n], this[t].childNodes[0]);
    } else if (i instanceof Ve)
      for (n = 0; n < i.length; n += 1)
        this[t].insertBefore(i[n], this[t].childNodes[0]);
    else this[t].insertBefore(i, this[t].childNodes[0]);
  return this;
}
function ha(i) {
  return this.length > 0
    ? i
      ? this[0].nextElementSibling && $(this[0].nextElementSibling).is(i)
        ? $([this[0].nextElementSibling])
        : $([])
      : this[0].nextElementSibling
      ? $([this[0].nextElementSibling])
      : $([])
    : $([]);
}
function pa(i) {
  const e = [];
  let t = this[0];
  if (!t) return $([]);
  for (; t.nextElementSibling; ) {
    const n = t.nextElementSibling;
    i ? $(n).is(i) && e.push(n) : e.push(n), (t = n);
  }
  return $(e);
}
function va(i) {
  if (this.length > 0) {
    const e = this[0];
    return i
      ? e.previousElementSibling && $(e.previousElementSibling).is(i)
        ? $([e.previousElementSibling])
        : $([])
      : e.previousElementSibling
      ? $([e.previousElementSibling])
      : $([]);
  }
  return $([]);
}
function ma(i) {
  const e = [];
  let t = this[0];
  if (!t) return $([]);
  for (; t.previousElementSibling; ) {
    const n = t.previousElementSibling;
    i ? $(n).is(i) && e.push(n) : e.push(n), (t = n);
  }
  return $(e);
}
function ga(i) {
  const e = [];
  for (let t = 0; t < this.length; t += 1)
    this[t].parentNode !== null &&
      (i
        ? $(this[t].parentNode).is(i) && e.push(this[t].parentNode)
        : e.push(this[t].parentNode));
  return $(e);
}
function ya(i) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    let n = this[t].parentNode;
    for (; n; ) i ? $(n).is(i) && e.push(n) : e.push(n), (n = n.parentNode);
  }
  return $(e);
}
function Ca(i) {
  let e = this;
  return typeof i > "u" ? $([]) : (e.is(i) || (e = e.parents(i).eq(0)), e);
}
function ba(i) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    const n = this[t].querySelectorAll(i);
    for (let s = 0; s < n.length; s += 1) e.push(n[s]);
  }
  return $(e);
}
function _a(i) {
  const e = [];
  for (let t = 0; t < this.length; t += 1) {
    const n = this[t].children;
    for (let s = 0; s < n.length; s += 1) (!i || $(n[s]).is(i)) && e.push(n[s]);
  }
  return $(e);
}
function wa() {
  for (let i = 0; i < this.length; i += 1)
    this[i].parentNode && this[i].parentNode.removeChild(this[i]);
  return this;
}
const Ti = {
  addClass: Hr,
  removeClass: Vr,
  hasClass: qr,
  toggleClass: jr,
  attr: Ur,
  removeAttr: Gr,
  transform: Wr,
  transition: Xr,
  on: Yr,
  off: Zr,
  trigger: Kr,
  transitionEnd: Jr,
  outerWidth: Qr,
  outerHeight: ea,
  styles: ia,
  offset: ta,
  css: na,
  each: sa,
  html: ra,
  text: aa,
  is: la,
  index: ua,
  eq: ca,
  append: da,
  prepend: fa,
  next: ha,
  nextAll: pa,
  prev: va,
  prevAll: ma,
  parent: ga,
  parents: ya,
  closest: Ca,
  find: ba,
  children: _a,
  filter: oa,
  remove: wa,
};
Object.keys(Ti).forEach((i) => {
  Object.defineProperty($.fn, i, { value: Ti[i], writable: !0 });
});
function Ea(i) {
  const e = i;
  Object.keys(e).forEach((t) => {
    try {
      e[t] = null;
    } catch {}
    try {
      delete e[t];
    } catch {}
  });
}
function dt(i, e = 0) {
  return setTimeout(i, e);
}
function Oe() {
  return Date.now();
}
function xa(i) {
  const e = re();
  let t;
  return (
    e.getComputedStyle && (t = e.getComputedStyle(i, null)),
    !t && i.currentStyle && (t = i.currentStyle),
    t || (t = i.style),
    t
  );
}
function Sa(i, e = "x") {
  const t = re();
  let n, s, o;
  const r = xa(i);
  return (
    t.WebKitCSSMatrix
      ? ((s = r.transform || r.webkitTransform),
        s.split(",").length > 6 &&
          (s = s
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (o = new t.WebKitCSSMatrix(s === "none" ? "" : s)))
      : ((o =
          r.MozTransform ||
          r.OTransform ||
          r.MsTransform ||
          r.msTransform ||
          r.transform ||
          r
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (n = o.toString().split(","))),
    e === "x" &&
      (t.WebKitCSSMatrix
        ? (s = o.m41)
        : n.length === 16
        ? (s = parseFloat(n[12]))
        : (s = parseFloat(n[4]))),
    e === "y" &&
      (t.WebKitCSSMatrix
        ? (s = o.m42)
        : n.length === 16
        ? (s = parseFloat(n[13]))
        : (s = parseFloat(n[5]))),
    s || 0
  );
}
function yt(i) {
  return (
    typeof i == "object" &&
    i !== null &&
    i.constructor &&
    Object.prototype.toString.call(i).slice(8, -1) === "Object"
  );
}
function Fa(i) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? i instanceof HTMLElement
    : i && (i.nodeType === 1 || i.nodeType === 11);
}
function ye(...i) {
  const e = Object(i[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < i.length; n += 1) {
    const s = i[n];
    if (s != null && !Fa(s)) {
      const o = Object.keys(Object(s)).filter((r) => t.indexOf(r) < 0);
      for (let r = 0, a = o.length; r < a; r += 1) {
        const l = o[r],
          u = Object.getOwnPropertyDescriptor(s, l);
        u !== void 0 &&
          u.enumerable &&
          (yt(e[l]) && yt(s[l])
            ? s[l].__swiper__
              ? (e[l] = s[l])
              : ye(e[l], s[l])
            : !yt(e[l]) && yt(s[l])
            ? ((e[l] = {}), s[l].__swiper__ ? (e[l] = s[l]) : ye(e[l], s[l]))
            : (e[l] = s[l]));
      }
    }
  }
  return e;
}
function Ct(i, e, t) {
  i.style.setProperty(e, t);
}
function mn({ swiper: i, targetPosition: e, side: t }) {
  const n = re(),
    s = -i.translate;
  let o = null,
    r;
  const a = i.params.speed;
  (i.wrapperEl.style.scrollSnapType = "none"),
    n.cancelAnimationFrame(i.cssModeFrameID);
  const l = e > s ? "next" : "prev",
    u = (d, f) => (l === "next" && d >= f) || (l === "prev" && d <= f),
    c = () => {
      (r = new Date().getTime()), o === null && (o = r);
      const d = Math.max(Math.min((r - o) / a, 1), 0),
        f = 0.5 - Math.cos(d * Math.PI) / 2;
      let p = s + f * (e - s);
      if ((u(p, e) && (p = e), i.wrapperEl.scrollTo({ [t]: p }), u(p, e))) {
        (i.wrapperEl.style.overflow = "hidden"),
          (i.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (i.wrapperEl.style.overflow = ""), i.wrapperEl.scrollTo({ [t]: p });
          }),
          n.cancelAnimationFrame(i.cssModeFrameID);
        return;
      }
      i.cssModeFrameID = n.requestAnimationFrame(c);
    };
  c();
}
let Pt;
function Ta() {
  const i = re(),
    e = be();
  return {
    smoothScroll:
      e.documentElement && "scrollBehavior" in e.documentElement.style,
    touch: !!(
      "ontouchstart" in i ||
      (i.DocumentTouch && e instanceof i.DocumentTouch)
    ),
    passiveListener: (function () {
      let n = !1;
      try {
        const s = Object.defineProperty({}, "passive", {
          get() {
            n = !0;
          },
        });
        i.addEventListener("testPassiveListener", null, s);
      } catch {}
      return n;
    })(),
    gestures: (function () {
      return "ongesturestart" in i;
    })(),
  };
}
function gn() {
  return Pt || (Pt = Ta()), Pt;
}
let Ot;
function Ba({ userAgent: i } = {}) {
  const e = gn(),
    t = re(),
    n = t.navigator.platform,
    s = i || t.navigator.userAgent,
    o = { ios: !1, android: !1 },
    r = t.screen.width,
    a = t.screen.height,
    l = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = s.match(/(iPad).*OS\s([\d_]+)/);
  const c = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    d = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    f = n === "Win32";
  let p = n === "MacIntel";
  const h = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !u &&
      p &&
      e.touch &&
      h.indexOf(`${r}x${a}`) >= 0 &&
      ((u = s.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, "13_0_0"]),
      (p = !1)),
    l && !f && ((o.os = "android"), (o.android = !0)),
    (u || d || c) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function ka(i = {}) {
  return Ot || (Ot = Ba(i)), Ot;
}
let Lt;
function Da() {
  const i = re();
  function e() {
    const t = i.navigator.userAgent.toLowerCase();
    return (
      t.indexOf("safari") >= 0 &&
      t.indexOf("chrome") < 0 &&
      t.indexOf("android") < 0
    );
  }
  return {
    isSafari: e(),
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      i.navigator.userAgent
    ),
  };
}
function Aa() {
  return Lt || (Lt = Da()), Lt;
}
function Ma({ swiper: i, on: e, emit: t }) {
  const n = re();
  let s = null;
  const o = () => {
      !i || i.destroyed || !i.initialized || (t("beforeResize"), t("resize"));
    },
    r = () => {
      !i ||
        i.destroyed ||
        !i.initialized ||
        ((s = new ResizeObserver((u) => {
          const { width: c, height: d } = i;
          let f = c,
            p = d;
          u.forEach(({ contentBoxSize: h, contentRect: g, target: y }) => {
            (y && y !== i.el) ||
              ((f = g ? g.width : (h[0] || h).inlineSize),
              (p = g ? g.height : (h[0] || h).blockSize));
          }),
            (f !== c || p !== d) && o();
        })),
        s.observe(i.el));
    },
    a = () => {
      s && s.unobserve && i.el && (s.unobserve(i.el), (s = null));
    },
    l = () => {
      !i || i.destroyed || !i.initialized || t("orientationchange");
    };
  e("init", () => {
    if (i.params.resizeObserver && typeof n.ResizeObserver < "u") {
      r();
      return;
    }
    n.addEventListener("resize", o), n.addEventListener("orientationchange", l);
  }),
    e("destroy", () => {
      a(),
        n.removeEventListener("resize", o),
        n.removeEventListener("orientationchange", l);
    });
}
function Pa({ swiper: i, extendParams: e, on: t, emit: n }) {
  const s = [],
    o = re(),
    r = (u, c = {}) => {
      const d = o.MutationObserver || o.WebkitMutationObserver,
        f = new d((p) => {
          if (p.length === 1) {
            n("observerUpdate", p[0]);
            return;
          }
          const h = function () {
            n("observerUpdate", p[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(h)
            : o.setTimeout(h, 0);
        });
      f.observe(u, {
        attributes: typeof c.attributes > "u" ? !0 : c.attributes,
        childList: typeof c.childList > "u" ? !0 : c.childList,
        characterData: typeof c.characterData > "u" ? !0 : c.characterData,
      }),
        s.push(f);
    },
    a = () => {
      if (!!i.params.observer) {
        if (i.params.observeParents) {
          const u = i.$el.parents();
          for (let c = 0; c < u.length; c += 1) r(u[c]);
        }
        r(i.$el[0], { childList: i.params.observeSlideChildren }),
          r(i.$wrapperEl[0], { attributes: !1 });
      }
    },
    l = () => {
      s.forEach((u) => {
        u.disconnect();
      }),
        s.splice(0, s.length);
    };
  e({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    t("init", a),
    t("destroy", l);
}
const Oa = {
  on(i, e, t) {
    const n = this;
    if (typeof e != "function") return n;
    const s = t ? "unshift" : "push";
    return (
      i.split(" ").forEach((o) => {
        n.eventsListeners[o] || (n.eventsListeners[o] = []),
          n.eventsListeners[o][s](e);
      }),
      n
    );
  },
  once(i, e, t) {
    const n = this;
    if (typeof e != "function") return n;
    function s(...o) {
      n.off(i, s), s.__emitterProxy && delete s.__emitterProxy, e.apply(n, o);
    }
    return (s.__emitterProxy = e), n.on(i, s, t);
  },
  onAny(i, e) {
    const t = this;
    if (typeof i != "function") return t;
    const n = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[n](i), t;
  },
  offAny(i) {
    const e = this;
    if (!e.eventsAnyListeners) return e;
    const t = e.eventsAnyListeners.indexOf(i);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  },
  off(i, e) {
    const t = this;
    return (
      t.eventsListeners &&
        i.split(" ").forEach((n) => {
          typeof e > "u"
            ? (t.eventsListeners[n] = [])
            : t.eventsListeners[n] &&
              t.eventsListeners[n].forEach((s, o) => {
                (s === e || (s.__emitterProxy && s.__emitterProxy === e)) &&
                  t.eventsListeners[n].splice(o, 1);
              });
        }),
      t
    );
  },
  emit(...i) {
    const e = this;
    if (!e.eventsListeners) return e;
    let t, n, s;
    return (
      typeof i[0] == "string" || Array.isArray(i[0])
        ? ((t = i[0]), (n = i.slice(1, i.length)), (s = e))
        : ((t = i[0].events), (n = i[0].data), (s = i[0].context || e)),
      n.unshift(s),
      (Array.isArray(t) ? t : t.split(" ")).forEach((r) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((a) => {
            a.apply(s, [r, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[r] &&
            e.eventsListeners[r].forEach((a) => {
              a.apply(s, n);
            });
      }),
      e
    );
  },
};
function La() {
  const i = this;
  let e, t;
  const n = i.$el;
  typeof i.params.width < "u" && i.params.width !== null
    ? (e = i.params.width)
    : (e = n[0].clientWidth),
    typeof i.params.height < "u" && i.params.height !== null
      ? (t = i.params.height)
      : (t = n[0].clientHeight),
    !((e === 0 && i.isHorizontal()) || (t === 0 && i.isVertical())) &&
      ((e =
        e -
        parseInt(n.css("padding-left") || 0, 10) -
        parseInt(n.css("padding-right") || 0, 10)),
      (t =
        t -
        parseInt(n.css("padding-top") || 0, 10) -
        parseInt(n.css("padding-bottom") || 0, 10)),
      Number.isNaN(e) && (e = 0),
      Number.isNaN(t) && (t = 0),
      Object.assign(i, {
        width: e,
        height: t,
        size: i.isHorizontal() ? e : t,
      }));
}
function za() {
  const i = this;
  function e(B) {
    return i.isHorizontal()
      ? B
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[B];
  }
  function t(B, D) {
    return parseFloat(B.getPropertyValue(e(D)) || 0);
  }
  const n = i.params,
    { $wrapperEl: s, size: o, rtlTranslate: r, wrongRTL: a } = i,
    l = i.virtual && n.virtual.enabled,
    u = l ? i.virtual.slides.length : i.slides.length,
    c = s.children(`.${i.params.slideClass}`),
    d = l ? i.virtual.slides.length : c.length;
  let f = [];
  const p = [],
    h = [];
  let g = n.slidesOffsetBefore;
  typeof g == "function" && (g = n.slidesOffsetBefore.call(i));
  let y = n.slidesOffsetAfter;
  typeof y == "function" && (y = n.slidesOffsetAfter.call(i));
  const E = i.snapGrid.length,
    C = i.slidesGrid.length;
  let b = n.spaceBetween,
    _ = -g,
    x = 0,
    w = 0;
  if (typeof o > "u") return;
  typeof b == "string" &&
    b.indexOf("%") >= 0 &&
    (b = (parseFloat(b.replace("%", "")) / 100) * o),
    (i.virtualSize = -b),
    r
      ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
      : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
    n.centeredSlides &&
      n.cssMode &&
      (Ct(i.wrapperEl, "--swiper-centered-offset-before", ""),
      Ct(i.wrapperEl, "--swiper-centered-offset-after", ""));
  const S = n.grid && n.grid.rows > 1 && i.grid;
  S && i.grid.initSlides(d);
  let k;
  const T =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (B) => typeof n.breakpoints[B].slidesPerView < "u"
    ).length > 0;
  for (let B = 0; B < d; B += 1) {
    k = 0;
    const D = c.eq(B);
    if ((S && i.grid.updateSlide(B, D, d, e), D.css("display") !== "none")) {
      if (n.slidesPerView === "auto") {
        T && (c[B].style[e("width")] = "");
        const z = getComputedStyle(D[0]),
          V = D[0].style.transform,
          U = D[0].style.webkitTransform;
        if (
          (V && (D[0].style.transform = "none"),
          U && (D[0].style.webkitTransform = "none"),
          n.roundLengths)
        )
          k = i.isHorizontal() ? D.outerWidth(!0) : D.outerHeight(!0);
        else {
          const F = t(z, "width"),
            A = t(z, "padding-left"),
            M = t(z, "padding-right"),
            O = t(z, "margin-left"),
            W = t(z, "margin-right"),
            Me = z.getPropertyValue("box-sizing");
          if (Me && Me === "border-box") k = F + O + W;
          else {
            const { clientWidth: We, offsetWidth: Pe } = D[0];
            k = F + A + M + O + W + (Pe - We);
          }
        }
        V && (D[0].style.transform = V),
          U && (D[0].style.webkitTransform = U),
          n.roundLengths && (k = Math.floor(k));
      } else
        (k = (o - (n.slidesPerView - 1) * b) / n.slidesPerView),
          n.roundLengths && (k = Math.floor(k)),
          c[B] && (c[B].style[e("width")] = `${k}px`);
      c[B] && (c[B].swiperSlideSize = k),
        h.push(k),
        n.centeredSlides
          ? ((_ = _ + k / 2 + x / 2 + b),
            x === 0 && B !== 0 && (_ = _ - o / 2 - b),
            B === 0 && (_ = _ - o / 2 - b),
            Math.abs(_) < 1 / 1e3 && (_ = 0),
            n.roundLengths && (_ = Math.floor(_)),
            w % n.slidesPerGroup === 0 && f.push(_),
            p.push(_))
          : (n.roundLengths && (_ = Math.floor(_)),
            (w - Math.min(i.params.slidesPerGroupSkip, w)) %
              i.params.slidesPerGroup ===
              0 && f.push(_),
            p.push(_),
            (_ = _ + k + b)),
        (i.virtualSize += k + b),
        (x = k),
        (w += 1);
    }
  }
  if (
    ((i.virtualSize = Math.max(i.virtualSize, o) + y),
    r &&
      a &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      s.css({ width: `${i.virtualSize + n.spaceBetween}px` }),
    n.setWrapperSize &&
      s.css({ [e("width")]: `${i.virtualSize + n.spaceBetween}px` }),
    S && i.grid.updateWrapperSize(k, f, e),
    !n.centeredSlides)
  ) {
    const B = [];
    for (let D = 0; D < f.length; D += 1) {
      let z = f[D];
      n.roundLengths && (z = Math.floor(z)),
        f[D] <= i.virtualSize - o && B.push(z);
    }
    (f = B),
      Math.floor(i.virtualSize - o) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(i.virtualSize - o);
  }
  if ((f.length === 0 && (f = [0]), n.spaceBetween !== 0)) {
    const B = i.isHorizontal() && r ? "marginLeft" : e("marginRight");
    c.filter((D, z) => (n.cssMode ? z !== c.length - 1 : !0)).css({
      [B]: `${b}px`,
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let B = 0;
    h.forEach((z) => {
      B += z + (n.spaceBetween ? n.spaceBetween : 0);
    }),
      (B -= n.spaceBetween);
    const D = B - o;
    f = f.map((z) => (z < 0 ? -g : z > D ? D + y : z));
  }
  if (n.centerInsufficientSlides) {
    let B = 0;
    if (
      (h.forEach((D) => {
        B += D + (n.spaceBetween ? n.spaceBetween : 0);
      }),
      (B -= n.spaceBetween),
      B < o)
    ) {
      const D = (o - B) / 2;
      f.forEach((z, V) => {
        f[V] = z - D;
      }),
        p.forEach((z, V) => {
          p[V] = z + D;
        });
    }
  }
  if (
    (Object.assign(i, {
      slides: c,
      snapGrid: f,
      slidesGrid: p,
      slidesSizesGrid: h,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    Ct(i.wrapperEl, "--swiper-centered-offset-before", `${-f[0]}px`),
      Ct(
        i.wrapperEl,
        "--swiper-centered-offset-after",
        `${i.size / 2 - h[h.length - 1] / 2}px`
      );
    const B = -i.snapGrid[0],
      D = -i.slidesGrid[0];
    (i.snapGrid = i.snapGrid.map((z) => z + B)),
      (i.slidesGrid = i.slidesGrid.map((z) => z + D));
  }
  d !== u && i.emit("slidesLengthChange"),
    f.length !== E &&
      (i.params.watchOverflow && i.checkOverflow(),
      i.emit("snapGridLengthChange")),
    p.length !== C && i.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && i.updateSlidesOffset();
}
function Ia(i) {
  const e = this,
    t = [],
    n = e.virtual && e.params.virtual.enabled;
  let s = 0,
    o;
  typeof i == "number"
    ? e.setTransition(i)
    : i === !0 && e.setTransition(e.params.speed);
  const r = (a) =>
    n
      ? e.slides.filter(
          (l) => parseInt(l.getAttribute("data-swiper-slide-index"), 10) === a
        )[0]
      : e.slides.eq(a)[0];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      e.visibleSlides.each((a) => {
        t.push(a);
      });
    else
      for (o = 0; o < Math.ceil(e.params.slidesPerView); o += 1) {
        const a = e.activeIndex + o;
        if (a > e.slides.length && !n) break;
        t.push(r(a));
      }
  else t.push(r(e.activeIndex));
  for (o = 0; o < t.length; o += 1)
    if (typeof t[o] < "u") {
      const a = t[o].offsetHeight;
      s = a > s ? a : s;
    }
  (s || s === 0) && e.$wrapperEl.css("height", `${s}px`);
}
function Ra() {
  const i = this,
    e = i.slides;
  for (let t = 0; t < e.length; t += 1)
    e[t].swiperSlideOffset = i.isHorizontal()
      ? e[t].offsetLeft
      : e[t].offsetTop;
}
function $a(i = (this && this.translate) || 0) {
  const e = this,
    t = e.params,
    { slides: n, rtlTranslate: s, snapGrid: o } = e;
  if (n.length === 0) return;
  typeof n[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let r = -i;
  s && (r = i),
    n.removeClass(t.slideVisibleClass),
    (e.visibleSlidesIndexes = []),
    (e.visibleSlides = []);
  for (let a = 0; a < n.length; a += 1) {
    const l = n[a];
    let u = l.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (u -= n[0].swiperSlideOffset);
    const c =
        (r + (t.centeredSlides ? e.minTranslate() : 0) - u) /
        (l.swiperSlideSize + t.spaceBetween),
      d =
        (r - o[0] + (t.centeredSlides ? e.minTranslate() : 0) - u) /
        (l.swiperSlideSize + t.spaceBetween),
      f = -(r - u),
      p = f + e.slidesSizesGrid[a];
    ((f >= 0 && f < e.size - 1) ||
      (p > 1 && p <= e.size) ||
      (f <= 0 && p >= e.size)) &&
      (e.visibleSlides.push(l),
      e.visibleSlidesIndexes.push(a),
      n.eq(a).addClass(t.slideVisibleClass)),
      (l.progress = s ? -c : c),
      (l.originalProgress = s ? -d : d);
  }
  e.visibleSlides = $(e.visibleSlides);
}
function Na(i) {
  const e = this;
  if (typeof i > "u") {
    const u = e.rtlTranslate ? -1 : 1;
    i = (e && e.translate && e.translate * u) || 0;
  }
  const t = e.params,
    n = e.maxTranslate() - e.minTranslate();
  let { progress: s, isBeginning: o, isEnd: r } = e;
  const a = o,
    l = r;
  n === 0
    ? ((s = 0), (o = !0), (r = !0))
    : ((s = (i - e.minTranslate()) / n), (o = s <= 0), (r = s >= 1)),
    Object.assign(e, { progress: s, isBeginning: o, isEnd: r }),
    (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
      e.updateSlidesProgress(i),
    o && !a && e.emit("reachBeginning toEdge"),
    r && !l && e.emit("reachEnd toEdge"),
    ((a && !o) || (l && !r)) && e.emit("fromEdge"),
    e.emit("progress", s);
}
function Ha() {
  const i = this,
    { slides: e, params: t, $wrapperEl: n, activeIndex: s, realIndex: o } = i,
    r = i.virtual && t.virtual.enabled;
  e.removeClass(
    `${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`
  );
  let a;
  r
    ? (a = i.$wrapperEl.find(
        `.${t.slideClass}[data-swiper-slide-index="${s}"]`
      ))
    : (a = e.eq(s)),
    a.addClass(t.slideActiveClass),
    t.loop &&
      (a.hasClass(t.slideDuplicateClass)
        ? n
            .children(
              `.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${o}"]`
            )
            .addClass(t.slideDuplicateActiveClass)
        : n
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${o}"]`
            )
            .addClass(t.slideDuplicateActiveClass));
  let l = a.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass);
  t.loop && l.length === 0 && ((l = e.eq(0)), l.addClass(t.slideNextClass));
  let u = a.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass);
  t.loop && u.length === 0 && ((u = e.eq(-1)), u.addClass(t.slidePrevClass)),
    t.loop &&
      (l.hasClass(t.slideDuplicateClass)
        ? n
            .children(
              `.${t.slideClass}:not(.${
                t.slideDuplicateClass
              })[data-swiper-slide-index="${l.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(t.slideDuplicateNextClass)
        : n
            .children(
              `.${t.slideClass}.${
                t.slideDuplicateClass
              }[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`
            )
            .addClass(t.slideDuplicateNextClass),
      u.hasClass(t.slideDuplicateClass)
        ? n
            .children(
              `.${t.slideClass}:not(.${
                t.slideDuplicateClass
              })[data-swiper-slide-index="${u.attr(
                "data-swiper-slide-index"
              )}"]`
            )
            .addClass(t.slideDuplicatePrevClass)
        : n
            .children(
              `.${t.slideClass}.${
                t.slideDuplicateClass
              }[data-swiper-slide-index="${u.attr("data-swiper-slide-index")}"]`
            )
            .addClass(t.slideDuplicatePrevClass)),
    i.emitSlidesClasses();
}
function Va(i) {
  const e = this,
    t = e.rtlTranslate ? e.translate : -e.translate,
    {
      slidesGrid: n,
      snapGrid: s,
      params: o,
      activeIndex: r,
      realIndex: a,
      snapIndex: l,
    } = e;
  let u = i,
    c;
  if (typeof u > "u") {
    for (let f = 0; f < n.length; f += 1)
      typeof n[f + 1] < "u"
        ? t >= n[f] && t < n[f + 1] - (n[f + 1] - n[f]) / 2
          ? (u = f)
          : t >= n[f] && t < n[f + 1] && (u = f + 1)
        : t >= n[f] && (u = f);
    o.normalizeSlideIndex && (u < 0 || typeof u > "u") && (u = 0);
  }
  if (s.indexOf(t) >= 0) c = s.indexOf(t);
  else {
    const f = Math.min(o.slidesPerGroupSkip, u);
    c = f + Math.floor((u - f) / o.slidesPerGroup);
  }
  if ((c >= s.length && (c = s.length - 1), u === r)) {
    c !== l && ((e.snapIndex = c), e.emit("snapIndexChange"));
    return;
  }
  const d = parseInt(e.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
  Object.assign(e, {
    snapIndex: c,
    realIndex: d,
    previousIndex: r,
    activeIndex: u,
  }),
    e.emit("activeIndexChange"),
    e.emit("snapIndexChange"),
    a !== d && e.emit("realIndexChange"),
    (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange");
}
function ja(i) {
  const e = this,
    t = e.params,
    n = $(i).closest(`.${t.slideClass}`)[0];
  let s = !1,
    o;
  if (n) {
    for (let r = 0; r < e.slides.length; r += 1)
      if (e.slides[r] === n) {
        (s = !0), (o = r);
        break;
      }
  }
  if (n && s)
    (e.clickedSlide = n),
      e.virtual && e.params.virtual.enabled
        ? (e.clickedIndex = parseInt($(n).attr("data-swiper-slide-index"), 10))
        : (e.clickedIndex = o);
  else {
    (e.clickedSlide = void 0), (e.clickedIndex = void 0);
    return;
  }
  t.slideToClickedSlide &&
    e.clickedIndex !== void 0 &&
    e.clickedIndex !== e.activeIndex &&
    e.slideToClickedSlide();
}
const qa = {
  updateSize: La,
  updateSlides: za,
  updateAutoHeight: Ia,
  updateSlidesOffset: Ra,
  updateSlidesProgress: $a,
  updateProgress: Na,
  updateSlidesClasses: Ha,
  updateActiveIndex: Va,
  updateClickedSlide: ja,
};
function Ua(i = this.isHorizontal() ? "x" : "y") {
  const e = this,
    { params: t, rtlTranslate: n, translate: s, $wrapperEl: o } = e;
  if (t.virtualTranslate) return n ? -s : s;
  if (t.cssMode) return s;
  let r = Sa(o[0], i);
  return n && (r = -r), r || 0;
}
function Ga(i, e) {
  const t = this,
    {
      rtlTranslate: n,
      params: s,
      $wrapperEl: o,
      wrapperEl: r,
      progress: a,
    } = t;
  let l = 0,
    u = 0;
  const c = 0;
  t.isHorizontal() ? (l = n ? -i : i) : (u = i),
    s.roundLengths && ((l = Math.floor(l)), (u = Math.floor(u))),
    s.cssMode
      ? (r[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal()
          ? -l
          : -u)
      : s.virtualTranslate ||
        o.transform(`translate3d(${l}px, ${u}px, ${c}px)`),
    (t.previousTranslate = t.translate),
    (t.translate = t.isHorizontal() ? l : u);
  let d;
  const f = t.maxTranslate() - t.minTranslate();
  f === 0 ? (d = 0) : (d = (i - t.minTranslate()) / f),
    d !== a && t.updateProgress(i),
    t.emit("setTranslate", t.translate, e);
}
function Wa() {
  return -this.snapGrid[0];
}
function Xa() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Ya(i = 0, e = this.params.speed, t = !0, n = !0, s) {
  const o = this,
    { params: r, wrapperEl: a } = o;
  if (o.animating && r.preventInteractionOnTransition) return !1;
  const l = o.minTranslate(),
    u = o.maxTranslate();
  let c;
  if (
    (n && i > l ? (c = l) : n && i < u ? (c = u) : (c = i),
    o.updateProgress(c),
    r.cssMode)
  ) {
    const d = o.isHorizontal();
    if (e === 0) a[d ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!o.support.smoothScroll)
        return (
          mn({ swiper: o, targetPosition: -c, side: d ? "left" : "top" }), !0
        );
      a.scrollTo({ [d ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    e === 0
      ? (o.setTransition(0),
        o.setTranslate(c),
        t && (o.emit("beforeTransitionStart", e, s), o.emit("transitionEnd")))
      : (o.setTransition(e),
        o.setTranslate(c),
        t && (o.emit("beforeTransitionStart", e, s), o.emit("transitionStart")),
        o.animating ||
          ((o.animating = !0),
          o.onTranslateToWrapperTransitionEnd ||
            (o.onTranslateToWrapperTransitionEnd = function (f) {
              !o ||
                o.destroyed ||
                (f.target === this &&
                  (o.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    o.onTranslateToWrapperTransitionEnd
                  ),
                  o.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    o.onTranslateToWrapperTransitionEnd
                  ),
                  (o.onTranslateToWrapperTransitionEnd = null),
                  delete o.onTranslateToWrapperTransitionEnd,
                  t && o.emit("transitionEnd")));
            }),
          o.$wrapperEl[0].addEventListener(
            "transitionend",
            o.onTranslateToWrapperTransitionEnd
          ),
          o.$wrapperEl[0].addEventListener(
            "webkitTransitionEnd",
            o.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
const Za = {
  getTranslate: Ua,
  setTranslate: Ga,
  minTranslate: Wa,
  maxTranslate: Xa,
  translateTo: Ya,
};
function Ka(i, e) {
  const t = this;
  t.params.cssMode || t.$wrapperEl.transition(i), t.emit("setTransition", i, e);
}
function yn({ swiper: i, runCallbacks: e, direction: t, step: n }) {
  const { activeIndex: s, previousIndex: o } = i;
  let r = t;
  if (
    (r || (s > o ? (r = "next") : s < o ? (r = "prev") : (r = "reset")),
    i.emit(`transition${n}`),
    e && s !== o)
  ) {
    if (r === "reset") {
      i.emit(`slideResetTransition${n}`);
      return;
    }
    i.emit(`slideChangeTransition${n}`),
      r === "next"
        ? i.emit(`slideNextTransition${n}`)
        : i.emit(`slidePrevTransition${n}`);
  }
}
function Ja(i = !0, e) {
  const t = this,
    { params: n } = t;
  n.cssMode ||
    (n.autoHeight && t.updateAutoHeight(),
    yn({ swiper: t, runCallbacks: i, direction: e, step: "Start" }));
}
function Qa(i = !0, e) {
  const t = this,
    { params: n } = t;
  (t.animating = !1),
    !n.cssMode &&
      (t.setTransition(0),
      yn({ swiper: t, runCallbacks: i, direction: e, step: "End" }));
}
const el = { setTransition: Ka, transitionStart: Ja, transitionEnd: Qa };
function tl(i = 0, e = this.params.speed, t = !0, n, s) {
  if (typeof i != "number" && typeof i != "string")
    throw new Error(
      `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof i}] given.`
    );
  if (typeof i == "string") {
    const b = parseInt(i, 10);
    if (!isFinite(b))
      throw new Error(
        `The passed-in 'index' (string) couldn't be converted to 'number'. [${i}] given.`
      );
    i = b;
  }
  const o = this;
  let r = i;
  r < 0 && (r = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: u,
    previousIndex: c,
    activeIndex: d,
    rtlTranslate: f,
    wrapperEl: p,
    enabled: h,
  } = o;
  if ((o.animating && a.preventInteractionOnTransition) || (!h && !n && !s))
    return !1;
  const g = Math.min(o.params.slidesPerGroupSkip, r);
  let y = g + Math.floor((r - g) / o.params.slidesPerGroup);
  y >= l.length && (y = l.length - 1),
    (d || a.initialSlide || 0) === (c || 0) &&
      t &&
      o.emit("beforeSlideChangeStart");
  const E = -l[y];
  if ((o.updateProgress(E), a.normalizeSlideIndex))
    for (let b = 0; b < u.length; b += 1) {
      const _ = -Math.floor(E * 100),
        x = Math.floor(u[b] * 100),
        w = Math.floor(u[b + 1] * 100);
      typeof u[b + 1] < "u"
        ? _ >= x && _ < w - (w - x) / 2
          ? (r = b)
          : _ >= x && _ < w && (r = b + 1)
        : _ >= x && (r = b);
    }
  if (
    o.initialized &&
    r !== d &&
    ((!o.allowSlideNext && E < o.translate && E < o.minTranslate()) ||
      (!o.allowSlidePrev &&
        E > o.translate &&
        E > o.maxTranslate() &&
        (d || 0) !== r))
  )
    return !1;
  let C;
  if (
    (r > d ? (C = "next") : r < d ? (C = "prev") : (C = "reset"),
    (f && -E === o.translate) || (!f && E === o.translate))
  )
    return (
      o.updateActiveIndex(r),
      a.autoHeight && o.updateAutoHeight(),
      o.updateSlidesClasses(),
      a.effect !== "slide" && o.setTranslate(E),
      C !== "reset" && (o.transitionStart(t, C), o.transitionEnd(t, C)),
      !1
    );
  if (a.cssMode) {
    const b = o.isHorizontal(),
      _ = f ? E : -E;
    if (e === 0) {
      const x = o.virtual && o.params.virtual.enabled;
      x &&
        ((o.wrapperEl.style.scrollSnapType = "none"),
        (o._immediateVirtual = !0)),
        (p[b ? "scrollLeft" : "scrollTop"] = _),
        x &&
          requestAnimationFrame(() => {
            (o.wrapperEl.style.scrollSnapType = ""),
              (o._swiperImmediateVirtual = !1);
          });
    } else {
      if (!o.support.smoothScroll)
        return (
          mn({ swiper: o, targetPosition: _, side: b ? "left" : "top" }), !0
        );
      p.scrollTo({ [b ? "left" : "top"]: _, behavior: "smooth" });
    }
    return !0;
  }
  return (
    o.setTransition(e),
    o.setTranslate(E),
    o.updateActiveIndex(r),
    o.updateSlidesClasses(),
    o.emit("beforeTransitionStart", e, n),
    o.transitionStart(t, C),
    e === 0
      ? o.transitionEnd(t, C)
      : o.animating ||
        ((o.animating = !0),
        o.onSlideToWrapperTransitionEnd ||
          (o.onSlideToWrapperTransitionEnd = function (_) {
            !o ||
              o.destroyed ||
              (_.target === this &&
                (o.$wrapperEl[0].removeEventListener(
                  "transitionend",
                  o.onSlideToWrapperTransitionEnd
                ),
                o.$wrapperEl[0].removeEventListener(
                  "webkitTransitionEnd",
                  o.onSlideToWrapperTransitionEnd
                ),
                (o.onSlideToWrapperTransitionEnd = null),
                delete o.onSlideToWrapperTransitionEnd,
                o.transitionEnd(t, C)));
          }),
        o.$wrapperEl[0].addEventListener(
          "transitionend",
          o.onSlideToWrapperTransitionEnd
        ),
        o.$wrapperEl[0].addEventListener(
          "webkitTransitionEnd",
          o.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function il(i = 0, e = this.params.speed, t = !0, n) {
  const s = this;
  let o = i;
  return s.params.loop && (o += s.loopedSlides), s.slideTo(o, e, t, n);
}
function nl(i = this.params.speed, e = !0, t) {
  const n = this,
    { animating: s, enabled: o, params: r } = n;
  if (!o) return n;
  let a = r.slidesPerGroup;
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (a = Math.max(n.slidesPerViewDynamic("current", !0), 1));
  const l = n.activeIndex < r.slidesPerGroupSkip ? 1 : a;
  if (r.loop) {
    if (s && r.loopPreventsSlide) return !1;
    n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
  }
  return r.rewind && n.isEnd
    ? n.slideTo(0, i, e, t)
    : n.slideTo(n.activeIndex + l, i, e, t);
}
function sl(i = this.params.speed, e = !0, t) {
  const n = this,
    {
      params: s,
      animating: o,
      snapGrid: r,
      slidesGrid: a,
      rtlTranslate: l,
      enabled: u,
    } = n;
  if (!u) return n;
  if (s.loop) {
    if (o && s.loopPreventsSlide) return !1;
    n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
  }
  const c = l ? n.translate : -n.translate;
  function d(y) {
    return y < 0 ? -Math.floor(Math.abs(y)) : Math.floor(y);
  }
  const f = d(c),
    p = r.map((y) => d(y));
  let h = r[p.indexOf(f) - 1];
  if (typeof h > "u" && s.cssMode) {
    let y;
    r.forEach((E, C) => {
      f >= E && (y = C);
    }),
      typeof y < "u" && (h = r[y > 0 ? y - 1 : y]);
  }
  let g = 0;
  return (
    typeof h < "u" &&
      ((g = a.indexOf(h)),
      g < 0 && (g = n.activeIndex - 1),
      s.slidesPerView === "auto" &&
        s.slidesPerGroup === 1 &&
        s.slidesPerGroupAuto &&
        ((g = g - n.slidesPerViewDynamic("previous", !0) + 1),
        (g = Math.max(g, 0)))),
    s.rewind && n.isBeginning
      ? n.slideTo(n.slides.length - 1, i, e, t)
      : n.slideTo(g, i, e, t)
  );
}
function ol(i = this.params.speed, e = !0, t) {
  const n = this;
  return n.slideTo(n.activeIndex, i, e, t);
}
function rl(i = this.params.speed, e = !0, t, n = 0.5) {
  const s = this;
  let o = s.activeIndex;
  const r = Math.min(s.params.slidesPerGroupSkip, o),
    a = r + Math.floor((o - r) / s.params.slidesPerGroup),
    l = s.rtlTranslate ? s.translate : -s.translate;
  if (l >= s.snapGrid[a]) {
    const u = s.snapGrid[a],
      c = s.snapGrid[a + 1];
    l - u > (c - u) * n && (o += s.params.slidesPerGroup);
  } else {
    const u = s.snapGrid[a - 1],
      c = s.snapGrid[a];
    l - u <= (c - u) * n && (o -= s.params.slidesPerGroup);
  }
  return (
    (o = Math.max(o, 0)),
    (o = Math.min(o, s.slidesGrid.length - 1)),
    s.slideTo(o, i, e, t)
  );
}
function al() {
  const i = this,
    { params: e, $wrapperEl: t } = i,
    n = e.slidesPerView === "auto" ? i.slidesPerViewDynamic() : e.slidesPerView;
  let s = i.clickedIndex,
    o;
  if (e.loop) {
    if (i.animating) return;
    (o = parseInt($(i.clickedSlide).attr("data-swiper-slide-index"), 10)),
      e.centeredSlides
        ? s < i.loopedSlides - n / 2 ||
          s > i.slides.length - i.loopedSlides + n / 2
          ? (i.loopFix(),
            (s = t
              .children(
                `.${e.slideClass}[data-swiper-slide-index="${o}"]:not(.${e.slideDuplicateClass})`
              )
              .eq(0)
              .index()),
            dt(() => {
              i.slideTo(s);
            }))
          : i.slideTo(s)
        : s > i.slides.length - n
        ? (i.loopFix(),
          (s = t
            .children(
              `.${e.slideClass}[data-swiper-slide-index="${o}"]:not(.${e.slideDuplicateClass})`
            )
            .eq(0)
            .index()),
          dt(() => {
            i.slideTo(s);
          }))
        : i.slideTo(s);
  } else i.slideTo(s);
}
const ll = {
  slideTo: tl,
  slideToLoop: il,
  slideNext: nl,
  slidePrev: sl,
  slideReset: ol,
  slideToClosest: rl,
  slideToClickedSlide: al,
};
function ul() {
  const i = this,
    e = be(),
    { params: t, $wrapperEl: n } = i,
    s = n.children().length > 0 ? $(n.children()[0].parentNode) : n;
  s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
  let o = s.children(`.${t.slideClass}`);
  if (t.loopFillGroupWithBlank) {
    const l = t.slidesPerGroup - (o.length % t.slidesPerGroup);
    if (l !== t.slidesPerGroup) {
      for (let u = 0; u < l; u += 1) {
        const c = $(e.createElement("div")).addClass(
          `${t.slideClass} ${t.slideBlankClass}`
        );
        s.append(c);
      }
      o = s.children(`.${t.slideClass}`);
    }
  }
  t.slidesPerView === "auto" && !t.loopedSlides && (t.loopedSlides = o.length),
    (i.loopedSlides = Math.ceil(
      parseFloat(t.loopedSlides || t.slidesPerView, 10)
    )),
    (i.loopedSlides += t.loopAdditionalSlides),
    i.loopedSlides > o.length && (i.loopedSlides = o.length);
  const r = [],
    a = [];
  o.each((l, u) => {
    const c = $(l);
    u < i.loopedSlides && a.push(l),
      u < o.length && u >= o.length - i.loopedSlides && r.push(l),
      c.attr("data-swiper-slide-index", u);
  });
  for (let l = 0; l < a.length; l += 1)
    s.append($(a[l].cloneNode(!0)).addClass(t.slideDuplicateClass));
  for (let l = r.length - 1; l >= 0; l -= 1)
    s.prepend($(r[l].cloneNode(!0)).addClass(t.slideDuplicateClass));
}
function cl() {
  const i = this;
  i.emit("beforeLoopFix");
  const {
    activeIndex: e,
    slides: t,
    loopedSlides: n,
    allowSlidePrev: s,
    allowSlideNext: o,
    snapGrid: r,
    rtlTranslate: a,
  } = i;
  let l;
  (i.allowSlidePrev = !0), (i.allowSlideNext = !0);
  const c = -r[e] - i.getTranslate();
  e < n
    ? ((l = t.length - n * 3 + e),
      (l += n),
      i.slideTo(l, 0, !1, !0) &&
        c !== 0 &&
        i.setTranslate((a ? -i.translate : i.translate) - c))
    : e >= t.length - n &&
      ((l = -t.length + e + n),
      (l += n),
      i.slideTo(l, 0, !1, !0) &&
        c !== 0 &&
        i.setTranslate((a ? -i.translate : i.translate) - c)),
    (i.allowSlidePrev = s),
    (i.allowSlideNext = o),
    i.emit("loopFix");
}
function dl() {
  const i = this,
    { $wrapperEl: e, params: t, slides: n } = i;
  e
    .children(
      `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
    )
    .remove(),
    n.removeAttr("data-swiper-slide-index");
}
const fl = { loopCreate: ul, loopFix: cl, loopDestroy: dl };
function hl(i) {
  const e = this;
  if (
    e.support.touch ||
    !e.params.simulateTouch ||
    (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode
  )
    return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  (t.style.cursor = "move"),
    (t.style.cursor = i ? "-webkit-grabbing" : "-webkit-grab"),
    (t.style.cursor = i ? "-moz-grabbin" : "-moz-grab"),
    (t.style.cursor = i ? "grabbing" : "grab");
}
function pl() {
  const i = this;
  i.support.touch ||
    (i.params.watchOverflow && i.isLocked) ||
    i.params.cssMode ||
    (i[
      i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = "");
}
const vl = { setGrabCursor: hl, unsetGrabCursor: pl };
function ml(i, e = this) {
  function t(n) {
    return !n || n === be() || n === re()
      ? null
      : (n.assignedSlot && (n = n.assignedSlot),
        n.closest(i) || t(n.getRootNode().host));
  }
  return t(e);
}
function gl(i) {
  const e = this,
    t = be(),
    n = re(),
    s = e.touchEventsData,
    { params: o, touches: r, enabled: a } = e;
  if (!a || (e.animating && o.preventInteractionOnTransition)) return;
  !e.animating && o.cssMode && o.loop && e.loopFix();
  let l = i;
  l.originalEvent && (l = l.originalEvent);
  let u = $(l.target);
  if (
    (o.touchEventsTarget === "wrapper" && !u.closest(e.wrapperEl).length) ||
    ((s.isTouchEvent = l.type === "touchstart"),
    !s.isTouchEvent && "which" in l && l.which === 3) ||
    (!s.isTouchEvent && "button" in l && l.button > 0) ||
    (s.isTouched && s.isMoved)
  )
    return;
  !!o.noSwipingClass &&
    o.noSwipingClass !== "" &&
    l.target &&
    l.target.shadowRoot &&
    i.path &&
    i.path[0] &&
    (u = $(i.path[0]));
  const d = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
    f = !!(l.target && l.target.shadowRoot);
  if (o.noSwiping && (f ? ml(d, l.target) : u.closest(d)[0])) {
    e.allowClick = !0;
    return;
  }
  if (o.swipeHandler && !u.closest(o.swipeHandler)[0]) return;
  (r.currentX = l.type === "touchstart" ? l.targetTouches[0].pageX : l.pageX),
    (r.currentY = l.type === "touchstart" ? l.targetTouches[0].pageY : l.pageY);
  const p = r.currentX,
    h = r.currentY,
    g = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
    y = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
  if (g && (p <= y || p >= n.innerWidth - y))
    if (g === "prevent") i.preventDefault();
    else return;
  if (
    (Object.assign(s, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
    (r.startX = p),
    (r.startY = h),
    (s.touchStartTime = Oe()),
    (e.allowClick = !0),
    e.updateSize(),
    (e.swipeDirection = void 0),
    o.threshold > 0 && (s.allowThresholdMove = !1),
    l.type !== "touchstart")
  ) {
    let E = !0;
    u.is(s.focusableElements) && (E = !1),
      t.activeElement &&
        $(t.activeElement).is(s.focusableElements) &&
        t.activeElement !== u[0] &&
        t.activeElement.blur();
    const C = E && e.allowTouchMove && o.touchStartPreventDefault;
    (o.touchStartForcePreventDefault || C) &&
      !u[0].isContentEditable &&
      l.preventDefault();
  }
  e.emit("touchStart", l);
}
function yl(i) {
  const e = be(),
    t = this,
    n = t.touchEventsData,
    { params: s, touches: o, rtlTranslate: r, enabled: a } = t;
  if (!a) return;
  let l = i;
  if ((l.originalEvent && (l = l.originalEvent), !n.isTouched)) {
    n.startMoving && n.isScrolling && t.emit("touchMoveOpposite", l);
    return;
  }
  if (n.isTouchEvent && l.type !== "touchmove") return;
  const u =
      l.type === "touchmove" &&
      l.targetTouches &&
      (l.targetTouches[0] || l.changedTouches[0]),
    c = l.type === "touchmove" ? u.pageX : l.pageX,
    d = l.type === "touchmove" ? u.pageY : l.pageY;
  if (l.preventedByNestedSwiper) {
    (o.startX = c), (o.startY = d);
    return;
  }
  if (!t.allowTouchMove) {
    (t.allowClick = !1),
      n.isTouched &&
        (Object.assign(o, { startX: c, startY: d, currentX: c, currentY: d }),
        (n.touchStartTime = Oe()));
    return;
  }
  if (n.isTouchEvent && s.touchReleaseOnEdges && !s.loop) {
    if (t.isVertical()) {
      if (
        (d < o.startY && t.translate <= t.maxTranslate()) ||
        (d > o.startY && t.translate >= t.minTranslate())
      ) {
        (n.isTouched = !1), (n.isMoved = !1);
        return;
      }
    } else if (
      (c < o.startX && t.translate <= t.maxTranslate()) ||
      (c > o.startX && t.translate >= t.minTranslate())
    )
      return;
  }
  if (
    n.isTouchEvent &&
    e.activeElement &&
    l.target === e.activeElement &&
    $(l.target).is(n.focusableElements)
  ) {
    (n.isMoved = !0), (t.allowClick = !1);
    return;
  }
  if (
    (n.allowTouchCallbacks && t.emit("touchMove", l),
    l.targetTouches && l.targetTouches.length > 1)
  )
    return;
  (o.currentX = c), (o.currentY = d);
  const f = o.currentX - o.startX,
    p = o.currentY - o.startY;
  if (t.params.threshold && Math.sqrt(f ** 2 + p ** 2) < t.params.threshold)
    return;
  if (typeof n.isScrolling > "u") {
    let E;
    (t.isHorizontal() && o.currentY === o.startY) ||
    (t.isVertical() && o.currentX === o.startX)
      ? (n.isScrolling = !1)
      : f * f + p * p >= 25 &&
        ((E = (Math.atan2(Math.abs(p), Math.abs(f)) * 180) / Math.PI),
        (n.isScrolling = t.isHorizontal()
          ? E > s.touchAngle
          : 90 - E > s.touchAngle));
  }
  if (
    (n.isScrolling && t.emit("touchMoveOpposite", l),
    typeof n.startMoving > "u" &&
      (o.currentX !== o.startX || o.currentY !== o.startY) &&
      (n.startMoving = !0),
    n.isScrolling)
  ) {
    n.isTouched = !1;
    return;
  }
  if (!n.startMoving) return;
  (t.allowClick = !1),
    !s.cssMode && l.cancelable && l.preventDefault(),
    s.touchMoveStopPropagation && !s.nested && l.stopPropagation(),
    n.isMoved ||
      (s.loop && !s.cssMode && t.loopFix(),
      (n.startTranslate = t.getTranslate()),
      t.setTransition(0),
      t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
      (n.allowMomentumBounce = !1),
      s.grabCursor &&
        (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
        t.setGrabCursor(!0),
      t.emit("sliderFirstMove", l)),
    t.emit("sliderMove", l),
    (n.isMoved = !0);
  let h = t.isHorizontal() ? f : p;
  (o.diff = h),
    (h *= s.touchRatio),
    r && (h = -h),
    (t.swipeDirection = h > 0 ? "prev" : "next"),
    (n.currentTranslate = h + n.startTranslate);
  let g = !0,
    y = s.resistanceRatio;
  if (
    (s.touchReleaseOnEdges && (y = 0),
    h > 0 && n.currentTranslate > t.minTranslate()
      ? ((g = !1),
        s.resistance &&
          (n.currentTranslate =
            t.minTranslate() -
            1 +
            (-t.minTranslate() + n.startTranslate + h) ** y))
      : h < 0 &&
        n.currentTranslate < t.maxTranslate() &&
        ((g = !1),
        s.resistance &&
          (n.currentTranslate =
            t.maxTranslate() +
            1 -
            (t.maxTranslate() - n.startTranslate - h) ** y)),
    g && (l.preventedByNestedSwiper = !0),
    !t.allowSlideNext &&
      t.swipeDirection === "next" &&
      n.currentTranslate < n.startTranslate &&
      (n.currentTranslate = n.startTranslate),
    !t.allowSlidePrev &&
      t.swipeDirection === "prev" &&
      n.currentTranslate > n.startTranslate &&
      (n.currentTranslate = n.startTranslate),
    !t.allowSlidePrev &&
      !t.allowSlideNext &&
      (n.currentTranslate = n.startTranslate),
    s.threshold > 0)
  )
    if (Math.abs(h) > s.threshold || n.allowThresholdMove) {
      if (!n.allowThresholdMove) {
        (n.allowThresholdMove = !0),
          (o.startX = o.currentX),
          (o.startY = o.currentY),
          (n.currentTranslate = n.startTranslate),
          (o.diff = t.isHorizontal()
            ? o.currentX - o.startX
            : o.currentY - o.startY);
        return;
      }
    } else {
      n.currentTranslate = n.startTranslate;
      return;
    }
  !s.followFinger ||
    s.cssMode ||
    (((s.freeMode && s.freeMode.enabled && t.freeMode) ||
      s.watchSlidesProgress) &&
      (t.updateActiveIndex(), t.updateSlidesClasses()),
    t.params.freeMode &&
      s.freeMode.enabled &&
      t.freeMode &&
      t.freeMode.onTouchMove(),
    t.updateProgress(n.currentTranslate),
    t.setTranslate(n.currentTranslate));
}
function Cl(i) {
  const e = this,
    t = e.touchEventsData,
    { params: n, touches: s, rtlTranslate: o, slidesGrid: r, enabled: a } = e;
  if (!a) return;
  let l = i;
  if (
    (l.originalEvent && (l = l.originalEvent),
    t.allowTouchCallbacks && e.emit("touchEnd", l),
    (t.allowTouchCallbacks = !1),
    !t.isTouched)
  ) {
    t.isMoved && n.grabCursor && e.setGrabCursor(!1),
      (t.isMoved = !1),
      (t.startMoving = !1);
    return;
  }
  n.grabCursor &&
    t.isMoved &&
    t.isTouched &&
    (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
    e.setGrabCursor(!1);
  const u = Oe(),
    c = u - t.touchStartTime;
  if (e.allowClick) {
    const y = l.path || (l.composedPath && l.composedPath());
    e.updateClickedSlide((y && y[0]) || l.target),
      e.emit("tap click", l),
      c < 300 &&
        u - t.lastClickTime < 300 &&
        e.emit("doubleTap doubleClick", l);
  }
  if (
    ((t.lastClickTime = Oe()),
    dt(() => {
      e.destroyed || (e.allowClick = !0);
    }),
    !t.isTouched ||
      !t.isMoved ||
      !e.swipeDirection ||
      s.diff === 0 ||
      t.currentTranslate === t.startTranslate)
  ) {
    (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
    return;
  }
  (t.isTouched = !1), (t.isMoved = !1), (t.startMoving = !1);
  let d;
  if (
    (n.followFinger
      ? (d = o ? e.translate : -e.translate)
      : (d = -t.currentTranslate),
    n.cssMode)
  )
    return;
  if (e.params.freeMode && n.freeMode.enabled) {
    e.freeMode.onTouchEnd({ currentPos: d });
    return;
  }
  let f = 0,
    p = e.slidesSizesGrid[0];
  for (
    let y = 0;
    y < r.length;
    y += y < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
  ) {
    const E = y < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    typeof r[y + E] < "u"
      ? d >= r[y] && d < r[y + E] && ((f = y), (p = r[y + E] - r[y]))
      : d >= r[y] && ((f = y), (p = r[r.length - 1] - r[r.length - 2]));
  }
  const h = (d - r[f]) / p,
    g = f < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
  if (c > n.longSwipesMs) {
    if (!n.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" &&
      (h >= n.longSwipesRatio ? e.slideTo(f + g) : e.slideTo(f)),
      e.swipeDirection === "prev" &&
        (h > 1 - n.longSwipesRatio ? e.slideTo(f + g) : e.slideTo(f));
  } else {
    if (!n.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation &&
    (l.target === e.navigation.nextEl || l.target === e.navigation.prevEl)
      ? l.target === e.navigation.nextEl
        ? e.slideTo(f + g)
        : e.slideTo(f)
      : (e.swipeDirection === "next" && e.slideTo(f + g),
        e.swipeDirection === "prev" && e.slideTo(f));
  }
}
function Bi() {
  const i = this,
    { params: e, el: t } = i;
  if (t && t.offsetWidth === 0) return;
  e.breakpoints && i.setBreakpoint();
  const { allowSlideNext: n, allowSlidePrev: s, snapGrid: o } = i;
  (i.allowSlideNext = !0),
    (i.allowSlidePrev = !0),
    i.updateSize(),
    i.updateSlides(),
    i.updateSlidesClasses(),
    (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
    i.isEnd &&
    !i.isBeginning &&
    !i.params.centeredSlides
      ? i.slideTo(i.slides.length - 1, 0, !1, !0)
      : i.slideTo(i.activeIndex, 0, !1, !0),
    i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.run(),
    (i.allowSlidePrev = s),
    (i.allowSlideNext = n),
    i.params.watchOverflow && o !== i.snapGrid && i.checkOverflow();
}
function bl(i) {
  const e = this;
  !e.enabled ||
    e.allowClick ||
    (e.params.preventClicks && i.preventDefault(),
    e.params.preventClicksPropagation &&
      e.animating &&
      (i.stopPropagation(), i.stopImmediatePropagation()));
}
function _l() {
  const i = this,
    { wrapperEl: e, rtlTranslate: t, enabled: n } = i;
  if (!n) return;
  (i.previousTranslate = i.translate),
    i.isHorizontal()
      ? (i.translate = -e.scrollLeft)
      : (i.translate = -e.scrollTop),
    i.translate === -0 && (i.translate = 0),
    i.updateActiveIndex(),
    i.updateSlidesClasses();
  let s;
  const o = i.maxTranslate() - i.minTranslate();
  o === 0 ? (s = 0) : (s = (i.translate - i.minTranslate()) / o),
    s !== i.progress && i.updateProgress(t ? -i.translate : i.translate),
    i.emit("setTranslate", i.translate, !1);
}
let ki = !1;
function wl() {}
const Cn = (i, e) => {
  const t = be(),
    {
      params: n,
      touchEvents: s,
      el: o,
      wrapperEl: r,
      device: a,
      support: l,
    } = i,
    u = !!n.nested,
    c = e === "on" ? "addEventListener" : "removeEventListener",
    d = e;
  if (!l.touch)
    o[c](s.start, i.onTouchStart, !1),
      t[c](s.move, i.onTouchMove, u),
      t[c](s.end, i.onTouchEnd, !1);
  else {
    const f =
      s.start === "touchstart" && l.passiveListener && n.passiveListeners
        ? { passive: !0, capture: !1 }
        : !1;
    o[c](s.start, i.onTouchStart, f),
      o[c](
        s.move,
        i.onTouchMove,
        l.passiveListener ? { passive: !1, capture: u } : u
      ),
      o[c](s.end, i.onTouchEnd, f),
      s.cancel && o[c](s.cancel, i.onTouchEnd, f);
  }
  (n.preventClicks || n.preventClicksPropagation) &&
    o[c]("click", i.onClick, !0),
    n.cssMode && r[c]("scroll", i.onScroll),
    n.updateOnWindowResize
      ? i[d](
          a.ios || a.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Bi,
          !0
        )
      : i[d]("observerUpdate", Bi, !0);
};
function El() {
  const i = this,
    e = be(),
    { params: t, support: n } = i;
  (i.onTouchStart = gl.bind(i)),
    (i.onTouchMove = yl.bind(i)),
    (i.onTouchEnd = Cl.bind(i)),
    t.cssMode && (i.onScroll = _l.bind(i)),
    (i.onClick = bl.bind(i)),
    n.touch && !ki && (e.addEventListener("touchstart", wl), (ki = !0)),
    Cn(i, "on");
}
function xl() {
  Cn(this, "off");
}
const Sl = { attachEvents: El, detachEvents: xl },
  Di = (i, e) => i.grid && e.grid && e.grid.rows > 1;
function Fl() {
  const i = this,
    {
      activeIndex: e,
      initialized: t,
      loopedSlides: n = 0,
      params: s,
      $el: o,
    } = i,
    r = s.breakpoints;
  if (!r || (r && Object.keys(r).length === 0)) return;
  const a = i.getBreakpoint(r, i.params.breakpointsBase, i.el);
  if (!a || i.currentBreakpoint === a) return;
  const u = (a in r ? r[a] : void 0) || i.originalParams,
    c = Di(i, s),
    d = Di(i, u),
    f = s.enabled;
  c && !d
    ? (o.removeClass(
        `${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`
      ),
      i.emitContainerClasses())
    : !c &&
      d &&
      (o.addClass(`${s.containerModifierClass}grid`),
      ((u.grid.fill && u.grid.fill === "column") ||
        (!u.grid.fill && s.grid.fill === "column")) &&
        o.addClass(`${s.containerModifierClass}grid-column`),
      i.emitContainerClasses());
  const p = u.direction && u.direction !== s.direction,
    h = s.loop && (u.slidesPerView !== s.slidesPerView || p);
  p && t && i.changeDirection(), ye(i.params, u);
  const g = i.params.enabled;
  Object.assign(i, {
    allowTouchMove: i.params.allowTouchMove,
    allowSlideNext: i.params.allowSlideNext,
    allowSlidePrev: i.params.allowSlidePrev,
  }),
    f && !g ? i.disable() : !f && g && i.enable(),
    (i.currentBreakpoint = a),
    i.emit("_beforeBreakpoint", u),
    h &&
      t &&
      (i.loopDestroy(),
      i.loopCreate(),
      i.updateSlides(),
      i.slideTo(e - n + i.loopedSlides, 0, !1)),
    i.emit("breakpoint", u);
}
function Tl(i, e = "window", t) {
  if (!i || (e === "container" && !t)) return;
  let n = !1;
  const s = re(),
    o = e === "window" ? s.innerHeight : t.clientHeight,
    r = Object.keys(i).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const l = parseFloat(a.substr(1));
        return { value: o * l, point: a };
      }
      return { value: a, point: a };
    });
  r.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
  for (let a = 0; a < r.length; a += 1) {
    const { point: l, value: u } = r[a];
    e === "window"
      ? s.matchMedia(`(min-width: ${u}px)`).matches && (n = l)
      : u <= t.clientWidth && (n = l);
  }
  return n || "max";
}
const Bl = { setBreakpoint: Fl, getBreakpoint: Tl };
function kl(i, e) {
  const t = [];
  return (
    i.forEach((n) => {
      typeof n == "object"
        ? Object.keys(n).forEach((s) => {
            n[s] && t.push(e + s);
          })
        : typeof n == "string" && t.push(e + n);
    }),
    t
  );
}
function Dl() {
  const i = this,
    { classNames: e, params: t, rtl: n, $el: s, device: o, support: r } = i,
    a = kl(
      [
        "initialized",
        t.direction,
        { "pointer-events": !r.touch },
        { "free-mode": i.params.freeMode && t.freeMode.enabled },
        { autoheight: t.autoHeight },
        { rtl: n },
        { grid: t.grid && t.grid.rows > 1 },
        {
          "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column",
        },
        { android: o.android },
        { ios: o.ios },
        { "css-mode": t.cssMode },
        { centered: t.cssMode && t.centeredSlides },
      ],
      t.containerModifierClass
    );
  e.push(...a), s.addClass([...e].join(" ")), i.emitContainerClasses();
}
function Al() {
  const i = this,
    { $el: e, classNames: t } = i;
  e.removeClass(t.join(" ")), i.emitContainerClasses();
}
const Ml = { addClasses: Dl, removeClasses: Al };
function Pl(i, e, t, n, s, o) {
  const r = re();
  let a;
  function l() {
    o && o();
  }
  !$(i).parent("picture")[0] && (!i.complete || !s) && e
    ? ((a = new r.Image()),
      (a.onload = l),
      (a.onerror = l),
      n && (a.sizes = n),
      t && (a.srcset = t),
      e && (a.src = e))
    : l();
}
function Ol() {
  const i = this;
  i.imagesToLoad = i.$el.find("img");
  function e() {
    typeof i > "u" ||
      i === null ||
      !i ||
      i.destroyed ||
      (i.imagesLoaded !== void 0 && (i.imagesLoaded += 1),
      i.imagesLoaded === i.imagesToLoad.length &&
        (i.params.updateOnImagesReady && i.update(), i.emit("imagesReady")));
  }
  for (let t = 0; t < i.imagesToLoad.length; t += 1) {
    const n = i.imagesToLoad[t];
    i.loadImage(
      n,
      n.currentSrc || n.getAttribute("src"),
      n.srcset || n.getAttribute("srcset"),
      n.sizes || n.getAttribute("sizes"),
      !0,
      e
    );
  }
}
const Ll = { loadImage: Pl, preloadImages: Ol };
function zl() {
  const i = this,
    { isLocked: e, params: t } = i,
    { slidesOffsetBefore: n } = t;
  if (n) {
    const s = i.slides.length - 1,
      o = i.slidesGrid[s] + i.slidesSizesGrid[s] + n * 2;
    i.isLocked = i.size > o;
  } else i.isLocked = i.snapGrid.length === 1;
  t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked),
    t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked),
    e && e !== i.isLocked && (i.isEnd = !1),
    e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock");
}
const Il = { checkOverflow: zl },
  Ai = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Rl(i, e) {
  return function (n = {}) {
    const s = Object.keys(n)[0],
      o = n[s];
    if (typeof o != "object" || o === null) {
      ye(e, n);
      return;
    }
    if (
      (["navigation", "pagination", "scrollbar"].indexOf(s) >= 0 &&
        i[s] === !0 &&
        (i[s] = { auto: !0 }),
      !(s in i && "enabled" in o))
    ) {
      ye(e, n);
      return;
    }
    i[s] === !0 && (i[s] = { enabled: !0 }),
      typeof i[s] == "object" && !("enabled" in i[s]) && (i[s].enabled = !0),
      i[s] || (i[s] = { enabled: !1 }),
      ye(e, n);
  };
}
const zt = {
    eventsEmitter: Oa,
    update: qa,
    translate: Za,
    transition: el,
    slide: ll,
    loop: fl,
    grabCursor: vl,
    events: Sl,
    breakpoints: Bl,
    checkOverflow: Il,
    classes: Ml,
    images: Ll,
  },
  It = {};
class ue {
  constructor(...e) {
    let t, n;
    if (
      (e.length === 1 &&
      e[0].constructor &&
      Object.prototype.toString.call(e[0]).slice(8, -1) === "Object"
        ? (n = e[0])
        : ([t, n] = e),
      n || (n = {}),
      (n = ye({}, n)),
      t && !n.el && (n.el = t),
      n.el && $(n.el).length > 1)
    ) {
      const a = [];
      return (
        $(n.el).each((l) => {
          const u = ye({}, n, { el: l });
          a.push(new ue(u));
        }),
        a
      );
    }
    const s = this;
    (s.__swiper__ = !0),
      (s.support = gn()),
      (s.device = ka({ userAgent: n.userAgent })),
      (s.browser = Aa()),
      (s.eventsListeners = {}),
      (s.eventsAnyListeners = []),
      (s.modules = [...s.__modules__]),
      n.modules && Array.isArray(n.modules) && s.modules.push(...n.modules);
    const o = {};
    s.modules.forEach((a) => {
      a({
        swiper: s,
        extendParams: Rl(n, o),
        on: s.on.bind(s),
        once: s.once.bind(s),
        off: s.off.bind(s),
        emit: s.emit.bind(s),
      });
    });
    const r = ye({}, Ai, o);
    return (
      (s.params = ye({}, r, It, n)),
      (s.originalParams = ye({}, s.params)),
      (s.passedParams = ye({}, n)),
      s.params &&
        s.params.on &&
        Object.keys(s.params.on).forEach((a) => {
          s.on(a, s.params.on[a]);
        }),
      s.params && s.params.onAny && s.onAny(s.params.onAny),
      (s.$ = $),
      Object.assign(s, {
        enabled: s.params.enabled,
        el: t,
        classNames: [],
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return s.params.direction === "horizontal";
        },
        isVertical() {
          return s.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: s.params.allowSlideNext,
        allowSlidePrev: s.params.allowSlidePrev,
        touchEvents: (function () {
          const l = ["touchstart", "touchmove", "touchend", "touchcancel"],
            u = ["pointerdown", "pointermove", "pointerup"];
          return (
            (s.touchEventsTouch = {
              start: l[0],
              move: l[1],
              end: l[2],
              cancel: l[3],
            }),
            (s.touchEventsDesktop = { start: u[0], move: u[1], end: u[2] }),
            s.support.touch || !s.params.simulateTouch
              ? s.touchEventsTouch
              : s.touchEventsDesktop
          );
        })(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: s.params.focusableElements,
          lastClickTime: Oe(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0,
        },
        allowClick: !0,
        allowTouchMove: s.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      s.emit("_swiper"),
      s.params.init && s.init(),
      s
    );
  }
  enable() {
    const e = this;
    e.enabled ||
      ((e.enabled = !0),
      e.params.grabCursor && e.setGrabCursor(),
      e.emit("enable"));
  }
  disable() {
    const e = this;
    !e.enabled ||
      ((e.enabled = !1),
      e.params.grabCursor && e.unsetGrabCursor(),
      e.emit("disable"));
  }
  setProgress(e, t) {
    const n = this;
    e = Math.min(Math.max(e, 0), 1);
    const s = n.minTranslate(),
      r = (n.maxTranslate() - s) * e + s;
    n.translateTo(r, typeof t > "u" ? 0 : t),
      n.updateActiveIndex(),
      n.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = e.el.className
      .split(" ")
      .filter(
        (n) =>
          n.indexOf("swiper") === 0 ||
          n.indexOf(e.params.containerModifierClass) === 0
      );
    e.emit("_containerClasses", t.join(" "));
  }
  getSlideClasses(e) {
    const t = this;
    return e.className
      .split(" ")
      .filter(
        (n) =>
          n.indexOf("swiper-slide") === 0 ||
          n.indexOf(t.params.slideClass) === 0
      )
      .join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = [];
    e.slides.each((n) => {
      const s = e.getSlideClasses(n);
      t.push({ slideEl: n, classNames: s }), e.emit("_slideClass", n, s);
    }),
      e.emit("_slideClasses", t);
  }
  slidesPerViewDynamic(e = "current", t = !1) {
    const n = this,
      {
        params: s,
        slides: o,
        slidesGrid: r,
        slidesSizesGrid: a,
        size: l,
        activeIndex: u,
      } = n;
    let c = 1;
    if (s.centeredSlides) {
      let d = o[u].swiperSlideSize,
        f;
      for (let p = u + 1; p < o.length; p += 1)
        o[p] &&
          !f &&
          ((d += o[p].swiperSlideSize), (c += 1), d > l && (f = !0));
      for (let p = u - 1; p >= 0; p -= 1)
        o[p] &&
          !f &&
          ((d += o[p].swiperSlideSize), (c += 1), d > l && (f = !0));
    } else if (e === "current")
      for (let d = u + 1; d < o.length; d += 1)
        (t ? r[d] + a[d] - r[u] < l : r[d] - r[u] < l) && (c += 1);
    else for (let d = u - 1; d >= 0; d -= 1) r[u] - r[d] < l && (c += 1);
    return c;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const { snapGrid: t, params: n } = e;
    n.breakpoints && e.setBreakpoint(),
      e.updateSize(),
      e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses();
    function s() {
      const r = e.rtlTranslate ? e.translate * -1 : e.translate,
        a = Math.min(Math.max(r, e.maxTranslate()), e.minTranslate());
      e.setTranslate(a), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let o;
    e.params.freeMode && e.params.freeMode.enabled
      ? (s(), e.params.autoHeight && e.updateAutoHeight())
      : ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) &&
        e.isEnd &&
        !e.params.centeredSlides
          ? (o = e.slideTo(e.slides.length - 1, 0, !1, !0))
          : (o = e.slideTo(e.activeIndex, 0, !1, !0)),
        o || s()),
      n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
      e.emit("update");
  }
  changeDirection(e, t = !0) {
    const n = this,
      s = n.params.direction;
    return (
      e || (e = s === "horizontal" ? "vertical" : "horizontal"),
      e === s ||
        (e !== "horizontal" && e !== "vertical") ||
        (n.$el
          .removeClass(`${n.params.containerModifierClass}${s}`)
          .addClass(`${n.params.containerModifierClass}${e}`),
        n.emitContainerClasses(),
        (n.params.direction = e),
        n.slides.each((o) => {
          e === "vertical" ? (o.style.width = "") : (o.style.height = "");
        }),
        n.emit("changeDirection"),
        t && n.update()),
      n
    );
  }
  mount(e) {
    const t = this;
    if (t.mounted) return !0;
    const n = $(e || t.params.el);
    if (((e = n[0]), !e)) return !1;
    e.swiper = t;
    const s = () =>
      `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let r = (() => {
      if (e && e.shadowRoot && e.shadowRoot.querySelector) {
        const a = $(e.shadowRoot.querySelector(s()));
        return (a.children = (l) => n.children(l)), a;
      }
      return n.children(s());
    })();
    if (r.length === 0 && t.params.createElements) {
      const l = be().createElement("div");
      (r = $(l)),
        (l.className = t.params.wrapperClass),
        n.append(l),
        n.children(`.${t.params.slideClass}`).each((u) => {
          r.append(u);
        });
    }
    return (
      Object.assign(t, {
        $el: n,
        el: e,
        $wrapperEl: r,
        wrapperEl: r[0],
        mounted: !0,
        rtl: e.dir.toLowerCase() === "rtl" || n.css("direction") === "rtl",
        rtlTranslate:
          t.params.direction === "horizontal" &&
          (e.dir.toLowerCase() === "rtl" || n.css("direction") === "rtl"),
        wrongRTL: r.css("display") === "-webkit-box",
      }),
      !0
    );
  }
  init(e) {
    const t = this;
    return (
      t.initialized ||
        t.mount(e) === !1 ||
        (t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.params.loop && t.loopCreate(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.preloadImages && t.preloadImages(),
        t.params.loop
          ? t.slideTo(
              t.params.initialSlide + t.loopedSlides,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
        t.attachEvents(),
        (t.initialized = !0),
        t.emit("init"),
        t.emit("afterInit")),
      t
    );
  }
  destroy(e = !0, t = !0) {
    const n = this,
      { params: s, $el: o, $wrapperEl: r, slides: a } = n;
    return (
      typeof n.params > "u" ||
        n.destroyed ||
        (n.emit("beforeDestroy"),
        (n.initialized = !1),
        n.detachEvents(),
        s.loop && n.loopDestroy(),
        t &&
          (n.removeClasses(),
          o.removeAttr("style"),
          r.removeAttr("style"),
          a &&
            a.length &&
            a
              .removeClass(
                [
                  s.slideVisibleClass,
                  s.slideActiveClass,
                  s.slideNextClass,
                  s.slidePrevClass,
                ].join(" ")
              )
              .removeAttr("style")
              .removeAttr("data-swiper-slide-index")),
        n.emit("destroy"),
        Object.keys(n.eventsListeners).forEach((l) => {
          n.off(l);
        }),
        e !== !1 && ((n.$el[0].swiper = null), Ea(n)),
        (n.destroyed = !0)),
      null
    );
  }
  static extendDefaults(e) {
    ye(It, e);
  }
  static get extendedDefaults() {
    return It;
  }
  static get defaults() {
    return Ai;
  }
  static installModule(e) {
    ue.prototype.__modules__ || (ue.prototype.__modules__ = []);
    const t = ue.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e)
      ? (e.forEach((t) => ue.installModule(t)), ue)
      : (ue.installModule(e), ue);
  }
}
Object.keys(zt).forEach((i) => {
  Object.keys(zt[i]).forEach((e) => {
    ue.prototype[e] = zt[i][e];
  });
});
ue.use([Ma, Pa]);
function bn({ swiper: i, extendParams: e, on: t, emit: n }) {
  const s = re();
  e({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
    },
  }),
    (i.mousewheel = { enabled: !1 });
  let o,
    r = Oe(),
    a;
  const l = [];
  function u(C) {
    let w = 0,
      S = 0,
      k = 0,
      T = 0;
    return (
      "detail" in C && (S = C.detail),
      "wheelDelta" in C && (S = -C.wheelDelta / 120),
      "wheelDeltaY" in C && (S = -C.wheelDeltaY / 120),
      "wheelDeltaX" in C && (w = -C.wheelDeltaX / 120),
      "axis" in C && C.axis === C.HORIZONTAL_AXIS && ((w = S), (S = 0)),
      (k = w * 10),
      (T = S * 10),
      "deltaY" in C && (T = C.deltaY),
      "deltaX" in C && (k = C.deltaX),
      C.shiftKey && !k && ((k = T), (T = 0)),
      (k || T) &&
        C.deltaMode &&
        (C.deltaMode === 1 ? ((k *= 40), (T *= 40)) : ((k *= 800), (T *= 800))),
      k && !w && (w = k < 1 ? -1 : 1),
      T && !S && (S = T < 1 ? -1 : 1),
      { spinX: w, spinY: S, pixelX: k, pixelY: T }
    );
  }
  function c() {
    !i.enabled || (i.mouseEntered = !0);
  }
  function d() {
    !i.enabled || (i.mouseEntered = !1);
  }
  function f(C) {
    return (i.params.mousewheel.thresholdDelta &&
      C.delta < i.params.mousewheel.thresholdDelta) ||
      (i.params.mousewheel.thresholdTime &&
        Oe() - r < i.params.mousewheel.thresholdTime)
      ? !1
      : C.delta >= 6 && Oe() - r < 60
      ? !0
      : (C.direction < 0
          ? (!i.isEnd || i.params.loop) &&
            !i.animating &&
            (i.slideNext(), n("scroll", C.raw))
          : (!i.isBeginning || i.params.loop) &&
            !i.animating &&
            (i.slidePrev(), n("scroll", C.raw)),
        (r = new s.Date().getTime()),
        !1);
  }
  function p(C) {
    const b = i.params.mousewheel;
    if (C.direction < 0) {
      if (i.isEnd && !i.params.loop && b.releaseOnEdges) return !0;
    } else if (i.isBeginning && !i.params.loop && b.releaseOnEdges) return !0;
    return !1;
  }
  function h(C) {
    let b = C,
      _ = !0;
    if (!i.enabled) return;
    const x = i.params.mousewheel;
    i.params.cssMode && b.preventDefault();
    let w = i.$el;
    if (
      (i.params.mousewheel.eventsTarget !== "container" &&
        (w = $(i.params.mousewheel.eventsTarget)),
      !i.mouseEntered && !w[0].contains(b.target) && !x.releaseOnEdges)
    )
      return !0;
    b.originalEvent && (b = b.originalEvent);
    let S = 0;
    const k = i.rtlTranslate ? -1 : 1,
      T = u(b);
    if (x.forceToAxis)
      if (i.isHorizontal())
        if (Math.abs(T.pixelX) > Math.abs(T.pixelY)) S = -T.pixelX * k;
        else return !0;
      else if (Math.abs(T.pixelY) > Math.abs(T.pixelX)) S = -T.pixelY;
      else return !0;
    else
      S = Math.abs(T.pixelX) > Math.abs(T.pixelY) ? -T.pixelX * k : -T.pixelY;
    if (S === 0) return !0;
    x.invert && (S = -S);
    let B = i.getTranslate() + S * x.sensitivity;
    if (
      (B >= i.minTranslate() && (B = i.minTranslate()),
      B <= i.maxTranslate() && (B = i.maxTranslate()),
      (_ = i.params.loop
        ? !0
        : !(B === i.minTranslate() || B === i.maxTranslate())),
      _ && i.params.nested && b.stopPropagation(),
      !i.params.freeMode || !i.params.freeMode.enabled)
    ) {
      const D = {
        time: Oe(),
        delta: Math.abs(S),
        direction: Math.sign(S),
        raw: C,
      };
      l.length >= 2 && l.shift();
      const z = l.length ? l[l.length - 1] : void 0;
      if (
        (l.push(D),
        z
          ? (D.direction !== z.direction ||
              D.delta > z.delta ||
              D.time > z.time + 150) &&
            f(D)
          : f(D),
        p(D))
      )
        return !0;
    } else {
      const D = { time: Oe(), delta: Math.abs(S), direction: Math.sign(S) },
        z =
          a &&
          D.time < a.time + 500 &&
          D.delta <= a.delta &&
          D.direction === a.direction;
      if (!z) {
        (a = void 0), i.params.loop && i.loopFix();
        let V = i.getTranslate() + S * x.sensitivity;
        const U = i.isBeginning,
          F = i.isEnd;
        if (
          (V >= i.minTranslate() && (V = i.minTranslate()),
          V <= i.maxTranslate() && (V = i.maxTranslate()),
          i.setTransition(0),
          i.setTranslate(V),
          i.updateProgress(),
          i.updateActiveIndex(),
          i.updateSlidesClasses(),
          ((!U && i.isBeginning) || (!F && i.isEnd)) && i.updateSlidesClasses(),
          i.params.freeMode.sticky)
        ) {
          clearTimeout(o), (o = void 0), l.length >= 15 && l.shift();
          const A = l.length ? l[l.length - 1] : void 0,
            M = l[0];
          if (
            (l.push(D), A && (D.delta > A.delta || D.direction !== A.direction))
          )
            l.splice(0);
          else if (
            l.length >= 15 &&
            D.time - M.time < 500 &&
            M.delta - D.delta >= 1 &&
            D.delta <= 6
          ) {
            const O = S > 0 ? 0.8 : 0.2;
            (a = D),
              l.splice(0),
              (o = dt(() => {
                i.slideToClosest(i.params.speed, !0, void 0, O);
              }, 0));
          }
          o ||
            (o = dt(() => {
              (a = D),
                l.splice(0),
                i.slideToClosest(i.params.speed, !0, void 0, 0.5);
            }, 500));
        }
        if (
          (z || n("scroll", b),
          i.params.autoplay &&
            i.params.autoplayDisableOnInteraction &&
            i.autoplay.stop(),
          V === i.minTranslate() || V === i.maxTranslate())
        )
          return !0;
      }
    }
    return b.preventDefault ? b.preventDefault() : (b.returnValue = !1), !1;
  }
  function g(C) {
    let b = i.$el;
    i.params.mousewheel.eventsTarget !== "container" &&
      (b = $(i.params.mousewheel.eventsTarget)),
      b[C]("mouseenter", c),
      b[C]("mouseleave", d),
      b[C]("wheel", h);
  }
  function y() {
    return i.params.cssMode
      ? (i.wrapperEl.removeEventListener("wheel", h), !0)
      : i.mousewheel.enabled
      ? !1
      : (g("on"), (i.mousewheel.enabled = !0), !0);
  }
  function E() {
    return i.params.cssMode
      ? (i.wrapperEl.addEventListener(event, h), !0)
      : i.mousewheel.enabled
      ? (g("off"), (i.mousewheel.enabled = !1), !0)
      : !1;
  }
  t("init", () => {
    !i.params.mousewheel.enabled && i.params.cssMode && E(),
      i.params.mousewheel.enabled && y();
  }),
    t("destroy", () => {
      i.params.cssMode && y(), i.mousewheel.enabled && E();
    }),
    Object.assign(i.mousewheel, { enable: y, disable: E });
}
function Ze(i) {
  return (
    typeof i == "object" &&
    i !== null &&
    i.constructor &&
    Object.prototype.toString.call(i).slice(8, -1) === "Object"
  );
}
function je(i, e) {
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(e)
    .filter((n) => t.indexOf(n) < 0)
    .forEach((n) => {
      typeof i[n] > "u"
        ? (i[n] = e[n])
        : Ze(e[n]) && Ze(i[n]) && Object.keys(e[n]).length > 0
        ? e[n].__swiper__
          ? (i[n] = e[n])
          : je(i[n], e[n])
        : (i[n] = e[n]);
    });
}
function _n(i = {}) {
  return (
    i.navigation &&
    typeof i.navigation.nextEl > "u" &&
    typeof i.navigation.prevEl > "u"
  );
}
function wn(i = {}) {
  return i.pagination && typeof i.pagination.el > "u";
}
function En(i = {}) {
  return i.scrollbar && typeof i.scrollbar.el > "u";
}
function xn(i = "") {
  const e = i
      .split(" ")
      .map((n) => n.trim())
      .filter((n) => !!n),
    t = [];
  return (
    e.forEach((n) => {
      t.indexOf(n) < 0 && t.push(n);
    }),
    t.join(" ")
  );
}
const Sn = [
  "modules",
  "init",
  "_direction",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_preloadImages",
  "updateOnImagesReady",
  "_loop",
  "_loopAdditionalSlides",
  "_loopedSlides",
  "_loopFillGroupWithBlank",
  "loopPreventsSlide",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideBlankClass",
  "slideActiveClass",
  "slideDuplicateActiveClass",
  "slideVisibleClass",
  "slideDuplicateClass",
  "slideNextClass",
  "slideDuplicateNextClass",
  "slidePrevClass",
  "slideDuplicatePrevClass",
  "wrapperClass",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "lazy",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
];
function Mi(i = {}) {
  const e = { on: {} },
    t = {};
  je(e, ue.defaults),
    je(e, ue.extendedDefaults),
    (e._emitClasses = !0),
    (e.init = !1);
  const n = {},
    s = Sn.map((r) => r.replace(/_/, "")),
    o = Object.assign({}, i);
  return (
    Object.keys(o).forEach((r) => {
      typeof i[r] > "u" ||
        (s.indexOf(r) >= 0
          ? Ze(i[r])
            ? ((e[r] = {}), (t[r] = {}), je(e[r], i[r]), je(t[r], i[r]))
            : ((e[r] = i[r]), (t[r] = i[r]))
          : r.search(/on[A-Z]/) === 0 && typeof i[r] == "function"
          ? (e.on[`${r[2].toLowerCase()}${r.substr(3)}`] = i[r])
          : (n[r] = i[r]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((r) => {
      e[r] === !0 && (e[r] = {}), e[r] === !1 && delete e[r];
    }),
    { params: e, passedParams: t, rest: n }
  );
}
function $l(i) {
  return new ue(i);
}
function Nl(
  { el: i, nextEl: e, prevEl: t, paginationEl: n, scrollbarEl: s, swiper: o },
  r
) {
  _n(r) &&
    e &&
    t &&
    ((o.params.navigation.nextEl = e),
    (o.originalParams.navigation.nextEl = e),
    (o.params.navigation.prevEl = t),
    (o.originalParams.navigation.prevEl = t)),
    wn(r) &&
      n &&
      ((o.params.pagination.el = n), (o.originalParams.pagination.el = n)),
    En(r) &&
      s &&
      ((o.params.scrollbar.el = s), (o.originalParams.scrollbar.el = s)),
    o.init(i);
}
function Fn(i, e) {
  let t = e.slidesPerView;
  if (e.breakpoints) {
    const s = ue.prototype.getBreakpoint(e.breakpoints),
      o = s in e.breakpoints ? e.breakpoints[s] : void 0;
    o && o.slidesPerView && (t = o.slidesPerView);
  }
  let n = Math.ceil(parseFloat(e.loopedSlides || t, 10));
  return (n += e.loopAdditionalSlides), n > i.length && (n = i.length), n;
}
function Hl(i, e, t) {
  const n = e.map(
    (l, u) => (
      l.props || (l.props = {}),
      (l.props.swiperRef = i),
      (l.props["data-swiper-slide-index"] = u),
      l
    )
  );
  function s(l, u, c) {
    return (
      l.props || (l.props = {}),
      Te(
        l.type,
        {
          ...l.props,
          key: `${l.key}-duplicate-${u}-${c}`,
          class: `${l.props.className || ""} ${t.slideDuplicateClass} ${
            l.props.class || ""
          }`,
        },
        l.children
      )
    );
  }
  if (t.loopFillGroupWithBlank) {
    const l = t.slidesPerGroup - (n.length % t.slidesPerGroup);
    if (l !== t.slidesPerGroup)
      for (let u = 0; u < l; u += 1) {
        const c = Te("div", { class: `${t.slideClass} ${t.slideBlankClass}` });
        n.push(c);
      }
  }
  t.slidesPerView === "auto" && !t.loopedSlides && (t.loopedSlides = n.length);
  const o = Fn(n, t),
    r = [],
    a = [];
  return (
    n.forEach((l, u) => {
      u < o && a.push(s(l, u, "prepend")),
        u < n.length && u >= n.length - o && r.push(s(l, u, "append"));
    }),
    i.value && (i.value.loopedSlides = o),
    [...r, ...n, ...a]
  );
}
function Vl(i, e, t, n) {
  const s = [];
  if (!e) return s;
  const o = (u) => {
      s.indexOf(u) < 0 && s.push(u);
    },
    r = n.map((u) => u.props && u.props.key),
    a = t.map((u) => u.props && u.props.key);
  return (
    r.join("") !== a.join("") && s.push("children"),
    n.length !== t.length && s.push("children"),
    Sn.filter((u) => u[0] === "_")
      .map((u) => u.replace(/_/, ""))
      .forEach((u) => {
        if (u in i && u in e)
          if (Ze(i[u]) && Ze(e[u])) {
            const c = Object.keys(i[u]),
              d = Object.keys(e[u]);
            c.length !== d.length
              ? o(u)
              : (c.forEach((f) => {
                  i[u][f] !== e[u][f] && o(u);
                }),
                d.forEach((f) => {
                  i[u][f] !== e[u][f] && o(u);
                }));
          } else i[u] !== e[u] && o(u);
      }),
    s
  );
}
function Rt(i = {}, e, t) {
  const n = [],
    s = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    o = (r, a) => {
      !Array.isArray(r) ||
        r.forEach((l) => {
          const u = typeof l.type == "symbol";
          a === "default" && (a = "container-end"),
            u && l.children
              ? o(l.children, "default")
              : l.type &&
                (l.type.name === "SwiperSlide" ||
                  l.type.name === "AsyncComponentWrapper")
              ? n.push(l)
              : s[a] && s[a].push(l);
        });
    };
  return (
    Object.keys(i).forEach((r) => {
      const a = i[r]();
      o(a, r);
    }),
    (t.value = e.value),
    (e.value = n),
    { slides: n, slots: s }
  );
}
function jl({
  swiper: i,
  slides: e,
  passedParams: t,
  changedParams: n,
  nextEl: s,
  prevEl: o,
  paginationEl: r,
  scrollbarEl: a,
}) {
  const l = n.filter((x) => x !== "children" && x !== "direction"),
    {
      params: u,
      pagination: c,
      navigation: d,
      scrollbar: f,
      virtual: p,
      thumbs: h,
    } = i;
  let g, y, E, C, b;
  n.includes("thumbs") &&
    t.thumbs &&
    t.thumbs.swiper &&
    u.thumbs &&
    !u.thumbs.swiper &&
    (g = !0),
    n.includes("controller") &&
      t.controller &&
      t.controller.control &&
      u.controller &&
      !u.controller.control &&
      (y = !0),
    n.includes("pagination") &&
      t.pagination &&
      (t.pagination.el || r) &&
      (u.pagination || u.pagination === !1) &&
      c &&
      !c.el &&
      (E = !0),
    n.includes("scrollbar") &&
      t.scrollbar &&
      (t.scrollbar.el || a) &&
      (u.scrollbar || u.scrollbar === !1) &&
      f &&
      !f.el &&
      (C = !0),
    n.includes("navigation") &&
      t.navigation &&
      (t.navigation.prevEl || o) &&
      (t.navigation.nextEl || s) &&
      (u.navigation || u.navigation === !1) &&
      d &&
      !d.prevEl &&
      !d.nextEl &&
      (b = !0);
  const _ = (x) => {
    !i[x] ||
      (i[x].destroy(),
      x === "navigation"
        ? ((u[x].prevEl = void 0),
          (u[x].nextEl = void 0),
          (i[x].prevEl = void 0),
          (i[x].nextEl = void 0))
        : ((u[x].el = void 0), (i[x].el = void 0)));
  };
  l.forEach((x) => {
    if (Ze(u[x]) && Ze(t[x])) je(u[x], t[x]);
    else {
      const w = t[x];
      (w === !0 || w === !1) &&
      (x === "navigation" || x === "pagination" || x === "scrollbar")
        ? w === !1 && _(x)
        : (u[x] = t[x]);
    }
  }),
    n.includes("children") && p && u.virtual.enabled
      ? ((p.slides = e), p.update(!0))
      : n.includes("children") &&
        i.lazy &&
        i.params.lazy.enabled &&
        i.lazy.load(),
    g && h.init() && h.update(!0),
    y && (i.controller.control = u.controller.control),
    E && (r && (u.pagination.el = r), c.init(), c.render(), c.update()),
    C &&
      (a && (u.scrollbar.el = a), f.init(), f.updateSize(), f.setTranslate()),
    b &&
      (s && (u.navigation.nextEl = s),
      o && (u.navigation.prevEl = o),
      d.init(),
      d.update()),
    n.includes("allowSlideNext") && (i.allowSlideNext = t.allowSlideNext),
    n.includes("allowSlidePrev") && (i.allowSlidePrev = t.allowSlidePrev),
    n.includes("direction") && i.changeDirection(t.direction, !1),
    i.update();
}
function ql(i) {
  !i ||
    i.destroyed ||
    !i.params.virtual ||
    (i.params.virtual && !i.params.virtual.enabled) ||
    (i.updateSlides(),
    i.updateProgress(),
    i.updateSlidesClasses(),
    i.lazy && i.params.lazy.enabled && i.lazy.load(),
    i.parallax &&
      i.params.parallax &&
      i.params.parallax.enabled &&
      i.parallax.setTranslate());
}
function Ul(i, e, t) {
  if (!t) return null;
  const n = i.value.isHorizontal()
    ? { [i.value.rtlTranslate ? "right" : "left"]: `${t.offset}px` }
    : { top: `${t.offset}px` };
  return e
    .filter((s, o) => o >= t.from && o <= t.to)
    .map(
      (s) => (
        s.props || (s.props = {}),
        s.props.style || (s.props.style = {}),
        (s.props.swiperRef = i),
        (s.props.style = n),
        Te(s.type, { ...s.props }, s.children)
      )
    );
}
const Tn = {
    name: "Swiper",
    props: {
      tag: { type: String, default: "div" },
      wrapperTag: { type: String, default: "div" },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      spaceBetween: { type: Number, default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      preloadImages: { type: Boolean, default: void 0 },
      updateOnImagesReady: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopAdditionalSlides: { type: Number, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopFillGroupWithBlank: { type: Boolean, default: void 0 },
      loopPreventsSlide: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideBlankClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideDuplicateActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideDuplicateClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slideDuplicateNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      slideDuplicatePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      lazy: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
    },
    emits: [
      "_beforeBreakpoint",
      "_containerClasses",
      "_slideClass",
      "_slideClasses",
      "_swiper",
      "activeIndexChange",
      "afterInit",
      "autoplay",
      "autoplayStart",
      "autoplayStop",
      "beforeDestroy",
      "beforeInit",
      "beforeLoopFix",
      "beforeResize",
      "beforeSlideChangeStart",
      "beforeTransitionStart",
      "breakpoint",
      "changeDirection",
      "click",
      "disable",
      "doubleTap",
      "doubleClick",
      "destroy",
      "enable",
      "fromEdge",
      "hashChange",
      "hashSet",
      "imagesReady",
      "init",
      "keyPress",
      "lazyImageLoad",
      "lazyImageReady",
      "lock",
      "loopFix",
      "momentumBounce",
      "navigationHide",
      "navigationShow",
      "observerUpdate",
      "orientationchange",
      "paginationHide",
      "paginationRender",
      "paginationShow",
      "paginationUpdate",
      "progress",
      "reachBeginning",
      "reachEnd",
      "realIndexChange",
      "resize",
      "scroll",
      "scrollbarDragEnd",
      "scrollbarDragMove",
      "scrollbarDragStart",
      "setTransition",
      "setTranslate",
      "slideChange",
      "slideChangeTransitionEnd",
      "slideChangeTransitionStart",
      "slideNextTransitionEnd",
      "slideNextTransitionStart",
      "slidePrevTransitionEnd",
      "slidePrevTransitionStart",
      "slideResetTransitionStart",
      "slideResetTransitionEnd",
      "sliderMove",
      "sliderFirstMove",
      "slidesLengthChange",
      "slidesGridLengthChange",
      "snapGridLengthChange",
      "snapIndexChange",
      "swiper",
      "tap",
      "toEdge",
      "touchEnd",
      "touchMove",
      "touchMoveOpposite",
      "touchStart",
      "transitionEnd",
      "transitionStart",
      "unlock",
      "update",
      "zoomChange",
    ],
    setup(i, { slots: e, emit: t }) {
      const { tag: n, wrapperTag: s } = i,
        o = L("swiper"),
        r = L(null),
        a = L(!1),
        l = L(!1),
        u = L(null),
        c = L(null),
        d = L(null),
        f = { value: [] },
        p = { value: [] },
        h = L(null),
        g = L(null),
        y = L(null),
        E = L(null),
        { params: C, passedParams: b } = Mi(i);
      Rt(e, f, p), (d.value = b), (p.value = f.value);
      const _ = () => {
        Rt(e, f, p), (a.value = !0);
      };
      if (
        ((C.onAny = (w, ...S) => {
          t(w, ...S);
        }),
        Object.assign(C.on, {
          _beforeBreakpoint: _,
          _containerClasses(w, S) {
            o.value = S;
          },
        }),
        (c.value = $l(C)),
        (c.value.loopCreate = () => {}),
        (c.value.loopDestroy = () => {}),
        C.loop && (c.value.loopedSlides = Fn(f.value, C)),
        c.value.virtual && c.value.params.virtual.enabled)
      ) {
        c.value.virtual.slides = f.value;
        const w = {
          cache: !1,
          slides: f.value,
          renderExternal: (S) => {
            r.value = S;
          },
          renderExternalUpdate: !1,
        };
        je(c.value.params.virtual, w), je(c.value.originalParams.virtual, w);
      }
      an(() => {
        !l.value && c.value && (c.value.emitSlidesClasses(), (l.value = !0));
        const { passedParams: w } = Mi(i),
          S = Vl(w, d.value, f.value, p.value);
        (d.value = w),
          (S.length || a.value) &&
            c.value &&
            !c.value.destroyed &&
            jl({
              swiper: c.value,
              slides: f.value,
              passedParams: w,
              changedParams: S,
              nextEl: h.value,
              prevEl: g.value,
              scrollbarEl: E.value,
              paginationEl: y.value,
            }),
          (a.value = !1);
      }),
        we(r, () => {
          ln(() => {
            ql(c.value);
          });
        }),
        ke(() => {
          !u.value ||
            (Nl(
              {
                el: u.value,
                nextEl: h.value,
                prevEl: g.value,
                paginationEl: y.value,
                scrollbarEl: E.value,
                swiper: c.value,
              },
              C
            ),
            t("swiper", c.value));
        }),
        Tt(() => {
          c.value && !c.value.destroyed && c.value.destroy(!0, !1);
        });
      function x(w) {
        return C.virtual
          ? Ul(c, w, r.value)
          : !C.loop || (c.value && c.value.destroyed)
          ? (w.forEach((S) => {
              S.props || (S.props = {}), (S.props.swiperRef = c);
            }),
            w)
          : Hl(c, w, C);
      }
      return () => {
        const { slides: w, slots: S } = Rt(e, f, p);
        return Te(n, { ref: u, class: xn(o.value) }, [
          S["container-start"],
          _n(i) && [
            Te("div", { ref: g, class: "swiper-button-prev" }),
            Te("div", { ref: h, class: "swiper-button-next" }),
          ],
          En(i) && Te("div", { ref: E, class: "swiper-scrollbar" }),
          wn(i) && Te("div", { ref: y, class: "swiper-pagination" }),
          Te(s, { class: "swiper-wrapper" }, [
            S["wrapper-start"],
            x(w),
            S["wrapper-end"],
          ]),
          S["container-end"],
        ]);
      };
    },
  },
  Qe = {
    name: "SwiperSlide",
    props: {
      tag: { type: String, default: "div" },
      swiperRef: { type: Object, required: !1 },
      zoom: { type: Boolean, default: void 0 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(i, { slots: e }) {
      let t = !1;
      const { swiperRef: n } = i,
        s = L(null),
        o = L("swiper-slide");
      function r(l, u, c) {
        u === s.value && (o.value = c);
      }
      ke(() => {
        !n.value || (n.value.on("_slideClass", r), (t = !0));
      }),
        bs(() => {
          t || !n || !n.value || (n.value.on("_slideClass", r), (t = !0));
        }),
        an(() => {
          !s.value ||
            !n ||
            !n.value ||
            (n.value.destroyed &&
              o.value !== "swiper-slide" &&
              (o.value = "swiper-slide"));
        }),
        Tt(() => {
          !n || !n.value || n.value.off("_slideClass", r);
        });
      const a = Le(() => ({
        isActive:
          o.value.indexOf("swiper-slide-active") >= 0 ||
          o.value.indexOf("swiper-slide-duplicate-active") >= 0,
        isVisible: o.value.indexOf("swiper-slide-visible") >= 0,
        isDuplicate: o.value.indexOf("swiper-slide-duplicate") >= 0,
        isPrev:
          o.value.indexOf("swiper-slide-prev") >= 0 ||
          o.value.indexOf("swiper-slide-duplicate-prev") >= 0,
        isNext:
          o.value.indexOf("swiper-slide-next") >= 0 ||
          o.value.indexOf("swiper-slide-duplicate-next") >= 0,
      }));
      return () =>
        Te(
          i.tag,
          {
            class: xn(`${o.value}`),
            ref: s,
            "data-swiper-slide-index": i.virtualIndex,
          },
          i.zoom
            ? Te(
                "div",
                {
                  class: "swiper-zoom-container",
                  "data-swiper-zoom":
                    typeof i.zoom == "number" ? i.zoom : void 0,
                },
                e.default && e.default(a.value)
              )
            : e.default && e.default(a.value)
        );
    },
  };
const hi = (i) => (Ue("data-v-0b190a95"), (i = i()), Ge(), i),
  Gl = { class: "sctionDisplay" },
  Wl = { class: "staffDisplay" },
  Xl = { class: "staffDisplayLeft" },
  Yl = hi(() => m("div", { class: "staffHeader" }, "02 - STAFF", -1)),
  Zl = { class: "ListContainer" },
  Kl = { class: "staffIdex", "data-cursor": "pointer" },
  Jl = { class: "staffCareer", "data-cursor": "pointer" },
  Ql = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 30 30",
  },
  eu = ["xlink:href"],
  tu = { class: "staffName", "data-cursor": "pointer" },
  iu = { class: "staffFooter" },
  nu = { class: "staffDetailRights" },
  su = { class: "particle" },
  ou = { class: "staffDetailWrapper" },
  ru = { class: "staffContent" },
  au = { class: "staffInfo" },
  lu = { class: "staffBack" },
  uu = {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 480 50",
  },
  cu = { x: "0", y: "50", "font-size": "67", fill: "none", stroke: "#333333" },
  du = { class: "staffTop" },
  fu = { class: "staffName" },
  hu = { class: "staffBottom" },
  pu = { class: "staffNameEn" },
  vu = { class: "staffNameCV" },
  mu = hi(() => m("span", null, "CV:", -1)),
  gu = { class: "staffCVName" },
  yu = hi(() =>
    m(
      "div",
      { class: "staffCVButton" },
      [
        m(
          "svg",
          {
            class: "staffDetailInfoCvButtonIcon",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            viewBox: "0 0 36 20",
          },
          [
            m("rect", {
              x: "27",
              y: "8 ",
              width: "2",
              height: "4",
              rx: "1",
              ry: "1",
              fill: "#ffffff",
            }),
            m("rect", {
              x: "23.5",
              y: "6 ",
              width: "2",
              height: "8",
              rx: "1",
              ry: "1",
              fill: "#ffffff",
            }),
            m("rect", {
              x: "20",
              y: "7",
              width: "2",
              height: "6",
              rx: "1",
              ry: "1",
              fill: "#ffffff",
            }),
            m("rect", {
              x: "16.5",
              y: "5",
              width: "2",
              height: "10",
              rx: "1",
              ry: "1",
              fill: "#ffffff",
            }),
            m("rect", {
              x: "13",
              y: "2",
              width: "2",
              height: "16",
              rx: "1",
              ry: "1",
              fill: "#ffffff",
            }),
            m("rect", {
              x: "9.5",
              y: "5",
              width: "2",
              height: "10",
              rx: "1",
              ry: "1",
              fill: "#ffffff",
            }),
            m("rect", {
              x: "6",
              y: "7",
              width: "2",
              height: "6",
              rx: "1",
              ry: "1",
              fill: "#ffffff",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  Cu = { class: "staffDesc" },
  bu = { class: "staffimgWapper" },
  _u = { class: "staffimg" },
  wu = ["src"],
  Eu = _s(
    '<svg data-v-0b190a95><g data-v-0b190a95><path id="staff-career-icon-special" d="M29.116,28.057 C28.428,27.707 27.740,27.356 27.049,27.010 C26.982,26.976 26.899,26.956 26.823,26.956 C19.138,26.953 11.452,26.953 3.767,26.956 C3.687,26.956 3.599,26.978 3.528,27.014 C2.687,27.437 1.849,27.864 1.010,28.290 C0.974,28.308 0.936,28.322 0.899,28.338 C0.895,28.329 0.890,28.320 0.885,28.311 C1.213,28.040 1.540,27.768 1.868,27.496 C2.320,27.123 2.773,26.752 3.220,26.374 C3.293,26.314 3.351,26.228 3.394,26.142 C4.493,23.978 5.590,21.813 6.682,19.646 C6.739,19.534 6.800,19.493 6.927,19.494 C7.658,19.501 8.388,19.498 9.119,19.498 C9.168,19.498 9.218,19.498 9.299,19.498 C8.461,21.152 7.637,22.780 6.803,24.428 C12.449,24.428 18.076,24.428 23.725,24.428 C23.394,23.771 23.068,23.126 22.730,22.458 C22.799,22.454 22.847,22.449 22.895,22.449 C23.635,22.448 24.375,22.451 25.115,22.446 C25.223,22.445 25.280,22.476 25.330,22.576 C25.913,23.736 26.499,24.894 27.089,26.049 C27.142,26.154 27.221,26.255 27.311,26.330 C28.069,26.965 28.833,27.593 29.594,28.223 C29.636,28.257 29.676,28.292 29.699,28.352 C29.505,28.254 29.311,28.155 29.116,28.057 ZM16.208,19.791 C16.588,19.038 16.971,18.286 17.348,17.532 C17.393,17.441 17.449,17.417 17.544,17.417 C18.359,17.421 19.174,17.419 19.989,17.419 C20.040,17.419 20.091,17.419 20.177,17.419 C18.538,14.184 16.911,10.970 15.265,7.719 C14.119,9.983 12.989,12.214 11.845,14.473 C13.176,14.473 14.479,14.473 15.811,14.473 C15.666,14.762 15.535,15.024 15.402,15.286 C15.135,15.813 14.866,16.338 14.603,16.866 C14.559,16.954 14.509,16.986 14.410,16.986 C12.335,16.983 10.261,16.984 8.186,16.983 C8.145,16.983 8.105,16.978 8.042,16.974 C8.158,16.743 8.266,16.527 8.375,16.311 C10.282,12.545 12.189,8.778 14.096,5.012 C14.314,4.581 14.518,4.142 14.756,3.723 C14.917,3.439 14.970,3.142 14.997,2.827 C15.072,1.944 15.157,1.062 15.238,0.180 C15.241,0.141 15.251,0.102 15.282,0.065 C15.310,0.370 15.338,0.674 15.367,0.979 C15.437,1.745 15.508,2.510 15.581,3.275 C15.586,3.325 15.604,3.376 15.627,3.420 C17.997,8.103 20.368,12.784 22.739,17.466 C23.131,18.239 23.522,19.013 23.913,19.787 C23.934,19.827 23.952,19.868 23.978,19.923 C21.364,19.923 18.771,19.923 16.155,19.923 C16.175,19.871 16.188,19.829 16.208,19.791 Z" data-v-0b190a95></path><path id="staff-career-icon-caster" d="M28.239,29.879 C27.943,29.646 27.624,29.395 27.305,29.143 C27.257,29.106 27.211,29.065 27.161,29.031 C27.034,28.946 26.940,28.853 26.984,28.676 C26.994,28.636 26.941,28.568 26.902,28.529 C25.817,27.440 24.731,26.353 23.645,25.265 C22.194,23.813 20.745,22.361 19.293,20.911 C19.224,20.842 19.145,20.782 19.062,20.731 C18.535,20.407 18.006,20.088 17.478,19.766 C17.427,19.735 17.376,19.700 17.333,19.658 C16.888,19.215 16.445,18.770 16.001,18.326 C15.985,18.310 15.971,18.291 15.932,18.244 C16.059,18.136 16.177,18.036 16.307,17.925 C16.239,17.855 16.193,17.805 16.145,17.757 C13.728,15.337 11.311,12.916 8.893,10.498 C8.822,10.427 8.789,10.357 8.789,10.254 C8.793,9.147 8.792,8.040 8.792,6.933 C8.792,6.884 8.792,6.836 8.792,6.755 C8.849,6.807 8.881,6.832 8.909,6.861 C9.353,7.305 9.796,7.750 10.242,8.192 C10.312,8.261 10.336,8.332 10.335,8.427 C10.331,8.887 10.330,9.346 10.337,9.806 C10.338,9.872 10.369,9.955 10.415,10.001 C12.683,12.278 14.955,14.552 17.227,16.825 C17.246,16.845 17.268,16.863 17.328,16.916 C17.424,16.784 17.520,16.653 17.620,16.517 C17.700,16.591 17.734,16.621 17.767,16.653 C18.184,17.070 18.602,17.487 19.018,17.907 C19.073,17.963 19.123,18.026 19.164,18.093 C19.491,18.629 19.815,19.168 20.142,19.703 C20.183,19.771 20.233,19.834 20.289,19.890 C22.821,22.427 25.355,24.962 27.886,27.500 C27.964,27.579 28.036,27.606 28.145,27.583 C28.202,27.572 28.295,27.588 28.328,27.628 C28.656,28.031 28.975,28.442 29.290,28.843 C28.940,29.188 28.595,29.528 28.239,29.879 ZM15.000,0.775 C13.957,0.865 12.913,0.951 11.870,1.042 C10.961,1.121 10.053,1.205 9.145,1.285 C8.824,1.313 8.503,1.338 8.155,1.366 C8.483,2.422 8.805,3.459 9.139,4.532 C9.085,4.494 9.059,4.481 9.040,4.462 C7.725,3.147 6.411,1.832 5.098,0.516 C5.078,0.497 5.064,0.472 5.047,0.450 C9.513,0.450 13.979,0.450 18.446,0.450 C18.387,0.463 18.330,0.483 18.271,0.488 C17.181,0.585 16.091,0.681 15.000,0.775 ZM4.617,7.946 C4.542,7.945 4.449,7.911 4.397,7.859 C3.869,7.341 3.347,6.816 2.827,6.289 C2.785,6.247 2.743,6.181 2.743,6.125 C2.738,5.230 2.739,4.334 2.740,3.439 C2.740,3.420 2.744,3.402 2.749,3.369 C2.799,3.366 2.848,3.361 2.898,3.361 C3.750,3.360 4.602,3.358 5.454,3.364 C5.527,3.365 5.619,3.403 5.671,3.455 C6.196,3.970 6.715,4.491 7.231,5.015 C7.279,5.063 7.322,5.141 7.322,5.205 C7.328,6.082 7.326,6.959 7.326,7.836 C7.326,7.867 7.319,7.899 7.314,7.942 C7.259,7.945 7.209,7.949 7.158,7.949 C6.311,7.950 5.464,7.952 4.617,7.946 ZM1.965,2.968 C1.914,3.021 1.874,3.111 1.873,3.184 C1.868,4.356 1.868,5.527 1.873,6.699 C1.874,6.773 1.911,6.865 1.962,6.917 C2.544,7.508 3.130,8.094 3.721,8.675 C3.773,8.727 3.866,8.762 3.940,8.763 C5.189,8.768 6.439,8.766 7.688,8.766 C7.748,8.766 7.808,8.766 7.876,8.766 C7.876,9.222 7.876,9.661 7.876,10.115 C7.826,10.117 7.776,10.122 7.727,10.122 C6.276,10.122 4.825,10.121 3.374,10.124 C3.276,10.124 3.210,10.092 3.142,10.025 C2.300,9.178 1.456,8.333 0.610,7.490 C0.541,7.421 0.515,7.352 0.515,7.255 C0.518,5.713 0.516,4.171 0.520,2.629 C0.520,2.561 0.543,2.475 0.587,2.430 C1.036,1.971 1.491,1.519 1.945,1.065 C1.958,1.052 1.973,1.042 1.993,1.026 C2.308,1.346 2.617,1.659 2.935,1.982 C2.916,2.003 2.888,2.038 2.856,2.070 C2.558,2.368 2.257,2.664 1.965,2.968 ZM4.350,13.304 C3.315,12.981 2.281,12.659 1.226,12.331 C1.211,12.455 1.194,12.564 1.184,12.673 C1.095,13.719 1.008,14.765 0.917,15.810 C0.838,16.716 0.754,17.621 0.675,18.526 C0.585,19.572 0.498,20.617 0.409,21.663 C0.385,21.943 0.361,22.223 0.335,22.503 C0.331,22.544 0.312,22.582 0.300,22.622 C0.300,18.157 0.300,13.693 0.300,9.229 C0.330,9.249 0.364,9.265 0.389,9.290 C1.697,10.598 3.004,11.907 4.312,13.216 C4.330,13.234 4.347,13.255 4.350,13.304 Z" data-v-0b190a95></path><path id="staff-career-icon-sniper" d="M28.348,1.103 C28.349,4.101 28.349,7.099 28.349,10.097 C28.349,10.137 28.346,10.177 28.317,10.219 C28.277,9.979 28.237,9.739 28.198,9.498 C28.056,8.630 27.913,7.763 27.772,6.895 C27.634,6.045 27.498,5.195 27.359,4.346 C27.254,3.699 27.144,3.054 27.041,2.407 C27.028,2.330 27.002,2.300 26.921,2.287 C26.040,2.144 25.160,1.998 24.280,1.851 C23.496,1.721 22.713,1.590 21.929,1.460 C21.040,1.313 20.150,1.168 19.260,1.021 C19.210,1.013 19.163,0.992 19.114,0.977 C22.194,0.977 25.274,0.977 28.354,0.977 C28.352,1.019 28.348,1.061 28.348,1.103 ZM8.297,8.072 C8.411,10.714 8.525,13.356 8.639,16.008 C8.397,16.008 8.175,16.008 7.929,16.008 C8.043,13.358 8.157,10.714 8.271,8.070 C8.280,8.070 8.288,8.071 8.297,8.072 ZM21.971,4.296 C22.328,4.641 22.679,4.992 23.027,5.346 C23.097,5.416 23.154,5.429 23.247,5.392 C23.708,5.212 24.172,5.039 24.636,4.863 C24.675,4.849 24.714,4.837 24.780,4.814 C24.758,4.884 24.745,4.935 24.727,4.984 C24.562,5.432 24.400,5.881 24.229,6.326 C24.184,6.443 24.198,6.518 24.290,6.607 C24.640,6.945 24.984,7.290 25.324,7.639 C25.386,7.702 25.437,7.790 25.458,7.875 C25.983,9.975 26.503,12.077 27.024,14.179 C27.262,15.142 27.500,16.104 27.734,17.068 C27.746,17.116 27.741,17.182 27.716,17.223 C26.825,18.653 25.931,20.082 25.036,21.511 C25.024,21.530 25.008,21.546 24.977,21.583 C24.772,21.374 24.573,21.171 24.374,20.969 C24.187,20.782 24.187,20.783 24.328,20.555 C24.486,20.302 24.643,20.049 24.816,19.770 C24.733,19.770 24.679,19.770 24.625,19.770 C20.647,19.787 16.669,19.811 12.691,19.812 C12.255,19.812 11.949,19.928 11.648,20.249 C10.901,21.044 10.114,21.801 9.343,22.573 C9.314,22.602 9.288,22.633 9.269,22.696 C10.126,22.628 10.984,22.561 11.863,22.491 C11.853,22.624 11.846,22.743 11.837,22.861 C11.796,23.384 11.752,23.907 11.716,24.430 C11.707,24.556 11.662,24.606 11.534,24.616 C10.881,24.663 10.228,24.717 9.575,24.769 C8.862,24.826 8.148,24.884 7.435,24.941 C7.076,24.970 6.717,25.003 6.358,25.023 C6.223,25.030 6.123,25.069 6.026,25.167 C4.665,26.535 3.301,27.899 1.939,29.265 C1.900,29.304 1.876,29.358 1.822,29.440 C1.269,28.877 0.756,28.353 0.242,27.829 C0.242,27.820 0.242,27.811 0.242,27.801 C0.282,27.771 0.326,27.746 0.361,27.711 C1.741,26.330 3.121,24.948 4.498,23.563 C4.551,23.509 4.595,23.422 4.601,23.346 C4.671,22.520 4.731,21.693 4.797,20.867 C4.863,20.036 4.933,19.205 5.001,18.375 C5.010,18.267 5.018,18.160 5.021,18.052 C5.023,17.960 5.064,17.920 5.157,17.913 C5.656,17.876 6.155,17.836 6.654,17.797 C6.807,17.785 6.960,17.773 7.140,17.759 C7.071,18.632 7.004,19.492 6.933,20.386 C6.989,20.339 7.020,20.315 7.048,20.287 C7.942,19.393 8.834,18.498 9.730,17.605 C9.803,17.533 9.831,17.459 9.833,17.359 C9.893,14.670 9.956,11.982 10.018,9.293 C10.053,7.794 10.088,6.295 10.122,4.796 C10.123,4.751 10.122,4.706 10.122,4.629 C9.685,4.902 9.271,5.161 8.866,5.414 C8.598,5.144 8.338,4.883 8.071,4.614 C8.098,4.594 8.130,4.568 8.164,4.547 C9.563,3.670 10.963,2.792 12.365,1.919 C12.419,1.885 12.506,1.871 12.569,1.887 C13.971,2.230 15.372,2.578 16.773,2.926 C18.423,3.335 20.074,3.743 21.723,4.157 C21.812,4.179 21.905,4.232 21.971,4.296 ZM20.794,10.707 C20.300,11.193 19.813,11.686 19.323,12.176 C19.290,12.209 19.256,12.239 19.191,12.299 C19.108,12.190 19.028,12.086 18.946,11.978 C18.884,12.036 18.849,12.067 18.817,12.099 C18.175,12.742 17.533,13.384 16.891,14.027 C15.395,15.525 13.899,17.023 12.401,18.518 C12.349,18.570 12.274,18.624 12.205,18.632 C11.898,18.668 11.590,18.688 11.282,18.711 C11.154,18.721 11.025,18.724 10.889,18.731 C10.889,18.679 10.886,18.642 10.889,18.605 C10.920,18.237 10.958,17.868 10.981,17.499 C10.989,17.377 11.035,17.293 11.119,17.209 C13.252,15.078 15.383,12.944 17.514,10.810 C17.550,10.774 17.583,10.737 17.652,10.664 C17.541,10.584 17.439,10.510 17.301,10.411 C17.381,10.353 17.427,10.328 17.464,10.292 C17.961,9.796 18.458,9.299 18.952,8.800 C19.006,8.746 19.054,8.677 19.083,8.605 C19.429,7.726 19.774,6.846 20.112,5.964 C20.139,5.893 20.139,5.799 20.119,5.725 C20.067,5.541 19.983,5.365 19.939,5.180 C19.899,5.013 19.806,4.953 19.648,4.915 C18.395,4.611 17.144,4.297 15.893,3.987 C14.800,3.715 13.708,3.442 12.614,3.176 C12.543,3.159 12.445,3.177 12.382,3.216 C11.796,3.576 11.215,3.944 10.631,4.307 C10.555,4.354 10.524,4.406 10.522,4.498 C10.475,7.027 10.425,9.557 10.374,12.086 C10.328,14.386 10.280,16.686 10.227,18.986 C10.226,19.055 10.182,19.138 10.132,19.188 C9.046,20.281 7.958,21.372 6.865,22.457 C6.733,22.588 6.738,22.732 6.738,22.895 C6.919,22.896 7.059,22.873 7.192,22.739 C8.261,21.656 9.340,20.583 10.413,19.504 C10.488,19.429 10.563,19.395 10.670,19.395 C11.321,19.399 11.971,19.397 12.622,19.395 C15.023,19.389 17.423,19.382 19.824,19.376 C21.514,19.372 23.203,19.369 24.892,19.371 C25.028,19.371 25.100,19.327 25.170,19.214 C25.569,18.564 25.974,17.917 26.384,17.273 C26.454,17.164 26.463,17.067 26.432,16.946 C26.034,15.354 25.640,13.761 25.245,12.168 C25.059,11.414 24.871,10.661 24.690,9.906 C24.664,9.796 24.611,9.740 24.505,9.708 C24.300,9.646 24.099,9.566 23.893,9.506 C23.824,9.486 23.734,9.484 23.668,9.509 C22.800,9.844 21.934,10.182 21.070,10.526 C20.970,10.566 20.871,10.631 20.794,10.707 ZM21.456,21.385 C18.852,21.497 16.247,21.610 13.633,21.723 C13.633,21.480 13.633,21.258 13.633,21.012 C16.242,21.125 18.848,21.237 21.455,21.349 C21.455,21.361 21.456,21.373 21.456,21.385 Z" data-v-0b190a95></path><path id="staff-career-icon-pioneer" d="M29.313,14.190 C29.182,14.196 29.051,14.193 28.920,14.197 C28.497,14.208 28.073,14.219 27.650,14.234 C27.367,14.243 27.083,14.256 26.800,14.272 C26.455,14.291 26.110,14.320 25.766,14.335 C25.518,14.346 25.269,14.337 25.021,14.344 C24.814,14.351 24.606,14.358 24.402,14.386 C24.334,14.396 24.259,14.460 24.216,14.520 C24.106,14.675 24.010,14.842 23.910,15.004 C23.876,15.060 23.846,15.119 23.814,15.177 C23.726,15.342 23.554,15.391 23.404,15.471 C23.237,15.560 23.071,15.650 22.902,15.737 C22.701,15.841 22.497,15.938 22.298,16.047 C22.058,16.178 21.823,16.319 21.584,16.453 C21.489,16.506 21.391,16.553 21.293,16.602 C21.065,16.714 20.834,16.819 20.610,16.938 C20.407,17.046 20.214,17.173 20.013,17.284 C19.866,17.365 19.712,17.433 19.562,17.511 C19.404,17.593 19.248,17.679 19.092,17.765 C18.943,17.848 18.800,17.938 18.649,18.016 C18.495,18.097 18.332,18.160 18.179,18.243 C17.976,18.352 17.783,18.481 17.578,18.587 C17.339,18.711 17.089,18.814 16.849,18.936 C16.708,19.008 16.581,19.104 16.442,19.179 C16.316,19.246 16.178,19.292 16.052,19.360 C15.940,19.421 15.823,19.487 15.737,19.577 C15.695,19.622 15.716,19.729 15.714,19.808 C15.703,20.184 15.703,20.561 15.680,20.936 C15.660,21.263 15.600,21.587 15.583,21.914 C15.564,22.280 15.597,22.650 15.565,23.014 C15.525,23.462 15.582,23.914 15.478,24.361 C15.425,24.590 15.470,24.840 15.461,25.080 C15.450,25.385 15.424,25.689 15.416,25.994 C15.406,26.352 15.411,26.710 15.405,27.068 C15.403,27.230 15.391,27.392 15.383,27.562 C15.315,27.562 15.253,27.562 15.168,27.562 C15.168,27.293 15.171,27.030 15.167,26.767 C15.161,26.362 15.147,25.958 15.140,25.554 C15.135,25.271 15.135,24.988 15.132,24.705 C15.132,24.696 15.133,24.687 15.132,24.678 C15.097,24.419 15.046,24.162 15.032,23.902 C15.007,23.454 15.006,23.004 14.991,22.556 C14.986,22.399 14.963,22.243 14.958,22.086 C14.951,21.896 14.958,21.705 14.952,21.514 C14.949,21.423 14.928,21.332 14.918,21.241 C14.905,21.134 14.887,21.028 14.884,20.921 C14.879,20.690 14.880,20.458 14.883,20.226 C14.885,20.076 14.821,20.024 14.686,20.091 C14.560,20.154 14.446,20.239 14.323,20.309 C14.204,20.376 14.081,20.437 13.959,20.499 C13.782,20.590 13.605,20.681 13.427,20.770 C13.216,20.875 13.002,20.973 12.794,21.085 C12.663,21.155 12.546,21.252 12.414,21.322 C12.273,21.398 12.120,21.451 11.978,21.526 C11.746,21.650 11.520,21.787 11.289,21.912 C11.057,22.037 10.820,22.152 10.588,22.274 C10.494,22.324 10.405,22.382 10.313,22.436 C10.294,22.428 10.275,22.419 10.255,22.410 C10.271,22.344 10.274,22.271 10.304,22.212 C10.369,22.085 10.448,21.964 10.523,21.841 C10.564,21.774 10.610,21.711 10.649,21.643 C10.717,21.524 10.778,21.401 10.846,21.281 C10.967,21.070 11.093,20.861 11.212,20.648 C11.331,20.437 11.440,20.220 11.560,20.009 C11.634,19.878 11.724,19.755 11.802,19.625 C11.844,19.556 11.869,19.475 11.914,19.408 C12.029,19.234 12.208,19.151 12.393,19.066 C12.627,18.959 12.842,18.810 13.070,18.688 C13.274,18.580 13.487,18.490 13.691,18.382 C13.832,18.308 13.964,18.217 14.102,18.137 C14.208,18.076 14.315,18.018 14.423,17.963 C14.690,17.826 14.959,17.693 15.226,17.557 C15.566,17.384 15.908,17.213 16.245,17.035 C16.459,16.921 16.664,16.790 16.877,16.675 C17.087,16.561 17.305,16.460 17.517,16.349 C17.715,16.245 17.910,16.135 18.107,16.030 C18.188,15.987 18.277,15.959 18.356,15.913 C18.481,15.842 18.600,15.759 18.725,15.687 C18.838,15.622 18.957,15.565 19.072,15.502 C19.241,15.409 19.436,15.367 19.586,15.229 C19.658,15.163 19.775,15.149 19.865,15.100 C20.127,14.958 20.385,14.808 20.647,14.667 C20.749,14.611 20.853,14.554 20.964,14.524 C21.105,14.485 21.161,14.394 21.163,14.264 C21.164,14.130 21.157,13.995 21.140,13.863 C21.117,13.680 21.156,13.622 21.333,13.636 C21.522,13.651 21.709,13.688 21.898,13.706 C22.063,13.723 22.230,13.737 22.396,13.732 C22.468,13.731 22.542,13.686 22.609,13.651 C22.852,13.521 23.091,13.384 23.335,13.255 C23.469,13.184 23.612,13.129 23.748,13.059 C23.870,12.997 23.985,12.921 24.106,12.857 C24.368,12.719 24.635,12.590 24.894,12.448 C25.079,12.347 25.256,12.232 25.442,12.120 C25.532,12.210 25.493,12.283 25.435,12.373 C25.343,12.514 25.270,12.667 25.189,12.815 C25.179,12.835 25.180,12.865 25.165,12.877 C25.028,12.998 24.977,13.168 24.899,13.323 C24.842,13.435 24.750,13.530 24.685,13.638 C24.656,13.687 24.637,13.754 24.645,13.808 C24.649,13.834 24.730,13.872 24.768,13.865 C24.932,13.836 25.087,13.856 25.242,13.906 C25.268,13.914 25.298,13.907 25.326,13.908 C25.902,13.918 26.479,13.922 27.054,13.941 C27.544,13.956 28.034,13.990 28.523,14.012 C28.691,14.020 28.859,14.008 29.026,14.022 C29.135,14.030 29.242,14.066 29.348,14.094 C29.363,14.098 29.384,14.139 29.379,14.144 C29.362,14.164 29.336,14.189 29.313,14.190 ZM28.940,6.203 C28.849,6.355 28.754,6.506 28.667,6.661 C28.559,6.855 28.460,7.055 28.350,7.249 C28.224,7.472 28.088,7.690 27.959,7.912 C27.913,7.990 27.871,8.071 27.829,8.152 C27.761,8.281 27.708,8.422 27.623,8.539 C27.556,8.631 27.455,8.703 27.360,8.771 C27.284,8.825 27.193,8.859 27.109,8.903 C26.841,9.043 26.571,9.179 26.306,9.325 C26.091,9.443 25.884,9.575 25.671,9.696 C25.552,9.764 25.426,9.820 25.305,9.883 C25.074,10.002 24.844,10.124 24.612,10.242 C24.362,10.370 24.109,10.492 23.861,10.622 C23.738,10.687 23.622,10.767 23.501,10.836 C23.394,10.896 23.285,10.951 23.176,11.007 C22.862,11.168 22.547,11.325 22.235,11.490 C21.922,11.656 21.615,11.833 21.302,11.998 C20.977,12.169 20.643,12.326 20.319,12.499 C20.030,12.654 19.749,12.827 19.461,12.985 C19.322,13.062 19.173,13.119 19.032,13.194 C18.893,13.267 18.761,13.353 18.623,13.429 C18.515,13.489 18.403,13.539 18.294,13.597 C18.047,13.730 17.804,13.870 17.554,13.997 C17.325,14.113 17.087,14.210 16.859,14.328 C16.715,14.402 16.585,14.501 16.446,14.584 C16.358,14.637 16.268,14.687 16.176,14.732 C15.954,14.842 15.729,14.944 15.509,15.057 C15.296,15.165 15.087,15.282 14.876,15.395 C14.736,15.470 14.596,15.545 14.457,15.622 C14.308,15.704 14.164,15.794 14.013,15.871 C13.881,15.939 13.741,15.992 13.606,16.056 C13.508,16.103 13.412,16.155 13.317,16.210 C13.105,16.333 12.898,16.463 12.684,16.581 C12.556,16.652 12.416,16.700 12.287,16.769 C12.051,16.895 11.820,17.031 11.583,17.158 C11.447,17.230 11.303,17.290 11.164,17.358 C11.048,17.416 10.934,17.475 10.820,17.537 C10.685,17.611 10.552,17.690 10.417,17.765 C10.170,17.901 9.924,18.038 9.674,18.171 C9.550,18.237 9.419,18.290 9.294,18.355 C9.159,18.424 9.028,18.502 8.893,18.572 C8.569,18.742 8.243,18.910 7.918,19.079 C7.841,19.119 7.766,19.163 7.690,19.206 C7.540,19.292 7.391,19.381 7.239,19.463 C7.125,19.525 7.006,19.575 6.891,19.636 C6.725,19.724 6.562,19.816 6.396,19.906 C6.309,19.953 6.221,20.000 6.133,20.045 C5.922,20.152 5.708,20.254 5.499,20.365 C5.269,20.488 5.044,20.621 4.814,20.745 C4.583,20.870 4.348,20.985 4.116,21.109 C3.900,21.225 3.688,21.352 3.470,21.465 C3.244,21.582 3.011,21.684 2.786,21.801 C2.633,21.881 2.489,21.977 2.339,22.061 C2.240,22.117 2.137,22.164 2.035,22.214 C1.814,22.323 1.589,22.425 1.373,22.542 C1.164,22.655 0.964,22.787 0.758,22.905 C0.633,22.977 0.504,23.039 0.365,23.111 C0.354,23.099 0.330,23.073 0.306,23.047 C0.306,23.000 0.306,22.954 0.306,22.907 C0.344,22.885 0.397,22.873 0.417,22.840 C0.494,22.714 0.556,22.579 0.632,22.453 C0.708,22.326 0.798,22.208 0.874,22.081 C0.929,21.991 0.968,21.891 1.018,21.798 C1.134,21.585 1.247,21.371 1.370,21.161 C1.533,20.881 1.705,20.606 1.872,20.327 C1.925,20.238 1.963,20.139 2.025,20.057 C2.082,19.982 2.153,19.910 2.233,19.861 C2.378,19.773 2.534,19.706 2.683,19.625 C2.893,19.511 3.098,19.389 3.309,19.279 C3.536,19.160 3.770,19.055 3.997,18.936 C4.206,18.826 4.409,18.703 4.618,18.593 C4.764,18.516 4.921,18.456 5.066,18.376 C5.205,18.300 5.332,18.204 5.469,18.125 C5.593,18.053 5.723,17.992 5.851,17.927 C5.995,17.854 6.139,17.784 6.282,17.709 C6.382,17.657 6.478,17.598 6.579,17.546 C6.791,17.438 7.008,17.336 7.218,17.223 C7.458,17.095 7.690,16.953 7.929,16.826 C8.145,16.711 8.368,16.607 8.587,16.497 C8.686,16.447 8.785,16.397 8.882,16.342 C9.107,16.216 9.326,16.081 9.554,15.961 C9.690,15.890 9.839,15.846 9.978,15.781 C10.064,15.742 10.143,15.687 10.225,15.638 C10.351,15.562 10.472,15.477 10.602,15.408 C10.741,15.334 10.888,15.276 11.029,15.206 C11.145,15.149 11.258,15.085 11.372,15.024 C11.617,14.894 11.863,14.766 12.108,14.634 C12.432,14.460 12.756,14.283 13.080,14.108 C13.294,13.994 13.511,13.885 13.724,13.770 C13.953,13.645 14.179,13.512 14.409,13.387 C14.532,13.321 14.661,13.266 14.787,13.203 C14.849,13.172 14.907,13.135 14.969,13.103 C15.108,13.033 15.249,12.966 15.388,12.894 C15.510,12.831 15.629,12.759 15.752,12.696 C15.897,12.623 16.047,12.559 16.190,12.483 C16.307,12.421 16.416,12.343 16.532,12.279 C16.682,12.198 16.837,12.125 16.989,12.047 C17.085,11.999 17.182,11.950 17.275,11.897 C17.491,11.773 17.702,11.639 17.920,11.521 C18.137,11.403 18.364,11.303 18.583,11.188 C18.727,11.113 18.865,11.024 19.007,10.944 C19.100,10.891 19.195,10.841 19.290,10.793 C19.516,10.680 19.744,10.574 19.967,10.456 C20.183,10.342 20.391,10.216 20.605,10.099 C20.740,10.025 20.881,9.962 21.017,9.889 C21.154,9.816 21.287,9.734 21.425,9.661 C21.535,9.602 21.652,9.553 21.763,9.494 C21.937,9.402 22.107,9.302 22.281,9.211 C22.510,9.091 22.742,8.976 22.973,8.860 C23.157,8.768 23.346,8.682 23.526,8.583 C23.663,8.508 23.786,8.411 23.922,8.335 C24.044,8.266 24.178,8.217 24.303,8.153 C24.523,8.040 24.741,7.922 24.961,7.807 C25.094,7.738 25.230,7.674 25.363,7.604 C25.487,7.539 25.609,7.469 25.733,7.403 C25.877,7.326 26.024,7.251 26.168,7.173 C26.301,7.100 26.431,7.024 26.562,6.950 C26.680,6.885 26.798,6.819 26.916,6.756 C27.080,6.668 27.245,6.582 27.409,6.495 C27.518,6.438 27.628,6.383 27.736,6.325 C27.891,6.242 28.044,6.154 28.199,6.072 C28.320,6.008 28.446,5.951 28.567,5.886 C28.748,5.787 28.927,5.684 29.108,5.583 C29.124,5.574 29.143,5.571 29.168,5.563 C29.251,5.656 29.258,5.732 29.167,5.837 C29.074,5.944 29.014,6.079 28.940,6.203 ZM18.870,7.160 C18.809,7.273 18.753,7.389 18.687,7.499 C18.514,7.789 18.330,8.074 18.161,8.367 C18.043,8.570 17.952,8.790 17.830,8.990 C17.712,9.183 17.624,9.391 17.359,9.475 C17.131,9.548 16.939,9.728 16.724,9.846 C16.584,9.923 16.426,9.968 16.282,10.039 C16.153,10.102 16.032,10.183 15.905,10.252 C15.678,10.376 15.451,10.497 15.224,10.620 C15.004,10.739 14.785,10.860 14.565,10.979 C14.450,11.041 14.333,11.099 14.218,11.160 C13.981,11.286 13.745,11.414 13.506,11.538 C13.277,11.657 13.044,11.769 12.815,11.890 C12.598,12.004 12.384,12.124 12.170,12.242 C12.043,12.312 11.917,12.384 11.790,12.453 C11.626,12.543 11.462,12.634 11.296,12.719 C11.165,12.785 11.030,12.839 10.898,12.903 C10.787,12.957 10.678,13.015 10.570,13.074 C10.431,13.152 10.297,13.237 10.156,13.311 C9.951,13.418 9.739,13.514 9.535,13.624 C9.433,13.678 9.399,13.775 9.403,13.894 C9.410,14.090 9.404,14.287 9.395,14.483 C9.393,14.508 9.341,14.553 9.315,14.551 C9.162,14.541 9.010,14.510 8.856,14.504 C8.551,14.491 8.245,14.477 7.941,14.490 C7.837,14.495 7.736,14.577 7.635,14.626 C7.542,14.672 7.447,14.714 7.358,14.767 C7.220,14.851 7.090,14.949 6.950,15.029 C6.837,15.094 6.712,15.138 6.594,15.196 C6.372,15.307 6.152,15.420 5.932,15.533 C5.792,15.605 5.650,15.675 5.513,15.753 C5.371,15.834 5.237,15.932 5.092,16.010 C4.960,16.081 4.815,16.129 4.683,16.200 C4.544,16.273 4.415,16.364 4.278,16.441 C4.223,16.471 4.131,16.519 4.105,16.498 C4.025,16.433 4.102,16.377 4.143,16.313 C4.229,16.181 4.297,16.038 4.375,15.901 C4.425,15.814 4.477,15.728 4.532,15.644 C4.614,15.521 4.705,15.404 4.783,15.279 C4.827,15.208 4.848,15.122 4.889,15.049 C4.985,14.880 5.091,14.718 5.184,14.548 C5.215,14.490 5.216,14.415 5.241,14.306 C4.848,14.306 4.488,14.317 4.128,14.303 C3.810,14.291 3.493,14.250 3.175,14.227 C3.058,14.219 2.939,14.226 2.822,14.224 C2.280,14.211 1.739,14.197 1.172,14.182 C1.192,14.144 1.199,14.106 1.221,14.094 C1.389,14.004 1.575,14.019 1.756,14.011 C2.219,13.989 2.683,13.971 3.146,13.954 C3.581,13.939 4.015,13.925 4.449,13.914 C4.756,13.907 5.064,13.906 5.372,13.902 C5.423,13.901 5.637,13.715 5.663,13.665 C5.753,13.492 5.855,13.324 6.035,13.232 C6.365,13.064 6.702,12.910 7.031,12.739 C7.239,12.630 7.436,12.498 7.640,12.382 C7.754,12.317 7.876,12.266 7.992,12.206 C8.304,12.042 8.613,11.876 8.925,11.713 C9.070,11.637 9.221,11.570 9.366,11.493 C9.516,11.412 9.661,11.321 9.811,11.238 C9.922,11.176 10.037,11.119 10.150,11.060 C10.214,11.026 10.279,10.990 10.344,10.958 C10.483,10.890 10.623,10.825 10.761,10.756 C10.871,10.701 10.978,10.639 11.087,10.581 C11.245,10.497 11.405,10.416 11.561,10.329 C11.788,10.202 12.011,10.068 12.237,9.940 C12.329,9.888 12.426,9.844 12.521,9.798 C12.662,9.730 12.805,9.668 12.944,9.597 C13.078,9.529 13.208,9.455 13.339,9.382 C13.434,9.329 13.527,9.271 13.623,9.221 C13.842,9.107 14.064,9.001 14.281,8.884 C14.451,8.792 14.619,8.696 14.778,8.587 C14.824,8.555 14.854,8.472 14.857,8.411 C14.876,7.996 14.883,7.581 14.901,7.166 C14.906,7.038 14.945,6.911 14.952,6.783 C14.971,6.434 14.983,6.085 14.994,5.736 C15.009,5.279 15.014,4.821 15.034,4.364 C15.041,4.194 15.086,4.027 15.099,3.858 C15.115,3.660 15.113,3.461 15.120,3.263 C15.132,2.889 15.147,2.514 15.156,2.139 C15.166,1.752 15.171,1.364 15.175,0.977 C15.177,0.878 15.171,0.779 15.168,0.680 C15.243,0.680 15.319,0.680 15.394,0.680 C15.392,0.878 15.388,1.076 15.391,1.273 C15.400,1.817 15.413,2.361 15.423,2.904 C15.427,3.109 15.401,3.320 15.435,3.519 C15.524,4.030 15.540,4.544 15.552,5.060 C15.560,5.361 15.561,5.662 15.572,5.963 C15.577,6.114 15.599,6.264 15.609,6.414 C15.636,6.800 15.662,7.186 15.686,7.571 C15.692,7.654 15.689,7.738 15.697,7.821 C15.703,7.895 15.719,7.969 15.730,8.043 C15.818,8.027 15.913,8.027 15.991,7.989 C16.149,7.913 16.296,7.815 16.450,7.728 C16.580,7.655 16.712,7.586 16.843,7.515 C17.048,7.405 17.255,7.298 17.459,7.187 C17.697,7.057 17.933,6.923 18.171,6.794 C18.276,6.737 18.385,6.689 18.491,6.633 C18.673,6.536 18.851,6.430 19.038,6.340 C19.121,6.300 19.220,6.292 19.311,6.269 C19.324,6.287 19.337,6.306 19.349,6.324 C19.251,6.486 19.149,6.647 19.054,6.810 C18.988,6.924 18.931,7.043 18.870,7.160 Z" data-v-0b190a95></path><path id="staff-career-icon-support" d="M15.170,0.031 C19.186,0.031 23.201,0.031 27.216,0.031 C27.224,0.091 27.240,0.151 27.240,0.211 C27.241,8.844 27.241,17.476 27.244,26.108 C27.244,26.244 27.207,26.279 27.073,26.279 C23.226,26.275 19.380,26.276 15.534,26.276 C15.484,26.276 15.434,26.276 15.376,26.276 C15.376,25.464 15.376,24.670 15.376,23.877 C15.399,23.871 15.412,23.864 15.425,23.864 C16.499,23.863 17.573,23.862 18.647,23.863 C18.677,23.863 18.707,23.879 18.737,23.889 C18.793,23.909 18.849,23.948 18.905,23.948 C20.856,23.952 22.807,23.950 24.759,23.954 C24.890,23.954 24.923,23.914 24.923,23.786 C24.921,16.701 24.921,9.616 24.923,2.531 C24.923,2.405 24.893,2.365 24.760,2.365 C22.536,2.370 20.313,2.368 18.090,2.368 C18.040,2.368 17.990,2.368 17.940,2.368 C17.940,3.047 17.940,3.705 17.940,4.378 C19.535,4.378 21.118,4.378 22.702,4.378 C22.702,9.525 22.702,14.656 22.702,19.787 C22.684,19.801 22.667,19.815 22.650,19.829 C22.625,19.784 22.609,19.730 22.574,19.695 C18.469,15.590 14.363,11.485 10.256,7.382 C10.177,7.303 10.142,7.225 10.142,7.112 C10.145,5.593 10.144,4.074 10.144,2.555 C10.144,2.496 10.138,2.438 10.133,2.368 C10.072,2.368 10.026,2.368 9.980,2.368 C9.389,2.368 8.798,2.373 8.207,2.365 C8.068,2.363 8.037,2.406 8.037,2.539 C8.042,3.997 8.040,5.456 8.045,6.914 C8.046,7.049 8.010,7.086 7.874,7.086 C6.420,7.081 4.966,7.083 3.512,7.083 C3.326,7.083 3.326,7.083 3.326,7.264 C3.326,12.740 3.326,18.217 3.326,23.694 C3.326,23.744 3.326,23.794 3.326,23.850 C3.374,23.855 3.405,23.861 3.437,23.861 C4.811,23.862 6.185,23.861 7.560,23.864 C7.664,23.864 7.684,23.825 7.684,23.732 C7.681,23.151 7.680,22.569 7.685,21.988 C7.686,21.879 7.647,21.855 7.546,21.856 C6.936,21.860 6.327,21.858 5.717,21.858 C5.662,21.858 5.607,21.858 5.538,21.858 C5.538,21.792 5.538,21.746 5.538,21.700 C5.538,17.579 5.539,13.457 5.536,9.336 C5.535,9.209 5.573,9.179 5.695,9.179 C6.497,9.184 7.299,9.180 8.101,9.186 C8.175,9.187 8.266,9.226 8.319,9.278 C12.484,13.436 16.646,17.597 20.808,21.759 C20.831,21.783 20.851,21.811 20.882,21.849 C19.035,21.849 17.208,21.849 15.367,21.849 C15.367,21.785 15.367,21.730 15.367,21.675 C15.367,20.428 15.368,19.180 15.364,17.933 C15.364,17.862 15.339,17.770 15.291,17.722 C14.662,17.084 14.028,16.452 13.394,15.819 C13.373,15.798 13.346,15.784 13.298,15.749 C13.298,19.270 13.298,22.765 13.298,26.276 C13.221,26.276 13.162,26.276 13.102,26.276 C9.143,26.276 5.184,26.276 1.226,26.276 C0.978,26.276 1.005,26.298 1.005,26.059 C1.005,20.522 1.005,14.984 1.005,9.446 C1.005,6.375 1.005,3.304 1.006,0.233 C1.006,0.165 1.030,0.098 1.042,0.031 C5.048,0.031 9.054,0.031 13.060,0.031 C13.070,0.099 13.090,0.167 13.090,0.235 C13.092,3.048 13.091,5.861 13.095,8.674 C13.095,8.754 13.123,8.856 13.176,8.910 C13.801,9.545 14.432,10.173 15.063,10.803 C15.083,10.823 15.110,10.837 15.150,10.865 C15.150,10.787 15.150,10.731 15.150,10.675 C15.150,7.192 15.150,3.709 15.151,0.225 C15.151,0.161 15.164,0.096 15.170,0.031 ZM3.326,2.373 C3.326,2.434 3.326,2.480 3.326,2.525 C3.326,3.660 3.328,4.794 3.322,5.929 C3.322,6.066 3.369,6.089 3.491,6.089 C4.621,6.085 5.751,6.086 6.882,6.086 C6.931,6.086 6.981,6.086 7.032,6.086 C7.032,4.837 7.032,3.608 7.032,2.373 C5.797,2.373 4.574,2.373 3.326,2.373 Z" data-v-0b190a95></path><path id="staff-career-icon-tank" d="M22.659,3.601 C24.067,2.484 25.481,1.362 26.895,0.241 C26.903,0.248 26.912,0.256 26.921,0.263 C25.799,1.676 24.678,3.089 23.559,4.500 C23.252,4.194 22.962,3.903 22.659,3.601 ZM24.174,6.594 C24.067,8.240 23.972,9.887 23.876,11.533 C23.786,13.076 23.700,14.620 23.610,16.164 C23.527,17.571 23.443,18.979 23.354,20.387 C23.351,20.440 23.304,20.505 23.259,20.541 C21.832,21.676 20.404,22.809 18.975,23.942 C17.223,25.331 15.470,26.719 13.721,28.110 C13.638,28.177 13.589,28.174 13.507,28.111 C10.279,25.589 7.048,23.071 3.820,20.548 C3.766,20.506 3.719,20.423 3.714,20.356 C3.637,19.249 3.568,18.141 3.496,17.033 C3.427,15.981 3.356,14.929 3.288,13.877 C3.234,13.040 3.185,12.203 3.131,11.366 C3.064,10.324 2.995,9.281 2.928,8.238 C2.889,7.654 2.855,7.069 2.812,6.485 C2.804,6.388 2.859,6.367 2.925,6.338 C4.051,5.842 5.177,5.342 6.306,4.850 C6.419,4.801 6.457,4.743 6.455,4.622 C6.448,4.144 6.452,3.666 6.452,3.188 C6.452,3.138 6.452,3.088 6.452,3.021 C6.525,3.021 6.580,3.021 6.635,3.021 C7.648,3.021 8.661,3.018 9.673,3.023 C9.812,3.024 9.924,2.987 10.038,2.912 C11.175,2.159 12.316,1.411 13.453,0.658 C13.548,0.595 13.613,0.591 13.711,0.656 C14.847,1.419 15.986,2.178 17.128,2.933 C17.207,2.985 17.317,3.016 17.412,3.017 C18.359,3.023 19.307,3.023 20.254,3.018 C20.376,3.017 20.414,3.048 20.412,3.174 C20.405,3.661 20.413,4.148 20.406,4.636 C20.405,4.749 20.443,4.799 20.545,4.842 C21.692,5.326 22.837,5.817 23.985,6.300 C24.127,6.360 24.185,6.423 24.174,6.594 ZM22.576,7.290 C21.530,6.868 20.487,6.438 19.441,6.015 C19.342,5.975 19.308,5.925 19.310,5.819 C19.317,5.463 19.313,5.107 19.313,4.751 C19.313,4.487 19.313,4.487 19.042,4.487 C18.338,4.487 17.635,4.489 16.932,4.484 C16.854,4.483 16.764,4.456 16.699,4.413 C15.702,3.755 14.707,3.092 13.715,2.427 C13.620,2.363 13.556,2.355 13.455,2.422 C12.456,3.086 11.454,3.745 10.448,4.399 C10.368,4.451 10.259,4.482 10.163,4.483 C9.352,4.490 8.541,4.490 7.730,4.484 C7.594,4.483 7.543,4.509 7.548,4.659 C7.560,5.043 7.547,5.428 7.554,5.812 C7.556,5.921 7.525,5.974 7.420,6.018 C6.418,6.439 5.421,6.868 4.419,7.289 C4.284,7.345 4.222,7.407 4.248,7.565 C4.277,7.749 4.272,7.939 4.282,8.126 C4.283,8.126 4.284,8.126 4.284,8.126 C4.333,9.010 4.382,9.894 4.432,10.778 C4.486,11.728 4.542,12.677 4.596,13.627 C4.654,14.665 4.712,15.704 4.770,16.742 C4.823,17.687 4.878,18.632 4.925,19.577 C4.930,19.688 4.969,19.755 5.053,19.821 C6.027,20.577 6.998,21.336 7.970,22.095 C9.817,23.537 11.664,24.978 13.511,26.421 C13.581,26.476 13.629,26.499 13.714,26.432 C16.520,24.223 19.327,22.015 22.137,19.810 C22.216,19.749 22.248,19.683 22.251,19.587 C22.263,19.189 22.279,18.791 22.296,18.393 C22.335,17.424 22.374,16.455 22.415,15.485 C22.472,14.142 22.532,12.798 22.588,11.455 C22.642,10.158 22.690,8.861 22.752,7.565 C22.759,7.408 22.713,7.345 22.576,7.290 ZM21.141,17.873 C21.123,18.200 21.115,18.528 21.090,18.855 C21.084,18.929 21.044,19.021 20.988,19.065 C18.574,20.970 16.156,22.869 13.740,24.771 C13.670,24.826 13.623,24.851 13.538,24.784 C11.109,22.875 8.679,20.970 6.246,19.067 C6.158,18.998 6.131,18.925 6.126,18.819 C6.072,17.860 6.012,16.901 5.955,15.942 C5.902,15.035 5.851,14.128 5.798,13.220 C5.745,12.299 5.689,11.378 5.634,10.456 C5.593,9.769 5.551,9.081 5.509,8.394 C5.504,8.316 5.506,8.256 5.598,8.215 C6.177,7.962 6.753,7.701 7.330,7.442 C7.346,7.435 7.365,7.433 7.400,7.424 C7.428,7.831 7.456,8.224 7.481,8.616 C7.539,9.518 7.595,10.421 7.652,11.323 C7.717,12.370 7.782,13.418 7.848,14.465 C7.908,15.419 7.967,16.373 8.033,17.326 C8.036,17.379 8.088,17.442 8.134,17.477 C8.916,18.075 9.700,18.670 10.484,19.265 C11.380,19.946 12.275,20.626 13.171,21.306 C13.336,21.431 13.696,21.439 13.853,21.319 C15.590,20.003 17.326,18.685 19.064,17.371 C19.139,17.314 19.174,17.255 19.180,17.163 C19.219,16.466 19.262,15.769 19.304,15.072 C19.346,14.371 19.388,13.669 19.430,12.968 C19.485,12.051 19.539,11.135 19.595,10.218 C19.649,9.315 19.705,8.413 19.760,7.510 C19.763,7.475 19.773,7.440 19.783,7.388 C20.042,7.514 20.289,7.634 20.536,7.754 C20.873,7.918 21.209,8.084 21.548,8.243 C21.634,8.283 21.658,8.332 21.653,8.427 C21.561,10.121 21.475,11.815 21.383,13.508 C21.305,14.963 21.221,16.418 21.141,17.873 ZM18.464,13.122 C18.385,14.422 18.301,15.721 18.223,17.021 C18.217,17.114 18.184,17.172 18.110,17.229 C16.633,18.345 15.158,19.463 13.685,20.583 C13.604,20.645 13.555,20.637 13.480,20.578 C11.969,19.406 10.456,18.237 8.945,17.066 C8.909,17.038 8.872,16.987 8.869,16.945 C8.803,16.118 8.743,15.292 8.682,14.465 C8.625,13.708 8.569,12.951 8.513,12.195 C8.447,11.298 8.382,10.401 8.316,9.504 C8.260,8.757 8.189,8.010 8.153,7.262 C8.128,6.716 8.148,6.168 8.148,5.598 C8.214,5.598 8.270,5.598 8.325,5.598 C9.075,5.598 9.825,5.596 10.575,5.600 C10.699,5.601 10.798,5.568 10.897,5.494 C11.560,4.996 12.227,4.503 12.893,4.008 C12.921,3.987 12.953,3.970 13.009,3.936 C13.009,4.015 13.009,4.069 13.009,4.123 C13.009,7.032 13.009,9.942 13.009,12.852 C13.009,13.048 13.009,13.048 13.206,13.048 C13.515,13.048 13.824,13.048 14.148,13.048 C14.148,10.012 14.148,6.988 14.148,3.925 C14.215,3.971 14.255,3.996 14.292,4.024 C14.947,4.518 15.600,5.015 16.259,5.503 C16.334,5.559 16.444,5.593 16.538,5.594 C17.242,5.602 17.945,5.601 18.648,5.595 C18.773,5.594 18.802,5.631 18.805,5.754 C18.830,7.104 18.755,8.451 18.664,9.797 C18.589,10.905 18.532,12.014 18.464,13.122 ZM0.400,0.273 C0.409,0.264 0.418,0.255 0.426,0.247 C1.837,1.365 3.247,2.484 4.647,3.594 C4.347,3.892 4.053,4.184 3.746,4.489 C2.638,3.092 1.519,1.682 0.400,0.273 ZM4.649,23.765 C3.245,24.879 1.831,26.001 0.416,27.124 C0.408,27.115 0.400,27.107 0.393,27.099 C1.515,25.685 2.637,24.271 3.753,22.864 C4.055,23.168 4.347,23.462 4.649,23.765 ZM26.923,27.101 C26.916,27.109 26.908,27.118 26.901,27.126 C25.485,26.002 24.069,24.879 22.660,23.761 C22.964,23.460 23.259,23.168 23.563,22.867 C24.677,24.271 25.800,25.686 26.923,27.101 Z" data-v-0b190a95></path><path id="staff-career-icon-medic" d="M21.821,13.422 C21.716,13.482 21.640,13.491 21.531,13.426 C20.971,13.094 20.407,12.768 19.839,12.450 C19.720,12.383 19.682,12.309 19.684,12.175 C19.691,11.524 19.690,10.874 19.684,10.223 C19.683,10.107 19.715,10.041 19.820,9.981 C21.993,8.733 24.164,7.481 26.335,6.229 C26.383,6.202 26.431,6.176 26.493,6.142 C27.157,7.289 27.815,8.426 28.480,9.576 C28.426,9.610 28.380,9.640 28.333,9.667 C26.162,10.918 23.990,12.168 21.821,13.422 ZM23.531,6.231 C23.119,6.224 22.706,6.223 22.294,6.232 C22.158,6.235 22.132,6.186 22.133,6.063 C22.138,5.268 22.136,4.472 22.136,3.677 C22.136,3.490 22.135,3.490 21.942,3.490 C21.140,3.490 20.339,3.488 19.537,3.492 C19.423,3.493 19.384,3.462 19.386,3.343 C19.393,2.922 19.392,2.501 19.386,2.080 C19.384,1.967 19.423,1.938 19.531,1.939 C20.201,1.943 20.872,1.941 21.542,1.941 C22.207,1.941 22.873,1.943 23.538,1.938 C23.654,1.938 23.691,1.969 23.690,2.088 C23.686,3.416 23.686,4.745 23.690,6.074 C23.691,6.199 23.653,6.233 23.531,6.231 ZM28.679,20.318 C28.016,21.463 27.357,22.603 26.691,23.754 C26.578,23.689 26.477,23.632 26.377,23.574 C22.733,21.474 19.088,19.375 15.445,17.272 C15.331,17.206 15.250,17.199 15.131,17.268 C11.297,19.481 7.462,21.689 3.626,23.898 C3.583,23.924 3.538,23.948 3.477,23.981 C2.814,22.835 2.157,21.699 1.492,20.550 C1.543,20.517 1.587,20.485 1.634,20.458 C5.478,18.244 9.321,16.030 13.166,13.820 C13.271,13.759 13.301,13.690 13.301,13.574 C13.298,9.343 13.298,5.112 13.298,0.881 C13.298,0.825 13.304,0.769 13.308,0.713 C14.630,0.713 15.952,0.713 17.274,0.713 C17.274,4.996 17.275,9.278 17.271,13.561 C17.271,13.695 17.310,13.768 17.428,13.836 C21.140,15.969 24.849,18.106 28.559,20.242 C28.595,20.263 28.629,20.287 28.679,20.318 ZM8.575,3.487 C8.442,3.486 8.413,3.528 8.413,3.653 C8.419,4.463 8.414,5.273 8.419,6.082 C8.419,6.201 8.384,6.232 8.268,6.231 C7.846,6.225 7.424,6.225 7.002,6.230 C6.894,6.232 6.857,6.201 6.857,6.088 C6.861,4.754 6.861,3.420 6.857,2.087 C6.857,1.967 6.897,1.938 7.010,1.939 C8.346,1.942 9.682,1.941 11.018,1.941 C11.059,1.941 11.100,1.946 11.149,1.949 C11.149,2.462 11.149,2.965 11.149,3.490 C11.088,3.490 11.034,3.490 10.980,3.490 C10.179,3.490 9.377,3.493 8.575,3.487 ZM10.883,10.260 C10.873,10.906 10.876,11.552 10.882,12.197 C10.883,12.314 10.850,12.382 10.745,12.441 C10.162,12.770 9.582,13.105 9.004,13.443 C8.917,13.495 8.857,13.484 8.776,13.438 C6.692,12.234 4.606,11.033 2.521,9.832 C2.286,9.696 2.050,9.561 1.815,9.425 C1.776,9.402 1.737,9.377 1.689,9.347 C2.352,8.201 3.010,7.064 3.674,5.917 C3.730,5.946 3.779,5.969 3.826,5.996 C6.119,7.317 8.410,8.639 10.705,9.955 C10.835,10.030 10.885,10.108 10.883,10.260 ZM3.951,12.079 C4.316,12.445 4.675,12.804 5.040,13.170 C4.421,13.787 3.779,14.427 3.131,15.074 C3.792,15.728 4.433,16.363 5.063,16.985 C4.683,17.363 4.323,17.721 3.950,18.092 C3.940,18.082 3.902,18.050 3.867,18.016 C2.942,17.093 2.017,16.170 1.092,15.248 C1.039,15.195 0.984,15.144 0.929,15.093 C0.929,15.083 0.929,15.074 0.929,15.064 C0.972,15.030 1.019,14.999 1.057,14.960 C1.993,14.028 2.928,13.095 3.863,12.162 C3.896,12.130 3.930,12.099 3.951,12.079 ZM6.859,23.960 C7.386,23.960 7.894,23.960 8.414,23.960 C8.414,24.866 8.414,25.763 8.414,26.686 C9.337,26.686 10.239,26.686 11.148,26.686 C11.148,27.209 11.148,27.717 11.148,28.241 C11.088,28.241 11.038,28.241 10.988,28.241 C9.670,28.241 8.353,28.239 7.036,28.244 C6.892,28.245 6.856,28.205 6.856,28.064 C6.861,26.749 6.859,25.434 6.859,24.119 C6.859,24.069 6.859,24.019 6.859,23.960 ZM13.445,20.980 C14.021,20.656 14.593,20.325 15.163,19.993 C15.251,19.941 15.317,19.939 15.406,19.992 C15.984,20.331 16.564,20.665 17.147,20.996 C17.240,21.049 17.277,21.106 17.277,21.215 C17.274,23.986 17.274,26.757 17.274,29.528 C15.952,29.528 14.630,29.528 13.308,29.528 C13.304,29.472 13.298,29.416 13.298,29.360 C13.298,26.655 13.299,23.949 13.295,21.244 C13.295,21.116 13.332,21.044 13.445,20.980 ZM19.396,26.686 C19.466,26.686 19.522,26.686 19.577,26.686 C20.379,26.686 21.180,26.683 21.981,26.689 C22.106,26.690 22.139,26.656 22.138,26.532 C22.133,25.727 22.136,24.922 22.136,24.118 C22.136,24.068 22.136,24.018 22.136,23.959 C22.657,23.959 23.161,23.959 23.680,23.959 C23.683,24.014 23.687,24.063 23.687,24.112 C23.688,25.432 23.686,26.751 23.691,28.071 C23.691,28.204 23.657,28.245 23.519,28.244 C22.198,28.239 20.876,28.240 19.554,28.243 C19.431,28.244 19.382,28.218 19.385,28.082 C19.394,27.666 19.388,27.249 19.389,26.833 C19.389,26.792 19.393,26.750 19.396,26.686 ZM26.316,12.096 C27.306,13.088 28.311,14.093 29.304,15.086 C28.314,16.076 27.309,17.081 26.304,18.086 C25.952,17.734 25.592,17.374 25.220,17.003 C25.854,16.372 26.495,15.733 27.139,15.091 C26.492,14.445 25.853,13.808 25.220,13.177 C25.595,12.807 25.959,12.448 26.316,12.096 Z" data-v-0b190a95></path><path id="staff-career-icon-warrior" d="M30.032,27.175 C28.608,23.640 27.184,20.106 25.759,16.572 C25.769,16.565 25.778,16.558 25.788,16.551 C26.864,17.719 27.940,18.886 29.046,20.087 C29.379,17.012 29.707,13.980 30.035,10.947 C30.044,10.948 30.053,10.948 30.062,10.949 C30.062,16.356 30.062,21.763 30.062,27.171 C30.052,27.172 30.042,27.173 30.032,27.175 ZM28.906,28.538 C28.922,28.570 28.936,28.603 28.968,28.672 C28.295,28.331 27.661,28.009 27.027,27.687 C25.621,26.973 24.214,26.261 22.810,25.544 C22.739,25.508 22.672,25.445 22.630,25.378 C22.224,24.743 21.826,24.104 21.421,23.469 C21.354,23.363 21.275,23.263 21.186,23.175 C17.670,19.673 14.152,16.172 10.634,12.672 C9.519,11.562 8.405,10.452 7.288,9.345 C7.216,9.273 7.184,9.202 7.185,9.099 C7.190,8.608 7.187,8.117 7.187,7.626 C7.187,7.585 7.187,7.544 7.187,7.504 C7.197,7.498 7.208,7.492 7.219,7.485 C11.416,11.663 15.613,15.840 19.807,20.014 C19.951,19.866 20.084,19.729 20.234,19.574 C16.051,15.410 11.852,11.231 7.639,7.038 C7.683,7.029 7.712,7.019 7.740,7.018 C8.269,7.017 8.799,7.015 9.328,7.022 C9.392,7.023 9.469,7.066 9.517,7.113 C10.979,8.564 12.438,10.019 13.898,11.472 C17.091,14.649 20.281,17.828 23.481,20.998 C23.669,21.185 23.924,21.307 24.154,21.451 C24.649,21.762 25.149,22.066 25.644,22.379 C25.711,22.421 25.774,22.487 25.810,22.557 C26.845,24.550 27.875,26.544 28.906,28.538 ZM10.712,6.093 C9.278,6.089 7.845,6.090 6.411,6.090 C6.352,6.090 6.292,6.090 6.217,6.090 C6.217,7.644 6.217,9.181 6.217,10.730 C5.573,10.730 4.944,10.730 4.297,10.730 C4.297,10.663 4.297,10.604 4.297,10.544 C4.297,8.986 4.297,7.428 4.299,5.871 C4.299,5.770 4.273,5.696 4.200,5.623 C3.053,4.486 1.908,3.346 0.763,2.208 C0.724,2.170 0.676,2.142 0.633,2.110 C0.633,2.100 0.633,2.091 0.633,2.082 C1.148,1.567 1.664,1.052 2.179,0.538 C2.189,0.538 2.198,0.538 2.208,0.538 C2.235,0.574 2.258,0.614 2.289,0.646 C3.430,1.783 4.572,2.918 5.710,4.057 C5.800,4.147 5.889,4.185 6.016,4.184 C7.577,4.180 9.137,4.182 10.697,4.182 C10.752,4.182 10.808,4.182 10.876,4.182 C10.880,4.232 10.885,4.272 10.885,4.313 C10.886,4.851 10.881,5.389 10.889,5.926 C10.892,6.069 10.841,6.093 10.712,6.093 ZM14.658,29.365 C15.504,29.274 16.351,29.185 17.198,29.094 C17.938,29.015 18.678,28.933 19.417,28.853 C19.678,28.825 19.938,28.799 20.199,28.771 C20.230,28.768 20.261,28.761 20.326,28.750 C19.133,27.661 17.960,26.591 16.787,25.521 C16.792,25.511 16.796,25.501 16.800,25.492 C16.844,25.506 16.888,25.519 16.930,25.536 C20.404,26.923 23.877,28.309 27.350,29.698 C27.399,29.717 27.439,29.760 27.483,29.791 C21.991,29.791 16.499,29.791 11.007,29.791 C11.470,29.730 11.933,29.662 12.397,29.609 C13.150,29.522 13.904,29.445 14.658,29.365 Z" data-v-0b190a95></path></g></svg>',
    1
  ),
  xu = ae({
    __name: "Section3_Three",
    setup(i) {
      ht((_) => ({ "13475fdc": v(g) }));
      const e = kt(),
        t = [bn],
        n = L();
      let s = G([
          { label: "rhodes", url: "" },
          { label: "rhine", url: "" },
          { label: "yan", url: "" },
          { label: "penguin", url: "" },
        ]),
        o = G([]);
      o.push(...tt(s, o, e.ThreeParticlesLogo)),
        we(
          () => e.ThreeParticlesLogo,
          (_, x) => {
            o.push(...tt(s, o, _)),
              e.ThreeParticlesLogo && n.value.clearCanvas();
          }
        );
      const r = G([
          {
            id: 0,
            name: "\u963F\u7C73\u5A05",
            idex: "01",
            career: "#staff-career-icon-caster",
            active: !0,
            footer: "BOO1 AMIYA",
            camp: "rhodes",
          },
          {
            id: 1,
            name: "\u51EF\u5C14\u897F",
            idex: "02",
            career: "#staff-career-icon-medic",
            active: !1,
            footer: "BOO3 KAL'TSIT",
            camp: "rhodes",
          },
          {
            id: 2,
            name: "\u7EA2",
            idex: "03",
            career: "#staff-career-icon-special",
            active: !1,
            footer: "SWO1 PROJEKT RED",
            camp: "rhodes",
          },
          {
            id: 3,
            name: "\u675C\u5BBE",
            idex: "04",
            career: "#staff-career-icon-warrior",
            active: !1,
            footer: "R100 DOBERMANN",
            camp: "rhodes",
          },
          {
            id: 4,
            name: "\u4E34\u5149",
            idex: "05",
            career: "#staff-career-icon-tank",
            active: !1,
            footer: "FOO2 NEARL",
            camp: "rhodes",
          },
          {
            id: 5,
            name: "\u8D6B\u9ED8",
            idex: "06",
            career: "#staff-career-icon-medic",
            active: !1,
            footer: "SILENCE",
            camp: "rhine",
          },
          {
            id: 6,
            name: "\u4F0A\u8299\u5229\u7279",
            idex: "07",
            career: "#staff-career-icon-caster",
            active: !1,
            footer: "RLO3 IFRIT",
            camp: "rhine",
          },
          {
            id: 7,
            name: "\u767D\u9762\u9E2E",
            idex: "08",
            career: "#staff-career-icon-medic",
            active: !1,
            footer: "RLO4 PTILOPSIS",
            camp: "rhine",
          },
          {
            id: 8,
            name: "\u5FB7\u514B\u8428\u65AF",
            idex: "09",
            career: "#staff-career-icon-pioneer",
            active: !1,
            footer: "RLO2 TEXAS",
            camp: "penguin",
          },
          {
            id: 9,
            name: "\u80FD\u5929\u4F7F",
            idex: "10",
            career: "#staff-career-icon-sniper",
            active: !1,
            footer: "RLO2 EXUSIAI",
            camp: "penguin",
          },
          {
            id: 10,
            name: "\u53EF\u9882",
            idex: "11",
            career: "#staff-career-icon-tank",
            active: !1,
            footer: "RL04 CROISSANT",
            camp: "penguin",
          },
          {
            id: 11,
            name: "\u9648",
            idex: "12",
            career: "#staff-career-icon-warrior",
            active: !1,
            footer: "LMO4 CHEN",
            camp: "yan",
          },
          {
            id: 12,
            name: "\u661F\u718A",
            idex: "13",
            career: "#staff-career-icon-tank",
            active: !1,
            footer: "LMO5 HOSHIGUMA",
            camp: "yan",
          },
        ]),
        a = G([
          {
            id: 0,
            name: "\u963F\u7C73\u5A05",
            EN: "AMIYA",
            CV: "\u9ED1\u6CFD\u670B\u4E16",
            desc: "\u7F57\u5FB7\u5C9B\u7684\u516C\u5F00\u9886\u8896\uFF0C\u5728\u5185\u90E8\u62E5\u6709\u6700\u9AD8\u6267\u884C\u6743\u3002\u867D\u7136\uFF0C\u4ECE\u5916\u8868\u4E0A\u770B\u8D77\u6765\u4EC5\u4EC5\u662F\u4E2A\u4E0D\u6210\u719F\u7684\u5C11\u5973\uFF0C\u5B9E\u9645\u4E0A\uFF0C\u5979\u5374\u662F\u6DF1\u53D7\u5927\u5BB6\u4FE1\u4EFB\u7684\u5408\u683C\u7684\u9886\u8896\u3002\u73B0\u5728\uFF0C\u963F\u7C73\u5A05\u6B63\u5E26\u9886\u7740\u7F57\u5FB7\u5C9B\uFF0C\u4E3A\u4E86\u611F\u67D3\u8005\u7684\u672A\u6765\uFF0C\u4E3A\u4E86\u8BA9\u8FD9\u7247\u5927\u5730\u6323\u8131\u77FF\u77F3\u75C5\u7684\u9634\u973E\u800C\u4E0D\u61C8\u52AA\u529B\u3002",
          },
          {
            id: 1,
            name: "\u51EF\u5C14\u897F",
            EN: "KAI`TSIL",
            CV: "\u65E5\u7B20\u9633\u5B50",
            desc: `\u7F57\u5FB7\u5C9B\u6700\u9AD8\u7BA1\u7406\u8005\u4E4B\u4E00\uFF0C\u963F\u7C73\u5A05\u7684\u76F4\u63A5\u8F85\u5BFC\u8005\u3002
    \u7F57\u5FB7\u5C9B\u533B\u7597\u90E8\u95E8\u7684\u603B\u8D1F\u8D23\u4EBA\u3002
    \u4F5C\u4E3A\u7F57\u5FB7\u5C9B\u7684\u8001\u6210\u5458\uFF0C\u51EF\u5C14\u5E0C\u533B\u751F\u662F\u5728\u963F\u7C73\u5A05\u80CC\u540E\u6700\u7A33\u56FA\u7684\u63F4\u62A4\u8005`,
          },
          {
            id: 2,
            name: "\u7EA2",
            EN: "AMIYA",
            CV: "\u9ED1\u6CFD\u670B\u4E16",
            desc: `\u7EA2\uFF0C\u8EAB\u4EFD\u4E0D\u660E\uFF0C\u5C65\u5386\u7F3A\u5931\uFF0C\u7531\u51EF\u5C14\u5E0C\u533B\u751F\u63A5\u6536\u3001\u76D1\u62A4\u5E76\u62C5\u4FDD\u3002
    \u4E8E\u673A\u52A8\u4F5C\u6218\uFF0C\u7279\u79CD\u4F5C\u6218\u4E0E\u9690\u79D8\u4F5C\u6218\u4E2D\u8868\u73B0\u51FA\u6781\u9AD8\u5929\u8D4B\uFF0C\u6210\u7EE9\u6590\u7136\u3002
    \u73B0\u4E8E\u51EF\u5C14\u5E0C\u533B\u751F\u7684\u6307\u5BFC\u4E0B\uFF0C\u4F5C\u4E3A\u7279\u79CD\u5E72\u5458\u4E3A\u7F57\u5FB7\u5C9B\u63D0\u4F9B\u670D\u52A1\u3002`,
          },
          {
            id: 3,
            name: "\u675C\u5BBE",
            EN: "DOBERMANN",
            CV: "\u79CDji",
            desc: `\u524D\u73BB\u5229\u74E6\u5C14\u519B\u4EBA\uFF0C\u52A0\u5165\u7F57\u5FB7\u5C9B\u540E\u62C5\u4EFB\u6559\u5B98\uFF0C\u4E3B\u8981\u8D1F\u8D23\u57FA\u5C42\u548C\u65B0\u664B\u5E72\u5458\u57F9\u8BAD\uFF0C\u5FC5\u8981\u65F6\u523B\uFF0C\u4E5F\u4F1A\u8D1F\u8D23\u5BF9\u4FD8\u864F\u7684\u5BA1\u8BAF\u3002
    \u719F\u6089\u5404\u79CD\u89C4\u6A21\u7684\u519B\u4E8B\u884C\u52A8\uFF0C\u81EA\u8EAB\u4F5C\u4E3A\u58EB\u5175\u7684\u7D20\u517B\u4E5F\u6781\u9AD8\uFF0C\u4F5C\u4E3A\u8FD1\u536B\u5E72\u5458\uFF0C\u5728\u7B2C\u4E00\u7EBF\u5E26\u9886\u961F\u4F0D\u51B2\u950B\u9677\u9635\u3002`,
          },
          {
            id: 4,
            name: "\u4E34\u5149",
            EN: "NEARL",
            CV: "\u4F50\u4ED3\u97F3",
            desc: `\u4E34\u5149\uFF0C\u524D\u5361\u897F\u7C73\u5C14\u8000\u9A91\u58EB\uFF0C\u611F\u67D3\u8005\u63F4\u52A9\u56E2\u4F53\u201C\u4F7F\u5F92\u201D\u7684\u4E00\u5458\u3002\u5728\u63A9\u62A4\u5DF1\u65B9\u961F\u5458\u3001\u673A\u52A8\u4F5C\u6218\u3001\u6B7C\u706D\u6218\u4E0E\u5F00\u9614\u5730\u5E26\u4F5C\u6218\u4E2D\u4F53\u73B0\u51FA\u6781\u9AD8\u7684\u6218\u6597\u6280\u5DE7\u548C\u4E2A\u4EBA\u519B\u4E8B\u7D20\u517B\u3002
    \u73B0\u4E8E\u7F57\u5FB7\u5C9B\u4F5C\u4E3A\u91CD\u88C5\u5E72\u5458\u884C\u52A8\uFF0C\u5E76\u4E8E\u73B0\u573A\u63D0\u4F9B\u6218\u672F\u6307\u6325\u652F\u63F4\u3002`,
          },
          {
            id: 5,
            name: "\u8D6B\u9ED8",
            EN: "SILENCE",
            CV: "\u9F9F\u5934\u660E\u91CC",
            desc: `\u8D6B\u9ED8\uFF0C\u83B1\u8335\u751F\u547D\u6709\u9650\u516C\u53F8\u6E90\u77F3\u6709\u5173\u9879\u76EE\u7814\u7A76\u5458\uFF0C\u66FE\u4E3B\u7BA1\u6570\u9879\u672A\u77E5\u5E94\u7528\u7814\u7A76\uFF0C\u540C\u671F\u4EA6\u4E3B\u6301\u6570\u4E2A\u77FF\u77F3\u75C5\u4E34\u5E8A\u8BD5\u9A8C\u9879\u76EE\u3002 
    \u73B0\u4E8E\u7F57\u5FB7\u5C9B\u4E3A\u591A\u9879\u884C\u52A8\u63D0\u4F9B\u6218\u573A\u533B\u7597\u6551\u62A4\u670D\u52A1\u3002`,
          },
          {
            id: 6,
            name: "\u4F0A\u8299\u5229\u7279",
            EN: "IFRIT",
            CV: "\u82B1\u5B88\u7531\u7F8E\u91CC",
            desc: `\u4F0A\u8299\u5229\u7279\uFF0C\u524D\u83B1\u8335\u751F\u547D\u533B\u7597\u5BF9\u8C61\uFF0C\u91CD\u5EA6\u611F\u67D3\u8005\u3002\u62E5\u6709\u6781\u9AD8\u7684\u6E90\u77F3\u9002\u5E94\u6027\uFF0C\u4F34\u968F\u6709\u591A\u53D1\u6027\u70B9\u706B\u73B0\u8C61\u3002\u8FDB\u5165\u83B1\u8335\u751F\u547D\u524D\u7684\u5C65\u5386\u7F3A\u5931\u3002
    \u73B0\u4E8E\u7F57\u5FB7\u5C9B\u63A5\u53D7\u6CBB\u7597\uFF0C\u7531\u533B\u7597\u5E72\u5458\u8D6B\u9ED8\u62C5\u4EFB\u76D1\u62A4\u4E0E\u62C5\u4FDD\u4EBA\u3002`,
          },
          {
            id: 7,
            name: "\u767D\u9762\u9E2E",
            EN: "PTILOPSIS",
            CV: "\u91D1\u5143\u5BFF\u5B50",
            desc: `\u767D\u9762\u9E2E\uFF0C\u524D\u83B1\u8335\u751F\u547D\u516C\u53F8\uFF0C\u6570\u636E\u7EF4\u62A4\u4E13\u5458\u3002\u5728\u533B\u7597\u7C7B\u6E90\u77F3\u6280\u827A\u9886\u57DF\u53D6\u5F97\u4E0D\u83F2\u6210\u5C31\uFF0C\u4E8E\u533B\u7597\u6570\u636E\u7EF4\u62A4\uFF0C\u5E38\u89C4\u533B\u7597\u65B9\u6848\u5E94\u7528\uFF0C\u591A\u9879\u76EE\u533B\u7597\u884C\u4E3A\u7B49\u76F8\u5173\u9886\u57DF\uFF0C\u62E5\u6709\u4E30\u5BCC\u7ECF\u9A8C\u3002
    \u73B0\u4E8E\u7F57\u5FB7\u5C9B\u62C5\u4EFB\u533B\u7597\u5E72\u5458\uFF0C\u4EA6\u5C31\u804C\u4E8E\u533B\u7597\u90E8\u95E8\uFF0C\u67D0\u4E34\u5E8A\u5B9E\u9A8C\u5C0F\u7EC4\u3002\u540C\u65F6\uFF0C\u4E3A\u7F57\u5FB7\u5C9B\u63D0\u4F9B\u82E5\u5E72\u9879\u533B\u7597\u9879\u76EE\u7684\u76F8\u5173\u8F85\u52A9\u5DE5\u4F5C\u3002`,
          },
          {
            id: 8,
            name: "\u5FB7\u514B\u8428\u65AF",
            EN: "TEXAS",
            CV: "\u7530\u6240\u6893",
            desc: `\u4F01\u9E45\u7269\u6D41\u5458\u5DE5\uFF0C\u5355\u5175\u4F5C\u6218\u80FD\u529B\u51FA\u7C7B\u62D4\u8403\u3002 
    \u4E8E\u5408\u7EA6\u671F\u5185\u4EFB\u4F01\u9E45\u7269\u6D41\u9A7B\u7F57\u5FB7\u5C9B\u8054\u7EDC\u4EBA\u5458\uFF0C\u540C\u65F6\u4E3A\u7F57\u5FB7\u5C9B\u7684\u591A\u9879\u884C\u52A8\u63D0\u4F9B\u534F\u52A9\u3002`,
          },
          {
            id: 9,
            name: "\u80FD\u5929\u4F7F",
            EN: "EXUSIAI",
            CV: "\u77F3\u89C1\u4E94\u83DC\u9999",
            desc: "\u80FD\u5929\u4F7F\uFF0C\u62C9\u7279\u5170\u516C\u6C11\uFF0C\u9002\u7528\u62C9\u7279\u5170\u4E00\u81F3\u5341\u4E09\u9879\u516C\u6C11\u6743\u76CA\u3002\u4F01\u9E45\u7269\u6D41\u516C\u53F8\u6210\u5458\u3002\u4ECE\u4E8B\u79D8\u5BC6\u8054\u7EDC\uFF0C\u6B66\u88C5\u62BC\u8FD0\u7B49\u975E\u516C\u5F00\u6D3B\u52A8\uFF0C\u63A8\u6D4B\u8EAB\u4EFD\uFF1A\u4FE1\u4F7F\u3002\u4E8E\u5408\u7EA6\u671F\u5185\u4EFB\u4F01\u9E45\u7269\u6D41\u9A7B\u7F57\u5FB7\u5C9B\u8054\u7EDC\u4EBA\u5458\uFF0C\u540C\u65F6\u4E3A\u7F57\u5FB7\u5C9B\u591A\u9879\u884C\u52A8\u63D0\u4F9B\u534F\u52A9\u3002",
          },
          {
            id: 10,
            name: "\u53EF\u9882",
            EN: "CROISSANT",
            CV: "\u4E45\u4FDD\u767E\u5408\u82B1",
            desc: "\u4F01\u9E45\u7269\u6D41\u5458\u5DE5\uFF0C\u4E8E\u5408\u7EA6\u671F\u5185\u4EFB\u4F01\u9E45\u7269\u6D41\u9A7B\u7F57\u5FB7\u5C9B\u5916\u6D3E\u5E72\u5458\u3002 \u64C5\u957F\u9632\u5B88\uFF0C\u80FD\u540C\u65F6\u7275\u5236\u6570\u4E2A\u654C\u4EBA\uFF0C\u5E76\u62E5\u6709\u602A\u529B\uFF0C\u80FD\u7528\u5DE8\u9524\u8F7B\u677E\u51FB\u98DE\u7626\u5F31\u7684\u654C\u4EBA\u3002",
          },
          {
            id: 11,
            name: "\u9648",
            EN: "CHEN",
            CV: "\u77F3\u4E0A\u9759\u9999",
            desc: `\u9648\uFF0C\u9F99\u95E8\u9AD8\u7EA7\u8B66\u53F8\uFF0C\u9F99\u95E8\u8FD1\u536B\u5C40\u7279\u522B\u7763\u67E5\u7EC4\u7EC4\u957F\uFF0C\u6BD5\u4E1A\u4E8E\u7EF4\u591A\u5229\u4E9A\u7687\u5BB6\u8FD1\u536B\u5B66\u6821\uFF0C\u6210\u7EE9\u4F18\u5F02\uFF0C\u8868\u73B0\u7A81\u51FA\u3002\u5728\u9F99\u95E8\u8FD1\u536B\u5C40\u4F9B\u804C\u671F\u95F4\uFF0C\u529B\u4E3B\u53D6\u7F14\u9F99\u95E8\u5883\u5185\u975E\u6CD5\u6D3B\u52A8\uFF0C\u5BF9\u6297\u66B4\u529B\u72AF\u7F6A\u548C\u6709\u7EC4\u7EC7\u72AF\u7F6A\uFF0C\u8FFD\u7F09\u6B66\u88C5\u9003\u72AF\u4E0E\u56FD\u9645\u91CD\u72AF\u7B49\u884C\u52A8\uFF0C\u5E76\u53D6\u5F97\u591A\u9879\u91CD\u5927\u6210\u679C\u3002
    \u73B0\u4F5C\u4E3A\u7279\u522B\u4EBA\u5458\u534F\u52A9\u7F57\u5FB7\u5C9B\u884C\u52A8\uFF0C\u5E76\u4E3A\u73B0\u573A\u63D0\u4F9B\u6218\u672F\u6307\u6325\u652F\u63F4\u3002`,
          },
          {
            id: 12,
            name: "\u661F\u718A",
            EN: "HOSHIGUMA",
            CV: "\u5B89\u91CE\u5E0C\u4E16\u4E43",
            desc: `\u661F\u718A\uFF0C\u9F99\u95E8\u8FD1\u536B\u5C40\u7279\u522B\u4EFB\u52A1\u7EC4\u7CBE\u82F1\u5E72\u5458\u3002\u5B58\u5728\u6570\u9879\u6307\u63A7\u8BB0\u5F55\u3002
    \u7ECF\u9F99\u95E8\u603B\u7763\u9B4F\u5F66\u543E\u4EA4\u6D89\uFF0C\u9F99\u95E8\u8FD1\u536B\u5C40\u4F9D\u661F\u718A\u7684\u4F18\u5F02\u80FD\u529B\u4E0E\u826F\u597D\u8868\u73B0\uFF0C\u7834\u683C\u5C06\u5176\u5438\u7EB3\u8FDB\u8FD1\u536B\u5C40\u7279\u522B\u7763\u5BDF\u7EC4\u3002
    \u5728\u5904\u7406\u9AD8\u5371\u9669\u6027\u72AF\u7F6A\u4E8B\u4EF6\u3001\u8981\u5458\u4FDD\u62A4\u3001\u707E\u5BB3\u7D27\u6025\u6551\u63F4\u7B49\u9886\u57DF\u8868\u73B0\u51FA\u8F83\u9AD8\u4E13\u4E1A\u6027\u3002
    \u73B0\u4F5C\u4E3A\u91CD\u88C5\u5E72\u5458\u534F\u52A9\u7F57\u5FB7\u5C9B\u884C\u52A8\uFF0C\u5E76\u4E3A\u73B0\u573A\u63D0\u4F9B\u6218\u672F\u6267\u884C\u4E0E\u6307\u6325\u652F\u63F4\u3002`,
          },
        ]),
        l = G({ width: 300, height: 300 });
      let u;
      const c = (_) => {
          u = _;
        },
        d = Object.assign({
          "../../assets/img/Three/0.webp": fr,
          "../../assets/img/Three/1.webp": pr,
          "../../assets/img/Three/10.webp": mr,
          "../../assets/img/Three/11.webp": yr,
          "../../assets/img/Three/12.webp": br,
          "../../assets/img/Three/2.webp": wr,
          "../../assets/img/Three/3.webp": xr,
          "../../assets/img/Three/4.webp": Fr,
          "../../assets/img/Three/5.webp": Br,
          "../../assets/img/Three/6.webp": Dr,
          "../../assets/img/Three/7.webp": Mr,
          "../../assets/img/Three/8.webp": Or,
          "../../assets/img/Three/9.webp": zr,
        });
      let f = G([]);
      f.push(...Object.values(d).map((_) => _.default));
      let p = G([
          { name: "staffTop", state: !0 },
          { name: "staffBottom", state: !0 },
          { name: "staffDesc", state: !0 },
        ]),
        h = L(0),
        g = L("100%"),
        y = L(!0),
        E = L(""),
        C = L(!0);
      const b = async (_, x, w, S) => {
        if (y.value && !w.active) {
          switch (
            ((y.value = !1),
            x.forEach((k) => {
              k.active = !1;
            }),
            (x[_].active = !0),
            u.slideToLoop(_, 500),
            S)
          ) {
            case (S = "rhodes"):
              n.value.ChoiceImg(0), (E.value = S);
              break;
            case (S = "rhine"):
              n.value.ChoiceImg(1), (E.value = S);
              break;
            case (S = "yan"):
              n.value.ChoiceImg(2), (E.value = S);
              break;
            case (S = "penguin"):
              n.value.ChoiceImg(3), (E.value = S);
              break;
          }
          await ge(50),
            (p[0].state = !1),
            (C.value = !1),
            (g.value = "0%"),
            await ge(100),
            (p[2].state = !1),
            await ge(50),
            (p[1].state = !1),
            await ge(500),
            (g.value = "100%"),
            await ge(100),
            (h.value = _),
            (p[0].state = !0),
            (C.value = !0),
            await ge(100),
            (p[2].state = !0),
            await ge(50),
            (p[1].state = !0),
            (y.value = !0);
        }
      };
      return (_, x) => {
        const w = ci;
        return (
          P(),
          I(
            ce,
            null,
            [
              m("div", Gl, [
                m("div", Wl, [
                  m("div", Xl, [
                    Yl,
                    m("div", Zl, [
                      N(
                        v(Tn),
                        {
                          modules: t,
                          "slides-per-view": 7,
                          direction: "vertical",
                          "centered-slides": !0,
                          "centered-slides-bounds": !0,
                          onSwiper: c,
                        },
                        {
                          default: q(() => [
                            (P(!0),
                            I(
                              ce,
                              null,
                              Ee(
                                v(r),
                                (S) => (
                                  P(),
                                  Re(
                                    v(Qe),
                                    {
                                      key: S.id,
                                      onClick: (k) => b(S.id, v(r), S, S.camp),
                                      class: le(S.active ? "slideAcive" : ""),
                                      "data-cursor": "pointer",
                                    },
                                    {
                                      default: q(() => [
                                        m("span", Kl, Y(S.idex), 1),
                                        m("span", Jl, [
                                          (P(),
                                          I("svg", Ql, [
                                            m(
                                              "use",
                                              { "xlink:href": S.career },
                                              null,
                                              8,
                                              eu
                                            ),
                                          ])),
                                        ]),
                                        m("span", tu, Y(S.name), 1),
                                      ]),
                                      _: 2,
                                    },
                                    1032,
                                    ["onClick", "class"]
                                  )
                                )
                              ),
                              128
                            )),
                          ]),
                          _: 1,
                        }
                      ),
                    ]),
                    m("div", iu, Y(v(r)[v(h)].footer), 1),
                  ]),
                  m("div", nu, [
                    m("div", su, [
                      N(
                        w,
                        {
                          canvasRect: v(l),
                          logos: v(o),
                          ref_key: "LiziChild",
                          ref: n,
                        },
                        null,
                        8,
                        ["canvasRect", "logos"]
                      ),
                    ]),
                    m("div", ou, [
                      m("div", ru, [
                        m("div", au, [
                          N(
                            te,
                            { name: "StaffBottom" },
                            {
                              default: q(() => [
                                fe(
                                  m(
                                    "div",
                                    lu,
                                    [
                                      (P(),
                                      I("svg", uu, [
                                        m("text", cu, Y(v(a)[v(h)].EN), 1),
                                      ])),
                                    ],
                                    512
                                  ),
                                  [[he, v(p)[0].state]]
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                          m("div", du, [
                            N(
                              te,
                              { name: "StaffTop" },
                              {
                                default: q(() => [
                                  fe(
                                    m(
                                      "div",
                                      fu,
                                      [m("span", null, Y(v(a)[v(h)].name), 1)],
                                      512
                                    ),
                                    [[he, v(p)[0].state]]
                                  ),
                                ]),
                                _: 1,
                              }
                            ),
                          ]),
                          N(
                            te,
                            { name: "StaffBottom" },
                            {
                              default: q(() => [
                                fe(
                                  m(
                                    "div",
                                    hu,
                                    [
                                      m("div", pu, [
                                        m("span", null, Y(v(a)[v(h)].EN), 1),
                                      ]),
                                      m("div", vu, [
                                        mu,
                                        m("span", gu, Y(v(a)[v(h)].CV), 1),
                                        yu,
                                      ]),
                                    ],
                                    512
                                  ),
                                  [[he, v(p)[1].state]]
                                ),
                              ]),
                              _: 1,
                            }
                          ),
                        ]),
                        N(
                          te,
                          { name: "Desc" },
                          {
                            default: q(() => [
                              fe(
                                m(
                                  "div",
                                  Cu,
                                  [m("span", null, Y(v(a)[v(h)].desc), 1)],
                                  512
                                ),
                                [[he, v(p)[2].state]]
                              ),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                    ]),
                  ]),
                  m("div", bu, [
                    N(
                      te,
                      { name: "staffimg" },
                      {
                        default: q(() => [
                          fe(
                            m(
                              "div",
                              _u,
                              [m("img", { src: v(f)[v(h)] }, null, 8, wu)],
                              512
                            ),
                            [[he, v(C)]]
                          ),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                ]),
              ]),
              Eu,
            ],
            64
          )
        );
      };
    },
  });
const Su = Ce(xu, [["__scopeId", "data-v-0b190a95"]]);
var Fu =
  typeof global == "object" && global && global.Object === Object && global;
const Tu = Fu;
var Bu = typeof self == "object" && self && self.Object === Object && self,
  ku = Tu || Bu || Function("return this")();
const Bn = ku;
var Du = Bn.Symbol;
const Et = Du;
var kn = Object.prototype,
  Au = kn.hasOwnProperty,
  Mu = kn.toString,
  at = Et ? Et.toStringTag : void 0;
function Pu(i) {
  var e = Au.call(i, at),
    t = i[at];
  try {
    i[at] = void 0;
    var n = !0;
  } catch {}
  var s = Mu.call(i);
  return n && (e ? (i[at] = t) : delete i[at]), s;
}
var Ou = Object.prototype,
  Lu = Ou.toString;
function zu(i) {
  return Lu.call(i);
}
var Iu = "[object Null]",
  Ru = "[object Undefined]",
  Pi = Et ? Et.toStringTag : void 0;
function $u(i) {
  return i == null
    ? i === void 0
      ? Ru
      : Iu
    : Pi && Pi in Object(i)
    ? Pu(i)
    : zu(i);
}
function Nu(i) {
  return i != null && typeof i == "object";
}
var Hu = "[object Symbol]";
function Vu(i) {
  return typeof i == "symbol" || (Nu(i) && $u(i) == Hu);
}
var ju = /\s/;
function qu(i) {
  for (var e = i.length; e-- && ju.test(i.charAt(e)); );
  return e;
}
var Uu = /^\s+/;
function Gu(i) {
  return i && i.slice(0, qu(i) + 1).replace(Uu, "");
}
function xt(i) {
  var e = typeof i;
  return i != null && (e == "object" || e == "function");
}
var Oi = 0 / 0,
  Wu = /^[-+]0x[0-9a-f]+$/i,
  Xu = /^0b[01]+$/i,
  Yu = /^0o[0-7]+$/i,
  Zu = parseInt;
function Li(i) {
  if (typeof i == "number") return i;
  if (Vu(i)) return Oi;
  if (xt(i)) {
    var e = typeof i.valueOf == "function" ? i.valueOf() : i;
    i = xt(e) ? e + "" : e;
  }
  if (typeof i != "string") return i === 0 ? i : +i;
  i = Gu(i);
  var t = Xu.test(i);
  return t || Yu.test(i) ? Zu(i.slice(2), t ? 2 : 8) : Wu.test(i) ? Oi : +i;
}
var Ku = function () {
  return Bn.Date.now();
};
const $t = Ku;
var Ju = "Expected a function",
  Qu = Math.max,
  ec = Math.min;
function tc(i, e, t) {
  var n,
    s,
    o,
    r,
    a,
    l,
    u = 0,
    c = !1,
    d = !1,
    f = !0;
  if (typeof i != "function") throw new TypeError(Ju);
  (e = Li(e) || 0),
    xt(t) &&
      ((c = !!t.leading),
      (d = "maxWait" in t),
      (o = d ? Qu(Li(t.maxWait) || 0, e) : o),
      (f = "trailing" in t ? !!t.trailing : f));
  function p(w) {
    var S = n,
      k = s;
    return (n = s = void 0), (u = w), (r = i.apply(k, S)), r;
  }
  function h(w) {
    return (u = w), (a = setTimeout(E, e)), c ? p(w) : r;
  }
  function g(w) {
    var S = w - l,
      k = w - u,
      T = e - S;
    return d ? ec(T, o - k) : T;
  }
  function y(w) {
    var S = w - l,
      k = w - u;
    return l === void 0 || S >= e || S < 0 || (d && k >= o);
  }
  function E() {
    var w = $t();
    if (y(w)) return C(w);
    a = setTimeout(E, g(w));
  }
  function C(w) {
    return (a = void 0), f && n ? p(w) : ((n = s = void 0), r);
  }
  function b() {
    a !== void 0 && clearTimeout(a), (u = 0), (n = l = s = a = void 0);
  }
  function _() {
    return a === void 0 ? r : C($t());
  }
  function x() {
    var w = $t(),
      S = y(w);
    if (((n = arguments), (s = this), (l = w), S)) {
      if (a === void 0) return h(l);
      if (d) return clearTimeout(a), (a = setTimeout(E, e)), p(l);
    }
    return a === void 0 && (a = setTimeout(E, e)), r;
  }
  return (x.cancel = b), (x.flush = _), x;
}
function ic(i) {
  for (var e = -1, t = i == null ? 0 : i.length, n = {}; ++e < t; ) {
    var s = i[e];
    n[s[0]] = s[1];
  }
  return n;
}
var nc = "Expected a function";
function zi(i, e, t) {
  var n = !0,
    s = !0;
  if (typeof i != "function") throw new TypeError(nc);
  return (
    xt(t) &&
      ((n = "leading" in t ? !!t.leading : n),
      (s = "trailing" in t ? !!t.trailing : s)),
    tc(i, e, { leading: n, maxWait: e, trailing: s })
  );
}
var Ii;
const Dn = typeof window < "u",
  An = (i) => typeof i == "number";
Dn &&
  ((Ii = window == null ? void 0 : window.navigator) == null
    ? void 0
    : Ii.userAgent) &&
  /iP(ad|hone|od)/.test(window.navigator.userAgent);
function sc(i) {
  return typeof i == "function" ? i() : v(i);
}
function oc(i) {
  return i;
}
function rc(i) {
  return ws() ? (Es(i), !0) : !1;
}
function ac(i, e = !0) {
  Bt() ? ke(i) : e ? i() : ln(i);
}
function lc(i) {
  var e;
  const t = sc(i);
  return (e = t == null ? void 0 : t.$el) != null ? e : t;
}
const uc = Dn ? window : void 0;
function cc(i, e = !1) {
  const t = L(),
    n = () => (t.value = Boolean(i()));
  return n(), ac(n, e), t;
}
const ii =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  ni = "__vueuse_ssr_handlers__";
ii[ni] = ii[ni] || {};
ii[ni];
var Ri = Object.getOwnPropertySymbols,
  dc = Object.prototype.hasOwnProperty,
  fc = Object.prototype.propertyIsEnumerable,
  hc = (i, e) => {
    var t = {};
    for (var n in i) dc.call(i, n) && e.indexOf(n) < 0 && (t[n] = i[n]);
    if (i != null && Ri)
      for (var n of Ri(i)) e.indexOf(n) < 0 && fc.call(i, n) && (t[n] = i[n]);
    return t;
  };
function pc(i, e, t = {}) {
  const n = t,
    { window: s = uc } = n,
    o = hc(n, ["window"]);
  let r;
  const a = cc(() => s && "ResizeObserver" in s),
    l = () => {
      r && (r.disconnect(), (r = void 0));
    },
    u = we(
      () => lc(i),
      (d) => {
        l(),
          a.value && s && d && ((r = new ResizeObserver(e)), r.observe(d, o));
      },
      { immediate: !0, flush: "post" }
    ),
    c = () => {
      l(), u();
    };
  return rc(c), { isSupported: a, stop: c };
}
var $i;
(function (i) {
  (i.UP = "UP"),
    (i.RIGHT = "RIGHT"),
    (i.DOWN = "DOWN"),
    (i.LEFT = "LEFT"),
    (i.NONE = "NONE");
})($i || ($i = {}));
var vc = Object.defineProperty,
  Ni = Object.getOwnPropertySymbols,
  mc = Object.prototype.hasOwnProperty,
  gc = Object.prototype.propertyIsEnumerable,
  Hi = (i, e, t) =>
    e in i
      ? vc(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (i[e] = t),
  yc = (i, e) => {
    for (var t in e || (e = {})) mc.call(e, t) && Hi(i, t, e[t]);
    if (Ni) for (var t of Ni(e)) gc.call(e, t) && Hi(i, t, e[t]);
    return i;
  };
const Cc = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6],
};
yc({ linear: oc }, Cc);
const Mn = (i) => i === void 0,
  bc = (i) => (li(i) ? !Number.isNaN(Number(i)) : !1);
function _c(i, e = "px") {
  if (!i) return "";
  if (An(i) || bc(i)) return `${i}${e}`;
  if (li(i)) return i;
}
/*! Element Plus Icons Vue v2.0.10 */ var Pn = (i, e) => {
    let t = i.__vccOpts || i;
    for (let [n, s] of e) t[n] = s;
    return t;
  },
  wc = { name: "ArrowLeft" },
  Ec = { viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg" },
  xc = m(
    "path",
    {
      fill: "currentColor",
      d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z",
    },
    null,
    -1
  ),
  Sc = [xc];
function Fc(i, e, t, n, s, o) {
  return P(), I("svg", Ec, Sc);
}
var Tc = Pn(wc, [
    ["render", Fc],
    ["__file", "arrow-left.vue"],
  ]),
  Bc = { name: "ArrowRight" },
  kc = { viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg" },
  Dc = m(
    "path",
    {
      fill: "currentColor",
      d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z",
    },
    null,
    -1
  ),
  Ac = [Dc];
function Mc(i, e, t, n, s, o) {
  return P(), I("svg", kc, Ac);
}
var Pc = Pn(Bc, [
  ["render", Mc],
  ["__file", "arrow-right.vue"],
]);
const On = "__epPropKey",
  Oc = (i) => i,
  Lc = (i) => un(i) && !!i[On],
  zc = (i, e) => {
    if (!un(i) || Lc(i)) return i;
    const { values: t, required: n, default: s, type: o, validator: r } = i,
      l = {
        type: o,
        required: !!n,
        validator:
          t || r
            ? (u) => {
                let c = !1,
                  d = [];
                if (
                  (t &&
                    ((d = Array.from(t)),
                    Si(i, "default") && d.push(s),
                    c || (c = d.includes(u))),
                  r && (c || (c = r(u))),
                  !c && d.length > 0)
                ) {
                  const f = [...new Set(d)]
                    .map((p) => JSON.stringify(p))
                    .join(", ");
                  xs(
                    `Invalid prop: validation failed${
                      e ? ` for prop "${e}"` : ""
                    }. Expected one of [${f}], got value ${JSON.stringify(u)}.`
                  );
                }
                return c;
              }
            : void 0,
        [On]: !0,
      };
    return Si(i, "default") && (l.default = s), l;
  },
  pi = (i) => ic(Object.entries(i).map(([e, t]) => [e, zc(t, e)])),
  Ln = (i, e) => {
    if (
      ((i.install = (t) => {
        for (const n of [i, ...Object.values(e != null ? e : {})])
          t.component(n.name, n);
      }),
      e)
    )
      for (const [t, n] of Object.entries(e)) i[t] = n;
    return i;
  },
  Ic = (i) => ((i.install = Ss), i),
  _t = (i) => {
    const e = Mt(i) ? i : [i],
      t = [];
    return (
      e.forEach((n) => {
        var s;
        Mt(n)
          ? t.push(..._t(n))
          : ti(n) && Mt(n.children)
          ? t.push(..._t(n.children))
          : (t.push(n),
            ti(n) &&
              ((s = n.component) == null ? void 0 : s.subTree) &&
              t.push(..._t(n.component.subTree)));
      }),
      t
    );
  },
  zn = Symbol("carouselContextKey"),
  Rc = Symbol(),
  Vi = L();
function $c(i, e = void 0) {
  const t = Bt() ? cn(Rc, Vi) : Vi;
  return i
    ? Le(() => {
        var n, s;
        return (s = (n = t.value) == null ? void 0 : n[i]) != null ? s : e;
      })
    : t;
}
const Nc = "el",
  Hc = "is-",
  Xe = (i, e, t, n, s) => {
    let o = `${i}-${e}`;
    return t && (o += `-${t}`), n && (o += `__${n}`), s && (o += `--${s}`), o;
  },
  vi = (i) => {
    const e = $c("namespace", Nc);
    return {
      namespace: e,
      b: (h = "") => Xe(e.value, i, h, "", ""),
      e: (h) => (h ? Xe(e.value, i, "", h, "") : ""),
      m: (h) => (h ? Xe(e.value, i, "", "", h) : ""),
      be: (h, g) => (h && g ? Xe(e.value, i, h, g, "") : ""),
      em: (h, g) => (h && g ? Xe(e.value, i, "", h, g) : ""),
      bm: (h, g) => (h && g ? Xe(e.value, i, h, "", g) : ""),
      bem: (h, g, y) => (h && g && y ? Xe(e.value, i, h, g, y) : ""),
      is: (h, ...g) => {
        const y = g.length >= 1 ? g[0] : !0;
        return h && y ? `${Hc}${h}` : "";
      },
      cssVar: (h) => {
        const g = {};
        for (const y in h) h[y] && (g[`--${e.value}-${y}`] = h[y]);
        return g;
      },
      cssVarName: (h) => `--${e.value}-${h}`,
      cssVarBlock: (h) => {
        const g = {};
        for (const y in h) h[y] && (g[`--${e.value}-${i}-${y}`] = h[y]);
        return g;
      },
      cssVarBlockName: (h) => `--${e.value}-${i}-${h}`,
    };
  },
  Vc = (i, e, t) =>
    _t(i.subTree)
      .filter((o) => {
        var r;
        return (
          ti(o) &&
          ((r = o.type) == null ? void 0 : r.name) === e &&
          !!o.component
        );
      })
      .map((o) => o.component.uid)
      .map((o) => t[o])
      .filter((o) => !!o),
  jc = (i, e) => {
    const t = {},
      n = dn([]);
    return {
      children: n,
      addChild: (r) => {
        (t[r.uid] = r), (n.value = Vc(i, e, t));
      },
      removeChild: (r) => {
        delete t[r], (n.value = n.value.filter((a) => a.uid !== r));
      },
    };
  };
var mi = (i, e) => {
  const t = i.__vccOpts || i;
  for (const [n, s] of e) t[n] = s;
  return t;
};
const qc = pi({
    size: { type: Oc([Number, String]) },
    color: { type: String },
  }),
  Uc = ae({ name: "ElIcon", inheritAttrs: !1 }),
  Gc = ae({
    ...Uc,
    props: qc,
    setup(i) {
      const e = i,
        t = vi("icon"),
        n = Le(() => {
          const { size: s, color: o } = e;
          return !s && !o
            ? {}
            : { fontSize: Mn(s) ? void 0 : _c(s), "--color": o };
        });
      return (s, o) => (
        P(),
        I(
          "i",
          Fs({ class: v(t).b(), style: v(n) }, s.$attrs),
          [ui(s.$slots, "default")],
          16
        )
      );
    },
  });
var Wc = mi(Gc, [
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue",
  ],
]);
const ji = Ln(Wc),
  Xc = pi({
    initialIndex: { type: Number, default: 0 },
    height: { type: String, default: "" },
    trigger: { type: String, values: ["hover", "click"], default: "hover" },
    autoplay: { type: Boolean, default: !0 },
    interval: { type: Number, default: 3e3 },
    indicatorPosition: {
      type: String,
      values: ["", "none", "outside"],
      default: "",
    },
    indicator: { type: Boolean, default: !0 },
    arrow: {
      type: String,
      values: ["always", "hover", "never"],
      default: "hover",
    },
    type: { type: String, values: ["", "card"], default: "" },
    loop: { type: Boolean, default: !0 },
    direction: {
      type: String,
      values: ["horizontal", "vertical"],
      default: "horizontal",
    },
    pauseOnHover: { type: Boolean, default: !0 },
  }),
  Yc = { change: (i, e) => [i, e].every(An) },
  qi = 300,
  Zc = (i, e, t) => {
    const {
        children: n,
        addChild: s,
        removeChild: o,
      } = jc(Bt(), "ElCarouselItem"),
      r = L(-1),
      a = L(null),
      l = L(!1),
      u = L(),
      c = Le(() => i.arrow !== "never" && !v(p)),
      d = Le(() => n.value.some((A) => A.props.label.toString().length > 0)),
      f = Le(() => i.type === "card"),
      p = Le(() => i.direction === "vertical"),
      h = zi(
        (A) => {
          b(A);
        },
        qi,
        { trailing: !0 }
      ),
      g = zi((A) => {
        D(A);
      }, qi);
    function y() {
      a.value && (clearInterval(a.value), (a.value = null));
    }
    function E() {
      i.interval <= 0 ||
        !i.autoplay ||
        a.value ||
        (a.value = setInterval(() => C(), i.interval));
    }
    const C = () => {
      r.value < n.value.length - 1
        ? (r.value = r.value + 1)
        : i.loop && (r.value = 0);
    };
    function b(A) {
      if (li(A)) {
        const W = n.value.filter((Me) => Me.props.name === A);
        W.length > 0 && (A = n.value.indexOf(W[0]));
      }
      if (((A = Number(A)), Number.isNaN(A) || A !== Math.floor(A))) return;
      const M = n.value.length,
        O = r.value;
      A < 0
        ? (r.value = i.loop ? M - 1 : 0)
        : A >= M
        ? (r.value = i.loop ? 0 : M - 1)
        : (r.value = A),
        O === r.value && _(O),
        U();
    }
    function _(A) {
      n.value.forEach((M, O) => {
        M.translateItem(O, r.value, A);
      });
    }
    function x(A, M) {
      var O, W, Me, We;
      const Pe = v(n),
        ot = Pe.length;
      if (ot === 0 || !A.states.inStage) return !1;
      const Ei = M + 1,
        At = M - 1,
        xi = ot - 1,
        fs = Pe[xi].states.active,
        hs = Pe[0].states.active,
        ps =
          (W = (O = Pe[Ei]) == null ? void 0 : O.states) == null
            ? void 0
            : W.active,
        vs =
          (We = (Me = Pe[At]) == null ? void 0 : Me.states) == null
            ? void 0
            : We.active;
      return (M === xi && hs) || ps
        ? "left"
        : (M === 0 && fs) || vs
        ? "right"
        : !1;
    }
    function w() {
      (l.value = !0), i.pauseOnHover && y();
    }
    function S() {
      (l.value = !1), E();
    }
    function k(A) {
      v(p) ||
        n.value.forEach((M, O) => {
          A === x(M, O) && (M.states.hover = !0);
        });
    }
    function T() {
      v(p) ||
        n.value.forEach((A) => {
          A.states.hover = !1;
        });
    }
    function B(A) {
      r.value = A;
    }
    function D(A) {
      i.trigger === "hover" && A !== r.value && (r.value = A);
    }
    function z() {
      b(r.value - 1);
    }
    function V() {
      b(r.value + 1);
    }
    function U() {
      y(), E();
    }
    we(
      () => r.value,
      (A, M) => {
        _(M), M > -1 && e("change", A, M);
      }
    ),
      we(
        () => i.autoplay,
        (A) => {
          A ? E() : y();
        }
      ),
      we(
        () => i.loop,
        () => {
          b(r.value);
        }
      ),
      we(
        () => i.interval,
        () => {
          U();
        }
      ),
      we(
        () => n.value,
        () => {
          n.value.length > 0 && b(i.initialIndex);
        }
      );
    const F = dn();
    return (
      ke(() => {
        (F.value = pc(u.value, () => {
          _();
        })),
          E();
      }),
      Tt(() => {
        y(), u.value && F.value && F.value.stop();
      }),
      Ts(zn, {
        root: u,
        isCardType: f,
        isVertical: p,
        items: n,
        loop: i.loop,
        addItem: s,
        removeItem: o,
        setActiveItem: b,
      }),
      {
        root: u,
        activeIndex: r,
        arrowDisplay: c,
        hasLabel: d,
        hover: l,
        isCardType: f,
        items: n,
        handleButtonEnter: k,
        handleButtonLeave: T,
        handleIndicatorClick: B,
        handleMouseEnter: w,
        handleMouseLeave: S,
        setActiveItem: b,
        prev: z,
        next: V,
        throttledArrowClick: h,
        throttledIndicatorHover: g,
      }
    );
  },
  Kc = ["onMouseenter", "onClick"],
  Jc = { key: 0 },
  Qc = "ElCarousel",
  e1 = ae({ name: Qc }),
  t1 = ae({
    ...e1,
    props: Xc,
    emits: Yc,
    setup(i, { expose: e, emit: t }) {
      const n = i,
        {
          root: s,
          activeIndex: o,
          arrowDisplay: r,
          hasLabel: a,
          hover: l,
          isCardType: u,
          items: c,
          handleButtonEnter: d,
          handleButtonLeave: f,
          handleIndicatorClick: p,
          handleMouseEnter: h,
          handleMouseLeave: g,
          setActiveItem: y,
          prev: E,
          next: C,
          throttledArrowClick: b,
          throttledIndicatorHover: _,
        } = Zc(n, t),
        x = vi("carousel"),
        w = Le(() => {
          const k = [x.b(), x.m(n.direction)];
          return v(u) && k.push(x.m("card")), k;
        }),
        S = Le(() => {
          const k = [x.e("indicators"), x.em("indicators", n.direction)];
          return (
            v(a) && k.push(x.em("indicators", "labels")),
            (n.indicatorPosition === "outside" || v(u)) &&
              k.push(x.em("indicators", "outside")),
            k
          );
        });
      return (
        e({ setActiveItem: y, prev: E, next: C }),
        (k, T) => (
          P(),
          I(
            "div",
            {
              ref_key: "root",
              ref: s,
              class: le(v(w)),
              onMouseenter:
                T[6] || (T[6] = rt((...B) => v(h) && v(h)(...B), ["stop"])),
              onMouseleave:
                T[7] || (T[7] = rt((...B) => v(g) && v(g)(...B), ["stop"])),
            },
            [
              m(
                "div",
                {
                  class: le(v(x).e("container")),
                  style: $e({ height: k.height }),
                },
                [
                  v(r)
                    ? (P(),
                      Re(
                        te,
                        { key: 0, name: "carousel-arrow-left", persisted: "" },
                        {
                          default: q(() => [
                            fe(
                              m(
                                "button",
                                {
                                  type: "button",
                                  class: le([
                                    v(x).e("arrow"),
                                    v(x).em("arrow", "left"),
                                  ]),
                                  onMouseenter:
                                    T[0] || (T[0] = (B) => v(d)("left")),
                                  onMouseleave:
                                    T[1] ||
                                    (T[1] = (...B) => v(f) && v(f)(...B)),
                                  onClick:
                                    T[2] ||
                                    (T[2] = rt(
                                      (B) => v(b)(v(o) - 1),
                                      ["stop"]
                                    )),
                                },
                                [
                                  N(v(ji), null, {
                                    default: q(() => [N(v(Tc))]),
                                    _: 1,
                                  }),
                                ],
                                34
                              ),
                              [
                                [
                                  he,
                                  (k.arrow === "always" || v(l)) &&
                                    (n.loop || v(o) > 0),
                                ],
                              ]
                            ),
                          ]),
                          _: 1,
                        }
                      ))
                    : X("v-if", !0),
                  v(r)
                    ? (P(),
                      Re(
                        te,
                        { key: 1, name: "carousel-arrow-right", persisted: "" },
                        {
                          default: q(() => [
                            fe(
                              m(
                                "button",
                                {
                                  type: "button",
                                  class: le([
                                    v(x).e("arrow"),
                                    v(x).em("arrow", "right"),
                                  ]),
                                  onMouseenter:
                                    T[3] || (T[3] = (B) => v(d)("right")),
                                  onMouseleave:
                                    T[4] ||
                                    (T[4] = (...B) => v(f) && v(f)(...B)),
                                  onClick:
                                    T[5] ||
                                    (T[5] = rt(
                                      (B) => v(b)(v(o) + 1),
                                      ["stop"]
                                    )),
                                },
                                [
                                  N(v(ji), null, {
                                    default: q(() => [N(v(Pc))]),
                                    _: 1,
                                  }),
                                ],
                                34
                              ),
                              [
                                [
                                  he,
                                  (k.arrow === "always" || v(l)) &&
                                    (n.loop || v(o) < v(c).length - 1),
                                ],
                              ]
                            ),
                          ]),
                          _: 1,
                        }
                      ))
                    : X("v-if", !0),
                  ui(k.$slots, "default"),
                ],
                6
              ),
              k.indicatorPosition !== "none"
                ? (P(),
                  I(
                    "ul",
                    { key: 0, class: le(v(S)) },
                    [
                      (P(!0),
                      I(
                        ce,
                        null,
                        Ee(
                          v(c),
                          (B, D) => (
                            P(),
                            I(
                              "li",
                              {
                                key: D,
                                class: le([
                                  v(x).e("indicator"),
                                  v(x).em("indicator", k.direction),
                                  v(x).is("active", D === v(o)),
                                ]),
                                onMouseenter: (z) => v(_)(D),
                                onClick: rt((z) => v(p)(D), ["stop"]),
                              },
                              [
                                m(
                                  "button",
                                  { class: le(v(x).e("button")) },
                                  [
                                    v(a)
                                      ? (P(),
                                        I("span", Jc, Y(B.props.label), 1))
                                      : X("v-if", !0),
                                  ],
                                  2
                                ),
                              ],
                              42,
                              Kc
                            )
                          )
                        ),
                        128
                      )),
                    ],
                    2
                  ))
                : X("v-if", !0),
            ],
            34
          )
        )
      );
    },
  });
var i1 = mi(t1, [
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel.vue",
  ],
]);
const n1 = pi({
    name: { type: String, default: "" },
    label: { type: [String, Number], default: "" },
  }),
  s1 = (i, e) => {
    const t = cn(zn),
      n = Bt(),
      s = 0.83,
      o = L(!1),
      r = L(0),
      a = L(1),
      l = L(!1),
      u = L(!1),
      c = L(!1),
      d = L(!1),
      { isCardType: f, isVertical: p } = t;
    function h(b, _, x) {
      const w = x - 1,
        S = _ - 1,
        k = _ + 1,
        T = x / 2;
      return _ === 0 && b === w
        ? -1
        : _ === w && b === 0
        ? x
        : b < S && _ - b >= T
        ? x + 1
        : b > k && b - _ >= T
        ? -2
        : b;
    }
    function g(b, _) {
      var x;
      const w = ((x = t.root.value) == null ? void 0 : x.offsetWidth) || 0;
      return c.value
        ? (w * ((2 - s) * (b - _) + 1)) / 4
        : b < _
        ? (-(1 + s) * w) / 4
        : ((3 + s) * w) / 4;
    }
    function y(b, _, x) {
      const w = t.root.value;
      return w ? ((x ? w.offsetHeight : w.offsetWidth) || 0) * (b - _) : 0;
    }
    const E = (b, _, x) => {
      var w;
      const S = v(f),
        k = (w = t.items.value.length) != null ? w : Number.NaN,
        T = b === _;
      !S && !Mn(x) && (d.value = T || b === x),
        !T && k > 2 && t.loop && (b = h(b, _, k));
      const B = v(p);
      (l.value = T),
        S
          ? ((c.value = Math.round(Math.abs(b - _)) <= 1),
            (r.value = g(b, _)),
            (a.value = v(l) ? 1 : s))
          : (r.value = y(b, _, B)),
        (u.value = !0);
    };
    function C() {
      if (t && v(f)) {
        const b = t.items.value.findIndex(({ uid: _ }) => _ === n.uid);
        t.setActiveItem(b);
      }
    }
    return (
      ke(() => {
        t.addItem({
          props: i,
          states: G({
            hover: o,
            translate: r,
            scale: a,
            active: l,
            ready: u,
            inStage: c,
            animating: d,
          }),
          uid: n.uid,
          translateItem: E,
        });
      }),
      Bs(() => {
        t.removeItem(n.uid);
      }),
      {
        active: l,
        animating: d,
        hover: o,
        inStage: c,
        isVertical: p,
        translate: r,
        isCardType: f,
        scale: a,
        ready: u,
        handleItemClick: C,
      }
    );
  },
  o1 = ae({ name: "ElCarouselItem" }),
  r1 = ae({
    ...o1,
    props: n1,
    setup(i) {
      const e = i,
        t = vi("carousel"),
        {
          active: n,
          animating: s,
          hover: o,
          inStage: r,
          isVertical: a,
          translate: l,
          isCardType: u,
          scale: c,
          ready: d,
          handleItemClick: f,
        } = s1(e),
        p = Le(() => {
          const g = `${`translate${v(a) ? "Y" : "X"}`}(${v(l)}px)`,
            y = `scale(${v(c)})`;
          return { transform: [g, y].join(" ") };
        });
      return (h, g) =>
        fe(
          (P(),
          I(
            "div",
            {
              class: le([
                v(t).e("item"),
                v(t).is("active", v(n)),
                v(t).is("in-stage", v(r)),
                v(t).is("hover", v(o)),
                v(t).is("animating", v(s)),
                { [v(t).em("item", "card")]: v(u) },
              ]),
              style: $e(v(p)),
              onClick: g[0] || (g[0] = (...y) => v(f) && v(f)(...y)),
            },
            [
              v(u)
                ? fe(
                    (P(),
                    I("div", { key: 0, class: le(v(t).e("mask")) }, null, 2)),
                    [[he, !v(n)]]
                  )
                : X("v-if", !0),
              ui(h.$slots, "default"),
            ],
            6
          )),
          [[he, v(d)]]
        );
    },
  });
var In = mi(r1, [
  [
    "__file",
    "/home/runner/work/element-plus/element-plus/packages/components/carousel/src/carousel-item.vue",
  ],
]);
const a1 = Ln(i1, { CarouselItem: In }),
  l1 = Ic(In);
const u1 = "" + new URL("https://pic4.zhimg.com/80/v2-e5cc625ebde4177fccedc126bbb4f4b7_720w.webp", import.meta.url).href,
  c1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: u1 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  d1 = "" + new URL("https://pic2.zhimg.com/80/v2-84f5259fb68d09069b8a28335c3328f9_720w.webp", import.meta.url).href,
  f1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: d1 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  h1 = "" + new URL("https://pic4.zhimg.com/80/v2-0cb992843930dc6ad63d0df43d4ddf03_720w.webp", import.meta.url).href,
  p1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: h1 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  v1 = "" + new URL("https://pic1.zhimg.com/80/v2-60c39740fcaf82f5abb1a37fdce6f2ac_720w.webp", import.meta.url).href,
  m1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: v1 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  g1 = "" + new URL("https://pic3.zhimg.com/80/v2-fa0846725c7af84ada3c8c7ce42bda7a_720w.webp", import.meta.url).href,
  y1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: g1 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  C1 = (i) => (Ue("data-v-0816f68e"), (i = i()), Ge(), i),
  b1 = { class: "sctionDisplay" },
  _1 = { class: "sctionWapper" },
  w1 = { class: "article" },
  E1 = ["onClick"],
  x1 = { class: "inforBanner" },
  S1 = { class: "banner" },
  F1 = ["src"],
  T1 = { class: "articleConner" },
  B1 = { class: "acticleWapper" },
  k1 = { key: 0, class: "acticleList" },
  D1 = {
    href: "javascript:void(0)",
    class: "acticleLink",
    "data-cursor": "pointer",
  },
  A1 = { class: "acticleDate", "data-cursor": "pointer" },
  M1 = { class: "acticleCate", "data-cursor": "pointer" },
  P1 = { class: "acticleTitle", "data-cursor": "pointer" },
  O1 = C1(() =>
    m(
      "div",
      { class: "acticleFooter" },
      [
        m("div", { class: "articleMore" }, [
          m(
            "a",
            {
              href: "javascript:void(0)",
              class: "articleButton",
              "data-cursor": "pointer",
            },
            [
              m("span", null, "\u66F4\u591A\u60C5\u62A5"),
              m(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  viewBox: "0 0 48 18",
                },
                [m("path", { d: "M6 13 h35 l-6 -6", fill: "none" })]
              ),
            ]
          ),
        ]),
      ],
      -1
    )
  ),
  L1 = { class: "particle" },
  z1 = ae({
    __name: "Section2_Two",
    setup(i) {
      const e = kt(),
        t = L();
      let n = G([
          { label: "rhodes", url: "" },
          { label: "rhine", url: "" },
          { label: "yan", url: "" },
          { label: "penguin", url: "" },
        ]),
        s = G([]);
      s.push(...tt(n, s, e.TwoParticlesLogo)),
        we(
          () => e.TwoParticlesLogo,
          (h, g) => {
            s.push(...tt(n, s, h)), e.TwoParticlesLogo && t.value.clearCanvas();
          }
        );
      const o = Object.assign({
        "../../assets/img/Two/banner_1.jpg": c1,
        "../../assets/img/Two/banner_2.jpg": f1,
        "../../assets/img/Two/banner_3.jpg": p1,
        "../../assets/img/Two/banner_4.jpg": m1,
        "../../assets/img/Two/banner_5.jpg": y1,
      });
      let r = G([]);
      r.push(...Object.values(o).map((h) => h.default));
      const a = G({ width: 400, height: 400 }),
        l = G([
          {
            id: 1,
            Date: "2022 - 12 - 17",
            Cate: "\u6D3B\u52A8",
            Title:
              "[\u6D3B\u52A8\u9884\u544A]\u8DE8\u5E74\u7EAA\u5FF5\u9650\u65F6\u6D3B\u52A8\u5373\u5C06\u5F00\u542F",
          },
          {
            id: 2,
            Date: "2022 - 12 - 17",
            Cate: "\u6D3B\u52A8",
            Title:
              "[\u8DE8\u5E74\u6B22\u5E86\u5BFB\u8BBF]\u3010\u8DE8\u5E74\u6B22\u5E86\u76F8\u9022\u3011\u9650\u65F6\u5BFB\u8BBF\u5373\u5C06\u5F00\u542F",
          },
          {
            id: 3,
            Date: "2022 - 12 - 15",
            Cate: "\u516C\u544A",
            Title:
              "[\u660E\u65E5\u65B9\u821F]\u5173\u4E8E\u5E72\u5458\u3010\u7130\u5F71\u82C7\u8349\u3011\u6280\u80FD\u5F02\u5E38\u8BF4\u660E",
          },
          {
            id: 4,
            Date: "2022 - 12 - 08",
            Cate: "\u6D3B\u52A8",
            Title:
              "[\u6D3B\u52A8\u9884\u544A]SideStory\u3010\u7167\u6211\u4EE5\u706B\u3011\u9650\u65F6\u6D3B\u52A8\u5373\u5C06\u5F00\u542F",
          },
          {
            id: 5,
            Date: "2022 - 12 - 14",
            Cate: "\u516C\u544A",
            Title:
              "[\u660E\u65E5\u65B9\u821F]12\u670815\u65E510:00\u7248\u672C\u66F4\u65B0\u505C\u670D\u7EF4\u62A4\u516C\u544A",
          },
          {
            id: 6,
            Date: "2022 - 12 - 14",
            Cate: "\u516C\u544A",
            Title:
              "[\u660E\u65E5\u65B9\u821F]12\u670814\u65E5\u5C01\u7981\u5904\u7406\u516C\u793A",
          },
        ]),
        u = G([
          {
            id: 1,
            Date: "2022 - 12 - 15",
            Cate: "\u516C\u544A",
            Title:
              "[\u660E\u65E5\u65B9\u821F]\u5173\u4E8E\u5E72\u5458\u3010\u7130\u5F71\u82C7\u8349\u3011\u6280\u80FD\u5F02\u5E38\u8BF4\u660E",
          },
          {
            id: 2,
            Date: "2022 - 12 - 14",
            Cate: "\u516C\u544A",
            Title:
              "[\u660E\u65E5\u65B9\u821F]12\u670815\u65E510:00\u7248\u672C\u66F4\u65B0\u505C\u673A\u7EF4\u62A4\u516C\u544A",
          },
          {
            id: 3,
            Date: "2022 - 12 - 14",
            Cate: "\u516C\u544A",
            Title:
              "[\u660E\u65E5\u65B9\u821F]12\u670814\u65E5\u5C01\u7981\u5904\u7406\u516C\u793A",
          },
          {
            id: 4,
            Date: "2022 - 12 - 07",
            Cate: "\u516C\u544A",
            Title:
              "[\u660E\u65E5\u65B9\u821F]12\u670807\u65E5\u5C01\u7981\u5904\u7406\u516C\u793A",
          },
          {
            id: 5,
            Date: "2022 - 12 - 05",
            Cate: "\u516C\u544A",
            Title:
              "[\u660E\u65E5\u65B9\u821F]12\u670806\u65E5\u505C\u670D\u516C\u544A",
          },
          {
            id: 6,
            Date: "2022 - 12 - 01",
            Cate: "\u516C\u544A",
            Title:
              "[\u660E\u65E5\u65B9\u821F]12\u670801\u65E516:00\u95EA\u65AD\u66F4\u65B0\u516C\u544A",
          },
        ]),
        c = G([
          {
            id: 1,
            Date: "2022 - 12 - 17",
            Cate: "\u6D3B\u52A8",
            Title:
              "[\u6D3B\u52A8\u9884\u544A]\u8DE8\u5E74\u7EAA\u5FF5\u9650\u65F6\u6D3B\u52A8\u5373\u5C06\u5F00\u542F",
          },
          {
            id: 2,
            Date: "2022 - 12 - 17",
            Cate: "\u6D3B\u52A8",
            Title:
              "[\u8DE8\u5E74\u6B22\u5E86\u5BFB\u8BBF]\u3010\u8DE8\u5E74\u6B22\u5E86\u76F8\u9022\u3011\u9650\u65F6\u5BFB\u8BBF\u5373\u5C06\u5F00\u542F",
          },
          {
            id: 3,
            Date: "2022 - 12 - 08",
            Cate: "\u6D3B\u52A8",
            Title:
              "[\u6D3B\u52A8\u9884\u544A]SideStory\u3010\u7167\u6211\u4EE5\u706B\u3011\u9650\u65F6\u6D3B\u52A8\u5373\u5C06\u5F00\u542F",
          },
          {
            id: 4,
            Date: "2022 - 11 - 25",
            Cate: "\u6D3B\u52A8",
            Title:
              "[\u6D3B\u52A8\u9884\u544A]SideStory\u3010\u98CE\u96EA\u8FC7\u5883\u3011\u590D\u523B\u5373\u5C06\u5F00\u542F",
          },
          {
            id: 5,
            Date: "2022 - 10 - 23",
            Cate: "\u6D3B\u52A8",
            Title:
              "[\u6D3B\u52A8\u9884\u544A]\u4E3B\u7EBF\u52A8\u753B\u300A\u660E\u65E5\u65B9\u821F\uFF1A\u9ECE\u660E\u524D\u594F\u300B\u5F00\u64AD\u7EAA\u5FF5\u6D3B\u52A8\u5373\u5C06\u5F00\u542F",
          },
          {
            id: 6,
            Date: "2022 - 10 - 23",
            Cate: "\u6D3B\u52A8",
            Title:
              "[\u9650\u5B9A\u5BFB\u8BBF-\u5E86\u5178]\u3010\u65A9\u8346\u8F9F\u8DEF\u3011\u9650\u65F6\u5BFB\u8BBF\u5373\u5C06\u5F00\u542F",
          },
        ]),
        d = G([
          {
            id: 1,
            Date: "2022 - 12 - 01",
            Cate: "\u65B0\u95FB",
            Title:
              "\u300A\u660E\u65E5\u65B9\u821F\u300B\u5236\u4F5C\u7EC4\u901A\u8BAF#25\u671F",
          },
          {
            id: 2,
            Date: "2022 - 10 - 05",
            Cate: "\u65B0\u95FB",
            Title:
              "\u300A\u660E\u65E5\u65B9\u821F\u300B\u5236\u4F5C\u7EC4\u901A\u8BAF#24\u671F",
          },
          {
            id: 3,
            Date: "2022 - 09 - 13",
            Cate: "\u65B0\u95FB",
            Title:
              "\u300A\u660E\u65E5\u65B9\u821F\u300B\u5236\u4F5C\u7EC4\u901A\u8BAF#23\u671F",
          },
          {
            id: 4,
            Date: "2022 - 08 - 26",
            Cate: "\u65B0\u95FB",
            Title:
              "\u300A\u660E\u65E5\u65B9\u821F\u300B\u5236\u4F5C\u7EC4\u901A\u8BAF#22\u671F",
          },
          {
            id: 5,
            Date: "2022 - 07 - 28",
            Cate: "\u65B0\u95FB",
            Title:
              "\u300A\u660E\u65E5\u65B9\u821F\u300B\u5236\u4F5C\u7EC4\u901A\u8BAF#21\u671F",
          },
          {
            id: 6,
            Date: "2022 - 06 - 22",
            Cate: "\u65B0\u95FB",
            Title:
              "\u300A\u660E\u65E5\u65B9\u821F\u300B\u5236\u4F5C\u7EC4\u901A\u8BAF#20\u671F",
          },
        ]),
        f = G([
          { id: 0, name: "\u6700\u65B0", active: !0, articleobj: l },
          { id: 1, name: "\u516C\u544A", active: !1, articleobj: u },
          { id: 2, name: "\u6D3B\u52A8", active: !1, articleobj: c },
          { id: 3, name: "\u65B0\u95FB", active: !1, articleobj: d },
        ]),
        p = (h, g) => {
          g.forEach((y) => {
            y.active = !1;
          }),
            (h.active = !0);
        };
      return (h, g) => {
        const y = l1,
          E = a1,
          C = ci;
        return (
          P(),
          I("div", b1, [
            m("div", _1, [
              m("div", w1, [
                (P(!0),
                I(
                  ce,
                  null,
                  Ee(
                    v(f),
                    (b) => (
                      P(),
                      I(
                        "ol",
                        {
                          class: "articleList",
                          key: b.id,
                          "data-cursor": "pointer",
                        },
                        [
                          m(
                            "li",
                            {
                              class: le([
                                "acticleItem",
                                b.active ? "active" : "",
                              ]),
                              onClick: (_) => p(b, v(f)),
                              "data-cursor": "pointer",
                              ref_for: !0,
                              ref: "articleOl",
                            },
                            Y(b.name),
                            11,
                            E1
                          ),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
              m("div", x1, [
                m("div", S1, [
                  N(
                    E,
                    {
                      trigger: "click",
                      height: "16rem",
                      loop: "",
                      interval: 4e3,
                      arrow: "never",
                    },
                    {
                      default: q(() => [
                        (P(!0),
                        I(
                          ce,
                          null,
                          Ee(
                            v(r),
                            (b) => (
                              P(),
                              Re(
                                y,
                                { key: b },
                                {
                                  default: q(() => [
                                    m("img", { src: b }, null, 8, F1),
                                  ]),
                                  _: 2,
                                },
                                1024
                              )
                            )
                          ),
                          128
                        )),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ]),
              m("div", T1, [
                m("div", B1, [
                  (P(!0),
                  I(
                    ce,
                    null,
                    Ee(
                      v(f),
                      (b) => (
                        P(),
                        I(
                          ce,
                          { key: b.id },
                          [
                            b.active
                              ? (P(),
                                I("ol", k1, [
                                  (P(!0),
                                  I(
                                    ce,
                                    null,
                                    Ee(
                                      b.articleobj,
                                      (_) => (
                                        P(),
                                        I(
                                          "li",
                                          {
                                            class: le([
                                              "articleItem",
                                              _.id === 6 ? "articleItemNo" : "",
                                            ]),
                                            key: _.id,
                                            "data-cursor": "pointer",
                                          },
                                          [
                                            m("a", D1, [
                                              m("span", A1, Y(_.Date), 1),
                                              m("span", M1, Y(_.Cate), 1),
                                              m("h1", P1, Y(_.Title), 1),
                                            ]),
                                          ],
                                          2
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ]))
                              : X("", !0),
                          ],
                          64
                        )
                      )
                    ),
                    128
                  )),
                ]),
                O1,
              ]),
            ]),
            m("div", L1, [
              N(
                C,
                {
                  canvasRect: v(a),
                  logos: v(s),
                  ParticlesBoolean: !0,
                  ref_key: "LiziChild",
                  ref: t,
                },
                null,
                8,
                ["canvasRect", "logos"]
              ),
            ]),
          ])
        );
      };
    },
  });
const I1 = Ce(z1, [["__scopeId", "data-v-0816f68e"]]);
function R1(i) {
  return {
    all: (i = i || new Map()),
    on: function (e, t) {
      var n = i.get(e);
      n ? n.push(t) : i.set(e, [t]);
    },
    off: function (e, t) {
      var n = i.get(e);
      n && (t ? n.splice(n.indexOf(t) >>> 0, 1) : i.set(e, []));
    },
    emit: function (e, t) {
      var n = i.get(e);
      n &&
        n.slice().map(function (s) {
          s(t);
        }),
        (n = i.get("*")) &&
          n.slice().map(function (s) {
            s(e, t);
          });
    },
  };
}
const $1 = R1(),
  Rn = $1,
  De = (i) => (Ue("data-v-563ab70f"), (i = i()), Ge(), i),
  N1 = { id: "section-home" },
  H1 = { class: "homepage" },
  V1 = { class: "homeLogo" },
  j1 = ["src"],
  q1 = { class: "homeDisplay" },
  U1 = { class: "homeTitleGrid" },
  G1 = { key: 0, class: "homeGridWapper" },
  W1 = De(() =>
    m(
      "span",
      { class: "homeSpan" },
      [m("span", null, "A"), m("span", null, "R"), m("span", null, "K")],
      -1
    )
  ),
  X1 = De(() =>
    m(
      "span",
      { class: "homeSpan" },
      [m("span", null, "N"), m("span", null, "I"), m("span", null, "G")],
      -1
    )
  ),
  Y1 = De(() =>
    m(
      "span",
      { class: "homeSpan" },
      [m("span", null, "H"), m("span", null, "T"), m("span", null, "S")],
      -1
    )
  ),
  Z1 = [W1, X1, Y1],
  K1 = { class: "homeDesc" },
  J1 = { class: "homeTitleWapper" },
  Q1 = { key: 0, class: "homeTitle" },
  ed = De(() =>
    m(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 652 93",
      },
      [
        m("path", {
          d: "M 334.35 22.8 L 346.95 44.1 L 347.25 22.8 Q 347.389 3.391 348.04 1.408 A 0.464 0.464 0 0 1 348.15 1.2 A 2.522 2.522 0 0 1 348.689 1.019 Q 349.832 0.75 352.5 0.75 A 46.231 46.231 0 0 1 353.755 0.766 Q 356.269 0.834 357 1.2 A 0.739 0.739 0 0 1 357.176 1.617 Q 357.666 3.775 357.738 16.827 A 873.997 873.997 0 0 1 357.75 21.6 L 357.75 32.55 L 357.45 63.45 L 354.15 63.45 L 354 34.05 Q 353.872 15.471 353.744 9.917 A 103.594 103.594 0 0 0 353.7 8.4 A 26.571 26.571 0 0 0 353.635 7.276 Q 353.41 4.5 352.65 4.5 A 0.473 0.473 0 0 0 352.331 4.877 Q 351.438 7.126 351.21 22.772 A 705.316 705.316 0 0 0 351.15 28.65 L 351 52.95 L 349.35 53.1 L 349.2 53.1 A 1.285 1.285 0 0 1 348.547 52.874 Q 347.657 52.327 346.291 50.45 A 35.365 35.365 0 0 1 345.375 49.125 A 101.818 101.818 0 0 1 344.146 47.205 Q 340.95 42.113 333.15 28.95 L 318.75 4.5 L 313.8 4.5 L 313.8 32.25 A 4352.829 4352.829 0 0 0 313.805 39.309 Q 313.828 53.325 313.95 56.25 Q 314.1 59.85 315.15 59.85 Q 315.979 59.85 316.172 57.753 A 12.151 12.151 0 0 0 316.2 57.375 Q 316.328 55.261 316.456 44.774 A 2618.091 2618.091 0 0 0 316.5 40.95 L 316.65 22.05 L 318.6 21.75 L 320.4 21.6 L 320.25 42.6 L 319.95 63.45 L 310.2 63.45 L 309.9 32.55 L 309.9 21.6 A 877.546 877.546 0 0 1 309.912 16.917 Q 309.987 2.887 310.543 1.373 A 0.339 0.339 0 0 1 310.65 1.2 A 3.425 3.425 0 0 1 311.371 0.955 Q 312.603 0.66 315.125 0.61 A 54.579 54.579 0 0 1 316.2 0.6 A 42.602 42.602 0 0 1 317.404 0.616 Q 319.819 0.684 320.55 1.05 Q 321.75 1.35 334.35 22.8 Z M 167.25 4.35 L 149.25 4.35 L 149.25 29.4 L 184.8 29.4 L 184.65 31.2 L 184.35 33 Q 179.871 33.115 171.963 33.142 A 1521.353 1521.353 0 0 1 166.8 33.15 Q 157.842 33.15 152.314 33.238 A 317.444 317.444 0 0 0 149.25 33.3 L 149.25 59.7 L 182.7 59.7 L 182.7 56.4 L 152.4 56.4 L 152.4 35.25 L 154.05 35.25 A 3.947 3.947 0 0 1 154.707 35.3 Q 155.766 35.48 156 36.3 A 8.701 8.701 0 0 1 156.175 37.319 Q 156.385 39.036 156.435 42.515 A 163.697 163.697 0 0 1 156.45 44.85 L 156.45 52.35 L 170.7 52.35 A 376.186 376.186 0 0 1 174.054 52.364 Q 184.869 52.461 185.819 53.223 A 0.378 0.378 0 0 1 185.85 53.25 A 1.501 1.501 0 0 1 186.16 53.773 Q 186.6 54.912 186.6 57.9 Q 186.6 62.25 185.7 62.85 Q 185.132 63.418 175.017 63.448 A 390.734 390.734 0 0 1 173.85 63.45 L 165.3 63.45 L 145.5 63.3 L 145.35 32.7 Q 145.35 4.952 145.839 1.755 A 0.972 0.972 0 0 1 145.95 1.35 A 0.991 0.991 0 0 1 146.421 1.139 Q 149.063 0.45 165.6 0.45 A 919.872 919.872 0 0 1 170.164 0.461 Q 178.996 0.505 182.093 0.732 A 28.66 28.66 0 0 1 182.325 0.75 A 17.486 17.486 0 0 1 183.48 0.88 Q 186 1.256 186 2.25 A 0.475 0.475 0 0 1 185.99 2.333 Q 185.952 2.526 185.781 3.054 A 31.282 31.282 0 0 1 185.7 3.3 Q 185.4 4.35 167.25 4.35 Z M 3.6 21.3 L 3.6 25.35 Q 9.547 26.985 21.607 30.462 A 4051.511 4051.511 0 0 1 21.825 30.525 A 10406.316 10406.316 0 0 1 27.558 32.18 Q 33.078 33.775 36.984 34.912 A 2232.968 2232.968 0 0 1 40.2 35.85 L 40.2 41.85 Q 40.2 46.325 39.09 49.599 A 15.219 15.219 0 0 1 38.4 51.3 Q 33.616 61.665 22.947 62.848 A 25.832 25.832 0 0 1 20.1 63 L 18.75 63 Q 7.8 62.4 2.4 53.25 Q 1.363 51.521 1.122 50.412 A 2.909 2.909 0 0 1 1.05 49.8 A 2.054 2.054 0 0 1 1.421 48.676 Q 2.157 47.546 4.35 46.35 Q 7.65 44.7 9.3 44.7 Q 10.167 44.7 10.199 45.257 A 0.758 0.758 0 0 1 10.2 45.3 A 1.544 1.544 0 0 0 10.35 45.911 Q 10.78 46.891 12.45 48.45 A 23.304 23.304 0 0 0 14.062 49.83 Q 14.887 50.47 15.668 50.932 A 10.958 10.958 0 0 0 16.65 51.45 A 8.668 8.668 0 0 0 18.675 52.178 A 7.351 7.351 0 0 0 20.25 52.35 Q 25.006 52.35 28.458 47.392 A 19.851 19.851 0 0 0 28.95 46.65 A 12.574 12.574 0 0 1 29.658 45.656 Q 30.407 44.714 31.09 44.342 A 1.796 1.796 0 0 1 31.95 44.1 Q 32.709 44.1 32.935 44.74 A 1.547 1.547 0 0 1 33 45 Q 33.15 45.3 33.15 46.2 A 5.965 5.965 0 0 1 32.696 48.417 Q 32.357 49.268 31.764 50.152 A 13.787 13.787 0 0 1 30.9 51.3 A 14.597 14.597 0 0 1 26.109 54.974 A 14.027 14.027 0 0 1 20.1 56.25 Q 14.1 56.25 9.9 52.05 Q 7.2 49.35 6.3 49.95 Q 6.1 50.151 6.033 50.351 A 0.629 0.629 0 0 0 6 50.55 A 2.108 2.108 0 0 0 6.163 51.313 Q 6.562 52.33 7.936 53.76 A 18.618 18.618 0 0 0 7.95 53.775 Q 9.9 55.8 12.3 57.15 A 9.536 9.536 0 0 0 14.635 58.147 Q 16.857 58.79 20 58.8 A 31.335 31.335 0 0 0 20.1 58.8 A 23.949 23.949 0 0 0 22.549 58.683 Q 25.05 58.425 26.7 57.6 A 17.348 17.348 0 0 0 32.683 52.942 Q 35.864 48.987 36.3 43.05 L 36.6 39.15 Q 30.45 37.35 18.225 33.75 A 8383.867 8383.867 0 0 1 12.502 32.063 Q 4.547 29.714 0.053 28.366 A 1155.833 1155.833 0 0 1 0 28.35 L 0 21.6 A 48.521 48.521 0 0 1 0.094 18.469 Q 0.293 15.403 0.915 13.437 A 8.754 8.754 0 0 1 1.5 12 Q 4.95 5.55 11.25 2.4 Q 15.3 0.45 19.95 0.45 Q 30.185 0.45 36.244 8.398 A 25.342 25.342 0 0 1 36.9 9.3 Q 38.913 12.386 39.125 13.792 A 2.072 2.072 0 0 1 39.15 14.1 A 1.781 1.781 0 0 1 38.829 15.065 Q 38.12 16.162 35.85 17.4 A 26 26 0 0 1 34.558 18.039 Q 32.673 18.9 31.65 18.9 Q 30.094 18.9 28.671 16.765 A 10.791 10.791 0 0 1 28.5 16.5 A 12.615 12.615 0 0 0 25.737 13.713 A 15.382 15.382 0 0 0 24.525 12.9 Q 22.356 11.586 20.361 11.423 A 6.896 6.896 0 0 0 19.8 11.4 Q 19.655 11.4 19.301 11.47 A 9.63 9.63 0 0 0 19.275 11.475 A 7.872 7.872 0 0 1 19.107 11.507 Q 18.864 11.55 18.75 11.55 Q 16.666 11.997 14.433 13.404 A 18.98 18.98 0 0 0 14.4 13.425 A 15.513 15.513 0 0 0 13.253 14.221 Q 12.105 15.102 11.549 15.954 A 4.019 4.019 0 0 0 11.4 16.2 A 2.553 2.553 0 0 1 9.574 17.612 A 4.087 4.087 0 0 1 8.7 17.7 Q 7.65 17.7 7.2 16.8 A 0.382 0.382 0 0 1 7.121 16.677 Q 7.07 16.555 7.055 16.359 A 2.226 2.226 0 0 1 7.05 16.2 A 3.594 3.594 0 0 1 7.438 14.651 Q 8.231 12.99 10.65 11.025 A 19.773 19.773 0 0 1 13.575 9.032 Q 15.713 7.856 17.85 7.5 A 4.025 4.025 0 0 1 18.269 7.421 Q 18.707 7.36 19.301 7.351 A 13.805 13.805 0 0 1 19.5 7.35 A 15.798 15.798 0 0 1 24.816 8.211 A 13.683 13.683 0 0 1 30.3 11.85 A 18.365 18.365 0 0 0 31.078 12.683 Q 32.527 14.132 33.366 14.132 A 0.849 0.849 0 0 0 33.6 14.1 A 0.701 0.701 0 0 0 33.871 13.961 Q 34.408 13.496 33.415 11.882 A 11.055 11.055 0 0 0 33.3 11.7 A 12.396 12.396 0 0 0 29.011 7.329 Q 27.338 6.281 25.2 5.55 A 17.006 17.006 0 0 0 19.885 4.65 A 16.21 16.21 0 0 0 19.8 4.65 A 15.544 15.544 0 0 0 8.551 9.301 A 19.601 19.601 0 0 0 8.4 9.45 A 16.065 16.065 0 0 0 3.601 21.08 A 20.554 20.554 0 0 0 3.6 21.3 Z M 266.822 0.919 A 6.649 6.649 0 0 0 266.1 1.05 Q 254.55 3.15 247.2 11.85 Q 239.85 20.55 239.85 31.8 A 20.873 20.873 0 0 0 239.867 32.586 Q 239.903 33.54 240.019 34.894 A 100.06 100.06 0 0 0 240.15 36.3 Q 241.8 48.3 250.65 55.95 Q 259.5 63.6 271.2 63.6 A 35.186 35.186 0 0 0 274.47 63.452 A 28.147 28.147 0 0 0 279.45 62.55 A 27.592 27.592 0 0 0 284.091 60.964 A 34.909 34.909 0 0 0 289.35 58.05 A 37.458 37.458 0 0 0 290.476 57.271 Q 294.3 54.514 294.3 52.8 Q 294.3 51.844 292.538 49.84 A 29.448 29.448 0 0 0 291.525 48.75 A 33.387 33.387 0 0 0 290.577 47.812 Q 288.56 45.9 287.7 45.9 A 1.35 1.35 0 0 0 287.344 45.955 Q 286.62 46.156 285.346 47.088 A 23.671 23.671 0 0 0 284.55 47.7 A 26.607 26.607 0 0 1 281.11 50.009 A 19.736 19.736 0 0 1 271.35 52.65 Q 266.55 52.65 261.9 50.25 A 16.049 16.049 0 0 1 257.531 47.226 A 21.314 21.314 0 0 1 254.625 43.725 A 24.115 24.115 0 0 1 252.529 39.949 A 17.541 17.541 0 0 1 251.1 34.65 A 20.868 20.868 0 0 0 251.095 34.596 Q 250.638 30.15 248.7 30.15 Q 248.461 30.15 248.264 30.192 A 1.322 1.322 0 0 0 247.95 30.3 Q 247.138 30.648 246.954 31.893 A 5.543 5.543 0 0 0 246.9 32.7 A 2.773 2.773 0 0 0 246.901 32.75 Q 246.905 32.971 246.942 33.361 A 22.358 22.358 0 0 0 246.975 33.675 A 15.673 15.673 0 0 1 247.015 34.084 Q 247.032 34.277 247.04 34.448 A 6.987 6.987 0 0 1 247.05 34.8 Q 247.65 42.9 253.425 48.825 Q 259.2 54.75 268.05 56.4 A 49.712 49.712 0 0 0 268.448 56.455 Q 269.639 56.616 270.515 56.671 A 13.363 13.363 0 0 0 271.35 56.7 Q 275.002 56.7 278.865 55.378 A 33.367 33.367 0 0 0 284.25 52.95 A 46.616 46.616 0 0 1 285.278 52.424 Q 286.731 51.705 287.44 51.517 A 1.676 1.676 0 0 1 287.85 51.45 A 0.846 0.846 0 0 1 288.005 51.466 Q 288.197 51.502 288.469 51.619 A 5.308 5.308 0 0 1 288.75 51.75 Q 289.66 52.53 288.543 53.535 A 4.872 4.872 0 0 1 288.15 53.85 Q 286.5 55.2 282.15 57.15 Q 276.9 59.55 271.2 59.55 Q 261.6 59.55 253.875 53.025 A 27.858 27.858 0 0 1 248.221 46.555 A 29.849 29.849 0 0 1 244.2 36 Q 243.75 33.75 243.75 31.65 A 24.457 24.457 0 0 1 246.458 20.307 A 29.273 29.273 0 0 1 252.075 12.825 A 34.685 34.685 0 0 1 252.861 12.077 A 26.481 26.481 0 0 1 271.35 4.65 Q 273.15 4.65 276.45 5.25 Q 283.8 6.75 289.35 11.7 Q 290.279 12.558 291.209 13.007 A 4.657 4.657 0 0 0 293.25 13.5 A 2.902 2.902 0 0 0 293.331 13.499 Q 294.293 13.472 294.526 12.797 A 1.523 1.523 0 0 0 294.6 12.3 A 1.941 1.941 0 0 0 294.551 11.885 Q 294.374 11.077 293.55 9.9 A 10.547 10.547 0 0 0 293.067 9.369 Q 291.36 7.61 287.85 5.4 A 50.74 50.74 0 0 0 287.809 5.374 Q 283.786 2.846 280.95 2.1 A 26.377 26.377 0 0 0 280.148 1.873 Q 277.949 1.289 275.413 1.008 A 45.236 45.236 0 0 0 270.45 0.75 Q 268.087 0.75 266.822 0.919 Z M 469.65 61.95 L 469.65 64.2 L 485.7 64.2 A 314.121 314.121 0 0 0 489.462 64.179 Q 501.75 64.031 501.75 62.85 A 1.119 1.119 0 0 0 501.082 61.78 Q 500.584 61.53 499.716 61.503 A 6.963 6.963 0 0 0 499.5 61.5 A 22.93 22.93 0 0 1 498.467 61.478 Q 496.77 61.402 496.125 61.05 A 1.452 1.452 0 0 1 495.448 60.233 Q 495.351 59.963 495.318 59.624 A 3.818 3.818 0 0 1 495.3 59.25 Q 495.3 58.293 495.729 57.956 A 0.809 0.809 0 0 1 495.975 57.825 Q 496.61 57.613 499.965 57.601 A 116.066 116.066 0 0 1 500.4 57.6 L 505.8 57.6 L 505.65 62.7 L 505.35 67.8 Q 500.297 67.915 491.375 67.942 A 1936.447 1936.447 0 0 1 485.55 67.95 Q 475.444 67.95 469.206 68.038 A 404.003 404.003 0 0 0 465.75 68.1 L 465.75 57.9 L 480.3 41.55 Q 494.429 25.802 494.695 23.917 A 0.483 0.483 0 0 0 494.7 23.85 A 2.94 2.94 0 0 0 494.485 22.8 Q 494.04 21.641 492.675 20.175 Q 491.299 18.696 490.026 17.876 A 7.521 7.521 0 0 0 488.85 17.25 A 6.764 6.764 0 0 0 487.189 16.765 A 9.214 9.214 0 0 0 485.7 16.65 A 7.618 7.618 0 0 0 481.838 17.736 Q 480.752 18.364 479.702 19.356 A 14.916 14.916 0 0 0 479.4 19.65 A 11.257 11.257 0 0 0 477.685 21.816 A 8.557 8.557 0 0 0 476.55 24.9 Q 476.25 26.85 475.5 27.525 A 1.838 1.838 0 0 1 474.948 27.851 Q 474.084 28.196 472.385 28.2 A 17.06 17.06 0 0 1 472.35 28.2 A 4.313 4.313 0 0 1 472.19 28.196 Q 471.853 28.184 471.15 28.125 A 28.75 28.75 0 0 0 470.719 28.092 Q 470.141 28.053 469.711 28.05 A 9.965 9.965 0 0 0 469.65 28.05 L 466.05 27.75 L 465.9 25.05 Q 465.633 22.645 466.556 19.527 A 23.883 23.883 0 0 1 466.8 18.75 A 12.623 12.623 0 0 1 468.074 16.019 Q 468.809 14.813 469.862 13.569 A 28.198 28.198 0 0 1 471.45 11.85 A 30.678 30.678 0 0 1 473.818 9.702 Q 476.108 7.847 478.2 7.05 A 13.224 13.224 0 0 1 480.426 6.42 Q 482.552 6 485.4 6 Q 491.25 6 494.55 7.65 A 22.745 22.745 0 0 1 500.531 11.915 A 17.984 17.984 0 0 1 505.65 23.7 A 20.709 20.709 0 0 1 505.687 24.244 Q 505.86 27.484 504.75 27.9 A 0.382 0.382 0 0 1 504.627 27.979 Q 504.505 28.031 504.309 28.045 A 2.226 2.226 0 0 1 504.15 28.05 A 1.709 1.709 0 0 1 503.166 27.729 Q 502.912 27.553 502.672 27.283 A 3.863 3.863 0 0 1 502.5 27.075 A 3.527 3.527 0 0 1 501.849 25.621 A 5.006 5.006 0 0 1 501.75 24.6 A 7.469 7.469 0 0 0 501.581 23.093 Q 501.282 21.653 500.459 19.813 A 27.594 27.594 0 0 0 500.175 19.2 A 23.95 23.95 0 0 0 499.066 17.126 Q 498.473 16.145 497.851 15.377 A 10.416 10.416 0 0 0 496.8 14.25 A 19.176 19.176 0 0 0 492.251 11.214 A 15.284 15.284 0 0 0 485.7 9.75 A 14.059 14.059 0 0 0 479.845 11.072 A 19.671 19.671 0 0 0 476.475 13.05 A 19.041 19.041 0 0 0 473.162 16.048 A 14.2 14.2 0 0 0 470.4 20.85 Q 469.95 22.05 469.8 22.65 A 3.947 3.947 0 0 0 469.739 22.936 Q 469.682 23.27 469.709 23.519 A 1.216 1.216 0 0 0 469.725 23.625 A 1.096 1.096 0 0 0 469.771 23.791 Q 469.856 24.018 470.025 24.075 A 0.968 0.968 0 0 0 470.161 24.108 Q 470.389 24.148 470.809 24.15 A 9.288 9.288 0 0 0 470.85 24.15 Q 471.911 24.15 472.738 22.508 A 8.23 8.23 0 0 0 472.95 22.05 A 15.218 15.218 0 0 1 475.645 17.814 A 20.256 20.256 0 0 1 478.05 15.525 A 13.509 13.509 0 0 1 481.648 13.39 A 11.444 11.444 0 0 1 485.85 12.6 A 11.096 11.096 0 0 1 488.225 12.846 A 9.547 9.547 0 0 1 489.45 13.2 Q 493.2 14.4 495.75 17.4 Q 498.3 20.4 498.9 24.15 A 0.892 0.892 0 0 0 498.906 24.246 Q 498.921 24.384 498.975 24.6 A 4.277 4.277 0 0 1 499.008 24.741 Q 499.038 24.882 499.047 24.98 A 0.811 0.811 0 0 1 499.05 25.05 Q 499.05 26.4 496.575 29.55 Q 494.1 32.7 484.5 43.35 A 1827.397 1827.397 0 0 0 481.097 47.182 Q 474.527 54.603 472.362 57.252 A 53.612 53.612 0 0 0 472.2 57.45 A 30.13 30.13 0 0 0 471.222 58.72 Q 469.65 60.89 469.65 61.95 Z M 82.05 10.8 L 81.75 5.7 L 81.6 0.6 L 105.3 0.6 L 112.05 0.6 Q 124.24 0.6 127.011 1.103 A 6.548 6.548 0 0 1 127.125 1.125 Q 129.75 1.65 129.75 4.05 L 129.75 6.15 Q 129.75 10.95 127.8 10.95 L 127.35 10.95 A 1.191 1.191 0 0 1 126.472 10.365 Q 125.946 9.565 125.852 7.688 A 14.765 14.765 0 0 1 125.85 7.65 L 125.7 4.5 L 105.6 4.5 Q 92.508 4.5 88.994 4.619 A 31.926 31.926 0 0 0 88.275 4.65 Q 85.65 4.8 85.65 5.85 A 0.933 0.933 0 0 0 86.145 6.692 Q 86.468 6.886 87 6.975 Q 88.35 7.2 94.5 7.2 A 117.716 117.716 0 0 1 97.057 7.226 Q 102.154 7.337 103.317 7.931 A 0.591 0.591 0 0 1 103.65 8.25 A 5.895 5.895 0 0 1 103.756 9.049 Q 104.078 12.809 104.099 31.541 A 2393.534 2393.534 0 0 1 104.1 34.2 L 104.1 45.3 L 104.1 53.25 A 70.948 70.948 0 0 0 104.115 54.741 Q 104.142 56.054 104.223 57 A 19.744 19.744 0 0 0 104.25 57.3 A 17.628 17.628 0 0 0 104.309 57.818 Q 104.439 58.819 104.617 59.016 A 0.229 0.229 0 0 0 104.625 59.025 A 0.706 0.706 0 0 0 104.906 59.194 Q 105.017 59.231 105.152 59.243 A 1.583 1.583 0 0 0 105.3 59.25 Q 106.437 59.25 106.617 49.249 A 229.777 229.777 0 0 0 106.65 45.15 Q 106.65 31.349 107.678 30.321 A 0.395 0.395 0 0 1 107.7 30.3 A 4.469 4.469 0 0 1 108.123 30.017 Q 108.664 29.7 109.1 29.7 A 1.049 1.049 0 0 1 109.65 29.85 A 0.678 0.678 0 0 1 109.967 30.293 Q 110.44 31.58 110.53 36.516 A 138.389 138.389 0 0 1 110.55 39 L 110.55 46.5 L 110.25 62.85 L 100.35 62.85 Q 100.35 56.304 100.262 44.702 A 6580.119 6580.119 0 0 0 100.2 37.125 Q 100.085 23.975 100.058 15.794 A 1392.15 1392.15 0 0 1 100.05 11.25 L 91.05 10.95 L 82.05 10.8 Z M 429.192 6.012 A 18.781 18.781 0 0 0 424.5 6.75 A 18.601 18.601 0 0 0 418.735 9.855 A 24.443 24.443 0 0 0 414.675 13.95 A 27.521 27.521 0 0 0 413.912 14.96 Q 410.4 19.842 410.4 24.6 Q 410.4 24.9 410.475 25.35 A 13.924 13.924 0 0 1 410.5 25.505 Q 410.537 25.741 410.547 25.87 A 1.081 1.081 0 0 1 410.55 25.95 A 2.926 2.926 0 0 0 410.641 26.482 Q 410.89 27.39 411.736 27.648 A 2.621 2.621 0 0 0 412.5 27.75 A 4.761 4.761 0 0 0 412.597 27.749 Q 413.275 27.735 413.625 27.525 A 1.019 1.019 0 0 0 413.662 27.502 Q 413.877 27.36 414.013 27.114 A 1.612 1.612 0 0 0 414.15 26.775 Q 414.265 26.373 414.38 25.4 A 36.971 36.971 0 0 0 414.45 24.75 A 21.551 21.551 0 0 1 414.675 23.454 Q 416.409 15.027 424.5 11.4 Q 427.35 10.05 430.65 10.05 A 15.013 15.013 0 0 1 434.201 10.474 A 16.94 16.94 0 0 1 439.05 12.525 Q 443.1 15 445.35 19.35 Q 446.4 21.3 446.625 23.925 Q 446.808 26.058 446.842 33.389 A 786.37 786.37 0 0 1 446.85 37.05 A 1443.232 1443.232 0 0 1 446.85 38.404 Q 446.842 46.088 446.751 49.154 A 44.823 44.823 0 0 1 446.7 50.4 Q 446.55 52.95 445.5 54.75 Q 443.1 59.1 439.05 61.65 A 18.739 18.739 0 0 1 437.745 62.401 A 15.14 15.14 0 0 1 430.65 64.2 Q 428.7 64.2 426.15 63.45 A 16.256 16.256 0 0 1 423.207 62.135 A 17.446 17.446 0 0 1 418.425 58.05 Q 415.2 54.15 414.45 49.2 Q 414.215 47.555 413.98 46.923 A 1.353 1.353 0 0 0 413.85 46.65 A 0.731 0.731 0 0 0 413.666 46.462 Q 413.302 46.2 412.5 46.2 A 4.428 4.428 0 0 0 412.118 46.215 Q 411.649 46.256 411.381 46.405 A 0.67 0.67 0 0 0 411.075 46.725 Q 410.85 47.25 410.85 49.8 A 16.408 16.408 0 0 0 411.587 54.194 A 18.904 18.904 0 0 0 414.075 59.25 Q 417.15 63.75 422.1 66.3 A 13.083 13.083 0 0 0 424.038 67.075 Q 425.51 67.537 427.271 67.755 A 27.545 27.545 0 0 0 430.65 67.95 A 30.666 30.666 0 0 0 433.133 67.854 Q 434.858 67.714 436.322 67.368 A 13.88 13.88 0 0 0 439.35 66.3 Q 445.95 63 449.1 56.4 A 19.298 19.298 0 0 0 449.927 54.203 A 14.769 14.769 0 0 0 450.525 51.225 Q 450.75 48.75 450.75 37.05 Q 450.75 25.65 450.525 22.95 A 16.441 16.441 0 0 0 450.412 21.953 A 14.074 14.074 0 0 0 449.25 18 A 20.558 20.558 0 0 0 445.712 12.614 A 22.748 22.748 0 0 0 439.35 7.8 Q 437.056 6.548 433.383 6.167 A 33.831 33.831 0 0 0 429.9 6 A 21.245 21.245 0 0 0 429.192 6.012 Z M 55.65 0.75 L 57.6 0.3 A 4.52 4.52 0 0 1 58.196 0.183 Q 59.193 0.043 61.202 0.01 A 82.059 82.059 0 0 1 62.55 0 Q 64.65 0.15 65.1 0.45 A 0.864 0.864 0 0 1 65.349 0.721 Q 65.522 1 65.625 1.491 A 5.69 5.69 0 0 1 65.7 1.95 Q 65.824 3.061 65.592 3.41 A 0.369 0.369 0 0 1 65.475 3.525 A 0.839 0.839 0 0 1 65.242 3.606 Q 64.663 3.739 62.974 3.749 A 47.487 47.487 0 0 1 62.7 3.75 L 59.25 3.75 L 59.25 31.35 A 4352.829 4352.829 0 0 0 59.255 38.409 Q 59.278 52.425 59.4 55.35 Q 59.55 58.95 60.6 58.95 Q 61.65 58.95 61.8 56.625 A 36.983 36.983 0 0 0 61.851 55.376 Q 61.932 52.485 61.947 44.827 A 1884.709 1884.709 0 0 0 61.95 41.25 A 586.756 586.756 0 0 1 61.964 37.057 Q 62.063 23.325 62.85 22.8 Q 63.65 22.2 64.317 22.2 A 1.398 1.398 0 0 1 64.95 22.35 A 0.48 0.48 0 0 1 65.205 22.702 Q 65.603 23.828 65.681 28.539 A 152.395 152.395 0 0 1 65.7 31.05 L 65.7 42.75 L 65.55 62.55 L 61.95 62.85 L 60.3 62.85 A 27.196 27.196 0 0 1 59.057 62.824 Q 57.694 62.761 56.85 62.55 L 55.35 62.25 Q 55.35 54.326 55.438 40.466 A 9236.068 9236.068 0 0 1 55.5 31.425 Q 55.615 15.749 55.642 6.096 A 1933.394 1933.394 0 0 0 55.65 0.75 Z M 422.55 21.45 L 420.6 23.7 L 420.6 50.25 L 422.55 52.65 A 12.069 12.069 0 0 0 425.216 55.348 A 9.574 9.574 0 0 0 430.95 57.15 A 9.513 9.513 0 0 0 437.418 54.637 A 12.261 12.261 0 0 0 437.625 54.45 A 10.938 10.938 0 0 0 440.768 49.165 A 14.617 14.617 0 0 0 441.15 47.25 A 23.379 23.379 0 0 1 441.265 46.521 Q 441.52 45.066 441.825 44.7 Q 442.163 44.295 443.049 44.254 A 4.45 4.45 0 0 1 443.25 44.25 A 3.222 3.222 0 0 1 443.67 44.275 Q 444.128 44.336 444.357 44.542 A 0.661 0.661 0 0 1 444.525 44.775 Q 444.747 45.293 444.75 47.929 A 63.53 63.53 0 0 1 444.75 48 Q 444.6 52.65 441.6 56.1 Q 438.6 59.55 433.35 60.9 A 4.462 4.462 0 0 1 432.736 61.052 Q 431.916 61.2 430.65 61.2 A 13.25 13.25 0 0 1 424.705 59.764 A 16.382 16.382 0 0 1 423.375 59.025 Q 419.85 56.85 417.9 53.1 Q 416.85 51.15 416.625 48.975 Q 416.4 46.8 416.4 37.2 A 349.343 349.343 0 0 1 416.419 33.478 Q 416.479 27.841 416.736 25.104 A 18.339 18.339 0 0 1 416.925 23.625 Q 417.45 20.7 419.85 18 A 9.257 9.257 0 0 1 421.619 16.163 Q 422.487 15.469 423.596 14.862 A 17.98 17.98 0 0 1 424.5 14.4 A 12.914 12.914 0 0 1 429.458 13.085 A 15.468 15.468 0 0 1 430.5 13.05 Q 435.45 13.05 438.6 15.3 A 15.148 15.148 0 0 1 442.538 19.069 A 13.41 13.41 0 0 1 444.9 25.35 Q 445.132 27.901 444.557 28.749 A 0.941 0.941 0 0 1 444.15 29.1 A 2.195 2.195 0 0 1 443.698 29.181 Q 442.903 29.236 442.2 28.65 A 2.394 2.394 0 0 1 441.308 26.921 A 3.041 3.041 0 0 1 441.3 26.7 A 5.506 5.506 0 0 0 441.056 25.132 Q 440.851 24.441 440.473 23.696 A 12.624 12.624 0 0 0 439.875 22.65 Q 438.45 20.4 436.5 18.9 Q 433.95 16.95 430.8 16.95 A 9.515 9.515 0 0 0 423.566 20.213 A 14.079 14.079 0 0 0 422.55 21.45 Z 18 A 9.257 9.257 0 0 1 421.619 16.163 Q 422.487 15.469 423.596 14.862 A 17.98 17.98 0 0 1 424.5 14.4 A 12.914 12.914 0 0 1 429.458 13.085 A 15.468 15.468 0 0 1 430.5 13.05 Q 435.45 13.05 438.6 15.3 A 15.148 15.148 0 0 1 442.538 19.069 A 13.41 13.41 0 0 1 444.9 25.35 Q 445.132 27.901 444.557 28.749 A 0.941 0.941 0 0 1 444.15 29.1 A 2.195 2.195 0 0 1 443.698 29.181 Q 442.903 29.236 442.2 28.65 A 2.394 2.394 0 0 1 441.308 26.921 A 3.041 3.041 0 0 1 441.3 26.7 A 5.506 5.506 0 0 0 441.056 25.132 Q 440.851 24.441 440.473 23.696 A 12.624 12.624 0 0 0 439.875 22.65 Q 438.45 20.4 436.5 18.9 Q 433.95 16.95 430.8 16.95 A 9.515 9.515 0 0 0 423.566 20.213 A 14.079 14.079 0 0 0 422.55 21.45 Z",
        }),
      ],
      -1
    )
  ),
  td = [ed],
  id = { key: 0, class: "homeWapper" },
  nd = { class: "homeWapperContainer" },
  sd = { class: "homePV" },
  od = ["data-active", "onClick"],
  rd = { class: "homePVInfo" },
  ad = De(() =>
    m(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 100 100",
      },
      [
        m("path", {
          id: "play-btn-outline",
          "data-cursor": "pointer",
          d: "M95.000,50.000 L86.406,76.450 L63.906,92.798 L36.094,92.798 L13.594,76.450 L5.000,50.000 L13.594,23.550 L36.094,7.202 L63.906,7.202 L86.406,23.550 Z",
        }),
        m("path", {
          id: "play-btn-triangle",
          "data-cursor": "pointer",
          d: "M66.875,50.000 L41.562,64.614 L41.562,35.386 Z",
        }),
        m("use", {
          "xlink:href": "#play-btn-outline",
          fill: "none",
          stroke: "#ffffff",
          "transform-origin": "50 50",
        }),
        m("use", {
          "xlink:href": "#play-btn-triangle",
          fill: "none",
          stroke: "#ffffff",
          "transform-origin": "50 50",
        }),
      ],
      -1
    )
  ),
  ld = [ad],
  ud = { class: "homeDownBtn" },
  cd = { key: 0, class: "homewapper" },
  dd = De(() =>
    m(
      "div",
      { class: "ImageText" },
      [m("span", { "data-cursor": "pointer" }, "dev by zhongye")],
      -1
    )
  ),
  fd = De(() =>
    m(
      "div",
      { class: "ImageText" },
      [m("span", { "data-cursor": "pointer" }, "下载站点反诈app")],
      -1
    )
  ),
  hd = { class: "DownLinks" },
  pd = {
    key: 0,
    href: "https://dl.coolapk.com/down?pn=com.hicorenational.antifraud&id=MjgzMTE4&h=13048949shsn38&from=click",
    class: "ios",
  },
  vd = De(() =>
    m(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 152 44",
        "data-cursor": "pointer",
      },
      [
        m("g", null, [
          m("path", {
            id: "download-ios",
            d: " ",
          }),
        ]),
        m("g", { transform: "translate(15, 8)" }, [
          m("use", {
            transform: "scale(0.02734375, 0.02734375)",
            "xlink:href": "#download-ios",
            fill: "#fff",
            "data-cursor": "pointer",
          }),
        ]),
        m(
          "text",
          { x: "50", y: "20", "font-size": "15", "data-cursor": "pointer" },
          "App Store"
        ),
        m(
          "text",
          { x: "50", y: "34", "font-size": "10", "data-cursor": "pointer" },
          "下载站点反诈app"
        ),
      ],
      -1
    )
  ),
  md = [vd],
  gd = {
    key: 1,
    href: "https://dl.coolapk.com/down?pn=com.hicorenational.antifraud&id=MjgzMTE4&h=13048949shsn38&from=click",
    class: "android",
  },
  yd = De(() =>
    m(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 152 44",
        "data-cursor": "pointer",
      },
      [
        m("g", null, [
          m("path", {
            id: "download-android",
            "data-cursor": "pointer",
            d: "M652.026049 93.632629L696.312167 13.047253A8.806026 8.806026 0 0 0 680.95282 4.65081l-44.746899 81.404541a306.521373 306.521373 0 0 0-124.308317-26.008495c-44.490909 0-86.524323 9.266806-124.103525 25.906099L342.944785 4.65081a8.754828 8.754828 0 0 0-11.877895-3.53265 8.652432 8.652432 0 0 0-3.53265 11.877896l44.337315 80.482979c-87.036301 44.746898-145.913799 129.88888-145.8626 227.676724l571.674903-0.051198c0-97.787844-58.672706-182.776232-145.657809-227.52313z m-270.222116 124.410712a23.909384 23.909384 0 1 1 0.051198-47.818768 23.909384 23.909384 0 0 1 0 47.869966zM795.738341 343.068428l0.102396 410.196966c0 24.626153-13.41383 45.924448-33.17619 57.699948a67.06915 67.06915 0 0 1-34.558532 9.727587l-46.282832 0.051197v139.974851a63.331708 63.331708 0 0 1-76.233561 61.949368 63.382906 63.382906 0 0 1-50.685845-61.89817V820.744126H469.147421v140.026049A63.331708 63.331708 0 0 1 405.764515 1023.999488a63.434104 63.434104 0 0 1-63.382906-63.229313V820.744126h-46.12924c-26.674066 0-49.508296-15.359347-60.515828-37.681598a66.454776 66.454776 0 0 1-7.218893-29.745936l-0.102396-410.094571L795.738341 343.068428zM140.303797 331.292928c35.019312 0 63.485302 28.312397 63.485302 63.178115v264.692751a63.382906 63.382906 0 0 1-98.402218 52.733758 63.024521 63.024521 0 0 1-28.517188-52.733758L76.818495 394.419845c0-34.81452 28.414792-63.178115 63.485302-63.178115z m743.392406-0.051198c35.019312 0 63.485302 28.261199 63.485302 63.178115v264.641553c0 34.968114-28.414792 63.229313-63.434104 63.229313-35.07051 0-63.485302-28.261199-63.485302-63.229313V394.368647c0-34.916916 28.363595-63.229313 63.382906-63.178115zM642.042473 170.275771a23.909384 23.909384 0 0 1 0 47.76757 23.909384 23.909384 0 1 1 0-47.76757z",
          }),
        ]),
        m("g", { transform: "translate(15, 8)" }, [
          m("use", {
            transform: "scale(0.02734375, 0.02734375)",
            "xlink:href": "#download-android",
            fill: "#fff",
            "data-cursor": "pointer",
          }),
        ]),
        m(
          "text",
          { x: "50", y: "20", "font-size": "16", "data-cursor": "pointer" },
          "App Store"
        ),
        m(
          "text",
          { x: "50", y: "34", "font-size": "10", "data-cursor": "pointer" },
          "下载站点反诈app"
        ),
      ],
      -1
    )
  ),
  Cd = [yd],
  bd = { key: 2, href: "https://ak.hypergryph.com/downloads/android_lastest", class: "taptap" },
  _d = De(() =>
    m(
      "div",
      { style: { display: "none" } },
      [
        m(
          "svg",
          {
            version: "1.1",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            viewBox: "0 0 2186.86 999.65",
          },
          [
            m("g", { id: "taptap-icon" }, [
              m("path", {
                d: "M78.6,20.8H59.7c-1.5,0-2.8,1.3-2.8,2.8v65.6c0,1.5-1.3,2.8-2.8,2.8H38.3c-1.5,0-2.8-1.3-2.8-2.8V23.6c0-1.5-1.3-2.8-2.8-2.8H21.2c-8.5,0-13.4,0-16.1-6.9C3.9,10.7,5,4.5,8.6,0.5c0.9-1,2.6-0.3,2.5,1c-0.2,1.6,0.8,2.8,3.5,2.8h64c1.5,0,2.8,1.3,2.8,2.8V18C81.4,19.6,80.1,20.8,78.6,20.8z",
              }),
              m("path", {
                d: "M113.9,82.9c-0.4-1.1-1.8-1.3-2.5-0.3c-1.5,2.3-3.3,4.3-5.2,5.8c-2.7,2.2-6.3,3.3-10.7,3.3c-22,0-26.6-23.2-26.6-31.4c0-11.5,2.9-36.3,31.3-36.3c0,0,7.9-0.2,12.3,1.3l0.2-1.3c0.2-1.3,1.4-2.3,2.8-2.3h15.7c1.5,0,2.8,1.3,2.8,2.8v46.3c0,3.2-1,13,5.9,15.3c1.1,0.4,1.2,2,0.2,2.5C123.9,97.8,116.3,90,113.9,82.9z M101.3,76.4c2.6-0.4,4.9-0.9,6.9-2.2c2-1.2,4.2-3.9,4.2-6.5V38.5c0-1.2-0.8-2.3-1.9-2.7c-3.1-0.9-6.7-0.4-6.7-0.4C78.9,36.8,83.1,78.9,101.3,76.4z",
              }),
              m("path", {
                d: "M182.6,92c-3.3,0-6.2-0.6-8.8-1.9c-1.6-0.8-3-1.8-4.3-3c-0.9-0.8-2.4-0.3-2.4,1c0,6.5,0,20.3,0,26.2c0,1.5-1.3,2.8-2.8,2.8h-15.9c-1.5,0-2.8-1.3-2.8-2.8V37.8c0-11.9-1.9-15.8-6.5-16.6c-1.2-0.2-1.5-1.9-0.5-2.5c15-10.4,25.4,1.9,26.6,4.7c0.4,1,0.7,2,0.9,2.9c0.3,1.1,1.6,1.5,2.4,0.6c1.4-1.6,3-2.9,4.8-3.9c2.6-1.5,5.7-2.3,9.1-2.3c8.5,0,28.6,7,28.6,35.7C211.1,85.8,191.1,92,182.6,92z M192.6,56.5c0-16.8-11.3-19.6-15-19.6c-2.4,0-4.9,0.8-6.5,1.7c-1,0.5-1.8,1.2-2.6,2c-0.9,1-1.4,2.4-1.4,3.7V69c0,1.5,0.6,3.1,1.7,4.1c0.7,0.6,1.4,1,2.3,1.4c1.7,0.7,3.7,1.1,6.2,1.1C181.1,75.5,192.6,71,192.6,56.5z",
              }),
            ]),
          ]
        ),
      ],
      -1
    )
  ),
  wd = De(() =>
    m(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: "0 0 152 44",
        "data-cursor": "pointer",
      },
      [
        m("g", { transform: "translate(15, 8)" }, [
          m("rect", {
            x: "0",
            y: "0",
            rx: "4",
            ry: "4",
            width: "26",
            height: "26",
            fill: "#00b9c8",
            "data-cursor": "pointer",
          }),
          m("use", {
            transform: "translate(1, 7) scale(0.11, 0.11)",
            "xlink:href": "#taptap-icon",
            "data-cursor": "pointer",
            fill: "#fff",
          }),
        ]),
        m(
          "text",
          { x: "50", y: "26", "font-size": "12", "data-cursor": "pointer" },
          "  下载明日方舟（？（？"
        ),
      ],
      -1
    )
  ),
  Ed = [_d, wd],
  xd = { key: 0, class: "DownImg" },
  Sd = ae({
    __name: "Section1_One",
    setup(i) {
      ht((C) => ({ ef286188: v(g), 35922990: v(y) }));
      let e = new URL(
          "" + new URL("https://pic3.zhimg.com/80/v2-877d3f1d4b679305ba4c5974187fdb3a_720w.webp", import.meta.url).href,
          self.location
        ).href,
        t = new URL(
          "" + new URL("https://pic1.zhimg.com/80/v2-88d2ec402c1018cec57110c295e85a30_720w.webp", import.meta.url).href,
          self.location
        ).href,
        n = new URL(
          "" + new URL("https://pic4.zhimg.com/80/v2-d9884f32711e19e80979eac58e943897_720w.webp", import.meta.url).href,
          self.location
        ).href,
        s = new URL(
          "" + new URL("https://pic3.zhimg.com/80/v2-d25c4f0b472b19779783fcb6312b6ebe_720w.webp", import.meta.url).href,
          self.location
        ).href,
        o = G({ throttle: !0, Down: !0, DownBtn: !0, DownBtn2: !1 });
      const r = async () => {
          o.throttle &&
            ((o.throttle = !1),
            o.DownBtn
              ? ((o.DownBtn = !o.DownBtn),
                await ge(300),
                (o.DownBtn2 = !o.DownBtn2),
                (o.throttle = !0),
                (o.Down = !o.Down))
              : ((o.DownBtn2 = !o.DownBtn2),
                await await ge(300),
                (o.DownBtn = !o.DownBtn),
                (o.throttle = !0),
                (o.Down = !o.Down)));
        },
        a = G([
          {
            id: "001",
            isActive: !0,
            dataSource: "https://web.hycdn.cn/pv/pv.m3u8",
            Title: "THE PRELUDE",
            BGM: "BGM-MONSTER-STARSET",
          },
          {
            id: "002",
            isActive: !1,
            dataSource: "https://web.hycdn.cn/pv/pv2.m3u8",
            Title: "THE OVERTURE",
            BGM: "BGM-UNBECOMING-STARSET",
          },
          {
            id: "003",
            isActive: !1,
            dataSource: "https://web.hycdn.cn/pv/pv3.m3u8",
            Title: "THE ECHO",
            BGM: "BGM-INFECTED-STARSET",
          },
        ]);
      let l = G({ name: "THE PRELUDE", bgm: "BGM-MONSTER-STARSET" });
      L("https://web.hycdn.cn/pv/pv.m3u8");
      let u = 0;
      const c = (C) => {
          if (u == C) return !1;
          u = C;
          for (let b = 0; b < a.length; b++) a[b].isActive = !1;
          (a[C].isActive = !0), (l.name = a[C].Title), (l.bgm = a[C].BGM);
        },
        d = () => {
          alert("\u62B1\u6B49\u65E0\u6CD5\u64AD\u653E\u8BE5\u89C6\u5C4F");
        },
        f = L(!1),
        p = L(!1),
        h = L(!1);
      let g = L("none"),
        y = L(0);
      const E = async (C, b, _) => {
        await ge(_), (C.value = b);
      };
      return (
        ke(async () => {
          E(f, !0, 0),
            E(p, !0, 1e3),
            await ge(1500),
            Rn.emit("Nav", !0),
            await ge(500),
            (g.value = "block"),
            await ge(10),
            (y.value = 0.15),
            E(h, !0, 200);
        }),
        (C, b) => (
          P(),
          I("div", N1, [
            m("div", H1, [
              m("div", V1, [
                N(
                  te,
                  { name: "homeDown" },
                  {
                    default: q(() => [
                      v(p)
                        ? (P(), I("img", { key: 0, src: v(e) }, null, 8, j1))
                        : X("", !0),
                    ]),
                    _: 1,
                  }
                ),
              ]),
              m("div", q1, [
                m("div", U1, [
                  N(
                    te,
                    { name: "homeDown" },
                    {
                      default: q(() => [
                        v(h) ? (P(), I("div", G1, Z1)) : X("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                m("div", K1, [
                  m("div", J1, [
                    N(
                      te,
                      { name: "homeTitle" },
                      {
                        default: q(() => [
                          v(f) ? (P(), I("div", Q1, td)) : X("", !0),
                        ]),
                        _: 1,
                      }
                    ),
                  ]),
                  N(
                    te,
                    { name: "homeWapperLi" },
                    {
                      default: q(() => [
                        v(f)
                          ? (P(),
                            I("div", id, [
                              m("div", nd, [
                                m("div", sd, [
                                  (P(!0),
                                  I(
                                    ce,
                                    null,
                                    Ee(
                                      v(a),
                                      (_, x) => (
                                        P(),
                                        I(
                                          "ul",
                                          { class: "homePVList", key: _.id },
                                          [
                                            m(
                                              "li",
                                              {
                                                "data-active": _.isActive,
                                                onClick: (w) => c(x),
                                                "data-cursor": "pointer",
                                              },
                                              Y(_.id),
                                              9,
                                              od
                                            ),
                                          ]
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                  m("div", rd, [
                                    m("span", null, Y(v(l).name), 1),
                                    m("span", null, Y(v(l).bgm), 1),
                                  ]),
                                ]),
                                m("div", { class: "PVBtn" }, [
                                  m(
                                    "a",
                                    { href: "javascript:void(0)", onClick: d },
                                    ld
                                  ),
                                ]),
                              ]),
                            ]))
                          : X("", !0),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
              ]),
              m("div", ud, [
                N(
                  te,
                  { name: "homeDown" },
                  {
                    default: q(() => [
                      v(p)
                        ? (P(),
                          I("div", cd, [
                            N(
                              et,
                              { name: "DownBtnHide" },
                              {
                                default: q(() => [
                                  v(o).DownBtn
                                    ? (P(),
                                      I(
                                        "a",
                                        {
                                          key: 0,
                                          class: "DownBtnLoad1",
                                          onClick: r,
                                          "data-cursor": "pointer",
                                        },
                                        [
                                          m(
                                            "div",
                                            {
                                              class: "ImageDiv",
                                              style: $e({
                                                backgroundImage: `url(${v(t)})`,
                                              }),
                                              "data-cursor": "pointer",
                                            },
                                            null,
                                            4
                                          ),
                                          dd,
                                        ]
                                      ))
                                    : X("", !0),
                                  v(o).DownBtn2
                                    ? (P(),
                                      I(
                                        "a",
                                        {
                                          key: 1,
                                          class: "DownBtnLoad2",
                                          onClick: r,
                                          "data-cursor": "pointer",
                                        },
                                        [
                                          m(
                                            "div",
                                            {
                                              class: "ImageDiv",
                                              style: $e({
                                                backgroundImage: `url(${v(s)})`,
                                              }),
                                              "data-cursor": "pointer",
                                            },
                                            null,
                                            4
                                          ),
                                          fd,
                                        ]
                                      ))
                                    : X("", !0),
                                ]),
                                _: 1,
                              }
                            ),
                            m("div", hd, [
                              N(
                                et,
                                { name: "DownHide" },
                                {
                                  default: q(() => [
                                    v(o).Down
                                      ? (P(), I("a", pd, md))
                                      : X("", !0),
                                    v(o).Down
                                      ? (P(), I("a", gd, Cd))
                                      : X("", !0),
                                    v(o).Down
                                      ? (P(), I("a", bd, Ed))
                                      : X("", !0),
                                  ]),
                                  _: 1,
                                }
                              ),
                            ]),
                            N(
                              te,
                              { name: "DownHide" },
                              {
                                default: q(() => [
                                  v(o).Down
                                    ? (P(),
                                      I("div", xd, [
                                        m(
                                          "a",
                                          {
                                            href: "https://ak.hypergryph.com/news/2021059770.html",
                                            style: $e({
                                              backgroundImage: `url(${v(n)})`,
                                            }),
                                          },
                                          null,
                                          4
                                        ),
                                      ]))
                                    : X("", !0),
                                ]),
                                _: 1,
                              }
                            ),
                          ]))
                        : X("", !0),
                    ]),
                    _: 1,
                  }
                ),
              ]),
            ]),
          ])
        )
      );
    },
  });
const Fd = Ce(Sd, [["__scopeId", "data-v-563ab70f"]]),
  $n = (i) => (Ue("data-v-606e3b0f"), (i = i()), Ge(), i),
  Td = { id: "nav" },
  Bd = { class: "navContent" },
  kd = { class: "navMenu" },
  Dd = ["onClick"],
  Ad = { href: "javascript:void(0)" },
  Md = { class: "navPagintion" },
  Pd = { key: 0, class: "navPaginCurrent" },
  Od = $n(() => m("span", { class: "navSpan" }, "/", -1)),
  Ld = $n(() => m("span", { class: "navPaginTotal" }, "05", -1)),
  zd = ae({
    __name: "Nav",
    props: { swiper: null, PagintionNum: null },
    setup(i, { expose: e }) {
      const t = i,
        n = G([
          { id: 0, name: "\u9996\u9875", actions: !0, sectiontext: "/01" },
          { id: 1, name: "\u60C5\u62A5", actions: !1, sectiontext: "//02" },
          { id: 2, name: "\u5E72\u5458", actions: !1, sectiontext: "///03" },
          { id: 3, name: "\u8BBE\u5B9A", actions: !1, sectiontext: "////04" },
          { id: 4, name: "\u6863\u6848", actions: !1, sectiontext: "/////05" },
        ]),
        s = L(t.PagintionNum);
      we(
        () => t.PagintionNum,
        (r, a) => {
          s.value = r;
        }
      );
      const o = (r, a) => {
        a.forEach((l) => {
          l.actions = !1;
        }),
          (a[r].actions = !0),
          (s.value = r),
          t.swiper.slideTo(r, 500);
      };
      return (
        e({ NavList: n }),
        (r, a) => (
          P(),
          I("nav", Td, [
            m("div", Bd, [
              m("ol", kd, [
                (P(!0),
                I(
                  ce,
                  null,
                  Ee(
                    v(n),
                    (l) => (
                      P(),
                      I(
                        "li",
                        {
                          key: l.id,
                          class: "navMenuItem",
                          onClick: (u) => o(l.id, v(n)),
                          "data-cursor": "pointer",
                        },
                        [
                          m("a", Ad, [
                            m(
                              "span",
                              {
                                class: le(l.actions ? "navItemTitle" : ""),
                                "data-cursor": "pointer",
                              },
                              Y(l.name),
                              3
                            ),
                          ]),
                        ],
                        8,
                        Dd
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
            m("div", Md, [
              (P(!0),
              I(
                ce,
                null,
                Ee(
                  v(n),
                  (l) => (
                    P(),
                    Re(
                      te,
                      { key: l.id, name: "sectiontext" },
                      {
                        default: q(() => [
                          l.id == v(s)
                            ? (P(),
                              I("span", Pd, [
                                m("span", null, Y(l.sectiontext), 1),
                              ]))
                            : X("", !0),
                        ]),
                        _: 2,
                      },
                      1024
                    )
                  )
                ),
                128
              )),
              Od,
              Ld,
            ]),
          ])
        )
      );
    },
  });
const Id = Ce(zd, [["__scopeId", "data-v-606e3b0f"]]);
const Rd = {},
  Nn = (i) => (Ue("data-v-5c9052ec"), (i = i()), Ge(), i),
  $d = { class: "mainHeader" },
  Nd = Nn(() =>
    m(
      "div",
      { class: "headerUser" },
      [
        m(
          "a",
          { class: "headerUserBtn", href: "javascript:void(0)" },
          "\u767B\u9646"
        ),
        m("span", { class: "sep" }, "|"),
        m(
          "a",
          { class: "headerUserBtn", href: "javascript:void(0)" },
          "\u6CE8\u518C"
        ),
      ],
      -1
    )
  ),
  Hd = Nn(() =>
    m(
      "div",
      { class: "headerMedia" },
      [
        m("div", { class: "headerMediaSwitch" }, [
          m(
            "svg",
            {
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              viewBox: "0 0 300 300",
            },
            [
              m("circle", { cx: "242", cy: "49", r: "35" }),
              m("circle", { cx: "242", cy: "251", r: "35" }),
              m("circle", { cx: "58", cy: "150", r: "35" }),
              m("line", {
                x1: "242",
                y1: "49",
                x2: "59",
                y2: "150",
                "stroke-width": "20",
              }),
              m("line", {
                x1: "242",
                y1: "251",
                x2: "59",
                y2: "150",
                "stroke-width": "20",
              }),
            ]
          ),
        ]),
      ],
      -1
    )
  ),
  Vd = [Nd, Hd];
function jd(i, e) {
  return P(), I("div", $d, Vd);
}
const qd = Ce(Rd, [
  ["render", jd],
  ["__scopeId", "data-v-5c9052ec"],
]);
class Ud {
  constructor() {
    this._listeners = new Map();
  }
  addEventListener(e, t) {
    var n;
    this.removeEventListener(e, t),
      this._listeners.get(e) || this._listeners.set(e, []),
      (n = this._listeners.get(e)) === null || n === void 0 || n.push(t);
  }
  dispatchEvent(e, t) {
    var n;
    (n = this._listeners.get(e)) === null ||
      n === void 0 ||
      n.forEach((s) => s(t));
  }
  hasEventListener(e) {
    return !!this._listeners.get(e);
  }
  removeAllEventListeners(e) {
    e ? this._listeners.delete(e) : (this._listeners = new Map());
  }
  removeEventListener(e, t) {
    const n = this._listeners.get(e);
    if (!n) return;
    const s = n.length,
      o = n.indexOf(t);
    o < 0 || (s === 1 ? this._listeners.delete(e) : n.splice(o, 1));
  }
}
class me {
  constructor(e, t, n) {
    if (typeof e != "number" && e) {
      (this.x = e.x), (this.y = e.y);
      const s = e;
      this.z = s.z ? s.z : 0;
    } else if (e !== void 0 && t !== void 0)
      (this.x = e), (this.y = t), (this.z = n != null ? n : 0);
    else throw new Error("tsParticles - Vector3d not initialized correctly");
  }
  static get origin() {
    return me.create(0, 0, 0);
  }
  get angle() {
    return Math.atan2(this.y, this.x);
  }
  set angle(e) {
    this.updateFromAngle(e, this.length);
  }
  get length() {
    return Math.sqrt(this.getLengthSq());
  }
  set length(e) {
    this.updateFromAngle(this.angle, e);
  }
  static clone(e) {
    return me.create(e.x, e.y, e.z);
  }
  static create(e, t, n) {
    return new me(e, t, n);
  }
  add(e) {
    return me.create(this.x + e.x, this.y + e.y, this.z + e.z);
  }
  addTo(e) {
    (this.x += e.x), (this.y += e.y), (this.z += e.z);
  }
  copy() {
    return me.clone(this);
  }
  distanceTo(e) {
    return this.sub(e).length;
  }
  distanceToSq(e) {
    return this.sub(e).getLengthSq();
  }
  div(e) {
    return me.create(this.x / e, this.y / e, this.z / e);
  }
  divTo(e) {
    (this.x /= e), (this.y /= e), (this.z /= e);
  }
  getLengthSq() {
    return this.x ** 2 + this.y ** 2;
  }
  mult(e) {
    return me.create(this.x * e, this.y * e, this.z * e);
  }
  multTo(e) {
    (this.x *= e), (this.y *= e), (this.z *= e);
  }
  rotate(e) {
    return me.create(
      this.x * Math.cos(e) - this.y * Math.sin(e),
      this.x * Math.sin(e) + this.y * Math.cos(e),
      0
    );
  }
  setTo(e) {
    (this.x = e.x), (this.y = e.y);
    const t = e;
    this.z = t.z ? t.z : 0;
  }
  sub(e) {
    return me.create(this.x - e.x, this.y - e.y, this.z - e.z);
  }
  subFrom(e) {
    (this.x -= e.x), (this.y -= e.y), (this.z -= e.z);
  }
  updateFromAngle(e, t) {
    (this.x = Math.cos(e) * t), (this.y = Math.sin(e) * t);
  }
}
class Z extends me {
  constructor(e, t) {
    super(e, t, 0);
  }
  static get origin() {
    return Z.create(0, 0);
  }
  static clone(e) {
    return Z.create(e.x, e.y);
  }
  static create(e, t) {
    return new Z(e, t);
  }
}
let Gd = Math.random;
const Wd = new Map();
function Hn(i) {
  var e;
  const t = (n) => n;
  return (e = Wd.get(i)) !== null && e !== void 0 ? e : t;
}
function j() {
  return Be(Gd(), 0, 1 - 1e-16);
}
function Be(i, e, t) {
  return Math.min(Math.max(i, e), t);
}
function Nt(i, e, t, n) {
  return Math.floor((i * t + e * n) / (t + n));
}
function se(i) {
  const e = ze(i);
  let t = ft(i);
  return e === t && (t = 0), j() * (e - t) + t;
}
function R(i) {
  return typeof i == "number" ? i : se(i);
}
function ft(i) {
  return typeof i == "number" ? i : i.min;
}
function ze(i) {
  return typeof i == "number" ? i : i.max;
}
function H(i, e) {
  if (i === e || (e === void 0 && typeof i == "number")) return i;
  const t = ft(i),
    n = ze(i);
  return e !== void 0 ? { min: Math.min(t, e), max: Math.max(n, e) } : H(t, n);
}
function Ne(i) {
  const e = i.random,
    { enable: t, minimumValue: n } =
      typeof e == "boolean" ? { enable: e, minimumValue: 0 } : e;
  return R(t ? H(i.value, n) : i.value);
}
function de(i, e) {
  const t = i.x - e.x,
    n = i.y - e.y;
  return { dx: t, dy: n, distance: Math.sqrt(t * t + n * n) };
}
function oe(i, e) {
  return de(i, e).distance;
}
function Xd(i, e, t) {
  if (typeof i == "number") return (i * Math.PI) / 180;
  switch (i) {
    case "top":
      return -Math.PI / 2;
    case "top-right":
      return -Math.PI / 4;
    case "right":
      return 0;
    case "bottom-right":
      return Math.PI / 4;
    case "bottom":
      return Math.PI / 2;
    case "bottom-left":
      return (3 * Math.PI) / 4;
    case "left":
      return Math.PI;
    case "top-left":
      return (-3 * Math.PI) / 4;
    case "inside":
      return Math.atan2(t.y - e.y, t.x - e.x);
    case "outside":
      return Math.atan2(e.y - t.y, e.x - t.x);
    default:
      return j() * Math.PI * 2;
  }
}
function Yd(i) {
  const e = Z.origin;
  return (e.length = 1), (e.angle = i), e;
}
function Ui(i, e, t, n) {
  return Z.create((i.x * (t - n)) / (t + n) + (e.x * 2 * n) / (t + n), i.y);
}
function Zd(i) {
  return i.position && i.position.x !== void 0 && i.position.y !== void 0
    ? {
        x: (i.position.x * i.size.width) / 100,
        y: (i.position.y * i.size.height) / 100,
      }
    : void 0;
}
function Vn(i) {
  var e, t, n, s;
  return {
    x:
      (((t = (e = i.position) === null || e === void 0 ? void 0 : e.x) !==
        null && t !== void 0
        ? t
        : j() * 100) *
        i.size.width) /
      100,
    y:
      (((s = (n = i.position) === null || n === void 0 ? void 0 : n.y) !==
        null && s !== void 0
        ? s
        : j() * 100) *
        i.size.height) /
      100,
  };
}
function jn(i) {
  var e, t;
  const n = {
    x:
      ((e = i.position) === null || e === void 0 ? void 0 : e.x) !== void 0
        ? R(i.position.x)
        : void 0,
    y:
      ((t = i.position) === null || t === void 0 ? void 0 : t.y) !== void 0
        ? R(i.position.y)
        : void 0,
  };
  return Vn({ size: i.size, position: n });
}
function Kd(i) {
  var e, t, n, s;
  return {
    x:
      (t = (e = i.position) === null || e === void 0 ? void 0 : e.x) !== null &&
      t !== void 0
        ? t
        : j() * i.size.width,
    y:
      (s = (n = i.position) === null || n === void 0 ? void 0 : n.y) !== null &&
      s !== void 0
        ? s
        : j() * i.size.height,
  };
}
function qn(i) {
  return i ? (i.endsWith("%") ? parseFloat(i) / 100 : parseFloat(i)) : 1;
}
function Gi(i, e, t, n, s, o) {
  const r = { bounced: !1 };
  return (
    e.min < n.min ||
      e.min > n.max ||
      e.max < n.min ||
      e.max > n.max ||
      (((i.max >= t.min && i.max <= (t.max + t.min) / 2 && s > 0) ||
        (i.min <= t.max && i.min > (t.max + t.min) / 2 && s < 0)) &&
        ((r.velocity = s * -o), (r.bounced = !0))),
    r
  );
}
function Jd(i, e) {
  const t = J(e, (n) => i.matches(n));
  return t instanceof Array ? t.some((n) => n) : t;
}
function Ke() {
  return (
    typeof window > "u" ||
    !window ||
    typeof window.document > "u" ||
    !window.document
  );
}
function Qd() {
  return !Ke() && typeof matchMedia < "u";
}
function Un(i) {
  if (!!Qd()) return matchMedia(i);
}
function e0() {
  return Ke()
    ? (i) => setTimeout(i)
    : (i) => (requestAnimationFrame || setTimeout)(i);
}
function t0() {
  return Ke()
    ? (i) => clearTimeout(i)
    : (i) => (cancelAnimationFrame || clearTimeout)(i);
}
function K(i, e) {
  return i === e || (e instanceof Array && e.indexOf(i) > -1);
}
async function i0(i, e) {
  try {
    await document.fonts.load(
      `${e != null ? e : "400"} 36px '${i != null ? i : "Verdana"}'`
    );
  } catch {}
}
function Gn(i) {
  return Math.floor(j() * i.length);
}
function vt(i, e, t = !0) {
  return i[e !== void 0 && t ? e % i.length : Gn(i)];
}
function mt(i, e, t, n, s) {
  return n0(gt(i, n != null ? n : 0), e, t, s);
}
function n0(i, e, t, n) {
  let s = !0;
  return (
    (!n || n === "bottom") && (s = i.top < e.height + t.x),
    s && (!n || n === "left") && (s = i.right > t.x),
    s && (!n || n === "right") && (s = i.left < e.width + t.y),
    s && (!n || n === "top") && (s = i.bottom > t.y),
    s
  );
}
function gt(i, e) {
  return { bottom: i.y + e, left: i.x - e, right: i.x + e, top: i.y - e };
}
function ne(i, ...e) {
  for (const t of e) {
    if (t == null) continue;
    if (typeof t != "object") {
      i = t;
      continue;
    }
    const n = Array.isArray(t);
    n && (typeof i != "object" || !i || !Array.isArray(i))
      ? (i = [])
      : !n && (typeof i != "object" || !i || Array.isArray(i)) && (i = {});
    for (const s in t) {
      if (s === "__proto__") continue;
      const o = t,
        r = o[s],
        a = typeof r == "object",
        l = i;
      l[s] = a && Array.isArray(r) ? r.map((u) => ne(l[s], u)) : ne(l[s], r);
    }
  }
  return i;
}
function gi(i, e) {
  return !!Yn(e, (t) => t.enable && K(i, t.mode));
}
function yi(i, e, t) {
  J(e, (n) => {
    const s = n.mode;
    n.enable && K(i, s) && s0(n, t);
  });
}
function s0(i, e) {
  const t = i.selectors;
  J(t, (n) => {
    e(n, i);
  });
}
function Wn(i, e) {
  if (!(!e || !i)) return Yn(i, (t) => Jd(e, t.selectors));
}
function si(i) {
  return {
    position: i.getPosition(),
    radius: i.getRadius(),
    mass: i.getMass(),
    velocity: i.velocity,
    factor: Z.create(
      Ne(i.options.bounce.horizontal),
      Ne(i.options.bounce.vertical)
    ),
  };
}
function Xn(i, e) {
  const { x: t, y: n } = i.velocity.sub(e.velocity),
    [s, o] = [i.position, e.position],
    { dx: r, dy: a } = de(o, s);
  if (t * r + n * a < 0) return;
  const l = -Math.atan2(a, r),
    u = i.mass,
    c = e.mass,
    d = i.velocity.rotate(l),
    f = e.velocity.rotate(l),
    p = Ui(d, f, u, c),
    h = Ui(f, d, u, c),
    g = p.rotate(-l),
    y = h.rotate(-l);
  (i.velocity.x = g.x * i.factor.x),
    (i.velocity.y = g.y * i.factor.y),
    (e.velocity.x = y.x * e.factor.x),
    (e.velocity.y = y.y * e.factor.y);
}
function o0(i, e) {
  const t = i.getPosition(),
    n = i.getRadius(),
    s = gt(t, n),
    o = Gi(
      { min: s.left, max: s.right },
      { min: s.top, max: s.bottom },
      { min: e.left, max: e.right },
      { min: e.top, max: e.bottom },
      i.velocity.x,
      Ne(i.options.bounce.horizontal)
    );
  o.bounced &&
    (o.velocity !== void 0 && (i.velocity.x = o.velocity),
    o.position !== void 0 && (i.position.x = o.position));
  const r = Gi(
    { min: s.top, max: s.bottom },
    { min: s.left, max: s.right },
    { min: e.top, max: e.bottom },
    { min: e.left, max: e.right },
    i.velocity.y,
    Ne(i.options.bounce.vertical)
  );
  r.bounced &&
    (r.velocity !== void 0 && (i.velocity.y = r.velocity),
    r.position !== void 0 && (i.position.y = r.position));
}
function J(i, e) {
  return i instanceof Array ? i.map((t) => e(t)) : e(i);
}
function xe(i, e, t) {
  return i instanceof Array ? vt(i, e, t) : i;
}
function Yn(i, e) {
  return i instanceof Array ? i.find((t) => e(t)) : e(i) ? i : void 0;
}
const St = "random",
  wt = "mid",
  Dt = new Map();
function Zn(i) {
  Dt.set(i.key, i);
}
function Ht(i, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? i + (e - i) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? i + (e - i) * (2 / 3 - t) * 6
      : i
  );
}
function r0(i) {
  for (const [, o] of Dt)
    if (i.startsWith(o.stringPrefix)) return o.parseString(i);
  const e = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
    t = i.replace(
      e,
      (o, r, a, l, u) => r + r + a + a + l + l + (u !== void 0 ? u + u : "")
    ),
    n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,
    s = n.exec(t);
  return s
    ? {
        a: s[4] !== void 0 ? parseInt(s[4], 16) / 255 : 1,
        b: parseInt(s[3], 16),
        g: parseInt(s[2], 16),
        r: parseInt(s[1], 16),
      }
    : void 0;
}
function Se(i, e, t = !0) {
  if (!i) return;
  const n = typeof i == "string" ? { value: i } : i;
  if (typeof n.value == "string") return Kn(n.value, e, t);
  if (n.value instanceof Array) return Se({ value: vt(n.value, e, t) });
  for (const [, s] of Dt) {
    const o = s.handleRangeColor(n);
    if (o) return o;
  }
}
function Kn(i, e, t = !0) {
  if (!i) return;
  const n = typeof i == "string" ? { value: i } : i;
  if (typeof n.value == "string") return n.value === St ? Qn() : a0(n.value);
  if (n.value instanceof Array) return Kn({ value: vt(n.value, e, t) });
  for (const [, s] of Dt) {
    const o = s.handleColor(n);
    if (o) return o;
  }
}
function qe(i, e, t = !0) {
  const n = Se(i, e, t);
  return n ? Jn(n) : void 0;
}
function Jn(i) {
  const e = i.r / 255,
    t = i.g / 255,
    n = i.b / 255,
    s = Math.max(e, t, n),
    o = Math.min(e, t, n),
    r = { h: 0, l: (s + o) / 2, s: 0 };
  return (
    s !== o &&
      ((r.s = r.l < 0.5 ? (s - o) / (s + o) : (s - o) / (2 - s - o)),
      (r.h =
        e === s
          ? (t - n) / (s - o)
          : (r.h = t === s ? 2 + (n - e) / (s - o) : 4 + (e - t) / (s - o)))),
    (r.l *= 100),
    (r.s *= 100),
    (r.h *= 60),
    r.h < 0 && (r.h += 360),
    r.h >= 360 && (r.h -= 360),
    r
  );
}
function a0(i) {
  return r0(i);
}
function it(i) {
  const e = { b: 0, g: 0, r: 0 },
    t = { h: i.h / 360, l: i.l / 100, s: i.s / 100 };
  if (!t.s) (e.b = t.l), (e.g = t.l), (e.r = t.l);
  else {
    const n = t.l < 0.5 ? t.l * (1 + t.s) : t.l + t.s - t.l * t.s,
      s = 2 * t.l - n;
    (e.r = Ht(s, n, t.h + 1 / 3)),
      (e.g = Ht(s, n, t.h)),
      (e.b = Ht(s, n, t.h - 1 / 3));
  }
  return (
    (e.r = Math.floor(e.r * 255)),
    (e.g = Math.floor(e.g * 255)),
    (e.b = Math.floor(e.b * 255)),
    e
  );
}
function l0(i) {
  const e = it(i);
  return { a: i.a, b: e.b, g: e.g, r: e.r };
}
function Qn(i) {
  const e = i != null ? i : 0;
  return {
    b: Math.floor(se(H(e, 256))),
    g: Math.floor(se(H(e, 256))),
    r: Math.floor(se(H(e, 256))),
  };
}
function Ie(i, e) {
  return `rgba(${i.r}, ${i.g}, ${i.b}, ${e != null ? e : 1})`;
}
function nt(i, e) {
  return `hsla(${i.h}, ${i.s}%, ${i.l}%, ${e != null ? e : 1})`;
}
function Ci(i, e, t, n) {
  let s = i,
    o = e;
  return (
    s.r === void 0 && (s = it(i)),
    o.r === void 0 && (o = it(e)),
    { b: Nt(s.b, o.b, t, n), g: Nt(s.g, o.g, t, n), r: Nt(s.r, o.r, t, n) }
  );
}
function oi(i, e, t) {
  var n, s;
  if (t === St) return Qn();
  if (t === wt) {
    const o =
        (n = i.getFillColor()) !== null && n !== void 0
          ? n
          : i.getStrokeColor(),
      r =
        (s = e == null ? void 0 : e.getFillColor()) !== null && s !== void 0
          ? s
          : e == null
          ? void 0
          : e.getStrokeColor();
    if (o && r && e) return Ci(o, r, i.getRadius(), e.getRadius());
    {
      const a = o != null ? o : r;
      if (a) return it(a);
    }
  } else return t;
}
function es(i, e, t) {
  const n = typeof i == "string" ? i : i.value;
  return n === St
    ? t
      ? Se({ value: n })
      : e
      ? St
      : wt
    : n === wt
    ? wt
    : Se({ value: n });
}
function Wi(i) {
  return i !== void 0 ? { h: i.h.value, s: i.s.value, l: i.l.value } : void 0;
}
function ts(i, e, t) {
  const n = {
    h: { enable: !1, value: i.h },
    s: { enable: !1, value: i.s },
    l: { enable: !1, value: i.l },
  };
  return e && (Vt(n.h, e.h, t), Vt(n.s, e.s, t), Vt(n.l, e.l, t)), n;
}
function Vt(i, e, t) {
  (i.enable = e.enable),
    i.enable
      ? ((i.velocity = (R(e.speed) / 100) * t),
        (i.decay = 1 - R(e.decay)),
        (i.status = 0),
        e.sync || ((i.velocity *= j()), (i.value *= j())))
      : (i.velocity = 0);
}
function ut(i, e, t) {
  i.beginPath(), i.moveTo(e.x, e.y), i.lineTo(t.x, t.y), i.closePath();
}
function u0(i, e, t, n) {
  i.beginPath(),
    i.moveTo(e.x, e.y),
    i.lineTo(t.x, t.y),
    i.lineTo(n.x, n.y),
    i.closePath();
}
function c0(i, e, t) {
  (i.fillStyle = t != null ? t : "rgba(0,0,0,0)"),
    i.fillRect(0, 0, e.width, e.height);
}
function jt(i, e) {
  i.clearRect(0, 0, e.width, e.height);
}
function d0(i) {
  var e, t, n, s, o, r;
  const {
      container: a,
      context: l,
      particle: u,
      delta: c,
      colorStyles: d,
      backgroundMask: f,
      composite: p,
      radius: h,
      opacity: g,
      shadow: y,
      transform: E,
    } = i,
    C = u.getPosition(),
    b = u.rotation + (u.pathRotation ? u.velocity.angle : 0),
    _ = { sin: Math.sin(b), cos: Math.cos(b) },
    x = {
      a: _.cos * ((e = E.a) !== null && e !== void 0 ? e : 1),
      b: _.sin * ((t = E.b) !== null && t !== void 0 ? t : 1),
      c: -_.sin * ((n = E.c) !== null && n !== void 0 ? n : 1),
      d: _.cos * ((s = E.d) !== null && s !== void 0 ? s : 1),
    };
  l.setTransform(x.a, x.b, x.c, x.d, C.x, C.y),
    l.beginPath(),
    f && (l.globalCompositeOperation = p);
  const w = u.shadowColor;
  y.enable &&
    w &&
    ((l.shadowBlur = y.blur),
    (l.shadowColor = Ie(w)),
    (l.shadowOffsetX = y.offset.x),
    (l.shadowOffsetY = y.offset.y)),
    d.fill && (l.fillStyle = d.fill);
  const S = u.stroke;
  (l.lineWidth = (o = u.strokeWidth) !== null && o !== void 0 ? o : 0),
    d.stroke && (l.strokeStyle = d.stroke),
    f0(a, l, u, h, g, c),
    ((r = S == null ? void 0 : S.width) !== null && r !== void 0 ? r : 0) > 0 &&
      l.stroke(),
    u.close && l.closePath(),
    u.fill && l.fill(),
    h0(a, l, u, h, g, c),
    (l.globalCompositeOperation = "source-over"),
    l.setTransform(1, 0, 0, 1, 0, 0);
}
function f0(i, e, t, n, s, o) {
  if (!t.shape) return;
  const r = i.drawers.get(t.shape);
  !r || r.draw(e, t, n, s, o, i.retina.pixelRatio);
}
function h0(i, e, t, n, s, o) {
  if (!t.shape) return;
  const r = i.drawers.get(t.shape);
  !(r != null && r.afterEffect) ||
    r.afterEffect(e, t, n, s, o, i.retina.pixelRatio);
}
function p0(i, e, t) {
  !e.draw || e.draw(i, t);
}
function v0(i, e, t, n) {
  !e.drawParticle || e.drawParticle(i, t, n);
}
function m0(i, e, t) {
  return { h: i.h, s: i.s, l: i.l + (e === "darken" ? -1 : 1) * t };
}
const ct = "generated",
  Xi = "touchend",
  g0 = "pointerdown",
  y0 = "pointerup",
  Je = "pointermove",
  C0 = "touchstart",
  b0 = "touchmove",
  ri = "pointerleave",
  _0 = "pointerout",
  w0 = "touchcancel",
  E0 = "resize",
  x0 = "visibilitychange";
function S0(i, e, t) {
  var n;
  const s = e[t];
  s !== void 0 && (i[t] = ((n = i[t]) !== null && n !== void 0 ? n : 1) * s);
}
class F0 {
  constructor(e) {
    (this.container = e),
      (this.size = { height: 0, width: 0 }),
      (this._context = null),
      (this._generated = !1),
      (this._preDrawUpdaters = []),
      (this._postDrawUpdaters = []),
      (this._resizePlugins = []),
      (this._colorPlugins = []),
      (this._mutationObserver =
        !Ke() && typeof MutationObserver < "u"
          ? new MutationObserver((t) => {
              for (const n of t)
                n.type === "attributes" &&
                  n.attributeName === "style" &&
                  this._repairStyle();
            })
          : void 0);
  }
  get _fullScreen() {
    return this.container.actualOptions.fullScreen.enable;
  }
  clear() {
    const e = this.container.actualOptions,
      t = e.particles.move.trail;
    e.backgroundMask.enable
      ? this.paint()
      : t.enable && t.length > 0 && this._trailFillColor
      ? this._paintBase(Ie(this._trailFillColor, 1 / t.length))
      : this.draw((n) => {
          jt(n, this.size);
        });
  }
  destroy() {
    var e, t;
    (e = this._mutationObserver) === null || e === void 0 || e.disconnect(),
      this._generated
        ? (t = this.element) === null || t === void 0 || t.remove()
        : this._resetOriginalStyle(),
      this.draw((n) => {
        jt(n, this.size);
      }),
      (this._preDrawUpdaters = []),
      (this._postDrawUpdaters = []),
      (this._resizePlugins = []),
      (this._colorPlugins = []);
  }
  draw(e) {
    if (!!this._context) return e(this._context);
  }
  drawParticle(e, t) {
    var n;
    if (e.spawning || e.destroyed) return;
    const s = e.getRadius();
    if (s <= 0) return;
    const o = e.getFillColor(),
      r = (n = e.getStrokeColor()) !== null && n !== void 0 ? n : o;
    let [a, l] = this._getPluginParticleColors(e);
    a || (a = o),
      l || (l = r),
      !(!a && !l) &&
        this.draw((u) => {
          var c, d, f, p, h;
          const g = this.container.actualOptions,
            y = e.options.zIndex,
            E = (1 - e.zIndexFactor) ** y.opacityRate,
            C =
              (f =
                (c = e.bubble.opacity) !== null && c !== void 0
                  ? c
                  : (d = e.opacity) === null || d === void 0
                  ? void 0
                  : d.value) !== null && f !== void 0
                ? f
                : 1,
            b =
              (h =
                (p = e.stroke) === null || p === void 0
                  ? void 0
                  : p.opacity) !== null && h !== void 0
                ? h
                : C,
            _ = C * E,
            x = b * E,
            w = {},
            S = { fill: a ? nt(a, _) : void 0 };
          (S.stroke = l ? nt(l, x) : S.fill),
            this._applyPreDrawUpdaters(u, e, s, _, S, w),
            d0({
              container: this.container,
              context: u,
              particle: e,
              delta: t,
              colorStyles: S,
              backgroundMask: g.backgroundMask.enable,
              composite: g.backgroundMask.composite,
              radius: s * (1 - e.zIndexFactor) ** y.sizeRate,
              opacity: _,
              shadow: e.options.shadow,
              transform: w,
            }),
            this._applyPostDrawUpdaters(e);
        });
  }
  drawParticlePlugin(e, t, n) {
    this.draw((s) => {
      v0(s, e, t, n);
    });
  }
  drawPlugin(e, t) {
    this.draw((n) => {
      p0(n, e, t);
    });
  }
  init() {
    var e;
    this.resize(),
      this._initStyle(),
      this._initCover(),
      this._initTrail(),
      this.initBackground(),
      this.element &&
        ((e = this._mutationObserver) === null ||
          e === void 0 ||
          e.observe(this.element, { attributes: !0 })),
      this.initUpdaters(),
      this.initPlugins(),
      this.paint();
  }
  initBackground() {
    const e = this.container.actualOptions,
      t = e.background,
      n = this.element,
      s = n == null ? void 0 : n.style;
    if (!!s) {
      if (t.color) {
        const o = Se(t.color);
        s.backgroundColor = o ? Ie(o, t.opacity) : "";
      } else s.backgroundColor = "";
      (s.backgroundImage = t.image || ""),
        (s.backgroundPosition = t.position || ""),
        (s.backgroundRepeat = t.repeat || ""),
        (s.backgroundSize = t.size || "");
    }
  }
  initPlugins() {
    this._resizePlugins = [];
    for (const [, e] of this.container.plugins)
      e.resize && this._resizePlugins.push(e),
        (e.particleFillColor || e.particleStrokeColor) &&
          this._colorPlugins.push(e);
  }
  initUpdaters() {
    (this._preDrawUpdaters = []), (this._postDrawUpdaters = []);
    for (const e of this.container.particles.updaters)
      e.afterDraw && this._postDrawUpdaters.push(e),
        (e.getColorStyles || e.getTransformValues || e.beforeDraw) &&
          this._preDrawUpdaters.push(e);
  }
  loadCanvas(e) {
    var t, n;
    this._generated &&
      ((t = this.element) === null || t === void 0 || t.remove()),
      (this._generated =
        e.dataset && ct in e.dataset
          ? e.dataset[ct] === "true"
          : this._generated),
      (this.element = e),
      (this.element.ariaHidden = "true"),
      (this._originalStyle = ne({}, this.element.style)),
      (this.size.height = e.offsetHeight),
      (this.size.width = e.offsetWidth),
      (this._context = this.element.getContext("2d")),
      (n = this._mutationObserver) === null ||
        n === void 0 ||
        n.observe(this.element, { attributes: !0 }),
      this.container.retina.init(),
      this.initBackground();
  }
  paint() {
    const e = this.container.actualOptions;
    this.draw((t) => {
      e.backgroundMask.enable && e.backgroundMask.cover
        ? (jt(t, this.size), this._paintBase(this._coverColorStyle))
        : this._paintBase();
    });
  }
  resize() {
    if (!this.element) return;
    const e = this.container,
      t = e.retina.pixelRatio,
      n = e.canvas.size,
      s = {
        width: this.element.offsetWidth * t,
        height: this.element.offsetHeight * t,
      };
    if (
      s.height === n.height &&
      s.width === n.width &&
      s.height === this.element.height &&
      s.width === this.element.width
    )
      return;
    const o = Object.assign({}, n);
    (this.element.width = n.width = this.element.offsetWidth * t),
      (this.element.height = n.height = this.element.offsetHeight * t),
      this.container.started &&
        (this.resizeFactor = {
          width: n.width / o.width,
          height: n.height / o.height,
        });
  }
  async windowResize() {
    if (!this.element) return;
    this.resize();
    const e = this.container,
      t = e.updateActualOptions();
    e.particles.setDensity(),
      this._applyResizePlugins(),
      t && (await e.refresh());
  }
  _applyPostDrawUpdaters(e) {
    var t;
    for (const n of this._postDrawUpdaters)
      (t = n.afterDraw) === null || t === void 0 || t.call(n, e);
  }
  _applyPreDrawUpdaters(e, t, n, s, o, r) {
    var a;
    for (const l of this._preDrawUpdaters) {
      if (l.getColorStyles) {
        const { fill: u, stroke: c } = l.getColorStyles(t, e, n, s);
        u && (o.fill = u), c && (o.stroke = c);
      }
      if (l.getTransformValues) {
        const u = l.getTransformValues(t);
        for (const c in u) S0(r, u, c);
      }
      (a = l.beforeDraw) === null || a === void 0 || a.call(l, t);
    }
  }
  _applyResizePlugins() {
    for (const e of this._resizePlugins) e.resize && e.resize();
  }
  _getPluginParticleColors(e) {
    let t, n;
    for (const s of this._colorPlugins)
      if (
        (!t && s.particleFillColor && (t = qe(s.particleFillColor(e))),
        !n && s.particleStrokeColor && (n = qe(s.particleStrokeColor(e))),
        t && n)
      )
        break;
    return [t, n];
  }
  _initCover() {
    const e = this.container.actualOptions,
      t = e.backgroundMask.cover,
      n = t.color,
      s = Se(n);
    if (s) {
      const o = { r: s.r, g: s.g, b: s.b, a: t.opacity };
      this._coverColorStyle = Ie(o, o.a);
    }
  }
  _initStyle() {
    const e = this.element,
      t = this.container.actualOptions;
    if (!!e) {
      this._fullScreen
        ? ((this._originalStyle = ne({}, e.style)), this._setFullScreenStyle())
        : this._resetOriginalStyle();
      for (const n in t.style) {
        if (!n || !t.style) continue;
        const s = t.style[n];
        !s || e.style.setProperty(n, s, "important");
      }
    }
  }
  _initTrail() {
    const e = this.container.actualOptions,
      t = e.particles.move.trail,
      n = Se(t.fillColor);
    if (n) {
      const s = e.particles.move.trail;
      this._trailFillColor = Object.assign(Object.assign({}, n), {
        a: 1 / s.length,
      });
    }
  }
  _paintBase(e) {
    this.draw((t) => {
      c0(t, this.size, e);
    });
  }
  _repairStyle() {
    var e, t;
    const n = this.element;
    !n ||
      ((e = this._mutationObserver) === null || e === void 0 || e.disconnect(),
      this._initStyle(),
      this.initBackground(),
      (t = this._mutationObserver) === null ||
        t === void 0 ||
        t.observe(n, { attributes: !0 }));
  }
  _resetOriginalStyle() {
    const e = this.element,
      t = this._originalStyle;
    !(e && t) ||
      ((e.style.position = t.position),
      (e.style.zIndex = t.zIndex),
      (e.style.top = t.top),
      (e.style.left = t.left),
      (e.style.width = t.width),
      (e.style.height = t.height));
  }
  _setFullScreenStyle() {
    const e = this.element;
    if (!e) return;
    const t = "important";
    e.style.setProperty("position", "fixed", t),
      e.style.setProperty(
        "z-index",
        this.container.actualOptions.fullScreen.zIndex.toString(10),
        t
      ),
      e.style.setProperty("top", "0", t),
      e.style.setProperty("left", "0", t),
      e.style.setProperty("width", "100%", t),
      e.style.setProperty("height", "100%", t);
  }
}
function _e(i, e, t, n, s) {
  if (n) {
    let o = { passive: !0 };
    typeof s == "boolean" ? (o.capture = s) : s !== void 0 && (o = s),
      i.addEventListener(e, t, o);
  } else {
    const o = s;
    i.removeEventListener(e, t, o);
  }
}
class T0 {
  constructor(e) {
    (this.container = e),
      (this.canPush = !0),
      (this.mouseMoveHandler = (t) => this.mouseTouchMove(t)),
      (this.touchStartHandler = (t) => this.mouseTouchMove(t)),
      (this.touchMoveHandler = (t) => this.mouseTouchMove(t)),
      (this.touchEndHandler = () => this.mouseTouchFinish()),
      (this.mouseLeaveHandler = () => this.mouseTouchFinish()),
      (this.touchCancelHandler = () => this.mouseTouchFinish()),
      (this.touchEndClickHandler = (t) => this.mouseTouchClick(t)),
      (this.mouseUpHandler = (t) => this.mouseTouchClick(t)),
      (this.mouseDownHandler = () => this.mouseDown()),
      (this.visibilityChangeHandler = () => this.handleVisibilityChange()),
      (this.themeChangeHandler = (t) => this.handleThemeChange(t)),
      (this.oldThemeChangeHandler = (t) => this.handleThemeChange(t)),
      (this.resizeHandler = () => this.handleWindowResize());
  }
  addListeners() {
    this.manageListeners(!0);
  }
  removeListeners() {
    this.manageListeners(!1);
  }
  doMouseTouchClick(e) {
    const t = this.container,
      n = t.actualOptions;
    if (this.canPush) {
      const s = t.interactivity.mouse.position;
      if (!s) return;
      (t.interactivity.mouse.clickPosition = Object.assign({}, s)),
        (t.interactivity.mouse.clickTime = new Date().getTime());
      const o = n.interactivity.events.onClick;
      J(o.mode, (r) => this.handleClickMode(r));
    }
    e.type === "touchend" && setTimeout(() => this.mouseTouchFinish(), 500);
  }
  handleClickMode(e) {
    this.container.handleClickMode(e);
  }
  handleThemeChange(e) {
    const t = e,
      n = t.matches
        ? this.container.options.defaultThemes.dark
        : this.container.options.defaultThemes.light,
      s = this.container.options.themes.find((o) => o.name === n);
    s && s.default.auto && this.container.loadTheme(n);
  }
  handleVisibilityChange() {
    const e = this.container,
      t = e.actualOptions;
    this.mouseTouchFinish(),
      t.pauseOnBlur &&
        (document != null && document.hidden
          ? ((e.pageHidden = !0), e.pause())
          : ((e.pageHidden = !1),
            e.getAnimationStatus() ? e.play(!0) : e.draw(!0)));
  }
  handleWindowResize() {
    this.resizeTimeout &&
      (clearTimeout(this.resizeTimeout), delete this.resizeTimeout),
      (this.resizeTimeout = setTimeout(async () => {
        var e;
        return (e = this.container.canvas) === null || e === void 0
          ? void 0
          : e.windowResize();
      }, 500));
  }
  manageListeners(e) {
    var t;
    const n = this.container,
      s = n.actualOptions,
      o = s.interactivity.detectsOn;
    let r = ri;
    if (o === "window") (n.interactivity.element = window), (r = _0);
    else if (o === "parent" && n.canvas.element) {
      const c = n.canvas.element;
      n.interactivity.element =
        (t = c.parentElement) !== null && t !== void 0 ? t : c.parentNode;
    } else n.interactivity.element = n.canvas.element;
    const a = Un("(prefers-color-scheme: dark)");
    a &&
      (a.addEventListener !== void 0
        ? _e(a, "change", this.themeChangeHandler, e)
        : a.addListener !== void 0 &&
          (e
            ? a.addListener(this.oldThemeChangeHandler)
            : a.removeListener(this.oldThemeChangeHandler)));
    const l = n.interactivity.element;
    if (!l) return;
    const u = l;
    (s.interactivity.events.onHover.enable ||
      s.interactivity.events.onClick.enable) &&
      (_e(l, Je, this.mouseMoveHandler, e),
      _e(l, C0, this.touchStartHandler, e),
      _e(l, b0, this.touchMoveHandler, e),
      s.interactivity.events.onClick.enable
        ? (_e(l, Xi, this.touchEndClickHandler, e),
          _e(l, y0, this.mouseUpHandler, e),
          _e(l, g0, this.mouseDownHandler, e))
        : _e(l, Xi, this.touchEndHandler, e),
      _e(l, r, this.mouseLeaveHandler, e),
      _e(l, w0, this.touchCancelHandler, e)),
      n.canvas.element &&
        (n.canvas.element.style.pointerEvents =
          u === n.canvas.element ? "initial" : "none"),
      s.interactivity.events.resize &&
        (typeof ResizeObserver < "u"
          ? this.resizeObserver && !e
            ? (n.canvas.element &&
                this.resizeObserver.unobserve(n.canvas.element),
              this.resizeObserver.disconnect(),
              delete this.resizeObserver)
            : !this.resizeObserver &&
              e &&
              n.canvas.element &&
              ((this.resizeObserver = new ResizeObserver((c) => {
                !c.find((f) => f.target === n.canvas.element) ||
                  this.handleWindowResize();
              })),
              this.resizeObserver.observe(n.canvas.element))
          : _e(window, E0, this.resizeHandler, e)),
      document && _e(document, x0, this.visibilityChangeHandler, e, !1);
  }
  mouseDown() {
    const e = this.container.interactivity;
    if (e) {
      const t = e.mouse;
      (t.clicking = !0), (t.downPosition = t.position);
    }
  }
  mouseTouchClick(e) {
    const t = this.container,
      n = t.actualOptions,
      s = t.interactivity.mouse;
    s.inside = !0;
    let o = !1;
    const r = s.position;
    if (!(!r || !n.interactivity.events.onClick.enable)) {
      for (const [, a] of t.plugins)
        if (!!a.clickPositionValid && ((o = a.clickPositionValid(r)), o)) break;
      o || this.doMouseTouchClick(e), (s.clicking = !1);
    }
  }
  mouseTouchFinish() {
    const e = this.container.interactivity;
    if (!e) return;
    const t = e.mouse;
    delete t.position,
      delete t.clickPosition,
      delete t.downPosition,
      (e.status = ri),
      (t.inside = !1),
      (t.clicking = !1);
  }
  mouseTouchMove(e) {
    var t, n, s, o, r, a, l;
    const u = this.container,
      c = u.actualOptions;
    if (!(!((t = u.interactivity) === null || t === void 0) && t.element))
      return;
    u.interactivity.mouse.inside = !0;
    let d;
    const f = u.canvas.element;
    if (e.type.startsWith("pointer")) {
      this.canPush = !0;
      const h = e;
      if (u.interactivity.element === window) {
        if (f) {
          const g = f.getBoundingClientRect();
          d = { x: h.clientX - g.left, y: h.clientY - g.top };
        }
      } else if (c.interactivity.detectsOn === "parent") {
        const g = h.target,
          y = h.currentTarget,
          E = u.canvas.element;
        if (g && y && E) {
          const C = g.getBoundingClientRect(),
            b = y.getBoundingClientRect(),
            _ = E.getBoundingClientRect();
          d = {
            x: h.offsetX + 2 * C.left - (b.left + _.left),
            y: h.offsetY + 2 * C.top - (b.top + _.top),
          };
        } else
          d = {
            x: (n = h.offsetX) !== null && n !== void 0 ? n : h.clientX,
            y: (s = h.offsetY) !== null && s !== void 0 ? s : h.clientY,
          };
      } else
        h.target === u.canvas.element &&
          (d = {
            x: (o = h.offsetX) !== null && o !== void 0 ? o : h.clientX,
            y: (r = h.offsetY) !== null && r !== void 0 ? r : h.clientY,
          });
    } else {
      this.canPush = e.type !== "touchmove";
      const h = e,
        g = h.touches[h.touches.length - 1],
        y = f == null ? void 0 : f.getBoundingClientRect();
      d = {
        x:
          g.clientX -
          ((a = y == null ? void 0 : y.left) !== null && a !== void 0 ? a : 0),
        y:
          g.clientY -
          ((l = y == null ? void 0 : y.top) !== null && l !== void 0 ? l : 0),
      };
    }
    const p = u.retina.pixelRatio;
    d && ((d.x *= p), (d.y *= p)),
      (u.interactivity.mouse.position = d),
      (u.interactivity.status = Je);
  }
}
function B0(i, e = 60, t = !1) {
  return { value: i, factor: t ? 60 / e : (60 * i) / 1e3 };
}
class k0 {
  constructor(e) {
    this.container = e;
  }
  async nextFrame(e) {
    var t;
    try {
      const n = this.container;
      if (
        !n.smooth &&
        n.lastFrameTime !== void 0 &&
        e < n.lastFrameTime + 1e3 / n.fpsLimit
      ) {
        n.draw(!1);
        return;
      }
      ((t = n.lastFrameTime) !== null && t !== void 0) || (n.lastFrameTime = e);
      const s = B0(e - n.lastFrameTime, n.fpsLimit, n.smooth);
      if (((n.lifeTime += s.value), (n.lastFrameTime = e), s.value > 1e3)) {
        n.draw(!1);
        return;
      }
      if (
        (await n.particles.draw(s), n.duration > 0 && n.lifeTime > n.duration)
      ) {
        n.destroy();
        return;
      }
      n.getAnimationStatus() && n.draw(!1);
    } catch (n) {
      console.error("tsParticles error in animation loop", n);
    }
  }
}
class ie {
  constructor() {
    this.value = "";
  }
  static create(e, t) {
    const n = new ie();
    return (
      n.load(e),
      t !== void 0 &&
        (typeof t == "string" || t instanceof Array
          ? n.load({ value: t })
          : n.load(t)),
      n
    );
  }
  load(e) {
    (e == null ? void 0 : e.value) !== void 0 && (this.value = e.value);
  }
}
class D0 {
  constructor() {
    (this.color = new ie()),
      (this.color.value = ""),
      (this.image = ""),
      (this.position = ""),
      (this.repeat = ""),
      (this.size = ""),
      (this.opacity = 1);
  }
  load(e) {
    !e ||
      (e.color !== void 0 && (this.color = ie.create(this.color, e.color)),
      e.image !== void 0 && (this.image = e.image),
      e.position !== void 0 && (this.position = e.position),
      e.repeat !== void 0 && (this.repeat = e.repeat),
      e.size !== void 0 && (this.size = e.size),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class A0 {
  constructor() {
    (this.color = new ie()), (this.color.value = "#fff"), (this.opacity = 1);
  }
  load(e) {
    !e ||
      (e.color !== void 0 && (this.color = ie.create(this.color, e.color)),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class M0 {
  constructor() {
    (this.composite = "destination-out"),
      (this.cover = new A0()),
      (this.enable = !1);
  }
  load(e) {
    if (!!e) {
      if (
        (e.composite !== void 0 && (this.composite = e.composite),
        e.cover !== void 0)
      ) {
        const t = e.cover,
          n = typeof e.cover == "string" ? { color: e.cover } : e.cover;
        this.cover.load(t.color !== void 0 ? t : { color: n });
      }
      e.enable !== void 0 && (this.enable = e.enable);
    }
  }
}
class P0 {
  constructor() {
    (this.enable = !0), (this.zIndex = 0);
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      e.zIndex !== void 0 && (this.zIndex = e.zIndex));
  }
}
class O0 {
  constructor() {
    (this.enable = !1), (this.mode = []);
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      e.mode !== void 0 && (this.mode = e.mode));
  }
}
class Yi {
  constructor() {
    (this.selectors = []),
      (this.enable = !1),
      (this.mode = []),
      (this.type = "circle");
  }
  get el() {
    return this.elementId;
  }
  set el(e) {
    this.elementId = e;
  }
  get elementId() {
    return this.ids;
  }
  set elementId(e) {
    this.ids = e;
  }
  get ids() {
    return J(this.selectors, (e) => e.replace("#", ""));
  }
  set ids(e) {
    this.selectors = J(e, (t) => `#${t}`);
  }
  load(e) {
    var t, n;
    if (!e) return;
    const s =
      (n = (t = e.ids) !== null && t !== void 0 ? t : e.elementId) !== null &&
      n !== void 0
        ? n
        : e.el;
    s !== void 0 && (this.ids = s),
      e.selectors !== void 0 && (this.selectors = e.selectors),
      e.enable !== void 0 && (this.enable = e.enable),
      e.mode !== void 0 && (this.mode = e.mode),
      e.type !== void 0 && (this.type = e.type);
  }
}
class L0 {
  constructor() {
    (this.enable = !1), (this.force = 2), (this.smooth = 10);
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      e.force !== void 0 && (this.force = e.force),
      e.smooth !== void 0 && (this.smooth = e.smooth));
  }
}
class z0 {
  constructor() {
    (this.enable = !1), (this.mode = []), (this.parallax = new L0());
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      e.mode !== void 0 && (this.mode = e.mode),
      this.parallax.load(e.parallax));
  }
}
class I0 {
  constructor() {
    (this.onClick = new O0()),
      (this.onDiv = new Yi()),
      (this.onHover = new z0()),
      (this.resize = !0);
  }
  get onclick() {
    return this.onClick;
  }
  set onclick(e) {
    this.onClick = e;
  }
  get ondiv() {
    return this.onDiv;
  }
  set ondiv(e) {
    this.onDiv = e;
  }
  get onhover() {
    return this.onHover;
  }
  set onhover(e) {
    this.onHover = e;
  }
  load(e) {
    var t, n, s;
    if (!e) return;
    this.onClick.load((t = e.onClick) !== null && t !== void 0 ? t : e.onclick);
    const o = (n = e.onDiv) !== null && n !== void 0 ? n : e.ondiv;
    o !== void 0 &&
      (this.onDiv = J(o, (r) => {
        const a = new Yi();
        return a.load(r), a;
      })),
      this.onHover.load(
        (s = e.onHover) !== null && s !== void 0 ? s : e.onhover
      ),
      e.resize !== void 0 && (this.resize = e.resize);
  }
}
class R0 {
  constructor(e, t) {
    (this._engine = e), (this._container = t);
  }
  load(e) {
    if (!!e && this._container) {
      const t = this._engine.plugins.interactors.get(this._container);
      if (t) for (const n of t) n.loadModeOptions && n.loadModeOptions(this, e);
    }
  }
}
class is {
  constructor(e, t) {
    (this.detectsOn = "window"),
      (this.events = new I0()),
      (this.modes = new R0(e, t));
  }
  get detect_on() {
    return this.detectsOn;
  }
  set detect_on(e) {
    this.detectsOn = e;
  }
  load(e) {
    var t;
    if (!e) return;
    const n = (t = e.detectsOn) !== null && t !== void 0 ? t : e.detect_on;
    n !== void 0 && (this.detectsOn = n),
      this.events.load(e.events),
      this.modes.load(e.modes);
  }
}
class $0 {
  load(e) {
    var t, n;
    !e ||
      (e.position !== void 0 &&
        (this.position = {
          x: (t = e.position.x) !== null && t !== void 0 ? t : 50,
          y: (n = e.position.y) !== null && n !== void 0 ? n : 50,
        }),
      e.options !== void 0 && (this.options = ne({}, e.options)));
  }
}
class N0 {
  constructor() {
    (this.maxWidth = 1 / 0), (this.options = {}), (this.mode = "canvas");
  }
  load(e) {
    !e ||
      (e.maxWidth !== void 0 && (this.maxWidth = e.maxWidth),
      e.mode !== void 0 &&
        (e.mode === "screen" ? (this.mode = "screen") : (this.mode = "canvas")),
      e.options !== void 0 && (this.options = ne({}, e.options)));
  }
}
class H0 {
  constructor() {
    (this.auto = !1), (this.mode = "any"), (this.value = !1);
  }
  load(e) {
    !e ||
      (e.auto !== void 0 && (this.auto = e.auto),
      e.mode !== void 0 && (this.mode = e.mode),
      e.value !== void 0 && (this.value = e.value));
  }
}
class V0 {
  constructor() {
    (this.name = ""), (this.default = new H0());
  }
  load(e) {
    !e ||
      (e.name !== void 0 && (this.name = e.name),
      this.default.load(e.default),
      e.options !== void 0 && (this.options = ne({}, e.options)));
  }
}
class qt {
  constructor() {
    (this.count = 0),
      (this.enable = !1),
      (this.offset = 0),
      (this.speed = 1),
      (this.decay = 0),
      (this.sync = !0);
  }
  load(e) {
    !e ||
      (e.count !== void 0 && (this.count = H(e.count)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.offset !== void 0 && (this.offset = H(e.offset)),
      e.speed !== void 0 && (this.speed = H(e.speed)),
      e.decay !== void 0 && (this.decay = H(e.decay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class j0 {
  constructor() {
    (this.h = new qt()), (this.s = new qt()), (this.l = new qt());
  }
  load(e) {
    !e || (this.h.load(e.h), this.s.load(e.s), this.l.load(e.l));
  }
}
class st extends ie {
  constructor() {
    super(), (this.animation = new j0());
  }
  static create(e, t) {
    const n = new st();
    return (
      n.load(e),
      t !== void 0 &&
        (typeof t == "string" || t instanceof Array
          ? n.load({ value: t })
          : n.load(t)),
      n
    );
  }
  load(e) {
    if ((super.load(e), !e)) return;
    const t = e.animation;
    t !== void 0 &&
      (t.enable !== void 0
        ? this.animation.h.load(t)
        : this.animation.load(e.animation));
  }
}
class q0 {
  constructor() {
    this.speed = 2;
  }
  load(e) {
    !e || (e.speed !== void 0 && (this.speed = e.speed));
  }
}
class U0 {
  constructor() {
    (this.enable = !0), (this.retries = 0);
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      e.retries !== void 0 && (this.retries = e.retries));
  }
}
class G0 {
  constructor() {
    (this.enable = !1), (this.minimumValue = 0);
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      e.minimumValue !== void 0 && (this.minimumValue = e.minimumValue));
  }
}
class Fe {
  constructor() {
    (this.random = new G0()), (this.value = 0);
  }
  load(e) {
    !e ||
      (typeof e.random == "boolean"
        ? (this.random.enable = e.random)
        : this.random.load(e.random),
      e.value !== void 0 &&
        (this.value = H(
          e.value,
          this.random.enable ? this.random.minimumValue : void 0
        )));
  }
}
class Zi extends Fe {
  constructor() {
    super(), (this.random.minimumValue = 0.1), (this.value = 1);
  }
}
class ns {
  constructor() {
    (this.horizontal = new Zi()), (this.vertical = new Zi());
  }
  load(e) {
    !e || (this.horizontal.load(e.horizontal), this.vertical.load(e.vertical));
  }
}
class W0 {
  constructor() {
    (this.absorb = new q0()),
      (this.bounce = new ns()),
      (this.enable = !1),
      (this.mode = "bounce"),
      (this.overlap = new U0());
  }
  load(e) {
    !e ||
      (this.absorb.load(e.absorb),
      this.bounce.load(e.bounce),
      e.enable !== void 0 && (this.enable = e.enable),
      e.mode !== void 0 && (this.mode = e.mode),
      this.overlap.load(e.overlap));
  }
}
class X0 {
  constructor() {
    (this.offset = 0), (this.value = 90);
  }
  load(e) {
    !e ||
      (e.offset !== void 0 && (this.offset = H(e.offset)),
      e.value !== void 0 && (this.value = H(e.value)));
  }
}
class Y0 {
  constructor() {
    (this.distance = 200),
      (this.enable = !1),
      (this.rotate = { x: 3e3, y: 3e3 });
  }
  get rotateX() {
    return this.rotate.x;
  }
  set rotateX(e) {
    this.rotate.x = e;
  }
  get rotateY() {
    return this.rotate.y;
  }
  set rotateY(e) {
    this.rotate.y = e;
  }
  load(e) {
    var t, n, s, o;
    if (!e) return;
    e.distance !== void 0 && (this.distance = H(e.distance)),
      e.enable !== void 0 && (this.enable = e.enable);
    const r =
      (n = (t = e.rotate) === null || t === void 0 ? void 0 : t.x) !== null &&
      n !== void 0
        ? n
        : e.rotateX;
    r !== void 0 && (this.rotate.x = r);
    const a =
      (o = (s = e.rotate) === null || s === void 0 ? void 0 : s.y) !== null &&
      o !== void 0
        ? o
        : e.rotateY;
    a !== void 0 && (this.rotate.y = a);
  }
}
class Z0 {
  constructor() {
    (this.x = 50), (this.y = 50), (this.mode = "percent"), (this.radius = 0);
  }
  load(e) {
    !e ||
      (e.x !== void 0 && (this.x = e.x),
      e.y !== void 0 && (this.y = e.y),
      e.mode !== void 0 && (this.mode = e.mode),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
class K0 {
  constructor() {
    (this.acceleration = 9.81),
      (this.enable = !1),
      (this.inverse = !1),
      (this.maxSpeed = 50);
  }
  load(e) {
    !e ||
      (e.acceleration !== void 0 && (this.acceleration = H(e.acceleration)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.inverse !== void 0 && (this.inverse = e.inverse),
      e.maxSpeed !== void 0 && (this.maxSpeed = H(e.maxSpeed)));
  }
}
class J0 {
  constructor() {
    (this.clamp = !0),
      (this.delay = new Fe()),
      (this.enable = !1),
      (this.options = {});
  }
  load(e) {
    !e ||
      (e.clamp !== void 0 && (this.clamp = e.clamp),
      this.delay.load(e.delay),
      e.enable !== void 0 && (this.enable = e.enable),
      (this.generator = e.generator),
      e.options && (this.options = ne(this.options, e.options)));
  }
}
class Q0 {
  constructor() {
    (this.enable = !1),
      (this.length = 10),
      (this.fillColor = new ie()),
      (this.fillColor.value = "#000000");
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      (this.fillColor = ie.create(this.fillColor, e.fillColor)),
      e.length !== void 0 && (this.length = e.length));
  }
}
class e2 {
  constructor() {
    this.default = "out";
  }
  load(e) {
    var t, n, s, o;
    !e ||
      (e.default !== void 0 && (this.default = e.default),
      (this.bottom = (t = e.bottom) !== null && t !== void 0 ? t : e.default),
      (this.left = (n = e.left) !== null && n !== void 0 ? n : e.default),
      (this.right = (s = e.right) !== null && s !== void 0 ? s : e.default),
      (this.top = (o = e.top) !== null && o !== void 0 ? o : e.default));
  }
}
class t2 {
  constructor() {
    (this.acceleration = 0), (this.enable = !1);
  }
  load(e) {
    !e ||
      (e.acceleration !== void 0 && (this.acceleration = H(e.acceleration)),
      e.enable !== void 0 && (this.enable = e.enable),
      (this.position = e.position ? ne({}, e.position) : void 0));
  }
}
class i2 {
  constructor() {
    (this.angle = new X0()),
      (this.attract = new Y0()),
      (this.center = new Z0()),
      (this.decay = 0),
      (this.distance = {}),
      (this.direction = "none"),
      (this.drift = 0),
      (this.enable = !1),
      (this.gravity = new K0()),
      (this.path = new J0()),
      (this.outModes = new e2()),
      (this.random = !1),
      (this.size = !1),
      (this.speed = 2),
      (this.spin = new t2()),
      (this.straight = !1),
      (this.trail = new Q0()),
      (this.vibrate = !1),
      (this.warp = !1);
  }
  get bounce() {
    return this.collisions;
  }
  set bounce(e) {
    this.collisions = e;
  }
  get collisions() {
    return !1;
  }
  set collisions(e) {}
  get noise() {
    return this.path;
  }
  set noise(e) {
    this.path = e;
  }
  get outMode() {
    return this.outModes.default;
  }
  set outMode(e) {
    this.outModes.default = e;
  }
  get out_mode() {
    return this.outMode;
  }
  set out_mode(e) {
    this.outMode = e;
  }
  load(e) {
    var t, n, s;
    if (!e) return;
    this.angle.load(typeof e.angle == "number" ? { value: e.angle } : e.angle),
      this.attract.load(e.attract),
      this.center.load(e.center),
      e.decay !== void 0 && (this.decay = e.decay),
      e.direction !== void 0 && (this.direction = e.direction),
      e.distance !== void 0 &&
        (this.distance =
          typeof e.distance == "number"
            ? { horizontal: e.distance, vertical: e.distance }
            : Object.assign({}, e.distance)),
      e.drift !== void 0 && (this.drift = H(e.drift)),
      e.enable !== void 0 && (this.enable = e.enable),
      this.gravity.load(e.gravity);
    const o =
      (n = (t = e.outModes) !== null && t !== void 0 ? t : e.outMode) !==
        null && n !== void 0
        ? n
        : e.out_mode;
    o !== void 0 &&
      (typeof o == "object"
        ? this.outModes.load(o)
        : this.outModes.load({ default: o })),
      this.path.load((s = e.path) !== null && s !== void 0 ? s : e.noise),
      e.random !== void 0 && (this.random = e.random),
      e.size !== void 0 && (this.size = e.size),
      e.speed !== void 0 && (this.speed = H(e.speed)),
      this.spin.load(e.spin),
      e.straight !== void 0 && (this.straight = e.straight),
      this.trail.load(e.trail),
      e.vibrate !== void 0 && (this.vibrate = e.vibrate),
      e.warp !== void 0 && (this.warp = e.warp);
  }
}
class ss {
  constructor() {
    (this.count = 0),
      (this.enable = !1),
      (this.speed = 1),
      (this.decay = 0),
      (this.sync = !1);
  }
  load(e) {
    !e ||
      (e.count !== void 0 && (this.count = H(e.count)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0 && (this.speed = H(e.speed)),
      e.decay !== void 0 && (this.decay = H(e.decay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class n2 extends ss {
  constructor() {
    super(),
      (this.destroy = "none"),
      (this.enable = !1),
      (this.speed = 2),
      (this.startValue = "random"),
      (this.sync = !1);
  }
  get opacity_min() {
    return this.minimumValue;
  }
  set opacity_min(e) {
    this.minimumValue = e;
  }
  load(e) {
    var t;
    !e ||
      (super.load(e),
      e.destroy !== void 0 && (this.destroy = e.destroy),
      e.enable !== void 0 && (this.enable = e.enable),
      (this.minimumValue =
        (t = e.minimumValue) !== null && t !== void 0 ? t : e.opacity_min),
      e.speed !== void 0 && (this.speed = e.speed),
      e.startValue !== void 0 && (this.startValue = e.startValue),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class s2 extends Fe {
  constructor() {
    super(),
      (this.animation = new n2()),
      (this.random.minimumValue = 0.1),
      (this.value = 1);
  }
  get anim() {
    return this.animation;
  }
  set anim(e) {
    this.animation = e;
  }
  load(e) {
    var t;
    if (!e) return;
    super.load(e);
    const n = (t = e.animation) !== null && t !== void 0 ? t : e.anim;
    n !== void 0 &&
      (this.animation.load(n),
      (this.value = H(
        this.value,
        this.animation.enable ? this.animation.minimumValue : void 0
      )));
  }
}
class o2 {
  constructor() {
    (this.enable = !1), (this.area = 800), (this.factor = 1e3);
  }
  get value_area() {
    return this.area;
  }
  set value_area(e) {
    this.area = e;
  }
  load(e) {
    var t;
    if (!e) return;
    e.enable !== void 0 && (this.enable = e.enable);
    const n = (t = e.area) !== null && t !== void 0 ? t : e.value_area;
    n !== void 0 && (this.area = n),
      e.factor !== void 0 && (this.factor = e.factor);
  }
}
class r2 {
  constructor() {
    (this.density = new o2()), (this.limit = 0), (this.value = 100);
  }
  get max() {
    return this.limit;
  }
  set max(e) {
    this.limit = e;
  }
  load(e) {
    var t;
    if (!e) return;
    this.density.load(e.density);
    const n = (t = e.limit) !== null && t !== void 0 ? t : e.max;
    n !== void 0 && (this.limit = n),
      e.value !== void 0 && (this.value = e.value);
  }
}
class a2 {
  constructor() {
    (this.blur = 0),
      (this.color = new ie()),
      (this.enable = !1),
      (this.offset = { x: 0, y: 0 }),
      (this.color.value = "#000");
  }
  load(e) {
    !e ||
      (e.blur !== void 0 && (this.blur = e.blur),
      (this.color = ie.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.offset !== void 0 &&
        (e.offset.x !== void 0 && (this.offset.x = e.offset.x),
        e.offset.y !== void 0 && (this.offset.y = e.offset.y)));
  }
}
const Ut = "character",
  Gt = "char",
  Wt = "image",
  Xt = "images",
  Yt = "polygon",
  Zt = "star";
class l2 {
  constructor() {
    (this.options = {}), (this.type = "circle");
  }
  get character() {
    var e;
    return (e = this.options[Ut]) !== null && e !== void 0
      ? e
      : this.options[Gt];
  }
  set character(e) {
    this.options[Gt] = this.options[Ut] = e;
  }
  get custom() {
    return this.options;
  }
  set custom(e) {
    this.options = e;
  }
  get image() {
    var e;
    return (e = this.options[Wt]) !== null && e !== void 0
      ? e
      : this.options[Xt];
  }
  set image(e) {
    this.options[Xt] = this.options[Wt] = e;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
  get polygon() {
    var e;
    return (e = this.options[Yt]) !== null && e !== void 0
      ? e
      : this.options[Zt];
  }
  set polygon(e) {
    this.options[Zt] = this.options[Yt] = e;
  }
  get stroke() {
    return [];
  }
  set stroke(e) {}
  load(e) {
    var t, n, s;
    if (!e) return;
    const o = (t = e.options) !== null && t !== void 0 ? t : e.custom;
    if (o !== void 0)
      for (const r in o) {
        const a = o[r];
        a &&
          (this.options[r] = ne(
            (n = this.options[r]) !== null && n !== void 0 ? n : {},
            a
          ));
      }
    this.loadShape(e.character, Ut, Gt, !0),
      this.loadShape(e.polygon, Yt, Zt, !1),
      this.loadShape(
        (s = e.image) !== null && s !== void 0 ? s : e.images,
        Wt,
        Xt,
        !0
      ),
      e.type !== void 0 && (this.type = e.type);
  }
  loadShape(e, t, n, s) {
    var o, r;
    if (!e) return;
    const a = e instanceof Array,
      l = a ? [] : {},
      u = a !== this.options[t] instanceof Array,
      c = a !== this.options[n] instanceof Array;
    u && (this.options[t] = l),
      c && s && (this.options[n] = l),
      (this.options[t] = ne(
        (o = this.options[t]) !== null && o !== void 0 ? o : l,
        e
      )),
      (!this.options[n] || s) &&
        (this.options[n] = ne(
          (r = this.options[n]) !== null && r !== void 0 ? r : l,
          e
        ));
  }
}
class u2 extends ss {
  constructor() {
    super(),
      (this.destroy = "none"),
      (this.enable = !1),
      (this.speed = 5),
      (this.startValue = "random"),
      (this.sync = !1);
  }
  get size_min() {
    return this.minimumValue;
  }
  set size_min(e) {
    this.minimumValue = e;
  }
  load(e) {
    var t;
    super.load(e),
      e &&
        (e.destroy !== void 0 && (this.destroy = e.destroy),
        e.enable !== void 0 && (this.enable = e.enable),
        (this.minimumValue =
          (t = e.minimumValue) !== null && t !== void 0 ? t : e.size_min),
        e.speed !== void 0 && (this.speed = e.speed),
        e.startValue !== void 0 && (this.startValue = e.startValue),
        e.sync !== void 0 && (this.sync = e.sync));
  }
}
class c2 extends Fe {
  constructor() {
    super(),
      (this.animation = new u2()),
      (this.random.minimumValue = 1),
      (this.value = 3);
  }
  get anim() {
    return this.animation;
  }
  set anim(e) {
    this.animation = e;
  }
  load(e) {
    var t;
    if ((super.load(e), !e)) return;
    const n = (t = e.animation) !== null && t !== void 0 ? t : e.anim;
    n !== void 0 &&
      (this.animation.load(n),
      (this.value = H(
        this.value,
        this.animation.enable ? this.animation.minimumValue : void 0
      )));
  }
}
class Ki {
  constructor() {
    this.width = 0;
  }
  load(e) {
    !e ||
      (e.color !== void 0 && (this.color = st.create(this.color, e.color)),
      e.width !== void 0 && (this.width = e.width),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class d2 extends Fe {
  constructor() {
    super(),
      (this.opacityRate = 1),
      (this.sizeRate = 1),
      (this.velocityRate = 1);
  }
  load(e) {
    super.load(e),
      e &&
        (e.opacityRate !== void 0 && (this.opacityRate = e.opacityRate),
        e.sizeRate !== void 0 && (this.sizeRate = e.sizeRate),
        e.velocityRate !== void 0 && (this.velocityRate = e.velocityRate));
  }
}
class f2 {
  constructor(e, t) {
    (this._engine = e),
      (this._container = t),
      (this.bounce = new ns()),
      (this.collisions = new W0()),
      (this.color = new st()),
      (this.color.value = "#fff"),
      (this.groups = {}),
      (this.move = new i2()),
      (this.number = new r2()),
      (this.opacity = new s2()),
      (this.reduceDuplicates = !1),
      (this.shadow = new a2()),
      (this.shape = new l2()),
      (this.size = new c2()),
      (this.stroke = new Ki()),
      (this.zIndex = new d2());
  }
  load(e) {
    var t, n, s, o, r, a;
    if (!e) return;
    if (
      (this.bounce.load(e.bounce),
      this.color.load(st.create(this.color, e.color)),
      e.groups !== void 0)
    )
      for (const c in e.groups) {
        const d = e.groups[c];
        d !== void 0 &&
          (this.groups[c] = ne(
            (t = this.groups[c]) !== null && t !== void 0 ? t : {},
            d
          ));
      }
    this.move.load(e.move),
      this.number.load(e.number),
      this.opacity.load(e.opacity),
      e.reduceDuplicates !== void 0 &&
        (this.reduceDuplicates = e.reduceDuplicates),
      this.shape.load(e.shape),
      this.size.load(e.size),
      this.shadow.load(e.shadow),
      this.zIndex.load(e.zIndex);
    const l =
      (s = (n = e.move) === null || n === void 0 ? void 0 : n.collisions) !==
        null && s !== void 0
        ? s
        : (o = e.move) === null || o === void 0
        ? void 0
        : o.bounce;
    l !== void 0 && (this.collisions.enable = l),
      this.collisions.load(e.collisions),
      e.interactivity !== void 0 &&
        (this.interactivity = ne({}, e.interactivity));
    const u =
      (r = e.stroke) !== null && r !== void 0
        ? r
        : (a = e.shape) === null || a === void 0
        ? void 0
        : a.stroke;
    if (
      (u &&
        (this.stroke = J(u, (c) => {
          const d = new Ki();
          return d.load(c), d;
        })),
      this._container)
    ) {
      const c = this._engine.plugins.updaters.get(this._container);
      if (c) for (const f of c) f.loadOptions && f.loadOptions(this, e);
      const d = this._engine.plugins.interactors.get(this._container);
      if (d)
        for (const f of d)
          f.loadParticlesOptions && f.loadParticlesOptions(this, e);
    }
  }
}
function os(i, ...e) {
  for (const t of e) i.load(t);
}
function bi(i, e, ...t) {
  const n = new f2(i, e);
  return os(n, ...t), n;
}
class h2 {
  constructor(e, t) {
    (this._engine = e),
      (this._container = t),
      (this.autoPlay = !0),
      (this.background = new D0()),
      (this.backgroundMask = new M0()),
      (this.defaultThemes = {}),
      (this.delay = 0),
      (this.fullScreen = new P0()),
      (this.detectRetina = !0),
      (this.duration = 0),
      (this.fpsLimit = 120),
      (this.interactivity = new is(e, t)),
      (this.manualParticles = []),
      (this.particles = bi(this._engine, this._container)),
      (this.pauseOnBlur = !0),
      (this.pauseOnOutsideViewport = !0),
      (this.responsive = []),
      (this.smooth = !1),
      (this.style = {}),
      (this.themes = []),
      (this.zLayers = 100);
  }
  get backgroundMode() {
    return this.fullScreen;
  }
  set backgroundMode(e) {
    this.fullScreen.load(e);
  }
  get fps_limit() {
    return this.fpsLimit;
  }
  set fps_limit(e) {
    this.fpsLimit = e;
  }
  get retina_detect() {
    return this.detectRetina;
  }
  set retina_detect(e) {
    this.detectRetina = e;
  }
  load(e) {
    var t, n, s, o, r;
    if (!e) return;
    e.preset !== void 0 && J(e.preset, (d) => this._importPreset(d)),
      e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay),
      e.delay !== void 0 && (this.delay = H(e.delay));
    const a =
      (t = e.detectRetina) !== null && t !== void 0 ? t : e.retina_detect;
    a !== void 0 && (this.detectRetina = a),
      e.duration !== void 0 && (this.duration = H(e.duration));
    const l = (n = e.fpsLimit) !== null && n !== void 0 ? n : e.fps_limit;
    l !== void 0 && (this.fpsLimit = l),
      e.pauseOnBlur !== void 0 && (this.pauseOnBlur = e.pauseOnBlur),
      e.pauseOnOutsideViewport !== void 0 &&
        (this.pauseOnOutsideViewport = e.pauseOnOutsideViewport),
      e.zLayers !== void 0 && (this.zLayers = e.zLayers),
      this.background.load(e.background);
    const u =
      (s = e.fullScreen) !== null && s !== void 0 ? s : e.backgroundMode;
    typeof u == "boolean"
      ? (this.fullScreen.enable = u)
      : this.fullScreen.load(u),
      this.backgroundMask.load(e.backgroundMask),
      this.interactivity.load(e.interactivity),
      e.manualParticles !== void 0 &&
        (this.manualParticles = e.manualParticles.map((d) => {
          const f = new $0();
          return f.load(d), f;
        })),
      this.particles.load(e.particles),
      (this.style = ne(this.style, e.style)),
      this._engine.plugins.loadOptions(this, e),
      e.smooth !== void 0 && (this.smooth = e.smooth);
    const c = this._engine.plugins.interactors.get(this._container);
    if (c) for (const d of c) d.loadOptions && d.loadOptions(this, e);
    if (e.responsive !== void 0)
      for (const d of e.responsive) {
        const f = new N0();
        f.load(d), this.responsive.push(f);
      }
    if (
      (this.responsive.sort((d, f) => d.maxWidth - f.maxWidth),
      e.themes !== void 0)
    )
      for (const d of e.themes) {
        const f = new V0();
        f.load(d), this.themes.push(f);
      }
    (this.defaultThemes.dark =
      (o = this._findDefaultTheme("dark")) === null || o === void 0
        ? void 0
        : o.name),
      (this.defaultThemes.light =
        (r = this._findDefaultTheme("light")) === null || r === void 0
          ? void 0
          : r.name);
  }
  setResponsive(e, t, n) {
    this.load(n);
    const s = this.responsive.find((o) =>
      o.mode === "screen" && screen
        ? o.maxWidth > screen.availWidth
        : o.maxWidth * t > e
    );
    return (
      this.load(s == null ? void 0 : s.options), s == null ? void 0 : s.maxWidth
    );
  }
  setTheme(e) {
    if (e) {
      const t = this.themes.find((n) => n.name === e);
      t && this.load(t.options);
    } else {
      const t = Un("(prefers-color-scheme: dark)"),
        n = t && t.matches,
        s = this._findDefaultTheme(n ? "dark" : "light");
      s && this.load(s.options);
    }
  }
  _findDefaultTheme(e) {
    var t;
    return (t = this.themes.find(
      (n) => n.default.value && n.default.mode === e
    )) !== null && t !== void 0
      ? t
      : this.themes.find((n) => n.default.value && n.default.mode === "any");
  }
  _importPreset(e) {
    this.load(this._engine.plugins.getPreset(e));
  }
}
class p2 {
  constructor(e, t) {
    (this.container = t),
      (this._engine = e),
      (this._interactors = this._engine.plugins.getInteractors(
        this.container,
        !0
      )),
      (this._externalInteractors = []),
      (this._particleInteractors = []);
  }
  async externalInteract(e) {
    for (const t of this._externalInteractors)
      t.isEnabled() && (await t.interact(e));
  }
  handleClickMode(e) {
    for (const t of this._externalInteractors)
      t.handleClickMode && t.handleClickMode(e);
  }
  init() {
    (this._externalInteractors = []), (this._particleInteractors = []);
    for (const e of this._interactors) {
      switch (e.type) {
        case 0:
          this._externalInteractors.push(e);
          break;
        case 1:
          this._particleInteractors.push(e);
          break;
      }
      e.init();
    }
  }
  async particlesInteract(e, t) {
    for (const n of this._externalInteractors) n.clear(e, t);
    for (const n of this._particleInteractors)
      n.isEnabled(e) && (await n.interact(e, t));
  }
  async reset(e) {
    for (const t of this._externalInteractors)
      t.isEnabled() && (await t.reset(e));
    for (const t of this._particleInteractors)
      t.isEnabled(e) && (await t.reset(e));
  }
}
const Ji = (i) => {
  !K(i.outMode, i.checkModes) ||
    (i.coord > i.maxCoord - i.radius * 2
      ? i.setCb(-i.radius)
      : i.coord < i.radius * 2 && i.setCb(i.radius));
};
class v2 {
  constructor(e, t, n, s, o, r) {
    (this.container = n), (this._engine = e), this.init(t, s, o, r);
  }
  destroy(e) {
    if (!(this.unbreakable || this.destroyed)) {
      (this.destroyed = !0),
        (this.bubble.inRange = !1),
        (this.slow.inRange = !1);
      for (const [, t] of this.container.plugins)
        t.particleDestroyed && t.particleDestroyed(this, e);
      for (const t of this.container.particles.updaters)
        t.particleDestroyed && t.particleDestroyed(this, e);
    }
  }
  draw(e) {
    const t = this.container;
    for (const [, n] of t.plugins) t.canvas.drawParticlePlugin(n, this, e);
    t.canvas.drawParticle(this, e);
  }
  getFillColor() {
    var e, t;
    const n =
      (e = this.bubble.color) !== null && e !== void 0 ? e : Wi(this.color);
    if (n && this.roll && (this.backColor || this.roll.alter)) {
      const s = this.roll.horizontal && this.roll.vertical ? 2 : 1,
        o = this.roll.horizontal ? Math.PI / 2 : 0;
      if (
        Math.floor(
          (((t = this.roll.angle) !== null && t !== void 0 ? t : 0) + o) /
            (Math.PI / s)
        ) % 2
      ) {
        if (this.backColor) return this.backColor;
        if (this.roll.alter)
          return m0(n, this.roll.alter.type, this.roll.alter.value);
      }
    }
    return n;
  }
  getMass() {
    return (this.getRadius() ** 2 * Math.PI) / 2;
  }
  getPosition() {
    return {
      x: this.position.x + this.offset.x,
      y: this.position.y + this.offset.y,
      z: this.position.z,
    };
  }
  getRadius() {
    var e;
    return (e = this.bubble.radius) !== null && e !== void 0
      ? e
      : this.size.value;
  }
  getStrokeColor() {
    var e, t;
    return (t =
      (e = this.bubble.color) !== null && e !== void 0
        ? e
        : Wi(this.strokeColor)) !== null && t !== void 0
      ? t
      : this.getFillColor();
  }
  init(e, t, n, s) {
    var o, r, a, l, u, c, d, f, p;
    const h = this.container,
      g = this._engine;
    (this.id = e),
      (this.group = s),
      (this.fill = !0),
      (this.pathRotation = !1),
      (this.close = !0),
      (this.lastPathTime = 0),
      (this.destroyed = !1),
      (this.unbreakable = !1),
      (this.rotation = 0),
      (this.misplaced = !1),
      (this.retina = { maxDistance: {} }),
      (this.outType = "normal"),
      (this.ignoresResizeRatio = !0);
    const y = h.retina.pixelRatio,
      E = h.actualOptions,
      C = bi(this._engine, h, E.particles),
      b = C.shape.type,
      { reduceDuplicates: _ } = C;
    this.shape = xe(b, this.id, _);
    const x = C.shape;
    if (n && n.shape && n.shape.type) {
      const M = n.shape.type,
        O = xe(M, this.id, _);
      O && ((this.shape = O), x.load(n.shape));
    }
    (this.shapeData = this._loadShapeData(x, _)),
      C.load(n),
      C.load(
        (o = this.shapeData) === null || o === void 0 ? void 0 : o.particles
      ),
      (this.interactivity = new is(g, h)),
      this.interactivity.load(h.actualOptions.interactivity),
      this.interactivity.load(C.interactivity),
      (this.fill =
        (a =
          (r = this.shapeData) === null || r === void 0 ? void 0 : r.fill) !==
          null && a !== void 0
          ? a
          : this.fill),
      (this.close =
        (u =
          (l = this.shapeData) === null || l === void 0 ? void 0 : l.close) !==
          null && u !== void 0
          ? u
          : this.close),
      (this.options = C);
    const w = this.options.move.path;
    (this.pathDelay = Ne(w.delay) * 1e3),
      w.generator &&
        ((this.pathGenerator = this._engine.plugins.getPathGenerator(
          w.generator
        )),
        this.pathGenerator &&
          h.addPath(w.generator, this.pathGenerator) &&
          this.pathGenerator.init(h));
    const S = R(this.options.zIndex.value);
    h.retina.initParticle(this);
    const k = this.options.size,
      T = k.value,
      B = k.animation;
    if (
      ((this.size = {
        enable: k.animation.enable,
        value: R(k.value) * h.retina.pixelRatio,
        max: ze(T) * y,
        min: ft(T) * y,
        loops: 0,
        maxLoops: R(k.animation.count),
      }),
      B.enable)
    )
      switch (
        ((this.size.status = 0),
        (this.size.decay = 1 - R(B.decay)),
        B.startValue)
      ) {
        case "min":
          (this.size.value = this.size.min), (this.size.status = 0);
          break;
        case "random":
          (this.size.value = se(this.size) * y),
            (this.size.status = j() >= 0.5 ? 0 : 1);
          break;
        case "max":
        default:
          (this.size.value = this.size.max), (this.size.status = 1);
          break;
      }
    (this.bubble = { inRange: !1 }),
      (this.slow = { inRange: !1, factor: 1 }),
      (this.position = this._calcPosition(h, t, Be(S, 0, h.zLayers))),
      (this.initialPosition = this.position.copy());
    const D = h.canvas.size,
      z = Object.assign({}, this.options.move.center),
      V = z.mode === "percent";
    switch (
      ((this.moveCenter = {
        x: z.x * (V ? D.width / 100 : 1),
        y: z.y * (V ? D.height / 100 : 1),
        radius:
          (c = this.options.move.center.radius) !== null && c !== void 0
            ? c
            : 0,
        mode:
          (d = this.options.move.center.mode) !== null && d !== void 0
            ? d
            : "percent",
      }),
      (this.direction = Xd(
        this.options.move.direction,
        this.position,
        this.moveCenter
      )),
      this.options.move.direction)
    ) {
      case "inside":
        this.outType = "inside";
        break;
      case "outside":
        this.outType = "outside";
        break;
    }
    (this.initialVelocity = this._calculateVelocity()),
      (this.velocity = this.initialVelocity.copy()),
      (this.moveDecay = 1 - R(this.options.move.decay)),
      (this.offset = Z.origin);
    const U = h.particles;
    (U.needsSort = U.needsSort || U.lastZIndex < this.position.z),
      (U.lastZIndex = this.position.z),
      (this.zIndexFactor = this.position.z / h.zLayers),
      (this.sides = 24);
    let F = h.drawers.get(this.shape);
    F ||
      ((F = this._engine.plugins.getShapeDrawer(this.shape)),
      F && h.drawers.set(this.shape, F)),
      F != null && F.loadShape && (F == null || F.loadShape(this));
    const A = F == null ? void 0 : F.getSidesCount;
    A && (this.sides = A(this)),
      (this.spawning = !1),
      (this.shadowColor = Se(this.options.shadow.color));
    for (const M of h.particles.updaters) M.init(this);
    for (const M of h.particles.movers)
      (f = M.init) === null || f === void 0 || f.call(M, this);
    F != null && F.particleInit && F.particleInit(h, this);
    for (const [, M] of h.plugins)
      (p = M.particleCreated) === null || p === void 0 || p.call(M, this);
  }
  isInsideCanvas() {
    const e = this.getRadius(),
      t = this.container.canvas.size;
    return (
      this.position.x >= -e &&
      this.position.y >= -e &&
      this.position.y <= t.height + e &&
      this.position.x <= t.width + e
    );
  }
  isVisible() {
    return !this.destroyed && !this.spawning && this.isInsideCanvas();
  }
  reset() {
    var e;
    for (const t of this.container.particles.updaters)
      (e = t.reset) === null || e === void 0 || e.call(t, this);
  }
  _calcPosition(e, t, n, s = 0) {
    var o, r, a, l;
    for (const [, y] of e.plugins) {
      const E =
        y.particlePosition !== void 0 ? y.particlePosition(t, this) : void 0;
      if (E !== void 0) return me.create(E.x, E.y, n);
    }
    const u = e.canvas.size,
      c = Kd({ size: u, position: t }),
      d = me.create(c.x, c.y, n),
      f = this.getRadius(),
      p = this.options.move.outModes,
      h = (y) => {
        Ji({
          outMode: y,
          checkModes: ["bounce", "bounce-horizontal"],
          coord: d.x,
          maxCoord: e.canvas.size.width,
          setCb: (E) => (d.x += E),
          radius: f,
        });
      },
      g = (y) => {
        Ji({
          outMode: y,
          checkModes: ["bounce", "bounce-vertical"],
          coord: d.y,
          maxCoord: e.canvas.size.height,
          setCb: (E) => (d.y += E),
          radius: f,
        });
      };
    return (
      h((o = p.left) !== null && o !== void 0 ? o : p.default),
      h((r = p.right) !== null && r !== void 0 ? r : p.default),
      g((a = p.top) !== null && a !== void 0 ? a : p.default),
      g((l = p.bottom) !== null && l !== void 0 ? l : p.default),
      this._checkOverlap(d, s) ? this._calcPosition(e, void 0, n, s + 1) : d
    );
  }
  _calculateVelocity() {
    const t = Yd(this.direction).copy(),
      n = this.options.move;
    if (n.direction === "inside" || n.direction === "outside") return t;
    const s = (Math.PI / 180) * R(n.angle.value),
      o = (Math.PI / 180) * R(n.angle.offset),
      r = { left: o - s / 2, right: o + s / 2 };
    return (
      n.straight || (t.angle += se(H(r.left, r.right))),
      n.random && typeof n.speed == "number" && (t.length *= j()),
      t
    );
  }
  _checkOverlap(e, t = 0) {
    const n = this.options.collisions,
      s = this.getRadius();
    if (!n.enable) return !1;
    const o = n.overlap;
    if (o.enable) return !1;
    const r = o.retries;
    if (r >= 0 && t > r)
      throw new Error("Particle is overlapping and can't be placed");
    let a = !1;
    for (const l of this.container.particles.array)
      if (oe(e, l.position) < s + l.getRadius()) {
        a = !0;
        break;
      }
    return a;
  }
  _loadShapeData(e, t) {
    const n = e.options[this.shape];
    if (n) return ne({}, xe(n, this.id, t));
  }
}
class m2 {
  constructor(e, t) {
    (this.position = e), (this.particle = t);
  }
}
class rs {
  constructor(e, t) {
    this.position = { x: e, y: t };
  }
}
class ve extends rs {
  constructor(e, t, n) {
    super(e, t), (this.radius = n);
  }
  contains(e) {
    return oe(e, this.position) <= this.radius;
  }
  intersects(e) {
    const t = e,
      n = e,
      s = this.position,
      o = e.position,
      r = { x: Math.abs(o.x - s.x), y: Math.abs(o.y - s.y) },
      a = this.radius;
    if (n.radius !== void 0) {
      const l = a + n.radius,
        u = Math.sqrt(r.x ** 2 + r.y ** 2);
      return l > u;
    } else if (t.size !== void 0) {
      const l = t.size.width,
        u = t.size.height;
      return (
        Math.pow(r.x - l, 2) + Math.pow(r.y - u, 2) <= a ** 2 ||
        (r.x <= a + l && r.y <= a + u) ||
        r.x <= l ||
        r.y <= u
      );
    }
    return !1;
  }
}
class pe extends rs {
  constructor(e, t, n, s) {
    super(e, t), (this.size = { height: s, width: n });
  }
  contains(e) {
    const t = this.size.width,
      n = this.size.height,
      s = this.position;
    return e.x >= s.x && e.x <= s.x + t && e.y >= s.y && e.y <= s.y + n;
  }
  intersects(e) {
    e instanceof ve && e.intersects(this);
    const t = this.size.width,
      n = this.size.height,
      s = this.position,
      o = e.position,
      r = e instanceof pe ? e.size : { width: 0, height: 0 },
      a = r.width,
      l = r.height;
    return o.x < s.x + t && o.x + a > s.x && o.y < s.y + n && o.y + l > s.y;
  }
}
class Ye {
  constructor(e, t) {
    (this.rectangle = e),
      (this.capacity = t),
      (this._points = []),
      (this._divided = !1);
  }
  insert(e) {
    var t, n, s, o, r;
    return this.rectangle.contains(e.position)
      ? this._points.length < this.capacity
        ? (this._points.push(e), !0)
        : (this._divided || this.subdivide(),
          (r =
            ((t = this._NE) === null || t === void 0 ? void 0 : t.insert(e)) ||
            ((n = this._NW) === null || n === void 0 ? void 0 : n.insert(e)) ||
            ((s = this._SE) === null || s === void 0 ? void 0 : s.insert(e)) ||
            ((o = this._SW) === null || o === void 0
              ? void 0
              : o.insert(e))) !== null && r !== void 0
            ? r
            : !1)
      : !1;
  }
  query(e, t, n) {
    var s, o, r, a;
    const l = n != null ? n : [];
    if (!e.intersects(this.rectangle)) return [];
    for (const u of this._points)
      (!e.contains(u.position) &&
        oe(e.position, u.position) > u.particle.getRadius() &&
        (!t || t(u.particle))) ||
        l.push(u.particle);
    return (
      this._divided &&
        ((s = this._NE) === null || s === void 0 || s.query(e, t, l),
        (o = this._NW) === null || o === void 0 || o.query(e, t, l),
        (r = this._SE) === null || r === void 0 || r.query(e, t, l),
        (a = this._SW) === null || a === void 0 || a.query(e, t, l)),
      l
    );
  }
  queryCircle(e, t, n) {
    return this.query(new ve(e.x, e.y, t), n);
  }
  queryRectangle(e, t, n) {
    return this.query(new pe(e.x, e.y, t.width, t.height), n);
  }
  subdivide() {
    const e = this.rectangle.position.x,
      t = this.rectangle.position.y,
      n = this.rectangle.size.width,
      s = this.rectangle.size.height,
      o = this.capacity;
    (this._NE = new Ye(new pe(e, t, n / 2, s / 2), o)),
      (this._NW = new Ye(new pe(e + n / 2, t, n / 2, s / 2), o)),
      (this._SE = new Ye(new pe(e, t + s / 2, n / 2, s / 2), o)),
      (this._SW = new Ye(new pe(e + n / 2, t + s / 2, n / 2, s / 2), o)),
      (this._divided = !0);
  }
}
class g2 {
  constructor(e, t) {
    (this.container = t),
      (this._engine = e),
      (this.nextId = 0),
      (this.array = []),
      (this.zArray = []),
      (this.pool = []),
      (this.limit = 0),
      (this.needsSort = !1),
      (this.lastZIndex = 0),
      (this.interactionManager = new p2(this._engine, t));
    const n = this.container.canvas.size;
    (this.quadTree = new Ye(
      new pe(
        -n.width / 4,
        -n.height / 4,
        (n.width * 3) / 2,
        (n.height * 3) / 2
      ),
      4
    )),
      (this.movers = this._engine.plugins.getMovers(t, !0)),
      (this.updaters = this._engine.plugins.getUpdaters(t, !0));
  }
  get count() {
    return this.array.length;
  }
  addManualParticles() {
    const e = this.container,
      t = e.actualOptions;
    for (const n of t.manualParticles)
      this.addParticle(
        Zd({ size: e.canvas.size, position: n.position }),
        n.options
      );
  }
  addParticle(e, t, n, s) {
    const o = this.container,
      r = o.actualOptions,
      a = r.particles.number.limit;
    if (a > 0) {
      const l = this.count + 1 - a;
      l > 0 && this.removeQuantity(l);
    }
    return this._pushParticle(e, t, n, s);
  }
  clear() {
    (this.array = []), (this.zArray = []);
  }
  destroy() {
    (this.array = []),
      (this.zArray = []),
      (this.movers = []),
      (this.updaters = []);
  }
  async draw(e) {
    const t = this.container,
      n = this.container.canvas.size;
    (this.quadTree = new Ye(
      new pe(
        -n.width / 4,
        -n.height / 4,
        (n.width * 3) / 2,
        (n.height * 3) / 2
      ),
      4
    )),
      t.canvas.clear(),
      await this.update(e),
      this.needsSort &&
        (this.zArray.sort((s, o) => o.position.z - s.position.z || s.id - o.id),
        (this.lastZIndex = this.zArray[this.zArray.length - 1].position.z),
        (this.needsSort = !1));
    for (const [, s] of t.plugins) t.canvas.drawPlugin(s, e);
    for (const s of this.zArray) s.draw(e);
  }
  handleClickMode(e) {
    this.interactionManager.handleClickMode(e);
  }
  init() {
    var e;
    const t = this.container,
      n = t.actualOptions;
    (this.lastZIndex = 0), (this.needsSort = !1);
    let s = !1;
    (this.updaters = this._engine.plugins.getUpdaters(t, !0)),
      this.interactionManager.init();
    for (const [, o] of t.plugins)
      if (
        (o.particlesInitialization !== void 0 &&
          (s = o.particlesInitialization()),
        s)
      )
        break;
    this.interactionManager.init();
    for (const [, o] of t.pathGenerators) o.init(t);
    if ((this.addManualParticles(), !s)) {
      for (const o in n.particles.groups) {
        const r = n.particles.groups[o];
        for (
          let a = this.count, l = 0;
          l < ((e = r.number) === null || e === void 0 ? void 0 : e.value) &&
          a < n.particles.number.value;
          a++, l++
        )
          this.addParticle(void 0, r, o);
      }
      for (let o = this.count; o < n.particles.number.value; o++)
        this.addParticle();
    }
  }
  push(e, t, n, s) {
    this.pushing = !0;
    for (let o = 0; o < e; o++)
      this.addParticle(t == null ? void 0 : t.position, n, s);
    this.pushing = !1;
  }
  async redraw() {
    this.clear(), this.init(), await this.draw({ value: 0, factor: 0 });
  }
  remove(e, t, n) {
    this.removeAt(this.array.indexOf(e), void 0, t, n);
  }
  removeAt(e, t = 1, n, s) {
    if (e < 0 || e > this.count) return;
    let o = 0;
    for (let r = e; o < t && r < this.count; r++) {
      const a = this.array[r];
      if (!a || a.group !== n) continue;
      a.destroy(s), this.array.splice(r--, 1);
      const l = this.zArray.indexOf(a);
      this.zArray.splice(l, 1),
        this.pool.push(a),
        o++,
        this._engine.dispatchEvent("particleRemoved", {
          container: this.container,
          data: { particle: a },
        });
    }
  }
  removeQuantity(e, t) {
    this.removeAt(0, e, t);
  }
  setDensity() {
    const e = this.container.actualOptions;
    for (const t in e.particles.groups)
      this._applyDensity(e.particles.groups[t], 0, t);
    this._applyDensity(e.particles, e.manualParticles.length);
  }
  async update(e) {
    var t, n;
    const s = this.container,
      o = [];
    for (const [, r] of s.pathGenerators) r.update();
    for (const [, r] of s.plugins)
      (t = r.update) === null || t === void 0 || t.call(r, e);
    for (const r of this.array) {
      const a = s.canvas.resizeFactor;
      a &&
        !r.ignoresResizeRatio &&
        ((r.position.x *= a.width),
        (r.position.y *= a.height),
        (r.initialPosition.x *= a.width),
        (r.initialPosition.y *= a.height)),
        (r.ignoresResizeRatio = !1),
        await this.interactionManager.reset(r);
      for (const [, l] of this.container.plugins) {
        if (r.destroyed) break;
        (n = l.particleUpdate) === null || n === void 0 || n.call(l, r, e);
      }
      for (const l of this.movers) l.isEnabled(r) && l.move(r, e);
      if (r.destroyed) {
        o.push(r);
        continue;
      }
      this.quadTree.insert(new m2(r.getPosition(), r));
    }
    for (const r of o) this.remove(r);
    await this.interactionManager.externalInteract(e);
    for (const r of this.array) {
      for (const a of this.updaters) a.update(r, e);
      !r.destroyed &&
        !r.spawning &&
        (await this.interactionManager.particlesInteract(r, e));
    }
    delete s.canvas.resizeFactor;
  }
  _applyDensity(e, t, n) {
    var s;
    if (!(!((s = e.number.density) === null || s === void 0) && s.enable))
      return;
    const o = e.number,
      r = this._initDensityFactor(o.density),
      a = o.value,
      l = o.limit > 0 ? o.limit : a,
      u = Math.min(a, l) * r + t,
      c = Math.min(this.count, this.array.filter((d) => d.group === n).length);
    (this.limit = o.limit * r),
      c < u
        ? this.push(Math.abs(u - c), void 0, e, n)
        : c > u && this.removeQuantity(c - u, n);
  }
  _initDensityFactor(e) {
    const t = this.container;
    if (!t.canvas.element || !e.enable) return 1;
    const n = t.canvas.element,
      s = t.retina.pixelRatio;
    return (n.width * n.height) / (e.factor * s ** 2 * e.area);
  }
  _pushParticle(e, t, n, s) {
    try {
      let o = this.pool.pop();
      o
        ? o.init(this.nextId, e, t, n)
        : (o = new v2(this._engine, this.nextId, this.container, e, t, n));
      let r = !0;
      return (
        s && (r = s(o)),
        r
          ? (this.array.push(o),
            this.zArray.push(o),
            this.nextId++,
            this._engine.dispatchEvent("particleAdded", {
              container: this.container,
              data: { particle: o },
            }),
            o)
          : void 0
      );
    } catch (o) {
      console.warn(`error adding particle: ${o}`);
      return;
    }
  }
}
class y2 {
  constructor(e) {
    this.container = e;
  }
  init() {
    const e = this.container,
      t = e.actualOptions;
    (this.pixelRatio = !t.detectRetina || Ke() ? 1 : window.devicePixelRatio),
      (this.reduceFactor = 1);
    const n = this.pixelRatio;
    if (e.canvas.element) {
      const o = e.canvas.element;
      (e.canvas.size.width = o.offsetWidth * n),
        (e.canvas.size.height = o.offsetHeight * n);
    }
    const s = t.particles;
    (this.attractDistance = R(s.move.attract.distance) * n),
      (this.sizeAnimationSpeed = R(s.size.animation.speed) * n),
      (this.maxSpeed = R(s.move.gravity.maxSpeed) * n);
  }
  initParticle(e) {
    const t = e.options,
      n = this.pixelRatio,
      s = t.move.distance,
      o = e.retina;
    (o.attractDistance = R(t.move.attract.distance) * n),
      (o.moveDrift = R(t.move.drift) * n),
      (o.moveSpeed = R(t.move.speed) * n),
      (o.sizeAnimationSpeed = R(t.size.animation.speed) * n);
    const r = o.maxDistance;
    (r.horizontal = s.horizontal !== void 0 ? s.horizontal * n : void 0),
      (r.vertical = s.vertical !== void 0 ? s.vertical * n : void 0),
      (o.maxSpeed = R(t.move.gravity.maxSpeed) * n);
  }
}
function ee(i) {
  return i && !i.destroyed;
}
function lt(i, e, ...t) {
  const n = new h2(i, e);
  return os(n, ...t), n;
}
const C2 = "default",
  Qi = {
    generate: (i) => {
      const e = i.velocity.copy();
      return (e.angle += (e.length * Math.PI) / 180), e;
    },
    init: () => {},
    update: () => {},
  };
class b2 {
  constructor(e, t, n) {
    (this.id = t),
      (this._engine = e),
      (this.fpsLimit = 120),
      (this.smooth = !1),
      (this._delay = 0),
      (this.duration = 0),
      (this.lifeTime = 0),
      (this._firstStart = !0),
      (this.started = !1),
      (this.destroyed = !1),
      (this._paused = !0),
      (this.lastFrameTime = 0),
      (this.zLayers = 100),
      (this.pageHidden = !1),
      (this._sourceOptions = n),
      (this._initialSourceOptions = n),
      (this.retina = new y2(this)),
      (this.canvas = new F0(this)),
      (this.particles = new g2(this._engine, this)),
      (this.frameManager = new k0(this)),
      (this.pathGenerators = new Map()),
      (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
      (this.plugins = new Map()),
      (this.drawers = new Map()),
      (this._options = lt(this._engine, this)),
      (this.actualOptions = lt(this._engine, this)),
      (this._eventListeners = new T0(this)),
      typeof IntersectionObserver < "u" &&
        IntersectionObserver &&
        (this._intersectionObserver = new IntersectionObserver((s) =>
          this._intersectionManager(s)
        )),
      this._engine.dispatchEvent("containerBuilt", { container: this });
  }
  get options() {
    return this._options;
  }
  get sourceOptions() {
    return this._sourceOptions;
  }
  addClickHandler(e) {
    if (!ee(this)) return;
    const t = this.interactivity.element;
    if (!t) return;
    const n = (d, f, p) => {
        if (!ee(this)) return;
        const h = this.retina.pixelRatio,
          g = { x: f.x * h, y: f.y * h },
          y = this.particles.quadTree.queryCircle(g, p * h);
        e(d, y);
      },
      s = (d) => {
        if (!ee(this)) return;
        const f = d,
          p = { x: f.offsetX || f.clientX, y: f.offsetY || f.clientY };
        n(d, p, 1);
      },
      o = () => {
        !ee(this) || ((u = !0), (c = !1));
      },
      r = () => {
        !ee(this) || (c = !0);
      },
      a = (d) => {
        if (!!ee(this)) {
          if (u && !c) {
            const f = d;
            let p = f.touches[f.touches.length - 1];
            if (!p && ((p = f.changedTouches[f.changedTouches.length - 1]), !p))
              return;
            const h = this.canvas.element,
              g = h ? h.getBoundingClientRect() : void 0,
              y = {
                x: p.clientX - (g ? g.left : 0),
                y: p.clientY - (g ? g.top : 0),
              };
            n(d, y, Math.max(p.radiusX, p.radiusY));
          }
          (u = !1), (c = !1);
        }
      },
      l = () => {
        !ee(this) || ((u = !1), (c = !1));
      };
    let u = !1,
      c = !1;
    t.addEventListener("click", s),
      t.addEventListener("touchstart", o),
      t.addEventListener("touchmove", r),
      t.addEventListener("touchend", a),
      t.addEventListener("touchcancel", l);
  }
  addPath(e, t, n = !1) {
    return !ee(this) || (!n && this.pathGenerators.has(e))
      ? !1
      : (this.pathGenerators.set(e, t != null ? t : Qi), !0);
  }
  destroy() {
    if (!ee(this)) return;
    this.stop(), this.particles.destroy(), this.canvas.destroy();
    for (const [, n] of this.drawers) n.destroy && n.destroy(this);
    for (const n of this.drawers.keys()) this.drawers.delete(n);
    this._engine.plugins.destroy(this), (this.destroyed = !0);
    const e = this._engine.dom(),
      t = e.findIndex((n) => n === this);
    t >= 0 && e.splice(t, 1),
      this._engine.dispatchEvent("containerDestroyed", { container: this });
  }
  draw(e) {
    if (!ee(this)) return;
    let t = e;
    this._drawAnimationFrame = e0()(async (n) => {
      t && ((this.lastFrameTime = void 0), (t = !1)),
        await this.frameManager.nextFrame(n);
    });
  }
  exportConfiguration() {
    return JSON.stringify(
      this.actualOptions,
      (e, t) => {
        if (!(e === "_engine" || e === "_container")) return t;
      },
      2
    );
  }
  exportImage(e, t, n) {
    const s = this.canvas.element;
    s && s.toBlob(e, t != null ? t : "image/png", n);
  }
  exportImg(e) {
    this.exportImage(e);
  }
  getAnimationStatus() {
    return !this._paused && !this.pageHidden && ee(this);
  }
  handleClickMode(e) {
    if (!!ee(this)) {
      this.particles.handleClickMode(e);
      for (const [, t] of this.plugins)
        t.handleClickMode && t.handleClickMode(e);
    }
  }
  async init() {
    if (!ee(this)) return;
    const e = this._engine.plugins.getSupportedShapes();
    for (const n of e) {
      const s = this._engine.plugins.getShapeDrawer(n);
      s && this.drawers.set(n, s);
    }
    (this._options = lt(
      this._engine,
      this,
      this._initialSourceOptions,
      this.sourceOptions
    )),
      (this.actualOptions = lt(this._engine, this, this._options));
    const t = this._engine.plugins.getAvailablePlugins(this);
    for (const [n, s] of t) this.plugins.set(n, s);
    this.retina.init(),
      this.canvas.init(),
      this.updateActualOptions(),
      this.canvas.initBackground(),
      this.canvas.resize(),
      (this.zLayers = this.actualOptions.zLayers),
      (this.duration = R(this.actualOptions.duration) * 1e3),
      (this._delay = R(this.actualOptions.delay) * 1e3),
      (this.lifeTime = 0),
      (this.fpsLimit =
        this.actualOptions.fpsLimit > 0 ? this.actualOptions.fpsLimit : 120),
      (this.smooth = this.actualOptions.smooth);
    for (const [, n] of this.drawers) n.init && (await n.init(this));
    for (const [, n] of this.plugins) n.init && (await n.init());
    this._engine.dispatchEvent("containerInit", { container: this }),
      this.particles.init(),
      this.particles.setDensity();
    for (const [, n] of this.plugins) n.particlesSetup && n.particlesSetup();
    this._engine.dispatchEvent("particlesSetup", { container: this });
  }
  async loadTheme(e) {
    !ee(this) || ((this._currentTheme = e), await this.refresh());
  }
  pause() {
    if (
      !!ee(this) &&
      (this._drawAnimationFrame !== void 0 &&
        (t0()(this._drawAnimationFrame), delete this._drawAnimationFrame),
      !this._paused)
    ) {
      for (const [, e] of this.plugins) e.pause && e.pause();
      this.pageHidden || (this._paused = !0),
        this._engine.dispatchEvent("containerPaused", { container: this });
    }
  }
  play(e) {
    if (!ee(this)) return;
    const t = this._paused || e;
    if (this._firstStart && !this.actualOptions.autoPlay) {
      this._firstStart = !1;
      return;
    }
    if ((this._paused && (this._paused = !1), t))
      for (const [, n] of this.plugins) n.play && n.play();
    this._engine.dispatchEvent("containerPlay", { container: this }),
      this.draw(t || !1);
  }
  async refresh() {
    if (!!ee(this)) return this.stop(), this.start();
  }
  async reset() {
    if (!!ee(this))
      return (this._options = lt(this._engine, this)), this.refresh();
  }
  setNoise(e, t, n) {
    !ee(this) || this.setPath(e, t, n);
  }
  setPath(e, t, n) {
    if (!e || !ee(this)) return;
    const s = Object.assign({}, Qi);
    if (typeof e == "function")
      (s.generate = e), t && (s.init = t), n && (s.update = n);
    else {
      const o = s;
      (s.generate = e.generate || o.generate),
        (s.init = e.init || o.init),
        (s.update = e.update || o.update);
    }
    this.addPath(C2, s, !0);
  }
  async start() {
    !ee(this) ||
      this.started ||
      (await this.init(),
      (this.started = !0),
      await new Promise((e) => {
        this._delayTimeout = setTimeout(async () => {
          this._eventListeners.addListeners(),
            this.interactivity.element instanceof HTMLElement &&
              this._intersectionObserver &&
              this._intersectionObserver.observe(this.interactivity.element);
          for (const [, t] of this.plugins) t.start && (await t.start());
          this._engine.dispatchEvent("containerStarted", { container: this }),
            this.play(),
            e();
        }, this._delay);
      }));
  }
  stop() {
    if (!(!ee(this) || !this.started)) {
      this._delayTimeout &&
        (clearTimeout(this._delayTimeout), delete this._delayTimeout),
        (this._firstStart = !0),
        (this.started = !1),
        this._eventListeners.removeListeners(),
        this.pause(),
        this.particles.clear(),
        this.canvas.clear(),
        this.interactivity.element instanceof HTMLElement &&
          this._intersectionObserver &&
          this._intersectionObserver.unobserve(this.interactivity.element);
      for (const [, e] of this.plugins) e.stop && e.stop();
      for (const e of this.plugins.keys()) this.plugins.delete(e);
      (this._sourceOptions = this._options),
        this._engine.dispatchEvent("containerStopped", { container: this });
    }
  }
  updateActualOptions() {
    this.actualOptions.responsive = [];
    const e = this.actualOptions.setResponsive(
      this.canvas.size.width,
      this.retina.pixelRatio,
      this._options
    );
    return (
      this.actualOptions.setTheme(this._currentTheme),
      this.responsiveMaxWidth === e ? !1 : ((this.responsiveMaxWidth = e), !0)
    );
  }
  _intersectionManager(e) {
    if (!(!ee(this) || !this.actualOptions.pauseOnOutsideViewport))
      for (const t of e)
        t.target === this.interactivity.element &&
          (t.isIntersecting ? this.play : this.pause)();
  }
}
function _2(i) {
  console.error(`tsParticles - Error ${i} while retrieving config file`);
}
async function w2(i, e) {
  const t = xe(i, e);
  if (!t) return;
  const n = await fetch(t);
  if (n.ok) return n.json();
  _2(n.status);
}
class E2 {
  constructor(e) {
    this._engine = e;
  }
  load(e, t, n) {
    const s = { index: n, remote: !1 };
    return (
      typeof e == "string" ? (s.tagId = e) : (s.options = e),
      typeof t == "number"
        ? (s.index = t)
        : (s.options = t != null ? t : s.options),
      this.loadOptions(s)
    );
  }
  async loadJSON(e, t, n) {
    let s, o;
    return (
      typeof t == "number" || t === void 0 ? (s = e) : ((o = e), (s = t)),
      this.loadRemoteOptions({ tagId: o, url: s, index: n, remote: !0 })
    );
  }
  async loadOptions(e) {
    var t, n, s;
    const o =
        (t = e.tagId) !== null && t !== void 0
          ? t
          : `tsparticles${Math.floor(j() * 1e4)}`,
      { index: r, url: a, remote: l } = e,
      u = l ? await w2(a, r) : e.options;
    let c =
      (n = e.element) !== null && n !== void 0 ? n : document.getElementById(o);
    c ||
      ((c = document.createElement("div")),
      (c.id = o),
      (s = document.querySelector("body")) === null ||
        s === void 0 ||
        s.append(c));
    const d = xe(u, r),
      f = this._engine.dom(),
      p = f.findIndex((y) => y.id === o);
    if (p >= 0) {
      const y = this._engine.domItem(p);
      y && !y.destroyed && (y.destroy(), f.splice(p, 1));
    }
    let h;
    if (c.tagName.toLowerCase() === "canvas")
      (h = c), (h.dataset[ct] = "false");
    else {
      const y = c.getElementsByTagName("canvas");
      y.length
        ? ((h = y[0]), (h.dataset[ct] = "false"))
        : ((h = document.createElement("canvas")),
          (h.dataset[ct] = "true"),
          c.appendChild(h));
    }
    h.style.width || (h.style.width = "100%"),
      h.style.height || (h.style.height = "100%");
    const g = new b2(this._engine, o, d);
    return (
      p >= 0 ? f.splice(p, 0, g) : f.push(g),
      g.canvas.loadCanvas(h),
      await g.start(),
      g
    );
  }
  async loadRemoteOptions(e) {
    return this.loadOptions(e);
  }
  async set(e, t, n, s) {
    const o = { index: s, remote: !1 };
    return (
      typeof e == "string" ? (o.tagId = e) : (o.element = e),
      t instanceof HTMLElement ? (o.element = t) : (o.options = t),
      typeof n == "number"
        ? (o.index = n)
        : (o.options = n != null ? n : o.options),
      this.loadOptions(o)
    );
  }
  async setJSON(e, t, n, s) {
    let o, r, a, l;
    return (
      e instanceof HTMLElement
        ? ((l = e), (o = t), (a = n))
        : ((r = e), (l = t), (o = n), (a = s)),
      this.loadRemoteOptions({
        tagId: r,
        url: o,
        index: a,
        element: l,
        remote: !0,
      })
    );
  }
}
function Kt(i, e, t, n = !1) {
  let s = e.get(i);
  return (!s || n) && ((s = [...t.values()].map((o) => o(i))), e.set(i, s)), s;
}
class x2 {
  constructor(e) {
    (this._engine = e),
      (this.plugins = []),
      (this._initializers = {
        interactors: new Map(),
        movers: new Map(),
        updaters: new Map(),
      }),
      (this.interactors = new Map()),
      (this.movers = new Map()),
      (this.updaters = new Map()),
      (this.presets = new Map()),
      (this.drawers = new Map()),
      (this.pathGenerators = new Map());
  }
  addInteractor(e, t) {
    this._initializers.interactors.set(e, t);
  }
  addParticleMover(e, t) {
    this._initializers.movers.set(e, t);
  }
  addParticleUpdater(e, t) {
    this._initializers.updaters.set(e, t);
  }
  addPathGenerator(e, t) {
    this.getPathGenerator(e) || this.pathGenerators.set(e, t);
  }
  addPlugin(e) {
    this.getPlugin(e.id) || this.plugins.push(e);
  }
  addPreset(e, t, n = !1) {
    (n || !this.getPreset(e)) && this.presets.set(e, t);
  }
  addShapeDrawer(e, t) {
    this.getShapeDrawer(e) || this.drawers.set(e, t);
  }
  destroy(e) {
    this.updaters.delete(e), this.movers.delete(e), this.interactors.delete(e);
  }
  getAvailablePlugins(e) {
    const t = new Map();
    for (const n of this.plugins)
      !n.needsPlugin(e.actualOptions) || t.set(n.id, n.getPlugin(e));
    return t;
  }
  getInteractors(e, t = !1) {
    return Kt(e, this.interactors, this._initializers.interactors, t);
  }
  getMovers(e, t = !1) {
    return Kt(e, this.movers, this._initializers.movers, t);
  }
  getPathGenerator(e) {
    return this.pathGenerators.get(e);
  }
  getPlugin(e) {
    return this.plugins.find((t) => t.id === e);
  }
  getPreset(e) {
    return this.presets.get(e);
  }
  getShapeDrawer(e) {
    return this.drawers.get(e);
  }
  getSupportedShapes() {
    return this.drawers.keys();
  }
  getUpdaters(e, t = !1) {
    return Kt(e, this.updaters, this._initializers.updaters, t);
  }
  loadOptions(e, t) {
    for (const n of this.plugins) n.loadOptions(e, t);
  }
  loadParticlesOptions(e, t, ...n) {
    const s = this.updaters.get(e);
    if (!!s) for (const o of s) o.loadOptions && o.loadOptions(t, ...n);
  }
}
class S2 {
  constructor() {
    (this._domArray = []),
      (this._eventDispatcher = new Ud()),
      (this._initialized = !1),
      (this._loader = new E2(this)),
      (this.plugins = new x2(this));
  }
  addEventListener(e, t) {
    this._eventDispatcher.addEventListener(e, t);
  }
  async addInteractor(e, t) {
    this.plugins.addInteractor(e, t), await this.refresh();
  }
  async addMover(e, t) {
    this.plugins.addParticleMover(e, t), await this.refresh();
  }
  async addParticleUpdater(e, t) {
    this.plugins.addParticleUpdater(e, t), await this.refresh();
  }
  async addPathGenerator(e, t) {
    this.plugins.addPathGenerator(e, t), await this.refresh();
  }
  async addPlugin(e) {
    this.plugins.addPlugin(e), await this.refresh();
  }
  async addPreset(e, t, n = !1) {
    this.plugins.addPreset(e, t, n), await this.refresh();
  }
  async addShape(e, t, n, s, o) {
    let r;
    typeof t == "function"
      ? (r = { afterEffect: s, destroy: o, draw: t, init: n })
      : (r = t),
      this.plugins.addShapeDrawer(e, r),
      await this.refresh();
  }
  dispatchEvent(e, t) {
    this._eventDispatcher.dispatchEvent(e, t);
  }
  dom() {
    return this._domArray;
  }
  domItem(e) {
    const t = this.dom(),
      n = t[e];
    if (n && !n.destroyed) return n;
    t.splice(e, 1);
  }
  init() {
    this._initialized || (this._initialized = !0);
  }
  async load(e, t) {
    return this._loader.load(e, t);
  }
  async loadFromArray(e, t, n) {
    return this._loader.load(e, t, n);
  }
  async loadJSON(e, t, n) {
    return this._loader.loadJSON(e, t, n);
  }
  async refresh() {
    for (const e of this.dom()) await e.refresh();
  }
  removeEventListener(e, t) {
    this._eventDispatcher.removeEventListener(e, t);
  }
  async set(e, t, n) {
    return this._loader.set(e, t, n);
  }
  async setJSON(e, t, n, s) {
    return this._loader.setJSON(e, t, n, s);
  }
  setOnClickHandler(e) {
    const t = this.dom();
    if (!t.length)
      throw new Error(
        "Can only set click handlers after calling tsParticles.load() or tsParticles.loadJSON()"
      );
    for (const n of t) n.addClickHandler(e);
  }
}
class F2 {
  constructor() {
    (this.key = "hsl"), (this.stringPrefix = "hsl");
  }
  handleColor(e) {
    var t;
    const n = e.value,
      s = (t = n.hsl) !== null && t !== void 0 ? t : e.value;
    if (s.h !== void 0 && s.l !== void 0) return it(s);
  }
  handleRangeColor(e) {
    var t;
    const n = e.value,
      s = (t = n.hsl) !== null && t !== void 0 ? t : e.value;
    if (s.h !== void 0 && s.l !== void 0)
      return it({ h: R(s.h), l: R(s.l), s: R(s.s) });
  }
  parseString(e) {
    if (!e.startsWith("hsl")) return;
    const t =
        /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i,
      n = t.exec(e);
    return n
      ? l0({
          a: n.length > 4 ? qn(n[5]) : 1,
          h: parseInt(n[1], 10),
          l: parseInt(n[3], 10),
          s: parseInt(n[2], 10),
        })
      : void 0;
  }
}
class T2 {
  constructor() {
    (this.key = "rgb"), (this.stringPrefix = "rgb");
  }
  handleColor(e) {
    var t;
    const n = e.value,
      s = (t = n.rgb) !== null && t !== void 0 ? t : e.value;
    if (s.r !== void 0) return s;
  }
  handleRangeColor(e) {
    var t;
    const n = e.value,
      s = (t = n.rgb) !== null && t !== void 0 ? t : e.value;
    if (s.r !== void 0) return { r: R(s.r), g: R(s.g), b: R(s.b) };
  }
  parseString(e) {
    if (!e.startsWith(this.stringPrefix)) return;
    const t =
        /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i,
      n = t.exec(e);
    return n
      ? {
          a: n.length > 4 ? qn(n[5]) : 1,
          b: parseInt(n[3], 10),
          g: parseInt(n[2], 10),
          r: parseInt(n[1], 10),
        }
      : void 0;
  }
}
class Ae {
  constructor(e) {
    (this.container = e), (this.type = 0);
  }
}
class _i {
  constructor(e) {
    (this.container = e), (this.type = 1);
  }
}
const B2 = new T2(),
  k2 = new F2();
Zn(B2);
Zn(k2);
const D2 = new S2();
D2.init();
class A2 {
  constructor() {
    (this.radius = 0), (this.mass = 0);
  }
  load(e) {
    !e ||
      (e.mass !== void 0 && (this.mass = e.mass),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
class M2 extends Fe {
  constructor() {
    super(), (this.density = 5), (this.value = 50), (this.limit = new A2());
  }
  load(e) {
    !e ||
      (super.load(e),
      e.density !== void 0 && (this.density = e.density),
      typeof e.limit == "number"
        ? (this.limit.radius = e.limit)
        : this.limit.load(e.limit));
  }
}
class Ft {
  constructor() {
    (this.color = new ie()),
      (this.color.value = "#000000"),
      (this.draggable = !1),
      (this.opacity = 1),
      (this.destroy = !0),
      (this.orbits = !1),
      (this.size = new M2());
  }
  load(e) {
    e !== void 0 &&
      (e.color !== void 0 && (this.color = ie.create(this.color, e.color)),
      e.draggable !== void 0 && (this.draggable = e.draggable),
      (this.name = e.name),
      e.opacity !== void 0 && (this.opacity = e.opacity),
      e.position !== void 0 &&
        ((this.position = {}),
        e.position.x !== void 0 && (this.position.x = H(e.position.x)),
        e.position.y !== void 0 && (this.position.y = H(e.position.y))),
      e.size !== void 0 && this.size.load(e.size),
      e.destroy !== void 0 && (this.destroy = e.destroy),
      e.orbits !== void 0 && (this.orbits = e.orbits));
  }
}
class P2 {
  constructor(e, t, n, s) {
    var o, r, a;
    (this.absorbers = e),
      (this.container = t),
      (this.initialPosition = s ? Z.create(s.x, s.y) : void 0),
      n instanceof Ft
        ? (this.options = n)
        : ((this.options = new Ft()), this.options.load(n)),
      (this.dragging = !1),
      (this.name = this.options.name),
      (this.opacity = this.options.opacity),
      (this.size = R(this.options.size.value) * t.retina.pixelRatio),
      (this.mass =
        this.size * this.options.size.density * t.retina.reduceFactor);
    const l = this.options.size.limit;
    (this.limit = {
      radius: l.radius * t.retina.pixelRatio * t.retina.reduceFactor,
      mass: l.mass,
    }),
      (this.color =
        (o = Se(this.options.color)) !== null && o !== void 0
          ? o
          : { b: 0, g: 0, r: 0 }),
      (this.position =
        (a =
          (r = this.initialPosition) === null || r === void 0
            ? void 0
            : r.copy()) !== null && a !== void 0
          ? a
          : this.calcPosition());
  }
  attract(e) {
    const t = this.container,
      n = this.options;
    if (n.draggable) {
      const u = t.interactivity.mouse;
      u.clicking && u.downPosition
        ? oe(this.position, u.downPosition) <= this.size && (this.dragging = !0)
        : (this.dragging = !1),
        this.dragging &&
          u.position &&
          ((this.position.x = u.position.x), (this.position.y = u.position.y));
    }
    const s = e.getPosition(),
      { dx: o, dy: r, distance: a } = de(this.position, s),
      l = Z.create(o, r);
    if (
      ((l.length = (this.mass / Math.pow(a, 2)) * t.retina.reduceFactor),
      a < this.size + e.getRadius())
    ) {
      const u = e.getRadius() * 0.033 * t.retina.pixelRatio;
      (this.size > e.getRadius() && a < this.size - e.getRadius()) ||
      (e.absorberOrbit !== void 0 && e.absorberOrbit.length < 0)
        ? n.destroy
          ? e.destroy()
          : ((e.needsNewPosition = !0), this.updateParticlePosition(e, l))
        : (n.destroy && (e.size.value -= u), this.updateParticlePosition(e, l)),
        (this.limit.radius <= 0 || this.size < this.limit.radius) &&
          (this.size += u),
        (this.limit.mass <= 0 || this.mass < this.limit.mass) &&
          (this.mass += u * this.options.size.density * t.retina.reduceFactor);
    } else this.updateParticlePosition(e, l);
  }
  draw(e) {
    e.translate(this.position.x, this.position.y),
      e.beginPath(),
      e.arc(0, 0, this.size, 0, Math.PI * 2, !1),
      e.closePath(),
      (e.fillStyle = Ie(this.color, this.opacity)),
      e.fill();
  }
  resize() {
    const e = this.initialPosition;
    this.position =
      e && mt(e, this.container.canvas.size, Z.origin)
        ? e
        : this.calcPosition();
  }
  calcPosition() {
    const e = jn({
      size: this.container.canvas.size,
      position: this.options.position,
    });
    return Z.create(e.x, e.y);
  }
  updateParticlePosition(e, t) {
    var n;
    if (e.destroyed) return;
    const s = this.container,
      o = s.canvas.size;
    if (e.needsNewPosition) {
      const r = Vn({ size: o });
      e.position.setTo(r),
        e.velocity.setTo(e.initialVelocity),
        (e.absorberOrbit = void 0),
        (e.needsNewPosition = !1);
    }
    if (this.options.orbits) {
      if (
        (e.absorberOrbit === void 0 &&
          ((e.absorberOrbit = Z.create(0, 0)),
          (e.absorberOrbit.length = oe(e.getPosition(), this.position)),
          (e.absorberOrbit.angle = j() * Math.PI * 2)),
        e.absorberOrbit.length <= this.size && !this.options.destroy)
      ) {
        const c = Math.min(o.width, o.height);
        e.absorberOrbit.length = c * (1 + (j() * 0.2 - 0.1));
      }
      e.absorberOrbitDirection === void 0 &&
        (e.absorberOrbitDirection =
          e.velocity.x >= 0 ? "clockwise" : "counter-clockwise");
      const r = e.absorberOrbit.length,
        a = e.absorberOrbit.angle,
        l = e.absorberOrbitDirection;
      e.velocity.setTo(Z.origin);
      const u = {
        x: l === "clockwise" ? Math.cos : Math.sin,
        y: l === "clockwise" ? Math.sin : Math.cos,
      };
      (e.position.x = this.position.x + r * u.x(a)),
        (e.position.y = this.position.y + r * u.y(a)),
        (e.absorberOrbit.length -= t.length),
        (e.absorberOrbit.angle +=
          ((((n = e.retina.moveSpeed) !== null && n !== void 0 ? n : 0) *
            s.retina.pixelRatio) /
            100) *
          s.retina.reduceFactor);
    } else {
      const r = Z.origin;
      (r.length = t.length), (r.angle = t.angle), e.velocity.addTo(r);
    }
  }
}
class O2 {
  constructor(e) {
    (this.container = e),
      (this.array = []),
      (this.absorbers = []),
      (this.interactivityAbsorbers = []),
      (e.getAbsorber = (t) =>
        t === void 0 || typeof t == "number"
          ? this.array[t || 0]
          : this.array.find((n) => n.name === t)),
      (e.addAbsorber = (t, n) => this.addAbsorber(t, n));
  }
  addAbsorber(e, t) {
    const n = new P2(this, this.container, e, t);
    return this.array.push(n), n;
  }
  draw(e) {
    for (const t of this.array) t.draw(e);
  }
  handleClickMode(e) {
    const t = this.absorbers,
      n = this.interactivityAbsorbers;
    if (e === "absorber") {
      const s = xe(n),
        o = s != null ? s : xe(t),
        r = this.container.interactivity.mouse.clickPosition;
      this.addAbsorber(o, r);
    }
  }
  async init() {
    (this.absorbers = this.container.actualOptions.absorbers),
      (this.interactivityAbsorbers =
        this.container.actualOptions.interactivity.modes.absorbers),
      J(this.absorbers, (e) => {
        this.addAbsorber(e);
      });
  }
  particleUpdate(e) {
    for (const t of this.array) if ((t.attract(e), e.destroyed)) break;
  }
  removeAbsorber(e) {
    const t = this.array.indexOf(e);
    t >= 0 && this.array.splice(t, 1);
  }
  resize() {
    for (const e of this.array) e.resize();
  }
  stop() {
    this.array = [];
  }
}
class L2 {
  constructor() {
    this.id = "absorbers";
  }
  getPlugin(e) {
    return new O2(e);
  }
  loadOptions(e, t) {
    var n, s;
    (!this.needsPlugin(e) && !this.needsPlugin(t)) ||
      (t != null &&
        t.absorbers &&
        (e.absorbers = J(t.absorbers, (o) => {
          const r = new Ft();
          return r.load(o), r;
        })),
      (e.interactivity.modes.absorbers = J(
        (s =
          (n = t == null ? void 0 : t.interactivity) === null || n === void 0
            ? void 0
            : n.modes) === null || s === void 0
          ? void 0
          : s.absorbers,
        (o) => {
          const r = new Ft();
          return r.load(o), r;
        }
      )));
  }
  needsPlugin(e) {
    var t, n, s;
    if (!e) return !1;
    const o = e.absorbers;
    return o instanceof Array
      ? !!o.length
      : o
      ? !0
      : !!(
          ((s =
            (n =
              (t = e.interactivity) === null || t === void 0
                ? void 0
                : t.events) === null || n === void 0
              ? void 0
              : n.onClick) === null || s === void 0
            ? void 0
            : s.mode) && K("absorber", e.interactivity.events.onClick.mode)
        );
  }
}
async function z2(i) {
  const e = new L2();
  await i.addPlugin(e);
}
class I2 {
  load(e) {
    !e ||
      (e.bottom !== void 0 && (this.bottom = H(e.bottom)),
      e.left !== void 0 && (this.left = H(e.left)),
      e.right !== void 0 && (this.right = H(e.right)),
      e.top !== void 0 && (this.top = H(e.top)));
  }
}
class R2 extends Fe {
  constructor() {
    super(), (this.value = 3);
  }
}
class $2 extends Fe {
  constructor() {
    super(), (this.value = { min: 4, max: 9 });
  }
}
class N2 {
  constructor() {
    (this.count = 1),
      (this.factor = new R2()),
      (this.rate = new $2()),
      (this.sizeOffset = !0);
  }
  load(e) {
    !e ||
      (e.count !== void 0 && (this.count = e.count),
      this.factor.load(e.factor),
      this.rate.load(e.rate),
      (this.particles = J(e.particles, (t) => ne({}, t))),
      e.sizeOffset !== void 0 && (this.sizeOffset = e.sizeOffset));
  }
}
class H2 {
  constructor() {
    (this.bounds = new I2()), (this.mode = "none"), (this.split = new N2());
  }
  load(e) {
    !e ||
      (e.mode && (this.mode = e.mode),
      e.bounds && this.bounds.load(e.bounds),
      this.split.load(e.split));
  }
}
class V2 {
  constructor(e, t) {
    (this.engine = e), (this.container = t);
  }
  init(e) {
    const t = this.container,
      n = e.options,
      s = n.destroy;
    if (!s) return;
    e.splitCount = 0;
    const o = s.bounds;
    e.destroyBounds || (e.destroyBounds = {}),
      o.bottom &&
        (e.destroyBounds.bottom = (R(o.bottom) * t.canvas.size.height) / 100),
      o.left &&
        (e.destroyBounds.left = (R(o.left) * t.canvas.size.width) / 100),
      o.right &&
        (e.destroyBounds.right = (R(o.right) * t.canvas.size.width) / 100),
      o.top && (e.destroyBounds.top = (R(o.top) * t.canvas.size.height) / 100);
  }
  isEnabled(e) {
    return !e.destroyed;
  }
  loadOptions(e, ...t) {
    e.destroy || (e.destroy = new H2());
    for (const n of t) e.destroy.load(n == null ? void 0 : n.destroy);
  }
  particleDestroyed(e, t) {
    if (t) return;
    const n = e.options.destroy;
    n && n.mode === "split" && this.split(e);
  }
  update(e) {
    if (!this.isEnabled(e)) return;
    const t = e.getPosition(),
      n = e.destroyBounds;
    !n ||
      (((n.bottom !== void 0 && t.y >= n.bottom) ||
        (n.left !== void 0 && t.x <= n.left) ||
        (n.right !== void 0 && t.x >= n.right) ||
        (n.top !== void 0 && t.y <= n.top)) &&
        e.destroy());
  }
  addSplitParticle(e, t) {
    const n = e.options.destroy;
    if (!n) return;
    const s = n.split,
      o = bi(this.engine, this.container, e.options),
      r = Ne(s.factor);
    o.color.load({ value: { hsl: e.getFillColor() } }),
      o.move.load({
        center: { x: e.position.x, y: e.position.y, mode: "precise" },
      }),
      typeof o.size.value == "number"
        ? (o.size.value /= r)
        : ((o.size.value.min /= r), (o.size.value.max /= r)),
      o.load(t);
    const a = s.sizeOffset ? H(-e.size.value, e.size.value) : 0,
      l = { x: e.position.x + se(a), y: e.position.y + se(a) };
    return this.container.particles.addParticle(l, o, e.group, (u) => {
      var c;
      return u.size.value < 0.5
        ? !1
        : ((u.velocity.length = se(H(e.velocity.length, u.velocity.length))),
          (u.splitCount =
            ((c = e.splitCount) !== null && c !== void 0 ? c : 0) + 1),
          (u.unbreakable = !0),
          setTimeout(() => {
            u.unbreakable = !1;
          }, 500),
          !0);
    });
  }
  split(e) {
    const t = e.options.destroy;
    if (!t) return;
    const n = t.split;
    if (n.count >= 0 && (e.splitCount === void 0 || e.splitCount++ > n.count))
      return;
    const s = Ne(n.rate),
      o = xe(n.particles);
    for (let r = 0; r < s; r++) this.addSplitParticle(e, o);
  }
}
async function j2(i) {
  await i.addParticleUpdater("destroy", (e) => new V2(i, e));
}
class q2 {
  randomPosition(e, t, n) {
    const s = (d, f) => {
        const p = j() / 4,
          h = Math.atan((f / d) * Math.tan(2 * Math.PI * p)),
          g = j();
        return g < 0.25
          ? h
          : g < 0.5
          ? Math.PI - h
          : g < 0.75
          ? Math.PI + h
          : -h;
      },
      o = (d, f, p) =>
        (d * f) / Math.sqrt((f * Math.cos(p)) ** 2 + (d * Math.sin(p)) ** 2),
      [r, a] = [t.width / 2, t.height / 2],
      l = s(r, a),
      u = o(r, a, l),
      c = n ? u * Math.sqrt(j()) : u;
    return { x: e.x + c * Math.cos(l), y: e.y + c * Math.sin(l) };
  }
}
class U2 {
  constructor() {
    this.wait = !1;
  }
  load(e) {
    e !== void 0 &&
      (e.count !== void 0 && (this.count = e.count),
      e.delay !== void 0 && (this.delay = e.delay),
      e.duration !== void 0 && (this.duration = e.duration),
      e.wait !== void 0 && (this.wait = e.wait));
  }
}
class G2 {
  constructor() {
    (this.quantity = 1), (this.delay = 0.1);
  }
  load(e) {
    e !== void 0 &&
      (e.quantity !== void 0 && (this.quantity = H(e.quantity)),
      e.delay !== void 0 && (this.delay = H(e.delay)));
  }
}
class as {
  constructor() {
    (this.mode = "percent"), (this.height = 0), (this.width = 0);
  }
  load(e) {
    e !== void 0 &&
      (e.mode !== void 0 && (this.mode = e.mode),
      e.height !== void 0 && (this.height = e.height),
      e.width !== void 0 && (this.width = e.width));
  }
}
class He {
  constructor() {
    (this.autoPlay = !0),
      (this.fill = !0),
      (this.life = new U2()),
      (this.rate = new G2()),
      (this.shape = "square"),
      (this.startCount = 0);
  }
  load(e) {
    e !== void 0 &&
      (e.autoPlay !== void 0 && (this.autoPlay = e.autoPlay),
      e.size !== void 0 &&
        (this.size === void 0 && (this.size = new as()),
        this.size.load(e.size)),
      e.direction !== void 0 && (this.direction = e.direction),
      (this.domId = e.domId),
      e.fill !== void 0 && (this.fill = e.fill),
      this.life.load(e.life),
      (this.name = e.name),
      (this.particles = J(e.particles, (t) => ne({}, t))),
      this.rate.load(e.rate),
      e.shape !== void 0 && (this.shape = e.shape),
      e.position !== void 0 &&
        ((this.position = {}),
        e.position.x !== void 0 && (this.position.x = H(e.position.x)),
        e.position.y !== void 0 && (this.position.y = H(e.position.y))),
      e.spawnColor !== void 0 &&
        (this.spawnColor === void 0 && (this.spawnColor = new st()),
        this.spawnColor.load(e.spawnColor)),
      e.startCount !== void 0 && (this.startCount = e.startCount));
  }
}
class W2 {
  constructor(e, t, n, s, o) {
    var r, a, l, u, c, d, f, p;
    (this.emitters = t),
      (this.container = n),
      (this._engine = e),
      (this._currentDuration = 0),
      (this._currentEmitDelay = 0),
      (this._currentSpawnDelay = 0),
      (this._initialPosition = o),
      s instanceof He
        ? (this.options = s)
        : ((this.options = new He()), this.options.load(s)),
      (this._spawnDelay =
        (((r = this.options.life.delay) !== null && r !== void 0 ? r : 0) *
          1e3) /
        this.container.retina.reduceFactor),
      (this.position =
        (a = this._initialPosition) !== null && a !== void 0
          ? a
          : this.calcPosition()),
      (this.name = this.options.name),
      (this._shape =
        (l = this._engine.emitterShapeManager) === null || l === void 0
          ? void 0
          : l.getShape(this.options.shape)),
      (this.fill = this.options.fill),
      (this._firstSpawn = !this.options.life.wait),
      (this._startParticlesAdded = !1);
    let h = ne({}, this.options.particles);
    h != null || (h = {}),
      ((u = h.move) !== null && u !== void 0) || (h.move = {}),
      ((c = (p = h.move).direction) !== null && c !== void 0) ||
        (p.direction = this.options.direction),
      this.options.spawnColor &&
        (this.spawnColor = qe(this.options.spawnColor)),
      (this._paused = !this.options.autoPlay),
      (this._particlesOptions = h),
      (this.size =
        (d = this.options.size) !== null && d !== void 0
          ? d
          : (() => {
              const g = new as();
              return g.load({ height: 0, mode: "percent", width: 0 }), g;
            })()),
      (this._lifeCount =
        (f = this.options.life.count) !== null && f !== void 0 ? f : -1),
      (this._immortal = this._lifeCount <= 0),
      this._engine.dispatchEvent("emitterCreated", {
        container: n,
        data: { emitter: this },
      }),
      this.play();
  }
  externalPause() {
    (this._paused = !0), this.pause();
  }
  externalPlay() {
    (this._paused = !1), this.play();
  }
  getPosition() {
    if (this.options.domId) {
      const e = this.container,
        t = document.getElementById(this.options.domId);
      if (t) {
        const n = t.getBoundingClientRect();
        return {
          x: (n.x + n.width / 2) * e.retina.pixelRatio,
          y: (n.y + n.height / 2) * e.retina.pixelRatio,
        };
      }
    }
    return this.position;
  }
  getSize() {
    const e = this.container;
    if (this.options.domId) {
      const t = document.getElementById(this.options.domId);
      if (t) {
        const n = t.getBoundingClientRect();
        return {
          width: n.width * e.retina.pixelRatio,
          height: n.height * e.retina.pixelRatio,
        };
      }
    }
    return {
      width:
        this.size.mode === "percent"
          ? (e.canvas.size.width * this.size.width) / 100
          : this.size.width,
      height:
        this.size.mode === "percent"
          ? (e.canvas.size.height * this.size.height) / 100
          : this.size.height,
    };
  }
  pause() {
    this._paused || delete this._emitDelay;
  }
  play() {
    var e;
    if (
      !this._paused &&
      !!(
        this.container.retina.reduceFactor &&
        (this._lifeCount > 0 || this._immortal || !this.options.life.count) &&
        (this._firstSpawn ||
          this._currentSpawnDelay >=
            ((e = this._spawnDelay) !== null && e !== void 0 ? e : 0))
      )
    ) {
      if (this._emitDelay === void 0) {
        const t = R(this.options.rate.delay);
        this._emitDelay = (1e3 * t) / this.container.retina.reduceFactor;
      }
      (this._lifeCount > 0 || this._immortal) && this.prepareToDie();
    }
  }
  resize() {
    const e = this._initialPosition;
    this.position =
      e && mt(e, this.container.canvas.size, Z.origin)
        ? e
        : this.calcPosition();
  }
  update(e) {
    var t, n, s;
    this._paused ||
      (this._firstSpawn &&
        ((this._firstSpawn = !1),
        (this._currentSpawnDelay =
          (t = this._spawnDelay) !== null && t !== void 0 ? t : 0),
        (this._currentEmitDelay =
          (n = this._emitDelay) !== null && n !== void 0 ? n : 0)),
      this._startParticlesAdded ||
        ((this._startParticlesAdded = !0),
        this.emitParticles(this.options.startCount)),
      this._duration !== void 0 &&
        ((this._currentDuration += e.value),
        this._currentDuration >= this._duration &&
          (this.pause(),
          this._spawnDelay !== void 0 && delete this._spawnDelay,
          this._immortal || this._lifeCount--,
          this._lifeCount > 0 || this._immortal
            ? ((this.position = this.calcPosition()),
              (this._spawnDelay =
                (((s = this.options.life.delay) !== null && s !== void 0
                  ? s
                  : 0) *
                  1e3) /
                this.container.retina.reduceFactor))
            : this.destroy(),
          (this._currentDuration -= this._duration),
          delete this._duration)),
      this._spawnDelay !== void 0 &&
        ((this._currentSpawnDelay += e.value),
        this._currentSpawnDelay >= this._spawnDelay &&
          (this._engine.dispatchEvent("emitterPlay", {
            container: this.container,
          }),
          this.play(),
          (this._currentSpawnDelay -= this._currentSpawnDelay),
          delete this._spawnDelay)),
      this._emitDelay !== void 0 &&
        ((this._currentEmitDelay += e.value),
        this._currentEmitDelay >= this._emitDelay &&
          (this.emit(), (this._currentEmitDelay -= this._emitDelay))));
  }
  calcPosition() {
    return jn({
      size: this.container.canvas.size,
      position: this.options.position,
    });
  }
  destroy() {
    this.emitters.removeEmitter(this),
      this._engine.dispatchEvent("emitterDestroyed", {
        container: this.container,
        data: { emitter: this },
      });
  }
  emit() {
    if (this._paused) return;
    const e = R(this.options.rate.quantity);
    this.emitParticles(e);
  }
  emitParticles(e) {
    var t, n, s;
    const o = this.getPosition(),
      r = this.getSize(),
      a = xe(this._particlesOptions);
    for (let l = 0; l < e; l++) {
      const u = ne({}, a);
      if (this.spawnColor) {
        const d =
          (t = this.options.spawnColor) === null || t === void 0
            ? void 0
            : t.animation;
        d &&
          ((this.spawnColor.h = this.setColorAnimation(
            d.h,
            this.spawnColor.h,
            360
          )),
          (this.spawnColor.s = this.setColorAnimation(
            d.s,
            this.spawnColor.s,
            100
          )),
          (this.spawnColor.l = this.setColorAnimation(
            d.l,
            this.spawnColor.l,
            100
          ))),
          u.color
            ? (u.color.value = this.spawnColor)
            : (u.color = { value: this.spawnColor });
      }
      if (!o) return;
      const c =
        (s =
          (n = this._shape) === null || n === void 0
            ? void 0
            : n.randomPosition(o, r, this.fill)) !== null && s !== void 0
          ? s
          : o;
      this.container.particles.addParticle(c, u);
    }
  }
  prepareToDie() {
    var e;
    if (this._paused) return;
    const t =
      (e = this.options.life) === null || e === void 0 ? void 0 : e.duration;
    this.container.retina.reduceFactor &&
      (this._lifeCount > 0 || this._immortal) &&
      t !== void 0 &&
      t > 0 &&
      (this._duration = t * 1e3);
  }
  setColorAnimation(e, t, n) {
    var s;
    const o = this.container;
    if (!e.enable) return t;
    const r = se(e.offset),
      a = R(this.options.rate.delay),
      l = (1e3 * a) / o.retina.reduceFactor,
      u = R((s = e.speed) !== null && s !== void 0 ? s : 0);
    return (t + (u * o.fpsLimit) / l + r * 3.6) % n;
  }
}
class X2 {
  constructor(e, t) {
    (this.container = t),
      (this._engine = e),
      (this.array = []),
      (this.emitters = []),
      (this.interactivityEmitters = {
        random: { count: 1, enable: !1 },
        value: [],
      }),
      (t.getEmitter = (n) =>
        n === void 0 || typeof n == "number"
          ? this.array[n || 0]
          : this.array.find((s) => s.name === n)),
      (t.addEmitter = (n, s) => this.addEmitter(n, s)),
      (t.removeEmitter = (n) => {
        const s = t.getEmitter(n);
        s && this.removeEmitter(s);
      }),
      (t.playEmitter = (n) => {
        const s = t.getEmitter(n);
        s && s.externalPlay();
      }),
      (t.pauseEmitter = (n) => {
        const s = t.getEmitter(n);
        s && s.externalPause();
      });
  }
  addEmitter(e, t) {
    const n = new He();
    n.load(e);
    const s = new W2(this._engine, this, this.container, n, t);
    return this.array.push(s), s;
  }
  handleClickMode(e) {
    const t = this.emitters,
      n = this.interactivityEmitters;
    if (e === "emitter") {
      let s;
      if (n && n.value instanceof Array)
        if (n.value.length > 0 && n.random.enable) {
          s = [];
          const a = [];
          for (let l = 0; l < n.random.count; l++) {
            const u = Gn(n.value);
            if (a.includes(u) && a.length < n.value.length) {
              l--;
              continue;
            }
            a.push(u), s.push(vt(n.value, u));
          }
        } else s = n.value;
      else s = n == null ? void 0 : n.value;
      const o = s != null ? s : t,
        r = this.container.interactivity.mouse.clickPosition;
      J(o, (a) => {
        this.addEmitter(a, r);
      });
    }
  }
  async init() {
    if (
      ((this.emitters = this.container.actualOptions.emitters),
      (this.interactivityEmitters =
        this.container.actualOptions.interactivity.modes.emitters),
      this.emitters instanceof Array)
    )
      for (const e of this.emitters) this.addEmitter(e);
    else this.addEmitter(this.emitters);
  }
  pause() {
    for (const e of this.array) e.pause();
  }
  play() {
    for (const e of this.array) e.play();
  }
  removeEmitter(e) {
    const t = this.array.indexOf(e);
    t >= 0 && this.array.splice(t, 1);
  }
  resize() {
    for (const e of this.array) e.resize();
  }
  stop() {
    this.array = [];
  }
  update(e) {
    for (const t of this.array) t.update(e);
  }
}
const Jt = new Map();
class Y2 {
  constructor(e) {
    this._engine = e;
  }
  addShape(e, t) {
    this.getShape(e) || Jt.set(e, t);
  }
  getShape(e) {
    return Jt.get(e);
  }
  getSupportedShapes() {
    return Jt.keys();
  }
}
function en(i, e) {
  return i + e * (j() - 0.5);
}
class Z2 {
  randomPosition(e, t, n) {
    if (n) return { x: en(e.x, t.width), y: en(e.y, t.height) };
    {
      const s = t.width / 2,
        o = t.height / 2,
        r = Math.floor(j() * 4),
        a = (j() - 0.5) * 2;
      switch (r) {
        case 0:
          return { x: e.x + a * s, y: e.y - o };
        case 1:
          return { x: e.x - s, y: e.y + a * o };
        case 2:
          return { x: e.x + a * s, y: e.y + o };
        case 3:
        default:
          return { x: e.x + s, y: e.y + a * o };
      }
    }
  }
}
class K2 {
  constructor(e) {
    (this._engine = e), (this.id = "emitters");
  }
  getPlugin(e) {
    return new X2(this._engine, e);
  }
  loadOptions(e, t) {
    var n, s, o, r, a, l;
    if (!this.needsPlugin(e) && !this.needsPlugin(t)) return;
    t != null &&
      t.emitters &&
      (e.emitters = J(t.emitters, (c) => {
        const d = new He();
        return d.load(c), d;
      }));
    const u =
      (s =
        (n = t == null ? void 0 : t.interactivity) === null || n === void 0
          ? void 0
          : n.modes) === null || s === void 0
        ? void 0
        : s.emitters;
    if (u)
      if (u instanceof Array)
        e.interactivity.modes.emitters = {
          random: { count: 1, enable: !0 },
          value: u.map((c) => {
            const d = new He();
            return d.load(c), d;
          }),
        };
      else {
        const c = u;
        if (c.value !== void 0)
          if (c.value instanceof Array)
            e.interactivity.modes.emitters = {
              random: {
                count: (o = c.random.count) !== null && o !== void 0 ? o : 1,
                enable: (r = c.random.enable) !== null && r !== void 0 ? r : !1,
              },
              value: c.value.map((d) => {
                const f = new He();
                return f.load(d), f;
              }),
            };
          else {
            const d = new He();
            d.load(c.value),
              (e.interactivity.modes.emitters = {
                random: {
                  count: (a = c.random.count) !== null && a !== void 0 ? a : 1,
                  enable:
                    (l = c.random.enable) !== null && l !== void 0 ? l : !1,
                },
                value: d,
              });
          }
        else
          (e.interactivity.modes.emitters = {
            random: { count: 1, enable: !1 },
            value: new He(),
          }).value.load(u);
      }
  }
  needsPlugin(e) {
    var t, n, s;
    if (!e) return !1;
    const o = e.emitters;
    return (
      (o instanceof Array && !!o.length) ||
      o !== void 0 ||
      (!!(
        !(
          (s =
            (n =
              (t = e.interactivity) === null || t === void 0
                ? void 0
                : t.events) === null || n === void 0
              ? void 0
              : n.onClick) === null || s === void 0
        ) && s.mode
      ) &&
        K("emitter", e.interactivity.events.onClick.mode))
    );
  }
}
async function J2(i) {
  i.emitterShapeManager || (i.emitterShapeManager = new Y2(i)),
    i.addEmitterShape ||
      (i.addEmitterShape = (t, n) => {
        var s;
        (s = i.emitterShapeManager) === null ||
          s === void 0 ||
          s.addShape(t, n);
      });
  const e = new K2(i);
  await i.addPlugin(e),
    i.addEmitterShape("circle", new q2()),
    i.addEmitterShape("square", new Z2());
}
class Q2 {
  constructor() {
    (this.delay = 1), (this.pauseOnStop = !1), (this.quantity = 1);
  }
  load(e) {
    !e ||
      (e.delay !== void 0 && (this.delay = e.delay),
      e.quantity !== void 0 && (this.quantity = e.quantity),
      e.particles !== void 0 && (this.particles = ne({}, e.particles)),
      e.pauseOnStop !== void 0 && (this.pauseOnStop = e.pauseOnStop));
  }
}
class ef extends Ae {
  constructor(e) {
    super(e), (this._delay = 0);
  }
  clear() {}
  init() {}
  async interact(e) {
    var t, n, s, o;
    if (!this.container.retina.reduceFactor) return;
    const r = this.container,
      a = r.actualOptions,
      l = a.interactivity.modes.trail;
    if (!l) return;
    const u = (l.delay * 1e3) / this.container.retina.reduceFactor;
    if ((this._delay < u && (this._delay += e.value), this._delay < u)) return;
    let c = !0;
    l.pauseOnStop &&
      (r.interactivity.mouse.position === this._lastPosition ||
        (((t = r.interactivity.mouse.position) === null || t === void 0
          ? void 0
          : t.x) ===
          ((n = this._lastPosition) === null || n === void 0 ? void 0 : n.x) &&
          ((s = r.interactivity.mouse.position) === null || s === void 0
            ? void 0
            : s.y) ===
            ((o = this._lastPosition) === null || o === void 0
              ? void 0
              : o.y))) &&
      (c = !1),
      r.interactivity.mouse.position
        ? (this._lastPosition = {
            x: r.interactivity.mouse.position.x,
            y: r.interactivity.mouse.position.y,
          })
        : delete this._lastPosition,
      c && r.particles.push(l.quantity, r.interactivity.mouse, l.particles),
      (this._delay -= u);
  }
  isEnabled(e) {
    var t;
    const n = this.container,
      s = n.actualOptions,
      o = n.interactivity.mouse,
      r = (
        (t = e == null ? void 0 : e.interactivity) !== null && t !== void 0
          ? t
          : s.interactivity
      ).events;
    return (
      (o.clicking && o.inside && !!o.position && K("trail", r.onClick.mode)) ||
      (o.inside && !!o.position && K("trail", r.onHover.mode))
    );
  }
  loadModeOptions(e, ...t) {
    e.trail || (e.trail = new Q2());
    for (const n of t) e.trail.load(n == null ? void 0 : n.trail);
  }
  reset() {}
}
async function tf(i) {
  await i.addInteractor("externalTrail", (e) => new ef(e));
}
class tn {
  constructor() {
    (this.enable = !1), (this.value = 0);
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      e.value !== void 0 && (this.value = H(e.value)));
  }
}
class nf {
  constructor() {
    (this.darken = new tn()),
      (this.enable = !1),
      (this.enlighten = new tn()),
      (this.mode = "vertical"),
      (this.speed = 25);
  }
  load(e) {
    !e ||
      (e.backColor !== void 0 &&
        (this.backColor = ie.create(this.backColor, e.backColor)),
      this.darken.load(e.darken),
      e.enable !== void 0 && (this.enable = e.enable),
      this.enlighten.load(e.enlighten),
      e.mode !== void 0 && (this.mode = e.mode),
      e.speed !== void 0 && (this.speed = H(e.speed)));
  }
}
function sf(i, e) {
  const t = i.options.roll;
  if (!i.roll || !(t != null && t.enable)) return;
  const n = i.roll.speed * e.factor,
    s = 2 * Math.PI;
  (i.roll.angle += n), i.roll.angle > s && (i.roll.angle -= s);
}
class of {
  getTransformValues(e) {
    var t;
    const n =
        ((t = e.roll) === null || t === void 0 ? void 0 : t.enable) && e.roll,
      s = n && n.horizontal,
      o = n && n.vertical;
    return {
      a: s ? Math.cos(n.angle) : void 0,
      d: o ? Math.sin(n.angle) : void 0,
    };
  }
  init(e) {
    const t = e.options.roll;
    if (t != null && t.enable)
      if (
        ((e.roll = {
          enable: t.enable,
          horizontal: t.mode === "horizontal" || t.mode === "both",
          vertical: t.mode === "vertical" || t.mode === "both",
          angle: j() * Math.PI * 2,
          speed: R(t.speed) / 360,
        }),
        t.backColor)
      )
        e.backColor = qe(t.backColor);
      else if (t.darken.enable && t.enlighten.enable) {
        const n = j() >= 0.5 ? "darken" : "enlighten";
        e.roll.alter = {
          type: n,
          value: R(n === "darken" ? t.darken.value : t.enlighten.value),
        };
      } else
        t.darken.enable
          ? (e.roll.alter = { type: "darken", value: R(t.darken.value) })
          : t.enlighten.enable &&
            (e.roll.alter = { type: "enlighten", value: R(t.enlighten.value) });
    else
      e.roll = { enable: !1, horizontal: !1, vertical: !1, angle: 0, speed: 0 };
  }
  isEnabled(e) {
    const t = e.options.roll;
    return !e.destroyed && !e.spawning && !!(t != null && t.enable);
  }
  loadOptions(e, ...t) {
    e.roll || (e.roll = new nf());
    for (const n of t) e.roll.load(n == null ? void 0 : n.roll);
  }
  update(e, t) {
    !this.isEnabled(e) || sf(e, t);
  }
}
async function rf(i) {
  await i.addParticleUpdater("roll", () => new of());
}
const af = (i) => {
  const e = (n, s) => i.load(n, s);
  (e.load = (n, s, o) => {
    i.loadJSON(n, s)
      .then((r) => {
        r && o(r);
      })
      .catch(() => {
        o(void 0);
      });
  }),
    (e.setOnClickHandler = (n) => {
      i.setOnClickHandler(n);
    });
  const t = i.dom();
  return { particlesJS: e, pJSDom: t };
};
class lf {
  constructor() {
    (this.enable = !1), (this.speed = 0), (this.decay = 0), (this.sync = !1);
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0 && (this.speed = H(e.speed)),
      e.decay !== void 0 && (this.decay = H(e.decay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class uf extends Fe {
  constructor() {
    super(),
      (this.animation = new lf()),
      (this.direction = "clockwise"),
      (this.path = !1),
      (this.value = 0);
  }
  load(e) {
    !e ||
      (super.load(e),
      e.direction !== void 0 && (this.direction = e.direction),
      this.animation.load(e.animation),
      e.path !== void 0 && (this.path = e.path));
  }
}
function cf(i, e) {
  var t, n;
  const s = i.rotate,
    o = i.options.rotate;
  if (!s || !o) return;
  const r = o.animation,
    a = ((t = s.velocity) !== null && t !== void 0 ? t : 0) * e.factor,
    l = 2 * Math.PI,
    u = (n = s.decay) !== null && n !== void 0 ? n : 1;
  if (!!r.enable) {
    switch (s.status) {
      case 0:
        (s.value += a), s.value > l && (s.value -= l);
        break;
      case 1:
      default:
        (s.value -= a), s.value < 0 && (s.value += l);
        break;
    }
    s.velocity && u !== 1 && (s.velocity *= u);
  }
}
class df {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const t = e.options.rotate;
    if (!t) return;
    (e.rotate = {
      enable: t.animation.enable,
      value: (R(t.value) * Math.PI) / 180,
    }),
      (e.pathRotation = t.path);
    let n = t.direction;
    switch (
      (n === "random" &&
        (n = Math.floor(j() * 2) > 0 ? "counter-clockwise" : "clockwise"),
      n)
    ) {
      case "counter-clockwise":
      case "counterClockwise":
        e.rotate.status = 1;
        break;
      case "clockwise":
        e.rotate.status = 0;
        break;
    }
    const s = t.animation;
    s.enable &&
      ((e.rotate.decay = 1 - R(s.decay)),
      (e.rotate.velocity =
        (R(s.speed) / 360) * this.container.retina.reduceFactor),
      s.sync || (e.rotate.velocity *= j())),
      (e.rotation = e.rotate.value);
  }
  isEnabled(e) {
    const t = e.options.rotate;
    return t
      ? !e.destroyed && !e.spawning && t.animation.enable && !t.path
      : !1;
  }
  loadOptions(e, ...t) {
    e.rotate || (e.rotate = new uf());
    for (const n of t) e.rotate.load(n == null ? void 0 : n.rotate);
  }
  update(e, t) {
    var n, s;
    !this.isEnabled(e) ||
      (cf(e, t),
      (e.rotation =
        (s = (n = e.rotate) === null || n === void 0 ? void 0 : n.value) !==
          null && s !== void 0
          ? s
          : 0));
  }
}
async function ff(i) {
  await i.addParticleUpdater("rotate", (e) => new df(e));
}
function hf(i) {
  const e = i.initialPosition,
    { dx: t, dy: n } = de(e, i.position),
    s = Math.abs(t),
    o = Math.abs(n),
    r = i.retina.maxDistance.horizontal,
    a = i.retina.maxDistance.vertical;
  if (!(!r && !a)) {
    if (((r && s >= r) || (a && o >= a)) && !i.misplaced)
      (i.misplaced = (!!r && s > r) || (!!a && o > a)),
        r && (i.velocity.x = i.velocity.y / 2 - i.velocity.x),
        a && (i.velocity.y = i.velocity.x / 2 - i.velocity.y);
    else if ((!r || s < r) && (!a || o < a) && i.misplaced) i.misplaced = !1;
    else if (i.misplaced) {
      const l = i.position,
        u = i.velocity;
      r && ((l.x < e.x && u.x < 0) || (l.x > e.x && u.x > 0)) && (u.x *= -j()),
        a &&
          ((l.y < e.y && u.y < 0) || (l.y > e.y && u.y > 0)) &&
          (u.y *= -j());
    }
  }
}
function pf(i, e) {
  const t = i.container;
  if (!i.spin) return;
  const n = {
    x: i.spin.direction === "clockwise" ? Math.cos : Math.sin,
    y: i.spin.direction === "clockwise" ? Math.sin : Math.cos,
  };
  (i.position.x = i.spin.center.x + i.spin.radius * n.x(i.spin.angle)),
    (i.position.y = i.spin.center.y + i.spin.radius * n.y(i.spin.angle)),
    (i.spin.radius += i.spin.acceleration);
  const s = Math.max(t.canvas.size.width, t.canvas.size.height);
  i.spin.radius > s / 2
    ? ((i.spin.radius = s / 2), (i.spin.acceleration *= -1))
    : i.spin.radius < 0 && ((i.spin.radius = 0), (i.spin.acceleration *= -1)),
    (i.spin.angle += (e / 100) * (1 - i.spin.radius / s));
}
function vf(i, e) {
  var t;
  const n = i.options,
    s = n.move.path;
  if (!s.enable) return;
  if (i.lastPathTime <= i.pathDelay) {
    i.lastPathTime += e.value;
    return;
  }
  const r =
    (t = i.pathGenerator) === null || t === void 0 ? void 0 : t.generate(i);
  r && i.velocity.addTo(r),
    s.clamp &&
      ((i.velocity.x = Be(i.velocity.x, -1, 1)),
      (i.velocity.y = Be(i.velocity.y, -1, 1))),
    (i.lastPathTime -= i.pathDelay);
}
function mf(i) {
  return i.slow.inRange ? i.slow.factor : 1;
}
class gf {
  init(e) {
    var t;
    const n = e.container,
      s = e.options,
      o = s.move.gravity,
      r = s.move.spin;
    if (
      ((e.gravity = {
        enable: o.enable,
        acceleration: R(o.acceleration),
        inverse: o.inverse,
      }),
      r.enable)
    ) {
      const a =
          (t = r.position) !== null && t !== void 0 ? t : { x: 50, y: 50 },
        l = {
          x: (a.x / 100) * n.canvas.size.width,
          y: (a.y / 100) * n.canvas.size.height,
        },
        u = e.getPosition(),
        c = oe(u, l),
        d = R(r.acceleration);
      (e.retina.spinAcceleration = d * n.retina.pixelRatio),
        (e.spin = {
          center: l,
          direction: e.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
          angle: e.velocity.angle,
          radius: c,
          acceleration: e.retina.spinAcceleration,
        });
    }
  }
  isEnabled(e) {
    return !e.destroyed && e.options.move.enable;
  }
  move(e, t) {
    var n, s, o, r, a;
    const l = e.options,
      u = l.move;
    if (!u.enable) return;
    const c = e.container,
      d = mf(e),
      f =
        ((n = (r = e.retina).moveSpeed) !== null && n !== void 0
          ? n
          : (r.moveSpeed = R(u.speed) * c.retina.pixelRatio)) *
        c.retina.reduceFactor,
      p =
        (s = (a = e.retina).moveDrift) !== null && s !== void 0
          ? s
          : (a.moveDrift = R(e.options.move.drift) * c.retina.pixelRatio),
      h = ze(l.size.value) * c.retina.pixelRatio,
      g = u.size ? e.getRadius() / h : 1,
      y = g * d * (t.factor || 1),
      E = 2,
      C = (f * y) / E;
    if (u.spin.enable) pf(e, C);
    else {
      vf(e, t);
      const b = e.gravity,
        _ = (b == null ? void 0 : b.enable) && b.inverse ? -1 : 1;
      (b == null ? void 0 : b.enable) &&
        C &&
        (e.velocity.y += (_ * (b.acceleration * t.factor)) / (60 * C)),
        p && C && (e.velocity.x += (p * t.factor) / (60 * C));
      const x = e.moveDecay;
      x != 1 && e.velocity.multTo(x);
      const w = e.velocity.mult(C),
        S =
          (o = e.retina.maxSpeed) !== null && o !== void 0
            ? o
            : c.retina.maxSpeed;
      (b == null ? void 0 : b.enable) &&
        S > 0 &&
        ((!b.inverse && w.y >= 0 && w.y >= S) ||
          (b.inverse && w.y <= 0 && w.y <= -S)) &&
        ((w.y = _ * S), C && (e.velocity.y = w.y / C));
      const k = e.options.zIndex,
        T = (1 - e.zIndexFactor) ** k.velocityRate;
      T != 1 && w.multTo(T),
        e.position.addTo(w),
        u.vibrate &&
          ((e.position.x += Math.sin(e.position.x * Math.cos(e.position.y))),
          (e.position.y += Math.cos(e.position.y * Math.sin(e.position.x))));
    }
    hf(e);
  }
}
async function yf(i) {
  i.addMover("base", () => new gf());
}
class Cf {
  draw(e, t, n) {
    e.arc(0, 0, n, 0, Math.PI * 2, !1);
  }
  getSidesCount() {
    return 12;
  }
}
async function bf(i) {
  await i.addShape("circle", new Cf());
}
function Qt(i, e, t, n, s) {
  var o, r;
  const a = e;
  if (!a || !t.enable) return;
  const l = se(t.offset),
    u =
      ((o = e.velocity) !== null && o !== void 0 ? o : 0) * i.factor + l * 3.6,
    c = (r = e.decay) !== null && r !== void 0 ? r : 1;
  !s || a.status === 0
    ? ((a.value += u),
      s && a.value > n && ((a.status = 1), (a.value -= a.value % n)))
    : ((a.value -= u), a.value < 0 && ((a.status = 0), (a.value += a.value))),
    a.velocity && c !== 1 && (a.velocity *= c),
    a.value > n && (a.value %= n);
}
function _f(i, e) {
  var t, n, s;
  const o = i.options.color.animation;
  ((t = i.color) === null || t === void 0 ? void 0 : t.h) !== void 0 &&
    Qt(e, i.color.h, o.h, 360, !1),
    ((n = i.color) === null || n === void 0 ? void 0 : n.s) !== void 0 &&
      Qt(e, i.color.s, o.s, 100, !0),
    ((s = i.color) === null || s === void 0 ? void 0 : s.l) !== void 0 &&
      Qt(e, i.color.l, o.l, 100, !0);
}
class wf {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const t = qe(e.options.color, e.id, e.options.reduceDuplicates);
    t &&
      (e.color = ts(
        t,
        e.options.color.animation,
        this.container.retina.reduceFactor
      ));
  }
  isEnabled(e) {
    var t, n, s;
    const o = e.options.color.animation;
    return (
      !e.destroyed &&
      !e.spawning &&
      ((((t = e.color) === null || t === void 0 ? void 0 : t.h.value) !==
        void 0 &&
        o.h.enable) ||
        (((n = e.color) === null || n === void 0 ? void 0 : n.s.value) !==
          void 0 &&
          o.s.enable) ||
        (((s = e.color) === null || s === void 0 ? void 0 : s.l.value) !==
          void 0 &&
          o.l.enable))
    );
  }
  update(e, t) {
    _f(e, t);
  }
}
async function Ef(i) {
  await i.addParticleUpdater("color", (e) => new wf(e));
}
class xf {
  constructor() {
    (this.distance = 200),
      (this.duration = 0.4),
      (this.easing = "ease-out-quad"),
      (this.factor = 1),
      (this.maxSpeed = 50),
      (this.speed = 1);
  }
  load(e) {
    !e ||
      (e.distance !== void 0 && (this.distance = e.distance),
      e.duration !== void 0 && (this.duration = e.duration),
      e.easing !== void 0 && (this.easing = e.easing),
      e.factor !== void 0 && (this.factor = e.factor),
      e.maxSpeed !== void 0 && (this.maxSpeed = e.maxSpeed),
      e.speed !== void 0 && (this.speed = e.speed));
  }
}
class Sf extends Ae {
  constructor(e, t) {
    super(t),
      (this._engine = e),
      t.attract || (t.attract = { particles: [] }),
      (this.handleClickMode = (n) => {
        const s = this.container.actualOptions,
          o = s.interactivity.modes.attract;
        if (!(!o || n !== "attract")) {
          t.attract || (t.attract = { particles: [] }),
            (t.attract.clicking = !0),
            (t.attract.count = 0);
          for (const r of t.attract.particles)
            !this.isEnabled(r) || r.velocity.setTo(r.initialVelocity);
          (t.attract.particles = []),
            (t.attract.finish = !1),
            setTimeout(() => {
              t.destroyed ||
                (t.attract || (t.attract = { particles: [] }),
                (t.attract.clicking = !1));
            }, o.duration * 1e3);
        }
      });
  }
  clear() {}
  init() {
    const e = this.container,
      t = e.actualOptions.interactivity.modes.attract;
    !t || (e.retina.attractModeDistance = t.distance * e.retina.pixelRatio);
  }
  async interact() {
    const e = this.container,
      t = e.actualOptions,
      n = e.interactivity.status === Je,
      s = t.interactivity.events,
      o = s.onHover.enable,
      r = s.onHover.mode,
      a = s.onClick.enable,
      l = s.onClick.mode;
    n && o && K("attract", r)
      ? this.hoverAttract()
      : a && K("attract", l) && this.clickAttract();
  }
  isEnabled(e) {
    var t;
    const n = this.container,
      s = n.actualOptions,
      o = n.interactivity.mouse,
      r = (
        (t = e == null ? void 0 : e.interactivity) !== null && t !== void 0
          ? t
          : s.interactivity
      ).events;
    if (
      (!o.position || !r.onHover.enable) &&
      (!o.clickPosition || !r.onClick.enable)
    )
      return !1;
    const a = r.onHover.mode,
      l = r.onClick.mode;
    return K("attract", a) || K("attract", l);
  }
  loadModeOptions(e, ...t) {
    e.attract || (e.attract = new xf());
    for (const n of t) e.attract.load(n == null ? void 0 : n.attract);
  }
  reset() {}
  clickAttract() {
    const e = this.container;
    if (
      (e.attract || (e.attract = { particles: [] }),
      e.attract.finish ||
        (e.attract.count || (e.attract.count = 0),
        e.attract.count++,
        e.attract.count === e.particles.count && (e.attract.finish = !0)),
      e.attract.clicking)
    ) {
      const t = e.interactivity.mouse.clickPosition,
        n = e.retina.attractModeDistance;
      if (!n || n < 0 || !t) return;
      this.processAttract(t, n, new ve(t.x, t.y, n));
    } else e.attract.clicking === !1 && (e.attract.particles = []);
  }
  hoverAttract() {
    const e = this.container,
      t = e.interactivity.mouse.position,
      n = e.retina.attractModeDistance;
    !n || n < 0 || !t || this.processAttract(t, n, new ve(t.x, t.y, n));
  }
  processAttract(e, t, n) {
    const s = this.container,
      o = s.actualOptions.interactivity.modes.attract;
    if (!o) return;
    const r = s.particles.quadTree.query(n, (a) => this.isEnabled(a));
    for (const a of r) {
      const { dx: l, dy: u, distance: c } = de(a.position, e),
        d = o.speed * o.factor,
        f = Be(Hn(o.easing)(1 - c / t) * d, 0, o.maxSpeed),
        p = Z.create(c === 0 ? d : (l / c) * f, c === 0 ? d : (u / c) * f);
      a.position.subFrom(p);
    }
  }
}
async function Ff(i) {
  await i.addInteractor("externalAttract", (e) => new Sf(i, e));
}
class Tf {
  constructor() {
    this.distance = 200;
  }
  load(e) {
    !e || (e.distance !== void 0 && (this.distance = e.distance));
  }
}
class Bf extends Ae {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {
    const e = this.container,
      t = e.actualOptions.interactivity.modes.bounce;
    !t || (e.retina.bounceModeDistance = t.distance * e.retina.pixelRatio);
  }
  async interact() {
    const e = this.container,
      t = e.actualOptions,
      n = t.interactivity.events,
      s = e.interactivity.status === Je,
      o = n.onHover.enable,
      r = n.onHover.mode,
      a = n.onDiv;
    s && o && K("bounce", r)
      ? this.processMouseBounce()
      : yi("bounce", a, (l, u) => this.singleSelectorBounce(l, u));
  }
  isEnabled(e) {
    var t;
    const n = this.container,
      s = n.actualOptions,
      o = n.interactivity.mouse,
      r = (
        (t = e == null ? void 0 : e.interactivity) !== null && t !== void 0
          ? t
          : s.interactivity
      ).events,
      a = r.onDiv;
    return (
      (o.position && r.onHover.enable && K("bounce", r.onHover.mode)) ||
      gi("bounce", a)
    );
  }
  loadModeOptions(e, ...t) {
    e.bounce || (e.bounce = new Tf());
    for (const n of t) e.bounce.load(n == null ? void 0 : n.bounce);
  }
  reset() {}
  processBounce(e, t, n) {
    const s = this.container.particles.quadTree.query(n, (o) =>
      this.isEnabled(o)
    );
    for (const o of s)
      n instanceof ve
        ? Xn(si(o), {
            position: e,
            radius: t,
            mass: (t ** 2 * Math.PI) / 2,
            velocity: Z.origin,
            factor: Z.origin,
          })
        : n instanceof pe && o0(o, gt(e, t));
  }
  processMouseBounce() {
    const e = this.container,
      t = e.retina.pixelRatio,
      n = 10 * t,
      s = e.interactivity.mouse.position,
      o = e.retina.bounceModeDistance;
    !o || o < 0 || !s || this.processBounce(s, o, new ve(s.x, s.y, o + n));
  }
  singleSelectorBounce(e, t) {
    const n = this.container,
      s = document.querySelectorAll(e);
    !s.length ||
      s.forEach((o) => {
        const r = o,
          a = n.retina.pixelRatio,
          l = {
            x: (r.offsetLeft + r.offsetWidth / 2) * a,
            y: (r.offsetTop + r.offsetHeight / 2) * a,
          },
          u = (r.offsetWidth / 2) * a,
          c = 10 * a,
          d =
            t.type === "circle"
              ? new ve(l.x, l.y, u + c)
              : new pe(
                  r.offsetLeft * a - c,
                  r.offsetTop * a - c,
                  r.offsetWidth * a + c * 2,
                  r.offsetHeight * a + c * 2
                );
        this.processBounce(l, u, d);
      });
  }
}
async function kf(i) {
  await i.addInteractor("externalBounce", (e) => new Bf(e));
}
class ls {
  constructor() {
    (this.distance = 200), (this.duration = 0.4), (this.mix = !1);
  }
  load(e) {
    if (!!e) {
      if (
        (e.distance !== void 0 && (this.distance = e.distance),
        e.duration !== void 0 && (this.duration = e.duration),
        e.mix !== void 0 && (this.mix = e.mix),
        e.opacity !== void 0 && (this.opacity = e.opacity),
        e.color !== void 0)
      ) {
        const t = this.color instanceof Array ? void 0 : this.color;
        this.color = J(e.color, (n) => ie.create(t, n));
      }
      e.size !== void 0 && (this.size = e.size);
    }
  }
}
class Df extends ls {
  constructor() {
    super(), (this.selectors = []);
  }
  get ids() {
    return J(this.selectors, (e) => e.replace("#", ""));
  }
  set ids(e) {
    this.selectors = J(e, (t) => `#${t}`);
  }
  load(e) {
    super.load(e),
      e &&
        (e.ids !== void 0 && (this.ids = e.ids),
        e.selectors !== void 0 && (this.selectors = e.selectors));
  }
}
class Af extends ls {
  load(e) {
    super.load(e),
      e &&
        (this.divs = J(e.divs, (t) => {
          const n = new Df();
          return n.load(t), n;
        }));
  }
}
function nn(i, e, t, n) {
  if (e >= t) {
    const s = i + (e - t) * n;
    return Be(s, i, e);
  } else if (e < t) {
    const s = i - (t - e) * n;
    return Be(s, e, i);
  }
}
class Mf extends Ae {
  constructor(e) {
    super(e),
      e.bubble || (e.bubble = {}),
      (this.handleClickMode = (t) => {
        t === "bubble" &&
          (e.bubble || (e.bubble = {}), (e.bubble.clicking = !0));
      });
  }
  clear(e, t, n) {
    (e.bubble.inRange && !n) ||
      (delete e.bubble.div,
      delete e.bubble.opacity,
      delete e.bubble.radius,
      delete e.bubble.color);
  }
  init() {
    const e = this.container,
      t = e.actualOptions.interactivity.modes.bubble;
    !t ||
      ((e.retina.bubbleModeDistance = t.distance * e.retina.pixelRatio),
      t.size !== void 0 &&
        (e.retina.bubbleModeSize = t.size * e.retina.pixelRatio));
  }
  async interact(e) {
    const t = this.container.actualOptions,
      n = t.interactivity.events,
      s = n.onHover,
      o = n.onClick,
      r = s.enable,
      a = s.mode,
      l = o.enable,
      u = o.mode,
      c = n.onDiv;
    r && K("bubble", a)
      ? this.hoverBubble(e)
      : l && K("bubble", u)
      ? this.clickBubble(e)
      : yi("bubble", c, (d, f) => this.singleSelectorHover(e, d, f));
  }
  isEnabled(e) {
    var t;
    const n = this.container,
      s = n.actualOptions,
      o = n.interactivity.mouse,
      r = (
        (t = e == null ? void 0 : e.interactivity) !== null && t !== void 0
          ? t
          : s.interactivity
      ).events,
      a = r.onDiv,
      l = gi("bubble", a);
    if (
      !(
        l ||
        (r.onHover.enable && o.position) ||
        (r.onClick.enable && o.clickPosition)
      )
    )
      return !1;
    const u = r.onHover.mode,
      c = r.onClick.mode;
    return K("bubble", u) || K("bubble", c) || l;
  }
  loadModeOptions(e, ...t) {
    e.bubble || (e.bubble = new Af());
    for (const n of t) e.bubble.load(n == null ? void 0 : n.bubble);
  }
  reset(e) {
    e.bubble.inRange = !1;
  }
  clickBubble(e) {
    var t, n;
    const s = this.container,
      o = s.actualOptions,
      r = s.interactivity.mouse.clickPosition,
      a = o.interactivity.modes.bubble;
    if (!a || !r) return;
    s.bubble || (s.bubble = {});
    const l = s.retina.bubbleModeDistance;
    if (!l || l < 0) return;
    const u = s.particles.quadTree.queryCircle(r, l, (c) => this.isEnabled(c));
    for (const c of u) {
      if (!s.bubble.clicking) continue;
      c.bubble.inRange = !s.bubble.durationEnd;
      const d = c.getPosition(),
        f = oe(d, r),
        p =
          (new Date().getTime() - (s.interactivity.mouse.clickTime || 0)) / 1e3;
      p > a.duration && (s.bubble.durationEnd = !0),
        p > a.duration * 2 &&
          ((s.bubble.clicking = !1), (s.bubble.durationEnd = !1));
      const h = {
        bubbleObj: {
          optValue: s.retina.bubbleModeSize,
          value: c.bubble.radius,
        },
        particlesObj: {
          optValue: ze(c.options.size.value) * s.retina.pixelRatio,
          value: c.size.value,
        },
        type: "size",
      };
      this.process(c, f, p, h);
      const g = {
        bubbleObj: { optValue: a.opacity, value: c.bubble.opacity },
        particlesObj: {
          optValue: ze(c.options.opacity.value),
          value:
            (n =
              (t = c.opacity) === null || t === void 0 ? void 0 : t.value) !==
              null && n !== void 0
              ? n
              : 1,
        },
        type: "opacity",
      };
      this.process(c, f, p, g),
        s.bubble.durationEnd
          ? delete c.bubble.color
          : f <= l
          ? this.hoverBubbleColor(c, f)
          : delete c.bubble.color;
    }
  }
  hoverBubble(e) {
    const t = this.container,
      n = t.interactivity.mouse.position,
      s = t.retina.bubbleModeDistance;
    if (!s || s < 0 || n === void 0) return;
    const o = t.particles.quadTree.queryCircle(n, s, (r) => this.isEnabled(r));
    for (const r of o) {
      r.bubble.inRange = !0;
      const a = r.getPosition(),
        l = oe(a, n),
        u = 1 - l / s;
      l <= s
        ? u >= 0 &&
          t.interactivity.status === Je &&
          (this.hoverBubbleSize(r, u),
          this.hoverBubbleOpacity(r, u),
          this.hoverBubbleColor(r, u))
        : this.reset(r),
        t.interactivity.status === ri && this.reset(r);
    }
  }
  hoverBubbleColor(e, t, n) {
    const s = this.container.actualOptions,
      o = n != null ? n : s.interactivity.modes.bubble;
    if (!!o) {
      if (!e.bubble.finalColor) {
        const r = o.color;
        if (!r) return;
        const a = xe(r);
        e.bubble.finalColor = qe(a);
      }
      if (!!e.bubble.finalColor)
        if (o.mix) {
          e.bubble.color = void 0;
          const r = e.getFillColor();
          e.bubble.color = r
            ? Jn(Ci(r, e.bubble.finalColor, 1 - t, t))
            : e.bubble.finalColor;
        } else e.bubble.color = e.bubble.finalColor;
    }
  }
  hoverBubbleOpacity(e, t, n) {
    var s, o, r, a;
    const l = this.container,
      u = l.actualOptions,
      c =
        (s = n == null ? void 0 : n.opacity) !== null && s !== void 0
          ? s
          : (o = u.interactivity.modes.bubble) === null || o === void 0
          ? void 0
          : o.opacity;
    if (!c) return;
    const d = e.options.opacity.value,
      f =
        (a = (r = e.opacity) === null || r === void 0 ? void 0 : r.value) !==
          null && a !== void 0
          ? a
          : 1,
      p = nn(f, c, ze(d), t);
    p !== void 0 && (e.bubble.opacity = p);
  }
  hoverBubbleSize(e, t, n) {
    const s = this.container,
      o =
        n != null && n.size
          ? n.size * s.retina.pixelRatio
          : s.retina.bubbleModeSize;
    if (o === void 0) return;
    const r = ze(e.options.size.value) * s.retina.pixelRatio,
      a = e.size.value,
      l = nn(a, o, r, t);
    l !== void 0 && (e.bubble.radius = l);
  }
  process(e, t, n, s) {
    const o = this.container,
      r = s.bubbleObj.optValue,
      a = o.actualOptions,
      l = a.interactivity.modes.bubble;
    if (!l || r === void 0) return;
    const u = l.duration,
      c = o.retina.bubbleModeDistance,
      d = s.particlesObj.optValue,
      f = s.bubbleObj.value,
      p = s.particlesObj.value || 0,
      h = s.type;
    if (!(!c || c < 0 || r === d))
      if ((o.bubble || (o.bubble = {}), o.bubble.durationEnd))
        f &&
          (h === "size" && delete e.bubble.radius,
          h === "opacity" && delete e.bubble.opacity);
      else if (t <= c) {
        if ((f != null ? f : p) !== r) {
          const y = p - (n * (p - r)) / u;
          h === "size" && (e.bubble.radius = y),
            h === "opacity" && (e.bubble.opacity = y);
        }
      } else
        h === "size" && delete e.bubble.radius,
          h === "opacity" && delete e.bubble.opacity;
  }
  singleSelectorHover(e, t, n) {
    const s = this.container,
      o = document.querySelectorAll(t),
      r = s.actualOptions.interactivity.modes.bubble;
    !r ||
      !o.length ||
      o.forEach((a) => {
        const l = a,
          u = s.retina.pixelRatio,
          c = {
            x: (l.offsetLeft + l.offsetWidth / 2) * u,
            y: (l.offsetTop + l.offsetHeight / 2) * u,
          },
          d = (l.offsetWidth / 2) * u,
          f =
            n.type === "circle"
              ? new ve(c.x, c.y, d)
              : new pe(
                  l.offsetLeft * u,
                  l.offsetTop * u,
                  l.offsetWidth * u,
                  l.offsetHeight * u
                ),
          p = s.particles.quadTree.query(f, (h) => this.isEnabled(h));
        for (const h of p) {
          if (!f.contains(h.getPosition())) continue;
          h.bubble.inRange = !0;
          const g = r.divs,
            y = Wn(g, l);
          (!h.bubble.div || h.bubble.div !== l) &&
            (this.clear(h, e, !0), (h.bubble.div = l)),
            this.hoverBubbleSize(h, 1, y),
            this.hoverBubbleOpacity(h, 1, y),
            this.hoverBubbleColor(h, 1, y);
        }
      });
  }
}
async function Pf(i) {
  await i.addInteractor("externalBubble", (e) => new Mf(e));
}
class Of {
  constructor() {
    this.opacity = 0.5;
  }
  load(e) {
    !e || (e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class Lf {
  constructor() {
    (this.distance = 80), (this.links = new Of()), (this.radius = 60);
  }
  get lineLinked() {
    return this.links;
  }
  set lineLinked(e) {
    this.links = e;
  }
  get line_linked() {
    return this.links;
  }
  set line_linked(e) {
    this.links = e;
  }
  load(e) {
    var t, n;
    !e ||
      (e.distance !== void 0 && (this.distance = e.distance),
      this.links.load(
        (n = (t = e.links) !== null && t !== void 0 ? t : e.lineLinked) !==
          null && n !== void 0
          ? n
          : e.line_linked
      ),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
function zf(i, e, t, n) {
  const s = Math.floor(t.getRadius() / e.getRadius()),
    o = e.getFillColor(),
    r = t.getFillColor();
  if (!o || !r) return;
  const a = e.getPosition(),
    l = t.getPosition(),
    u = Ci(o, r, e.getRadius(), t.getRadius()),
    c = i.createLinearGradient(a.x, a.y, l.x, l.y);
  return (
    c.addColorStop(0, nt(o, n)),
    c.addColorStop(s > 1 ? 1 : s, Ie(u, n)),
    c.addColorStop(1, nt(r, n)),
    c
  );
}
function If(i, e, t, n, s) {
  ut(i, n, s), (i.lineWidth = e), (i.strokeStyle = t), i.stroke();
}
function Rf(i, e, t, n) {
  const s = i.actualOptions,
    o = s.interactivity.modes.connect;
  if (!!o) return zf(e, t, n, o.links.opacity);
}
function $f(i, e, t) {
  i.canvas.draw((n) => {
    var s;
    const o = Rf(i, n, e, t);
    if (!o) return;
    const r = e.getPosition(),
      a = t.getPosition();
    If(n, (s = e.retina.linksWidth) !== null && s !== void 0 ? s : 0, o, r, a);
  });
}
class Nf extends Ae {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {
    const e = this.container,
      t = e.actualOptions.interactivity.modes.connect;
    !t ||
      ((e.retina.connectModeDistance = t.distance * e.retina.pixelRatio),
      (e.retina.connectModeRadius = t.radius * e.retina.pixelRatio));
  }
  async interact() {
    const e = this.container;
    if (
      e.actualOptions.interactivity.events.onHover.enable &&
      e.interactivity.status === "pointermove"
    ) {
      const n = e.interactivity.mouse.position;
      if (
        !e.retina.connectModeDistance ||
        e.retina.connectModeDistance < 0 ||
        !e.retina.connectModeRadius ||
        e.retina.connectModeRadius < 0 ||
        !n
      )
        return;
      const s = Math.abs(e.retina.connectModeRadius),
        o = e.particles.quadTree.queryCircle(n, s, (a) => this.isEnabled(a));
      let r = 0;
      for (const a of o) {
        const l = a.getPosition();
        for (const u of o.slice(r + 1)) {
          const c = u.getPosition(),
            d = Math.abs(e.retina.connectModeDistance),
            f = Math.abs(l.x - c.x),
            p = Math.abs(l.y - c.y);
          f < d && p < d && $f(e, a, u);
        }
        ++r;
      }
    }
  }
  isEnabled(e) {
    var t;
    const n = this.container,
      s = n.interactivity.mouse,
      o = (
        (t = e == null ? void 0 : e.interactivity) !== null && t !== void 0
          ? t
          : n.actualOptions.interactivity
      ).events;
    return o.onHover.enable && s.position ? K("connect", o.onHover.mode) : !1;
  }
  loadModeOptions(e, ...t) {
    e.connect || (e.connect = new Lf());
    for (const n of t) e.connect.load(n == null ? void 0 : n.connect);
  }
  reset() {}
}
async function Hf(i) {
  await i.addInteractor("externalConnect", (e) => new Nf(e));
}
class Vf {
  constructor() {
    (this.blink = !1), (this.consent = !1), (this.opacity = 1);
  }
  load(e) {
    !e ||
      (e.blink !== void 0 && (this.blink = e.blink),
      e.color !== void 0 && (this.color = ie.create(this.color, e.color)),
      e.consent !== void 0 && (this.consent = e.consent),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class jf {
  constructor() {
    (this.distance = 100), (this.links = new Vf());
  }
  get lineLinked() {
    return this.links;
  }
  set lineLinked(e) {
    this.links = e;
  }
  get line_linked() {
    return this.links;
  }
  set line_linked(e) {
    this.links = e;
  }
  load(e) {
    var t, n;
    !e ||
      (e.distance !== void 0 && (this.distance = e.distance),
      this.links.load(
        (n = (t = e.links) !== null && t !== void 0 ? t : e.lineLinked) !==
          null && n !== void 0
          ? n
          : e.line_linked
      ));
  }
}
function qf(i, e, t, n, s, o) {
  ut(i, t, n), (i.strokeStyle = Ie(s, o)), (i.lineWidth = e), i.stroke();
}
function Uf(i, e, t, n, s) {
  i.canvas.draw((o) => {
    var r;
    const a = e.getPosition();
    qf(
      o,
      (r = e.retina.linksWidth) !== null && r !== void 0 ? r : 0,
      a,
      s,
      t,
      n
    );
  });
}
class Gf extends Ae {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {
    const e = this.container,
      t = e.actualOptions.interactivity.modes.grab;
    !t || (e.retina.grabModeDistance = t.distance * e.retina.pixelRatio);
  }
  async interact() {
    var e, t;
    const n = this.container,
      s = n.actualOptions,
      o = s.interactivity;
    if (
      !o.modes.grab ||
      !o.events.onHover.enable ||
      n.interactivity.status !== Je
    )
      return;
    const r = n.interactivity.mouse.position;
    if (!r) return;
    const a = n.retina.grabModeDistance;
    if (!a || a < 0) return;
    const l = n.particles.quadTree.queryCircle(r, a, (u) => this.isEnabled(u));
    for (const u of l) {
      const c = u.getPosition(),
        d = oe(c, r);
      if (d > a) continue;
      const f = o.modes.grab.links,
        p = f.opacity,
        h = p - (d * p) / a;
      if (h <= 0) continue;
      const g =
        (e = f.color) !== null && e !== void 0
          ? e
          : (t = u.options.links) === null || t === void 0
          ? void 0
          : t.color;
      if (!n.particles.grabLineColor && g) {
        const E = o.modes.grab.links;
        n.particles.grabLineColor = es(g, E.blink, E.consent);
      }
      const y = oi(u, void 0, n.particles.grabLineColor);
      if (!y) return;
      Uf(n, u, y, h, r);
    }
  }
  isEnabled(e) {
    var t;
    const n = this.container,
      s = n.interactivity.mouse,
      o = (
        (t = e == null ? void 0 : e.interactivity) !== null && t !== void 0
          ? t
          : n.actualOptions.interactivity
      ).events;
    return o.onHover.enable && !!s.position && K("grab", o.onHover.mode);
  }
  loadModeOptions(e, ...t) {
    e.grab || (e.grab = new jf());
    for (const n of t) e.grab.load(n == null ? void 0 : n.grab);
  }
  reset() {}
}
async function Wf(i) {
  await i.addInteractor("externalGrab", (e) => new Gf(e));
}
class Xf extends Ae {
  constructor(e) {
    super(e),
      (this.handleClickMode = (t) => {
        if (t !== "pause") return;
        const n = this.container;
        n.getAnimationStatus() ? n.pause() : n.play();
      });
  }
  clear() {}
  init() {}
  async interact() {}
  isEnabled() {
    return !0;
  }
  reset() {}
}
function Yf(i) {
  i.addInteractor("externalPause", (e) => new Xf(e));
}
class Zf {
  constructor() {
    (this.default = !0), (this.groups = []), (this.quantity = 4);
  }
  get particles_nb() {
    return this.quantity;
  }
  set particles_nb(e) {
    this.quantity = e;
  }
  load(e) {
    var t;
    if (!e) return;
    e.default !== void 0 && (this.default = e.default),
      e.groups !== void 0 && (this.groups = e.groups.map((s) => s)),
      this.groups.length || (this.default = !0);
    const n = (t = e.quantity) !== null && t !== void 0 ? t : e.particles_nb;
    n !== void 0 && (this.quantity = n);
  }
}
class Kf extends Ae {
  constructor(e) {
    super(e),
      (this.handleClickMode = (t) => {
        if (t !== "push") return;
        const n = this.container,
          s = n.actualOptions,
          o = s.interactivity.modes.push;
        if (!o) return;
        const r = o.quantity;
        if (r <= 0) return;
        const a = vt([void 0, ...o.groups]),
          l = a !== void 0 ? n.actualOptions.particles.groups[a] : void 0;
        n.particles.push(r, n.interactivity.mouse, l, a);
      });
  }
  clear() {}
  init() {}
  async interact() {}
  isEnabled() {
    return !0;
  }
  loadModeOptions(e, ...t) {
    e.push || (e.push = new Zf());
    for (const n of t) e.push.load(n == null ? void 0 : n.push);
  }
  reset() {}
}
async function Jf(i) {
  await i.addInteractor("externalPush", (e) => new Kf(e));
}
class Qf {
  constructor() {
    this.quantity = 2;
  }
  get particles_nb() {
    return this.quantity;
  }
  set particles_nb(e) {
    this.quantity = e;
  }
  load(e) {
    var t;
    if (!e) return;
    const n = (t = e.quantity) !== null && t !== void 0 ? t : e.particles_nb;
    n !== void 0 && (this.quantity = n);
  }
}
class eh extends Ae {
  constructor(e) {
    super(e),
      (this.handleClickMode = (t) => {
        const n = this.container,
          s = n.actualOptions;
        if (!s.interactivity.modes.remove || t !== "remove") return;
        const o = s.interactivity.modes.remove.quantity;
        n.particles.removeQuantity(o);
      });
  }
  clear() {}
  init() {}
  async interact() {}
  isEnabled() {
    return !0;
  }
  loadModeOptions(e, ...t) {
    e.remove || (e.remove = new Qf());
    for (const n of t) e.remove.load(n == null ? void 0 : n.remove);
  }
  reset() {}
}
function th(i) {
  i.addInteractor("externalRemove", (e) => new eh(e));
}
class us {
  constructor() {
    (this.distance = 200),
      (this.duration = 0.4),
      (this.factor = 100),
      (this.speed = 1),
      (this.maxSpeed = 50),
      (this.easing = "ease-out-quad");
  }
  load(e) {
    !e ||
      (e.distance !== void 0 && (this.distance = e.distance),
      e.duration !== void 0 && (this.duration = e.duration),
      e.easing !== void 0 && (this.easing = e.easing),
      e.factor !== void 0 && (this.factor = e.factor),
      e.speed !== void 0 && (this.speed = e.speed),
      e.maxSpeed !== void 0 && (this.maxSpeed = e.maxSpeed));
  }
}
class ih extends us {
  constructor() {
    super(), (this.selectors = []);
  }
  get ids() {
    return J(this.selectors, (e) => e.replace("#", ""));
  }
  set ids(e) {
    this.selectors = J(e, (t) => `#${t}`);
  }
  load(e) {
    super.load(e),
      e &&
        (e.ids !== void 0 && (this.ids = e.ids),
        e.selectors !== void 0 && (this.selectors = e.selectors));
  }
}
class nh extends us {
  load(e) {
    super.load(e),
      e &&
        (this.divs = J(e.divs, (t) => {
          const n = new ih();
          return n.load(t), n;
        }));
  }
}
class sh extends Ae {
  constructor(e, t) {
    super(t),
      (this._engine = e),
      t.repulse || (t.repulse = { particles: [] }),
      (this.handleClickMode = (n) => {
        const s = this.container.actualOptions,
          o = s.interactivity.modes.repulse;
        if (!(!o || n !== "repulse")) {
          t.repulse || (t.repulse = { particles: [] }),
            (t.repulse.clicking = !0),
            (t.repulse.count = 0);
          for (const r of t.repulse.particles)
            !this.isEnabled(r) || r.velocity.setTo(r.initialVelocity);
          (t.repulse.particles = []),
            (t.repulse.finish = !1),
            setTimeout(() => {
              t.destroyed ||
                (t.repulse || (t.repulse = { particles: [] }),
                (t.repulse.clicking = !1));
            }, o.duration * 1e3);
        }
      });
  }
  clear() {}
  init() {
    const e = this.container,
      t = e.actualOptions.interactivity.modes.repulse;
    !t || (e.retina.repulseModeDistance = t.distance * e.retina.pixelRatio);
  }
  async interact() {
    const e = this.container,
      t = e.actualOptions,
      n = e.interactivity.status === Je,
      s = t.interactivity.events,
      o = s.onHover.enable,
      r = s.onHover.mode,
      a = s.onClick.enable,
      l = s.onClick.mode,
      u = s.onDiv;
    n && o && K("repulse", r)
      ? this.hoverRepulse()
      : a && K("repulse", l)
      ? this.clickRepulse()
      : yi("repulse", u, (c, d) => this.singleSelectorRepulse(c, d));
  }
  isEnabled(e) {
    var t;
    const n = this.container,
      s = n.actualOptions,
      o = n.interactivity.mouse,
      r = (
        (t = e == null ? void 0 : e.interactivity) !== null && t !== void 0
          ? t
          : s.interactivity
      ).events,
      a = r.onDiv,
      l = gi("repulse", a);
    if (
      !(
        l ||
        (r.onHover.enable && o.position) ||
        (r.onClick.enable && o.clickPosition)
      )
    )
      return !1;
    const u = r.onHover.mode,
      c = r.onClick.mode;
    return K("repulse", u) || K("repulse", c) || l;
  }
  loadModeOptions(e, ...t) {
    e.repulse || (e.repulse = new nh());
    for (const n of t) e.repulse.load(n == null ? void 0 : n.repulse);
  }
  reset() {}
  clickRepulse() {
    const e = this.container,
      t = e.actualOptions.interactivity.modes.repulse;
    if (!!t) {
      if (
        (e.repulse || (e.repulse = { particles: [] }),
        e.repulse.finish ||
          (e.repulse.count || (e.repulse.count = 0),
          e.repulse.count++,
          e.repulse.count === e.particles.count && (e.repulse.finish = !0)),
        e.repulse.clicking)
      ) {
        const n = e.retina.repulseModeDistance;
        if (!n || n < 0) return;
        const s = Math.pow(n / 6, 3),
          o = e.interactivity.mouse.clickPosition;
        if (o === void 0) return;
        const r = new ve(o.x, o.y, s),
          a = e.particles.quadTree.query(r, (l) => this.isEnabled(l));
        for (const l of a) {
          const { dx: u, dy: c, distance: d } = de(o, l.position),
            f = d ** 2,
            p = t.speed,
            h = (-s * p) / f;
          if (f <= s) {
            e.repulse.particles.push(l);
            const g = Z.create(u, c);
            (g.length = h), l.velocity.setTo(g);
          }
        }
      } else if (e.repulse.clicking === !1) {
        for (const n of e.repulse.particles)
          n.velocity.setTo(n.initialVelocity);
        e.repulse.particles = [];
      }
    }
  }
  hoverRepulse() {
    const e = this.container,
      t = e.interactivity.mouse.position,
      n = e.retina.repulseModeDistance;
    !n || n < 0 || !t || this.processRepulse(t, n, new ve(t.x, t.y, n));
  }
  processRepulse(e, t, n, s) {
    var o;
    const r = this.container,
      a = r.particles.quadTree.query(n, (u) => this.isEnabled(u)),
      l = r.actualOptions.interactivity.modes.repulse;
    if (!!l)
      for (const u of a) {
        const { dx: c, dy: d, distance: f } = de(u.position, e),
          p =
            ((o = s == null ? void 0 : s.speed) !== null && o !== void 0
              ? o
              : l.speed) * l.factor,
          h = Be(Hn(l.easing)(1 - f / t) * p, 0, l.maxSpeed),
          g = Z.create(f === 0 ? p : (c / f) * h, f === 0 ? p : (d / f) * h);
        u.position.addTo(g);
      }
  }
  singleSelectorRepulse(e, t) {
    const n = this.container,
      s = n.actualOptions.interactivity.modes.repulse;
    if (!s) return;
    const o = document.querySelectorAll(e);
    !o.length ||
      o.forEach((r) => {
        const a = r,
          l = n.retina.pixelRatio,
          u = {
            x: (a.offsetLeft + a.offsetWidth / 2) * l,
            y: (a.offsetTop + a.offsetHeight / 2) * l,
          },
          c = (a.offsetWidth / 2) * l,
          d =
            t.type === "circle"
              ? new ve(u.x, u.y, c)
              : new pe(
                  a.offsetLeft * l,
                  a.offsetTop * l,
                  a.offsetWidth * l,
                  a.offsetHeight * l
                ),
          f = s.divs,
          p = Wn(f, a);
        this.processRepulse(u, c, d, p);
      });
  }
}
async function oh(i) {
  await i.addInteractor("externalRepulse", (e) => new sh(i, e));
}
class rh {
  constructor() {
    (this.factor = 3), (this.radius = 200);
  }
  load(e) {
    !e ||
      (e.factor !== void 0 && (this.factor = e.factor),
      e.radius !== void 0 && (this.radius = e.radius));
  }
}
class ah extends Ae {
  constructor(e) {
    super(e);
  }
  clear(e, t, n) {
    (e.slow.inRange && !n) || (e.slow.factor = 1);
  }
  init() {
    const e = this.container,
      t = e.actualOptions.interactivity.modes.slow;
    !t || (e.retina.slowModeRadius = t.radius * e.retina.pixelRatio);
  }
  async interact() {}
  isEnabled(e) {
    var t;
    const n = this.container,
      s = n.interactivity.mouse,
      o = (
        (t = e == null ? void 0 : e.interactivity) !== null && t !== void 0
          ? t
          : n.actualOptions.interactivity
      ).events;
    return o.onHover.enable && !!s.position && K("slow", o.onHover.mode);
  }
  loadModeOptions(e, ...t) {
    e.slow || (e.slow = new rh());
    for (const n of t) e.slow.load(n == null ? void 0 : n.slow);
  }
  reset(e) {
    e.slow.inRange = !1;
    const t = this.container,
      n = t.actualOptions,
      s = t.interactivity.mouse.position,
      o = t.retina.slowModeRadius,
      r = n.interactivity.modes.slow;
    if (!r || !o || o < 0 || !s) return;
    const a = e.getPosition(),
      l = oe(s, a),
      u = l / o,
      c = r.factor;
    l <= o && ((e.slow.inRange = !0), (e.slow.factor = u / c));
  }
}
async function lh(i) {
  await i.addInteractor("externalSlow", (e) => new ah(e));
}
const uh =
  /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
function ch(i, e, t) {
  const { svgData: n } = i;
  if (!n) return "";
  const s = nt(e, t);
  if (n.includes("fill")) return n.replace(uh, () => s);
  const o = n.indexOf(">");
  return `${n.substring(0, o)} fill="${s}"${n.substring(o)}`;
}
async function wi(i) {
  return new Promise((e) => {
    i.loading = !0;
    const t = new Image();
    (i.element = t),
      t.addEventListener("load", () => {
        (i.loading = !1), e();
      }),
      t.addEventListener("error", () => {
        (i.element = void 0),
          (i.error = !0),
          (i.loading = !1),
          console.error(`Error tsParticles - loading image: ${i.source}`),
          e();
      }),
      (t.src = i.source);
  });
}
async function dh(i) {
  if (i.type !== "svg") {
    await wi(i);
    return;
  }
  i.loading = !0;
  const e = await fetch(i.source);
  e.ok ||
    (console.error("Error tsParticles - Image not found"), (i.error = !0)),
    i.error || (i.svgData = await e.text()),
    (i.loading = !1);
}
function fh(i, e, t, n) {
  var s, o, r;
  const a = ch(
      i,
      t,
      (o = (s = n.opacity) === null || s === void 0 ? void 0 : s.value) !==
        null && o !== void 0
        ? o
        : 1
    ),
    l = {
      color: t,
      data: Object.assign(Object.assign({}, i), { svgData: a }),
      loaded: !1,
      ratio: e.width / e.height,
      replaceColor:
        (r = e.replaceColor) !== null && r !== void 0 ? r : e.replace_color,
      source: e.src,
    };
  return new Promise((u) => {
    const c = new Blob([a], { type: "image/svg+xml" }),
      d = URL || window.URL || window.webkitURL || window,
      f = d.createObjectURL(c),
      p = new Image();
    p.addEventListener("load", () => {
      (l.loaded = !0), (l.element = p), u(l), d.revokeObjectURL(f);
    }),
      p.addEventListener("error", async () => {
        d.revokeObjectURL(f);
        const h = Object.assign(Object.assign({}, i), {
          error: !1,
          loading: !0,
        });
        await wi(h), (l.loaded = !0), (l.element = h.element), u(l);
      }),
      (p.src = f);
  });
}
class hh {
  constructor() {
    this._images = [];
  }
  addImage(e, t) {
    const n = this.getImages(e);
    n == null || n.images.push(t);
  }
  destroy() {
    this._images = [];
  }
  draw(e, t, n, s) {
    var o;
    const r = t.image,
      a = r == null ? void 0 : r.element;
    if (!a) return;
    const l =
        (o = r == null ? void 0 : r.ratio) !== null && o !== void 0 ? o : 1,
      u = { x: -n, y: -n };
    (e.globalAlpha = s),
      e.drawImage(a, u.x, u.y, n * 2, (n * 2) / l),
      (e.globalAlpha = 1);
  }
  getImages(e) {
    const t = this._images.find((n) => n.id === e.id);
    return (
      t || (this._images.push({ id: e.id, images: [] }), this.getImages(e))
    );
  }
  getSidesCount() {
    return 12;
  }
  loadShape(e) {
    if (e.shape !== "image" && e.shape !== "images") return;
    const t = e.container,
      n = this.getImages(t).images,
      s = e.shapeData;
    n.find((r) => r.source === s.src) ||
      this.loadImageShape(t, s).then(() => {
        this.loadShape(e);
      });
  }
  particleInit(e, t) {
    var n;
    if (t.shape !== "image" && t.shape !== "images") return;
    const s = this.getImages(e).images,
      o = t.shapeData,
      r = t.getFillColor(),
      a = (n = o.replaceColor) !== null && n !== void 0 ? n : o.replace_color,
      l = s.find((u) => u.source === o.src);
    if (!!l) {
      if (l.loading) {
        setTimeout(() => {
          this.particleInit(e, t);
        });
        return;
      }
      (async () => {
        var u, c;
        let d;
        l.svgData && r
          ? (d = await fh(l, o, r, t))
          : (d = {
              color: r,
              data: l,
              element: l.element,
              loaded: !0,
              ratio: o.width / o.height,
              replaceColor: a,
              source: o.src,
            }),
          d.ratio || (d.ratio = 1);
        const f = (u = o.fill) !== null && u !== void 0 ? u : t.fill,
          p = (c = o.close) !== null && c !== void 0 ? c : t.close,
          h = { image: d, fill: f, close: p };
        (t.image = h.image), (t.fill = h.fill), (t.close = h.close);
      })();
    }
  }
  async loadImageShape(e, t) {
    var n;
    const s = t.src;
    if (!s) throw new Error("Error tsParticles - No image.src");
    try {
      const o = {
        source: s,
        type: s.substring(s.length - 3),
        error: !1,
        loading: !0,
      };
      this.addImage(e, o),
        await ((
          (n = t.replaceColor) !== null && n !== void 0 ? n : t.replace_color
        )
          ? dh
          : wi)(o);
    } catch {
      throw new Error(`tsParticles error - ${t.src} not found`);
    }
  }
}
async function ph(i) {
  const e = new hh();
  await i.addShape("image", e), await i.addShape("images", e);
}
class vh extends Fe {
  constructor() {
    super(), (this.sync = !1);
  }
  load(e) {
    !e || (super.load(e), e.sync !== void 0 && (this.sync = e.sync));
  }
}
class mh extends Fe {
  constructor() {
    super(), (this.random.minimumValue = 1e-4), (this.sync = !1);
  }
  load(e) {
    !e || (super.load(e), e.sync !== void 0 && (this.sync = e.sync));
  }
}
class gh {
  constructor() {
    (this.count = 0), (this.delay = new vh()), (this.duration = new mh());
  }
  load(e) {
    !e ||
      (e.count !== void 0 && (this.count = e.count),
      this.delay.load(e.delay),
      this.duration.load(e.duration));
  }
}
class yh {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const t = this.container,
      n = e.options,
      s = n.life;
    !s ||
      ((e.life = {
        delay: t.retina.reduceFactor
          ? ((R(s.delay.value) * (s.delay.sync ? 1 : j())) /
              t.retina.reduceFactor) *
            1e3
          : 0,
        delayTime: 0,
        duration: t.retina.reduceFactor
          ? ((R(s.duration.value) * (s.duration.sync ? 1 : j())) /
              t.retina.reduceFactor) *
            1e3
          : 0,
        time: 0,
        count: s.count,
      }),
      e.life.duration <= 0 && (e.life.duration = -1),
      e.life.count <= 0 && (e.life.count = -1),
      e.life && (e.spawning = e.life.delay > 0));
  }
  isEnabled(e) {
    return !e.destroyed;
  }
  loadOptions(e, ...t) {
    e.life || (e.life = new gh());
    for (const n of t) e.life.load(n == null ? void 0 : n.life);
  }
  update(e, t) {
    if (!this.isEnabled(e) || !e.life) return;
    const n = e.life;
    let s = !1;
    if (e.spawning)
      if (((n.delayTime += t.value), n.delayTime >= e.life.delay))
        (s = !0), (e.spawning = !1), (n.delayTime = 0), (n.time = 0);
      else return;
    if (
      n.duration === -1 ||
      e.spawning ||
      (s ? (n.time = 0) : (n.time += t.value), n.time < n.duration)
    )
      return;
    if (
      ((n.time = 0), e.life.count > 0 && e.life.count--, e.life.count === 0)
    ) {
      e.destroy();
      return;
    }
    const o = this.container.canvas.size,
      r = H(0, o.width),
      a = H(0, o.width);
    (e.position.x = se(r)),
      (e.position.y = se(a)),
      (e.spawning = !0),
      (n.delayTime = 0),
      (n.time = 0),
      e.reset();
    const l = e.options.life;
    l &&
      ((n.delay = R(l.delay.value) * 1e3),
      (n.duration = R(l.duration.value) * 1e3));
  }
}
async function Ch(i) {
  await i.addParticleUpdater("life", (e) => new yh(e));
}
class bh {
  draw(e, t, n) {
    e.moveTo(-n / 2, 0), e.lineTo(n / 2, 0);
  }
  getSidesCount() {
    return 1;
  }
}
async function _h(i) {
  await i.addShape("line", new bh());
}
function wh(i, e, t, n) {
  switch (i.options.opacity.animation.destroy) {
    case "max":
      e >= n && i.destroy();
      break;
    case "min":
      e <= t && i.destroy();
      break;
  }
}
function Eh(i, e) {
  var t, n, s, o, r, a;
  if (!i.opacity) return;
  const l = i.opacity.min,
    u = i.opacity.max,
    c = (t = i.opacity.decay) !== null && t !== void 0 ? t : 1;
  if (
    !(
      i.destroyed ||
      !i.opacity.enable ||
      (((n = i.opacity.maxLoops) !== null && n !== void 0 ? n : 0) > 0 &&
        ((s = i.opacity.loops) !== null && s !== void 0 ? s : 0) >
          ((o = i.opacity.maxLoops) !== null && o !== void 0 ? o : 0))
    )
  ) {
    switch (i.opacity.status) {
      case 0:
        i.opacity.value >= u
          ? ((i.opacity.status = 1),
            i.opacity.loops || (i.opacity.loops = 0),
            i.opacity.loops++)
          : (i.opacity.value +=
              ((r = i.opacity.velocity) !== null && r !== void 0 ? r : 0) *
              e.factor);
        break;
      case 1:
        i.opacity.value <= l
          ? ((i.opacity.status = 0),
            i.opacity.loops || (i.opacity.loops = 0),
            i.opacity.loops++)
          : (i.opacity.value -=
              ((a = i.opacity.velocity) !== null && a !== void 0 ? a : 0) *
              e.factor);
        break;
    }
    i.opacity.velocity && i.opacity.decay !== 1 && (i.opacity.velocity *= c),
      wh(i, i.opacity.value, l, u),
      i.destroyed || (i.opacity.value = Be(i.opacity.value, l, u));
  }
}
class xh {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    const t = e.options.opacity;
    e.opacity = {
      enable: t.animation.enable,
      max: ze(t.value),
      min: ft(t.value),
      value: R(t.value),
      loops: 0,
      maxLoops: R(t.animation.count),
    };
    const n = t.animation;
    if (n.enable) {
      (e.opacity.decay = 1 - R(n.decay)), (e.opacity.status = 0);
      const s = t.value;
      switch (
        ((e.opacity.min = ft(s)), (e.opacity.max = ze(s)), n.startValue)
      ) {
        case "min":
          (e.opacity.value = e.opacity.min), (e.opacity.status = 0);
          break;
        case "random":
          (e.opacity.value = se(e.opacity)),
            (e.opacity.status = j() >= 0.5 ? 0 : 1);
          break;
        case "max":
        default:
          (e.opacity.value = e.opacity.max), (e.opacity.status = 1);
          break;
      }
      (e.opacity.velocity =
        (R(n.speed) / 100) * this.container.retina.reduceFactor),
        n.sync || (e.opacity.velocity *= j());
    }
  }
  isEnabled(e) {
    var t, n, s, o;
    return (
      !e.destroyed &&
      !e.spawning &&
      !!e.opacity &&
      e.opacity.enable &&
      (((t = e.opacity.maxLoops) !== null && t !== void 0 ? t : 0) <= 0 ||
        (((n = e.opacity.maxLoops) !== null && n !== void 0 ? n : 0) > 0 &&
          ((s = e.opacity.loops) !== null && s !== void 0 ? s : 0) <
            ((o = e.opacity.maxLoops) !== null && o !== void 0 ? o : 0)))
    );
  }
  reset(e) {
    e.opacity && (e.opacity.loops = 0);
  }
  update(e, t) {
    !this.isEnabled(e) || Eh(e, t);
  }
}
async function Sh(i) {
  await i.addParticleUpdater("opacity", (e) => new xh(e));
}
function Fh(i) {
  if (
    i.outMode !== "bounce" &&
    i.outMode !== "bounce-horizontal" &&
    i.outMode !== "bounceHorizontal" &&
    i.outMode !== "split"
  )
    return;
  i.bounds.right < 0
    ? (i.particle.position.x = i.size + i.offset.x)
    : i.bounds.left > i.canvasSize.width &&
      (i.particle.position.x = i.canvasSize.width - i.size - i.offset.x);
  const e = i.particle.velocity.x;
  let t = !1;
  if (
    (i.direction === "right" &&
      i.bounds.right >= i.canvasSize.width &&
      e > 0) ||
    (i.direction === "left" && i.bounds.left <= 0 && e < 0)
  ) {
    const s = Ne(i.particle.options.bounce.horizontal);
    (i.particle.velocity.x *= -s), (t = !0);
  }
  if (!t) return;
  const n = i.offset.x + i.size;
  i.bounds.right >= i.canvasSize.width
    ? (i.particle.position.x = i.canvasSize.width - n)
    : i.bounds.left <= 0 && (i.particle.position.x = n),
    i.outMode === "split" && i.particle.destroy();
}
function Th(i) {
  if (
    i.outMode !== "bounce" &&
    i.outMode !== "bounce-vertical" &&
    i.outMode !== "bounceVertical" &&
    i.outMode !== "split"
  )
    return;
  i.bounds.bottom < 0
    ? (i.particle.position.y = i.size + i.offset.y)
    : i.bounds.top > i.canvasSize.height &&
      (i.particle.position.y = i.canvasSize.height - i.size - i.offset.y);
  const e = i.particle.velocity.y;
  let t = !1;
  if (
    (i.direction === "bottom" &&
      i.bounds.bottom >= i.canvasSize.height &&
      e > 0) ||
    (i.direction === "top" && i.bounds.top <= 0 && e < 0)
  ) {
    const s = Ne(i.particle.options.bounce.vertical);
    (i.particle.velocity.y *= -s), (t = !0);
  }
  if (!t) return;
  const n = i.offset.y + i.size;
  i.bounds.bottom >= i.canvasSize.height
    ? (i.particle.position.y = i.canvasSize.height - n)
    : i.bounds.top <= 0 && (i.particle.position.y = n),
    i.outMode === "split" && i.particle.destroy();
}
class Bh {
  constructor(e) {
    (this.container = e),
      (this.modes = [
        "bounce",
        "bounce-vertical",
        "bounce-horizontal",
        "bounceVertical",
        "bounceHorizontal",
        "split",
      ]);
  }
  update(e, t, n, s) {
    if (!this.modes.includes(s)) return;
    const o = this.container;
    let r = !1;
    for (const [, f] of o.plugins)
      if ((f.particleBounce !== void 0 && (r = f.particleBounce(e, n, t)), r))
        break;
    if (r) return;
    const a = e.getPosition(),
      l = e.offset,
      u = e.getRadius(),
      c = gt(a, u),
      d = o.canvas.size;
    Fh({
      particle: e,
      outMode: s,
      direction: t,
      bounds: c,
      canvasSize: d,
      offset: l,
      size: u,
    }),
      Th({
        particle: e,
        outMode: s,
        direction: t,
        bounds: c,
        canvasSize: d,
        offset: l,
        size: u,
      });
  }
}
class kh {
  constructor(e) {
    (this.container = e), (this.modes = ["destroy"]);
  }
  update(e, t, n, s) {
    if (!this.modes.includes(s)) return;
    const o = this.container;
    switch (e.outType) {
      case "normal":
      case "outside":
        if (mt(e.position, o.canvas.size, Z.origin, e.getRadius(), t)) return;
        break;
      case "inside": {
        const { dx: r, dy: a } = de(e.position, e.moveCenter),
          { x: l, y: u } = e.velocity;
        if (
          (l < 0 && r > e.moveCenter.radius) ||
          (u < 0 && a > e.moveCenter.radius) ||
          (l >= 0 && r < -e.moveCenter.radius) ||
          (u >= 0 && a < -e.moveCenter.radius)
        )
          return;
        break;
      }
    }
    o.particles.remove(e, void 0, !0);
  }
}
class Dh {
  constructor(e) {
    (this.container = e), (this.modes = ["none"]);
  }
  update(e, t, n, s) {
    if (
      !this.modes.includes(s) ||
      (e.options.move.distance.horizontal && (t === "left" || t === "right")) ||
      (e.options.move.distance.vertical && (t === "top" || t === "bottom"))
    )
      return;
    const o = e.options.move.gravity,
      r = this.container,
      a = r.canvas.size,
      l = e.getRadius();
    if (o.enable) {
      const u = e.position;
      ((!o.inverse && u.y > a.height + l && t === "bottom") ||
        (o.inverse && u.y < -l && t === "top")) &&
        r.particles.remove(e);
    } else {
      if (
        (e.velocity.y > 0 && e.position.y <= a.height + l) ||
        (e.velocity.y < 0 && e.position.y >= -l) ||
        (e.velocity.x > 0 && e.position.x <= a.width + l) ||
        (e.velocity.x < 0 && e.position.x >= -l)
      )
        return;
      mt(e.position, r.canvas.size, Z.origin, l, t) || r.particles.remove(e);
    }
  }
}
class Ah {
  constructor(e) {
    (this.container = e), (this.modes = ["out"]);
  }
  update(e, t, n, s) {
    if (!this.modes.includes(s)) return;
    const o = this.container;
    switch (e.outType) {
      case "inside": {
        const { x: r, y: a } = e.velocity,
          l = Z.origin;
        (l.length = e.moveCenter.radius),
          (l.angle = e.velocity.angle + Math.PI),
          l.addTo(Z.create(e.moveCenter));
        const { dx: u, dy: c } = de(e.position, l);
        if (
          (r <= 0 && u >= 0) ||
          (a <= 0 && c >= 0) ||
          (r >= 0 && u <= 0) ||
          (a >= 0 && c <= 0)
        )
          return;
        (e.position.x = Math.floor(se({ min: 0, max: o.canvas.size.width }))),
          (e.position.y = Math.floor(
            se({ min: 0, max: o.canvas.size.height })
          ));
        const { dx: d, dy: f } = de(e.position, e.moveCenter);
        (e.direction = Math.atan2(-f, -d)), (e.velocity.angle = e.direction);
        break;
      }
      default: {
        if (mt(e.position, o.canvas.size, Z.origin, e.getRadius(), t)) return;
        switch (e.outType) {
          case "outside": {
            (e.position.x =
              Math.floor(
                se({ min: -e.moveCenter.radius, max: e.moveCenter.radius })
              ) + e.moveCenter.x),
              (e.position.y =
                Math.floor(
                  se({ min: -e.moveCenter.radius, max: e.moveCenter.radius })
                ) + e.moveCenter.y);
            const { dx: r, dy: a } = de(e.position, e.moveCenter);
            e.moveCenter.radius &&
              ((e.direction = Math.atan2(a, r)),
              (e.velocity.angle = e.direction));
            break;
          }
          case "normal": {
            const r = e.options.move.warp,
              a = o.canvas.size,
              l = {
                bottom: a.height + e.getRadius() + e.offset.y,
                left: -e.getRadius() - e.offset.x,
                right: a.width + e.getRadius() + e.offset.x,
                top: -e.getRadius() - e.offset.y,
              },
              u = e.getRadius(),
              c = gt(e.position, u);
            t === "right" && c.left > a.width + e.offset.x
              ? ((e.position.x = l.left),
                (e.initialPosition.x = e.position.x),
                r ||
                  ((e.position.y = j() * a.height),
                  (e.initialPosition.y = e.position.y)))
              : t === "left" &&
                c.right < -e.offset.x &&
                ((e.position.x = l.right),
                (e.initialPosition.x = e.position.x),
                r ||
                  ((e.position.y = j() * a.height),
                  (e.initialPosition.y = e.position.y))),
              t === "bottom" && c.top > a.height + e.offset.y
                ? (r ||
                    ((e.position.x = j() * a.width),
                    (e.initialPosition.x = e.position.x)),
                  (e.position.y = l.top),
                  (e.initialPosition.y = e.position.y))
                : t === "top" &&
                  c.bottom < -e.offset.y &&
                  (r ||
                    ((e.position.x = j() * a.width),
                    (e.initialPosition.x = e.position.x)),
                  (e.position.y = l.bottom),
                  (e.initialPosition.y = e.position.y));
            break;
          }
        }
        break;
      }
    }
  }
}
class Mh {
  constructor(e) {
    (this.container = e),
      (this.updaters = [new Bh(e), new kh(e), new Ah(e), new Dh(e)]);
  }
  init() {}
  isEnabled(e) {
    return !e.destroyed && !e.spawning;
  }
  update(e, t) {
    var n, s, o, r;
    const a = e.options.move.outModes;
    this.updateOutMode(
      e,
      t,
      (n = a.bottom) !== null && n !== void 0 ? n : a.default,
      "bottom"
    ),
      this.updateOutMode(
        e,
        t,
        (s = a.left) !== null && s !== void 0 ? s : a.default,
        "left"
      ),
      this.updateOutMode(
        e,
        t,
        (o = a.right) !== null && o !== void 0 ? o : a.default,
        "right"
      ),
      this.updateOutMode(
        e,
        t,
        (r = a.top) !== null && r !== void 0 ? r : a.default,
        "top"
      );
  }
  updateOutMode(e, t, n, s) {
    for (const o of this.updaters) o.update(e, s, t, n);
  }
}
async function Ph(i) {
  await i.addParticleUpdater("outModes", (e) => new Mh(e));
}
class Oh {
  init() {}
  isEnabled(e) {
    return (
      !Ke() &&
      !e.destroyed &&
      e.container.actualOptions.interactivity.events.onHover.parallax.enable
    );
  }
  move(e) {
    const t = e.container,
      n = t.actualOptions;
    if (Ke() || !n.interactivity.events.onHover.parallax.enable) return;
    const s = n.interactivity.events.onHover.parallax.force,
      o = t.interactivity.mouse.position;
    if (!o) return;
    const r = { x: t.canvas.size.width / 2, y: t.canvas.size.height / 2 },
      a = n.interactivity.events.onHover.parallax.smooth,
      l = e.getRadius() / s,
      u = { x: (o.x - r.x) * l, y: (o.y - r.y) * l };
    (e.offset.x += (u.x - e.offset.x) / a),
      (e.offset.y += (u.y - e.offset.y) / a);
  }
}
async function Lh(i) {
  i.addMover("parallax", () => new Oh());
}
class zh extends _i {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {}
  async interact(e) {
    var t;
    const n = this.container,
      s =
        (t = e.retina.attractDistance) !== null && t !== void 0
          ? t
          : n.retina.attractDistance,
      o = e.getPosition(),
      r = n.particles.quadTree.queryCircle(o, s);
    for (const a of r) {
      if (
        e === a ||
        !a.options.move.attract.enable ||
        a.destroyed ||
        a.spawning
      )
        continue;
      const l = a.getPosition(),
        { dx: u, dy: c } = de(o, l),
        d = e.options.move.attract.rotate,
        f = u / (d.x * 1e3),
        p = c / (d.y * 1e3),
        h = a.size.value / e.size.value,
        g = 1 / h;
      (e.velocity.x -= f * h),
        (e.velocity.y -= p * h),
        (a.velocity.x += f * g),
        (a.velocity.y += p * g);
    }
  }
  isEnabled(e) {
    return e.options.move.attract.enable;
  }
  reset() {}
}
async function Ih(i) {
  await i.addInteractor("particlesAttract", (e) => new zh(e));
}
function sn(i, e, t, n, s, o) {
  const r = Be((i.options.collisions.absorb.speed * s.factor) / 10, 0, n);
  (i.size.value += r / 2),
    (t.size.value -= r),
    n <= o && ((t.size.value = 0), t.destroy());
}
function Rh(i, e, t, n) {
  const s = i.getRadius(),
    o = e.getRadius();
  s === void 0 && o !== void 0
    ? i.destroy()
    : s !== void 0 && o === void 0
    ? e.destroy()
    : s !== void 0 &&
      o !== void 0 &&
      (s >= o ? sn(i, s, e, o, t, n) : sn(e, o, i, s, t, n));
}
function cs(i, e) {
  Xn(si(i), si(e));
}
function $h(i, e) {
  !i.unbreakable && !e.unbreakable && cs(i, e),
    i.getRadius() === void 0 && e.getRadius() !== void 0
      ? i.destroy()
      : i.getRadius() !== void 0 && e.getRadius() === void 0
      ? e.destroy()
      : i.getRadius() !== void 0 &&
        e.getRadius() !== void 0 &&
        (i.getRadius() >= e.getRadius() ? i : e).destroy();
}
function Nh(i, e, t, n) {
  switch (i.options.collisions.mode) {
    case "absorb": {
      Rh(i, e, t, n);
      break;
    }
    case "bounce": {
      cs(i, e);
      break;
    }
    case "destroy": {
      $h(i, e);
      break;
    }
  }
}
class Hh extends _i {
  constructor(e) {
    super(e);
  }
  clear() {}
  init() {}
  async interact(e, t) {
    const n = this.container,
      s = e.getPosition(),
      o = e.getRadius(),
      r = n.particles.quadTree.queryCircle(s, o * 2);
    for (const a of r) {
      if (
        e === a ||
        !a.options.collisions.enable ||
        e.options.collisions.mode !== a.options.collisions.mode ||
        a.destroyed ||
        a.spawning
      )
        continue;
      const l = a.getPosition(),
        u = a.getRadius();
      if (Math.abs(Math.round(s.z) - Math.round(l.z)) > o + u) continue;
      const c = oe(s, l),
        d = o + u;
      c > d || Nh(e, a, t, n.retina.pixelRatio);
    }
  }
  isEnabled(e) {
    return e.options.collisions.enable;
  }
  reset() {}
}
async function Vh(i) {
  await i.addInteractor("particlesCollisions", (e) => new Hh(e));
}
class jh extends ve {
  constructor(e, t, n, s) {
    super(e, t, n),
      (this.canvasSize = s),
      (this.canvasSize = Object.assign({}, s));
  }
  contains(e) {
    if (super.contains(e)) return !0;
    const t = { x: e.x - this.canvasSize.width, y: e.y };
    if (super.contains(t)) return !0;
    const n = {
      x: e.x - this.canvasSize.width,
      y: e.y - this.canvasSize.height,
    };
    if (super.contains(n)) return !0;
    const s = { x: e.x, y: e.y - this.canvasSize.height };
    return super.contains(s);
  }
  intersects(e) {
    if (super.intersects(e)) return !0;
    const t = e,
      n = e,
      s = {
        x: e.position.x - this.canvasSize.width,
        y: e.position.y - this.canvasSize.height,
      };
    if (n.radius !== void 0) {
      const o = new ve(s.x, s.y, n.radius * 2);
      return super.intersects(o);
    } else if (t.size !== void 0) {
      const o = new pe(s.x, s.y, t.size.width * 2, t.size.height * 2);
      return super.intersects(o);
    }
    return !1;
  }
}
class qh {
  constructor() {
    (this.blur = 5),
      (this.color = new ie()),
      (this.color.value = "#000"),
      (this.enable = !1);
  }
  load(e) {
    !e ||
      (e.blur !== void 0 && (this.blur = e.blur),
      (this.color = ie.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable));
  }
}
class Uh {
  constructor() {
    (this.enable = !1), (this.frequency = 1);
  }
  load(e) {
    !e ||
      (e.color !== void 0 && (this.color = ie.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.frequency !== void 0 && (this.frequency = e.frequency),
      e.opacity !== void 0 && (this.opacity = e.opacity));
  }
}
class Gh {
  constructor() {
    (this.blink = !1),
      (this.color = new ie()),
      (this.color.value = "#fff"),
      (this.consent = !1),
      (this.distance = 100),
      (this.enable = !1),
      (this.frequency = 1),
      (this.opacity = 1),
      (this.shadow = new qh()),
      (this.triangles = new Uh()),
      (this.width = 1),
      (this.warp = !1);
  }
  load(e) {
    !e ||
      (e.id !== void 0 && (this.id = e.id),
      e.blink !== void 0 && (this.blink = e.blink),
      (this.color = ie.create(this.color, e.color)),
      e.consent !== void 0 && (this.consent = e.consent),
      e.distance !== void 0 && (this.distance = e.distance),
      e.enable !== void 0 && (this.enable = e.enable),
      e.frequency !== void 0 && (this.frequency = e.frequency),
      e.opacity !== void 0 && (this.opacity = e.opacity),
      this.shadow.load(e.shadow),
      this.triangles.load(e.triangles),
      e.width !== void 0 && (this.width = e.width),
      e.warp !== void 0 && (this.warp = e.warp));
  }
}
function Wh(i, e, t, n, s) {
  let o = oe(i, e);
  if (!s || o <= t) return o;
  const r = { x: e.x - n.width, y: e.y };
  if (((o = oe(i, r)), o <= t)) return o;
  const a = { x: e.x - n.width, y: e.y - n.height };
  if (((o = oe(i, a)), o <= t)) return o;
  const l = { x: e.x, y: e.y - n.height };
  return (o = oe(i, l)), o;
}
class Xh extends _i {
  constructor(e) {
    super(e), (this.linkContainer = e);
  }
  clear() {}
  init() {
    this.linkContainer.particles.linksColors = new Map();
  }
  async interact(e) {
    var t;
    if (!e.options.links) return;
    e.links = [];
    const n = e.getPosition(),
      s = this.container,
      o = s.canvas.size;
    if (n.x < 0 || n.y < 0 || n.x > o.width || n.y > o.height) return;
    const r = e.options.links,
      a = r.opacity,
      l = (t = e.retina.linksDistance) !== null && t !== void 0 ? t : 0,
      u = r.warp,
      c = u ? new jh(n.x, n.y, l, o) : new ve(n.x, n.y, l),
      d = s.particles.quadTree.query(c);
    for (const f of d) {
      const p = f.options.links;
      if (
        e === f ||
        !(p != null && p.enable) ||
        r.id !== p.id ||
        f.spawning ||
        f.destroyed ||
        !f.links ||
        e.links.map((E) => E.destination).indexOf(f) !== -1 ||
        f.links.map((E) => E.destination).indexOf(e) !== -1
      )
        continue;
      const h = f.getPosition();
      if (h.x < 0 || h.y < 0 || h.x > o.width || h.y > o.height) continue;
      const g = Wh(n, h, l, o, u && p.warp);
      if (g > l) return;
      const y = (1 - g / l) * a;
      this.setColor(e), e.links.push({ destination: f, opacity: y });
    }
  }
  isEnabled(e) {
    var t;
    return !!(!((t = e.options.links) === null || t === void 0) && t.enable);
  }
  loadParticlesOptions(e, ...t) {
    var n, s;
    e.links || (e.links = new Gh());
    for (const o of t)
      e.links.load(
        (s =
          (n = o == null ? void 0 : o.links) !== null && n !== void 0
            ? n
            : o == null
            ? void 0
            : o.lineLinked) !== null && s !== void 0
          ? s
          : o == null
          ? void 0
          : o.line_linked
      );
  }
  reset() {}
  setColor(e) {
    if (!e.options.links) return;
    const t = this.linkContainer,
      n = e.options.links;
    let s =
      n.id === void 0
        ? t.particles.linksColor
        : t.particles.linksColors.get(n.id);
    if (s) return;
    const o = n.color;
    (s = es(o, n.blink, n.consent)),
      n.id === void 0
        ? (t.particles.linksColor = s)
        : t.particles.linksColors.set(n.id, s);
  }
}
async function Yh(i) {
  await i.addInteractor("particlesLinks", (e) => new Xh(e));
}
function Zh(i, e, t, n, s, o, r, a, l, u, c, d) {
  let f = !1;
  if (oe(t, n) <= s) ut(i, t, n), (f = !0);
  else if (r) {
    let p, h;
    const g = { x: n.x - o.width, y: n.y },
      y = de(t, g);
    if (y.distance <= s) {
      const E = t.y - (y.dy / y.dx) * t.x;
      (p = { x: 0, y: E }), (h = { x: o.width, y: E });
    } else {
      const E = { x: n.x, y: n.y - o.height },
        C = de(t, E);
      if (C.distance <= s) {
        const _ = -(t.y - (C.dy / C.dx) * t.x) / (C.dy / C.dx);
        (p = { x: _, y: 0 }), (h = { x: _, y: o.height });
      } else {
        const b = { x: n.x - o.width, y: n.y - o.height },
          _ = de(t, b);
        if (_.distance <= s) {
          const x = t.y - (_.dy / _.dx) * t.x;
          (p = { x: -x / (_.dy / _.dx), y: x }),
            (h = { x: p.x + o.width, y: p.y + o.height });
        }
      }
    }
    p && h && (ut(i, t, p), ut(i, n, h), (f = !0));
  }
  if (!!f) {
    if (
      ((i.lineWidth = e),
      a && (i.globalCompositeOperation = l),
      (i.strokeStyle = Ie(u, c)),
      d.enable)
    ) {
      const p = Se(d.color);
      p && ((i.shadowBlur = d.blur), (i.shadowColor = Ie(p)));
    }
    i.stroke();
  }
}
function Kh(i, e, t, n, s, o, r, a) {
  u0(i, e, t, n),
    s && (i.globalCompositeOperation = o),
    (i.fillStyle = Ie(r, a)),
    i.fill();
}
function Jh(i) {
  return i.sort((e, t) => e - t), i.join("_");
}
function on(i, e) {
  const t = Jh(i.map((s) => s.id));
  let n = e.get(t);
  return n === void 0 && ((n = j()), e.set(t, n)), n;
}
class Qh {
  constructor(e) {
    (this.container = e),
      (this._freqs = { links: new Map(), triangles: new Map() });
  }
  drawParticle(e, t) {
    var n;
    const s = this.container,
      o = t.options;
    if (!t.links || t.links.length <= 0) return;
    const r = t.links.filter(
      (a) =>
        o.links && this.getLinkFrequency(t, a.destination) <= o.links.frequency
    );
    for (const a of r)
      this.drawTriangles(s, o, t, a, r),
        a.opacity > 0 &&
          ((n = t.retina.linksWidth) !== null && n !== void 0 ? n : 0) > 0 &&
          this.drawLinkLine(t, a);
  }
  async init() {
    (this._freqs.links = new Map()), (this._freqs.triangles = new Map());
  }
  particleCreated(e) {
    if (((e.links = []), !e.options.links)) return;
    const t = this.container.retina.pixelRatio;
    (e.retina.linksDistance = e.options.links.distance * t),
      (e.retina.linksWidth = e.options.links.width * t);
  }
  particleDestroyed(e) {
    e.links = [];
  }
  drawLinkLine(e, t) {
    const n = this.container,
      s = n.actualOptions,
      o = t.destination,
      r = e.getPosition(),
      a = o.getPosition();
    let l = t.opacity;
    n.canvas.draw((u) => {
      var c, d, f;
      if (!e.options.links) return;
      let p;
      const h =
        (c = e.options.twinkle) === null || c === void 0 ? void 0 : c.lines;
      if (h != null && h.enable) {
        const E = h.frequency,
          C = Se(h.color);
        j() < E && C && ((p = C), (l = R(h.opacity)));
      }
      if (!p) {
        const E = e.options.links,
          C =
            (E == null ? void 0 : E.id) !== void 0
              ? n.particles.linksColors.get(E.id)
              : n.particles.linksColor;
        p = oi(e, o, C);
      }
      if (!p) return;
      const g = (d = e.retina.linksWidth) !== null && d !== void 0 ? d : 0,
        y = (f = e.retina.linksDistance) !== null && f !== void 0 ? f : 0;
      Zh(
        u,
        g,
        r,
        a,
        y,
        n.canvas.size,
        e.options.links.warp,
        s.backgroundMask.enable,
        s.backgroundMask.composite,
        p,
        l,
        e.options.links.shadow
      );
    });
  }
  drawLinkTriangle(e, t, n) {
    var s;
    if (!e.options.links) return;
    const o = this.container,
      r = o.actualOptions,
      a = t.destination,
      l = n.destination,
      u = e.options.links.triangles,
      c =
        (s = u.opacity) !== null && s !== void 0
          ? s
          : (t.opacity + n.opacity) / 2;
    c <= 0 ||
      o.canvas.draw((d) => {
        var f;
        const p = e.getPosition(),
          h = a.getPosition(),
          g = l.getPosition(),
          y = (f = e.retina.linksDistance) !== null && f !== void 0 ? f : 0;
        if (oe(p, h) > y || oe(g, h) > y || oe(g, p) > y) return;
        let E = Se(u.color);
        if (!E) {
          const C = e.options.links,
            b =
              (C == null ? void 0 : C.id) !== void 0
                ? o.particles.linksColors.get(C.id)
                : o.particles.linksColor;
          E = oi(e, a, b);
        }
        !E ||
          Kh(
            d,
            p,
            h,
            g,
            r.backgroundMask.enable,
            r.backgroundMask.composite,
            E,
            c
          );
      });
  }
  drawTriangles(e, t, n, s, o) {
    var r, a, l;
    const u = s.destination;
    if (
      !(
        ((r = t.links) === null || r === void 0
          ? void 0
          : r.triangles.enable) &&
        ((a = u.options.links) === null || a === void 0
          ? void 0
          : a.triangles.enable)
      )
    )
      return;
    const c =
      (l = u.links) === null || l === void 0
        ? void 0
        : l.filter((d) => {
            const f = this.getLinkFrequency(u, d.destination);
            return (
              u.options.links &&
              f <= u.options.links.frequency &&
              o.findIndex((p) => p.destination === d.destination) >= 0
            );
          });
    if (!!(c != null && c.length))
      for (const d of c) {
        const f = d.destination;
        this.getTriangleFrequency(n, u, f) > t.links.triangles.frequency ||
          this.drawLinkTriangle(n, s, d);
      }
  }
  getLinkFrequency(e, t) {
    return on([e, t], this._freqs.links);
  }
  getTriangleFrequency(e, t, n) {
    return on([e, t, n], this._freqs.triangles);
  }
}
class e5 {
  constructor() {
    this.id = "links";
  }
  getPlugin(e) {
    return new Qh(e);
  }
  loadOptions() {}
  needsPlugin() {
    return !0;
  }
}
async function t5(i) {
  const e = new e5();
  await i.addPlugin(e);
}
async function i5(i) {
  await Yh(i), await t5(i);
}
class ds {
  draw(e, t, n) {
    const s = this.getCenter(t, n),
      o = this.getSidesData(t, n),
      r = o.count.numerator * o.count.denominator,
      a = o.count.numerator / o.count.denominator,
      l = (180 * (a - 2)) / a,
      u = Math.PI - (Math.PI * l) / 180;
    if (!!e) {
      e.beginPath(), e.translate(s.x, s.y), e.moveTo(0, 0);
      for (let c = 0; c < r; c++)
        e.lineTo(o.length, 0), e.translate(o.length, 0), e.rotate(u);
    }
  }
  getSidesCount(e) {
    var t, n;
    const s = e.shapeData;
    return (n =
      (t = s == null ? void 0 : s.sides) !== null && t !== void 0
        ? t
        : s == null
        ? void 0
        : s.nb_sides) !== null && n !== void 0
      ? n
      : 5;
  }
}
class n5 extends ds {
  getCenter(e, t) {
    const n = this.getSidesCount(e);
    return { x: -t / (n / 3.5), y: -t / (2.66 / 3.5) };
  }
  getSidesData(e, t) {
    var n, s;
    const o = e.shapeData,
      r =
        (s =
          (n = o == null ? void 0 : o.sides) !== null && n !== void 0
            ? n
            : o == null
            ? void 0
            : o.nb_sides) !== null && s !== void 0
          ? s
          : 5;
    return {
      count: { denominator: 1, numerator: r },
      length: (t * 2.66) / (r / 3),
    };
  }
}
class s5 extends ds {
  getCenter(e, t) {
    return { x: -t, y: t / 1.66 };
  }
  getSidesCount() {
    return 3;
  }
  getSidesData(e, t) {
    return { count: { denominator: 2, numerator: 3 }, length: t * 2 };
  }
}
async function o5(i) {
  await i.addShape("polygon", new n5());
}
async function r5(i) {
  await i.addShape("triangle", new s5());
}
async function a5(i) {
  await o5(i), await r5(i);
}
function l5(i, e, t, n) {
  switch (i.options.size.animation.destroy) {
    case "max":
      e >= n && i.destroy();
      break;
    case "min":
      e <= t && i.destroy();
      break;
  }
}
function u5(i, e) {
  var t, n, s, o, r;
  const a = ((t = i.size.velocity) !== null && t !== void 0 ? t : 0) * e.factor,
    l = i.size.min,
    u = i.size.max,
    c = (n = i.size.decay) !== null && n !== void 0 ? n : 1;
  if (
    !(
      i.destroyed ||
      !i.size.enable ||
      (((s = i.size.maxLoops) !== null && s !== void 0 ? s : 0) > 0 &&
        ((o = i.size.loops) !== null && o !== void 0 ? o : 0) >
          ((r = i.size.maxLoops) !== null && r !== void 0 ? r : 0))
    )
  ) {
    switch (i.size.status) {
      case 0:
        i.size.value >= u
          ? ((i.size.status = 1),
            i.size.loops || (i.size.loops = 0),
            i.size.loops++)
          : (i.size.value += a);
        break;
      case 1:
        i.size.value <= l
          ? ((i.size.status = 0),
            i.size.loops || (i.size.loops = 0),
            i.size.loops++)
          : (i.size.value -= a);
    }
    i.size.velocity && c !== 1 && (i.size.velocity *= c),
      l5(i, i.size.value, l, u),
      i.destroyed || (i.size.value = Be(i.size.value, l, u));
  }
}
class c5 {
  init(e) {
    var t;
    const n = e.container,
      s = e.options.size,
      o = s.animation;
    o.enable &&
      ((e.size.velocity =
        (((t = e.retina.sizeAnimationSpeed) !== null && t !== void 0
          ? t
          : n.retina.sizeAnimationSpeed) /
          100) *
        n.retina.reduceFactor),
      o.sync || (e.size.velocity *= j()));
  }
  isEnabled(e) {
    var t, n, s, o;
    return (
      !e.destroyed &&
      !e.spawning &&
      e.size.enable &&
      (((t = e.size.maxLoops) !== null && t !== void 0 ? t : 0) <= 0 ||
        (((n = e.size.maxLoops) !== null && n !== void 0 ? n : 0) > 0 &&
          ((s = e.size.loops) !== null && s !== void 0 ? s : 0) <
            ((o = e.size.maxLoops) !== null && o !== void 0 ? o : 0)))
    );
  }
  reset(e) {
    e.size.loops = 0;
  }
  update(e, t) {
    !this.isEnabled(e) || u5(e, t);
  }
}
async function d5(i) {
  await i.addParticleUpdater("size", () => new c5());
}
const bt = Math.sqrt(2);
class f5 {
  draw(e, t, n) {
    e.rect(-n / bt, -n / bt, (n * 2) / bt, (n * 2) / bt);
  }
  getSidesCount() {
    return 4;
  }
}
async function h5(i) {
  const e = new f5();
  await i.addShape("edge", e), await i.addShape("square", e);
}
class p5 {
  draw(e, t, n) {
    var s;
    const o = t.shapeData,
      r = this.getSidesCount(t),
      a = (s = o == null ? void 0 : o.inset) !== null && s !== void 0 ? s : 2;
    e.moveTo(0, 0 - n);
    for (let l = 0; l < r; l++)
      e.rotate(Math.PI / r),
        e.lineTo(0, 0 - n * a),
        e.rotate(Math.PI / r),
        e.lineTo(0, 0 - n);
  }
  getSidesCount(e) {
    var t, n;
    const s = e.shapeData;
    return (n =
      (t = s == null ? void 0 : s.sides) !== null && t !== void 0
        ? t
        : s == null
        ? void 0
        : s.nb_sides) !== null && n !== void 0
      ? n
      : 5;
  }
}
async function v5(i) {
  await i.addShape("star", new p5());
}
function ei(i, e, t, n, s) {
  var o, r;
  const a = e;
  if (!a || !a.enable) return;
  const l = se(t.offset),
    u =
      ((o = e.velocity) !== null && o !== void 0 ? o : 0) * i.factor + l * 3.6,
    c = (r = e.decay) !== null && r !== void 0 ? r : 1;
  !s || a.status === 0
    ? ((a.value += u),
      s && a.value > n && ((a.status = 1), (a.value -= a.value % n)))
    : ((a.value -= u), a.value < 0 && ((a.status = 0), (a.value += a.value))),
    a.velocity && c !== 1 && (a.velocity *= c),
    a.value > n && (a.value %= n);
}
function m5(i, e) {
  var t, n, s, o, r, a, l, u, c, d;
  if (!(!((t = i.stroke) === null || t === void 0) && t.color)) return;
  const f = i.stroke.color.animation,
    p =
      (s = (n = i.strokeColor) === null || n === void 0 ? void 0 : n.h) !==
        null && s !== void 0
        ? s
        : (o = i.color) === null || o === void 0
        ? void 0
        : o.h;
  p && ei(e, p, f.h, 360, !1);
  const h =
    (a = (r = i.strokeColor) === null || r === void 0 ? void 0 : r.s) !==
      null && a !== void 0
      ? a
      : (l = i.color) === null || l === void 0
      ? void 0
      : l.s;
  h && ei(e, h, f.s, 100, !0);
  const g =
    (c = (u = i.strokeColor) === null || u === void 0 ? void 0 : u.l) !==
      null && c !== void 0
      ? c
      : (d = i.color) === null || d === void 0
      ? void 0
      : d.l;
  g && ei(e, g, f.l, 100, !0);
}
class g5 {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    var t, n;
    const s = this.container;
    (e.stroke = xe(e.options.stroke, e.id, e.options.reduceDuplicates)),
      (e.strokeWidth = e.stroke.width * s.retina.pixelRatio);
    const o =
      (t = qe(e.stroke.color)) !== null && t !== void 0 ? t : e.getFillColor();
    o &&
      (e.strokeColor = ts(
        o,
        (n = e.stroke.color) === null || n === void 0 ? void 0 : n.animation,
        s.retina.reduceFactor
      ));
  }
  isEnabled(e) {
    var t, n, s, o;
    const r = (t = e.stroke) === null || t === void 0 ? void 0 : t.color;
    return (
      !e.destroyed &&
      !e.spawning &&
      !!r &&
      ((((n = e.strokeColor) === null || n === void 0 ? void 0 : n.h.value) !==
        void 0 &&
        r.animation.h.enable) ||
        (((s = e.strokeColor) === null || s === void 0 ? void 0 : s.s.value) !==
          void 0 &&
          r.animation.s.enable) ||
        (((o = e.strokeColor) === null || o === void 0 ? void 0 : o.l.value) !==
          void 0 &&
          r.animation.l.enable))
    );
  }
  update(e, t) {
    !this.isEnabled(e) || m5(e, t);
  }
}
async function y5(i) {
  await i.addParticleUpdater("strokeColor", (e) => new g5(e));
}
const ai = ["text", "character", "char"];
class C5 {
  draw(e, t, n, s) {
    var o, r, a;
    const l = t.shapeData;
    if (l === void 0) return;
    const u = l.value;
    if (u === void 0) return;
    const c = t;
    c.text === void 0 && (c.text = xe(u, t.randomIndexData));
    const d = c.text,
      f = (o = l.style) !== null && o !== void 0 ? o : "",
      p = (r = l.weight) !== null && r !== void 0 ? r : "400",
      h = Math.round(n) * 2,
      g = (a = l.font) !== null && a !== void 0 ? a : "Verdana",
      y = t.fill,
      E = (d.length * n) / 2;
    e.font = `${f} ${p} ${h}px "${g}"`;
    const C = { x: -E, y: n / 2 };
    (e.globalAlpha = s),
      y ? e.fillText(d, C.x, C.y) : e.strokeText(d, C.x, C.y),
      (e.globalAlpha = 1);
  }
  getSidesCount() {
    return 12;
  }
  async init(e) {
    const t = e.actualOptions;
    if (ai.find((n) => K(n, t.particles.shape.type))) {
      const n = ai.map((o) => t.particles.shape.options[o]).find((o) => !!o),
        s = [];
      J(n, (o) => {
        s.push(i0(o.font, o.weight));
      }),
        await Promise.all(s);
    }
  }
}
async function b5(i) {
  const e = new C5();
  for (const t of ai) await i.addShape(t, e);
}
async function _5(i) {
  await yf(i),
    await Lh(i),
    await Ff(i),
    await kf(i),
    await Pf(i),
    await Hf(i),
    await Wf(i),
    await Yf(i),
    await Jf(i),
    await th(i),
    await oh(i),
    await lh(i),
    await Ih(i),
    await Vh(i),
    await i5(i),
    await bf(i),
    await ph(i),
    await _h(i),
    await a5(i),
    await h5(i),
    await v5(i),
    await b5(i),
    await Ch(i),
    await Sh(i),
    await d5(i),
    await ff(i),
    await Ef(i),
    await y5(i),
    await Ph(i),
    await af(i);
}
class w5 {
  constructor() {
    (this.enable = !1), (this.speed = 0), (this.decay = 0), (this.sync = !1);
  }
  load(e) {
    !e ||
      (e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0 && (this.speed = H(e.speed)),
      e.decay !== void 0 && (this.decay = H(e.decay)),
      e.sync !== void 0 && (this.sync = e.sync));
  }
}
class E5 extends Fe {
  constructor() {
    super(),
      (this.animation = new w5()),
      (this.direction = "clockwise"),
      (this.enable = !1),
      (this.value = 0);
  }
  load(e) {
    super.load(e),
      e &&
        (this.animation.load(e.animation),
        e.direction !== void 0 && (this.direction = e.direction),
        e.enable !== void 0 && (this.enable = e.enable));
  }
}
function x5(i, e) {
  var t, n;
  if (!i.tilt || !i.options.tilt) return;
  const s = i.options.tilt,
    o = s.animation,
    r = ((t = i.tilt.velocity) !== null && t !== void 0 ? t : 0) * e.factor,
    a = 2 * Math.PI,
    l = (n = i.tilt.decay) !== null && n !== void 0 ? n : 1;
  if (!!o.enable) {
    switch (i.tilt.status) {
      case 0:
        (i.tilt.value += r), i.tilt.value > a && (i.tilt.value -= a);
        break;
      case 1:
      default:
        (i.tilt.value -= r), i.tilt.value < 0 && (i.tilt.value += a);
        break;
    }
    i.tilt.velocity && l !== 1 && (i.tilt.velocity *= l);
  }
}
class S5 {
  constructor(e) {
    this.container = e;
  }
  getTransformValues(e) {
    var t;
    const n =
      ((t = e.tilt) === null || t === void 0 ? void 0 : t.enable) && e.tilt;
    return {
      b: n ? Math.cos(n.value) * n.cosDirection : void 0,
      c: n ? Math.sin(n.value) * n.sinDirection : void 0,
    };
  }
  init(e) {
    var t;
    const n = e.options.tilt;
    if (!n) return;
    e.tilt = {
      enable: n.enable,
      value: (R(n.value) * Math.PI) / 180,
      sinDirection: j() >= 0.5 ? 1 : -1,
      cosDirection: j() >= 0.5 ? 1 : -1,
    };
    let s = n.direction;
    switch (
      (s === "random" &&
        (s = Math.floor(j() * 2) > 0 ? "counter-clockwise" : "clockwise"),
      s)
    ) {
      case "counter-clockwise":
      case "counterClockwise":
        e.tilt.status = 1;
        break;
      case "clockwise":
        e.tilt.status = 0;
        break;
    }
    const o =
      (t = e.options.tilt) === null || t === void 0 ? void 0 : t.animation;
    o != null &&
      o.enable &&
      ((e.tilt.decay = 1 - R(o.decay)),
      (e.tilt.velocity =
        (R(o.speed) / 360) * this.container.retina.reduceFactor),
      o.sync || (e.tilt.velocity *= j()));
  }
  isEnabled(e) {
    var t;
    const n =
      (t = e.options.tilt) === null || t === void 0 ? void 0 : t.animation;
    return !e.destroyed && !e.spawning && !!(n != null && n.enable);
  }
  loadOptions(e, ...t) {
    e.tilt || (e.tilt = new E5());
    for (const n of t) e.tilt.load(n == null ? void 0 : n.tilt);
  }
  update(e, t) {
    !this.isEnabled(e) || x5(e, t);
  }
}
async function F5(i) {
  await i.addParticleUpdater("tilt", (e) => new S5(e));
}
class rn {
  constructor() {
    (this.enable = !1), (this.frequency = 0.05), (this.opacity = 1);
  }
  load(e) {
    !e ||
      (e.color !== void 0 && (this.color = ie.create(this.color, e.color)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.frequency !== void 0 && (this.frequency = e.frequency),
      e.opacity !== void 0 && (this.opacity = H(e.opacity)));
  }
}
class T5 {
  constructor() {
    (this.lines = new rn()), (this.particles = new rn());
  }
  load(e) {
    !e || (this.lines.load(e.lines), this.particles.load(e.particles));
  }
}
class B5 {
  getColorStyles(e, t, n, s) {
    const o = e.options,
      r = o.twinkle;
    if (!r) return {};
    const a = r.particles,
      l = a.enable && j() < a.frequency,
      u = e.options.zIndex,
      c = (1 - e.zIndexFactor) ** u.opacityRate,
      d = l ? R(a.opacity) * c : s,
      f = qe(a.color),
      p = f ? nt(f, d) : void 0,
      h = {},
      g = l && p;
    return (h.fill = g ? p : void 0), (h.stroke = g ? p : void 0), h;
  }
  init() {}
  isEnabled(e) {
    const t = e.options,
      n = t.twinkle;
    return n ? n.particles.enable : !1;
  }
  loadOptions(e, ...t) {
    e.twinkle || (e.twinkle = new T5());
    for (const n of t) e.twinkle.load(n == null ? void 0 : n.twinkle);
  }
  update() {}
}
async function k5(i) {
  await i.addParticleUpdater("twinkle", () => new B5());
}
class D5 {
  constructor() {
    (this.angle = 50), (this.move = 10);
  }
  load(e) {
    !e ||
      (e.angle !== void 0 && (this.angle = H(e.angle)),
      e.move !== void 0 && (this.move = H(e.move)));
  }
}
class A5 {
  constructor() {
    (this.distance = 5), (this.enable = !1), (this.speed = new D5());
  }
  load(e) {
    if (
      !!e &&
      (e.distance !== void 0 && (this.distance = H(e.distance)),
      e.enable !== void 0 && (this.enable = e.enable),
      e.speed !== void 0)
    )
      if (typeof e.speed == "number") this.speed.load({ angle: e.speed });
      else {
        const t = e.speed;
        t.min !== void 0
          ? this.speed.load({ angle: t })
          : this.speed.load(e.speed);
      }
  }
}
function M5(i, e) {
  var t;
  const n = i.options.wobble;
  if (!(n != null && n.enable) || !i.wobble) return;
  const s = i.wobble.angleSpeed * e.factor,
    o = i.wobble.moveSpeed * e.factor,
    r =
      (o *
        (((t = i.retina.wobbleDistance) !== null && t !== void 0 ? t : 0) *
          e.factor)) /
      (1e3 / 60),
    a = 2 * Math.PI;
  (i.wobble.angle += s),
    i.wobble.angle > a && (i.wobble.angle -= a),
    (i.position.x += r * Math.cos(i.wobble.angle)),
    (i.position.y += r * Math.abs(Math.sin(i.wobble.angle)));
}
class P5 {
  constructor(e) {
    this.container = e;
  }
  init(e) {
    var t;
    const n = e.options.wobble;
    n != null && n.enable
      ? (e.wobble = {
          angle: j() * Math.PI * 2,
          angleSpeed: R(n.speed.angle) / 360,
          moveSpeed: R(n.speed.move) / 10,
        })
      : (e.wobble = { angle: 0, angleSpeed: 0, moveSpeed: 0 }),
      (e.retina.wobbleDistance =
        R(
          (t = n == null ? void 0 : n.distance) !== null && t !== void 0 ? t : 0
        ) * this.container.retina.pixelRatio);
  }
  isEnabled(e) {
    var t;
    return (
      !e.destroyed &&
      !e.spawning &&
      !!(!((t = e.options.wobble) === null || t === void 0) && t.enable)
    );
  }
  loadOptions(e, ...t) {
    e.wobble || (e.wobble = new A5());
    for (const n of t) e.wobble.load(n == null ? void 0 : n.wobble);
  }
  update(e, t) {
    !this.isEnabled(e) || M5(e, t);
  }
}
async function O5(i) {
  await i.addParticleUpdater("wobble", (e) => new P5(e));
}
async function L5(i) {
  await _5(i),
    await j2(i),
    await rf(i),
    await F5(i),
    await k5(i),
    await O5(i),
    await tf(i),
    await z2(i),
    await J2(i);
}
const z5 = {
    particles: {
      number: { value: 20, density: { enable: !0, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: !0,
        anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
      },
      size: {
        value: 2,
        random: !0,
        anim: { enable: !1, speed: 40, size_min: 0.1, sync: !1 },
      },
      line_linked: {
        enable: !1,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2,
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "top",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !1, mode: "bubble" },
        onclick: { enable: !1, mode: "repulse" },
        resize: !0,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: !1,
  },
  I5 = (i) =>
    new Promise((e, t) => {
      setTimeout(() => {
        e("\u6210\u529F");
      }, i);
    }),
  R5 = ae({
    __name: "Index",
    async setup(i) {
      let e, t;
      ([e, t] = ks(() => I5(150))), await e, t();
      const n = L(!1);
      Rn.on("Nav", (h) => {
        n.value = h;
      });
      const s = kt(),
        o = (h) => {
          h === 1
            ? s.$patch((g) => {
                g.TwoParticlesLogo = !1;
              })
            : s.$patch((g) => {
                g.TwoParticlesLogo = !0;
              }),
            h === 2
              ? s.$patch((g) => {
                  g.ThreeParticlesLogo = !1;
                })
              : s.$patch((g) => {
                  g.ThreeParticlesLogo = !0;
                }),
            h === 3
              ? s.$patch((g) => {
                  g.FourParticlesLogo = !1;
                })
              : s.$patch((g) => {
                  g.FourParticlesLogo = !0;
                });
        };
      let r = L(),
        a = G({ api: "" }),
        l = G({ SlideNum: 0 });
      const u = (h) => {
          a.api = h;
        },
        c = (h) => {
          r.value.NavList.forEach((g) => {
            g.actions = !1;
          }),
            (r.value.NavList[h.activeIndex].actions = !0),
            (l.SlideNum = h.activeIndex),
            localStorage.setItem("SlideNum", h.activeIndex),
            (s.ParticlesOff = h.activeIndex),
            o(h.activeIndex);
        },
        d = [bn],
        f = z5;
      async function p(h) {
        await L5(h);
      }
      return (
        ke(() => {
          (l.SlideNum = +localStorage.getItem("SlideNum")),
            setTimeout(() => {
              a.api.slideTo(l.SlideNum, 0);
            }, 0);
        }),
        (h, g) => {
          const y = Ds("Particles"),
            E = qd,
            C = Id,
            b = Fd,
            _ = I1,
            x = Su,
            w = cr,
            S = Co;
          return (
            P(),
            Re(
              v(Tn),
              {
                modules: d,
                "slides-per-view": 1,
                direction: "vertical",
                "noSwiping:": "",
                true: "",
                mousewheel: { thresholdTime: 700 },
                onSwiper: u,
                onSlideChange: c,
              },
              {
                default: q(() => [
                  N(
                    y,
                    { id: "tsparticles", particlesInit: p, options: v(f) },
                    null,
                    8,
                    ["options"]
                  ),
                  N(
                    et,
                    { name: "homeDown" },
                    {
                      default: q(() => [
                        v(n) ? (P(), Re(E, { key: "1" })) : X("", !0),
                        fe(
                          N(
                            C,
                            {
                              swiper: v(a).api,
                              PagintionNum: v(l).SlideNum,
                              ref_key: "navlist",
                              ref: r,
                              key: "2",
                            },
                            null,
                            8,
                            ["swiper", "PagintionNum"]
                          ),
                          [[he, v(n)]]
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  N(
                    v(Qe),
                    { class: "swiper-no-swiping" },
                    { default: q(() => [N(b)]), _: 1 }
                  ),
                  N(
                    v(Qe),
                    { class: "swiper-no-swiping" },
                    { default: q(() => [N(_)]), _: 1 }
                  ),
                  N(
                    v(Qe),
                    { class: "swiper-no-swiping" },
                    { default: q(() => [N(x)]), _: 1 }
                  ),
                  N(
                    v(Qe),
                    { class: "swiper-no-swiping" },
                    { default: q(() => [N(w)]), _: 1 }
                  ),
                  N(
                    v(Qe),
                    { class: "swiper-no-swiping" },
                    { default: q(() => [N(S)]), _: 1 }
                  ),
                ]),
                _: 1,
              }
            )
          );
        }
      );
    },
  });
const H5 = Ce(R5, [["__scopeId", "data-v-f2dfeb36"]]);
export { H5 as default };
