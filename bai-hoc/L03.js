/* Bài 03 · Để Claude dạy bạn: chọn việc, tự học, tự gỡ rối */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("lam-ket-hoi-hieu", function () {
    var pts = [
      { s: 2, x: 120, y: 80, icon: "gear", t: "Làm", d: "giao một việc thật" },
      { s: 3, x: 600, y: 80, icon: "bolt", t: "Vướng", d: "lỗi, hoặc chữ lạ" },
      { s: 4, x: 600, y: 230, icon: "chat", t: "Hỏi Claude", d: "dán lỗi, hỏi nghĩa" },
      { s: 5, x: 120, y: 230, icon: "brain", t: "Hiểu", d: "lần sau tự làm được" }
    ];
    var s = V.g(1, '<rect x="120" y="80" width="480" height="150" rx="75" class="v-dash"/>', "fade");
    s += V.g(1, '<rect x="120" y="80" width="480" height="150" rx="75" fill="none" stroke="#d97757" stroke-width="2.5" stroke-dasharray="8 10" class="v-flow"/>', "fade");
    pts.forEach(function (p) {
      s += V.g(p.s, '<circle cx="' + p.x + '" cy="' + p.y + '" r="30" class="v-box" style="stroke:#d97757;stroke-width:2"/>' + V.icon(p.icon, p.x - 13, p.y - 13, 26, "acc") +
        V.t(p.x, p.y + (p.y < 150 ? -58 : 52), p.t, "lg") + V.t(p.x, p.y + (p.y < 150 ? -40 : 70), p.d, "xs mut"), "pop");
    });
    s += V.g(6, V.box(250, 120, 220, 70, { cls: "v-box2" }) + V.t(360, 145, "Claude đóng 3 vai", "sm acc") + V.t(360, 170, "trợ lý · chuyên gia · hỗ trợ IT", "sm"));
    return V.svg(720, 320, s);
  });

  C.register({
    id: "L03",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 03 · Để Claude dạy bạn",
        lines: ["Vướng ở đâu,", "==hỏi ngay Claude==."],
        sub: "Claude vừa là trợ lý, vừa là chuyên gia, vừa là bộ phận hỗ trợ IT của bạn.",
        after: ["Nhiều người nghĩ phải học hết rồi mới dám dùng. Với Claude thì ngược lại: bạn ==dùng chính Claude để học về Claude==. Bài này chỉ cho bạn 3 cách."]
      },
      {
        layout: "visual", eyebrow: "Cách học nhanh nhất", title: "Làm, vướng, hỏi, hiểu",
        visual: "lam-ket-hoi-hieu",
        captions: [
          "Học Claude là ==một vòng lặp==, không phải một khoá học xong là thôi.",
          "==Làm==: giao cho Claude một việc thật của bạn.",
          "==Kẹt==: gặp lỗi, hoặc gặp một chữ không hiểu.",
          "==Hỏi Claude==: dán lỗi, hỏi nghĩa, nhờ giải thích lại.",
          "==Hiểu==, rồi làm tiếp. Lần sau bạn tự xử lý được.",
          "Trong vòng đó, Claude đóng ==3 vai==: trợ lý, chuyên gia, hỗ trợ IT."
        ],
        after: ["Lúc bị kẹt chính là lúc học nhanh nhất, miễn là bạn biết hỏi. Đừng tìm trên mạng hay bỏ dở: dán lỗi hoặc chữ bạn chưa hiểu vào Claude và hỏi thẳng."]
      },
      {
        layout: "list", eyebrow: "Vai 1 · Tư vấn viên", title: "Việc nào nên giao cho Claude?",
        text: ["Chưa biết nên tự động hoá việc gì thì đừng đoán. Để Claude ==phỏng vấn bạn== về công việc: nó sẽ hỏi những câu bạn chưa từng tự hỏi, rồi đề xuất những việc nên làm trước. Dùng 3 tiêu chí dưới đây để tự kiểm tra lại đề xuất."],
        items: [
          { k: "01", text: "==Lặp lại== đều đặn: hằng ngày, hằng tuần, hằng tháng." },
          { k: "02", text: "==Có quy tắc==: lần nào cũng theo các bước giống nhau." },
          { k: "03", text: "==Diễn ra trên máy tính==: file Excel, email, tài liệu, hệ thống nội bộ." },
          { k: "✓", text: "Phép thử cuối: việc đó giúp ==tiết kiệm thời gian==, ==tăng hiệu quả công việc==, hay ==phục vụ khách hàng tốt hơn==?" }
        ]
      },
      {
        layout: "prompt", anchor: "vi-du", eyebrow: "Ví dụ thật · Claude phỏng vấn bạn", label: "Dán vào Chat hoặc Code",
        prompt: "Mình muốn dùng Claude để tự động hoá một phần công việc. Hãy phỏng vấn mình về công việc hằng ngày, hằng tuần: mỗi lần chỉ hỏi MỘT câu, chờ mình trả lời rồi mới hỏi tiếp, tổng cộng khoảng 10 câu. Sau đó đề xuất 5 việc nên tự động hoá trước, xếp theo số giờ tiết kiệm được mỗi tuần, ghi rõ độ khó (Dễ / Vừa / Khó) và vì sao.",
        after: ["Trả lời thật lòng, như đang kể cho một đồng nghiệp mới. Dưới đây là kết quả mẫu của một teamlead phòng Kinh doanh; danh sách của bạn sẽ khác. Giữ lại danh sách này và tự động hoá dần trong lúc học."]
      },
      {
        layout: "table", eyebrow: "Kết quả mẫu", title: "Sau khoảng 10 câu hỏi",
        head: ["Việc", "Giờ/tuần", "Độ khó"],
        widths: ["64%", "16%", "20%"],
        rows: [
          ["Tổng hợp doanh thu tuần từ file xuất hệ thống", "3", "Dễ"],
          ["Trả lời đại lý hỏi về điều kiện, quyền lợi sản phẩm", "2,5", "Vừa"],
          ["Soạn email phản hồi khách hàng về hồ sơ bồi thường", "2", "Vừa"],
          ["Viết biên bản họp giao ban", "1,5", "Dễ"],
          ["Theo dõi đơn \"Chờ thanh toán\" và nhắc đối soát", "1", "Vừa"]
        ]
      },
      {
        layout: "list", eyebrow: "Vai 2 · Gia sư", title: "Học bằng cách hỏi",
        text: ["Đừng ngại những câu bạn nghĩ là \"ngớ ngẩn\". Claude không mất đi sự kiên nhẫn giống mentor của bạn :D , và bạn có thể bảo nó giải thích lại theo cách khác cho tới khi hiểu."],
        items: [
          { k: "?", text: "Gặp chữ lạ như ==API==, ==script==, ==commit==: hỏi ngay, nhờ Claude cho ví dụ trong nghề bảo hiểm." },
          { k: "/btw", text: "==Side chat== (`/btw`, hoặc Ctrl+; trên Windows, Cmd+; trên Mac): hỏi thêm một câu bên lề mà không làm rối việc Claude đang làm." },
          { k: "3", text: "Nhờ Claude ==hỏi lại bạn 3 câu== để chắc là bạn đã hiểu." }
        ]
      },
      {
        layout: "prompts", eyebrow: "Hai lời nhắc nên thuộc", title: "Nhờ Claude dạy, nhờ Claude gỡ lỗi",
        text: ["Dùng được ở mọi bài. Chỉ cần thay phần trong ngoặc vuông."],
        items: [
          { label: "Nhờ Claude dạy", text: "Giải thích [khái niệm] cho mình như cho người không biết kỹ thuật, kèm một ví dụ trong [lĩnh vực hoặc vị trí của bạn]. Sau đó hỏi mình 3 câu để kiểm tra xem mình đã hiểu chưa." },
          { label: "Nhờ Claude gỡ lỗi", text: "Mình vừa gặp lỗi này: [dán lỗi hoặc ảnh chụp màn hình]. Lỗi này nghĩa là gì, vì sao xảy ra, và mình cần làm gì? Nếu bạn tự sửa được thì nói trước sẽ sửa gì rồi hãy làm." }
        ]
      },
      {
        layout: "list", eyebrow: "Vai 3 · Hỗ trợ IT", title: "Khi chính Claude Code gặp lỗi",
        text: ["Thỉnh thoảng Claude Code báo lỗi: thiếu quyền, thiếu một công cụ. Bạn không cần hiểu lỗi mới sửa được, chỉ cần đưa nó cho Claude."],
        items: [
          { k: "01", text: "==Chụp màn hình== hoặc chép nguyên dòng lỗi, dán vào Claude." },
          { k: "02", text: "Hỏi: lỗi này ==nghĩa là gì==, ==vì sao== xảy ra, ==cần làm gì==." },
          { k: "03", text: "Claude có thể tự tra ==tài liệu chính thức của Claude Code== để trả lời." },
          { k: "04", text: "Gõ `/doctor` để Claude kiểm tra cài đặt giúp bạn." }
        ]
      },
      {
        layout: "steps", screen: "code", anchor: "go-loi", eyebrow: "Trainer làm mẫu", title: "Gỡ một lỗi thật trong một phút",
        steps: [
          "Trong lúc làm, gặp một lỗi bất kỳ (ví dụ máy chưa cài công cụ đọc Excel).",
          "Chụp màn hình, dán vào Claude cùng lời nhắc \"Nhờ Claude gỡ lỗi\" ở trên.",
          "Claude giải thích nguyên nhân bằng tiếng Việt và đề xuất cách sửa.",
          "Bạn đồng ý thì Claude sửa rồi làm tiếp."
        ]
      },
      {
        layout: "commands", eyebrow: "Lệnh của bài", title: "Hỏi bên lề và kiểm tra cài đặt",
        commands: ["C14", "C09"]
      },
      {
        layout: "tips", eyebrow: "Bài tập", title: "Làm ngay hôm nay",
        try: "Dùng lời nhắc phỏng vấn ở trên cho chính bạn, giữ lại danh sách 5 việc để tự động hoá dần trong lúc học.",
        ask: "\"Giải thích 'context window' cho mình bằng ví dụ trong nghề bảo hiểm, rồi hỏi mình 3 câu.\""
      }
    ]
  });
})();
