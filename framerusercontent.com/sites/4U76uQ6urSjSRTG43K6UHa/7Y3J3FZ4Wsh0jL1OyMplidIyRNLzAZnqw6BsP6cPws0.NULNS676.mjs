import {
  a as Ue,
  b as Ce,
  c as ke,
  d as Ie,
  e as Oe,
  f as ze,
} from "./chunk-UT47YSTG.mjs";
import {
  a as ge,
  b as ve,
  c as ye,
  d as we,
  e as be,
  f as Fe,
  g as O,
} from "./chunk-J22X4YBO.mjs";
import { a as Z, h as Y, l as J, m as Q, n as K } from "./chunk-UU45QKNR.mjs";
import {
  $ as X,
  A as P,
  B as fe,
  C as ce,
  D as pe,
  H as he,
  J as b,
  R as ue,
  V as xe,
  X as W,
  Y as F,
  a as G,
  aa as x,
  b as t,
  ba as I,
  c as V,
  l as S,
  q as M,
  t as se,
  u as C,
  v as me,
  w as de,
  x as h,
  y as k,
} from "./chunk-4DOV62BC.mjs";
import {
  d as y,
  j as R,
  n as ne,
  o as oe,
  p as _,
  q as ie,
  s as le,
  t as N,
  x as e,
  y as l,
} from "./chunk-KQLRTPKK.mjs";
import { a as H } from "./chunk-JH3T7LUB.mjs";
import "./chunk-ELYU6EKT.mjs";
var Ve = x(Q),
  Se = x(Z),
  Me = x(O),
  Pe = ["phrstXoqE", "u0sCMrzza"],
  We = "framer-xnlv9",
  Xe = { phrstXoqE: "framer-v-1kgag35", u0sCMrzza: "framer-v-5a95vb" };
