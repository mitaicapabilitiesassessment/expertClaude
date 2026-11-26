/* ==========================================================================
   DỮ LIỆU CHUNG CỦA KHOÁ HỌC
   - Sửa tên giảng viên, logo, tên khoá học ở mục BRAND.
   - Sửa thứ tự bài, thời lượng ở mục PARTS / LESSONS.
   - Nội dung từng bài nằm trong thư mục bai-hoc/ (mỗi bài một file).
   ========================================================================== */
window.Course = {
  brand: {
    courseName: "Claude Thực Chiến",
    courseShort: "Claude Thực Chiến",
    tagline: "Khoá học ứng dụng Claude Chat và Claude Code cho đội ngũ teamlead, quản lý",
    trainer: "Trainer Trịnh Đức",
    company: "IZIon24",
    logo: "assets/img/logo-cong-ty.png",          // logo chữ đen, dùng trên nền sáng
    logoOnDark: "assets/img/logo-cong-ty-trang.png", // logo chữ trắng, dùng trên nền tối
    updated: "25/11/2026"
  },

  /* ---------- các phần ---------- */
  parts: [
    { id: 0, key: "mo-dau", label: "Mở đầu", title: "Mở đầu", summary: "" },
    { id: 0.5, key: "nen-tang", label: "Phần 0", title: "Nền tảng chung của Claude Chat và Claude Code",
      summary: "Những tính năng bạn gặp ở cả hai nơi: cùng tài khoản, cùng model, cùng skill, cùng connector, cùng artifact. Nắm phần này, mọi bài sau sẽ dễ hơn.", isNew: true },
    { id: 1, key: "lam-quen", label: "Phần 1", title: "Làm quen với Claude Code",
      summary: "Vì sao nên học, Claude Code là gì, và cách để chính Claude dạy bạn." },
    { id: 2, key: "an-toan", label: "Phần 2", title: "Làm việc an toàn",
      summary: "Claude được làm gì trên máy bạn, dữ liệu nào rời khỏi máy, và cách hoàn tác khi cần." },
    { id: 3, key: "giao-viec", label: "Phần 3", title: "Giao việc và skill",
      summary: "Giao việc cho rõ ràng, biến quy trình thành skill qua Việc 1, rồi chia sẻ kết quả bằng artifact." },
    { id: 4, key: "bo-nho", label: "Phần 4", title: "Bộ nhớ và chi phí",
      summary: "Claude nhớ gì, quên gì, hạn mức được tính thế nào, và nên chọn model nào." },
    { id: 5, key: "ket-noi", label: "Phần 5", title: "Kết nối công cụ",
      summary: "Nối Claude với email, lịch và các dịch vụ khác, rồi áp dụng vào Việc 2." },
    { id: 6, key: "go-live", label: "Phần 6", title: "Xây và go live",
      summary: "Việc 3: Claude phỏng vấn bạn, các trợ lý dựng website song song, rồi đưa website lên mạng qua GitHub." },
    { id: 7, key: "ghep-lai", label: "Phần 7", title: "Ghép lại và đi tiếp",
      summary: "Ghép mọi thứ thành hệ điều hành AI của riêng bạn, và biết cách tự học tiếp sau buổi học." },
    { id: 9, key: "huong-dan", label: "Trang hướng dẫn", title: "Làm một lần, xem lại khi cần", summary: "" }
  ],

  /* ---------- danh sách bài (theo thứ tự học) ----------
     kind: "lesson" | "guide"; viec: số của Việc thực hành; mins: thời lượng trên lớp */
  lessons: [
    { id: "L00", num: "00", part: 0, mins: 10, title: "Giới thiệu khoá học",
      summary: "Khoá học dành cho ai, đi theo lộ trình nào, bạn mang về được gì, và học thế nào cho hiệu quả trong 4 tiếng." },
    { id: "M1", num: "M1", part: 0.5, mins: 8, title: "Claude hôm nay: một tài khoản, nhiều nơi làm việc",
      summary: "Bức tranh toàn cảnh: Chat, Code, Design·Slides·Docs, Claude in Chrome, điện thoại. Tất cả dùng chung một tài khoản và một hạn mức." },
    { id: "M2", num: "M2", part: 0.5, mins: 10, title: "Cá nhân hoá Claude: model, mức suy nghĩ, Projects và bộ nhớ",
      summary: "Những thiết lập có ở cả Chat lẫn Code giúp Claude hiểu bạn hơn và làm đúng ý ngay từ lần đầu." },
    { id: "M3", num: "M3", part: 0.5, mins: 12, title: "Mở rộng năng lực: Skills, Connectors, Artifacts và tạo file",
      summary: "Bộ công cụ Chat và Code dùng chung, bật ở đâu, và dùng như thế nào." },
    { id: "K1", num: "K1", part: 1, mins: 5, kind: "guide", title: "Chuẩn bị trước khi học",
      summary: "Chọn gói, cài ứng dụng Claude, tải thư mục thực hành. Làm một lần, nên xong trước buổi học." },
    { id: "L01", num: "01", part: 1, mins: 6, title: "Tư duy: ba kỹ năng của người \"giỏi AI\"",
      summary: "Vì sao việc ==hiểu AI, có gu và chuyên môn sâu, cùng thói quen thử và cải thiện nhanh== quan trọng hơn thuộc lòng công cụ." },
    { id: "L02", num: "02", part: 1, mins: 8, title: "Claude Code là gì, và khác gì Claude Chat",
      summary: "Claude Code là một AI agent làm việc ngay trên máy tính của bạn. Khi nào dùng Chat, khi nào chuyển sang Code." },
    { id: "L03", num: "03", part: 1, mins: 6, title: "Để Claude dạy bạn: chọn việc, tự học, tự gỡ rối",
      summary: "Nhờ Claude phỏng vấn để chọn việc nên tự động hoá, giải thích điều bạn chưa biết, và gỡ lỗi cho chính nó." },
    { id: "L04", num: "04", part: 2, mins: 8, title: "File, thư mục và quyền",
      summary: "Claude làm việc ở đâu, các chế độ làm việc, quyền chỉnh sửa của Claude và những gì có thể hoàn tác." },
    { id: "L05", num: "05", part: 2, mins: 7, title: "Dữ liệu và quyền riêng tư",
      summary: "Dữ liệu nào rời khỏi máy bạn, cài đặt quyền riêng tư của tài khoản cá nhân, và 6 thói quen an toàn với dữ liệu khách hàng." },
    { id: "L06", num: "06", part: 3, mins: 7, title: "Giao việc",
      summary: "Giao việc cho Claude như cho một nhân viên giỏi mới vào công ty: đủ bối cảnh, lập kế hoạch trước, và nói thay vì gõ để tiết kiệm thời gian." },
    { id: "L07", num: "07", part: 3, mins: 6, title: "Skills",
      summary: "Skill là quy trình chuẩn Claude cất trên kệ, chỉ mở ra khi cần, và cho kết quả giống nhau mỗi lần gửi yêu cầu." },
    { id: "L08", num: "08", part: 3, mins: 20, viec: 1, title: "Việc 1: Excel doanh thu thành báo cáo, rồi đóng gói thành skill",
      summary: "Biến 3 file Excel doanh thu phí bảo hiểm thô thành bộ slide báo cáo quý 3, rồi lưu cả quy trình thành skill để tháng 10 chỉ cần một dòng lệnh." },
    { id: "L09", num: "09", part: 3, mins: 7, title: "Artifacts: kết quả có đường link riêng",
      summary: "Sáu mẫu artifact (Docs, Slides, Design, Data, Sheets, Whiteboards): kết quả có link riêng, chỉ bạn xem được cho tới khi bạn chia sẻ, sửa tiếp và xuất ra file khi cần." },
    { id: "L10", num: "10", part: 4, mins: 8, title: "Bộ nhớ: CLAUDE.md và auto memory",
      summary: "CLAUDE.md là cuốn sổ bàn giao Claude đọc đầu mỗi phiên, để bạn không phải dặn lại cách mình làm việc." },
    { id: "L11", num: "11", part: 4, mins: 5, title: "Context window",
      summary: "Context window là mặt bàn làm việc của Claude: vì sao nó đầy dần và khi nào nên dọn bàn." },
    { id: "L12", num: "12", part: 4, mins: 6, title: "Token và prompt caching",
      summary: "Vì sao có lúc hết hạn mức nhanh, vì sao tin nhắn đầu tiên sau giờ nghỉ lại chậm, và cách dùng tiết kiệm hơn." },
    { id: "L13", num: "13", part: 4, mins: 6, title: "Chọn đúng model cho đúng việc",
      summary: "Fable, Opus, Sonnet, Haiku khác nhau thế nào, việc nào nên dùng model nào, và chỉnh mức suy nghĩ ra sao." },
    { id: "L14", num: "14", part: 5, mins: 10, title: "Kết nối: connectors, API, MCP",
      summary: "Ba cách để Claude làm việc với email, lịch và các công cụ khác, và khi nào dùng cách nào." },
    { id: "L15", num: "15", part: 5, mins: 20, viec: 2, title: "Việc 2: Bản tin buổi sáng, tự chạy mỗi sáng",
      summary: "Claude hỏi bạn cần biết gì mỗi sáng, làm thành trang bản tin, rồi tự chạy lúc 8:00 các ngày làm việc." },
    { id: "L16", num: "16", part: 6, mins: 10, viec: 3, title: "Việc 3: Claude phỏng vấn bạn",
      summary: "Claude hỏi bạn từng câu một và ghi lại thành hồ sơ, làm nguyên liệu cho website của bạn." },
    { id: "L17", num: "17", part: 6, mins: 12, viec: 3, title: "Sub-agents: dựng website song song",
      summary: "Với việc lớn, Claude giao cho nhiều trợ lý làm song song. Ở Việc 3, 3 trợ lý dựng 3 phiên bản website để bạn chọn." },
    { id: "L18", num: "18", part: 6, mins: 13, viec: 3, title: "GitHub và go live",
      summary: "GitHub là cỗ máy thời gian cho dự án và là đường để website có địa chỉ trên internet. Trainer làm mẫu, bạn làm lại sau buổi học." },
    { id: "L19", num: "19", part: 7, mins: 7, title: "Khi mọi thứ ghép lại: hệ điều hành AI",
      summary: "Dữ liệu, bộ nhớ, skill, kết nối và lịch chạy ghép lại thành bộ não thứ hai của bạn." },
    { id: "L20", num: "20", part: 7, mins: 8, title: "Đi tiếp từ đây",
      summary: "3 thói quen giúp bạn tự học tiếp khi Claude thay đổi, và những skill nên thử sau khoá học." },
    { id: "K3", num: "K3", part: 9, kind: "guide", title: "Tiếng Việt và giọng nói",
      summary: "Để Claude trả lời bằng tiếng Việt, gõ tiếng Việt không lỗi, và đọc chính tả miễn phí." },
    { id: "K4", num: "K4", part: 9, kind: "guide", title: "Bảng lệnh và lời nhắc",
      summary: "Mọi lệnh và lời nhắc trong khoá học ở một chỗ, có nút Chép." }
  ],


  /* ---------- 3 việc thực hành ---------- */
  viec: [
    { n: 1, lesson: "L08", title: "Một skill làm báo cáo doanh thu",
      text: "Biến file Excel doanh thu phí bảo hiểm thô thành bộ slide báo cáo, rồi tháng sau chỉ cần một dòng lệnh." },
    { n: 2, lesson: "L15", title: "Bản tin tự đến mỗi sáng",
      text: "Claude hỏi bạn cần biết gì mỗi sáng, rồi tự làm bản tin lúc 8:00 mỗi ngày làm việc." },
    { n: 3, lesson: "L16", title: "Website của riêng bạn",
      text: "Claude phỏng vấn bạn, các trợ lý dựng trang song song, rồi đưa trang lên mạng với địa chỉ riêng." }
  ],

  /* ---------- kho lệnh dùng chung (Bảng lệnh K4 tự gom từ đây) ---------- */
  commands: {
    C01: { cmd: "/clear", alt: "Tên khác: /new", what: "Bắt đầu cuộc trò chuyện mới, mặt bàn trống. File, CLAUDE.md và skill vẫn còn; cuộc cũ mở lại bằng /resume.", lessons: ["L10", "L11"] },
    C02: { cmd: "/compact", what: "Gom cuộc trò chuyện thành bản tóm tắt để giải phóng chỗ trên mặt bàn.", lessons: ["L11"] },
    C03: { cmd: "/context", what: "Xem mặt bàn (context) của Claude đã đầy tới đâu, dạng lưới màu.", lessons: ["L11"] },
    C04: { cmd: "/usage", what: "Xem hạn mức của gói đã dùng bao nhiêu (theo phiên 5 giờ và theo tuần).", lessons: ["K1", "L12"] },
    C05: { cmd: "/init", what: "Nhờ Claude soạn nháp CLAUDE.md từ nội dung thư mục.", lessons: ["L10"] },
    C06: { cmd: "/memory", what: "Mở các file CLAUDE.md, bật/tắt và xem phần ghi nhớ tự động.", lessons: ["L10"] },
    C07: { cmd: "/rewind", alt: "Hoặc nhấn Esc hai lần", what: "Quay về một tin nhắn cũ, hoàn tác cuộc trò chuyện và/hoặc những file Claude đã sửa.", lessons: ["L04"] },
    C08: { cmd: "/model", alt: "Hoặc ô chọn model cạnh nút gửi", what: "Chọn model (Opus, Sonnet, Haiku, Fable).", lessons: ["M2", "L13"] },
    C23: { cmd: "/effort", what: "Chọn mức suy nghĩ: low, medium, high, xhigh, max.", lessons: ["M2", "L13"] },
    C09: { cmd: "/doctor", what: "Kiểm tra cài đặt Claude Code có vấn đề gì không.", lessons: ["L03"] },
    C14: { cmd: "/btw", alt: "Side chat: Ctrl+; (Windows) hoặc Cmd+; (Mac) trong ứng dụng", what: "Hỏi thêm một câu bên lề mà không làm rối việc đang làm.", lessons: ["L03"] },
    C10: { cmd: "/skills", what: "Xem danh sách skill Claude đang có (gồm cả skill đồng bộ từ claude.ai).", lessons: ["M3", "L07"] },
    C11: { cmd: "/plugin", what: "Mở trình quản lý plugin: tìm, cài, bật/tắt các gói skill và kết nối.", lessons: ["L07"] },
    C12: { cmd: "/plugin marketplace add anthropics/skills", alt: "Hoặc: nút + > Plugins trong ứng dụng", what: "Thêm kho skill mẫu của Anthropic (tên kho: anthropic-agent-skills).", lessons: ["L07"] },
    C28: { cmd: "/plugin install document-skills@anthropic-agent-skills", what: "Cài bộ skill Excel, Word, PowerPoint, PDF của Anthropic vào Claude Code.", lessons: ["L07"] },
    C13: { cmd: "Ô chọn chế độ quyền", ui: true, alt: "Ctrl+Shift+M (Windows) · Cmd+Shift+M (Mac) trong ứng dụng; Shift+Tab trong terminal", what: "Manual, Accept edits, Plan, Auto, Bypass permissions.", lessons: ["L04", "L17"] },
    C19: { cmd: "@tên-file", what: "Chỉ cho Claude đúng file cần đọc.", lessons: ["L04"] },
    C20: { cmd: "Esc", ui: true, what: "Dừng Claude giữa chừng.", lessons: ["L04"] },
    C15: { cmd: "/bao-cao-doanh-thu 01-ban-hang/doanh-thu-thang-10.xlsx", what: "Gọi skill báo cáo bạn tạo ở Việc 1 cho dữ liệu tháng 10.", lessons: ["L08"] },
    C16: { cmd: "Nút + > Connectors", ui: true, alt: "Trong Chat: Customize > Connectors", what: "Kết nối Gmail, Google Calendar, Google Drive và các công cụ khác.", lessons: ["M3", "L14", "L15"] },
    C26: { cmd: "/mcp", what: "Xem và quản lý các kết nối MCP trong Claude Code.", lessons: ["L14"] },
    C17: { cmd: "Scheduled (thanh bên) > tạo task mới", ui: true, what: "Hẹn giờ cho một việc chạy định kỳ trên máy (Local) hoặc trên đám mây (Cloud).", lessons: ["L15"] },
    C24: { cmd: "/schedule", alt: "Tên khác: /routines", what: "Tạo, xem, chạy các việc hẹn giờ trên đám mây (cloud scheduled task, trước đây gọi là routines).", lessons: ["L15"] },
    C18: { cmd: "/tasks", what: "Xem các trợ lý (sub-agent) và việc đang chạy nền.", lessons: ["L17"] },
    C22: { cmd: "/resume", what: "Mở lại một cuộc trò chuyện cũ, ví dụ cuộc trước khi gõ /clear.", lessons: ["L11"] },
    C21: { cmd: "/remote-control", alt: "Tên khác: /rc", what: "Tiếp tục điều khiển phiên này từ điện thoại hoặc claude.ai.", lessons: ["K3"] },
    C27: { cmd: "/config", what: "Mở phần cài đặt của Claude Code.", lessons: ["K3"] }
  },

  /* ---------- dữ kiện đã kiểm tra (dùng lại ở nhiều bài) ---------- */
  facts: {
    checked: "25/11/2026",
    models: [
      { name: "Fable 5.2", date: "9/11/2026", note: "Model mạnh nhất mở cho mọi khách hàng" },
      { name: "Opus 5.5", date: "22/9/2026", note: "Model mặc định, Anthropic khuyên bắt đầu từ đây" },
      { name: "Sonnet 5.5", date: "28/9/2026", note: "Vừa nhanh vừa giỏi cho việc hằng ngày" },
      { name: "Haiku 5.5", date: "7/10/2026", note: "Nhanh và tiết kiệm nhất" }
    ],
    effort: ["low", "medium", "high", "xhigh", "max"]
  },

  /* ---------- đăng ký nội dung bài (các file trong bai-hoc/ gọi hàm này) ---------- */
  content: {},
  register: function (data) { this.content[data.id] = data; }
};
