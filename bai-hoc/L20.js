/* Bài 20 · Đi tiếp từ đây */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("moi-tuan-gioi-hon", function () {
    var cx = 360, cy = 168, R = 105;
    var hb = [
      { s: 2, a: -90, icon: "book", t: "Dạy Claude sau mỗi tuần" },
      { s: 3, a: 30, icon: "search", t: "Tìm và thử skill mới" },
      { s: 4, a: 150, icon: "spark", t: "Cứ thử" }
    ];
    var s = V.g(1, '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" class="v-dash"/>' + '<circle cx="' + cx + '" cy="' + cy + '" r="44" fill="url(#gz)"/>' + V.t(cx, cy - 2, "Làm việc", "xs dk") + V.t(cx, cy + 14, "mỗi ngày", "xs dk"), "pop");
    hb.forEach(function (h) {
      var r = h.a * Math.PI / 180, x = cx + R * Math.cos(r), y = cy + R * Math.sin(r);
      s += V.g(h.s, '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="28" class="v-box" style="stroke:#d97757;stroke-width:2"/>' + V.icon(h.icon, x - 13, y - 13, 26, "acc") +
        V.t((x + (Math.cos(r) > .3 ? 40 : Math.cos(r) < -.3 ? -40 : 0)).toFixed(1), (y + (Math.abs(Math.cos(r)) < .3 ? -40 : 5)).toFixed(1), h.t, "sm", Math.cos(r) > .3 ? "start" : Math.cos(r) < -.3 ? "end" : "middle"), "pop");
    });
    s += V.g(5, '<circle cx="' + cx + '" cy="' + cy + '" r="' + R + '" fill="none" stroke="#d97757" stroke-width="3" stroke-dasharray="10 12" class="v-spin"/>' + V.t(cx, 312, "mỗi tuần giỏi hơn một chút", "sm acc"), "fade");
    return V.svg(720, 322, s);
  });

  C.register({
    id: "L20",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 20 · Đi tiếp từ đây",
        lines: ["Claude ==thay đổi liên tục==.", "Bạn học tiếp thế nào?"],
        sub: "Bài này sẽ chỉ cho bạn cách tự học tiếp.",
        after: [
          "Chỉ từ tháng 9 tới nay: Chat và Cowork gộp làm một ([[L02]]), `AGENTS.md` thành quy ước chung ([[L10]]), Fable 5.2 ra mắt ([[L13]]), artifact cài được thành ứng dụng ([[L09]]). Sau buổi học, chắc chắn sẽ có tính năng bạn chưa được học ở đây.",
          "Tin vui: ==các khái niệm vẫn giữ nguyên==: giao việc, skill, bộ nhớ, context window, kết nối. Chỉ có tên gọi và nút bấm thay đổi. Dưới đây là 3 thói quen để theo kịp những thay đổi."
        ]
      },
      {
        layout: "visual", eyebrow: "3 thói quen", title: "Mỗi tuần giỏi hơn một chút",
        visual: "moi-tuan-gioi-hon",
        captions: [
          "Bạn làm việc cùng Claude ==mỗi ngày==, như suốt buổi học.",
          "==Dạy Claude sau mỗi tuần==: nhờ Claude nhìn lại các phiên làm việc, tìm việc nên thành skill và điều nên ghi vào sổ.",
          "==Tìm và thử skill mới== người khác đã làm sẵn, thay vì tự làm mọi thứ từ đầu.",
          "==Cứ thử==, kể cả việc bạn chưa chắc AI làm được.",
          "Lặp lại 3 thói quen này thì ==mỗi tuần bạn giỏi hơn một chút==."
        ]
      },
      {
        layout: "prompt", screen: "code", eyebrow: "Thói quen 1 · Dạy Claude sau mỗi tuần", title: "Mỗi chiều thứ Sáu, cùng Claude nhìn lại",
        label: "Dán vào thẻ Code",
        prompt: "Xem lại các phiên làm việc của mình trong thư mục này suốt tuần qua và đề xuất: (1) việc nào mình làm đi làm lại, nên lưu thành skill; (2) điều gì mình phải nhắc bạn nhiều lần, nên ghi vào CLAUDE.md; (3) skill nào chạy chưa ổn và nên sửa gì. Liệt kê từng đề xuất kèm lý do, chờ mình duyệt rồi mới sửa.",
        after: [
          "Khi Claude làm sai, đa số chỉ sửa kết quả rồi đi tiếp, và lần sau Claude lại sai đúng chỗ đó. Ghi điều cần sửa vào sổ hoặc vào skill thì lỗi đó hiếm khi lặp lại.",
          "Muốn khỏi phải nhớ? Biến lời nhắc này thành ==lịch chạy mỗi chiều thứ Sáu==, như cách làm bản tin ở [[L15]]."
        ]
      },
      {
        layout: "table", eyebrow: "Thói quen 2 · Tìm và thử skill mới", title: "Skill nên thử sau khoá học",
        text: ["Các bộ skill do Anthropic làm sẵn cho từng loại công việc. Xem thêm ở danh mục [claude.com/plugins](https://claude.com/plugins). Bộ Word, Excel, PowerPoint, PDF bạn đã có từ [[L07]]."],
        head: ["Bộ skill", "Hợp với teamlead khi cần", "Xem"],
        widths: ["22%", "58%", "20%"],
        rows: [
          ["Productivity", "Danh sách việc cần làm, kế hoạch trong ngày, ghi nhớ người, dự án, từ viết tắt hay dùng. Nên cài đầu tiên.", "[GitHub](https://github.com/anthropics/knowledge-work-plugins/tree/main/productivity)"],
          ["Sales", "Chuẩn bị cuộc gặp, tìm hiểu đối tác, viết email follow-up, rà pipeline.", "[GitHub](https://github.com/anthropics/knowledge-work-plugins/tree/main/sales)"],
          ["Customer Support", "Phân loại yêu cầu, soạn thư trả lời khách, chuyển vấn đề lên cấp trên, viết bài hướng dẫn.", "[GitHub](https://github.com/anthropics/knowledge-work-plugins/tree/main/customer-support)"],
          ["Operations", "Ghi lại quy trình, quản lý nhà cung cấp, lập kế hoạch nguồn lực, báo cáo tình hình.", "[GitHub](https://github.com/anthropics/knowledge-work-plugins/tree/main/operations)"],
          ["Human Resources", "Tuyển dụng, onboarding nhân viên mới, đánh giá hiệu suất.", "[GitHub](https://github.com/anthropics/knowledge-work-plugins/tree/main/human-resources)"],
          ["Data", "Khám phá dữ liệu, vẽ biểu đồ, dựng dashboard từ Excel hay CSV.", "[GitHub](https://github.com/anthropics/knowledge-work-plugins/tree/main/data)"],
          ["anthropics/skills", "Kho skill mẫu, có `skill-creator` để tự làm skill mới.", "[GitHub](https://github.com/anthropics/skills)"]
        ],
        after: ["Phần lớn skill viết bằng tiếng Anh nhưng Claude vẫn dùng tốt khi bạn làm việc bằng tiếng Việt. Chỉ cần dặn: \"Dùng skill này nhưng trả lời bằng tiếng Việt, điều chỉnh cho ngành bảo hiểm.\""],
        note: "Skill có thể chạy lệnh trên máy bạn: ==chỉ cài từ nguồn tin cậy==. Plugin trong danh mục của Anthropic được duyệt trước khi đăng; skill từ một kho GitHub bất kỳ thì không ai duyệt. Máy công ty: hỏi IT trước khi cài.", noteTone: "warn"
      },
      {
        layout: "prompt", screen: "code", eyebrow: "Thói quen 2 · Cài skill", title: "Chỉ cần đưa link cho Claude",
        label: "Thay [link] bằng link skill",
        prompt: "Đọc skill (hoặc bộ skill) ở link này: [link]. Tóm tắt cho mình bằng tiếng Việt: nó làm gì, gồm những skill nào, có chạy lệnh hay cần tài khoản gì không, có rủi ro gì không. Chờ mình đồng ý rồi mới cài vào thư mục này.",
        after: ["Claude hỏi trước khi tải và ghi file. Cài xong, mở một phiên mới để bắt đầu dùng. Với plugin trong danh mục chính thức, có thể dùng nút **+** > **Plugins** trong thẻ Code và tìm theo tên."]
      },
      {
        layout: "statement", eyebrow: "Thói quen 3 · Cứ thử",
        lines: ["Cứ thử, kể cả những việc", "bạn ==chưa chắc AI làm được==."],
        after: ["Có khi Claude làm được trọn vẹn, có khi được một phần, có khi chưa được. Lần nào bạn cũng học thêm một điều, và đó là cách mở rộng giới hạn của chính mình, và của cả team."]
      },
      {
        layout: "checklist", eyebrow: "Cam kết sau buổi học", title: "Tuần này, mình sẽ…",
        items: [
          "Giao cho Claude ==một việc lặp lại== của mình (từ danh sách ở [[L03]]).",
          "Viết `CLAUDE.md` với 5 quy tắc làm việc của mình.",
          "Chạy lại Việc 1 với file xuất từ hệ thống của team (đã ẩn danh).",
          "Đưa website ở Việc 3 lên mạng và gửi link cho lớp.",
          "Chia sẻ một mẹo dùng Claude với team trong buổi giao ban tới."
        ]
      },
      {
        layout: "statement", eyebrow: "Lời cuối",
        lines: ["Cảm ơn bạn đã học", "đến ==bài cuối cùng==."],
        sub: "Bạn cầm lái, Claude làm.",
        after: ["Có chỗ nào chưa rõ, hãy hỏi Claude trước, rồi hỏi " + C.brand.trainer + " sau. Toàn bộ lệnh và lời nhắc của khoá nằm ở [[K4|Bảng lệnh và lời nhắc]] để bạn tra lại bất cứ lúc nào."]
      }
    ]
  });
})();
