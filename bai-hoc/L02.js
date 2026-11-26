/* Bài 02 · Claude Code là gì, và khác gì Claude Chat */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("vong-lap-agent", function () {
    var cx = 360, cy = 160, R = 112;
    var st = [
      { s: 2, a: -90, icon: "user", t: "Nhận việc" },
      { s: 3, a: -18, icon: "folder", t: "Đọc file" },
      { s: 4, a: 54, icon: "gear", t: "Làm" },
      { s: 5, a: 126, icon: "check", t: "Kiểm tra" },
      { s: 6, a: 198, icon: "chat", t: "Báo cáo / hỏi lại" }
    ];
    var s = V.g(1, '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" class="v-dash"/>' + '<circle cx="' + cx + '" cy="' + cy + '" r="40" fill="url(#gz)"/>' + V.t(cx, cy - 2, "Mục tiêu", "sm dk") + V.t(cx, cy + 16, "của bạn", "xs dk"), "pop");
    st.forEach(function (o) {
      var r = o.a * Math.PI / 180, x = cx + R * Math.cos(r), y = cy + R * Math.sin(r);
      var lx = x + (Math.cos(r) >= 0 ? 34 : -34), anchor = Math.cos(r) >= 0 ? "start" : "end";
      if (Math.abs(Math.cos(r)) < .2) { lx = x; anchor = "middle"; }
      var ly = Math.abs(Math.cos(r)) < .2 ? y - 34 : y + 5;
      s += V.g(o.s, '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="26" class="v-box" style="stroke:#d97757;stroke-width:2"/>' + V.icon(o.icon, x - 12, y - 12, 24, "acc") + V.t(lx.toFixed(1), ly.toFixed(1), o.t, "sm", anchor), "pop");
    });
    s += V.g(7, '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" stroke="#d97757" stroke-width="3" stroke-dasharray="10 12" class="v-spin"/>' + V.t(600, 300, "↻ lặp tới khi xong", "sm acc", "middle"), "fade");
    return V.svg(720, 320, s);
  });

  C.register({
    id: "L02",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 02 · Claude Code là gì",
        lines: ["Claude Code là một ==AI agent==", "làm việc ngay trên máy tính của bạn."],
        sub: "Bạn giao mục tiêu; Claude tự đọc file, làm, kiểm tra, rồi báo lại.",
        after: ["Claude Code làm việc thẳng với các file trong thư mục bạn chọn: đọc, tạo mới, sửa, và chạy lệnh. Bạn không phải tải file lên, cũng không phải chép kết quả ra."]
      },
      {
        layout: "visual", eyebrow: "Agent làm việc thế nào", title: "Lặp lại cho tới khi xong",
        visual: "vong-lap-agent",
        captions: [
          "Bạn giao ==một mục tiêu==, Claude tự chạy vòng lặp này.",
          "==Nhận việc==: hiểu bạn muốn gì, thiếu gì thì hỏi.",
          "==Đọc==: mở các file trong thư mục bạn chọn.",
          "==Làm==: viết, sửa, tạo file, chạy lệnh.",
          "==Kiểm tra==: tự xem lại kết quả có đúng yêu cầu không.",
          "==Báo cáo hoặc hỏi lại==: xong thì báo, chưa rõ thì hỏi bạn.",
          "Chưa đạt thì ==làm lại==, chứ không dừng sau một câu trả lời."
        ],
        after: ["Khác với hỏi đáp, agent không dừng sau một câu trả lời. Vì vậy bạn chỉ cần mô tả ==kết quả mong muốn==, không cần hướng dẫn từng bước."]
      },
      {
        layout: "compare", eyebrow: "Ứng dụng Claude trên máy tính", title: "Chat hay Code?",
        text: [
          "Ứng dụng Claude trên máy tính có hai thẻ chính: **Chat** và **Code**. Từ tháng 9/2026, Cowork đã gộp vào Chat: bạn cứ nói việc cần làm, Claude tự biết nên trả lời nhanh hay bắt tay làm cả một việc.",
          "Cả hai đều làm hộ được cả một việc. Khác nhau ở ==chỗ Claude làm việc==: Chat chạy lệnh trong một môi trường tách biệt trên máy chủ của Anthropic và lưu kết quả trong tài khoản; Code làm ngay trên máy bạn, trong thư mục bạn chọn, dùng được mọi phần mềm đã cài."
        ],
        cols: [
          { who: "Chat", title: "Hỏi đáp và làm hộ", items: ["Trả lời, viết nháp, cùng bạn suy nghĩ", "Làm tài liệu, slide, bảng tính, kể cả từ file bạn đưa vào", "Chạy lệnh trên máy chủ của Anthropic"] },
          { who: "Code", title: "Làm ngay trên máy bạn", items: ["Làm trong thư mục bạn chọn", "Dùng được phần mềm đã cài trên máy (Excel, Python, Git…)", "Để lại thứ dùng lâu dài: skill, script, website, sổ `CLAUDE.md`"] }
        ],
        thumb: "Việc làm xong là thôi: ==Chat==. Xây thứ dùng lâu dài, của riêng bạn hoặc team: ==Code==.",
        sources: [{ label: "Claude apps · Release notes (16/9/2026: Cowork comes to every conversation)", url: "https://support.claude.com/en/articles/12138966-release-notes" }]
      },
      {
        layout: "statement", eyebrow: "Dễ hình dung hơn",
        lines: ["Chat như một cộng tác viên làm từ xa.", "Code như nhân viên ngồi ==ngay trong văn phòng bạn==."],
        after: ["Với Chat, bạn gửi việc và tài liệu, họ làm ở chỗ của họ rồi gửi lại kết quả. Với Code, người đó mở thẳng tủ hồ sơ (thư mục của bạn), dùng máy móc có sẵn trong phòng (phần mềm trên máy), và để lại sổ tay, quy trình ngay tại chỗ để lần sau làm tiếp mà không phải bắt đầu lại."]
      },
      {
        layout: "cards", eyebrow: "Vì sao khoá học dùng Code", title: "Code mạnh hơn ở 3 chỗ",
        text: ["Chat giờ cũng đọc và sửa được file, cũng tự chạy việc theo lịch. Khoá học vẫn dùng Code vì 3 lý do dưới đây. Mọi thứ bạn học (giao việc, skill, connector) đều dùng lại được trong Chat."],
        cards: [
          { tag: "Máy thật", title: "Dùng được mọi phần mềm", text: "Code làm trên máy bạn nên dùng được mọi phần mềm đã cài hoặc cài thêm. Claude dựng website, chạy thử ngay trên máy, rồi đưa lên mạng (Việc 3)." },
          { tag: "Của bạn", title: "Mọi thứ là file của bạn", text: "Sổ `CLAUDE.md`, skill, script, website đều là file trong thư mục: đọc, sửa, sao lưu, gửi đồng nghiệp, mang sang công cụ khác được (Bài 10)." },
          { tag: "Kiểm soát", title: "Thấy và quay lại được", text: "Bạn thấy từng bước Claude làm, quyết định Claude được làm gì, và mọi thay đổi đều có mốc để quay lại (Bài 04 và 18)." }
        ]
      },
      {
        layout: "steps", screen: "code", anchor: "vi-du", eyebrow: "Ví dụ thật", title: "Không tải lên, không chép ra",
        text: ["Đây chính là bài tập ở [[M3]], nhưng làm trong Code. Hãy để ý những việc bạn ==không phải làm==."],
        steps: [
          "Mở thẻ **Code**, chọn thư mục `hoc-claude-code`.",
          "Dán lời nhắc bên dưới và gửi.",
          "Claude tự đọc 3 biên bản họp và viết file `tom-tat-hop.md` ngay cạnh chúng. Bạn không đính kèm, không tải về gì cả."
        ]
      },
      {
        layout: "prompt", eyebrow: "Lời nhắc để dán", label: "Dán vào thẻ Code",
        prompt: "Đọc giúp mình 3 biên bản họp trong thư mục `tai-lieu` và tóm tắt thành một trang gồm: các quyết định đã chốt, việc cần làm (ai làm, hạn chót), và vấn đề còn bỏ ngỏ. Lưu thành file `tom-tat-hop.md` ngay trong thư mục đó."
      },
      {
        layout: "output", eyebrow: "Kết quả mẫu", title: "Bản của bạn nên khớp những ý này",
        bar: "tai-lieu/tom-tat-hop.md",
        lines: [
          "# Đã chốt",
          "Kéo dài chiến dịch sức khoẻ trên App tới 30/09; mục tiêu tháng 9: 900 triệu",
          "Mở bán vật chất ô tô trên App từ 16/09, giám định qua 6 ảnh",
          "Phản hồi khách về bồi thường trong 24 giờ làm việc; thêm mục \"Giấy tờ cần nộp\" trước 15/10",
          "",
          "# Việc cần làm",
          "Phạm Ngọc Lan: danh sách 50 đại lý tiềm năng HCM, hạn 15/09",
          "Trần Thu Hà: tập huấn đại lý 2 buổi, hạn 18/09",
          "Ngô Thị Huyền: 3 mẫu email phản hồi, hạn 06/10",
          "",
          "# Còn bỏ ngỏ",
          "Đối tác A chưa chốt thời gian duyệt ảnh giám định",
          "Có mở bán cho xe kinh doanh vận tải không"
        ],
        after: ["Câu chữ của bạn có thể khác, nhưng ==quyết định, người phụ trách và hạn chót phải khớp== với biên bản. Nếu lệch, đó là lúc dùng kỹ năng 3: chỉ ra chỗ sai để Claude sửa."]
      },
      {
        layout: "tips", eyebrow: "Trước khi sang bài sau", title: "Thử ngay",
        try: "Làm lại ví dụ trên, rồi mở `tom-tat-hop.md` và đối chiếu với từng biên bản: Claude có bỏ sót việc nào không?",
        ask: "\"Giải thích 'AI agent' cho mình bằng một ví dụ trong nghề phân phối bảo hiểm.\""
      }
    ]
  });
})();
