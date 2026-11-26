/* Bài 07 · Skills */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("ke-skill", function () {
    var s = "";
    // hộp thẻ công thức
    s += V.g(1, '<path d="M40 120 L300 120 L300 250 L40 250 Z" class="v-box2"/>' + V.t(170, 274, "Kệ skill của Claude", "sm mut"));
    var cards = ["bao-cao-doanh-thu", "email-boi-thuong", "tom-tat-hop", "xlsx", "pptx"];
    cards.forEach(function (c, i) {
      var x = 56 + i * 48;
      s += V.g(1, '<rect x="' + x + '" y="' + (80 - (i % 2) * 6) + '" width="40" height="62" rx="5" fill="#f0e8d5"/>' + '<rect x="' + x + '" y="' + (80 - (i % 2) * 6) + '" width="40" height="14" rx="5" fill="#d97757"/>');
    });
    s += V.g(2, V.box(330, 30, 360, 46, { cls: "v-box" }) + V.icon("eye", 344, 41, 24, "acc") + V.t(380, 58, "Claude chỉ đọc nhãn: tên + mô tả ngắn", "sm", "start"));
    s += V.g(3, V.box(330, 90, 360, 46, { cls: "v-box" }) + V.icon("chat", 344, 101, 24, "acc") + V.t(380, 118, "Việc mới: \"Làm báo cáo doanh thu quý 3\"", "sm", "start"));
    s += V.g(4, '<g transform="translate(170 -40)"><rect x="56" y="80" width="40" height="62" rx="5" fill="#f0e8d5" stroke="#d97757" stroke-width="3"/><rect x="56" y="80" width="40" height="14" rx="5" fill="#d97757"/></g>' +
      V.box(330, 150, 360, 46, { cls: "v-box", style: "stroke:#d97757;stroke-width:2" }) + V.icon("card", 344, 161, 24, "acc") + V.t(380, 178, "Rút đúng thẻ, mở ra: các bước nằm sẵn", "sm", "start"), "pop");
    s += V.g(5, V.box(330, 210, 360, 46, { cls: "v-box" }) + V.icon("slides", 344, 221, 24, "acc") + V.t(380, 238, "Làm theo thẻ → ra bộ slide báo cáo", "sm", "start"));
    s += V.g(6, V.box(330, 266, 360, 34, { cls: "v-box2", r: 17 }) + V.t(510, 288, "/bao-cao-doanh-thu: lần nào cũng như nhau", "xs acc m"));
    return V.svg(720, 310, s);
  });

  C.register({
    id: "L07",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 07 · Skills",
        lines: ["Skill là ==quy trình chuẩn==", "Claude cất trên kệ."],
        sub: "Claude chỉ đọc nhãn; khi có việc cần mới mở ra.",
        after: ["Ở công ty, quy trình chuẩn (SOP) giúp người mới làm đúng việc mà không phải hỏi lại. Skill cũng là một quy trình chuẩn như vậy, nhưng viết cho Claude: gồm các bước, mẫu kết quả, và đôi khi kèm một script nhỏ để tính toán cho chính xác."]
      },
      {
        layout: "visual", eyebrow: "Hộp thẻ quy trình", title: "Claude dùng skill thế nào",
        visual: "ke-skill",
        captions: [
          "Mỗi skill là ==một thẻ quy trình== trên kệ.",
          "Claude ==chỉ đọc nhãn== (tên và mô tả), chưa mở thẻ nào.",
          "Có việc mới: ==\"Làm báo cáo doanh thu quý 3\"==.",
          "Claude ==rút đúng thẻ và mở ra==: các bước đã nằm sẵn trong đó.",
          "Claude làm theo thẻ và ra ==bộ slide báo cáo==.",
          "Tháng sau, chỉ cần gõ `/bao-cao-doanh-thu`: cùng thẻ đó, ==lần nào cũng như nhau==."
        ],
        after: ["Vì Claude chỉ đọc nhãn cho tới khi cần, bạn có thể có hàng chục skill mà không làm nặng cuộc trò chuyện. Bạn cũng có thể gọi thẳng một skill bằng dấu gạch chéo `/` và tên của nó."]
      },
      {
        layout: "compare", eyebrow: "Hai thứ hay bị nhầm", title: "CLAUDE.md hay skill?",
        cols: [
          { who: "CLAUDE.md · Bài 10", title: "Luôn áp dụng", items: ["Claude đọc ngay đầu mỗi phiên", "Cách bạn làm việc: xưng hô, văn phong, quy ước của team", "Nên viết ngắn"] },
          { who: "Skill", title: "Áp dụng khi cần", items: ["Chỉ mở khi có việc liên quan", "Một quy trình cụ thể, từng bước", "Có thể dài, kèm file mẫu và script"] }
        ],
        thumb: "Quy tắc chung/ngữ cảnh chung: ==CLAUDE.md==. Một việc có các bước riêng: ==skill==."
      },
      {
        layout: "list", eyebrow: "Khi nào nên làm skill", title: "Việc gì phải làm hai lần trở lên thì lưu thành skill",
        items: [
          { k: "2×", text: "Bạn đã làm ==cùng một việc hai lần== và đã ==giải thích hai lần==." },
          { k: "01", text: "Việc có ==các bước cố định== và kết quả theo ==cùng một mẫu==." },
          { k: "02", text: "Dùng skill ==có sẵn==: bộ skill Excel, Word, PowerPoint, PDF của Anthropic." },
          { k: "03", text: "Tự làm: làm xong một việc với Claude, rồi bảo Claude ==lưu lại thành skill==. [[L08]] làm đúng như vậy." },
          { k: "04", text: "Hoặc lấy bộ skills ==từ cộng đồng== hoặc danh mục plugin: skill người khác làm và chia sẻ. Tham khảo [[L20]]." }
        ]
      },
      {
        layout: "cards", eyebrow: "Ví dụ cho teamlead bảo hiểm", title: "Những skill đáng làm trước",
        dark: true,
        cards: [
          { tag: "Skill", title: "Báo cáo doanh thu", text: "File xuất hệ thống vào, bộ slide cùng một mẫu ra; tự đối chiếu tổng với file gốc." },
          { tag: "Skill", title: "Email phản hồi bồi thường", text: "Theo 3 mẫu chuẩn của bộ phận chăm sóc khách hàng: đã nhận, cần bổ sung, đã có kết quả." },
          { tag: "Skill", title: "Biên bản họp", text: "Ghi âm hoặc ghi chú vào, biên bản đúng mẫu công ty ra: quyết định, phân công, hạn chót." }
        ],
        after: ["Mỗi skill đều bắt đầu từ một việc làm đi làm lại, mà lần nào cũng phải dặn Claude từ đầu. Lưu thành skill rồi, bạn chỉ cần nói việc cần làm."]
      },
      {
        layout: "steps", screen: "code", anchor: "vi-du", eyebrow: "Ví dụ thật", title: "Xem và cài skill",
        steps: [
          "Gõ `/skills` để xem các skill Claude đang có. Skill bạn bật trong Chat (Customize > Skills) cũng hiện ở đây nếu đăng nhập cùng tài khoản.",
          "Muốn thêm bộ skill tài liệu của Anthropic: nút **+** > **Plugins** trong ứng dụng, hoặc gõ 2 lệnh bên dưới.",
          "Từ giờ, khi bạn nhờ Claude làm file Excel, Word hay PowerPoint, nó tự mở đúng skill."
        ]
      },
      {
        layout: "commands", eyebrow: "Lệnh của bài", title: "Xem và cài skill",
        commands: ["C10", "C12", "C28", "C11"],
        sources: [
          { label: "GitHub · anthropics/skills", url: "https://github.com/anthropics/skills" },
          { label: "Claude Code docs · Skills", url: "https://code.claude.com/docs/en/skills" },
          { label: "Use Skills in Claude (đồng bộ từ claude.ai)", url: "https://support.claude.com/en/articles/12512180-use-skills-in-claude" }
        ]
      },
      {
        layout: "tips", eyebrow: "Bài tập", title: "Thử ngay",
        try: "Gõ `/skills` xem bạn đang có skill nào. Rồi viết ra một việc của team bạn đã giải thích cho Claude ít nhất hai lần.",
        ask: "\"Trong công việc teamlead kinh doanh bảo hiểm của mình, việc nào nên lưu thành skill trước? Vì sao?\""
      }
    ]
  });
})();
