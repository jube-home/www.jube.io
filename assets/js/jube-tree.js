(function () {
  var root = document.getElementById('jtree');
  if (!root) return;
  var TR = window.JUBE_TREE || [];
  var JT = window.JUBE_TOOLS || { ops: {}, leaf: {} };
  if (!TR.length) return;

  var T = 'oklch(66% 0.11 180)', TL = 'oklch(84% 0.08 180)', W = 'oklch(98.8% 0.003 100)',
      LN = 'oklch(86% 0.01 100)', BD = 'oklch(80% 0.07 180)', LK = 'oklch(80% 0.07 180)';
  var KC = { R: ['oklch(95% 0.03 180)', LK, 'read'], W: ['oklch(95% 0.06 85)', 'oklch(78% 0.13 85)', 'write'], D: ['oklch(92% 0.09 65)', 'oklch(64% 0.16 55)', 'delete'] };

  var state = { th: 3, tg: 2, tl: 0, hv: null };

  function cnt(h) { return h.g.reduce(function (a, g) { return a + g[1].length; }, 0); }
  var total = TR.reduce(function (a, h) { return a + cnt(h); }, 0);

  function curve(x1, y1, x2, y2, c, w, o) {
    return { d: 'M' + x1 + ' ' + y1 + ' C' + ((x1 + x2) / 2) + ' ' + y1 + ' ' + ((x1 + x2) / 2) + ' ' + y2 + ' ' + x2 + ' ' + y2, c: c, w: w, o: o };
  }
  function hInfo(h) { return { t: h.n, k: 'Herd · Tier 2', m: h.g.filter(function (g) { return !g[2]; }).length + ' Gaze Gatherers · ' + cnt(h) + ' Joobriks', d: h.d }; }
  function gInfo(g) { return { t: g[0], k: (g[2] ? 'Straight through · Tier 3' : 'Gaze Gatherer · Tier 3'), m: g[1].length + ' Joobrik' + (g[1].length > 1 ? 's' : ''), d: g[2] ? 'No Gaze Gatherer needed. The Herd hands the question straight to the Joobrik that owns the job.' : 'Holds no tools of its own. Routes each question to the right Joobrik: ' + g[1].map(function (l) { return l[0].replace(/^Entity Analysis Model /, ''); }).join(', ') + '.' }; }
  function lInfo(l) { return { t: l[0].replace(/^Entity Analysis Model /, ''), k: 'Joobrik · Tier 4 · ' + (l[3] ? 'write' : 'read-only'), m: l[2] + ' tool' + (l[2] > 1 ? 's' : ''), d: l[1] }; }
  function dflt(h, g, li) {
    if (g && g[1][li]) return lInfo(g[1][li]);
    return g ? gInfo(g) : hInfo(h);
  }
  function toolInfo(n) {
    var o = (JT.ops && JT.ops[n]) || ['R', '', ''], p = o[1] || '', ll = /landlord/.test(p);
    var ids = p.replace(/landlord,?\s*/, '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
    return { t: n, k: 'Tool · ' + KC[o[0]][2] + (ll ? ' · landlord only' : ''), m: ids.length ? 'Permission ' + ids.slice(0, 3).join(', ') + (ids.length > 3 ? '…' : '') : '', d: o[2] };
  }

  function infoHtml(t) {
    return '<div style="display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 12px"><span class="text-lg font-semibold tracking-tight">' + esc(t.t) + '</span><span class="mono" style="font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:oklch(48% 0.11 180)">' + esc(t.k) + '</span><span class="mono" style="font-size:11px;opacity:0.6">' + esc(t.m) + '</span></div>' +
      '<div class="text-sm text-base-content/70 leading-relaxed text-pretty" style="max-width:60rem">' + esc(t.d) + '</div>';
  }

  function patch(a, b) {
    if (a.nodeType !== b.nodeType || a.nodeName !== b.nodeName) { a.parentNode.replaceChild(b.cloneNode(true), a); return; }
    if (a.nodeType === 3) { if (a.nodeValue !== b.nodeValue) a.nodeValue = b.nodeValue; return; }
    if (a.nodeType !== 1) return;
    Array.prototype.slice.call(a.attributes).forEach(function (x) { if (!b.hasAttribute(x.name)) a.removeAttribute(x.name); });
    Array.prototype.slice.call(b.attributes).forEach(function (x) { if (a.getAttribute(x.name) !== x.value) a.setAttribute(x.name, x.value); });
    var ac = a.childNodes, bc = b.childNodes, i;
    for (i = 0; i < bc.length; i++) {
      if (i >= ac.length) a.appendChild(bc[i].cloneNode(true));
      else patch(ac[i], bc[i]);
    }
    while (ac.length > bc.length) a.removeChild(a.lastChild);
  }

  function mount(html) {
    var next = document.createElement('div');
    next.innerHTML = html;
    if (!root.firstChild) { while (next.firstChild) root.appendChild(next.firstChild); return; }
    var ac = root.childNodes, bc = next.childNodes, i;
    for (i = 0; i < bc.length; i++) {
      if (i >= ac.length) root.appendChild(bc[i].cloneNode(true));
      else patch(ac[i], bc[i]);
    }
    while (ac.length > bc.length) root.removeChild(root.lastChild);
  }

  var toolTotal = Object.keys(JT.ops || {}).length;
  var gatTotal = TR.reduce(function (a, h) { return a + h.g.length; }, 0);

  function head(left, tier, name, n, sub) {
    return '<div style="position:absolute;left:' + left + 'px;top:0;width:' + (left === 0 ? 130 : 320) + 'px;display:flex;flex-direction:column;gap:2px">' +
      '<div class="mono" style="font-size:11px;letter-spacing:0.1em;text-transform:uppercase;opacity:0.6">' + tier + '</div>' +
      '<div style="display:flex;align-items:baseline;gap:8px"><span class="text-lg font-semibold tracking-tight">' + name + '</span><span class="mono" style="font-size:18px;font-weight:600;color:oklch(66% 0.11 180)">' + n + '</span>' +
      (sub ? '<span class="mono" style="font-size:11px;opacity:0.6;white-space:nowrap">' + sub + '</span>' : '') +
      '</div></div>';
  }

  function esc(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : s; return d.innerHTML; }

  function render() {
    var hi = state.th, H = TR[hi], gats = H.g || [];
    var gi = Math.min(state.tg, gats.length - 1), G = gats[gi];
    var paths = [];
    var hy = function (i) { return 60 + i * 44 + 18; };
    TR.forEach(function (h, i) { paths.push(curve(130, 254, 200, hy(i), i === hi ? T : LN, i === hi ? 2.5 : 1.5, 1)); });

    var gh = 40, gp = Math.min(50, Math.floor(440 / Math.max(1, gats.length))), gtot = gats.length * gp - 10;
    var gtop = Math.max(70, Math.min(hy(hi) - gtot / 2, 520 - gtot));
    var gy = function (j) { return gtop + j * gp + gh / 2; };
    gats.forEach(function (g, j) { paths.push(curve(520, hy(hi), 590, gy(j), T, j === gi ? 2.5 : 1.5, j === gi ? 1 : 0.5)); });

    var leaves = G ? G[1] : [], lp = Math.min(44, Math.floor(440 / Math.max(1, leaves.length))), ltot = leaves.length * lp - 10;
    var ltop = Math.max(70, Math.min(gy(gi) - ltot / 2, 520 - ltot));
    state.gats = gats; state.leaves = leaves;
    var li = Math.min(state.tl || 0, Math.max(0, leaves.length - 1));
    leaves.forEach(function (l, k) { paths.push(curve(910, gy(gi), 980, ltop + k * lp + 17, T, k === li ? 2.5 : 1.5, k === li ? 1 : 0.5)); });

    var tl = (leaves[li] && JT.leaf && JT.leaf[leaves[li][0]]) || [];
    var tp = 44, ttot = tl.length * tp - 10;
    var lcy = ltop + li * lp + 17, ttop = Math.max(70, lcy - ttot / 2), tH = Math.max(540, ttop + ttot + 30);
    tl.forEach(function (n, k) { paths.push(curve(1300, lcy, 1370, ttop + k * tp + 17, T, 1.5, 0.8)); });

    var sel = G ? gInfo(G) : hInfo(H);
    var tI = state.hv || dflt(H, G, li);

    var svg = '<svg width="1690" height="' + tH + '" viewBox="0 0 1690 ' + tH + '" style="position:absolute;left:0;top:0;pointer-events:none">' +
      paths.map(function (p) { return '<path d="' + p.d + '" style="fill:none;stroke:' + p.c + ';stroke-width:' + p.w + ';opacity:' + p.o + '"></path>'; }).join('') + '</svg>';

    var herdBtns = TR.map(function (h, i) {
      var on = i === hi;
      return '<button data-herd="' + i + '" style="position:absolute;left:200px;top:' + (60 + i * 44) + 'px;width:320px;height:36px;box-sizing:border-box;display:flex;align-items:center;padding:0 12px;border-radius:8px;text-align:left;font-size:14px;line-height:1.15;color:oklch(20% 0.005 100);background:' + (on ? T : W) + ';border:1px solid ' + (on ? T : 'oklch(88% 0.01 100)') + ';font-weight:' + (on ? 500 : 400) + ';cursor:pointer"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0">' + esc(h.n) + '</span></button>';
    }).join('');

    var gatBtns = gats.map(function (g, j) {
      var on = j === gi;
      return '<button data-gat="' + j + '" style="position:absolute;left:590px;top:' + (gtop + j * gp) + 'px;width:320px;height:40px;box-sizing:border-box;display:flex;align-items:center;padding:0 12px;border-radius:8px;text-align:left;font-size:14px;line-height:1.15;color:oklch(20% 0.005 100);background:' + (on ? TL : W) + ';border:1px ' + (g[2] ? 'dashed' : 'solid') + ' ' + (on ? T : BD) + ';font-weight:' + (on ? 500 : 400) + ';cursor:pointer"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0">' + esc(g[0]) + '</span></button>';
    }).join('');

    var leafBtns = leaves.map(function (l, k) {
      var on = k === li;
      return '<button data-leaf="' + k + '" style="text-align:left;cursor:pointer;font-weight:' + (on ? 500 : 400) + ';position:absolute;left:980px;top:' + (ltop + k * lp) + 'px;width:320px;height:34px;box-sizing:border-box;display:flex;align-items:center;padding:0 12px;border-radius:8px;font-size:14px;line-height:1.15;color:oklch(20% 0.005 100);background:' + (l[3] ? 'oklch(95% 0.06 85)' : 'oklch(95% 0.03 180)') + ';border:' + (on ? 2 : 1) + 'px solid ' + (on ? T : (l[3] ? 'oklch(78% 0.13 85)' : 'oklch(80% 0.07 180)')) + '"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0">' + esc(l[0].replace(/^Entity Analysis Model /, '')) + '</span></button>';
    }).join('');

    var toolDivs = tl.map(function (n, k) {
      var o = (JT.ops && JT.ops[n]) || ['R'];
      return '<div data-tool="' + esc(n) + '" style="position:absolute;left:1370px;top:' + (ttop + k * tp) + 'px;width:320px;height:34px;box-sizing:border-box;display:flex;align-items:center;padding:0 12px;border-radius:8px;font-size:14px;line-height:1.15;color:oklch(20% 0.005 100);background:' + KC[o[0]][0] + ';border:1px solid ' + KC[o[0]][1] + ';cursor:default"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0">' + esc(n) + '</span></div>';
    }).join('');


    var html =
      '<div class="mono" style="display:flex;flex-wrap:wrap;align-items:center;gap:8px 24px;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:oklch(20% 0.005 100 / 0.65)">' +
        '<span style="display:inline-flex;align-items:center;gap:8px;white-space:nowrap"><span style="width:20px;height:12px;border-radius:4px;box-sizing:border-box;background:oklch(66% 0.11 180);border:1px solid oklch(66% 0.11 180)"></span>Selected path</span>' +
        '<span style="display:inline-flex;align-items:center;gap:8px;white-space:nowrap"><span style="width:20px;height:12px;border-radius:4px;box-sizing:border-box;background:oklch(95% 0.03 180);border:1px solid oklch(80% 0.07 180)"></span>Read-only</span>' +
        '<span style="display:inline-flex;align-items:center;gap:8px;white-space:nowrap"><span style="width:20px;height:12px;border-radius:4px;box-sizing:border-box;background:oklch(95% 0.06 85);border:1px solid oklch(78% 0.13 85)"></span>Write</span>' +
        '<span style="display:inline-flex;align-items:center;gap:8px;white-space:nowrap"><span style="width:20px;height:12px;border-radius:4px;box-sizing:border-box;background:oklch(98.8% 0.003 100);border:1px dashed oklch(80% 0.07 180)"></span>Skips a tier</span>' +
      '</div>' +
      '<div style="padding:24px" class="rounded-box bg-base-200 border border-base-300 overflow-x-auto"><div style="width:1690px;height:' + tH + 'px;margin:0 auto;flex:none">' +
        '<div style="position:relative;width:1690px;height:' + tH + 'px">' +
          svg +
          head(0, 'Tier 1', 'Jooby', 1, '') +
          head(200, 'Tier 2', 'Herds', TR.length, TR.length + ' in all') +
          head(590, 'Tier 3', 'Gaze Gatherers', gatTotal, gats.length + ' here · ' + gatTotal + ' in all') +
          head(980, 'Tier 4', 'Joobriks', total, leaves.length + ' here · ' + total + ' in all') +
          '<img src="/assets/img/jooby.png" alt="Jooby" style="position:absolute;left:-6px;top:196px;width:142px;height:auto;pointer-events:none" onerror="this.style.display=\'none\'">' +
          herdBtns + gatBtns + leafBtns +
          head(1370, 'Owned by the Joobrik', 'Tools', toolTotal, tl.length + ' here · ' + toolTotal + ' in all') +
          toolDivs +
        '</div></div></div>' +
      '<div data-info style="border-top:1px solid oklch(91% 0.008 100);padding-top:14px;min-height:96px;display:flex;flex-direction:column;gap:4px">' + infoHtml(tI) + '</div>';

    mount(html);

    var pathEl = document.querySelector('[data-tree-path]');
    if (pathEl) pathEl.textContent = 'Jooby picks ' + H.n + (G[2] ? (', which hands the question straight to ' + (leaves.length > 1 ? 'one of its Joobriks' : 'its Joobrik') + '.') : (', which picks ' + G[0] + ', which picks the Joobrik that owns the job.'));
  }

  var SEL = '[data-herd],[data-gat],[data-leaf],[data-tool]';
  var lastHover = null;

  function infoFor(el) {
    if (el.hasAttribute('data-herd')) return hInfo(TR[+el.getAttribute('data-herd')]);
    if (el.hasAttribute('data-gat')) return gInfo(state.gats[+el.getAttribute('data-gat')]);
    if (el.hasAttribute('data-leaf')) return lInfo(state.leaves[+el.getAttribute('data-leaf')]);
    return toolInfo(el.getAttribute('data-tool'));
  }

  function paintInfo(info) {
    var panel = root.querySelector('[data-info]');
    if (!panel) return;
    var G = state.gats[Math.min(state.tg, state.gats.length - 1)], H = TR[state.th];
    var t = info || dflt(H, G, Math.min(state.tl || 0, Math.max(0, G ? G[1].length - 1 : 0)));
    panel.innerHTML = infoHtml(t);
  }

  root.addEventListener('mouseover', function (e) {
    var el = e.target.closest ? e.target.closest(SEL) : null;
    if (el === lastHover) return;
    lastHover = el;
    state.hv = el ? infoFor(el) : null;
    paintInfo(state.hv);
  });
  root.addEventListener('mouseleave', function () {
    lastHover = null; state.hv = null; paintInfo(null);
  });
  root.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-herd],[data-gat],[data-leaf]') : null;
    if (!el) return;
    if (el.hasAttribute('data-herd')) {
      var i = +el.getAttribute('data-herd'), h = TR[i];
      state.th = i; state.tg = Math.max(0, h.g.findIndex(function (g) { return !g[2]; })); state.tl = 0;
    } else if (el.hasAttribute('data-gat')) {
      state.tg = +el.getAttribute('data-gat'); state.tl = 0;
    } else {
      state.tl = +el.getAttribute('data-leaf');
    }
    state.hv = null; lastHover = null;
    render();
  });

  var css = document.createElement('style');
  css.textContent = '#jtree button,#jtree [data-tool]{transition:top .3s ease,background-color .2s ease,border-color .2s ease,opacity .2s ease}' +
    '#jtree svg path{transition:d .3s ease,stroke .2s ease,stroke-width .2s ease,opacity .2s ease}' +
    '@media (prefers-reduced-motion:reduce){#jtree button,#jtree [data-tool],#jtree svg path{transition:none}}';
  document.head.appendChild(css);

  render();
})();
