/* Bài 16 · Việc 3: Claude phỏng vấn bạn */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("phong-van-toi-link", function () {
    var st = [
      { s: 1, x: 70, icon: "chat", t: "Phỏng vấn", d: "mỗi lần một câu" },
      { s: 2, x: 210, icon: "doc", t: "ho-so.md", d: "ghi dần từng câu" },
      { s: 3, x: 350, icon: "phone", t: "3 phiên bản", d: "xem trên điện thoại" },
      { s: 4, x: 490, icon: "mic", t: "Sửa bằng lời", d: "từng vòng nhỏ" },
      { s: 5, x: 630, icon: "link", t: "Go live", d: "có đường link" }
    ];
    var s = V.g(1, '<path d="M70 130 L630 130" class="v-dash"/>');
    st.forEach(function (o, i) {
      s += V.g(o.s, (i ? '<path d="M' + (o.x - 108) + ' 130 L' + (o.x - 34) + ' 130" class="v-flow" marker-end="url(#aha)"/>' : "") +
        '<circle cx="' + o.x + '" cy="130" r="32" class="v-box" style="stroke:#d97757;stroke-width:2"/>' + V.icon(o.icon, o.x - 14, 116, 28, "acc") +
        V.t(o.x, 192, o.t, "sm" + (o.t.indexOf(".") > 0 ? " m" : "")) + V.t(o.x, 212, o.d, "xs mut") + V.t(o.x, 80, i < 2 ? "Bài 16" : i < 4 ? "Bài 17" : "Bài 18", "xs m acc"), "pop");
    });
    return V.svg(720, 240, s);
  });

  C.register({
    id: "L16",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 16 · Việc 3",
        lines: ["Claude ==phỏng vấn bạn==,", "dựng website,", "rồi go live."],
        sub: "Một trang về bạn, qua 3 bài, bắt đầu từ cuộc phỏng vấn.",
        after: [
          "Việc 3 ghép gần như mọi thứ đã học, kéo dài qua 3 bài. Bài này: Claude phỏng vấn bạn để có nội dung (giống [[L03]]). [[L17]]: các trợ lý dựng 3 phiên bản song song để bạn chọn, rồi bạn sửa bằng giọng nói. [[L18]]: rà thông tin riêng tư ([[L05]]) và đưa trang lên mạng qua GitHub.",
          "Ví dụ trong bài là một ==trang hồ sơ cá nhân của teamlead==, dành cho đại lý tiềm năng và đối tác. Bạn có thể đổi mục đích: trang giới thiệu team, trang tuyển đại lý, trang hướng dẫn khách làm hồ sơ bồi thường."
        ]
      },
      {
        layout: "visual", eyebrow: "Các bước của Việc 3", title: "Từ cuộc phỏng vấn tới đường link",
        visual: "phong-van-toi-link",
        captions: [
          "==Phỏng vấn==: Claude hỏi, mỗi lần một câu.",
          "Câu trả lời được ghi dần vào `ho-so.md`.",
          "Các trợ lý dựng ==3 phiên bản==, bạn xem trước trên ==điện thoại== ([[L17]]).",
          "==Sửa bằng giọng nói== qua từng vòng nhỏ ([[L17]]).",
          "==Lưu mốc==, go live, nhận ==đường link== ([[L18]])."
        ]
      },
      {
        layout: "prompt", anchor: "cac-buoc", screen: "code", eyebrow: "Việc 3 · Bước 1 · Phỏng vấn", title: "Để Claude hỏi, bạn trả lời",
        label: "Dán vào thẻ Code",
        prompt: "Mình muốn làm một website một trang giới thiệu về bản thân trong công việc. Hãy phỏng vấn mình, MỖI LẦN MỘT CÂU, chờ mình trả lời rồi mới hỏi tiếp: mình là ai, đang làm gì, thành tích nổi bật (có con số), dự án tiêu biểu, website dành cho ai và mình muốn người xem làm gì sau khi xem. Ghi ngay từng câu trả lời vào `03-website/ho-so.md`. Khi đủ thông tin thì báo mình, chưa dựng trang vội.",
        after: ["Trả lời bằng giọng nói cho nhanh. Claude ghi từng câu ngay khi bạn trả lời, nên dừng giữa chừng cũng không mất gì. Hồ sơ này là \"nguyên liệu\" cho các trợ lý ở [[L17]]."]
      },
      {
        layout: "output", eyebrow: "Hồ sơ mẫu", bar: "03-website/ho-so.md",
        lines: [
          "# Tên",
          "Phạm Ngọc Lan (nhân vật hư cấu)",
          "# Công việc hiện tại",
          "Trưởng nhóm kinh doanh Team HCM 1, 6 năm trong ngành bảo hiểm phi nhân thọ.",
          "# Thành tích",
          "Team HCM 1 đạt 196,8 triệu phí bảo hiểm tháng 9, đứng thứ 2 toàn công ty",
          "Đưa 50 đại lý mới vào bán bảo hiểm vật chất ô tô trong tháng 9",
          "Báo cáo doanh thu tuần: từ nửa ngày xuống 15 phút nhờ skill của Claude",
          "# Website dành cho ai",
          "Đại lý tiềm năng và đối tác. Xem xong thì để lại số điện thoại hoặc gửi email."
        ],
        note: "Số liệu \"196,8 triệu\" lấy từ file `doanh-thu-thang-09.xlsx` trong thư mục thực hành; nhân vật và tên công ty là hư cấu."
      },
      {
        layout: "list", eyebrow: "Hoặc dùng skill có sẵn", title: "Skill phỏng vấn làm website",
        text: ["Thư mục thực hành đã có sẵn skill `phong-van-website`: phiên bản đầy đủ của lời nhắc trên, gồm các câu hỏi theo thứ tự, cách ghi hồ sơ, và danh sách kiểm tra trước khi dựng trang."],
        items: [
          { k: "/", text: "Gõ `/phong-van-website` để bắt đầu." },
          { k: "✓", text: "Skill hỏi kỹ hơn, ghi vào `ho-so.md`, rồi đi cùng bạn suốt Việc 3: dựng trang, rà thông tin riêng tư, go live." },
          { k: "✎", text: "Như mọi skill ([[L07]]), bạn mở file `SKILL.md` ra đọc và sửa cho hợp với mình được." },
          { k: "↓", text: "Bản riêng để chia sẻ: [phong-van-website.zip](thuc-hanh/phong-van-website.zip). Thư mục `.claude` bị ẩn, nên cách dễ nhất là nhờ Claude giải nén giúp vào `.claude/skills`." }
        ]
      },
      {
        layout: "tips", eyebrow: "Bài tập", title: "Thử ngay",
        try: "Trả lời phỏng vấn bằng giọng nói, giữ lại `ho-so.md` cho bài sau. Lỡ dừng giữa chừng? Mở phiên mới và nói: \"Đọc `03-website/ho-so.md` rồi phỏng vấn mình tiếp phần còn thiếu.\"",
        ask: "\"Hồ sơ này còn thiếu gì để website của mình thuyết phục đại lý tiềm năng hơn?\""
      }
    ]
  });
})();
