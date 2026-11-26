/* Bài 15 · Việc 2: Bản tin buổi sáng, tự chạy mỗi sáng */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("lich-chay-tuan", function () {
    var days = ["T2", "T3", "T4", "T5", "T6"];
    var s = V.g(1, '<path d="M60 150 L680 150" class="v-dash"/>' + days.map(function (d, i) {
      var x = 100 + i * 130;
      return '<circle cx="' + x + '" cy="150" r="7" fill="#9eabbc"/>' + V.t(x, 190, d, "sm m") + V.t(x, 210, "8:00", "xs mut m");
    }).join(""));
    s += V.g(2, '<circle cx="100" cy="150" r="22" fill="url(#gz)"/>' + V.icon("clock", 88, 138, 24, "dk") + V.icon("cal", 70, 70, 24, "acc") + V.icon("mail", 100, 70, 24, "acc") + V.icon("globe", 130, 70, 24, "acc") + '<path d="M100 98 L100 126" class="v-line" marker-end="url(#ah)"/>', "pop");
    s += V.g(3, '<circle cx="230" cy="150" r="22" fill="url(#gz)"/>' + V.box(196, 52, 70, 70, { cls: "v-box" }) + V.icon("doc", 216, 70, 30, "acc") + V.t(231, 116, "bản tin", "xs"), "pop");
    s += V.g(4, '<circle cx="360" cy="150" r="22" fill="#1e3350"/>' + V.t(360, 156, "zZ", "sm mut") + V.t(360, 112, "máy ngủ: bỏ lỡ", "xs mut"), "pop");
    s += V.g(5, '<path d="M372 150 C 390 120, 420 120, 436 140" class="v-acc-s" marker-end="url(#aha)"/>' + '<circle cx="448" cy="150" r="14" fill="url(#gz)"/>' + V.t(448, 112, "chạy bù 1 lần", "xs acc"), "pop");
    s += V.g(6, V.box(160, 236, 400, 44, { cls: "v-box2", r: 22 }) + V.icon("laptop", 176, 246, 24, "acc") + V.t(380, 263, "Lịch Local: ứng dụng mở và máy thức", "sm"));
    return V.svg(720, 290, s);
  });

  C.register({
    id: "L15",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 15 · Việc 2",
        lines: ["Đúng những gì bạn cần,", "==tự đến lúc 8:00==", "mỗi sáng ngày làm việc."],
        sub: "Claude phỏng vấn bạn, connector đọc lịch và email, và một lịch chạy.",
        after: [
          "Việc 2 ghép ba thứ: Claude ==phỏng vấn bạn== để biết bạn cần đọc gì mỗi sáng, ==connector== để đọc lịch và email ([[L14]]), và ==một lịch chạy== để bản tin tự đến mà bạn không cần bấm gì.",
          "Mỗi teamlead quan tâm một thứ khác nhau, nên thay vì dùng mẫu có sẵn, hãy để Claude hỏi bạn trước. Bên dưới là kết quả mẫu của một trưởng phòng kinh doanh bảo hiểm."
        ]
      },
      {
        layout: "visual", eyebrow: "Bản tin tự chạy mỗi sáng", title: "Lịch chạy trong một tuần",
        visual: "lich-chay-tuan",
        captions: [
          "Lịch chạy lúc ==8:00==, từ thứ Hai tới thứ Sáu.",
          "8:00: Claude mở một phiên, đọc ==những nguồn bạn đã chọn==: lịch, email, tin ngành, số liệu.",
          "Claude viết trang bản tin vào thư mục `02-ban-tin`, rồi ==báo cho bạn==.",
          "Một đêm máy ==ngủ==, lần chạy lúc 8:00 bị ==bỏ lỡ==.",
          "Máy thức dậy thì ==chạy bù một lần==.",
          "Với lịch chạy ==Local==, ứng dụng phải ==mở== và máy phải ==thức==."
        ]
      },
      {
        layout: "steps", screen: "code", anchor: "cac-buoc", eyebrow: "Bước 1", title: "Kết nối lịch và email",
        steps: [
          "Nút **+** > **Connectors**: kết nối ==Google Calendar== và ==Gmail==.",
          "Đăng nhập tài khoản Google và bấm cho phép.",
          "Thử hỏi: ==\"Hôm nay mình có mấy email chưa đọc?\"=="
        ]
      },
      {
        layout: "prompt", screen: "code", eyebrow: "Bước 2 · Claude phỏng vấn bạn", title: "Bản tin theo đúng nhu cầu của bạn",
        label: "Dán vào thẻ Code",
        prompt: "Mình muốn mỗi sáng có một bản tin ngắn để bắt đầu ngày làm việc. Hãy phỏng vấn mình, mỗi lần MỘT câu, khoảng 6 câu: mình cần biết gì từ lịch, từ email (thư nào là quan trọng), tin ngành bảo hiểm nào đáng theo dõi, số liệu nào cần xem, và điều gì cần báo gấp. Sau đó ghi yêu cầu của mình vào `02-ban-tin/yeu-cau.md`, rồi làm bản tin đầu tiên thành một trang HTML trong `02-ban-tin`, đặt tên theo ngày.",
        after: ["Trả lời tự nhiên, nói thay vì gõ càng tốt. Tin tức thì Claude tự tìm trên web; lịch và email lấy qua connector ở bước 1. Phần email giống một ==bộ lọc thông minh==: Claude không trả lời email thay bạn, chỉ đưa lên những mail cần bạn xem."]
      },
      {
        layout: "output", eyebrow: "Kết quả mẫu", bar: "02-ban-tin/yeu-cau.md",
        lines: [
          "# Bản tin buổi sáng: mình cần gì",
          "Lịch: các cuộc họp hôm nay, giờ, link họp; đánh dấu họp với Ban giám đốc",
          "Email: chỉ đưa lên thư khiếu nại của khách, thư từ đối tác bảo hiểm, đại lý cần hỗ trợ",
          "Tin ngành: 3 tin bảo hiểm phi nhân thọ đáng chú ý, mỗi tin 2 dòng, kèm link",
          "Số liệu: tổng phí tháng này tới hôm qua, từ file mới nhất trong `01-ban-hang`",
          "Báo gấp: khiếu nại quá 24 giờ chưa phản hồi; email có chữ \"gấp\"",
          "Đọc trong 5 phút, vừa một màn hình điện thoại."
        ]
      },
      {
        layout: "outputs", eyebrow: "Bản tin đầu tiên", title: "Một buổi sáng thứ Hai",
        items: [
          { label: "02-ban-tin/2026-11-23.html", good: true, heading: "Thứ Hai 23/11: 3 việc cần làm trước 10:00", items: ["**Lịch**: 9:00 giao ban kinh doanh (Meet) · 14:00 tập huấn đại lý vật chất ô tô", "**Email cần xem**: 2 khiếu nại bồi thường bảo hiểm sức khoẻ (1 cái đã quá 20 giờ) · Đối tác A gửi lịch họp SLA", "Đã lọc bỏ 17 thư không quan trọng"] },
          { label: "Phần còn lại", items: ["**Tin ngành**: 3 tin đáng chú ý trong 24 giờ qua, mỗi tin 2 dòng và một link", "**Số liệu**: tổng phí tháng 11 tới hôm qua, so với cùng kỳ tháng 10", "Muốn đổi gì cứ nói, ví dụ \"thêm tỷ giá\" hay \"thứ Sáu bỏ phần tin ngành\", và nhờ Claude cập nhật `yeu-cau.md`."] }
        ]
      },
      {
        layout: "steps", screen: "code", eyebrow: "Bước 3 · Hẹn giờ", title: "Cho bản tin tự chạy mỗi sáng",
        steps: [
          "Ở thanh bên của ứng dụng, mở **Scheduled** và tạo một task mới, chọn chạy trên máy (Local).",
          "Chọn tần suất ==Weekdays== (các ngày làm việc), giờ ==8:00==, dán lời nhắc bên dưới, chọn thư mục `hoc-claude-code`.",
          "Hoặc chỉ cần nói với Claude bằng một câu (lời nhắc thứ hai).",
          "Bấm ==Run now== để chạy thử một lần.",
          "Mỗi lần Claude xin quyền trong lúc chạy thử, chọn ==luôn cho phép== để những lần sau không bị treo."
        ],
        note: "Lịch chạy trên máy cần ứng dụng Claude Desktop bản 1.1.5368 trở lên. Bật **Keep computer awake** nếu muốn máy không tự ngủ trong giờ hẹn. Nhãn trong ứng dụng có thể thay đổi theo bản cập nhật.",
        sources: [{ label: "Claude Code docs · Desktop scheduled tasks", url: "https://code.claude.com/docs/en/desktop-scheduled-tasks" }]
      },
      {
        layout: "prompts", eyebrow: "Lời nhắc cho lịch chạy", title: "Hai cách hẹn giờ",
        items: [
          { label: "Dán vào ô lời nhắc của task", text: "Đọc `02-ban-tin/yeu-cau.md` và làm bản tin buổi sáng hôm nay đúng theo yêu cầu trong đó. Lưu thành trang HTML trong `02-ban-tin`, đặt tên theo ngày (ví dụ 2026-11-23.html). Không trả lời hay gửi email nào thay mình." },
          { label: "Hoặc nói với Claude", text: "Tạo giúp mình một lịch chạy trên máy này: 8:00 sáng các ngày làm việc, làm bản tin buổi sáng theo `02-ban-tin/yeu-cau.md` và lưu vào `02-ban-tin`." }
        ]
      },
      {
        layout: "compare", eyebrow: "Lưu ý", title: "Local hay Cloud?",
        cols: [
          { who: "Chạy trên máy (Local)", title: "Đủ cho bản tin", items: ["Chỉ chạy khi ==ứng dụng mở và máy thức==", "Sáng nào máy ngủ: khi thức dậy ==chạy bù một lần==", "Đọc và ghi được file trên máy bạn"] },
          { who: "Chạy trên đám mây (Cloud)", title: "Khi máy tắt vẫn chạy", items: ["Chạy cả khi máy tắt", "==Không thấy file trên máy== bạn, kết quả phải lưu chỗ khác", "Quản lý bằng lệnh `/schedule` (trước đây gọi là routines)"] }
        ],
        thumb: "Giờ chạy thực tế có thể trễ vài phút so với giờ hẹn. 8:00 mà bản tin chưa tới thì cũng đừng lo."
      },
      {
        layout: "list", eyebrow: "Vì sao dùng Code", title: "Vì sao làm việc này trong Claude Code",
        text: ["Chat cũng hẹn giờ được (từ gói Pro). Làm trong Code thì có thêm ba điều:"],
        items: [
          { k: "01", text: "Yêu cầu nằm trong ==một file== (`yeu-cau.md`): sửa lúc nào cũng được, lần chạy nào cũng đọc lại." },
          { k: "02", text: "Đọc được ==file trên máy==, như file doanh thu mới nhất trong `01-ban-hang`." },
          { k: "03", text: "Kết quả ==ghi vào thư mục== của bạn, mỗi ngày một trang, xem lại được." }
        ]
      },
      {
        layout: "commands", eyebrow: "Lệnh của bài", title: "Kết nối và hẹn giờ",
        commands: ["C16", "C17", "C24"]
      },
      {
        layout: "tips", eyebrow: "Bài tập", title: "Thử ngay",
        try: "Nhờ Claude thêm một phần bạn quan tâm (tỷ giá, một trang tin ngành) vào `yeu-cau.md`, rồi bấm Run now. Lịch chạy bị treo? Mở phiên đó ở thanh bên và trả lời câu hỏi xin quyền.",
        ask: "\"Bạn đang lấy tin ngành bảo hiểm từ những nguồn nào? Có nguồn nào chính thống hơn không?\""
      }
    ]
  });
})();
