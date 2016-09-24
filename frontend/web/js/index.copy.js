/**
 * Created by huochai on 2016/9/24.
 */



! function (e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var o = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "http://sta.guazistatic.com/c2c_web/", t(0)
}([
    function (e, t, n) {
        n(564), n(44);
        var i = n(89),
            o = n(85),
            r = n(84);
        r.setEl(".zq-area"), o.setEl(".op-slide"), $(function () {
            $("#footer_feed_back").click(function () {
                $(".fb-btn").trigger("click")
            })
        }), i.hiddenTopVideo.setEl(".video-box"), i.springFestivalClosed.setEl(".notice"), i.indexForm.setEl(".sell-car-box"), i.hoverWidget.setEl(".sx-pinpai"), i.pageTurning.setEl(".pageTurning"), i.indexTab.setEl(".indexTab"), Widget.initWidgets([r, i.indexTab, o, i.hoverWidget, i.indexForm, i.pageTurning, i.springFestivalClosed, i.hiddenTopVideo])
    },
    function (e, t, n) {
        e.exports = n.p + "sprite.ae3f06954f7530846e7525e2c1590a21.gif"
    },
    function (e, t) {
        e.exports = function () {
            var e = [];
            return e.toString = function () {
                for (var e = [], t = 0; t < this.length; t++) {
                    var n = this[t];
                    n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
                }
                return e.join("")
            }, e.i = function (t, n) {
                "string" == typeof t && (t = [
                    [null, t, ""]
                ]);
                for (var i = {}, o = 0; o < this.length; o++) {
                    var r = this[o][0];
                    "number" == typeof r && (i[r] = !0)
                }
                for (o = 0; o < t.length; o++) {
                    var a = t[o];
                    "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
                }
            }, e
        }
    },
    function (e, t, n) {
        var i, o; /*! jQuery v1.12.0 | (c) jQuery Foundation | jquery.org/license */
        ! function (t, n) {
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(t)
        }("undefined" != typeof window ? window : this, function (r, a) {
            function l(e) {
                var t = !!e && "length" in e && e.length,
                    n = ve.type(e);
                return "function" !== n && !ve.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }

            function s(e, t, n) {
                if (ve.isFunction(t)) return ve.grep(e, function (e, i) {
                    return !!t.call(e, i, e) !== n
                });
                if (t.nodeType) return ve.grep(e, function (e) {
                    return e === t !== n
                });
                if ("string" == typeof t) {
                    if (Ee.test(t)) return ve.filter(t, e, n);
                    t = ve.filter(t, e)
                }
                return ve.grep(e, function (e) {
                    return ve.inArray(e, t) > -1 !== n
                })
            }

            function c(e, t) {
                do e = e[t]; while (e && 1 !== e.nodeType);
                return e
            }

            function p(e) {
                var t = {};
                return ve.each(e.match(Le) || [], function (e, n) {
                    t[n] = !0
                }), t
            }

            function d() {
                se.addEventListener ? (se.removeEventListener("DOMContentLoaded", u), r.removeEventListener("load", u)) : (se.detachEvent("onreadystatechange", u), r.detachEvent("onload", u))
            }

            function u() {
                (se.addEventListener || "load" === r.event.type || "complete" === se.readyState) && (d(), ve.ready())
            }

            function f(e, t, n) {
                if (void 0 === n && 1 === e.nodeType) {
                    var i = "data-" + t.replace(Fe, "-$1").toLowerCase();
                    if (n = e.getAttribute(i), "string" == typeof n) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : He.test(n) ? ve.parseJSON(n) : n)
                        } catch (o) {}
                        ve.data(e, t, n)
                    } else n = void 0
                }
                return n
            }

            function h(e) {
                var t;
                for (t in e)
                    if (("data" !== t || !ve.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
                return !0
            }

            function g(e, t, n, i) {
                if (qe(e)) {
                    var o, r, a = ve.expando,
                        l = e.nodeType,
                        s = l ? ve.cache : e,
                        c = l ? e[a] : e[a] && a;
                    if (c && s[c] && (i || s[c].data) || void 0 !== n || "string" != typeof t) return c || (c = l ? e[a] = le.pop() || ve.guid++ : a), s[c] || (s[c] = l ? {} : {
                        toJSON: ve.noop
                    }), ("object" == typeof t || "function" == typeof t) && (i ? s[c] = ve.extend(s[c], t) : s[c].data = ve.extend(s[c].data, t)), r = s[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[ve.camelCase(t)] = n), "string" == typeof t ? (o = r[t], null == o && (o = r[ve.camelCase(t)])) : o = r, o
                }
            }

            function m(e, t, n) {
                if (qe(e)) {
                    var i, o, r = e.nodeType,
                        a = r ? ve.cache : e,
                        l = r ? e[ve.expando] : ve.expando;
                    if (a[l]) {
                        if (t && (i = n ? a[l] : a[l].data)) {
                            ve.isArray(t) ? t = t.concat(ve.map(t, ve.camelCase)) : t in i ? t = [t] : (t = ve.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                            for (; o--;) delete i[t[o]];
                            if (n ? !h(i) : !ve.isEmptyObject(i)) return
                        }(n || (delete a[l].data, h(a[l]))) && (r ? ve.cleanData([e], !0) : me.deleteExpando || a != a.window ? delete a[l] : a[l] = void 0)
                    }
                }
            }

            function b(e, t, n, i) {
                var o, r = 1,
                    a = 20,
                    l = i ? function () {
                        return i.cur()
                    } : function () {
                        return ve.css(e, t, "")
                    },
                    s = l(),
                    c = n && n[3] || (ve.cssNumber[t] ? "" : "px"),
                    p = (ve.cssNumber[t] || "px" !== c && +s) && Oe.exec(ve.css(e, t));
                if (p && p[3] !== c) {
                    c = c || p[3], n = n || [], p = +s || 1;
                    do r = r || ".5", p /= r, ve.style(e, t, p + c); while (r !== (r = l() / s) && 1 !== r && --a)
                }
                return n && (p = +p || +s || 0, o = n[1] ? p + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = p, i.end = o)), o
            }

            function v(e) {
                var t = Ye.split("|"),
                    n = e.createDocumentFragment();
                if (n.createElement)
                    for (; t.length;) n.createElement(t.pop());
                return n
            }

            function x(e, t) {
                var n, i, o = 0,
                    r = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
                if (!r)
                    for (r = [], n = e.childNodes || e; null != (i = n[o]); o++)!t || ve.nodeName(i, t) ? r.push(i) : ve.merge(r, x(i, t));
                return void 0 === t || t && ve.nodeName(e, t) ? ve.merge([e], r) : r
            }

            function y(e, t) {
                for (var n, i = 0; null != (n = e[i]); i++) ve._data(n, "globalEval", !t || ve._data(t[i], "globalEval"))
            }

            function w(e) {
                Be.test(e.type) && (e.defaultChecked = e.checked)
            }

            function _(e, t, n, i, o) {
                for (var r, a, l, s, c, p, d, u = e.length, f = v(t), h = [], g = 0; u > g; g++)
                    if (a = e[g], a || 0 === a)
                        if ("object" === ve.type(a)) ve.merge(h, a.nodeType ? [a] : a);
                        else if (Ke.test(a)) {
                            for (s = s || f.appendChild(t.createElement("div")), c = (Re.exec(a) || ["", ""])[1].toLowerCase(), d = Ve[c] || Ve._default, s.innerHTML = d[1] + ve.htmlPrefilter(a) + d[2], r = d[0]; r--;) s = s.lastChild;
                            if (!me.leadingWhitespace && Ue.test(a) && h.push(t.createTextNode(Ue.exec(a)[0])), !me.tbody)
                                for (a = "table" !== c || Qe.test(a) ? "<table>" !== d[1] || Qe.test(a) ? 0 : s : s.firstChild, r = a && a.childNodes.length; r--;) ve.nodeName(p = a.childNodes[r], "tbody") && !p.childNodes.length && a.removeChild(p);
                            for (ve.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                            s = f.lastChild
                        } else h.push(t.createTextNode(a));
                for (s && f.removeChild(s), me.appendChecked || ve.grep(x(h, "input"), w), g = 0; a = h[g++];)
                    if (i && ve.inArray(a, i) > -1) o && o.push(a);
                    else if (l = ve.contains(a.ownerDocument, a), s = x(f.appendChild(a), "script"), l && y(s), n)
                        for (r = 0; a = s[r++];) Xe.test(a.type || "") && n.push(a);
                return s = null, f
            }

            function k() {
                return !0
            }

            function C() {
                return !1
            }

            function T() {
                try {
                    return se.activeElement
                } catch (e) {}
            }

            function $(e, t, n, i, o, r) {
                var a, l;
                if ("object" == typeof t) {
                    "string" != typeof n && (i = i || n, n = void 0);
                    for (l in t) $(e, l, n, i, t[l], r);
                    return e
                }
                if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), o === !1) o = C;
                else if (!o) return e;
                return 1 === r && (a = o, o = function (e) {
                    return ve().off(e), a.apply(this, arguments)
                }, o.guid = a.guid || (a.guid = ve.guid++)), e.each(function () {
                    ve.event.add(this, t, o, i, n)
                })
            }

            function j(e, t) {
                return ve.nodeName(e, "table") && ve.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function E(e) {
                return e.type = (null !== ve.find.attr(e, "type")) + "/" + e.type, e
            }

            function S(e) {
                var t = ct.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function z(e, t) {
                if (1 === t.nodeType && ve.hasData(e)) {
                    var n, i, o, r = ve._data(e),
                        a = ve._data(t, r),
                        l = r.events;
                    if (l) {
                        delete a.handle, a.events = {};
                        for (n in l)
                            for (i = 0, o = l[n].length; o > i; i++) ve.event.add(t, n, l[n][i])
                    }
                    a.data && (a.data = ve.extend({}, a.data))
                }
            }

            function N(e, t) {
                var n, i, o;
                if (1 === t.nodeType) {
                    if (n = t.nodeName.toLowerCase(), !me.noCloneEvent && t[ve.expando]) {
                        o = ve._data(t);
                        for (i in o.events) ve.removeEvent(t, i, o.handle);
                        t.removeAttribute(ve.expando)
                    }
                    "script" === n && t.text !== e.text ? (E(t).text = e.text, S(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), me.html5Clone && e.innerHTML && !ve.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Be.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
                }
            }

            function A(e, t, n, i) {
                t = pe.apply([], t);
                var o, r, a, l, s, c, p = 0,
                    d = e.length,
                    u = d - 1,
                    f = t[0],
                    h = ve.isFunction(f);
                if (h || d > 1 && "string" == typeof f && !me.checkClone && st.test(f)) return e.each(function (o) {
                    var r = e.eq(o);
                    h && (t[0] = f.call(this, o, r.html())), A(r, t, n, i)
                });
                if (d && (c = _(t, e[0].ownerDocument, !1, e, i), o = c.firstChild, 1 === c.childNodes.length && (c = o), o || i)) {
                    for (l = ve.map(x(c, "script"), E), a = l.length; d > p; p++) r = c, p !== u && (r = ve.clone(r, !0, !0), a && ve.merge(l, x(r, "script"))), n.call(e[p], r, p);
                    if (a)
                        for (s = l[l.length - 1].ownerDocument, ve.map(l, S), p = 0; a > p; p++) r = l[p], Xe.test(r.type || "") && !ve._data(r, "globalEval") && ve.contains(s, r) && (r.src ? ve._evalUrl && ve._evalUrl(r.src) : ve.globalEval((r.text || r.textContent || r.innerHTML || "").replace(pt, "")));
                    c = o = null
                }
                return e
            }

            function D(e, t, n) {
                for (var i, o = t ? ve.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || ve.cleanData(x(i)), i.parentNode && (n && ve.contains(i.ownerDocument, i) && y(x(i, "script")), i.parentNode.removeChild(i));
                return e
            }

            function L(e, t) {
                var n = ve(t.createElement(e)).appendTo(t.body),
                    i = ve.css(n[0], "display");
                return n.detach(), i
            }

            function I(e) {
                var t = se,
                    n = ht[e];
                return n || (n = L(e, t), "none" !== n && n || (ft = (ft || ve("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (ft[0].contentWindow || ft[0].contentDocument).document, t.write(), t.close(), n = L(e, t), ft.detach()), ht[e] = n), n
            }

            function P(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }

            function q(e) {
                if (e in St) return e;
                for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Et.length; n--;)
                    if (e = Et[n] + t, e in St) return e
            }

            function H(e, t) {
                for (var n, i, o, r = [], a = 0, l = e.length; l > a; a++) i = e[a], i.style && (r[a] = ve._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Je(i) && (r[a] = ve._data(i, "olddisplay", I(i.nodeName)))) : (o = Je(i), (n && "none" !== n || !o) && ve._data(i, "olddisplay", o ? n : ve.css(i, "display"))));
                for (a = 0; l > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
                return e
            }

            function F(e, t, n) {
                var i = Tt.exec(t);
                return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
            }

            function G(e, t, n, i, o) {
                for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += ve.css(e, n + Me[r], !0, o)), i ? ("content" === n && (a -= ve.css(e, "padding" + Me[r], !0, o)), "margin" !== n && (a -= ve.css(e, "border" + Me[r] + "Width", !0, o))) : (a += ve.css(e, "padding" + Me[r], !0, o), "padding" !== n && (a += ve.css(e, "border" + Me[r] + "Width", !0, o)));
                return a
            }

            function O(e, t, n) {
                var i = !0,
                    o = "width" === t ? e.offsetWidth : e.offsetHeight,
                    a = xt(e),
                    l = me.boxSizing && "border-box" === ve.css(e, "boxSizing", !1, a);
                if (se.msFullscreenElement && r.top !== r && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[t])), 0 >= o || null == o) {
                    if (o = yt(e, t, a), (0 > o || null == o) && (o = e.style[t]), mt.test(o)) return o;
                    i = l && (me.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
                }
                return o + G(e, t, n || (l ? "border" : "content"), i, a) + "px"
            }

            function M(e, t, n, i, o) {
                return new M.prototype.init(e, t, n, i, o)
            }

            function J() {
                return r.setTimeout(function () {
                    zt = void 0
                }), zt = ve.now()
            }

            function W(e, t) {
                var n, i = {
                        height: e
                    },
                    o = 0;
                for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Me[o], i["margin" + n] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function B(e, t, n) {
                for (var i, o = (U.tweeners[t] || []).concat(U.tweeners["*"]), r = 0, a = o.length; a > r; r++)
                    if (i = o[r].call(n, t, e)) return i
            }

            function R(e, t, n) {
                var i, o, r, a, l, s, c, p, d = this,
                    u = {},
                    f = e.style,
                    h = e.nodeType && Je(e),
                    g = ve._data(e, "fxshow");
                n.queue || (l = ve._queueHooks(e, "fx"), null == l.unqueued && (l.unqueued = 0, s = l.empty.fire, l.empty.fire = function () {
                    l.unqueued || s()
                }), l.unqueued++, d.always(function () {
                    d.always(function () {
                        l.unqueued--, ve.queue(e, "fx").length || l.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = ve.css(e, "display"), p = "none" === c ? ve._data(e, "olddisplay") || I(e.nodeName) : c, "inline" === p && "none" === ve.css(e, "float") && (me.inlineBlockNeedsLayout && "inline" !== I(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", me.shrinkWrapBlocks() || d.always(function () {
                    f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
                }));
                for (i in t)
                    if (o = t[i], At.exec(o)) {
                        if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[i]) continue;
                            h = !0
                        }
                        u[i] = g && g[i] || ve.style(e, i)
                    } else c = void 0;
                if (ve.isEmptyObject(u)) "inline" === ("none" === c ? I(e.nodeName) : c) && (f.display = c);
                else {
                    g ? "hidden" in g && (h = g.hidden) : g = ve._data(e, "fxshow", {}), r && (g.hidden = !h), h ? ve(e).show() : d.done(function () {
                        ve(e).hide()
                    }), d.done(function () {
                        var t;
                        ve._removeData(e, "fxshow");
                        for (t in u) ve.style(e, t, u[t])
                    });
                    for (i in u) a = B(h ? g[i] : 0, i, d), i in g || (g[i] = a.start, h && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
                }
            }

            function X(e, t) {
                var n, i, o, r, a;
                for (n in e)
                    if (i = ve.camelCase(n), o = t[i], r = e[n], ve.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), a = ve.cssHooks[i], a && "expand" in a) {
                        r = a.expand(r), delete e[i];
                        for (n in r) n in e || (e[n] = r[n], t[n] = o)
                    } else t[i] = o
            }

            function U(e, t, n) {
                var i, o, r = 0,
                    a = U.prefilters.length,
                    l = ve.Deferred().always(function () {
                        delete s.elem
                    }),
                    s = function () {
                        if (o) return !1;
                        for (var t = zt || J(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, a = 0, s = c.tweens.length; s > a; a++) c.tweens[a].run(r);
                        return l.notifyWith(e, [c, r, n]), 1 > r && s ? n : (l.resolveWith(e, [c]), !1)
                    },
                    c = l.promise({
                        elem: e,
                        props: ve.extend({}, t),
                        opts: ve.extend(!0, {
                            specialEasing: {},
                            easing: ve.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: zt || J(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (t, n) {
                            var i = ve.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(i), i
                        }, stop: function (t) {
                            var n = 0,
                                i = t ? c.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; i > n; n++) c.tweens[n].run(1);
                            return t ? (l.notifyWith(e, [c, 1, 0]), l.resolveWith(e, [c, t])) : l.rejectWith(e, [c, t]), this
                        }
                    }),
                    p = c.props;
                for (X(p, c.opts.specialEasing); a > r; r++)
                    if (i = U.prefilters[r].call(c, e, p, c.opts)) return ve.isFunction(i.stop) && (ve._queueHooks(c.elem, c.opts.queue).stop = ve.proxy(i.stop, i)), i;
                return ve.map(p, B, c), ve.isFunction(c.opts.start) && c.opts.start.call(e, c), ve.fx.timer(ve.extend(s, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
            }

            function Y(e) {
                return ve.attr(e, "class") || ""
            }

            function V(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var i, o = 0,
                        r = t.toLowerCase().match(Le) || [];
                    if (ve.isFunction(n))
                        for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                }
            }

            function K(e, t, n, i) {
                function o(l) {
                    var s;
                    return r[l] = !0, ve.each(e[l] || [], function (e, l) {
                        var c = l(t, n, i);
                        return "string" != typeof c || a || r[c] ? a ? !(s = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
                    }), s
                }
                var r = {},
                    a = e === nn;
                return o(t.dataTypes[0]) || !r["*"] && o("*")
            }

            function Q(e, t) {
                var n, i, o = ve.ajaxSettings.flatOptions || {};
                for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
                return n && ve.extend(!0, e, n), e
            }

            function Z(e, t, n) {
                for (var i, o, r, a, l = e.contents, s = e.dataTypes;
                     "*" === s[0];) s.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                if (o)
                    for (a in l)
                        if (l[a] && l[a].test(o)) {
                            s.unshift(a);
                            break
                        }
                if (s[0] in n) r = s[0];
                else {
                    for (a in n) {
                        if (!s[0] || e.converters[a + " " + s[0]]) {
                            r = a;
                            break
                        }
                        i || (i = a)
                    }
                    r = r || i
                }
                return r ? (r !== s[0] && s.unshift(r), n[r]) : void 0
            }

            function ee(e, t, n, i) {
                var o, r, a, l, s, c = {},
                    p = e.dataTypes.slice();
                if (p[1])
                    for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
                for (r = p.shift(); r;)
                    if (e.responseFields[r] && (n[e.responseFields[r]] = t), !s && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), s = r, r = p.shift())
                        if ("*" === r) r = s;
                        else if ("*" !== s && s !== r) {
                            if (a = c[s + " " + r] || c["* " + r], !a)
                                for (o in c)
                                    if (l = o.split(" "), l[1] === r && (a = c[s + " " + l[0]] || c["* " + l[0]])) {
                                        a === !0 ? a = c[o] : c[o] !== !0 && (r = l[0], p.unshift(l[1]));
                                        break
                                    }
                            if (a !== !0)
                                if (a && e["throws"]) t = a(t);
                                else try {
                                    t = a(t)
                                } catch (d) {
                                    return {
                                        state: "parsererror",
                                        error: a ? d : "No conversion from " + s + " to " + r
                                    }
                                }
                        }
                return {
                    state: "success",
                    data: t
                }
            }

            function te(e) {
                return e.style && e.style.display || ve.css(e, "display")
            }

            function ne(e) {
                for (; e && 1 === e.nodeType;) {
                    if ("none" === te(e) || "hidden" === e.type) return !0;
                    e = e.parentNode
                }
                return !1
            }

            function ie(e, t, n, i) {
                var o;
                if (ve.isArray(t)) ve.each(t, function (t, o) {
                    n || sn.test(e) ? i(e, o) : ie(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
                });
                else if (n || "object" !== ve.type(t)) i(e, t);
                else
                    for (o in t) ie(e + "[" + o + "]", t[o], n, i)
            }

            function oe() {
                try {
                    return new r.XMLHttpRequest
                } catch (e) {}
            }

            function re() {
                try {
                    return new r.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {}
            }

            function ae(e) {
                return ve.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
            }
            var le = [],
                se = r.document,
                ce = le.slice,
                pe = le.concat,
                de = le.push,
                ue = le.indexOf,
                fe = {},
                he = fe.toString,
                ge = fe.hasOwnProperty,
                me = {},
                be = "1.12.0",
                ve = function (e, t) {
                    return new ve.fn.init(e, t)
                },
                xe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                ye = /^-ms-/,
                we = /-([\da-z])/gi,
                _e = function (e, t) {
                    return t.toUpperCase()
                };
            ve.fn = ve.prototype = {
                jquery: be,
                constructor: ve,
                selector: "",
                length: 0,
                toArray: function () {
                    return ce.call(this)
                }, get: function (e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : ce.call(this)
                }, pushStack: function (e) {
                    var t = ve.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                }, each: function (e) {
                    return ve.each(this, e)
                }, map: function (e) {
                    return this.pushStack(ve.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                }, slice: function () {
                    return this.pushStack(ce.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, eq: function (e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor()
                }, push: de,
                sort: le.sort,
                splice: le.splice
            }, ve.extend = ve.fn.extend = function () {
                var e, t, n, i, o, r, a = arguments[0] || {},
                    l = 1,
                    s = arguments.length,
                    c = !1;
                for ("boolean" == typeof a && (c = a, a = arguments[l] || {}, l++), "object" == typeof a || ve.isFunction(a) || (a = {}), l === s && (a = this, l--); s > l; l++)
                    if (null != (o = arguments[l]))
                        for (i in o) e = a[i], n = o[i], a !== n && (c && n && (ve.isPlainObject(n) || (t = ve.isArray(n))) ? (t ? (t = !1, r = e && ve.isArray(e) ? e : []) : r = e && ve.isPlainObject(e) ? e : {}, a[i] = ve.extend(c, r, n)) : void 0 !== n && (a[i] = n));
                return a
            }, ve.extend({
                expando: "jQuery" + (be + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e)
                }, noop: function () {}, isFunction: function (e) {
                    return "function" === ve.type(e)
                }, isArray: Array.isArray || function (e) {
                    return "array" === ve.type(e)
                }, isWindow: function (e) {
                    return null != e && e == e.window
                }, isNumeric: function (e) {
                    var t = e && e.toString();
                    return !ve.isArray(e) && t - parseFloat(t) + 1 >= 0
                }, isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                }, isPlainObject: function (e) {
                    var t;
                    if (!e || "object" !== ve.type(e) || e.nodeType || ve.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !ge.call(e, "constructor") && !ge.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    if (!me.ownFirst)
                        for (t in e) return ge.call(e, t);
                    for (t in e);
                    return void 0 === t || ge.call(e, t)
                }, type: function (e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? fe[he.call(e)] || "object" : typeof e
                }, globalEval: function (e) {
                    e && ve.trim(e) && (r.execScript || function (e) {
                        r.eval.call(r, e)
                    })(e)
                }, camelCase: function (e) {
                    return e.replace(ye, "ms-").replace(we, _e)
                }, nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }, each: function (e, t) {
                    var n, i = 0;
                    if (l(e))
                        for (n = e.length; n > i && t.call(e[i], i, e[i]) !== !1; i++);
                    else
                        for (i in e)
                            if (t.call(e[i], i, e[i]) === !1) break; return e
                }, trim: function (e) {
                    return null == e ? "" : (e + "").replace(xe, "")
                }, makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (l(Object(e)) ? ve.merge(n, "string" == typeof e ? [e] : e) : de.call(n, e)), n
                }, inArray: function (e, t, n) {
                    var i;
                    if (t) {
                        if (ue) return ue.call(t, e, n);
                        for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                }, merge: function (e, t) {
                    for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
                    if (n !== n)
                        for (; void 0 !== t[i];) e[o++] = t[i++];
                    return e.length = o, e
                }, grep: function (e, t, n) {
                    for (var i, o = [], r = 0, a = e.length, l = !n; a > r; r++) i = !t(e[r], r), i !== l && o.push(e[r]);
                    return o
                }, map: function (e, t, n) {
                    var i, o, r = 0,
                        a = [];
                    if (l(e))
                        for (i = e.length; i > r; r++) o = t(e[r], r, n), null != o && a.push(o);
                    else
                        for (r in e) o = t(e[r], r, n), null != o && a.push(o);
                    return pe.apply([], a)
                }, guid: 1,
                proxy: function (e, t) {
                    var n, i, o;
                    return "string" == typeof t && (o = e[t], t = e, e = o), ve.isFunction(e) ? (n = ce.call(arguments, 2), i = function () {
                        return e.apply(t || this, n.concat(ce.call(arguments)))
                    }, i.guid = e.guid = e.guid || ve.guid++, i) : void 0
                }, now: function () {
                    return +new Date
                }, support: me
            }), "function" == typeof Symbol && (ve.fn[Symbol.iterator] = le[Symbol.iterator]), ve.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                fe["[object " + t + "]"] = t.toLowerCase()
            });
            var ke = function (e) {
                function t(e, t, n, i) {
                    var o, r, a, l, s, c, d, f, h = t && t.ownerDocument,
                        g = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
                    if (!i && ((t ? t.ownerDocument || t : G) !== A && N(t), t = t || A, L)) {
                        if (11 !== g && (c = be.exec(e)))
                            if (o = c[1]) {
                                if (9 === g) {
                                    if (!(a = t.getElementById(o))) return n;
                                    if (a.id === o) return n.push(a), n
                                } else if (h && (a = h.getElementById(o)) && H(t, a) && a.id === o) return n.push(a), n
                            } else {
                                if (c[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                                if ((o = c[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(o)), n
                            }
                        if (w.qsa && !B[e + " "] && (!I || !I.test(e))) {
                            if (1 !== g) h = t, f = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((l = t.getAttribute("id")) ? l = l.replace(xe, "\\$&") : t.setAttribute("id", l = F), d = T(e), r = d.length, s = ue.test(l) ? "#" + l : "[id='" + l + "']"; r--;) d[r] = s + " " + u(d[r]);
                                f = d.join(","), h = ve.test(e) && p(t.parentNode) || t
                            }
                            if (f) try {
                                return Q.apply(n, h.querySelectorAll(f)), n
                            } catch (m) {} finally {
                                l === F && t.removeAttribute("id")
                            }
                        }
                    }
                    return j(e.replace(le, "$1"), t, n, i)
                }

                function n() {
                    function e(n, i) {
                        return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = i
                    }
                    var t = [];
                    return e
                }

                function i(e) {
                    return e[F] = !0, e
                }

                function o(e) {
                    var t = A.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function r(e, t) {
                    for (var n = e.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                    if (i) return i;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function l(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function s(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function c(e) {
                    return i(function (t) {
                        return t = +t, i(function (n, i) {
                            for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                        })
                    })
                }

                function p(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function d() {}

                function u(e) {
                    for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                    return i
                }

                function f(e, t, n) {
                    var i = t.dir,
                        o = n && "parentNode" === i,
                        r = M++;
                    return t.first ? function (t, n, r) {
                        for (; t = t[i];)
                            if (1 === t.nodeType || o) return e(t, n, r)
                    } : function (t, n, a) {
                        var l, s, c, p = [O, r];
                        if (a) {
                            for (; t = t[i];)
                                if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                        } else
                            for (; t = t[i];)
                                if (1 === t.nodeType || o) {
                                    if (c = t[F] || (t[F] = {}), s = c[t.uniqueID] || (c[t.uniqueID] = {}), (l = s[i]) && l[0] === O && l[1] === r) return p[2] = l[2];
                                    if (s[i] = p, p[2] = e(t, n, a)) return !0
                                }
                    }
                }

                function h(e) {
                    return e.length > 1 ? function (t, n, i) {
                        for (var o = e.length; o--;)
                            if (!e[o](t, n, i)) return !1;
                        return !0
                    } : e[0]
                }

                function g(e, n, i) {
                    for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
                    return i
                }

                function m(e, t, n, i, o) {
                    for (var r, a = [], l = 0, s = e.length, c = null != t; s > l; l++)(r = e[l]) && (!n || n(r, i, o)) && (a.push(r), c && t.push(l));
                    return a
                }

                function b(e, t, n, o, r, a) {
                    return o && !o[F] && (o = b(o)), r && !r[F] && (r = b(r, a)), i(function (i, a, l, s) {
                        var c, p, d, u = [],
                            f = [],
                            h = a.length,
                            b = i || g(t || "*", l.nodeType ? [l] : l, []),
                            v = !e || !i && t ? b : m(b, u, e, l, s),
                            x = n ? r || (i ? e : h || o) ? [] : a : v;
                        if (n && n(v, x, l, s), o)
                            for (c = m(x, f), o(c, [], l, s), p = c.length; p--;)(d = c[p]) && (x[f[p]] = !(v[f[p]] = d));
                        if (i) {
                            if (r || e) {
                                if (r) {
                                    for (c = [], p = x.length; p--;)(d = x[p]) && c.push(v[p] = d);
                                    r(null, x = [], c, s)
                                }
                                for (p = x.length; p--;)(d = x[p]) && (c = r ? ee(i, d) : u[p]) > -1 && (i[c] = !(a[c] = d))
                            }
                        } else x = m(x === a ? x.splice(h, x.length) : x), r ? r(null, a, x, s) : Q.apply(a, x)
                    })
                }

                function v(e) {
                    for (var t, n, i, o = e.length, r = _.relative[e[0].type], a = r || _.relative[" "], l = r ? 1 : 0, s = f(function (e) {
                        return e === t
                    }, a, !0), c = f(function (e) {
                        return ee(t, e) > -1
                    }, a, !0), p = [
                        function (e, n, i) {
                            var o = !r && (i || n !== E) || ((t = n).nodeType ? s(e, n, i) : c(e, n, i));
                            return t = null, o
                        }
                    ]; o > l; l++)
                        if (n = _.relative[e[l].type]) p = [f(h(p), n)];
                        else {
                            if (n = _.filter[e[l].type].apply(null, e[l].matches), n[F]) {
                                for (i = ++l; o > i && !_.relative[e[i].type]; i++);
                                return b(l > 1 && h(p), l > 1 && u(e.slice(0, l - 1).concat({
                                        value: " " === e[l - 2].type ? "*" : ""
                                    })).replace(le, "$1"), n, i > l && v(e.slice(l, i)), o > i && v(e = e.slice(i)), o > i && u(e))
                            }
                            p.push(n)
                        }
                    return h(p)
                }

                function x(e, n) {
                    var o = n.length > 0,
                        r = e.length > 0,
                        a = function (i, a, l, s, c) {
                            var p, d, u, f = 0,
                                h = "0",
                                g = i && [],
                                b = [],
                                v = E,
                                x = i || r && _.find.TAG("*", c),
                                y = O += null == v ? 1 : Math.random() || .1,
                                w = x.length;
                            for (c && (E = a === A || a || c); h !== w && null != (p = x[h]); h++) {
                                if (r && p) {
                                    for (d = 0, a || p.ownerDocument === A || (N(p), l = !L); u = e[d++];)
                                        if (u(p, a || A, l)) {
                                            s.push(p);
                                            break
                                        }
                                    c && (O = y)
                                }
                                o && ((p = !u && p) && f--, i && g.push(p))
                            }
                            if (f += h, o && h !== f) {
                                for (d = 0; u = n[d++];) u(g, b, a, l);
                                if (i) {
                                    if (f > 0)
                                        for (; h--;) g[h] || b[h] || (b[h] = V.call(s));
                                    b = m(b)
                                }
                                Q.apply(s, b), c && !i && b.length > 0 && f + n.length > 1 && t.uniqueSort(s)
                            }
                            return c && (O = y, E = v), g
                        };
                    return o ? i(a) : a
                }
                var y, w, _, k, C, T, $, j, E, S, z, N, A, D, L, I, P, q, H, F = "sizzle" + 1 * new Date,
                    G = e.document,
                    O = 0,
                    M = 0,
                    J = n(),
                    W = n(),
                    B = n(),
                    R = function (e, t) {
                        return e === t && (z = !0), 0
                    },
                    X = 1 << 31,
                    U = {}.hasOwnProperty,
                    Y = [],
                    V = Y.pop,
                    K = Y.push,
                    Q = Y.push,
                    Z = Y.slice,
                    ee = function (e, t) {
                        for (var n = 0, i = e.length; i > n; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ne = "[\\x20\\t\\r\\n\\f]",
                    ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
                    re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                    ae = new RegExp(ne + "+", "g"),
                    le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                    se = new RegExp("^" + ne + "*," + ne + "*"),
                    ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                    pe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                    de = new RegExp(re),
                    ue = new RegExp("^" + ie + "$"),
                    fe = {
                        ID: new RegExp("^#(" + ie + ")"),
                        CLASS: new RegExp("^\\.(" + ie + ")"),
                        TAG: new RegExp("^(" + ie + "|[*])"),
                        ATTR: new RegExp("^" + oe),
                        PSEUDO: new RegExp("^" + re),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    },
                    he = /^(?:input|select|textarea|button)$/i,
                    ge = /^h\d$/i,
                    me = /^[^{]+\{\s*\[native \w/,
                    be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ve = /[+~]/,
                    xe = /'|\\/g,
                    ye = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                    we = function (e, t, n) {
                        var i = "0x" + t - 65536;
                        return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    _e = function () {
                        N()
                    };
                try {
                    Q.apply(Y = Z.call(G.childNodes), G.childNodes), Y[G.childNodes.length].nodeType
                } catch (ke) {
                    Q = {
                        apply: Y.length ? function (e, t) {
                            K.apply(e, Z.call(t))
                        } : function (e, t) {
                            for (var n = e.length, i = 0; e[n++] = t[i++];);
                            e.length = n - 1
                        }
                    }
                }
                w = t.support = {}, C = t.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, N = t.setDocument = function (e) {
                    var t, n, i = e ? e.ownerDocument || e : G;
                    return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, D = A.documentElement, L = !C(A), (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _e, !1) : n.attachEvent && n.attachEvent("onunload", _e)), w.attributes = o(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), w.getElementsByTagName = o(function (e) {
                        return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
                    }), w.getElementsByClassName = me.test(A.getElementsByClassName), w.getById = o(function (e) {
                        return D.appendChild(e).id = F, !A.getElementsByName || !A.getElementsByName(F).length
                    }), w.getById ? (_.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && L) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }, _.filter.ID = function (e) {
                        var t = e.replace(ye, we);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete _.find.ID, _.filter.ID = function (e) {
                        var t = e.replace(ye, we);
                        return function (e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), _.find.TAG = w.getElementsByTagName ? function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, i = [],
                            o = 0,
                            r = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return r
                    }, _.find.CLASS = w.getElementsByClassName && function (e, t) {
                            return "undefined" != typeof t.getElementsByClassName && L ? t.getElementsByClassName(e) : void 0
                        }, P = [], I = [], (w.qsa = me.test(A.querySelectorAll)) && (o(function (e) {
                        D.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && I.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || I.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + F + "-]").length || I.push("~="), e.querySelectorAll(":checked").length || I.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || I.push(".#.+[+~]")
                    }), o(function (e) {
                        var t = A.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && I.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
                    })), (w.matchesSelector = me.test(q = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function (e) {
                        w.disconnectedMatch = q.call(e, "div"), q.call(e, "[s!='']:x"), P.push("!=", re)
                    }), I = I.length && new RegExp(I.join("|")), P = P.length && new RegExp(P.join("|")), t = me.test(D.compareDocumentPosition), H = t || me.test(D.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    } : function (e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, R = t ? function (e, t) {
                        if (e === t) return z = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === G && H(G, e) ? -1 : t === A || t.ownerDocument === G && H(G, t) ? 1 : S ? ee(S, e) - ee(S, t) : 0 : 4 & n ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return z = !0, 0;
                        var n, i = 0,
                            o = e.parentNode,
                            r = t.parentNode,
                            l = [e],
                            s = [t];
                        if (!o || !r) return e === A ? -1 : t === A ? 1 : o ? -1 : r ? 1 : S ? ee(S, e) - ee(S, t) : 0;
                        if (o === r) return a(e, t);
                        for (n = e; n = n.parentNode;) l.unshift(n);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (; l[i] === s[i];) i++;
                        return i ? a(l[i], s[i]) : l[i] === G ? -1 : s[i] === G ? 1 : 0
                    }, A) : A
                }, t.matches = function (e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function (e, n) {
                    if ((e.ownerDocument || e) !== A && N(e), n = n.replace(pe, "='$1']"), w.matchesSelector && L && !B[n + " "] && (!P || !P.test(n)) && (!I || !I.test(n))) try {
                        var i = q.call(e, n);
                        if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                    } catch (o) {}
                    return t(n, A, null, [e]).length > 0
                }, t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== A && N(e), H(e, t)
                }, t.attr = function (e, t) {
                    (e.ownerDocument || e) !== A && N(e);
                    var n = _.attrHandle[t.toLowerCase()],
                        i = n && U.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
                    return void 0 !== i ? i : w.attributes || !L ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }, t.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function (e) {
                    var t, n = [],
                        i = 0,
                        o = 0;
                    if (z = !w.detectDuplicates, S = !w.sortStable && e.slice(0), e.sort(R), z) {
                        for (; t = e[o++];) t === e[o] && (i = n.push(o));
                        for (; i--;) e.splice(n[i], 1)
                    }
                    return S = null, e
                }, k = t.getText = function (e) {
                    var t, n = "",
                        i = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += k(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[i++];) n += k(t);
                    return n
                }, _ = t.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: fe,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function (e) {
                            return e[1] = e[1].replace(ye, we), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        }, CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        }, PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = T(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(ye, we).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        }, CLASS: function (e) {
                            var t = J[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && J(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                })
                        }, ATTR: function (e, n, i) {
                            return function (o) {
                                var r = t.attr(o, e);
                                return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(ae, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                            }
                        }, CHILD: function (e, t, n, i, o) {
                            var r = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                l = "of-type" === t;
                            return 1 === i && 0 === o ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, s) {
                                var c, p, d, u, f, h, g = r !== a ? "nextSibling" : "previousSibling",
                                    m = t.parentNode,
                                    b = l && t.nodeName.toLowerCase(),
                                    v = !s && !l,
                                    x = !1;
                                if (m) {
                                    if (r) {
                                        for (; g;) {
                                            for (u = t; u = u[g];)
                                                if (l ? u.nodeName.toLowerCase() === b : 1 === u.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                        for (u = m, d = u[F] || (u[F] = {}),
                                                 p = d[u.uniqueID] || (d[u.uniqueID] = {}), c = p[e] || [], f = c[0] === O && c[1], x = f && c[2], u = f && m.childNodes[f]; u = ++f && u && u[g] || (x = f = 0) || h.pop();)
                                            if (1 === u.nodeType && ++x && u === t) {
                                                p[e] = [O, f, x];
                                                break
                                            }
                                    } else if (v && (u = t, d = u[F] || (u[F] = {}), p = d[u.uniqueID] || (d[u.uniqueID] = {}), c = p[e] || [], f = c[0] === O && c[1], x = f), x === !1)
                                        for (;
                                            (u = ++f && u && u[g] || (x = f = 0) || h.pop()) && ((l ? u.nodeName.toLowerCase() !== b : 1 !== u.nodeType) || !++x || (v && (d = u[F] || (u[F] = {}), p = d[u.uniqueID] || (d[u.uniqueID] = {}), p[e] = [O, x]), u !== t)););
                                    return x -= o, x === i || x % i === 0 && x / i >= 0
                                }
                            }
                        }, PSEUDO: function (e, n) {
                            var o, r = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return r[F] ? r(n) : r.length > 1 ? (o = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                                for (var i, o = r(e, n), a = o.length; a--;) i = ee(e, o[a]), e[i] = !(t[i] = o[a])
                            }) : function (e) {
                                return r(e, 0, o)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: i(function (e) {
                            var t = [],
                                n = [],
                                o = $(e.replace(le, "$1"));
                            return o[F] ? i(function (e, t, n, i) {
                                for (var r, a = o(e, null, i, []), l = e.length; l--;)(r = a[l]) && (e[l] = !(t[l] = r))
                            }) : function (e, i, r) {
                                return t[0] = e, o(t, null, r, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: i(function (e) {
                            return function (n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: i(function (e) {
                            return e = e.replace(ye, we),
                                function (t) {
                                    return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                                }
                        }),
                        lang: i(function (e) {
                            return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, we).toLowerCase(),
                                function (t) {
                                    var n;
                                    do
                                        if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        }, root: function (e) {
                            return e === D
                        }, focus: function (e) {
                            return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        }, enabled: function (e) {
                            return e.disabled === !1
                        }, disabled: function (e) {
                            return e.disabled === !0
                        }, checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        }, selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        }, empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        }, parent: function (e) {
                            return !_.pseudos.empty(e)
                        }, header: function (e) {
                            return ge.test(e.nodeName)
                        }, input: function (e) {
                            return he.test(e.nodeName)
                        }, button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        }, text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        }, first: c(function () {
                            return [0]
                        }),
                        last: c(function (e, t) {
                            return [t - 1]
                        }),
                        eq: c(function (e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: c(function (e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: c(function (e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: c(function (e, t, n) {
                            for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                            return e
                        }),
                        gt: c(function (e, t, n) {
                            for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                            return e
                        })
                    }
                }, _.pseudos.nth = _.pseudos.eq;
                for (y in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) _.pseudos[y] = l(y);
                for (y in {
                    submit: !0,
                    reset: !0
                }) _.pseudos[y] = s(y);
                return d.prototype = _.filters = _.pseudos, _.setFilters = new d, T = t.tokenize = function (e, n) {
                    var i, o, r, a, l, s, c, p = W[e + " "];
                    if (p) return n ? 0 : p.slice(0);
                    for (l = e, s = [], c = _.preFilter; l;) {
                        (!i || (o = se.exec(l))) && (o && (l = l.slice(o[0].length) || l), s.push(r = [])), i = !1, (o = ce.exec(l)) && (i = o.shift(), r.push({
                            value: i,
                            type: o[0].replace(le, " ")
                        }), l = l.slice(i.length));
                        for (a in _.filter)!(o = fe[a].exec(l)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
                            value: i,
                            type: a,
                            matches: o
                        }), l = l.slice(i.length));
                        if (!i) break
                    }
                    return n ? l.length : l ? t.error(e) : W(e, s).slice(0)
                }, $ = t.compile = function (e, t) {
                    var n, i = [],
                        o = [],
                        r = B[e + " "];
                    if (!r) {
                        for (t || (t = T(e)), n = t.length; n--;) r = v(t[n]), r[F] ? i.push(r) : o.push(r);
                        r = B(e, x(o, i)), r.selector = e
                    }
                    return r
                }, j = t.select = function (e, t, n, i) {
                    var o, r, a, l, s, c = "function" == typeof e && e,
                        d = !i && T(e = c.selector || e);
                    if (n = n || [], 1 === d.length) {
                        if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && w.getById && 9 === t.nodeType && L && _.relative[r[1].type]) {
                            if (t = (_.find.ID(a.matches[0].replace(ye, we), t) || [])[0], !t) return n;
                            c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                        }
                        for (o = fe.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !_.relative[l = a.type]);)
                            if ((s = _.find[l]) && (i = s(a.matches[0].replace(ye, we), ve.test(r[0].type) && p(t.parentNode) || t))) {
                                if (r.splice(o, 1), e = i.length && u(r), !e) return Q.apply(n, i), n;
                                break
                            }
                    }
                    return (c || $(e, d))(i, t, !L, n, !t || ve.test(e) && p(t.parentNode) || t), n
                }, w.sortStable = F.split("").sort(R).join("") === F, w.detectDuplicates = !!z, N(), w.sortDetached = o(function (e) {
                    return 1 & e.compareDocumentPosition(A.createElement("div"))
                }), o(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || r("type|href|height|width", function (e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), w.attributes && o(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || r("value", function (e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), o(function (e) {
                    return null == e.getAttribute("disabled")
                }) || r(te, function (e, t, n) {
                    var i;
                    return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }), t
            }(r);
            ve.find = ke, ve.expr = ke.selectors, ve.expr[":"] = ve.expr.pseudos, ve.uniqueSort = ve.unique = ke.uniqueSort, ve.text = ke.getText, ve.isXMLDoc = ke.isXML, ve.contains = ke.contains;
            var Ce = function (e, t, n) {
                    for (var i = [], o = void 0 !== n;
                         (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (o && ve(e).is(n)) break;
                            i.push(e)
                        }
                    return i
                },
                Te = function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                $e = ve.expr.match.needsContext,
                je = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
                Ee = /^.[^:#\[\.,]*$/;
            ve.filter = function (e, t, n) {
                var i = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ve.find.matchesSelector(i, e) ? [i] : [] : ve.find.matches(e, ve.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            }, ve.fn.extend({
                find: function (e) {
                    var t, n = [],
                        i = this,
                        o = i.length;
                    if ("string" != typeof e) return this.pushStack(ve(e).filter(function () {
                        for (t = 0; o > t; t++)
                            if (ve.contains(i[t], this)) return !0
                    }));
                    for (t = 0; o > t; t++) ve.find(e, i[t], n);
                    return n = this.pushStack(o > 1 ? ve.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
                }, filter: function (e) {
                    return this.pushStack(s(this, e || [], !1))
                }, not: function (e) {
                    return this.pushStack(s(this, e || [], !0))
                }, is: function (e) {
                    return !!s(this, "string" == typeof e && $e.test(e) ? ve(e) : e || [], !1).length
                }
            });
            var Se, ze = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                Ne = ve.fn.init = function (e, t, n) {
                    var i, o;
                    if (!e) return this;
                    if (n = n || Se, "string" == typeof e) {
                        if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ze.exec(e), !i || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (i[1]) {
                            if (t = t instanceof ve ? t[0] : t, ve.merge(this, ve.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), je.test(i[1]) && ve.isPlainObject(t))
                                for (i in t) ve.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                            return this
                        }
                        if (o = se.getElementById(i[2]), o && o.parentNode) {
                            if (o.id !== i[2]) return Se.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = se, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ve.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(ve) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ve.makeArray(e, this))
                };
            Ne.prototype = ve.fn, Se = ve(se);
            var Ae = /^(?:parents|prev(?:Until|All))/,
                De = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            ve.fn.extend({
                has: function (e) {
                    var t, n = ve(e, this),
                        i = n.length;
                    return this.filter(function () {
                        for (t = 0; i > t; t++)
                            if (ve.contains(this, n[t])) return !0
                    })
                }, closest: function (e, t) {
                    for (var n, i = 0, o = this.length, r = [], a = $e.test(e) || "string" != typeof e ? ve(e, t || this.context) : 0; o > i; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ve.find.matchesSelector(n, e))) {
                                r.push(n);
                                break
                            }
                    return this.pushStack(r.length > 1 ? ve.uniqueSort(r) : r)
                }, index: function (e) {
                    return e ? "string" == typeof e ? ve.inArray(this[0], ve(e)) : ve.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (e, t) {
                    return this.pushStack(ve.uniqueSort(ve.merge(this.get(), ve(e, t))))
                }, addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), ve.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                }, parents: function (e) {
                    return Ce(e, "parentNode")
                }, parentsUntil: function (e, t, n) {
                    return Ce(e, "parentNode", n)
                }, next: function (e) {
                    return c(e, "nextSibling")
                }, prev: function (e) {
                    return c(e, "previousSibling")
                }, nextAll: function (e) {
                    return Ce(e, "nextSibling")
                }, prevAll: function (e) {
                    return Ce(e, "previousSibling")
                }, nextUntil: function (e, t, n) {
                    return Ce(e, "nextSibling", n)
                }, prevUntil: function (e, t, n) {
                    return Ce(e, "previousSibling", n)
                }, siblings: function (e) {
                    return Te((e.parentNode || {}).firstChild, e)
                }, children: function (e) {
                    return Te(e.firstChild)
                }, contents: function (e) {
                    return ve.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ve.merge([], e.childNodes)
                }
            }, function (e, t) {
                ve.fn[e] = function (n, i) {
                    var o = ve.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = ve.filter(i, o)), this.length > 1 && (De[e] || (o = ve.uniqueSort(o)), Ae.test(e) && (o = o.reverse())), this.pushStack(o)
                }
            });
            var Le = /\S+/g;
            ve.Callbacks = function (e) {
                e = "string" == typeof e ? p(e) : ve.extend({}, e);
                var t, n, i, o, r = [],
                    a = [],
                    l = -1,
                    s = function () {
                        for (o = e.once, i = t = !0; a.length; l = -1)
                            for (n = a.shift(); ++l < r.length;) r[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = r.length, n = !1);
                        e.memory || (n = !1), t = !1, o && (r = n ? [] : "")
                    },
                    c = {
                        add: function () {
                            return r && (n && !t && (l = r.length - 1, a.push(n)), function i(t) {
                                ve.each(t, function (t, n) {
                                    ve.isFunction(n) ? e.unique && c.has(n) || r.push(n) : n && n.length && "string" !== ve.type(n) && i(n)
                                })
                            }(arguments), n && !t && s()), this
                        }, remove: function () {
                            return ve.each(arguments, function (e, t) {
                                for (var n;
                                     (n = ve.inArray(t, r, n)) > -1;) r.splice(n, 1), l >= n && l--
                            }), this
                        }, has: function (e) {
                            return e ? ve.inArray(e, r) > -1 : r.length > 0
                        }, empty: function () {
                            return r && (r = []), this
                        }, disable: function () {
                            return o = a = [], r = n = "", this
                        }, disabled: function () {
                            return !r
                        }, lock: function () {
                            return o = !0, n || c.disable(), this
                        }, locked: function () {
                            return !!o
                        }, fireWith: function (e, n) {
                            return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || s()), this
                        }, fire: function () {
                            return c.fireWith(this, arguments), this
                        }, fired: function () {
                            return !!i
                        }
                    };
                return c
            }, ve.extend({
                Deferred: function (e) {
                    var t = [
                            ["resolve", "done", ve.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", ve.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", ve.Callbacks("memory")]
                        ],
                        n = "pending",
                        i = {
                            state: function () {
                                return n
                            }, always: function () {
                                return o.done(arguments).fail(arguments), this
                            }, then: function () {
                                var e = arguments;
                                return ve.Deferred(function (n) {
                                    ve.each(t, function (t, r) {
                                        var a = ve.isFunction(e[t]) && e[t];
                                        o[r[1]](function () {
                                            var e = a && a.apply(this, arguments);
                                            e && ve.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            }, promise: function (e) {
                                return null != e ? ve.extend(e, i) : i
                            }
                        },
                        o = {};
                    return i.pipe = i.then, ve.each(t, function (e, r) {
                        var a = r[2],
                            l = r[3];
                        i[r[1]] = a.add, l && a.add(function () {
                            n = l
                        }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function () {
                            return o[r[0] + "With"](this === o ? i : this, arguments), this
                        }, o[r[0] + "With"] = a.fireWith
                    }), i.promise(o), e && e.call(o, o), o
                }, when: function (e) {
                    var t, n, i, o = 0,
                        r = ce.call(arguments),
                        a = r.length,
                        l = 1 !== a || e && ve.isFunction(e.promise) ? a : 0,
                        s = 1 === l ? e : ve.Deferred(),
                        c = function (e, n, i) {
                            return function (o) {
                                n[e] = this, i[e] = arguments.length > 1 ? ce.call(arguments) : o, i === t ? s.notifyWith(n, i) : --l || s.resolveWith(n, i)
                            }
                        };
                    if (a > 1)
                        for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && ve.isFunction(r[o].promise) ? r[o].promise().progress(c(o, n, t)).done(c(o, i, r)).fail(s.reject) : --l;
                    return l || s.resolveWith(i, r), s.promise()
                }
            });
            var Ie;
            ve.fn.ready = function (e) {
                return ve.ready.promise().done(e), this
            }, ve.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                    e ? ve.readyWait++ : ve.ready(!0)
                }, ready: function (e) {
                    (e === !0 ? --ve.readyWait : ve.isReady) || (ve.isReady = !0, e !== !0 && --ve.readyWait > 0 || (Ie.resolveWith(se, [ve]), ve.fn.triggerHandler && (ve(se).triggerHandler("ready"), ve(se).off("ready"))))
                }
            }), ve.ready.promise = function (e) {
                if (!Ie)
                    if (Ie = ve.Deferred(), "complete" === se.readyState) r.setTimeout(ve.ready);
                    else if (se.addEventListener) se.addEventListener("DOMContentLoaded", u), r.addEventListener("load", u);
                    else {
                        se.attachEvent("onreadystatechange", u), r.attachEvent("onload", u);
                        var t = !1;
                        try {
                            t = null == r.frameElement && se.documentElement
                        } catch (n) {}
                        t && t.doScroll && ! function i() {
                            if (!ve.isReady) {
                                try {
                                    t.doScroll("left")
                                } catch (e) {
                                    return r.setTimeout(i, 50)
                                }
                                d(), ve.ready()
                            }
                        }()
                    }
                return Ie.promise(e)
            }, ve.ready.promise();
            var Pe;
            for (Pe in ve(me)) break;
            me.ownFirst = "0" === Pe, me.inlineBlockNeedsLayout = !1, ve(function () {
                var e, t, n, i;
                n = se.getElementsByTagName("body")[0], n && n.style && (t = se.createElement("div"), i = se.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", me.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
            }),
                function () {
                    var e = se.createElement("div");
                    me.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (t) {
                        me.deleteExpando = !1
                    }
                    e = null
                }();
            var qe = function (e) {
                    var t = ve.noData[(e.nodeName + " ").toLowerCase()],
                        n = +e.nodeType || 1;
                    return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
                },
                He = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Fe = /([A-Z])/g;
            ve.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function (e) {
                    return e = e.nodeType ? ve.cache[e[ve.expando]] : e[ve.expando], !!e && !h(e)
                }, data: function (e, t, n) {
                    return g(e, t, n)
                }, removeData: function (e, t) {
                    return m(e, t)
                }, _data: function (e, t, n) {
                    return g(e, t, n, !0)
                }, _removeData: function (e, t) {
                    return m(e, t, !0)
                }
            }), ve.fn.extend({
                data: function (e, t) {
                    var n, i, o, r = this[0],
                        a = r && r.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = ve.data(r), 1 === r.nodeType && !ve._data(r, "parsedAttrs"))) {
                            for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = ve.camelCase(i.slice(5)), f(r, i, o[i])));
                            ve._data(r, "parsedAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each(function () {
                        ve.data(this, e)
                    }) : arguments.length > 1 ? this.each(function () {
                        ve.data(this, e, t)
                    }) : r ? f(r, e, ve.data(r, e)) : void 0
                }, removeData: function (e) {
                    return this.each(function () {
                        ve.removeData(this, e)
                    })
                }
            }), ve.extend({
                queue: function (e, t, n) {
                    var i;
                    return e ? (t = (t || "fx") + "queue", i = ve._data(e, t), n && (!i || ve.isArray(n) ? i = ve._data(e, t, ve.makeArray(n)) : i.push(n)), i || []) : void 0
                }, dequeue: function (e, t) {
                    t = t || "fx";
                    var n = ve.queue(e, t),
                        i = n.length,
                        o = n.shift(),
                        r = ve._queueHooks(e, t),
                        a = function () {
                            ve.dequeue(e, t)
                        };
                    "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
                }, _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return ve._data(e, n) || ve._data(e, n, {
                            empty: ve.Callbacks("once memory").add(function () {
                                ve._removeData(e, t + "queue"), ve._removeData(e, n)
                            })
                        })
                }
            }), ve.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ve.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                        var n = ve.queue(this, e, t);
                        ve._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ve.dequeue(this, e)
                    })
                }, dequeue: function (e) {
                    return this.each(function () {
                        ve.dequeue(this, e)
                    })
                }, clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                }, promise: function (e, t) {
                    var n, i = 1,
                        o = ve.Deferred(),
                        r = this,
                        a = this.length,
                        l = function () {
                            --i || o.resolveWith(r, [r])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ve._data(r[a], e + "queueHooks"), n && n.empty && (i++, n.empty.add(l));
                    return l(), o.promise(t)
                }
            }),
                function () {
                    var e;
                    me.shrinkWrapBlocks = function () {
                        if (null != e) return e;
                        e = !1;
                        var t, n, i;
                        return n = se.getElementsByTagName("body")[0], n && n.style ? (t = se.createElement("div"), i = se.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(se.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
                    }
                }();
            var Ge = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Oe = new RegExp("^(?:([+-])=|)(" + Ge + ")([a-z%]*)$", "i"),
                Me = ["Top", "Right", "Bottom", "Left"],
                Je = function (e, t) {
                    return e = t || e, "none" === ve.css(e, "display") || !ve.contains(e.ownerDocument, e)
                },
                We = function (e, t, n, i, o, r, a) {
                    var l = 0,
                        s = e.length,
                        c = null == n;
                    if ("object" === ve.type(n)) {
                        o = !0;
                        for (l in n) We(e, t, l, n[l], !0, r, a)
                    } else if (void 0 !== i && (o = !0, ve.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                            return c.call(ve(e), n)
                        })), t))
                        for (; s > l; l++) t(e[l], n, a ? i : i.call(e[l], l, t(e[l], n)));
                    return o ? e : c ? t.call(e) : s ? t(e[0], n) : r
                },
                Be = /^(?:checkbox|radio)$/i,
                Re = /<([\w:-]+)/,
                Xe = /^$|\/(?:java|ecma)script/i,
                Ue = /^\s+/,
                Ye = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
            ! function () {
                var e = se.createElement("div"),
                    t = se.createDocumentFragment(),
                    n = se.createElement("input");
                e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", me.leadingWhitespace = 3 === e.firstChild.nodeType, me.tbody = !e.getElementsByTagName("tbody").length, me.htmlSerialize = !!e.getElementsByTagName("link").length, me.html5Clone = "<:nav></:nav>" !== se.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), me.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", me.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = se.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), me.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, me.noCloneEvent = !!e.addEventListener, e[ve.expando] = 1, me.attributes = !e.getAttribute(ve.expando)
            }();
            var Ve = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: me.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            };
            Ve.optgroup = Ve.option, Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td;
            var Ke = /<|&#?\w+;/,
                Qe = /<tbody/i;
            ! function () {
                var e, t, n = se.createElement("div");
                for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) t = "on" + e, (me[e] = t in r) || (n.setAttribute(t, "t"), me[e] = n.attributes[t].expando === !1);
                n = null
            }();
            var Ze = /^(?:input|select|textarea)$/i,
                et = /^key/,
                tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                nt = /^(?:focusinfocus|focusoutblur)$/,
                it = /^([^.]*)(?:\.(.+)|)/;
            ve.event = {
                global: {},
                add: function (e, t, n, i, o) {
                    var r, a, l, s, c, p, d, u, f, h, g, m = ve._data(e);
                    if (m) {
                        for (n.handler && (s = n, n = s.handler, o = s.selector), n.guid || (n.guid = ve.guid++), (a = m.events) || (a = m.events = {}), (p = m.handle) || (p = m.handle = function (e) {
                            return "undefined" == typeof ve || e && ve.event.triggered === e.type ? void 0 : ve.event.dispatch.apply(p.elem, arguments)
                        }, p.elem = e), t = (t || "").match(Le) || [""], l = t.length; l--;) r = it.exec(t[l]) || [], f = g = r[1], h = (r[2] || "").split(".").sort(), f && (c = ve.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = ve.event.special[f] || {}, d = ve.extend({
                            type: f,
                            origType: g,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && ve.expr.match.needsContext.test(o),
                            namespace: h.join(".")
                        }, s), (u = a[f]) || (u = a[f] = [], u.delegateCount = 0, c.setup && c.setup.call(e, i, h, p) !== !1 || (e.addEventListener ? e.addEventListener(f, p, !1) : e.attachEvent && e.attachEvent("on" + f, p))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)), o ? u.splice(u.delegateCount++, 0, d) : u.push(d), ve.event.global[f] = !0);
                        e = null
                    }
                }, remove: function (e, t, n, i, o) {
                    var r, a, l, s, c, p, d, u, f, h, g, m = ve.hasData(e) && ve._data(e);
                    if (m && (p = m.events)) {
                        for (t = (t || "").match(Le) || [""], c = t.length; c--;)
                            if (l = it.exec(t[c]) || [], f = g = l[1], h = (l[2] || "").split(".").sort(), f) {
                                for (d = ve.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, u = p[f] || [], l = l[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = u.length; r--;) a = u[r], !o && g !== a.origType || n && n.guid !== a.guid || l && !l.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (u.splice(r, 1), a.selector && u.delegateCount--, d.remove && d.remove.call(e, a));
                                s && !u.length && (d.teardown && d.teardown.call(e, h, m.handle) !== !1 || ve.removeEvent(e, f, m.handle), delete p[f])
                            } else
                                for (f in p) ve.event.remove(e, f + t[c], n, i, !0);
                        ve.isEmptyObject(p) && (delete m.handle, ve._removeData(e, "events"))
                    }
                }, trigger: function (e, t, n, i) {
                    var o, a, l, s, c, p, d, u = [n || se],
                        f = ge.call(e, "type") ? e.type : e,
                        h = ge.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (l = p = n = n || se, 3 !== n.nodeType && 8 !== n.nodeType && !nt.test(f + ve.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, e = e[ve.expando] ? e : new ve.Event(f, "object" == typeof e && e), e.isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ve.makeArray(t, [e]), c = ve.event.special[f] || {}, i || !c.trigger || c.trigger.apply(n, t) !== !1)) {
                        if (!i && !c.noBubble && !ve.isWindow(n)) {
                            for (s = c.delegateType || f, nt.test(s + f) || (l = l.parentNode); l; l = l.parentNode) u.push(l), p = l;
                            p === (n.ownerDocument || se) && u.push(p.defaultView || p.parentWindow || r)
                        }
                        for (d = 0;
                             (l = u[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? s : c.bindType || f, o = (ve._data(l, "events") || {})[e.type] && ve._data(l, "handle"), o && o.apply(l, t), o = a && l[a], o && o.apply && qe(l) && (e.result = o.apply(l, t), e.result === !1 && e.preventDefault());
                        if (e.type = f, !i && !e.isDefaultPrevented() && (!c._default || c._default.apply(u.pop(), t) === !1) && qe(n) && a && n[f] && !ve.isWindow(n)) {
                            p = n[a], p && (n[a] = null), ve.event.triggered = f;
                            try {
                                n[f]()
                            } catch (g) {}
                            ve.event.triggered = void 0, p && (n[a] = p)
                        }
                        return e.result
                    }
                }, dispatch: function (e) {
                    e = ve.event.fix(e);
                    var t, n, i, o, r, a = [],
                        l = ce.call(arguments),
                        s = (ve._data(this, "events") || {})[e.type] || [],
                        c = ve.event.special[e.type] || {};
                    if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                        for (a = ve.event.handlers.call(this, e, s), t = 0;
                             (o = a[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = o.elem, n = 0;
                                 (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((ve.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), void 0 !== i && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, e), e.result
                    }
                }, handlers: function (e, t) {
                    var n, i, o, r, a = [],
                        l = t.delegateCount,
                        s = e.target;
                    if (l && s.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                        for (; s != this; s = s.parentNode || this)
                            if (1 === s.nodeType && (s.disabled !== !0 || "click" !== e.type)) {
                                for (i = [], n = 0; l > n; n++) r = t[n], o = r.selector + " ", void 0 === i[o] && (i[o] = r.needsContext ? ve(o, this).index(s) > -1 : ve.find(o, this, null, [s]).length), i[o] && i.push(r);
                                i.length && a.push({
                                    elem: s,
                                    handlers: i
                                })
                            }
                    return l < t.length && a.push({
                        elem: this,
                        handlers: t.slice(l)
                    }), a
                }, fix: function (e) {
                    if (e[ve.expando]) return e;
                    var t, n, i, o = e.type,
                        r = e,
                        a = this.fixHooks[o];
                    for (a || (this.fixHooks[o] = a = tt.test(o) ? this.mouseHooks : et.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new ve.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
                    return e.target || (e.target = r.srcElement || se), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
                }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "),
                    filter: function (e, t) {
                        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (e, t) {
                        var n, i, o, r = t.button,
                            a = t.fromElement;
                        return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || se, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function () {
                            if (this !== T() && this.focus) try {
                                return this.focus(), !1
                            } catch (e) {}
                        }, delegateType: "focusin"
                    },
                    blur: {
                        trigger: function () {
                            return this === T() && this.blur ? (this.blur(), !1) : void 0
                        }, delegateType: "focusout"
                    },
                    click: {
                        trigger: function () {
                            return ve.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                        }, _default: function (e) {
                            return ve.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function (e, t, n) {
                    var i = ve.extend(new ve.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    ve.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
                }
            }, ve.removeEvent = se.removeEventListener ? function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            } : function (e, t, n) {
                var i = "on" + t;
                e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
            }, ve.Event = function (e, t) {
                return this instanceof ve.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? k : C) : this.type = e, t && ve.extend(this, t), this.timeStamp = e && e.timeStamp || ve.now(), void(this[ve.expando] = !0)) : new ve.Event(e, t)
            }, ve.Event.prototype = {
                constructor: ve.Event,
                isDefaultPrevented: C,
                isPropagationStopped: C,
                isImmediatePropagationStopped: C,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = k, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                }, stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = k, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                }, stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = k, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, ve.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (e, t) {
                ve.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n, i = this,
                            o = e.relatedTarget,
                            r = e.handleObj;
                        return (!o || o !== i && !ve.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), me.submit || (ve.event.special.submit = {
                setup: function () {
                    return !ve.nodeName(this, "form") && void ve.event.add(this, "click._submit keypress._submit", function (e) {
                            var t = e.target,
                                n = ve.nodeName(t, "input") || ve.nodeName(t, "button") ? ve.prop(t, "form") : void 0;
                            n && !ve._data(n, "submit") && (ve.event.add(n, "submit._submit", function (e) {
                                e._submitBubble = !0
                            }), ve._data(n, "submit", !0))
                        })
                }, postDispatch: function (e) {
                    e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && ve.event.simulate("submit", this.parentNode, e))
                }, teardown: function () {
                    return !ve.nodeName(this, "form") && void ve.event.remove(this, "._submit")
                }
            }), me.change || (ve.event.special.change = {
                setup: function () {
                    return Ze.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ve.event.add(this, "propertychange._change", function (e) {
                        "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                    }), ve.event.add(this, "click._change", function (e) {
                        this._justChanged && !e.isTrigger && (this._justChanged = !1), ve.event.simulate("change", this, e)
                    })), !1) : void ve.event.add(this, "beforeactivate._change", function (e) {
                        var t = e.target;
                        Ze.test(t.nodeName) && !ve._data(t, "change") && (ve.event.add(t, "change._change", function (e) {
                            !this.parentNode || e.isSimulated || e.isTrigger || ve.event.simulate("change", this.parentNode, e)
                        }), ve._data(t, "change", !0))
                    })
                }, handle: function (e) {
                    var t = e.target;
                    return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
                }, teardown: function () {
                    return ve.event.remove(this, "._change"), !Ze.test(this.nodeName)
                }
            }), me.focusin || ve.each({
                focus: "focusin",
                blur: "focusout"
            }, function (e, t) {
                var n = function (e) {
                    ve.event.simulate(t, e.target, ve.event.fix(e))
                };
                ve.event.special[t] = {
                    setup: function () {
                        var i = this.ownerDocument || this,
                            o = ve._data(i, t);
                        o || i.addEventListener(e, n, !0), ve._data(i, t, (o || 0) + 1)
                    }, teardown: function () {
                        var i = this.ownerDocument || this,
                            o = ve._data(i, t) - 1;
                        o ? ve._data(i, t, o) : (i.removeEventListener(e, n, !0), ve._removeData(i, t))
                    }
                }
            }), ve.fn.extend({
                on: function (e, t, n, i) {
                    return $(this, e, t, n, i)
                }, one: function (e, t, n, i) {
                    return $(this, e, t, n, i, 1)
                }, off: function (e, t, n) {
                    var i, o;
                    if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ve(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                    if ("object" == typeof e) {
                        for (o in e) this.off(o, t, e[o]);
                        return this
                    }
                    return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = C), this.each(function () {
                        ve.event.remove(this, e, n, t)
                    })
                }, trigger: function (e, t) {
                    return this.each(function () {
                        ve.event.trigger(e, t, this)
                    })
                }, triggerHandler: function (e, t) {
                    var n = this[0];
                    return n ? ve.event.trigger(e, t, n, !0) : void 0
                }
            });
            var ot = / jQuery\d+="(?:null|\d+)"/g,
                rt = new RegExp("<(?:" + Ye + ")[\\s/>]", "i"),
                at = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                lt = /<script|<style|<link/i,
                st = /checked\s*(?:[^=]|=\s*.checked.)/i,
                ct = /^true\/(.*)/,
                pt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                dt = v(se),
                ut = dt.appendChild(se.createElement("div"));
            ve.extend({
                htmlPrefilter: function (e) {
                    return e.replace(at, "<$1></$2>")
                }, clone: function (e, t, n) {
                    var i, o, r, a, l, s = ve.contains(e.ownerDocument, e);
                    if (me.html5Clone || ve.isXMLDoc(e) || !rt.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (ut.innerHTML = e.outerHTML, ut.removeChild(r = ut.firstChild)), !(me.noCloneEvent && me.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ve.isXMLDoc(e)))
                        for (i = x(r), l = x(e), a = 0; null != (o = l[a]); ++a) i[a] && N(o, i[a]);
                    if (t)
                        if (n)
                            for (l = l || x(e), i = i || x(r), a = 0; null != (o = l[a]); a++) z(o, i[a]);
                        else z(e, r);
                    return i = x(r, "script"), i.length > 0 && y(i, !s && x(e, "script")), i = l = o = null, r
                }, cleanData: function (e, t) {
                    for (var n, i, o, r, a = 0, l = ve.expando, s = ve.cache, c = me.attributes, p = ve.event.special; null != (n = e[a]); a++)
                        if ((t || qe(n)) && (o = n[l], r = o && s[o])) {
                            if (r.events)
                                for (i in r.events) p[i] ? ve.event.remove(n, i) : ve.removeEvent(n, i, r.handle);
                            s[o] && (delete s[o], c || "undefined" == typeof n.removeAttribute ? n[l] = void 0 : n.removeAttribute(l), le.push(o))
                        }
                }
            }), ve.fn.extend({
                domManip: A,
                detach: function (e) {
                    return D(this, e, !0)
                }, remove: function (e) {
                    return D(this, e)
                }, text: function (e) {
                    return We(this, function (e) {
                        return void 0 === e ? ve.text(this) : this.empty().append((this[0] && this[0].ownerDocument || se).createTextNode(e))
                    }, null, e, arguments.length)
                }, append: function () {
                    return A(this, arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = j(this, e);
                            t.appendChild(e)
                        }
                    })
                }, prepend: function () {
                    return A(this, arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = j(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                }, before: function () {
                    return A(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                }, after: function () {
                    return A(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                }, empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) {
                        for (1 === e.nodeType && ve.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                        e.options && ve.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                }, clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function () {
                        return ve.clone(this, e, t)
                    })
                }, html: function (e) {
                    return We(this, function (e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ot, "") : void 0;
                        if ("string" == typeof e && !lt.test(e) && (me.htmlSerialize || !rt.test(e)) && (me.leadingWhitespace || !Ue.test(e)) && !Ve[(Re.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = ve.htmlPrefilter(e);
                            try {
                                for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (ve.cleanData(x(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (o) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                }, replaceWith: function () {
                    var e = [];
                    return A(this, arguments, function (t) {
                        var n = this.parentNode;
                        ve.inArray(this, e) < 0 && (ve.cleanData(x(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), ve.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, t) {
                ve.fn[e] = function (e) {
                    for (var n, i = 0, o = [], r = ve(e), a = r.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), ve(r[i])[t](n), de.apply(o, n.get());
                    return this.pushStack(o)
                }
            });
            var ft, ht = {
                    HTML: "block",
                    BODY: "block"
                },
                gt = /^margin/,
                mt = new RegExp("^(" + Ge + ")(?!px)[a-z%]+$", "i"),
                bt = function (e, t, n, i) {
                    var o, r, a = {};
                    for (r in t) a[r] = e.style[r], e.style[r] = t[r];
                    o = n.apply(e, i || []);
                    for (r in t) e.style[r] = a[r];
                    return o
                },
                vt = se.documentElement;
            ! function () {
                function e() {
                    var e, p, d = se.documentElement;
                    d.appendChild(s), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = i = l = !1, n = a = !0, r.getComputedStyle && (p = r.getComputedStyle(c), t = "1%" !== (p || {}).top, l = "2px" === (p || {}).marginLeft, i = "4px" === (p || {
                            width: "4px"
                        }).width, c.style.marginRight = "50%", n = "4px" === (p || {
                            marginRight: "4px"
                        }).marginRight, e = c.appendChild(se.createElement("div")), e.style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", c.style.width = "1px", a = !parseFloat((r.getComputedStyle(e) || {}).marginRight), c.removeChild(e)), c.style.display = "none", o = 0 === c.getClientRects().length, o && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = c.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === e[0].offsetHeight, o && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)), d.removeChild(s)
                }
                var t, n, i, o, a, l, s = se.createElement("div"),
                    c = se.createElement("div");
                c.style && (c.style.cssText = "float:left;opacity:.5", me.opacity = "0.5" === c.style.opacity, me.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", me.clearCloneStyle = "content-box" === c.style.backgroundClip, s = se.createElement("div"), s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", s.appendChild(c), me.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, ve.extend(me, {
                    reliableHiddenOffsets: function () {
                        return null == t && e(), o
                    }, boxSizingReliable: function () {
                        return null == t && e(), i
                    }, pixelMarginRight: function () {
                        return null == t && e(), n
                    }, pixelPosition: function () {
                        return null == t && e(), t
                    }, reliableMarginRight: function () {
                        return null == t && e(), a
                    }, reliableMarginLeft: function () {
                        return null == t && e(), l
                    }
                }))
            }();
            var xt, yt, wt = /^(top|right|bottom|left)$/;
            r.getComputedStyle ? (xt = function (e) {
                var t = e.ownerDocument.defaultView;
                return t.opener || (t = r), t.getComputedStyle(e)
            }, yt = function (e, t, n) {
                var i, o, r, a, l = e.style;
                return n = n || xt(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ve.contains(e.ownerDocument, e) || (a = ve.style(e, t)), !me.pixelMarginRight() && mt.test(a) && gt.test(t) && (i = l.width, o = l.minWidth, r = l.maxWidth, l.minWidth = l.maxWidth = l.width = a, a = n.width, l.width = i, l.minWidth = o, l.maxWidth = r)), void 0 === a ? a : a + ""
            }) : vt.currentStyle && (xt = function (e) {
                return e.currentStyle
            }, yt = function (e, t, n) {
                var i, o, r, a, l = e.style;
                return n = n || xt(e), a = n ? n[t] : void 0, null == a && l && l[t] && (a = l[t]), mt.test(a) && !wt.test(t) && (i = l.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), l.left = "fontSize" === t ? "1em" : a, a = l.pixelLeft + "px", l.left = i, r && (o.left = r)), void 0 === a ? a : a + "" || "auto"
            });
            var _t = /alpha\([^)]*\)/i,
                kt = /opacity\s*=\s*([^)]*)/i,
                Ct = /^(none|table(?!-c[ea]).+)/,
                Tt = new RegExp("^(" + Ge + ")(.*)$", "i"),
                $t = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                jt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Et = ["Webkit", "O", "Moz", "ms"],
                St = se.createElement("div").style;
            ve.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = yt(e, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {
                    "float": me.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function (e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, r, a, l = ve.camelCase(t),
                            s = e.style;
                        if (t = ve.cssProps[l] || (ve.cssProps[l] = q(l) || l), a = ve.cssHooks[t] || ve.cssHooks[l], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : s[t];
                        if (r = typeof n, "string" === r && (o = Oe.exec(n)) && o[1] && (n = b(e, t, o), r = "number"), null != n && n === n && ("number" === r && (n += o && o[3] || (ve.cssNumber[l] ? "" : "px")), me.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (s[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                            s[t] = n
                        } catch (c) {}
                    }
                }, css: function (e, t, n, i) {
                    var o, r, a, l = ve.camelCase(t);
                    return t = ve.cssProps[l] || (ve.cssProps[l] = q(l) || l), a = ve.cssHooks[t] || ve.cssHooks[l], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = yt(e, t, i)), "normal" === r && t in jt && (r = jt[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
                }
            }), ve.each(["height", "width"], function (e, t) {
                ve.cssHooks[t] = {
                    get: function (e, n, i) {
                        return n ? Ct.test(ve.css(e, "display")) && 0 === e.offsetWidth ? bt(e, $t, function () {
                            return O(e, t, i)
                        }) : O(e, t, i) : void 0
                    }, set: function (e, n, i) {
                        var o = i && xt(e);
                        return F(e, n, i ? G(e, t, i, me.boxSizing && "border-box" === ve.css(e, "boxSizing", !1, o), o) : 0)
                    }
                }
            }), me.opacity || (ve.cssHooks.opacity = {
                get: function (e, t) {
                    return kt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                }, set: function (e, t) {
                    var n = e.style,
                        i = e.currentStyle,
                        o = ve.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                        r = i && i.filter || n.filter || "";
                    n.zoom = 1, (t >= 1 || "" === t) && "" === ve.trim(r.replace(_t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = _t.test(r) ? r.replace(_t, o) : r + " " + o)
                }
            }), ve.cssHooks.marginRight = P(me.reliableMarginRight, function (e, t) {
                return t ? bt(e, {
                    display: "inline-block"
                }, yt, [e, "marginRight"]) : void 0
            }), ve.cssHooks.marginLeft = P(me.reliableMarginLeft, function (e, t) {
                return t ? (parseFloat(yt(e, "marginLeft")) || (ve.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - bt(e, {
                    marginLeft: 0
                }, function () {
                    return e.getBoundingClientRect().left
                }) : 0)) + "px" : void 0
            }), ve.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (e, t) {
                ve.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Me[i] + t] = r[i] || r[i - 2] || r[0];
                        return o
                    }
                }, gt.test(e) || (ve.cssHooks[e + t].set = F)
            }), ve.fn.extend({
                css: function (e, t) {
                    return We(this, function (e, t, n) {
                        var i, o, r = {},
                            a = 0;
                        if (ve.isArray(t)) {
                            for (i = xt(e), o = t.length; o > a; a++) r[t[a]] = ve.css(e, t[a], !1, i);
                            return r
                        }
                        return void 0 !== n ? ve.style(e, t, n) : ve.css(e, t)
                    }, e, t, arguments.length > 1)
                }, show: function () {
                    return H(this, !0)
                }, hide: function () {
                    return H(this)
                }, toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        Je(this) ? ve(this).show() : ve(this).hide()
                    })
                }
            }), ve.Tween = M, M.prototype = {
                constructor: M,
                init: function (e, t, n, i, o, r) {
                    this.elem = e, this.prop = n, this.easing = o || ve.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ve.cssNumber[n] ? "" : "px")
                }, cur: function () {
                    var e = M.propHooks[this.prop];
                    return e && e.get ? e.get(this) : M.propHooks._default.get(this)
                }, run: function (e) {
                    var t, n = M.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = ve.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
                }
            }, M.prototype.init.prototype = M.prototype, M.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ve.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                    }, set: function (e) {
                        ve.fx.step[e.prop] ? ve.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ve.cssProps[e.prop]] && !ve.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ve.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, ve.easing = {
                linear: function (e) {
                    return e
                }, swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }, _default: "swing"
            }, ve.fx = M.prototype.init, ve.fx.step = {};
            var zt, Nt, At = /^(?:toggle|show|hide)$/,
                Dt = /queueHooks$/;
            ve.Animation = ve.extend(U, {
                tweeners: {
                    "*": [
                        function (e, t) {
                            var n = this.createTween(e, t);
                            return b(n.elem, e, Oe.exec(t), n), n
                        }
                    ]
                },
                tweener: function (e, t) {
                    ve.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Le);
                    for (var n, i = 0, o = e.length; o > i; i++) n = e[i], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t)
                }, prefilters: [R],
                prefilter: function (e, t) {
                    t ? U.prefilters.unshift(e) : U.prefilters.push(e)
                }
            }), ve.speed = function (e, t, n) {
                var i = e && "object" == typeof e ? ve.extend({}, e) : {
                    complete: n || !n && t || ve.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !ve.isFunction(t) && t
                };
                return i.duration = ve.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ve.fx.speeds ? ve.fx.speeds[i.duration] : ve.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                    ve.isFunction(i.old) && i.old.call(this), i.queue && ve.dequeue(this, i.queue)
                }, i
            }, ve.fn.extend({
                fadeTo: function (e, t, n, i) {
                    return this.filter(Je).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                }, animate: function (e, t, n, i) {
                    var o = ve.isEmptyObject(e),
                        r = ve.speed(t, n, i),
                        a = function () {
                            var t = U(this, ve.extend({}, e), r);
                            (o || ve._data(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
                }, stop: function (e, t, n) {
                    var i = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            r = ve.timers,
                            a = ve._data(this);
                        if (o) a[o] && a[o].stop && i(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && Dt.test(o) && i(a[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                        (t || !n) && ve.dequeue(this, e)
                    })
                }, finish: function (e) {
                    return e !== !1 && (e = e || "fx"), this.each(function () {
                        var t, n = ve._data(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            r = ve.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, ve.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), ve.each(["toggle", "show", "hide"], function (e, t) {
                var n = ve.fn[t];
                ve.fn[t] = function (e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, i, o)
                }
            }), ve.each({
                slideDown: W("show"),
                slideUp: W("hide"),
                slideToggle: W("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (e, t) {
                ve.fn[e] = function (e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), ve.timers = [], ve.fx.tick = function () {
                var e, t = ve.timers,
                    n = 0;
                for (zt = ve.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || ve.fx.stop(), zt = void 0
            }, ve.fx.timer = function (e) {
                ve.timers.push(e), e() ? ve.fx.start() : ve.timers.pop()
            }, ve.fx.interval = 13, ve.fx.start = function () {
                Nt || (Nt = r.setInterval(ve.fx.tick, ve.fx.interval))
            }, ve.fx.stop = function () {
                r.clearInterval(Nt), Nt = null
            }, ve.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ve.fn.delay = function (e, t) {
                return e = ve.fx ? ve.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                    var i = r.setTimeout(t, e);
                    n.stop = function () {
                        r.clearTimeout(i)
                    }
                })
            },
                function () {
                    var e, t = se.createElement("input"),
                        n = se.createElement("div"),
                        i = se.createElement("select"),
                        o = i.appendChild(se.createElement("option"));
                    n = se.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", me.getSetAttribute = "t" !== n.className, me.style = /top/.test(e.getAttribute("style")), me.hrefNormalized = "/a" === e.getAttribute("href"), me.checkOn = !!t.value, me.optSelected = o.selected, me.enctype = !!se.createElement("form").enctype, i.disabled = !0, me.optDisabled = !o.disabled, t = se.createElement("input"), t.setAttribute("value", ""), me.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), me.radioValue = "t" === t.value
                }();
            var Lt = /\r/g;
            ve.fn.extend({
                val: function (e) {
                    var t, n, i, o = this[0];
                    return arguments.length ? (i = ve.isFunction(e), this.each(function (n) {
                        var o;
                        1 === this.nodeType && (o = i ? e.call(this, n, ve(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ve.isArray(o) && (o = ve.map(o, function (e) {
                            return null == e ? "" : e + ""
                        })), t = ve.valHooks[this.type] || ve.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    })) : o ? (t = ve.valHooks[o.type] || ve.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Lt, "") : null == n ? "" : n)) : void 0
                }
            }), ve.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = ve.find.attr(e, "value");
                            return null != t ? t : ve.trim(ve.text(e))
                        }
                    },
                    select: {
                        get: function (e) {
                            for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], l = r ? o + 1 : i.length, s = 0 > o ? l : r ? o : 0; l > s; s++)
                                if (n = i[s], (n.selected || s === o) && (me.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ve.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = ve(n).val(), r) return t;
                                    a.push(t)
                                }
                            return a
                        }, set: function (e, t) {
                            for (var n, i, o = e.options, r = ve.makeArray(t), a = o.length; a--;)
                                if (i = o[a], ve.inArray(ve.valHooks.option.get(i), r) >= 0) try {
                                    i.selected = n = !0
                                } catch (l) {
                                    i.scrollHeight
                                } else i.selected = !1;
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), ve.each(["radio", "checkbox"], function () {
                ve.valHooks[this] = {
                    set: function (e, t) {
                        return ve.isArray(t) ? e.checked = ve.inArray(ve(e).val(), t) > -1 : void 0
                    }
                }, me.checkOn || (ve.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            });
            var It, Pt, qt = ve.expr.attrHandle,
                Ht = /^(?:checked|selected)$/i,
                Ft = me.getSetAttribute,
                Gt = me.input;
            ve.fn.extend({
                attr: function (e, t) {
                    return We(this, ve.attr, e, t, arguments.length > 1)
                }, removeAttr: function (e) {
                    return this.each(function () {
                        ve.removeAttr(this, e)
                    })
                }
            }), ve.extend({
                attr: function (e, t, n) {
                    var i, o, r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? ve.prop(e, t, n) : (1 === r && ve.isXMLDoc(e) || (t = t.toLowerCase(), o = ve.attrHooks[t] || (ve.expr.match.bool.test(t) ? Pt : It)), void 0 !== n ? null === n ? void ve.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = ve.find.attr(e, t), null == i ? void 0 : i))
                }, attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!me.radioValue && "radio" === t && ve.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                }, removeAttr: function (e, t) {
                    var n, i, o = 0,
                        r = t && t.match(Le);
                    if (r && 1 === e.nodeType)
                        for (; n = r[o++];) i = ve.propFix[n] || n, ve.expr.match.bool.test(n) ? Gt && Ft || !Ht.test(n) ? e[i] = !1 : e[ve.camelCase("default-" + n)] = e[i] = !1 : ve.attr(e, n, ""), e.removeAttribute(Ft ? n : i)
                }
            }), Pt = {
                set: function (e, t, n) {
                    return t === !1 ? ve.removeAttr(e, n) : Gt && Ft || !Ht.test(n) ? e.setAttribute(!Ft && ve.propFix[n] || n, n) : e[ve.camelCase("default-" + n)] = e[n] = !0, n
                }
            }, ve.each(ve.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = qt[t] || ve.find.attr;
                Gt && Ft || !Ht.test(t) ? qt[t] = function (e, t, i) {
                    var o, r;
                    return i || (r = qt[t], qt[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, qt[t] = r), o
                } : qt[t] = function (e, t, n) {
                    return n ? void 0 : e[ve.camelCase("default-" + t)] ? t.toLowerCase() : null
                }
            }), Gt && Ft || (ve.attrHooks.value = {
                set: function (e, t, n) {
                    return ve.nodeName(e, "input") ? void(e.defaultValue = t) : It && It.set(e, t, n)
                }
            }), Ft || (It = {
                set: function (e, t, n) {
                    var i = e.getAttributeNode(n);
                    return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
                }
            }, qt.id = qt.name = qt.coords = function (e, t, n) {
                var i;
                return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
            }, ve.valHooks.button = {
                get: function (e, t) {
                    var n = e.getAttributeNode(t);
                    return n && n.specified ? n.value : void 0
                }, set: It.set
            }, ve.attrHooks.contenteditable = {
                set: function (e, t, n) {
                    It.set(e, "" !== t && t, n)
                }
            }, ve.each(["width", "height"], function (e, t) {
                ve.attrHooks[t] = {
                    set: function (e, n) {
                        return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                    }
                }
            })), me.style || (ve.attrHooks.style = {
                get: function (e) {
                    return e.style.cssText || void 0
                }, set: function (e, t) {
                    return e.style.cssText = t + ""
                }
            });
            var Ot = /^(?:input|select|textarea|button|object)$/i,
                Mt = /^(?:a|area)$/i;
            ve.fn.extend({
                prop: function (e, t) {
                    return We(this, ve.prop, e, t, arguments.length > 1)
                }, removeProp: function (e) {
                    return e = ve.propFix[e] || e, this.each(function () {
                        try {
                            this[e] = void 0, delete this[e]
                        } catch (t) {}
                    })
                }
            }), ve.extend({
                prop: function (e, t, n) {
                    var i, o, r = e.nodeType;
                    if (3 !== r && 8 !== r && 2 !== r) return 1 === r && ve.isXMLDoc(e) || (t = ve.propFix[t] || t, o = ve.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
                }, propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = ve.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : Ot.test(e.nodeName) || Mt.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                }, propFix: {
                    "for": "htmlFor",
                    "class": "className"
                }
            }), me.hrefNormalized || ve.each(["href", "src"], function (e, t) {
                ve.propHooks[t] = {
                    get: function (e) {
                        return e.getAttribute(t, 4)
                    }
                }
            }), me.optSelected || (ve.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
                }
            }), ve.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                ve.propFix[this.toLowerCase()] = this
            }), me.enctype || (ve.propFix.enctype = "encoding");
            var Jt = /[\t\r\n\f]/g;
            ve.fn.extend({
                addClass: function (e) {
                    var t, n, i, o, r, a, l, s = 0;
                    if (ve.isFunction(e)) return this.each(function (t) {
                        ve(this).addClass(e.call(this, t, Y(this)))
                    });
                    if ("string" == typeof e && e)
                        for (t = e.match(Le) || []; n = this[s++];)
                            if (o = Y(n), i = 1 === n.nodeType && (" " + o + " ").replace(Jt, " ")) {
                                for (a = 0; r = t[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                                l = ve.trim(i), o !== l && ve.attr(n, "class", l)
                            }
                    return this
                }, removeClass: function (e) {
                    var t, n, i, o, r, a, l, s = 0;
                    if (ve.isFunction(e)) return this.each(function (t) {
                        ve(this).removeClass(e.call(this, t, Y(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(Le) || []; n = this[s++];)
                            if (o = Y(n), i = 1 === n.nodeType && (" " + o + " ").replace(Jt, " ")) {
                                for (a = 0; r = t[a++];)
                                    for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                                l = ve.trim(i), o !== l && ve.attr(n, "class", l)
                            }
                    return this
                }, toggleClass: function (e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ve.isFunction(e) ? this.each(function (n) {
                        ve(this).toggleClass(e.call(this, n, Y(this), t), t)
                    }) : this.each(function () {
                        var t, i, o, r;
                        if ("string" === n)
                            for (i = 0, o = ve(this), r = e.match(Le) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else(void 0 === e || "boolean" === n) && (t = Y(this), t && ve._data(this, "__className__", t), ve.attr(this, "class", t || e === !1 ? "" : ve._data(this, "__className__") || ""))
                    })
                }, hasClass: function (e) {
                    var t, n, i = 0;
                    for (t = " " + e + " "; n = this[i++];)
                        if (1 === n.nodeType && (" " + Y(n) + " ").replace(Jt, " ").indexOf(t) > -1) return !0;
                    return !1
                }
            }), ve.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
                ve.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), ve.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            });
            var Wt = r.location,
                Bt = ve.now(),
                Rt = /\?/,
                Xt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            ve.parseJSON = function (e) {
                if (r.JSON && r.JSON.parse) return r.JSON.parse(e + "");
                var t, n = null,
                    i = ve.trim(e + "");
                return i && !ve.trim(i.replace(Xt, function (e, i, o, r) {
                    return t && i && (n = 0), 0 === n ? e : (t = o || i, n += !r - !o, "")
                })) ? Function("return " + i)() : ve.error("Invalid JSON: " + e)
            }, ve.parseXML = function (e) {
                var t, n;
                if (!e || "string" != typeof e) return null;
                try {
                    r.DOMParser ? (n = new r.DOMParser, t = n.parseFromString(e, "text/xml")) : (t = new r.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
                } catch (i) {
                    t = void 0
                }
                return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ve.error("Invalid XML: " + e), t
            };
            var Ut = /#.*$/,
                Yt = /([?&])_=[^&]*/,
                Vt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Qt = /^(?:GET|HEAD)$/,
                Zt = /^\/\//,
                en = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                tn = {},
                nn = {},
                on = "*/".concat("*"),
                rn = Wt.href,
                an = en.exec(rn.toLowerCase()) || [];
            ve.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: rn,
                    type: "GET",
                    isLocal: Kt.test(an[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": on,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": ve.parseJSON,
                        "text xml": ve.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function (e, t) {
                    return t ? Q(Q(e, ve.ajaxSettings), t) : Q(ve.ajaxSettings, e)
                }, ajaxPrefilter: V(tn),
                ajaxTransport: V(nn),
                ajax: function (e, t) {
                    function n(e, t, n, i) {
                        var o, d, v, x, w, k = t;
                        2 !== y && (y = 2, s && r.clearTimeout(s), p = void 0, l = i || "", _.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (x = Z(u, _, n)), x = ee(u, x, _, o), o ? (u.ifModified && (w = _.getResponseHeader("Last-Modified"), w && (ve.lastModified[a] = w), w = _.getResponseHeader("etag"), w && (ve.etag[a] = w)), 204 === e || "HEAD" === u.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = x.state, d = x.data, v = x.error, o = !v)) : (v = k, (e || !k) && (k = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (t || k) + "", o ? g.resolveWith(f, [d, k, _]) : g.rejectWith(f, [_, k, v]), _.statusCode(b), b = void 0, c && h.trigger(o ? "ajaxSuccess" : "ajaxError", [_, u, o ? d : v]), m.fireWith(f, [_, k]), c && (h.trigger("ajaxComplete", [_, u]), --ve.active || ve.event.trigger("ajaxStop")))
                    }
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var i, o, a, l, s, c, p, d, u = ve.ajaxSetup({}, t),
                        f = u.context || u,
                        h = u.context && (f.nodeType || f.jquery) ? ve(f) : ve.event,
                        g = ve.Deferred(),
                        m = ve.Callbacks("once memory"),
                        b = u.statusCode || {},
                        v = {},
                        x = {},
                        y = 0,
                        w = "canceled",
                        _ = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (2 === y) {
                                    if (!d)
                                        for (d = {}; t = Vt.exec(l);) d[t[1].toLowerCase()] = t[2];
                                    t = d[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            }, getAllResponseHeaders: function () {
                                return 2 === y ? l : null
                            }, setRequestHeader: function (e, t) {
                                var n = e.toLowerCase();
                                return y || (e = x[n] = x[n] || e, v[e] = t), this
                            }, overrideMimeType: function (e) {
                                return y || (u.mimeType = e), this
                            }, statusCode: function (e) {
                                var t;
                                if (e)
                                    if (2 > y)
                                        for (t in e) b[t] = [b[t], e[t]];
                                    else _.always(e[_.status]);
                                return this
                            }, abort: function (e) {
                                var t = e || w;
                                return p && p.abort(t), n(0, t), this
                            }
                        };
                    if (g.promise(_).complete = m.add, _.success = _.done, _.error = _.fail, u.url = ((e || u.url || rn) + "").replace(Ut, "").replace(Zt, an[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = ve.trim(u.dataType || "*").toLowerCase().match(Le) || [""], null == u.crossDomain && (i = en.exec(u.url.toLowerCase()), u.crossDomain = !(!i || i[1] === an[1] && i[2] === an[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (an[3] || ("http:" === an[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = ve.param(u.data, u.traditional)), K(tn, u, t, _), 2 === y) return _;
                    c = ve.event && u.global, c && 0 === ve.active++ && ve.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Qt.test(u.type), a = u.url, u.hasContent || (u.data && (a = u.url += (Rt.test(a) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = Yt.test(a) ? a.replace(Yt, "$1_=" + Bt++) : a + (Rt.test(a) ? "&" : "?") + "_=" + Bt++)), u.ifModified && (ve.lastModified[a] && _.setRequestHeader("If-Modified-Since", ve.lastModified[a]), ve.etag[a] && _.setRequestHeader("If-None-Match", ve.etag[a])), (u.data && u.hasContent && u.contentType !== !1 || t.contentType) && _.setRequestHeader("Content-Type", u.contentType), _.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + on + "; q=0.01" : "") : u.accepts["*"]);
                    for (o in u.headers) _.setRequestHeader(o, u.headers[o]);
                    if (u.beforeSend && (u.beforeSend.call(f, _, u) === !1 || 2 === y)) return _.abort();
                    w = "abort";
                    for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) _[o](u[o]);
                    if (p = K(nn, u, t, _)) {
                        if (_.readyState = 1, c && h.trigger("ajaxSend", [_, u]), 2 === y) return _;
                        u.async && u.timeout > 0 && (s = r.setTimeout(function () {
                            _.abort("timeout")
                        }, u.timeout));
                        try {
                            y = 1, p.send(v, n)
                        } catch (k) {
                            if (!(2 > y)) throw k;
                            n(-1, k)
                        }
                    } else n(-1, "No Transport");
                    return _
                }, getJSON: function (e, t, n) {
                    return ve.get(e, t, n, "json")
                }, getScript: function (e, t) {
                    return ve.get(e, void 0, t, "script")
                }
            }), ve.each(["get", "post"], function (e, t) {
                ve[t] = function (e, n, i, o) {
                    return ve.isFunction(n) && (o = o || i, i = n, n = void 0), ve.ajax(ve.extend({
                        url: e,
                        type: t,
                        dataType: o,
                        data: n,
                        success: i
                    }, ve.isPlainObject(e) && e))
                }
            }), ve._evalUrl = function (e) {
                return ve.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }, ve.fn.extend({
                wrapAll: function (e) {
                    if (ve.isFunction(e)) return this.each(function (t) {
                        ve(this).wrapAll(e.call(this, t))
                    });
                    if (this[0]) {
                        var t = ve(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                            return e
                        }).append(this)
                    }
                    return this
                }, wrapInner: function (e) {
                    return ve.isFunction(e) ? this.each(function (t) {
                        ve(this).wrapInner(e.call(this, t))
                    }) : this.each(function () {
                        var t = ve(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                }, wrap: function (e) {
                    var t = ve.isFunction(e);
                    return this.each(function (n) {
                        ve(this).wrapAll(t ? e.call(this, n) : e)
                    })
                }, unwrap: function () {
                    return this.parent().each(function () {
                        ve.nodeName(this, "body") || ve(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), ve.expr.filters.hidden = function (e) {
                return me.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : ne(e)
            }, ve.expr.filters.visible = function (e) {
                return !ve.expr.filters.hidden(e)
            };
            var ln = /%20/g,
                sn = /\[\]$/,
                cn = /\r?\n/g,
                pn = /^(?:submit|button|image|reset|file)$/i,
                dn = /^(?:input|select|textarea|keygen)/i;
            ve.param = function (e, t) {
                var n, i = [],
                    o = function (e, t) {
                        t = ve.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (void 0 === t && (t = ve.ajaxSettings && ve.ajaxSettings.traditional), ve.isArray(e) || e.jquery && !ve.isPlainObject(e)) ve.each(e, function () {
                    o(this.name, this.value)
                });
                else
                    for (n in e) ie(n, e[n], t, o);
                return i.join("&").replace(ln, "+")
            }, ve.fn.extend({
                serialize: function () {
                    return ve.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var e = ve.prop(this, "elements");
                        return e ? ve.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !ve(this).is(":disabled") && dn.test(this.nodeName) && !pn.test(e) && (this.checked || !Be.test(e))
                    }).map(function (e, t) {
                        var n = ve(this).val();
                        return null == n ? null : ve.isArray(n) ? ve.map(n, function (e) {
                            return {
                                name: t.name,
                                value: e.replace(cn, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(cn, "\r\n")
                        }
                    }).get()
                }
            }), ve.ajaxSettings.xhr = void 0 !== r.ActiveXObject ? function () {
                return this.isLocal ? re() : se.documentMode > 8 ? oe() : /^(get|post|head|put|delete|options)$/i.test(this.type) && oe() || re()
            } : oe;
            var un = 0,
                fn = {},
                hn = ve.ajaxSettings.xhr();
            r.attachEvent && r.attachEvent("onunload", function () {
                for (var e in fn) fn[e](void 0, !0)
            }), me.cors = !!hn && "withCredentials" in hn, hn = me.ajax = !!hn, hn && ve.ajaxTransport(function (e) {
                if (!e.crossDomain || me.cors) {
                    var t;
                    return {
                        send: function (n, i) {
                            var o, a = e.xhr(),
                                l = ++un;
                            if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                for (o in e.xhrFields) a[o] = e.xhrFields[o];
                            e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                            for (o in n) void 0 !== n[o] && a.setRequestHeader(o, n[o] + "");
                            a.send(e.hasContent && e.data || null), t = function (n, o) {
                                var r, s, c;
                                if (t && (o || 4 === a.readyState))
                                    if (delete fn[l], t = void 0, a.onreadystatechange = ve.noop, o) 4 !== a.readyState && a.abort();
                                    else {
                                        c = {}, r = a.status, "string" == typeof a.responseText && (c.text = a.responseText);
                                        try {
                                            s = a.statusText
                                        } catch (p) {
                                            s = ""
                                        }
                                        r || !e.isLocal || e.crossDomain ? 1223 === r && (r = 204) : r = c.text ? 200 : 404
                                    }
                                c && i(r, s, c, a.getAllResponseHeaders())
                            }, e.async ? 4 === a.readyState ? r.setTimeout(t) : a.onreadystatechange = fn[l] = t : t()
                        }, abort: function () {
                            t && t(void 0, !0)
                        }
                    }
                }
            }), ve.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1)
            }), ve.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function (e) {
                        return ve.globalEval(e), e
                    }
                }
            }), ve.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
            }), ve.ajaxTransport("script", function (e) {
                if (e.crossDomain) {
                    var t, n = se.head || ve("head")[0] || se.documentElement;
                    return {
                        send: function (i, o) {
                            t = se.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                                (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                            }, n.insertBefore(t, n.firstChild)
                        }, abort: function () {
                            t && t.onload(void 0, !0)
                        }
                    }
                }
            });
            var gn = [],
                mn = /(=)\?(?=&|$)|\?\?/;
            ve.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = gn.pop() || ve.expando + "_" + Bt++;
                    return this[e] = !0, e
                }
            }), ve.ajaxPrefilter("json jsonp", function (e, t, n) {
                var i, o, a, l = e.jsonp !== !1 && (mn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && mn.test(e.data) && "data");
                return l || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = ve.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, l ? e[l] = e[l].replace(mn, "$1" + i) : e.jsonp !== !1 && (e.url += (Rt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
                    return a || ve.error(i + " was not called"), a[0]
                }, e.dataTypes[0] = "json", o = r[i], r[i] = function () {
                    a = arguments
                }, n.always(function () {
                    void 0 === o ? ve(r).removeProp(i) : r[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, gn.push(i)), a && ve.isFunction(o) && o(a[0]), a = o = void 0
                }), "script") : void 0
            }), me.createHTMLDocument = function () {
                if (!se.implementation.createHTMLDocument) return !1;
                var e = se.implementation.createHTMLDocument("");
                return e.body.innerHTML = "<form></form><form></form>", 2 === e.body.childNodes.length
            }(), ve.parseHTML = function (e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || (me.createHTMLDocument ? se.implementation.createHTMLDocument("") : se);
                var i = je.exec(e),
                    o = !n && [];
                return i ? [t.createElement(i[1])] : (i = _([e], t, o), o && o.length && ve(o).remove(), ve.merge([], i.childNodes))
            };
            var bn = ve.fn.load;
            ve.fn.load = function (e, t, n) {
                if ("string" != typeof e && bn) return bn.apply(this, arguments);
                var i, o, r, a = this,
                    l = e.indexOf(" ");
                return l > -1 && (i = ve.trim(e.slice(l, e.length)), e = e.slice(0, l)), ve.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ve.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    r = arguments, a.html(i ? ve("<div>").append(ve.parseHTML(e)).find(i) : e)
                }).always(n && function (e, t) {
                        a.each(function () {
                            n.apply(a, r || [e.responseText, t, e])
                        })
                    }), this
            }, ve.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                ve.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), ve.expr.filters.animated = function (e) {
                return ve.grep(ve.timers, function (t) {
                    return e === t.elem
                }).length
            }, ve.offset = {
                setOffset: function (e, t, n) {
                    var i, o, r, a, l, s, c, p = ve.css(e, "position"),
                        d = ve(e),
                        u = {};
                    "static" === p && (e.style.position = "relative"), l = d.offset(), r = ve.css(e, "top"), s = ve.css(e, "left"), c = ("absolute" === p || "fixed" === p) && ve.inArray("auto", [r, s]) > -1, c ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(s) || 0), ve.isFunction(t) && (t = t.call(e, n, ve.extend({}, l))), null != t.top && (u.top = t.top - l.top + a), null != t.left && (u.left = t.left - l.left + o), "using" in t ? t.using.call(e, u) : d.css(u)
                }
            }, ve.fn.extend({
                offset: function (e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                        ve.offset.setOffset(this, e, t)
                    });
                    var t, n, i = {
                            top: 0,
                            left: 0
                        },
                        o = this[0],
                        r = o && o.ownerDocument;
                    return r ? (t = r.documentElement, ve.contains(t, o) ? ("undefined" != typeof o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = ae(r), {
                        top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                        left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                    }) : i) : void 0
                }, position: function () {
                    if (this[0]) {
                        var e, t, n = {
                                top: 0,
                                left: 0
                            },
                            i = this[0];
                        return "fixed" === ve.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                            t = this.offset(), ve.nodeName(e[0], "html") || (n = e.offset()), n.top += ve.css(e[0], "borderTopWidth", !0) - e.scrollTop(), n.left += ve.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
                            top: t.top - n.top - ve.css(i, "marginTop", !0),
                            left: t.left - n.left - ve.css(i, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent; e && !ve.nodeName(e, "html") && "static" === ve.css(e, "position");) e = e.offsetParent;
                        return e || vt
                    })
                }
            }), ve.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function (e, t) {
                var n = /Y/.test(t);
                ve.fn[e] = function (i) {
                    return We(this, function (e, i, o) {
                        var r = ae(e);
                        return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void(r ? r.scrollTo(n ? ve(r).scrollLeft() : o, n ? o : ve(r).scrollTop()) : e[i] = o)
                    }, e, i, arguments.length, null)
                }
            }), ve.each(["top", "left"], function (e, t) {
                ve.cssHooks[t] = P(me.pixelPosition, function (e, n) {
                    return n ? (n = yt(e, t), mt.test(n) ? ve(e).position()[t] + "px" : n) : void 0
                })
            }), ve.each({
                Height: "height",
                Width: "width"
            }, function (e, t) {
                ve.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function (n, i) {
                    ve.fn[i] = function (i, o) {
                        var r = arguments.length && (n || "boolean" != typeof i),
                            a = n || (i === !0 || o === !0 ? "margin" : "border");
                        return We(this, function (t, n, i) {
                            var o;
                            return ve.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? ve.css(t, n, a) : ve.style(t, n, i, a)
                        }, t, r ? i : void 0, r, null)
                    }
                })
            }), ve.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                }, unbind: function (e, t) {
                    return this.off(e, null, t)
                }, delegate: function (e, t, n, i) {
                    return this.on(t, e, n, i)
                }, undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), ve.fn.size = function () {
                return this.length
            }, ve.fn.andSelf = ve.fn.addBack, n(10) && (i = [], o = function () {
                return ve
            }.apply(t, i), !(void 0 !== o && (e.exports = o)));
            var vn = r.jQuery,
                xn = r.$;
            return ve.noConflict = function (e) {
                return r.$ === ve && (r.$ = xn), e && r.jQuery === ve && (r.jQuery = vn), ve
            }, a || (r.jQuery = r.$ = ve), ve
        })
    },
    function (e, t, n) {
        function i(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n],
                    o = f[i.id];
                if (o) {
                    o.refs++;
                    for (var r = 0; r < o.parts.length; r++) o.parts[r](i.parts[r]);
                    for (; r < i.parts.length; r++) o.parts.push(c(i.parts[r], t))
                } else {
                    for (var a = [], r = 0; r < i.parts.length; r++) a.push(c(i.parts[r], t));
                    f[i.id] = {
                        id: i.id,
                        refs: 1,
                        parts: a
                    }
                }
            }
        }

        function o(e) {
            for (var t = [], n = {}, i = 0; i < e.length; i++) {
                var o = e[i],
                    r = o[0],
                    a = o[1],
                    l = o[2],
                    s = o[3],
                    c = {
                        css: a,
                        media: l,
                        sourceMap: s
                    };
                n[r] ? n[r].parts.push(c) : t.push(n[r] = {
                    id: r,
                    parts: [c]
                })
            }
            return t
        }

        function r(e, t) {
            var n = m(),
                i = x[x.length - 1];
            if ("top" === e.insertAt) i ? i.nextSibling ? n.insertBefore(t, i.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), x.push(t);
            else {
                if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                n.appendChild(t)
            }
        }

        function a(e) {
            e.parentNode.removeChild(e);
            var t = x.indexOf(e);
            t >= 0 && x.splice(t, 1)
        }

        function l(e) {
            var t = document.createElement("style");
            return t.type = "text/css", r(e, t), t
        }

        function s(e) {
            var t = document.createElement("link");
            return t.rel = "stylesheet", r(e, t), t
        }

        function c(e, t) {
            var n, i, o;
            if (t.singleton) {
                var r = v++;
                n = b || (b = l(t)), i = p.bind(null, n, r, !1), o = p.bind(null, n, r, !0)
            } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = s(t), i = u.bind(null, n), o = function () {
                a(n), n.href && URL.revokeObjectURL(n.href)
            }) : (n = l(t), i = d.bind(null, n), o = function () {
                a(n)
            });
            return i(e),
                function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        i(e = t)
                    } else o()
                }
        }

        function p(e, t, n, i) {
            var o = n ? "" : i.css;
            if (e.styleSheet) e.styleSheet.cssText = y(t, o);
            else {
                var r = document.createTextNode(o),
                    a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(r, a[t]) : e.appendChild(r)
            }
        }

        function d(e, t) {
            var n = t.css,
                i = t.media;
            if (i && e.setAttribute("media", i), e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }

        function u(e, t) {
            var n = t.css,
                i = t.sourceMap;
            i && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var o = new Blob([n], {
                    type: "text/css"
                }),
                r = e.href;
            e.href = URL.createObjectURL(o), r && URL.revokeObjectURL(r)
        }
        var f = {},
            h = function (e) {
                var t;
                return function () {
                    return "undefined" == typeof t && (t = e.apply(this, arguments)), t
                }
            },
            g = h(function () {
                return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
            }),
            m = h(function () {
                return document.head || document.getElementsByTagName("head")[0]
            }),
            b = null,
            v = 0,
            x = [];
        e.exports = function (e, t) {
            t = t || {}, "undefined" == typeof t.singleton && (t.singleton = g()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
            var n = o(e);
            return i(n, t),
                function (e) {
                    for (var r = [], a = 0; a < n.length; a++) {
                        var l = n[a],
                            s = f[l.id];
                        s.refs--, r.push(s)
                    }
                    if (e) {
                        var c = o(e);
                        i(c, t)
                    }
                    for (var a = 0; a < r.length; a++) {
                        var s = r[a];
                        if (0 === s.refs) {
                            for (var p = 0; p < s.parts.length; p++) s.parts[p]();
                            delete f[s.id]
                        }
                    }
                }
        };
        var y = function () {
            var e = [];
            return function (t, n) {
                return e[t] = n, e.filter(Boolean).join("\n")
            }
        }()
    },
    function (e, t, n) {
        e.exports = n.p + "p-c-icon.e5b6b531a6004b309d7442793691eb10.png"
    },
    function (e, t) {
        function n() {}
        var i = /\s+/;
        n.prototype.on = function (e, t, n) {
            var o, r, a;
            if (!t) return this;
            for (o = this.__events || (this.__events = {}), e = e.split(i); r = e.shift();) a = o[r] || (o[r] = []), a.push(t, n);
            return this
        }, n.prototype.off = function (e, t, n) {
            var o, r, a, l;
            if (!(o = this.__events)) return this;
            if (!(e || t || n)) return delete this.__events, this;
            for (e = e ? e.split(i) : Object.keys(o); r = e.shift();)
                if (a = o[r])
                    if (t || n)
                        for (l = a.length - 2; l >= 0; l -= 2) t && a[l] !== t || n && a[l + 1] !== n || a.splice(l, 2);
                    else delete o[r];
            return this
        }, n.prototype.trigger = function (e) {
            var t, n, o, r, a, l, s, c = [];
            if (!(t = this.__events)) return this;
            for (e = e.split(i), a = 1, l = arguments.length; a < l; a++) c[a - 1] = arguments[a];
            for (; n = e.shift();) {
                if ((o = t.all) && (o = o.slice()), (r = t[n]) && (r = r.slice()), r)
                    for (a = 0, l = r.length; a < l; a += 2) r[a].apply(r[a + 1] || this, c);
                if (o)
                    for (s = [n].concat(c), a = 0, l = o.length; a < l; a += 2) o[a].apply(o[a + 1] || this, s)
            }
            return this
        }, n.prototype.emit = n.prototype.trigger, n.mixTo = function (e) {
            var t = n.prototype;
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
        }, e.exports = n
    },
    function (e, t, n) {
        function i() {
            var e = "widget" + ++c;
            return s[e] = {
                defer: a.Deferred()
            }, e
        }

        function o(e) {
            a(function () {
                a.each(e.elements, function (t, n) {
                    var o = a(n);
                    if (!o[0]) return void console.warn("WIDGET:The element has not found.");
                    var r = o.data(),
                        l = {},
                        c = o.data("widget-id");
                    c || (c = i(), o.data("widget-id", c)), r.$el = o, o.find("[data-role]").each(function () {
                        var e = a(this).data("role");
                        l[e] || (l[e] = []), l[e].push(this)
                    }), a.each(l, function (e, t) {
                        r["$" + e] = a(t)
                    });
                    var p = new e(r);
                    s[c].instance = p, s[c].defer.resolve(p)
                })
            })
        }

        function r(e, t, n) {
            e = a(e), a.each(t, function (t, i) {
                var o = t.indexOf(" "),
                    r = o === -1 ? t : t.substr(0, o),
                    l = o === -1 ? "" : t.substr(o, t.length - 1);
                i && (i = "function" == typeof i ? a.proxy(i, n) : a.proxy(n[i], n), l ? e.on(r, l, i) : e.on(r, i))
            })
        }
        var a = n(3),
            l = t,
            s = {},
            c = 0;
        l.template = function (e, t) {
            var n = new Function("obj", "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj){__p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("__p.push('").split("\r").join("\\'") + "');}return __p.join('');");
            return t ? n(t) : n
        }, l.ready = function (e, t) {
            "string" == typeof e && (e = [e]);
            var n = [].reduce.call(e, function (e, t) {
                var n = a(t),
                    o = null;
                return 1 === n.size() ? (n.data("widget-id") || n.data("widget-id", i()), o = s[n.data("widget-id")].defer.promise()) : n.size() >= 1 ? (o = a.Deferred(), l.ready(n, function () {
                    o.resolve([].slice.call(arguments))
                })) : (o = a.Deferred(), o.reject(null)), e.push(o), e
            }, []);
            a.when.apply(a, n).done(function () {
                t.apply(window, arguments)
            })
        }, l.initWidgets = function (e) {
            a.each(e, function (e, t) {
                l.initWidget(t)
            })
        }, l.initWidget = function (e) {
            o(e)
        }, l.define = function (e) {
            function t(t) {
                var n = a.extend({}, e);
                return a(t.$el).length && n.events && r(t.$el, n.events, n), n.init(t), n
            }
            return e = e || {}, e.events = e.events || {}, e.init = e.init || function (e) {
                    this.config = e
                }, t.elements = [], t.setEl = function (e) {
                if (!e) throw new Error("type Error");
                return a.isArray(e) ? t.elements = t.elements.concat(e) : t.elements.push(e), t.elements
            }, t.extend = function (t) {
                return t = a.extend({}, e, t), t.super_ = a.extend({}, e), t.events = a.extend({}, e.events, t.events), l.define(t)
            }, t.init = function (e) {
                this.setEl(e), o(this)
            }, t.define = a.extend({}, e), t
        }
    },
    function (e, t) {
        GJ.app = GJ.app || {}, GJ.app.selfDirection = GJ.app.selfDirection || {}, GJ.app.selfDirection.bind = function (e) {
            var t = {
                postClass: "js_self_direction_post",
                attrHref: "_href",
                attrSign: "sign"
            };
            t = GJ.mix(t, e || {}, !0), $(e.$el).on("click", "a", function (t) {
                var n = e.$el.offset(),
                    i = $(this).attr("href");
                if (i.indexOf("click.ganji.com") > -1) {
                    var o = parseInt(t.pageX - n.left, 10),
                        r = parseInt(t.pageY - n.top, 10);
                    i = i.replace(/&x=.*/, ""), i += "&x=" + o + "&y=" + r, $(this).attr("href", i)
                }
            }), $("." + t.postClass + ", a[sign]").filter(":not([_sd])").bind("click", function () {
                GJ.getCookie("GanjiUserInfo") || GJ.setCookie("webimVisitorNeedComet", "1", 1209600)
            }).attr("_sd", "1"), "" != GJ.LogTracker.gjch && "_" != GJ.LogTracker.gjch && "-" != GJ.LogTracker.gjch && GJ.LogTracker.bindAllTrackEvent()
        }, GJ.app.selfDirection.render = function (e) {
            var t = {},
                n = $(".js-direction-render-box");
            return n.each(function () {
                if ($(this).data("dxing")) return !0;
                var e = $(this).data("boxid"),
                    n = $(this).data("params");
                $(this).data("dxing", !0), t["params[" + e + "]"] = n
            }), !!$.isEmptyObject(t) || void $.post("/ajax.php?dir=self_direction&module=render", t, function (e) {
                for (var t in e) n.filter("[data-boxid=" + t + "]").html(e[t]).show();
                GJ.app.selfDirection.bind(), n.find(".js-lazy-load").size() && GJ.use("js/util/lazyload/jquery.lazyload.1.7.js", function () {
                    n.find(".js-lazy-load").each(function () {
                        $(this).lazyload()
                    })
                })
            }, "json")
        }, GJ.app.selfDirection.send = function (e) {
            var t = {
                after: 10,
                befor: 3e4
            };
            t = GJ.mix(t, e || {}, !0);
            var n = window.location.hash,
                i = n.substring(n.lastIndexOf("#") + 1),
                o = (new Date).getTime(),
                r = !1,
                a = !1,
                l = function () {
                    return !(!r && a) || void((new Date).getTime() - o > t.after && (r = !0, $.getJSON("http://www.ganji.com/ajax.php?dir=self_direction&module=view_post&callback=?", {
                            s: i
                        }, function (e) {})))
                };
            if (GJ.LogTracker.trackEvent("/self_direction/clickJs/toShowFalse@atype=show@s=" + i), !i) return !1;
            var s = i.split("|");
            return 2 == s.length && (!(o - s[0] > t.befor) && (!("undefined" == typeof s[1] || s[1].length < 10) && ($("body").mousemove(function () {
                    a = !0, l()
                }), $(window).on("scrollEvent", function () {
                    a = !0, l()
                }), window.onunload = function () {
                    r || $.getJSON("http://www.ganji.com/ajax.php?dir=self_direction&module=log")
                }, void setTimeout(function () {
                    l()
                }, t.after))))
        }
    }, ,
    function (e, t) {
        (function (t) {
            e.exports = t
        }).call(t, {})
    },
    function (e, t) {
        t.init = function () {
            var e = $("[baidu_alog]");
            e.each(function () {
                var e = $(this);
                $.each(e.attr("baidu_alog").split("#"), function (t, n) {
                    var i = ["_trackEvent"].concat(n.split("&"));
                    e.on(i[2], function () {
                        window._hmt.push(i)
                    })
                })
            })
        }
    },
    function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
        }
    },
    function (e, t, n) {
        (function (e) {
            var t = n(6),
                i = window.JSON ? window.JSON : {
                    stringify: GJ.jsonEncode,
                    parse: GJ.jsonDecode
                },
                o = function (e) {
                    return "function" == typeof e
                },
                r = function (e) {
                    function n(e) {
                        var t, n = l[e.method];
                        if (o(n)) {
                            try {
                                "[object Array]" !== Object.prototype.toString.call(e.params) && (e.params = [e.params]), t = n.apply({}, e.params)
                            } catch (i) {
                                throw new Error("Exec function error: " + i.message)
                            }
                            e.callbackId && p({
                                callbackId: e.callbackId,
                                result: t
                            })
                        }
                    }
                    var i = this;
                    e = e || {}, e.isHost = !!e.remote, e.isHost && (e.channel = GJ.guid("RPC_CHANNEL")), window.postMessage || document.postMessage ? e.protocol = "1" : e.protocol = "2";
                    var a = {},
                        l = e.method || {},
                        s = 1;
                    t.mixTo(r.Transport.prototype);
                    var c = new r.Transport(e),
                        p = function (e) {
                            c.send(e)
                        };
                    c.on("ready", function () {
                        o(e.onReady) && setTimeout(function () {
                            e.onReady.call(i)
                        }, 0)
                    }), c.on("message", function (e) {
                        if (e.method) n(e);
                        else if (e.callbackId) {
                            var t = a[e.callbackId];
                            t && t(e.result)
                        }
                    });
                    var d = function (e, t, n) {
                        var i = {
                            jsonrpc: "2.0",
                            params: t,
                            method: e,
                            callbackId: s
                        };
                        o(t) && (n = t), o(n) && (a[s] = n), s++, setTimeout(function () {
                            p(i)
                        }, 0)
                    };
                    return d.set = function (e, t) {
                        l[e] = t
                    }, d.destroy = function () {
                        s = 0, l = {}, a = {}, c.destroy()
                    }, c.init(), d.iframe = e.iframe, d
                };
            r.behavior = {}, e && (e.exports = r),
                function (e) {
                    e.FLAG = "__RPC__", e.handleMessage = function (t) {
                        return e.FLAG + i.stringify(t)
                    }, e.verify = function (t) {
                        var n = {
                            message: void 0,
                            trust: !1
                        };
                        return 0 === t.indexOf(e.FLAG) && (n.message = t.replace(e.FLAG, ""), n.trust = !0), n
                    }, e.navigator = function (t, n) {
                        var o = {
                            incoming: function (r) {
                                var a = e.verify(r);
                                !0 === a.trust && (r = a.message, '"ready"' === r ? (n.emit("ready"), t.isHost && o.outgoing("ready")) : n.emit("message", i.parse(r)))
                            }, outgoing: function (n) {
                                n = e.handleMessage(n), t.isHost ? window.navigator[t.channel + "_remote"](n) : window.navigator[t.channel + "_host"](n)
                            }, init: function () {
                                t.isHost ? window.navigator[t.channel + "_host"] = o.incoming : (window.navigator[t.channel + "_remote"] = o.incoming, o.outgoing("ready"))
                            }
                        };
                        return o
                    }, e.postMessage = function (t, n) {
                        var o, r = {
                            incoming: function (e) {
                                e.channel === t.channel && n.emit("message", e)
                            }, outgoing: function (n) {
                                "ready" === n ? n = {
                                    channel: t.channel,
                                    isReady: !0
                                } : n.channel = t.channel, n = e.handleMessage(n), o.postMessage(n, "*")
                            }, init: function () {
                                if (GJ.addEvent(window, "message", function (o) {
                                        var a = o.data,
                                            l = e.verify(a);
                                        !0 === l.trust && (a = l.message, a = i.parse(a), a.channel === t.channel && (a.isReady ? (t.isHost && r.outgoing("ready"), n.emit("ready")) : r.incoming(a)))
                                    }), t.isHost) {
                                    var a = t.iframe;
                                    o = "postMessage" in a.contentWindow ? a.contentWindow : a.contentWindow.document
                                } else o = "postMessage" in window.parent ? window.parent : window.parent.document, r.outgoing("ready")
                            }
                        };
                        return r
                    }
                }(r.behavior),
                function (e) {
                    var n = function (e, t, i) {
                            for (var o in t)
                                if (o in e) {
                                    var r = t[o];
                                    "object" == typeof r ? n(e[o], r, i) : i && (e[o] = t[o])
                                } else e[o] = t[o];
                            return e
                        },
                        i = function (e) {
                            var t = null;
                            try {
                                t = document.createElement('<IFRAME name="' + e.channel + '">')
                            } catch (i) {}
                            return t && "IFRAME" === t.nodeName || (t = document.createElement("IFRAME"), t.name = e.channel), e.props = e.props || {}, "string" == typeof e.container && (e.container = document.getElementById(e.container)), n(t.style, e.props.style, !0), e.container || n(t.style, {
                                position: "absolute",
                                top: "-2000px",
                                left: "0px"
                            }, !0), e.props.src = "javascript:false", n(t, e.props, !0), t.border = t.frameBorder = 0, t.allowTransparency = !0, e.container ? e.container.appendChild(t) : (e.container = document.body, $("body").prepend(t)), t.src = e.remote, t
                        };
                    e.Transport = function (n) {
                        var o = this,
                            r = [],
                            a = [];
                        switch (t.mixTo(this), n.isHost || (n.channel = window.name), n.protocol) {
                            case "1":
                                r = new e.behavior.postMessage(n, o);
                                break;
                            case "2":
                                r = new e.behavior.navigator(n, o)
                        }
                        n.onLoad = function () {
                            r.init()
                        }, this.on("ready", function () {
                            o.send = function (e) {
                                r.outgoing(e)
                            };
                            for (var e = 0; e < a.length; e++) o.send(a[e])
                        }), this.init = function () {
                            n.isHost && (n.iframe = i(n)), n.onLoad()
                        }, this.send = function (e) {
                            a.push(e)
                        }, this.destroy = function () {
                            n.iframe.parentNode.removeChild(n.iframe)
                        }
                    }
                }(r)
        }).call(t, n(12)(e))
    },
    function (e, t, n) {
        n(18);
        var i = "https:" == document.location.protocol;
        t.footer = Widget.define({
            events: {},
            init: function (e) {
                e.$is_show_box.on("click", function () {
                    $(this).parents(".friendly-link").toggleClass("friendly-active")
                }), $(".open-box").on("click", function () {
                    $(this).parents(".friendly-link").toggleClass("friendly-active")
                })
            }
        }), t.feedBack = Widget.define({
            init: function (e) {
                var t = e.$el,
                    n = $(".feed_back_source_url"),
                    o = $(".feed_back_source_cityid");
                if (i) var r = "https://www.guazi.com/bj/feedBack/?act=feedBack&sourceUrl=" + n.html() + "&cityId=" + o.html();
                else var r = "http://www.guazi.com/bj/feedBack/?act=feedBack&sourceUrl=" + n.html() + "&cityId=" + o.html();
                t.click(function () {
                    return GJ.panel({
                        url: r,
                        title: "意见反馈",
                        iframe: !0,
                        width: 615,
                        height: 480,
                        mask: !0,
                        style: "text",
                        iframeScrolling: !1
                    }), !1
                })
            }
        }), t.submitFeedBack = Widget.define({
            init: function (e) {
                var t = $("#fb_info"),
                    n = $("#fb_suc"),
                    o = $("#fb_text"),
                    r = $("#fb_contact"),
                    a = $("#fb_source_url"),
                    l = $("#fb_source_city"),
                    s = $("#text_error"),
                    c = $("#submit"),
                    p = $("#fb_suc_text"),
                    d = " ",
                    u = " ",
                    f = !0;
                o.change(function () {
                    var e = $.trim(o.val());
                    o.val(e), e.length < 1 ? (d = "您还没有填写意见呢~", f = !1) : e.length > 600 ? (d = "意见反馈请勿多于600个字", f = !1) : f = !0
                }), r.change(function () {
                    var e = $.trim(r.val());
                    r.val(e), e.length > 50 ? (d = "联系方式请勿多于50个字", f = !1) : f = !0, u = e.length > 0 ? "再次感谢您提出的宝贵意见<br>我们将尽快回复您！" : "再次感谢您提出宝贵意见！"
                }), c.click(function () {
                    if (o.trigger("change"), 1 != f) return s.html(d), !1;
                    if (r.trigger("change"), 1 != f) return s.html(d), !1;
                    if (i) var e = "https://www.guazi.com/bj/feedBack/?act=submitFeedBack";
                    else var e = "http://www.guazi.com/bj/feedBack/?act=submitFeedBack";
                    $.ajax({
                        url: e,
                        type: "post",
                        dataType: "json",
                        data: {
                            text: o.val(),
                            sourceUrl: a.html(),
                            contact: r.val(),
                            cityId: l.html()
                        },
                        beforeSend: function (e) {
                            loading = GJ.loading({
                                content: "正在发送信息，请稍候..."
                            })
                        }, complete: function () {
                            loading.close()
                        }, success: function (e) {
                            t.hide(), e.statue ? p.html(u) : p.html(e.message), n.show(), _hmt.push(["_trackEvent", "button", "submit", "xuanfu_feedback_sucess_submit", 0]), window.tracker.send({
                                tracking_type: "submit",
                                eventid: "0200000000000085",
                                telphone: r.val(),
                                target: "用户反馈",
                                result: "提交成功"
                            })
                        }, error: function () {
                            p.html("服务器超时")
                        }
                    })
                })
            }
        }), t.closeSide = Widget.define({
            init: function (e) {
                $(".close-side").on("click", function () {
                    $(this).hasClass("open-side") ? (e.$left_area.show("slow"), $(this).removeClass("open-side")) : (e.$left_area.hide("slow"), $(this).addClass("open-side"))
                }), $(".ewm-wx").click(function (e) {
                    e.preventDefault(), $(".ewm-app").hasClass("active") || $(".call-back-box").is(":visible") ? ($(this).addClass("active"), $(".call-back-box").hide(), $(".ewm-app").removeClass("active")) : ($(this).removeClass("active"), $(".call-back-box").show(), $(".ewm-app").removeClass("active"))
                }), $(".ewm-app").click(function (e) {
                    e.preventDefault(), $(".ewm-wx").hasClass("active") || $(".call-back-box").is(":visible") ? ($(this).addClass("active"), $(".call-back-box").hide(), $(".ewm-wx").removeClass("active")) : ($(this).removeClass("active"), $(".call-back-box").show(), $(".ewm-wx").removeClass("active"))
                });
                var t = $(".call-back-tip"),
                    n = e.$phone_input,
                    i = e.$puid;
                n.keydown(function () {
                    t.html(""), t.hide()
                }).blur(function () {
                    t.html(""), t.hide()
                }), e.$call_button.click(function () {
                    var e = new RegExp(/^(1[34578]\d{9})|^(0\d{2,3}-?\d{7,8})$/),
                        o = "";
                    t.hide(), n.val() ? e.test(n.val()) ? GJ.use("js/util/md5/md5.js", function (e) {
                        var r = e(e(n.val()));
                        _hmt.push(["_trackEvent", "xuanfu", "click", "index_xuanfu_freephone_c"]), GJ.LogTrackerGz.trackEvent("tel=" + n.val()), $.ajax({
                            url: "/zq_callback/?act=callPhone",
                            data: {
                                token: r,
                                phone: n.val(),
                                puid: i.val()
                            },
                            type: "post",
                            dataType: "json",
                            beforeSend: function (e) {
                                setTimeout(function () {
                                    alert("瓜子客服正在拨通您的电话，免费的哦，请您放心接听。")
                                }, 0)
                            }, success: function (e) {
                                _hmt.push(["_trackEvent", "xuanfu", "submit", "index_xuanfu_freephone_sucess_submit"]), window.tracker.send({
                                    tracking_type: "submit",
                                    eventid: "0200000000000084",
                                    telphone: n.val(),
                                    target: "免费通话",
                                    result: "提交成功"
                                }), e.status || (o = e.msg, t.show(), t.html(o), o && alert(o))
                            }, error: function () {
                                o = "网络错误.", t.show(), t.html(o)
                            }
                        })
                    }) : (o = "请填写正确的手机号码哦~", n.focus()) : (o = "忘记填写手机号码了哦~", n.focus()), o && (t.show(), n.trigger("focus")), t.html(o)
                })
            }
        }), t.toTop = Widget.define({
            init: function (e) {
                e.$el.click(function (e) {
                    e.preventDefault(), o()
                })
            }
        }), $(function () {
            $(".call-back").on("click", function (e) {
                e.preventDefault(), $(".call-back-box").is(":hidden") && ($(".ewm-app").removeClass("active"), $(".ewm-wx").removeClass("active"), $(".call-back-box").show(), $(".call-back-input").focus())
            })
        });
        var o = function (e, t) {
            e = e || .1, t = t || 16;
            var n = 0,
                i = 0,
                r = 0,
                a = 0,
                l = 0,
                s = 0;
            document.documentElement && (n = document.documentElement.scrollLeft || 0, i = document.documentElement.scrollTop || 0), document.body && (r = document.body.scrollLeft || 0, a = document.body.scrollTop || 0);
            var l = window.scrollX || 0,
                s = window.scrollY || 0,
                c = Math.max(n, Math.max(r, l)),
                p = Math.max(i, Math.max(a, s)),
                d = 1 + e;
            if (window.scrollTo(Math.floor(c / d), Math.floor(p / d)), c > 0 || p > 0) {
                var u = o(" + acceleration + ", " + time + ");
                window.setTimeout(u, t)
            }
        }
    },
    function (e, t, n) {
        function i(e) {
            if (this.config = {
                    resultsClass: "gj_sys_autoc_rs",
                    overClass: "gj_sys_autoc_ov",
                    $input: "",
                    $container: null,
                    maxItemsToShow: 10,
                    width: null,
                    left: null,
                    top: null,
                    url: null,
                    data: null,
                    filterHandler: null,
                    defaultDataHandler: null,
                    getDataHandler: null,
                    formatItem: null,
                    noCache: !1,
                    selectFirst: !1,
                    showTop: !1,
                    autoPosition: !1
                }, e.url = "string" == typeof e.url && e.url.length > 0 ? e.url : null, e.data = o.isArray(e.data) ? e.data : null, e.getDataHandler = o.isFunction(e.getDataHandler) ? e.getDataHandler : null, e.defaultDataHandler = o.isFunction(e.defaultDataHandler) ? e.defaultDataHandler : null, e.$input = o(e.$input), e.$container = o(e.$container), !e.$input.length || !e.url && !e.data && !e.getDataHandler) throw new Error("Not found input element or source data!");
            e.$container.length || (e.$container = o("body")), e.maxItemsToShow < 0 && (e.maxItemsToShow = 10), o.extend(this.config, e), this.init()
        }
        var o = n(3),
            r = n(6);
        n(31), r.mixTo(i.prototype);
        var a = !1,
            l = !0,
            s = window.navigator.userAgent,
            c = 0;
        /MSIE 6.0/.test(s) && (a = !0), /Macintosh/.test(s) && (l = !0), i.prototype.init = function () {
            var e = this;
            e.$input = e.config.$input, e.$input.attr("autocomplete", "off"), e.timer = null, e.active = -1, e.hasFocus = !1, e.cache = {}, e.cacheKeys = [], e.$iframeBg = null, a && (e.$iframeBg = o("<iframe></iframe>"), e.$iframeBg.attr({
                border: 0,
                frameSpacing: 0,
                frameBorder: 0,
                scrolling: "no"
            }).addClass("gj_sys_autoc_rs_iframe")), e.$resultEl = e.createPanel(), e.EventsHandler(), e.$input.is(":focus") && (l && (e.pollingInputChange = setInterval(function () {
                e.requestData()
            }, 150)), e.showDefaultData(), e.hasFocus = !1)
        }, i.prototype.createPanel = function () {
            var e = this.config,
                t = o("<div class='" + e.resultsClass + "'></div>");
            return e.$container.append(t), this.$iframeBg && e.$container.append(this.$iframeBg), t
        }, i.prototype.EventsHandler = function () {
            var e = this,
                t = this.config;
            e.$input.keydown(function (t) {
                switch (t.keyCode) {
                    case 38:
                        t.preventDefault(), e.moveSelect(-1);
                        break;
                    case 40:
                        t.preventDefault(), e.moveSelect(1);
                        break;
                    case 13:
                        break;
                    default:
                        if (t.keyCode > 8 && t.keyCode < 32) return
                }
            }).keypress(function (t) {
                var n;
                13 === t.keyCode && e.active > -1 && (t.preventDefault(), n = e.$resultEl.find("li:eq(" + e.active + ")"), e.selectItem(n))
            }).focus(function () {
                clearInterval(e.pollingInputChange), l && (e.pollingInputChange = setInterval(function () {
                    e.requestData()
                }, 150)), e.config.showResultsOnFocus ? e.lastValue = null : e.showDefaultData(), e.hasFocus = !1, e.receiveData(e.$input[0].value, e.data)
            }).blur(function () {
                e.hasFocus || (e.hideResults(), clearInterval(e.pollingInputChange))
            }), e.$resultEl.on("mouseenter", "li", function () {
                e.$resultEl.find("li").removeClass(t.overClass), o(this).addClass(t.overClass), e.active = o(this).data("key")
            }).on("mouseleave", "li", function () {
                e.active = -1, o(this).removeClass(t.overClass)
            }).on("click", "li", function () {
                e.selectItem(o(this))
            }).on("mousedown", function (t) {
                t.stopPropagation(), e.hasFocus = !0;
                var n = this;
                o(document).one("mousedown", function (t) {
                    t.target !== n && t.target !== e.$input[0] && (e.hideResults(), e.hasFocus = !1)
                })
            })
        }, i.prototype.addToCache = function (e, t) {
            var n = this.config;
            if (n.noCache || !t || !e) return !1;
            if (!this.cache[e] && this.cacheKeys.length >= 10) {
                var i = this.cacheKeys.pop();
                this.cache[i] && delete this.cache[i]
            }
            this.cacheKeys.push(e), this.cache[e] = t
        }, i.prototype.loadFromCache = function (e) {
            var t = this;
            return t.cache[e] ? t.cache[e] : null
        }, i.prototype.selectItem = function (e) {
            if (e.length < 1) return !1;
            var t = e.data("data");
            this.trigger("itemSelect", t, e), e.data("data") && !e.data("data").noHideResults && this.hideResults(), this.lastValue = o.trim(this.config.$input.val())
        }, i.prototype.moveSelect = function (e) {
            if (this.disabled) return !1;
            var t = this.config,
                n = o("li", this.$resultEl),
                i = n.size();
            this.active += e, this.active < -1 ? this.active = i - 1 : this.active === i && (this.active = -1), n.removeClass(t.overClass);
            var r = o(n[this.active]),
                a = r.data("key");
            if (r.addClass(t.overClass), 0 === t.maxItemsToShow) {
                var l = t.maxItemsToShow > 0 ? t.maxItemsToShow : 10,
                    s = r.outerHeight(),
                    c = this.$resultEl.scrollTop();
                a < l ? this.$resultEl.scrollTop(0) : a === i - 1 ? this.$resultEl.scrollTop(9999) : (e < 0 && (s = 0 - s), this.$resultEl.scrollTop(c + s))
            }
            var p = this.lastValue,
                d = this;
            void 0 !== a ? (clearInterval(this.pollingInputChange), p = r.data("data").text) : d.pollingInputChange = setInterval(function () {
                d.requestData()
            }, 150), this.$input.val(p), this.trigger("indexChange", a, r.data("data"), r)
        }, i.prototype.showDefaultData = function () {
            var e = this,
                t = this.config,
                n = this.$input.val();
            if (n = o.trim(n), n || !e.config.defaultDataHandler) e.hideResults();
            else {
                if (e.isRequesting = !1, e.loadFromCache("defaultData")) return void e.receiveData(null, e.loadFromCache("defaultData"));
                e.config.defaultDataHandler(function (n) {
                    t.noCache || e.addToCache("defaultData", n), e.receiveData(null, n)
                })
            }
        }, i.prototype.requestData = function () {
            var e = this,
                t = this.config,
                n = t.data,
                i = t.url,
                r = o.trim(e.$input.val());
            return (!l || r !== e.lastValue) && (e.lastValue = r, e.active = -1, clearTimeout(e.timer), r ? (e.isRequesting = !0, n || (n = e.loadFromCache(r)), void(n ? e.timer = setTimeout(function () {
                    e.isRequesting = !1, e.receiveData(r, n)
                }, 0) : i ? e.timer = setTimeout(function () {
                    var t = e.$input.attr("name");
                    if (!t) throw new Error("input need name filed!");
                    var n = {
                        signate: (new Date).getTime(),
                        name: encodeURIComponent(r)
                    };
                    o.getJSON(i, n, function (t) {
                        e.isRequesting = !1, e.addToCache(r, t), e.receiveData(r, t)
                    })
                }, 150) : t.getDataHandler ? e.timer = setTimeout(function () {
                    t.getDataHandler(r, function (t) {
                        t || e.hideResults(), e.isRequesting = !1, e.addToCache(r, t), e.receiveData(r, t)
                    })
                }, 150) : e.hideResults())) : (e.timer = setTimeout(function () {
                    e.showDefaultData()
                }, 150), !1))
        }, i.prototype.receiveData = function (e, t) {
            if (t && o.isArray(t) && t.length > 0 && !this.isRequesting) {
                if (this.data = t, this.config.filterHandler && e && (t = this.config.filterHandler(e, t)), !t.length) return this.hideResults(), !1;
                this.$resultEl.empty().append(this.render(e, t)), this.showResults(t.length)
            } else this.hideResults()
        }, i.prototype.render = function (e, t) {
            c = t[0].hideResults ? 1 : 0;
            var n = this.config,
                i = t.length,
                r = o("<ul></ul>");
            return n.maxItemsToShow > 0 && n.maxItemsToShow < i && (i = n.maxItemsToShow), o.each(t, function (a, l) {
                var s, c = o("<li></li>");
                return !(a >= i) && (s = n.formatItem ? n.formatItem(l, e, c, a, t) : l[0].replace(new RegExp("(" + e + ")", "i"), '<span class="bold">$1</span>'), c.html(s).data("data", l).data("key", a), r.append(c), void 0)
            }), n.selectFirst && (this.active = 0, r.find("li:eq(0)").addClass(n.overClass)), r
        }, i.prototype.showResults = function (e) {
            var t, n, i, o, r = this.config,
                a = this.$input.offset(),
                l = this.$input.outerHeight(!0),
                s = this.$resultEl.outerHeight(!0),
                p = r.liHeight || this.$resultEl.find("li:eq(0)").outerHeight(!0);
            if (t = null === r.left ? a.left : r.left, n = null === r.top ? a.top : r.top, i = "auto", o = null === r.width ? this.$input.outerWidth() - 4 : r.width, i = 0 === r.maxItemsToShow ? e > 10 ? 10 * p + (r.liHeight ? 0 : 6) : "auto" : e > r.maxItemsToShow ? p * r.maxItemsToShow + (r.liHeight ? 0 : 6) : "auto", r.autoPosition) {
                var d = window.innerHeight || document.documentElement.clientHeight;
                n + l + s > d && n > s ? n -= s : n += l
            } else r.showTop ? n -= s : n += l;
            var u = {
                height: i,
                width: o,
                top: n,
                left: t
            };
            this.disabled = !1, this.active = -1, this.$resultEl.css(u).show(), this.setIframeBgDisplay(!0), this.trigger("showResult", this.$resultEl), 1 === c && this.$resultEl.hide()
        }, i.prototype.setIframeBgDisplay = function (e) {
            this.$iframeBg && (e ? this.$iframeBg.css({
                width: this.$resultEl.width(),
                height: this.$resultEl.outerHeight(),
                left: this.$resultEl.position().left,
                top: this.$resultEl.position().top
            }).show() : this.$iframeBg.hide())
        }, i.prototype.hideResults = function () {
            var e = this;
            e.timer && clearTimeout(e.timer), e.lastValue = o.trim(e.$input.val()), this.disabled = !0, this.$resultEl.hide(), this.setIframeBgDisplay(!1), e.hide = !0, this.trigger("hideResult")
        }, o.fn.autocomplete = function (e) {
            return e = e || {}, this.each(function () {
                e.$input = this, new i(e)
            }), this
        }, e.exports = i
    },
    function (e, t) {
        ! function () {
            GJ.DragDrop || (GJ.DragDrop = function () {
                var e, t, n, i, o, r = {},
                    a = {},
                    l = {},
                    s = document,
                    c = $(s),
                    p = function (t, n) {
                        return parseInt(e.css(t)) || n
                    },
                    d = function (i) {
                        if (e) {
                            l.event = i, t && !n && (n = $('<div id="jqDnR_move" style="position:absolute; border:1px dotted #000;background:#ccc;opacity:0.5; filter:alpha(opacity=50);z-index:600000;"></div>'), $(s.body).append(n), n.css({
                                left: r.X,
                                top: r.Y,
                                width: r.W,
                                height: r.H,
                                marginLeft: r.mL,
                                marginTop: r.mT
                            }));
                            var p = c.scrollLeft(),
                                d = c.scrollTop();
                            if (Math.abs(i.pageX - r.pX) > r.minMoveDistance || Math.abs(i.pageY - r.pY) > r.minMoveDistance) {
                                if ("drag" == r.kind) {
                                    if (r.inViewPort) {
                                        var u = Math.max(r.minMoveDistance - r.mL + p, r.X + i.pageX - r.pX),
                                            f = Math.max(r.minMoveDistance - r.mT + d, r.Y + i.pageY - r.pY);
                                        u = Math.min(u, r.vp.width - r.W - r.mL - r.minMoveDistance + p), f = Math.min(f, r.vp.height - r.H - r.mT - r.minMoveDistance + d)
                                    } else if (r.inViewElement) {
                                        var h = $(r.inViewElement),
                                            g = h.position(),
                                            m = h.width(),
                                            b = h.height(),
                                            u = Math.max(g.left, r.X + i.pageX - r.pX),
                                            f = Math.max(g.top, r.Y + i.pageY - r.pY);
                                        u = Math.min(u, g.left + m - r.W), f = Math.min(f, g.top + b - r.H)
                                    } else var u = r.X + i.pageX - r.pX,
                                        f = r.Y + i.pageY - r.pY;
                                    a = {
                                        left: u,
                                        top: f
                                    }
                                } else {
                                    if (r.inViewPort) {
                                        var v = Math.max(i.pageX - r.pX + r.W, 0),
                                            x = Math.max(i.pageY - r.pY + r.H, 0);
                                        v = Math.min(v, r.vp.width + p - r.mL - r.X - r.minMoveDistance), x = Math.min(x, r.vp.height + d - r.mT - r.Y - r.minMoveDistance)
                                    } else if (r.inViewElement) {
                                        var h = $(r.inViewElement),
                                            g = h.position(),
                                            y = r.X - g.left,
                                            w = r.Y - g.top,
                                            _ = r.W - r.RW,
                                            k = r.H - r.RH,
                                            v = Math.max(i.pageX - r.pX + r.W, 0),
                                            x = Math.max(i.pageY - r.pY + r.H, 0);
                                        v = Math.min(v, h.width() - y - _), x = Math.min(x, h.height() - w - k)
                                    } else var v = Math.max(i.pageX - r.pX + r.W, 0),
                                        x = Math.max(i.pageY - r.pY + r.H, 0);
                                    a = {
                                        width: v,
                                        height: x
                                    }
                                } if (n ? n.css(a) : e.css(a), o) {
                                    var C = void 0;
                                    l.left = a.left === C ? r.X : a.left, l.top = a.top === C ? r.Y : a.top, l.width = a.width === C ? r.W : a.width, l.height = a.height === C ? r.H : a.height, l.moveWidth = Math.abs(i.pageX - r.pX), l.moveHeight = Math.abs(i.pageY - r.pY), o(l)
                                }
                            }
                            return !1
                        }
                    },
                    u = function (c) {
                        e && (l.event = c, i ? (l.left = a.left || r.X, l.top = a.top || r.Y, l.width = a.width || r.RW, l.height = a.height || r.RH, l.moveWidth = Math.abs(c.pageX - r.pX), l.moveHeight = Math.abs(c.pageY - r.pY), i(l)) : e.css(a), n && n.remove(), a = {}, l = {}, r = {}, e = null, t = !1, n = null, i = null, o = null, $(s).unbind("mousemove", d).unbind("mouseup", u))
                    },
                    f = function (n, a) {
                        var c = a.handle ? $("string" == typeof a.handle ? "#" + a.handle : a.handle, n) : n;
                        if ("cancel" == a.type) {
                            var f = n.data("dragdrop_handler");
                            return void(f && (alert("取消绑定"), c.unbind("mousedown", f)))
                        }
                        var h = function (f) {
                            l = {
                                element: n,
                                handle: c,
                                event: f
                            }, i = a.onStop || null, o = a.onMove || null, e = n;
                            var h = {};
                            if ("absolute" == e.css("position")) {
                                try {
                                    h = e.position()
                                } catch (g) {}
                                var m = p("margin-left", 0),
                                    b = p("margin-top", 0)
                            } else {
                                h = {
                                    left: e.offset().left,
                                    top: e.offset().top
                                };
                                var m = 0,
                                    b = 0
                            }
                            return r = {
                                X: h.left || p("left", 0),
                                Y: h.top || p("top", 0),
                                W: e.outerWidth(),
                                H: e.outerHeight(),
                                RW: e.width(),
                                RH: e.height(),
                                pX: f.pageX,
                                pY: f.pageY,
                                kind: a.type,
                                mL: m,
                                mT: b,
                                zIndex: p("z-index", 0),
                                vp: GJ.getViewPort(),
                                inViewPort: a.inViewPort || !1,
                                inViewElement: a.inViewElement || null,
                                minMoveDistance: void 0 === a.minMoveDistance ? 5 : a.minMoveDistance
                            }, t = "boolean" != typeof a.useProxy || a.useProxy, ("function" != typeof a.onMouseDown || a.onMouseDown(l) !== !1) && ($(s).mousemove(d).mouseup(u), !1)
                        };
                        n.data("dragdrop_handler", h), c.bind("mousedown", h)
                    };
                return {
                    drag: function (e, t) {
                        var t = t || {};
                        t.type = "drag", f($(e), t)
                    }, resize: function (e, t) {
                        var t = t || {};
                        t.type = "resize", f($(e), t)
                    }, cancel: function (e, t) {
                        var t = {};
                        t.type = "cancel", f($(e), {
                            type: t
                        })
                    }
                }
            }(), $.fn.GJ_drag = function (e) {
                return this.each(function () {
                    GJ.DragDrop.drag(this, e)
                })
            }, $.fn.GJ_resize = function (e) {
                return this.each(function () {
                    GJ.DragDrop.resize(this, e)
                })
            })
        }()
    },
    function (e, t, n) {
        var i = n(13),
            o = n(3),
            r = {},
            a = function (e) {
                var t = {},
                    n = o(t);
                t.on = function () {
                    n.bind.apply(n, Array.prototype.slice.call(arguments))
                }, t.trigger = function () {
                    n.trigger.apply(n, Array.prototype.slice.call(arguments))
                }, t.off = function () {
                    n.unbind.apply(n, Array.prototype.slice.call(arguments))
                }, t.one = function () {
                    n.one.apply(n, Array.prototype.slice.call(arguments))
                }, t.id = GJ.guid();
                var a = {
                    containerId: "",
                    url: "",
                    scrolling: !1,
                    height: 0,
                    onLoad: null,
                    autoSetHeight: !1,
                    useBrowseCache: !1,
                    handlersForChild: {},
                    paramsForChild: {},
                    proxyUrl: "http://sta.ganji.com/crossdomain.html"
                };
                if (GJ.mix(e, a), t.$container = o("string" == typeof e.containerId ? "#" + e.containerId : e.containerId), !t.$container.size()) throw new Error("container not found");
                t.container = t.$container[0], e.autoSetHeight && (e.paramsForChild.autoSetHeight = !0);
                var l = {
                    helper: e.proxyUrl,
                    remote: e.url,
                    container: t.container,
                    isSameOrigin: !1,
                    props: {
                        style: {
                            border: 0,
                            frameSpacing: 0,
                            frameBorder: 0,
                            padding: 0,
                            margin: 0,
                            width: e.width ? e.width + "px" : "100%",
                            height: e.height ? e.height + "px" : "100%"
                        },
                        scrolling: e.scrolling ? "yes" : "no"
                    },
                    onReady: function () {
                        r[t.id] = l.iframe, t.childReady = t.loaded = !0, t.isSameDomain = l.isSameOrigin
                    }, method: {
                        getParams: function () {
                            return e.paramsForChild || {}
                        }, setParam: function (t, n) {
                            e.paramsForChild[t] = n
                        }, setIframeHeight: function (e) {
                            t.$container.css("height", parseInt(e)), o(t.iframe).css("height", parseInt(e)).css("height", "100%")
                        }, redirect: function (e) {
                            t.iframe.src = e
                        }, childReady: function () {
                            t.childReady = !0
                        }, parentReload: function () {
                            window.location.reload()
                        }, parentRedirect: function (e) {
                            window.location.href = e
                        }
                    }
                };
                return e.handlersForChild && GJ.each(e.handlersForChild, function (e, t) {
                    l.method[t] = e
                }), e.scrolling ? l.props.style.overflowX = "hidden" : l.props.style.overflow = "hidden", t.destroy = t.close = function () {
                    t.rpc.destroy()
                }, t.setParamForChild = function (t, n) {
                    e.paramsForChild[t] = n
                }, t.setHandlerForChild = function (e, n) {
                    t.rpc.set(e, n)
                }, t.callChildHandler = function (e) {
                    var n = [].slice.call(arguments, 1);
                    t.rpc(e, n)
                }, t.setScroll = function (e) {
                    return !GJ.ua.chrome && void o(l.iframe).attr("scrolling", e ? "yes" : "no")
                }, t.redirect = function (e) {
                    t.iframe.src = e
                }, t.rpc = new i(l), t.iframe = t.rpc.iframe, o(t.iframe).bind("load", function () {
                    o.isFunction(e.onLoad) && e.onLoad()
                }), t
            };
        GJ.createIframe = a, GJ.getIframe = function (e) {
            return r[e]
        }
    },
    function (module, exports, __webpack_require__) {
        __webpack_require__(32), __webpack_require__(17), __webpack_require__(16),
            function () {
                function PanelConfig(e, t) {
                    var n = this;
                    n.type = "panel", n.content = "", n.title = "", n.url = "", n.inline = !1, n.width = 0, n.height = 0, n.left = 0, n.top = 0, n.minWidth = 100, n.minHeight = 20, n.mask = !1, n.moveAble = !0, n.resizeAble = !0, n.closeAble = !0, n.refreshAble = !1, n.shadow = !0, n.showLoading = !0, n.iframeScrolling = !0, n.handleElement = null, n.iframe = !1, n.contextElement = null, n.contextPosition = "bottom", n.className = "", n.overClassName = "", n.handleElementClassName = "", n.style = "default", n.useText = !1, n.closeText = "关闭", n.refreshText = "刷新", n.submitButton = !1, n.submitText = "确定", n.cancelButton = !1, n.cancelText = "确定", n.checkShow = null, n.paramsForChild = {}, n.handlersForChild = {}, n.onInit = null, n.onBeforeShow = null, n.onLoad = null, n.onShow = null, n.onFocus = null, n.onSubmit = null, n.onCancel = null, n.onClose = null, n.onBeforeClose = null, n.onDragStop = null, n.onDragMove = null;
                    var t = t || {};
                    GJ.each(t, function (e, t) {
                        n[t] = e
                    }), "#" == n.url && (n.url = ""), n.inline && (n.width = "100%"), n.height = parseInt(n.height), n.left = parseInt(n.left), n.top = parseInt(n.top), n.minWidth = parseInt(n.minWidth), n.minHeight = parseInt(n.minHeight), n.style.indexOf("text") != -1 && (n.useText = !0), "alert" != n.type && "confirm" != n.type && "loading" != n.type || (n.mask = !0), "alert" != n.type && "confirm" != n.type || (n.resizeAble = !1, n.submitButton = !0, "confirm" == n.type && (n.cancelButton = !0)), GJ.mix(n.handlersForChild, {
                        setTitle: function (t) {
                            e.setTitle(t)
                        }, close: function (t) {
                            e.close(t)
                        }, resize: function (t, n) {
                            e.resize(t, n)
                        }, resetPlace: function () {
                            e.resetPlace()
                        }
                    }, !0)
                }
                if (!GJ.panel) {
                    var isFunc = GJ.isFunction,
                        doc = document,
                        $doc = $(doc),
                        ua = navigator.userAgent,
                        getJqObj = function (e) {
                            return GJ.isObject(e) ? $(e) : $("#" + e)
                        },
                        getScrollBarWidth = function () {
                            return 30
                        },
                        getContextXY = function (e, t, n, i) {
                            var o, r, a, l = {};
                            if (0 == e.length) return l;
                            if (r = {
                                    x: e.offset().left,
                                    y: e.offset().top,
                                    w: e.width(),
                                    h: e.height()
                                }, t && t.length > 0) o = {
                                x: t.offset().left,
                                y: t.offset().top,
                                w: t.width(),
                                h: t.innerHeight()
                            };
                            else {
                                if (!(i && i.x && i.y)) return l;
                                o = {
                                    x: i.x,
                                    y: i.y,
                                    w: 0,
                                    h: 0
                                }
                            }
                            return a = GJ.getViewPort(), n || (n = "bottom"), "bottom" == n ? (l.x = o.x, l.y = r.h + o.y + o.h > a.top + a.height && o.y - a.top > r.h ? o.y - r.h : o.y + o.h) : "right" == n ? (l.x = o.x + o.w + r.w > a.left + a.width && o.x - a.left > r.w ? o.x - r.w : o.x + o.w, l.y = o.y) : "left" == n ? (l.x = o.x - r.w < a.left && o.x - a.left < r.w ? o.x + o.w : o.x - r.w, l.y = o.y) : "top" == n && (l.x = o.x, l.y = o.y - a.top < r.h && a.height + a.top - o.y - o.h > r.h ? o.y + o.h : o.y - r.h), "bottom" != n && "top" != n || o.x + r.w > a.left + a.width && o.x + o.w - a.left > r.w && (l.x = o.x + o.w - r.w), "left" != n && "right" != n || r.h + o.y > a.top + a.height && o.y + o.h - a.top > r.h && (l.y = o.y + o.h - r.h), l
                        },
                        P = {
                            panels: {},
                            currId: 0,
                            zIndex: 3e6,
                            masks: {},
                            mask: null,
                            showCount: 0,
                            showMask: function (e) {
                                if (!P.masks[e]) {
                                    var t = $("<div></div>");
                                    $(doc.body).prepend(t), P.masks[e] = t
                                }
                                0 == P.showCount && ($("body").addClass("lpn_masked").css({
                                    overflowX: "hidden"
                                }), GJ.ua.gecko || $("html").css({
                                    overflowX: "hidden"
                                })), P.masks[e].addClass("lpn_mask").css({
                                    left: 0,
                                    top: 0,
                                    height: $doc.height()
                                }).show(), P.showCount++
                            }, hideMask: function (e) {
                                P.masks[e] && (P.masks[e].hide(), P.showCount > 0 && P.showCount--, 0 == P.showCount && ($("body").removeClass("lpn_masked").css({
                                    overflow: ""
                                }), GJ.ua.gecko || $("html").css({
                                    overflow: ""
                                })))
                            }, setMaskZIndex: function (e, t) {
                                P.masks[e] && !isNaN(t) && P.masks[e].css("z-index", t)
                            }, setPlace: function (e, t) {
                                var n = getJqObj(e);
                                if (t.contextElement || t.left && t.top) {
                                    var i = {};
                                    t.contextElement ? i = getContextXY(n, getJqObj(t.contextElement), t.contextPosition || "bottom") : t.left && t.top && (i = getContextXY(n, null, null, {
                                        x: t.left,
                                        y: t.top
                                    })), i.x && i.y && n.css({
                                        left: i.x,
                                        top: i.y
                                    })
                                } else if (t.mask) {
                                    var o = t.left ? 0 : -Math.round(n.width() / 2) + $doc.scrollLeft(),
                                        r = t.top ? 0 : -Math.round(n.height() / 2) + $doc.scrollTop();
                                    n.css({
                                        top: t.top || "50%",
                                        left: t.left || "50%",
                                        marginLeft: o,
                                        marginTop: r
                                    })
                                } else {
                                    var i = GJ.getViewPort(),
                                        a = t.left || i.left + Math.round((i.width - n.width()) / 2),
                                        l = t.top || i.top + Math.round((i.height - n.height()) / 2);
                                    n.css({
                                        top: Math.max(0, l),
                                        left: Math.max(0, a)
                                    })
                                }
                            }, popup: function (e) {
                                var t = getJqObj(e.elementId),
                                    n = !1,
                                    i = !0,
                                    o = P.zIndex += 2,
                                    r = GJ.guid(),
                                    a = !!GJ.isUndefined(e.autoHide) || e.autoHide,
                                    l = function (e) {
                                        var n = e.target,
                                            i = !1;
                                        if (n != t[0]) {
                                            do n = $(n).parent()[0], n == t[0] && (i = !0); while (n != doc);
                                            i || c()
                                        }
                                    },
                                    s = function (s, c) {
                                        if (a && $(doc).unbind("click", l), 0 == t.size()) return !1;
                                        if (!n) {
                                            n = !0;
                                            var p = {
                                                position: "absolute",
                                                zIndex: o
                                            };
                                            e.width && (p.width = e.width), e.height && (p.height = e.height), t.css(p)
                                        }
                                        e.mask && (P.showMask(r), P.setMaskZIndex(r, o - 1)), P.setPlace(t, {
                                            contextElement: e.contextElement || null,
                                            contextPosition: e.contextPosition || "bottom",
                                            left: c || e.left || null,
                                            top: s || e.top || null,
                                            mask: e.mask || !1
                                        }), t.show(), i = !1, a && GJ.later(function () {
                                            $(doc).bind("click", l)
                                        }, 200)
                                    },
                                    c = function () {
                                        return 0 != t.size() && (e.mask && P.hideMask(r), t.hide(), i = !0, void(a && $(doc).unbind("click", l)))
                                    },
                                    p = function () {
                                        i === !1 ? c() : s()
                                    };
                                return {
                                    show: s,
                                    close: c,
                                    toggle: p
                                }
                            }, getPanel: function (e) {
                                var t = P.panels;
                                if (e) return GJ.isObject(e) && e.id && t[e.id] ? t[e.id] : GJ.isString(e) && t[e] ? t[e] : null;
                                var n, i = 0,
                                    o = {
                                        panel: 1,
                                        alert: 1,
                                        confirm: 1,
                                        dropdown: 1,
                                        loading: 1
                                    };
                                return GJ.each(t, function (e) {
                                    e && e.config.type in o && e.zIndex > i && e.isHide === !1 && (n = e, i = e.zIndex)
                                }), n
                            }, alert: function (e) {
                                var t = GJ.guid(),
                                    n = P.getPanel(t),
                                    i = GJ.mix({
                                        onSubmit: null,
                                        onClose: null,
                                        checkShow: null
                                    }, e || {}, !0);
                                return n || (n = new Panel({
                                    type: "alert",
                                    mask: !0,
                                    height: 0,
                                    id: t,
                                    width: i.width || 400,
                                    content: i.content || "no message",
                                    style: i.style || "default",
                                    title: i.title || "信息提示",
                                    submitText: i.submitText || "确定"
                                }), n.wrapper.append('<div class="lpn_icon lpn_' + (i.iconClass || "alert") + '"></div>')), GJ.mix(n.config, i, !0), n.setContent(i.content || "no message"), isFunc(i.checkShow) && !i.checkShow() || n.show(), n
                            }, confirm: function (e) {
                                var t = GJ.guid(),
                                    n = P.getPanel(t),
                                    i = GJ.mix({
                                        onSubmit: null,
                                        onCancel: null,
                                        onClose: null,
                                        checkShow: null
                                    }, e || {}, !0);
                                return n || (n = new Panel({
                                    type: "confirm",
                                    mask: !0,
                                    height: 0,
                                    id: t,
                                    width: i.width || 400,
                                    content: i.content || "no message",
                                    style: i.style || "default",
                                    title: i.title || "信息提示",
                                    submitText: i.submitText || "确定",
                                    cancelText: i.cancelText || "取消"
                                }), n.wrapper.append('<div class="lpn_icon lpn_' + (i.iconClass || "confirm") + '"></div>')), GJ.mix(n.config, i, !0), n.setContent(i.content || "no message"), isFunc(i.checkShow) && !i.checkShow() || n.show(), n
                            }, loading: function (e) {
                                var t = "lpn_panel_loading",
                                    n = P.getPanel(t),
                                    i = GJ.mix({
                                        checkShow: null
                                    }, e || {}, !0);
                                return n || (n = new Panel({
                                    title: "",
                                    closeAble: !1,
                                    moveAble: !1,
                                    resizeAble: !1,
                                    type: "loading",
                                    mask: !0,
                                    content: i.content || "",
                                    width: i.width || 300,
                                    height: 0,
                                    id: t
                                }), n.wrapper.append('<div class="lpn_icon"></div>')), GJ.mix(n.config, i, !0), n.setContent(i.content || "no message"), isFunc(i.checkShow) && !i.checkShow() || n.show(), n
                            }, tooltip: function (e) {
                                var e = e || {},
                                    t = getJqObj(e.handleElement || "");
                                if (!t) return !1;
                                var n = e.title || t.attr("title");
                                if (!n) return !1;
                                t.attr("title", "").addClass(e.handleElementClassName || "lpn_panel_tooltip_el");
                                var i = "lpn_panel_tooltip",
                                    o = P.getPanel(i);
                                if (!o) {
                                    var e = {
                                        content: n,
                                        width: e.width || 0,
                                        type: "tooltip",
                                        handleElement: t,
                                        resizeAble: !1,
                                        moveAble: !1,
                                        closeAble: !1,
                                        id: i
                                    };
                                    o = new Panel(e)
                                }
                                return t.hover(function (t) {
                                    return !(isFunc(e.checkShow) && !e.checkShow()) && (o.config.width = e.width || 0, o.setContent(n), o.config.left = t.pageX + 20, o.config.top = t.pageY + 10, void o.show().resetPlace())
                                }, function () {
                                    o.close()
                                }), o
                            }, panel: function (e) {
                                e.id || (e.id = GJ.guid());
                                var t = new Panel(e);
                                return isFunc(e.checkShow) && !e.checkShow() || t.show(), t
                            }, dropdown: function (e) {
                                var t = getJqObj(e.handleElement || "");
                                if (!t) return !1;
                                var n, i = !1,
                                    o = !1,
                                    r = null,
                                    a = null;
                                e.handleElement = t, e.type = "dropdown", e.resizeAble = !!e.resizeAble, e.moveAble = !!e.moveAble, e.closeAble = !!e.closeAble, e.contextElement = e.contextElement || t, e.contextPosition = e.contextPosition || "bottom", e.id || (e.id = GJ.guid());
                                var l = function () {
                                        r && (clearTimeout(r), r = null), a && (clearTimeout(a), a = null)
                                    },
                                    s = function (r) {
                                        return !(isFunc(e.checkShow) && !e.checkShow()) && (n || (n = new Panel(e), n.panel.hover(function () {
                                                n.show(), i = !0, l()
                                            }, function () {
                                                i = !1, a = setTimeout(function () {
                                                    o || n.close()
                                                }, 100)
                                            })), n.show().resetPlace(), n.config.overClassName && t.addClass(n.config.overClassName), o = !0, void l())
                                    },
                                    c = function () {
                                        return !(isFunc(e.checkShow) && !e.checkShow()) && (!!n && (o = !1, void(r = setTimeout(function () {
                                                i || n.close()
                                            }, 100))))
                                    };
                                "click" == e.mouseType ? (t.click(function (e) {
                                    return s(e), !1
                                }), t.mouseout(c)) : t.hover(s, c)
                            }, context: function (e) {
                                var t = getJqObj(e.handleElement || "");
                                if (!t) return !1;
                                var n;
                                e = $.extend(e || {}, {
                                    type: "context",
                                    resizeAble: !1,
                                    moveAble: !1,
                                    closeAble: !1
                                }), e.id || (e.id = GJ.guid());
                                var i = function () {
                                    n && n.close(), $doc.unbind("mousedown", i)
                                };
                                t.bind("contextmenu", function (t) {
                                    return !(isFunc(e.checkShow) && !e.checkShow()) && (n || (n = new Panel(e)), n.config.left = t.pageX + 10, n.config.top = t.pageY, n.resetPlace().show(), $doc.bind("mousedown", i), !1)
                                }), t.bind("mousedown", function (e) {
                                    return !1
                                })
                            }, module: function (e) {
                                e.inline = !0, e.type = "module", e.moveAble = !!e.moveAble;
                                var t = new Panel(e);
                                return t.show(), t
                            }, closePanel: function (e, t) {
                                var n = P.getPanel(e);
                                n && n.close(t)
                            }
                        };
                    GJ.mix(GJ, {
                        popup: P.popup,
                        getPanel: P.getPanel,
                        alert: P.alert,
                        confirm: P.confirm,
                        loading: P.loading,
                        tooltip: P.tooltip,
                        panel: P.panel,
                        dropdown: P.dropdown,
                        context: P.context,
                        module: P.module,
                        closePanel: P.closePanel
                    });
                    var getParams = function (obj, p, type) {
                        var o = {},
                            title, url, rel, rels, cla;
                        obj = $(obj), (title = obj.attr("title")) && (o.title = title), (url = obj.attr("href")) && (o.url = url), "module" == type && (cla = obj.attr("class")) && (o.className = cla);
                        var rel = obj.attr("rel");
                        return rel && (rels = rel.split(/&amp;|&/), $.each(rels, function (i, v) {
                            vs = v.split("="), /^([\d\.+\-]+|true|false|null|undefined)$/i.test(vs[1]) || (vs[1] = '"' + vs[1] + '"'), vs[0] && eval("o." + vs[0] + "=" + vs[1])
                        })), p && (o = $.extend(o, p)), o
                    };
                    $.fn.extend({
                        GJ_panel: function (e) {
                            return this.each(function () {
                                var t = getParams(this, e);
                                $(this).click(function () {
                                    return P.panel(t), this.blur(), !1
                                })
                            })
                        }, GJ_module: function (e) {
                            return this.each(function () {
                                var t = getParams(this, e, "module"),
                                    n = $(this).attr("id");
                                t.id = n, P.module(t)
                            })
                        }, GJ_dropdown: function (e) {
                            return this.each(function () {
                                var t = getParams(this, e);
                                t.handleElement = this, P.dropdown(t)
                            })
                        }, GJ_tooltip: function (e) {
                            return this.each(function () {
                                var t = getParams(this, e);
                                t.handleElement = this, P.tooltip(t)
                            })
                        }, GJ_context: function (e) {
                            return this.each(function () {
                                var t = getParams(this, e);
                                t.handleElement = this, P.context(t)
                            })
                        }
                    }), $("body").keydown(function (e) {
                        if (27 == e.which) {
                            var t = P.getPanel();
                            if (!t || !t.config.closeAble) return;
                            t.close()
                        }
                    });
                    var _getStyleClassName = function (e) {
                            return e ? "lpn_panel_" + e : ""
                        },
                        _getFullUrl = function (e) {
                            return e ? e + (e.indexOf("?") == -1 ? "?" : "&") + "&random=" + ((new Date).getTime() + Math.random()) : ""
                        },
                        Panel = function (e) {
                            var t = this,
                                e = e || {};
                            return t.id = e.id || GJ.guid(), P.panels[t.id] ? P.panels[t.id] : (P.panels[t.id] = t, t.config = new PanelConfig(t, e), t._styleClassName = _getStyleClassName(t.config.style), t._w = 0, t._h = 0, t.panel = null, t.underlay = null, t.wrapper = null, t.iframeObj = null, t.canvas = null, t._canvas = null, t.hd = null, t.bd = null, t.ft = null, t.btnGroup = null, t.btnClose = null, t.btnRefresh = null, t.loader = null, t.headerBtnGroup = null, t.zIndex = 0, t.isHide = null, t.loaded = !1, t.error = "", t.btnGroupWidth = 0, t.generate(), void(e.top && $(".lpn_panel").css("top", e.top)))
                        };
                    Panel.prototype = {
                        generate: function () {
                            var e, t, n = this,
                                i = n.config,
                                o = $("#" + n.id);
                            o.size() > 0 && ((e = $(".hd", o)).size() > 0 && (i.title = e.get(0)), (t = $(".bd", o)).size() > 0 && (i.content = t.get(0))), n.setContent(i.content), n.panel = $("<div></div>"), n.panel.addClass("lpn_panel").addClass("lpn_panel_" + i.type).data("id", n.id), n._styleClassName && n.panel.addClass(n._styleClassName), i.className && n.panel.addClass(i.className), i.inline && n.panel.addClass("lpn_inline"), n.iframeBg = null, GJ.ua.ie < 7 && (n.iframeBg = $("<iframe></iframe>"), n.iframeBg.attr({
                                border: 0,
                                frameSpacing: 0,
                                frameBorder: 0,
                                scrolling: "no"
                            }).addClass("lpn_iframe_bg"), n.panel.append(n.iframeBg)), n.wrapper = $("<div></div>"), n.wrapper.attr("id", n.id).addClass("lpn_wrapper"), n.panel.append(n.wrapper), n.canvas = $("<div></div>"), n.canvas.addClass("lpn_canvas"), n.wrapper.append(n.canvas), i.inline ? (o.after(n.panel), o.remove()) : ($("body").prepend(n.panel), o && o.length > 0 && o.remove()), i.shadow && n.showShadow(), i.submitButton && n.addSubmitButton(), i.cancelButton && n.addCancelButton(), i.resizeAble && n.setResizeAble(), i.title && n.setTitle(i.title), n.setCloseAble(i.closeAble), n.setRefreshAble(i.refreshAble), n.setMoveAble(), isFunc(i.onInit) && i.onInit.call(n)
                        }, generateHeader: function () {
                            this.hd || (this.hd = $("<div></div>"), this.hd.addClass("hd").html("窗口"), this.canvas.before(this.hd))
                        }, generateFooter: function () {
                            this.ft || (this.ft = $("<div></div>"), this.ft.addClass("ft"), this.canvas.after(this.ft))
                        }, generateButtonGroup: function () {
                            this.generateFooter(), this.btnGroup || (this.btnGroup = $("<div></div>"), this.btnGroup.addClass("lpn_button_group"), this.ft.append(this.btnGroup))
                        }, addSubmitButton: function () {
                            var e = this,
                                t = e.config;
                            e.generateButtonGroup();
                            var n = $('<button class="lpn_submit" type="button"></button>'),
                                i = function () {
                                    e.close(0), isFunc(t.onSubmit) && t.onSubmit.call(e)
                                };
                            return e.btnGroup.append(n), n.html(t.submitText).bind("click", i).bind("keypress", function (e) {
                                13 == e.keyCode && i()
                            }), this
                        }, addCancelButton: function () {
                            var e = this,
                                t = e.config;
                            e.generateButtonGroup();
                            var n = $('<button type="button"></button>');
                            return e.btnGroup.append(n), n.html(t.cancelText).bind("click", function () {
                                e.close(), isFunc(t.onCancel) && t.onCancel.call(e)
                            }), this
                        }, addHeaderButton: function (e, t) {
                            var n = this,
                                i = 3,
                                o = $(e),
                                r = n.headerBtnGroup;
                            return n.generateHeader(), r || (r = $("<div></div>"), r.addClass("lpn_ctrl_group"), n.wrapper.append(r), n.headerBtnGroup = r), r.css("width", 500), o.bind("focus", function () {
                                this.blur()
                            }), r.append(o), o.css("marginLeft", i), n.btnGroupWidth += i + o.outerWidth(!0), r.css("width", n.btnGroupWidth), isFunc(t) && o.bind("click", function (e) {
                                return t.call(n, e), !1
                            }), o
                        }, setCloseAble: function (e, t) {
                            var n = this,
                                i = n.config;
                            return "boolean" == typeof e && (i.closeAble = e), GJ.isValue(t) && (i.closeText = t), i.closeAble ? (n.btnClose || (n.btnClose = n.addHeaderButton($('<a class="lpn_close" href="#">' + (i.useText && i.closeText || "&nbsp;") + "</a>"), n.close)), n.btnClose.show()) : n.btnClose && n.btnClose.hide(), this
                        }, setRefreshAble: function (e, t) {
                            var n = this,
                                i = n.config;
                            return i.url ? ("boolean" == typeof e && (i.refreshAble = e), GJ.isValue(t) && (i.refreshText = t), i.refreshAble ? (n.btnRefresh || (n.btnRefresh = n.addHeaderButton($('<a class="lpn_refresh" href="#">' + (i.useText && i.refreshText || "&nbsp;") + "</a>"), n.doRefresh)), n.btnRefresh.show()) : n.btnRefresh && n.btnRefresh.hide(), this) : this
                        }, setResizeAble: function () {
                            var e = this,
                                t = e.config;
                            e.generateFooter();
                            var n = $("<div></div>");
                            return n.addClass("lpn_resize_br"), e.ft.append(n), e.panel.GJ_resize({
                                handle: n,
                                useProxy: !0,
                                onStop: function (t) {
                                    e.resizePanel(t.width, t.height), e.focus()
                                }, inViewPort: t.mask
                            }), this
                        }, setMoveAble: function (e) {
                            var t = this,
                                n = t.config;
                            return "boolean" == typeof e && (n.moveAble = e), n.moveAble ? (t.panel.addClass("lpn_hd_move"), t.hd && t.panel.GJ_drag({
                                handle: t.hd,
                                useProxy: !0,
                                onStop: function (e) {
                                    isFunc(n.onDragStop) ? n.onDragStop.call(t, e) : (t.moveBy(e.left, e.top), t.focus())
                                }, onMove: function (e) {
                                    isFunc(n.onDragMove) && n.onDragMove.call(t, e)
                                }, inViewPort: n.mask,
                                onMouseDown: function (e) {
                                    return n.moveAble
                                }
                            })) : t.panel.removeClass("lpn_hd_move"), this
                        }, showShadow: function () {
                            var e = this,
                                t = e.config;
                            return t.shadow = !0, t.inline || (e.underlay || (e.underlay = $("<div></div>"), e.underlay.addClass("lpn_underlay"), e.wrapper.before(e.underlay)), e.underlay.show()), e
                        }, setTitle: function (e) {
                            var t = this,
                                n = t.config;
                            return t.generateHeader(), e = e || t.config.title, n.title = e, "object" == typeof e ? (t.hd.replaceWith(e), t.hd = $(e)) : "string" == typeof e && "" != e && t.hd.html(e), this
                        }, setUrl: function (e, t) {
                            if (e) {
                                var n = this,
                                    i = n.config;
                                i.url = e, i.content = "", n.loaded = !1, GJ.isBoolean(t) && (i.iframe = t), n.isHide === !1 && n.loadContent()
                            }
                            return this
                        }, setContent: function (e) {
                            var t = this,
                                n = t.config;
                            if (e)
                                if ("string" == typeof e) n.content = e;
                                else {
                                    var i = $(e),
                                        o = i.get(0);
                                    "object" == typeof o ? n.content = o : n.content = null
                                }
                            return n.content && (n.url = null, n.iframe = !1, t.loaded = !1, t.isHide === !1 && t.loadContent()), this
                        }, loadContent: function () {
                            var e = this,
                                t = e.config;
                            return e.loaded ? this : (e.loaded = !0, t.url && "#" != t.url || t.content || "loading" == t.type ? (e.error = "", t.url && t.iframe ? (e.bd && (e.bd.remove(), delete e.bd), t.width || (e._w = 320), t.height || (e._h = 200), e.resizePanel(), e.showLoading(), e.iframeObj ? e.iframeObj.redirect(t.url) : (e.iframeObj = GJ.createIframe({
                                containerId: e.canvas,
                                url: t.url,
                                scrolling: t.iframeScrolling,
                                proxyUrl: t.proxyUrl || "http://sta.ganji.com/crossdomain.html",
                                onLoad: function () {
                                    e.hideLoading(), "alert" != t.type && "confirm" != t.type && isFunc(t.onLoad) && t.onLoad.call(e)
                                }, autoSetHeight: t.autoSetHeight || !1,
                                useBrowseCache: !1,
                                paramsForChild: t.paramsForChild,
                                handlersForChild: t.handlersForChild
                            }), e.iframeObj.rpc.set("setIframeHeight", function (t) {
                                e.resizePanel(0, t)
                            }), e.iframeObj.iframe.focus())) : (e.iframeObj && (e.iframeObj.destroy(), e.iframeObj = null), e.bd || (e.bd = $("<div></div>"), e.bd.addClass("bd"), e.canvas.append(e.bd)), t.width < 1 && (e._canvas || (e._canvas = $('<div class="' + e._styleClassName + " lpn_tmp_canvas " + t.className + '"></div>'), $("body").prepend(e._canvas)), e._canvas.append(e.bd)), t.url ? (e.showLoading(), e.bd.load(_getFullUrl(t.url), null, function () {
                                t.width < 1 && e._setTmpSize().canvas.css("height", "auto").append(e.bd), e.hideLoading().resizePanel(), t.onLoad && t.onLoad.call(e)
                            })) : ("object" == typeof t.content ? (e.bd.remove(), delete e.bd, t.width < 1 ? e._canvas.get(0).appendChild($(t.content).get(0)) : e.canvas.get(0).appendChild($(t.content).get(0)), e.bd = $(t.content), e.bd.addClass("bd")) : "string" == typeof t.content && e.bd.html(t.content), t.width < 1 && e._setTmpSize().canvas.css("height", "auto").append(e.bd)), e.resizePanel()), this) : (e.error = "No content or URL ", alert(e.error), this))
                        }, _setTmpSize: function () {
                            var e = this,
                                t = e.config;
                            return e._w = e._canvas.outerWidth(!0), "tooltip" == t.type && e._w > 350 && (e._w = 350), this
                        }, show: function () {
                            if (this.error) return this;
                            var e = this,
                                t = e.config;
                            if (e.isHide === !1) return e.focus();
                            if ("alert" != t.type && "confirm" != t.type && isFunc(t.onBeforeShow) && t.onBeforeShow.call(e), e.isHide = !1, t.url && (e.loaded = !1), GJ.ua.ie && 0 === $("#panelHideInput").length) {
                                var n = $('<input type="text" id="panelHideInput" style="position:absolute; top:0; left:-20000px;"/>');
                                $(doc.body).prepend(n)
                            }
                            var i = function () {
                                e.panel.show(), e.loadContent(), e.focus(), "alert" != t.type && "confirm" != t.type && isFunc(t.onShow) && t.onShow.call(e)
                            };
                            return t.mask ? (P.showMask(e.id), P.setMaskZIndex(e.id, e.zIndex - 1), i()) : i(), e
                        }, focus: function () {
                            if (this.error) return this;
                            var e = this,
                                t = e.config,
                                n = $('<input type="hidden" style="top:-1000px;left:-1000px;" />');
                            e.wrapper.append(n), n.focus().remove(), n = null;
                            try {
                                $(".lpn_submit", e.panel).focus()
                            } catch (i) {}
                            return P.currId = e.id, t.inline || (e.zIndex = P.zIndex += 2, e.panel.css("z-index", e.zIndex), t.mask && P.setMaskZIndex(e.id, e.zIndex - 1)), "alert" != t.type && "confirm" != t.type && isFunc(t.onFocus) && t.onFocus.call(e), e
                        }, _closeTimer: null,
                        close: function (e) {
                            function t() {
                                n.isHide || i.onBeforeClose && !i.onBeforeClose.call(n) || (n.isHide = !0, n.panel.hide(), P.hideMask(n.id), i.handleElement && i.overClassName && i.handleElement.removeClass(i.overClassName), i.url && (n.iframeObj ? (n.iframeObj.destroy(), n.iframeObj = null) : n.bd && n.bd.html("")), isFunc(i.onClose) && i.onClose.call(n))
                            }
                            var n = this;
                            if (GJ.ua.ie && $("#panelHideInput").focus(), n._closeTimer && (n._closeTimer.cancel(), n._closeTimer = null), n.error || n.isHide) return n;
                            var i = n.config;
                            return e = GJ.isNumber(e) ? parseInt(e) : 0, 0 == e ? t() : n._closeTimer = GJ.later(function () {
                                t()
                            }, 1e3 * e), n
                        }, showLoading: function () {
                            return this.error ? this : (this.config.url && (this.loader || (this.loader = $("<div></div>"), this.loader.addClass("lpn_load").html("&nbsp;"), this.wrapper.append(this.loader)), this.loader.show()), this)
                        }, hideLoading: function () {
                            return this.error ? this : (this.loader && this.loader.hide(), this)
                        }, doRefresh: function () {
                            if (this.error) return this;
                            var e = this,
                                t = e.config;
                            return t.url ? (e.iframeObj ? (e.showLoading(), e.iframeObj.load()) : (e.showLoading(), e.bd.load(_getFullUrl(t.url), function () {
                                e.hideLoading()
                            })), e) : e
                        }, moveBy: function (e, t) {
                            if (this.error) return this;
                            var n = this;
                            return n.panel.css({
                                left: e,
                                top: t
                            }), this
                        }, setUnderlaySize: function () {
                            if (this.error) return this;
                            var e = this.underlay,
                                t = this.wrapper;
                            if (e) {
                                var n = -(parseInt(e.css("marginTop") || 0) + parseInt(e.css("marginBottom") || 0)),
                                    i = -(parseInt(e.css("marginLeft") || 0) + parseInt(e.css("marginRight") || 0));
                                e.css({
                                    width: t.outerWidth(!0) + i,
                                    height: t.outerHeight(!0) + n
                                })
                            }
                            this.iframeBg && this.iframeBg.css({
                                width: t.outerWidth(!0),
                                height: t.outerHeight(!0)
                            })
                        }, resize: function (e, t) {
                            return this.resizePanel(e, t, !0)
                        }, resizePanel: function (e, t, n) {
                            if (this.error) return this;
                            var i = this,
                                o = i.config,
                                r = (i.panel, i.wrapper.outerWidth(!0) - i.canvas.outerWidth(!0)),
                                a = i.wrapper.outerHeight(!0) - i.canvas.outerHeight(!0);
                            o.inline && (e = "100%"), GJ.isNumber(e) && (i._w = e), GJ.isNumber(t) && (i._h = t, n || (i._h -= a));
                            var l, s, c = GJ.getViewPort();
                            return l = i._w > 0 ? i._w : o.width, o.inline || (n && (l += r, o.url && o.iframe && o.iframeScrolling && (l += getScrollBarWidth())), l > c.width - 30 && (l = c.width - 30), l < o.minWidth && (l = o.minWidth)), i.panel.css("width", l), s = i._h > 0 ? i._h : o.height - a, s > 0 && (s < o.minHeight && (s = o.minHeight), i.canvas.css("height", s)), i.setUnderlaySize(), setTimeout(function () {
                                i.resetPlace()
                            }, 0), i._w = 0, i._h = 0, i
                        }, resetPlace: function () {
                            var e = this.config,
                                t = this.panel;
                            return P.setPlace(t, {
                                contextElement: e.contextElement,
                                contextPosition: e.contextPosition,
                                left: e.left,
                                top: e.top,
                                mask: e.mask
                            }), this
                        }, useIframe: function (e) {
                            return this.config.iframe = !!e, this
                        }, setStyle: function (e) {
                            var t = this,
                                n = t.panel,
                                i = t._styleClassName;
                            return n && (i && n.removeClass(i), e && (t._styleClassName = _getStyleClassName(e), n.addClass(i)), t.setUnderlaySize()), t
                        }
                    }
                }
            }()
    },
    function (e, t, n) {
        var i = n(7),
            o = n(15);
        t.hoverWidget = i.define({
            events: {},
            init: function (e) {
                var t = $(e.$el),
                    n = null;
                t.mouseenter(function () {
                    t.hasClass("js_brands_index") && "block" === $(".gj_sys_autoc_rs").css("display") && ($(".gj_sys_autoc_rs").hide(), $(".js_search_input_index").blur()), n = setTimeout(function () {
                        t.addClass("active")
                    }, 300)
                }).mouseleave(function () {
                    clearTimeout(n), t.removeClass("active")
                })
            }
        }), t.autoInput = i.define({
            events: {},
            init: function (e) {
                function t(t, s) {
                    var c = new o({
                        $input: n,
                        data: s,
                        maxItemsToShow: i,
                        filterHandler: function (e, t) {
                            var n = [];
                            return e = e.replace(" ", "").toLowerCase(), $.each(t, function (t, i) {
                                0 !== i.pinyin.toLowerCase().indexOf(e.toLowerCase()) && 0 !== i.firstChar.indexOf(e.toLowerCase()) && 0 !== i.text.toLowerCase().indexOf(e) || "" !== i.url && n.push(i)
                            }), n
                        }, defaultDataHandler: function (e) {
                            e(s)
                        }, formatItem: function (e) {
                            return e.url ? e.text : "<span class='hot-tip'>" + e.text + "</span>"
                        }
                    });
                    c.on("itemSelect", function (e) {
                        window.tracker.send({
                            tracking_type: "submit",
                            eventid: "0020070000000022",
                            target: "搜索",
                            value: e.text
                        }), e.url && ("_blank" === a ? window.open(r + e.url + "?" + l) : window.location.href = e.url, n.val(e.text))
                    });
                    var p = function () {
                            d()
                        },
                        d = function () {
                            var e = n.val(),
                                t = $("input[name=hiddenCity]").val(),
                                i = "/" + t + "/buy/";
                            e && (e = e.substr(0, 30), i = i + "_" + e + "/", "_blank" == a ? window.open(i + "?" + l + "&input=1") : window.location.href = i + "?input=1")
                        };
                    e.$el.find("button").on("click", p), n.on("keypress", function (e) {
                        13 === e.keyCode && c.active === -1 && (_hmt.push(["_trackEvent", "input", "enter", "index_fastpick_input_enter", 0]), p())
                    }), $(t).val() && c.showResults()
                }
                var n = e.$keywordInput,
                    i = e.defaultCount || 10,
                    r = n.data("domain") || "",
                    a = n.data("target") || "_self",
                    l = n.data("ca") || "";
                n.data("ca") || "";
                n.one("focus", function () {
                    var e = this,
                        i = new Date,
                        o = "" + i.getFullYear() + i.getMonth() + i.getDate(),
                        r = JSON.parse(localStorage.getItem("search_support_data_pc")),
                        a = r && r.time ? r.time : "",
                        l = r && r.data ? r.data : "";
                    a == o && "" != l ? ($(".dataSourceButton").data("source", l), t(e, l)) : $.ajax({
                        type: "GET",
                        url: "/" + n.data("domain") + "/ajax/?act=getSearchSuggestion",
                        success: function (n) {
                            $(".dataSourceButton").data("source", n), t(e, n);
                            var i = {};
                            i.time = o, i.data = n, localStorage.setItem("search_support_data_pc", JSON.stringify(i))
                        }
                    })
                }), n.on("blur", function () {
                    window.tracker.send({
                        tracking_type: "input",
                        eventid: "0020070000000022",
                        target: "搜索",
                        value: $(this).val()
                    })
                })
            }
        })
    },
    function (e, t, n) {
        t = e.exports = n(2)(), t.push([e.id, "a,abbr,acronym,address,applet,b,big,blockquote,body,caption,center,cite,code,dd,del,dfn,div,dl,dt,em,fieldset,font,form,h1,h2,h3,h4,h5,h6,html,i,iframe,img,ins,kbd,label,legend,li,object,ol,p,pre,q,s,samp,small,span,strike,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,tt,u,ul,var{margin:0;padding:0;border:0;outline:0}li,ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}:focus{outline:0}del{text-decoration:line-through}table{border-collapse:collapse;border-spacing:0}address,cite,code,dfn,em,i,var{font-style:normal}button,input[type=button],input[type=reset],input[type=submit]{cursor:pointer;-webkit-appearance:none}.vm{vertical-align:middle}.clearfix:after{content:\" \";display:block;clear:both;height:0;visibility:hidden}*+html .clearfix,* html .clearfix{zoom:1}.fl{float:left}.fr{float:right}body{background:#fff}body,button,input,select,textarea{font:12px/1.5 arial,helvetica,clean,sans-serif}a{text-decoration:none;color:#24d}a:hover{text-decoration:underline;color:#c00}", ""])
    },
    function (e, t, n) {
        t = e.exports = n(2)(), t.push([e.id, ".gj_sys_autoc_rs{display:none;padding:0;margin:0;z-index:9998;border:1px solid #ccc;box-shadow:2px 2px 3px #eee;background-color:#fff;color:#000;padding:1px;overflow:auto;position:absolute;text-align:left;_overflow-x:hidden}.gj_sys_autoc_rs_iframe{position:absolute;top:0;left:0;z-index:9997;border:0;padding:0;margin:0;display:none}.gj_sys_autoc_rs ul{padding:3px;margin:0}.gj_sys_autoc_rs ul,.gj_sys_autoc_rs ul li{list-style:none outside none;color:#000;border:0}.gj_sys_autoc_rs ul li{padding:1px 6px;cursor:pointer;font-size:12px;line-height:18px;height:18px;overflow:hidden;float:none}.gj_sys_autoc_rs span{padding:0;margin:0;border:0}.gj_sys_autoc_rs .bold{font-weight:700}.gj_sys_autoc_rs .fr{color:#838383;float:right}.gj_sys_autoc_ov .fr{color:#fff}.gj_sys_autoc_ov{background-color:#245bdf;color:#fff}.gj_sys_autoc_ov div,.gj_sys_autoc_ov span{color:#fff}", ""])
    },
    function (e, t, n) {
        t = e.exports = n(2)(), t.push([e.id, '.lpn_masked{position:static}.lpn_inline{position:static!important}.lpn_place_proxy{border:1px dotted red;display:none;margin-bottom:10px}.lpn_hd_move .hd{cursor:move}.lpn_fixed{position:fixed!important}.lpn_mask{position:absolute;width:100%;height:100%;top:0;left:0;margin:0;padding:0;background-color:#000;opacity:.4;filter:alpha(opacity=40);-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=40)"}.lpn_panel{left:-3000px;top:-3000px;visibility:visible;position:absolute}.lpn_panel form{margin:0;padding:0}.lpn_panel select{_visibility:inherit}.lpn_canvas{*zoom:1;*position:relative;padding:0;margin:0;overflow:auto;width:100%}.lpn_canvas iframe{vertical-align:middle;+vertical-align:top}.lpn_tmp_canvas{float:left;overflow:visible;width:auto;left:-10000px}.lpn_iframe_bg{position:absolute;border:0;padding:0;margin:0;display:\'block\'}.lpn_wrapper{visibility:inherit;left:0;top:0}.lpn_panel .ft,.lpn_panel .hd,.lpn_wrapper{position:relative;*zoom:1}.lpn_panel .hd{overflow:hidden;white-space:nowrap}.lpn_panel .hd{font-size:12px;font-weight:700}.lpn_panel .ft{font-size:12px;position:relative;zoom:1}.lpn_panel .ft:after{content:".";display:block;height:0;clear:both;visibility:hidden}.lpn_ctrl_group{position:absolute;overflow:hidden;top:3px;right:5px;width:500px}.lpn_ctrl_group a{display:block;float:right;text-decoration:none;text-align:center;font-size:12px}.lpn_underlay{position:absolute;margin:3px -3px -3px;background-color:#000;opacity:.2;filter:alpha(opacity=20)}.lpn_resize_br{float:right;height:9px;width:9px;margin:0;font-size:1px;cursor:se-resize;zoom:1;background:url(' + n(1) + ") no-repeat -20px -380px}.lpn_button_group{display:block;text-align:right;padding:5px 20px 10px 0}.lpn_button_group button{margin:0 6px;font-size:12px}.lpn_load{position:absolute;height:32px;width:32px;top:50%;left:50%;margin:-16px 0 0 -16px;background:url(" + n(27) + ") no-repeat}.lpn_icon{padding:0;margin:0;border:0}.lpn_panel_alert .lpn_icon,.lpn_panel_confirm .lpn_icon{width:32px;height:32px;position:absolute;left:30px;top:40px}.lpn_panel_alert .lpn_alert{background:url(" + n(23) + ") no-repeat}.lpn_panel_alert .lpn_success{background:url(" + n(30) + ") no-repeat}.lpn_panel_confirm .lpn_confirm{background:url(" + n(25) + ") no-repeat}.lpn_panel_loading .lpn_icon{background:url(" + n(28) + ") no-repeat;width:208px;height:13px;position:absolute;left:45px;bottom:20px}.lpn_panel_alert .lpn_canvas,.lpn_panel_confirm .lpn_canvas,.lpn_panel_loading .lpn_canvas{background-color:#f2f2f2!important}.lpn_panel_alert .bd,.lpn_panel_confirm .bd{padding:20px 25px 25px 80px!important;font-size:12px}.lpn_panel_loading .bd{padding:15px 50px 35px 45px!important;font-size:12px}.lpn_panel_tooltip .lpn_wrapper{border:1px solid #f90}.lpn_panel_tooltip .lpn_canvas{background-color:#ffc!important}.lpn_panel_tooltip .bd{padding:5px;font-size:12px}.lpn_panel_tooltip_el{border-bottom:1px dotted #666;color:#666;cursor:help}.lpn_panel_default.lpn_panel_module{margin-bottom:10px}.lpn_panel_default .lpn_canvas{background-color:#fff}.lpn_panel_default .lpn_canvas .bd{padding:6px}.lpn_panel_default .lpn_wrapper{border:1px solid gray}.lpn_panel_default .hd{margin:0;line-height:100%;border-bottom:1px solid #ccc;padding:6px 10px 5px;color:#000;background:#e9f2ff;background:url(" + n(1) + ") repeat-x 0 -200px}.lpn_panel_default .ft{margin:0;padding:0;border-top:1px solid #ccc;background-color:#f2f2f2}.lpn_panel_default .lpn_ctrl_group a{color:#00f}.lpn_ctrl_group a:active,.lpn_panel_default .lpn_ctrl_group a:hover{color:red}.lpn_panel_default .lpn_close{width:18px;height:18px;line-height:100%;background:url(" + n(1) + ") no-repeat 0 -300px}.lpn_panel_default a.lpn_close:hover{background:url(" + n(1) + ") no-repeat -20px -300px}.lpn_panel_default .lpn_minimiz_open{width:18px;height:18px;line-height:100%;background:url(" + n(1) + ") no-repeat 0 -340px}.lpn_panel_default a.lpn_minimiz_open:hover{background:url(" + n(1) + ") no-repeat -20px -340px}.lpn_panel_default .lpn_minimiz_close{width:18px;height:18px;line-height:100%;background:url(" + n(1) + ") no-repeat 0 -360px}.lpn_panel_default a.lpn_minimiz_close:hover{background:url(" + n(1) + ") no-repeat -20px -360px}.lpn_panel_default .lpn_refresh{width:18px;height:18px;line-height:100%;background:url(" + n(1) + ") no-repeat 0 -320px}.lpn_panel_default a.lpn_refresh:hover{background:url(" + n(1) + ") no-repeat -20px -320px}.lpn_panel_1.lpn_panel_module{margin-bottom:10px}.lpn_panel_1 .lpn_canvas{background-color:#fff}.lpn_panel_1 .lpn_canvas .bd{padding:6px}.lpn_panel_1 .lpn_wrapper{border:5px solid #6694e3}.lpn_panel_1 .hd{margin:0;line-height:100%;border-bottom:1px solid #ccc;font-size:14px;padding:7px 10px 6px;background:#e9f2ff}.lpn_panel_1 .ft{margin:0;padding:0;border-top:1px solid #ccc;background-color:#f2f2f2}.lpn_panel_1 .lpn_ctrl_group a{color:#00f;top:4px;right:4px}.lpn_ctrl_group a:active,.lpn_panel_1 .lpn_ctrl_group a:hover{color:red}.lpn_panel_1 .lpn_close{width:18px;height:18px;background:url(" + n(1) + ") no-repeat 0 -300px}.lpn_panel_1 a.lpn_close:hover{background:url(" + n(1) + ") no-repeat -20px -300px}.lpn_panel_1 .lpn_minimiz_open{width:18px;height:18px;background:url(" + n(1) + ") no-repeat 0 -340px}.lpn_panel_1 a.lpn_minimiz_open:hover{background:url(" + n(1) + ") no-repeat -20px -340px}.lpn_panel_1 .lpn_minimiz_close{width:18px;height:18px;background:url(" + n(1) + ") no-repeat 0 -360px}.lpn_panel_1 a.lpn_minimiz_close:hover{background:url(" + n(1) + ") no-repeat -20px -360px}.lpn_panel_1 .lpn_refresh{width:18px;height:18px;background:url(" + n(1) + ") no-repeat 0 -320px}.lpn_panel_1 a.lpn_refresh:hover{background:url(" + n(1) + ") no-repeat -20px -320px}.lpn_panel_2.lpn_panel_module{margin-bottom:10px}.lpn_panel_2 .lpn_canvas{background-color:#fff}.lpn_panel_2 .lpn_canvas .bd{padding:6px}.lpn_panel_2 .lpn_wrapper{border-top:0;border-left:7px solid #e9f2ff;border-right:7px solid #e9f2ff;border-bottom:0}.lpn_panel_2 .hd{margin:0;line-height:100%;font-size:14px;padding:10px 10px 8px;background:#e9f2ff}.lpn_panel_2 .ft{margin:0 -7px 0 0;padding:0;background-color:#e9f2ff}.lpn_panel_2 .lpn_ctrl_group{top:7px;right:0}.lpn_panel_2 .lpn_ctrl_group a{color:#00f;top:4px;right:4px}.lpn_ctrl_group a:active,.lpn_panel_2 .lpn_ctrl_group a:hover{color:red}.lpn_panel_2 .lpn_close{width:18px;height:18px;background:url(" + n(1) + ") no-repeat 0 -300px}.lpn_panel_2 a.lpn_close:hover{background:url(" + n(1) + ") no-repeat -20px -300px}.lpn_panel_2 .lpn_minimiz_open{width:18px;height:18px;background:url(" + n(1) + ") no-repeat 0 -340px}.lpn_panel_2 a.lpn_minimiz_open:hover{background:url(" + n(1) + ") no-repeat -20px -340px}.lpn_panel_2 .lpn_minimiz_close{width:18px;height:18px;background:url(" + n(1) + ") no-repeat 0 -360px}.lpn_panel_2 a.lpn_minimiz_close:hover{background:url(" + n(1) + ") no-repeat -20px -360px}.lpn_panel_2 .lpn_refresh{width:18px;height:18px;background:url(" + n(1) + ") no-repeat 0 -320px}.lpn_panel_2 a.lpn_refresh:hover{background:url(" + n(1) + ") no-repeat -20px -320px}.lpn_panel_2 .lpn_underlay{margin:-7px;background-color:#6694e3;opacity:.8;filter:alpha(opacity=80)}.lpn_panel_text.lpn_panel_module{margin-bottom:10px}.lpn_panel_text .lpn_canvas{background-color:#fff}.lpn_panel_text .lpn_canvas .bd{padding:6px}.lpn_panel_text .hd{margin:0;line-height:100%;font-size:14px;padding:10px;background:#f1f1f1}.lpn_panel_text .ft{background-color:#fff;margin:0;padding:0}.lpn_panel_text .lpn_close,.lpn_panel_text .lpn_minimiz_close,.lpn_panel_text .lpn_minimiz_open,.lpn_panel_text .lpn_refresh,.lpn_panel_text a.lpn_close:hover,.lpn_panel_text a.lpn_minimiz_close:hover,.lpn_panel_text a.lpn_minimiz_open:hover,.lpn_panel_text a.lpn_refresh:hover{width:auto;text-decoration:underline;background-image:none}.lpn_panel_text .lpn_underlay{margin:-5px;background-color:#000;opacity:.4;filter:alpha(opacity=40)}.lpn_panel_text .lpn_ctrl_group{top:7px}.lpn_panel_text .lpn_ctrl_group a,.lpn_panel_text .lpn_ctrl_group a:hover,.lpn_panel_text .lpn_ctrl_group a:visited{text-decoration:none;overflow:hidden;color:#00f;top:4px;right:4px;display:block;width:20px;height:20px;background:url(" + n(5) + ") no-repeat 0 0;text-indent:40px;font-size:0}.lpn_panel_text .lpn_ctrl_group a:hover{background:#eb3800 url(" + n(5) + ") no-repeat 0 -20px}.lpn_panel_3.lpn_panel_module{margin-bottom:10px}.lpn_panel_3 .hd{margin:0;line-height:100%;border-bottom:1px solid #ccc;padding:6px 10px 5px;color:#000;background:#e9f2ff;background:url(" + n(1) + ") repeat-x 0 -200px}.lpn_panel_3 .ft{margin:0;padding:0;height:0;line-height:0;zoom:1;overflow:hidden}.lpn_panel_3 .lpn_ctrl_group a{color:#00f}.lpn_ctrl_group a:active,.lpn_panel_3 .lpn_ctrl_group a:hover{color:red}.lpn_panel_3 .lpn_close{width:18px;height:18px;line-height:100%;background:url(" + n(1) + ") no-repeat 0 -300px}.lpn_panel_3 a.lpn_close:hover{background:url(" + n(1) + ") no-repeat -20px -300px}.lpn_panel_3 .lpn_minimiz_open{width:18px;height:18px;line-height:100%;background:url(" + n(1) + ") no-repeat 0 -340px}.lpn_panel_3 a.lpn_minimiz_open:hover{background:url(" + n(1) + ") no-repeat -20px -340px}.lpn_panel_3 .lpn_minimiz_close{width:18px;height:18px;line-height:100%;background:url(" + n(1) + ") no-repeat 0 -360px}.lpn_panel_3 a.lpn_minimiz_close:hover{background:url(" + n(1) + ") no-repeat -20px -360px}.lpn_panel_3 .lpn_refresh{width:18px;height:18px;line-height:100%;background:url(" + n(1) + ") no-repeat 0 -320px}.lpn_panel_3 a.lpn_refresh:hover{background:url(" + n(1) + ") no-repeat -20px -320px}.lpn_panel_4.lpn_panel_module{margin-bottom:10px}.lpn_panel_4 .lpn_canvas{background-color:#fff}.lpn_panel_4 .lpn_canvas .bd{padding:6px}.lpn_panel_4 .lpn_wrapper{border-top:0;border-left:7px solid #e6f5d2;border-right:7px solid #e6f5d2;border-bottom:0}.lpn_panel_4 .hd{margin:0;line-height:100%;font-size:14px;padding:10px 10px 8px;background:#e6f5d2}.lpn_panel_4 .ft{background-color:#e6f5d2;margin:0 -7px 0 0;padding:0}.lpn_panel_4 .lpn_ctrl_group{top:7px;right:0}.lpn_panel_4 .lpn_ctrl_group a{color:#00f;top:4px;right:4px}.lpn_ctrl_group a:active,.lpn_panel_4 .lpn_ctrl_group a:hover{color:red}.lpn_panel_4 .lpn_close,.lpn_panel_4 .lpn_minimiz_close,.lpn_panel_4 .lpn_minimiz_open,.lpn_panel_4 .lpn_refresh,.lpn_panel_4 a.lpn_close:hover,.lpn_panel_4 a.lpn_minimiz_close:hover,.lpn_panel_4 a.lpn_minimiz_open:hover,.lpn_panel_4 a.lpn_refresh:hover{width:auto;text-decoration:underline;background-image:none}.lpn_panel_4 .lpn_underlay{margin:-7px;background-color:#6da721;opacity:.8;filter:alpha(opacity=80);border-radius:6px}.lpn_panel_tuan .lpn_bnt{text-align:center;margin:10px auto}.lpn_panel_tuan .lpn_content{text-align:center;margin:20px auto}.lpn_panel_tuan .lpn_ctrl_group .lpn_close,.lpn_panel_tuan .lpn_ctrl_group .lpn_close:hover{background:url(" + n(24) + ") no-repeat 0 0;width:18px;height:18px;display:inline-block;text-decoration:none}.lpn_panel_tuan .lpn_button_group{background-color:#fff;text-align:center;padding:0 0 20px}.lpn_panel_tuan .lpn_button_group button{background:url(" + n(26) + ") no-repeat;width:64px;height:29px;overflow:hidden;cursor:pointer;border:0;font-weight:700;padding-bottom:3px;*padding-bottom:0}.lpn_panel_tuan .lpn_button_group .lpn_submit{background-position:-81px 0;color:#fff}.lpn_panel_tuan .lpn_f_mr{margin:40px 0 10px;display:block}.lpn_panel_tuan.lpn_panel_module{margin-bottom:10px}.lpn_panel_tuan .lpn_canvas{background-color:#fff}.lpn_panel_tuan .lpn_canvas .bd{padding:6px}.lpn_panel_tuan .lpn_wrapper{border-top:0;border-left:7px solid #e6f5d2;border-right:7px solid #e6f5d2;border-bottom:0}.lpn_panel_tuan .hd{margin:0;line-height:100%;font-size:14px;padding:10px 10px 8px;background:#e6f5d2;border:0}.lpn_panel_tuan .ft{background-color:#e6f5d2;margin:0;padding:0;border-top:0}.lpn_panel_tuan .lpn_ctrl_group{top:7px;right:0}.lpn_panel_tuan .lpn_ctrl_group a{color:#00f;top:4px;right:4px}.lpn_ctrl_group a:active,.lpn_panel_tuan .lpn_ctrl_group a:hover{color:red}.lpn_panel_tuan .lpn_close,.lpn_panel_tuan .lpn_minimiz_close,.lpn_panel_tuan .lpn_minimiz_open,.lpn_panel_tuan .lpn_refresh,.lpn_panel_tuan a.lpn_close:hover,.lpn_panel_tuan a.lpn_minimiz_close:hover,.lpn_panel_tuan a.lpn_minimiz_open:hover,.lpn_panel_tuan a.lpn_refresh:hover{width:auto;background-image:none}.lpn_panel_tuan .lpn_underlay{margin:-7px;background-color:#6da721;opacity:.8;filter:alpha(opacity=80);border-radius:6px}.lpn_panel_jiaoyou_new.lpn_panel_module{margin-bottom:10px}.lpn_panel_jiaoyou_new .lpn_canvas{background-color:#fff}.lpn_panel_jiaoyou_new .lpn_canvas .bd{padding:6px}.lpn_panel_jiaoyou_new .hd{display:none}.lpn_panel_jiaoyou_new .lpn_ctrl_group{overflow:visible}.lpn_panel_jiaoyou_new .lpn_close{background:url(" + n(29) + ") no-repeat 0 -104px;display:block;width:25px;height:25px;position:absolute;right:-15px;top:-15px}.lpn_panel_jiaoyou_new .lpn_minimiz_close,.lpn_panel_jiaoyou_new .lpn_minimiz_open,.lpn_panel_jiaoyou_new .lpn_refresh,.lpn_panel_jiaoyou_new a.lpn_minimiz_close:hover,.lpn_panel_jiaoyou_new a.lpn_minimiz_open:hover,.lpn_panel_jiaoyou_new a.lpn_refresh:hover{width:auto;text-decoration:underline;background-image:none}.lpn_panel_jiaoyou_new .lpn_underlay{margin:-7px;background-color:#fff;opacity:.9;filter:alpha(opacity=90);border-radius:6px}.lpn_panel_jiaoyou.lpn_panel_module{margin-bottom:10px}.lpn_panel_jiaoyou .lpn_canvas{background-color:#fff}.lpn_panel_jiaoyou .lpn_canvas .bd{padding:6px}.lpn_panel_jiaoyou .lpn_wrapper{border-top:0;border-left:7px solid #e9f2ff;border-right:7px solid #e9f2ff;border-bottom:0}.lpn_panel_jiaoyou .hd{margin:0;line-height:100%;font-size:14px;padding:10px 10px 8px;background:#e9f2ff}.lpn_panel_jiaoyou .ft{background-color:#e9f2ff;margin:0 -7px 0 0;padding:0}.lpn_panel_jiaoyou .lpn_ctrl_group{top:7px;right:0}.lpn_panel_jiaoyou .lpn_ctrl_group a{color:#00f;top:4px;right:4px}.lpn_ctrl_group a:active,.lpn_panel_jiaoyou .lpn_ctrl_group a:hover{color:red}.lpn_panel_jiaoyou .lpn_close,.lpn_panel_jiaoyou .lpn_minimiz_close,.lpn_panel_jiaoyou .lpn_minimiz_open,.lpn_panel_jiaoyou .lpn_refresh,.lpn_panel_jiaoyou a.lpn_close:hover,.lpn_panel_jiaoyou a.lpn_minimiz_close:hover,.lpn_panel_jiaoyou a.lpn_minimiz_open:hover,.lpn_panel_jiaoyou a.lpn_refresh:hover{width:auto;text-decoration:underline;background-image:none}.lpn_panel_jiaoyou .lpn_underlay{margin:-7px;background-color:#6694e3;opacity:.8;filter:alpha(opacity=80);border-radius:6px}.lpn_panel_reward.lpn_panel_module{margin-bottom:10px}.lpn_panel_reward .lpn_canvas{background-color:#fff}.lpn_panel_reward .lpn_canvas .bd{padding:6px;border-radius:0 0 0;opacity:10}.lpn_panel_reward .hd{display:none}.lpn_panel_reward .lpn_ctrl_group{overflow:visible}.lpn_panel_reward .lpn_close{background:url(http://sta.ganjistatic1.com/src/image/xuanshang/close_icon.gif) no-repeat;display:block;width:12px;height:12px;position:absolute;right:4px;top:4px}.lpn_panel_reward .lpn_minimiz_close,.lpn_panel_reward .lpn_minimiz_open,.lpn_panel_reward .lpn_refresh,.lpn_panel_reward a.lpn_minimiz_close:hover,.lpn_panel_reward a.lpn_minimiz_open:hover,.lpn_panel_reward a.lpn_refresh:hover{width:auto;text-decoration:underline;background-image:none}.lpn_panel_reward .lpn_underlay{margin:-7px;background-color:#fff;opacity:10;filter:alpha(opacity=100)}.lpn_panel_reward_guide.lpn_panel_module{margin-bottom:10px}.lpn_panel_reward_guide .lpn_canvas{background-color:#fff}.lpn_panel_reward_guide .lpn_canvas .bd{padding:0;border-radius:0 0 0;opacity:10}.lpn_panel_reward_guide .hd{display:none}.lpn_panel_reward_guide .lpn_ctrl_group{overflow:visible}.lpn_panel_reward_guide .lpn_close{background:url(http://sta.ganjistatic1.com/src/image/xuanshang/close_icon.gif) no-repeat;display:block;width:12px;height:12px;position:absolute;right:4px;top:4px}.lpn_panel_reward_guide .lpn_minimiz_close,.lpn_panel_reward_guide .lpn_minimiz_open,.lpn_panel_reward_guide .lpn_refresh,.lpn_panel_reward_guide a.lpn_minimiz_close:hover,.lpn_panel_reward_guide a.lpn_minimiz_open:hover,.lpn_panel_reward_guide a.lpn_refresh:hover{width:auto;text-decoration:underline;background-image:none}.lpn_panel_reward_guide .lpn_underlay{background:none!important;opacity:10;filter:alpha(opacity=100);margin:0}.fb{font-weight:700}.pop-store .lpn_underlay{border-radius:0;background-color:#ff9600;opacity:10;filter:alpha(opacity=100)}.pop-store .hd{background-image:url(http://sta.ganjistatic1.com/src/app/bang/image/pop_bg.png);color:#036;*background-position:0 1px}", ""]);
    },
    function (e, t, n) {
        e.exports = n.p + "alert.4b41a9849d85f662ef7c4598e0b78dd1.gif"
    },
    function (e, t, n) {
        e.exports = n.p + "close.2cb8f389037d54fb0a0ba28f9b249ff9.gif"
    },
    function (e, t, n) {
        e.exports = n.p + "confirm.244c1c9db9003f21c332e3007ee7874c.gif"
    },
    function (e, t, n) {
        e.exports = n.p + "lnp-buttonbg.b7cb50ee592bd9f655d35218a224e58c.gif"
    },
    function (e, t, n) {
        e.exports = n.p + "loading.7e99e1159a3686f6aa4f90043c554483.gif"
    },
    function (e, t, n) {
        e.exports = n.p + "loading_h.c33734a1bf58bec328ffa27872e96ae1.gif"
    },
    function (e, t, n) {
        e.exports = n.p + "reg-icon.e2384c53dca7fd9c2765e135ac9924d5.gif"
    },
    function (e, t, n) {
        e.exports = n.p + "success.6d1bfafeb8bd35303dfdd4e75c32ba03.png"
    },
    function (e, t, n) {
        var i = n(21);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(4)(i, {});
        i.locals && (e.exports = i.locals)
    },
    function (e, t, n) {
        var i = n(22);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(4)(i, {});
        i.locals && (e.exports = i.locals)
    },
    function (e, t) {
        GJ.add("js/util/md5/md5.js", [], function (e, t, n) {
            "use strict";

            function i(e, t) {
                var n = (65535 & e) + (65535 & t),
                    i = (e >> 16) + (t >> 16) + (n >> 16);
                return i << 16 | 65535 & n
            }

            function o(e, t) {
                return e << t | e >>> 32 - t
            }

            function r(e, t, n, r, a, l) {
                return i(o(i(i(t, e), i(r, l)), a), n)
            }

            function a(e, t, n, i, o, a, l) {
                return r(t & n | ~t & i, e, t, o, a, l)
            }

            function l(e, t, n, i, o, a, l) {
                return r(t & i | n & ~i, e, t, o, a, l)
            }

            function s(e, t, n, i, o, a, l) {
                return r(t ^ n ^ i, e, t, o, a, l)
            }

            function c(e, t, n, i, o, a, l) {
                return r(n ^ (t | ~i), e, t, o, a, l)
            }

            function p(e, t) {
                e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
                var n, o, r, p, d, u = 1732584193,
                    f = -271733879,
                    h = -1732584194,
                    g = 271733878;
                for (n = 0; n < e.length; n += 16) o = u, r = f, p = h, d = g, u = a(u, f, h, g, e[n], 7, -680876936), g = a(g, u, f, h, e[n + 1], 12, -389564586), h = a(h, g, u, f, e[n + 2], 17, 606105819), f = a(f, h, g, u, e[n + 3], 22, -1044525330), u = a(u, f, h, g, e[n + 4], 7, -176418897), g = a(g, u, f, h, e[n + 5], 12, 1200080426), h = a(h, g, u, f, e[n + 6], 17, -1473231341), f = a(f, h, g, u, e[n + 7], 22, -45705983), u = a(u, f, h, g, e[n + 8], 7, 1770035416), g = a(g, u, f, h, e[n + 9], 12, -1958414417), h = a(h, g, u, f, e[n + 10], 17, -42063), f = a(f, h, g, u, e[n + 11], 22, -1990404162), u = a(u, f, h, g, e[n + 12], 7, 1804603682), g = a(g, u, f, h, e[n + 13], 12, -40341101), h = a(h, g, u, f, e[n + 14], 17, -1502002290), f = a(f, h, g, u, e[n + 15], 22, 1236535329), u = l(u, f, h, g, e[n + 1], 5, -165796510), g = l(g, u, f, h, e[n + 6], 9, -1069501632), h = l(h, g, u, f, e[n + 11], 14, 643717713), f = l(f, h, g, u, e[n], 20, -373897302), u = l(u, f, h, g, e[n + 5], 5, -701558691), g = l(g, u, f, h, e[n + 10], 9, 38016083), h = l(h, g, u, f, e[n + 15], 14, -660478335), f = l(f, h, g, u, e[n + 4], 20, -405537848), u = l(u, f, h, g, e[n + 9], 5, 568446438), g = l(g, u, f, h, e[n + 14], 9, -1019803690), h = l(h, g, u, f, e[n + 3], 14, -187363961), f = l(f, h, g, u, e[n + 8], 20, 1163531501), u = l(u, f, h, g, e[n + 13], 5, -1444681467), g = l(g, u, f, h, e[n + 2], 9, -51403784), h = l(h, g, u, f, e[n + 7], 14, 1735328473), f = l(f, h, g, u, e[n + 12], 20, -1926607734), u = s(u, f, h, g, e[n + 5], 4, -378558), g = s(g, u, f, h, e[n + 8], 11, -2022574463), h = s(h, g, u, f, e[n + 11], 16, 1839030562), f = s(f, h, g, u, e[n + 14], 23, -35309556), u = s(u, f, h, g, e[n + 1], 4, -1530992060), g = s(g, u, f, h, e[n + 4], 11, 1272893353), h = s(h, g, u, f, e[n + 7], 16, -155497632), f = s(f, h, g, u, e[n + 10], 23, -1094730640), u = s(u, f, h, g, e[n + 13], 4, 681279174), g = s(g, u, f, h, e[n], 11, -358537222), h = s(h, g, u, f, e[n + 3], 16, -722521979), f = s(f, h, g, u, e[n + 6], 23, 76029189), u = s(u, f, h, g, e[n + 9], 4, -640364487), g = s(g, u, f, h, e[n + 12], 11, -421815835), h = s(h, g, u, f, e[n + 15], 16, 530742520), f = s(f, h, g, u, e[n + 2], 23, -995338651), u = c(u, f, h, g, e[n], 6, -198630844), g = c(g, u, f, h, e[n + 7], 10, 1126891415), h = c(h, g, u, f, e[n + 14], 15, -1416354905), f = c(f, h, g, u, e[n + 5], 21, -57434055), u = c(u, f, h, g, e[n + 12], 6, 1700485571), g = c(g, u, f, h, e[n + 3], 10, -1894986606), h = c(h, g, u, f, e[n + 10], 15, -1051523), f = c(f, h, g, u, e[n + 1], 21, -2054922799), u = c(u, f, h, g, e[n + 8], 6, 1873313359), g = c(g, u, f, h, e[n + 15], 10, -30611744), h = c(h, g, u, f, e[n + 6], 15, -1560198380), f = c(f, h, g, u, e[n + 13], 21, 1309151649), u = c(u, f, h, g, e[n + 4], 6, -145523070), g = c(g, u, f, h, e[n + 11], 10, -1120210379), h = c(h, g, u, f, e[n + 2], 15, 718787259), f = c(f, h, g, u, e[n + 9], 21, -343485551), u = i(u, o), f = i(f, r), h = i(h, p), g = i(g, d);
                return [u, f, h, g]
            }

            function d(e) {
                var t, n = "";
                for (t = 0; t < 32 * e.length; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                return n
            }

            function u(e) {
                var t, n = [];
                for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                for (t = 0; t < 8 * e.length; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                return n
            }

            function f(e) {
                return d(p(u(e), 8 * e.length))
            }

            function h(e, t) {
                var n, i, o = u(e),
                    r = [],
                    a = [];
                for (r[15] = a[15] = void 0, o.length > 16 && (o = p(o, 8 * e.length)), n = 0; n < 16; n += 1) r[n] = 909522486 ^ o[n], a[n] = 1549556828 ^ o[n];
                return i = p(r.concat(u(t)), 512 + 8 * t.length), d(p(a.concat(i), 640))
            }

            function g(e) {
                var t, n, i = "0123456789abcdef",
                    o = "";
                for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), o += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
                return o
            }

            function m(e) {
                return unescape(encodeURIComponent(e))
            }

            function b(e) {
                return f(m(e))
            }

            function v(e) {
                return g(b(e))
            }

            function x(e, t) {
                return h(m(e), m(t))
            }

            function y(e, t) {
                return g(x(e, t))
            }

            function w(e, t, n) {
                return t ? n ? x(t, e) : y(t, e) : n ? b(e) : v(e)
            }
            n.exports = w
        })
    },
    function (e, t) {
        function n(e, t) {
            var n = this,
                i = $(n);
            n.value == i.attr("placeholder") && i.hasClass(u.customClass) && (n.value = "", i.removeClass(u.customClass), n == o() && n.select())
        }

        function i() {
            var e = this,
                t = $(e);
            this.id;
            if ("" === e.value || e.value == t.attr("placeholder")) {
                if ("password" === e.type) return;
                t.addClass(u.customClass), t[0].value = t.attr("placeholder")
            } else t.removeClass(u.customClass)
        }

        function o() {
            try {
                return document.activeElement
            } catch (e) {}
        } /*! http://mths.be/placeholder v2.1.0 by @mathias */
        var r, a, l = "[object OperaMini]" == Object.prototype.toString.call(window.operamini),
            s = "placeholder" in document.createElement("input") && !l,
            c = "placeholder" in document.createElement("textarea") && !l,
            p = $.valHooks,
            d = $.propHooks;
        if (s && c) a = $.fn.placeholder = function () {
            var e = $(this).attr("placeholder");
            return $(this).is(":focus") && $(this).attr("placeholder", ""), $(this).focus(function () {
                var e = $(this);
                GJ.ua.gecko ? setTimeout(function () {
                    e.attr("placeholder", "")
                }, 100) : e.attr("placeholder", "")
            }).blur(function () {
                $(this).attr("placeholder", e)
            }), this
        }, a.input = a.textarea = !0;
        else {
            var u = {};
            a = $.fn.placeholder = function (e) {
                var t = {
                    customClass: "placeholder"
                };
                u = $.extend({}, t, e);
                var o = this;
                return o.filter((s ? "textarea" : ":input") + "[placeholder]").not("." + u.customClass).bind({
                    "focus.placeholder": n,
                    "blur.placeholder": i
                }).data("placeholder-enabled", !0).trigger("blur.placeholder"), o
            }, a.input = s, a.textarea = c, r = {
                get: function (e) {
                    var t = $(e);
                    return e.value == t.attr("placeholder") ? "" : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
                }, set: function (e, t) {
                    var r = $(e);
                    return t == r.attr("placeholder") ? (e.value = "", r) : r.data("placeholder-enabled") ? ("" === t ? (e.value = t, e != o() && i.call(e)) : r.hasClass(u.customClass) ? n.call(e, !0, t) || (e.value = t) : e.value = t, r) : e.value = t
                }
            }, s || (p.input = r, d.value = r), c || (p.textarea = r, d.value = r), $(function () {
                $(document).delegate("form", "submit.placeholder", function () {
                    var e = $("." + u.customClass, this).each(n);
                    setTimeout(function () {
                        e.each(i)
                    }, 10)
                })
            }), $(window).bind("beforeunload.placeholder", function () {
                $("." + u.customClass).each(function () {
                    this.value = ""
                })
            })
        }
    },
    function (e, t) {
        GJ.add("tool/webim/js/webim.jsonp.js", [], function () {})
    },
    function (e, t) {
        e.exports = function () {
            var e = window.performance;
            if (void 0 !== e) {
                var t = window.performance.timing;
                if (void 0 !== t && document.cookie.indexOf("statistics_clientid=") === -1) {
                    var n = t.domainLookupEnd - t.domainLookupStart,
                        i = t.connectEnd - t.connectStart,
                        o = t.responseEnd - t.responseStart;
                    (new Image).src = ("https:" === document.location.protocol ? "https://" : "http://") + "stat.dnspod.cn/statistics/" + n + "/" + i + "/" + o + ".png";
                    var r = new Date;
                    r.setDate(r.getDate() + 1), document.cookie = "statistics_clientid=me;expires=" + r.toGMTString()
                }
            }
        }
    },
    function (e, t) {
        $.fn.lazyload = function (e) {
            function t() {
                var e = 0;
                n.each(function () {
                    var t = $(this);
                    if (!i.skip_invisible || t.is(":visible"))
                        if ($.abovethetop(this, i) || $.leftofbegin(this, i));
                        else if ($.belowthefold(this, i) || $.rightoffold(this, i)) {
                            if (++e > i.failure_limit) return !1
                        } else t.trigger("appear")
                })
            }
            $window = $(window);
            var n = this,
                i = {
                    threshold: 0,
                    failure_limit: 0,
                    event: "scroll",
                    effect: "show",
                    container: window,
                    data_attribute: "original",
                    skip_invisible: !0,
                    appear: null,
                    load: null
                };
            return e && (void 0 !== e.failurelimit && (e.failure_limit = e.failurelimit, delete e.failurelimit), void 0 !== e.effectspeed && (e.effect_speed = e.effectspeed, delete e.effectspeed), $.extend(i, e)), $container = void 0 === i.container || i.container === window ? $window : $(i.container), 0 === i.event.indexOf("scroll") && $container.bind(i.event, function (e) {
                return t()
            }), this.each(function () {
                var e = this,
                    t = $(e);
                e.loaded = !1, t.one("appear", function () {
                    if (!this.loaded) {
                        if (i.appear) {
                            var o = n.length;
                            i.appear.call(e, o, i)
                        }
                        var r = t.data(i.data_attribute);
                        r || (r = t.attr(i.data_attribute)), t.is("img") ? $("<img />").bind("load", function () {
                            t.css("visibility", "visible").hide().attr("src", r)[i.effect](i.effect_speed), e.loaded = !0;
                            var o = $.grep(n, function (e) {
                                return !e.loaded
                            });
                            if (n = $(o), i.load) {
                                var a = n.length;
                                i.load.call(e, a, i)
                            }
                        }).attr("src", r) : (t.attr("src", r), e.loaded = !0), t.trigger("lazyload:show")
                    }
                }), 0 !== i.event.indexOf("scroll") && t.bind(i.event, function (n) {
                    e.loaded || t.trigger("appear")
                })
            }), $window.bind("resize", function (e) {
                t()
            }), t(), this
        }, $.belowthefold = function (e, t) {
            var n;
            return n = void 0 === t.container || t.container === window ? $window.height() + $window.scrollTop() : $container.offset().top + $container.height(), n <= $(e).offset().top - t.threshold - 500
        }, $.rightoffold = function (e, t) {
            var n;
            return n = void 0 === t.container || t.container === window ? $window.width() + $window.scrollLeft() : $container.offset().left + $container.width(), n <= $(e).offset().left - t.threshold
        }, $.abovethetop = function (e, t) {
            var n;
            return n = void 0 === t.container || t.container === window ? $window.scrollTop() : $container.offset().top, n >= $(e).offset().top + t.threshold + $(e).height()
        }, $.leftofbegin = function (e, t) {
            var n;
            return n = void 0 === t.container || t.container === window ? $window.scrollLeft() : $container.offset().left, n >= $(e).offset().left + t.threshold + $(e).width()
        }, $.inviewport = function (e, t) {
            return !($.rightofscreen(e, t) || $.leftofscreen(e, t) || $.belowthefold(e, t) || $.abovethetop(e, t))
        }, $.extend($.expr[":"], {
            "below-the-fold": function (e) {
                return $.belowthefold(e, {
                    threshold: 0,
                    container: window
                })
            }, "above-the-top": function (e) {
                return !$.belowthefold(e, {
                    threshold: 0,
                    container: window
                })
            }, "right-of-screen": function (e) {
                return $.rightoffold(e, {
                    threshold: 0,
                    container: window
                })
            }, "left-of-screen": function (e) {
                return !$.rightoffold(e, {
                    threshold: 0,
                    container: window
                })
            }, "in-viewport": function (e) {
                return !$.inviewport(e, {
                    threshold: 0,
                    container: window
                })
            }, "above-the-fold": function (e) {
                return !$.belowthefold(e, {
                    threshold: 0,
                    container: window
                })
            }, "right-of-fold": function (e) {
                return $.rightoffold(e, {
                    threshold: 0,
                    container: window
                })
            }, "left-of-fold": function (e) {
                return !$.rightoffold(e, {
                    threshold: 0,
                    container: window
                })
            }
        })
    },
    function (e, t) {
        function n() {
            var e, t = "gjch=" + (a || "-");
            for (e in s) t += "&" + e + "=" + s[e];
            for (var n = l.length - 1; n >= 0; n--) i(l[n] + t)
        }

        function i(e) {
            var t = new Image;
            t.onload = function () {
                t.onload = null
            }, t.src = e
        }
        var o = {
                dlcdntest: "http://dlcdntest.ganjistatic1.com/sysmonitor.gif",
                wacdntest: "http://wacdntest.ganjistatic1.com/sysmonitor.gif"
            },
            r = document.getElementsByTagName("html")[0],
            a = r.getAttribute("data-gjch") || "-",
            l = ["http://analytics.ganji.com/c.gif?", "http://tralog.ganji.com/c.gif?"],
            s = {};
        e.exports = function () {
            var e = $.map(o, function (e, t) {
                var n = $.Deferred(),
                    i = +new Date,
                    o = new Image,
                    r = setTimeout(function () {
                        o.onload = null, n.resolve(-1)
                    }, 1e4);
                return n.done(function (e) {
                    s[t] = e
                }), o.onload = function () {
                    clearTimeout(r), n.resolve(+new Date - i)
                }, o.onerror = function () {
                    n.resolve(-1)
                }, o.src = e, n
            });
            $.when.apply($, e).done(n)
        }
    },
    function (e, t) {
        GJ.add("js/util/log_tracker/check_np.js", ["jquery"], function (e, t, n) {
            function i(e) {
                var t = new Image;
                t.onload = function () {
                    t.onload = null
                }, t.src = e
            }

            function o() {
                var e = window.performance.timing,
                    t = "gjch=" + s,
                    n = {
                        navigationStart: e.navigationStart,
                        redirect: e.redirectEnd - e.redirectStart,
                        cache: e.domainLookupStart - e.fetchStart,
                        dns: e.domainLookupEnd - e.domainLookupStart,
                        connect: e.connectEnd - e.connectStart,
                        request: e.responseStart - e.requestStart,
                        response: e.responseEnd - e.responseStart,
                        interactive: e.domInteractive - e.domLoading,
                        contentLoad: e.domContentLoadedEventStart - e.domInteractive,
                        domComplete: e.domComplete ? e.domComplete - e.domContentLoadedEventStart : -1
                    };
                for (var o in n) t += "&" + o + "=" + n[o];
                GJ.each(l, function (e) {
                    i(e + t)
                })
            }

            function r() {
                if (window.performance.getEntries) {
                    var e = window.performance.getEntries(),
                        t = 0,
                        n = 0,
                        o = 0,
                        r = 0;
                    e.forEach(function (e) {
                        e.duration > 0 && (/image.ganjistatic1.com/.test(e.name) && (t += e.duration, n += 1), /scs.ganjistatic1.com/.test(e.name) && (o += e.duration, r += 1))
                    }), t > 0 && (t /= n), o > 0 && (o /= r);
                    var a = "avgImageTime=" + t.toFixed() + "&imageLen=" + n + "&avgScsTime=" + o.toFixed() + "&scsLen=" + r;
                    i(l[1] + a)
                }
            }
            var a = e("jquery");
            if (window.performance) {
                var l = ["http://analytics.ganji.com/np.gif?", "http://tralog.ganji.com/np.gif?"],
                    s = "-";
                window.PAGE_CONFIG && window.PAGE_CONFIG.logTracker && window.PAGE_CONFIG.logTracker.gjch && (s = window.PAGE_CONFIG.logTracker.gjch), n.exports = function () {
                    window.performance.timing.domComplete ? (o(), r()) : a(window).on("load", function () {
                        o(), r()
                    })
                }
            }
        })
    },
    function (e, t) {
        if (!GJ.LogTracker) {
            var n = {},
                i = window,
                o = document,
                r = navigator,
                a = r && r.userAgent,
                l = i.location;
            ! function () {
                n.config = {}, n.mix = function (e, t, n) {
                    if (e && t) {
                        var i, o = /msie/.test(a) && !/opera/.test(a);
                        for (i in t)!n && i in e || (e[i] = t[i]);
                        if (o) {
                            var r = t.toString;
                            "function" == typeof r && r != Object.prototype.toString && (e.toString = r)
                        }
                    }
                    return e
                };
                var e = {
                        undefined: "undefined",
                        number: "number",
                        "boolean": "boolean",
                        string: "string",
                        "[object Function]": "function",
                        "[object RegExp]": "regexp",
                        "[object Array]": "array",
                        "[object Date]": "date",
                        "[object Error]": "error"
                    },
                    t = {
                        isArray: function (e) {
                            return "array" === t.typeOf(e)
                        }, isFunction: function (e) {
                            return "function" === t.typeOf(e)
                        }, isObject: function (e, n) {
                            return e && ("object" == typeof e || !n && t.isFunction(e)) || !1
                        }, isString: function (e) {
                            return "string" == typeof e
                        }, isValue: function (e) {
                            var n = t.typeOf(e);
                            switch (n) {
                                case "number":
                                    return isFinite(e);
                                case "null":
                                case "undefined":
                                    return !1;
                                default:
                                    return !!n
                            }
                        }, typeOf: function (t) {
                            return e[typeof t] || e[Object.prototype.toString.call(t)] || (t ? "object" : "null")
                        }
                    };
                n.mix(n, t, !0), n.each = function (e, t) {
                    if (n.isFunction(t)) {
                        var i, o, r;
                        if (n.isArray(e))
                            for (i = 0, o = e.length; i < o && (r = t(e[i], i), r !== !1); i++);
                        else if (n.isObject(e))
                            for (i in e)
                                if (e.hasOwnProperty(i) && (r = t(e[i], i), r === !1)) break
                    }
                }, n.later = function (e, t, n) {
                    t = t || 0;
                    var i = n ? setInterval(e, t) : setTimeout(e, t);
                    return {
                        cancel: function () {
                            i && (n ? clearInterval(i) : clearTimeout(i), i = null)
                        }
                    }
                }
            }(), n.rand = function (e, t) {
                return parseInt(Math.random() * (t - e + 1) + e)
            }, n.guid = function () {
                var e = new Date,
                    t = e.getTime(),
                    i = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0);
                return 1e3 * (t - i.getTime()) + n.rand(1e3, 9999)
            },
                function () {
                    var e = {
                            embed: !0,
                            object: !0,
                            applet: !0
                        },
                        t = {},
                        o = n.guid(),
                        r = {},
                        a = 0;
                    n.data = function (n, l, s) {
                        if (!n.nodeName || !e[n.nodeName.toLowerCase()]) {
                            n = n == i ? t : n;
                            var c, p = n[o];
                            if (!p) {
                                if (void 0 === s) return null;
                                p = ++a
                            }
                            return r[p] || (n[o] = p, r[p] = {}), c = r[p], void 0 !== s && (c[l] = s), c[l]
                        }
                    }
                }(), n.UA = function () {
                var e, t = l && l.href,
                    n = {
                        ie: 0,
                        opera: 0,
                        gecko: 0,
                        webkit: 0,
                        mobile: null,
                        air: 0,
                        caja: r.cajaVersion,
                        secure: t && 0 === t.toLowerCase().indexOf("https"),
                        os: null
                    },
                    i = function (e) {
                        var t = 0;
                        return parseFloat(e.replace(/\./g, function () {
                            return 1 == t++ ? "" : "."
                        }))
                    };
                return a && (/windows|win32/i.test(a) ? n.os = "windows" : /macintosh/i.test(a) && (n.os = "macintosh"), /KHTML/.test(a) && (n.webkit = 1), e = a.match(/AppleWebKit\/([^\s]*)/), e && e[1] && (n.webkit = i(e[1]), / Mobile\//.test(a) ? n.mobile = "Apple" : (e = a.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/), e && (n.mobile = e[0])), e = a.match(/AdobeAIR\/([^\s]*)/), e && (n.air = e[0])), n.webkit || (e = a.match(/Opera[\s\/]([^\s]*)/), e && e[1] ? (n.opera = i(e[1]), e = a.match(/Opera Mini[^;]*/), e && (n.mobile = e[0])) : (e = a.match(/MSIE\s([^;]*)/), e && e[1] ? n.ie = i(e[1]) : (e = a.match(/Gecko\/([^\s]*)/), e && (n.gecko = 1, e = a.match(/rv:([^\s\)]*)/), e && e[1] && (n.gecko = i(e[1]))))))), n
            }(), n.removeCookie = function (e, t, i) {
                return n.setCookie(e, "", -1, t, i)
            }, n.getCookie = function (e) {
                var t, n = null;
                return o.cookie && "" != o.cookie && (t = o.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)")), null != t && (n = decodeURIComponent(t[2]))), n
            }, n.setCookie = function (e, t, n, i, r, a) {
                if (!o.cookie) return !1;
                "number" != typeof n && (n = 0), n = parseInt(n), n < 0 && (t = "");
                var l = new Date;
                return l.setTime(l.getTime() + 1e3 * n), o.cookie = e + "=" + encodeURIComponent(t) + (n ? "; expires=" + l.toGMTString() : "") + (i ? "; path=" + i : "") + (r ? "; domain=" + r : "") + (a ? "; secure" : ""), !0
            }, n.parseUrl = function (e) {
                var t = o.createElement("a");
                t.href = e || l.href;
                var n = {
                    host: t.hostname,
                    params: function () {
                        var e = (t.search || t.hash).replace(/#.*$/, ""),
                            n = {};
                        if (e && /\?/.test(e)) {
                            e = e.split("?")[1];
                            for (var i, o = e.split("&"), r = o.length, a = 0; a < r; a++) i = o[a].split("="), n[i[0]] = i[1] || ""
                        }
                        return n
                    }()
                };
                return n
            },
                function () {
                    var e = function (e, t, n) {
                            (!e.nodeType || 3 !== e.nodeType && 8 !== e.nodeType) && (e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n))
                        },
                        t = function (e, t, n) {
                            (!e.nodeType || 3 !== e.nodeType && 8 !== e.nodeType) && (e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent("on" + t, n))
                        };
                    n.addEvent = function (t, i, o) {
                        var r = i.split(",");
                        n.each(r, function (i) {
                            n.isArray(t) ? n.each(t, function (t) {
                                e(t, i, o)
                            }) : e(t, i, o)
                        })
                    }, n.removeEvent = function (e, i, o) {
                        var r = i.split(",");
                        n.each(r, function (i) {
                            n.isArray(e) ? n.each(e, function (e) {
                                t(e, i, o)
                            }) : t(e, i, o)
                        })
                    }, n.attr = function (e, t) {
                        return e && t && e.getAttribute(t) || ""
                    }, n.getByAttribute = function (e, t) {
                        var n, i, r = /\[(\w+)\]/,
                            a = t || o,
                            l = e.match(r),
                            s = l[1],
                            r = "*",
                            c = [];
                        if (a.querySelectorAll) {
                            n = a.querySelectorAll(e);
                            for (var p = 0, i = n.length; p < i; p++) c.push(n[p]);
                            return c
                        }
                        for (n = "*" === r && a.all ? a.all : a.getElementsByTagName(r), i = n.length; --i >= 0;) {
                            var d = n[i],
                                u = d[s] || d.getAttribute(s);
                            "string" == typeof u && u.length > 0 && c.push(d)
                        }
                        return c
                    }
                }();
            var s = 0,
                c = !1,
                p = {
                    flashPlayerVersion: function () {
                        var e = [0, 0, 0],
                            t = null;
                        if ("undefined" != typeof r.plugins && "object" == typeof r.plugins["Shockwave Flash"]) t = r.plugins["Shockwave Flash"].description, !t || "undefined" != typeof r.mimeTypes && r.mimeTypes["application/x-shockwave-flash"] && !r.mimeTypes["application/x-shockwave-flash"].enabledPlugin || (t = t.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), e[0] = parseInt(t.replace(/^(.*)\..*$/, "$1"), 10), e[1] = parseInt(t.replace(/^.*\.(.*)\s.*$/, "$1"), 10), e[2] = /[a-zA-Z]/.test(t) ? parseInt(t.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                        else if ("undefined" != typeof i.ActiveXObject) try {
                            var n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                            n && (t = n.GetVariable("$version"), t && (t = t.split(" ")[1].split(","), e = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)]))
                        } catch (o) {}
                        return e.join(".")
                    }(),
                    uaFormat: function () {
                        var e, t = [],
                            i = function (e) {
                                return e ? e.toLowerCase() : null
                            };
                        return n.each(n.UA, function (e, n) {
                            e && t.push(n + ":" + e)
                        }), (e = i(r.language || r.browserLanguage)) && t.push("lang:" + e), t.join("|")
                    }(),
                    screenFormart: function () {
                        if (self.screen) return screen.width + "," + screen.height;
                        if (self.java) {
                            var e = java.awt.Toolkit.getDefaultToolkit(),
                                t = e.getScreenSize();
                            return t.width + "," + t.height
                        }
                        return ""
                    }(),
                    domain: function () {
                        var e = o.domain.replace(/^\w+\./, "");
                        return e.toLowerCase()
                    }()
                },
                d = "",
                u = function () {
                    return d || (d = n.getCookie(C.uuidName)), d
                },
                f = "",
                h = function () {
                    return f || (f = n.getCookie("gl_sid"), f || (f = n.guid(), n.setCookie("gl_sid", f, 0, "/", C.domain))), f
                },
                g = function () {
                    var e, t = "baidu:wd,daum:q,eniro:search_word,naver:query,images.google:q,google:q,yahoo:p,msn:q,bing:q,aol:query,aol:encquery,lycos:query,ask:q,altavista:q,netscape:query,cnn:query,about:terms,mamma:query,alltheweb:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,aol:q,mama:query,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,pchome:q,kvasir:q,sesam:q,ozu:q,terra:query,mynet:q,ekolay:q,rambler:words",
                        i = {};
                    return t = t.split(","), n.each(t, function (t) {
                        e = t.split(":"), i[e[0]] = e[1]
                    }), i
                },
                m = function (e, t) {
                    C.customOrganics[e.toLowerCase()] = t
                },
                b = function (e) {
                    C.ignoredKeywords[e] = 1
                },
                v = function () {
                    var e = n.getCookie("gl_tg_seo"),
                        t = o.referrer && !/ganji.(com|cn)/i.test(o.referrer) ? o.referrer : null;
                    if (e && (e.indexOf("|") == -1 && (e = decodeURIComponent(e)), (!e[0] || t && t.indexOf(e[0]) == -1) && (e = null)), !e) {
                        if (t) {
                            var i, r = n.parseUrl(o.referrer),
                                a = n.parseUrl(l.href),
                                s = a.params[C.fromIdName] || a.params.kwid || "",
                                c = g(),
                                p = !1,
                                d = [],
                                u = /[\?&]\w+=utf/i.test(o.referrer);
                            n.mix(c, C.customOrganics, !0), n.each(c, function (e, t) {
                                if (new RegExp(t, "i").test(r.host)) return p = !0, i = r.params[e], i && C.ignoredKeywords[i] || (d.push(t), d.push(i || ""), d.push(u ? "utf8" : "")), !1
                            }), p || (d.push(r.host), d.push(""), d.push("")), d.push(s || ""), e = d.join("|")
                        }
                        e || (e = "tmp"), n.setCookie("gl_tg_seo", e, 0, "/", C.domain)
                    }
                    return "tmp" == e ? ["", ""] : (e = e.split("|"), [e.pop(), e.join("|")])
                },
                x = function () {
                    var e = n.getCookie("gl_ifid");
                    if (o.referrer) {
                        var t = n.parseUrl(l.href),
                            i = t.params[C.innerFromIdName] || "";
                        i && i != e && (e = i, n.setCookie("gl_ifid", e, 0, "/", C.domain))
                    }
                    return e || ""
                },
                y = [],
                w = function (e, t) {
                    var i = e.tagName.toLowerCase();
                    if ("a" == i && "_self" == n.attr(e, "target").toLowerCase() && (t.redirectUrl = n.attr(e, "href")), t.actionType == C.ACTION_TYPE_SHOW) return void y.push(t);
                    var o = new k(t);
                    t.actionType == C.ACTION_TYPE_CLICK ? "form" == i ? n.addEvent(e, "submit", function () {
                        return o.trackEvent(), !0
                    }) : n.addEvent(e, "click", function () {
                        return o.trackEvent(), !o.redirectUrl || (n.later(function () {
                            l.href = o.redirectUrl
                        }, 300), !1)
                    }) : t.actionType == C.ACTION_TYPE_HOVER && n.addEvent(e, "mouseover", function () {
                        return n.data(e, "gl_over_tracked") || (o.trackEvent(), n.data(e, "gl_over_tracked", 1)), !0
                    })
                },
                _ = function (e) {
                    var t = new Image;
                    t.src = e
                },
                k = function (e) {
                    this.code = e.code || "", this.params = e.params || {}, this.showId = e.showId || "", this.actionType = e.actionType || C.ACTION_TYPE_CLICK, this.redirectUrl = e.redirectUrl || "", this.setBusiness(e.business)
                };
            k.prototype = {
                trackEvent: function () {
                    C.gjch = C.gjch.replace("&", C.paramSeparator);
                    var e = v(),
                        t = ["http://" + C.server + "/" + (this.business ? "b.gif" : "e.gif") + "?gjch=" + (C.gjch || "-"), "gjchid=" + n.guid(), "gjalog=" + (this.getActionInfo() || "-"), "uuid=" + (u() || "-"), "sid=" + h(), "fromid=" + (e[0] || "-"), "ifid=" + (x() || "-"), "seo=" + (e[1] || "-"), "r=" + s++];
                    C.gjchver && t.push("gjchver=" + C.gjchver), _(t.join("&"))
                }, setBusiness: function (e) {
                    !e || "true" != e && "TRUE" != e && "YES" != e && "yes" != e && "1" != e ? this.business = !1 : this.business = !0
                }, getActionInfo: function () {
                    var e = this,
                        t = [];
                    return e.code && t.push(e.code), n.each(e.params, function (e, n) {
                        t.push(n + "=" + e)
                    }), e.actionType && t.push("atype=" + e.actionType), e.showId && t.push("showid=" + e.showId), t.join(C.paramSeparator)
                }
            }, k.parseCode = function (e) {
                var t = e.replace("&", C.paramSeparator).split(C.paramSeparator),
                    i = {
                        code: t.shift(),
                        params: {},
                        actionTypes: "",
                        showId: "",
                        business: !1
                    };
                return n.each(t, function (e) {
                    e = e.split("="), e[0] && ("atype" == e[0] ? i.actionTypes = e[1].split("|") : "showid" == e[0] ? i.showId = e[1] : "business" == e[0] ? i.business = e[1] : i.params[e[0]] = e[1])
                }), i
            };
            var C = {
                ACTION_TYPE_SHOW: "show",
                ACTION_TYPE_CLICK: "click",
                ACTION_TYPE_HOVER: "hover",
                gjch: "",
                gjchver: "A",
                server: "analytics.ganji.com",
                domain: p.domain,
                uuidName: "ganji_uuid",
                fromIdName: "fromid",
                innerFromIdName: "ifid",
                actionAttrName: "gjalog",
                paramSeparator: "@",
                customOrganics: {},
                ignoredKeywords: {},
                addOrganic: m,
                addIgnoredKeyword: b,
                bindAllTrackEvent: function () {
                    y = [], n.each(n.getByAttribute("[" + C.actionAttrName + "]"), function (e) {
                        var t = k.parseCode(n.attr(e, C.actionAttrName));
                        n.each(t.actionTypes, function (n) {
                            t.actionType = n, w(e, t)
                        })
                    }), y.length > 0 && n.each(y, function (e) {})
                }, trackPageView: function (e) {
                    if (c) return !1;
                    c = !0, e && (C.gjch = e), C.gjch = C.gjch.replace("&", C.paramSeparator);
                    var t = v(),
                        i = ["http://" + C.server + "/p.gif?gjch=" + (C.gjch || "-"), "gjchid=" + n.guid(), "uuid=" + (u() || "-"), "sid=" + h(), "fromid=" + (t[0] || "-"), "ifid=" + (x() || "-"), "seo=" + (t[1] || "-"), "refer=" + (o.referrer ? encodeURIComponent(o.referrer) : "-"), "ua=" + p.uaFormat, "fv=" + p.flashPlayerVersion, "sc=" + p.screenFormart];
                    C.gjchver && i.push("gjchver=" + C.gjchver);
                    var r = n.getCookie("gl_refer", f, 0, "/", C.domain),
                        a = new Date;
                    return !(r && (r = r.split("@|@"), r[0] && r[0] == l.href && r[1] && a.getTime() - r[1] < 1e3)) && (n.setCookie("gl_refer", l.href + "@|@" + a.getTime(), 0, "/", C.domain), void _(i.join("&")))
                }, trackEvent: function (e, t) {
                    var n = k.parseCode(e);
                    n.redirectUrl = t, n.actionType = n.actionTypes[0] || C.ACTION_TYPE_SHOW;
                    var i = new k(n);
                    i.trackEvent()
                }
            };
            GJ.LogTracker = C, GJ.LogTracker.fromIdName = "fromid", GJ.LogTracker.innerFromIdName = "ifid", GJ.LogTracker.domain = "ganji.com"
        }
    },
    function (e, t) {
        GJ.add("js/util/storage/storage2.js", ["jquery"], function (e, t, n) {
            "use strict";

            function i(e) {
                return g.stringify(e)
            }

            function o(e) {
                if ("string" == typeof e) return g.parse(e)
            }

            function r(e) {
                return e.replace(f, "___")
            }

            function a(e, t) {
                return i({
                    v: e,
                    e: t
                })
            }

            function l(e, t) {
                var n = (new Date).getTime();
                return t && t.e && n > t.e ? null : t ? void 0 !== t.v ? t.v : t : null
            }

            function s(e) {
                var t = {
                    set: function (t, n, i) {
                        if (void 0 === n) return localStorage.removeItem(e + t);
                        var o = a(n, i);
                        try {
                            localStorage.setItem(e + t, o)
                        } catch (r) {
                            localStorage.clear()
                        }
                    }, get: function (t) {
                        var n = o(localStorage.getItem(e + t)),
                            i = l(t, n);
                        return null === i && localStorage.removeItem(e + t), i
                    }, remove: function (t) {
                        return localStorage.removeItem(e + t)
                    }, clear: function () {
                        localStorage.clear()
                    }
                };
                return t
            }

            function c(e) {
                var t, n, i = function (i) {
                    return function () {
                        var o = Array.prototype.slice.call(arguments, 0);
                        o.unshift(n), t.appendChild(n), n.addBehavior("#default#userData"), n.load(e);
                        var r = i.apply(s, o);
                        return t.removeChild(n), r
                    }
                };
                t = h.contentWindow.document, n = t.createElement("div");
                var s = {
                    set: i(function (t, n, i, o) {
                        if (n = r(n), void 0 === i) return t.removeAttribute(n), t.save(e), null;
                        var l = a(i, o);
                        try {
                            t.setAttribute(n, l), t.save(e)
                        } catch (s) {
                            var c = t.XMLDocument.documentElement.attributes;
                            t.load(e);
                            for (var p = 0, d = c.length; p < d; p++) n = c[p].name, t.removeAttribute(n);
                            t.save(e)
                        }
                    }),
                    get: i(function (t, n) {
                        var i = r(n),
                            a = o(t.getAttribute(i)),
                            s = l(n, a);
                        return null === s && (t.removeAttribute(n), t.save(e)), s
                    }),
                    remove: i(function (t, n) {
                        n = r(n), t.removeAttribute(n), t.save(e)
                    }),
                    clear: i(function (t) {
                        var n = t.XMLDocument.documentElement.attributes;
                        t.load(e);
                        for (var i = 0, o = n.length; i < o; i++) {
                            var r = n[i].name;
                            t.removeAttribute(r)
                        }
                        t.save(e)
                    })
                };
                return s
            }

            function p(e) {
                var t, n = "ganji_";
                e && "string" == typeof e && (n = e + "_"), u ? t = s(n) : document.documentElement.addBehavior && (t = c(n)), GJ.mix(this, t, !0)
            }
            var d = e("jquery"),
                u = !!window.localStorage,
                f = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
            if (!u) {
                n.pause();
                var h = document.createElement("IFRAME");
                h.style.display = "none", d(h).bind("load", function () {
                    n.resume()
                }), h.src = "http://sta.ganji.com/crossdomain.html", document.insertBefore(h, document.firstChild)
            }
            var g = window.JSON ? window.JSON : {
                stringify: GJ.jsonEncode,
                parse: GJ.jsonDecode
            };
            n.exports = p
        })
    },
    function (e, t) {
        GJ.add("app/ms_v2/widget/userinfo.js", ["jquery", "app/common/widget/widget.js"], function (e, t, n) {
            "use strict";
            var i = e("jquery"),
                o = e("app/common/widget/widget.js"),
                r = '<a class="logined-a js-username" href="http://www.ganji.com/vip/" title="用户中心" target="_blank">{{username}}<em class="user-arrow">&nbsp;</em></a><a class="logined-b js-signout-btn" data-widget="app/ms_v2/user/user.js#logout" href="#" target="_self" title="退出">退出</a><div class="user-list"><ul class="user-list-items js-list"></ul><i class="user-list-lb"></i><i class="user-list-rb"></i></div>';
            n.exports = o.define({
                init: function (e) {
                    this.config = e, this.updateUserLoginEl()
                }, updateUserLoginEl: function () {
                    function e(e, t, n) {
                        for (var i, o = ""; n > 0 && !(t >= e.length); n--, t++) i = e.charAt(t).toString(), /[^\x00-\xff]/.test(i) && n--, o += i;
                        return o
                    }
                    var t = this.config,
                        n = {
                            1: ["http://fangvip.ganji.com/", "我的房产帮帮"],
                            2: ["http://tuiguang.ganji.com/che/?from=bang", "二手车帮帮", "esctght"],
                            7: ["http://tuiguang.ganji.com/che/?from=bang", "二手车帮帮", "esctght"],
                            3: ["http://hrvip.ganji.com/", "我的招聘帮帮", "/all@pos=top_guide@name=zhaopin@atype=click"],
                            101: ["http://www.ganji.com/service_store/manage/go.php", "管理我的店铺"]
                        },
                        a = [
                            ["http://www.ganji.com/vip/my_post_list.php", "我发布的信息"],
                            ["http://www.ganji.com/vip/my_favorite_post_list.php", "我收藏的信息"]
                        ],
                        l = GJ.getCookie("bizs");
                    try {
                        l = GJ.jsonDecode(l)
                    } catch (s) {
                        l = []
                    }
                    l && GJ.each(l, function (e) {
                        var t = n[e];
                        t && a.push(t)
                    });
                    var c = t.username;
                    c.replace(/[^\x00-\xff]/g, "**").length > 18 && (c = e(c, 0, 14) + "..."), r = r.replace("{{username}}", c);
                    var p = i(t.$el);
                    p.find("span").html(r);
                    var d = p.find(".js-username"),
                        u = p.find(".js-signout-btn"),
                        f = p.find(".js-list");
                    GJ.each(a, function (e) {
                        var t = i("<li></li>"),
                            n = i("<a></a>");
                        n.attr("href", e[0]).attr("target", "_blank").attr("title", e[1]).text(e[1]), e[2] && n.attr("gjalog", e[2]), t.append(n), f.append(t)
                    }), GJ.use("log_tracker", function () {
                        GJ.LogTracker.bindAllTrackEvent()
                    }), p.find(".js-signup-btn, .js-signin-btn").hide(), u.attr("href", "http://www.ganji.com/user/logout.php?next=" + encodeURIComponent(window.location.href));
                    var h = !1;
                    d.mouseenter(function () {
                        h = !1, p.addClass("active")
                    }).mouseleave(function () {
                        h = !0, setTimeout(function () {
                            h && p.removeClass("active")
                        }, 100)
                    }), f.mouseenter(function () {
                        h = !1, p.addClass("active")
                    }).mouseleave(function () {
                        h = !0, setTimeout(function () {
                            h && p.removeClass("active")
                        }, 100)
                    }), o.initWidget(i(".js-signout-btn"))
                }
            })
        })
    },
    function (e, t, n) {
        "use strict";
        n(34), n(40), t.initWidgets = Widget.initWidgets, t.initWidget = Widget.initWidget, t.ajaxWidget = Widget.define({
            init: function (e) {
                var t = $(e.$el),
                    n = e.url,
                    i = Widget.template($(e.template).html()),
                    o = e.dataType || "json",
                    r = e.$target || t;
                $.get(n, function (n) {
                    n && ($.isArray(n) ? GJ.each(n, function (e) {
                        r.append(i(e))
                    }) : r.html(i(n)), e.showAfterDone && t.show())
                }, o)
            }
        }), t.sideFloatWidget = Widget.define({
            events: {
                "click [data-role=backToTop]": "backToTop",
                "click [data-role=small]": "open",
                "click [data-role=close]": "onClose",
                "click [data-role=wechatOpen]": "qrOpen",
                "click [data-role=wechatClose]": "qrClose"
            },
            init: function (e) {
                var t = this;
                if (this.categoryId = e.categoryId, this.config = e, this.check(), $(window).on("resize", $.proxy(this.check, this)).on("scrollEvent", $.proxy(this.onScroll, this)).on("scroll", $.proxy(this.onScroll, this)), setTimeout(function () {
                        e.$el.addClass("backtotop-huodong-active")
                    }, 4e3), this.categoryId) {
                    this.categoryIdKey = "categoryId_" + this.categoryId;
                    var i = n(41);
                    t.storage = new i("slideFloatWidget");
                    var o = t.storage.get(t.categoryIdKey);
                    o !== -1 && t.open()
                }
                this.qrcode = this.config.$wechatQrcode, this.qrcode && this.qrcode.data("shown", !1), this.qrcodeClose = this.config.$wechatClose, this.wechatOpen = this.config.$wechatOpen, this.wechatOpen && this.wechatOpen.show()
            }, onClose: function (e) {
                e.preventDefault(), this.close(), this.forbidShow()
            }, forbidShow: function () {
                var e = new Date,
                    t = new Date(e.getFullYear(), e.getMonth(), e.getDate() + 1).getTime();
                if (this.storage) {
                    var n = this.storage.get(this.categoryIdKey);
                    n !== -1 && this.storage.set(this.categoryIdKey, -1, t)
                }
            }, open: function () {
                this.config.$el.addClass("backtotop-active")
            }, close: function () {
                this.config.$el.removeClass("backtotop-active"), this.config.$el.removeClass("backtotop-huodong-active")
            }, onScroll: function () {
                var e = this.config.$backToTop,
                    t = this.config.showBtnHeight || 500,
                    n = document.documentElement.scrollTop || document.body.scrollTop;
                n > t && !e.data("shown") ? (e.data("shown", !0), e.css("display", "block")) : n < t && e.data("shown") && (e.data("shown", !1), e.hide())
            }, check: function () {
                return GJ.getViewPort().width < 1124 ? (this.hide(), !1) : (this.show(), !0)
            }, hide: function () {
                this.$el.hide()
            }, show: function () {
                this.$el.show()
            }, backToTop: function (e) {
                e.preventDefault();
                var t = document.body.scrollTop ? document.body : document.documentElement;
                t.scrollTop && $(t).animate({
                    scrollTop: 0
                }, 100)
            }, qrOpen: function (e) {
                e.preventDefault(), this.qrcode.data("shown") ? this.qrClose(e) : (this.qrcode.show(), this.qrcode.data("shown", !0), this.qrcodeClose.show(), this.wechatOpen.addClass("wechat-qr-hover"), this.wechatOpen.removeClass("wechat-qr-none"), this.wechatOpen.hide())
            }, qrClose: function (e) {
                this.wechatOpen.show(), e.preventDefault(), this.qrcode.hide(), this.qrcode.data("shown", !1), this.qrcodeClose.hide(), this.wechatOpen.removeClass("wechat-qr-hover"), this.wechatOpen.addClass("wechat-qr-none")
            }
        }), t.sideFloatWechatWidget = Widget.define({
            events: {
                "click [data-role=wechatOpen]": "onOpen",
                "click [data-role=wechatClose]": "onClose"
            },
            init: function (e) {}, onOpen: function () {}, onClose: function () {}
        }), t.topScroller = Widget.define({
            init: function (e) {
                var t = $(e.$el);
                if (GJ.getViewPort().width < 1024) return void t.hide();
                var n = !1,
                    i = 500;
                (document.body.scrollTop > i || document.documentElement.scrollTop > i) && t.show(), t.click(function () {
                    var e = document.body.scrollTop ? document.body : document.documentElement;
                    return e.scrollTop && $(e).animate({
                        scrollTop: 0
                    }, 100), !1
                }), $(window).on("scroll", function () {
                    var e = document.documentElement.scrollTop || document.body.scrollTop;
                    e > i && !n && (n = !0, t.css("display", "block")), !e && n && (n = !1, t.hide())
                })
            }
        }), t.feedBack = Widget.define({
            init: function (e) {
                GJ.getViewPort().width >= 1024 && $(e.$el).show()
            }
        }), t.hoverWidget = Widget.define({
            init: function (e) {
                var t = $(e.$el),
                    n = t.find(".js-need-iframe-bg"),
                    i = null;
                if (n.size() && GJ.ua && 6 === GJ.ua.ie) {
                    i = $("<iframe></iframe>"), i.attr({
                        border: 0,
                        frameSpacing: 0,
                        frameBorder: 0,
                        scrolling: "no"
                    }).addClass("iframe-bg");
                    var o = n.parent().css("position"),
                        r = "relative" === o || "absolute" === o;
                    r ? n.parent().prepend(i) : $("body").prepend(i)
                }
                t.mouseenter(function () {
                    if (e.$activeBlock ? e.$activeBlock.addClass("active") : t.addClass("active"), i) {
                        var o = {};
                        o = r ? n.position() : n.offset(), i.css({
                            left: o.left,
                            top: o.top,
                            width: n.outerWidth(!0),
                            height: n.outerHeight(!0)
                        }).show()
                    }
                }).mouseleave(function () {
                    e.$activeBlock ? e.$activeBlock.removeClass("active") : t.removeClass("active"), i && i.hide()
                })
            }
        }), t.topNav = Widget.define({
            init: function (e) {
                var t = $(e.$el),
                    n = t.find(".js-list"),
                    i = t.find(".js-btn"),
                    o = $("#header");
                o.on("click", "a", function () {
                    GJ.LogTracker.trackEvent("/all@pos=top_guide@atype=click")
                }), i.mouseenter(function () {
                    t.addClass("active")
                }).one("mouseenter", function () {
                    GJ.use("js/util/top_nav.js", function (e) {
                        n.html(e), GJ.LogTracker.bindAllTrackEvent()
                    })
                }), t.mouseleave(function () {
                    t.removeClass("active")
                })
            }
        }), t.initPlaceholders = Widget.define({
            init: function () {
                $("[placeholder]").each(function () {
                    $(this).placeholder()
                })
            }
        }), t.initWebIM = Widget.define({
            init: function () {
                return !(window.location.search.indexOf("disablewebim=1") > -1) && void n(35)
            }
        }), t.initLogTracker = Widget.define({
            init: function (e) {
                e = e || window.PAGE_CONFIG.logTracker || {}, e.gjch && (GJ.LogTracker.gjch = e.gjch), e.gjchver && (GJ.LogTracker.gjchver = e.gjchver), e.reqid && (GJ.LogTracker.reqid = e.reqid), e.gjchNew && (GJ.LogTracker.gjchNew = e.gjchNew), e.server && (GJ.LogTracker.server = e.server), t.initEventLog(e), t.sendPageViewLog(e), t.sendPageSpeedLog(e)
            }
        }), t.initEventLog = Widget.define({
            init: function (e) {
                e = e || window.PAGE_CONFIG.logTracker || {}, e.gjch && (GJ.LogTracker.gjch = e.gjch), GJ.LogTracker.bindAllTrackEvent()
            }
        }), t.sendPageViewLog = Widget.define({
            init: function (e) {
                e = e || window.PAGE_CONFIG.logTracker || {}
            }
        }), t.sendPageSpeedLog = Widget.define({
            init: function (e) {
                e = e || window.PAGE_CONFIG.logTracker || {}, GJ.LogTracker.trackSpeedEvent(e.gjch)
            }
        }), t.sendGooglePvLog = Widget.define({
            init: function (e) {
                e = e || "UA-479320-1", GJ.use("js/app/common/google/google.js", function () {
                    GJ.google.trackPageview(e)
                })
            }
        }), t.userinfoWidget = Widget.define({
            init: function (e) {
                this.config = e, this.updateWidget()
            }, updateWidget: function () {
                var e = this.config,
                    t = GJ.getCookie("GanjiUserInfo"),
                    i = GJ.getCookie("t3");
                try {
                    t = GJ.jsonDecode(t) || {}
                } catch (o) {
                    t = {}
                }
                var r = i ? t.nickname : (GJ.jsonDecode(GJ.getCookie("GanjiUserInfo")) || {}).user_name;
                if (r = r || "") {
                    var t = n(42);
                    e.username = r, t(e)
                }
            }
        }), t.selfDirectionBind = Widget.define({
            init: function (e) {
                if ($(e.$el).find(".js-lazy-load").size()) {
                    n(37);
                    $(e.$el).find(".js-lazy-load").lazyload()
                }
                n(8), GJ.app.selfDirection.bind(e)
            }
        }), t.selfDirectionRender = Widget.define({
            init: function (e) {
                n(8), GJ.app.selfDirection.render(e)
            }
        }), t.pageFromSeo = Widget.define({
            init: function () {
                for (var e = ["http://www.baidu.com", "http://www.google.com", "http://www.so.com", "http://www.soso.com", "http://www.sogou.com"], t = document.referrer, n = 0, i = e.length; n < i; n++)
                    if (t.indexOf(e[n]) > -1) return !0;
                return !1
            }
        }), t.addCityDomainCookie = function (e) {
            var t = "citydomain",
                n = GJ.getCookie(t),
                i = 31536e3;
            return e && e !== n ? void GJ.setCookie(t, e, i) : void GJ.use("js/app/data/city_domain.js", function (o) {
                var r = {},
                    a = /^https?:\/\/(?:[^\.]+\.)?([^\.]+)\.(?:ganji.(?:com|cn))(?:\/([^$\/]+)(?:$|\/))?/.exec(window.location.href);
                GJ.each(o, function (e) {
                    r[e] = 1
                }), a && (a[1] && r[a[1]] ? e = a[1] : a[2] && r[a[2]] && (e = a[2]), e && e !== n && GJ.setCookie(t, e, i))
            })
        }, t.initUUID = function () {}, t.checkCDN = function () {
            n(38)
        }, t.checkNP = function () {
            n(39)
        }, t.triggerScroll = function () {
            var e = null,
                t = $(window);
            t.on("scroll", function () {
                clearTimeout(e), e = setTimeout(function () {
                    t.trigger("scrollEvent")
                }, 30)
            })
        }, t.first = function () {};
        var i = $.Deferred();
        t.last = Widget.define({
            init: function (e) {
                t.triggerScroll(), window.screen.width > 1280 ? GJ.setCookie("lg", 1, 604800) : GJ.removeCookie("lg");
                var o = "https:" === window.location.protocol;
                e && e.disableWebim || t.initWebIM(), (1 === GJ.rand(1, 500) || window.location.href.indexOf("check_dnspod")) && n(36), o || (1 !== GJ.rand(1, 50) && window.location.href.indexOf("check_cdn") === -1 || t.checkCDN(), !window.performance || 1 !== GJ.rand(1, 10) && window.location.href.indexOf("check_np") === -1 || t.checkNP()), i.resolve(), setTimeout(function () {
                    var e = !1;
                    (GJ.ua.chrome > 20 || GJ.ua.ie > 8) && !o && 10 === GJ.rand(1, 50) && Object.keys && Array.prototype.forEach && (e = !0), window.location.search.indexOf("istargetuser") !== -1 && (e = !0), e && !GJ.config.debug && setTimeout(function () {
                        n(33);
                        var e = [],
                            t = "http://tralog.ganji.com/sta/md5.gif?",
                            e = Object.keys(GJ.Module.cache).filter(function (e) {
                                return e.indexOf("guid_") === -1 && e.indexOf("http") === -1 && e.indexOf(".css") === -1 && GJ.Module.cache[e].factory
                            }),
                            i = e[GJ.rand(0, e.length - 1)],
                            o = GJ.Module.cache[i].factory,
                            r = "";
                        o && (r = MD5(o.toString().trim().replace(/^function\s*\((.*?)\)\s*{/, "function($1){")), t += "file=" + i + "&md5=" + r + "&dt=" + (new Date).getTime());
                        var a = new Image;
                        a.src = t
                    }, 5e3)
                }, 3e3)
            }
        }), t.always = Widget.define({
            init: function (e) {
                i.always(e)
            }
        })
    },
    function (e, t, n) {
        var i = n(43),
            o = n(19),
            r = n(14);
        i.first(), i.last({
            disableWebim: !0
        });
        ! function () {
            var e = document.createElement("script");
            e.src = "//hm.baidu.com/hm.js?e6e64ec34653ff98b12aab73ad895002";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }(), $(function () {
            n(11).init();
            var e = $(".hide_gich").val();
            e && (GJ.LogTrackerGz.gjch = e, GJ.LogTrackerGz.bindAllTrackEvent(), GJ.LogTrackerGz.trackPageView(GJ.LogTrackerGz.gjch)), $(".c2city").mouseenter(function () {
                "block" === $(".gj_sys_autoc_rs").css("display") && ($(".gj_sys_autoc_rs").hide(), $(".js_search_input_index").blur())
            })
        }), o.hoverWidget.setEl(".c2city"), o.autoInput.setEl(".suggestion_widget"), r.footer.setEl(".footer"), r.feedBack.setEl(".feed_back"), r.closeSide.setEl(".side-bar"), r.toTop.setEl(".totop"), Widget.initWidgets([o.hoverWidget, o.autoInput, r.closeSide, r.toTop, r.footer, r.feedBack])
    },
    function (e, t, n) {
        t = e.exports = n(2)(), t.push([e.id, ".footer{padding:50px 0 30px;background:#2e2e2e}.company-info{width:1190px;height:90px;margin:0 auto;color:#b8b8b8;padding-bottom:70px}.footer-logo{width:102px;height:90px;background-position:-154px -100px;float:left;margin-left:40px;_margin-left:20px}.phone-email{float:left;width:230px;padding-left:50px}.phone-email p{line-height:22px;font-size:14px}.phone-email p span{display:inline-block;font-size:12px}.gz-ewm{display:block;float:left;width:85px;height:85px;margin-top:4px}.ewm-tit{width:82px;line-height:22px;font-size:14px;float:left;padding-left:8px}.company-info .basic-info{float:left;width:390px;padding-left:20px;background:transparent;margin:0}.info-link{line-height:22px;font-size:14px;padding-bottom:8px}.info-link a{margin-right:35px}.info-link a,.info-link a:hover{color:#b8b8b8}.arc-info{line-height:20px;font-family:simhei}.friendly-link{width:1100px;padding:0 0 0 90px;height:28px;line-height:28px;margin:0 auto;position:relative;overflow:hidden}.friendly-active{height:auto}.friendly-link a{color:#666;line-height:28px;margin-right:20px;display:inline-block}.friendly-link a:hover,.link-tit{color:#666}.link-tit{position:absolute;left:0;top:0;width:90px;height:28px;font-size:16px}.open-box{top:10px;background-position:-70px -100px}.close-box,.open-box{position:absolute;right:0;display:block;width:16px;height:9px;font-size:0;line-height:0;cursor:pointer}.close-box{bottom:10px;background-position:-90px -100px}.friendly-active .open-box,.friendly-link .close-box{display:none}.friendly-active .close-box{display:block}", ""])
    },
    function (e, t, n) {
        t = e.exports = n(2)(), t.push([e.id, "body{min-width:1190px;font-family:Microsoft Yahei,arial,'sans-serif'}input::-moz-placeholder{color:#999}input::-webkit-input-placeholder{color:#999}#search_keyword:-ms-input-placeholder{color:#999}input.placeholder{color:#999}.fc-org{color:#f60}.w{width:1190px;margin:0 auto}.active .choose-city i,.call-back,.choose-city i,.close-box,.close-side,.ewm-app,.ewm-wx,.fb-btn,.footer-logo,.hot-phone i,.logo,.open-box,.totop{background-repeat:no-repeat;background-image:url(" + n(47) + ')}.header{background:#fff}.hd-top{width:1190px;height:85px;margin:0 auto}.logo{display:block;float:left;width:256px;height:85px;background-position:0 0;text-indent:-9999px;overflow:hidden}.c2city{margin:25px 0 0 30px;display:inline-block;position:relative;z-index:20;float:left;_zoom:1}.active .choose-city{border-radius:0;border-top-left-radius:5px;border-top-right-radius:5px}.choose-city{background:#fff;padding:0 15px;height:34px;line-height:34px;display:inline-block;position:relative;border:1px solid #e7e7e7;border-radius:5px}.choose-city:hover{text-decoration:none}.choose-city span{color:#000;font-size:14px}.choose-city i{display:inline-block;vertical-align:middle;width:12px;height:8px;margin-left:12px;background-position:0 -100px;_line-height:8px}.active .choose-city i{background-position:-15px -100px}.active .maskline{display:block}.maskline{left:1px;right:1px;z-index:21;height:1px;line-height:1px;font-size:1px}.city-box,.maskline{position:absolute;top:35px;background:#fff;display:none}.city-box{z-index:20;left:0;border:1px solid #e7e7e7;width:338px;font-family:Microsoft YaHei}.active .city-box{display:block}.all-city{padding:15px 0 0 15px;height:465px;overflow:auto}.all-city dl{_zoom:1;padding-bottom:7px;overflow:hidden}.all-city dt{width:30px;margin-right:6px;color:#22ac38}.all-city dd,.all-city dt{float:left;line-height:18px}.all-city dd{width:265px}.all-city dd a{display:inline-block;height:18px;padding:0 3px;color:#333;margin:0 5px 7px}.all-city dd a.on,.all-city dd a:hover{color:#fff;text-decoration:none;background:#22ac38}.city-line{height:3px;line-height:0;font-size:0;margin:0 0 13px;border-bottom:1px solid #e7e7e7;_zoom:1}.more-city{height:32px;line-height:32px;border-top:1px solid #e7e7e7;color:#b8b8b8;padding-left:15px}.search-box{position:relative;z-index:20;float:right;width:328px;height:36px;padding:25px 95px 0 0}.search-input{float:left;width:244px;height:34px;line-height:34px;padding:0 10px;border:1px solid #22ac38;border-right:none;border-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0}.search-btn,.search-input{font-family:Microsoft YaHei;font-size:14px}.search-btn{float:right;width:63px;height:36px;color:#fff;background:#22ac38;border:none;border-radius:5px;border-top-left-radius:0;border-bottom-left-radius:0;cursor:pointer}.search-btn:hover{background:#179500}body .gj_sys_autoc_rs{border-radius:5px;padding:5px 0}body .gj_sys_autoc_rs .hot-tip{color:#22ac38;display:block;cursor:default}body .gj_sys_autoc_rs ul{padding:0}body .gj_sys_autoc_rs ul li{font-size:14px;height:30px;line-height:30px;text-indent:10px;padding:0;color:#666}body .gj_sys_autoc_ov{background:#ffe4bc}body .gj_sys_autoc_ov span{color:#22ac38;background:#fff}.hot-phone{float:right;height:30px;line-height:30px;font-size:20px;margin-top:27px;color:#22ac38;font-weight:700}.hot-phone i{display:block;width:30px;height:30px;margin-right:5px;float:left;background-position:-30px -100px}.nav{height:46px;line-height:46px;background:#22ac38}.nav a{display:inline-block;font-size:16px;padding:0 30px;color:#fff}.nav a.active,.nav a:hover{text-decoration:none;background:#179500;color:#fff}.side-bar{position:fixed;z-index:999;bottom:0;right:10px;_position:absolute;_top:expression(documentElement.scrollTop+document.documentElement.clientHeight - 90 + "px")}.side-bar a{display:block;height:44px}.totop{width:44px;background-position:0 -145px}.totop:hover{background-position:-45px -145px}.ewm-app,.ewm-wx,.fb-btn{font-family:simhei;color:#e7ffe9;line-height:44px}.ewm-wx{position:absolute;top:0;left:-73px;width:72px;background-position:-191px -200px;text-indent:33px}.ewm-wx:hover{background-position:-191px -245px;color:#e7ffe9;text-decoration:none}.ewm-app{position:absolute;top:0;left:-146px;width:72px;background-position:-118px -200px;text-indent:40px}.ewm-app:hover{background-position:-118px -245px;color:#e7ffe9;text-decoration:none}.fb-btn{position:absolute;top:0;left:-219px;width:72px;background-position:-45px -200px;text-indent:42px}.fb-btn:hover{background-position:-45px -245px;color:#e7ffe9;text-decoration:none}.call-back{position:absolute;top:0;left:-264px;width:44px;background-position:0 -200px}.call-back:hover{background-position:0 -245px}.ewm-box{display:none}.ewm-app.active .ewm-box,.ewm-wx.active .ewm-box{display:block;position:absolute;top:-173px;left:-44px;width:158px;height:158px;background:#fff;border:1px solid #22ac38}.ewm-wx.active .ewm-box{left:-88px}.ewm-box img{display:block;width:158px;height:158px}.ewm-box i{bottom:-22px;border-color:#22ac38 transparent transparent}.ewm-box em,.ewm-box i{position:absolute;left:72px;display:block;_display:none;width:0;height:0;border-style:solid dashed dashed;border-width:11px 7px}.ewm-box em{bottom:-21px;border-color:#fff transparent transparent}.ewm-wx .ewm-box em,.ewm-wx .ewm-box i{left:115px}.close-side{position:absolute;top:-57px;right:0;width:44px;background-position:-109px -145px}.close-side:hover{background-position:-109px -100px}.open-side{background-position:0 -290px}.open-side:hover{background-position:-45px -290px}.call-back-box{position:absolute;top:-57px;right:44px;width:248px;height:28px;padding:8px;background:#22ac38}.call-back-input{float:left;width:160px;height:18px;line-height:18px;padding:5px;color:#333;background:#fff;border:none}.call-back-btn,.call-back-input{font-family:microsoft yahei;font-size:14px}.call-back-btn{float:right;width:70px;height:28px;padding:0;background:#22ac38;border:1px solid #fff;color:#fff;cursor:pointer}.call-back-btn:hover{background:#007130}.icon-arr{position:absolute;bottom:-22px;left:22px;display:block;_display:none;width:0;height:0;border-color:#22ac38 transparent transparent;border-style:solid dashed dashed;border-width:11px 7px}.call-back-tip{position:absolute;top:-27px;left:0;width:306px;height:26px;line-height:26px;color:red;text-indent:9px;background:#fff;border:1px solid red;border-bottom:none}.list-bigimg{margin-right:-10px}.list-bigimg li{float:left;margin-right:5px;margin-bottom:5px;_display:inline;position:relative;z-index:2}.list-infoBox{height:290px;width:290px;background:#fff;position:relative;z-index:5;border:2px solid #f5f5f5}.list-infoBox:hover{border:2px solid #22ac38}.list-infoBox p{padding:0 10px}.remote{position:absolute;top:176px;right:0;display:inline-block;height:18px;line-height:18px;font-size:12px;color:#fff;padding:0 3px;background:rgba(0,0,0,.5)}.info-title em{color:#e30}.infoBox{font-size:16px;line-height:1em;margin:12px 0 8px;overflow:hidden;text-overflow:ellipsis;-o-text-overflow:ellipsis;width:270px;white-space:nowrap}.info-title{color:#000}.info-title:hover{color:#e30;text-decoration:none}.imgtype img{vertical-align:top}.list-infoBox .fc-gray{color:#999}.priType{font-size:22px;color:#ff7e00}.priType-s{margin-top:3px}.priType-s s{color:#999;font-size:14px}.priType-s span{margin-right:5px}.priType-s span.ctag-org{line-height:12px;padding:0 2px 0 0;font-size:12px;color:#ff7e00;border:1px solid #ff7e00}.priType-s span.ctag-org i{padding:0 2px 0 1px;line-height:12px;font-weight:400;color:#fff;background:#ff7e00;margin-right:1px}.ctag-green{font-size:12px;line-height:14px;padding:0 1px;float:right;border:1px solid #22ac38;color:#22ac38;margin-top:1px}.sup-green,.sup-red,.sup-yellow{position:absolute;top:0;left:0;display:inline-block;width:24px;height:32px;padding:2px 8px;text-align:center;color:#fff;font-size:12px;line-height:16px}.sup-yellow{background:#f39800}.sup-green{background:#22ac38}.sup-red{background:#eb6100}.sup-green em,.sup-red em,.sup-yellow em{position:absolute;top:36px;left:0;display:block;width:0;height:0;border-color:#eb6100 #eb6100 transparent;border-style:solid;border-width:0 20px 8px}.sup-red em{border-color:#eb6100 #eb6100 transparent}.sup-yellow em{border-color:#f39800 #f39800 transparent}.sup-green em{border-color:#22ac38 #22ac38 transparent}.fb-pop{width:550px;height:405px;padding:20px 20px 0;background:#fff}.fb-txt{height:36px;line-height:36px;font-size:16px;color:#333;padding-bottom:10px}.fb-ta{display:block;width:528px;padding:7px 10px;border:1px solid #d1d1d1;font-size:14px;color:#333;font-family:Microsoft YaHei;resize:none}.fb-ta-1{height:184px;margin-bottom:20px}.fb-ta-2{height:44px}.ta-error{color:#f60;line-height:20px;height:20px}.fb-submit{display:block;width:130px;height:30px;background:#fd8000;color:#fff;font-size:14px;border:none;cursor:pointer;font-family:Microsoft YaHei;margin:0 auto}.fb-submit:hover{background:#fd6000}.fb-suc-txt{padding:125px 0 160px;text-align:center;font-size:20px;color:#666;line-height:32px}.cont-find{display:block;width:130px;height:30px;line-height:30px;text-align:center;color:#fff;font-size:14px;background:#fd8000;margin:0 auto}.cont-find:hover{background:#fd6000;color:#fff;text-decoration:none}.crumbs{width:1190px;margin:0 auto;padding-top:20px;line-height:22px}.crumbs,.crumbs a{color:#678fae}.crumbs a:hover{color:#e30;text-decoration:none}.crumbs span{color:#666}', ""])
    },
    function (e, t, n) {
        e.exports = n.p + "global-3.eec70361a72926654002776168a54cb7.png"
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
    function (e, t) {
        e.exports = Widget.define({
            childNum: 0,
            childWidth: 0,
            currentIndex: 0,
            lastIndex: 0,
            events: {},
            init: function (e) {
                this.config = e;
                var t = this.config.$slide_container.children();
                this.childNum = parseInt(t.length) - 1, this.childWidth = parseInt(t.first().width()) + 10, this.currentIndex = 1, this.lastIndex = t.length - 1, this.autoPlay(), this.bind()
            }, imgPrev: function () {
                this.changePos(!1), this.config.$slide_container.animate({
                    "margin-left": "+0px"
                }, 300)
            }, imgNext: function () {
                this.move(!0)
            }, changePos: function (e) {
                var t = this.config.$slide_container.children();
                if (1 == e) {
                    var n = t.first();
                    this.config.$slide_container.children().first().remove(), this.config.$slide_container.children().eq(this.lastIndex - 1).after(n), this.config.$slide_container.css("margin-left", "0px")
                } else {
                    var i = this.childWidth * this.currentIndex;
                    this.config.$slide_container.css("margin-left", "-" + i + "px");
                    var o = t.eq(this.lastIndex);
                    t.eq(this.lastIndex).remove(), this.config.$slide_container.children().first().before(o)
                }
            }, autoPlay: function () {
                var e = this;
                this.timer = setInterval(function () {
                    e.imgNext()
                }, 3e3)
            }, stop: function () {
                window.clearInterval(this.timer)
            }, move: function (e) {
                var t = this,
                    n = this.childWidth * this.currentIndex;
                this.config.$slide_container.animate({
                    "margin-left": "-" + n + "px"
                }, 300, function () {
                    t.changePos(e)
                })
            }, bind: function () {
                var e = this;
                this.config.$el.on("mouseenter", function () {
                    e.stop()
                }).on("mouseleave", function () {
                    e.stop(), e.autoPlay()
                }).on("selectstart", function () {
                    return !1
                }), this.config.$prev_btn.on("click", function () {
                    e.imgPrev()
                }), this.config.$next_btn.on("click", function () {
                    e.imgNext()
                })
            }
        })
    },
    function (e, t) {
        function n(e) {
            $(this.config.$item).fadeOut(0).eq(e).fadeIn(0), this.config.$point.removeClass("active").eq(e).addClass("active"), this.config.$el.removeClass(function (e, t) {
                var n = [];
                return t = t.split(" "), $.each(t, function (e, t) {
                    /index\-/.test(t) && n.push(t)
                }), n.join(" ")
            }).addClass("index-" + e)
        }

        function i(e, t) {
            e = e.split("#"), GJ.use(e[0], function (n) {
                e[1] && (n = n[e[1]]), t(n)
            })
        }
        e.exports = Widget.define({
            events: {
                mouseenter: "stop",
                mouseleave: "loop",
                "click [data-role=prev]": "prev",
                "click [data-role=next]": "next",
                "click [data-slide-to]": function (e) {
                    e.preventDefault(), this.stop(), this.slideTo($(e.target).data("slide-to"))
                }
            },
            init: function (e) {
                e.interval = e.interval || 1e3, this.config = e, this.index = 0, this.total = $(e.$item).length, this.config.step && (this.totalPage = Math.ceil(this.total / this.config.step)), this.config.$item.length >= 2 && this.loop()
            }, prev: function (e) {
                return !(this.config.$item.length < 2) && (e && (e.preventDefault(), this.stop()), void this.slideTo(this.index - 1, "prev"))
            }, next: function (e) {
                return !(this.config.$item.length < 2) && (e && (e.preventDefault(), this.stop()), void this.slideTo(this.index + 1, "next"))
            }, stop: function (e) {
                this.config.ignoreMouse && e && e.type || clearInterval(this.timer)
            }, loop: function () {
                var e = this;
                this.config.interval !== -1 && this.getLoopFn(function (t) {
                    clearInterval(e.timer), e.timer = setInterval(function () {
                        t.call(e)
                    }, e.config.interval)
                })
            }, slideTo: function (e, t) {
                var n = this;
                if (!n.animating) {
                    this.stop();
                    var i = this.total;
                    this.totalPage && (i = this.totalPage), e = e >= i ? 0 : e, e = e < 0 ? i - 1 : e, this.getSlideFn(function (i) {
                        i.call(n, e, t), n.index = e
                    }), this.loop()
                }
            }, getSlideFn: function (e) {
                var t = this;
                return this.slideFn ? e(this.slideFn) : void(this.config.slideFn ? i(this.config.slideFn, function (n) {
                    t.slideFn = n, e(t.slideFn)
                }) : (this.slideFn = n, e(this.slideFn)))
            }, getLoopFn: function (e) {
                var t = this;
                return this.loopFn ? e(this.loopFn) : void(this.config.loopFn ? i(this.config.loopFn, function (n) {
                    t.loopFn = n, e(n)
                }) : (this.loopFn = function () {
                    t.slideTo(t.index + 1, "next")
                }, e(this.loopFn)))
            }, slideFn: function (e) {
                $(this.config.$item).fadeOut(0).eq(e).fadeIn(0), this.config.$point && this.config.$point.removeClass("active").eq(e).addClass("active"), this.config.$el && this.config.$el.removeClass(function (e, t) {
                    var n = [];
                    return t = t.split(" "), $.each(t, function (e, t) {
                        /index\-/.test(t) && n.push(t)
                    }), n.join(" ")
                }).addClass("index-" + e)
            }
        })
    }, , , ,
    function (e, t, n) {
        var i = n(11);
        i.init(), t.indexForm = Widget.define({
            getCookie: function (e) {
                var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
                return (t = document.cookie.match(n)) ? unescape(t[2]) : null
            }, init: function (e) {
                var t = e.$sellPhone,
                    n = this;
                $(".sell-phone-submit").click(function (r) {
                    r.preventDefault();
                    var a = e.$el.attr("data-value-domain"),
                        l = t.val();
                    if (!l) return void o("请填写手机号码");
                    if (!/^1[34578]\d{9}$/.test(l)) return void o("请填写正确的手机号码");
                    var s = $("input[name='source_type']").val();
                    void 0 != typeof s && "" != s || (s = "clue_source_pc_index");
                    var c = n.getCookie("clueSourceCode");
                    void 0 !== c && "" !== c || (c = "*");
                    var p = $(this).data("clue-entry");
                    return void 0 !== p && "" !== p || (p = "00"), $.ajax({
                        url: "/" + a + "/sell/?act=submit",
                        type: "post",
                        data: {
                            phone: l,
                            sourceType: s,
                            source_type_code: c + "#" + p
                        },
                        dataType: "json",
                        success: function (t) {
                            if (t.status === !0) {
                                e.$sell_form.hide(), $(".sell-phone-error").hide().text(""), $(".submit-suc").show(100), $(".clue_num").text(parseInt($(".clue_num").text()) + 1), _hmt.push(["_trackEvent", "pc_index_fastPick", "click", "pc_index_fastPick_sell_submit"]), void 0 != t.scode && "" != t.scode && GJ.LogTrackerGz.trackEvent("tel=" + l + "#seller&scode=" + t.scode);
                                var n = "提交成功"
                            } else {
                                o(t.msg);
                                var n = "提交失败"
                            }
                            window.tracker.send({
                                tracking_type: "submit",
                                eventid: "0210050000000013",
                                telephone: l,
                                target: "收车",
                                result: n,
                                pre_clue_id: t.clue_id,
                                scode: t.scode
                            })
                        }, error: function () {
                            window.alert("网络原因，提交失败。")
                        }, done: function () {
                            if ("block" === $(".submit-suc").css("display")) {
                                setTimeout(function () {
                                    i()
                                }, 3e3)
                            }
                        }
                    }), !1
                }), e.$go_back.click(function (e) {
                    e.preventDefault(), i()
                });
                var i = function () {
                    e.$sell_form.show(100), $(".submit-suc").hide(), e.$sellPhone.val("")
                }
            }
        });
        var o = function (e) {
            $(".sell-phone-error").show().text(e)
        };
        t.pageTurning = Widget.define({
            init: function (e) {
                var t = $(".slide-box ul").length,
                    n = e.$ulLength,
                    i = 0;
                e.$nextSlide && e.$nextSlide.click(function (e) {
                    e.preventDefault(), i = i < t - 1 ? ++i : 0, n.eq(i).show().siblings().hide(100)
                })
            }
        }), t.springFestivalClosed = Widget.define({
            init: function (e) {
                $(".notice-close").click(function (t) {
                    e.$el.hide()
                })
            }
        }), t.indexTab = Widget.define({
            init: function (e) {
                var t = e.$showList,
                    n = 0,
                    i = e.$tabSelect;
                i.on("mouseenter click", function () {
                    n = $(this).index() - 1, moveAction($(this).attr("eventid"))
                }), moveAction = function (e) {
                    i.eq(n).addClass("on").siblings().removeClass("on"), t.find(".list").eq(n).show().siblings().hide();
                    var o = "";
                    t.find(".list").eq(n).find("li").each(function (e, t) {
                        o += $(this).attr("clue_id") + "@" + e + "_"
                    }), o = o.substring(0, o.length - 1), window.tracker.send({
                        tracking_type: "show",
                        eventid: e,
                        carids: o
                    })
                }, moveAction($(i[0]).attr("eventid"))
            }
        }), t.footer = Widget.define({
            init: function (e) {
                e.$is_show_box.on("click", function () {
                    $(this).parents(".friendly-link").toggleClass("friendly-active")
                }), $(".open-box").on("click", function () {
                    $(this).parents(".friendly-link").toggleClass("friendly-active")
                })
            }
        }), t.joinUs = Widget.define({
            init: function (e) {
                $jobOpen = e.$job_open, $jobOpen.click(function () {
                    $(this).closest(".job-box").toggleClass("active")
                })
            }
        }), t.hiddenTopVideo = Widget.define({
            init: function (e) {
                $(".vedio-close").click(function () {
                    var e = "hasShowVideo";
                    GJ.setCookie(e, "close", 86400), $(".video-box").fadeOut(), $("#video")[0].pause()
                })
            }
        }), t.hoverWidget = Widget.define({
            init: function (e) {
                var t = $(e.$el),
                    n = null;
                t.mouseenter(function () {
                    n = setTimeout(function () {
                        t.addClass("active"), t.hasClass("active") && "block" === $(".gj_sys_autoc_rs").css("display") && ($(".gj_sys_autoc_rs").hide(), $(".js_search_input_index").blur())
                    }, 300)
                }).mouseleave(function () {
                    clearTimeout(n), t.removeClass("active")
                })
            }
        })
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
    function (e, t, n) {
        t = e.exports = n(2)(), t.i(n(20), ""), t.i(n(46), ""), t.i(n(45), ""), t.push([e.id, ".index-area{background:#f5f5f5}.sel-op{width:1190px;height:413px;margin:0 auto}.sel-area{width:294px;height:399px;padding:10px 0 0 22px;background:#fff;border:2px solid #e7e7e7}.buy-tit{height:35px;line-height:35px;font-size:16px;color:#000;border-bottom:1px solid #e7e7e7}.buy-tit span{color:#999;font-size:12px;margin-left:5px}.buy-tit span em{color:#22ac38}.buy-tit span em.orgtext{color:#ff7e00;margin-right:5px}.sx{margin-top:6px}.sx .active{position:relative;z-index:40}.sx-pinpai{border:2px solid #fff;padding-bottom:6px}.sx .dt{font-size:14px;color:#000;line-height:32px}.sx-pinpai .dd{margin:0 -10px;height:42px}.ser-gua li i,.submit-suc i,.sx-chexing .dd a,.tip-right{background-image:url(" + n(434) + ");background-repeat:no-repeat}.sx-pinpai .dd a{display:inline-block;float:left;width:43px;height:42px;color:#666;line-height:66px;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background-position:top;background-repeat:no-repeat}.tip-right{background-position:-260px -150px;display:block;float:left;width:11px;height:20px;margin:10px 0 0 15px}.i-dazhong{background:url(" + n(337) + ")}.i-toyota{background:url(" + n(416) + ")}.i-honda{background:url(" + n(359) + ")}.i-benz{background:url(" + n(318) + ")}.i-bmw{background:url(" + n(320) + ")}.i-audi{background:url(" + n(312) + ")}.i-buick{background:url(" + n(322) + ")}.i-chevrolet{background:url(" + n(330) + ")}.i-ford{background:url(" + n(348) + ")}.i-hyundai{background:url(" + n(367) + ")}.i-kia{background:url(" + n(379) + ")}.i-richan{background:url(" + n(401) + ")}.i-biaozhi{background:url(" + n(319) + ")}.i-mazda{background:url(" + n(391) + ")}.i-citroen{background:url(" + n(334) + ")}.i-byd{background:url(" + n(323) + ")}.i-chery{background:url(" + n(329) + ")}.i-jili{background:url(" + n(374) + ")}.i-acura{background:url(" + n(309) + ")}.i-anchi{background:url(" + n(310) + ")}.i-astonmartin{background:url(" + n(311) + ")}.i-baojun{background:url(" + n(313) + ")}.i-beijingqiche{background:url(" + n(314) + ")}.i-beiqi{background:url(" + n(315) + ")}.i-benteng{background:url(" + n(316) + ")}.i-bentley{background:url(" + n(317) + ")}.i-brand-xiali{background:url(" + n(321) + ")}.i-cadillac{background:url(" + n(324) + ")}.i-changan{background:url(" + n(325) + ")}.i-changanshangyong{background:url(" + n(326) + ")}.i-changhe{background:url(" + n(328) + ")}.i-changcheng{background:url(" + n(327) + ")}.i-chrysler{background:url(" + n(331) + ")}.i-chuanqi1{background:url(" + n(332) + ")}.i-chuanqiyema{background:url(" + n(333) + ")}.i-daoqi{background:url(" + n(335) + ")}.i-datong{background:url(" + n(336) + ")}.i-dongfeng{background:url(" + n(338) + ")}.i-dongfengfengdu{background:url(" + n(339) + ")}.i-dongfengfengshen{background:url(" + n(340) + ")}.i-dongfengxiaokang{background:url(" + n(341) + ")}.i-dongfengyulongnazhijie{background:url(" + n(342) + ")}.i-dongnan{background:url(" + n(343) + ")}.i-ds{background:url(" + n(344) + ")}.i-fengxing{background:url(" + n(345) + ")}.i-ferrari{background:url(" + n(346) + ")}.i-fiat{background:url(" + n(347) + ")}.i-fudi{background:url(" + n(349) + ")}.i-fuqiqiteng{background:url(" + n(350) + ")}.i-futian{background:url(" + n(351) + ")}.i-gmc{background:url(" + n(352) + ")}.i-guanzhi{background:url(" + n(353) + ")}.i-hafei{background:url(" + n(354) + ")}.i-hafu{background:url(" + n(355) + ")}.i-haige{background:url(" + n(356) + ")}.i-haima{background:url(" + n(357) + ")}.i-hanma{background:url(" + n(358) + ")}.i-hongqi{background:url(" + n(360) + ")}.i-huachen{background:url(" + n(362) + ")}.i-huachen-zhonghua{background:url(" + n(361) + ")}.i-huanghai{background:url(" + n(363) + ")}.i-huansu{background:url(" + n(364) + ")}.i-huasong{background:url(" + n(365) + ")}.i-huatai{background:url(" + n(366) + ")}.i-infiniti{background:url(" + n(368) + ")}.i-jeep{background:url(" + n(369) + ")}.i-jianghuai{background:url(" + n(370) + ")}.i-jiangling{background:url(" + n(371) + ")}.i-jiao{background:url(" + n(372) + ")}.i-jiebao{background:url(" + n(373) + ")}.i-jincheng{background:url(" + n(375) + ")}.i-jlshwuche{background:url(" + n(376) + ")}.i-kaiyi{background:url(" + n(377) + ")}.i-kawei{background:url(" + n(378) + ")}.i-krui{background:url(" + n(380) + ")}.i-lamborghini{background:url(" + n(381) + ")}.i-landrover{background:url(" + n(382) + ")}.i-lexus{background:url(" + n(383) + ")}.i-liebao{background:url(" + n(384) + ")}.i-lifan{background:url(" + n(385) + ")}.i-lincoln{background:url(" + n(386) + ")}.i-linian{background:url(" + n(387) + ")}.i-lotus{background:url(" + n(388) + ")}.i-lufeng{background:url(" + n(389) + ")}.i-maserati{background:url(" + n(390) + ")}.i-mg{background:url(" + n(392) + ")}.i-mini{background:url(" + n(393) + ")}.i-mitsubishi{background:url(" + n(394) + ")}.i-nj-iveco{background:url(" + n(395) + ")}.i-opel{background:url(" + n(396) + ")}.i-oulang{background:url(" + n(397) + ")}.i-porsche{background:url(" + n(398) + ")}.i-qichen{background:url(" + n(399) + ")}.i-renault{background:url(" + n(400) + ")}.i-rolls-royce{background:url(" + n(402) + ")}.i-rongwei{background:url(" + n(403) + ")}.i-ruilin{background:url(" + n(404) + ")}.i-saab{background:url(" + n(405) + ")}.i-shenbao{background:url(" + n(406) + ")}.i-shuanghuan{background:url(" + n(407) + ")}.i-shuanglong{background:url(" + n(408) + ")}.i-siming{background:url(" + n(409) + ")}.i-skoda{background:url(" + n(410) + ")}.i-smart{background:url(" + n(411) + ")}.i-subaru{background:url(" + n(412) + ")}.i-suzuki{background:url(" + n(413) + ")}.i-tesila{background:url(" + n(414) + ")}.i-tj-yiqi{background:url(" + n(415) + ")}.i-volvo{background:url(" + n(417) + ")}.i-weilin{background:url(" + n(418) + ")}.i-weiwang{background:url(" + n(419) + ")}.i-wuling{background:url(" + n(420) + ")}.i-xiaqitongjia{background:url(" + n(421) + ")}.i-xiyate{background:url(" + n(422) + ")}.i-yingzhi{background:url(" + n(423) + ")}.i-yongyuanqiche{background:url(" + n(424) + ")}.i-zhongou{background:url(" + n(425) + ")}.i-zhongtai{background:url(" + n(426) + ")}.i-zhongxing{background:url(" + n(427) + ")}.sx .active{width:292px;border:2px solid #22ac38;border-right:0;margin-left:-24px;padding-left:24px}.ppmore{display:none}.sx .active .ppmore{position:absolute;left:316px;top:-158px;display:block;background-color:#fff;width:660px;padding:15px 25px;border:2px solid #22ac38;z-index:4}.leftline{position:absolute;left:-2px;top:156px;width:2px;background:#fff;height:80px}.ppmore p{font-size:14px;color:#333;margin-bottom:15px}.ppmore table td{vertical-align:top;padding:5px 0;line-height:22px}.ppmore table a{margin-right:13px;white-space:nowrap;color:#666}.zm{font-size:14px;font-weight:700;width:40px;color:#22ac38}.tbl,.tbr{width:310px;float:left}.tbl{margin-right:30px}.sx-price .dd a{display:inline-block;margin-right:15px;font-size:14px;line-height:28px;color:#666}.sx-chexing .dd{font-size:0}.sx-chexing .dd a{display:inline-block;height:46px;width:50px;font-size:12px;color:#666;line-height:60px;margin-right:22px;text-align:center;_overflow:hidden}.change-car:hover,.ppmore table a:hover,.sx-chexing .dd a:hover,.sx-pinpai .dd a:hover,.sx-price .dd a:hover{color:#e30;text-decoration:none}.x-sanxiang{background-position:-50px -150px}.x-suv{background-position:-100px -150px}.x-mpv{background-position:-150px -150px}.x-paoche{background-position:-200px -150px}.sx-chexing .dt,.sx-price .dt{padding-top:0}.sell-car-box{height:36px;padding-top:15px;padding-bottom:15px}.sell-phone-input{width:150px;height:18px;line-height:18px;padding:8px 10px;border:1px solid #e7e7e7;border-radius:5px;color:#333}.sell-phone-input,.sell-phone-submit{float:left;font-size:14px;font-family:microsoft yahei}.sell-phone-submit{width:98px;height:36px;background:#22ac38;color:#fff;border:none;border-radius:5px;margin-left:5px}.sell-phone-submit:hover{background:#179500}.sell-phone-error{line-height:22px;color:red;padding-left:10px}.submit-suc{height:46px;line-height:46px;font-size:18px;color:#999;padding-left:37px}.submit-suc i{display:block;width:46px;height:46px;float:left;margin-right:14px;background-position:-250px -200px}.submit-suc a{color:#22ac38;margin-left:25px;font-size:14px}.submit-suc a:hover{color:#e30;text-decoration:none}.op-area{width:860px;height:413px}.op-slide{position:relative;z-index:10;overflow:hidden}.op-slide,.slide-li,.slide-li a{width:860px;height:305px}.slide-li a{display:block}.slide-ctrl{position:absolute;bottom:10px;left:0;width:100%;height:10px;text-align:center;font-size:0;line-height:0}.slide-ctrl span{display:inline-block;width:10px;height:10px;border-radius:5px;background:#bce9c3;margin:0 5px;cursor:pointer}.slide-ctrl span.active{background:#fff;width:20px}.op-img{width:860px;height:98px;overflow:hidden;padding-top:10px}.op-img ul{margin-right:-10px}.op-img li{float:left;margin-right:4px;width:284px;height:98px}.ser-gua{width:1110px;margin:0 auto;padding:15px 0 15px 90px}.ser-gua,.ser-gua li{height:60px;line-height:60px}.ser-gua li{width:262px;float:left;font-size:14px;color:#666}.ser-gua li i{display:block;width:60px;height:60px;float:left;margin-right:25px}.ser-1{background-position:0 -200px}.ser-2{background-position:-60px -200px}.ser-3{background-position:-120px -200px}.ser-4{background-position:-180px -200px}.high-value{display:none;height:256px;padding-bottom:50px}.value-tit{height:61px;line-height:61px;border-bottom:1px solid #e7e7e7}.v-tit{font-size:22px;color:#000}.v-tit span{font-size:14px;color:#999;margin-left:10px}.change-car{float:right;font-size:16px;color:#22ac38}.slide-box{width:1190px;height:194px;padding-top:10px;overflow:hidden}.slide-con{margin-right:-10px}.slide-con li{float:left;background:#fff;margin-right:10px}.car-info,.slide-con li{width:590px;height:194px}.car-img{position:relative;display:block;width:290px;height:194px;float:left}.car-img:hover{*text-decoration:none}.car-img img{display:block;width:290px;height:194px}.car-txt{float:left;width:280px;padding:0 10px}.car-link{padding:5px 0 0;line-height:30px;height:30px;overflow:hidden}.car-link a{color:#333;font-size:16px}.car-link a:hover{color:#e30;text-decoration:none}.car-basic{line-height:20px;color:#999}.car-basic span{color:#ddd;margin:0 5px}.sell-price{line-height:28px;font-size:20px;color:#ff7e00;padding:3px 0 14px}.new-car-price{float:right;line-height:28px;color:#999;font-size:12px;text-decoration:line-through}.ass-div,.ass-info{height:85px}.ass-info{float:left;width:70px;text-align:center;font-size:12px;color:#666;line-height:26px}.ass-info img{display:block;margin-left:6px;*margin-left:2px;width:58px;height:58px;border-radius:50%}.ass-txt{height:60px;width:200px;padding:15px 0 0;float:right}.ass-txt p{float:left;margin:0 5px 5px 0;width:58px;height:20px;line-height:20px;text-align:center;font-size:12px}.sl-red{color:#fd8e4e;border:1px solid #fd8e4e}.sl-green{color:#22ac38;border:1px solid #22ac38}.sl-blue{color:#18c6ea;border:1px solid #18c6ea}.title{height:62px;line-height:62px;margin-bottom:10px;border-bottom:1px solid #e7e7e7}.all-car{float:right;font-size:16px;color:#22ac38}.all-car:hover{color:#e30;text-decoration:none}.ti-left{display:inline-block;height:62px;float:left}.ti-left span{color:#000;font-size:22px;float:left;margin-right:20px}.ti-left a{display:inline-block;height:61px;line-height:61px;font-size:16px;color:#666;padding:0 20px;border-bottom:1px solid #f5f5f5}.ti-left a.on,.ti-left a:hover{color:#22ac38;border-bottom:2px solid #22ac38;text-decoration:none}.all-car-link{height:45px;padding:15px 0 5px;text-align:center}.all-car-link a{display:inline-block;width:231px;height:43px;line-height:43px;text-align:center;border:1px solid #22ac38;border-radius:5px;color:#22ac38;font-size:16px}.all-car-link a:hover{background:#22ac38;text-decoration:none;color:#fff}.gz-finance,.gz-recommend{display:block;width:284px;height:98px}.gz-recommend{background:url(" + n(429) + ") no-repeat}.gz-finance{background:url(" + n(428) + ") no-repeat}.gz-zq{padding-bottom:55px}.zq-crm{padding-top:10px;width:1190px;height:202px}.zq-area{width:882px;height:202px;overflow:hidden;position:relative;z-index:1}.zhuantui-ul{width:4000px;height:202px}.zhuantui-ul li{width:436px;float:left;margin-right:10px}.zhuantui-ul li img{vertical-align:top;width:436px;height:202px}.slider-next,.slider-prev{position:absolute;top:50%;margin-top:-18px;display:block;width:36px;height:36px;line-height:40px;text-align:center;font-size:36px;font-weight:700;vertical-align:middle;color:#000;font-family:simsun;background:#fff;opacity:.4;filter:alpha(opacity=40)}.slider-next:hover,.slider-prev:hover{background:#fff;text-decoration:none;color:#000;opacity:.8;filter:alpha(opacity=80)}.slider-prev{left:10px}.slider-next{right:10px}.crm-area{width:278px;height:186px;padding:8px 10px;background:#e5e5e5}.crm-area li{height:30px;line-height:30px;margin-left:18px;vertical-align:top;list-style:disc}.crm-area li.crm-link{list-style-type:none;text-align:right;padding-top:6px}.crm-area li a{color:#666;font-size:14px;display:inline-block;overflow:hidden;width:260px;text-overflow:ellipsis;white-space:nowrap;vertical-align:top}.crm-area li.crm-link a{color:#22ac38}.crm-area li a:hover{color:#e30;text-decoration:none}.country .sx-pinpai{margin-top:25px}.country .sx .active .ppmore{top:-77px}.country .leftline{top:75px}.country .sx-chexing,.country .sx-price{padding-top:30px}.notice{width:100%;height:44px;line-height:44px;background:#ed7f31;text-align:center;font-size:14px;color:#fff}.notice-close{display:inline-block;width:44px;height:44px;float:right;background:url(" + n(433) + ") no-repeat 0 0;cursor:pointer}.notice-close:hover{background-position:0 -50px}.video-box{width:100%;height:578px;overflow:hidden;background:url(" + n(435) + ")}.video-con{width:1028px;height:578px;margin:0 auto;position:relative;z-index:888}.video-con .dui-1,.video-con .dui-2,.video-con .vedio-close{position:absolute;top:0;display:block}.video-con .dui-1{width:59px;height:540px;left:-81px;background:url(" + n(431) + ") no-repeat}.video-con .dui-2{width:59px;height:540px;right:-81px;background:url(" + n(432) + ") no-repeat}.video-con .vedio-close{width:32px;height:32px;right:0;background:url(" + n(430) + ") no-repeat;cursor:pointer;z-index:888}.body-nav-right{position:fixed;right:0;top:0;width:38px;height:100%;background:#fff;z-index:1000;box-shadow:0 1px 10px rgba(0,0,0,.2);z-index:1001}.body-nav-right ul{height:306px;position:relative;top:50%;margin-top:-153px}.body-nav-right li{position:relative;float:left}.popup-left2 i.triangle-r,.popup-left i.triangle-r,a.app,a.app:hover,a.gongzhonghao,a.gongzhonghao:hover,a.liuyan,a.liuyan:hover,a.yijian,a.yijian:hover,a.zixun,a.zixun:hover{background-image:url(" + n(436) + ");background-repeat:no-repeat;background-position:-38px 0;width:38px;height:52px;display:inline-block}.body-nav-right li.hover a.zixun,a.zixun:hover{background-position:0 0}a.liuyan{background-position:-38px -56px}.body-nav-right li.hover a.liuyan,a.liuyan:hover{background-position:0 -56px}a.yijian{background-position:-38px -115px}.body-nav-right li.hover a.yijian,a.yijian:hover{background-position:0 -115px}a.app{background-position:-38px -177px}.body-nav-right li.hover a.app,a.app:hover{background-position:0 -177px}a.gongzhonghao{height:78px;background-position:-38px -239px}.body-nav-right li.hover a.gongzhonghao,a.gongzhonghao:hover{height:78px;background-position:0 -239px}.popup-left,.popup-left2{width:108px;height:50px;border:1px solid #d2d2d2;position:absolute;right:38px;top:50%;margin-top:-26px;background:#fff;font-size:14px;color:#666;line-height:50px;text-align:center;z-index:100;display:none}.popup-left2{height:158px;width:158px;margin-top:-79px}.popup-left2 i.triangle-r,.popup-left i.triangle-r{position:absolute;right:-5px;top:50%;margin:-5px 0 0;overflow:hidden;width:5px;height:10px;background-position:0 -317px;display:inline-block;z-index:101}.popup-left2 .gz-ewm-app{display:block;width:158px;height:158px;background-image:url(http://sta.guazi.com/static/c2c/web/common/ewm-app-2.png)}.popup-left2 .gz-ewm-gongzhonghao{display:block;width:158px;height:158px;background-image:url(http://sta.guazi.com/static/c2c/web/common/ewm-wx-2.png)}.body-nav-right li.hover .popup-left,.body-nav-right li.hover .popup-left2{display:block}", ""]);
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
    function (e, t, n) {
        e.exports = n.p + "acura.a0e136b6e5d2a735200b245fa1ed557b.png"
    },
    function (e, t, n) {
        e.exports = n.p + "anchi.62562d9c6350f17a3e744f9e19b4355b.png"
    },
    function (e, t, n) {
        e.exports = n.p + "astonmartin.d29329a4e491cbf480a942383a4206c7.png"
    },
    function (e, t, n) {
        e.exports = n.p + "audi.186c33fd1713cf60d868442af4e80a3e.png"
    },
    function (e, t, n) {
        e.exports = n.p + "baojun.831704ec4c2279c3c19b019693dd809a.png"
    },
    function (e, t, n) {
        e.exports = n.p + "beijingqiche.76ccfc731f82b5dd3cc58465ad22e2b3.png"
    },
    function (e, t, n) {
        e.exports = n.p + "beiqi.36d9e70defffbe48013aa8d1f67d242c.png"
    },
    function (e, t, n) {
        e.exports = n.p + "benteng.be5e82ed1d321ac8847818ceb1f1b828.png"
    },
    function (e, t, n) {
        e.exports = n.p + "bentley.a46ebb0d587f6b9384ee2ff5583ef9ae.png"
    },
    function (e, t, n) {
        e.exports = n.p + "benz.e18506708d2c38b040aec01354d266bd.png"
    },
    function (e, t, n) {
        e.exports = n.p + "biaozhi.d0191836f41aee63872b802d9f631fd3.png"
    },
    function (e, t, n) {
        e.exports = n.p + "bmw.98f4d2227e0e6307b6481d27cf3d1018.png"
    },
    function (e, t, n) {
        e.exports = n.p + "brand-xiali.813a7e108bef32edaea9cc316d7bd133.png"
    },
    function (e, t, n) {
        e.exports = n.p + "buick.0afec73a0cac02b55d512a2734878493.png"
    },
    function (e, t, n) {
        e.exports = n.p + "byd.c5d89ae9a353fb4b850a2fae937a57e8.png"
    },
    function (e, t, n) {
        e.exports = n.p + "cadillac.e705ab7611522d201f06f8a779248ee0.png"
    },
    function (e, t, n) {
        e.exports = n.p + "changan.82f4dad3a7dbbc67fae7db07abe532ad.png"
    },
    function (e, t, n) {
        e.exports = n.p + "changanshangyong.ba31993cf62bc31ba2236f39f2dd5696.png"
    },
    function (e, t, n) {
        e.exports = n.p + "changcheng.e100dff4d84da98c0842dd78a87fe887.png"
    },
    function (e, t, n) {
        e.exports = n.p + "changhe.b22059aeb9bf24cf44b62c9aa0e14f14.png"
    },
    function (e, t, n) {
        e.exports = n.p + "chery.2b0e83426a0920075569ecf600d05117.png"
    },
    function (e, t, n) {
        e.exports = n.p + "chevrolet.fde886cd8a358bbcf80d8629c8486139.png"
    },
    function (e, t, n) {
        e.exports = n.p + "chrysler.71e9c3a9fd9f36622d7b395c2ee7fed8.png"
    },
    function (e, t, n) {
        e.exports = n.p + "chuanqi1.2132b0b8bc7afddfe210f4b16b8b5740.png"
    },
    function (e, t, n) {
        e.exports = n.p + "chuanqiyema.b77bd1ceeaaca784a2058b8049df494b.png"
    },
    function (e, t, n) {
        e.exports = n.p + "citroen.167e8cd15998a93884f367aa63a7b2bf.png"
    },
    function (e, t, n) {
        e.exports = n.p + "daoqi.9a9c072aa792ce699b16749077af5ef9.png"
    },
    function (e, t, n) {
        e.exports = n.p + "datong.53b51f0c0c735f45cc8402fc7167a5ed.png"
    },
    function (e, t, n) {
        e.exports = n.p + "dazhong.7d2b9e81d92911fc7c5389635afc9fa3.png"
    },
    function (e, t, n) {
        e.exports = n.p + "dongfeng.a6aaab7a605dfc2a9153af945ff99f7d.png"
    },
    function (e, t, n) {
        e.exports = n.p + "dongfengfengdu.56f64c70f88f48b4bb7f71352bcdf307.png"
    },
    function (e, t, n) {
        e.exports = n.p + "dongfengfengshen.a874a331204aa37871eefca3c5731dc5.png"
    },
    function (e, t, n) {
        e.exports = n.p + "dongfengxiaokang.5fefd201d6821757c0b5506928bfa586.png"
    },
    function (e, t, n) {
        e.exports = n.p + "dongfengyulongnazhijie.73c467d1941ff4898db8dcfa1a11cfdb.png"
    },
    function (e, t, n) {
        e.exports = n.p + "dongnan.faa5c28f66ea47cd265576af2e2a84a4.png"
    },
    function (e, t, n) {
        e.exports = n.p + "ds.f05aa0f2c86be9954aba1d060566a2ec.png"
    },
    function (e, t, n) {
        e.exports = n.p + "fengxing.831e0e48f83e939773449155e2c891e3.png"
    },
    function (e, t, n) {
        e.exports = n.p + "ferrari.cb386507a9624db612770591ae2ed28f.png"
    },
    function (e, t, n) {
        e.exports = n.p + "fiat.4ca1696d131013d3c8aa4534f6157d0a.png"
    },
    function (e, t, n) {
        e.exports = n.p + "ford.56c8a07eab46f4f9a3ab887a541b4bdd.png"
    },
    function (e, t, n) {
        e.exports = n.p + "fudi.013d5fc344ab74375b8667c8e8846a20.png"
    },
    function (e, t, n) {
        e.exports = n.p + "fuqiqiteng.4a2c55b3730433001342d1dad6db0c21.png"
    },
    function (e, t, n) {
        e.exports = n.p + "futian.8a80936cb6c9ca433e7e28f9cbc007d2.png"
    },
    function (e, t, n) {
        e.exports = n.p + "gmc.1113c2194df6c007aaa171671a44078f.png"
    },
    function (e, t, n) {
        e.exports = n.p + "guanzhi.abeccd6df67995c834480e7f0277e07c.png"
    },
    function (e, t, n) {
        e.exports = n.p + "hafei.ea736a7b065a83ba9682cc04a72e0ccb.png"
    },
    function (e, t, n) {
        e.exports = n.p + "hafu.92fee2fe298ee2b80c829b907c3b7cc8.png"
    },
    function (e, t, n) {
        e.exports = n.p + "haige.b6538262d261e66533b37b50fd114267.png"
    },
    function (e, t, n) {
        e.exports = n.p + "haima.d0a777ac08ae0a6e9192ebb9f713326d.png"
    },
    function (e, t, n) {
        e.exports = n.p + "hanma.d7558370a6862f14c964bc4ce3bf71d1.png"
    },
    function (e, t, n) {
        e.exports = n.p + "honda.c8a2cad7fee5fd93f0131142a00ad58f.png"
    },
    function (e, t, n) {
        e.exports = n.p + "hongqi.f520edaefef9b1e6da7f2c38b7ac974a.png"
    },
    function (e, t, n) {
        e.exports = n.p + "huachen-zhonghua.d72b53ae0de03265fb7240e417076127.png"
    },
    function (e, t, n) {
        e.exports = n.p + "huachen.ec3b657398f9e1284a4295bcb37f920b.png"
    },
    function (e, t, n) {
        e.exports = n.p + "huanghai.1cee7b0d8377c8cea81a2ebec73dbf8b.png"
    },
    function (e, t, n) {
        e.exports = n.p + "huansu.11b5a4115ba0fc175aad6bdce4797dd9.png"
    },
    function (e, t, n) {
        e.exports = n.p + "huasong.860a5d05fa33ea0b8e34a366f60a7020.png"
    },
    function (e, t, n) {
        e.exports = n.p + "huatai.1595571478bb40e5653bcee0780cef42.png"
    },
    function (e, t, n) {
        e.exports = n.p + "hyundai.8600f8e780f19b22ed53b388b87541b1.png"
    },
    function (e, t, n) {
        e.exports = n.p + "infiniti.955c76081f53f5aac0fa5f6a72537bf2.png"
    },
    function (e, t, n) {
        e.exports = n.p + "jeep.a69bd4bc96d7ded7d9871096ab27ed72.png"
    },
    function (e, t, n) {
        e.exports = n.p + "jianghuai.8876f609d771ce0dd95eb96d2c90b543.png"
    },
    function (e, t, n) {
        e.exports = n.p + "jiangling.ddc7a904abadb6e28a5e9c234ecb5275.png"
    },
    function (e, t, n) {
        e.exports = n.p + "jiao.176b72abce785fe68b826144b7974320.png"
    },
    function (e, t, n) {
        e.exports = n.p + "jiebao.cf80777a86507d9535773ffa7ec55047.png"
    },
    function (e, t, n) {
        e.exports = n.p + "jili.2599502a0b1be3a74942b81446cfa79f.png"
    },
    function (e, t, n) {
        e.exports = n.p + "jincheng.1fb9ef1b9fdab060624cf26ad75951f2.png"
    },
    function (e, t, n) {
        e.exports = n.p + "jlshwuche.6a1bb21bee378e23ffcd07cb2bf16f79.png"
    },
    function (e, t, n) {
        e.exports = n.p + "kaiyi.ad3475b0d3a7b4e721aa2667dec0d8be.png"
    },
    function (e, t, n) {
        e.exports = n.p + "kawei.87f844e8a4e65d036d6b43f58df03081.png"
    },
    function (e, t, n) {
        e.exports = n.p + "kia.ff4169b3c09e30dc4f28695888cdd8db.png"
    },
    function (e, t, n) {
        e.exports = n.p + "krui.2874b7f98cc8fa1536f82ef394bffacc.png"
    },
    function (e, t, n) {
        e.exports = n.p + "lamborghini.85b96508b37200e421c1b97dd5fc3285.png"
    },
    function (e, t, n) {
        e.exports = n.p + "landrover.38f7b3e8222ad6b47ba4a7811b95a482.png"
    },
    function (e, t, n) {
        e.exports = n.p + "lexus.0aca65d94b4d3c812fdba22bfe017c5c.png"
    },
    function (e, t, n) {
        e.exports = n.p + "liebao.de73786c827da03ea20366d6e410e559.png"
    },
    function (e, t, n) {
        e.exports = n.p + "lifan.3a5943c5eb9a9cb2fc601c831bf4b059.png"
    },
    function (e, t, n) {
        e.exports = n.p + "lincoln.53ccbe1ee62d047a76ea6351689a540b.png"
    },
    function (e, t, n) {
        e.exports = n.p + "linian.995f749f28be5a6ce628d8801c7eab9b.png"
    },
    function (e, t, n) {
        e.exports = n.p + "lotus.75debe86e8bbc30a123a9fe164360485.png"
    },
    function (e, t, n) {
        e.exports = n.p + "lufeng.3e988c9ab833faaa3c1a532845fb6243.png"
    },
    function (e, t, n) {
        e.exports = n.p + "maserati.1c3c5ed9f41a5d1f9c9a1f74f41fbb80.png"
    },
    function (e, t, n) {
        e.exports = n.p + "mazda.5f799fc86fe18cdd3366799b4572b24d.png"
    },
    function (e, t, n) {
        e.exports = n.p + "mg.c7b438780def3b8fb2560cdcd8ebe3b3.png"
    },
    function (e, t, n) {
        e.exports = n.p + "mini.27c6810b9637facd3b80bb82b78ca8ad.png"
    },
    function (e, t, n) {
        e.exports = n.p + "mitsubishi.dfc3ec8c44b3e1d3c7d4236402250e03.png"
    },
    function (e, t, n) {
        e.exports = n.p + "nj-iveco.b9d3dcd268bcad74e110ae229189e15f.png"
    },
    function (e, t, n) {
        e.exports = n.p + "opel.d8fdcc4caada95392045fb1ff67f8c85.png"
    },
    function (e, t, n) {
        e.exports = n.p + "oulang.e04808c71e60e445a0d1bdc2942ba552.png"
    },
    function (e, t, n) {
        e.exports = n.p + "porsche.6cabcfe2d2af5666dbb661f5de73b6d5.png"
    },
    function (e, t, n) {
        e.exports = n.p + "qichen.38b0ef09c6412fb8b67d614fdd62ffe4.png"
    },
    function (e, t, n) {
        e.exports = n.p + "renault.3e921e94653640f0824c1d44cff496fa.png"
    },
    function (e, t, n) {
        e.exports = n.p + "richan.df6535e3e20ed8228298b94ffdad7d95.png"
    },
    function (e, t, n) {
        e.exports = n.p + "rolls-royce.cdc3ec84bf2f18921591abe82fe4377c.png"
    },
    function (e, t, n) {
        e.exports = n.p + "rongwei.8a6fb7531c170416239b2aedf77d7c66.png"
    },
    function (e, t, n) {
        e.exports = n.p + "ruilin.7754170f532734b7a32f1825cd6f98a1.png"
    },
    function (e, t, n) {
        e.exports = n.p + "saab.10f832a8d3763cdffa91a935c60c2c7e.png"
    },
    function (e, t, n) {
        e.exports = n.p + "shenbao.ee583a01774bc9650c9b151fd986a2e4.png"
    },
    function (e, t, n) {
        e.exports = n.p + "shuanghuan.b400aba2ae9061f6f11a354846a79b1c.png"
    },
    function (e, t, n) {
        e.exports = n.p + "shuanglong.5fcec53e29f00f4f9d7e326ff6ff15f2.png"
    },
    function (e, t, n) {
        e.exports = n.p + "siming.d22badc4696641394d75ebd93c8e38a1.png"
    },
    function (e, t, n) {
        e.exports = n.p + "skoda.34eff9fb1fd80a74ddc23c0641cbbf70.png"
    },
    function (e, t, n) {
        e.exports = n.p + "smart.1655cc3fe77f74e7f428cbee25a89310.png"
    },
    function (e, t, n) {
        e.exports = n.p + "subaru.a6dd866840cc7919017e47d9fd4f4dfa.png"
    },
    function (e, t, n) {
        e.exports = n.p + "suzuki.b1fdc70d35b08029232bbc82662260ed.png"
    },
    function (e, t, n) {
        e.exports = n.p + "tesila.d20bcee750bdd596e104592745df7b55.png"
    },
    function (e, t, n) {
        e.exports = n.p + "tj-yiqi.d7b4c30798ebb6ba6077b29c73c4f5f5.png"
    },
    function (e, t, n) {
        e.exports = n.p + "toyota.7fde064a1cb9ae24beda19a66ff93d7e.png"
    },
    function (e, t, n) {
        e.exports = n.p + "volvo.b9496e6f8aeef7ba7834054d6168c9b1.png"
    },
    function (e, t, n) {
        e.exports = n.p + "weilin.c7777f94494db262819ff669c06115c7.png"
    },
    function (e, t, n) {
        e.exports = n.p + "weiwang.3818f5cd7f2f7d4a09562e58c72d579d.png"
    },
    function (e, t, n) {
        e.exports = n.p + "wuling.5df24e0eb1f02b8b63def4ebd49b4a8c.png"
    },
    function (e, t, n) {
        e.exports = n.p + "xiaqitongjia.ca1526daeeee97de114493298cd2b2e0.png"
    },
    function (e, t, n) {
        e.exports = n.p + "xiyate.a71d647de0a66155b68041a086086665.png"
    },
    function (e, t, n) {
        e.exports = n.p + "yingzhi.602713428c7e6476c855bb178df01ae2.png"
    },
    function (e, t, n) {
        e.exports = n.p + "yongyuanqiche.c2cf62c61c09728e30ef073d35c3d3fe.png"
    },
    function (e, t, n) {
        e.exports = n.p + "zhongou.6d17d40484eaaf43c65846039122742e.png"
    },
    function (e, t, n) {
        e.exports = n.p + "zhongtai.7eb5c85d9ede07dae3bb53ab692db110.png"
    },
    function (e, t, n) {
        e.exports = n.p + "zhongxing.237b2654254b4772d6426faec8c6bc54.png"
    },
    function (e, t, n) {
        e.exports = n.p + "guazi_finance.0e4043cdfcc23cfe41064013afe0f17c.png"
    },
    function (e, t, n) {
        e.exports = n.p + "guazi_recommend.3318135a5b7f31bc2d2a077bdfd4b03b.jpg"
    },
    function (e, t, n) {
        e.exports = n.p + "index_close.9c0da6a884e0f5d64582d2886c366b59.png"
    },
    function (e, t, n) {
        e.exports = n.p + "index_dui-1.99adff9600ee10a522464faea45402ae.png"
    },
    function (e, t, n) {
        e.exports = n.p + "index_dui-2.b80c890c2890bee4522e0a30f2c78759.png"
    },
    function (e, t, n) {
        e.exports = n.p + "index_icon-close.9048080419b1a6046345ee17f66be9e4.png"
    },
    function (e, t, n) {
        e.exports = n.p + "index_icon.8b79f4d2cb0f62d300935bc342505a0e.png"
    },
    function (e, t, n) {
        e.exports = n.p + "index_img-bg.49ea4fd2dce3d02dbd3b50223d1dc407.png"
    },
    function (e, t, n) {
        e.exports = n.p + "nav_icon_right.ee8a8db7e741a47908ff3e59df8238f9.png"
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ,
    function (e, t, n) {
        var i = n(177);
        "string" == typeof i && (i = [
            [e.id, i, ""]
        ]);
        n(4)(i, {});
        i.locals && (e.exports = i.locals)
    }
]);