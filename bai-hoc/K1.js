/* Trang K1 · Chuẩn bị trước khi học */
(function () {
  var C = window.Course;

  C.register({
    id: "K1",
    blocks: [
      {
        layout: "checklist", eyebrow: "Danh sách kiểm tra", title: "Ba việc, chỉ cần làm một lần",
        text: ["Làm xong trước buổi học, trainer sẽ dành 5 phút để cả lớp kiểm tra lại danh sách này. Bấm vào từng dòng để đánh dấu."],
        items: [
          "Tài khoản Claude gói ==Pro hoặc Max== đã đăng nhập (gói Free không có Claude Code).",
          "Đã cài ==ứng dụng Claude trên máy tính== (macOS hoặc Windows) và thấy thẻ **Code**.",
          "Đã tải và giải nén thư mục ==hoc-claude-code== vào một chỗ dễ tìm, ví dụ thư mục Documents.",
          "Trong thẻ Code, đã chọn thư mục `hoc-claude-code` và hỏi thử \"Bạn thấy những file nào trong thư mục này?\"."
        ]
      },
      {
        layout: "table", eyebrow: "Bước 1", title: "Chọn gói",
        text: ["Claude Code có trong mọi gói trả phí. Với teamlead, ==Pro là đủ để bắt đầu==; chỉ nâng lên Max khi ngày nào bạn cũng dùng hết hạn mức."],
        head: ["Gói", "Giá (USD, chưa thuế)", "Được gì"],
        widths: ["14%", "34%", "52%"],
        rows: [
          ["Free", "0", "Chat trên web, máy tính, điện thoại; tạo file, artifact, connector. ==Không có Claude Code==, không có Opus, tối đa 5 project."],
          ["Pro", "20$/tháng, hoặc 200$/năm (khoảng 17$/tháng)", "Có ==Claude Code==, Projects, Research, Claude in Chrome và Microsoft 365, thêm nhiều model. Fable trả bằng usage credits."],
          ["Max", "100$/tháng", "Gấp 5 lần hạn mức Pro mỗi 5 giờ và mỗi tuần; Fable tới một nửa hạn mức tuần; 100$/tháng tín dụng API; ưu tiên giờ cao điểm."],
          ["Ultra", "200$/tháng", "Gấp 10 lần hạn mức tuần của Pro, không giới hạn theo phiên 5 giờ (tài khoản đã xác minh); 200$/tháng tín dụng API."],
          ["Team · Enterprise", "Theo số lượng slot, dành cho doanh nghiệp", "Quản trị tập trung, SSO; dữ liệu không dùng để huấn luyện theo mặc định. Không thuộc phạm vi khoá này."]
        ],
        note: "Giá kiểm tra ngày " + C.facts.checked + " tại claude.com/pricing, có thể thay đổi.",
        sources: [{ label: "Claude · Plans & pricing", url: "https://claude.com/pricing" }]
      },
      {
        layout: "commands", eyebrow: "Cách tính hạn mức", title: "Chat và Code dùng chung ==một giới hạn token==",
        text: ["Mọi thứ bạn làm trên web, ứng dụng máy tính, điện thoại và Claude Code đều trừ vào ==cùng một hạn mức==: tính theo phiên 5 giờ (cuốn chiếu) và theo tuần. Xem ở **Settings > Usage** trong ứng dụng, hoặc gõ lệnh dưới đây trong Claude Code. [[L12]] giải thích vì sao có lúc hết nhanh và cách dùng tiết kiệm."],
        commands: ["C04"],
        sources: [{ label: "Understanding usage and length limits", url: "https://support.claude.com/en/articles/11647753-understanding-usage-and-length-limits" }]
      },
      {
        layout: "steps", eyebrow: "Bước 2", title: "Cài ứng dụng Claude",
        text: ["Cách dễ nhất cho người dùng Claude không biết code là dùng ứng dụng Claude trên máy tính, ở thẻ **Code**. Bạn không cần mở cửa sổ dòng lệnh."],
        steps: [
          "Vào [claude.com/download](https://claude.com/download), chọn bản cho máy của bạn (macOS hoặc Windows), tải về và cài như mọi ứng dụng khác.",
          "Mở ứng dụng, đăng nhập tài khoản Claude.",
          "Bấm thẻ **Code** ở phía trên.",
          "Chọn thư mục `hoc-claude-code` (tải ở bước 3) làm nơi Claude làm việc.",
          "Gõ thử: \"Bạn thấy những file nào trong thư mục này?\""
        ],
        note: "Các bước trên Windows và macOS gần như giống nhau. Kẹt ở đâu, chụp màn hình rồi hỏi Claude (thẻ Chat): \"Mình đang cài Claude và gặp lỗi này, mình cần làm gì?\""
      },
      {
        layout: "table", eyebrow: "Không bắt buộc", title: "Cài Claude Code bằng dòng lệnh",
        text: ["Dành cho ai tò mò về terminal. Dán đúng một dòng tương ứng với máy của bạn, mở cửa sổ mới, gõ `claude --version` để kiểm tra rồi gõ `claude` để bắt đầu."],
        head: ["Máy", "Lệnh cài"],
        widths: ["26%", "74%"],
        rows: [
          ["macOS, Linux", "`curl -fsSL https://claude.ai/install.sh | bash`"],
          ["Windows (PowerShell)", "`irm https://claude.ai/install.ps1 | iex`"],
          ["Windows (WinGet)", "`winget install Anthropic.ClaudeCode` (không tự cập nhật)"]
        ],
        sources: [{ label: "Claude Code docs · Setup", url: "https://code.claude.com/docs/en/setup" }]
      },
      {
        layout: "download", anchor: "thu-muc", eyebrow: "Bước 3", title: "Tải thư mục thực hành",
        text: ["Các bài thực  hành trong khoá học này đều làm trên cùng một thư mục. Toàn bộ dữ liệu bên trong là ==dữ liệu giả lập==, dựng theo bối cảnh một công ty phân phối bảo hiểm phi nhân thọ: tên công ty, khách hàng, nhân viên đều là hư cấu."],
        files: [
          { href: "thuc-hanh/hoc-claude-code.zip", title: "hoc-claude-code.zip", desc: "Thư mục thực hành: biên bản họp, file Excel doanh thu, các thư mục cho Việc 2 và Việc 3.", size: "ZIP" },
          { href: "thuc-hanh/phong-van-website.zip", title: "phong-van-website.zip", desc: "Skill phỏng vấn bạn rồi dựng website, dùng ở [[L16]]. Đã có sẵn trong thư mục thực hành.", size: "ZIP" }
        ],
        after: ["Giải nén ra một chỗ dễ tìm, ví dụ **Documents**, rồi chọn `hoc-claude-code` trong thẻ Code. Đặt tên thư mục ==không dấu, không khoảng trắng== vì tên có dấu đôi khi gây lỗi."]
      },
      {
        layout: "table", eyebrow: "Bên trong thư mục", title: "Mỗi thư mục dùng ở đâu",
        head: ["Thư mục", "Bên trong", "Dùng ở"],
        widths: ["26%", "48%", "26%"],
        rows: [
          ["`tai-lieu/`", "3 biên bản họp (Word): giao ban kinh doanh, ra mắt bảo hiểm xe trên app, xử lý phản hồi bồi thường.", "[[M3]], [[L02]], [[L06]], [[L09]]"],
          ["`01-ban-hang/`", "4 file Excel doanh thu phí bảo hiểm tháng 7 tới tháng 10/2026, cố ý để \"thô\".", "Việc 1 · [[L08]]"],
          ["`02-ban-tin/`", "Để trống, nơi lưu bản tin buổi sáng.", "Việc 2 · [[L15]]"],
          ["`03-website/`", "Để trống, nơi dựng website.", "Việc 3 · [[L16]] tới [[L18]]"],
          ["`.claude/skills/phong-van-website/`", "Skill phỏng vấn để làm website (thư mục ẩn). Gõ `/phong-van-website` để dùng.", "[[L16]]"]
        ],
        note: "Thư mục `.claude` bị ẩn trên máy. Muốn xem, cứ hỏi Claude trong thẻ Code: \"Liệt kê các skill có trong thư mục này\"."
      }
    ]
  });
})();
