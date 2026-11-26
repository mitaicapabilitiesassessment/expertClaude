/* ==========================================================================
   ỨNG DỤNG: định tuyến, trang chủ, trang bài, mục lục, trình chiếu, hiệu ứng
   Chạy được khi mở trực tiếp index.html (không cần server).
   ========================================================================== */
(function () {
  var C = window.Course, B = C.brand, fmt = C.fmt, esc = C.esc;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- lưu trữ an toàn ---------- */
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem("ctc:" + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem("ctc:" + k, JSON.stringify(v)); } catch (e) { } }
  };

  /* ---------- thứ tự bài ---------- */
  var ORDER = C.lessons.map(function (l) { return l.id; });
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function partOf(id) { for (var i = 0; i < C.parts.length; i++) if (C.parts[i].id === id) return C.parts[i]; return null; }

  /* ---------- tiến độ ---------- */
  var done = store.get("done", {});
  function isDone(id) { return !!done[id]; }
  function setDone(id, v) { if (v) done[id] = 1; else delete done[id]; store.set("done", done); }
  function progressPct() {
    var ls = C.lessons.filter(function (l) { return l.kind !== "guide"; });
    var n = ls.filter(function (l) { return isDone(l.id); }).length;
    return { n: n, total: ls.length, pct: Math.round(n * 100 / ls.length) };
  }

  /* ---------- logo ---------- */
  function logo(forceDark) {
    return '<span class="logo-chip' + (forceDark ? " force-dark" : "") + '"><img class="on-light" src="' + B.logo + '" alt="Logo ' + esc(B.company) + '"><img class="on-dark" src="' + B.logoOnDark + '" alt="Logo ' + esc(B.company) + '"></span>';
  }
  C.logo = logo;

  var ICO = {
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h10"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    present: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M12 16v4M8 20h8M10 8l4 2-4 2z"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>',
    keys: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/></svg>',
    full: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
    cmd: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 8l4 4-4 4M12 17h7"/></svg>'
  };

  /* ---------- khung trang ---------- */
  function shell() {
    document.title = B.courseName;
    var root = $("#app");
    root.innerHTML =
      '<div class="progress-top" id="readbar"></div>' +
      '<header class="topbar" id="topbar"><div class="wrap">' +
      '<button class="icon-btn" id="btnToc" aria-label="Mở mục lục" title="Mục lục (M)">' + ICO.menu + "</button>" +
      '<a class="brand" href="#/">' + logo() + '<span class="bsep"></span><span class="bname">' + esc(B.courseShort) + "</span></a>" +
      '<div class="tb-actions">' +
      '<button class="chip-btn" id="btnPresent" title="Trình chiếu (P)">' + ICO.present + '<span class="lbl">Trình chiếu</span></button>' +
      '<button class="icon-btn" id="btnKeys" aria-label="Phím tắt" title="Phím tắt (?)">' + ICO.keys + "</button>" +
      '<button class="icon-btn" id="btnTheme" aria-label="Đổi giao diện sáng/tối" title="Sáng/tối (T)"></button>' +
      "</div></div></header>" +
      '<main id="view"></main>' +
      '<footer class="site-foot"><div class="wrap">' + logo() +
      '<div><div class="who">Trình bày bởi <b>' + esc(B.trainer) + "</b> · " + esc(B.courseName) + '</div><div class="credit">Thông tin sản phẩm đối chiếu với tài liệu chính thức của Anthropic. Claude là thương hiệu của Anthropic; tài liệu này dùng cho đào tạo nội bộ.</div></div>' +
      '<div class="upd">Cập nhật ' + esc(B.updated) + "<br>Dữ liệu thực hành là dữ liệu giả</div></div></footer>" +
      '<div class="toc-veil" id="tocVeil"></div><aside class="toc" id="toc" aria-label="Mục lục"></aside>' +
      '<div class="deck" id="deck" aria-hidden="true"></div>' +
      '<div class="modal" id="keysModal"><div class="panel"><h3>Phím tắt khi giảng</h3><div class="kbd-list">' +
      "<kbd>P</kbd><span>Bật/tắt chế độ trình chiếu</span>" +
      "<kbd>→</kbd><span>Trình chiếu: bước/slide tiếp theo · Trang bài: bài sau</span>" +
      "<kbd>←</kbd><span>Trình chiếu: lùi lại · Trang bài: bài trước</span>" +
      "<kbd>Space</kbd><span>Trình chiếu: tiếp theo</span>" +
      "<kbd>F</kbd><span>Toàn màn hình</span>" +
      "<kbd>M</kbd><span>Mở mục lục</span>" +
      "<kbd>T</kbd><span>Đổi giao diện sáng/tối</span>" +
      "<kbd>H</kbd><span>Về trang chủ</span>" +
      "<kbd>Esc</kbd><span>Thoát trình chiếu / đóng hộp</span>" +
      '</div><p class="muted" style="margin:16px 0 0;font-size:14px">Trong minh hoạ, bấm vào từng dòng chú thích để nhảy tới bước đó.</p></div></div>' +
      '<div class="toast" id="toast"></div>';

    $("#btnToc").onclick = openToc;
    $("#tocVeil").onclick = closeToc;
    $("#btnTheme").onclick = toggleTheme;
    $("#btnPresent").onclick = function () { startDeck(); };
    $("#btnKeys").onclick = function () { $("#keysModal").classList.add("open"); };
    $("#keysModal").onclick = function (e) { if (e.target.id === "keysModal") this.classList.remove("open"); };
    paintThemeBtn();
  }

  /* ---------- giao diện sáng/tối ---------- */
  function currentTheme() {
    var t = document.documentElement.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function paintThemeBtn() { var b = $("#btnTheme"); if (b) { b.innerHTML = currentTheme() === "dark" ? ICO.sun : ICO.moon; b.title = currentTheme() === "dark" ? "Chuyển sang giao diện sáng (T)" : "Chuyển sang giao diện tối (T)"; } }
  function toggleTheme() {
    var next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    store.set("theme", next);
    paintThemeBtn();
  }
  (function initTheme() { var t = store.get("theme", null); if (t) document.documentElement.setAttribute("data-theme", t); })();

  function toast(msg) {
    var t = $("#toast"); if (!t) return;
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove("show"); }, 1800);
  }

  /* ---------- mục lục ---------- */
  function renderToc(cur) {
    var p = progressPct();
    var h = '<div class="toc-head">' + logo() + '<span class="bname">' + esc(B.courseShort) + '</span><button class="icon-btn" id="tocClose" aria-label="Đóng mục lục">' + ICO.close + "</button></div>" +
      '<div class="toc-prog">Đã học ' + p.n + "/" + p.total + ' bài<div class="prog"><i style="width:' + p.pct + '%"></i></div></div><div class="toc-body">';
    C.parts.forEach(function (pt) {
      var ls = C.lessons.filter(function (l) { return l.part === pt.id; });
      if (!ls.length) return;
      h += '<div class="toc-part">' + esc(pt.label) + (pt.id === 0 || pt.id === 9 ? "" : " · " + esc(pt.title)) + "</div>";
      ls.forEach(function (l) {
        h += '<a class="tlink' + (l.id === cur ? " cur" : "") + '" href="#/' + l.id + '"><span class="n">' + esc(l.num) + "</span><span>" + esc(l.title) + '</span><span class="ck">' + (isDone(l.id) ? "✓" : "") + "</span></a>";
      });
    });
    h += '</div><div class="toc-foot"><a class="chip-btn" href="#/">Trang chủ</a><a class="chip-btn" href="#/K4">' + ICO.cmd + "Bảng lệnh</a></div>";
    $("#toc").innerHTML = h;
    $("#tocClose").onclick = closeToc;
    $$("#toc a").forEach(function (a) { a.addEventListener("click", closeToc); });
  }
  function openToc() { renderToc(curId); document.body.classList.add("toc-open"); var c = $("#toc .tlink.cur"); if (c) c.scrollIntoView({ block: "center" }); }
  function closeToc() { document.body.classList.remove("toc-open"); }

  /* ---------- trang chủ ---------- */
  var MASCOT = '<svg class="mascot" viewBox="0 0 240 200" aria-hidden="true">' +
    '<rect x="62" y="40" width="116" height="74" rx="4" fill="#d97757"/>' +
    '<rect x="40" y="70" width="22" height="22" fill="#d97757"/><rect x="178" y="70" width="22" height="22" fill="#d97757"/>' +
    '<rect class="eye" x="88" y="58" width="12" height="20" fill="#061323"/><rect class="eye" x="140" y="58" width="12" height="20" fill="#061323"/>' +
    '<rect x="76" y="114" width="12" height="20" fill="#d97757"/><rect x="100" y="114" width="12" height="20" fill="#d97757"/><rect x="128" y="114" width="12" height="20" fill="#d97757"/><rect x="152" y="114" width="12" height="20" fill="#d97757"/>' +
    '<g transform="translate(64 96)"><rect x="0" y="0" width="112" height="46" rx="5" fill="#c9cfd8"/><rect x="6" y="6" width="100" height="34" rx="3" fill="#0e2139"/>' +
    '<path class="screen-line" d="M14 17h70M14 27h48" stroke="#ec9a7a" stroke-width="3" stroke-linecap="round" fill="none"/><rect x="-10" y="46" width="132" height="8" rx="3" fill="#9eabbc"/></g>' +
    '<circle cx="120" cy="170" r="0" fill="none"/></svg>';

  function renderHome() {
    var p = progressPct();
    var first = ORDER[0];
    var h = '<div class="home"><div class="wrap">';
    h += '<section class="hero rv"><div><div class="eyebrow">' + C.lessons.filter(function (l) { return l.kind !== "guide"; }).length + " bài · " + (C.parts.length - 2) + " phần · 4 giờ học và thực hành</div>" +
      '<h1>Claude <span class="swash">Thực Chiến</span></h1>' +
      '<p class="lead">' + esc(B.tagline) + ". Từ những gì bạn đã quen trong Claude Chat, đi tiếp sang Claude Code: giao việc cho một AI agent làm ngay trên máy tính, biến quy trình thành skill, tự chạy theo lịch, và đưa sản phẩm lên mạng.</p>" +
      '<div class="actions"><a class="btn" href="#/' + first + '">Bắt đầu học →</a><a class="btn ghost" href="#/K1">Tải thư mục thực hành</a><button class="btn ghost" id="heroPresent">' + ICO.present.replace("<svg", '<svg width="18" height="18"') + " Trình chiếu</button></div>" +
      '<div class="hero-meta">' + logo(true) + "<span>Giảng viên: <strong>" + esc(B.trainer) + "</strong></span><span>Cập nhật theo công bố của Anthropic tới " + esc(B.updated) + "</span></div></div>" +
      '<div class="hero-art">' + MASCOT + "</div></section>";

    h += '<div class="viec-grid">' + C.viec.map(function (v, i) {
      return '<a class="vcard rv" style="--d:' + (i * 90) + 'ms" href="#/' + v.lesson + '"><div class="eyebrow">Việc ' + v.n + "</div><h3>" + esc(v.title) + "</h3><p>" + esc(v.text) + "</p></a>";
    }).join("") + "</div>";

    h += '<div class="home-strip" style="grid-template-columns:1fr">' +
      '<div class="strip-card rv"><span class="ico">' + ICO.check + '</span><span style="flex:1"><b>Tiến độ của bạn: ' + p.n + "/" + p.total + ' bài</b><span>Bấm "Đánh dấu đã học" cuối mỗi bài.</span><div class="prog"><i style="width:' + p.pct + '%"></i></div></span></div></div>';

    C.parts.forEach(function (pt) {
      var ls = C.lessons.filter(function (l) { return l.part === pt.id; });
      if (!ls.length) return;
      var mins = ls.reduce(function (s, l) { return s + (l.mins || 0); }, 0);
      var first = ls[0], last = ls[ls.length - 1];
      var slot = "";
      h += '<section class="part' + (pt.isNew ? " new" : "") + '"><div class="part-head rv"><div><div class="eyebrow">' + esc(pt.label) + "</div>" +
        (pt.id === 0 ? "" : "<h2>" + esc(pt.title) + "</h2>") + (pt.summary ? "<p>" + esc(pt.summary) + "</p>" : "") + "</div>" +
        (slot ? '<div class="slot">' + slot + "</div>" : "") + "</div>";
      if (pt.id === 9) {
        h += '<div class="guide-grid">' + ls.map(function (l, i) {
          return '<a class="vcard rv" style="--d:' + (i * 80) + 'ms" href="#/' + l.id + '"><div class="eyebrow">' + esc(l.num) + "</div><h3>" + esc(l.title) + "</h3><p>" + esc(l.summary) + "</p></a>";
        }).join("") + "</div>";
      } else {
        h += '<div class="lesson-list">' + ls.map(function (l, i) {
          var meta = (l.viec ? '<span class="tag-viec">VIỆC ' + l.viec + "</span>" : "") + (l.kind === "guide" ? '<span class="tag-guide">HƯỚNG DẪN</span>' : "") +
            (isDone(l.id) ? '<span class="tag-done">✓ ĐÃ HỌC</span>' : "");
          return '<a class="lrow rv' + (isDone(l.id) ? " done" : "") + '" style="--d:' + Math.min(i * 60, 300) + 'ms" href="#/' + l.id + '"><span class="num">' + esc(l.num) + '</span><span><div class="t">' + esc(l.title) + '</div><div class="s">' + esc(l.summary) + '</div></span><span class="meta">' + meta + "</span></a>";
        }).join("") + "</div>";
      }
      h += "</section>";
    });
    h += "</div></div>";
    return h;
  }

  /* ---------- trang bài ---------- */
  function headEyebrow(l) {
    var pt = partOf(l.part);
    var bits = [l.kind === "guide" ? "Trang hướng dẫn " + l.num : "Bài " + l.num];
    if (pt && pt.id !== 0 && pt.id !== 9) bits.push(pt.label + " · " + pt.title);
    if (l.id === "L00") bits.push("Mở đầu");
    if (l.viec) bits.push("Việc " + l.viec);
    return bits.join(" · ");
  }
  function renderLesson(id) {
    var l = C.lesson(id), data = C.content[id];
    if (!l) return renderHome();
    var i = ORDER.indexOf(id), prev = C.lesson(ORDER[i - 1]), next = C.lesson(ORDER[i + 1]);
    var h = '<article class="lesson"><div class="wrap narrow">';
    h += '<header class="lesson-head rv in"><div class="eyebrow">' + esc(headEyebrow(l)) + "</div><h1>" + fmt(data && data.heading || l.title) + '</h1><p class="summary">' + fmt(l.summary) + "</p>" +
      '<div class="lesson-tools">' +       '<button class="chip-btn" data-present>' + ICO.present + "Trình chiếu bài này</button>" +
      '<button class="chip-btn' + (isDone(id) ? " on" : "") + '" data-done>' + ICO.check + (isDone(id) ? "Đã học" : "Đánh dấu đã học") + "</button></div></header>";
    if (!data) {
      h += '<section class="blk"><div class="note">Bài này đang được soạn.</div></section>';
    } else {
      var blocks = (data.blocks || []).filter(function (b) { return !b.slideOnly; });
      h += '<div class="blocks">' + blocks.map(function (b) { return C.renderBlock(b, { id: id }); }).join("") + "</div>";
    }
    h += '<footer class="lesson-end"><div class="done-box"><div><b>' + (isDone(id) ? "Bạn đã hoàn thành bài này." : "Xong bài này rồi?") + '</b><div class="muted" style="font-size:14.5px">Đánh dấu để theo dõi tiến độ trong mục lục.</div></div>' +
      '<button class="btn sm' + (isDone(id) ? " ghost" : "") + '" data-done>' + (isDone(id) ? "Bỏ đánh dấu" : "✓ Đánh dấu đã học") + "</button></div>" +
      '<nav class="lesson-nav">' +
      (prev ? '<a class="prev" href="#/' + prev.id + '"><small>← ' + esc(C.label(prev)) + "</small><b>" + esc(prev.title) + "</b></a>" : '<a class="prev" href="#/"><small>← Trang chủ</small><b>Mục lục khoá học</b></a>') +
      (next ? '<a class="next" href="#/' + next.id + '"><small>' + esc(C.label(next)) + " →</small><b>" + esc(next.title) + "</b></a>" : '<a class="next" href="#/"><small>Hoàn thành →</small><b>Về trang chủ</b></a>') +
      "</nav></footer></div></article>";
    return h;
  }

  /* ---------- định tuyến + chuyển trang ---------- */
  var curId = null, firstRender = true;
  function route() {
    var hash = location.hash.replace(/^#\/?/, "");
    var parts = hash.split("/");
    var id = parts[0] || "";
    var anchor = parts[1] || "";
    var view = $("#view");
    var draw = function () {
      curId = id;
      var html;
      if (!id) html = renderHome();
      else if (C.lesson(id)) html = renderLesson(id);
      else { curId = ""; html = renderHome(); }
      view.innerHTML = html;
      var l = C.lesson(curId);
      document.title = (l ? (l.num + " · " + l.title + " · ") : "") + B.courseName;
      bindView(view);
      window.scrollTo(0, 0);
      if (anchor) { var el = document.getElementById(anchor); if (el) setTimeout(function () { el.scrollIntoView({ behavior: "smooth", block: "start" }); }, 350); }
      if (!reduce) { view.classList.remove("leave"); view.classList.add("enter"); setTimeout(function () { view.classList.remove("enter"); }, 600); }
      else view.classList.remove("leave");
    };
    if (firstRender || reduce) { firstRender = false; draw(); }
    else { view.classList.add("leave"); setTimeout(draw, 170); }
  }

  /* ---------- gắn hành vi cho nội dung ---------- */
  var io = null;
  function bindView(root) {
    // hiện dần khi cuộn
    if (io) io.disconnect();
    var rv = $$(".rv", root);
    if ("IntersectionObserver" in window && !reduce) {
      io = new IntersectionObserver(function (ents) {
        ents.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
            var vz = $$(".viz", e.target); vz.forEach(function (v) { if (!v._started) playViz(v); });
          }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
      rv.forEach(function (el) { io.observe(el); });
    } else {
      rv.forEach(function (el) { el.classList.add("in"); });
      $$(".viz", root).forEach(function (v) { setViz(v, +v.dataset.steps || 0); });
    }
    $$(".viz", root).forEach(initViz);
    $$(".checklist", root).forEach(initChecklist);
    $$("[data-done]", root).forEach(function (b) {
      b.onclick = function () { setDone(curId, !isDone(curId)); toast(isDone(curId) ? "Đã đánh dấu: học xong bài này" : "Đã bỏ đánh dấu"); var y = window.scrollY; route(); setTimeout(function () { window.scrollTo(0, y); }, 200); };
    });
    $$("[data-present]", root).forEach(function (b) { b.onclick = function () { startDeck(curId); }; });
    var hp = $("#heroPresent", root); if (hp) hp.onclick = function () { startDeck("cover"); };
  }

  /* ---------- minh hoạ chạy theo bước ---------- */
  function setViz(v, step) {
    var n = +v.dataset.steps || 0;
    step = Math.max(0, Math.min(n, step));
    v._step = step;
    $$("[data-s]", v).forEach(function (el) {
      var s = String(el.getAttribute("data-s")).split(/[ ,]+/);
      var from = +s[0], to = s[1] ? +s[1] : 99;
      el.classList.toggle("on", step >= from && step <= to);
      el.classList.toggle("now-glow", step === from);
    });
    $$("[data-hide]", v).forEach(function (el) { el.classList.toggle("off", step >= +el.getAttribute("data-hide")); });
    $$(".viz-dots i", v).forEach(function (d) { var i = +d.dataset.i; d.classList.toggle("on", i <= step); d.classList.toggle("now", i === step); });
    var lay = v.closest(".viz-layout");
    if (lay) $$(".captions li", lay).forEach(function (li) { var i = +li.dataset.i; li.classList.toggle("on", i <= step); li.classList.toggle("now", i === step); });
  }
  function stopViz(v) { clearTimeout(v._t); v._playing = false; }
  function playViz(v, from) {
    v._started = true;
    stopViz(v);
    var n = +v.dataset.steps || 0;
    var step = from != null ? from : 0;
    v._playing = true;
    setViz(v, step);
    var tick = function () {
      if (!v._playing) return;
      if (v._step >= n) { v._playing = false; return; }
      setViz(v, v._step + 1);
      v._t = setTimeout(tick, 2300);
    };
    v._t = setTimeout(tick, step === 0 ? 450 : 2300);
  }
  function initViz(v) {
    if (v._init) return; v._init = true;
    setViz(v, 0);
    $(".vnext", v).onclick = function () { stopViz(v); setViz(v, (v._step || 0) + 1); };
    $(".vprev", v).onclick = function () { stopViz(v); setViz(v, (v._step || 0) - 1); };
    $(".replay", v).onclick = function () { playViz(v, 0); };
    $$(".viz-dots i", v).forEach(function (d) { d.onclick = function () { stopViz(v); setViz(v, +d.dataset.i); }; });
    var lay = v.closest(".viz-layout");
    if (lay) $$(".captions li", lay).forEach(function (li) { li.onclick = function () { stopViz(v); setViz(v, +li.dataset.i); }; });
  }

  function initChecklist(ul) {
    var key = "chk:" + ul.dataset.key, st = store.get(key, {});
    $$("li", ul).forEach(function (li) {
      if (st[li.dataset.i]) li.classList.add("on");
      li.onclick = function () { li.classList.toggle("on"); st[li.dataset.i] = li.classList.contains("on") ? 1 : 0; store.set(key, st); };
    });
  }

  /* ---------- nút Chép ---------- */
  function legacyCopy(text) {
    return new Promise(function (res, rej) {
      var ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.top = "-1000px"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      ok ? res() : rej();
    });
  }
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).catch(function () { return legacyCopy(text); });
    }
    return legacyCopy(text);
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".copy");
    if (!b) return;
    var text = b.getAttribute("data-copy") || "";
    copyText(text).then(function () {
      b.classList.add("ok"); var o = b.textContent; b.textContent = "Đã chép ✓";
      setTimeout(function () { b.classList.remove("ok"); b.textContent = o === "Đã chép ✓" ? "Chép" : o; }, 1600);
    }, function () { toast("Không chép được, hãy bôi đen và nhấn Ctrl+C"); });
  });

  /* ---------- thanh tiến độ đọc + header ---------- */
  window.addEventListener("scroll", function () {
    var h = document.documentElement, max = h.scrollHeight - h.clientHeight;
    var r = $("#readbar"); if (r) r.style.transform = "scaleX(" + (max > 0 ? h.scrollTop / max : 0) + ")";
    var tb = $("#topbar"); if (tb) tb.classList.toggle("scrolled", h.scrollTop > 8);
  }, { passive: true });

  /* ==========================================================================
     CHẾ ĐỘ TRÌNH CHIẾU
     ========================================================================== */
  var deck = { on: false, id: null, slides: [], i: 0, timerStart: 0, timerRun: false, timerAcc: 0 };

  function coverHTML(l) {
    var pt = l ? partOf(l.part) : null;
    if (!l) {
      return '<div class="cover"><div class="eyebrow">Khoá học nội bộ · 4 giờ học và thực hành</div><h1>' + esc(B.courseName) + "</h1><p>" + esc(B.tagline) + '.</p><div class="who">' + logo(true) + "<span>Giảng viên<br><strong>" + esc(B.trainer) + "</strong></span></div></div>";
    }
    return '<div class="cover"><div class="eyebrow">' + esc(headEyebrow(l)) + "</div><h1>" + fmt(l.title) + "</h1><p>" + fmt(l.summary) + '</p><div class="who">' + logo(true) + "<span>" + esc(B.trainer) + "</span>" + (pt && pt.id !== 0 && pt.id !== 9 ? "<span>" + esc(pt.label) + " · " + esc(pt.title) + "</span>" : "") + "</div></div>";
  }
  function buildSlides(id) {
    var slides = [];
    if (id === "cover" || !id) {
      slides.push(coverHTML(null));
      slides.push('<section class="blk"><div class="eyebrow">Lộ trình</div><h2>8 chặng, 3 kết quả</h2><ul class="klist">' + C.parts.filter(function (p) { return p.id > 0 && p.id < 9; }).map(function (p) { return '<li><span class="k">' + esc(p.label.replace("Phần ", "P")) + '</span><span class="v"><b>' + esc(p.title) + "</b> · " + esc(p.summary) + "</span></li>"; }).join("") + "</ul></section>");
      return slides;
    }
    var l = C.lesson(id), data = C.content[id];
    slides.push(coverHTML(l));
    if (data) data.blocks.forEach(function (b) { if (!b.pageOnly) slides.push(C.renderBlock(b, { id: id, deck: true })); });
    var i = ORDER.indexOf(id), next = C.lesson(ORDER[i + 1]);
    if (next) slides.push('<section class="blk lay-statement"><div class="eyebrow">Tiếp theo · ' + esc(C.label(next)) + '</div><div class="lines"><span>' + fmt(next.title) + '</span></div><div class="sub">' + fmt(next.summary) + "</div></section>");
    else slides.push('<div class="cover"><div class="eyebrow">Kết thúc khoá học</div><h1>Cảm ơn cả lớp!</h1><p>Hãy chọn một việc trong tuần này để giao cho Claude, và quay lại bảng lệnh khi cần.</p><div class="who">' + logo(true) + "<span><strong>" + esc(B.trainer) + "</strong></span></div></div>");
    return slides;
  }
  function deckChrome() {
    var d = $("#deck");
    d.innerHTML = '<div class="deck-top"><span class="eyebrow" id="deckEyebrow"></span><span class="sp"></span>' + logo() +
      '<button class="icon-btn" id="deckFull" title="Toàn màn hình (F)">' + ICO.full + '</button><button class="icon-btn" id="deckTheme" title="Sáng/tối (T)">' + ICO.moon + '</button><button class="icon-btn" id="deckClose" title="Thoát (Esc)">' + ICO.close + "</button></div>" +
      '<div class="deck-stage" id="deckStage"></div>' +
      '<div class="deck-bottom"><button class="icon-btn" id="deckPrev" aria-label="Lùi">' + C.ICON.prev + '</button><span id="deckCount"></span><div class="bar"><i id="deckBar"></i></div><span class="deck-timer" id="deckTimer" title="Bấm để bắt đầu/tạm dừng đồng hồ buổi học">⏱ 00:00</span><span>' + esc(B.trainer) + '</span><button class="icon-btn" id="deckNext" aria-label="Tiếp">' + C.ICON.next + "</button></div>";
    $("#deckClose").onclick = stopDeck;
    $("#deckPrev").onclick = function () { deckStep(-1); };
    $("#deckNext").onclick = function () { deckStep(1); };
    $("#deckFull").onclick = toggleFull;
    $("#deckTheme").onclick = toggleTheme;
    $("#deckTimer").onclick = toggleTimer;
    var sx = null;
    $("#deckStage").addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
    $("#deckStage").addEventListener("touchend", function (e) { if (sx == null) return; var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) deckStep(dx < 0 ? 1 : -1); sx = null; });
  }
  function startDeck(id, atEnd) {
    id = id || curId || "cover";
    if (id === "") id = "cover";
    if (!deck.on) { deckChrome(); deck.on = true; document.body.classList.add("presenting"); $("#deck").setAttribute("aria-hidden", "false"); }
    deck.id = id;
    deck.slides = buildSlides(id);
    var l = C.lesson(id);
    $("#deckEyebrow").textContent = l ? (C.label(l) + " · " + l.title) : B.courseName;
    showSlide(atEnd ? deck.slides.length - 1 : 0, 1, true);
    if (l && location.hash !== "#/" + id) { history.replaceState(null, "", "#/" + id); route(); }
  }
  function stopDeck() {
    deck.on = false;
    document.body.classList.remove("presenting");
    $("#deck").setAttribute("aria-hidden", "true");
    if (document.fullscreenElement && document.exitFullscreen) document.exitFullscreen().catch(function () { });
  }
  /* Thu nhỏ chữ cho tới khi cả slide vừa khung hình (không phải cuộn) */
  function fitSlide(s) {
    var inner = s.firstChild;
    if (!inner) return;
    inner.style.fontSize = "";
    inner.style.maxWidth = "";
    var base = parseFloat(getComputedStyle(inner).fontSize) || 20;
    var size = base, guard = 0;
    var avail = function () { return s.clientHeight - parseFloat(getComputedStyle(s).paddingTop) - parseFloat(getComputedStyle(s).paddingBottom); };
    while (inner.scrollHeight > avail() && size > 11 && guard++ < 40) {
      size -= 0.5;
      inner.style.fontSize = size + "px";
    }
    // nội dung quá dài (ví dụ bảng lệnh K4): giữ cỡ chữ dễ đọc và cho cuộn trong slide
    if (inner.scrollHeight > avail()) { inner.style.fontSize = ""; s.classList.add("scroll"); }
  }
  window.addEventListener("resize", function () { if (deck.on) { var s = $("#deckStage .slide:not(.leaving)"); if (s) fitSlide(s); } });

  function showSlide(i, dir, first) {
    var stage = $("#deckStage");
    var olds = $$(".slide", stage);
    var s = document.createElement("div");
    s.className = "slide " + (dir > 0 ? "from-right" : "from-left");
    s.innerHTML = '<div class="inner">' + deck.slides[i] + "</div>";
    stage.appendChild(s);
    $$(".rv", s).forEach(function (el) { el.classList.add("in"); });
    $$(".viz", s).forEach(function (v) { initViz(v); setViz(v, 0); v._started = true; });
    $$(".checklist", s).forEach(initChecklist);
    fitSlide(s);
    requestAnimationFrame(function () { requestAnimationFrame(function () { s.classList.remove("from-right", "from-left"); }); });
    // mọi slide cũ (kể cả slide đang trượt ra khi bấm nhanh) đều được ẩn và gỡ bỏ
    olds.forEach(function (o) {
      o.classList.remove("out-left", "out-right");
      o.classList.add("leaving", dir > 0 ? "out-left" : "out-right");
      setTimeout(function () { if (o.parentNode) o.parentNode.removeChild(o); }, 560);
    });
    deck.i = i;
    $("#deckCount").textContent = (i + 1) + " / " + deck.slides.length;
    $("#deckBar").style.width = ((i + 1) * 100 / deck.slides.length) + "%";
  }
  function deckStep(dir) {
    if (!deck.on) return;
    var s = $("#deckStage .slide:not(.leaving)");
    var v = s && $(".viz", s);
    if (v) {
      var n = +v.dataset.steps || 0;
      if (dir > 0 && (v._step || 0) < n) { stopViz(v); setViz(v, (v._step || 0) + 1); return; }
      if (dir < 0 && (v._step || 0) > 0) { stopViz(v); setViz(v, v._step - 1); return; }
    }
    var ni = deck.i + dir;
    if (ni >= 0 && ni < deck.slides.length) return showSlide(ni, dir);
    if (deck.id === "cover") { if (dir > 0) startDeck(ORDER[0]); return; }
    var k = ORDER.indexOf(deck.id) + dir;
    if (k >= 0 && k < ORDER.length) startDeck(ORDER[k], dir < 0);
  }
  function toggleFull() {
    var el = document.documentElement;
    if (!document.fullscreenElement) { if (el.requestFullscreen) el.requestFullscreen().catch(function () { toast("Trình duyệt không cho phép toàn màn hình"); }); }
    else if (document.exitFullscreen) document.exitFullscreen();
  }
  function toggleTimer() {
    deck.timerRun = !deck.timerRun;
    if (deck.timerRun) deck.timerStart = Date.now(); else deck.timerAcc += Date.now() - deck.timerStart;
    var t = $("#deckTimer"); if (t) t.classList.toggle("run", deck.timerRun);
  }
  setInterval(function () {
    var t = $("#deckTimer"); if (!t) return;
    var ms = deck.timerAcc + (deck.timerRun ? Date.now() - deck.timerStart : 0);
    var s = Math.floor(ms / 1000), hh = Math.floor(s / 3600), mm = Math.floor(s / 60) % 60;
    t.textContent = "⏱ " + (hh ? hh + ":" : "") + pad(mm) + ":" + pad(s % 60);
  }, 1000);

  /* ---------- phím tắt ---------- */
  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea") return;
    var k = e.key;
    if (k === "Escape") { $("#keysModal").classList.remove("open"); closeToc(); if (deck.on) stopDeck(); return; }
    if (k === "p" || k === "P") { deck.on ? stopDeck() : startDeck(); return; }
    if (k === "t" || k === "T") { toggleTheme(); return; }
    if (k === "f" || k === "F") { toggleFull(); return; }
    if (k === "?") { $("#keysModal").classList.add("open"); return; }
    if (deck.on) {
      if (k === "ArrowRight" || k === "PageDown" || k === " " || k === "Enter") { e.preventDefault(); deckStep(1); }
      else if (k === "ArrowLeft" || k === "PageUp" || k === "Backspace") { e.preventDefault(); deckStep(-1); }
      return;
    }
    if (k === "m" || k === "M") { document.body.classList.contains("toc-open") ? closeToc() : openToc(); return; }
    if (k === "h" || k === "H") { location.hash = "#/"; return; }
    var i = ORDER.indexOf(curId);
    if (k === "ArrowRight" && i >= 0 && i < ORDER.length - 1) location.hash = "#/" + ORDER[i + 1];
    if (k === "ArrowLeft" && i > 0) location.hash = "#/" + ORDER[i - 1];
  });

  /* ---------- khởi động ---------- */
  shell();
  window.addEventListener("hashchange", function () { closeToc(); route(); });
  route();
  /* Mở thẳng chế độ trình chiếu: index.html?trinh-chieu#/L07 (thêm &toi để dùng giao diện tối) */
  if (/[?&]toi\b/.test(location.search)) { document.documentElement.setAttribute("data-theme", "dark"); paintThemeBtn(); }
  if (/[?&]trinh-chieu\b/.test(location.search)) setTimeout(function () { startDeck(curId || "cover"); }, 60);
  C.app = { route: route, startDeck: startDeck, stopDeck: stopDeck, isDone: isDone, store: store };
})();
