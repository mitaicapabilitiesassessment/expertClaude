/* Bài 11 · Context window */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("mat-ban-day-dan", function () {
    var s = V.g(1, '<path d="M60 250 L660 250 L620 285 L100 285 Z" class="v-box2"/>' + V.t(360, 302, "mặt bàn (context window)", "xs mut"));
    var papers = [[120, 214, -4], [170, 206, 3], [230, 214, -2], [290, 204, 4], [350, 212, -3], [410, 204, 2], [470, 214, -5], [530, 206, 3], [580, 212, -2]];
    papers.forEach(function (p, i) {
      var st = i < 3 ? 2 : i < 7 ? 2 : 3;
      s += V.g(i < 4 ? 2 : 3, '<rect x="' + p[0] + '" y="' + (p[1] - i * 6) + '" width="70" height="46" rx="4" fill="#f0e8d5" transform="rotate(' + p[2] + " " + (p[0] + 35) + " " + p[1] + ')"/>' +
        '<rect x="' + (p[0] + 8) + '" y="' + (p[1] - i * 6 + 10) + '" width="44" height="5" rx="2" fill="#9eabbc" transform="rotate(' + p[2] + " " + (p[0] + 35) + " " + p[1] + ')"/>', "fade");
    });
    s += V.g(3, V.box(470, 40, 210, 50, { cls: "v-box", style: "stroke:#c0392b;stroke-width:2" }) + V.t(575, 62, "Bàn gần đầy", "sm") + V.t(575, 80, "dễ quên, dễ nhầm", "xs mut"), "pop");
    s += V.g(4, V.box(40, 40, 200, 50, { cls: "v-box" }) + V.t(140, 62, "/compact", "sm m acc") + V.t(140, 80, "gom thành 1 trang tóm tắt", "xs mut"), "pop");
    s += V.g(5, V.box(260, 40, 190, 50, { cls: "v-box" }) + V.t(355, 62, "/clear", "sm m acc") + V.t(355, 80, "dọn sạch cho việc mới", "xs mut"), "pop");
    return V.svg(720, 310, s);
  });

  C.register({
    id: "L11",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 11 · Context window",
        lines: ["Mọi thứ trong cuộc trò chuyện", "đều nằm trên ==mặt bàn== của Claude."],
        sub: "Mặt bàn của Claude rất rộng, nhưng vẫn có giới hạn.",
        after: ["\"Context window\" là lượng thông tin Claude giữ được cùng lúc trong một phiên: tin nhắn của bạn, file Claude đã đọc, câu trả lời, `CLAUDE.md`, skill đang mở. Khoá học này sẽ gọi nó là ==mặt bàn làm việc== của Claude. Các model hiện nay có mặt bàn tới khoảng 1 triệu token, nhưng bàn rộng không có nghĩa là bày bừa thì vẫn làm tốt."],
        sources: [{ label: "Models overview (context window)", url: "https://platform.claude.com/docs/en/about-claude/models/overview" }]
      },
      {
        layout: "visual", eyebrow: "Mặt bàn đầy dần", title: "Khi nào nên dọn bàn",
        visual: "mat-ban-day-dan",
        captions: [
          "Đầu phiên: ==mặt bàn trống==, chỉ có cuốn sổ `CLAUDE.md`.",
          "Tin nhắn, file đã đọc, câu trả lời ==chồng lên như giấy tờ==.",
          "Bàn gần đầy thì Claude ==dễ quên, dễ nhầm== hơn.",
          "`/compact`: gom cả bàn thành ==một trang tóm tắt==, rồi làm tiếp.",
          "`/clear`: ==dọn sạch bàn== cho việc mới."
        ],
        after: ["Mặt bàn đầy, Claude không dừng lại nhưng làm việc kém đi: quên một yêu cầu nói từ đầu phiên, nhầm giữa hai file. Thấy Claude bắt đầu \"hà-lú\" thì thường đó là lúc dọn bàn."]
      },
      {
        layout: "list", eyebrow: "Ba lệnh cho ba việc", title: "Xem, gom, và dọn bàn",
        items: [
          { k: "01", text: "`/context`: xem mặt bàn ==đầy tới đâu== và phần nào chiếm nhiều chỗ nhất." },
          { k: "02", text: "`/compact`: khi nghỉ giữa một việc dài, ==gom lại thành bản tóm tắt== rồi làm tiếp. Có thể kèm lời dặn: `/compact giữ lại các số liệu đã đối chiếu`." },
          { k: "03", text: "`/clear`: khi chuyển sang ==việc khác hẳn==. Không file nào bị xoá, `CLAUDE.md` vẫn được đọc lại." },
          { k: "✓", text: "Quy tắc dễ nhớ: ==mỗi phiên một việc==." }
        ]
      },
      {
        layout: "compare", eyebrow: "Gõ /clear thì sao", title: "/clear dọn gì, giữ gì?",
        cols: [
          { who: "Dọn khỏi bàn", title: "Cuộc trò chuyện vừa rồi", items: ["Tin nhắn và câu trả lời trong phiên", "Nội dung các file Claude đã đọc"] },
          { who: "Vẫn còn nguyên", title: "Mọi thứ trên máy bạn", items: ["File trong thư mục, không có gì bị hoàn tác", "`CLAUDE.md`, ghi nhớ tự động, skill (được đọc lại)", "Cuộc trò chuyện cũ: mở lại bằng `/resume`"] }
        ],
        thumb: "`/clear` ==không xoá file nào==, chỉ dọn mặt bàn. Muốn bàn gọn mà vẫn làm tiếp việc đang dở: dùng `/compact`."
      },
      {
        layout: "steps", screen: "code", anchor: "vi-du", eyebrow: "Ví dụ thật", title: "Đọc /context của phiên Việc 1",
        steps: [
          "Quay lại phiên dài ở Việc 1 (hoặc `/resume` để mở lại), gõ `/context`.",
          "Claude hiện một lưới màu: bàn đầy bao nhiêu phần trăm, phần nào chiếm nhiều chỗ.",
          "Hỏi: ==\"Giải thích kết quả này cho mình bằng lời dễ hiểu.\"==",
          "Việc 1 đã xong, nên gõ `/clear` trước khi sang việc mới."
        ]
      },
      {
        layout: "output", eyebrow: "Kết quả mẫu", bar: "Claude trả lời",
        lines: [
          "Mặt bàn đang dùng khoảng một phần nhỏ dung lượng. Phần lớn là nội dung 3 file Excel",
          "đã đọc và các lần chạy thử script. CLAUDE.md và skill chỉ chiếm rất ít.",
          "",
          "Việc báo cáo đã xong, bạn có thể gõ `/clear` để bắt đầu việc mới cho gọn."
        ]
      },
      {
        layout: "commands", eyebrow: "Lệnh của bài", title: "Ba lệnh cho mặt bàn",
        commands: ["C03", "C02", "C01", "C22"]
      },
      {
        layout: "tips", eyebrow: "Bài tập", title: "Thử ngay",
        try: "Gõ `/context` ở phiên dài nhất của bạn, rồi nhờ Claude giải thích kết quả.",
        ask: "\"Khi nào mình nên dùng /compact, khi nào nên dùng /clear? Cho ví dụ trong công việc báo cáo hằng tuần.\""
      }
    ]
  });
})();
