/* Bài 10 · Bộ nhớ: CLAUDE.md và auto memory */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("so-ban-giao", function () {
    var s = "";
    s += V.g(1, '<path d="M60 230 L660 230 L620 270 L100 270 Z" class="v-box2"/>' + V.t(360, 290, "mặt bàn làm việc của Claude", "xs mut"));
    s += V.g(1, '<circle cx="640" cy="50" r="20" fill="#ffc72c" opacity=".85"/>' + V.t(600, 56, "Phiên mới", "sm", "end"));
    // sổ
    s += V.g(2, '<rect x="140" y="150" width="130" height="80" rx="6" fill="#f0e8d5"/><rect x="140" y="150" width="14" height="80" fill="#d97757"/>' + V.t(212, 186, "CLAUDE.md", "sm m dk") + V.t(212, 206, "đọc đầu tiên", "xs dk"), "pop");
    s += V.g(3, '<rect x="130" y="118" width="160" height="30" rx="5" fill="#c9cfd8"/>' + V.t(210, 138, "~/.claude (của bạn)", "xs m dk") + V.t(300, 132, "mọi thư mục", "xs mut", "start") + V.t(300, 196, "thư mục này", "xs mut", "start"));
    s += V.g(4, '<rect x="430" y="150" width="70" height="60" rx="4" fill="#ffc72c" transform="rotate(-6 465 180)"/>' + '<rect x="470" y="140" width="70" height="60" rx="4" fill="#ec9a7a" transform="rotate(5 505 170)"/>' +
      V.t(500, 128, "Ghi nhớ tự động", "sm acc") + V.t(500, 112, "\"nhớ giúp mình…\"", "xs mut"));
    s += V.g(5, V.t(360, 70, "Hôm sau: giấy tờ đã dọn, sổ và giấy nhớ vẫn còn", "sm"), "fade");
    s += V.g(6, V.box(250, 20, 220, 28, { cls: "v-box", r: 14 }) + V.t(360, 39, "Lời dặn hôm nay > sổ (chỉ việc đó)", "xs acc"));
    return V.svg(720, 300, s);
  });

  C.register({
    id: "L10",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 10 · Bộ nhớ",
        lines: ["Mỗi phiên mới,", "Claude ==quên sạch==", "cuộc trò chuyện hôm trước."],
        sub: "CLAUDE.md là cuốn sổ bàn giao Claude luôn đọc đầu tiên.",
        after: [
          "Hôm qua bạn dặn Claude viết số tiền kiểu 1.250.000đ và gọi khách là \"anh/chị\". Hôm nay mở phiên mới, Claude lại quên. Không phải Claude \"ngờ - u\":mà mỗi phiên mới luôn bắt đầu trên ==một mặt bàn trống==.",
          "Cách giải quyết: một file tên `CLAUDE.md`. Claude đọc file này trước khi làm bất cứ việc gì, nên điều bạn ghi trong đó áp dụng cho mọi phiên. Ở [[M2]], bạn đã thấy điều tương tự trong Chat: chỉ dẫn cá nhân và Projects."
        ]
      },
      {
        layout: "visual", eyebrow: "Mặt bàn và cuốn sổ", title: "Claude nhớ bằng cách nào",
        visual: "so-ban-giao",
        captions: [
          "Mỗi phiên mới, ==mặt bàn trống==: Claude không nhớ cuộc trò chuyện hôm trước.",
          "Trên bàn có cuốn sổ `CLAUDE.md`, Claude ==đọc nó đầu tiên==.",
          "Hai cuốn sổ chồng lên nhau: ==của bạn== (`~/.claude/CLAUDE.md`, áp dụng mọi thư mục) và ==của thư mục này==.",
          "Nói ==\"nhớ giúp mình…\"==: Claude tự ghi một tờ giấy nhớ vào ==ghi nhớ tự động== (auto memory).",
          "Hôm sau: giấy tờ đã dọn, nhưng ==sổ và giấy nhớ vẫn còn==.",
          "Lời bạn dặn hôm nay ==được ưu tiên hơn sổ==, nhưng chỉ cho riêng yêu cầu đó."
        ],
        after: ["Ghi nhớ tự động bật sẵn: Claude tự ghi lại những điều đáng nhớ khi làm việc (ví dụ khi bạn sửa lỗi cho nó), lưu ngay trên máy bạn. Gõ `/memory` để xem, sửa, hoặc tắt."],
        sources: [{ label: "Claude Code docs · Memory", url: "https://code.claude.com/docs/en/memory" }]
      },
      {
        layout: "list", eyebrow: "Ghi gì vào sổ", title: "Phép thử đồng nghiệp mới",
        text: ["Nên ghi: cách xưng hô, văn phong, định dạng số và ngày tháng, thư mục nào để làm gì, những điều Claude không được làm. Không nên ghi: việc chỉ làm một lần, hay cả một quy trình dài (quy trình thì lưu thành skill, [[L07]])."],
        items: [
          { k: "?", text: "Bạn có dặn điều này với ==nhân viên mới ngay ngày đầu== không? Có thì ghi." },
          { k: "01", text: "==Ngắn thôi==: vài chục dòng là đủ; tài liệu của Anthropic khuyên dưới 200 dòng. Sổ càng dài, Claude càng dễ bỏ sót và càng tốn hạn mức." },
          { k: "02", text: "Sửa `CLAUDE.md` giữa chừng thì ==áp dụng từ phiên sau==, hoặc sau khi gõ `/clear`." },
          { k: "03", text: "Lời dặn trong tin nhắn hôm nay ==được ưu tiên hơn== sổ, chỉ cho yêu cầu đó." }
        ]
      },
      {
        layout: "prompt", eyebrow: "Giữ sổ luôn ngắn", title: "Dặn Claude tự giữ sổ gọn",
        label: "Dán một lần",
        prompt: "Thêm vào CLAUDE.md của thư mục này một quy tắc: mỗi khi ghi thêm vào CLAUDE.md, giữ cả file dưới 60 dòng; nếu sắp vượt thì đề xuất với mình dòng nào nên bỏ hoặc chuyển thành skill, chứ không tự ý xoá.",
        after: ["Claude làm theo quy tắc này trong hầu hết các lần, nhưng `CLAUDE.md` là lời dặn chứ không phải công tắc bắt buộc. Thỉnh thoảng gõ `/context` để xem cuốn sổ chiếm bao nhiêu chỗ (dòng Memory files)."]
      },
      {
        layout: "split", eyebrow: "Ví dụ", title: "CLAUDE.md của một teamlead",
        cols: [
          { title: "Nên có", items: ["Mình là ai, phụ trách team nào, kênh bán nào.", "Cách trả lời: tiếng Việt, ngắn, kết luận trước.", "Quy ước: số tiền dạng 1.250.000đ, ngày dạng 25/11/2026, tên file không dấu.", "Việc phải hỏi trước: gửi gì cho khách, đụng tới file gốc."] },
          { title: "CLAUDE.md (rút gọn)", text: ["**Về mình**: trưởng phòng kinh doanh, kênh App và Đại lý.", "**Cách làm việc**: kết luận trước, lý do sau; chỉ tính đơn đã thanh toán.", "**Không được làm**: không sửa file trong `01-ban-hang/`; không xoá file, chuyển vào `thung-rac/`."] }
        ]
      },
      {
        layout: "compare", eyebrow: "Quy ước mới", title: "CLAUDE.md hay AGENTS.md?",
        cols: [
          { who: "Chỉ Claude đọc", title: "CLAUDE.md", items: ["Tên Claude Code đặt cho cuốn sổ", "Chỉ dùng Claude thì vậy là đủ"] },
          { who: "Nhiều công cụ AI cùng đọc", title: "AGENTS.md", items: ["Tên chung mà nhiều công cụ AI cùng đọc (Codex, Cursor, Gemini CLI, GitHub Copilot…)", "Claude Code cũng đọc, nhưng mặc định ==chỉ khi thư mục chưa có `CLAUDE.md`=="] }
        ],
        thumb: "Dùng thêm công cụ AI khác? Viết sổ trong ==`AGENTS.md`==, còn `CLAUDE.md` chỉ cần một dòng `@AGENTS.md` (nghĩa là \"đọc kèm file này\"). Sửa một chỗ, công cụ nào cũng đọc cùng một sổ.",
        sources: [{ label: "Claude Code docs · Memory (AGENTS.md, @import)", url: "https://code.claude.com/docs/en/memory" }]
      },
      {
        layout: "prompt", anchor: "vi-du", screen: "code", eyebrow: "Để Claude viết sổ cho bạn", title: "Không cần tự viết từ đầu",
        label: "Dán vào thẻ Code",
        prompt: "Giúp mình viết file CLAUDE.md cho thư mục này. Hỏi mình từng câu một, tối đa 6 câu: mình là ai, cách mình muốn được trả lời, quy ước về số tiền và ngày tháng, thư mục nào dùng để làm gì, việc nào phải hỏi mình trước. Sau đó viết một bản ngắn (dưới 40 dòng) để mình duyệt.",
        after: ["Ngoài cách này, lệnh `/init` cũng soạn được một bản nháp từ nội dung đang có trong thư mục."]
      },
      {
        layout: "steps", screen: "code", eyebrow: "Thực hành", title: "Claude vẫn nhớ quy tắc ở phiên mới",
        steps: [
          "Dán lời nhắc ở trên, trả lời các câu hỏi, nhớ nói 3 quy tắc: ==trả lời bằng tiếng Việt==, ==số tiền dạng 1.250.000đ==, ==không sửa file trong `01-ban-hang/`==.",
          "Claude viết `CLAUDE.md`. Đọc lại và sửa nếu cần.",
          "Gõ `/clear` để bắt đầu lại trên mặt bàn trống.",
          "Hỏi: \"Tổng phí tháng 9 là bao nhiêu?\" Claude vẫn trả lời bằng tiếng Việt, số tiền đúng dạng 953.779.000đ.",
          "Nói: \"Nhớ giúp mình: báo cáo luôn tách riêng kênh Đại lý.\" Rồi gõ `/memory` để xem điều Claude vừa ghi."
        ]
      },
      {
        layout: "commands", eyebrow: "Lệnh của bài", title: "Sổ, giấy nhớ và mặt bàn sạch",
        commands: ["C05", "C06", "C01"]
      },
      {
        layout: "tips", eyebrow: "Bài tập", title: "Thử ngay",
        try: "Viết `CLAUDE.md` cá nhân với 5 quy tắc bạn hay phải nhắc nhất.",
        ask: "\"Trong CLAUDE.md của mình, dòng nào thừa, khó hiểu, hoặc nên chuyển thành skill?\""
      }
    ]
  });
})();
