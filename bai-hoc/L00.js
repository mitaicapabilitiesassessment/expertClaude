/* Bài 00 · Giới thiệu khoá học */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("lo-trinh", function () {
    var stops = [
      { x: 60, p: "0", t: "Nền tảng" }, { x: 140, p: "1", t: "Làm quen" }, { x: 220, p: "2", t: "An toàn" },
      { x: 300, p: "3", t: "Giao việc" }, { x: 380, p: "4", t: "Bộ nhớ" }, { x: 460, p: "5", t: "Kết nối" },
      { x: 540, p: "6", t: "Go live" }, { x: 620, p: "7", t: "Ghép lại" }
    ];
    var step = [1, 2, 2, 3, 4, 5, 6, 7];
    var s = '<path d="M40 130 C 200 110, 300 150, 460 128 S 640 120, 690 130" class="v-dash"/>';
    s += '<path d="M40 130 C 200 110, 300 150, 460 128 S 640 120, 690 130" class="v-flow" data-s="1" />';
    stops.forEach(function (o, i) {
      s += V.g(step[i], '<circle cx="' + o.x + '" cy="130" r="20" class="v-box" style="stroke:#d97757;stroke-width:2"/>' + V.t(o.x, 136, o.p, "lg m") + V.t(o.x, 176, "Phần " + o.p, "xs mut m") + V.t(o.x, 194, o.t, "sm"), "pop");
    });
    var outs = [
      { x: 300, bx: 290, s: 3, icon: "slides", t: "Slide báo cáo", n: "Việc 1" },
      { x: 460, bx: 440, s: 5, icon: "clock", t: "Bản tin 8:00", n: "Việc 2" },
      { x: 540, bx: 600, s: 6, icon: "globe", t: "Website riêng", n: "Việc 3" }
    ];
    outs.forEach(function (o) {
      s += V.g(o.s, '<path d="M' + o.x + " 108 L" + o.bx + ' 78" class="v-line"/>' + V.box(o.bx - 66, 18, 132, 58, { cls: "v-box2" }) + V.icon(o.icon, o.bx - 56, 34, 26, "acc") + V.t(o.bx - 22, 42, o.n, "xs m acc", "start") + V.t(o.bx - 22, 62, o.t, "sm", "start"));
    });
    s += V.g(7, V.box(150, 222, 420, 56, { cls: "v-box", r: 28 }) + V.icon("brain", 172, 236, 28, "acc") + V.t(370, 246, "3 kết quả trong tay", "lg") + V.t(370, 266, "và một cách tư duy để tự học tiếp", "sm mut"));
    return V.svg(720, 290, s);
  });

  C.register({
    id: "L00",
    blocks: [
      {
        layout: "statement", eyebrow: "Chào mừng",
        lines: ["Từ ==hỏi đáp== với Claude", "tới ==giao việc== cho Claude."],
        sub: "Bốn giờ học và làm, với chính công việc của một teamlead.",
        text: [],
        after: [
          "Bạn đã dùng Claude để hỏi, để viết, để tóm tắt. Buổi học này đi thêm một bước: để Claude ==tự làm trọn một việc== trên máy tính của bạn, như đọc file Excel, dựng bộ slide, tự chạy theo giờ, hay đưa một trang web lên mạng.",
          "Bạn không cần biết lập trình. Hầu hết các thao tác đều dùng ngôn ngữ tự nhiên và làm trong ứng dụng Claude trên máy tính, bằng tiếng Việt."
        ]
      },
      {
        layout: "cards", eyebrow: "Khoá học này", title: "Dành cho ai, học thế nào",
        cards: [
          { tag: "Học viên", title: "Teamlead và quản lý", text: "Đã dùng Claude ở mức cơ bản, muốn đưa Claude vào công việc hằng ngày của team một cách bài bản." },
          { tag: "Hình thức", title: "Học trực tiếp, 4 giờ", text: "Trainer chia sẻ lý thuyết và làm mẫu, học viên thực hành ngay trên máy của mình với thư mục thực hành được chuẩn bị sẵn." },
          { tag: "Công cụ", title: "Ứng dụng Claude", text: "Thẻ Chat và thẻ Code trong ứng dụng Claude trên máy tính, tài khoản Pro hoặc Max." }
        ],
        note: "Spearker: **" + C.brand.trainer + "**. Nội dung được cập nhật theo công bố của Anthropic tới " + C.brand.updated + "."
      },
      {
        layout: "list", eyebrow: "Cách học", title: "Ba điều giúp bạn học hiệu quả",
        items: [
          { k: "01", text: "==Làm theo ngay khi trainer làm mẫu.== Nhìn để hiểu, thực  hành để nhớ và áp dụng vào công việc hàng ngày. Nắm bắt nội dung từng bài học vì nội dung các bài sau dựa vào bài trước." },
          { k: "02", text: "==Dùng Claude để suy nghĩ xem áp dụng vào việc của mình thế nào.== Ví dụ trong khoá xoay quanh báo cáo doanh thu, biên bản họp, phản hồi khách hàng. Sau mỗi bài, hãy tự hỏi: việc nào của team mình giống thế này?" },
          { k: "03", text: "==Hỏi Claude trước, hỏi trainer sau.== Kẹt ở đâu, chụp màn hình rồi hỏi chính Claude. Đây cũng là kỹ năng bạn sẽ dùng sau khoá học." }
        ],
        note: "Chưa cài ứng dụng hoặc chưa tải thư mục thực hành? Làm trang [[K1|Chuẩn bị trước khi học]]."
      },
      {
        layout: "visual", eyebrow: "Lộ trình", title: "8 chặng, 3 kết quả sau khóa học",
        visual: "lo-trinh",
        captions: [
          "**Phần 0** (mới): những tính năng ==Chat và Code dùng chung==, nối từ cái bạn đã biết.",
          "**Phần 1–2**: Claude Code là gì, và cách làm việc ==an toàn== với file, dữ liệu.",
          "**Phần 3**: giao việc, skill, rồi ==Việc 1==: từ Excel ra bộ slide báo cáo.",
          "**Phần 4**: bộ nhớ, mặt bàn làm việc, hạn mức và ==chọn model==.",
          "**Phần 5**: kết nối email, lịch, rồi ==Việc 2==: bản tin tự đến lúc 8:00.",
          "**Phần 6**: ==Việc 3==: phỏng vấn, các trợ lý dựng website, rồi go live.",
          "**Phần 7**: ghép mọi thứ lại, và cách ==tự học tiếp==."
        ],
        after: ["Nếu đã quen phần nào, bạn có thể quay sang hỗ trợ người bên cạnh cùng thực hành để chúng ta cùng đi nhanh hơn."]
      },
      {
        layout: "cards", eyebrow: "Kết quả", title: "Học xong, học viên có 3 thứ này", dark: true,
        text: ["Ba việc đi từ dễ tới khó, mỗi việc gắn với một nhóm khái niệm. Việc 1 dạy cách biến quy trình thành skill. Việc 2 dạy cách nối Claude với lịch và email rồi cho nó tự chạy theo giờ. Việc 3 dạy cách đưa sản phẩm lên mạng."],
        cards: [
          { tag: "Việc 1 · Bài 08", title: "Một skill làm báo cáo doanh thu", text: "File Excel doanh thu phí bảo hiểm thô thành bộ slide báo cáo, tháng sau chỉ cần một dòng lệnh." },
          { tag: "Việc 2 · Bài 15", title: "Bản tin tự đến mỗi sáng", text: "Claude hỏi bạn cần biết gì mỗi sáng, rồi tự làm bản tin lúc 8:00 các ngày làm việc." },
          { tag: "Việc 3 · Bài 16–18", title: "Website của riêng bạn", text: "Claude phỏng vấn bạn, các trợ lý dựng trang song song, rồi trang có địa chỉ riêng trên mạng." }
        ],
        after: ["Cả ba việc đều làm trên máy của bạn với cùng một thư mục thực hành. Toàn bộ dữ liệu trong đó là ==dữ liệu giả==, được dựng theo bối cảnh kinh doanh bảo hiểm phi nhân thọ."]
      },
      {
        layout: "statement", eyebrow: "Và thứ có giá trị nhất",
        lines: ["Một cách ==tư duy hệ thống==", "khi làm việc với AI."],
        after: ["Công cụ AI thay đổi gần như hằng tháng: chỉ riêng từ tháng 9 tới tháng 11/2026, Anthropic đã ra 5 model mới cho mọi người dùng (Fable 5.1, Opus 5.5, Sonnet 5.5, Haiku 5.5 và Fable 5.2). Thứ bền hơn là cách nghĩ: việc nào nên giao cho AI, giao thế nào, kiểm tra kết quả ra sao. Học xong, mỗi khi Claude có tính năng mới, bạn sẽ biết nó thuộc khái niệm nào và tự thử được."],
        sources: [{ label: "Anthropic · Models (danh sách model và ngày ra mắt)", url: "https://www.anthropic.com/news/models" }]
      },
      {
        layout: "logos", eyebrow: "Học một lần", title: "Không chỉ dùng được với Claude",
        text: ["Khoá học dùng Claude, nhưng phần lớn khái niệm ở đây cũng có ở các AI agent khác. Giao việc rõ ràng, skill, cuốn sổ bàn giao (`CLAUDE.md`, hay `AGENTS.md` ở các công cụ khác), mặt bàn và token, kết nối MCP: đâu cũng có. Đổi công cụ, bạn chỉ cần làm quen lại giao diện."],
        groups: [
          { label: "Các công ty lớn", items: [{ name: "Claude", org: "Anthropic", me: true }, { name: "Codex", org: "OpenAI" }, { name: "Gemini", org: "Google" }, { name: "Grok", org: "xAI" }] },
          { label: "Mã nguồn mở", items: [{ name: "DeepSeek", org: "DeepSeek" }, { name: "Kimi", org: "Moonshot AI" }, { name: "Qwen", org: "Alibaba" }] }
        ],
        note: "Ngày 22/10/2026, Anthropic thông báo tặng định dạng Agent Skills cho Agentic AI Foundation, để skill trở thành chuẩn mở dùng chung giữa nhiều công cụ.",
        sources: [{ label: "Anthropic Newsroom", url: "https://www.anthropic.com/news" }, { label: "Claude Code docs · AGENTS.md", url: "https://code.claude.com/docs/en/memory" }]
      },
      {
        layout: "tips", eyebrow: "Trước khi bắt đầu", title: "Khởi động",
        try: "Viết ra giấy ==một việc lặp đi lặp lại== của bạn hoặc team mỗi tuần (ví dụ: tổng hợp doanh thu, trả lời khách hàng, làm biên bản họp). Cuối buổi, bạn sẽ biết cách giao việc đó cho Claude.",
        ask: "\"Mình là teamlead kinh doanh bảo hiểm. Việc nào trong tuần của mình có thể giao cho AI làm hộ?\""
      }
    ]
  });
})();
