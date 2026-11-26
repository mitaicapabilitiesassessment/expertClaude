/* Bài 14 · Kết nối: connectors, API, MCP */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("quan-an-api", function () {
    var s = "";
    s += V.g(1, V.box(470, 40, 220, 220, { cls: "v-box2", r: 16 }) + V.t(580, 66, "Quầy của dịch vụ", "sm") + V.t(580, 84, "(API của Gmail, Lịch…)", "xs mut") +
      V.icon("mail", 500, 110, 30, "acc") + V.icon("cal", 565, 110, 30, "acc") + V.icon("globe", 630, 110, 30, "acc"));
    s += V.g(2, '<rect x="500" y="168" width="160" height="70" rx="6" fill="#f0e8d5"/>' + V.t(580, 190, "THỰC ĐƠN", "xs m dk") + V.t(580, 210, "tài liệu API:", "xs dk") + V.t(580, 226, "gọi món thế nào", "xs dk"));
    s += V.g(1, '<circle cx="80" cy="150" r="36" fill="url(#gz)"/>' + V.t(80, 156, "Claude", "sm dk"));
    s += V.g(3, '<rect x="160" y="110" width="110" height="80" rx="6" fill="#f0e8d5"/>' + V.t(215, 136, "PHIẾU", "xs m dk") + V.t(215, 156, "thoi-tiet.py", "xs m dk") + V.t(215, 176, "Claude tự viết", "xs dk"), "pop");
    s += V.g(4, '<path d="M272 140 C 350 120, 410 120, 466 136" class="v-flow" marker-end="url(#aha)"/>' + '<path d="M466 170 C 400 200, 330 210, 120 180" class="v-line" marker-end="url(#ah)"/>' + V.t(370, 112, "gửi phiếu", "xs acc") + V.t(320, 222, "dữ liệu mang về", "xs mut"));
    s += V.g(5, V.box(150, 240, 270, 44, { cls: "v-box" }) + V.icon("lock", 162, 250, 24, "acc") + V.t(196, 260, "API key = thẻ thành viên", "xs", "start") + V.t(196, 276, "cất trong .env, không dán vào chat", "xs mut", "start"));
    s += V.g(6, V.t(360, 30, "Mỗi quầy một mẫu phiếu: đổi dịch vụ là viết phiếu mới", "sm acc"), "fade");
    return V.svg(720, 300, s);
  });

  C.addVisual("quan-an-mcp", function () {
    var s = "";
    s += V.g(1, '<circle cx="80" cy="150" r="36" fill="url(#gz)"/>' + V.t(80, 156, "Claude", "sm dk") + V.box(470, 60, 220, 180, { cls: "v-box2", r: 16 }) + V.t(580, 90, "Quầy (API)", "sm") + V.icon("mail", 520, 120, 30, "acc") + V.icon("cal", 610, 120, 30, "acc"));
    s += V.g(1, '<circle cx="300" cy="150" r="34" class="v-box" style="stroke:#d97757;stroke-width:2"/>' + V.icon("user", 286, 134, 28, "acc") + V.t(300, 204, "Người phục vụ", "sm") + V.t(300, 222, "(MCP)", "xs m acc"));
    s += V.g(2, '<path d="M118 140 L262 140" class="v-line" marker-end="url(#ah)"/>' + V.t(190, 128, "\"tuần này có lịch gì?\"", "xs"));
    s += V.g(3, '<path d="M336 150 L466 150" class="v-flow" marker-end="url(#aha)"/>' + V.t(400, 138, "viết phiếu giúp", "xs acc") + V.t(400, 172, "mang món ra", "xs mut"));
    s += V.g(4, V.box(195, 26, 210, 52, { cls: "v-box", style: "stroke:#6fc59b;stroke-width:2" }) + V.t(300, 48, "Connector", "sm") + V.t(300, 66, "Anthropic thuê sẵn, đã kiểm tra", "xs mut"), "pop");
    s += V.g(5, V.box(195, 238, 210, 52, { cls: "v-box", style: "stroke:#ffc72c;stroke-width:2" }) + V.t(300, 260, "Tự cài MCP", "sm") + V.t(300, 278, "bạn tự thuê: chọn nguồn tin cậy", "xs mut"), "pop");
    return V.svg(720, 300, s);
  });

  C.register({
    id: "L14",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 14 · Kết nối",
        lines: ["Ba cách để Claude", "==kết nối== với công cụ khác."],
        sub: "API, MCP và connector.",
        after: [
          "Tới giờ Claude chỉ làm việc với file trong thư mục. Để làm bản tin buổi sáng ở bài sau, Claude cần đọc lịch, email, tin tức: tức là phải ==kết nối ra bên ngoài==.",
          "Hình dung một quán ăn: mỗi dịch vụ (lịch, email, thời tiết) có một ==quầy gọi món==, Claude là khách, dữ liệu là món ăn. Ba cách kết nối chỉ khác nhau ở hai chỗ: ==ai viết phiếu gọi món==, và ==ai thuê người phục vụ==."
        ]
      },
      {
        layout: "visual", eyebrow: "Cách 1 · API", title: "API: Claude tự viết phiếu",
        visual: "quan-an-api",
        captions: [
          "Mỗi dịch vụ có ==một quầy riêng== để phần mềm khác gọi món: đó là API.",
          "Quầy nào cũng có ==thực đơn==: tài liệu API, ghi rõ phải gọi món thế nào.",
          "Claude đọc thực đơn rồi ==tự viết phiếu==: một script nhỏ như `thoi-tiet.py`.",
          "Gửi phiếu đi, ==dữ liệu được mang về==.",
          "Nhiều quầy cần ==thẻ thành viên== (API key) để biết ai gọi món. Ai cầm thẻ là gọi món bằng tài khoản của bạn, nên cất trong file `.env`, ==không dán vào chat==.",
          "Mỗi quầy ==một mẫu phiếu riêng==: đổi dịch vụ là Claude phải viết phiếu mới."
        ],
        after: ["Với API, bạn không cần biết lập trình: Claude đọc tài liệu và viết script giúp. Dán key vào chat thì giống đọc to số thẻ giữa quán đông người: nó được gửi đi, lưu lại trong cuộc trò chuyện, và hiện trên màn hình nếu bạn đang trình chiếu."]
      },
      {
        layout: "visual", eyebrow: "Cách 2 và 3 · MCP và connector", title: "MCP: người phục vụ viết phiếu giúp",
        visual: "quan-an-mcp",
        captions: [
          "==MCP== là ==người phục vụ== đứng giữa Claude và quầy.",
          "Claude chỉ cần ==nói điều mình cần== bằng lời thường.",
          "Người phục vụ ==viết phiếu giúp==, đưa vào quầy, mang món ra. Claude ==không phải tự viết phiếu==.",
          "Người phục vụ do ==Anthropic thuê sẵn== và kiểm tra: đó là ==connector==, bấm một cái là dùng.",
          "==Tự cài MCP== là bạn ==tự thuê== người phục vụ. Người này làm việc bằng tài khoản của bạn, nên chỉ thuê từ nguồn tin cậy."
        ],
        after: ["API và MCP khác nhau ở ==ai viết phiếu==. MCP và connector khác nhau ở ==ai thuê người phục vụ==. MCP còn là một chuẩn chung, nên người phục vụ nào cũng nhận yêu cầu của Claude theo cùng một kiểu."]
      },
      {
        layout: "table", eyebrow: "So sánh", title: "Khác nhau ở đâu?",
        head: ["", "Trong quán ăn", "Thực tế", "Bạn cần làm gì"],
        widths: ["14%", "28%", "32%", "26%"],
        rows: [
          ["API", "==Claude tự viết phiếu== theo mẫu của từng quầy", "Claude đọc tài liệu rồi viết script riêng cho từng dịch vụ", "Nhờ Claude viết. Cần key thì cất trong `.env`"],
          ["MCP", "Người phục vụ viết phiếu giúp, ==bạn tự thuê==", "Công cụ làm sẵn, Claude chỉ việc dùng", "Tự cài (`/mcp`), chỉ từ nguồn tin cậy, theo quy định IT"],
          ["Connector", "Người phục vụ ==Anthropic thuê sẵn== và kiểm tra", "Có sẵn trong Claude: Gmail, Google Calendar, Google Drive, Microsoft 365, Slack…", "Bật ở **Customize > Connectors** (Chat) hoặc nút **+** > **Connectors** (Code)"]
        ],
        note: "Quy tắc dễ nhớ: có connector thì ==dùng connector==; không có thì nhờ Claude dùng ==API==; MCP để dành cho lúc cần.",
        sources: [
          { label: "Claude Code docs · Desktop (connectors)", url: "https://code.claude.com/docs/en/desktop" },
          { label: "Claude Code docs · MCP", url: "https://code.claude.com/docs/en/mcp" }
        ]
      },
      {
        layout: "list", eyebrow: "Áp vào công việc", title: "Teamlead nên kết nối gì trước",
        text: ["Mỗi kết nối nên phục vụ một nhu cầu cụ thể. Đừng kết nối cho đủ bộ, ==kết nối khi có việc cần==."],
        items: [
          { k: "01", text: "==Lịch==: bản tin buổi sáng biết hôm nay có họp giao ban, gặp đối tác hay tập huấn đại lý." },
          { k: "02", text: "==Email==: lọc ra thư cần xem: khiếu nại của khách, yêu cầu từ đối tác bảo hiểm, đại lý cần hỗ trợ." },
          { k: "03", text: "==Google Drive / Microsoft 365==: đọc file báo cáo, quy tắc sản phẩm mà không phải tải về." },
          { k: "04", text: "==Slack hoặc công cụ chat nội bộ==: tóm tắt các kênh trao đổi của team." }
        ],
        note: "Email và lịch công ty chứa dữ liệu khách hàng. Trước khi kết nối tài khoản công việc, hỏi bộ phận IT/bảo mật về chính sách của công ty ([[L05]]). Trong buổi học, có thể dùng tài khoản Google cá nhân để thực hành.", noteTone: "warn"
      },
      {
        layout: "steps", screen: "code", anchor: "vi-du", eyebrow: "Làm thử", title: "Kết nối Google Calendar",
        steps: [
          "Trong thẻ Code: nút **+** cạnh ô nhập > **Connectors** (hoặc **Customize > Connectors** ở thanh bên).",
          "Chọn ==Google Calendar==, đăng nhập tài khoản Google và bấm cho phép.",
          "Hỏi: ==\"Tuần này mình có lịch gì?\"==",
          "Lần đầu dùng một công cụ, Claude hỏi bạn có cho phép không. Đọc kỹ rồi mới đồng ý."
        ]
      },
      {
        layout: "commands", eyebrow: "Lệnh của bài", title: "Kết nối ở đâu",
        commands: ["C16", "C26"]
      },
      {
        layout: "tips", eyebrow: "Bài tập", title: "Thử ngay",
        try: "Kết nối Google Calendar rồi hỏi Claude lịch tuần này. Không thấy mục Connectors? Cập nhật ứng dụng Claude lên bản mới nhất rồi mở lại.",
        ask: "\"API và MCP khác nhau thế nào? Giải thích cho mình bằng ví dụ quán ăn.\""
      }
    ]
  });
})();
