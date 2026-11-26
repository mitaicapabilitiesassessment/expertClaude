/* Bài 13 · Chọn đúng model cho đúng việc */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("gioi-nhanh-tiet-kiem", function () {
    var models = [
      { n: "Fable 5.2", g: 1.0, f: .45, t: .2 },
      { n: "Opus 5.5", g: .88, f: .55, t: .45 },
      { n: "Sonnet 5.5", g: .72, f: .78, t: .7 },
      { n: "Haiku 5.5", g: .52, f: 1.0, t: 1.0 }
    ];
    var s = V.g(1, V.t(150, 26, "Giỏi", "xs mut m") + V.t(330, 26, "Nhanh", "xs mut m") + V.t(510, 26, "Tiết kiệm hạn mức", "xs mut m"));
    models.forEach(function (m, i) {
      var y = 44 + i * 46;
      s += V.g(1, V.t(20, y + 19, m.n, "sm", "start") +
        '<rect x="110" y="' + y + '" width="160" height="22" rx="11" fill="#1e3350"/><rect x="110" y="' + y + '" width="' + (160 * m.g) + '" height="22" rx="11" fill="#d97757"/>' +
        '<rect x="290" y="' + y + '" width="160" height="22" rx="11" fill="#1e3350"/><rect x="290" y="' + y + '" width="' + (160 * m.f) + '" height="22" rx="11" fill="#ec9a7a"/>' +
        '<rect x="470" y="' + y + '" width="160" height="22" rx="11" fill="#1e3350"/>' + V.g(2, '<rect x="470" y="' + y + '" width="' + (160 * m.t) + '" height="22" rx="11" fill="#6fc59b"/>', "fade"));
    });
    s += V.g(3, V.box(110, 236, 260, 48, { cls: "v-box" }) + V.icon("gear", 122, 248, 24, "acc") + V.t(156, 258, "Mức suy nghĩ: low → max", "sm", "start") + V.t(156, 275, "việc khó thì nâng lên", "xs mut", "start"));
    s += V.g(4, '<rect x="16" y="88" width="628" height="44" rx="10" fill="none" stroke="#ffc72c" stroke-width="2.5"/>' + V.t(650, 115, "mặc định", "xs acc", "start"), "fade");
    s += V.g(5, V.box(390, 236, 290, 48, { cls: "v-box" }) + V.icon("clock", 402, 248, 24, "acc") + V.t(436, 258, "Chọn ngay đầu phiên", "sm", "start") + V.t(436, 275, "đổi giữa chừng mất bộ nhớ đệm", "xs mut", "start"));
    return V.svg(720, 295, s);
  });

  C.register({
    id: "L13",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 13 · Chọn đúng model",
        lines: ["Chọn ==đúng model==", "cho đúng việc."],
        sub: "Không phải việc nào cũng cần model mạnh nhất.",
        after: ["Claude có 4 model, từ mạnh nhất tới nhanh và nhẹ nhất. Trong Claude Code, model mặc định trên các gói Pro, Max là ==Opus 5.5==, và nhiều người dùng luôn cho mọi việc. Nhưng model càng mạnh càng chậm và càng tốn hạn mức. Chọn đúng model thì có kết quả nhanh hơn, hạn mức cũng dùng được lâu hơn."],
        sources: [{ label: "Claude Code docs · Model configuration", url: "https://code.claude.com/docs/en/model-config" }]
      },
      {
        layout: "visual", eyebrow: "Các model", title: "Giỏi, nhanh hay tiết kiệm",
        visual: "gioi-nhanh-tiet-kiem",
        captions: [
          "Mỗi model có ==thế mạnh riêng== (thanh dài hơn là mạnh hơn; minh hoạ tương đối).",
          "Giỏi hơn thì ==chậm hơn== và ==tốn hạn mức hơn==: thanh Tiết kiệm ngắn lại.",
          "==Mức suy nghĩ== (effort): nghĩ kỹ hơn khi gặp việc khó.",
          "==Opus 5.5== là mặc định, đủ cho phần lớn việc của teamlead.",
          "Chọn ==ngay đầu phiên==, vì đổi giữa chừng làm mất bộ nhớ đệm ([[L12]])."
        ]
      },
      {
        layout: "table", eyebrow: "Gợi ý từ Anthropic", title: "Việc nào thì dùng model nào",
        text: ["Bảng hướng dẫn chọn model của chính Anthropic. Bảng viết cho cả người dùng API, nên với gói Pro/Max, chữ \"rẻ\" ở đây nghĩa là ==tốn ít hạn mức hơn==."],
        head: ["Khi bạn cần", "Nên bắt đầu với", "Ví dụ"],
        widths: ["32%", "20%", "48%"],
        keyCol: 1,
        rows: [
          ["Năng lực cao nhất hiện có", "Fable 5.2", "Phiên agent chạy hàng giờ, nghiên cứu sâu nhiều bước, phân tích rồi làm thành tài liệu, bảng tính hay bộ slide hoàn chỉnh"],
          ["Việc phức tạp, dài hơi, công việc doanh nghiệp", "Opus 5.5", "Agent tự làm nhiều giờ liền, sửa trên diện rộng, hệ thống phức tạp, việc nhiều hình ảnh, điều khiển máy tính"],
          ["Vừa nhanh vừa giỏi cho việc hằng ngày", "Sonnet 5.5", "Viết, phân tích dữ liệu, tạo nội dung, hiểu hình ảnh, dùng công cụ"],
          ["Nhanh nhất, tiết kiệm nhất", "Haiku 5.5", "Phản hồi tức thì, khối lượng lớn, việc nhỏ cần tiết kiệm, việc giao cho trợ lý (sub-agent)"]
        ],
        note: "Áp vào công việc teamlead: báo cáo quý, phân tích nhiều file, dựng website: dùng ==Opus 5.5==. Viết nháp tin nhắn, đổi định dạng, tóm tắt một ghi chú: ==dùng Sonnet hoặc Haiku== là đủ, nhanh hơn và đỡ tốn hạn mức.",
        sources: [{ label: "Choosing a model", url: "https://platform.claude.com/docs/en/about-claude/models/choosing-a-model" }]
      },
      {
        layout: "list", eyebrow: "Còn Fable thì sao", title: "Opus 5.5 hay Fable 5.2?",
        text: ["Nếu ô chọn model của bạn có Fable, bạn sẽ thắc mắc vì sao không dùng luôn model \"mạnh nhất\"."],
        items: [
          { k: "01", text: "Ngày 9/11/2026, Anthropic ra mắt ==Fable 5.2==: model mạnh nhất mở cho mọi khách hàng, nhanh hơn tới 30% so với Fable 5.1. Bản Mythos 5.2 (ít lớp bảo vệ hơn) chỉ dành cho tổ chức đã được thẩm định." },
          { k: "02", text: "Chính Anthropic khuyên ==bắt đầu với Opus 5.5==, gọi đây là model \"dùng hằng ngày\" mạnh nhất." },
          { k: "03", text: "Fable tốn hơn: gói Pro dùng Fable bằng ==usage credits== (trả thêm); Max và Ultra dùng Fable tới ==một nửa hạn mức tuần==." },
          { k: "04", text: "Vậy nên: Fable cho ==việc khó và dài nhất==; việc lớn thông thường, Opus 5.5 làm tốt mà tiết kiệm hơn." }
        ],
        sources: [
          { label: "Introducing Claude Fable 5.2 and Claude Mythos 5.2", url: "https://www.anthropic.com/claude-fable-and-mythos-5-2" },
          { label: "claude.com/pricing", url: "https://claude.com/pricing" }
        ]
      },
      {
        layout: "table", eyebrow: "Mức suy nghĩ (effort)", title: "Nghĩ kỹ hơn, nhưng chậm hơn",
        text: ["Effort quyết định Claude nghĩ kỹ tới đâu trước khi trả lời hay bắt tay vào làm. Nghĩ kỹ hơn thì kết quả tốt hơn với việc khó, nhưng chờ lâu hơn và tốn hạn mức hơn. Mặc định trên Fable 5.2, Opus 5.5, Sonnet 5.5, Haiku 5.5 là ==medium==."],
        head: ["Mức", "Khi nào dùng"],
        widths: ["18%", "82%"],
        rows: [
          ["low", "Việc nhỏ cần nhanh: viết nháp, đổi tên file, đổi định dạng."],
          ["medium", "Mặc định. Đủ cho hầu hết việc hằng ngày."],
          ["high", "Việc cần kiểm tra kỹ: đối chiếu số liệu, sửa một lỗi khó."],
          ["xhigh", "Việc rất khó, nhiều bước."],
          ["max", "Chỉ cho việc cực khó mà bạn để Claude tự làm lâu; dễ nghĩ quá đà và tốn thêm hạn mức."]
        ],
        after: ["Gõ `/effort` để mở thanh chọn mức, `/effort high` để đặt thẳng, `/effort auto` để về mặc định. Trên các model kể trên, ==đổi mức suy nghĩ giữa chừng không làm mất bộ nhớ đệm== (khác với đổi model)."],
        sources: [{ label: "Claude Code docs · Model configuration (effort)", url: "https://code.claude.com/docs/en/model-config" }]
      },
      {
        layout: "commands", eyebrow: "Lệnh của bài", title: "Đổi model và mức suy nghĩ",
        commands: ["C08", "C23"]
      },
      {
        layout: "tips", eyebrow: "Bài tập", title: "Thử ngay",
        try: "Mở ô chọn model cạnh nút gửi xem bạn đang dùng model nào. Lần tới gặp việc nhỏ, mở phiên mới với Sonnet hoặc Haiku rồi so sánh tốc độ.",
        ask: "\"Với 3 việc mình làm nhiều nhất mỗi tuần, nên dùng model nào và mức suy nghĩ nào? Vì sao?\""
      }
    ]
  });
})();
