/* Trang K3 · Tiếng Việt và giọng nói */
(function () {
  var C = window.Course;

  C.register({
    id: "K3",
    blocks: [
      {
        layout: "prompt", eyebrow: "Tiếng Việt", title: "Để Claude luôn trả lời bằng tiếng Việt",
        text: [
          "**Trong Chat**: thêm một dòng vào chỉ dẫn cá nhân (**Settings > Your Claude > Instructions for Claude**, xem [[M2]]).",
          "**Trong Claude Code**: thêm cùng dòng đó vào `CLAUDE.md` của thư mục hoặc của bạn ([[L10]])."
        ],
        label: "Dòng để dán",
        prompt: "Luôn trả lời bằng tiếng Việt. Xưng \"mình\", gọi người dùng là \"bạn\". Số tiền viết dạng 1.250.000đ, ngày viết dạng 25/11/2026."
      },
      {
        layout: "list", eyebrow: "Gõ tiếng Việt", title: "Gõ có dấu không lỗi",
        items: [
          { k: "01", text: "Trong ứng dụng Claude (thẻ Chat và thẻ Code), gõ ==Telex hay VNI== đều bình thường." },
          { k: "02", text: "Dùng Claude Code trong ==cửa sổ dòng lệnh== mà chữ bị lặp hoặc mất dấu: gõ ở nơi khác rồi dán vào, hoặc chuyển sang ứng dụng Claude." },
          { k: "03", text: "Tên file, tên thư mục nên ==không dấu, không khoảng trắng== (ví dụ `bao-cao-quy-3.xlsx`) để tránh lỗi khi Claude chạy lệnh." }
        ]
      },
      {
        layout: "table", eyebrow: "Nói thay vì gõ", title: "Đọc chính tả miễn phí",
        text: ["Nói nhanh gấp mấy lần gõ, và bạn kể được nhiều bối cảnh hơn: đúng điều Claude cần để làm tốt ([[L06]])."],
        head: ["Máy", "Cách bật"],
        widths: ["22%", "78%"],
        rows: [
          ["Windows 11", "Nhấn ==Win + H== để bật nhập bằng giọng nói. Danh sách ngôn ngữ hỗ trợ tuỳ phiên bản Windows; nếu máy chưa nhận tiếng Việt, dùng micro trên điện thoại (dòng dưới) hoặc lệnh `/remote-control` ở cuối trang."],
          ["macOS", "**System Settings > Keyboard > Dictation**: bật lên, thêm Tiếng Việt, rồi nhấn ==Fn hai lần== để nói."],
          ["Điện thoại", "Bấm nút micro trên bàn phím (Gboard, bàn phím iPhone đều hỗ trợ tiếng Việt)."]
        ],
        note: "Đọc chính tả không tự thêm dấu câu, tên tiếng Anh có thể bị viết theo cách đọc, câu dài có thể bị ngắt khi bạn dừng lâu. Claude vẫn hiểu tốt dù thiếu dấu câu. Mẹo: ==nói phần yêu cầu, gõ tên file==."
      },
      {
        layout: "commands", eyebrow: "Ngoài ra", title: "Điều khiển phiên Claude Code từ điện thoại",
        text: ["Gõ lệnh sau trong một phiên Claude Code để tiếp tục phiên đó từ ứng dụng Claude trên điện thoại hoặc claude.ai, rồi bấm micro trên bàn phím điện thoại để nói tiếng Việt."],
        commands: ["C21", "C27"],
        sources: [{ label: "Claude Code docs · Commands", url: "https://code.claude.com/docs/en/commands" }]
      }
    ]
  });
})();
