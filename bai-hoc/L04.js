/* Bài 04 · File, thư mục và quyền */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("ban-le-tan", function () {
    var s = "";
    // căn phòng = thư mục
    s += V.g(1, V.box(250, 20, 450, 270, { cls: "v-box2", r: 16 }) + V.icon("folder", 266, 32, 24, "acc") + V.t(298, 50, "hoc-claude-code (thư mục bạn chọn)", "sm", "start") +
      V.icon("file", 520, 90, 30) + V.icon("table", 580, 90, 30) + V.icon("doc", 640, 90, 30) + V.t(610, 140, "file của bạn", "xs mut"));
    // bàn lễ tân
    s += V.g(1, V.box(200, 120, 100, 70, { cls: "v-box", r: 10 }) + V.t(250, 150, "Bàn lễ tân", "sm") + V.t(250, 170, "(chế độ quyền)", "xs mut"));
    // Claude bên ngoài
    s += V.g(1, '<circle cx="70" cy="155" r="32" fill="url(#gz)"/>' + V.t(70, 160, "Claude", "sm dk"));
    // các luồng
    s += V.g(2, '<path d="M102 140 C 160 110, 260 70, 510 100" class="v-flow" marker-end="url(#aha)"/>' + V.t(330, 74, "Đọc file: đi thẳng vào", "sm acc"));
    s += V.g(3, '<path d="M102 158 L196 158" class="v-line" marker-end="url(#ah)"/>' + V.box(330, 160, 190, 40, { cls: "v-box" }) + V.t(425, 185, "Sửa file, chạy lệnh: hỏi bạn", "xs"));
    s += V.g(4, '<path d="M88 182 C 96 220, 100 240, 104 250" class="v-line"/>' + '<circle cx="110" cy="262" r="12" fill="#c0392b"/><path d="M103 255l14 14M117 255l-14 14" stroke="#fff" stroke-width="2.5"/>' + V.tl(130, 258, ["Việc nguy hiểm:", "bị chặn"], "xs", "start", 15));
    s += V.g(5, V.box(540, 160, 140, 40, { cls: "v-box" }) + V.t(610, 185, "Accept edits", "xs acc"));
    s += V.g(6, V.box(540, 206, 140, 40, { cls: "v-box" }) + V.t(610, 231, "Plan: chỉ đọc", "xs acc"));
    s += V.g(7, V.box(330, 206, 190, 40, { cls: "v-box" }) + V.icon("shield", 340, 214, 22, "acc") + V.t(440, 231, "Auto: có người kiểm tra", "xs"));
    s += V.g(8, V.box(330, 252, 350, 30, { cls: "v-box", r: 15 }) + V.icon("undo", 342, 257, 20, "acc") + V.t(372, 272, "Hoàn tác được những gì Claude sửa (/rewind)", "xs", "start"));
    return V.svg(720, 300, s);
  });

  C.register({
    id: "L04",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 04 · File, thư mục và quyền",
        lines: ["Claude chỉ làm việc trong", "==một căn phòng==:", "thư mục bạn chọn."],
        sub: "Đọc tài liệu thì thoải mái, còn muốn thay đổi gì thì phải xin phép tại bàn lễ tân.",
        after: ["Khi mở thẻ Code, ứng dụng yêu cầu bạn chọn một thư mục, và Claude chỉ làm việc trong đó. Hãy chọn ==đúng thư mục cần cho việc đang làm==, đừng chọn cả Desktop hay cả ổ đĩa."]
      },
      {
        layout: "list", eyebrow: "File", title: "Claude đọc được gì?",
        text: ["Không cần đổi định dạng. PDF, ảnh và file chữ Claude đọc trực tiếp; với Excel và Word, Claude thường chạy một đoạn script nhỏ để mở, nên đôi khi sẽ xin cài thêm công cụ (bạn sẽ gặp ở [[L08]])."],
        items: [
          { k: "01", text: "==PDF, Excel, Word, PowerPoint, ảnh== và file chữ." },
          { k: "@", text: "Gõ `@` rồi tên file để chỉ đúng file cần đọc, hoặc kéo thả file vào ô nhập." },
          { k: "03", text: "Kết quả được lưu ==ngay cạnh file gốc==, trong cùng thư mục." }
        ]
      },
      {
        layout: "visual", eyebrow: "Quyền", title: "Bàn lễ tân ở cửa thư mục",
        visual: "ban-le-tan",
        captions: [
          "Thư mục bạn chọn là ==căn phòng duy nhất== Claude được vào. Mọi việc đều đi qua bàn lễ tân.",
          "==Đọc file==: đi thẳng vào, không cần hỏi.",
          "==Tạo, sửa file, chạy lệnh==: ở chế độ ==Manual==, Claude hỏi bạn trước từng việc.",
          "==Việc nguy hiểm==: bị chặn.",
          "==Accept edits==: sửa file thì tự qua, chạy lệnh thì vẫn hỏi.",
          "==Plan==: chỉ đọc và lập kế hoạch, chưa động vào gì.",
          "==Auto==: có thêm một bộ kiểm tra chạy nền xem từng việc có đúng ý bạn không. Đây là chế độ nên dùng cho hầu hết việc.",
          "==Hoàn tác== được những gì Claude sửa, nhưng không lấy lại được file đã xoá bằng lệnh hay email đã gửi."
        ],
        after: [
          "Chế độ quyền chọn ở ô ngay dưới khung nhập (trong ứng dụng: **Ctrl+Shift+M** trên Windows, **Cmd+Shift+M** trên Mac; trong terminal: **Shift+Tab**). Đổi được giữa chừng.",
          "Khuyến nghị cho lớp: dùng ==Auto== cho hầu hết việc; chuyển sang ==Manual== khi làm với file quan trọng và muốn tự duyệt từng thay đổi.",
          "Còn một chế độ là ==Bypass permissions==: Claude làm mọi việc mà không hỏi. Chế độ này mặc định tắt (phải bật ở Settings > Claude Code > \"Allow bypass permissions mode\"), và chính Anthropic khuyên chỉ dùng trong môi trường tách biệt như máy ảo. ==Không dùng trong công việc thật.=="
        ],
        sources: [{ label: "Claude Code docs · Desktop (permission modes)", url: "https://code.claude.com/docs/en/desktop" }]
      },
      {
        layout: "compare", eyebrow: "Nên chọn chế độ nào", title: "Ba lựa chọn hay dùng nhất",
        cols: [
          { who: "Hằng ngày", title: "Auto", items: ["Claude tự làm, có bộ kiểm tra chạy nền", "Hợp với thư mục thực hành, việc thường ngày", "Vẫn dừng lại hỏi khi việc có rủi ro"] },
          { who: "Việc quan trọng", title: "Manual", items: ["Duyệt từng thay đổi trước khi Claude làm", "Hợp với file báo cáo gửi sếp, dữ liệu thật", "Chậm hơn nhưng bạn nắm chắc từng bước"] },
          { who: "Việc lớn", title: "Plan", items: ["Claude đọc và lập kế hoạch trước", "Bạn duyệt kế hoạch rồi mới cho làm", "Dùng ở [[L06]] và [[L17]]"] }
        ],
        thumb: "Mẹo an toàn nhất: làm trên ==bản sao== của file quan trọng. `/rewind` chỉ khôi phục những gì Claude ==sửa==, không lấy lại được file đã xoá bằng lệnh."
      },
      {
        layout: "commands", eyebrow: "Nhớ mấy thứ này", title: "Lệnh và phím trong bài",
        commands: ["C13", "C19", "C20", "C07"]
      },
      {
        layout: "tips", eyebrow: "Bài tập", title: "Thử ngay",
        try: "Chọn chế độ ==Auto==, giao cho Claude một việc nhỏ trong thư mục thực hành, ví dụ \"thêm vào đầu file `tom-tat-hop.md` một dòng ghi ngày tóm tắt\". Sau đó gõ `/rewind` (hoặc nhấn Esc hai lần), chọn tin nhắn trước đó để xem file trở lại như cũ.",
        ask: "\"Lệnh xoá file là gì? Vì sao bạn phải xin phép mình trước khi chạy nó?\""
      }
    ]
  });
})();
