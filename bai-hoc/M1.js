/* Bài M1 · Claude hôm nay: một tài khoản, nhiều môi trường tương tác để bạn làm việc (Phần 0 – mới) */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("he-sinh-thai", function () {
    var s = "";
    // tâm: tài khoản
    s += V.g(1, '<circle cx="360" cy="150" r="58" fill="url(#gz)" opacity=".95"/>' + V.icon("user", 346, 112, 28, "dk") + V.t(360, 154, "Tài khoản", "sm dk") + V.t(360, 180, "Claude", "lg dk"), "pop");
    var nodes = [
      { s: 2, x: 40, y: 30, icon: "chat", t: "Claude Chat", sub: ["web · máy tính · điện thoại"] },
      { s: 3, x: 500, y: 30, icon: "code", t: "Claude Code", sub: ["thẻ Code · terminal · IDE"] },
      { s: 4, x: 40, y: 196, icon: "slides", t: "Design · Slides · Docs", sub: ["artifact có link riêng"] },
      { s: 5, x: 500, y: 196, icon: "globe", t: "Claude in Chrome", sub: ["và Microsoft 365, Outlook"] }
    ];
    nodes.forEach(function (n) {
      var cx = n.x + 80, cy = n.y + 40;
      var lx = n.x < 360 ? n.x + 180 : n.x, ly = cy;
      s += V.g(n.s, '<path d="M' + lx + " " + ly + " L" + (n.x < 360 ? 306 : 414) + " " + (cy < 150 ? 122 : 178) + '" class="v-flow"/>' +
        V.box(n.x, n.y, 180, 80) + V.icon(n.icon, n.x + 14, n.y + 14, 24, "acc") + V.t(n.x + 46, n.y + 32, n.t, "sm", "start") + V.tl(n.x + 14, n.y + 60, n.sub, "xs mut", "start"));
    });
    s += V.g(6, V.box(70, 300, 580, 44, { cls: "v-box2", r: 22 }) + V.icon("clock", 90, 310, 22, "acc") + V.t(130, 327, "Một hạn mức (usage) chung: theo phiên làm việc 5 giờ và theo tuần", "sm", "start"));
    return V.svg(720, 350, s);
  });

  C.register({
    id: "M1",
    blocks: [
      {
        layout: "statement", eyebrow: "Phần 0 · Bài M1",
        lines: ["Một tài khoản Claude,", "==nhiều nơi== để làm việc."],
        sub: "Bạn đã quen một nơi: khung chat. Bài này mở thêm những cánh cửa còn lại.",
        after: ["Phần lớn chúng ta biết Claude qua khung chat trên trình duyệt. Nhưng cùng tài khoản đó còn dùng được trong ứng dụng máy tính, trên điện thoại, trong trình duyệt Chrome, trong Excel, PowerPoint, và đặc biệt là **Claude Code**: nơi Claude tự làm cả một việc ngay trên máy tính của bạn."]
      },
      {
        layout: "visual", eyebrow: "Bức tranh toàn cảnh", title: "Một tài khoản, năm cánh cửa",
        visual: "he-sinh-thai",
        captions: [
          "Mọi thứ bắt đầu từ ==một tài khoản Claude== (Pro hoặc Max trong khoá này).",
          "==Claude Chat==: hỏi đáp, viết, phân tích, và làm hộ cả một việc. Dùng trên web, ứng dụng máy tính và điện thoại.",
          "==Claude Code==: AI agent làm việc trong thư mục trên máy bạn. Có ở thẻ Code của ứng dụng máy tính, terminal, VS Code, JetBrains và web.",
          "==Claude Design, Slides, Docs==: ra thiết kế, bộ slide, tài liệu dạng artifact có link riêng, ngay trong cuộc trò chuyện.",
          "==Claude in Chrome== và Claude cho Microsoft 365: đưa Claude vào trình duyệt và bộ Office (từ gói Pro).",
          "Tất cả ==dùng chung một hạn mức==: tính theo phiên 5 giờ và theo tuần."
        ],
        sources: [
          { label: "Claude · Plans & pricing", url: "https://claude.com/pricing" },
          { label: "Claude Code docs · Overview", url: "https://code.claude.com/docs/en/overview" }
        ]
      },
      {
        layout: "table", eyebrow: "Mỗi nơi để làm gì", title: "Chọn đúng cửa cho đúng việc",
        head: ["Nơi làm việc", "Mạnh ở đâu", "Ví dụ cho teamlead"],
        widths: ["24%", "42%", "34%"],
        rows: [
          ["Claude Chat", "Trả lời, viết nháp, cùng bạn suy nghĩ. Từ 16/9/2026, Chat đã gộp với Cowork nên còn làm hộ được cả một việc nhiều bước, dùng connector và skill.", "Soạn email phản hồi khách hàng về hồ sơ bồi thường; tóm tắt quy tắc sản phẩm mới."],
          ["Claude Code", "Làm ngay trong ==thư mục trên máy bạn==: đọc, tạo, sửa file, chạy phần mềm đã cài, để lại skill và script dùng lâu dài.", "Ghép 3 file Excel doanh thu thành bộ slide; làm bản tin tự chạy mỗi sáng."],
          ["Design · Slides · Docs", "Kết quả thành ==artifact== có link riêng, sửa tiếp được, xuất PowerPoint, PDF, Word. Từ gói Pro còn có Data, Sheets, Whiteboards.", "Slide họp giao ban tháng; tài liệu quy trình xử lý khiếu nại."],
          ["Claude in Chrome", "Claude thao tác trong trình duyệt Chrome của bạn.", "Tra cứu, điền biểu mẫu nội bộ trên web (dùng cẩn trọng, Bài 05)."],
          ["Điện thoại", "Chat, nói chuyện bằng giọng nói, theo dõi và điều khiển tiếp phiên Code từ xa.", "Duyệt nhanh bản nháp khi đang đi gặp đại lý."]
        ],
        note: "Trong ứng dụng Claude trên máy tính, bạn sẽ thấy hai thẻ chính: **Chat** và **Code**. Khoá học dùng cả hai: Chat cho những gì bạn đã quen, Code cho những việc cần làm trên máy."
      },
      {
        layout: "list", eyebrow: "Cùng một tài khoản nghĩa là", title: "Những thứ dùng chung ở mọi nơi",
        items: [
          { k: "01", text: "==Cùng một hạn mức.== Chat trên web, ứng dụng máy tính, điện thoại và Claude Code đều trừ vào chung một \"quỹ\": theo phiên 5 giờ và theo tuần. Xem ở **Settings > Usage**, hoặc gõ `/usage` trong Claude Code." },
          { k: "02", text: "==Cùng một bộ model.== Opus, Sonnet, Haiku, và Fable (gói Pro dùng Fable bằng usage credits; Max và Ultra có Fable tới một nửa hạn mức tuần)." },
          { k: "03", text: "==Cùng một bộ skill.== Skill bạn bật hay tải lên trong Chat sẽ tự đồng bộ sang Claude Code khi đăng nhập cùng tài khoản. Chi tiết ở [[M3]] và [[L07]]." },
          { k: "04", text: "==Cùng một kho artifact.== Bộ slide, tài liệu, thiết kế tạo ở đâu cũng nằm trong mục Artifacts của tài khoản. Chi tiết ở [[L09]]." }
        ],
        sources: [
          { label: "Understanding usage and length limits", url: "https://support.claude.com/en/articles/11647753-understanding-usage-and-length-limits" },
          { label: "Use Skills in Claude", url: "https://support.claude.com/en/articles/12512180-use-skills-in-claude" }
        ]
      },
      {
        layout: "table", eyebrow: "Gói nào có gì", title: "Những điểm khác nhau giữa các gói cá nhân",
        head: ["Tính năng", "Free", "Pro", "Max", "Ultra"],
        keyCol: 0,
        rows: [
          ["Claude Code", "—", "✓", "✓", "✓"],
          ["Projects", "Tối đa 5", "✓", "✓", "✓"],
          ["Research (nghiên cứu sâu)", "—", "✓", "✓", "✓"],
          ["Claude in Chrome · Microsoft 365", "—", "✓", "✓", "✓"],
          ["Model Opus", "—", "✓", "✓", "✓"],
          ["Model Fable", "—", "Trả bằng usage credits", "Tới 50% hạn mức tuần", "Tới 50% hạn mức tuần"],
          ["Hạn mức so với Pro", "Giới hạn", "1×", "5× (mỗi 5 giờ và mỗi tuần)", "10× mỗi tuần, không giới hạn 5 giờ*"]
        ],
        note: "*Không giới hạn theo phiên 5 giờ áp dụng cho tài khoản đã xác minh. Bảng giá chi tiết ở trang [[K1|Chuẩn bị trước khi học]].",
        sources: [{ label: "claude.com/pricing (đọc ngày 25/11/2026)", url: "https://claude.com/pricing" }]
      },
      {
        layout: "steps", screen: "both", eyebrow: "Thực hành 3 phút", title: "Một vòng tham quan ứng dụng",
        steps: [
          "Mở ứng dụng **Claude** trên máy tính và đăng nhập.",
          "Ở thanh bên: các cuộc trò chuyện, **Projects**, **Artifacts**, và **Customize** (nơi quản lý Skills, Connectors).",
          "Cạnh nút gửi: **ô chọn model**. Bấm thử để xem bạn đang dùng model nào.",
          "Bấm thẻ **Code** ở phía trên, chọn thư mục `hoc-claude-code` (đã tải ở trang [[K1]]).",
          "Gõ thử: \"Bạn thấy những file nào trong thư mục này?\" và xem Claude tự mở thư mục ra đọc."
        ],
        note: "Giao diện có thể thay đổi theo bản cập nhật. Nếu không thấy đúng nhãn, cứ hỏi chính Claude: \"Mình không tìm thấy mục Skills, nó nằm ở đâu?\""
      },
      {
        layout: "tips", eyebrow: "Trước khi sang bài sau", title: "Thử ngay",
        try: "Mở **Settings > Usage** xem bạn đã dùng bao nhiêu hạn mức trong phiên 5 giờ và trong tuần này.",
        ask: "\"Mình là teamlead kinh doanh bảo hiểm. Với 5 việc mình làm nhiều nhất tuần này, việc nào nên làm trong Chat, việc nào nên làm trong Claude Code? Giải thích ngắn.\""
      }
    ]
  });
})();
