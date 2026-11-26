/* Bài M3 · Mở rộng năng lực: Skills, Connectors, Artifacts và tạo file (Phần 0 – mới) */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("bo-do-nghe", function () {
    var s = "";
    s += V.g(1, '<circle cx="360" cy="160" r="54" fill="url(#gz)"/>' + V.t(360, 156, "Claude", "lg dk") + V.t(360, 176, "Chat · Code", "xs dk m"), "pop");
    var tools = [
      { s: 2, x: 24, y: 24, icon: "card", t: "Skills", d: ["quy trình đóng gói sẵn"], to: [306, 130] },
      { s: 3, x: 508, y: 24, icon: "plug", t: "Connectors", d: ["Gmail · Lịch · Drive…"], to: [414, 130] },
      { s: 4, x: 24, y: 220, icon: "link", t: "Artifacts", d: ["Design · Slides · Docs"], to: [306, 190] },
      { s: 5, x: 508, y: 220, icon: "file", t: "Tạo file", d: [".xlsx .docx .pptx .pdf"], to: [414, 190] }
    ];
    tools.forEach(function (o) {
      var fx = o.x < 360 ? o.x + 188 : o.x, fy = o.y + 38;
      s += V.g(o.s, '<path d="M' + fx + " " + fy + " L" + o.to[0] + " " + o.to[1] + '" class="v-flow"/>' + V.box(o.x, o.y, 188, 76) +
        V.icon(o.icon, o.x + 14, o.y + 14, 26, "acc") + V.t(o.x + 50, o.y + 33, o.t, "lg", "start") + V.tl(o.x + 14, o.y + 62, o.d, "xs mut", "start"));
    });
    s += V.g(6, V.box(250, 270, 220, 40, { cls: "v-box2", r: 20 }) + V.icon("search", 266, 278, 22, "acc") + V.t(372, 296, "Tìm web · Research", "sm"));
    return V.svg(720, 320, s);
  });

  C.register({
    id: "M3",
    blocks: [
      {
        layout: "statement", eyebrow: "Phần 0 · Bài M3",
        lines: ["Bốn bộ công cụ,", "==Chat và Code dùng chung==."],
        sub: "Biết chúng nằm ở đâu, bạn sẽ thấy Claude làm được nhiều hơn bạn nghĩ.",
        after: ["Bài trước giúp Claude ==hiểu bạn==. Bài này giúp Claude ==làm được nhiều hơn==: theo quy trình chuẩn của team, đọc email và lịch, trả kết quả thành bộ slide có link, hay ra thẳng file Excel, Word. Mỗi công cụ đều có ở cả Chat lẫn Code, và mỗi món có một bài học sâu phía sau."]
      },
      {
        layout: "visual", eyebrow: "Bộ công cụ", title: "Claude trang bị thêm những gì",
        visual: "bo-do-nghe",
        captions: [
          "Cùng một Claude, dù bạn ở ==thẻ Chat hay thẻ Code==.",
          "==Skills==: quy trình chuẩn đóng gói sẵn, Claude mở ra khi gặp đúng việc. Có sẵn skill Excel, Word, PowerPoint, PDF của Anthropic.",
          "==Connectors==: cho Claude đọc và làm việc với Gmail, Google Calendar, Google Drive, Microsoft 365, Slack…",
          "==Artifacts==: kết quả thành bộ slide, tài liệu, thiết kế có link riêng, chỉ bạn thấy cho tới khi chia sẻ.",
          "==Tạo file==: Claude viết ra file .xlsx, .docx, .pptx, .pdf để bạn tải về hoặc gửi đi.",
          "Thêm ==tìm kiếm web== và ==Research== khi cần thông tin mới nhất."
        ]
      },
      {
        layout: "table", eyebrow: "Ở Chat và ở Code", title: "Bật ở đâu, dùng thế nào",
        head: ["Năng lực", "Trong Chat", "Trong Claude Code", "Học sâu"],
        widths: ["15%", "40%", "33%", "12%"],
        rows: [
          ["Skills", "**Customize > Skills**: bật/tắt skill có sẵn, hoặc tải skill (.zip có file `SKILL.md`) lên.", "Đặt trong `.claude/skills/` của thư mục, hoặc `~/.claude/skills/`. Gõ `/skills` để xem, `/tên-skill` để gọi. Skill từ Chat tự đồng bộ sang.", "[[L07]] · [[L08]]"],
          ["Connectors", "**Customize > Connectors**: Gmail, Google Calendar, Google Drive, Microsoft 365, Slack…", "Nút **+** cạnh ô nhập > **Connectors**; hoặc kết nối MCP (`/mcp`).", "[[L14]] · [[L15]]"],
          ["Artifacts", "Claude Design, Slides, Docs ngay trong cuộc trò chuyện (từ gói Pro thêm Data, Sheets, Whiteboards); xem lại ở mục **Artifacts**.", "Claude Code cũng đưa được kết quả lên thành artifact.", "[[L09]]"],
          ["Tạo file", "==Bật sẵn theo mặc định== trên các gói cá nhân: cứ nhờ Claude làm file Excel, Word, PowerPoint, PDF là được. File tối đa 30MB.", "Claude ghi file thẳng vào thư mục làm việc, không cần tải về.", "[[L08]]"],
          ["Web và Research", "Claude tự tìm web khi cần. Research (từ gói Pro): nút **+** > Research, hoặc gõ `/deep-research`.", "Claude Code có công cụ tìm và đọc trang web.", "[[L03]]"]
        ],
        sources: [
          { label: "Use Skills in Claude", url: "https://support.claude.com/en/articles/12512180-use-skills-in-claude" },
          { label: "Create and edit files with Claude", url: "https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude" },
          { label: "Claude Code docs · Desktop", url: "https://code.claude.com/docs/en/desktop" },
          { label: "Claude Code docs · Skills", url: "https://code.claude.com/docs/en/skills" }
        ]
      },
      {
        layout: "cards", eyebrow: "Artifacts xuất ra đâu", title: "Một kết quả, nhiều định dạng",
        cards: [
          { tag: "Claude Docs", title: "Tài liệu", text: "Xuất ra Word, PDF, Markdown hoặc Google Docs." },
          { tag: "Claude Slides", title: "Bộ slide", text: "Xuất ra PowerPoint, PDF hoặc Google Slides." },
          { tag: "Claude Design", title: "Thiết kế", text: "Xuất ra .zip, PDF, PowerPoint hoặc trang HTML độc lập." }
        ],
        after: ["Cả ba có trên mọi gói, kể cả Free. Từ gói Pro còn có Data, Sheets và Whiteboards ([[L09]]). Artifact mới tạo ==chỉ mình bạn xem được== cho tới khi bạn chủ động chia sẻ."],
        sources: [{ label: "Claude Design, Slides, Docs (trang hỗ trợ)", url: "https://support.claude.com/en/articles/17153992" }]
      },
      {
        layout: "steps", screen: "chat", eyebrow: "Thực hành khởi động", title: "Từ biên bản họp ra tài liệu Word",
        steps: [
                    "Mở cuộc trò chuyện mới (hoặc trong project \"Team kinh doanh\" ở bài trước), đính kèm 3 biên bản họp trong `tai-lieu/`.",
          "Dán lời nhắc bên dưới.",
          "Mở artifact Claude tạo ra, sửa một câu cho đúng giọng của team, rồi xuất ra **Word**."
        ]
      },
      {
        layout: "prompt", eyebrow: "Lời nhắc để dán", label: "Dán vào Chat",
        prompt: "Đọc 3 biên bản họp mình gửi và làm một tài liệu tổng hợp 1 trang cho team, gồm 3 mục:\n1. Các quyết định đã chốt (kèm ngày họp).\n2. Việc cần làm: ai làm, hạn chót, trạng thái.\n3. Vấn đề còn bỏ ngỏ cần bàn tiếp.\nĐưa kết quả thành tài liệu (Docs) để mình xuất ra Word. Không thêm thông tin không có trong biên bản.",
        after: ["[[L02]] sẽ làm lại đúng việc này trong **Claude Code**: không phải đính kèm file, không phải tải kết quả về. Hãy để ý sự khác biệt."]
      },
      {
        layout: "compare", eyebrow: "Một skill, hai cách dùng", title: "Skill hoạt động thế nào ở mỗi nơi",
        cols: [
          { who: "Trong Chat", title: "Claude tự nhận ra", items: ["Bạn chỉ cần nói việc, Claude tự mở skill phù hợp", "Quản lý ở Customize > Skills", "Hợp với skill dùng chung cả team"] },
          { who: "Trong Claude Code", title: "Tự nhận ra, hoặc gọi tên", items: ["Claude cũng tự mở skill khi gặp đúng việc", "Hoặc gọi thẳng: `/bao-cao-doanh-thu`", "Skill là thư mục file trên máy: sửa, sao lưu, gửi cho đồng nghiệp được"] }
        ],
        thumb: "Định dạng skill là ==chuẩn mở==: cùng một thư mục skill dùng được ở Chat, Code và cả các công cụ AI khác."
      },
      {
        layout: "tips", eyebrow: "Trước khi sang Phần 1", title: "Thử ngay",
        try: "Vào **Customize > Skills** xem tài khoản của bạn đang có những skill nào, và **Customize > Connectors** xem có thể kết nối những ứng dụng gì.",
        ask: "\"Với công việc teamlead kinh doanh bảo hiểm, nên kết nối Claude với những công cụ nào trước? Ưu tiên theo mức tiết kiệm thời gian.\"",
        note: "Trước khi kết nối email hay tải dữ liệu thật lên, hãy học [[L05]] về dữ liệu và quyền riêng tư. Trong buổi học, chỉ dùng thư mục thực hành với ==dữ liệu giả==."
      }
    ]
  });
})();
