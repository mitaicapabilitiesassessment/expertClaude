/* Bài 17 · Sub-agents: dựng website song song */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("ba-tro-ly", function () {
    var s = V.g(1, V.box(270, 16, 180, 54, { cls: "v-box" }) + V.icon("doc", 284, 30, 26, "acc") + V.t(380, 40, "ho-so.md", "sm m") + V.t(380, 58, "việc lớn: 3 phiên bản", "xs mut"));
    s += V.g(1, '<circle cx="360" cy="116" r="28" fill="url(#gz)"/>' + V.t(360, 122, "Claude", "xs dk"));
    var subs = [{ x: 120, t: "Tối giản", f: "ban-1" }, { x: 360, t: "Hiện đại", f: "ban-2" }, { x: 600, t: "Sáng tạo", f: "ban-3" }];
    subs.forEach(function (o) {
      s += V.g(2, '<path d="M360 144 L' + o.x + ' 178" class="v-line" marker-end="url(#ah)"/>');
      s += V.g(3, V.box(o.x - 80, 182, 160, 70, { cls: "v-box2" }) + V.icon("user", o.x - 66, 194, 24, "acc") + V.t(o.x - 34, 210, "Trợ lý", "sm", "start") + V.t(o.x, 238, o.t, "xs mut") + '<rect x="' + (o.x + 30) + '" y="196" width="36" height="24" rx="4" fill="#f0e8d5" class="v-pulse"/>', "pop");
      s += V.g(4, '<path d="M' + o.x + ' 252 L' + o.x + ' 272" class="v-line" marker-end="url(#ah)"/>' + V.t(o.x, 288, o.f + "/", "xs m acc"));
    });
    s += V.g(4, V.t(398, 122, "chỉ mang về bản tóm tắt", "xs acc", "start"), "fade");
    s += V.g(5, '<rect x="514" y="176" width="172" height="82" rx="14" fill="none" stroke="#6fc59b" stroke-width="3"/>' + V.t(600, 310, "✓ bạn chọn bản này", "xs", "middle"), "fade");
    return V.svg(720, 320, s);
  });

  C.register({
    id: "L17",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 17 · Sub-agents",
        lines: ["Việc lớn thì Claude", "==giao cho trợ lý== làm song song."],
        sub: "Mỗi trợ lý làm ở một \"mặt bàn riêng\" và chỉ mang về bản tóm tắt.",
        slideOnly: false,
        after: ["Có những việc cần đọc rất nhiều: xem 5 website đối thủ, đọc 20 quy tắc sản phẩm, rà cả một thư mục báo cáo. Nếu Claude tự đọc hết, mặt bàn chính ([[L11]]) đầy rất nhanh. Thay vào đó, Claude giao từng phần cho các ==trợ lý== (sub-agent)."]
      },
      {
        layout: "visual", eyebrow: "Quản lý và trợ lý", title: "3 trợ lý, 3 phiên bản",
        visual: "ba-tro-ly",
        captions: [
          "Một việc lớn: dựng ==3 phiên bản== website từ hồ sơ của bạn.",
          "Claude giao cho ==3 trợ lý==, mỗi người một phong cách.",
          "Các trợ lý ==làm song song==, mỗi người một mặt bàn riêng.",
          "Mỗi trợ lý lưu phiên bản vào thư mục riêng và ==chỉ mang về bản tóm tắt==: mặt bàn chính vẫn gọn.",
          "Bạn ==chọn một bản==, rồi sửa tiếp cho tới khi ưng ý."
        ],
        sources: [{ label: "Claude Code docs · Subagents", url: "https://code.claude.com/docs/en/sub-agents" }]
      },
      {
        layout: "list", eyebrow: "Cần biết", title: "Trợ lý làm việc thế nào",
        items: [
          { k: "01", text: "Mỗi trợ lý là một Claude phụ, làm trên ==mặt bàn sạch của riêng nó==, với chỉ dẫn và quyền riêng." },
          { k: "02", text: "Trợ lý đọc nhiều nhưng ==chỉ mang về bản tóm tắt==, nên mặt bàn chính không bị đầy." },
          { k: "03", text: "Việc đủ lớn thì Claude ==tự gọi trợ lý==; bạn cũng có thể ==yêu cầu thẳng== trong lời giao việc." },
          { k: "!", text: "Trợ lý dùng ==chung hạn mức== với bạn: càng nhiều trợ lý cùng làm, hạn mức càng hao nhanh." }
        ]
      },
      {
        layout: "list", screen: "code", eyebrow: "Việc 3 · Bước 2", title: "Lập kế hoạch trước, làm sau",
        text: ["Website có nhiều phần, nhiều lựa chọn, lại có 3 trợ lý cùng làm: đây là lúc dùng chế độ ==Plan==."],
        items: [
          { k: "01", text: "Chọn chế độ ==Plan== ở ô chọn chế độ dưới khung nhập. Claude chỉ đọc và lập kế hoạch." },
          { k: "02", text: "==Đọc kế hoạch==: có đúng ý không, bước nào thừa hay thiếu." },
          { k: "03", text: "Sửa nếu cần, rồi ==duyệt== để Claude bắt đầu." },
          { k: "✓", text: "Sửa một dòng kế hoạch ==rẻ hơn nhiều== so với sửa cả một kết quả sai." }
        ]
      },
      {
        layout: "prompt", anchor: "vi-du", screen: "code", eyebrow: "Việc 3 · Bước 2 và 3", title: "Lập kế hoạch, rồi giao 3 trợ lý",
        label: "Dán vào thẻ Code (chế độ Plan)",
        prompt: "Đọc `03-website/ho-so.md` và lập kế hoạch dựng một website một trang về mình, gồm: giới thiệu, thành tích (có số liệu), dự án tiêu biểu, lý do nên hợp tác, và liên hệ. Giao cho 3 trợ lý (sub-agent) dựng song song 3 phiên bản với 3 phong cách khác nhau (tối giản, hiện đại, nổi bật), lưu vào `03-website/ban-1`, `ban-2`, `ban-3`. Dùng nội dung thật trong hồ sơ, không bịa thêm. Kiểm tra cả 3 trên khổ màn hình điện thoại rồi mở cho mình xem.",
        after: ["Duyệt kế hoạch xong, bạn sẽ thấy 3 trợ lý cùng chạy trong cuộc trò chuyện, mỗi trợ lý một dòng. Gõ `/tasks` để xem chúng đang làm gì."]
      },
      {
        layout: "output", eyebrow: "Kết quả mẫu", bar: "Claude báo lại",
        lines: [
          "3 trợ lý đã xong, mỗi phiên bản một thư mục:",
          "✓ ban-1 · Tối giản: nền sáng, chữ lớn, nhiều khoảng trống",
          "✓ ban-2 · Hiện đại: nền tối, khối số liệu nổi bật ở đầu trang",
          "✓ ban-3 · Nổi bật: màu cam đậm, bố cục thẻ, nút \"Đăng ký làm đại lý\"",
          "Mình đã mở cả 3 để bạn xem. Bạn thích bản nào?"
        ]
      },
      {
        layout: "prompt", screen: "code", eyebrow: "Việc 3 · Bước 4", title: "Chọn một bản, rồi sửa bằng giọng nói",
        label: "Thay [số] bằng bản bạn chọn",
        prompt: "Mình chọn bản [số]. Chuyển bản này ra `03-website/` làm trang chính (index.html), giữ các bản còn lại trong thư mục `phuong-an-khac`. Mở bản xem trước ở khổ điện thoại để mình góp ý tiếp.",
        after: ["Nhìn trang và ==nói== điều cần sửa: \"tiêu đề ngắn lại\", \"thêm phần quyền lợi đại lý\". Mỗi lần ==một thay đổi==, xem lại, rồi nói tiếp. Vài vòng là xong: kỹ năng thử và cải thiện nhanh ở [[L01]]."]
      },
      {
        layout: "commands", eyebrow: "Lệnh của bài", title: "Chế độ Plan và các trợ lý",
        commands: ["C13", "C18"]
      },
      {
        layout: "tips", eyebrow: "Bài tập", title: "Thử ngay",
        try: "Dùng lời nhắc ở chế độ Plan với hồ sơ của bạn, chọn một trong 3 phiên bản, rồi sửa bằng giọng nói tới khi ưng ý.",
        ask: "\"Trong công việc của team mình, việc nào nên chia cho nhiều trợ lý làm song song?\""
      }
    ]
  });
})();
