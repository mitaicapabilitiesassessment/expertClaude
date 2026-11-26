/* Bài 19 · Khi mọi thứ ghép lại: hệ điều hành AI */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("nam-manh-ghep", function () {
    var pcs = [
      { s: 2, x: 60, y: 40, icon: "folder", t: "Dữ liệu", d: "Bài 04" },
      { s: 2, x: 60, y: 130, icon: "brain", t: "Trí nhớ", d: "Bài 10" },
      { s: 2, x: 60, y: 220, icon: "card", t: "Kỹ năng", d: "Bài 07" },
      { s: 3, x: 510, y: 70, icon: "plug", t: "Kết nối", d: "Bài 14" },
      { s: 3, x: 510, y: 190, icon: "clock", t: "Lịch chạy", d: "Bài 15" }
    ];
    var s = V.g(1, '<circle cx="360" cy="155" r="0"/>' + V.t(360, 22, "5 mảnh, mỗi mảnh một việc", "sm mut"), "fade");
    pcs.forEach(function (p) {
      var cx = p.x < 360 ? p.x + 150 : p.x;
      s += V.g(p.s, V.box(p.x, p.y, 150, 62, { cls: "v-box" }) + V.icon(p.icon, p.x + 12, p.y + 17, 28, "acc") + V.t(p.x + 50, p.y + 30, p.t, "sm", "start") + V.t(p.x + 50, p.y + 48, p.d, "xs m mut", "start") +
        '<path d="M' + cx + " " + (p.y + 31) + " L" + (p.x < 360 ? 290 : 430) + ' 155" class="v-flow"/>');
    });
    s += V.g(4, '<circle cx="360" cy="155" r="70" fill="url(#gz)"/>' + V.t(360, 148, "Hệ điều hành AI", "sm dk") + V.t(360, 168, "của bạn", "xs dk"), "pop");
    s += V.g(5, V.box(250, 252, 220, 40, { cls: "v-box2", r: 20 }) + V.t(360, 277, "bản tin · nhắc việc · báo cáo", "xs acc"));
    return V.svg(720, 300, s);
  });

  C.register({
    id: "L19",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 19 · Ghép lại",
        lines: ["Ghép mọi thứ lại,", "bạn có một ==hệ điều hành AI==."],
        sub: "Bộ não thứ hai biết việc của bạn, biết ghi nhớ, và tự làm việc cho bạn.",
        after: ["Khoá học đã đi qua 5 mảnh ghép: dữ liệu, trí nhớ, kỹ năng, kết nối, lịch chạy. Từng mảnh riêng lẻ đã có ích; ghép lại, chúng thành ==một hệ thống làm việc cùng bạn mỗi ngày== và tự chạy mà không cần bạn bấm gì."]
      },
      {
        layout: "visual", eyebrow: "Các mảnh ghép", title: "5 mảnh ghép thành một hệ thống",
        visual: "nam-manh-ghep",
        captions: [
          "5 mảnh bạn đã học, ==mỗi mảnh làm một việc==.",
          "==Dữ liệu, trí nhớ, kỹ năng==: Claude có tài liệu của bạn, nhớ cách bạn làm việc, biết quy trình của team.",
          "==Kết nối, lịch chạy==: Claude dùng được công cụ khác, và tự làm đúng giờ.",
          "Ghép lại thành ==hệ điều hành AI== của riêng bạn.",
          "Hệ thống tự gửi ==bản tin, lời nhắc, báo cáo== cho bạn."
        ]
      },
      {
        layout: "table", eyebrow: "Mỗi mảnh ở bài nào", title: "Nhìn lại khoá học",
        head: ["Mảnh ghép", "Là gì", "Học ở"],
        widths: ["20%", "56%", "24%"],
        rows: [
          ["Dữ liệu", "File trong thư mục bạn chọn, và những gì Claude được làm với chúng.", "[[L04]] · [[L05]]"],
          ["Trí nhớ", "Chỉ dẫn cá nhân, Projects, `CLAUDE.md`, ghi nhớ tự động.", "[[M2]] · [[L10]]"],
          ["Kỹ năng", "Skill: quy trình chuẩn, lần nào kết quả cũng như nhau.", "[[L07]] · [[L08]]"],
          ["Kết nối", "Lịch, email, Drive và các dịch vụ khác qua connector, API, MCP.", "[[M3]] · [[L14]]"],
          ["Lịch chạy tự động", "Để việc tự chạy đúng giờ, trên máy hoặc trên đám mây.", "[[L15]]"]
        ]
      },
      {
        layout: "cards", eyebrow: "Ví dụ cho teamlead", title: "Một tuần làm việc khi các mảnh đã ghép",
        dark: true,
        cards: [
          { tag: "Mỗi sáng 8:00", title: "Bản tin", text: "Lịch họp, khiếu nại cần xử lý, tin ngành, doanh thu tới hôm qua (Việc 2)." },
          { tag: "Mỗi thứ Hai", title: "Báo cáo tuần", text: "Lịch chạy gọi skill báo cáo doanh thu với file xuất mới nhất, ra bộ slide cho giao ban (Việc 1)." },
          { tag: "Sau mỗi cuộc họp", title: "Biên bản", text: "Skill biên bản họp ra đúng mẫu, có phân công và hạn chót, lưu vào thư mục của team." },
          { tag: "Khi cần", title: "Trang chia sẻ", text: "Kế hoạch, hướng dẫn cho đại lý thành artifact hoặc trang web có link (Việc 3)." }
        ],
        after: ["Hệ thống này dựng từ chính những khái niệm trong khoá học."]
      },
      {
        layout: "statement", eyebrow: "Một câu để nhớ",
        lines: ["Bạn ==cầm lái==,", "Claude làm."],
        sub: "Bắt đầu từ việc nhỏ, rồi thêm dần.",
        after: ["Không cần dựng cả hệ thống ngay. Bắt đầu với ==một việc==, làm cho nó chạy ổn định, rồi mới thêm việc tiếp theo."]
      },
      {
        layout: "tips", eyebrow: "Trước khi sang bài cuối", title: "Thử ngay",
        try: "Nhờ Claude vẽ ra ==hệ điều hành AI== bạn muốn có sau 3 tháng: mỗi mảnh ghép sẽ dùng vào việc gì trong công việc của bạn và team.",
        ask: "\"Dựa vào CLAUDE.md của mình, hệ điều hành AI của mình nên bắt đầu từ mảnh ghép nào trước? Vì sao?\""
      }
    ]
  });
})();
