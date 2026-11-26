/* Bài 12 · Token và prompt caching */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("bo-nho-dem", function () {
    var s = "";
    var rows = [
      { s: 1, y: 30, n: 1, lbl: "Tin 1" },
      { s: 2, y: 80, n: 2, lbl: "Tin 2" },
      { s: 2, y: 130, n: 3, lbl: "Tin 3" }
    ];
    rows.forEach(function (r) {
      var bars = "";
      for (var i = 0; i < r.n; i++) {
        var old = i < r.n - 1;
        bars += '<rect x="' + (110 + i * 120) + '" y="' + r.y + '" width="114" height="34" rx="6" fill="' + (old ? "#1e3350" : "#d97757") + '"' + (old ? ' data-cache="1"' : "") + "/>";
      }
      s += V.g(r.s, V.t(90, r.y + 22, r.lbl, "sm m", "end") + bars);
    });
    s += V.g(3, '<rect x="110" y="130" width="234" height="34" rx="6" fill="none" stroke="#6fc59b" stroke-width="3" stroke-dasharray="6 5"/>' + V.t(227, 186, "phần cũ: lấy lại từ bộ nhớ đệm, nhanh và rẻ", "xs", "middle"), "fade");
    s += V.g(4, V.box(470, 30, 220, 60, { cls: "v-box", style: "stroke:#c0392b;stroke-width:2" }) + V.t(580, 54, "Đổi model giữa chừng", "sm") + V.t(580, 74, "tính lại toàn bộ từ đầu", "xs mut"), "pop");
    s += V.g(5, V.box(470, 104, 220, 60, { cls: "v-box", style: "stroke:#c0392b;stroke-width:2" }) + V.icon("clock", 482, 118, 24, "acc") + V.t(592, 128, "Nghỉ quá 1 giờ", "sm") + V.t(592, 148, "bộ nhớ đệm hết hạn", "xs mut"), "pop");
    s += V.g(6, V.box(110, 214, 580, 44, { cls: "v-box2", r: 22 }) + V.t(400, 241, "Chọn model từ đầu · mỗi phiên một việc · /compact khi tạm nghỉ", "sm acc"));
    return V.svg(720, 280, s);
  });

  C.register({
    id: "L12",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 12 · Token và prompt caching",
        lines: ["Mỗi tin nhắn, Claude ==đọc lại==", "cả cuộc trò chuyện từ đầu."],
        sub: "Tính bằng token: phiên càng dài, mỗi tin càng tốn.",
        after: [
          "**Token** là những mẩu chữ nhỏ mà model đọc, mỗi token cỡ một phần của một từ. Hạn mức của gói được tính theo lượng token bạn dùng.",
          "Điều ít người biết: mỗi lần bạn gửi tin, Claude nhận ==toàn bộ cuộc trò chuyện== chứ không chỉ tin mới. May là có ==prompt caching== (bộ nhớ đệm) giúp phần cũ được dùng lại với giá rẻ hơn nhiều."
        ]
      },
      {
        layout: "visual", eyebrow: "Bộ nhớ đệm", title: "Phần cũ được dùng lại",
        visual: "bo-nho-dem",
        captions: [
          "Mỗi lần gửi tin, Claude nhận ==cả cuộc trò chuyện==, đo bằng ==token==.",
          "Tin sau dài hơn tin trước, vì phần cũ được ==gửi lại== cùng phần mới.",
          "==Prompt caching==: phần không đổi được ==lấy lại từ bộ nhớ đệm==, nhanh và rẻ hơn nhiều.",
          "==Đổi model giữa chừng==: cả cuộc trò chuyện bị tính lại từ đầu.",
          "==Nghỉ lâu==: với gói Pro/Max, bộ nhớ đệm giữ khoảng ==1 giờ== kể từ tin cuối. Quá giờ thì tin đầu tiên sau giờ nghỉ chậm và tốn hơn.",
          "Thói quen tốt: ==chọn model từ đầu==, ==mỗi phiên một việc==, `/compact` khi tạm nghỉ."
        ],
        after: ["Đây là lý do tin nhắn đầu tiên sau giờ nghỉ trưa thường chậm hơn hẳn: bộ nhớ đệm đã hết hạn nên Claude phải đọc lại cả phiên với giá đầy đủ. Các tin sau đó lại nhanh như cũ."],
        sources: [{ label: "Claude Code docs · Prompt caching", url: "https://code.claude.com/docs/en/prompt-caching" }]
      },
      {
        layout: "compare", eyebrow: "Cái gì làm mất bộ nhớ đệm", title: "Mất và không mất",
        cols: [
          { who: "Làm mất", title: "Tính lại từ đầu", items: ["Đổi model giữa chừng (`/model`)", "Nghỉ quá thời hạn bộ nhớ đệm (khoảng 1 giờ với gói Pro/Max)", "Bật/tắt fast mode", "`/compact`, kết nối hay gỡ một số MCP server giữa chừng"] },
          { who: "Không sao", title: "Vẫn dùng lại được", items: ["Sửa file trong thư mục, dùng skill", "Đổi chế độ quyền", "Đổi mức suy nghĩ trên Fable, Opus 5.5, Sonnet 5.5, Haiku 5.5", "`/rewind`, gọi trợ lý (sub-agent)"] }
        ],
        thumb: "`/compact` làm mất bộ nhớ đệm một lần, nhưng sau đó mặt bàn gọn hơn, nên vẫn đáng dùng khi phiên đã dài."
      },
      {
        layout: "list", eyebrow: "Dùng tiết kiệm hơn", title: "Năm thói quen tiết kiệm hạn mức",
        items: [
          { k: "01", text: "==Chọn model ngay đầu phiên==, hạn chế đổi giữa chừng." },
          { k: "02", text: "==Mỗi phiên một việc==. Xong thì gõ `/clear`." },
          { k: "03", text: "Việc dài thì ==`/compact` khi tạm nghỉ==." },
          { k: "04", text: "Giữ ==CLAUDE.md ngắn gọn==, vì nó được gửi kèm mọi tin nhắn; quy trình dài thì chuyển thành skill." },
          { k: "05", text: "==Chỉ cho Claude tên file== (`@tên-file`) thay vì dán cả đoạn dài vào ô chat." }
        ],
        sources: [{ label: "Claude Code docs · Costs (Reduce token usage)", url: "https://code.claude.com/docs/en/costs" }]
      },
      {
        layout: "commands", anchor: "vi-du", screen: "code", eyebrow: "Ví dụ thật", title: "Xem bạn đã dùng bao nhiêu hạn mức",
        text: ["Gõ `/usage` để xem hạn mức của gói đã dùng bao nhiêu theo phiên 5 giờ và theo tuần, kèm phân tích phần nào tốn nhiều (skill, trợ lý, MCP…). Trong ứng dụng, xem ở **Settings > Usage**. Bảng gói và hạn mức ở trang [[K1]]."],
        commands: ["C04"]
      },
      {
        layout: "tips", eyebrow: "Bài tập", title: "Thử ngay",
        try: "Gõ `/usage` sau một buổi làm việc và ghi lại con số. Áp dụng 5 thói quen trên trong 1 tuần rồi so sánh.",
        ask: "\"Token là gì? Vì sao tin nhắn sau giờ nghỉ trưa lại chậm hơn?\""
      }
    ]
  });
})();
