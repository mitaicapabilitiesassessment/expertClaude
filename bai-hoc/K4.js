/* Trang K4 · Bảng lệnh và lời nhắc (tự gom từ mọi bài) */
(function () {
  var C = window.Course;
  var L = C.layouts;

  /* Bảng mọi lệnh, gom từ course-data.js */
  L.allcommands = function () {
    var ids = Object.keys(C.commands);
    var rows = ids.map(function (id) {
      var c = C.commands[id];
      var links = (c.lessons || []).map(function (lid) { var l = C.lesson(lid); return l ? '<a class="lsn" href="#/' + lid + '">' + C.esc(l.num) + "</a>" : ""; }).join("");
      return "<tr><td><span class=\"cmd" + (c.ui ? " ui" : "") + '">' + C.esc(c.cmd) + "</span>" + (c.alt ? '<span class="alt">' + C.fmt(c.alt) + "</span>" : "") +
        "</td><td>" + C.fmt(c.what) + links + "</td><td>" + (c.ui ? "" : C.copyBtn(c.cmd)) + "</td></tr>";
    }).join("");
    return '<div class="box"><table class="cmdtbl"><tbody>' + rows + "</tbody></table></div>";
  };

  /* Mọi lời nhắc trong khoá, gom theo bài */
  L.allprompts = function () {
    var h = "";
    C.lessons.forEach(function (l) {
      if (l.id === "K4") return;
      var data = C.content[l.id];
      if (!data) return;
      var items = [];
      data.blocks.forEach(function (b) {
        if (b.layout === "prompt" && b.prompt) items.push({ label: b.label || b.title || "Lời nhắc", text: b.prompt });
        if (b.layout === "prompts") (b.items || []).forEach(function (p) { if (p.tone !== "bad") items.push({ label: p.label, text: p.text }); });
        if (b.layout === "tips" && b.ask) items.push({ label: "Hỏi Claude", text: C.plain(b.ask).replace(/^"|"$/g, "") });
      });
      if (!items.length) return;
      h += '<div class="k4-group"><div class="eyebrow"><a class="lk" href="#/' + l.id + '">' + C.esc(C.label(l)) + "</a> · " + C.esc(l.title) + "</div>" +
        items.map(function (p) {
          return '<div class="prompt"><div class="prompt-head"><span class="lbl">' + C.esc(p.label) + "</span>" + C.copyBtn(C.plain(p.text)) + '</div><div class="prompt-body">' + C.fmt(p.text) + "</div></div>";
        }).join("") + "</div>";
    });
    return h;
  };

  C.register({
    id: "K4",
    blocks: [
      {
        layout: "allcommands", anchor: "lenh", eyebrow: "Lệnh và phím", title: "Mọi lệnh trong khoá",
        text: ["Bấm **Chép** để sao chép lệnh, dán vào ô nhập của thẻ Code. Số ở cuối mỗi dòng là bài có dùng lệnh đó. Lệnh có viền nét đứt là thao tác trên giao diện, không cần gõ."]
      },
      {
        layout: "allprompts", anchor: "loi-nhac", eyebrow: "Lời nhắc", title: "Mọi lời nhắc trong khoá, theo từng bài",
        text: ["Thay phần trong ngoặc vuông bằng thông tin của bạn. Lời nhắc nào dùng thường xuyên, hãy lưu thành skill ([[L07]])."]
      }
    ]
  });
})();
