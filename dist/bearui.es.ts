import { defineComponent as V, openBlock as l, createElementBlock as d, normalizeClass as h, createCommentVNode as B, renderSlot as M, toDisplayString as k, createElementVNode as g, computed as C, onMounted as T, normalizeStyle as w, Fragment as b, renderList as v } from "vue";
const A = ["disabled"], E = /* @__PURE__ */ g("i", { class: "fab fa-github" }, null, -1), F = [
  E
], q = { key: 0 }, D = /* @__PURE__ */ g("i", { class: "fab fa-github" }, null, -1), H = [
  D
], P = /* @__PURE__ */ V({
  __name: "Button",
  props: {
    label: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    expanded: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    outlined: {
      type: Boolean,
      default: !1
    },
    inverted: {
      type: Boolean,
      default: !1
    },
    focused: {
      type: Boolean,
      default: !1
    },
    active: {
      type: Boolean,
      default: !1
    },
    hovered: {
      type: Boolean,
      default: !1
    },
    selected: {
      type: Boolean,
      default: !1
    },
    /** 
     * If you want different button sizes for each breakpoint, you can use Bulma's responsive buttons
    */
    responsive: {
      type: Boolean,
      default: !1
    },
    /**
     * The button comes in 4 different sizes: small, normal, medium, large.
     * While the default size is the normal one, the is-normal modifier exists in case you need to reset the button to its normal size.
     * @values small, normal, medium, large
     * @version 1.0.5
     */
    size: {
      type: String,
      default: "is-normal"
    },
    color: {
      type: String,
      default: "primary"
    },
    iconRight: String,
    iconLeft: String,
    type: {
      type: String,
      default: "button",
      validator: (e) => [
        "button",
        "submit",
        "reset"
      ].includes(e)
    },
    tag: {
      type: String,
      default: "button",
      validator: (e) => [
        "a",
        "button",
        "input",
        "router-link",
        "nuxt-link",
        "n-link",
        "RouterLink",
        "NuxtLink",
        "NLink"
      ].includes(e)
    }
  },
  setup(e) {
    const s = e;
    return (u, p) => (l(), d("button", {
      class: h(["button", [
        s.size,
        s.color,
        {
          "is-responsive": s.responsive,
          "is-fullwidth": s.expanded,
          "is-rounded": e.rounded,
          "is-loading": e.loading,
          "is-outlined": e.outlined,
          "is-inverted": e.inverted,
          "is-focused": e.focused,
          "is-active": e.active,
          "is-hovered": e.hovered,
          "is-selected": e.selected
        }
      ]]),
      disabled: s.disabled
    }, [
      e.iconLeft ? (l(), d("span", {
        key: 0,
        class: h(["icon", [s.size]])
      }, F, 2)) : B("", !0),
      M(u.$slots, "default", {}, () => [
        s.label ? (l(), d("span", q, k(s.label), 1)) : B("", !0)
      ]),
      e.iconRight ? (l(), d("span", {
        key: 1,
        class: h(["icon", [s.size]])
      }, H, 2)) : B("", !0)
    ], 10, A));
  }
}), O = { key: 0 }, W = ["colspan", "rowspan"], j = ["data-th"], G = /* @__PURE__ */ V({
  __name: "Table",
  props: {
    /**
     * Title of this table
     */
    title: {
      type: String
    },
    /**
     * Columns of table config
     */
    columns: {
      type: Array,
      required: !0
    },
    /**
     * Data record array to be displayed
     */
    dataSources: {
      type: Array
    },
    /** 
     * Border to all cells
    */
    bordered: {
      type: Boolean,
      default: !1
    },
    /** 
     * Whether table is striped
    */
    striped: {
      type: Boolean,
      default: !1
    },
    /** 
     * Makes the cells narrower
    */
    narrowed: {
      type: Boolean,
      default: !1
    },
    /** 
     * Rows are highlighted when hovering
    */
    hoverable: {
      type: Boolean,
      default: !1
    },
    /** 
     * Set sticky header and scroll bar
    */
    sticky: {
      type: Boolean,
      default: !1
    },
    /** 
     * Whether the table can be scrollable
    */
    scroll: {
      type: Boolean,
      default: !1
    },
    /** 
     * Height of this table. Works only when the "scroll" parameter is enabled
    */
    height: {
      type: [String, Number],
      default: "inherit"
    }
  },
  setup(e) {
    const s = e, u = C(() => {
      const o = [], c = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map();
      let t = 0;
      const i = (n, a = 0) => {
        o[a] || (o[a] = []);
        const y = n.map((x) => {
          var R;
          const r = {
            ...x,
            children: void 0
          };
          return x.children ? r.children = i(x.children, a + 1) : ((x.fixed === "left" || x.fixed === !0) && c.set(r.dataIndex, r), x.fixed === "right" && f.set(r.dataIndex, r)), r.colspan = ((R = r.children) == null ? void 0 : R.reduce((z, N) => N.children ? z + N.colspan - 1 : z, r.children.length)) || 1, r.sort = t++, r;
        });
        return o[a] = o[a].concat(y), y;
      };
      i(s.columns);
      const S = (n) => n ? typeof n == "number" ? n : parseFloat(n.replace("px", "")) : 0, $ = [...c.values()];
      $.sort((n, a) => n.sort - a.sort);
      let m = 0;
      for (const n of $) {
        const a = c.get(n.dataIndex);
        a.fixedLeft = m;
        const y = S(a.width);
        m += y;
      }
      const L = [...f.values()];
      L.sort((n, a) => a.sort - n.sort);
      let I = 0;
      for (const n of L) {
        const a = f.get(n.dataIndex);
        a.fixedRight = I;
        const y = S(a.width);
        I += y;
      }
      return o;
    }), p = C(() => {
      const o = [...u.value.flat().filter((c) => !c.children)];
      return o.sort((c, f) => c.sort - f.sort), o;
    });
    return T(() => {
    }), (o, c) => (l(), d("div", {
      class: h([
        {
          "table-sticky": e.sticky,
          "table-scroll": e.scroll
        }
      ]),
      style: w([
        {
          height: e.scroll ? typeof e.height == "number" ? `${e.height}px` : e.height : void 0
        }
      ])
    }, [
      g("table", {
        id: "main-table",
        class: h(["table is-fullwidth main-table mobile-optimised", [
          {
            "is-bordered": e.bordered,
            "is-striped": e.striped,
            "is-hoverable": e.hoverable,
            "is-narrow": e.narrowed
          }
        ]])
      }, [
        e.title ? (l(), d("caption", O, k(e.title), 1)) : B("", !0),
        g("thead", null, [
          (l(!0), d(b, null, v(u.value.entries(), ([f, t]) => (l(), d("tr", null, [
            (l(!0), d(b, null, v(t, (i) => (l(), d("th", {
              key: i.key || i.dataIndex,
              scope: "col",
              colspan: i.colspan,
              rowspan: i.colspan === 1 ? u.value.length - f : void 0,
              class: h({
                "column-fixed-left": i.fixed === "left" || i.fixed === !0,
                "column-fixed-right": i.fixed === "right"
              }),
              style: w({
                width: i.colspan === 1 ? typeof i.width == "number" ? `${i.width}px` : i.width : void 0,
                left: i.fixed === "left" || i.fixed === !0 ? `${i.fixedLeft}px` : void 0,
                right: i.fixed === "right" ? `${i.fixedRight}px` : void 0
              })
            }, k(i.title), 15, W))), 128))
          ]))), 256))
        ]),
        g("tbody", null, [
          (l(!0), d(b, null, v(e.dataSources, (f) => (l(), d("tr", null, [
            (l(!0), d(b, null, v(p.value, (t) => (l(), d("td", {
              key: t.key || t.dataIndex,
              "data-th": t.title,
              class: h({
                "column-fixed-left": t.fixed === "left" || t.fixed === !0,
                "column-fixed-right": t.fixed === "right"
              }),
              style: w({
                width: t.colspan === 1 ? typeof t.width == "number" ? `${t.width}px` : t.width : void 0,
                left: t.fixed === "left" || t.fixed === !0 ? `${t.fixedLeft}px` : void 0,
                right: t.fixed === "right" ? `${t.fixedRight}px` : void 0
              })
            }, k(f[t.dataIndex]), 15, j))), 128))
          ]))), 256))
        ])
      ], 2)
    ], 6));
  }
}), J = (e, s) => {
  const u = e.__vccOpts || e;
  for (const [p, o] of s)
    u[p] = o;
  return u;
}, Q = /* @__PURE__ */ J(G, [["__scopeId", "data-v-73b952c6"]]);
export {
  P as Button,
  Q as Table
};
