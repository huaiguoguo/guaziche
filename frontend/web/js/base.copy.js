! function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "http://sta.guazistatic.com/c2c_web/", t(0)
}({
    0: function (e, t, n) {
        n(136), n(194), n(550), n(135), window.$ = window.jQuery = n(3), window.Widget = n(7);
        var r = n(143);
        n(55), n(141), n(139), window.onload = function () {
            r("cbPer"), n(151).listen()
        };
        var o = n(162),
            i = new o({
                platform: "web",
                line: "c2c"
            });
        i.send(), window.tracker = i
    }, 3: function (e, t, n) {
        var r, o; /*! jQuery v1.12.0 | (c) jQuery Foundation | jquery.org/license */
        ! function (t, n) {
            "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
                if (!e.document) throw new Error("jQuery requires a window with a document");
                return n(e)
            } : n(t)
        }("undefined" != typeof window ? window : this, function (i, a) {
            function s(e) {
                var t = !!e && "length" in e && e.length,
                    n = ye.type(e);
                return "function" !== n && !ye.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
            }

            function c(e, t, n) {
                if (ye.isFunction(t)) return ye.grep(e, function (e, r) {
                    return !!t.call(e, r, e) !== n
                });
                if (t.nodeType) return ye.grep(e, function (e) {
                    return e === t !== n
                });
                if ("string" == typeof t) {
                    if (Se.test(t)) return ye.filter(t, e, n);
                    t = ye.filter(t, e)
                }
                return ye.grep(e, function (e) {
                    return ye.inArray(e, t) > -1 !== n
                })
            }

            function u(e, t) {
                do e = e[t]; while (e && 1 !== e.nodeType);
                return e
            }

            function l(e) {
                var t = {};
                return ye.each(e.match(De) || [], function (e, n) {
                    t[n] = !0
                }), t
            }

            function f() {
                ce.addEventListener ? (ce.removeEventListener("DOMContentLoaded", d), i.removeEventListener("load", d)) : (ce.detachEvent("onreadystatechange", d), i.detachEvent("onload", d))
            }

            function d() {
                (ce.addEventListener || "load" === i.event.type || "complete" === ce.readyState) && (f(), ye.ready())
            }

            function p(e, t, n) {
                if (void 0 === n && 1 === e.nodeType) {
                    var r = "data-" + t.replace(Re, "-$1").toLowerCase();
                    if (n = e.getAttribute(r), "string" == typeof n) {
                        try {
                            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Fe.test(n) ? ye.parseJSON(n) : n)
                        } catch (o) {}
                        ye.data(e, t, n)
                    } else n = void 0
                }
                return n
            }

            function h(e) {
                var t;
                for (t in e)
                    if (("data" !== t || !ye.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
                return !0
            }

            function g(e, t, n, r) {
                if (Ue(e)) {
                    var o, i, a = ye.expando,
                        s = e.nodeType,
                        c = s ? ye.cache : e,
                        u = s ? e[a] : e[a] && a;
                    if (u && c[u] && (r || c[u].data) || void 0 !== n || "string" != typeof t) return u || (u = s ? e[a] = se.pop() || ye.guid++ : a), c[u] || (c[u] = s ? {} : {
                        toJSON: ye.noop
                    }), ("object" == typeof t || "function" == typeof t) && (r ? c[u] = ye.extend(c[u], t) : c[u].data = ye.extend(c[u].data, t)), i = c[u], r || (i.data || (i.data = {}), i = i.data), void 0 !== n && (i[ye.camelCase(t)] = n), "string" == typeof t ? (o = i[t], null == o && (o = i[ye.camelCase(t)])) : o = i, o
                }
            }

            function v(e, t, n) {
                if (Ue(e)) {
                    var r, o, i = e.nodeType,
                        a = i ? ye.cache : e,
                        s = i ? e[ye.expando] : ye.expando;
                    if (a[s]) {
                        if (t && (r = n ? a[s] : a[s].data)) {
                            ye.isArray(t) ? t = t.concat(ye.map(t, ye.camelCase)) : t in r ? t = [t] : (t = ye.camelCase(t), t = t in r ? [t] : t.split(" ")), o = t.length;
                            for (; o--;) delete r[t[o]];
                            if (n ? !h(r) : !ye.isEmptyObject(r)) return
                        }(n || (delete a[s].data, h(a[s]))) && (i ? ye.cleanData([e], !0) : ve.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0)
                    }
                }
            }

            function m(e, t, n, r) {
                var o, i = 1,
                    a = 20,
                    s = r ? function () {
                        return r.cur()
                    } : function () {
                        return ye.css(e, t, "")
                    },
                    c = s(),
                    u = n && n[3] || (ye.cssNumber[t] ? "" : "px"),
                    l = (ye.cssNumber[t] || "px" !== u && +c) && qe.exec(ye.css(e, t));
                if (l && l[3] !== u) {
                    u = u || l[3], n = n || [], l = +c || 1;
                    do i = i || ".5", l /= i, ye.style(e, t, l + u); while (i !== (i = s() / c) && 1 !== i && --a)
                }
                return n && (l = +l || +c || 0, o = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = u, r.start = l, r.end = o)), o
            }

            function y(e) {
                var t = Ye.split("|"),
                    n = e.createDocumentFragment();
                if (n.createElement)
                    for (; t.length;) n.createElement(t.pop());
                return n
            }

            function w(e, t) {
                var n, r, o = 0,
                    i = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
                if (!i)
                    for (i = [], n = e.childNodes || e; null != (r = n[o]); o++)!t || ye.nodeName(r, t) ? i.push(r) : ye.merge(i, w(r, t));
                return void 0 === t || t && ye.nodeName(e, t) ? ye.merge([e], i) : i
            }

            function b(e, t) {
                for (var n, r = 0; null != (n = e[r]); r++) ye._data(n, "globalEval", !t || ye._data(t[r], "globalEval"))
            }

            function x(e) {
                ze.test(e.type) && (e.defaultChecked = e.checked)
            }

            function _(e, t, n, r, o) {
                for (var i, a, s, c, u, l, f, d = e.length, p = y(t), h = [], g = 0; d > g; g++)
                    if (a = e[g], a || 0 === a)
                        if ("object" === ye.type(a)) ye.merge(h, a.nodeType ? [a] : a);
                        else if (Ke.test(a)) {
                            for (c = c || p.appendChild(t.createElement("div")), u = (Be.exec(a) || ["", ""])[1].toLowerCase(), f = Xe[u] || Xe._default, c.innerHTML = f[1] + ye.htmlPrefilter(a) + f[2], i = f[0]; i--;) c = c.lastChild;
                            if (!ve.leadingWhitespace && Ve.test(a) && h.push(t.createTextNode(Ve.exec(a)[0])), !ve.tbody)
                                for (a = "table" !== u || Ze.test(a) ? "<table>" !== f[1] || Ze.test(a) ? 0 : c : c.firstChild, i = a && a.childNodes.length; i--;) ye.nodeName(l = a.childNodes[i], "tbody") && !l.childNodes.length && a.removeChild(l);
                            for (ye.merge(h, c.childNodes), c.textContent = ""; c.firstChild;) c.removeChild(c.firstChild);
                            c = p.lastChild
                        } else h.push(t.createTextNode(a));
                for (c && p.removeChild(c), ve.appendChecked || ye.grep(w(h, "input"), x), g = 0; a = h[g++];)
                    if (r && ye.inArray(a, r) > -1) o && o.push(a);
                    else if (s = ye.contains(a.ownerDocument, a), c = w(p.appendChild(a), "script"), s && b(c), n)
                        for (i = 0; a = c[i++];) We.test(a.type || "") && n.push(a);
                return c = null, p
            }

            function T() {
                return !0
            }

            function E() {
                return !1
            }

            function C() {
                try {
                    return ce.activeElement
                } catch (e) {}
            }

            function k(e, t, n, r, o, i) {
                var a, s;
                if ("object" == typeof t) {
                    "string" != typeof n && (r = r || n, n = void 0);
                    for (s in t) k(e, s, n, r, t[s], i);
                    return e
                }
                if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), o === !1) o = E;
                else if (!o) return e;
                return 1 === i && (a = o, o = function (e) {
                    return ye().off(e), a.apply(this, arguments)
                }, o.guid = a.guid || (a.guid = ye.guid++)), e.each(function () {
                    ye.event.add(this, t, o, r, n)
                })
            }

            function j(e, t) {
                return ye.nodeName(e, "table") && ye.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
            }

            function S(e) {
                return e.type = (null !== ye.find.attr(e, "type")) + "/" + e.type, e
            }

            function G(e) {
                var t = ut.exec(e.type);
                return t ? e.type = t[1] : e.removeAttribute("type"), e
            }

            function J(e, t) {
                if (1 === t.nodeType && ye.hasData(e)) {
                    var n, r, o, i = ye._data(e),
                        a = ye._data(t, i),
                        s = i.events;
                    if (s) {
                        delete a.handle, a.events = {};
                        for (n in s)
                            for (r = 0, o = s[n].length; o > r; r++) ye.event.add(t, n, s[n][r])
                    }
                    a.data && (a.data = ye.extend({}, a.data))
                }
            }

            function N(e, t) {
                var n, r, o;
                if (1 === t.nodeType) {
                    if (n = t.nodeName.toLowerCase(), !ve.noCloneEvent && t[ye.expando]) {
                        o = ye._data(t);
                        for (r in o.events) ye.removeEvent(t, r, o.handle);
                        t.removeAttribute(ye.expando)
                    }
                    "script" === n && t.text !== e.text ? (S(t).text = e.text, G(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ve.html5Clone && e.innerHTML && !ye.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && ze.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
                }
            }

            function I(e, t, n, r) {
                t = le.apply([], t);
                var o, i, a, s, c, u, l = 0,
                    f = e.length,
                    d = f - 1,
                    p = t[0],
                    h = ye.isFunction(p);
                if (h || f > 1 && "string" == typeof p && !ve.checkClone && ct.test(p)) return e.each(function (o) {
                    var i = e.eq(o);
                    h && (t[0] = p.call(this, o, i.html())), I(i, t, n, r)
                });
                if (f && (u = _(t, e[0].ownerDocument, !1, e, r), o = u.firstChild, 1 === u.childNodes.length && (u = o), o || r)) {
                    for (s = ye.map(w(u, "script"), S), a = s.length; f > l; l++) i = u, l !== d && (i = ye.clone(i, !0, !0), a && ye.merge(s, w(i, "script"))), n.call(e[l], i, l);
                    if (a)
                        for (c = s[s.length - 1].ownerDocument, ye.map(s, G), l = 0; a > l; l++) i = s[l], We.test(i.type || "") && !ye._data(i, "globalEval") && ye.contains(c, i) && (i.src ? ye._evalUrl && ye._evalUrl(i.src) : ye.globalEval((i.text || i.textContent || i.innerHTML || "").replace(lt, "")));
                    u = o = null
                }
                return e
            }

            function O(e, t, n) {
                for (var r, o = t ? ye.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || ye.cleanData(w(r)), r.parentNode && (n && ye.contains(r.ownerDocument, r) && b(w(r, "script")), r.parentNode.removeChild(r));
                return e
            }

            function D(e, t) {
                var n = ye(t.createElement(e)).appendTo(t.body),
                    r = ye.css(n[0], "display");
                return n.detach(), r
            }

            function A(e) {
                var t = ce,
                    n = ht[e];
                return n || (n = D(e, t), "none" !== n && n || (pt = (pt || ye("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (pt[0].contentWindow || pt[0].contentDocument).document, t.write(), t.close(), n = D(e, t), pt.detach()), ht[e] = n), n
            }

            function L(e, t) {
                return {
                    get: function () {
                        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                    }
                }
            }

            function U(e) {
                if (e in Gt) return e;
                for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = St.length; n--;)
                    if (e = St[n] + t, e in Gt) return e
            }

            function F(e, t) {
                for (var n, r, o, i = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (i[a] = ye._data(r, "olddisplay"), n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && He(r) && (i[a] = ye._data(r, "olddisplay", A(r.nodeName)))) : (o = He(r), (n && "none" !== n || !o) && ye._data(r, "olddisplay", o ? n : ye.css(r, "display"))));
                for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));
                return e
            }

            function R(e, t, n) {
                var r = Ct.exec(t);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
            }

            function M(e, t, n, r, o) {
                for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2) "margin" === n && (a += ye.css(e, n + $e[i], !0, o)), r ? ("content" === n && (a -= ye.css(e, "padding" + $e[i], !0, o)), "margin" !== n && (a -= ye.css(e, "border" + $e[i] + "Width", !0, o))) : (a += ye.css(e, "padding" + $e[i], !0, o), "padding" !== n && (a += ye.css(e, "border" + $e[i] + "Width", !0, o)));
                return a
            }

            function q(e, t, n) {
                var r = !0,
                    o = "width" === t ? e.offsetWidth : e.offsetHeight,
                    a = wt(e),
                    s = ve.boxSizing && "border-box" === ye.css(e, "boxSizing", !1, a);
                if (ce.msFullscreenElement && i.top !== i && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[t])), 0 >= o || null == o) {
                    if (o = bt(e, t, a), (0 > o || null == o) && (o = e.style[t]), vt.test(o)) return o;
                    r = s && (ve.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
                }
                return o + M(e, t, n || (s ? "border" : "content"), r, a) + "px"
            }

            function $(e, t, n, r, o) {
                return new $.prototype.init(e, t, n, r, o)
            }

            function H() {
                return i.setTimeout(function () {
                    Jt = void 0
                }), Jt = ye.now()
            }

            function P(e, t) {
                var n, r = {
                        height: e
                    },
                    o = 0;
                for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = $e[o], r["margin" + n] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r
            }

            function z(e, t, n) {
                for (var r, o = (V.tweeners[t] || []).concat(V.tweeners["*"]), i = 0, a = o.length; a > i; i++)
                    if (r = o[i].call(n, t, e)) return r
            }

            function B(e, t, n) {
                var r, o, i, a, s, c, u, l, f = this,
                    d = {},
                    p = e.style,
                    h = e.nodeType && He(e),
                    g = ye._data(e, "fxshow");
                n.queue || (s = ye._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, c = s.empty.fire, s.empty.fire = function () {
                    s.unqueued || c()
                }), s.unqueued++, f.always(function () {
                    f.always(function () {
                        s.unqueued--, ye.queue(e, "fx").length || s.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = ye.css(e, "display"), l = "none" === u ? ye._data(e, "olddisplay") || A(e.nodeName) : u, "inline" === l && "none" === ye.css(e, "float") && (ve.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", ve.shrinkWrapBlocks() || f.always(function () {
                    p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                }));
                for (r in t)
                    if (o = t[r], It.exec(o)) {
                        if (delete t[r], i = i || "toggle" === o, o === (h ? "hide" : "show")) {
                            if ("show" !== o || !g || void 0 === g[r]) continue;
                            h = !0
                        }
                        d[r] = g && g[r] || ye.style(e, r)
                    } else u = void 0;
                if (ye.isEmptyObject(d)) "inline" === ("none" === u ? A(e.nodeName) : u) && (p.display = u);
                else {
                    g ? "hidden" in g && (h = g.hidden) : g = ye._data(e, "fxshow", {}), i && (g.hidden = !h), h ? ye(e).show() : f.done(function () {
                        ye(e).hide()
                    }), f.done(function () {
                        var t;
                        ye._removeData(e, "fxshow");
                        for (t in d) ye.style(e, t, d[t])
                    });
                    for (r in d) a = z(h ? g[r] : 0, r, f), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
                }
            }

            function W(e, t) {
                var n, r, o, i, a;
                for (n in e)
                    if (r = ye.camelCase(n), o = t[r], i = e[n], ye.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), a = ye.cssHooks[r], a && "expand" in a) {
                        i = a.expand(i), delete e[r];
                        for (n in i) n in e || (e[n] = i[n], t[n] = o)
                    } else t[r] = o
            }

            function V(e, t, n) {
                var r, o, i = 0,
                    a = V.prefilters.length,
                    s = ye.Deferred().always(function () {
                        delete c.elem
                    }),
                    c = function () {
                        if (o) return !1;
                        for (var t = Jt || H(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, i = 1 - r, a = 0, c = u.tweens.length; c > a; a++) u.tweens[a].run(i);
                        return s.notifyWith(e, [u, i, n]), 1 > i && c ? n : (s.resolveWith(e, [u]), !1)
                    },
                    u = s.promise({
                        elem: e,
                        props: ye.extend({}, t),
                        opts: ye.extend(!0, {
                            specialEasing: {},
                            easing: ye.easing._default
                        }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: Jt || H(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (t, n) {
                            var r = ye.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                            return u.tweens.push(r), r
                        }, stop: function (t) {
                            var n = 0,
                                r = t ? u.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; r > n; n++) u.tweens[n].run(1);
                            return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                        }
                    }),
                    l = u.props;
                for (W(l, u.opts.specialEasing); a > i; i++)
                    if (r = V.prefilters[i].call(u, e, l, u.opts)) return ye.isFunction(r.stop) && (ye._queueHooks(u.elem, u.opts.queue).stop = ye.proxy(r.stop, r)), r;
                return ye.map(l, z, u), ye.isFunction(u.opts.start) && u.opts.start.call(e, u), ye.fx.timer(ye.extend(c, {
                    elem: e,
                    anim: u,
                    queue: u.opts.queue
                })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }

            function Y(e) {
                return ye.attr(e, "class") || ""
            }

            function X(e) {
                return function (t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var r, o = 0,
                        i = t.toLowerCase().match(De) || [];
                    if (ye.isFunction(n))
                        for (; r = i[o++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }

            function K(e, t, n, r) {
                function o(s) {
                    var c;
                    return i[s] = !0, ye.each(e[s] || [], function (e, s) {
                        var u = s(t, n, r);
                        return "string" != typeof u || a || i[u] ? a ? !(c = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
                    }), c
                }
                var i = {},
                    a = e === nn;
                return o(t.dataTypes[0]) || !i["*"] && o("*")
            }

            function Z(e, t) {
                var n, r, o = ye.ajaxSettings.flatOptions || {};
                for (r in t) void 0 !== t[r] && ((o[r] ? e : n || (n = {}))[r] = t[r]);
                return n && ye.extend(!0, e, n), e
            }

            function Q(e, t, n) {
                for (var r, o, i, a, s = e.contents, c = e.dataTypes;
                     "*" === c[0];) c.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                if (o)
                    for (a in s)
                        if (s[a] && s[a].test(o)) {
                            c.unshift(a);
                            break
                        }
                if (c[0] in n) i = c[0];
                else {
                    for (a in n) {
                        if (!c[0] || e.converters[a + " " + c[0]]) {
                            i = a;
                            break
                        }
                        r || (r = a)
                    }
                    i = i || r
                }
                return i ? (i !== c[0] && c.unshift(i), n[i]) : void 0
            }

            function ee(e, t, n, r) {
                var o, i, a, s, c, u = {},
                    l = e.dataTypes.slice();
                if (l[1])
                    for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                for (i = l.shift(); i;)
                    if (e.responseFields[i] && (n[e.responseFields[i]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = i, i = l.shift())
                        if ("*" === i) i = c;
                        else if ("*" !== c && c !== i) {
                            if (a = u[c + " " + i] || u["* " + i], !a)
                                for (o in u)
                                    if (s = o.split(" "), s[1] === i && (a = u[c + " " + s[0]] || u["* " + s[0]])) {
                                        a === !0 ? a = u[o] : u[o] !== !0 && (i = s[0], l.unshift(s[1]));
                                        break
                                    }
                            if (a !== !0)
                                if (a && e["throws"]) t = a(t);
                                else try {
                                    t = a(t)
                                } catch (f) {
                                    return {
                                        state: "parsererror",
                                        error: a ? f : "No conversion from " + c + " to " + i
                                    }
                                }
                        }
                return {
                    state: "success",
                    data: t
                }
            }

            function te(e) {
                return e.style && e.style.display || ye.css(e, "display")
            }

            function ne(e) {
                for (; e && 1 === e.nodeType;) {
                    if ("none" === te(e) || "hidden" === e.type) return !0;
                    e = e.parentNode
                }
                return !1
            }

            function re(e, t, n, r) {
                var o;
                if (ye.isArray(t)) ye.each(t, function (t, o) {
                    n || cn.test(e) ? r(e, o) : re(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, r)
                });
                else if (n || "object" !== ye.type(t)) r(e, t);
                else
                    for (o in t) re(e + "[" + o + "]", t[o], n, r)
            }

            function oe() {
                try {
                    return new i.XMLHttpRequest
                } catch (e) {}
            }

            function ie() {
                try {
                    return new i.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {}
            }

            function ae(e) {
                return ye.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
            }
            var se = [],
                ce = i.document,
                ue = se.slice,
                le = se.concat,
                fe = se.push,
                de = se.indexOf,
                pe = {},
                he = pe.toString,
                ge = pe.hasOwnProperty,
                ve = {},
                me = "1.12.0",
                ye = function (e, t) {
                    return new ye.fn.init(e, t)
                },
                we = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                be = /^-ms-/,
                xe = /-([\da-z])/gi,
                _e = function (e, t) {
                    return t.toUpperCase()
                };
            ye.fn = ye.prototype = {
                jquery: me,
                constructor: ye,
                selector: "",
                length: 0,
                toArray: function () {
                    return ue.call(this)
                }, get: function (e) {
                    return null != e ? 0 > e ? this[e + this.length] : this[e] : ue.call(this)
                }, pushStack: function (e) {
                    var t = ye.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                }, each: function (e) {
                    return ye.each(this, e)
                }, map: function (e) {
                    return this.pushStack(ye.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                }, slice: function () {
                    return this.pushStack(ue.apply(this, arguments))
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
                }, push: fe,
                sort: se.sort,
                splice: se.splice
            }, ye.extend = ye.fn.extend = function () {
                var e, t, n, r, o, i, a = arguments[0] || {},
                    s = 1,
                    c = arguments.length,
                    u = !1;
                for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || ye.isFunction(a) || (a = {}), s === c && (a = this, s--); c > s; s++)
                    if (null != (o = arguments[s]))
                        for (r in o) e = a[r], n = o[r], a !== n && (u && n && (ye.isPlainObject(n) || (t = ye.isArray(n))) ? (t ? (t = !1, i = e && ye.isArray(e) ? e : []) : i = e && ye.isPlainObject(e) ? e : {}, a[r] = ye.extend(u, i, n)) : void 0 !== n && (a[r] = n));
                return a
            }, ye.extend({
                expando: "jQuery" + (me + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (e) {
                    throw new Error(e)
                }, noop: function () {}, isFunction: function (e) {
                    return "function" === ye.type(e)
                }, isArray: Array.isArray || function (e) {
                    return "array" === ye.type(e)
                }, isWindow: function (e) {
                    return null != e && e == e.window
                }, isNumeric: function (e) {
                    var t = e && e.toString();
                    return !ye.isArray(e) && t - parseFloat(t) + 1 >= 0
                }, isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                }, isPlainObject: function (e) {
                    var t;
                    if (!e || "object" !== ye.type(e) || e.nodeType || ye.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !ge.call(e, "constructor") && !ge.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    if (!ve.ownFirst)
                        for (t in e) return ge.call(e, t);
                    for (t in e);
                    return void 0 === t || ge.call(e, t)
                }, type: function (e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? pe[he.call(e)] || "object" : typeof e
                }, globalEval: function (e) {
                    e && ye.trim(e) && (i.execScript || function (e) {
                        i.eval.call(i, e)
                    })(e)
                }, camelCase: function (e) {
                    return e.replace(be, "ms-").replace(xe, _e)
                }, nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                }, each: function (e, t) {
                    var n, r = 0;
                    if (s(e))
                        for (n = e.length; n > r && t.call(e[r], r, e[r]) !== !1; r++);
                    else
                        for (r in e)
                            if (t.call(e[r], r, e[r]) === !1) break; return e
                }, trim: function (e) {
                    return null == e ? "" : (e + "").replace(we, "")
                }, makeArray: function (e, t) {
                    var n = t || [];
                    return null != e && (s(Object(e)) ? ye.merge(n, "string" == typeof e ? [e] : e) : fe.call(n, e)), n
                }, inArray: function (e, t, n) {
                    var r;
                    if (t) {
                        if (de) return de.call(t, e, n);
                        for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                }, merge: function (e, t) {
                    for (var n = +t.length, r = 0, o = e.length; n > r;) e[o++] = t[r++];
                    if (n !== n)
                        for (; void 0 !== t[r];) e[o++] = t[r++];
                    return e.length = o, e
                }, grep: function (e, t, n) {
                    for (var r, o = [], i = 0, a = e.length, s = !n; a > i; i++) r = !t(e[i], i), r !== s && o.push(e[i]);
                    return o
                }, map: function (e, t, n) {
                    var r, o, i = 0,
                        a = [];
                    if (s(e))
                        for (r = e.length; r > i; i++) o = t(e[i], i, n), null != o && a.push(o);
                    else
                        for (i in e) o = t(e[i], i, n), null != o && a.push(o);
                    return le.apply([], a)
                }, guid: 1,
                proxy: function (e, t) {
                    var n, r, o;
                    return "string" == typeof t && (o = e[t], t = e, e = o), ye.isFunction(e) ? (n = ue.call(arguments, 2), r = function () {
                        return e.apply(t || this, n.concat(ue.call(arguments)))
                    }, r.guid = e.guid = e.guid || ye.guid++, r) : void 0
                }, now: function () {
                    return +new Date
                }, support: ve
            }), "function" == typeof Symbol && (ye.fn[Symbol.iterator] = se[Symbol.iterator]), ye.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                pe["[object " + t + "]"] = t.toLowerCase()
            });
            var Te = function (e) {
                function t(e, t, n, r) {
                    var o, i, a, s, c, u, f, p, h = t && t.ownerDocument,
                        g = t ? t.nodeType : 9;
                    if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
                    if (!r && ((t ? t.ownerDocument || t : M) !== I && N(t), t = t || I, D)) {
                        if (11 !== g && (u = me.exec(e)))
                            if (o = u[1]) {
                                if (9 === g) {
                                    if (!(a = t.getElementById(o))) return n;
                                    if (a.id === o) return n.push(a), n
                                } else if (h && (a = h.getElementById(o)) && F(t, a) && a.id === o) return n.push(a), n
                            } else {
                                if (u[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                                if ((o = u[3]) && x.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(o)), n
                            }
                        if (x.qsa && !z[e + " "] && (!A || !A.test(e))) {
                            if (1 !== g) h = t, p = e;
                            else if ("object" !== t.nodeName.toLowerCase()) {
                                for ((s = t.getAttribute("id")) ? s = s.replace(we, "\\$&") : t.setAttribute("id", s = R), f = C(e), i = f.length, c = de.test(s) ? "#" + s : "[id='" + s + "']"; i--;) f[i] = c + " " + d(f[i]);
                                p = f.join(","), h = ye.test(e) && l(t.parentNode) || t
                            }
                            if (p) try {
                                return Z.apply(n, h.querySelectorAll(p)), n
                            } catch (v) {} finally {
                                s === R && t.removeAttribute("id")
                            }
                        }
                    }
                    return j(e.replace(se, "$1"), t, n, r)
                }

                function n() {
                    function e(n, r) {
                        return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }
                    var t = [];
                    return e
                }

                function r(e) {
                    return e[R] = !0, e
                }

                function o(e) {
                    var t = I.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t = null
                    }
                }

                function i(e, t) {
                    for (var n = e.split("|"), r = n.length; r--;) _.attrHandle[n[r]] = t
                }

                function a(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || W) - (~e.sourceIndex || W);
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function s(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function c(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }

                function u(e) {
                    return r(function (t) {
                        return t = +t, r(function (n, r) {
                            for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]))
                        })
                    })
                }

                function l(e) {
                    return e && "undefined" != typeof e.getElementsByTagName && e
                }

                function f() {}

                function d(e) {
                    for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                    return r
                }

                function p(e, t, n) {
                    var r = t.dir,
                        o = n && "parentNode" === r,
                        i = $++;
                    return t.first ? function (t, n, i) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || o) return e(t, n, i)
                    } : function (t, n, a) {
                        var s, c, u, l = [q, i];
                        if (a) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || o) {
                                    if (u = t[R] || (t[R] = {}), c = u[t.uniqueID] || (u[t.uniqueID] = {}), (s = c[r]) && s[0] === q && s[1] === i) return l[2] = s[2];
                                    if (c[r] = l, l[2] = e(t, n, a)) return !0
                                }
                    }
                }

                function h(e) {
                    return e.length > 1 ? function (t, n, r) {
                        for (var o = e.length; o--;)
                            if (!e[o](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function g(e, n, r) {
                    for (var o = 0, i = n.length; i > o; o++) t(e, n[o], r);
                    return r
                }

                function v(e, t, n, r, o) {
                    for (var i, a = [], s = 0, c = e.length, u = null != t; c > s; s++)(i = e[s]) && (!n || n(i, r, o)) && (a.push(i), u && t.push(s));
                    return a
                }

                function m(e, t, n, o, i, a) {
                    return o && !o[R] && (o = m(o)), i && !i[R] && (i = m(i, a)), r(function (r, a, s, c) {
                        var u, l, f, d = [],
                            p = [],
                            h = a.length,
                            m = r || g(t || "*", s.nodeType ? [s] : s, []),
                            y = !e || !r && t ? m : v(m, d, e, s, c),
                            w = n ? i || (r ? e : h || o) ? [] : a : y;
                        if (n && n(y, w, s, c), o)
                            for (u = v(w, p), o(u, [], s, c), l = u.length; l--;)(f = u[l]) && (w[p[l]] = !(y[p[l]] = f));
                        if (r) {
                            if (i || e) {
                                if (i) {
                                    for (u = [], l = w.length; l--;)(f = w[l]) && u.push(y[l] = f);
                                    i(null, w = [], u, c)
                                }
                                for (l = w.length; l--;)(f = w[l]) && (u = i ? ee(r, f) : d[l]) > -1 && (r[u] = !(a[u] = f))
                            }
                        } else w = v(w === a ? w.splice(h, w.length) : w), i ? i(null, a, w, c) : Z.apply(a, w)
                    })
                }

                function y(e) {
                    for (var t, n, r, o = e.length, i = _.relative[e[0].type], a = i || _.relative[" "], s = i ? 1 : 0, c = p(function (e) {
                        return e === t
                    }, a, !0), u = p(function (e) {
                        return ee(t, e) > -1
                    }, a, !0), l = [
                        function (e, n, r) {
                            var o = !i && (r || n !== S) || ((t = n).nodeType ? c(e, n, r) : u(e, n, r));
                            return t = null, o
                        }
                    ]; o > s; s++)
                        if (n = _.relative[e[s].type]) l = [p(h(l), n)];
                        else {
                            if (n = _.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                                for (r = ++s; o > r && !_.relative[e[r].type]; r++);
                                return m(s > 1 && h(l), s > 1 && d(e.slice(0, s - 1).concat({
                                        value: " " === e[s - 2].type ? "*" : ""
                                    })).replace(se, "$1"), n, r > s && y(e.slice(s, r)), o > r && y(e = e.slice(r)), o > r && d(e))
                            }
                            l.push(n)
                        }
                    return h(l)
                }

                function w(e, n) {
                    var o = n.length > 0,
                        i = e.length > 0,
                        a = function (r, a, s, c, u) {
                            var l, f, d, p = 0,
                                h = "0",
                                g = r && [],
                                m = [],
                                y = S,
                                w = r || i && _.find.TAG("*", u),
                                b = q += null == y ? 1 : Math.random() || .1,
                                x = w.length;
                            for (u && (S = a === I || a || u); h !== x && null != (l = w[h]); h++) {
                                if (i && l) {
                                    for (f = 0, a || l.ownerDocument === I || (N(l), s = !D); d = e[f++];)
                                        if (d(l, a || I, s)) {
                                            c.push(l);
                                            break
                                        }
                                    u && (q = b)
                                }
                                o && ((l = !d && l) && p--, r && g.push(l))
                            }
                            if (p += h, o && h !== p) {
                                for (f = 0; d = n[f++];) d(g, m, a, s);
                                if (r) {
                                    if (p > 0)
                                        for (; h--;) g[h] || m[h] || (m[h] = X.call(c));
                                    m = v(m)
                                }
                                Z.apply(c, m), u && !r && m.length > 0 && p + n.length > 1 && t.uniqueSort(c)
                            }
                            return u && (q = b, S = y), g
                        };
                    return o ? r(a) : a
                }
                var b, x, _, T, E, C, k, j, S, G, J, N, I, O, D, A, L, U, F, R = "sizzle" + 1 * new Date,
                    M = e.document,
                    q = 0,
                    $ = 0,
                    H = n(),
                    P = n(),
                    z = n(),
                    B = function (e, t) {
                        return e === t && (J = !0), 0
                    },
                    W = 1 << 31,
                    V = {}.hasOwnProperty,
                    Y = [],
                    X = Y.pop,
                    K = Y.push,
                    Z = Y.push,
                    Q = Y.slice,
                    ee = function (e, t) {
                        for (var n = 0, r = e.length; r > n; n++)
                            if (e[n] === t) return n;
                        return -1
                    },
                    te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ne = "[\\x20\\t\\r\\n\\f]",
                    re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
                    ie = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
                    ae = new RegExp(ne + "+", "g"),
                    se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                    ce = new RegExp("^" + ne + "*," + ne + "*"),
                    ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                    le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                    fe = new RegExp(ie),
                    de = new RegExp("^" + re + "$"),
                    pe = {
                        ID: new RegExp("^#(" + re + ")"),
                        CLASS: new RegExp("^\\.(" + re + ")"),
                        TAG: new RegExp("^(" + re + "|[*])"),
                        ATTR: new RegExp("^" + oe),
                        PSEUDO: new RegExp("^" + ie),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + te + ")$", "i"),
                        needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                    },
                    he = /^(?:input|select|textarea|button)$/i,
                    ge = /^h\d$/i,
                    ve = /^[^{]+\{\s*\[native \w/,
                    me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ye = /[+~]/,
                    we = /'|\\/g,
                    be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                    xe = function (e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    },
                    _e = function () {
                        N()
                    };
                try {
                    Z.apply(Y = Q.call(M.childNodes), M.childNodes), Y[M.childNodes.length].nodeType
                } catch (Te) {
                    Z = {
                        apply: Y.length ? function (e, t) {
                            K.apply(e, Q.call(t))
                        } : function (e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];);
                            e.length = n - 1
                        }
                    }
                }
                x = t.support = {}, E = t.isXML = function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return !!t && "HTML" !== t.nodeName
                }, N = t.setDocument = function (e) {
                    var t, n, r = e ? e.ownerDocument || e : M;
                    return r !== I && 9 === r.nodeType && r.documentElement ? (I = r, O = I.documentElement, D = !E(I), (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _e, !1) : n.attachEvent && n.attachEvent("onunload", _e)), x.attributes = o(function (e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), x.getElementsByTagName = o(function (e) {
                        return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length
                    }), x.getElementsByClassName = ve.test(I.getElementsByClassName), x.getById = o(function (e) {
                        return O.appendChild(e).id = R, !I.getElementsByName || !I.getElementsByName(R).length
                    }), x.getById ? (_.find.ID = function (e, t) {
                        if ("undefined" != typeof t.getElementById && D) {
                            var n = t.getElementById(e);
                            return n ? [n] : []
                        }
                    }, _.filter.ID = function (e) {
                        var t = e.replace(be, xe);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }) : (delete _.find.ID, _.filter.ID = function (e) {
                        var t = e.replace(be, xe);
                        return function (e) {
                            var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return n && n.value === t
                        }
                    }), _.find.TAG = x.getElementsByTagName ? function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
                    } : function (e, t) {
                        var n, r = [],
                            o = 0,
                            i = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return i
                    }, _.find.CLASS = x.getElementsByClassName && function (e, t) {
                            return "undefined" != typeof t.getElementsByClassName && D ? t.getElementsByClassName(e) : void 0
                        }, L = [], A = [], (x.qsa = ve.test(I.querySelectorAll)) && (o(function (e) {
                        O.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && A.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || A.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + R + "-]").length || A.push("~="), e.querySelectorAll(":checked").length || A.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || A.push(".#.+[+~]")
                    }), o(function (e) {
                        var t = I.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && A.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || A.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), A.push(",.*:")
                    })), (x.matchesSelector = ve.test(U = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function (e) {
                        x.disconnectedMatch = U.call(e, "div"), U.call(e, "[s!='']:x"), L.push("!=", ie)
                    }), A = A.length && new RegExp(A.join("|")), L = L.length && new RegExp(L.join("|")), t = ve.test(O.compareDocumentPosition), F = t || ve.test(O.contains) ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                    } : function (e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, B = t ? function (e, t) {
                        if (e === t) return J = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === M && F(M, e) ? -1 : t === I || t.ownerDocument === M && F(M, t) ? 1 : G ? ee(G, e) - ee(G, t) : 0 : 4 & n ? -1 : 1)
                    } : function (e, t) {
                        if (e === t) return J = !0, 0;
                        var n, r = 0,
                            o = e.parentNode,
                            i = t.parentNode,
                            s = [e],
                            c = [t];
                        if (!o || !i) return e === I ? -1 : t === I ? 1 : o ? -1 : i ? 1 : G ? ee(G, e) - ee(G, t) : 0;
                        if (o === i) return a(e, t);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (n = t; n = n.parentNode;) c.unshift(n);
                        for (; s[r] === c[r];) r++;
                        return r ? a(s[r], c[r]) : s[r] === M ? -1 : c[r] === M ? 1 : 0
                    }, I) : I
                }, t.matches = function (e, n) {
                    return t(e, null, null, n)
                }, t.matchesSelector = function (e, n) {
                    if ((e.ownerDocument || e) !== I && N(e), n = n.replace(le, "='$1']"), x.matchesSelector && D && !z[n + " "] && (!L || !L.test(n)) && (!A || !A.test(n))) try {
                        var r = U.call(e, n);
                        if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                    } catch (o) {}
                    return t(n, I, null, [e]).length > 0
                }, t.contains = function (e, t) {
                    return (e.ownerDocument || e) !== I && N(e), F(e, t)
                }, t.attr = function (e, t) {
                    (e.ownerDocument || e) !== I && N(e);
                    var n = _.attrHandle[t.toLowerCase()],
                        r = n && V.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
                    return void 0 !== r ? r : x.attributes || !D ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }, t.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, t.uniqueSort = function (e) {
                    var t, n = [],
                        r = 0,
                        o = 0;
                    if (J = !x.detectDuplicates, G = !x.sortStable && e.slice(0), e.sort(B), J) {
                        for (; t = e[o++];) t === e[o] && (r = n.push(o));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return G = null, e
                }, T = t.getText = function (e) {
                    var t, n = "",
                        r = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += T(t);
                    return n
                }, _ = t.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: pe,
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
                            return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        }, CHILD: function (e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                        }, PSEUDO: function (e) {
                            var t, n = !e[6] && e[2];
                            return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(be, xe).toLowerCase();
                            return "*" === e ? function () {
                                return !0
                            } : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        }, CLASS: function (e) {
                            var t = H[e + " "];
                            return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && H(e, function (e) {
                                    return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                                })
                        }, ATTR: function (e, n, r) {
                            return function (o) {
                                var i = t.attr(o, e);
                                return null == i ? "!=" === n : !n || (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"))
                            }
                        }, CHILD: function (e, t, n, r, o) {
                            var i = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === o ? function (e) {
                                return !!e.parentNode
                            } : function (t, n, c) {
                                var u, l, f, d, p, h, g = i !== a ? "nextSibling" : "previousSibling",
                                    v = t.parentNode,
                                    m = s && t.nodeName.toLowerCase(),
                                    y = !c && !s,
                                    w = !1;
                                if (v) {
                                    if (i) {
                                        for (; g;) {
                                            for (d = t; d = d[g];)
                                                if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                            h = g = "only" === e && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                        for (d = v, f = d[R] || (d[R] = {}),
                                                 l = f[d.uniqueID] || (f[d.uniqueID] = {}), u = l[e] || [], p = u[0] === q && u[1], w = p && u[2], d = p && v.childNodes[p]; d = ++p && d && d[g] || (w = p = 0) || h.pop();)
                                            if (1 === d.nodeType && ++w && d === t) {
                                                l[e] = [q, p, w];
                                                break
                                            }
                                    } else if (y && (d = t, f = d[R] || (d[R] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), u = l[e] || [], p = u[0] === q && u[1], w = p), w === !1)
                                        for (;
                                            (d = ++p && d && d[g] || (w = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++w || (y && (f = d[R] || (d[R] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), l[e] = [q, w]), d !== t)););
                                    return w -= o, w === r || w % r === 0 && w / r >= 0
                                }
                            }
                        }, PSEUDO: function (e, n) {
                            var o, i = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                            return i[R] ? i(n) : i.length > 1 ? (o = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                                for (var r, o = i(e, n), a = o.length; a--;) r = ee(e, o[a]), e[r] = !(t[r] = o[a])
                            }) : function (e) {
                                return i(e, 0, o)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: r(function (e) {
                            var t = [],
                                n = [],
                                o = k(e.replace(se, "$1"));
                            return o[R] ? r(function (e, t, n, r) {
                                for (var i, a = o(e, null, r, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
                            }) : function (e, r, i) {
                                return t[0] = e, o(t, null, i, n), t[0] = null, !n.pop()
                            }
                        }),
                        has: r(function (e) {
                            return function (n) {
                                return t(e, n).length > 0
                            }
                        }),
                        contains: r(function (e) {
                            return e = e.replace(be, xe),
                                function (t) {
                                    return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                                }
                        }),
                        lang: r(function (e) {
                            return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(),
                                function (t) {
                                    var n;
                                    do
                                        if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                    while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        }, root: function (e) {
                            return e === O
                        }, focus: function (e) {
                            return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
                        }, first: u(function () {
                            return [0]
                        }),
                        last: u(function (e, t) {
                            return [t - 1]
                        }),
                        eq: u(function (e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: u(function (e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: u(function (e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: u(function (e, t, n) {
                            for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                            return e
                        }),
                        gt: u(function (e, t, n) {
                            for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }, _.pseudos.nth = _.pseudos.eq;
                for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) _.pseudos[b] = s(b);
                for (b in {
                    submit: !0,
                    reset: !0
                }) _.pseudos[b] = c(b);
                return f.prototype = _.filters = _.pseudos, _.setFilters = new f, C = t.tokenize = function (e, n) {
                    var r, o, i, a, s, c, u, l = P[e + " "];
                    if (l) return n ? 0 : l.slice(0);
                    for (s = e, c = [], u = _.preFilter; s;) {
                        (!r || (o = ce.exec(s))) && (o && (s = s.slice(o[0].length) || s), c.push(i = [])), r = !1, (o = ue.exec(s)) && (r = o.shift(), i.push({
                            value: r,
                            type: o[0].replace(se, " ")
                        }), s = s.slice(r.length));
                        for (a in _.filter)!(o = pe[a].exec(s)) || u[a] && !(o = u[a](o)) || (r = o.shift(), i.push({
                            value: r,
                            type: a,
                            matches: o
                        }), s = s.slice(r.length));
                        if (!r) break
                    }
                    return n ? s.length : s ? t.error(e) : P(e, c).slice(0)
                }, k = t.compile = function (e, t) {
                    var n, r = [],
                        o = [],
                        i = z[e + " "];
                    if (!i) {
                        for (t || (t = C(e)), n = t.length; n--;) i = y(t[n]), i[R] ? r.push(i) : o.push(i);
                        i = z(e, w(o, r)), i.selector = e
                    }
                    return i
                }, j = t.select = function (e, t, n, r) {
                    var o, i, a, s, c, u = "function" == typeof e && e,
                        f = !r && C(e = u.selector || e);
                    if (n = n || [], 1 === f.length) {
                        if (i = f[0] = f[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && x.getById && 9 === t.nodeType && D && _.relative[i[1].type]) {
                            if (t = (_.find.ID(a.matches[0].replace(be, xe), t) || [])[0], !t) return n;
                            u && (t = t.parentNode), e = e.slice(i.shift().value.length)
                        }
                        for (o = pe.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !_.relative[s = a.type]);)
                            if ((c = _.find[s]) && (r = c(a.matches[0].replace(be, xe), ye.test(i[0].type) && l(t.parentNode) || t))) {
                                if (i.splice(o, 1), e = r.length && d(i), !e) return Z.apply(n, r), n;
                                break
                            }
                    }
                    return (u || k(e, f))(r, t, !D, n, !t || ye.test(e) && l(t.parentNode) || t), n
                }, x.sortStable = R.split("").sort(B).join("") === R, x.detectDuplicates = !!J, N(), x.sortDetached = o(function (e) {
                    return 1 & e.compareDocumentPosition(I.createElement("div"))
                }), o(function (e) {
                    return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                }) || i("type|href|height|width", function (e, t, n) {
                    return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                }), x.attributes && o(function (e) {
                    return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                }) || i("value", function (e, t, n) {
                    return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
                }), o(function (e) {
                    return null == e.getAttribute("disabled")
                }) || i(te, function (e, t, n) {
                    var r;
                    return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                }), t
            }(i);
            ye.find = Te, ye.expr = Te.selectors, ye.expr[":"] = ye.expr.pseudos, ye.uniqueSort = ye.unique = Te.uniqueSort, ye.text = Te.getText, ye.isXMLDoc = Te.isXML, ye.contains = Te.contains;
            var Ee = function (e, t, n) {
                    for (var r = [], o = void 0 !== n;
                         (e = e[t]) && 9 !== e.nodeType;)
                        if (1 === e.nodeType) {
                            if (o && ye(e).is(n)) break;
                            r.push(e)
                        }
                    return r
                },
                Ce = function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n
                },
                ke = ye.expr.match.needsContext,
                je = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
                Se = /^.[^:#\[\.,]*$/;
            ye.filter = function (e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ye.find.matchesSelector(r, e) ? [r] : [] : ye.find.matches(e, ye.grep(t, function (e) {
                    return 1 === e.nodeType
                }))
            }, ye.fn.extend({
                find: function (e) {
                    var t, n = [],
                        r = this,
                        o = r.length;
                    if ("string" != typeof e) return this.pushStack(ye(e).filter(function () {
                        for (t = 0; o > t; t++)
                            if (ye.contains(r[t], this)) return !0
                    }));
                    for (t = 0; o > t; t++) ye.find(e, r[t], n);
                    return n = this.pushStack(o > 1 ? ye.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
                }, filter: function (e) {
                    return this.pushStack(c(this, e || [], !1))
                }, not: function (e) {
                    return this.pushStack(c(this, e || [], !0))
                }, is: function (e) {
                    return !!c(this, "string" == typeof e && ke.test(e) ? ye(e) : e || [], !1).length
                }
            });
            var Ge, Je = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                Ne = ye.fn.init = function (e, t, n) {
                    var r, o;
                    if (!e) return this;
                    if (n = n || Ge, "string" == typeof e) {
                        if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Je.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (r[1]) {
                            if (t = t instanceof ye ? t[0] : t, ye.merge(this, ye.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ce, !0)), je.test(r[1]) && ye.isPlainObject(t))
                                for (r in t) ye.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                            return this
                        }
                        if (o = ce.getElementById(r[2]), o && o.parentNode) {
                            if (o.id !== r[2]) return Ge.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = ce, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ye.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(ye) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ye.makeArray(e, this))
                };
            Ne.prototype = ye.fn, Ge = ye(ce);
            var Ie = /^(?:parents|prev(?:Until|All))/,
                Oe = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
            ye.fn.extend({
                has: function (e) {
                    var t, n = ye(e, this),
                        r = n.length;
                    return this.filter(function () {
                        for (t = 0; r > t; t++)
                            if (ye.contains(this, n[t])) return !0
                    })
                }, closest: function (e, t) {
                    for (var n, r = 0, o = this.length, i = [], a = ke.test(e) || "string" != typeof e ? ye(e, t || this.context) : 0; o > r; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ye.find.matchesSelector(n, e))) {
                                i.push(n);
                                break
                            }
                    return this.pushStack(i.length > 1 ? ye.uniqueSort(i) : i)
                }, index: function (e) {
                    return e ? "string" == typeof e ? ye.inArray(this[0], ye(e)) : ye.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (e, t) {
                    return this.pushStack(ye.uniqueSort(ye.merge(this.get(), ye(e, t))))
                }, addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                }
            }), ye.each({
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null
                }, parents: function (e) {
                    return Ee(e, "parentNode")
                }, parentsUntil: function (e, t, n) {
                    return Ee(e, "parentNode", n)
                }, next: function (e) {
                    return u(e, "nextSibling")
                }, prev: function (e) {
                    return u(e, "previousSibling")
                }, nextAll: function (e) {
                    return Ee(e, "nextSibling")
                }, prevAll: function (e) {
                    return Ee(e, "previousSibling")
                }, nextUntil: function (e, t, n) {
                    return Ee(e, "nextSibling", n)
                }, prevUntil: function (e, t, n) {
                    return Ee(e, "previousSibling", n)
                }, siblings: function (e) {
                    return Ce((e.parentNode || {}).firstChild, e)
                }, children: function (e) {
                    return Ce(e.firstChild)
                }, contents: function (e) {
                    return ye.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ye.merge([], e.childNodes)
                }
            }, function (e, t) {
                ye.fn[e] = function (n, r) {
                    var o = ye.map(this, t, n);
                    return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = ye.filter(r, o)), this.length > 1 && (Oe[e] || (o = ye.uniqueSort(o)), Ie.test(e) && (o = o.reverse())), this.pushStack(o)
                }
            });
            var De = /\S+/g;
            ye.Callbacks = function (e) {
                e = "string" == typeof e ? l(e) : ye.extend({}, e);
                var t, n, r, o, i = [],
                    a = [],
                    s = -1,
                    c = function () {
                        for (o = e.once, r = t = !0; a.length; s = -1)
                            for (n = a.shift(); ++s < i.length;) i[s].apply(n[0], n[1]) === !1 && e.stopOnFalse && (s = i.length, n = !1);
                        e.memory || (n = !1), t = !1, o && (i = n ? [] : "")
                    },
                    u = {
                        add: function () {
                            return i && (n && !t && (s = i.length - 1, a.push(n)), function r(t) {
                                ye.each(t, function (t, n) {
                                    ye.isFunction(n) ? e.unique && u.has(n) || i.push(n) : n && n.length && "string" !== ye.type(n) && r(n)
                                })
                            }(arguments), n && !t && c()), this
                        }, remove: function () {
                            return ye.each(arguments, function (e, t) {
                                for (var n;
                                     (n = ye.inArray(t, i, n)) > -1;) i.splice(n, 1), s >= n && s--
                            }), this
                        }, has: function (e) {
                            return e ? ye.inArray(e, i) > -1 : i.length > 0
                        }, empty: function () {
                            return i && (i = []), this
                        }, disable: function () {
                            return o = a = [], i = n = "", this
                        }, disabled: function () {
                            return !i
                        }, lock: function () {
                            return o = !0, n || u.disable(), this
                        }, locked: function () {
                            return !!o
                        }, fireWith: function (e, n) {
                            return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || c()), this
                        }, fire: function () {
                            return u.fireWith(this, arguments), this
                        }, fired: function () {
                            return !!r
                        }
                    };
                return u
            }, ye.extend({
                Deferred: function (e) {
                    var t = [
                            ["resolve", "done", ye.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", ye.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", ye.Callbacks("memory")]
                        ],
                        n = "pending",
                        r = {
                            state: function () {
                                return n
                            }, always: function () {
                                return o.done(arguments).fail(arguments), this
                            }, then: function () {
                                var e = arguments;
                                return ye.Deferred(function (n) {
                                    ye.each(t, function (t, i) {
                                        var a = ye.isFunction(e[t]) && e[t];
                                        o[i[1]](function () {
                                            var e = a && a.apply(this, arguments);
                                            e && ye.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                        })
                                    }), e = null
                                }).promise()
                            }, promise: function (e) {
                                return null != e ? ye.extend(e, r) : r
                            }
                        },
                        o = {};
                    return r.pipe = r.then, ye.each(t, function (e, i) {
                        var a = i[2],
                            s = i[3];
                        r[i[1]] = a.add, s && a.add(function () {
                            n = s
                        }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function () {
                            return o[i[0] + "With"](this === o ? r : this, arguments), this
                        }, o[i[0] + "With"] = a.fireWith
                    }), r.promise(o), e && e.call(o, o), o
                }, when: function (e) {
                    var t, n, r, o = 0,
                        i = ue.call(arguments),
                        a = i.length,
                        s = 1 !== a || e && ye.isFunction(e.promise) ? a : 0,
                        c = 1 === s ? e : ye.Deferred(),
                        u = function (e, n, r) {
                            return function (o) {
                                n[e] = this, r[e] = arguments.length > 1 ? ue.call(arguments) : o, r === t ? c.notifyWith(n, r) : --s || c.resolveWith(n, r)
                            }
                        };
                    if (a > 1)
                        for (t = new Array(a), n = new Array(a), r = new Array(a); a > o; o++) i[o] && ye.isFunction(i[o].promise) ? i[o].promise().progress(u(o, n, t)).done(u(o, r, i)).fail(c.reject) : --s;
                    return s || c.resolveWith(r, i), c.promise()
                }
            });
            var Ae;
            ye.fn.ready = function (e) {
                return ye.ready.promise().done(e), this
            }, ye.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                    e ? ye.readyWait++ : ye.ready(!0)
                }, ready: function (e) {
                    (e === !0 ? --ye.readyWait : ye.isReady) || (ye.isReady = !0, e !== !0 && --ye.readyWait > 0 || (Ae.resolveWith(ce, [ye]), ye.fn.triggerHandler && (ye(ce).triggerHandler("ready"), ye(ce).off("ready"))))
                }
            }), ye.ready.promise = function (e) {
                if (!Ae)
                    if (Ae = ye.Deferred(), "complete" === ce.readyState) i.setTimeout(ye.ready);
                    else if (ce.addEventListener) ce.addEventListener("DOMContentLoaded", d), i.addEventListener("load", d);
                    else {
                        ce.attachEvent("onreadystatechange", d), i.attachEvent("onload", d);
                        var t = !1;
                        try {
                            t = null == i.frameElement && ce.documentElement
                        } catch (n) {}
                        t && t.doScroll && ! function r() {
                            if (!ye.isReady) {
                                try {
                                    t.doScroll("left")
                                } catch (e) {
                                    return i.setTimeout(r, 50)
                                }
                                f(), ye.ready()
                            }
                        }()
                    }
                return Ae.promise(e)
            }, ye.ready.promise();
            var Le;
            for (Le in ye(ve)) break;
            ve.ownFirst = "0" === Le, ve.inlineBlockNeedsLayout = !1, ye(function () {
                var e, t, n, r;
                n = ce.getElementsByTagName("body")[0], n && n.style && (t = ce.createElement("div"), r = ce.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ve.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r))
            }),
                function () {
                    var e = ce.createElement("div");
                    ve.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (t) {
                        ve.deleteExpando = !1
                    }
                    e = null
                }();
            var Ue = function (e) {
                    var t = ye.noData[(e.nodeName + " ").toLowerCase()],
                        n = +e.nodeType || 1;
                    return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
                },
                Fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Re = /([A-Z])/g;
            ye.extend({
                cache: {},
                noData: {
                    "applet ": !0,
                    "embed ": !0,
                    "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                },
                hasData: function (e) {
                    return e = e.nodeType ? ye.cache[e[ye.expando]] : e[ye.expando], !!e && !h(e)
                }, data: function (e, t, n) {
                    return g(e, t, n)
                }, removeData: function (e, t) {
                    return v(e, t)
                }, _data: function (e, t, n) {
                    return g(e, t, n, !0)
                }, _removeData: function (e, t) {
                    return v(e, t, !0)
                }
            }), ye.fn.extend({
                data: function (e, t) {
                    var n, r, o, i = this[0],
                        a = i && i.attributes;
                    if (void 0 === e) {
                        if (this.length && (o = ye.data(i), 1 === i.nodeType && !ye._data(i, "parsedAttrs"))) {
                            for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ye.camelCase(r.slice(5)), p(i, r, o[r])));
                            ye._data(i, "parsedAttrs", !0)
                        }
                        return o
                    }
                    return "object" == typeof e ? this.each(function () {
                        ye.data(this, e)
                    }) : arguments.length > 1 ? this.each(function () {
                        ye.data(this, e, t)
                    }) : i ? p(i, e, ye.data(i, e)) : void 0
                }, removeData: function (e) {
                    return this.each(function () {
                        ye.removeData(this, e)
                    })
                }
            }), ye.extend({
                queue: function (e, t, n) {
                    var r;
                    return e ? (t = (t || "fx") + "queue", r = ye._data(e, t), n && (!r || ye.isArray(n) ? r = ye._data(e, t, ye.makeArray(n)) : r.push(n)), r || []) : void 0
                }, dequeue: function (e, t) {
                    t = t || "fx";
                    var n = ye.queue(e, t),
                        r = n.length,
                        o = n.shift(),
                        i = ye._queueHooks(e, t),
                        a = function () {
                            ye.dequeue(e, t)
                        };
                    "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, a, i)), !r && i && i.empty.fire()
                }, _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return ye._data(e, n) || ye._data(e, n, {
                            empty: ye.Callbacks("once memory").add(function () {
                                ye._removeData(e, t + "queue"), ye._removeData(e, n)
                            })
                        })
                }
            }), ye.fn.extend({
                queue: function (e, t) {
                    var n = 2;
                    return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ye.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                        var n = ye.queue(this, e, t);
                        ye._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ye.dequeue(this, e)
                    })
                }, dequeue: function (e) {
                    return this.each(function () {
                        ye.dequeue(this, e)
                    })
                }, clearQueue: function (e) {
                    return this.queue(e || "fx", [])
                }, promise: function (e, t) {
                    var n, r = 1,
                        o = ye.Deferred(),
                        i = this,
                        a = this.length,
                        s = function () {
                            --r || o.resolveWith(i, [i])
                        };
                    for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = ye._data(i[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                    return s(), o.promise(t)
                }
            }),
                function () {
                    var e;
                    ve.shrinkWrapBlocks = function () {
                        if (null != e) return e;
                        e = !1;
                        var t, n, r;
                        return n = ce.getElementsByTagName("body")[0], n && n.style ? (t = ce.createElement("div"), r = ce.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(ce.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), e) : void 0
                    }
                }();
            var Me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                qe = new RegExp("^(?:([+-])=|)(" + Me + ")([a-z%]*)$", "i"),
                $e = ["Top", "Right", "Bottom", "Left"],
                He = function (e, t) {
                    return e = t || e, "none" === ye.css(e, "display") || !ye.contains(e.ownerDocument, e)
                },
                Pe = function (e, t, n, r, o, i, a) {
                    var s = 0,
                        c = e.length,
                        u = null == n;
                    if ("object" === ye.type(n)) {
                        o = !0;
                        for (s in n) Pe(e, t, s, n[s], !0, i, a)
                    } else if (void 0 !== r && (o = !0, ye.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function (e, t, n) {
                            return u.call(ye(e), n)
                        })), t))
                        for (; c > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                    return o ? e : u ? t.call(e) : c ? t(e[0], n) : i
                },
                ze = /^(?:checkbox|radio)$/i,
                Be = /<([\w:-]+)/,
                We = /^$|\/(?:java|ecma)script/i,
                Ve = /^\s+/,
                Ye = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
            ! function () {
                var e = ce.createElement("div"),
                    t = ce.createDocumentFragment(),
                    n = ce.createElement("input");
                e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ve.leadingWhitespace = 3 === e.firstChild.nodeType, ve.tbody = !e.getElementsByTagName("tbody").length, ve.htmlSerialize = !!e.getElementsByTagName("link").length, ve.html5Clone = "<:nav></:nav>" !== ce.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, t.appendChild(n), ve.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", ve.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = ce.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ve.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ve.noCloneEvent = !!e.addEventListener, e[ye.expando] = 1, ve.attributes = !e.getAttribute(ye.expando)
            }();
            var Xe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ve.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            };
            Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td;
            var Ke = /<|&#?\w+;/,
                Ze = /<tbody/i;
            ! function () {
                var e, t, n = ce.createElement("div");
                for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) t = "on" + e, (ve[e] = t in i) || (n.setAttribute(t, "t"), ve[e] = n.attributes[t].expando === !1);
                n = null
            }();
            var Qe = /^(?:input|select|textarea)$/i,
                et = /^key/,
                tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                nt = /^(?:focusinfocus|focusoutblur)$/,
                rt = /^([^.]*)(?:\.(.+)|)/;
            ye.event = {
                global: {},
                add: function (e, t, n, r, o) {
                    var i, a, s, c, u, l, f, d, p, h, g, v = ye._data(e);
                    if (v) {
                        for (n.handler && (c = n, n = c.handler, o = c.selector), n.guid || (n.guid = ye.guid++), (a = v.events) || (a = v.events = {}), (l = v.handle) || (l = v.handle = function (e) {
                            return "undefined" == typeof ye || e && ye.event.triggered === e.type ? void 0 : ye.event.dispatch.apply(l.elem, arguments)
                        }, l.elem = e), t = (t || "").match(De) || [""], s = t.length; s--;) i = rt.exec(t[s]) || [], p = g = i[1], h = (i[2] || "").split(".").sort(), p && (u = ye.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = ye.event.special[p] || {}, f = ye.extend({
                            type: p,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: o,
                            needsContext: o && ye.expr.match.needsContext.test(o),
                            namespace: h.join(".")
                        }, c), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, u.setup && u.setup.call(e, r, h, l) !== !1 || (e.addEventListener ? e.addEventListener(p, l, !1) : e.attachEvent && e.attachEvent("on" + p, l))), u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), o ? d.splice(d.delegateCount++, 0, f) : d.push(f), ye.event.global[p] = !0);
                        e = null
                    }
                }, remove: function (e, t, n, r, o) {
                    var i, a, s, c, u, l, f, d, p, h, g, v = ye.hasData(e) && ye._data(e);
                    if (v && (l = v.events)) {
                        for (t = (t || "").match(De) || [""], u = t.length; u--;)
                            if (s = rt.exec(t[u]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                                for (f = ye.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), c = i = d.length; i--;) a = d[i], !o && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(i, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                                c && !d.length && (f.teardown && f.teardown.call(e, h, v.handle) !== !1 || ye.removeEvent(e, p, v.handle), delete l[p])
                            } else
                                for (p in l) ye.event.remove(e, p + t[u], n, r, !0);
                        ye.isEmptyObject(l) && (delete v.handle, ye._removeData(e, "events"))
                    }
                }, trigger: function (e, t, n, r) {
                    var o, a, s, c, u, l, f, d = [n || ce],
                        p = ge.call(e, "type") ? e.type : e,
                        h = ge.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (s = l = n = n || ce, 3 !== n.nodeType && 8 !== n.nodeType && !nt.test(p + ye.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[ye.expando] ? e : new ye.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : ye.makeArray(t, [e]), u = ye.event.special[p] || {}, r || !u.trigger || u.trigger.apply(n, t) !== !1)) {
                        if (!r && !u.noBubble && !ye.isWindow(n)) {
                            for (c = u.delegateType || p, nt.test(c + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), l = s;
                            l === (n.ownerDocument || ce) && d.push(l.defaultView || l.parentWindow || i)
                        }
                        for (f = 0;
                             (s = d[f++]) && !e.isPropagationStopped();) e.type = f > 1 ? c : u.bindType || p, o = (ye._data(s, "events") || {})[e.type] && ye._data(s, "handle"), o && o.apply(s, t), o = a && s[a], o && o.apply && Ue(s) && (e.result = o.apply(s, t), e.result === !1 && e.preventDefault());
                        if (e.type = p, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), t) === !1) && Ue(n) && a && n[p] && !ye.isWindow(n)) {
                            l = n[a], l && (n[a] = null), ye.event.triggered = p;
                            try {
                                n[p]()
                            } catch (g) {}
                            ye.event.triggered = void 0, l && (n[a] = l)
                        }
                        return e.result
                    }
                }, dispatch: function (e) {
                    e = ye.event.fix(e);
                    var t, n, r, o, i, a = [],
                        s = ue.call(arguments),
                        c = (ye._data(this, "events") || {})[e.type] || [],
                        u = ye.event.special[e.type] || {};
                    if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                        for (a = ye.event.handlers.call(this, e, c), t = 0;
                             (o = a[t++]) && !e.isPropagationStopped();)
                            for (e.currentTarget = o.elem, n = 0;
                                 (i = o.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.rnamespace || e.rnamespace.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ye.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, e), e.result
                    }
                }, handlers: function (e, t) {
                    var n, r, o, i, a = [],
                        s = t.delegateCount,
                        c = e.target;
                    if (s && c.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                        for (; c != this; c = c.parentNode || this)
                            if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                                for (r = [], n = 0; s > n; n++) i = t[n], o = i.selector + " ", void 0 === r[o] && (r[o] = i.needsContext ? ye(o, this).index(c) > -1 : ye.find(o, this, null, [c]).length), r[o] && r.push(i);
                                r.length && a.push({
                                    elem: c,
                                    handlers: r
                                })
                            }
                    return s < t.length && a.push({
                        elem: this,
                        handlers: t.slice(s)
                    }), a
                }, fix: function (e) {
                    if (e[ye.expando]) return e;
                    var t, n, r, o = e.type,
                        i = e,
                        a = this.fixHooks[o];
                    for (a || (this.fixHooks[o] = a = tt.test(o) ? this.mouseHooks : et.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ye.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];
                    return e.target || (e.target = i.srcElement || ce), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, i) : e
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
                        var n, r, o, i = t.button,
                            a = t.fromElement;
                        return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || ce, o = r.documentElement, n = r.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e
                    }
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function () {
                            if (this !== C() && this.focus) try {
                                return this.focus(), !1
                            } catch (e) {}
                        }, delegateType: "focusin"
                    },
                    blur: {
                        trigger: function () {
                            return this === C() && this.blur ? (this.blur(), !1) : void 0
                        }, delegateType: "focusout"
                    },
                    click: {
                        trigger: function () {
                            return ye.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                        }, _default: function (e) {
                            return ye.nodeName(e.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                        }
                    }
                },
                simulate: function (e, t, n) {
                    var r = ye.extend(new ye.Event, n, {
                        type: e,
                        isSimulated: !0
                    });
                    ye.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault()
                }
            }, ye.removeEvent = ce.removeEventListener ? function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
            } : function (e, t, n) {
                var r = "on" + t;
                e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
            }, ye.Event = function (e, t) {
                return this instanceof ye.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? T : E) : this.type = e, t && ye.extend(this, t), this.timeStamp = e && e.timeStamp || ye.now(), void(this[ye.expando] = !0)) : new ye.Event(e, t)
            }, ye.Event.prototype = {
                constructor: ye.Event,
                isDefaultPrevented: E,
                isPropagationStopped: E,
                isImmediatePropagationStopped: E,
                preventDefault: function () {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = T, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                }, stopPropagation: function () {
                    var e = this.originalEvent;
                    this.isPropagationStopped = T, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                }, stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = T, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
                }
            }, ye.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (e, t) {
                ye.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n, r = this,
                            o = e.relatedTarget,
                            i = e.handleObj;
                        return (!o || o !== r && !ye.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
                    }
                }
            }), ve.submit || (ye.event.special.submit = {
                setup: function () {
                    return !ye.nodeName(this, "form") && void ye.event.add(this, "click._submit keypress._submit", function (e) {
                            var t = e.target,
                                n = ye.nodeName(t, "input") || ye.nodeName(t, "button") ? ye.prop(t, "form") : void 0;
                            n && !ye._data(n, "submit") && (ye.event.add(n, "submit._submit", function (e) {
                                e._submitBubble = !0
                            }), ye._data(n, "submit", !0))
                        })
                }, postDispatch: function (e) {
                    e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && ye.event.simulate("submit", this.parentNode, e))
                }, teardown: function () {
                    return !ye.nodeName(this, "form") && void ye.event.remove(this, "._submit")
                }
            }), ve.change || (ye.event.special.change = {
                setup: function () {
                    return Qe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ye.event.add(this, "propertychange._change", function (e) {
                        "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
                    }), ye.event.add(this, "click._change", function (e) {
                        this._justChanged && !e.isTrigger && (this._justChanged = !1), ye.event.simulate("change", this, e)
                    })), !1) : void ye.event.add(this, "beforeactivate._change", function (e) {
                        var t = e.target;
                        Qe.test(t.nodeName) && !ye._data(t, "change") && (ye.event.add(t, "change._change", function (e) {
                            !this.parentNode || e.isSimulated || e.isTrigger || ye.event.simulate("change", this.parentNode, e)
                        }), ye._data(t, "change", !0))
                    })
                }, handle: function (e) {
                    var t = e.target;
                    return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
                }, teardown: function () {
                    return ye.event.remove(this, "._change"), !Qe.test(this.nodeName)
                }
            }), ve.focusin || ye.each({
                focus: "focusin",
                blur: "focusout"
            }, function (e, t) {
                var n = function (e) {
                    ye.event.simulate(t, e.target, ye.event.fix(e))
                };
                ye.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this,
                            o = ye._data(r, t);
                        o || r.addEventListener(e, n, !0), ye._data(r, t, (o || 0) + 1)
                    }, teardown: function () {
                        var r = this.ownerDocument || this,
                            o = ye._data(r, t) - 1;
                        o ? ye._data(r, t, o) : (r.removeEventListener(e, n, !0), ye._removeData(r, t))
                    }
                }
            }), ye.fn.extend({
                on: function (e, t, n, r) {
                    return k(this, e, t, n, r)
                }, one: function (e, t, n, r) {
                    return k(this, e, t, n, r, 1)
                }, off: function (e, t, n) {
                    var r, o;
                    if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ye(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof e) {
                        for (o in e) this.off(o, t, e[o]);
                        return this
                    }
                    return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = E), this.each(function () {
                        ye.event.remove(this, e, n, t)
                    })
                }, trigger: function (e, t) {
                    return this.each(function () {
                        ye.event.trigger(e, t, this)
                    })
                }, triggerHandler: function (e, t) {
                    var n = this[0];
                    return n ? ye.event.trigger(e, t, n, !0) : void 0
                }
            });
            var ot = / jQuery\d+="(?:null|\d+)"/g,
                it = new RegExp("<(?:" + Ye + ")[\\s/>]", "i"),
                at = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                st = /<script|<style|<link/i,
                ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
                ut = /^true\/(.*)/,
                lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                ft = y(ce),
                dt = ft.appendChild(ce.createElement("div"));
            ye.extend({
                htmlPrefilter: function (e) {
                    return e.replace(at, "<$1></$2>")
                }, clone: function (e, t, n) {
                    var r, o, i, a, s, c = ye.contains(e.ownerDocument, e);
                    if (ve.html5Clone || ye.isXMLDoc(e) || !it.test("<" + e.nodeName + ">") ? i = e.cloneNode(!0) : (dt.innerHTML = e.outerHTML, dt.removeChild(i = dt.firstChild)), !(ve.noCloneEvent && ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ye.isXMLDoc(e)))
                        for (r = w(i), s = w(e), a = 0; null != (o = s[a]); ++a) r[a] && N(o, r[a]);
                    if (t)
                        if (n)
                            for (s = s || w(e), r = r || w(i), a = 0; null != (o = s[a]); a++) J(o, r[a]);
                        else J(e, i);
                    return r = w(i, "script"), r.length > 0 && b(r, !c && w(e, "script")), r = s = o = null, i
                }, cleanData: function (e, t) {
                    for (var n, r, o, i, a = 0, s = ye.expando, c = ye.cache, u = ve.attributes, l = ye.event.special; null != (n = e[a]); a++)
                        if ((t || Ue(n)) && (o = n[s], i = o && c[o])) {
                            if (i.events)
                                for (r in i.events) l[r] ? ye.event.remove(n, r) : ye.removeEvent(n, r, i.handle);
                            c[o] && (delete c[o], u || "undefined" == typeof n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), se.push(o))
                        }
                }
            }), ye.fn.extend({
                domManip: I,
                detach: function (e) {
                    return O(this, e, !0)
                }, remove: function (e) {
                    return O(this, e)
                }, text: function (e) {
                    return Pe(this, function (e) {
                        return void 0 === e ? ye.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ce).createTextNode(e))
                    }, null, e, arguments.length)
                }, append: function () {
                    return I(this, arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = j(this, e);
                            t.appendChild(e)
                        }
                    })
                }, prepend: function () {
                    return I(this, arguments, function (e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var t = j(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                }, before: function () {
                    return I(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                    })
                }, after: function () {
                    return I(this, arguments, function (e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                    })
                }, empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++) {
                        for (1 === e.nodeType && ye.cleanData(w(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                        e.options && ye.nodeName(e, "select") && (e.options.length = 0)
                    }
                    return this
                }, clone: function (e, t) {
                    return e = null != e && e, t = null == t ? e : t, this.map(function () {
                        return ye.clone(this, e, t)
                    })
                }, html: function (e) {
                    return Pe(this, function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ot, "") : void 0;
                        if ("string" == typeof e && !st.test(e) && (ve.htmlSerialize || !it.test(e)) && (ve.leadingWhitespace || !Ve.test(e)) && !Xe[(Be.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = ye.htmlPrefilter(e);
                            try {
                                for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (ye.cleanData(w(t, !1)), t.innerHTML = e);
                                t = 0
                            } catch (o) {}
                        }
                        t && this.empty().append(e)
                    }, null, e, arguments.length)
                }, replaceWith: function () {
                    var e = [];
                    return I(this, arguments, function (t) {
                        var n = this.parentNode;
                        ye.inArray(this, e) < 0 && (ye.cleanData(w(this)), n && n.replaceChild(t, this))
                    }, e)
                }
            }), ye.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (e, t) {
                ye.fn[e] = function (e) {
                    for (var n, r = 0, o = [], i = ye(e), a = i.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ye(i[r])[t](n), fe.apply(o, n.get());
                    return this.pushStack(o)
                }
            });
            var pt, ht = {
                    HTML: "block",
                    BODY: "block"
                },
                gt = /^margin/,
                vt = new RegExp("^(" + Me + ")(?!px)[a-z%]+$", "i"),
                mt = function (e, t, n, r) {
                    var o, i, a = {};
                    for (i in t) a[i] = e.style[i], e.style[i] = t[i];
                    o = n.apply(e, r || []);
                    for (i in t) e.style[i] = a[i];
                    return o
                },
                yt = ce.documentElement;
            ! function () {
                function e() {
                    var e, l, f = ce.documentElement;
                    f.appendChild(c), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = r = s = !1, n = a = !0, i.getComputedStyle && (l = i.getComputedStyle(u), t = "1%" !== (l || {}).top, s = "2px" === (l || {}).marginLeft, r = "4px" === (l || {
                            width: "4px"
                        }).width, u.style.marginRight = "50%", n = "4px" === (l || {
                            marginRight: "4px"
                        }).marginRight, e = u.appendChild(ce.createElement("div")), e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", a = !parseFloat((i.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", o = 0 === u.getClientRects().length, o && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = u.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === e[0].offsetHeight, o && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)), f.removeChild(c)
                }
                var t, n, r, o, a, s, c = ce.createElement("div"),
                    u = ce.createElement("div");
                u.style && (u.style.cssText = "float:left;opacity:.5", ve.opacity = "0.5" === u.style.opacity, ve.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", ve.clearCloneStyle = "content-box" === u.style.backgroundClip, c = ce.createElement("div"), c.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", c.appendChild(u), ve.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, ye.extend(ve, {
                    reliableHiddenOffsets: function () {
                        return null == t && e(), o
                    }, boxSizingReliable: function () {
                        return null == t && e(), r
                    }, pixelMarginRight: function () {
                        return null == t && e(), n
                    }, pixelPosition: function () {
                        return null == t && e(), t
                    }, reliableMarginRight: function () {
                        return null == t && e(), a
                    }, reliableMarginLeft: function () {
                        return null == t && e(), s
                    }
                }))
            }();
            var wt, bt, xt = /^(top|right|bottom|left)$/;
            i.getComputedStyle ? (wt = function (e) {
                var t = e.ownerDocument.defaultView;
                return t.opener || (t = i), t.getComputedStyle(e)
            }, bt = function (e, t, n) {
                var r, o, i, a, s = e.style;
                return n = n || wt(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || ye.contains(e.ownerDocument, e) || (a = ye.style(e, t)), !ve.pixelMarginRight() && vt.test(a) && gt.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 === a ? a : a + ""
            }) : yt.currentStyle && (wt = function (e) {
                return e.currentStyle
            }, bt = function (e, t, n) {
                var r, o, i, a, s = e.style;
                return n = n || wt(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), vt.test(a) && !xt.test(t) && (r = s.left, o = e.runtimeStyle, i = o && o.left, i && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = r, i && (o.left = i)), void 0 === a ? a : a + "" || "auto"
            });
            var _t = /alpha\([^)]*\)/i,
                Tt = /opacity\s*=\s*([^)]*)/i,
                Et = /^(none|table(?!-c[ea]).+)/,
                Ct = new RegExp("^(" + Me + ")(.*)$", "i"),
                kt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                jt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                St = ["Webkit", "O", "Moz", "ms"],
                Gt = ce.createElement("div").style;
            ye.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = bt(e, "opacity");
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
                    "float": ve.cssFloat ? "cssFloat" : "styleFloat"
                },
                style: function (e, t, n, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, i, a, s = ye.camelCase(t),
                            c = e.style;
                        if (t = ye.cssProps[s] || (ye.cssProps[s] = U(s) || s), a = ye.cssHooks[t] || ye.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : c[t];
                        if (i = typeof n, "string" === i && (o = qe.exec(n)) && o[1] && (n = m(e, t, o), i = "number"), null != n && n === n && ("number" === i && (n += o && o[3] || (ye.cssNumber[s] ? "" : "px")), ve.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                            c[t] = n
                        } catch (u) {}
                    }
                }, css: function (e, t, n, r) {
                    var o, i, a, s = ye.camelCase(t);
                    return t = ye.cssProps[s] || (ye.cssProps[s] = U(s) || s), a = ye.cssHooks[t] || ye.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = bt(e, t, r)), "normal" === i && t in jt && (i = jt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
                }
            }), ye.each(["height", "width"], function (e, t) {
                ye.cssHooks[t] = {
                    get: function (e, n, r) {
                        return n ? Et.test(ye.css(e, "display")) && 0 === e.offsetWidth ? mt(e, kt, function () {
                            return q(e, t, r)
                        }) : q(e, t, r) : void 0
                    }, set: function (e, n, r) {
                        var o = r && wt(e);
                        return R(e, n, r ? M(e, t, r, ve.boxSizing && "border-box" === ye.css(e, "boxSizing", !1, o), o) : 0)
                    }
                }
            }), ve.opacity || (ye.cssHooks.opacity = {
                get: function (e, t) {
                    return Tt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
                }, set: function (e, t) {
                    var n = e.style,
                        r = e.currentStyle,
                        o = ye.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                        i = r && r.filter || n.filter || "";
                    n.zoom = 1, (t >= 1 || "" === t) && "" === ye.trim(i.replace(_t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = _t.test(i) ? i.replace(_t, o) : i + " " + o)
                }
            }), ye.cssHooks.marginRight = L(ve.reliableMarginRight, function (e, t) {
                return t ? mt(e, {
                    display: "inline-block"
                }, bt, [e, "marginRight"]) : void 0
            }), ye.cssHooks.marginLeft = L(ve.reliableMarginLeft, function (e, t) {
                return t ? (parseFloat(bt(e, "marginLeft")) || (ye.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - mt(e, {
                    marginLeft: 0
                }, function () {
                    return e.getBoundingClientRect().left
                }) : 0)) + "px" : void 0
            }), ye.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (e, t) {
                ye.cssHooks[e + t] = {
                    expand: function (n) {
                        for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + $e[r] + t] = i[r] || i[r - 2] || i[0];
                        return o
                    }
                }, gt.test(e) || (ye.cssHooks[e + t].set = R)
            }), ye.fn.extend({
                css: function (e, t) {
                    return Pe(this, function (e, t, n) {
                        var r, o, i = {},
                            a = 0;
                        if (ye.isArray(t)) {
                            for (r = wt(e), o = t.length; o > a; a++) i[t[a]] = ye.css(e, t[a], !1, r);
                            return i
                        }
                        return void 0 !== n ? ye.style(e, t, n) : ye.css(e, t)
                    }, e, t, arguments.length > 1)
                }, show: function () {
                    return F(this, !0)
                }, hide: function () {
                    return F(this)
                }, toggle: function (e) {
                    return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                        He(this) ? ye(this).show() : ye(this).hide()
                    })
                }
            }), ye.Tween = $, $.prototype = {
                constructor: $,
                init: function (e, t, n, r, o, i) {
                    this.elem = e, this.prop = n, this.easing = o || ye.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (ye.cssNumber[n] ? "" : "px")
                }, cur: function () {
                    var e = $.propHooks[this.prop];
                    return e && e.get ? e.get(this) : $.propHooks._default.get(this)
                }, run: function (e) {
                    var t, n = $.propHooks[this.prop];
                    return this.options.duration ? this.pos = t = ye.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
                }
            }, $.prototype.init.prototype = $.prototype, $.propHooks = {
                _default: {
                    get: function (e) {
                        var t;
                        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ye.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                    }, set: function (e) {
                        ye.fx.step[e.prop] ? ye.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ye.cssProps[e.prop]] && !ye.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ye.style(e.elem, e.prop, e.now + e.unit)
                    }
                }
            }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
                set: function (e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
            }, ye.easing = {
                linear: function (e) {
                    return e
                }, swing: function (e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }, _default: "swing"
            }, ye.fx = $.prototype.init, ye.fx.step = {};
            var Jt, Nt, It = /^(?:toggle|show|hide)$/,
                Ot = /queueHooks$/;
            ye.Animation = ye.extend(V, {
                tweeners: {
                    "*": [
                        function (e, t) {
                            var n = this.createTween(e, t);
                            return m(n.elem, e, qe.exec(t), n), n
                        }
                    ]
                },
                tweener: function (e, t) {
                    ye.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(De);
                    for (var n, r = 0, o = e.length; o > r; r++) n = e[r], V.tweeners[n] = V.tweeners[n] || [], V.tweeners[n].unshift(t)
                }, prefilters: [B],
                prefilter: function (e, t) {
                    t ? V.prefilters.unshift(e) : V.prefilters.push(e)
                }
            }), ye.speed = function (e, t, n) {
                var r = e && "object" == typeof e ? ye.extend({}, e) : {
                    complete: n || !n && t || ye.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !ye.isFunction(t) && t
                };
                return r.duration = ye.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ye.fx.speeds ? ye.fx.speeds[r.duration] : ye.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                    ye.isFunction(r.old) && r.old.call(this), r.queue && ye.dequeue(this, r.queue)
                }, r
            }, ye.fn.extend({
                fadeTo: function (e, t, n, r) {
                    return this.filter(He).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, r)
                }, animate: function (e, t, n, r) {
                    var o = ye.isEmptyObject(e),
                        i = ye.speed(t, n, r),
                        a = function () {
                            var t = V(this, ye.extend({}, e), i);
                            (o || ye._data(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, o || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
                }, stop: function (e, t, n) {
                    var r = function (e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            i = ye.timers,
                            a = ye._data(this);
                        if (o) a[o] && a[o].stop && r(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && Ot.test(o) && r(a[o]);
                        for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));
                        (t || !n) && ye.dequeue(this, e)
                    })
                }, finish: function (e) {
                    return e !== !1 && (e = e || "fx"), this.each(function () {
                        var t, n = ye._data(this),
                            r = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            i = ye.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, ye.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
                        for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), ye.each(["toggle", "show", "hide"], function (e, t) {
                var n = ye.fn[t];
                ye.fn[t] = function (e, r, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(P(t, !0), e, r, o)
                }
            }), ye.each({
                slideDown: P("show"),
                slideUp: P("hide"),
                slideToggle: P("toggle"),
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
                ye.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), ye.timers = [], ye.fx.tick = function () {
                var e, t = ye.timers,
                    n = 0;
                for (Jt = ye.now(); n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || ye.fx.stop(), Jt = void 0
            }, ye.fx.timer = function (e) {
                ye.timers.push(e), e() ? ye.fx.start() : ye.timers.pop()
            }, ye.fx.interval = 13, ye.fx.start = function () {
                Nt || (Nt = i.setInterval(ye.fx.tick, ye.fx.interval))
            }, ye.fx.stop = function () {
                i.clearInterval(Nt), Nt = null
            }, ye.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ye.fn.delay = function (e, t) {
                return e = ye.fx ? ye.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                    var r = i.setTimeout(t, e);
                    n.stop = function () {
                        i.clearTimeout(r)
                    }
                })
            },
                function () {
                    var e, t = ce.createElement("input"),
                        n = ce.createElement("div"),
                        r = ce.createElement("select"),
                        o = r.appendChild(ce.createElement("option"));
                    n = ce.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", ve.getSetAttribute = "t" !== n.className, ve.style = /top/.test(e.getAttribute("style")), ve.hrefNormalized = "/a" === e.getAttribute("href"), ve.checkOn = !!t.value, ve.optSelected = o.selected, ve.enctype = !!ce.createElement("form").enctype, r.disabled = !0, ve.optDisabled = !o.disabled, t = ce.createElement("input"), t.setAttribute("value", ""), ve.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ve.radioValue = "t" === t.value
                }();
            var Dt = /\r/g;
            ye.fn.extend({
                val: function (e) {
                    var t, n, r, o = this[0];
                    return arguments.length ? (r = ye.isFunction(e), this.each(function (n) {
                        var o;
                        1 === this.nodeType && (o = r ? e.call(this, n, ye(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ye.isArray(o) && (o = ye.map(o, function (e) {
                            return null == e ? "" : e + ""
                        })), t = ye.valHooks[this.type] || ye.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                    })) : o ? (t = ye.valHooks[o.type] || ye.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(Dt, "") : null == n ? "" : n)) : void 0
                }
            }), ye.extend({
                valHooks: {
                    option: {
                        get: function (e) {
                            var t = ye.find.attr(e, "value");
                            return null != t ? t : ye.trim(ye.text(e))
                        }
                    },
                    select: {
                        get: function (e) {
                            for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, a = i ? null : [], s = i ? o + 1 : r.length, c = 0 > o ? s : i ? o : 0; s > c; c++)
                                if (n = r[c], (n.selected || c === o) && (ve.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ye.nodeName(n.parentNode, "optgroup"))) {
                                    if (t = ye(n).val(), i) return t;
                                    a.push(t)
                                }
                            return a
                        }, set: function (e, t) {
                            for (var n, r, o = e.options, i = ye.makeArray(t), a = o.length; a--;)
                                if (r = o[a], ye.inArray(ye.valHooks.option.get(r), i) >= 0) try {
                                    r.selected = n = !0
                                } catch (s) {
                                    r.scrollHeight
                                } else r.selected = !1;
                            return n || (e.selectedIndex = -1), o
                        }
                    }
                }
            }), ye.each(["radio", "checkbox"], function () {
                ye.valHooks[this] = {
                    set: function (e, t) {
                        return ye.isArray(t) ? e.checked = ye.inArray(ye(e).val(), t) > -1 : void 0
                    }
                }, ve.checkOn || (ye.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                })
            });
            var At, Lt, Ut = ye.expr.attrHandle,
                Ft = /^(?:checked|selected)$/i,
                Rt = ve.getSetAttribute,
                Mt = ve.input;
            ye.fn.extend({
                attr: function (e, t) {
                    return Pe(this, ye.attr, e, t, arguments.length > 1)
                }, removeAttr: function (e) {
                    return this.each(function () {
                        ye.removeAttr(this, e)
                    })
                }
            }), ye.extend({
                attr: function (e, t, n) {
                    var r, o, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return "undefined" == typeof e.getAttribute ? ye.prop(e, t, n) : (1 === i && ye.isXMLDoc(e) || (t = t.toLowerCase(), o = ye.attrHooks[t] || (ye.expr.match.bool.test(t) ? Lt : At)), void 0 !== n ? null === n ? void ye.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (r = o.get(e, t)) ? r : (r = ye.find.attr(e, t), null == r ? void 0 : r))
                }, attrHooks: {
                    type: {
                        set: function (e, t) {
                            if (!ve.radioValue && "radio" === t && ye.nodeName(e, "input")) {
                                var n = e.value;
                                return e.setAttribute("type", t), n && (e.value = n), t
                            }
                        }
                    }
                }, removeAttr: function (e, t) {
                    var n, r, o = 0,
                        i = t && t.match(De);
                    if (i && 1 === e.nodeType)
                        for (; n = i[o++];) r = ye.propFix[n] || n, ye.expr.match.bool.test(n) ? Mt && Rt || !Ft.test(n) ? e[r] = !1 : e[ye.camelCase("default-" + n)] = e[r] = !1 : ye.attr(e, n, ""), e.removeAttribute(Rt ? n : r)
                }
            }), Lt = {
                set: function (e, t, n) {
                    return t === !1 ? ye.removeAttr(e, n) : Mt && Rt || !Ft.test(n) ? e.setAttribute(!Rt && ye.propFix[n] || n, n) : e[ye.camelCase("default-" + n)] = e[n] = !0, n
                }
            }, ye.each(ye.expr.match.bool.source.match(/\w+/g), function (e, t) {
                var n = Ut[t] || ye.find.attr;
                Mt && Rt || !Ft.test(t) ? Ut[t] = function (e, t, r) {
                    var o, i;
                    return r || (i = Ut[t], Ut[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, Ut[t] = i), o
                } : Ut[t] = function (e, t, n) {
                    return n ? void 0 : e[ye.camelCase("default-" + t)] ? t.toLowerCase() : null
                }
            }), Mt && Rt || (ye.attrHooks.value = {
                set: function (e, t, n) {
                    return ye.nodeName(e, "input") ? void(e.defaultValue = t) : At && At.set(e, t, n)
                }
            }), Rt || (At = {
                set: function (e, t, n) {
                    var r = e.getAttributeNode(n);
                    return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
                }
            }, Ut.id = Ut.name = Ut.coords = function (e, t, n) {
                var r;
                return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
            }, ye.valHooks.button = {
                get: function (e, t) {
                    var n = e.getAttributeNode(t);
                    return n && n.specified ? n.value : void 0
                }, set: At.set
            }, ye.attrHooks.contenteditable = {
                set: function (e, t, n) {
                    At.set(e, "" !== t && t, n)
                }
            }, ye.each(["width", "height"], function (e, t) {
                ye.attrHooks[t] = {
                    set: function (e, n) {
                        return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                    }
                }
            })), ve.style || (ye.attrHooks.style = {
                get: function (e) {
                    return e.style.cssText || void 0
                }, set: function (e, t) {
                    return e.style.cssText = t + ""
                }
            });
            var qt = /^(?:input|select|textarea|button|object)$/i,
                $t = /^(?:a|area)$/i;
            ye.fn.extend({
                prop: function (e, t) {
                    return Pe(this, ye.prop, e, t, arguments.length > 1)
                }, removeProp: function (e) {
                    return e = ye.propFix[e] || e, this.each(function () {
                        try {
                            this[e] = void 0, delete this[e]
                        } catch (t) {}
                    })
                }
            }), ye.extend({
                prop: function (e, t, n) {
                    var r, o, i = e.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return 1 === i && ye.isXMLDoc(e) || (t = ye.propFix[t] || t, o = ye.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
                }, propHooks: {
                    tabIndex: {
                        get: function (e) {
                            var t = ye.find.attr(e, "tabindex");
                            return t ? parseInt(t, 10) : qt.test(e.nodeName) || $t.test(e.nodeName) && e.href ? 0 : -1
                        }
                    }
                }, propFix: {
                    "for": "htmlFor",
                    "class": "className"
                }
            }), ve.hrefNormalized || ye.each(["href", "src"], function (e, t) {
                ye.propHooks[t] = {
                    get: function (e) {
                        return e.getAttribute(t, 4)
                    }
                }
            }), ve.optSelected || (ye.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
                }
            }), ye.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                ye.propFix[this.toLowerCase()] = this
            }), ve.enctype || (ye.propFix.enctype = "encoding");
            var Ht = /[\t\r\n\f]/g;
            ye.fn.extend({
                addClass: function (e) {
                    var t, n, r, o, i, a, s, c = 0;
                    if (ye.isFunction(e)) return this.each(function (t) {
                        ye(this).addClass(e.call(this, t, Y(this)))
                    });
                    if ("string" == typeof e && e)
                        for (t = e.match(De) || []; n = this[c++];)
                            if (o = Y(n), r = 1 === n.nodeType && (" " + o + " ").replace(Ht, " ")) {
                                for (a = 0; i = t[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                s = ye.trim(r), o !== s && ye.attr(n, "class", s)
                            }
                    return this
                }, removeClass: function (e) {
                    var t, n, r, o, i, a, s, c = 0;
                    if (ye.isFunction(e)) return this.each(function (t) {
                        ye(this).removeClass(e.call(this, t, Y(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(De) || []; n = this[c++];)
                            if (o = Y(n), r = 1 === n.nodeType && (" " + o + " ").replace(Ht, " ")) {
                                for (a = 0; i = t[a++];)
                                    for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                                s = ye.trim(r), o !== s && ye.attr(n, "class", s)
                            }
                    return this
                }, toggleClass: function (e, t) {
                    var n = typeof e;
                    return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ye.isFunction(e) ? this.each(function (n) {
                        ye(this).toggleClass(e.call(this, n, Y(this), t), t)
                    }) : this.each(function () {
                        var t, r, o, i;
                        if ("string" === n)
                            for (r = 0, o = ye(this), i = e.match(De) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                        else(void 0 === e || "boolean" === n) && (t = Y(this), t && ye._data(this, "__className__", t), ye.attr(this, "class", t || e === !1 ? "" : ye._data(this, "__className__") || ""))
                    })
                }, hasClass: function (e) {
                    var t, n, r = 0;
                    for (t = " " + e + " "; n = this[r++];)
                        if (1 === n.nodeType && (" " + Y(n) + " ").replace(Ht, " ").indexOf(t) > -1) return !0;
                    return !1
                }
            }), ye.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
                ye.fn[t] = function (e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                }
            }), ye.fn.extend({
                hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            });
            var Pt = i.location,
                zt = ye.now(),
                Bt = /\?/,
                Wt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
            ye.parseJSON = function (e) {
                if (i.JSON && i.JSON.parse) return i.JSON.parse(e + "");
                var t, n = null,
                    r = ye.trim(e + "");
                return r && !ye.trim(r.replace(Wt, function (e, r, o, i) {
                    return t && r && (n = 0), 0 === n ? e : (t = o || r, n += !i - !o, "")
                })) ? Function("return " + r)() : ye.error("Invalid JSON: " + e)
            }, ye.parseXML = function (e) {
                var t, n;
                if (!e || "string" != typeof e) return null;
                try {
                    i.DOMParser ? (n = new i.DOMParser, t = n.parseFromString(e, "text/xml")) : (t = new i.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
                } catch (r) {
                    t = void 0
                }
                return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ye.error("Invalid XML: " + e), t
            };
            var Vt = /#.*$/,
                Yt = /([?&])_=[^&]*/,
                Xt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                Kt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Zt = /^(?:GET|HEAD)$/,
                Qt = /^\/\//,
                en = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                tn = {},
                nn = {},
                rn = "*/".concat("*"),
                on = Pt.href,
                an = en.exec(on.toLowerCase()) || [];
            ye.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: on,
                    type: "GET",
                    isLocal: Kt.test(an[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": rn,
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
                        "text json": ye.parseJSON,
                        "text xml": ye.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function (e, t) {
                    return t ? Z(Z(e, ye.ajaxSettings), t) : Z(ye.ajaxSettings, e)
                }, ajaxPrefilter: X(tn),
                ajaxTransport: X(nn),
                ajax: function (e, t) {
                    function n(e, t, n, r) {
                        var o, f, y, w, x, T = t;
                        2 !== b && (b = 2, c && i.clearTimeout(c), l = void 0, s = r || "", _.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (w = Q(d, _, n)), w = ee(d, w, _, o), o ? (d.ifModified && (x = _.getResponseHeader("Last-Modified"), x && (ye.lastModified[a] = x), x = _.getResponseHeader("etag"), x && (ye.etag[a] = x)), 204 === e || "HEAD" === d.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = w.state, f = w.data, y = w.error, o = !y)) : (y = T, (e || !T) && (T = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (t || T) + "", o ? g.resolveWith(p, [f, T, _]) : g.rejectWith(p, [_, T, y]), _.statusCode(m), m = void 0, u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [_, d, o ? f : y]), v.fireWith(p, [_, T]), u && (h.trigger("ajaxComplete", [_, d]), --ye.active || ye.event.trigger("ajaxStop")))
                    }
                    "object" == typeof e && (t = e, e = void 0), t = t || {};
                    var r, o, a, s, c, u, l, f, d = ye.ajaxSetup({}, t),
                        p = d.context || d,
                        h = d.context && (p.nodeType || p.jquery) ? ye(p) : ye.event,
                        g = ye.Deferred(),
                        v = ye.Callbacks("once memory"),
                        m = d.statusCode || {},
                        y = {},
                        w = {},
                        b = 0,
                        x = "canceled",
                        _ = {
                            readyState: 0,
                            getResponseHeader: function (e) {
                                var t;
                                if (2 === b) {
                                    if (!f)
                                        for (f = {}; t = Xt.exec(s);) f[t[1].toLowerCase()] = t[2];
                                    t = f[e.toLowerCase()]
                                }
                                return null == t ? null : t
                            }, getAllResponseHeaders: function () {
                                return 2 === b ? s : null
                            }, setRequestHeader: function (e, t) {
                                var n = e.toLowerCase();
                                return b || (e = w[n] = w[n] || e, y[e] = t), this
                            }, overrideMimeType: function (e) {
                                return b || (d.mimeType = e), this
                            }, statusCode: function (e) {
                                var t;
                                if (e)
                                    if (2 > b)
                                        for (t in e) m[t] = [m[t], e[t]];
                                    else _.always(e[_.status]);
                                return this
                            }, abort: function (e) {
                                var t = e || x;
                                return l && l.abort(t), n(0, t), this
                            }
                        };
                    if (g.promise(_).complete = v.add, _.success = _.done, _.error = _.fail, d.url = ((e || d.url || on) + "").replace(Vt, "").replace(Qt, an[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ye.trim(d.dataType || "*").toLowerCase().match(De) || [""], null == d.crossDomain && (r = en.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === an[1] && r[2] === an[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (an[3] || ("http:" === an[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ye.param(d.data, d.traditional)), K(tn, d, t, _), 2 === b) return _;
                    u = ye.event && d.global, u && 0 === ye.active++ && ye.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Zt.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (Bt.test(a) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Yt.test(a) ? a.replace(Yt, "$1_=" + zt++) : a + (Bt.test(a) ? "&" : "?") + "_=" + zt++)), d.ifModified && (ye.lastModified[a] && _.setRequestHeader("If-Modified-Since", ye.lastModified[a]), ye.etag[a] && _.setRequestHeader("If-None-Match", ye.etag[a])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && _.setRequestHeader("Content-Type", d.contentType), _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + rn + "; q=0.01" : "") : d.accepts["*"]);
                    for (o in d.headers) _.setRequestHeader(o, d.headers[o]);
                    if (d.beforeSend && (d.beforeSend.call(p, _, d) === !1 || 2 === b)) return _.abort();
                    x = "abort";
                    for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) _[o](d[o]);
                    if (l = K(nn, d, t, _)) {
                        if (_.readyState = 1, u && h.trigger("ajaxSend", [_, d]), 2 === b) return _;
                        d.async && d.timeout > 0 && (c = i.setTimeout(function () {
                            _.abort("timeout")
                        }, d.timeout));
                        try {
                            b = 1, l.send(y, n)
                        } catch (T) {
                            if (!(2 > b)) throw T;
                            n(-1, T)
                        }
                    } else n(-1, "No Transport");
                    return _
                }, getJSON: function (e, t, n) {
                    return ye.get(e, t, n, "json")
                }, getScript: function (e, t) {
                    return ye.get(e, void 0, t, "script")
                }
            }), ye.each(["get", "post"], function (e, t) {
                ye[t] = function (e, n, r, o) {
                    return ye.isFunction(n) && (o = o || r, r = n, n = void 0), ye.ajax(ye.extend({
                        url: e,
                        type: t,
                        dataType: o,
                        data: n,
                        success: r
                    }, ye.isPlainObject(e) && e))
                }
            }), ye._evalUrl = function (e) {
                return ye.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }, ye.fn.extend({
                wrapAll: function (e) {
                    if (ye.isFunction(e)) return this.each(function (t) {
                        ye(this).wrapAll(e.call(this, t))
                    });
                    if (this[0]) {
                        var t = ye(e, this[0].ownerDocument).eq(0).clone(!0);
                        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                            return e
                        }).append(this)
                    }
                    return this
                }, wrapInner: function (e) {
                    return ye.isFunction(e) ? this.each(function (t) {
                        ye(this).wrapInner(e.call(this, t))
                    }) : this.each(function () {
                        var t = ye(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                }, wrap: function (e) {
                    var t = ye.isFunction(e);
                    return this.each(function (n) {
                        ye(this).wrapAll(t ? e.call(this, n) : e)
                    })
                }, unwrap: function () {
                    return this.parent().each(function () {
                        ye.nodeName(this, "body") || ye(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), ye.expr.filters.hidden = function (e) {
                return ve.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : ne(e)
            }, ye.expr.filters.visible = function (e) {
                return !ye.expr.filters.hidden(e)
            };
            var sn = /%20/g,
                cn = /\[\]$/,
                un = /\r?\n/g,
                ln = /^(?:submit|button|image|reset|file)$/i,
                fn = /^(?:input|select|textarea|keygen)/i;
            ye.param = function (e, t) {
                var n, r = [],
                    o = function (e, t) {
                        t = ye.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                    };
                if (void 0 === t && (t = ye.ajaxSettings && ye.ajaxSettings.traditional), ye.isArray(e) || e.jquery && !ye.isPlainObject(e)) ye.each(e, function () {
                    o(this.name, this.value)
                });
                else
                    for (n in e) re(n, e[n], t, o);
                return r.join("&").replace(sn, "+")
            }, ye.fn.extend({
                serialize: function () {
                    return ye.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var e = ye.prop(this, "elements");
                        return e ? ye.makeArray(e) : this
                    }).filter(function () {
                        var e = this.type;
                        return this.name && !ye(this).is(":disabled") && fn.test(this.nodeName) && !ln.test(e) && (this.checked || !ze.test(e))
                    }).map(function (e, t) {
                        var n = ye(this).val();
                        return null == n ? null : ye.isArray(n) ? ye.map(n, function (e) {
                            return {
                                name: t.name,
                                value: e.replace(un, "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(un, "\r\n")
                        }
                    }).get()
                }
            }), ye.ajaxSettings.xhr = void 0 !== i.ActiveXObject ? function () {
                return this.isLocal ? ie() : ce.documentMode > 8 ? oe() : /^(get|post|head|put|delete|options)$/i.test(this.type) && oe() || ie()
            } : oe;
            var dn = 0,
                pn = {},
                hn = ye.ajaxSettings.xhr();
            i.attachEvent && i.attachEvent("onunload", function () {
                for (var e in pn) pn[e](void 0, !0)
            }), ve.cors = !!hn && "withCredentials" in hn, hn = ve.ajax = !!hn, hn && ye.ajaxTransport(function (e) {
                if (!e.crossDomain || ve.cors) {
                    var t;
                    return {
                        send: function (n, r) {
                            var o, a = e.xhr(),
                                s = ++dn;
                            if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                for (o in e.xhrFields) a[o] = e.xhrFields[o];
                            e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                            for (o in n) void 0 !== n[o] && a.setRequestHeader(o, n[o] + "");
                            a.send(e.hasContent && e.data || null), t = function (n, o) {
                                var i, c, u;
                                if (t && (o || 4 === a.readyState))
                                    if (delete pn[s], t = void 0, a.onreadystatechange = ye.noop, o) 4 !== a.readyState && a.abort();
                                    else {
                                        u = {}, i = a.status, "string" == typeof a.responseText && (u.text = a.responseText);
                                        try {
                                            c = a.statusText
                                        } catch (l) {
                                            c = ""
                                        }
                                        i || !e.isLocal || e.crossDomain ? 1223 === i && (i = 204) : i = u.text ? 200 : 404
                                    }
                                u && r(i, c, u, a.getAllResponseHeaders())
                            }, e.async ? 4 === a.readyState ? i.setTimeout(t) : a.onreadystatechange = pn[s] = t : t()
                        }, abort: function () {
                            t && t(void 0, !0)
                        }
                    }
                }
            }), ye.ajaxPrefilter(function (e) {
                e.crossDomain && (e.contents.script = !1)
            }), ye.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function (e) {
                        return ye.globalEval(e), e
                    }
                }
            }), ye.ajaxPrefilter("script", function (e) {
                void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
            }), ye.ajaxTransport("script", function (e) {
                if (e.crossDomain) {
                    var t, n = ce.head || ye("head")[0] || ce.documentElement;
                    return {
                        send: function (r, o) {
                            t = ce.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                                (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                            }, n.insertBefore(t, n.firstChild)
                        }, abort: function () {
                            t && t.onload(void 0, !0)
                        }
                    }
                }
            });
            var gn = [],
                vn = /(=)\?(?=&|$)|\?\?/;
            ye.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = gn.pop() || ye.expando + "_" + zt++;
                    return this[e] = !0, e
                }
            }), ye.ajaxPrefilter("json jsonp", function (e, t, n) {
                var r, o, a, s = e.jsonp !== !1 && (vn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && vn.test(e.data) && "data");
                return s || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = ye.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(vn, "$1" + r) : e.jsonp !== !1 && (e.url += (Bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                    return a || ye.error(r + " was not called"), a[0]
                }, e.dataTypes[0] = "json", o = i[r], i[r] = function () {
                    a = arguments
                }, n.always(function () {
                    void 0 === o ? ye(i).removeProp(r) : i[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, gn.push(r)), a && ye.isFunction(o) && o(a[0]), a = o = void 0
                }), "script") : void 0
            }), ve.createHTMLDocument = function () {
                if (!ce.implementation.createHTMLDocument) return !1;
                var e = ce.implementation.createHTMLDocument("");
                return e.body.innerHTML = "<form></form><form></form>", 2 === e.body.childNodes.length
            }(), ye.parseHTML = function (e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || (ve.createHTMLDocument ? ce.implementation.createHTMLDocument("") : ce);
                var r = je.exec(e),
                    o = !n && [];
                return r ? [t.createElement(r[1])] : (r = _([e], t, o), o && o.length && ye(o).remove(), ye.merge([], r.childNodes))
            };
            var mn = ye.fn.load;
            ye.fn.load = function (e, t, n) {
                if ("string" != typeof e && mn) return mn.apply(this, arguments);
                var r, o, i, a = this,
                    s = e.indexOf(" ");
                return s > -1 && (r = ye.trim(e.slice(s, e.length)), e = e.slice(0, s)), ye.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && ye.ajax({
                    url: e,
                    type: o || "GET",
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    i = arguments, a.html(r ? ye("<div>").append(ye.parseHTML(e)).find(r) : e)
                }).always(n && function (e, t) {
                        a.each(function () {
                            n.apply(a, i || [e.responseText, t, e])
                        })
                    }), this
            }, ye.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                ye.fn[t] = function (e) {
                    return this.on(t, e)
                }
            }), ye.expr.filters.animated = function (e) {
                return ye.grep(ye.timers, function (t) {
                    return e === t.elem
                }).length
            }, ye.offset = {
                setOffset: function (e, t, n) {
                    var r, o, i, a, s, c, u, l = ye.css(e, "position"),
                        f = ye(e),
                        d = {};
                    "static" === l && (e.style.position = "relative"), s = f.offset(), i = ye.css(e, "top"), c = ye.css(e, "left"), u = ("absolute" === l || "fixed" === l) && ye.inArray("auto", [i, c]) > -1, u ? (r = f.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(c) || 0), ye.isFunction(t) && (t = t.call(e, n, ye.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : f.css(d)
                }
            }, ye.fn.extend({
                offset: function (e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                        ye.offset.setOffset(this, e, t)
                    });
                    var t, n, r = {
                            top: 0,
                            left: 0
                        },
                        o = this[0],
                        i = o && o.ownerDocument;
                    return i ? (t = i.documentElement, ye.contains(t, o) ? ("undefined" != typeof o.getBoundingClientRect && (r = o.getBoundingClientRect()), n = ae(i), {
                        top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                        left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                    }) : r) : void 0
                }, position: function () {
                    if (this[0]) {
                        var e, t, n = {
                                top: 0,
                                left: 0
                            },
                            r = this[0];
                        return "fixed" === ye.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                            t = this.offset(), ye.nodeName(e[0], "html") || (n = e.offset()), n.top += ye.css(e[0], "borderTopWidth", !0) - e.scrollTop(), n.left += ye.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
                            top: t.top - n.top - ye.css(r, "marginTop", !0),
                            left: t.left - n.left - ye.css(r, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var e = this.offsetParent; e && !ye.nodeName(e, "html") && "static" === ye.css(e, "position");) e = e.offsetParent;
                        return e || yt
                    })
                }
            }), ye.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function (e, t) {
                var n = /Y/.test(t);
                ye.fn[e] = function (r) {
                    return Pe(this, function (e, r, o) {
                        var i = ae(e);
                        return void 0 === o ? i ? t in i ? i[t] : i.document.documentElement[r] : e[r] : void(i ? i.scrollTo(n ? ye(i).scrollLeft() : o, n ? o : ye(i).scrollTop()) : e[r] = o)
                    }, e, r, arguments.length, null)
                }
            }), ye.each(["top", "left"], function (e, t) {
                ye.cssHooks[t] = L(ve.pixelPosition, function (e, n) {
                    return n ? (n = bt(e, t), vt.test(n) ? ye(e).position()[t] + "px" : n) : void 0
                })
            }), ye.each({
                Height: "height",
                Width: "width"
            }, function (e, t) {
                ye.each({
                    padding: "inner" + e,
                    content: t,
                    "": "outer" + e
                }, function (n, r) {
                    ye.fn[r] = function (r, o) {
                        var i = arguments.length && (n || "boolean" != typeof r),
                            a = n || (r === !0 || o === !0 ? "margin" : "border");
                        return Pe(this, function (t, n, r) {
                            var o;
                            return ye.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? ye.css(t, n, a) : ye.style(t, n, r, a)
                        }, t, i ? r : void 0, i, null)
                    }
                })
            }), ye.fn.extend({
                bind: function (e, t, n) {
                    return this.on(e, null, t, n)
                }, unbind: function (e, t) {
                    return this.off(e, null, t)
                }, delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r)
                }, undelegate: function (e, t, n) {
                    return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                }
            }), ye.fn.size = function () {
                return this.length
            }, ye.fn.andSelf = ye.fn.addBack, n(10) && (r = [], o = function () {
                return ye
            }.apply(t, r), !(void 0 !== o && (e.exports = o)));
            var yn = i.jQuery,
                wn = i.$;
            return ye.noConflict = function (e) {
                return i.$ === ye && (i.$ = wn), e && i.jQuery === ye && (i.jQuery = yn), ye
            }, a || (i.jQuery = i.$ = ye), ye
        })
    }, 7: function (e, t, n) {
        function r() {
            var e = "widget" + ++u;
            return c[e] = {
                defer: a.Deferred()
            }, e
        }

        function o(e) {
            a(function () {
                a.each(e.elements, function (t, n) {
                    var o = a(n);
                    if (!o[0]) return void console.warn("WIDGET:The element has not found.");
                    var i = o.data(),
                        s = {},
                        u = o.data("widget-id");
                    u || (u = r(), o.data("widget-id", u)), i.$el = o, o.find("[data-role]").each(function () {
                        var e = a(this).data("role");
                        s[e] || (s[e] = []), s[e].push(this)
                    }), a.each(s, function (e, t) {
                        i["$" + e] = a(t)
                    });
                    var l = new e(i);
                    c[u].instance = l, c[u].defer.resolve(l)
                })
            })
        }

        function i(e, t, n) {
            e = a(e), a.each(t, function (t, r) {
                var o = t.indexOf(" "),
                    i = o === -1 ? t : t.substr(0, o),
                    s = o === -1 ? "" : t.substr(o, t.length - 1);
                r && (r = "function" == typeof r ? a.proxy(r, n) : a.proxy(n[r], n), s ? e.on(i, s, r) : e.on(i, r))
            })
        }
        var a = n(3),
            s = t,
            c = {},
            u = 0;
        s.template = function (e, t) {
            var n = new Function("obj", "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj){__p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("__p.push('").split("\r").join("\\'") + "');}return __p.join('');");
            return t ? n(t) : n
        }, s.ready = function (e, t) {
            "string" == typeof e && (e = [e]);
            var n = [].reduce.call(e, function (e, t) {
                var n = a(t),
                    o = null;
                return 1 === n.size() ? (n.data("widget-id") || n.data("widget-id", r()), o = c[n.data("widget-id")].defer.promise()) : n.size() >= 1 ? (o = a.Deferred(), s.ready(n, function () {
                    o.resolve([].slice.call(arguments))
                })) : (o = a.Deferred(), o.reject(null)), e.push(o), e
            }, []);
            a.when.apply(a, n).done(function () {
                t.apply(window, arguments)
            })
        }, s.initWidgets = function (e) {
            a.each(e, function (e, t) {
                s.initWidget(t)
            })
        }, s.initWidget = function (e) {
            o(e)
        }, s.define = function (e) {
            function t(t) {
                var n = a.extend({}, e);
                return a(t.$el).length && n.events && i(t.$el, n.events, n), n.init(t), n
            }
            return e = e || {}, e.events = e.events || {}, e.init = e.init || function (e) {
                    this.config = e
                }, t.elements = [], t.setEl = function (e) {
                if (!e) throw new Error("type Error");
                return a.isArray(e) ? t.elements = t.elements.concat(e) : t.elements.push(e), t.elements
            }, t.extend = function (t) {
                return t = a.extend({}, e, t), t.super_ = a.extend({}, e), t.events = a.extend({}, e.events, t.events), s.define(t)
            }, t.init = function (e) {
                this.setEl(e), o(this)
            }, t.define = a.extend({}, e), t
        }
    }, 10: function (e, t) {
        (function (t) {
            e.exports = t
        }).call(t, {})
    }, 12: function (e, t) {
        e.exports = function (e) {
            return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
        }
    }, 48: function (e, t, n) {
        "use strict";

        function r(e) {
            var t = u.exec(e);
            return {
                protocol: t[1] ? t[1].toLowerCase() : "",
                slashes: !!t[2],
                rest: t[3] ? t[3] : ""
            }
        }

        function o(e, t, n) {
            if (!(this instanceof o)) return new o(e, t, n);
            var u, f, d, p, h = c.test(e),
                g = typeof t,
                v = this,
                m = 0;
            "object" !== g && "string" !== g && (n = t, t = null), n && "function" != typeof n && (n = s.parse), t = a(t);
            var y = r(e);
            for (v.protocol = y.protocol || t.protocol || "", v.slashes = y.slashes || t.slashes, e = y.rest; m < l.length; m++) f = l[m], u = f[0], p = f[1], u !== u ? v[p] = e : "string" == typeof u ? ~(d = e.indexOf(u)) && ("number" == typeof f[2] ? (v[p] = e.slice(0, d), e = e.slice(d + f[2])) : (v[p] = e.slice(d), e = e.slice(0, d))) : (d = u.exec(e)) && (v[p] = d[1], e = e.slice(0, e.length - d[0].length)), v[p] = v[p] || (f[3] || "port" === p && h ? t[p] || "" : ""), f[4] && (v[p] = v[p].toLowerCase());
            n && (v.query = n(v.query)), i(v.port, v.protocol) || (v.host = v.hostname, v.port = ""), v.username = v.password = "", v.auth && (f = v.auth.split(":"), v.username = f[0] || "", v.password = f[1] || ""), v.href = v.toString()
        }
        var i = n(78),
            a = n(81),
            s = n(77),
            c = /^\/(?!\/)/,
            u = /^([a-z0-9.+-]+:)?(\/\/)?(.*)$/i,
            l = [
                ["#", "hash"],
                ["?", "query"],
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/\:(\d+)$/, "port"],
                [NaN, "hostname", void 0, 1, 1]
            ];
        o.prototype.set = function (e, t, n) {
            var r = this;
            return "query" === e ? ("string" == typeof t && t.length && (t = (n || s.parse)(t)), r[e] = t) : "port" === e ? (r[e] = t, i(t, r.protocol) ? t && (r.host = r.hostname + ":" + t) : (r.host = r.hostname, r[e] = "")) : "hostname" === e ? (r[e] = t, r.port && (t += ":" + r.port), r.host = t) : "host" === e ? (r[e] = t, /\:\d+/.test(t) && (t = t.split(":"), r.hostname = t[0], r.port = t[1])) : "protocol" === e ? (r.protocol = t, r.slashes = !n) : r[e] = t, r.href = r.toString(), r
        }, o.prototype.toString = function (e) {
            e && "function" == typeof e || (e = s.stringify);
            var t, n = this,
                r = n.protocol;
            r && ":" !== r.charAt(r.length - 1) && (r += ":");
            var o = r + (n.slashes ? "//" : "");
            return n.username && (o += n.username, n.password && (o += ":" + n.password), o += "@"), o += n.hostname, n.port && (o += ":" + n.port), o += n.pathname, t = "object" == typeof n.query ? e(n.query) : n.query, t && (o += "?" !== t.charAt(0) ? "?" + t : t), n.hash && (o += n.hash), o
        }, o.qs = s, o.location = a, e.exports = o
    }, 55: function (module, exports, __webpack_require__) {
        function postByImg(e, t) {
            var n = new Image;
            n.onload = n.onerror = function () {
                n.onload = null, n.onerror = null, t && t()
            }, firstLogSent || (firstLogSent = !0, getUuid() || LOG_NO_UUID ? LOG_NO_UUID && (getUuid() ? (GJ.LogTrackerGz.trackEvent("/LOG_NO_UUID/ev2/" + LOG_NO_UUID), GJ.removeCookie("LOG_NO_UUID")) : GJ.LogTrackerGz.trackEvent("/LOG_NO_UUID/ev1/" + LOG_NO_UUID)) : GJ.setCookie("LOG_NO_UUID", getSessionId() + "_" + GJ.rand(0, 999999), 86400)), n.src = e
        }

        function postImgTo58() {
            var e = window.site_name || "ganji",
                t = window._trackURL || "NA",
                n = window.gj58 || "NA",
                r = encodeURIComponent(document.referrer);
            if ("NA" !== n) {
                var o = n.split("&"),
                    i = [],
                    a = t.indexOf("{");
                for (var s in o) {
                    var c = o[s].indexOf("=");
                    c !== -1 && i.push("'" + o[s].substring(0, c) + "':'" + o[s].substring(c + 1) + "'")
                }
                i.join(","), t = "NA" !== t && a !== -1 ? t.substring(0, a + 1) + i + "," + t.substring(a + 1) : "{" + i + "}"
            }(new Image).src = document.location.protocol + "//tracklog.58.com/ganji_pc/empty.js.gif?site_name=" + e + "&tag=pvstatall&referrer=" + r + "&trackURL=" + t + "&rand_id=" + Math.random()
        }

        function Code(e) {
            this.code = e.code || "", this.params = e.params || {}, this.showId = e.showId || "", this.actionType = e.actionType || L.ACTION_TYPE_CLICK, this.redirectUrl = e.redirectUrl || "", this.business = e.business, this.bdShow = e.bdShow
        }
        var URL = __webpack_require__(48);
        if (!GJ.LogTrackerGz || !GJ.LogTrackerGz.trackPageView) {
            var reqid = GJ.config.reqid || "-",
                gjadOrderCount = 0,
                isLanding = !1,
                win = window,
                doc = document,
                nav = win.navigator,
                ua = nav && nav.userAgent,
                loc = win.location,
                guid = function () {
                    var e = new Date,
                        t = e.getTime(),
                        n = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0);
                    return 1e3 * (t - n.getTime()) + GJ.rand(1e3, 9999)
                },
                counter = 0,
                pageViewTracked = !1,
                speedEventTracked = !1,
                speedEventBinded = !1,
                viewEvents = {},
                pageTypes = {
                    home: 1,
                    index: 1,
                    list: 1,
                    detail: 1,
                    order: 1,
                    query: 1,
                    other: 1
                },
                _encodeURI = function (e, t) {
                    var n = encodeURIComponent;
                    return n instanceof Function ? t ? encodeURI(e) : n(e) : escape(e)
                },
                getCookie = function (e) {
                    try {
                        var t = GJ.getCookie("_gl_tracker"),
                            n = t ? GJ.jsonDecode(t) : {};
                        return e ? n[e] || null : n
                    } catch (r) {
                        return null
                    }
                },
                setCookie = function (e, t) {
                    var n = getCookie();
                    n[e] = t, GJ.setCookie("_gl_tracker", GJ.jsonEncode(n), 0)
                },
                initData = {
                    flashPlayerVersion: function () {
                        var e = [0, 0, 0],
                            t = null;
                        if ("undefined" != typeof nav.plugins && "object" == typeof nav.plugins["Shockwave Flash"]) t = nav.plugins["Shockwave Flash"].description, !t || "undefined" != typeof nav.mimeTypes && nav.mimeTypes["application/x-shockwave-flash"] && !nav.mimeTypes["application/x-shockwave-flash"].enabledPlugin || (t = t.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), e[0] = parseInt(t.replace(/^(.*)\..*$/, "$1"), 10), e[1] = parseInt(t.replace(/^.*\.(.*)\s.*$/, "$1"), 10), e[2] = /[a-zA-Z]/.test(t) ? parseInt(t.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                        else if ("undefined" != typeof window.ActiveXObject) try {
                            var n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                            n && (t = n.GetVariable("$version"), t && (t = t.split(" ")[1].split(","), e = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)]))
                        } catch (r) {}
                        return e.join(".")
                    }(),
                    uaFormat: function () {
                        var e = ["os:" + (GJ.ua.os || "-")],
                            t = /Windows NT ([\d\.]*)/i.exec(navigator.userAgent) || /Mac OS X ([\d\.]*)/i.exec(navigator.userAgent) || /OS ([\d_]*)/i.exec(navigator.userAgent);
                        return t = t ? t[1] : "-", e.push("ov:" + (t || "-")), GJ.ua.ie ? (e.push("bn:ie"), e.push("bv:" + GJ.ua.ie)) : GJ.ua.webkit ? (e.push("bn:webkit"), e.push("bv:" + GJ.ua.webkit)) : GJ.ua.gecko ? (e.push("bn:gecko"), e.push("bv:" + GJ.ua.gecko)) : (e.push("bn:-"), e.push("bv:-")), e.push("dv:" + (window.navigator.platform || "-")), e.push("rl:" + window.screen.width + "," + window.screen.height), e.join("|")
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
                        var e = "guazi.com";
                        return e.toLowerCase()
                    }()
                },
                uuid = "",
                getUuid = function () {
                    return uuid || (uuid = GJ.getCookie(L.uuidName)), uuid
                },
                powResult = {
                    53: "9007199254740992",
                    54: "18014398509481984",
                    55: "36028797018963968",
                    56: "72057594037927936",
                    57: "144115188075855872",
                    58: "288230376151711744",
                    59: "576460752303423488",
                    60: "1152921504606846976",
                    61: "2305843009213693952",
                    62: "4611686018427387904",
                    63: "9223372036854775808",
                    64: "18446744073709551616"
                },
                getUserID = function () {
                    var e = GJ.jsonDecode(GJ.getCookie("GanjiUserInfo")) || {
                            user_id: -1
                        };
                    if (e.user_id === -1) return "-7449356661961093996";
                    var t = "0110011101100001011011100110101001101001011000010111001101101011",
                        n = parseInt(e.user_id, 10).toString(2);
                    return reduceRight.call(xor(t, n).split(""), function (e, t, n, r) {
                        return parseInt(t) && (e = plus(e, pow2(r.length - n - 1))), e
                    }, "0")
                },
                xor = function (e, t) {
                    if (t.length > e.length) {
                        var n = t;
                        t = e, e = n
                    }
                    e = e.split(""), t = t.split("");
                    for (var r, o = t.pop(), i = []; void 0 !== o;) r = e.pop(), i.unshift(o ^ r), o = t.pop();
                    return e.concat(i).join("")
                },
                pow2 = function (e) {
                    return e <= 53 ? Math.pow(2, e).toString() : powResult[e.toString()]
                },
                plus = function (e, t) {
                    if (e.length < 14 && t.length < 14) return (parseInt(e) + parseInt(t)).toString();
                    if (t.length > e.length) {
                        var n = t;
                        t = e, e = n
                    }
                    e = e.split(""), t = t.split("");
                    for (var r, o, i = (t.length, []), a = 0, s = t.pop(); void 0 !== s;) {
                        if (r = e.pop(), void 0 === r) {
                            i.unshift(1);
                            break
                        }
                        o = parseInt(r) + parseInt(s) + a, i.unshift(o % 10), a = o >= 10 ? 1 : 0, t.length ? s = t.pop() : a ? (s = a, a = 0) : s = void 0
                    }
                    return e.concat(i).join("")
                },
                reduceRight = function (e) {
                    if ("function" != typeof e) throw new TypeError(e + " is not an function");
                    var t, n = this.length >>> 0,
                        r = n - 1;
                    if (arguments.length > 1) t = arguments[1];
                    else
                        for (;;) {
                            if (r in this) {
                                t = this[r--];
                                break
                            }
                            if (--r < 0) throw new TypeError("reduce of empty array with on initial value")
                        }
                    for (; r >= 0; r--) r in this && (t = e.call(null, t, this[r], r, this));
                    return t
                },
                sessionId = "",
                getSessionId = function () {
                    return sessionId || (sessionId = getCookie("sid"), sessionId || (sessionId = guid(), setCookie("sid", sessionId), isLanding = !0)), sessionId
                },
                getOrganics = function () {
                    return [
                        ["baidu", "wd"],
                        ["baidu", "word"],
                        ["images.google", "q"],
                        ["google", "q"],
                        ["yahoo", "p"],
                        ["msn", "q"],
                        ["live", "q"],
                        ["soso", "w"],
                        ["sogou", "query"],
                        ["bing", "q"],
                        ["so.360.cn", "q"],
                        ["so.com", "q"],
                        ["haosou.com", "q"],
                        ["haoso.com", "q"]
                    ]
                },
                searchEngineHostMap = {
                    "baidu.com": "baidu",
                    "google.com": "google",
                    "sogou.com": "sogou",
                    "soso.com": "soso",
                    "so.com": "360",
                    "haoso.com": "360",
                    "haosou.com": "360",
                    "youdao.com": "youdao",
                    "bing.com": "bing"
                },
                addIgnoredKeyword = function (e) {
                    L.ignoredKeywords[e + " "] = 1
                },
                getOrganicInfo = function () {
                    var e, t, n, r, o, i, a, s = document.referrer && !/(ganji|mayi|guazi).(com|cn)/i.test(GJ.parseUrl(document.referrer).host) ? document.referrer : null,
                        c = GJ.parseUrl(document.referrer),
                        u = GJ.parseUrl(window.location.href),
                        l = getOrganics(),
                        f = /[\?&]\w+=utf/i.test(document.referrer);
                    return s ? (e = u.params.ca_source || c.host, t = u.params.ca_name || "", n = u.params.ca_kw || "", r = u.params.ca_id || "", i = u.params.ca_n || "", o = u.params.ca_s, a = u.params.ca_i, o || (GJ.each(searchEngineHostMap, function (e, t) {
                        if (new RegExp("^([a-zA-Z\\d]+\\.){0,}" + t, "i").test(c.host)) return o = "seo_" + e, i || (i = "-"), !1
                    }), o || (o = "other_" + c.host)), n || GJ.each(l, function (e) {
                        if (new RegExp("^([a-zA-Z\\d]+\\.){0,}" + e[0], "i").test(c.host)) {
                            var r = c.params[e[1]];
                            if (r) return n = r + "|" + (f ? "utf8" : ""), t || (t = "se"), !1
                        }
                    })) : (e = u.params.ca_source || getCookie("ca_source"), t = u.params.ca_name || getCookie("ca_name"), n = u.params.ca_kw || getCookie("ca_kw"), r = u.params.ca_id || getCookie("ca_id"), i = u.params.ca_n || getCookie("ca_n"), a = u.params.ca_i || getCookie("ca_i"), o = u.params.ca_s || getCookie("ca_s"), o && "-" !== o || (o = "self")), e = e || "-", t = t || "-", n = n || "-", r = r || "-", o = o || "-", i = i || "-", a = a || "-", setCookie("ca_source", e), setCookie("ca_name", t), setCookie("ca_kw", n), setCookie("ca_id", r), setCookie("ca_s", o), setCookie("ca_n", i), setCookie("ca_i", a), [e, t, n, r, o, i, a]
                },
                getInnerFromId = function () {
                    var e = getCookie("ifid");
                    if (document.referrer) {
                        var t = GJ.parseUrl(window.location.href),
                            n = t.params[L.innerFromIdName] || "";
                        n && n != e && (e = n, setCookie("ifid", e))
                    }
                    return e || ""
                },
                submitHandler = function () {
                    var e = $(this).data("gl_EO_click_gz");
                    return e.trackEvent(), !0
                },
                clickHandler = function (e) {
                    var t = $(this).data("gl_EO_click_gz");
                    return t.trackEvent(null, e), !t.redirectUrl || (GJ.later(function () {
                        window.location.href = t.redirectUrl
                    }, 300), !1)
                },
                mouseoverHandler = function () {
                    if (!$(this).data("gl_over_tracked")) {
                        var e = $(this).data("gl_EO_mouseover");
                        e.trackEvent(), $(this).data("gl_over_tracked", 1)
                    }
                    return !0
                },
                bindTrackEvent = function (e, t) {
                    var n = e[0].tagName.toLowerCase();
                    if ("a" == n && "_self" == e[0].target.toLowerCase() && (t.redirectUrl = e.attr("href")), t.actionType == L.ACTION_TYPE_CLICK) {
                        var r = new E(t);
                        e.data("gl_EO_click_gz", r), "form" == n ? (e.unbind("submit", submitHandler), e.bind("submit", submitHandler)) : (e.unbind("click", clickHandler), e.bind("click", clickHandler))
                    } else if (t.actionType == L.ACTION_TYPE_HOVER) {
                        var r = new E(t);
                        e.data("gl_EO_mouseover", r), e.unbind("mouseover", mouseoverHandler), e.bind("mouseover", mouseoverHandler)
                    }
                },
                firstLogSent = !1,
                LOG_NO_UUID = GJ.getCookie("LOG_NO_UUID"),
                E = Code;
            Code.prototype = {
                trackEvent: function (e, t) {
                    var n, r, o;
                    if (n = getOrganicInfo(), r = this.business ? "b.gif" : this.bdShow ? "d.gif" : "e.gif", this.params && "direction" === this.params.show_type) try {
                        GJ.webim.cometMgr.setNeedComet(1)
                    } catch (i) {}
                    var a, s;
                    t && t.clientY && (a = Math.floor(t.clientX - document.body.clientWidth / 2), s = t.clientY);
                    var c = this.getActionInfo();
                    c ? s && (c += "@clickx=" + a + "@clicky=" + s + "@clientw=" + document.body.clientWidth) : c = "-";
                    var u = "gjalog=";
                    this.isUsingGe() && (u = "ge="), u += c + "@reqid=" + reqid, o = [L.server + "/" + r + "?gjch=" + (L.getGjch() || "-"), "gc=" + (L.gjchNew || "-"), "uuid=" + (getUuid() || "-"), "gjuser=" + getUserID(), "sid=" + getSessionId(), "ca_source=" + (n[0] || "-"), "ca_name=" + (n[1] || "-"), "ca_kw=" + (n[2] || "-"), "ca_id=" + (n[3] || "-"), "ca_s=" + (n[4] || "-"), "ca_n=" + (n[5] || "-"), "ca_i=" + (n[6] || "-"), "ifid=" + (getInnerFromId() || "-"), "r=" + counter++], GJ.each(u.replace("gjalog=", "").split("@"), function (e) {
                        var t = e.replace("#", "@").split("=");
                        o.push(t[0] + "=" + t[1])
                    }), L.gjchver && o.push("gjchver=" + L.gjchver), postByImg(o.join("&"), e)
                }, getActionInfo: function () {
                    var e = this,
                        t = [];
                    if (e.code && e.actionType && e.isUsingGe()) {
                        var n = e.code.slice(0, e.code.length - 8);
                        n += "00000", n += e.actionType === L.ACTION_TYPE_HOVER ? "1" : "0", n += e.actionType === L.ACTION_TYPE_CLICK ? "1" : "0", n += e.actionType === L.ACTION_TYPE_SHOW ? "1" : "0", e.code = n
                    }
                    return e.code && t.push(e.code), GJ.each(e.params, function (e, n) {
                        t.push(n + "=" + e)
                    }), e.actionType && t.push("atype=" + e.actionType), e.showId && t.push("showid=" + e.showId), t.join(L.paramSeparator)
                }, isUsingGe: function () {
                    return !(/\D+/.test(this.code) || this.business || this.bdShow)
                }
            }, Code.parse = function (e) {
                e = $.trim(e);
                var t = e.replace("&", L.paramSeparator).split(L.paramSeparator),
                    n = {
                        code: t.shift(),
                        params: {},
                        actionTypes: "",
                        showId: "",
                        business: !1,
                        bdShow: !1
                    };
                if (GJ.each(t, function (e) {
                        e = e.split("="), e[0] && ("atype" === e[0] ? n.actionTypes = e[1].split("|") : "showid" === e[0] ? n.showId = e[1] : "business" === e[0] ? e[1] && "false" !== e[1] && (n.business = !0) : "bd_show" === e[0] ? e[1] && "false" !== e[1] && (n.bdShow = !0) : n.params[e[0]] = e[1])
                    }), !/\D+/.test(n.code) && !n.business && !n.bdShow) {
                    n.actionTypes || (n.actionTypes = []);
                    var r = n.code.toString(),
                        o = r.slice(r.length - 3, r.length);
                    "1" === o.charAt(0) && n.actionTypes.push(L.ACTION_TYPE_HOVER), "1" === o.charAt(1) && n.actionTypes.push(L.ACTION_TYPE_CLICK), "1" === o.charAt(2) && n.actionTypes.push(L.ACTION_TYPE_SHOW)
                }
                return n
            }, Code.parseCode = Code.parse;
            var L = {
                ACTION_TYPE_SHOW: "show",
                ACTION_TYPE_CLICK: "click",
                ACTION_TYPE_HOVER: "hover",
                gjch: "",
                getGjch: function () {
                    var e = L.gjch.replace("&", L.paramSeparator).replace("@360app=1", "");
                    return e || (e = $("body").data("gjch") || "-", "-" === e && window.PAGE_CONFIG && window.PAGE_CONFIG.logTracker && (e = window.PAGE_CONFIG.logTracker.gjch), L.gjch = e), e
                }, gjchver: "A",
                server: "http://analytics.guazi.com",
                domain: initData.domain,
                uuidName: "ganji_uuid",
                innerFromIdName: "ifid",
                actionAttrName: "gjalog",
                paramSeparator: "@",
                ignoredKeywords: {
                    "ganji ": 1,
                    "赶集 ": 1,
                    "赶集网 ": 1
                },
                addIgnoredKeyword: addIgnoredKeyword,
                bindAllTrackEvent: function () {
                    var newViewEvents = [],
                        ads = [];
                    if ($("[" + L.actionAttrName + "]").each(function () {
                            var e = $(this),
                                t = e.attr(L.actionAttrName),
                                n = E.parseCode(t);
                            GJ.each(n.actionTypes, function (r) {
                                var o = GJ.mix({}, n);
                                if (o.actionType = r, delete o.actionTypes, r != L.ACTION_TYPE_SHOW || viewEvents[t]) bindTrackEvent(e, o);
                                else if (viewEvents[t] = 1, o.params.gjaddata) newViewEvents.push(o), ads.push([e, o.params.gjaddata]);
                                else {
                                    var i = new E(o);
                                    i.trackEvent()
                                }
                            })
                        }), newViewEvents.length > 0) {
                        var _data = {},
                            _gjalog = "/site_tuiguang/trace@atype=show@business=true&gjaddata=";
                        newViewEvents = GJ.map(newViewEvents, function (val) {
                            return eval("(" + val.params.gjaddata.replace(/\{(\d*\:)([^\{\}]*?)\}/g, '{$1"$2"}') + ")")
                        });
                        var _data = $.extend.apply($, [!0, {}].concat(newViewEvents));
                        _data[10] && (L.trackEvent(_gjalog + GJ.jsonEncode({
                                10: _data[10]
                            }).replace(/[\'\" ]+/g, "")), delete _data[10]), _gjalog += GJ.jsonEncode(_data).replace(/[\'\" ]+/g, ""), L.trackEvent(_gjalog)
                    }
                    ads.sort(function (e, t) {
                        return e[0].offset().top < t[0].offset().top ? -1 : 1
                    });
                    var adOrder = $.map(ads, function (e) {
                        var t = e[1];
                        return t = t.replace(/(\d*):\{(\d*):\{\d*:(.*?)\}\}/g, "$1|$2|$3").replace("{", "").replace("}", "").replace(",", "+")
                    });
                    adOrder.length && ! function () {
                        for (var e; adOrder.length;) e = adOrder.splice(0, 60), L.trackEvent("/site_tuiguang/trace@atype=show@business=true&gjadorder=" + e.join(",") + "@seg=" + gjadOrderCount++)
                    }()
                }, trackPageView: function (e) {
                    var t = new URL(document.referrer.toLocaleLowerCase()),
                        n = (t.hostname, window.location.search.indexOf("landing") > 0 ? 1 : 0);
                    if (n || (n = t.hostname.indexOf("guazi.com") > 0 ? 0 : 1), pageViewTracked) return !1;
                    pageViewTracked = !0, e && (L.gjch = e);
                    var r = getOrganicInfo(),
                        o = [L.server + "/p.gif?gjch=" + (L.getGjch() || "-"), "gc=" + (L.gjchNew || "-"), "uuid=" + (getUuid() || "-"), "reqid=" + reqid, "gjuser=" + getUserID(), "sid=" + getSessionId(), "ca_source=" + (r[0] || "-"), "ca_name=" + (r[1] || "-"), "ca_kw=" + (r[2] || "-"), "ca_id=" + (r[3] || "-"), "ca_s=" + (r[4] || "-"), "ca_n=" + (r[5] || "-"), "ca_i=" + (r[6] || "-"), "ifid=" + (getInnerFromId() || "-"), "refer=" + (t ? _encodeURI(t) : "-"), "ua=" + initData.uaFormat, "landing=" + n];
                    postByImg(o.join("&"))
                }, trackEvent: function (e, t) {
                    var n = E.parseCode(e);
                    n.actionType = n.actionTypes[0] || L.ACTION_TYPE_SHOW, delete n.actionTypes;
                    var r = new E(n);
                    r.trackEvent(t)
                }, bindSpeedEvent: function () {
                    return !speedEventBinded && (speedEventBinded = !0, void $("body").click(function (e) {
                            var t = $(e.target);
                            if ("A" != t[0].tagName && (t = t.parent()), !t[0] || "A" != t[0].tagName) return !0;
                            var n = t.attr("href") || "";
                            if (!n || /^(#|javascript:)/i.test(n)) return !0;
                            var r = new Date,
                                o = GJ.jsonEncode([n, r.getTime()]);
                            return GJ.setCookie("_gl_speed", o, 60), !0
                        }))
                }, trackSpeedEvent: function (e) {
                    if (speedEventTracked) return !1;
                    speedEventTracked = !0, e && (L.gjch = e);
                    var t, n = GJ.getCookie("_gl_speed") || "[]",
                        n = GJ.jsonDecode(n),
                        r = window.location.href,
                        o = r.split(n[0]),
                        i = window.SPEED_RENDER_BEGIN || 0,
                        a = window.SPEED_RENDER_END || 0,
                        s = GJ.getCookie("citydomain");
                    if (t = GJ.rand(1, 100), !n[0] || 2 != o.length || "" != o[1]) return !1;
                    if (GJ.removeCookie("_gl_speed"), 1 != t || n[1] < 1 || i < n[1] || a < i) return !1;
                    var c = function () {
                            return (new Date).getTime()
                        },
                        u = GJ.rand(0, 1),
                        l = {
                            cdn: ["http://image101.ganjistatic1.com/logo.jpg", "http://image.ganjistatic1.com/logo.jpg"][u]
                        },
                        f = {},
                        d = $.Deferred(),
                        p = 0;
                    s && (l.ms = "http://" + s + ".ganji.com/empty.gif?" + GJ.rand(1, 99999999)), $.each(l, function () {
                        p++
                    }), $.each(l, function (e, t) {
                        var n = +c(),
                            r = $.Deferred(),
                            o = setTimeout(function () {
                                r.reject()
                            }, 1e4);
                        r.fail(function () {
                            f[e] = -1
                        }).always(function () {
                            clearTimeout(o), p--, p || d.resolve()
                        }), $(new Image).error(function () {
                            r.reject()
                        }).load(function () {
                            f[e] = c() - n, r.resolve()
                        }).attr("src", t)
                    }), $(window).load(function () {
                        var e = c();
                        d.done(function () {
                            var t = [n[1] || 0, i, a, e, f.cdn || 0, 0, f.ms || 0],
                                r = [L.server + "/s.gif?gjch=" + (L.getGjch() || "-"), "times=" + t.join(","), "cdn=" + (u ? "" : 101)];
                            postByImg(r.join("&"))
                        })
                    })
                }, getPvCount: function (e) {
                    var t = GJ.mix({
                            textFormat: "&nbsp;&nbsp;该信息被浏览 %s 次 ",
                            containerId: "",
                            serverUrl: "http://analytics.guazi.com/rta/"
                        }, e, !0),
                        n = _encodeURI(window.location.href),
                        r = 1,
                        o = $("#" + t.containerId);
                    if (o.size() > 0) {
                        var i = t.serverUrl + "?gjch=" + L.getGjch() + "&refer=" + n + "&callback=?";
                        $.getJSON(i).done(function (e) {
                            e && e.value && (r = e.value)
                        }).always(function () {
                            o.html(t.textFormat.replace("%s", r))
                        })
                    }
                }, trackMouseEvent: function (e) {
                    e = e || {};
                    var t, n = [],
                        r = $(document),
                        o = 0,
                        i = 0,
                        a = function (e) {
                            n.push([e.timeStamp, 2, e.pageX, e.pageY])
                        },
                        s = function (e) {
                            e.timeStamp - o > 100 && (o = e.timeStamp, n.push([e.timeStamp, 1, e.pageX, e.pageY])), i >= 5 && r.unbind("mousemove", s).unbind("click", a)
                        },
                        c = function () {
                            if (i >= 10) return void t.cancel();
                            i++;
                            var e = [],
                                r = "/mousevent",
                                o = GJ.getViewPort();
                            n.length > 0 && (GJ.each(n, function (t) {
                                e.push(t.join(","))
                            }), n = []), r += "@view=" + o.left + "," + o.top + "," + o.width + "," + o.height + "@data=" + e.join("|") + "@atype=hover", L.trackEvent(r)
                        };
                    t = GJ.later(c, 3e3, !0), r.bind("mousemove", s).bind("click", a), GJ.addEvent(window, "unload", function () {
                        t.cancel(), c(), r.unbind("mousemove", s).unbind("click", a)
                    })
                }
            };
            GJ.LogTrackerGz = L, GJ.LogTrackerGz.innerFromIdName = "ifid", GJ.LogTrackerGz.domain = "ganji.com"
        }
    }, 77: function (e, t) {
        "use strict";

        function n(e) {
            for (var t, n = /([^=?&]+)=([^&]*)/g, r = {}; t = n.exec(e); r[decodeURIComponent(t[1])] = decodeURIComponent(t[2]));
            return r
        }

        function r(e, t) {
            t = t || "";
            var n = [];
            "string" != typeof t && (t = "?");
            for (var r in e) o.call(e, r) && n.push(encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
            return n.length ? t + n.join("&") : ""
        }
        var o = Object.prototype.hasOwnProperty;
        t.stringify = r, t.parse = n
    }, 78: function (e, t) {
        "use strict";
        e.exports = function (e, t) {
            if (t = t.split(":")[0], e = +e, !e) return !1;
            switch (t) {
                case "http":
                case "ws":
                    return 80 !== e;
                case "https":
                case "wss":
                    return 443 !== e;
                case "ftp":
                    return 21 !== e;
                case "gopher":
                    return 70 !== e;
                case "file":
                    return !1
            }
            return 0 !== e
        }
    }, 81: function (e, t, n) {
        (function (t) {
            "use strict";
            var r, o = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                i = {
                    hash: 1,
                    query: 1
                };
            e.exports = function (e) {
                e = e || t.location || {}, r = r || n(48);
                var a, s = {},
                    c = typeof e;
                if ("blob:" === e.protocol) s = new r(unescape(e.pathname), {});
                else if ("string" === c) {
                    s = new r(e, {});
                    for (a in i) delete s[a]
                } else if ("object" === c) {
                    for (a in e) a in i || (s[a] = e[a]);
                    void 0 === s.slashes && (s.slashes = o.test(e.href))
                }
                return s
            }
        }).call(t, function () {
            return this
        }())
    }, 134: function (e, t) {
        function n(e, t) {
            var n = {};
            if (r(e) && e.length > 0)
                for (var o, i, s, u = t ? c : a, l = e.split(/;\s/g), f = 0, d = l.length; f < d; f++) {
                    if (s = l[f].match(/([^=]+)=/i), s instanceof Array) try {
                        o = c(s[1]), i = u(l[f].substring(s[1].length + 1))
                    } catch (p) {} else o = c(l[f]), i = "";
                    o && (n[o] = i)
                }
            return n
        }

        function r(e) {
            return "string" == typeof e
        }

        function o(e) {
            return r(e) && "" !== e
        }

        function i(e) {
            if (!o(e)) throw new TypeError("Cookie name must be a non-empty string")
        }

        function a(e) {
            return e
        }
        var s = t,
            c = decodeURIComponent,
            u = encodeURIComponent;
        s.get = function (e, t) {
            i(e), t = "function" == typeof t ? {
                converter: t
            } : t || {};
            var r = n(document.cookie, !t.raw);
            return (t.converter || a)(r[e])
        }, s.set = function (e, t, n) {
            i(e), n = n || {};
            var r = n.expires,
                a = n.domain,
                s = n.path;
            n.raw || (t = u(String(t)));
            var c = e + "=" + t,
                l = r;
            return "number" == typeof l && (l = new Date(Date.now() + 1e3 * r)), l instanceof Date && (c += "; expires=" + l.toGMTString()), o(a) && (c += "; domain=" + a), o(s) && (c += "; path=" + s), n.secure && (c += "; secure"), document.cookie = c, c
        }, s.remove = function (e, t) {
            return t = t || {}, t.expires = new Date(0), this.set(e, "", t)
        }
    }, 135: function (module, exports) {
        var GJ = window.GJ || {},
            __GJ_CONFIG__ = window.__GJ_CONFIG__ || {};
        ! function () {
            var e = window,
                t = e.document;
            e.__GJ_LOADED__ || (e.__GJ_LOADED__ = !0, GJ.config = {
                debug: !1,
                rootDir: "",
                addVersion: !1,
                useCombine: !1,
                cookieDomain: "che.phpdx.cn",
                documentDomain: "che.phpdx.cn",
                iframeProxyUrl: "/iframeproxy.html",
                defaultServer: "sta.ganji.com",
                servers: ["sta.guazistatic.com"],
                fileVersions: {},
                fileCombines: {},
                fileCodes: {
                    autocomplete: "js/util/autocomplete/autocomplete.js",
                    jquery_ui: "js/util/jquery/jquery.ui.js",
                    util: "js/util/ganji/util.cmb.js",
                    json: "js/util/json/json.js",
                    log_tracker: "js/util/log_tracker/log_tracker_simple.js",
                    iframe: ["jquery", "js/util/iframe/iframe.js"],
                    panel: ["js/util/panel/panel.css", "iframe", "js/util/dragdrop/dragdrop.js", "js/util/panel/panel.js"],
                    flash: ["jquery", "js/util/swfobject/swfobject-2.2.js", "js/util/swfobject/swfloader.js"],
                    talk_to_parent: ["jquery", "js/util/window_name/window_name.js", "js/util/iframe/talk_to_parent.js"]
                },
                cdnFiles: {
                    "tool/webim/js/webim.cmb.js": 1,
                    "tool/webim_v2/js/webim.cmb.js": 1
                }
            }, GJ.loadedFiles = {}, GJ.tralog = function (e, t) {
                var n = new Image;
                GJ.config.debug || (n.src = "http://tralog.ganji.com/sta/log.gif?" + ["t=" + e, "m=" + t].join("&"))
            }, function () {
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
                        }, isBoolean: function (e) {
                            return "boolean" == typeof e
                        }, isFunction: function (e) {
                            return "function" === t.typeOf(e)
                        }, isDate: function (e) {
                            return "date" === t.typeOf(e)
                        }, isNull: function (e) {
                            return null === e
                        }, isNumber: function (e) {
                            return "number" == typeof e && isFinite(e)
                        }, isObject: function (e, n) {
                            return e && ("object" == typeof e || !n && t.isFunction(e)) || !1
                        }, isString: function (e) {
                            return "string" == typeof e
                        }, isUndefined: function (e) {
                            return "undefined" == typeof e
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
                GJ.mix = function (e, n, r, o) {
                    if (t.isObject(e) && t.isObject(n))
                        for (var i in n) n.hasOwnProperty(i) && (i in e ? r && (o && t.isObject(e[i], !0) && t.isObject(n[i], !0) ? GJ.mix(e[i], n[i], r, o) : e[i] = n[i]) : e[i] = n[i]);
                    return e
                }, GJ.mix(GJ, t, !0)
            }(), GJ.each = function (e, t) {
                if (GJ.isFunction(t)) {
                    var n, r, o;
                    if (GJ.isArray(e))
                        for (n = 0, r = e.length; n < r && (o = t(e[n], n), o !== !1); n++);
                    else if (GJ.isObject(e))
                        for (n in e)
                            if (e.hasOwnProperty(n) && (o = t(e[n], n), o === !1)) break
                }
            }, GJ.map = function (e, t) {
                var n = [];
                return GJ.each(e, function (e, r) {
                    n.push(t(e, r))
                }), n
            }, GJ.inArray = function (e, t) {
                var n = -1;
                return GJ.each(t, function (t, r) {
                    if (t === e) return n = r, !1
                }), n
            }, GJ.setConfig = function (e) {
                var t = arguments,
                    n = GJ.config;
                if (2 == t.length) {
                    var r = {};
                    r[t[0]] = t[1], GJ.setConfig(r)
                } else GJ.each(e, function (e, t) {
                    GJ.isObject(n[t]) ? GJ.mix(n[t], e, !0) : n[t] = e
                });
                n.rootDir = n.debug ? "src/" : "public/", n.debug && (n.useCombine = !1)
            }, function () {
                if (window.__GJ_PACK_CONFIG__) {
                    var e = [],
                        t = window.__GJ_PACK_CONFIG__,
                        n = function (t) {
                            if (GJ.isNumber(t)) return e[t];
                            var n = [];
                            return GJ.each(t, function (r, o) {
                                n.push(e[t[o]])
                            }), n
                        },
                        r = function (t, r) {
                            var o = {};
                            return GJ.each(t, function (t, i) {
                                1 == r ? o[e[i]] = t : 2 == r ? o[e[i]] = n(t) : 3 == r && (o[i] = n(t))
                            }), o
                        };
                    GJ.each(t.words, function (t, n) {
                        var r = t.split("|");
                        e[n] = r[1] ? e[r[0]] + r[1] : r[0]
                    }), t.fileVersions = r(t.fileVersions, 1), t.fileCombines = r(t.fileCombines, 2), t.fileCodes = r(t.fileCodes, 3), delete t.words, GJ.setConfig(t)
                }
            }(), GJ.setConfig(__GJ_CONFIG__), GJ.rand = function (e, t) {
                return parseInt(Math.random() * (t - e + 1) + e)
            }, function () {
                var e = 0;
                GJ.getRandServer = function () {
                    var t = GJ.config.servers;
                    return t[e++ % t.length]
                }
            }(), GJ.namespace = function () {
                var e, t, n, r, o, i = arguments,
                    a = null;
                for (e = 0, t = i.length; e < t; e++)
                    for (o = i[e].split("."), a = GJ, n = "GJ" == o[0] ? 1 : 0, r = o.length; n < r; n++) a[o[n]] = a[o[n]] || {}, a = a[o[n]];
                return a
            }, GJ.namespace("util", "apps", "widget", "common"), function () {
                var e = function (e, t) {
                        GJ.each(t, function (n, r) {
                            GJ.isFunction(n) && (e[r] = function (e) {
                                return function () {
                                    return e.apply(t, arguments)
                                }
                            }(n))
                        })
                    },
                    t = {
                        "**SYS_FROM_INSIDE**": !0
                    };
                GJ.f = function (n, r) {
                    function o(n, o, i) {
                        var s = !i || !i["**SYS_FROM_INSIDE**"],
                            c = s ? {} : n,
                            u = s ? {} : o,
                            l = null;
                        if (a) {
                            if (GJ.isArray(a))
                                for (var f = 0, d = a.length; f < d; f++) GJ.isFunction(a[f]) && a[f](c, u, t);
                            else GJ.isFunction(a) && a(c, u, t);
                            l = {}, e(l, c)
                        }
                        if (GJ.isFunction(r)) {
                            var p = r.apply(c, [u, l]);
                            GJ.isObject(p) && GJ.mix(c, p, !0)
                        }
                        return s && c.__construct && (c.__construct.apply(c, arguments), delete c.__construct), c
                    }
                    1 === arguments.length && (r = n, n = {});
                    var i = n.__const || {},
                        a = n.__extends || null;
                    return n.__static && GJ.mix(o, n.__static, !0), o.getConst = function (e) {
                        return i[e] || null
                    }, o
                }
            }(), GJ.extend = function (e, t, n, r) {
                t && e || alert("extend failed, verify dependencies");
                var o = t.prototype,
                    i = function () {};
                i.prototype = o;
                var a = new i;
                e.prototype = a, a.constructor = e, e.superclass = o, t != Object && o.constructor == Object.prototype.constructor && (o.constructor = t), n && GJ.mix(a, n, !0), r && GJ.mix(e, r, !0)
            }, GJ.createClass = function () {
                function e() {
                    if (this.__inited__ = !1, e.superclass && e.superclass.constructor.apply(this, arguments), !this.__inited__ && this.init && GJ.isFunction(this.init)) {
                        var t = this.init.apply(this, arguments);
                        if (this.__inited__ = !0, GJ.isObject(t)) return t
                    }
                }
                var t = arguments;
                t.length;
                return GJ.isFunction(t[0]) ? GJ.extend(e, t[0], t[1] || null, t[2] || null) : (t[0] && (e.prototype = t[0]), t[1] && GJ.mix(e, t[1], !0)), e
            }, function () {
                var e = 0;
                GJ.guid = function (t) {
                    var n = (new Date).getTime() + "" + Math.random();
                    return (t ? t : "guid_") + e+++"_" + n.replace(/\./g, "_")
                };
                var t = {};
                GJ.getCache = function (e) {
                    return GJ.isUndefined(t[e]) ? null : t[e]
                }, GJ.setCache = function (e, n) {
                    return 1 == arguments.length && (n = e, e = GJ.guid()), t[e] = n, e
                }, GJ.removeCache = function (e) {
                    GJ.isUndefined(t[e]) || delete t[e]
                }, GJ.clearCache = function () {
                    t = {}
                }
            }(), GJ.getCookie = function (e) {
                var t, n = document,
                    r = null;
                return n.cookie && (t = n.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)")), null !== t && (r = decodeURIComponent(t[2]))), r
            }, GJ.setCookie = function (e, t, n, r, o, i) {
                if (GJ.isUndefined(document.cookie)) return !1;
                n = GJ.isNumber(n) ? parseInt(n) : 0, n < 0 && (t = "");
                var a = new Date;
                return a.setTime(a.getTime() + 1e3 * n), document.cookie = e + "=" + encodeURIComponent(t) + (n ? "; expires=" + a.toGMTString() : "") + "; path=" + (r || "/") + "; domain=" + (o || GJ.config.cookieDomain) + (i ? "; secure" : ""), !0
            }, GJ.removeCookie = function (e, t, n) {
                return GJ.setCookie(e, "", -1, t, n)
            }, GJ.error = function (e) {
                throw new Error(e)
            }, GJ.log = function (e) {
                "undefined" != typeof console && console.log ? console.log(e) : "undefined" != typeof opera && opera.postError(e)
            }, GJ.later = function (e, t, n) {
                t = t || 0;
                var r = null,
                    o = function () {
                        r = r || n ? setInterval(e, t) : setTimeout(e, t)
                    };
                return o(), {
                    run: o,
                    cancel: function () {
                        r && (n ? clearInterval(r) : clearTimeout(r), r = null)
                    }
                }
            }, GJ.waiter = function (e, t, n, r) {
                if (GJ.isFunction(e) && GJ.isFunction(t)) {
                    r = 1e3 * (r || 10);
                    var o = n || 100,
                        i = 0,
                        a = function (e, t) {
                            return e() ? void t() : (i += o, void((!r || i < r) && GJ.later(function () {
                                a(e, t)
                            }, o)))
                        };
                    a(e, t)
                }
            }, GJ.addEvent = function (e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            }, GJ.removeEvent = function (e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
            }, function () {
                var e, t = window,
                    n = document,
                    r = !1,
                    o = [],
                    i = !1,
                    a = function () {
                        if (!i) {
                            i = !0, a = Function.prototype, r = !0;
                            for (var e = 0; e < o.length; e++) o[e]();
                            o.length = 0, i = !1
                        }
                    };
                "readyState" in n ? (e = n.readyState, r = "complete" == e || ~navigator.userAgent.indexOf("AppleWebKit/") && ("loaded" == e || "interactive" == e)) : r = !!n.body, r || (t.addEventListener ? n.addEventListener("DOMContentLoaded", a, !1) : (n.attachEvent("onreadystatechange", function () {
                    "complete" == n.readyState && a()
                }), n.documentElement.doScroll && t === top && ! function s() {
                    if (!r) {
                        try {
                            n.documentElement.doScroll("left")
                        } catch (e) {
                            return void setTimeout(s, 1)
                        }
                        a()
                    }
                }()), GJ.addEvent(t, "load", a)), GJ.onDomReady = function (e, t) {
                    return r ? void e.call(t) : void o.push(function () {
                        e.call(t)
                    })
                }
            }(), function () {
                function e() {
                    t && n !== GJ.errorStack.length && GJ.use("jquery", function (e) {
                        n = GJ.errorStack.length, e.ajax({
                            url: "/jslogs.php",
                            type: "POST",
                            data: {
                                data: GJ.jsonEncode({
                                    stack: GJ.errorStack,
                                    url: window.location.href,
                                    referrer: document.referrer
                                })
                            },
                            error: function () {
                                GJ.use("log_tracker", function () {
                                    GJ.LogTracker.trackEvent("javascript@atype=view@LOC=" + encodeURIComponent(window.location.href) + "@ERR=" + encodeURIComponent("jslogs interface is not reachable!") + "@TYPE=" + encodeURIComponent("JSLOG_NOT_REACHABLE"))
                                })
                            }
                        })
                    })
                }
                GJ.errorStack = [];
                var t = !GJ.config.debug && 1 === parseInt(51 * Math.random()),
                    n = 0;
                GJ.wrap = function (e, t) {
                    return "function" == typeof t && /^function/.test(t.toString()) ? e(t) : t
                }, GJ.guard = function (e, t) {
                    return function () {
                        try {
                            return e.apply(this, arguments)
                        } catch (n) {
                            try {
                                GJ.errorStack.push({
                                    type: t || "GJ_GUARD",
                                    message: n.message || n.toString(),
                                    stack: n.stack,
                                    fn: e.toString().substr(0, 200)
                                })
                            } catch (r) {}
                            throw n
                        }
                    }
                }, GJ.goTry = function (e, t) {
                    return GJ.guard(t, e)
                };
                var r;
                GJ.errorManager = {
                    send: function (t, n, o) {
                        GJ.errorStack.push({
                            type: o,
                            message: t,
                            loc: n
                        }), clearTimeout(r), r = setTimeout(e, 3e3)
                    }
                }
            }(), + function () {
                GJ.Deferred = function () {
                    function e(e, o) {
                        if ("function" == typeof o) t === e || "always" === e && "pending" !== t ? setTimeout(function () {
                            o.apply({}, r)
                        }, 0) : n[e].push(o);
                        else if ("pending" === t) {
                            t = e;
                            for (var i = n[e], a = n.always;
                                 (o = i.shift()) || (o = a.shift());) setTimeout(function (e) {
                                return function () {
                                    e.apply({}, r)
                                }
                            }(o), 0)
                        }
                    }
                    var t = "pending",
                        n = {
                            done: [],
                            fail: [],
                            always: []
                        },
                        r = [];
                    return {
                        state: function () {
                            return t
                        }, done: function (t) {
                            return "function" == typeof t ? e("done", t) : (r = [].slice.call(arguments), e("done")), this
                        }, fail: function (t) {
                            return "function" == typeof t ? e("fail", t) : (r = [].slice.call(arguments), e("fail")), this
                        }, always: function (t) {
                            return "function" == typeof t && e("always", t), this
                        }, promise: function () {
                            return {
                                done: function (t) {
                                    return "function" == typeof t && e("done", t), this
                                }, fail: function (t) {
                                    return "function" == typeof t && e("fail", t), this
                                }, always: function (t) {
                                    return "function" == typeof t && e("always", t), this
                                }, state: function () {
                                    return t
                                }
                            }
                        }
                    }
                }, GJ.when = function () {
                    var e = GJ.Deferred(),
                        t = [].slice.call(arguments),
                        n = t.length,
                        r = 0;
                    if (!n) return e.done().promise();
                    for (var o = t.length - 1; o >= 0; o--) t[o].fail(function () {
                        e.fail()
                    }).done(function () {
                        ++r === n && e.done()
                    });
                    return e.promise()
                }
            }(), + function () {
                function e(e) {
                    var t = y.cache[e],
                        r = [];
                    g.push([-(v - new Date), "waiting", e]), GJ.each(t.dependencies, function (e) {
                        e.status < m.FETCHING && r.push(e.uri)
                    }), GJ.each(r, function (e) {
                        a(e)
                    });
                    var o = GJ.map(t.dependencies, function (e) {
                        return h[e.id]
                    });
                    GJ.when.apply({}, o).done(function () {
                        n(e)
                    })
                }

                function n(e) {
                    g.push([-(v - new Date), "ready", e]);
                    var t = y.cache[e],
                        n = h[e];
                    if (t.exports = {}, t.status = m.READY, GJ.isFunction(t.factory)) {
                        t.status = m.COMPILING;
                        try {
                            if (t.uri) {
                                t.pause = function () {
                                    t.status = m.PAUSE
                                }, t.resume = function () {
                                    delete t.pause, delete t.resume, t.status = m.COMPILED, n.done()
                                };
                                var r = t.factory.call(window, y, t.exports, t);
                                r && (t.exports = r)
                            } else {
                                var o = GJ.map(t.dependencies, function (e) {
                                    return e.exports
                                });
                                t.factory.apply(window, o)
                            }
                        } catch (i) {
                            GJ.log("MOD: " + e), GJ.log("DEP: " + GJ.jsonEncode(GJ.map(t.dependencies, function (e) {
                                    return e.id
                                }))), GJ.log("ERR: " + i.message), t.status = m.ERROR, n.fail();
                            var a = t.factory.toString();
                            throw a = a.length > 150 ? a.substr(0, 150) : a, GJ.errorStack.push({
                                type: "GJ_MODULE_CALLBACK_ERROR",
                                message: i.message,
                                uri: e,
                                dependencies: GJ.jsonEncode(GJ.map(t.dependencies, function (e) {
                                    return e.id
                                })),
                                stack: i.stack,
                                fn: a
                            }), i
                        }
                    }
                    t.status !== m.PAUSE && (t.status = m.COMPILED, n.done())
                }

                function r(e) {
                    function r() {
                        clearTimeout(i), g.push([-(v - new Date), "loaded", e]), f.status === m.FETCHING && (f.status = m.FETCHED), n(e)
                    }

                    function o(e, t) {
                        var n;
                        if (c) e.sheet && (n = !0);
                        else if (e.sheet) try {
                            e.sheet.cssRules && (n = !0)
                        } catch (r) {
                            "NS_ERROR_DOM_SECURITY_ERR" === r.name && (n = !0)
                        }
                        setTimeout(function () {
                            n ? t() : o(e, t)
                        }, 1)
                    }
                    var i, a = navigator.userAgent,
                        c = Number(a.replace(/.*AppleWebKit\/(\d+)\..*/, "$1")) < 536,
                        l = a.indexOf("Firefox") > 0 && !("onload" in document.createElement("link")),
                        f = y.cache[e],
                        d = t.createElement("link");
                    return d.setAttribute("type", "text/css"), d.setAttribute("href", w(e)), d.setAttribute("rel", "stylesheet"), c || l ? setTimeout(function () {
                        o(d, r)
                    }, 1) : (d.onload = r, d.onerror = function () {
                        clearTimeout(i), u.removeChild(d), s(e, "Load Fail")
                    }), f.status = m.FETCHING, u.appendChild(d), i = setTimeout(function () {
                        u.removeChild(d), s(e, "Load timeout")
                    }, 3e4), d
                }

                function o(e, r) {
                    function o() {
                        var o = setTimeout(function () {
                                u.removeChild(a), s(e, "Load timeout")
                            }, 3e4),
                            a = t.createElement("script"),
                            c = !1;
                        a.setAttribute("type", "text/javascript"), a.setAttribute("src", w(e)), a.setAttribute("async", !0), a.onload = a.onreadystatechange = function () {
                            c || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (c = !0, clearTimeout(o), g.push([-(v - new Date), "loaded", e]), i.status === m.FETCHING && (i.status = m.FETCHED), GJ.isFunction(r) && r(), i.status < m.SAVED && (/^http/.test(e) ? n(e) : (GJ.log("模块ID错误: " + e), GJ.tralog("GJ_ADD_INVALIDATE", e), GJ.config.debug || (GJ.setCookie("use_https", 1, 86400), GJ.config.defaultServer = "https://sta.ganji.com"))))
                        }, a.onerror = function (t) {
                            clearTimeout(o), u.removeChild(a), s(e, "Load Fail")
                        }, i.status = m.FETCHING, u.appendChild(a)
                    }
                    var i = y.cache[e];
                    o()
                }

                function i(e) {
                    var t, n = d[e];
                    if (!n) throw new Error(e + "is not a combined js file");
                    n = c(n), p ? GJ.add(e, d[e]) : (GJ.each(n, function (e) {
                        e.status < m.FETCHING && e.uri.indexOf(".js") !== -1 && (e.status = m.FETCHING)
                    }), (t = e.indexOf(".css") === -1 ? o : r)(e, function () {
                        GJ.add(e, d[e])
                    }))
                }

                function a(e) {
                    if (g.push([-(v - new Date), "fetching", e]), d[e]) return i(e);
                    var t = GJ.Module.fileLoaders;
                    for (var n in t)
                        if (t.hasOwnProperty(n) && e.indexOf(n) !== -1) return t[n](e)
                }

                function s(e, t) {
                    if (T[e]) throw y.cache[e].status = m.FAILED, h[e].fail(), GJ.errorStack.push({
                        type: "GJ_MODULE_FAIL",
                        message: t,
                        uri: e
                    }), new Error(t + ": " + w(e));
                    if (T[e] = !0, /^http/.test(e)) throw new Error(t + ": " + e);
                    GJ.tralog("MODULE_LOAD_FAIL", GJ.config.defaultServer + " - " + e), E = E + 1 >= GJ.config.servers.length ? 0 : E + 1, GJ.config.defaultServer = GJ.config.servers[E], GJ.setCookie("STA_DS", E), a(e)
                }

                function c(e) {
                    var t = [];
                    return e && "string" == typeof e && (e = e.replace(/^ */, ""), e = e.split(/[, \r\n\t\f]+/)), GJ.each(e, function (e) {
                        GJ.each(y.resolve(e), function (e) {
                            GJ.inArray(e, t) === -1 && t.push(e)
                        })
                    }), t = GJ.map(t, function (e) {
                        return y.cache[e] || (y.cache[e] = {
                            id: e,
                            uri: e,
                            dependencies: [],
                            status: 0
                        }, h[e] = GJ.Deferred()), y.cache[e]
                    })
                }
                var u = document.getElementsByTagName("head")[0],
                    l = GJ.config,
                    f = (l.fileVersions, l.fileCodes),
                    d = l.fileCombines,
                    p = !!GJ.config.debug,
                    h = {},
                    g = [],
                    v = +new Date;
                GJ.defers = h, GJ.eventList = g;
                var m = {
                        ERROR: -2,
                        FAILED: -1,
                        FETCHING: 1,
                        FETCHED: 2,
                        SAVED: 3,
                        READY: 4,
                        COMPILING: 5,
                        PAUSE: 6,
                        COMPILED: 7
                    },
                    y = function (e) {
                        if (e = y.resolve(e)[0], y.cache[e] && y.cache[e].status === m.COMPILED) return y.cache[e].exports;
                        throw new Error(e + "尚未加载")
                    };
                y.resolve = function (e) {
                    var t = [];
                    return f[e] ? ("string" == typeof f[e] && (f[e] = [f[e]]), GJ.each(f[e], function (e) {
                        GJ.each(y.resolve(e), function (e) {
                            t.push(e)
                        })
                    })) : t.push(e), t
                }, y.cache = {}, GJ.Module = {
                    STATUS: m,
                    cache: y.cache,
                    fileLoaders: {
                        ".js": o,
                        ".css": r
                    },
                    find: function (e) {
                        return y.cache[y.resolve(e)]
                    }
                };
                var w = function (e, t) {
                        var n = e.toLowerCase();
                        if (0 === n.indexOf("http:") || 0 === n.indexOf("https:")) return e;
                        if (0 === e.indexOf("./") || 0 === e.indexOf("../")) {
                            var r = window.location,
                                o = r.port ? ":" + r.port : "";
                            return r.protocol + "//" + r.host + o + "/" + e
                        }
                        t || (t = l.cdnFiles[e] ? "http://stacdn201.ganjistatic1.com" : GJ.config.defaultServer), 0 !== t.indexOf("https") && (t = "https://" + t);
                        _(e);
                        return t + "/" + l.rootDir + e.replace(/(\.(js|css|html?|swf|gif|png|jpe?g))$/i, ".__" + _(e) + "__$1")
                    },
                    b = new Date,
                    x = new Date(b.getFullYear(), b.getMonth(), b.getDate(), 18, 21, 0).getTime(),
                    _ = function (e) {
                        var t, n = (new Date).getTime();
                        return l.fileVersions && (t = l.fileVersions[e], t || (GJ.config.defaultVersion ? t = GJ.config.defaultVersion : (n = n < x ? x - 864e5 : x, t = parseInt(n / 1e3, 10)))), t
                    };
                GJ.getFormatUrl = function (e, t) {
                    var n = y.resolve(e),
                        r = [],
                        r = GJ.map(n, function (e) {
                            return w(e, t)
                        });
                    return 1 === r.length ? r[0] : r
                }, GJ.require = function (e, t) {
                    var n = document,
                        r = c(e),
                        o = [];
                    p ? GJ.each(r, function (e) {
                        d[e.uri] ? GJ.each(c(d[e.uri]), function (e) {
                            o.push(e)
                        }) : o.push(e)
                    }) : o = r, GJ.each(o, function (e) {
                        var r = e.uri;
                        e.status = m.FETCHING, GJ.isFunction(t) && h[e.id].fail(t), /\.css$/i.test(r) ? n.write(unescape("%3Clink href='" + w(r) + "' type='text/css' rel='stylesheet' /%3E")) : n.write(unescape("%3Cscript src='" + w(r) + "' type='text/javascript'%3E%3C/script%3E"))
                    })
                }, GJ.use = function (t, n, r) {
                    var o = GJ.guid();
                    t = c(t);
                    var i = (y.cache[o] = {
                        id: o,
                        dependencies: t,
                        status: m.SAVED,
                        factory: n,
                        onError: r
                    }, h[o] = GJ.Deferred());
                    GJ.isFunction(r) && i.fail(r), g.push([-(v - new Date), "use", o]), e(o)
                }, y.async = GJ.use, GJ.add = function (t, n, r, o) {
                    var i = y.cache[t],
                        a = h[t];
                    return i && i.status >= m.SAVED ? void GJ.log(t + " 重复载入[" + i.status + "]") : (GJ.isFunction(n) && (o = r, r = n, n = []), n = c(n), i ? (i.dependencies = n, i.status = m.SAVED, i.factory = r, i.onError = o, i.exports = {}) : (y.cache[t] = {
                        id: t,
                        uri: t,
                        dependencies: n,
                        status: m.SAVED,
                        factory: r,
                        onError: o,
                        exports: {}
                    }, i = y.cache[t]), a || (a = h[t] = GJ.Deferred()), g.push([-(v - new Date), "add", t]), GJ.isFunction(o) && a.fail(o), void e(t))
                };
                var T = {},
                    E = 0
            }(), GJ.jsonp = function (e, t, n, r, o) {
                if (!e) return void alert("[GJ.jsonp]url不能为空 ");
                GJ.isFunction(t) && (o = r, r = n, n = t, t = {}), o || (o = GJ.guid()), e += e.indexOf("?") === -1 ? "?" : "&", e += "postData=" + encodeURIComponent(GJ.jsonEncode(t)), e += "&callbackName=" + encodeURIComponent(o);
                var i, a = document,
                    s = !1,
                    c = function () {
                        !s && GJ.isFunction(r) && (s = !0, r())
                    },
                    u = document.getElementsByTagName("head")[0];
                window[o] = function (e) {
                    s = !0, GJ.isFunction(n) && n(e)
                }, i = a.createElement("script"), i.setAttribute("type", "text/javascript"), i.setAttribute("src", e), i.setAttribute("async", !0);
                var l = GJ.later(function () {
                        c(), GJ.error("文件载入失败: '" + e + "'"), u.removeChild(i)
                    }, 3e4, !1),
                    f = !1;
                i.onload = i.onreadystatechange = function () {
                    f || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (f = !0, l.cancel(), c())
                }, i.onerror = function (t) {
                    l.cancel(), c(), GJ.error(t + ": " + e), u.removeChild(i)
                }, u.appendChild(i)
            }, GJ.ua = function () {
                var t, n = function (e) {
                        var t = 0;
                        return parseFloat(e.replace(/\./g, function () {
                            return 1 == t++ ? "" : "."
                        }))
                    },
                    r = e && e.navigator,
                    o = r && r.userAgent,
                    i = e && e.location,
                    a = i && i.href,
                    s = {
                        ie: 0,
                        opera: 0,
                        gecko: 0,
                        webkit: 0,
                        chrome: 0,
                        mobile: null,
                        air: 0,
                        ipad: 0,
                        iphone: 0,
                        ipod: 0,
                        ios: null,
                        android: 0,
                        caja: r && r.cajaVersion,
                        secure: !1,
                        os: null,
                        isqplus: !1,
                        is360app: !1
                    };
                if (s.secure = a && 0 === a.toLowerCase().indexOf("https"), o && (/windows|win32/i.test(o) ? s.os = "windows" : /macintosh/i.test(o) ? s.os = "macintosh" : /rhino/i.test(o) && (s.os = "rhino"), /KHTML/.test(o) && (s.webkit = 1), t = o.match(/AppleWebKit\/([^\s]*)/), t && t[1] && (s.webkit = n(t[1]), / Mobile\//.test(o) ? (s.mobile = "Apple", t = o.match(/OS ([^\s]*)/), t && t[1] && (t = n(t[1].replace("_", "."))), s.ipad = "iPad" == navigator.platform ? t : 0, s.ipod = "iPod" == navigator.platform ? t : 0, s.iphone = "iPhone" == navigator.platform ? t : 0, s.ios = s.ipad || s.iphone || s.ipod) : (t = o.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/), t && (s.mobile = t[0]), / Android/.test(o) && (s.mobile = "Android", t = o.match(/Android ([^\s]*);/), t && t[1] && (s.android = n(t[1])))), t = o.match(/Chrome\/([^\s]*)/), t && t[1] ? s.chrome = n(t[1]) : (t = o.match(/AdobeAIR\/([^\s]*)/), t && (s.air = t[0]))), !s.webkit))
                    if (t = o.match(/Opera[\s\/]([^\s]*)/), t && t[1]) s.opera = n(t[1]), t = o.match(/Opera Mini[^;]*/), t && (s.mobile = t[0]);
                    else {
                        t = o.match(/MSIE\s([^;]*)/), t && t[1] ? s.ie = n(t[1]) : (t = o.match(/Gecko\/([^\s]*)/), t && (s.gecko = 1, t = o.match(/rv:([^\s\)]*)/), t && t[1] && (s.gecko = n(t[1]))));
                        var c = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
                        null != c.exec(o) && (s.ie = parseFloat(RegExp.$1))
                    }
                try {
                    e.external && e.external.qplus && GJ.isObject(e.external.qplus) && (s.isqplus = !0), !s.isqplus && e.external && e.external.wappGetAppId && e.external.wappGetAppId() && (s.is360app = !0)
                } catch (u) {}
                return s
            }(), GJ.getViewPort = function () {
                var e = document,
                    t = e.body,
                    n = e.documentElement,
                    r = e.compatMode,
                    o = self.innerWidth,
                    i = self.innerHeight;
                return (r || GJ.ua.ie) && (o = "CSS1Compat" == r ? n.clientWidth : t.clientWidth, GJ.ua.opera || (i = "CSS1Compat" == r ? n.clientHeight : t.clientHeight)), {
                    left: Math.max(n.scrollLeft, t.scrollLeft),
                    top: Math.max(n.scrollTop, t.scrollTop),
                    width: o,
                    height: i
                }
            }, GJ.trim = function (e) {
                return e.replace(/^\s+/, "").replace(/\s+$/, "")
            }, GJ.sprintf = function (e, t, n) {
                var r, o, i = arguments,
                    e = i[0] || "";
                for (r = 1, o = i.length; r < o; r++) e = e.replace(/%s/, i[r]);
                return e
            }, GJ.parseUrl = function (e) {
                var t = document,
                    n = t.location,
                    r = t.createElement("a");
                if (e = e || n.href, e.indexOf("://") === -1 && GJ.ua.ie) {
                    var o = n.protocol + "//" + n.host;
                    o += 0 === e.indexOf("/") ? e : n.pathname.replace(/\/[\w\.]+$/, "/") + e, e = o
                }
                r.href = e;
                var i = {
                    source: e,
                    protocol: r.protocol.replace(":", ""),
                    host: r.hostname,
                    port: r.port,
                    query: r.search,
                    params: function () {
                        for (var t, n = {}, r = e.replace(/^[^\?]+/, "").replace(/#.*$/, ""), o = r.replace(/^\?/, "").split("&"), i = o.length, a = 0; a < i; a++) o[a] && (t = o[a].split("="), n[t[0]] = t[1] || "");
                        return n
                    }(),
                    file: (r.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1],
                    hash: r.hash.replace("#", ""),
                    path: r.pathname.replace(/^([^\/])/, "/$1"),
                    relative: (r.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
                    segments: r.pathname.replace(/^\//, "").split("/")
                };
                return i
            }, GJ.checkFlashPlayer = function (e) {
                var t = navigator,
                    n = null,
                    r = e.split("."),
                    o = [0, 0, 0];
                if ("undefined" != typeof t.plugins && "object" == typeof t.plugins["Shockwave Flash"]) n = t.plugins["Shockwave Flash"].description, !n || "undefined" != typeof t.mimeTypes && t.mimeTypes["application/x-shockwave-flash"] && !t.mimeTypes["application/x-shockwave-flash"].enabledPlugin || (n = n.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), o[0] = parseInt(n.replace(/^(.*)\..*$/, "$1"), 10), o[1] = parseInt(n.replace(/^.*\.(.*)\s.*$/, "$1"), 10), o[2] = /[a-zA-Z]/.test(n) ? parseInt(n.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                else if ("undefined" != typeof window.ActiveXObject) try {
                    var i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    i && (n = i.GetVariable("$version"), n && (n = n.split(" ")[1].split(","), o = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)]))
                } catch (a) {}
                return r[0] = parseInt(r[0], 10), r[1] = parseInt(r[1], 10) || 0, r[2] = parseInt(r[2], 10) || 0, o[0] > r[0] || o[0] == r[0] && o[1] > r[1] || o[0] == r[0] && o[1] == r[1] && o[2] >= r[2]
            }, function () {
                var e;
                GJ.createCSS = function (t, n) {
                    if (!GJ.ua.ie || !GJ.ua.mac) try {
                        var r = document,
                            o = r.getElementsByTagName("head")[0];
                        if (!o) return;
                        if (!e) {
                            var i = r.createElement("style");
                            i.setAttribute("type", "text/css"), e = o.insertBefore(i, o.firstChild), GJ.ua.ie && "win" == GJ.ua.os && !GJ.isUndefined(r.styleSheets) && r.styleSheets.length > 0 && (e = r.styleSheets[r.styleSheets.length - 1])
                        }
                        GJ.ua.ie && "win" == GJ.ua.os ? e && GJ.isFunction(e.addRule) && e.addRule(t, n) : e && GJ.isFunction(r.createTextNode) && e.appendChild(r.createTextNode(t + " {" + n + "}"))
                    } catch (a) {}
                }
            }(), GJ.createLoading = function (e, t) {
                var n = 1,
                    r = {
                        remove: function () {
                            n && n.hide().remove(), n = null
                        }
                    };
                return GJ.use("jquery", function () {
                    if (1 === n) {
                        if (n = $('<div style="width:16px;height:16px;z-index:9000000;position:absolute;background-image:url(' + GJ.getFormatUrl("js/util/ganji/loading.gif") + ');"></div>'), $body = $("body"), 0 == $body.size()) return;
                        if ($body.append(n), e) {
                            var r, o, i = $(e),
                                a = i.offset();
                            t || (t = "center"), "center" == t ? r = a.left + Math.round((i.width() - n.width()) / 2) : "right" == t ? r = a.left + i.width() + 5 : "left" == t && (r = a.left - n.width() - 5), o = a.top + Math.round((i.height() - n.height()) / 2), n.css({
                                top: o,
                                left: r
                            })
                        } else {
                            var s = GJ.getViewPort(),
                                r = s.left + Math.round((s.width - n.width()) / 2),
                                o = s.top + Math.round((s.height - n.height()) / 2);
                            n.css({
                                top: Math.max(0, o),
                                left: Math.max(0, r)
                            })
                        }
                        n.show()
                    }
                }), r
            }, GJ.oneEvent = function (e, t, n, r, o) {
                GJ.use("jquery", function () {
                    var i = GJ.isString(e) ? $("#" + e) : $(e);
                    i && 0 != i.size() && i.one(t, function (e) {
                        var t = this,
                            i = GJ.createLoading(t);
                        return GJ.use(n, function () {
                            i.remove(), r.apply(t, [e])
                        }), !!o
                    })
                })
            }, function () {
                var e = window,
                    t = document;
                try {
                    t.execCommand("BackgroundImageCache", !1, !0)
                } catch (n) {}
                GJ.createCSS("object", "outline:none;");
                var r = GJ.config.documentDomain;
                r && (t.domain = r);
                var o = function () {
                    $("a").attr("target", "_self")
                };
                GJ.addEvent(e, "load", function () {
                    window;
                    GJ.ua.isqplus ? GJ.use("app_qplus", function () {
                        GJ.qplus.init()
                    }) : GJ.ua.is360app && o()
                })
            }(), GJ.add("js/util/ganji/ganji.js"))
        }(),
            function () {
                GJ.jsonEncode || (! function () {
                    var _UNICODE_EXCEPTIONS = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        _ESCAPES = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                        _VALUES = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                        _BRACKETS = /(?:^|:|,)(?:\s*\[)+/g,
                        _UNSAFE = /[^\],:{}\s]/,
                        _escapeException = function (e) {
                            return "\\u" + ("0000" + (+e.charCodeAt(0)).toString(16)).slice(-4)
                        },
                        _parse = function (s, reviver) {
                            if (s = s.replace(_UNICODE_EXCEPTIONS, _escapeException), !_UNSAFE.test(s.replace(_ESCAPES, "@").replace(_VALUES, "]").replace(_BRACKETS, ""))) return eval("(" + s + ")");
                            throw new SyntaxError("JSON.parse")
                        };
                    GJ.jsonDecode = function (e) {
                        return GJ.isString(e) || (e += ""), _parse(e)
                    }
                }(), function () {
                    function e(e) {
                        var t = typeof e;
                        return v[t] || v[c.call(e)] || (t === l ? e ? l : f : u)
                    }

                    function t(e) {
                        return y[e] || (y[e] = "\\u" + ("0000" + (+e.charCodeAt(0)).toString(16)).slice(-4)), y[e]
                    }

                    function n(e) {
                        return '"' + e.replace(m, t) + '"'
                    }

                    function r(e, t) {
                        return e.replace(/^/gm, t)
                    }

                    function o(t, o) {
                        function u(t, c) {
                            var m, b, x, _, T, E = t[c],
                                C = e(E),
                                k = [],
                                j = o ? ": " : ":";
                            switch (a(E) && i(E.toJSON) ? E = E.toJSON(c) : C === g && (E = w(E)), E !== t[c] && (C = e(E)), C) {
                                case g:
                                case l:
                                    break;
                                case d:
                                    return n(E);
                                case p:
                                    return isFinite(E) ? E + "" : f;
                                case h:
                                    return E + "";
                                case f:
                                    return f;
                                default:
                                    return
                            }
                            for (b = y.length - 1; b >= 0; --b)
                                if (y[b] === E) throw new Error("JSON.stringify. Cyclical reference");
                            if (m = s(E), y.push(E), m)
                                for (b = E.length - 1; b >= 0; --b) k[b] = u(E, b) || f;
                            else {
                                x = v || E, b = 0;
                                for (_ in x) x.hasOwnProperty(_) && (T = u(E, _), T && (k[b++] = n(_) + j + T))
                            }
                            return y.pop(), o && k.length ? m ? "[\n" + r(k.join(",\n"), o) + "\n]" : "{\n" + r(k.join(",\n"), o) + "\n}" : m ? "[" + k.join(",") + "]" : "{" + k.join(",") + "}"
                        }
                        if (void 0 !== t) {
                            var v = null,
                                m = c.call(o).match(/String|Number/) || [],
                                y = [];
                            return o = "Number" === m[0] ? new Array(Math.min(Math.max(0, o), 10) + 1).join(" ") : (o || "").slice(0, 10), u({
                                "": t
                            }, "")
                        }
                    }
                    var i = GJ.isFunction,
                        a = GJ.isObject,
                        s = GJ.isArray,
                        c = Object.prototype.toString,
                        u = "undefined",
                        l = "object",
                        f = "null",
                        d = "string",
                        p = "number",
                        h = "boolean",
                        g = "date",
                        v = {
                            undefined: u,
                            string: d,
                            "[object String]": d,
                            number: p,
                            "[object Number]": p,
                            "boolean": h,
                            "[object Boolean]": h,
                            "[object Date]": g,
                            "[object RegExp]": l
                        },
                        m = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        y = {
                            "\b": "\\b",
                            "\t": "\\t",
                            "\n": "\\n",
                            "\f": "\\f",
                            "\r": "\\r",
                            '"': '\\"',
                            "\\": "\\\\"
                        },
                        w = function (e) {
                            function t(e) {
                                return e < 10 ? "0" + e : e
                            }
                            return e.getUTCFullYear() + "-" + t(e.getUTCMonth() + 1) + "-" + t(e.getUTCDate()) + "T" + t(e.getUTCHours()) + ":" + t(e.getUTCMinutes()) + ":" + t(e.getUTCSeconds()) + "Z"
                        };
                    GJ.jsonEncode = function (e, t) {
                        return o(e, t)
                    }
                }(), GJ.add("js/util/json/json.js"))
            }(), window.GJ = GJ, window.onerror = function (e, t, n) {
            GJ.errorManager.send(e, t + "[" + n + "]", "WINDOW_ON_ERROR")
        }, window.location.href.indexOf("use_https") !== -1 && GJ.setCookie("use_https", 1, 86400), GJ.getCookie("use_https") && !GJ.config.debug && (GJ.defaultServer = "https://sta.ganji.com")
    }, 136: function (e, t) {
        "undefined" != typeof console && "undefined" != typeof console.log && "undefined" != typeof console.warn || (window.console = {
            log: function () {}, warn: function () {}
        })
    }, 137: function (e, t) {
        function n(e) {
            this.namespace = e
        }
        var r = window.GJLocalStorage || window.localStorage;
        n.prototype.set = function (e, t) {
            var n = this.dump();
            n[e] = {
                value: t
            }, n = JSON.stringify(n);
            try {
                r.setItem(this.namespace, n)
            } catch (o) {
                return !1
            }
            return r.getItem(this.namespace) === n
        }, n.prototype.get = function (e) {
            var t = this.dump();
            if (t[e]) return t[e].value
        }, n.prototype.remove = function (e) {
            this.set(e, void 0)
        }, n.prototype.clear = function () {
            r.removeItem(this.namespace)
        }, n.prototype.dump = function () {
            var e = r.getItem(this.namespace) || "{}";
            try {
                e = JSON.parse(e)
            } catch (t) {
                e = {}
            }
            return e
        }, e.exports = n
    }, 138: function (e, t, n) {
        function r(e, t) {
            this.server = t || "http://t.guazi.com/t.gif?", this.conf = $.extend({
                platform: "-",
                tracking_type: "pageload",
                pageid: m.generateUUIDV4()
            }, e)
        }

        function o(e) {
            var t = {},
                n = y.get("uuid") || w.get("uuid") || u();
            y.get("sessionid");
            return t.guid = n, t.userid = y.get("userid") || "-", t.sessionid = y.get("sessionid") || m.generateUUIDV4(), y.set("sessionid", t.sessionid, {
                path: "/",
                domain: ".che.phpdx.cn"
            }), t.landing = b.landing || (_.hostname.indexOf("che.phpdx.cn") > 0 ? 0 : 1), t
        }

        function i(e) {
            function t(e) {
                var t = c(_.query);
                e.ca_kw = document.referrer && t[n.filter(function (e) {
                        return new RegExp(e[0], "i").test(_.hostname) ? t[e[1]] : []
                    })[0][1]] || "-", y.set("cainfo", JSON.stringify(e), {
                    expires: 31536e3,
                    path: "/",
                    domain: ".che.phpdx.cn"
                })
            }
            var n = p(),
                r = b.ca_s,
                o = b.ca_n,
                i = {
                    ca_s: "self",
                    ca_n: o || "-",
                    ca_medium: "-",
                    ca_term: "-",
                    ca_content: "-",
                    ca_campaign: "-",
                    ca_kw: "-",
                    ca_i: "-",
                    s_code: "-"
                },
                a = n.filter(function (e) {
                    return new RegExp(e[0], "i").test(_.hostname)
                });
            return r && o ? (i = $.extend(i, b), t(i)) : a.length ? (i.ca_s = "seo_" + a[0][0], t(i)) : i = y.get("cainfo") ? JSON.parse(y.get("cainfo")) : i, i || {}
        }

        function a() {
            var e = encodeURIComponent(document.referrer);
            return h(e) > 512 && (e = g(e)), {
                page: T,
                pagetype: "-",
                line: "-",
                referrer: e || "-",
                city: y.get("gzCityDomain") || "-"
            }
        }

        function s(e, t) {
            var n = new Image;
            n.onload = function () {
                t && t()
            }, n.onerror = function () {
                t && t(new Error("network error"))
            }, setTimeout(function () {
                t && t(new Error("timeout"))
            }, 1e4), n.src = this.server + e.toLowerCase()
        }

        function c(e) {
            return e = e || window.location.search || window.location.hash, e.replace(/^\?/, "").split("&").map(function (e) {
                return e.split("=")
            }).reduce(function (e, t) {
                return t[0].trim() && (e[t[0]] = t[1]), e
            }, {})
        }

        function u() {
            var e = m.generateUUIDV4();
            return f("uuid", e), e
        }

        function l(e) {
            var t = y.get(e) || w.get(e) || null;
            return t && JSON.parse(t)
        }

        function f(e, t) {
            y.set(e, t, {
                expires: 31536e3,
                path: "/",
                domain: ".guazi.com"
            }), w.set(e, t)
        }

        function d(e) {
            var t = parseInt(l(e.guid + "_views"), 10) || 0,
                n = parseInt(l(e.sessionid + "_views"), 10) || 0;
            return e.guid_views = "pageload" === e.tracking_type ? t + 1 : t, e.session_views = "pageload" === e.tracking_type ? n + 1 : n, f(e.guid + "_views", e.guid_views), f(e.sessionid + "_views", e.session_views), e
        }

        function p() {
            return [
                ["baidu", "wd"],
                ["baidu", "word"],
                ["images.google", "q"],
                ["google", "q"],
                ["yahoo", "p"],
                ["msn", "q"],
                ["live", "q"],
                ["soso", "w"],
                ["sogou", "query"],
                ["bing", "q"],
                ["so.360.cn", "q"],
                ["so.com", "q"],
                ["haosou.com", "q"],
                ["haoso.com", "q"],
                ["easou", "q"],
                ["sm.cn", "q"],
                ["youdao", "q"]
            ]
        }

        function h(e) {
            for (var t = 0, n = e.length; n--;) t += e.charCodeAt(n) > 255 ? 2 : 1;
            return t
        }

        function g(e, t) {
            for (var n = 0, r = 0; r < (t || 511);) r += e.charCodeAt(n) > 255 ? 2 : 1, n++;
            return e.slice(0, n)
        }
        var v = n(137),
            m = n(145),
            y = n(134),
            w = new v("GUAZI_TRACKER"),
            b = c(),
            x = n(48),
            _ = new x(document.referrer.toLocaleLowerCase()),
            T = encodeURIComponent(window.location.href),
            E = document.getElementsByTagName("head")[0].getAttribute("_tracker") || y.get("_tracker") && JSON.parse(y.get("_tracker")),
            C = E ? JSON.parse(E) : {};
        r.prototype.send = function (e, t) {
            var n = $.extend({}, o(), i(), a(), C || {}, this.conf, e || {});
            d(n);
            var r = [];
            for (var c in n) r.push(c + "=" + n[c]);
            var u = "";
            u = r.join("&"), s.call(this, u, t)
        }, e.exports = r
    }, 139: function (e, t) {
        function n() {
            console.log("\n                            .__ \n   ____  __ _______  _______|__|\n  / ___\\|  |  \\__  \\ \\___   /  |\n / /_/  >  |  // __ \\_/    /|  |\n \\___  /|____/(____  /_____ \\__|\n/_____/            \\/      \\/   \n \n想要这样的程序源码?\n请联系扣扣：290559038（验证信息请填写 console）")
        }
        n()
    }, 141: function (module, exports, __webpack_require__) {
        __webpack_require__(147),
            function (require, exports, module) {
                function postByImg(e, t) {
                    var n = new Image;
                    n.onload = n.onerror = function () {
                        n.onload = null, n.onerror = null, t && t()
                    }, firstLogSent || (firstLogSent = !0, getUuid() || LOG_NO_UUID ? LOG_NO_UUID && (getUuid() ? (GJ.LogTracker.trackEvent("/LOG_NO_UUID/ev2/" + LOG_NO_UUID), GJ.removeCookie("LOG_NO_UUID")) : GJ.LogTracker.trackEvent("/LOG_NO_UUID/ev1/" + LOG_NO_UUID)) : GJ.setCookie("LOG_NO_UUID", getSessionId() + "_" + GJ.rand(0, 999999), 86400)), n.src = e
                }

                function postImgTo58() {
                    var e = window.site_name || "ganji",
                        t = window._trackURL || "NA",
                        n = window.gj58 || "NA",
                        r = encodeURIComponent(document.referrer);
                    if ("NA" !== n) {
                        var o = n.split("&"),
                            i = [],
                            a = t.indexOf("{");
                        for (var s in o) {
                            var c = o[s].indexOf("=");
                            c !== -1 && i.push("'" + o[s].substring(0, c) + "':'" + o[s].substring(c + 1) + "'")
                        }
                        i.join(","), t = "NA" !== t && a !== -1 ? t.substring(0, a + 1) + i + "," + t.substring(a + 1) : "{" + i + "}"
                    }(new Image).src = document.location.protocol + "//tracklog.58.com/ganji_pc/empty.js.gif?site_name=" + e + "&tag=pvstatall&referrer=" + r + "&trackURL=" + t + "&rand_id=" + Math.random()
                }

                function Code(e) {
                    this.code = e.code || "", this.params = e.params || {}, this.showId = e.showId || "", this.actionType = e.actionType || L.ACTION_TYPE_CLICK, this.redirectUrl = e.redirectUrl || "", this.business = e.business, this.bdShow = e.bdShow
                }
                if (!GJ.LogTracker || !GJ.LogTracker.trackPageView) {
                    var reqid = GJ.config.reqid || "-",
                        gjadOrderCount = 0,
                        isLanding = !1,
                        win = window,
                        doc = document,
                        nav = win.navigator,
                        ua = nav && nav.userAgent,
                        loc = win.location,
                        guid = function () {
                            var e = new Date,
                                t = e.getTime(),
                                n = new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0);
                            return 1e3 * (t - n.getTime()) + GJ.rand(1e3, 9999)
                        },
                        counter = 0,
                        pageViewTracked = !1,
                        speedEventTracked = !1,
                        speedEventBinded = !1,
                        viewEvents = {},
                        pageTypes = {
                            home: 1,
                            index: 1,
                            list: 1,
                            detail: 1,
                            order: 1,
                            query: 1,
                            other: 1
                        },
                        _encodeURI = function (e, t) {
                            var n = encodeURIComponent;
                            return n instanceof Function ? t ? encodeURI(e) : n(e) : escape(e)
                        },
                        getCookie = function (e) {
                            try {
                                var t = GJ.getCookie("_gl_tracker"),
                                    n = t ? GJ.jsonDecode(t) : {};
                                return e ? n[e] || null : n
                            } catch (r) {
                                return null
                            }
                        },
                        setCookie = function (e, t) {
                            var n = getCookie();
                            n[e] = t, GJ.setCookie("_gl_tracker", GJ.jsonEncode(n), 0)
                        },
                        initData = {
                            flashPlayerVersion: function () {
                                var e = [0, 0, 0],
                                    t = null;
                                if ("undefined" != typeof nav.plugins && "object" == typeof nav.plugins["Shockwave Flash"]) t = nav.plugins["Shockwave Flash"].description, !t || "undefined" != typeof nav.mimeTypes && nav.mimeTypes["application/x-shockwave-flash"] && !nav.mimeTypes["application/x-shockwave-flash"].enabledPlugin || (t = t.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), e[0] = parseInt(t.replace(/^(.*)\..*$/, "$1"), 10), e[1] = parseInt(t.replace(/^.*\.(.*)\s.*$/, "$1"), 10), e[2] = /[a-zA-Z]/.test(t) ? parseInt(t.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0);
                                else if ("undefined" != typeof window.ActiveXObject) try {
                                    var n = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                                    n && (t = n.GetVariable("$version"), t && (t = t.split(" ")[1].split(","), e = [parseInt(t[0], 10), parseInt(t[1], 10), parseInt(t[2], 10)]))
                                } catch (r) {}
                                return e.join(".")
                            }(),
                            uaFormat: function () {
                                var e = ["os:" + (GJ.ua.os || "-")],
                                    t = /Windows NT ([\d\.]*)/i.exec(navigator.userAgent) || /Mac OS X ([\d\.]*)/i.exec(navigator.userAgent) || /OS ([\d_]*)/i.exec(navigator.userAgent);
                                return t = t ? t[1] : "-", e.push("ov:" + (t || "-")), GJ.ua.ie ? (e.push("bn:ie"), e.push("bv:" + GJ.ua.ie)) : GJ.ua.webkit ? (e.push("bn:webkit"), e.push("bv:" + GJ.ua.webkit)) : GJ.ua.gecko ? (e.push("bn:gecko"), e.push("bv:" + GJ.ua.gecko)) : (e.push("bn:-"), e.push("bv:-")), e.push("dv:" + (window.navigator.platform || "-")), e.push("rl:" + window.screen.width + "," + window.screen.height), e.join("|")
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
                                var e = "ganji.com";
                                return e.toLowerCase()
                            }()
                        },
                        uuid = "",
                        getUuid = function () {
                            return uuid || (uuid = GJ.getCookie(L.uuidName)), uuid
                        },
                        powResult = {
                            53: "9007199254740992",
                            54: "18014398509481984",
                            55: "36028797018963968",
                            56: "72057594037927936",
                            57: "144115188075855872",
                            58: "288230376151711744",
                            59: "576460752303423488",
                            60: "1152921504606846976",
                            61: "2305843009213693952",
                            62: "4611686018427387904",
                            63: "9223372036854775808",
                            64: "18446744073709551616"
                        },
                        getUserID = function () {
                            var e = GJ.jsonDecode(GJ.getCookie("GanjiUserInfo")) || {
                                    user_id: -1
                                };
                            if (e.user_id === -1) return "-7449356661961093996";
                            var t = "0110011101100001011011100110101001101001011000010111001101101011",
                                n = parseInt(e.user_id, 10).toString(2);
                            return reduceRight.call(xor(t, n).split(""), function (e, t, n, r) {
                                return parseInt(t) && (e = plus(e, pow2(r.length - n - 1))), e
                            }, "0")
                        },
                        xor = function (e, t) {
                            if (t.length > e.length) {
                                var n = t;
                                t = e, e = n
                            }
                            e = e.split(""), t = t.split("");
                            for (var r, o = t.pop(), i = []; void 0 !== o;) r = e.pop(), i.unshift(o ^ r), o = t.pop();
                            return e.concat(i).join("")
                        },
                        pow2 = function (e) {
                            return e <= 53 ? Math.pow(2, e).toString() : powResult[e.toString()]
                        },
                        plus = function (e, t) {
                            if (e.length < 14 && t.length < 14) return (parseInt(e) + parseInt(t)).toString();
                            if (t.length > e.length) {
                                var n = t;
                                t = e, e = n
                            }
                            e = e.split(""), t = t.split("");
                            for (var r, o, i = (t.length, []), a = 0, s = t.pop(); void 0 !== s;) {
                                if (r = e.pop(), void 0 === r) {
                                    i.unshift(1);
                                    break
                                }
                                o = parseInt(r) + parseInt(s) + a, i.unshift(o % 10), a = o >= 10 ? 1 : 0, t.length ? s = t.pop() : a ? (s = a, a = 0) : s = void 0
                            }
                            return e.concat(i).join("")
                        },
                        reduceRight = function (e) {
                            if ("function" != typeof e) throw new TypeError(e + " is not an function");
                            var t, n = this.length >>> 0,
                                r = n - 1;
                            if (arguments.length > 1) t = arguments[1];
                            else
                                for (;;) {
                                    if (r in this) {
                                        t = this[r--];
                                        break
                                    }
                                    if (--r < 0) throw new TypeError("reduce of empty array with on initial value")
                                }
                            for (; r >= 0; r--) r in this && (t = e.call(null, t, this[r], r, this));
                            return t
                        },
                        sessionId = "",
                        getSessionId = function () {
                            return sessionId || (sessionId = getCookie("sid"), sessionId || (sessionId = guid(), setCookie("sid", sessionId), isLanding = !0)), sessionId
                        },
                        getOrganics = function () {
                            return [
                                ["baidu", "wd"],
                                ["baidu", "word"],
                                ["images.google", "q"],
                                ["google", "q"],
                                ["yahoo", "p"],
                                ["msn", "q"],
                                ["live", "q"],
                                ["soso", "w"],
                                ["sogou", "query"],
                                ["bing", "q"],
                                ["so.360.cn", "q"],
                                ["so.com", "q"],
                                ["haosou.com", "q"],
                                ["haoso.com", "q"]
                            ]
                        },
                        searchEngineHostMap = {
                            "baidu.com": "baidu",
                            "google.com": "google",
                            "sogou.com": "sogou",
                            "soso.com": "soso",
                            "so.com": "360",
                            "haoso.com": "360",
                            "haosou.com": "360",
                            "youdao.com": "youdao",
                            "bing.com": "bing"
                        },
                        addIgnoredKeyword = function (e) {
                            L.ignoredKeywords[e + " "] = 1
                        },
                        getOrganicInfo = function () {
                            var e, t, n, r, o, i, a, s = document.referrer && !/(ganji|mayi|guazi).(com|cn)/i.test(GJ.parseUrl(document.referrer).host) ? document.referrer : null,
                                c = GJ.parseUrl(document.referrer),
                                u = GJ.parseUrl(window.location.href),
                                l = getOrganics(),
                                f = /[\?&]\w+=utf/i.test(document.referrer);
                            return s ? (e = u.params.ca_source || c.host, t = u.params.ca_name || "", n = u.params.ca_kw || "", r = u.params.ca_id || "", i = u.params.ca_n || "", o = u.params.ca_s, a = u.params.ca_i, o || (GJ.each(searchEngineHostMap, function (e, t) {
                                if (new RegExp("^([a-zA-Z\\d]+\\.){0,}" + t, "i").test(c.host)) return o = "seo_" + e, i || (i = "-"), !1
                            }), o || (o = "other_" + c.host)), n || GJ.each(l, function (e) {
                                if (new RegExp("^([a-zA-Z\\d]+\\.){0,}" + e[0], "i").test(c.host)) {
                                    var r = c.params[e[1]];
                                    if (r) return n = r + "|" + (f ? "utf8" : ""), t || (t = "se"), !1
                                }
                            })) : (e = u.params.ca_source || getCookie("ca_source"), t = u.params.ca_name || getCookie("ca_name"), n = u.params.ca_kw || getCookie("ca_kw"), r = u.params.ca_id || getCookie("ca_id"), i = u.params.ca_n || getCookie("ca_n"), a = u.params.ca_i || getCookie("ca_i"), o = u.params.ca_s || getCookie("ca_s"), o && "-" !== o || (o = "self")), e = e || "-", t = t || "-", n = n || "-", r = r || "-", o = o || "-", i = i || "-", a = a || "-", setCookie("ca_source", e), setCookie("ca_name", t), setCookie("ca_kw", n), setCookie("ca_id", r), setCookie("ca_s", o), setCookie("ca_n", i), setCookie("ca_i", a), [e, t, n, r, o, i, a]
                        },
                        getInnerFromId = function () {
                            var e = getCookie("ifid");
                            if (document.referrer) {
                                var t = GJ.parseUrl(window.location.href),
                                    n = t.params[L.innerFromIdName] || "";
                                n && n != e && (e = n, setCookie("ifid", e))
                            }
                            return e || ""
                        },
                        submitHandler = function () {
                            var e = $(this).data("gl_EO_click");
                            return e.trackEvent(), !0
                        },
                        clickHandler = function (e) {
                            var t = $(this).data("gl_EO_click");
                            return t.trackEvent(null, e), !t.redirectUrl || (GJ.later(function () {
                                window.location.href = t.redirectUrl
                            }, 300), !1)
                        },
                        mouseoverHandler = function () {
                            if (!$(this).data("gl_over_tracked")) {
                                var e = $(this).data("gl_EO_mouseover");
                                e.trackEvent(), $(this).data("gl_over_tracked", 1)
                            }
                            return !0
                        },
                        bindTrackEvent = function (e, t) {
                            var n = e[0].tagName.toLowerCase();
                            if ("a" == n && "_self" == e[0].target.toLowerCase() && (t.redirectUrl = e.attr("href")), t.actionType == L.ACTION_TYPE_CLICK) {
                                var r = new E(t);
                                e.data("gl_EO_click", r), "form" == n ? (e.unbind("submit", submitHandler), e.bind("submit", submitHandler)) : (e.unbind("click", clickHandler), e.bind("click", clickHandler))
                            } else if (t.actionType == L.ACTION_TYPE_HOVER) {
                                var r = new E(t);
                                e.data("gl_EO_mouseover", r), e.unbind("mouseover", mouseoverHandler), e.bind("mouseover", mouseoverHandler)
                            }
                        },
                        firstLogSent = !1,
                        LOG_NO_UUID = GJ.getCookie("LOG_NO_UUID"),
                        E = Code;
                    Code.prototype = {
                        trackEvent: function (e, t) {
                            var n, r, o;
                            if (n = getOrganicInfo(), r = this.business ? "b.gif" : this.bdShow ? "d.gif" : "e.gif", this.params && "direction" === this.params.show_type) try {
                                GJ.webim.cometMgr.setNeedComet(1);
                            } catch (i) {}
                            var a, s;
                            t && t.clientY && (a = Math.floor(t.clientX - document.body.clientWidth / 2), s = t.clientY);
                            var c = this.getActionInfo();
                            c ? s && (c += "@clickx=" + a + "@clicky=" + s + "@clientw=" + document.body.clientWidth) : c = "-";
                            var u = "gjalog=";
                            this.isUsingGe() && (u = "ge="), u += c + "@reqid=" + reqid, o = [L.server + "/" + r + "?gjch=" + (L.getGjch() || "-"), "gc=" + (L.gjchNew || "-"), u, "uuid=" + (getUuid() || "-"), "gjuser=" + getUserID(), "sid=" + getSessionId(), "ca_source=" + (n[0] || "-"), "ca_name=" + (n[1] || "-"), "ca_kw=" + (n[2] || "-"), "ca_id=" + (n[3] || "-"), "ca_s=" + (n[4] || "-"), "ca_n=" + (n[5] || "-"), "ca_i=" + (n[6] || "-"), "ifid=" + (getInnerFromId() || "-"), "r=" + counter++], L.gjchver && o.push("gjchver=" + L.gjchver), postByImg(o.join("&"), e)
                        }, getActionInfo: function () {
                            var e = this,
                                t = [];
                            if (e.code && e.actionType && e.isUsingGe()) {
                                var n = e.code.slice(0, e.code.length - 8);
                                n += "00000", n += e.actionType === L.ACTION_TYPE_HOVER ? "1" : "0", n += e.actionType === L.ACTION_TYPE_CLICK ? "1" : "0", n += e.actionType === L.ACTION_TYPE_SHOW ? "1" : "0", e.code = n
                            }
                            return e.code && t.push(e.code), GJ.each(e.params, function (e, n) {
                                t.push(n + "=" + e)
                            }), e.actionType && t.push("atype=" + e.actionType), e.showId && t.push("showid=" + e.showId), t.join(L.paramSeparator)
                        }, isUsingGe: function () {
                            return !(/\D+/.test(this.code) || this.business || this.bdShow)
                        }
                    }, Code.parse = function (e) {
                        e = $.trim(e);
                        var t = e.replace("&", L.paramSeparator).split(L.paramSeparator),
                            n = {
                                code: t.shift(),
                                params: {},
                                actionTypes: "",
                                showId: "",
                                business: !1,
                                bdShow: !1
                            };
                        if (GJ.each(t, function (e) {
                                e = e.split("="), e[0] && ("atype" === e[0] ? n.actionTypes = e[1].split("|") : "showid" === e[0] ? n.showId = e[1] : "business" === e[0] ? e[1] && "false" !== e[1] && (n.business = !0) : "bd_show" === e[0] ? e[1] && "false" !== e[1] && (n.bdShow = !0) : n.params[e[0]] = e[1])
                            }), !/\D+/.test(n.code) && !n.business && !n.bdShow) {
                            n.actionTypes || (n.actionTypes = []);
                            var r = n.code.toString(),
                                o = r.slice(r.length - 3, r.length);
                            "1" === o.charAt(0) && n.actionTypes.push(L.ACTION_TYPE_HOVER), "1" === o.charAt(1) && n.actionTypes.push(L.ACTION_TYPE_CLICK), "1" === o.charAt(2) && n.actionTypes.push(L.ACTION_TYPE_SHOW)
                        }
                        return n
                    }, Code.parseCode = Code.parse;
                    var L = {
                        ACTION_TYPE_SHOW: "show",
                        ACTION_TYPE_CLICK: "click",
                        ACTION_TYPE_HOVER: "hover",
                        gjch: "",
                        getGjch: function () {
                            var e = L.gjch.replace("&", L.paramSeparator).replace("@360app=1", "");
                            return e || (e = $("body").data("gjch") || "-", "-" === e && window.PAGE_CONFIG && window.PAGE_CONFIG.logTracker && (e = window.PAGE_CONFIG.logTracker.gjch), L.gjch = e), e
                        }, gjchver: "A",
                        server: "http://analytics.ganji.com",
                        domain: initData.domain,
                        uuidName: "ganji_uuid",
                        innerFromIdName: "ifid",
                        actionAttrName: "gjalog",
                        paramSeparator: "@",
                        ignoredKeywords: {
                            "ganji ": 1,
                            "赶集 ": 1,
                            "赶集网 ": 1
                        },
                        addIgnoredKeyword: addIgnoredKeyword,
                        bindAllTrackEvent: function () {
                            var newViewEvents = [],
                                ads = [];
                            if ($("[" + L.actionAttrName + "]").each(function () {
                                    var e = $(this),
                                        t = e.attr(L.actionAttrName),
                                        n = E.parseCode(t);
                                    GJ.each(n.actionTypes, function (r) {
                                        var o = GJ.mix({}, n);
                                        if (o.actionType = r, delete o.actionTypes, r != L.ACTION_TYPE_SHOW || viewEvents[t]) bindTrackEvent(e, o);
                                        else if (viewEvents[t] = 1, o.params.gjaddata) newViewEvents.push(o), ads.push([e, o.params.gjaddata]);
                                        else {
                                            var i = new E(o);
                                            i.trackEvent()
                                        }
                                    })
                                }), newViewEvents.length > 0) {
                                var _data = {},
                                    _gjalog = "/site_tuiguang/trace@atype=show@business=true&gjaddata=";
                                newViewEvents = GJ.map(newViewEvents, function (val) {
                                    return eval("(" + val.params.gjaddata.replace(/\{(\d*\:)([^\{\}]*?)\}/g, '{$1"$2"}') + ")")
                                });
                                var _data = $.extend.apply($, [!0, {}].concat(newViewEvents));
                                _data[10] && (L.trackEvent(_gjalog + GJ.jsonEncode({
                                        10: _data[10]
                                    }).replace(/[\'\" ]+/g, "")), delete _data[10]), _gjalog += GJ.jsonEncode(_data).replace(/[\'\" ]+/g, ""), L.trackEvent(_gjalog)
                            }
                            ads.sort(function (e, t) {
                                return e[0].offset().top < t[0].offset().top ? -1 : 1
                            });
                            var adOrder = $.map(ads, function (e) {
                                var t = e[1];
                                return t = t.replace(/(\d*):\{(\d*):\{\d*:(.*?)\}\}/g, "$1|$2|$3").replace("{", "").replace("}", "").replace(",", "+")
                            });
                            adOrder.length && ! function () {
                                for (var e; adOrder.length;) e = adOrder.splice(0, 60), L.trackEvent("/site_tuiguang/trace@atype=show@business=true&gjadorder=" + e.join(",") + "@seg=" + gjadOrderCount++)
                            }()
                        }, trackPageView: function (e) {
                            if (pageViewTracked) return !1;
                            pageViewTracked = !0, e && (L.gjch = e);
                            var t = getOrganicInfo(),
                                n = [L.server + "/p.gif?gjch=" + (L.getGjch() || "-"), "gc=" + (L.gjchNew || "-"), "uuid=" + (getUuid() || "-"), "reqid=" + reqid, "gjuser=" + getUserID(), "sid=" + getSessionId(), "ca_source=" + (t[0] || "-"), "ca_name=" + (t[1] || "-"), "ca_kw=" + (t[2] || "-"), "ca_id=" + (t[3] || "-"), "ca_s=" + (t[4] || "-"), "ca_n=" + (t[5] || "-"), "ca_i=" + (t[6] || "-"), "ifid=" + (getInnerFromId() || "-"), "refer=" + (document.referrer ? _encodeURI(document.referrer) : "-"), "ua=" + initData.uaFormat, "fv=" + initData.flashPlayerVersion, "sc=" + initData.screenFormart, "landing=" + (isLanding ? 1 : 0)];
                            L.gjchver && n.push("gjchver=" + L.gjchver), postByImg(n.join("&"));
                            var r = location.protocol;
                            if ("https:" != r) {
                                n.shift(), n.unshift("gjch=" + (L.getGjch() || "-"));
                                var o = location.host,
                                    i = o.split(".");
                                i[0] && "www" != i[0] && n.push("city=" + i[0]), window.gj58 = n.join("&"), postImgTo58()
                            }
                        }, trackEvent: function (e, t) {
                            var n = E.parseCode(e);
                            n.actionType = n.actionTypes[0] || L.ACTION_TYPE_SHOW, delete n.actionTypes;
                            var r = new E(n);
                            r.trackEvent(t)
                        }, bindSpeedEvent: function () {
                            return !speedEventBinded && (speedEventBinded = !0, void $("body").click(function (e) {
                                    var t = $(e.target);
                                    if ("A" != t[0].tagName && (t = t.parent()), !t[0] || "A" != t[0].tagName) return !0;
                                    var n = t.attr("href") || "";
                                    if (!n || /^(#|javascript:)/i.test(n)) return !0;
                                    var r = new Date,
                                        o = GJ.jsonEncode([n, r.getTime()]);
                                    return GJ.setCookie("_gl_speed", o, 60), !0
                                }))
                        }, trackSpeedEvent: function (e) {
                            if (speedEventTracked) return !1;
                            speedEventTracked = !0, e && (L.gjch = e);
                            var t, n = GJ.getCookie("_gl_speed") || "[]",
                                n = GJ.jsonDecode(n),
                                r = window.location.href,
                                o = r.split(n[0]),
                                i = window.SPEED_RENDER_BEGIN || 0,
                                a = window.SPEED_RENDER_END || 0,
                                s = GJ.getCookie("citydomain");
                            if (t = GJ.rand(1, 100), !n[0] || 2 != o.length || "" != o[1]) return !1;
                            if (GJ.removeCookie("_gl_speed"), 1 != t || n[1] < 1 || i < n[1] || a < i) return !1;
                            var c = function () {
                                    return (new Date).getTime()
                                },
                                u = GJ.rand(0, 1),
                                l = {
                                    cdn: ["http://image101.ganjistatic1.com/logo.jpg", "http://image.ganjistatic1.com/logo.jpg"][u]
                                },
                                f = {},
                                d = $.Deferred(),
                                p = 0;
                            s && (l.ms = "http://" + s + ".ganji.com/empty.gif?" + GJ.rand(1, 99999999)), $.each(l, function () {
                                p++
                            }), $.each(l, function (e, t) {
                                var n = +c(),
                                    r = $.Deferred(),
                                    o = setTimeout(function () {
                                        r.reject()
                                    }, 1e4);
                                r.fail(function () {
                                    f[e] = -1
                                }).always(function () {
                                    clearTimeout(o), p--, p || d.resolve()
                                }), $(new Image).error(function () {
                                    r.reject()
                                }).load(function () {
                                    f[e] = c() - n, r.resolve()
                                }).attr("src", t)
                            }), $(window).load(function () {
                                var e = c();
                                d.done(function () {
                                    var t = [n[1] || 0, i, a, e, f.cdn || 0, 0, f.ms || 0],
                                        r = [L.server + "/s.gif?gjch=" + (L.getGjch() || "-"), "times=" + t.join(","), "cdn=" + (u ? "" : 101)];
                                    postByImg(r.join("&"))
                                })
                            })
                        }, getPvCount: function (e) {
                            var t = GJ.mix({
                                    textFormat: "&nbsp;&nbsp;该信息被浏览 %s 次 ",
                                    containerId: "",
                                    serverUrl: "http://analytics.ganji.com/rta/"
                                }, e, !0),
                                n = _encodeURI(window.location.href),
                                r = 1,
                                o = $("#" + t.containerId);
                            if (o.size() > 0) {
                                var i = t.serverUrl + "?gjch=" + L.getGjch() + "&refer=" + n + "&callback=?";
                                $.getJSON(i).done(function (e) {
                                    e && e.value && (r = e.value)
                                }).always(function () {
                                    o.html(t.textFormat.replace("%s", r))
                                })
                            }
                        }, trackMouseEvent: function (e) {
                            e = e || {};
                            var t, n = [],
                                r = $(document),
                                o = 0,
                                i = 0,
                                a = function (e) {
                                    n.push([e.timeStamp, 2, e.pageX, e.pageY])
                                },
                                s = function (e) {
                                    e.timeStamp - o > 100 && (o = e.timeStamp, n.push([e.timeStamp, 1, e.pageX, e.pageY])), i >= 5 && r.unbind("mousemove", s).unbind("click", a)
                                },
                                c = function () {
                                    if (i >= 10) return void t.cancel();
                                    i++;
                                    var e = [],
                                        r = "/mousevent",
                                        o = GJ.getViewPort();
                                    n.length > 0 && (GJ.each(n, function (t) {
                                        e.push(t.join(","))
                                    }), n = []), r += "@view=" + o.left + "," + o.top + "," + o.width + "," + o.height + "@data=" + e.join("|") + "@atype=hover", L.trackEvent(r)
                                };
                            t = GJ.later(c, 3e3, !0), r.bind("mousemove", s).bind("click", a), GJ.addEvent(window, "unload", function () {
                                t.cancel(), c(), r.unbind("mousemove", s).unbind("click", a)
                            })
                        }
                    };
                    GJ.LogTracker = L, GJ.LogTracker.innerFromIdName = "ifid", GJ.LogTracker.domain = "ganji.com", GJ.addEvent(window, "load", function () {
                        GJ.LogTracker.bindAllTrackEvent()
                    }),
                        function () {
                            var e = GJ.getCookie("loginact"),
                                t = window.PAGE_CONFIG && window.PAGE_CONFIG.logTracker && window.PAGE_CONFIG.logTracker.server ? PAGE_CONFIG.logTracker.server : L.server;
                            if (e) {
                                GJ.removeCookie("loginact");
                                try {
                                    if (e = GJ.jsonDecode(e), e && e.type)
                                        if ("Login" == e.type) {
                                            var n = e.username ? _encodeURI(e.username) : "",
                                                r = e.email ? _encodeURI(e.email) : "",
                                                o = e.user_id ? _encodeURI(e.user_id) : "",
                                                i = e.city ? _encodeURI(e.city) : "",
                                                a = e.gender ? _encodeURI(e.gender) : "",
                                                s = e.jiaoyou ? 1 : 0,
                                                c = e.is_register ? 1 : 0,
                                                u = getOrganicInfo(),
                                                l = [t + "/e.gif?gjch=/user/login@user_id=" + o + "@username=" + n + "@email=" + r + "@city=" + i + "@gender=" + a + "@jiaoyou=" + s + "@is_register=" + c, "gjalog=-", "uuid=" + (getUuid() || "-"), "sid=" + getSessionId(), "ca_source=" + (u[0] || "-"), "ca_name=" + (u[1] || "-"), "ca_kw=" + (u[2] || "-"), "ca_id=" + (u[3] || "-"), "ca_i=" + (u[6] || "-"), "ifid=" + (getInnerFromId() || "-"), "r=" + counter++];
                                            L.gjchver && l.push("gjchver=" + L.gjchver), postByImg(l.join("&"))
                                        } else if ("Logout" == e.type) {
                                            var n = e.username ? _encodeURI(e.username) : "",
                                                r = e.email ? _encodeURI(e.email) : "",
                                                o = e.user_id ? _encodeURI(e.user_id) : "",
                                                u = getOrganicInfo(),
                                                l = [t + "/e.gif?gjch=/user/logout@user_id=" + o + "@username=" + n + "@email=" + r, "gjalog=-", "uuid=" + (getUuid() || "-"), "sid=" + getSessionId(), "ca_source=" + (u[0] || "-"), "ca_name=" + (u[1] || "-"), "ca_kw=" + (u[2] || "-"), "ca_id=" + (u[3] || "-"), "ca_i=" + (u[6] || "-"), "ifid=" + (getInnerFromId() || "-"), "r=" + counter++];
                                            L.gjchver && l.push("gjchver=" + L.gjchver), postByImg(l.join("&"))
                                        }
                                } catch (f) {}
                            }
                        }()
                }
            }()
    }, 143: function (e, t) {
        function n(e) {
            var t = [],
                n = {
                    key: "DNS查询耗时",
                    value: e.domainLookupEnd - e.domainLookupStart
                },
                r = {
                    key: "TCP链接耗时",
                    value: e.connectEnd - e.connectStart
                },
                o = {
                    key: "request请求耗时",
                    value: e.responseEnd - e.responseStart
                },
                i = {
                    key: "解析dom树耗时",
                    value: e.domComplete - e.domInteractive
                },
                a = {
                    key: "白屏时间",
                    value: e.responseStart - e.navigationStart
                },
                s = {
                    key: "domready时间",
                    value: e.domContentLoadedEventEnd - e.navigationStart
                };
            return t = t.concat(n, r, o, i, a, s)
        }

        function r(e) {
            for (var t = [], n = e.length, r = n - 1; r > 0; r--) {
                var o = {},
                    i = e[r];
                o.key = i.name, o.resValue = i.responseEnd - i.requestStart, o.conValue = i.connectEnd - i.connectStart, (o.resValue >= 5e3 || o.conValue >= 50) && t.push(o)
            }
            return t
        }

        function o(e) {
            var t = [],
                n = {};
            n.name = "进入页面的方式";
            var r = "";
            switch (e) {
                case 0:
                    r = "点击链接、地址栏输入、表单提交、脚本操作等方式加载";
                    break;
                case 1:
                    r = "通过[重新加载]按钮或者location.reload()方法加载";
                    break;
                case 2:
                    r = "网页通过[前进]或[后退]按钮加载";
                    break;
                default:
                    r = "任何其他来源的加载"
            }
            return n.value = r, t.push(n), t
        }

        function i(e) {
            var t = new Image;
            t.onload = t.onerror = function () {
                t = null
            }, t.src = e
        }
        var a;
        a = "performance" in window && "getEntriesByType" in window.performance && window.performance.getEntriesByType("resource") instanceof Array ? function (e) {
            for (var t = window.document.cookie, a = t.indexOf("gzCityDomain"), s = t.substring(a), c = s.split(";")[0].split("=")[1], u = window.location.href, l = navigator.userAgent, f = n(performance.timing), d = r(performance.getEntries()), p = JSON.stringify(f), h = 0; h < d.length; h++) d[h].key = encodeURIComponent(d[h].key);
            var g = JSON.stringify(d),
                v = o(performance.navigation),
                m = JSON.stringify(v),
                y = "http://analytics.guazi.com/" + e + ".gif?timing=" + p + "&resources=" + g + "&useragent=" + l + "&addressCity=" + c + "&localurl=" + u + "&typekind=" + m;
            i(y)
        } : function () {}, e.exports = a
    }, 144: function (e, t, n) {
        (function (e) {
            "use strict";

            function t(e) {
                return d.stringify(e)
            }

            function n(e) {
                if ("string" == typeof e) return d.parse(e)
            }

            function r(e) {
                return e.replace(l, "___")
            }

            function o(e, n) {
                return t({
                    v: e,
                    e: n
                })
            }

            function i(e, t) {
                var n = (new Date).getTime();
                return t && t.e && n > t.e ? null : t ? void 0 !== t.v ? t.v : t : null
            }

            function a(e) {
                var t = {
                    set: function (t, n, r) {
                        if (void 0 === n) return localStorage.removeItem(e + t);
                        var i = o(n, r);
                        try {
                            localStorage.setItem(e + t, i)
                        } catch (a) {
                            localStorage.clear()
                        }
                    }, get: function (t) {
                        var r = n(localStorage.getItem(e + t)),
                            o = i(t, r);
                        return null === o && localStorage.removeItem(e + t), o
                    }, remove: function (t) {
                        return localStorage.removeItem(e + t)
                    }, clear: function () {
                        localStorage.clear()
                    }
                };
                return t
            }

            function s(e) {
                var t, a, s = function (n) {
                    return function () {
                        var r = Array.prototype.slice.call(arguments, 0);
                        r.unshift(a), t.appendChild(a), a.addBehavior("#default#userData"), a.load(e);
                        var o = n.apply(c, r);
                        return t.removeChild(a), o
                    }
                };
                t = f.contentWindow.document, a = t.createElement("div");
                var c = {
                    set: s(function (t, n, i, a) {
                        if (n = r(n), void 0 === i) return t.removeAttribute(n), t.save(e), null;
                        var s = o(i, a);
                        try {
                            t.setAttribute(n, s), t.save(e)
                        } catch (c) {
                            var u = t.XMLDocument.documentElement.attributes;
                            t.load(e);
                            for (var l = 0, f = u.length; l < f; l++) n = u[l].name, t.removeAttribute(n);
                            t.save(e)
                        }
                    }),
                    get: s(function (t, o) {
                        var a = r(o),
                            s = n(t.getAttribute(a)),
                            c = i(o, s);
                        return null === c && (t.removeAttribute(o), t.save(e)), c
                    }),
                    remove: s(function (t, n) {
                        n = r(n), t.removeAttribute(n), t.save(e)
                    }),
                    clear: s(function (t) {
                        var n = t.XMLDocument.documentElement.attributes;
                        t.load(e);
                        for (var r = 0, o = n.length; r < o; r++) {
                            var i = n[r].name;
                            t.removeAttribute(i)
                        }
                        t.save(e)
                    })
                };
                return c
            }

            function c(e) {
                var t, n = "ganji_";
                e && "string" == typeof e && (n = e + "_"), u ? t = a(n) : document.documentElement.addBehavior && (t = s(n)), GJ.mix(this, t, !0)
            }
            var u = !!window.localStorage,
                l = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
            if (!u) {
                e.pause();
                var f = document.createElement("IFRAME");
                f.style.display = "none", $(f).bind("load", function () {
                    e.resume()
                }), f.src = "http://sta.ganji.com/crossdomain.html", document.insertBefore(f, document.firstChild)
            }
            var d = window.JSON ? window.JSON : {
                stringify: GJ.jsonEncode,
                parse: GJ.jsonDecode
            };
            e.exports = c
        }).call(t, n(12)(e))
    }, 145: function (e, t) {
        t.generateUUIDV4 = function () {
            var e = (new Date).getTime(),
                t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
                    var n = (e + 16 * Math.random()) % 16 | 0;
                    return e = Math.floor(e / 16), ("x" == t ? n : 7 & n | 8).toString(16)
                });
            return t
        }
    }, 146: function (e, t) {
        ! function () {
            GJ.unvalidUuids = {
                "1187158101079678796465": 1,
                "1640709297704850370817": 1,
                "1823333814828863203957": 1,
                "2020889608837386539142": 1,
                "2252210102001733269886": 1,
                "2340581831795844463627": 1,
                "2692712424160268008371": 1,
                "3052987320069458126563": 1,
                "3721242780181462247483": 1,
                "4029357143810312804772": 1,
                "4395758023875822634427": 1,
                "4489797400797560473744": 1,
                "5348279144951867586187": 1,
                "5420283867813976390008": 1,
                "6390469957589361152662": 1,
                "6817327945991880136587": 1,
                "6955764297084213261711": 1,
                "7781658340745328975422": 1,
                "79c7cb5a-3c93-11e0-9cb6-842b2b047f50": 1,
                "8075250529638237708151": 1,
                "8448686163293580160604": 1,
                "8530981192668653986655": 1,
                "8697757642971189731480": 1,
                "8765465929491233845781": 1,
                "1187158101079678796465": 1,
                "1567042247736826477037": 1,
                "1640709297704850370817": 1,
                "1823333814828863203957": 1,
                "1828340892122325443092": 1,
                "2020889608837386539142": 1,
                "2252210102001733269886": 1,
                "2692712424160268008371": 1,
                "3052987320069458126563": 1,
                "3124222923411447887083": 1,
                "3129678213543225143101": 1,
                "3958445872296482308633": 1,
                "4395758023875822634427": 1,
                "4489797400797560473744": 1,
                "5420283867813976390008": 1,
                "6105514449750433074173": 1,
                "6390469957589361152662": 1,
                "6441723222223470387903": 1,
                "6786457902754186923210": 1,
                "6955764297084213261711": 1,
                "7129687423250539630174": 1,
                "7229288609077362886442": 1,
                "7611599647911337589882": 1,
                "7781658340745328975422": 1,
                "7958588425650716642176": 1,
                "79c7cb5a-3c93-11e0-9cb6-842b2b047f50": 1,
                "8075250529638237708151": 1,
                "8448686163293580160604": 1,
                "8530981192668653986655": 1,
                "8697757642971189731480": 1,
                "8765465929491233845781": 1,
                "9748177087607278921741": 1,
                "ce194ed4-39a2-11e0-8563-0026b961bdd9": 1
            }
        }()
    }, 147: function (e, t, n) {
        n(146), n(148);
        var r;
        n(144);
        ! function (e, t, n) {
            if (GJ._uuid) return void(r = GJ._uuid);
            var o = "ganji_uuid",
                i = GJ.getCookie("gj_inner_acc"),
                a = 31536e3,
                s = "",
                c = (document, []),
                u = !0,
                l = !1,
                i = i ? i.split("-") : null,
                f = function (e) {
                    if (e && GJ.isString(e))
                        if (i) {
                            if (2 !== i.length || e.length < 23 || e.indexOf("-") === -1 || e.substr(e.length - 1) !== i[0] || GJ.unvalidUuids[e.split("-")[0]]) return !1;
                            var t = e.split("-"),
                                n = t[0],
                                r = t[1].substr(0, t[1].length - 1),
                                o = n.substr(n.length - 8);
                            if (parseInt(i[1]) + parseInt(o) === parseInt(r)) return !0
                        } else if (e.length > 20 && e.indexOf("-") === -1) return !0;
                    return !1
                },
                d = function () {
                    f(s) && GJ.isArray(c) && GJ.each(c, function (e) {
                        GJ.isFunction(e) && e(s)
                    })
                },
                p = function () {
                    var e = +new Date,
                        t = GJ.rand(1e7, 99999999),
                        n = function (e) {
                            for (var t = "", n = e.length; n > 0;) n--, t += e.substr(n, 1);
                            return t
                        },
                        r = n(e + "" + GJ.rand(1, 9));
                    return r = 1 * r + t + "" + t, i && 2 === i.length && (r = r + "-" + (1 * i[1] + t) + i[0]), r
                };
            GJ._uuid = function (e) {
                if (s = GJ.getCookie(o)) {
                    if (f(s)) return GJ.isFunction(e) && e(s), s;
                    l = !0
                }
                if (GJ.isFunction(e) && c.push(e), u) return u = !1, s = p(), GJ.setCookie(o, s, a), d(), !1
            }, r = GJ._uuid, GJ.uuid || (GJ.uuid = GJ._uuid), GJ.getCookie("ganji_uuid") || GJ._uuid()
        }(), e.exports = r
    }, 148: function (e, t) {
        ! function () {
            GJ.windowName = function (e) {
                if ("" === e.name) e.name = "{}";
                else try {
                    GJ.jsonDecode(e.name)
                } catch (t) {}
                return {
                    set: function (t, n) {
                        var r = {};
                        try {
                            r = GJ.jsonDecode(e.name)
                        } catch (o) {}
                        r[t] = n, e.name = GJ.jsonEncode(r)
                    }, get: function (t) {
                        try {
                            return GJ.jsonDecode(e.name)[t]
                        } catch (n) {
                            return {}
                        }
                    }, remove: function (t) {
                        var n;
                        try {
                            n = GJ.jsonDecode(e.name)
                        } catch (r) {
                            return n
                        }
                        var o = n[t];
                        return delete n[t], e.name = GJ.jsonEncode(n), o
                    }, clear: function () {
                        var t = e.name;
                        return e.name = "{}", t
                    }, toString: function () {
                        return e.name
                    }, toJSON: function () {
                        try {
                            return GJ.jsonDecode(e.name)
                        } catch (t) {
                            return GJ.jsonDecode({})
                        }
                    }
                }
            };
            try {
                var e = GJ.windowName(window);
                GJ.mix(GJ.windowName, e)
            } catch (t) {}
            GJ.removeWindowName = GJ.windowName.remove, GJ.getWindowName = GJ.windowName.get, GJ.setWindowName = GJ.windowName.set, GJ.clearWindowName = GJ.windowName.clear
        }()
    }, 151: function (e, t, n) {
        var r = n(138),
            o = new r({
                platform: "web",
                line: "c2c",
                tracking_type: "click"
            });
        t.listen = function () {
            $("body").on("click", "[data-gzlog]", function (e) {
                var t = {},
                    n = $(e.currentTarget);
                $.each(n.data("gzlog").split("&"), function (e, n) {
                    var r = n.split("=");
                    t[r[0]] = r[1]
                }), o.send(t)
            })
        }
    }, 160: function (e, t) {
        function n(e, t) {
            var n = {};
            if (r(e) && e.length > 0)
                for (var o, i, s, u = t ? c : a, l = e.split(/;\s/g), f = 0, d = l.length; f < d; f++) {
                    if (s = l[f].match(/([^=]+)=/i), s instanceof Array) try {
                        o = c(s[1]), i = u(l[f].substring(s[1].length + 1))
                    } catch (p) {} else o = c(l[f]), i = "";
                    o && (n[o] = i)
                }
            return n
        }

        function r(e) {
            return "string" == typeof e
        }

        function o(e) {
            return r(e) && "" !== e
        }

        function i(e) {
            if (!o(e)) throw new TypeError("Cookie name must be a non-empty string")
        }

        function a(e) {
            return e
        }
        var s = t,
            c = decodeURIComponent,
            u = encodeURIComponent;
        s.get = function (e, t) {
            i(e), t = "function" == typeof t ? {
                converter: t
            } : t || {};
            var r = n(document.cookie, !t.raw);
            return (t.converter || a)(r[e])
        }, s.set = function (e, t, n) {
            i(e), n = n || {};
            var r = n.expires,
                a = n.domain,
                s = n.path;
            n.raw || (t = u(String(t)));
            var c = e + "=" + t,
                l = r;
            return "number" == typeof l && (l = new Date(Date.now() + 1e3 * r)), l instanceof Date && (c += "; expires=" + l.toGMTString()), o(a) && (c += "; domain=" + a), o(s) && (c += "; path=" + s), n.secure && (c += "; secure"), document.cookie = c, c
        }, s.remove = function (e, t) {
            return t = t || {}, t.expires = new Date(0), this.set(e, "", t)
        }
    }, 161: function (e, t) {
        function n(e) {
            this.namespace = e
        }
        var r = window.GJLocalStorage || window.localStorage;
        n.prototype.set = function (e, t) {
            var n = this.dump();
            n[e] = {
                value: t
            }, n = JSON.stringify(n);
            try {
                r.setItem(this.namespace, n)
            } catch (o) {
                return !1
            }
            return r.getItem(this.namespace) === n
        }, n.prototype.get = function (e) {
            var t = this.dump();
            if (t[e]) return t[e].value
        }, n.prototype.remove = function (e) {
            this.set(e, void 0)
        }, n.prototype.clear = function () {
            r.removeItem(this.namespace)
        }, n.prototype.dump = function () {
            var e = r.getItem(this.namespace) || "{}";
            try {
                e = JSON.parse(e)
            } catch (t) {
                e = {}
            }
            return e
        }, e.exports = n
    }, 162: function (e, t, n) {
        function r(e, t) {
            this.server = t || "http://t.guazi.com/t.gif?", this.conf = T({
                platform: "-",
                tracking_type: "pageload",
                pageid: y.generateUUIDV4()
            }, e)
        }

        function o(e) {
            var t = [];
            for (var n in e) t.push(n + "=" + e[n]);
            var r = "";
            return r = t.join("&")
        }

        function i(e) {
            var t = {},
                n = w.get("uuid") || b.get("uuid") || l();
            w.get("sessionid");
            return t.guid = n, t.userid = w.get("userid") || "-", t.sessionid = w.get("sessionid") || y.generateUUIDV4(), w.set("sessionid", t.sessionid, {
                path: "/",
                domain: G
            }), t.landing = x.landing || (document.referrer && E.hostname.indexOf("guazi.com") >= 0 ? 0 : 1), t
        }

        function a(e) {
            function t(e) {
                var t = u(E.query);
                e.ca_kw = document.referrer && t[n.filter(function (e) {
                        return new RegExp(e[0], "i").test(E.hostname) ? t[e[1]] : []
                    })[0][1]] || "-", w.set("cainfo", JSON.stringify(e), {
                    expires: 31536e3,
                    path: "/",
                    domain: G
                })
            }
            var n = h(),
                r = x.ca_s,
                o = x.ca_n,
                i = {
                    ca_s: "self",
                    ca_n: o || "-",
                    ca_medium: "-",
                    ca_term: "-",
                    ca_content: "-",
                    ca_campaign: "-",
                    ca_kw: "-",
                    ca_i: "-",
                    s_code: "-"
                },
                a = n.filter(function (e) {
                    return new RegExp(e[0], "i").test(E.hostname)
                });
            return r && o ? (i = T(i, x), t(i)) : a.length ? (i.ca_s = "seo_" + a[0][0], t(i)) : i = w.get("cainfo") ? JSON.parse(w.get("cainfo")) : i, i || {}
        }

        function s() {
            var e = encodeURIComponent(document.referrer);
            return g(e) > 512 && (e = v(e)), {
                page: k,
                pagetype: "-",
                line: "-",
                referrer: e || "-",
                city: w.get("cityDomain") || w.get("gzCityDomain") || "-"
            }
        }

        function c(e, t) {
            var n = new Image;
            n.onload = function () {
                t && t()
            }, n.onerror = function () {
                t && t(new Error("network error"))
            }, setTimeout(function () {
                t && t(new Error("timeout"))
            }, 1e4), n.src = this.server + e.toLowerCase()
        }

        function u(e) {
            return e = e || window.location.search || window.location.hash, e.replace(/^\?/, "").split("&").map(function (e) {
                return e.split("=")
            }).reduce(function (e, t) {
                return t[0].trim() && (e[t[0]] = t[1]), e
            }, {})
        }

        function l() {
            var e = y.generateUUIDV4();
            return d("uuid", e), e
        }

        function f(e) {
            var t = w.get(e) || b.get(e) || null;
            return t && JSON.parse(t)
        }

        function d(e, t) {
            w.set(e, t, {
                expires: 31536e3,
                path: "/",
                domain: G
            }), b.set(e, t)
        }

        function p(e) {
            var t = parseInt(f(e.guid + "_views"), 10) || 0,
                n = parseInt(f(e.sessionid + "_views"), 10) || 0;
            return e.guid_views = "pageload" === e.tracking_type ? t + 1 : t, e.session_views = "pageload" === e.tracking_type ? n + 1 : n, d(e.guid + "_views", e.guid_views), d(e.sessionid + "_views", e.session_views), e
        }

        function h() {
            return [
                ["baidu", "wd"],
                ["baidu", "word"],
                ["images.google", "q"],
                ["google", "q"],
                ["yahoo", "p"],
                ["msn", "q"],
                ["live", "q"],
                ["soso", "w"],
                ["sogou", "query"],
                ["bing", "q"],
                ["so.360.cn", "q"],
                ["so.com", "q"],
                ["haosou.com", "q"],
                ["haoso.com", "q"],
                ["easou", "q"],
                ["sm.cn", "q"],
                ["youdao", "q"]
            ]
        }

        function g(e) {
            for (var t = 0, n = e.length; n--;) t += e.charCodeAt(n) > 255 ? 2 : 1;
            return t
        }

        function v(e, t) {
            for (var n = 0, r = 0; r < (t || 511);) r += e.charCodeAt(n) > 255 ? 2 : 1, n++;
            return e.slice(0, n)
        }
        var m = n(161),
            y = n(163),
            w = n(160),
            b = new m("GUAZI_TRACKER"),
            x = u(),
            _ = n(48),
            T = n(195),
            E = new _(document.referrer.toLocaleLowerCase()),
            C = window.sessionStorage,
            k = encodeURIComponent(window.location.href),
            j = document.getElementsByTagName("head")[0].getAttribute("_tracker") || w.get("_tracker") && JSON.parse(w.get("_tracker")),
            S = j ? JSON.parse(j) : {},
            G = ".guazi.com";
        r.prototype.send = function (e, t) {
            G = e && e.domain || G;
            var n = T({}, i(), a(), s(), S || {}, this.conf, e || {});
            if (p(n), C) {
                var r = JSON.parse(C.getItem("_tracker")) || {},
                    u = new Date;
                r.clientTime && r.pagetype !== n.pagetype && "pageload" === n.tracking_type && (r.time_on_page = u - new Date(r.clientTime), r.tracking_type = "timeOnPage", c.call(this, o(r)));
                try {
                    C.setItem("_tracker", JSON.stringify(T(!1, n, {
                        clientTime: new Date
                    })))
                } catch (l) {}
            }
            c.call(this, o(n), t)
        }, e.exports = r
    }, 163: function (e, t) {
        t.generateUUIDV4 = function () {
            var e = (new Date).getTime(),
                t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
                    var n = (e + 16 * Math.random()) % 16 | 0;
                    return e = Math.floor(e / 16), ("x" == t ? n : 7 & n | 8).toString(16)
                });
            return t
        }
    }, 194: function (e, t, n) {
        var r, o;
        ! function (i, a) {
            "use strict";
            r = a, o = "function" == typeof r ? r.call(t, n, t, e) : r, !(void 0 !== o && (e.exports = o))
        }(this, function () {
            var e, t, n = Array,
                r = n.prototype,
                o = Object,
                i = o.prototype,
                a = Function,
                s = a.prototype,
                c = String,
                u = c.prototype,
                l = Number,
                f = l.prototype,
                d = r.slice,
                p = r.splice,
                h = r.push,
                g = r.unshift,
                v = r.concat,
                m = r.join,
                y = s.call,
                w = s.apply,
                b = Math.max,
                x = Math.min,
                _ = i.toString,
                T = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                E = Function.prototype.toString,
                C = /^\s*class /,
                k = function (e) {
                    try {
                        var t = E.call(e),
                            n = t.replace(/\/\/.*\n/g, ""),
                            r = n.replace(/\/\*[.\s\S]*\*\//g, ""),
                            o = r.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                        return C.test(o)
                    } catch (i) {
                        return !1
                    }
                },
                j = function (e) {
                    try {
                        return !k(e) && (E.call(e), !0)
                    } catch (t) {
                        return !1
                    }
                },
                S = "[object Function]",
                G = "[object GeneratorFunction]",
                e = function (e) {
                    if (!e) return !1;
                    if ("function" != typeof e && "object" != typeof e) return !1;
                    if (T) return j(e);
                    if (k(e)) return !1;
                    var t = _.call(e);
                    return t === S || t === G
                },
                J = RegExp.prototype.exec,
                N = function (e) {
                    try {
                        return J.call(e), !0
                    } catch (t) {
                        return !1
                    }
                },
                I = "[object RegExp]";
            t = function (e) {
                return "object" == typeof e && (T ? N(e) : _.call(e) === I)
            };
            var O, D = String.prototype.valueOf,
                A = function (e) {
                    try {
                        return D.call(e), !0
                    } catch (t) {
                        return !1
                    }
                },
                L = "[object String]";
            O = function (e) {
                return "string" == typeof e || "object" == typeof e && (T ? A(e) : _.call(e) === L)
            };
            var U = o.defineProperty && function () {
                        try {
                            var e = {};
                            o.defineProperty(e, "x", {
                                enumerable: !1,
                                value: e
                            });
                            for (var t in e) return !1;
                            return e.x === e
                        } catch (n) {
                            return !1
                        }
                    }(),
                F = function (e) {
                    var t;
                    return t = U ? function (e, t, n, r) {
                        !r && t in e || o.defineProperty(e, t, {
                            configurable: !0,
                            enumerable: !1,
                            writable: !0,
                            value: n
                        })
                    } : function (e, t, n, r) {
                        !r && t in e || (e[t] = n)
                    },
                        function (n, r, o) {
                            for (var i in r) e.call(r, i) && t(n, i, r[i], o)
                        }
                }(i.hasOwnProperty),
                R = function (e) {
                    var t = typeof e;
                    return null === e || "object" !== t && "function" !== t
                },
                M = l.isNaN || function (e) {
                        return e !== e
                    },
                q = {
                    ToInteger: function (e) {
                        var t = +e;
                        return M(t) ? t = 0 : 0 !== t && t !== 1 / 0 && t !== -(1 / 0) && (t = (t > 0 || -1) * Math.floor(Math.abs(t))), t
                    }, ToPrimitive: function (t) {
                        var n, r, o;
                        if (R(t)) return t;
                        if (r = t.valueOf, e(r) && (n = r.call(t), R(n))) return n;
                        if (o = t.toString, e(o) && (n = o.call(t), R(n))) return n;
                        throw new TypeError
                    }, ToObject: function (e) {
                        if (null == e) throw new TypeError("can't convert " + e + " to object");
                        return o(e)
                    }, ToUint32: function (e) {
                        return e >>> 0
                    }
                },
                $ = function () {};
            F(s, {
                bind: function (t) {
                    var n = this;
                    if (!e(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);
                    for (var r, i = d.call(arguments, 1), s = function () {
                        if (this instanceof r) {
                            var e = w.call(n, this, v.call(i, d.call(arguments)));
                            return o(e) === e ? e : this
                        }
                        return w.call(n, t, v.call(i, d.call(arguments)))
                    }, c = b(0, n.length - i.length), u = [], l = 0; l < c; l++) h.call(u, "$" + l);
                    return r = a("binder", "return function (" + m.call(u, ",") + "){ return binder.apply(this, arguments); }")(s), n.prototype && ($.prototype = n.prototype, r.prototype = new $, $.prototype = null), r
                }
            });
            var H = y.bind(i.hasOwnProperty),
                P = y.bind(i.toString),
                z = y.bind(d),
                B = w.bind(d),
                W = y.bind(u.slice),
                V = y.bind(u.split),
                Y = y.bind(u.indexOf),
                X = y.bind(h),
                K = y.bind(i.propertyIsEnumerable),
                Z = y.bind(r.sort),
                Q = n.isArray || function (e) {
                        return "[object Array]" === P(e)
                    },
                ee = 1 !== [].unshift(0);
            F(r, {
                unshift: function () {
                    return g.apply(this, arguments), this.length
                }
            }, ee), F(n, {
                isArray: Q
            });
            var te = o("a"),
                ne = "a" !== te[0] || !(0 in te),
                re = function (e) {
                    var t = !0,
                        n = !0,
                        r = !1;
                    if (e) try {
                        e.call("foo", function (e, n, r) {
                            "object" != typeof r && (t = !1)
                        }), e.call([1], function () {
                            "use strict";
                            n = "string" == typeof this
                        }, "x")
                    } catch (o) {
                        r = !0
                    }
                    return !!e && !r && t && n
                };
            F(r, {
                forEach: function (t) {
                    var n, r = q.ToObject(this),
                        o = ne && O(this) ? V(this, "") : r,
                        i = -1,
                        a = q.ToUint32(o.length);
                    if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.forEach callback must be a function");
                    for (; ++i < a;) i in o && ("undefined" == typeof n ? t(o[i], i, r) : t.call(n, o[i], i, r))
                }
            }, !re(r.forEach)), F(r, {
                map: function (t) {
                    var r, o = q.ToObject(this),
                        i = ne && O(this) ? V(this, "") : o,
                        a = q.ToUint32(i.length),
                        s = n(a);
                    if (arguments.length > 1 && (r = arguments[1]), !e(t)) throw new TypeError("Array.prototype.map callback must be a function");
                    for (var c = 0; c < a; c++) c in i && ("undefined" == typeof r ? s[c] = t(i[c], c, o) : s[c] = t.call(r, i[c], c, o));
                    return s
                }
            }, !re(r.map)), F(r, {
                filter: function (t) {
                    var n, r, o = q.ToObject(this),
                        i = ne && O(this) ? V(this, "") : o,
                        a = q.ToUint32(i.length),
                        s = [];
                    if (arguments.length > 1 && (r = arguments[1]), !e(t)) throw new TypeError("Array.prototype.filter callback must be a function");
                    for (var c = 0; c < a; c++) c in i && (n = i[c], ("undefined" == typeof r ? t(n, c, o) : t.call(r, n, c, o)) && X(s, n));
                    return s
                }
            }, !re(r.filter)), F(r, {
                every: function (t) {
                    var n, r = q.ToObject(this),
                        o = ne && O(this) ? V(this, "") : r,
                        i = q.ToUint32(o.length);
                    if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.every callback must be a function");
                    for (var a = 0; a < i; a++)
                        if (a in o && !("undefined" == typeof n ? t(o[a], a, r) : t.call(n, o[a], a, r))) return !1;
                    return !0
                }
            }, !re(r.every)), F(r, {
                some: function (t) {
                    var n, r = q.ToObject(this),
                        o = ne && O(this) ? V(this, "") : r,
                        i = q.ToUint32(o.length);
                    if (arguments.length > 1 && (n = arguments[1]), !e(t)) throw new TypeError("Array.prototype.some callback must be a function");
                    for (var a = 0; a < i; a++)
                        if (a in o && ("undefined" == typeof n ? t(o[a], a, r) : t.call(n, o[a], a, r))) return !0;
                    return !1
                }
            }, !re(r.some));
            var oe = !1;
            r.reduce && (oe = "object" == typeof r.reduce.call("es5", function (e, t, n, r) {
                    return r
                })), F(r, {
                reduce: function (t) {
                    var n = q.ToObject(this),
                        r = ne && O(this) ? V(this, "") : n,
                        o = q.ToUint32(r.length);
                    if (!e(t)) throw new TypeError("Array.prototype.reduce callback must be a function");
                    if (0 === o && 1 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
                    var i, a = 0;
                    if (arguments.length >= 2) i = arguments[1];
                    else
                        for (;;) {
                            if (a in r) {
                                i = r[a++];
                                break
                            }
                            if (++a >= o) throw new TypeError("reduce of empty array with no initial value")
                        }
                    for (; a < o; a++) a in r && (i = t(i, r[a], a, n));
                    return i
                }
            }, !oe);
            var ie = !1;
            r.reduceRight && (ie = "object" == typeof r.reduceRight.call("es5", function (e, t, n, r) {
                    return r
                })), F(r, {
                reduceRight: function (t) {
                    var n = q.ToObject(this),
                        r = ne && O(this) ? V(this, "") : n,
                        o = q.ToUint32(r.length);
                    if (!e(t)) throw new TypeError("Array.prototype.reduceRight callback must be a function");
                    if (0 === o && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
                    var i, a = o - 1;
                    if (arguments.length >= 2) i = arguments[1];
                    else
                        for (;;) {
                            if (a in r) {
                                i = r[a--];
                                break
                            }
                            if (--a < 0) throw new TypeError("reduceRight of empty array with no initial value")
                        }
                    if (a < 0) return i;
                    do a in r && (i = t(i, r[a], a, n)); while (a--);
                    return i
                }
            }, !ie);
            var ae = r.indexOf && [0, 1].indexOf(1, 2) !== -1;
            F(r, {
                indexOf: function (e) {
                    var t = ne && O(this) ? V(this, "") : q.ToObject(this),
                        n = q.ToUint32(t.length);
                    if (0 === n) return -1;
                    var r = 0;
                    for (arguments.length > 1 && (r = q.ToInteger(arguments[1])), r = r >= 0 ? r : b(0, n + r); r < n; r++)
                        if (r in t && t[r] === e) return r;
                    return -1
                }
            }, ae);
            var se = r.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
            F(r, {
                lastIndexOf: function (e) {
                    var t = ne && O(this) ? V(this, "") : q.ToObject(this),
                        n = q.ToUint32(t.length);
                    if (0 === n) return -1;
                    var r = n - 1;
                    for (arguments.length > 1 && (r = x(r, q.ToInteger(arguments[1]))), r = r >= 0 ? r : n - Math.abs(r); r >= 0; r--)
                        if (r in t && e === t[r]) return r;
                    return -1
                }
            }, se);
            var ce = function () {
                var e = [1, 2],
                    t = e.splice();
                return 2 === e.length && Q(t) && 0 === t.length
            }();
            F(r, {
                splice: function (e, t) {
                    return 0 === arguments.length ? [] : p.apply(this, arguments)
                }
            }, !ce);
            var ue = function () {
                var e = {};
                return r.splice.call(e, 0, 0, 1), 1 === e.length
            }();
            F(r, {
                splice: function (e, t) {
                    if (0 === arguments.length) return [];
                    var n = arguments;
                    return this.length = b(q.ToInteger(this.length), 0), arguments.length > 0 && "number" != typeof t && (n = z(arguments), n.length < 2 ? X(n, this.length - e) : n[1] = q.ToInteger(t)), p.apply(this, n)
                }
            }, !ue);
            var le = function () {
                    var e = new n(1e5);
                    return e[8] = "x", e.splice(1, 1), 7 === e.indexOf("x")
                }(),
                fe = function () {
                    var e = 256,
                        t = [];
                    return t[e] = "a", t.splice(e + 1, 0, "b"), "a" === t[e]
                }();
            F(r, {
                splice: function (e, t) {
                    for (var n, r = q.ToObject(this), o = [], i = q.ToUint32(r.length), a = q.ToInteger(e), s = a < 0 ? b(i + a, 0) : x(a, i), u = x(b(q.ToInteger(t), 0), i - s), l = 0; l < u;) n = c(s + l), H(r, n) && (o[l] = r[n]), l += 1;
                    var f, d = z(arguments, 2),
                        p = d.length;
                    if (p < u) {
                        l = s;
                        for (var h = i - u; l < h;) n = c(l + u), f = c(l + p), H(r, n) ? r[f] = r[n] : delete r[f], l += 1;
                        l = i;
                        for (var g = i - u + p; l > g;) delete r[l - 1], l -= 1
                    } else if (p > u)
                        for (l = i - u; l > s;) n = c(l + u - 1), f = c(l + p - 1), H(r, n) ? r[f] = r[n] : delete r[f], l -= 1;
                    l = s;
                    for (var v = 0; v < d.length; ++v) r[l] = d[v], l += 1;
                    return r.length = i - u + p, o
                }
            }, !le || !fe);
            var de, pe = r.join;
            try {
                de = "1,2,3" !== Array.prototype.join.call("123", ",")
            } catch (he) {
                de = !0
            }
            de && F(r, {
                join: function (e) {
                    var t = "undefined" == typeof e ? "," : e;
                    return pe.call(O(this) ? V(this, "") : this, t)
                }
            }, de);
            var ge = "1,2" !== [1, 2].join(void 0);
            ge && F(r, {
                join: function (e) {
                    var t = "undefined" == typeof e ? "," : e;
                    return pe.call(this, t)
                }
            }, ge);
            var ve = function (e) {
                    for (var t = q.ToObject(this), n = q.ToUint32(t.length), r = 0; r < arguments.length;) t[n + r] = arguments[r], r += 1;
                    return t.length = n + r, n + r
                },
                me = function () {
                    var e = {},
                        t = Array.prototype.push.call(e, void 0);
                    return 1 !== t || 1 !== e.length || "undefined" != typeof e[0] || !H(e, 0)
                }();
            F(r, {
                push: function (e) {
                    return Q(this) ? h.apply(this, arguments) : ve.apply(this, arguments)
                }
            }, me);
            var ye = function () {
                var e = [],
                    t = e.push(void 0);
                return 1 !== t || 1 !== e.length || "undefined" != typeof e[0] || !H(e, 0)
            }();
            F(r, {
                push: ve
            }, ye), F(r, {
                slice: function (e, t) {
                    var n = O(this) ? V(this, "") : this;
                    return B(n, arguments)
                }
            }, ne);
            var we = function () {
                    try {
                        return [1, 2].sort(null), [1, 2].sort({}), !0
                    } catch (e) {}
                    return !1
                }(),
                be = function () {
                    try {
                        return [1, 2].sort(/a/), !1
                    } catch (e) {}
                    return !0
                }(),
                xe = function () {
                    try {
                        return [1, 2].sort(void 0), !0
                    } catch (e) {}
                    return !1
                }();
            F(r, {
                sort: function (t) {
                    if ("undefined" == typeof t) return Z(this);
                    if (!e(t)) throw new TypeError("Array.prototype.sort callback must be a function");
                    return Z(this, t)
                }
            }, we || !xe || !be);
            var _e = !K({
                    toString: null
                }, "toString"),
                Te = K(function () {}, "prototype"),
                Ee = !H("x", "0"),
                Ce = function (e) {
                    var t = e.constructor;
                    return t && t.prototype === e
                },
                ke = {
                    $window: !0,
                    $console: !0,
                    $parent: !0,
                    $self: !0,
                    $frame: !0,
                    $frames: !0,
                    $frameElement: !0,
                    $webkitIndexedDB: !0,
                    $webkitStorageInfo: !0,
                    $external: !0
                },
                je = function () {
                    if ("undefined" == typeof window) return !1;
                    for (var e in window) try {
                        !ke["$" + e] && H(window, e) && null !== window[e] && "object" == typeof window[e] && Ce(window[e])
                    } catch (t) {
                        return !0
                    }
                    return !1
                }(),
                Se = function (e) {
                    if ("undefined" == typeof window || !je) return Ce(e);
                    try {
                        return Ce(e)
                    } catch (t) {
                        return !1
                    }
                },
                Ge = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                Je = Ge.length,
                Ne = function (e) {
                    return "[object Arguments]" === P(e)
                },
                Ie = function (t) {
                    return null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && !Q(t) && e(t.callee)
                },
                Oe = Ne(arguments) ? Ne : Ie;
            F(o, {
                keys: function (t) {
                    var n = e(t),
                        r = Oe(t),
                        o = null !== t && "object" == typeof t,
                        i = o && O(t);
                    if (!o && !n && !r) throw new TypeError("Object.keys called on a non-object");
                    var a = [],
                        s = Te && n;
                    if (i && Ee || r)
                        for (var u = 0; u < t.length; ++u) X(a, c(u));
                    if (!r)
                        for (var l in t) s && "prototype" === l || !H(t, l) || X(a, c(l));
                    if (_e)
                        for (var f = Se(t), d = 0; d < Je; d++) {
                            var p = Ge[d];
                            f && "constructor" === p || !H(t, p) || X(a, p)
                        }
                    return a
                }
            });
            var De = o.keys && function () {
                        return 2 === o.keys(arguments).length
                    }(1, 2),
                Ae = o.keys && function () {
                        var e = o.keys(arguments);
                        return 1 !== arguments.length || 1 !== e.length || 1 !== e[0]
                    }(1),
                Le = o.keys;
            F(o, {
                keys: function (e) {
                    return Le(Oe(e) ? z(e) : e)
                }
            }, !De || Ae);
            var Ue, Fe, Re = 0 !== new Date((-0xc782b5b342b24)).getUTCMonth(),
                Me = new Date((-0x55d318d56a724)),
                qe = new Date(14496624e5),
                $e = "Mon, 01 Jan -45875 11:59:59 GMT" !== Me.toUTCString(),
                He = Me.getTimezoneOffset();
            He < -720 ? (Ue = "Tue Jan 02 -45875" !== Me.toDateString(), Fe = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(qe.toString())) : (Ue = "Mon Jan 01 -45875" !== Me.toDateString(), Fe = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(qe.toString()));
            var Pe = y.bind(Date.prototype.getFullYear),
                ze = y.bind(Date.prototype.getMonth),
                Be = y.bind(Date.prototype.getDate),
                We = y.bind(Date.prototype.getUTCFullYear),
                Ve = y.bind(Date.prototype.getUTCMonth),
                Ye = y.bind(Date.prototype.getUTCDate),
                Xe = y.bind(Date.prototype.getUTCDay),
                Ke = y.bind(Date.prototype.getUTCHours),
                Ze = y.bind(Date.prototype.getUTCMinutes),
                Qe = y.bind(Date.prototype.getUTCSeconds),
                et = y.bind(Date.prototype.getUTCMilliseconds),
                tt = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                nt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                rt = function (e, t) {
                    return Be(new Date(t, e, 0))
                };
            F(Date.prototype, {
                getFullYear: function () {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = Pe(this);
                    return e < 0 && ze(this) > 11 ? e + 1 : e
                }, getMonth: function () {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = Pe(this),
                        t = ze(this);
                    return e < 0 && t > 11 ? 0 : t
                }, getDate: function () {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = Pe(this),
                        t = ze(this),
                        n = Be(this);
                    if (e < 0 && t > 11) {
                        if (12 === t) return n;
                        var r = rt(0, e + 1);
                        return r - n + 1
                    }
                    return n
                }, getUTCFullYear: function () {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = We(this);
                    return e < 0 && Ve(this) > 11 ? e + 1 : e
                }, getUTCMonth: function () {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = We(this),
                        t = Ve(this);
                    return e < 0 && t > 11 ? 0 : t
                }, getUTCDate: function () {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = We(this),
                        t = Ve(this),
                        n = Ye(this);
                    if (e < 0 && t > 11) {
                        if (12 === t) return n;
                        var r = rt(0, e + 1);
                        return r - n + 1
                    }
                    return n
                }
            }, Re), F(Date.prototype, {
                toUTCString: function () {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = Xe(this),
                        t = Ye(this),
                        n = Ve(this),
                        r = We(this),
                        o = Ke(this),
                        i = Ze(this),
                        a = Qe(this);
                    return tt[e] + ", " + (t < 10 ? "0" + t : t) + " " + nt[n] + " " + r + " " + (o < 10 ? "0" + o : o) + ":" + (i < 10 ? "0" + i : i) + ":" + (a < 10 ? "0" + a : a) + " GMT"
                }
            }, Re || $e), F(Date.prototype, {
                toDateString: function () {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = this.getDay(),
                        t = this.getDate(),
                        n = this.getMonth(),
                        r = this.getFullYear();
                    return tt[e] + " " + nt[n] + " " + (t < 10 ? "0" + t : t) + " " + r
                }
            }, Re || Ue), (Re || Fe) && (Date.prototype.toString = function () {
                if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                var e = this.getDay(),
                    t = this.getDate(),
                    n = this.getMonth(),
                    r = this.getFullYear(),
                    o = this.getHours(),
                    i = this.getMinutes(),
                    a = this.getSeconds(),
                    s = this.getTimezoneOffset(),
                    c = Math.floor(Math.abs(s) / 60),
                    u = Math.floor(Math.abs(s) % 60);
                return tt[e] + " " + nt[n] + " " + (t < 10 ? "0" + t : t) + " " + r + " " + (o < 10 ? "0" + o : o) + ":" + (i < 10 ? "0" + i : i) + ":" + (a < 10 ? "0" + a : a) + " GMT" + (s > 0 ? "-" : "+") + (c < 10 ? "0" + c : c) + (u < 10 ? "0" + u : u)
            }, U && o.defineProperty(Date.prototype, "toString", {
                configurable: !0,
                enumerable: !1,
                writable: !0
            }));
            var ot = -621987552e5,
                it = "-000001",
                at = Date.prototype.toISOString && new Date(ot).toISOString().indexOf(it) === -1,
                st = Date.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new Date((-1)).toISOString(),
                ct = y.bind(Date.prototype.getTime);
            F(Date.prototype, {
                toISOString: function () {
                    if (!isFinite(this) || !isFinite(ct(this))) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
                    var e = We(this),
                        t = Ve(this);
                    e += Math.floor(t / 12), t = (t % 12 + 12) % 12;
                    var n = [t + 1, Ye(this), Ke(this), Ze(this), Qe(this)];
                    e = (e < 0 ? "-" : e > 9999 ? "+" : "") + W("00000" + Math.abs(e), 0 <= e && e <= 9999 ? -4 : -6);
                    for (var r = 0; r < n.length; ++r) n[r] = W("00" + n[r], -2);
                    return e + "-" + z(n, 0, 2).join("-") + "T" + z(n, 2).join(":") + "." + W("000" + et(this), -3) + "Z"
                }
            }, at || st);
            var ut = function () {
                try {
                    return Date.prototype.toJSON && null === new Date(NaN).toJSON() && new Date(ot).toJSON().indexOf(it) !== -1 && Date.prototype.toJSON.call({
                            toISOString: function () {
                                return !0
                            }
                        })
                } catch (e) {
                    return !1
                }
            }();
            ut || (Date.prototype.toJSON = function (t) {
                var n = o(this),
                    r = q.ToPrimitive(n);
                if ("number" == typeof r && !isFinite(r)) return null;
                var i = n.toISOString;
                if (!e(i)) throw new TypeError("toISOString property is not callable");
                return i.call(n)
            });
            var lt = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
                ft = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z")),
                dt = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
            if (dt || ft || !lt) {
                var pt = Math.pow(2, 31) - 1,
                    ht = M(new Date(1970, 0, 1, 0, 0, 0, pt + 1).getTime());
                Date = function (e) {
                    var t = function (n, r, o, i, a, s, u) {
                            var l, f = arguments.length;
                            if (this instanceof e) {
                                var d = s,
                                    p = u;
                                if (ht && f >= 7 && u > pt) {
                                    var h = Math.floor(u / pt) * pt,
                                        g = Math.floor(h / 1e3);
                                    d += g, p -= 1e3 * g
                                }
                                l = 1 === f && c(n) === n ? new e(t.parse(n)) : f >= 7 ? new e(n, r, o, i, a, d, p) : f >= 6 ? new e(n, r, o, i, a, d) : f >= 5 ? new e(n, r, o, i, a) : f >= 4 ? new e(n, r, o, i) : f >= 3 ? new e(n, r, o) : f >= 2 ? new e(n, r) : f >= 1 ? new e(n instanceof e ? +n : n) : new e
                            } else l = e.apply(this, arguments);
                            return R(l) || F(l, {
                                constructor: t
                            }, !0), l
                        },
                        n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
                        r = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
                        o = function (e, t) {
                            var n = t > 1 ? 1 : 0;
                            return r[t] + Math.floor((e - 1969 + n) / 4) - Math.floor((e - 1901 + n) / 100) + Math.floor((e - 1601 + n) / 400) + 365 * (e - 1970)
                        },
                        i = function (t) {
                            var n = 0,
                                r = t;
                            if (ht && r > pt) {
                                var o = Math.floor(r / pt) * pt,
                                    i = Math.floor(o / 1e3);
                                n += i, r -= 1e3 * i
                            }
                            return l(new e(1970, 0, 1, 0, 0, n, r))
                        };
                    for (var a in e) H(e, a) && (t[a] = e[a]);
                    F(t, {
                        now: e.now,
                        UTC: e.UTC
                    }, !0), t.prototype = e.prototype, F(t.prototype, {
                        constructor: t
                    }, !0);
                    var s = function (t) {
                        var r = n.exec(t);
                        if (r) {
                            var a, s = l(r[1]),
                                c = l(r[2] || 1) - 1,
                                u = l(r[3] || 1) - 1,
                                f = l(r[4] || 0),
                                d = l(r[5] || 0),
                                p = l(r[6] || 0),
                                h = Math.floor(1e3 * l(r[7] || 0)),
                                g = Boolean(r[4] && !r[8]),
                                v = "-" === r[9] ? 1 : -1,
                                m = l(r[10] || 0),
                                y = l(r[11] || 0),
                                w = d > 0 || p > 0 || h > 0;
                            return f < (w ? 24 : 25) && d < 60 && p < 60 && h < 1e3 && c > -1 && c < 12 && m < 24 && y < 60 && u > -1 && u < o(s, c + 1) - o(s, c) && (a = 60 * (24 * (o(s, c) + u) + f + m * v), a = 1e3 * (60 * (a + d + y * v) + p) + h, g && (a = i(a)), -864e13 <= a && a <= 864e13) ? a : NaN
                        }
                        return e.parse.apply(this, arguments)
                    };
                    return F(t, {
                        parse: s
                    }), t
                }(Date)
            }
            Date.now || (Date.now = function () {
                return (new Date).getTime()
            });
            var gt = f.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)),
                vt = {
                    base: 1e7,
                    size: 6,
                    data: [0, 0, 0, 0, 0, 0],
                    multiply: function (e, t) {
                        for (var n = -1, r = t; ++n < vt.size;) r += e * vt.data[n], vt.data[n] = r % vt.base, r = Math.floor(r / vt.base)
                    }, divide: function (e) {
                        for (var t = vt.size, n = 0; --t >= 0;) n += vt.data[t], vt.data[t] = Math.floor(n / e), n = n % e * vt.base
                    }, numToString: function () {
                        for (var e = vt.size, t = ""; --e >= 0;)
                            if ("" !== t || 0 === e || 0 !== vt.data[e]) {
                                var n = c(vt.data[e]);
                                "" === t ? t = n : t += W("0000000", 0, 7 - n.length) + n
                            }
                        return t
                    }, pow: function Lt(e, t, n) {
                        return 0 === t ? n : t % 2 === 1 ? Lt(e, t - 1, n * e) : Lt(e * e, t / 2, n)
                    }, log: function (e) {
                        for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
                        for (; n >= 2;) t += 1, n /= 2;
                        return t
                    }
                },
                mt = function (e) {
                    var t, n, r, o, i, a, s, u;
                    if (t = l(e), t = M(t) ? 0 : Math.floor(t), t < 0 || t > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
                    if (n = l(this), M(n)) return "NaN";
                    if (n <= -1e21 || n >= 1e21) return c(n);
                    if (r = "", n < 0 && (r = "-", n = -n), o = "0", n > 1e-21)
                        if (i = vt.log(n * vt.pow(2, 69, 1)) - 69, a = i < 0 ? n * vt.pow(2, -i, 1) : n / vt.pow(2, i, 1), a *= 4503599627370496, i = 52 - i, i > 0) {
                            for (vt.multiply(0, a), s = t; s >= 7;) vt.multiply(1e7, 0), s -= 7;
                            for (vt.multiply(vt.pow(10, s, 1), 0), s = i - 1; s >= 23;) vt.divide(1 << 23), s -= 23;
                            vt.divide(1 << s), vt.multiply(1, 1), vt.divide(2), o = vt.numToString()
                        } else vt.multiply(0, a), vt.multiply(1 << -i, 0), o = vt.numToString() + W("0.00000000000000000000", 2, 2 + t);
                    return t > 0 ? (u = o.length, o = u <= t ? r + W("0.0000000000000000000", 0, t - u + 2) + o : r + W(o, 0, u - t) + "." + W(o, u - t)) : o = r + o, o
                };
            F(f, {
                toFixed: mt
            }, gt);
            var yt = function () {
                    try {
                        return "1" === 1..toPrecision(void 0)
                    } catch (e) {
                        return !0
                    }
                }(),
                wt = f.toPrecision;
            F(f, {
                toPrecision: function (e) {
                    return "undefined" == typeof e ? wt.call(this) : wt.call(this, e)
                }
            }, yt), 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? ! function () {
                var e = "undefined" == typeof / () ? ? /.exec("")[1],n=Math.pow(2,32)-1;u.split=function(r,o){var i=String(this);if("undefined"==typeof r&&0===o)return[];if(!t(r))return V(this,r,o);var a,s,c,u,l=[],f=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(r.sticky?"y":""),d=0,p=new RegExp(r.source,f+"g");e||(a=new RegExp("^"+p.source+"$(?!\\s)",f));var g="undefined"==typeof o?n:q.ToUint32(o);for(s=p.exec(i);s&&(c=s.index+s[0].length,!(c>d&&(X(l,W(i,d,s.index)),!e&&s.length>1&&s[0].replace(a,function(){for(var e=1;e<arguments.length-2;e++)"undefined"==typeof arguments[e]&&(s[e]=void 0)}),s.length>1&&s.index<i.length&&h.apply(l,z(s,1)),u=s[0].length,d=c,l.length>=g)));)p.lastIndex===s.index&&p.lastIndex++,s=p.exec(i);return d===i.length?!u&&p.test("")||X(l,""):X(l,W(i,d)),l.length>g?z(l,0,g):l}}():"0".split(void 0,0).length&&(u.split=function(e,t){return"undefined"==typeof e&&0===t?[]:V(this,e,t)});var bt=u.replace,xt=function(){var e=[];return"x".replace(/x (.) ? /g,function(t,n){X(e,n)}),1===e.length&&"undefined"==typeof e[0]}();xt||(u.replace=function(n,r){var o=e(r),i=t(n)&&/\)[ * ? ] / .test(n.source);
                if (o && i) {
                    var a = function (e) {
                        var t = arguments.length,
                            o = n.lastIndex;
                        n.lastIndex = 0;
                        var i = n.exec(e) || [];
                        return n.lastIndex = o, X(i, arguments[t - 2], arguments[t - 1]), r.apply(this, i)
                    };
                    return bt.call(this, n, a)
                }
                return bt.call(this, n, r)
            });
            var _t = u.substr,
                Tt = "".substr && "b" !== "0b".substr(-1);
            F(u, {
                substr: function (e, t) {
                    var n = e;
                    return e < 0 && (n = b(this.length + e, 0)), _t.call(this, n, t)
                }
            }, Tt);
            var Et = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff",
                Ct = "​",
                kt = "[" + Et + "]",
                jt = new RegExp("^" + kt + kt + "*"),
                St = new RegExp(kt + kt + "*$"),
                Gt = u.trim && (Et.trim() || !Ct.trim());
            F(u, {
                trim: function () {
                    if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                    return c(this).replace(jt, "").replace(St, "")
                }
            }, Gt);
            var Jt = y.bind(String.prototype.trim),
                Nt = u.lastIndexOf && "abcあい".lastIndexOf("あい", 2) !== -1;
            F(u, {
                lastIndexOf: function (e) {
                    if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                    for (var t = c(this), n = c(e), r = arguments.length > 1 ? l(arguments[1]) : NaN, o = M(r) ? 1 / 0 : q.ToInteger(r), i = x(b(o, 0), t.length), a = n.length, s = i + a; s > 0;) {
                        s = b(0, s - a);
                        var u = Y(W(t, s, i + a), n);
                        if (u !== -1) return s + u
                    }
                    return -1
                }
            }, Nt);
            var It = u.lastIndexOf;
            if (F(u, {
                    lastIndexOf: function (e) {
                        return It.apply(this, arguments)
                    }
                }, 1 !== u.lastIndexOf.length), 8 === parseInt(Et + "08") && 22 === parseInt(Et + "0x16") || (parseInt = function (e) {
                    var t = /^[\-+]?0[xX]/;
                    return function (n, r) {
                        var o = Jt(String(n)),
                            i = l(r) || (t.test(o) ? 16 : 10);
                        return e(o, i)
                    }
                }(parseInt)), 1 / parseFloat("-0") !== -(1 / 0) && (parseFloat = function (e) {
                    return function (t) {
                        var n = Jt(String(t)),
                            r = e(n);
                        return 0 === r && "-" === W(n, 0, 1) ? -0 : r
                    }
                }(parseFloat)), "RangeError: test" !== String(new RangeError("test"))) {
                var Ot = function () {
                    if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
                    var e = this.name;
                    "undefined" == typeof e ? e = "Error" : "string" != typeof e && (e = c(e));
                    var t = this.message;
                    return "undefined" == typeof t ? t = "" : "string" != typeof t && (t = c(t)), e ? t ? e + ": " + t : e : t
                };
                Error.prototype.toString = Ot
            }
            if (U) {
                var Dt = function (e, t) {
                    if (K(e, t)) {
                        var n = Object.getOwnPropertyDescriptor(e, t);
                        n.configurable && (n.enumerable = !1, Object.defineProperty(e, t, n))
                    }
                };
                Dt(Error.prototype, "message"), "" !== Error.prototype.message && (Error.prototype.message = ""), Dt(Error.prototype, "name")
            }
            if ("/a/gim" !== String(/a/gim)) {
                var At = function () {
                    var e = "/" + this.source + "/";
                    return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), e
                };
                RegExp.prototype.toString = At
            }
        })
    }, 195: function (e, t) {
        "use strict";
        var n = Object.prototype.hasOwnProperty,
            r = Object.prototype.toString,
            o = function (e) {
                return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === r.call(e)
            },
            i = function (e) {
                if (!e || "[object Object]" !== r.call(e)) return !1;
                var t = n.call(e, "constructor"),
                    o = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
                if (e.constructor && !t && !o) return !1;
                var i;
                for (i in e);
                return "undefined" == typeof i || n.call(e, i)
            };
        e.exports = function a() {
            var e, t, n, r, s, c, u = arguments[0],
                l = 1,
                f = arguments.length,
                d = !1;
            for ("boolean" == typeof u ? (d = u, u = arguments[1] || {}, l = 2) : ("object" != typeof u && "function" != typeof u || null == u) && (u = {}); l < f; ++l)
                if (e = arguments[l], null != e)
                    for (t in e) n = u[t], r = e[t], u !== r && (d && r && (i(r) || (s = o(r))) ? (s ? (s = !1, c = n && o(n) ? n : []) : c = n && i(n) ? n : {}, u[t] = a(d, c, r)) : "undefined" != typeof r && (u[t] = r));
            return u
        }
    }, 550: function (e, t, n) {
        var r;
        (function (e, o) {
            (function () {
                function i(e, t) {
                    function n(e) {
                        if (n[e] !== v) return n[e];
                        var i;
                        if ("bug-string-char-index" == e) i = "a" != "a" [0];
                        else if ("json" == e) i = n("json-stringify") && n("json-parse");
                        else {
                            var a, s = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                            if ("json-stringify" == e) {
                                var u = t.stringify,
                                    l = "function" == typeof u && w;
                                if (l) {
                                    (a = function () {
                                        return 1
                                    }).toJSON = a;
                                    try {
                                        l = "0" === u(0) && "0" === u(new r) && '""' == u(new o) && u(y) === v && u(v) === v && u() === v && "1" === u(a) && "[1]" == u([a]) && "[null]" == u([v]) && "null" == u(null) && "[null,null,null]" == u([v, y, null]) && u({
                                                a: [a, !0, !1, null, "\0\b\n\f\r\t"]
                                            }) == s && "1" === u(null, a) && "[\n 1,\n 2\n]" == u([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == u(new c((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == u(new c(864e13)) && '"-000001-01-01T00:00:00.000Z"' == u(new c((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == u(new c((-1)))
                                    } catch (f) {
                                        l = !1
                                    }
                                }
                                i = l
                            }
                            if ("json-parse" == e) {
                                var d = t.parse;
                                if ("function" == typeof d) try {
                                    if (0 === d("0") && !d(!1)) {
                                        a = d(s);
                                        var p = 5 == a.a.length && 1 === a.a[0];
                                        if (p) {
                                            try {
                                                p = !d('"\t"')
                                            } catch (f) {}
                                            if (p) try {
                                                p = 1 !== d("01")
                                            } catch (f) {}
                                            if (p) try {
                                                p = 1 !== d("1.")
                                            } catch (f) {}
                                        }
                                    }
                                } catch (f) {
                                    p = !1
                                }
                                i = p
                            }
                        }
                        return n[e] = !!i
                    }
                    e || (e = u.Object()), t || (t = u.Object());
                    var r = e.Number || u.Number,
                        o = e.String || u.String,
                        a = e.Object || u.Object,
                        c = e.Date || u.Date,
                        l = e.SyntaxError || u.SyntaxError,
                        f = e.TypeError || u.TypeError,
                        d = e.Math || u.Math,
                        p = e.JSON || u.JSON;
                    "object" == typeof p && p && (t.stringify = p.stringify, t.parse = p.parse);
                    var h, g, v, m = a.prototype,
                        y = m.toString,
                        w = new c((-0xc782b5b800cec));
                    try {
                        w = w.getUTCFullYear() == -109252 && 0 === w.getUTCMonth() && 1 === w.getUTCDate() && 10 == w.getUTCHours() && 37 == w.getUTCMinutes() && 6 == w.getUTCSeconds() && 708 == w.getUTCMilliseconds()
                    } catch (b) {}
                    if (!n("json")) {
                        var x = "[object Function]",
                            _ = "[object Date]",
                            T = "[object Number]",
                            E = "[object String]",
                            C = "[object Array]",
                            k = "[object Boolean]",
                            j = n("bug-string-char-index");
                        if (!w) var S = d.floor,
                            G = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                            J = function (e, t) {
                                return G[t] + 365 * (e - 1970) + S((e - 1969 + (t = +(t > 1))) / 4) - S((e - 1901 + t) / 100) + S((e - 1601 + t) / 400)
                            };
                        if ((h = m.hasOwnProperty) || (h = function (e) {
                                var t, n = {};
                                return (n.__proto__ = null, n.__proto__ = {
                                    toString: 1
                                }, n).toString != y ? h = function (e) {
                                    var t = this.__proto__,
                                        n = e in (this.__proto__ = null, this);
                                    return this.__proto__ = t, n
                                } : (t = n.constructor, h = function (e) {
                                    var n = (this.constructor || t).prototype;
                                    return e in this && !(e in n && this[e] === n[e])
                                }), n = null, h.call(this, e)
                            }), g = function (e, t) {
                                var n, r, o, i = 0;
                                (n = function () {
                                    this.valueOf = 0
                                }).prototype.valueOf = 0, r = new n;
                                for (o in r) h.call(r, o) && i++;
                                return n = r = null, i ? g = 2 == i ? function (e, t) {
                                    var n, r = {},
                                        o = y.call(e) == x;
                                    for (n in e) o && "prototype" == n || h.call(r, n) || !(r[n] = 1) || !h.call(e, n) || t(n)
                                } : function (e, t) {
                                    var n, r, o = y.call(e) == x;
                                    for (n in e) o && "prototype" == n || !h.call(e, n) || (r = "constructor" === n) || t(n);
                                    (r || h.call(e, n = "constructor")) && t(n)
                                } : (r = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], g = function (e, t) {
                                    var n, o, i = y.call(e) == x,
                                        a = !i && "function" != typeof e.constructor && s[typeof e.hasOwnProperty] && e.hasOwnProperty || h;
                                    for (n in e) i && "prototype" == n || !a.call(e, n) || t(n);
                                    for (o = r.length; n = r[--o]; a.call(e, n) && t(n));
                                }), g(e, t)
                            }, !n("json-stringify")) {
                            var N = {
                                    92: "\\\\",
                                    34: '\\"',
                                    8: "\\b",
                                    12: "\\f",
                                    10: "\\n",
                                    13: "\\r",
                                    9: "\\t"
                                },
                                I = "000000",
                                O = function (e, t) {
                                    return (I + (t || 0)).slice(-e)
                                },
                                D = "\\u00",
                                A = function (e) {
                                    for (var t = '"', n = 0, r = e.length, o = !j || r > 10, i = o && (j ? e.split("") : e); n < r; n++) {
                                        var a = e.charCodeAt(n);
                                        switch (a) {
                                            case 8:
                                            case 9:
                                            case 10:
                                            case 12:
                                            case 13:
                                            case 34:
                                            case 92:
                                                t += N[a];
                                                break;
                                            default:
                                                if (a < 32) {
                                                    t += D + O(2, a.toString(16));
                                                    break
                                                }
                                                t += o ? i[n] : e.charAt(n)
                                        }
                                    }
                                    return t + '"'
                                },
                                L = function (e, t, n, r, o, i, a) {
                                    var s, c, u, l, d, p, m, w, b, x, j, G, N, I, D, U;
                                    try {
                                        s = t[e]
                                    } catch (F) {}
                                    if ("object" == typeof s && s)
                                        if (c = y.call(s), c != _ || h.call(s, "toJSON")) "function" == typeof s.toJSON && (c != T && c != E && c != C || h.call(s, "toJSON")) && (s = s.toJSON(e));
                                        else if (s > -1 / 0 && s < 1 / 0) {
                                            if (J) {
                                                for (d = S(s / 864e5), u = S(d / 365.2425) + 1970 - 1; J(u + 1, 0) <= d; u++);
                                                for (l = S((d - J(u, 0)) / 30.42); J(u, l + 1) <= d; l++);
                                                d = 1 + d - J(u, l), p = (s % 864e5 + 864e5) % 864e5, m = S(p / 36e5) % 24, w = S(p / 6e4) % 60, b = S(p / 1e3) % 60, x = p % 1e3
                                            } else u = s.getUTCFullYear(), l = s.getUTCMonth(), d = s.getUTCDate(), m = s.getUTCHours(), w = s.getUTCMinutes(), b = s.getUTCSeconds(), x = s.getUTCMilliseconds();
                                            s = (u <= 0 || u >= 1e4 ? (u < 0 ? "-" : "+") + O(6, u < 0 ? -u : u) : O(4, u)) + "-" + O(2, l + 1) + "-" + O(2, d) + "T" + O(2, m) + ":" + O(2, w) + ":" + O(2, b) + "." + O(3, x) + "Z"
                                        } else s = null; if (n && (s = n.call(t, e, s)), null === s) return "null";
                                    if (c = y.call(s), c == k) return "" + s;
                                    if (c == T) return s > -1 / 0 && s < 1 / 0 ? "" + s : "null";
                                    if (c == E) return A("" + s);
                                    if ("object" == typeof s) {
                                        for (I = a.length; I--;)
                                            if (a[I] === s) throw f();
                                        if (a.push(s), j = [], D = i, i += o, c == C) {
                                            for (N = 0, I = s.length; N < I; N++) G = L(N, s, n, r, o, i, a), j.push(G === v ? "null" : G);
                                            U = j.length ? o ? "[\n" + i + j.join(",\n" + i) + "\n" + D + "]" : "[" + j.join(",") + "]" : "[]"
                                        } else g(r || s, function (e) {
                                            var t = L(e, s, n, r, o, i, a);
                                            t !== v && j.push(A(e) + ":" + (o ? " " : "") + t)
                                        }), U = j.length ? o ? "{\n" + i + j.join(",\n" + i) + "\n" + D + "}" : "{" + j.join(",") + "}" : "{}";
                                        return a.pop(), U
                                    }
                                };
                            t.stringify = function (e, t, n) {
                                var r, o, i, a;
                                if (s[typeof t] && t)
                                    if ((a = y.call(t)) == x) o = t;
                                    else if (a == C) {
                                        i = {};
                                        for (var c, u = 0, l = t.length; u < l; c = t[u++], a = y.call(c), (a == E || a == T) && (i[c] = 1));
                                    }
                                if (n)
                                    if ((a = y.call(n)) == T) {
                                        if ((n -= n % 1) > 0)
                                            for (r = "", n > 10 && (n = 10); r.length < n; r += " ");
                                    } else a == E && (r = n.length <= 10 ? n : n.slice(0, 10));
                                return L("", (c = {}, c[""] = e, c), o, i, r, "", [])
                            }
                        }
                        if (!n("json-parse")) {
                            var U, F, R = o.fromCharCode,
                                M = {
                                    92: "\\",
                                    34: '"',
                                    47: "/",
                                    98: "\b",
                                    116: "\t",
                                    110: "\n",
                                    102: "\f",
                                    114: "\r"
                                },
                                q = function () {
                                    throw U = F = null, l()
                                },
                                $ = function () {
                                    for (var e, t, n, r, o, i = F, a = i.length; U < a;) switch (o = i.charCodeAt(U)) {
                                        case 9:
                                        case 10:
                                        case 13:
                                        case 32:
                                            U++;
                                            break;
                                        case 123:
                                        case 125:
                                        case 91:
                                        case 93:
                                        case 58:
                                        case 44:
                                            return e = j ? i.charAt(U) : i[U], U++, e;
                                        case 34:
                                            for (e = "@", U++; U < a;)
                                                if (o = i.charCodeAt(U), o < 32) q();
                                                else if (92 == o) switch (o = i.charCodeAt(++U)) {
                                                    case 92:
                                                    case 34:
                                                    case 47:
                                                    case 98:
                                                    case 116:
                                                    case 110:
                                                    case 102:
                                                    case 114:
                                                        e += M[o], U++;
                                                        break;
                                                    case 117:
                                                        for (t = ++U, n = U + 4; U < n; U++) o = i.charCodeAt(U), o >= 48 && o <= 57 || o >= 97 && o <= 102 || o >= 65 && o <= 70 || q();
                                                        e += R("0x" + i.slice(t, U));
                                                        break;
                                                    default:
                                                        q()
                                                } else {
                                                    if (34 == o) break;
                                                    for (o = i.charCodeAt(U), t = U; o >= 32 && 92 != o && 34 != o;) o = i.charCodeAt(++U);
                                                    e += i.slice(t, U)
                                                } if (34 == i.charCodeAt(U)) return U++, e;
                                            q();
                                        default:
                                            if (t = U, 45 == o && (r = !0, o = i.charCodeAt(++U)), o >= 48 && o <= 57) {
                                                for (48 == o && (o = i.charCodeAt(U + 1), o >= 48 && o <= 57) && q(), r = !1; U < a && (o = i.charCodeAt(U), o >= 48 && o <= 57); U++);
                                                if (46 == i.charCodeAt(U)) {
                                                    for (n = ++U; n < a && (o = i.charCodeAt(n), o >= 48 && o <= 57); n++);
                                                    n == U && q(), U = n
                                                }
                                                if (o = i.charCodeAt(U), 101 == o || 69 == o) {
                                                    for (o = i.charCodeAt(++U), 43 != o && 45 != o || U++, n = U; n < a && (o = i.charCodeAt(n), o >= 48 && o <= 57); n++);
                                                    n == U && q(), U = n
                                                }
                                                return +i.slice(t, U)
                                            }
                                            if (r && q(), "true" == i.slice(U, U + 4)) return U += 4, !0;
                                            if ("false" == i.slice(U, U + 5)) return U += 5, !1;
                                            if ("null" == i.slice(U, U + 4)) return U += 4, null;
                                            q()
                                    }
                                    return "$"
                                },
                                H = function (e) {
                                    var t, n;
                                    if ("$" == e && q(), "string" == typeof e) {
                                        if ("@" == (j ? e.charAt(0) : e[0])) return e.slice(1);
                                        if ("[" == e) {
                                            for (t = []; e = $(), "]" != e; n || (n = !0)) n && ("," == e ? (e = $(), "]" == e && q()) : q()), "," == e && q(), t.push(H(e));
                                            return t
                                        }
                                        if ("{" == e) {
                                            for (t = {}; e = $(), "}" != e; n || (n = !0)) n && ("," == e ? (e = $(), "}" == e && q()) : q()), "," != e && "string" == typeof e && "@" == (j ? e.charAt(0) : e[0]) && ":" == $() || q(), t[e.slice(1)] = H($());
                                            return t
                                        }
                                        q()
                                    }
                                    return e
                                },
                                P = function (e, t, n) {
                                    var r = z(e, t, n);
                                    r === v ? delete e[t] : e[t] = r
                                },
                                z = function (e, t, n) {
                                    var r, o = e[t];
                                    if ("object" == typeof o && o)
                                        if (y.call(o) == C)
                                            for (r = o.length; r--;) P(o, r, n);
                                        else g(o, function (e) {
                                            P(o, e, n)
                                        });
                                    return n.call(e, t, o)
                                };
                            t.parse = function (e, t) {
                                var n, r;
                                return U = 0, F = "" + e, n = H($()), "$" != $() && q(), U = F = null, t && y.call(t) == x ? z((r = {}, r[""] = n, r), "", t) : n
                            }
                        }
                    }
                    return t.runInContext = i, t
                }
                var a = n(10),
                    s = {
                        "function": !0,
                        object: !0
                    },
                    c = s[typeof t] && t && !t.nodeType && t,
                    u = s[typeof window] && window || this,
                    l = c && s[typeof e] && e && !e.nodeType && "object" == typeof o && o;
                if (!l || l.global !== l && l.window !== l && l.self !== l || (u = l), c && !a) i(u, c);
                else {
                    var f = u.JSON,
                        d = u.JSON3,
                        p = !1,
                        h = i(u, u.JSON3 = {
                            noConflict: function () {
                                return p || (p = !0, u.JSON = f, u.JSON3 = d, f = d = null), h
                            }
                        });
                    u.JSON = {
                        parse: h.parse,
                        stringify: h.stringify
                    }
                }
                a && (r = function () {
                    return h
                }.call(t, n, t, e), !(void 0 !== r && (e.exports = r)))
            }).call(this)
        }).call(t, n(12)(e), function () {
            return this
        }())
    }
});