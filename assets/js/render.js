/* ==========================================================================
   BỘ DỰNG NỘI DUNG: biến dữ liệu bài học (block) thành HTML
   ========================================================================== */
(function () {
  var C = window.Course;
  C.visuals = C.visuals || {};
  C.addVisual = function (id, fn) { C.visuals[id] = fn; };

  var ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return ESC[c]; }); }

  function lesson(id) { for (var i = 0; i < C.lessons.length; i++) if (C.lessons[i].id === id) return C.lessons[i]; return null; }
  function label(l) { return l.kind === "guide" ? "Trang " + l.num : "Bài " + l.num; }

  /* ---- định dạng nội dòng ----
     `mã`  ==tô sáng==  **đậm**  [chữ](https://...)  [[L07]]  [[L07|chữ]]  xuống dòng \n */
  function fmt(s) {
    if (s == null) return "";
    var codes = [];
    var out = esc(s).replace(/`([^`]+)`/g, function (m, c) { codes.push("<code>" + c + "</code>"); return "\u0000" + (codes.length - 1) + "\u0000"; });
    out = out.replace(/\[\[([A-Z]\d{1,2})(?:\|([^\]]+))?\]\]/g, function (m, id, txt) {
      var l = lesson(id);
      if (!l) return txt || id;
      return '<a class="lk" href="#/' + id + '" title="' + esc(l.title) + '">' + (txt || label(l)) + "</a>";
    });
    out = out.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|[a-z0-9_\-./#]+)\)/gi, function (m, txt, url) {
      var ext = /^https?:/.test(url);
      return '<a class="lk" href="' + url + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" + txt + "</a>";
    });
    out = out.replace(/==([^=]+?)==/g, '<mark class="hl">$1</mark>');
    out = out.replace(/\*\*([^*]+?)\*\*/g, "<strong>$1</strong>");
    out = out.replace(/\n/g, "<br>");
    out = out.replace(/\u0000(\d+)\u0000/g, function (m, i) { return codes[+i]; });
    return out;
  }
  function plain(s) { return String(s == null ? "" : s).replace(/==|\*\*|`/g, "").replace(/\[\[([A-Z]\d{1,2})(?:\|([^\]]+))?\]\]/g, function (m, id, t) { return t || id; }).replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"); }
  function paras(arr) {
    if (!arr) return "";
    if (!Array.isArray(arr)) arr = [arr];
    return arr.map(function (p) { return "<p>" + fmt(p) + "</p>"; }).join("");
  }
  function copyBtn(text, lbl) {
    return '<button class="copy" type="button" data-copy="' + esc(text) + '">' + (lbl || "Chép") + "</button>";
  }

  var ICON = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M15 6l-6 6 6 6"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M9 6l6 6-6 6"/></svg>',
    replay: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 12a8 8 0 1 0 3-6.2M4 4v4h4"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/></svg>',
    zip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M4 7a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M12 10v2m0 2v2"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>'
  };
  C.ICON = ICON;

  /* ---- các layout ---- */
  var L = {};
  C.layouts = L;

  L.prose = function () { return ""; };

  L.statement = function (b) {
    var lines = (b.lines || []).map(function (x) { return "<span>" + fmt(x) + "</span>"; }).join("");
    return '<div class="lines">' + lines + "</div>" + (b.sub ? '<div class="sub">' + fmt(b.sub) + "</div>" : "");
  };

  L.list = function (b) {
    return '<ul class="klist">' + (b.items || []).map(function (it, i) {
      var k = it.k != null ? it.k : String(i + 1).padStart(2, "0");
      return '<li><span class="k">' + esc(k) + '</span><span class="v">' + fmt(it.text || it) + "</span></li>";
    }).join("") + "</ul>";
  };

  L.compare = function (b) {
    var cols = b.cols || [];
    var h = '<div class="compare' + (cols.length === 3 ? " three" : "") + '">' + cols.map(function (c) {
      return '<div class="ccard"><div class="who">' + fmt(c.who) + "</div><h3>" + fmt(c.title) + "</h3><ul>" +
        (c.items || []).map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul></div>";
    }).join("") + "</div>";
    if (b.thumb) h += '<div class="thumb">' + fmt(b.thumb) + "</div>";
    return h;
  };

  L.cards = function (b) {
    return '<div class="cards">' + (b.cards || []).map(function (c) {
      return '<div class="card' + (b.dark || c.dark ? " dark" : "") + '">' +
        (c.big ? '<div class="big">' + fmt(c.big) + "</div>" : "") +
        (c.tag ? '<div class="tag">' + fmt(c.tag) + "</div>" : "") +
        (c.title ? "<h3>" + fmt(c.title) + "</h3>" : "") +
        (c.text ? "<p>" + fmt(c.text) + "</p>" : "") + "</div>";
    }).join("") + "</div>";
  };

  L.steps = function (b) {
    return '<ol class="steps">' + (b.steps || []).map(function (s) { return "<li>" + fmt(s) + "</li>"; }).join("") + "</ol>";
  };

  function promptBox(p) {
    var text = p.text || "";
    return '<div class="prompt' + (p.tone ? " " + p.tone : "") + '"><div class="prompt-head"><span class="lbl">' + esc(p.label || "Lời nhắc") + "</span>" +
      (p.nocopy ? "" : copyBtn(plain(text))) + '</div><div class="prompt-body">' + fmt(text) + "</div></div>";
  }
  L.prompt = function (b) { return promptBox({ label: b.label, text: b.prompt, tone: b.tone }); };
  L.prompts = function (b) { return (b.items || []).map(promptBox).join(""); };

  L.commands = function (b) {
    var rows = (b.commands || []).map(function (id) {
      var c = C.commands[id];
      if (!c) return "";
      return "<tr><td><span class=\"cmd" + (c.ui ? " ui" : "") + '">' + esc(c.cmd) + "</span>" + (c.alt ? '<span class="alt">' + fmt(c.alt) + "</span>" : "") +
        "</td><td>" + fmt(c.what) + "</td><td>" + (c.ui ? "" : copyBtn(c.cmd)) + "</td></tr>";
    }).join("");
    return '<div class="box"><table class="cmdtbl"><tbody>' + rows + "</tbody></table></div>";
  };

  function cell(v) {
    if (v === "✓" || v === true) return '<span class="yes">✓</span>';
    if (v === "—" || v === false) return '<span class="no">—</span>';
    return fmt(v);
  }
  L.table = function (b) {
    var key = b.keyCol != null ? b.keyCol : 0;
    var h = '<div class="tblwrap"><table class="tbl">';
    if (b.head) h += "<thead><tr>" + b.head.map(function (x, i) { return "<th" + (b.widths ? ' style="width:' + b.widths[i] + '"' : "") + ">" + fmt(x) + "</th>"; }).join("") + "</tr></thead>";
    h += "<tbody>" + (b.rows || []).map(function (r) {
      return "<tr>" + r.map(function (v, i) { return "<td" + (i === key ? ' class="key"' : "") + ">" + cell(v) + "</td>"; }).join("") + "</tr>";
    }).join("") + "</tbody></table></div>";
    return h;
  };

  L.output = function (b) {
    var lines = (b.lines || []).map(function (ln) {
      var cls = "", t = ln;
      if (/^> /.test(ln)) { cls = "me"; t = ln.slice(2); }
      else if (/^✓ /.test(ln)) { cls = "ok"; t = ln.slice(2); }
      else if (/^# /.test(ln)) { cls = "dim"; t = ln.slice(2); }
      return '<span class="ln ' + cls + '">' + (t ? fmt(t) : "&nbsp;") + "</span>";
    }).join("");
    return '<div class="output"><div class="output-bar"><i></i><i></i><i></i><span>' + esc(b.bar || "Claude Code") + '</span></div><div class="output-body">' + lines + "</div></div>";
  };

  /* hai (hoặc nhiều) kết quả đặt cạnh nhau: trước / sau */
  L.outputs = function (b) {
    return '<div class="outputs">' + (b.items || []).map(function (it) {
      var body = (it.heading ? '<h4>' + fmt(it.heading) + "</h4>" : "") + paras(it.text) +
        (it.items ? "<ul>" + it.items.map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul>" : "");
      return '<div class="paper' + (it.good ? " good" : "") + '"><div class="paper-bar">' + esc(it.label) + '</div><div class="paper-body">' + body + "</div></div>";
    }).join("") + "</div>";
  };

  L.tips = function (b) {
    var h = '<div class="tips">';
    if (b.try) h += '<div class="tip try"><div class="eyebrow">Thử ngay</div><p>' + fmt(b.try) + "</p></div>";
    if (b.ask) h += '<div class="tip ask"><div class="eyebrow">Hỏi Claude</div><div class="q">' + fmt(b.ask) + "</div>" + copyBtn(plain(b.ask).replace(/^"|"$/g, "")) + "</div>";
    return h + "</div>";
  };

  L.note = function () { return ""; };

  L.split = function (b) {
    return '<div class="split">' + (b.cols || []).map(function (c) {
      return "<div>" + (c.eyebrow ? '<div class="eyebrow">' + fmt(c.eyebrow) + "</div>" : "") + (c.title ? "<h3>" + fmt(c.title) + "</h3>" : "") + paras(c.text) +
        (c.items ? "<ul>" + c.items.map(function (x) { return "<li>" + fmt(x) + "</li>"; }).join("") + "</ul>" : "") + "</div>";
    }).join("") + "</div>";
  };

  L.logos = function (b) {
    return '<div class="logos">' + (b.groups || []).map(function (g) {
      return '<div class="logo-group"><div class="eyebrow">' + esc(g.label) + '</div><div class="logo-row">' + g.items.map(function (it) {
        return '<div class="lchip' + (it.me ? " me" : "") + '"><b>' + esc(it.name) + "</b><span>" + esc(it.org) + "</span></div>";
      }).join("") + "</div></div>";
    }).join("") + "</div>";
  };

  L.download = function (b) {
    return '<div class="dl-grid">' + (b.files || []).map(function (f) {
      var ico = /\.zip$/.test(f.href) ? ICON.zip : ICON.file;
      return '<a class="dl" href="' + esc(f.href) + '" download><span class="ico">' + ico + "</span><span><b>" + esc(f.title) + "</b><span>" + fmt(f.desc || "") + "</span></span><em>" + esc(f.size || "Tải về") + "</em></a>";
    }).join("") + "</div>";
  };

  L.checklist = function (b, ctx) {
    return '<ul class="checklist" data-key="' + esc((ctx && ctx.id || "") + ":" + (b.anchor || b.title || "")) + '">' + (b.items || []).map(function (x, i) {
      return '<li data-i="' + i + '"><span class="v">' + fmt(x) + "</span></li>";
    }).join("") + "</ul>";
  };

  L.visual = function (b, ctx) {
    var fn = C.visuals[b.visual];
    var svg = fn ? fn() : '<svg viewBox="0 0 720 120"><text class="v-t" x="20" y="60">Thiếu minh hoạ: ' + esc(b.visual) + "</text></svg>";
    var caps = b.captions || [];
    var dots = caps.map(function (_, i) { return '<i data-i="' + (i + 1) + '"></i>'; }).join("");
    var viz = '<div class="viz" data-viz="' + esc(b.visual) + '" data-steps="' + caps.length + '"><div class="viz-stage">' + svg + "</div>" +
      '<div class="viz-ctrl"><button type="button" class="vprev" aria-label="Bước trước">' + ICON.prev + '</button><button type="button" class="vnext" aria-label="Bước sau">' + ICON.next +
      '</button><div class="viz-dots">' + dots + '</div><button type="button" class="replay" aria-label="Xem lại từ đầu">' + ICON.replay + " Xem lại</button></div></div>";
    var list = caps.length ? '<ol class="captions">' + caps.map(function (c, i) { return '<li data-i="' + (i + 1) + '">' + fmt(c) + "</li>"; }).join("") + "</ol>" : "";
    return '<div class="viz-layout">' + viz + list + "</div>";
  };


  L.html = function (b) { return b.html || ""; };

  /* ---- khung chung của một block ---- */
  function renderBlock(b, ctx) {
    ctx = ctx || {};
    if (ctx.deck && b.deck) { b = Object.assign({}, b, b.deck); }
    var lay = b.layout || "prose";
    var fn = L[lay] || L.prose;
    var pill = "";
    if (b.screen) {
      var map = { code: ["", "Làm trong Claude Code"], chat: ["chat", "Làm trong Claude Chat"], both: ["both", "Chat và Code đều làm được"] };
      var m = map[b.screen] || ["", b.screen];
      pill = '<div class="pill ' + m[0] + '">' + m[1] + "</div>";
    }
    var h = '<section class="blk rv lay-' + lay + '"' + (b.anchor ? ' id="' + esc(b.anchor) + '"' : "") + ">";
    h += pill;
    if (b.eyebrow) h += '<div class="eyebrow">' + fmt(b.eyebrow) + "</div>";
    if (b.title) h += "<h2>" + fmt(b.title) + "</h2>";
    if (b.text) h += '<div class="text">' + paras(b.text) + "</div>";
    h += fn(b, ctx);
    if (b.after) h += '<div class="after">' + paras(b.after) + "</div>";
    if (b.note) h += '<div class="note' + (b.noteTone ? " " + b.noteTone : "") + '">' + paras(b.note) + "</div>";
    if (b.sources) {
      h += '<div class="src"><div class="eyebrow">Nguồn chính thống · kiểm tra ' + esc(b.checked || C.facts.checked) + "</div><ul>" +
        b.sources.map(function (s) { return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.label) + "</a></li>"; }).join("") + "</ul></div>";
    }
    return h + "</section>";
  }

  C.fmt = fmt;
  C.esc = esc;
  C.plain = plain;
  C.paras = paras;
  C.lesson = lesson;
  C.label = label;
  C.renderBlock = renderBlock;
  C.copyBtn = copyBtn;

  /* ---- thư viện hình cho minh hoạ SVG ---- */
  var V = {};
  function a(s, k) { return s ? ' data-s="' + s + '"' + (k ? ' class="' + k + '"' : "") : (k ? ' class="' + k + '"' : ""); }
  V.g = function (s, inner, cls, extra) { return "<g" + (s ? ' data-s="' + s + '"' : "") + (cls ? ' class="' + cls + '"' : "") + (extra || "") + ">" + inner + "</g>"; };
  V.box = function (x, y, w, h, o) {
    o = o || {};
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + (o.r != null ? o.r : 12) + '" class="' + (o.cls || "v-box") + '"' + (o.style ? ' style="' + o.style + '"' : "") + "/>";
  };
  V.t = function (x, y, txt, cls, anchor) {
    return '<text x="' + x + '" y="' + y + '" class="v-t ' + (cls || "") + '" text-anchor="' + (anchor || "middle") + '">' + esc(txt) + "</text>";
  };
  /* nhiều dòng chữ */
  V.tl = function (x, y, lines, cls, anchor, lh) {
    lh = lh || 18;
    return lines.map(function (ln, i) { return V.t(x, y + i * lh, ln, cls, anchor); }).join("");
  };
  /* hộp có tiêu đề + chú thích */
  V.card = function (x, y, w, h, title, sub, o) {
    o = o || {};
    var cx = x + w / 2;
    var s = V.box(x, y, w, h, { cls: o.cls || "v-box", r: o.r });
    if (o.icon) s += V.icon(o.icon, cx - 14, y + 14, 28, o.iconCls);
    var ty = o.icon ? y + 62 : y + h / 2 + (sub ? -4 : 6);
    s += V.t(cx, ty, title, o.tcls || "lg");
    if (sub) {
      var subs = Array.isArray(sub) ? sub : [sub];
      s += V.tl(cx, ty + 21, subs, "sm mut", "middle", 16);
    }
    return s;
  };
  V.arrow = function (d, cls) {
    return '<path d="' + d + '" class="' + (cls || "v-line") + '" marker-end="url(#ah)"/>';
  };
  V.defs = '<defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#9eabbc"/></marker>' +
    '<marker id="aha" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#d97757"/></marker>' +
    '<linearGradient id="gz" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#ffc72c"/><stop offset=".55" stop-color="#d97757"/><stop offset="1" stop-color="#ff3d1f"/></linearGradient></defs>';
  V.svg = function (w, h, inner) { return '<svg viewBox="0 0 ' + w + " " + h + '" xmlns="http://www.w3.org/2000/svg" role="img">' + V.defs + inner + "</svg>"; };

  /* biểu tượng nhỏ (vẽ trong khung 24x24, phóng theo size) */
  var IC = {
    file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
    folder: '<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    chat: '<path d="M4 5h16v11H9l-5 4z"/>',
    code: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
    gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/>',
    link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    slides: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M12 16v4M8 20h8"/>',
    doc: '<path d="M6 3h9l4 4v14H6z"/><path d="M9 10h7M9 14h7M9 18h4"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    plug: '<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4"/>',
    card: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    check: '<path d="M5 12l5 5 9-10"/>',
    spark: '<path d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2z"/>',
    brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h1V4zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3h-1V4z"/>',
    book: '<path d="M4 4h7a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4zM20 4h-7a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h7z"/>',
    shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
    bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    git: '<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="12" r="2.5"/><path d="M6 8.5v7M8.3 7.2c4 1 7.4 2 7.5 4.3"/>',
    rocket: '<path d="M12 2c4 2 6 6 6 10l-3 3H9l-3-3c0-4 2-8 6-10z"/><circle cx="12" cy="9" r="2"/><path d="M9 15l-3 5 4-2M15 15l3 5-4-2"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
    table: '<rect x="3" y="4" width="18" height="16" rx="1.5"/><path d="M3 9h18M3 14h18M9 4v16M15 4v16"/>',
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    undo: '<path d="M4 9h11a5 5 0 0 1 0 10H8"/><path d="M8 5L4 9l4 4"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
    server: '<rect x="4" y="3" width="16" height="7" rx="1.5"/><rect x="4" y="14" width="16" height="7" rx="1.5"/><path d="M8 6.5h.01M8 17.5h.01"/>',
    laptop: '<rect x="5" y="5" width="14" height="10" rx="1.5"/><path d="M2 19h20"/>',
    stack: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>'
  };
  V.icon = function (name, x, y, size, cls) {
    var sc = (size || 24) / 24;
    return '<g transform="translate(' + x + " " + y + ") scale(" + sc + ')" fill="none" stroke="' + (cls === "acc" ? "#ec9a7a" : cls === "dk" ? "#061323" : "#f0e8d5") +
      '" stroke-width="' + (1.8 / Math.max(sc, .6)).toFixed(2) + '" stroke-linecap="round" stroke-linejoin="round">' + (IC[name] || "") + "</g>";
  };
  C.V = V;
})();
