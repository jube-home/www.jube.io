(function () {
  // Left sidebar: collapsed by default, remembers the choice
  var side = document.getElementById('side');
  var sideNav = document.getElementById('side-nav');
  var sideBtn = document.getElementById('side-toggle');
  function setSide(open) {
    if (!side) return;
    side.classList.toggle('w-10', !open);
    side.classList.toggle('w-[260px]', open);
    sideNav.hidden = !open;
    sideBtn.querySelector('[data-icon]').textContent = open ? '×' : '☰';
    sideBtn.title = open ? 'Hide menu' : 'Show menu';
    sideBtn.setAttribute('aria-label', sideBtn.title);
  }
  if (side) {
    setSide(localStorage.getItem('jube-side') === 'open');
    sideBtn.addEventListener('click', function () {
      var open = sideNav.hidden;
      localStorage.setItem('jube-side', open ? 'open' : 'closed');
      setSide(open);
    });
  }

  // Mobile menu
  var mBtn = document.getElementById('mnav-toggle');
  var mNav = document.getElementById('mnav');
  if (mBtn && mNav) mBtn.addEventListener('click', function () { mNav.hidden = !mNav.hidden; });

  // Ask Jooby stable tabs
  var tabs = document.querySelectorAll('[data-stable]');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var i = tab.getAttribute('data-stable');
      tabs.forEach(function (t) { t.classList.toggle('tab-on', t === tab); });
      document.querySelectorAll('[data-panel]').forEach(function (p) { p.hidden = p.getAttribute('data-panel') !== i; });
    });
  });

  // Search: Pagefind results in a dropdown under the header box; Cmd/Ctrl+K or / focuses it
  var sx = document.getElementById('sx');
  if (sx) {
    var sxIn = document.getElementById('sx-input');
    var sxPanel = document.getElementById('sx-panel');
    var sxList = document.getElementById('sx-list');
    var sxFoot = document.getElementById('sx-foot');
    var pf = null, pfFailed = false, active = -1, seq = 0;

    var loadPf = function () {
      if (pf || pfFailed) return Promise.resolve(pf);
      return import(sx.getAttribute('data-pf')).then(function (m) {
        pf = m;
        return pf.options({ excerptLength: 18 }).then(function () { return pf; });
      }).catch(function () { pfFailed = true; return null; });
    };
    var openPanel = function (on) {
      sxPanel.hidden = !on;
      sxIn.setAttribute('aria-expanded', on ? 'true' : 'false');
    };
    var items = function () { return sxList.querySelectorAll('[role="option"]'); };
    var setActive = function (i) {
      var els = items();
      if (!els.length) { active = -1; return; }
      active = (i + els.length) % els.length;
      els.forEach(function (el, k) {
        var on = k === active;
        el.classList.toggle('bg-base-200', on);
        el.setAttribute('aria-selected', on ? 'true' : 'false');
        if (on) { sxIn.setAttribute('aria-activedescendant', el.id); el.scrollIntoView({ block: 'nearest' }); }
      });
    };
    var crumbs = function (url) {
      var parts = url.replace(/[?#].*$/, '').split('/').filter(Boolean);
      parts = parts.filter(function (x) { return !/^index(\.html)?$/.test(x); }).map(function (x) { return x.replace(/\.html$/, ''); });
      parts.pop();
      return parts.map(function (x) { return x === 'docs' ? 'Documentation' : x.replace(/([a-z])([A-Z])/g, '$1 $2'); }).join(' › ');
    };
    var foot = function (text) {
      sxFoot.textContent = '';
      var t = document.createElement('span'); t.textContent = text; sxFoot.appendChild(t);
      var k = document.createElement('span'); k.className = 'ml-auto hidden sm:inline'; k.textContent = '↑↓ navigate · ↵ open · esc close';
      sxFoot.appendChild(k);
    };
    var render = function (q, datas) {
      sxList.textContent = '';
      datas.forEach(function (d, i) {
        var li = document.createElement('li');
        li.setAttribute('role', 'option'); li.id = 'sx-opt-' + i; li.setAttribute('aria-selected', 'false');
        li.className = 'rounded-field px-3 py-2 cursor-pointer';
        var a = document.createElement('a');
        a.href = d.url; a.className = 'no-underline block text-base-content';
        var path = crumbs(d.url);
        if (path) { var c = document.createElement('div'); c.className = 'mono text-[10px] uppercase tracking-widest text-base-content/50 truncate'; c.textContent = path; a.appendChild(c); }
        var t = document.createElement('div'); t.className = 'font-semibold text-sm'; t.textContent = (d.meta && d.meta.title) || d.url; a.appendChild(t);
        var e = document.createElement('div'); e.className = 'text-xs text-base-content/70 leading-snug [&_mark]:bg-accent/60 [&_mark]:text-base-content [&_mark]:rounded-sm [&_mark]:px-0.5'; e.innerHTML = d.excerpt; a.appendChild(e);
        li.appendChild(a);
        li.addEventListener('mousemove', function () { if (active !== i) setActive(i); });
        sxList.appendChild(li);
      });
      if (!datas.length) {
        var none = document.createElement('li'); none.className = 'px-3 py-6 text-sm text-base-content/60 text-center';
        none.textContent = 'No results for “' + q + '”.'; sxList.appendChild(none);
      }
      foot(datas.length ? datas.length + ' result' + (datas.length > 1 ? 's' : '') + (datas.length === 8 ? ' shown' : '') : 'Try fewer or different words');
      setActive(datas.length ? 0 : -1);
      openPanel(true);
    };
    var run = function () {
      var q = sxIn.value.trim();
      if (!q) { openPanel(false); sxList.textContent = ''; return; }
      var mine = ++seq;
      loadPf().then(function (m) {
        if (!m) {
          sxList.textContent = ''; foot('Search works on the built site (npm run build), not in jekyll serve.'); openPanel(true); return;
        }
        return m.debouncedSearch(q, {}, 120).then(function (res) {
          if (!res || mine !== seq) return;
          return Promise.all(res.results.slice(0, 8).map(function (r) { return r.data(); })).then(function (datas) {
            if (mine === seq) render(q, datas);
          });
        });
      });
    };

    sxIn.addEventListener('focus', function () { loadPf(); if (sxIn.value.trim() && sxList.children.length) openPanel(true); });
    sxIn.addEventListener('input', run);
    sxIn.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); if (sxPanel.hidden) run(); else setActive(active + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active - 1); }
      else if (e.key === 'Enter') { var el = items()[active]; if (el) { e.preventDefault(); window.location.href = el.querySelector('a').href; } }
      else if (e.key === 'Escape') { if (!sxPanel.hidden) { openPanel(false); } else { sxIn.blur(); } }
    });
    document.addEventListener('click', function (e) { if (!sx.contains(e.target)) openPanel(false); });
    document.addEventListener('keydown', function (e) {
      var typing = /^(INPUT|TEXTAREA|SELECT)$/.test((e.target.tagName || '')) || e.target.isContentEditable;
      if (((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') || (e.key === '/' && !typing)) {
        e.preventDefault(); sxIn.focus(); sxIn.select();
      }
    });
  }

  // Contents list for long pages: built from the h2 headings of the article (or any [data-toc-scope]), hidden when there are fewer than four
  var toc = document.getElementById('toc');
  if (toc) {
    var scope = document.querySelector('[data-toc-scope]') || document.querySelector('article');
    var heads = scope ? scope.querySelectorAll('h2') : [];
    if (heads.length >= 4) {
      var tl = document.getElementById('toc-list');
      var used = {};
      heads.forEach(function (h) {
        if (!h.id) {
          var base = h.textContent.toLowerCase().replace(/[^a-z0-9 -]/g, '').trim().replace(/\s+/g, '-') || 'section';
          var id = base, n = 2;
          while (used[id] || document.getElementById(id)) id = base + '-' + n++;
          h.id = id;
        }
        used[h.id] = true;
        var li = document.createElement('li'), a = document.createElement('a');
        a.href = '#' + h.id; a.textContent = h.textContent;
        li.appendChild(a); tl.appendChild(li);
      });
      toc.hidden = false;
    }
  }

  // Analytics opt-out on the privacy page: the choice lives in local storage and is read before Google Analytics loads
  var anBtn = document.querySelector('[data-analytics-toggle]');
  if (anBtn) {
    var anState = document.querySelector('[data-analytics-state]');
    var anOff = function () { try { return localStorage.getItem('jube-analytics') === 'off'; } catch (e) { return false; } };
    var anPaint = function () {
      var off = anOff() || navigator.globalPrivacyControl === true;
      anBtn.textContent = anOff() ? 'Turn analytics on' : 'Turn analytics off';
      anState.textContent = off ? 'Analytics is off in this browser.' : 'Analytics is on in this browser.';
    };
    anBtn.addEventListener('click', function () {
      var turnOff = !anOff();
      try { if (turnOff) localStorage.setItem('jube-analytics', 'off'); else localStorage.removeItem('jube-analytics'); } catch (e) {}
      if (turnOff) {
        var host = location.hostname.split('.'), domains = ['', location.hostname];
        if (host.length > 2) domains.push(host.slice(-2).join('.'));
        document.cookie.split(';').forEach(function (c) {
          var n = c.split('=')[0].trim();
          if (/^_ga(_|$)/.test(n)) domains.forEach(function (d) {
            document.cookie = n + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (d ? '; domain=' + d : '');
          });
        });
      }
      anPaint();
    });
    anPaint();
  }

  // GitHub star count, fetched straight from GitHub and cached for an hour; the link keeps working if the fetch fails
  var starEl = document.querySelector('[data-stars]');
  if (starEl) {
    var starOut = starEl.querySelector('[data-stars-count]');
    var starKey = 'jube-stars:' + starEl.getAttribute('data-stars');
    var showStars = function (n) { if (typeof n === 'number' && n >= 0) starOut.textContent = n.toLocaleString('en-GB'); };
    var cached = null;
    try { cached = JSON.parse(localStorage.getItem(starKey)); } catch (e) { cached = null; }
    if (cached) showStars(cached.n);
    if (!cached || Date.now() - cached.t > 3600000) {
      fetch('https://api.github.com/repos/' + starEl.getAttribute('data-stars'), { headers: { Accept: 'application/vnd.github+json' } })
        .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
        .then(function (d) {
          showStars(d.stargazers_count);
          try { localStorage.setItem(starKey, JSON.stringify({ n: d.stargazers_count, t: Date.now() })); } catch (e) {}
        })
        .catch(function () {});
    }
  }
})();

/* Copy button: copies a block's command lines, without the "$" prompts */
(function () {
  document.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('[data-copy]') : null;
    if (!btn) return;
    var box = document.querySelector(btn.getAttribute('data-copy'));
    if (!box) return;
    var text = Array.prototype.map.call(box.children, function (row) {
      return row.children.length > 1 ? row.lastElementChild.textContent : row.textContent;
    }).join('\n');
    function done(ok) {
      btn.textContent = ok ? 'Copied ✓' : 'Press Ctrl+C';
      setTimeout(function () { btn.textContent = 'Copy'; }, 1800);
    }
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text; ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta); ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (x) { }
      ta.remove(); done(ok);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { done(true); }, fallback);
    else fallback();
  });
})();