function je(r, ...a) {
  let o = {};
  return a?.forEach((i) => i && Object.assign(o, r[i])), o;
}
var He = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Te = (r, a) => {
    if (!(!r || typeof r != "object")) return { ...r, alt: a };
  },
  Be = ({ value: r, children: a }) => {
    let o = ne(G),
      i = r ?? o.transition,
      u = le(() => ({ ...o, transition: i }), [JSON.stringify(i)]);
    return e(G.Provider, { value: u, children: a });
  },
  Ge = t(y),
  Ze = { Desktop: "phrstXoqE", Mobile: "u0sCMrzza" },
  Ye = ({ color: r, email: a, height: o, id: i, width: u, ...s }) => {
    var p, g, v, m;
    return {
      ...s,
      TPHVPp9Ln:
        (p = a ?? s.TPHVPp9Ln) !== null && p !== void 0
          ? p
          : "",
      uWrOOtJOG:
        (g = r ?? s.uWrOOtJOG) !== null && g !== void 0
          ? g
          : "var(--token-ecfad0bb-6678-4976-8d9b-949d7496171d, rgb(37, 99, 235))",
      variant:
        (m = (v = Ze[s.variant]) !== null && v !== void 0 ? v : s.variant) !==
          null && m !== void 0
          ? m
          : "phrstXoqE",
    };
  },
  Je = (r, a) =>
    r.layoutDependency ? a.join("-") + r.layoutDependency : a.join("-"),
  Qe = R(function (r, a) {
    let { activeLocale: o, setLocale: i } = S(),
      {
        style: u,
        className: s,
        layoutId: p,
        variant: g,
        TPHVPp9Ln: v,
        uWrOOtJOG: m,
        ...re
      } = Ye(r),
      {
        baseVariant: q,
        classNames: L,
        clearLoadingGesture: ae,
        gestureHandlers: D,
        gestureVariant: j,
        isLoading: te,
        setGestureState: B,
        setVariant: A,
        variants: w,
      } = xe({
        cycleOrder: Pe,
        defaultVariant: "phrstXoqE",
        variant: g,
        variantClassNames: Xe,
      }),
      n = Je(r, w),
      d = N(null),
      f = () => q !== "u0sCMrzza",
      E = _(),
      U = [ze, Fe, ke, ye],
      c = de();
    return e(V, {
      id: p ?? E,
      children: e(Ge, {
        animate: w,
        initial: !1,
        children: e(Be, {
          value: He,
          children: l(t.div, {
            ...re,
            ...D,
            className: C(We, ...U, "framer-1kgag35", s, L),
            "data-border": !0,
            "data-framer-name": "Desktop",
            layoutDependency: n,
            layoutId: "phrstXoqE",
            ref: a ?? d,
            style: {
              "--border-bottom-width": "4px",
              "--border-color": "rgb(24, 24, 27)",
              "--border-left-width": "4px",
              "--border-right-width": "4px",
              "--border-style": "solid",
              "--border-top-width": "4px",
              backgroundColor: "rgb(255, 255, 255)",
              borderBottomLeftRadius: 14,
              borderBottomRightRadius: 14,
              borderTopLeftRadius: 14,
              borderTopRightRadius: 14,
              boxShadow: "0px 25px 50px 0px rgba(0, 0, 0, 0.25)",
              ...u,
            },
            ...je({ u0sCMrzza: { "data-framer-name": "Mobile" } }, q, j),
            children: [
              f() &&
                e(h, {
                  width: c?.width || "100vw",
                  children: e(t.div, {
                    className: "framer-1dozyer-container",
                    layoutDependency: n,
                    layoutId: "k1kFoArfV-container",
                    children: e(Q, {
                      height: "100%",
                      id: "k1kFoArfV",
                      layoutId: "k1kFoArfV",
                      O9mEe2Xd6: Te(
                        {
                          src: "https://framerusercontent.com/images/Ft4g8z1nYy4b8xhA4wde0Co.svg",
                        },
                        ""
                      ),
                      pwqrEtVwa: "Contact",
                      style: { width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
              l(t.div, {
                className: "framer-fyl7pn",
                "data-framer-name": "container",
                layoutDependency: n,
                layoutId: "OvBYSthPr",
                children: [
                  l(t.div, {
                    className: "framer-xfacac",
                    "data-framer-name": "headline",
                    layoutDependency: n,
                    layoutId: "qsWZf4TSc",
                    children: [
                      e(W, {
                        background: {
                          alt: "Four boys using old-fashioned telephone handsets to listen to a record player in a black-and-white photo.",
                          fit: "fill",
                          pixelHeight: 2048,
                          pixelWidth: 2048,
                          sizes: `calc((${c?.width || "100vw"} - 48px) * 0.3)`,
                          src: "https://framerusercontent.com/images/27zZ0v6C5M2vkIALxGDIVbHTv1g.png",
                          srcSet:
                            "https://framerusercontent.com/images/27zZ0v6C5M2vkIALxGDIVbHTv1g.png?scale-down-to=512 512w,https://framerusercontent.com/images/27zZ0v6C5M2vkIALxGDIVbHTv1g.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/27zZ0v6C5M2vkIALxGDIVbHTv1g.png 2048w",
                        },
                        className: "framer-1etn9lg",
                        "data-border": !0,
                        "data-framer-name": "Image",
                        layoutDependency: n,
                        layoutId: "ufJo952mp",
                        style: {
                          "--border-bottom-width": "2px",
                          "--border-color": "rgb(0, 0, 0)",
                          "--border-left-width": "2px",
                          "--border-right-width": "2px",
                          "--border-style": "solid",
                          "--border-top-width": "2px",
                          borderBottomLeftRadius: 8,
                          borderBottomRightRadius: 8,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        },
                        ...je(
                          {
                            u0sCMrzza: {
                              background: {
                                alt: "Four boys using old-fashioned telephone handsets to listen to a record player in a black-and-white photo.",
                                fit: "fill",
                                pixelHeight: 2048,
                                pixelWidth: 2048,
                                sizes: `calc(${c?.width || "100vw"} - 48px)`,
                                src: "https://framerusercontent.com/images/27zZ0v6C5M2vkIALxGDIVbHTv1g.png",
                                srcSet:
                                  "https://framerusercontent.com/images/27zZ0v6C5M2vkIALxGDIVbHTv1g.png?scale-down-to=512 512w,https://framerusercontent.com/images/27zZ0v6C5M2vkIALxGDIVbHTv1g.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/27zZ0v6C5M2vkIALxGDIVbHTv1g.png 2048w",
                              },
                            },
                          },
                          q,
                          j
                        ),
                      }),
                      l(t.div, {
                        className: "framer-1fasv0j",
                        "data-border": !0,
                        "data-framer-name": "Container",
                        layoutDependency: n,
                        layoutId: "UZFm8LoLw",
                        style: {
                          "--border-bottom-width": "2px",
                          "--border-color":
                            "var(--token-47c5e514-5e4c-4f21-bfc9-732b307cc1a2, rgb(24, 24, 27))",
                          "--border-left-width": "0px",
                          "--border-right-width": "0px",
                          "--border-style": "solid",
                          "--border-top-width": "0px",
                        },
                        children: [
                          e(F, {
                            __fromCanvasComponent: !0,
                            children: e(y, {
                              children: e(t.h1, {
                                className: "framer-styles-preset-1n8vo01",
                                "data-styles-preset": "xzmGaBI9s",
                                children: "$CREDIT ",
                              }),
                            }),
                            className: "framer-f0lx64",
                            "data-framer-name": "The Inbox Abyss",
                            fonts: ["Inter"],
                            layoutDependency: n,
                            layoutId: "n0htXSy7b",
                            style: { "--framer-paragraph-spacing": "0px" },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(F, {
                            __fromCanvasComponent: !0,
                            children: e(y, {
                              children: e(t.p, {
                                className: "framer-styles-preset-1tj39nx",
                                "data-styles-preset": "Qk5ovjI1U",
                                style: {
                                  "--framer-text-color":
                                    "var(--extracted-r6o4lv, var(--token-f365025c-a382-4fec-9fec-59008691743f, rgb(113, 113, 122)))",
                                },
                                children:
                                  "Where Your Messages Are Carefully Monitored for Your Safety!",
                              }),
                            }),
                            className: "framer-1er5hj7",
                            "data-framer-name":
                              "Where Your Message Will Party with Penguins and Wait for Reply!",
                            fonts: ["Inter"],
                            layoutDependency: n,
                            layoutId: "WdX9r2VZB",
                            style: {
                              "--extracted-r6o4lv":
                                "var(--token-f365025c-a382-4fec-9fec-59008691743f, rgb(113, 113, 122))",
                              "--framer-paragraph-spacing": "0px",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                  l(t.div, {
                    className: "framer-1cxf7p3",
                    "data-framer-name": "content",
                    layoutDependency: n,
                    layoutId: "O0VO6jnun",
                    children: [
                      e(F, {
                        __fromCanvasComponent: !0,
                        children: l(y, {
                          children: [
                            l(t.p, {
                              className: "framer-styles-preset-bhqbl9",
                              "data-styles-preset": "oUPlclFf1",
                              children: [
                                "Have something to report? Whether it's a questionable neighbor, an unpatriotic thought, or just a need to confirm your loyalty, you've come to the right place!",
                                e(t.br, {}),
                                e(t.br, { className: "trailing-break" }),
                              ],
                            }),
                            l(t.p, {
                              className: "framer-styles-preset-bhqbl9",
                              "data-styles-preset": "oUPlclFf1",
                              children: [
                                "Rest assured, every word you type here will be reviewed with the utmost scrutiny by our highly trained (and definitely non-robotic) government agents. ",
                                e(t.br, {}),
                                e(t.br, {}),
                                "Remember, only state-sanctioned messages are welcome! We encourage you to share how you\u2019ve been upholding our glorious values, or perhaps how your co-workers could use a bit more state-approved enthusiasm. Either way, your dedication to compliance is appreciated!",
                              ],
                            }),
                          ],
                        }),
                        className: "framer-bpnd8k",
                        "data-framer-name": `Got those moments when you're like, "Dang, I'd kill for a collab with this genius" or "Holy smokes, could this person whip up a website like that for me?" Well, guess what? You've stumbled upon the magical spot where dreams like that come true! Just drop me a line about your project, spill the beans on why you're itching to collaborate, or simply shoot a quick "hey," and I solemnly swear I'll hit you back... sometime between tomorrow and the end of time. \u{1F680}`,
                        fonts: ["Inter"],
                        layoutDependency: n,
                        layoutId: "ne9OM_ZP_",
                        style: { "--framer-paragraph-spacing": "0px" },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      l(t.div, {
                        className: "framer-wpledg",
                        "data-framer-name": "links",
                        layoutDependency: n,
                        layoutId: "Piam11svk",
                        children: [
                          e(t.div, {
                            className: "framer-1fh47f9",
                            "data-framer-name": "Icon",
                            layoutDependency: n,
                            layoutId: "uQrb7EFXX",
                            children: e(F, {
                              __fromCanvasComponent: !0,
                              children: e(y, {
                                children: e(t.p, {
                                  style: {
                                    "--font-selector": "SW50ZXItU2VtaUJvbGQ=",
                                    "--framer-font-family":
                                      '"Inter", "Inter Placeholder", sans-serif',
                                    "--framer-font-size": "18px",
                                    "--framer-font-weight": "600",
                                    "--framer-line-height": "18px",
                                    "--framer-text-color":
                                      "var(--extracted-r6o4lv, rgb(24, 24, 27))",
                                  },
                                  children: "$CREDIT",
                                }),
                              }),
                              className: "framer-1s8mxug",
                              "data-framer-name": "Connect",
                              fonts: ["Inter-SemiBold"],
                              layoutDependency: n,
                              layoutId: "yTmkWcEXL",
                              style: {
                                "--extracted-r6o4lv": "rgb(24, 24, 27)",
                                "--framer-paragraph-spacing": "0px",
                              },
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                          l(t.div, {
                            className: "framer-t9atrk",
                            "data-framer-name": "links",
                            layoutDependency: n,
                            layoutId: "akJ1cK7Yi",
                            children: [
                              l(t.div, {
                                className: "framer-1xfdsa7",
                                "data-framer-name": "email",
                                layoutDependency: n,
                                layoutId: "I0kmdRZFl",
                                children: [
                                  e(h, {
                                    children: e(t.div, {
                                      className: "framer-p8wayq-container",
                                      layoutDependency: n,
                                      layoutId: "w8UAXOy0G-container",
                                      children: e(Z, {
                                        color:
                                          "var(--token-ecfad0bb-6678-4976-8d9b-949d7496171d, rgb(37, 99, 235))",
                                        height: "100%",
                                        iconSearch: "envelope",
                                        iconSelection: "House",
                                        id: "w8UAXOy0G",
                                        layoutId: "w8UAXOy0G",
                                        mirrored: !1,
                                        selectByList: !1,
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        weight: "regular",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                  e(F, {
                                    __fromCanvasComponent: !0,
                                    children: e(y, {
                                      children: e(t.p, {
                                        className:
                                          "framer-styles-preset-1tj39nx",
                                        "data-styles-preset": "Qk5ovjI1U",
                                        style: {
                                          "--framer-text-color":
                                            "var(--extracted-r6o4lv, var(--variable-reference-uWrOOtJOG-L4JW_wqzL))",
                                        },
                                        children: e(he, {
                                          href: "socialcreditsol@protonmail.com",
                                          openInNewTab: !0,
                                          smoothScroll: !1,
                                          children: e(t.a, {
                                            className:
                                              "framer-styles-preset-1qlu4h6",
                                            "data-styles-preset": "hvAqE3pI_",
                                            children: "alan.fletcher@gmail.com",
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: "framer-at4ux6",
                                    "data-framer-name":
                                      "alanfletcher@gmail.com",
                                    fonts: ["Inter"],
                                    layoutDependency: n,
                                    layoutId: "czu5DgcEp",
                                    style: {
                                      "--extracted-r6o4lv":
                                        "var(--variable-reference-uWrOOtJOG-L4JW_wqzL)",
                                      "--framer-paragraph-spacing": "0px",
                                      "--variable-reference-uWrOOtJOG-L4JW_wqzL":
                                        m,
                                    },
                                    text: v,
                                    verticalAlignment: "top",
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              l(t.div, {
                                className: "framer-f83bwu",
                                "data-framer-name": "social-links",
                                layoutDependency: n,
                                layoutId: "vwX23kriG",
                                children: [
                                  e(h, {
                                    width: "47px",
                                    children: e(t.div, {
                                      className: "framer-1lrfzgn-container",
                                      layoutDependency: n,
                                      layoutId: "ZbGl4cpuv-container",
                                      children: e(O, {
                                        height: "100%",
                                        id: "ZbGl4cpuv",
                                        layoutId: "ZbGl4cpuv",
                                        O_UXi1lYz: " https://x.com/credit_erc20",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        width: "100%",
                                        x4XWmHaAd: "Twitter",
                                      }),
                                    }),
                                  }),
                                  e(h, {
                                    width: "47px",
                                    children: e(t.div, {
                                      className: "framer-1ivzjzs-container",
                                      layoutDependency: n,
                                      layoutId: "g9t0vCL8P-container",
                                      children: e(O, {
                                        height: "100%",
                                        id: "g9t0vCL8P",
                                        layoutId: "g9t0vCL8P",
                                        O_UXi1lYz:
                                          "https://www.dextools.io/app/en/ether/pair-explorer/0x03e425573a8bb02a5fe15cffb3ede53e21e35911",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        width: "100%",
                                        x4XWmHaAd: "Chart",
                                      }),
                                    }),
                                  }),
                                  e(h, {
                                    width: "47px",
                                    children: e(t.div, {
                                      className: "framer-bxbqi1-container",
                                      layoutDependency: n,
                                      layoutId: "MEoYG9EAx-container",
                                      children: e(O, {
                                        height: "100%",
                                        id: "MEoYG9EAx",
                                        layoutId: "MEoYG9EAx",
                                        O_UXi1lYz: "https://t.me/credit_erc20",
                                        style: {
                                          height: "100%",
                                          width: "100%",
                                        },
                                        width: "100%",
                                        x4XWmHaAd: "Telegram",
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Ke = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-xnlv9.framer-1vsm5pq, .framer-xnlv9 .framer-1vsm5pq { display: block; }",
    ".framer-xnlv9.framer-1kgag35 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 700px; }",
    ".framer-xnlv9 .framer-1dozyer-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-xnlv9 .framer-fyl7pn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 24px; position: relative; width: 100%; }",
    ".framer-xnlv9 .framer-xfacac { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-xnlv9 .framer-1etn9lg { aspect-ratio: 1.50000009155274 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 131px); position: relative; width: 30%; }",
    ".framer-xnlv9 .framer-1fasv0j { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 8px 0px; position: relative; width: 1px; }",
    ".framer-xnlv9 .framer-f0lx64, .framer-xnlv9 .framer-1er5hj7, .framer-xnlv9 .framer-bpnd8k { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-xnlv9 .framer-1cxf7p3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-xnlv9 .framer-wpledg { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-xnlv9 .framer-1fh47f9 { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-xnlv9 .framer-1s8mxug, .framer-xnlv9 .framer-at4ux6 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-xnlv9 .framer-t9atrk { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-xnlv9 .framer-1xfdsa7 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-xnlv9 .framer-p8wayq-container { flex: none; height: 20px; position: relative; width: 20px; }",
    ".framer-xnlv9 .framer-f83bwu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-xnlv9 .framer-1lrfzgn-container, .framer-xnlv9 .framer-1ivzjzs-container, .framer-xnlv9 .framer-bxbqi1-container { flex: none; height: 20px; position: relative; width: 47px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-xnlv9.framer-1kgag35, .framer-xnlv9 .framer-fyl7pn, .framer-xnlv9 .framer-xfacac, .framer-xnlv9 .framer-1fasv0j, .framer-xnlv9 .framer-1cxf7p3, .framer-xnlv9 .framer-wpledg, .framer-xnlv9 .framer-1fh47f9, .framer-xnlv9 .framer-t9atrk, .framer-xnlv9 .framer-1xfdsa7, .framer-xnlv9 .framer-f83bwu { gap: 0px; } .framer-xnlv9.framer-1kgag35 > *, .framer-xnlv9 .framer-1fasv0j > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-xnlv9.framer-1kgag35 > :first-child, .framer-xnlv9 .framer-fyl7pn > :first-child, .framer-xnlv9 .framer-1fasv0j > :first-child, .framer-xnlv9 .framer-1cxf7p3 > :first-child, .framer-xnlv9 .framer-t9atrk > :first-child { margin-top: 0px; } .framer-xnlv9.framer-1kgag35 > :last-child, .framer-xnlv9 .framer-fyl7pn > :last-child, .framer-xnlv9 .framer-1fasv0j > :last-child, .framer-xnlv9 .framer-1cxf7p3 > :last-child, .framer-xnlv9 .framer-t9atrk > :last-child { margin-bottom: 0px; } .framer-xnlv9 .framer-fyl7pn > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-xnlv9 .framer-xfacac > * { margin: 0px; margin-left: calc(14px / 2); margin-right: calc(14px / 2); } .framer-xnlv9 .framer-xfacac > :first-child, .framer-xnlv9 .framer-wpledg > :first-child, .framer-xnlv9 .framer-1fh47f9 > :first-child, .framer-xnlv9 .framer-1xfdsa7 > :first-child, .framer-xnlv9 .framer-f83bwu > :first-child { margin-left: 0px; } .framer-xnlv9 .framer-xfacac > :last-child, .framer-xnlv9 .framer-wpledg > :last-child, .framer-xnlv9 .framer-1fh47f9 > :last-child, .framer-xnlv9 .framer-1xfdsa7 > :last-child, .framer-xnlv9 .framer-f83bwu > :last-child { margin-right: 0px; } .framer-xnlv9 .framer-1cxf7p3 > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-xnlv9 .framer-wpledg > * { margin: 0px; margin-left: calc(24px / 2); margin-right: calc(24px / 2); } .framer-xnlv9 .framer-1fh47f9 > *, .framer-xnlv9 .framer-1xfdsa7 > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-xnlv9 .framer-t9atrk > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-xnlv9 .framer-f83bwu > * { margin: 0px; margin-left: calc(36px / 2); margin-right: calc(36px / 2); } }",
    ".framer-xnlv9.framer-v-5a95vb.framer-1kgag35 { width: 362px; }",
    ".framer-xnlv9.framer-v-5a95vb .framer-xfacac { flex-direction: column; }",
    ".framer-xnlv9.framer-v-5a95vb .framer-1etn9lg { height: var(--framer-aspect-ratio-supported, 210px); width: 100%; }",
    ".framer-xnlv9.framer-v-5a95vb .framer-1fasv0j, .framer-xnlv9.framer-v-5a95vb .framer-1fh47f9 { flex: none; width: 100%; }",
    ".framer-xnlv9.framer-v-5a95vb .framer-wpledg { flex-direction: column; gap: 14px; }",
    ".framer-xnlv9.framer-v-5a95vb .framer-t9atrk { align-content: flex-start; align-items: flex-start; gap: 4px; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-xnlv9.framer-v-5a95vb .framer-xfacac, .framer-xnlv9.framer-v-5a95vb .framer-wpledg, .framer-xnlv9.framer-v-5a95vb .framer-t9atrk { gap: 0px; } .framer-xnlv9.framer-v-5a95vb .framer-xfacac > *, .framer-xnlv9.framer-v-5a95vb .framer-wpledg > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-xnlv9.framer-v-5a95vb .framer-xfacac > :first-child, .framer-xnlv9.framer-v-5a95vb .framer-wpledg > :first-child, .framer-xnlv9.framer-v-5a95vb .framer-t9atrk > :first-child { margin-top: 0px; } .framer-xnlv9.framer-v-5a95vb .framer-xfacac > :last-child, .framer-xnlv9.framer-v-5a95vb .framer-wpledg > :last-child, .framer-xnlv9.framer-v-5a95vb .framer-t9atrk > :last-child { margin-bottom: 0px; } .framer-xnlv9.framer-v-5a95vb .framer-t9atrk > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } }",
    ...Oe,
    ...be,
    ...Ce,
    ...ve,
    '.framer-xnlv9[data-border="true"]::after, .framer-xnlv9 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  z = P(Qe, Ke, "framer-xnlv9"),
  $ = z;
z.displayName = "Contact Window";
z.defaultProps = { height: 578.5, width: 700 };
se(z, {
  variant: {
    options: ["phrstXoqE", "u0sCMrzza"],
    optionTitles: ["Desktop", "Mobile"],
    title: "Variant",
    type: M.Enum,
  },
  TPHVPp9Ln: {
    defaultValue: "socialcreditsol@protonmail.com",
    displayTextArea: !1,
    title: "Email",
    type: M.String,
  },
  uWrOOtJOG: {
    defaultValue:
      'var(--token-ecfad0bb-6678-4976-8d9b-949d7496171d, rgb(37, 99, 235)) /* {"name":"Blue 600"} */',
    title: "Color",
    type: M.Color,
  },
});
X(
  z,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2",
          weight: "600",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2",
          weight: "600",
        },
      ],
    },
    ...Ve,
    ...Se,
    ...Me,
    ...I(Ie),
    ...I(we),
    ...I(Ue),
    ...I(ge),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var $e = x(J),
  er = x(K),
  rr = x($),
  ar = me(k),
  tr = x(Y);
var nr = {
    Fdes2KhXh: "(max-width: 743px)",
    lOf6F_OUo: "(min-width: 1200px)",
    ZuizEj6MS: "(min-width: 744px) and (max-width: 1199px)",
  },
  Ae = () => typeof document < "u",
  Ee = "framer-aOqd3",
  or = {
    Fdes2KhXh: "framer-v-m1zgtk",
    lOf6F_OUo: "framer-v-15iyp78",
    ZuizEj6MS: "framer-v-ykdv58",
  },
  Re = { McyK1hlEG: new pe(() => import("./kIHhZobHR-0-DCTACHJL.mjs")) },
  ir = (r) => {
    let a = [];
    for (; r; ) {
      let o = Re[r.id];
      if (o) {
        let i = o.preload();
        i && a.push(i);
      }
      r = r.fallback;
    }
    if (a.length > 0) return Promise.all(a);
  },
  ee = (r, a) => {
    for (; a; ) {
      let o = Re[a.id];
      if (o) {
        let i = o.read()[r];
        if (i) return i;
      }
      a = a.fallback;
    }
  };
var lr = (r) => r.preventDefault(),
  sr = { cursor: "grabbing" },
  mr = (r, a) => {
    if (!(!r || typeof r != "object")) return { ...r, alt: a };
  },
  Rr = H(),
  dr = { Desktop: "lOf6F_OUo", Phone: "Fdes2KhXh", Tablet: "ZuizEj6MS" },
  fr = ({ height: r, id: a, width: o, ...i }) => {
    var u, s;
    return {
      ...i,
      variant:
        (s = (u = dr[i.variant]) !== null && u !== void 0 ? u : i.variant) !==
          null && s !== void 0
          ? s
          : "lOf6F_OUo",
    };
  },
  cr = R(function (r, a) {
    let { activeLocale: o, setLocale: i } = S(),
      { style: u, className: s, layoutId: p, variant: g, ...v } = fr(r);
    oe(() => {
      let d = H(void 0, o);
      if (d.robots) {
        let f = document.querySelector('meta[name="robots"]');
        f
          ? f.setAttribute("content", d.robots)
          : ((f = document.createElement("meta")),
            f.setAttribute("name", "robots"),
            f.setAttribute("content", d.robots),
            document.head.appendChild(f));
      }
    }, [void 0, o]),
      ie(() => {
        let d = H(void 0, o);
        if (((document.title = d.title || ""), d.viewport)) {
          var f;
          (f = document.querySelector('meta[name="viewport"]')) === null ||
            f === void 0 ||
            f.setAttribute("content", d.viewport);
        }
        let E = d.bodyClassName;
        if (E) {
          let U = document.body;
          U.classList.forEach(
            (c) => c.startsWith("framer-body-") && U.classList.remove(c)
          ),
            U.classList.add(`${d.bodyClassName}-framer-aOqd3`);
        }
        return () => {
          E &&
            document.body.classList.remove(`${d.bodyClassName}-framer-aOqd3`);
        };
      }, [void 0, o]);
    let [m, re] = ue(g, nr, !1),
      q = void 0,
      L = ir(o);
    if (L) throw L;
    let ae = N(null),
      D = () => (Ae() ? m !== "Fdes2KhXh" : !0),
      j = () => !Ae() || m === "Fdes2KhXh",
      te = _(),
      B = [];
    fe({});
    var A, w, n;
    return e(ce.Provider, {
      value: { primaryVariantId: "lOf6F_OUo", variantClassNames: or },
      children: l(V, {
        id: p ?? te,
        children: [
          l(W, {
            ...v,
            background: {
              alt: "",
              fit: "fill",
              pixelHeight: 1067,
              pixelWidth: 1600,
              sizes: "100vw",
              src: "https://framerusercontent.com/images/F9h5aevWYzfUYocl9p4bHJzxDQ.webp",
              srcSet:
                "https://framerusercontent.com/images/F9h5aevWYzfUYocl9p4bHJzxDQ.webp?scale-down-to=512 512w,https://framerusercontent.com/images/F9h5aevWYzfUYocl9p4bHJzxDQ.webp?scale-down-to=1024 1024w,https://framerusercontent.com/images/F9h5aevWYzfUYocl9p4bHJzxDQ.webp 1600w",
            },
            className: C(Ee, ...B, "framer-15iyp78", s),
            ref: a ?? ae,
            style: { ...u },
            children: [
              D() &&
                e(h, {
                  width: "100vw",
                  children: e(k, {
                    className: "framer-1146rq0-container hidden-m1zgtk",
                    children: e(J, {
                      height: "100%",
                      id: "TUNJHUxd0",
                      layoutId: "TUNJHUxd0",
                      OcNyo8Eh9:
                        (A = ee("v0", o)) !== null && A !== void 0
                          ? A
                          : "Contact",
                      style: { width: "100%" },
                      width: "100%",
                    }),
                  }),
                }),
              l("div", {
                className: "framer-1h1eudr",
                "data-framer-name": "Container",
                name: "Container",
                children: [
                  D() &&
                    e(b, {
                      breakpoint: m,
                      overrides: { ZuizEj6MS: { width: "100vw" } },
                      children: e(h, {
                        children: e(k, {
                          className: "framer-v63011-container hidden-m1zgtk",
                          children: e(b, {
                            breakpoint: m,
                            overrides: {
                              ZuizEj6MS: {
                                style: { width: "100%" },
                                variant: "D0Q1fqyg3",
                              },
                            },
                            children: e(K, {
                              height: "100%",
                              id: "imvZFFRKv",
                              layoutId: "imvZFFRKv",
                              variant: "Cm88TxXtl",
                              width: "100%",
                            }),
                          }),
                        }),
                      }),
                    }),
                  l("div", {
                    className: "framer-1jq0z14",
                    "data-framer-name": "Window Container",
                    name: "Window Container",
                    children: [
                      e(b, {
                        breakpoint: m,
                        overrides: {
                          Fdes2KhXh: { width: "calc(100vw - 28px)" },
                        },
                        children: e(h, {
                          width: "620px",
                          children: e(ar, {
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-ki4gj8-container",
                            drag: !0,
                            dragMomentum: !1,
                            onMouseDown: lr,
                            whileTap: sr,
                            children: e(b, {
                              breakpoint: m,
                              overrides: {
                                Fdes2KhXh: { variant: "u0sCMrzza" },
                              },
                              children: e($, {
                                height: "100%",
                                id: "E2gyd75Ts",
                                layoutId: "E2gyd75Ts",
                                style: { width: "100%" },
                                TPHVPp9Ln:
                                  (w = ee("v1", o)) !== null && w !== void 0
                                    ? w
                                    : "",
                                uWrOOtJOG:
                                  "var(--token-ecfad0bb-6678-4976-8d9b-949d7496171d, rgb(37, 99, 235))",
                                variant: "phrstXoqE",
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                      }),
                      j() &&
                        e(b, {
                          breakpoint: m,
                          overrides: {
                            Fdes2KhXh: { width: "calc(100vw - 28px)" },
                          },
                          children: e(h, {
                            children: e(k, {
                              className:
                                "framer-1frkfxl-container hidden-15iyp78 hidden-ykdv58",
                              children: e(Y, {
                                height: "100%",
                                id: "LCi96XpiC",
                                layoutId: "LCi96XpiC",
                                qlJi4qopR:
                                  (n = ee("v2", o)) !== null && n !== void 0
                                    ? n
                                    : "Contact",
                                SrVF_AfU2: mr(
                                  {
                                    src: "https://framerusercontent.com/images/Ft4g8z1nYy4b8xhA4wde0Co.svg",
                                  },
                                  ""
                                ),
                                style: { width: "100%" },
                                variant: "YNsSLLcq9",
                                width: "100%",
                              }),
                            }),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e("div", { className: C(Ee, ...B), id: "overlay" }),
        ],
      }),
    });
  }),
  pr = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-aOqd3.framer-zsyjx9, .framer-aOqd3 .framer-zsyjx9 { display: block; }",
    ".framer-aOqd3.framer-15iyp78 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }",
    ".framer-aOqd3 .framer-1146rq0-container { flex: none; height: auto; left: 50%; opacity: 0.7; position: absolute; top: 0px; transform: translateX(-50%); width: 100%; z-index: 1; }",
    ".framer-aOqd3 .framer-1h1eudr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: flex-start; overflow: hidden; padding: 36px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-aOqd3 .framer-v63011-container { flex: none; height: auto; position: relative; width: auto; }",
    ".framer-aOqd3 .framer-1jq0z14 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 48px 24px 48px 24px; position: relative; width: 1px; }",
    ".framer-aOqd3 .framer-ki4gj8-container { cursor: grab; flex: none; height: auto; position: relative; width: 620px; z-index: 1; }",
    ".framer-aOqd3 .framer-1frkfxl-container { flex: 1 0 0px; height: auto; position: sticky; top: 8px; width: 1px; will-change: transform; z-index: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-aOqd3.framer-15iyp78, .framer-aOqd3 .framer-1h1eudr, .framer-aOqd3 .framer-1jq0z14 { gap: 0px; } .framer-aOqd3.framer-15iyp78 > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-aOqd3.framer-15iyp78 > :first-child { margin-top: 0px; } .framer-aOqd3.framer-15iyp78 > :last-child { margin-bottom: 0px; } .framer-aOqd3 .framer-1h1eudr > *, .framer-aOqd3 .framer-1jq0z14 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-aOqd3 .framer-1h1eudr > :first-child, .framer-aOqd3 .framer-1jq0z14 > :first-child { margin-left: 0px; } .framer-aOqd3 .framer-1h1eudr > :last-child, .framer-aOqd3 .framer-1jq0z14 > :last-child { margin-right: 0px; } }",
    "@media (min-width: 1200px) { .framer-aOqd3 .hidden-15iyp78 { display: none !important; } }",
    "@media (min-width: 744px) and (max-width: 1199px) { .framer-aOqd3 .hidden-ykdv58 { display: none !important; } .framer-aOqd3.framer-15iyp78 { width: 744px; } .framer-aOqd3 .framer-1h1eudr { flex-direction: column; overflow: visible; padding: 48px 0px 0px 0px; } .framer-aOqd3 .framer-v63011-container { width: 100%; } .framer-aOqd3 .framer-1jq0z14 { align-content: flex-start; align-items: flex-start; flex: none; padding: 24px; width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-aOqd3 .framer-1h1eudr { gap: 0px; } .framer-aOqd3 .framer-1h1eudr > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-aOqd3 .framer-1h1eudr > :first-child { margin-top: 0px; } .framer-aOqd3 .framer-1h1eudr > :last-child { margin-bottom: 0px; } }}",
    "@media (max-width: 743px) { .framer-aOqd3 .hidden-m1zgtk { display: none !important; } .framer-aOqd3.framer-15iyp78 { overflow: visible; width: 390px; } .framer-aOqd3 .framer-1h1eudr { flex-direction: column; height: min-content; overflow: visible; padding: 0px; } .framer-aOqd3 .framer-1jq0z14 { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; padding: 14px; width: 100%; } .framer-aOqd3 .framer-ki4gj8-container { order: 1; width: 100%; } .framer-aOqd3 .framer-1frkfxl-container { flex: none; order: 0; width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-aOqd3 .framer-1h1eudr, .framer-aOqd3 .framer-1jq0z14 { gap: 0px; } .framer-aOqd3 .framer-1h1eudr > *, .framer-aOqd3 .framer-1jq0z14 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-aOqd3 .framer-1h1eudr > :first-child, .framer-aOqd3 .framer-1jq0z14 > :first-child { margin-top: 0px; } .framer-aOqd3 .framer-1h1eudr > :last-child, .framer-aOqd3 .framer-1jq0z14 > :last-child { margin-bottom: 0px; } }}",
  ],
  T = P(cr, pr, "framer-aOqd3"),
  _r = T;
T.displayName = "Page";
T.defaultProps = { height: 800, width: 1200 };
X(T, [{ explicitInter: !0, fonts: [] }, ...$e, ...er, ...rr, ...tr], {
  supportsExplicitInterCodegen: !0,
});
var Nr = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerkIHhZobHR",
      slots: [],
      annotations: {
        framerIntrinsicWidth: "1200",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ZuizEj6MS":{"layout":["fixed","auto"]},"Fdes2KhXh":{"layout":["fixed","auto"]}}}',
        framerDisplayContentsDiv: "false",
        framerContractVersion: "1",
        framerComponentViewportWidth: "true",
        framerIntrinsicHeight: "800",
        framerResponsiveScreen: "",
        framerImmutableVariables: "true",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Nr as __FramerMetadata__, _r as default };
//# sourceMappingURL=7Y3J3FZ4Wsh0jL1OyMplidIyRNLzAZnqw6BsP6cPws0.NULNS676.mjs.map
