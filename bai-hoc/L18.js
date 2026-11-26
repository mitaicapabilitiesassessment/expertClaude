/* Bài 18 · GitHub và go live (trainer làm mẫu) */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("moc-luu-va-link", function () {
    var s = V.g(1, V.box(30, 110, 120, 90, { cls: "v-box2" }) + V.icon("folder", 66, 124, 46, "acc") + V.t(90, 222, "03-website/", "xs m"));
    var commits = [{ x: 210, t: "Bản đầu" }, { x: 290, t: "Thêm số liệu" }, { x: 370, t: "Đổi màu" }];
    s += V.g(2, '<path d="M170 150 L410 150" class="v-line"/>' + commits.map(function (c) { return '<circle cx="' + c.x + '" cy="150" r="12" fill="#d97757"/>' + V.t(c.x, 182, c.t, "xs mut"); }).join("") + V.t(290, 210, "mỗi mốc lưu = một commit + ghi chú", "xs acc"));
    s += V.g(3, '<path d="M370 128 C 340 90, 240 90, 214 128" class="v-acc-s" marker-end="url(#aha)"/>' + V.t(292, 76, "quay lại mốc nào cũng được", "xs"), "fade");
    s += V.g(4, '<path d="M420 150 L480 150" class="v-flow" marker-end="url(#aha)"/>' + V.t(450, 138, "push", "xs m acc") + V.box(486, 110, 100, 80, { cls: "v-box" }) + V.icon("git", 520, 122, 32, "acc") + V.t(536, 176, "GitHub", "sm"));
    s += V.g(5, '<path d="M586 150 L620 150" class="v-line" marker-end="url(#ah)"/>' + V.icon("globe", 630, 130, 40, "acc") + V.t(650, 194, "*.github.io", "xs m"));
    s += V.g(6, V.icon("phone", 640, 40, 40, "acc") + V.t(660, 100, "mở trên điện thoại", "xs mut"), "pop");
    s += V.g(7, V.box(200, 240, 380, 40, { cls: "v-box2", r: 20 }) + V.t(390, 265, "Sửa → lưu mốc mới → push: trang tự cập nhật sau ~1 phút", "xs"));
    return V.svg(720, 290, s);
  });

  C.register({
    id: "L18",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 18 · GitHub và go live",
        lines: ["GitHub là ==cỗ máy thời gian==", "cho dự án của bạn."],
        sub: "Và cũng là nơi để dự án go live.",
        after: [
          "Bạn đã từng có thư mục đầy file kiểu `bao-cao-final.docx`, `bao-cao-final-2.docx`, `bao-cao-final-that-su.docx`? GitHub giải quyết đúng chuyện này: mỗi lần lưu là ==một mốc có ghi chú==, quay lại mốc nào cũng được.",
          "**Trong buổi học, trainer hướng dẫn phần go live trên màn hình** (cần tài khoản GitHub và vài phút cài công cụ). Học viên làm lại sau buổi theo đúng các bước dưới đây."
        ]
      },
      {
        layout: "visual", eyebrow: "Từ thư mục tới đường link", title: "Mốc lưu và đường link",
        visual: "moc-luu-va-link",
        captions: [
          "Website của bạn là ==một thư mục== trên máy.",
          "Mỗi lần lưu là một ==mốc== (commit), kèm ==ghi chú ngắn==.",
          "Như ==cỗ máy thời gian==: quay lại ==mốc nào cũng được==.",
          "==Push==: đẩy thư mục cùng toàn bộ lịch sử lên ==GitHub==.",
          "==GitHub Pages== cho website ==một địa chỉ== trên internet.",
          "Ai có link cũng mở được, kể cả trên ==điện thoại==.",
          "Sửa, lưu ==mốc mới==, đẩy lên: trang ==tự cập nhật== sau khoảng 1 phút."
        ]
      },
      {
        layout: "list", eyebrow: "4 khái niệm cần biết", title: "Commit, repository, push, deploy",
        items: [
          { k: "01", text: "==Commit== (mốc lưu): một lần lưu, kèm một ghi chú ngắn." },
          { k: "02", text: "==Repository== (kho): thư mục dự án cùng toàn bộ lịch sử." },
          { k: "03", text: "==Push== (đẩy lên): gửi các mốc mới từ máy bạn lên GitHub." },
          { k: "04", text: "==Deploy== (go live): cho dự án một địa chỉ trên internet. ==GitHub Pages== làm việc này miễn phí cho website đơn giản, ==ở chế độ Public==." }
        ]
      },
      {
        layout: "list", eyebrow: "Tin vui", title: "Bạn không cần gõ lệnh git",
        items: [
          { k: "01", text: "Claude gõ mọi lệnh và ==hỏi bạn trước mỗi bước==." },
          { k: "02", text: "Bạn chỉ cần ==một tài khoản GitHub== và ==tự đăng nhập==. Claude không bao giờ cần mật khẩu của bạn." },
          { k: "03", text: "Muốn quay lại thì nói: ==\"quay lại bản trước khi đổi màu\"==." }
        ]
      },
      {
        layout: "prompt", anchor: "go-live", screen: "code", eyebrow: "Việc 3 · Bước 5 · Rà thông tin", title: "Trước khi công khai, rà lại một lượt",
        label: "Dán vào thẻ Code",
        prompt: "Website trong `03-website` sắp được đưa lên mạng công khai. Rà toàn bộ nội dung và liệt kê mọi thông tin không nên công khai: thông tin cá nhân (số điện thoại riêng, địa chỉ nhà), số liệu kinh doanh nội bộ của công ty, tên khách hàng, đại lý hay đối tác, thông tin chưa được phép công bố. Với từng mục, đề xuất cách thay thế. Chưa sửa gì, để mình quyết.",
        after: ["Website sẽ set ở chế độ Public, ai cũng đọc được. Bước này mất 1 phút, và ==bạn là người quyết định cuối cùng==."]
      },
      {
        layout: "output", eyebrow: "Kết quả mẫu", bar: "Claude rà lại",
        lines: [
          "Mình thấy 3 chỗ bạn nên cân nhắc:",
          "1. Số liệu \"196,8 triệu phí tháng 9\" là số liệu kinh doanh nội bộ: nên thay bằng \"top 2 toàn công ty\".",
          "2. Số điện thoại cá nhân ở phần liên hệ: có thể thay bằng email công việc.",
          "3. Tên đối tác bảo hiểm A: cần xin phép trước khi nêu tên công khai.",
          "Bạn quyết định giữ hay bỏ từng mục."
        ],
        note: "Với người làm trong công ty, đây là bước quan trọng nhất của Việc 3: ==số liệu kinh doanh, tên khách hàng, đối tác== không được đưa lên trang công khai nếu chưa được phép. Làm theo quy định truyền thông của công ty.", noteTone: "warn"
      },
      {
        layout: "steps", eyebrow: "Việc 3 · Bước 6 · Chuẩn bị", title: "Tạo tài khoản GitHub (nếu chưa có)",
        steps: [
          "Mở ==github.com/signup==. Đăng ký bằng email, hoặc chọn đăng nhập bằng tài khoản Google.",
          "Chọn ==tên người dùng== (username): chỉ chữ cái không dấu, chữ số và dấu gạch ngang, tối đa 39 ký tự. Tên này sẽ nằm trong địa chỉ website.",
          "Làm bước xác minh, rồi ==xác minh email== bằng mã GitHub gửi tới hộp thư.",
          "Gói ==Free== là đủ. Nên bật ==xác minh 2 bước== (2FA) để bảo vệ tài khoản."
        ],
        after: ["Tên người dùng xem ở ảnh đại diện góc trên bên phải khi đăng nhập github.com. Website sẽ có địa chỉ `https://<tên-github>.github.io`, luôn viết chữ thường."]
      },
      {
        layout: "prompt", screen: "code", eyebrow: "Việc 3 · Bước 6 · Go live", title: "Một lời nhắc để đưa trang lên mạng",
        label: "Thay <tên-github> bằng tên của bạn (chữ thường)",
        prompt: "Đưa website trong `03-website` lên mạng bằng GitHub Pages với địa chỉ https://<tên-github>.github.io. Kiểm tra máy đã có git và GitHub CLI chưa, thiếu thì xin phép cài. Mình sẽ tự đăng nhập GitHub trên trình duyệt. Tạo kho `<tên-github>.github.io` (công khai), KHÔNG đưa file `ho-so.md` và thư mục `phuong-an-khac` lên. Hỏi mình trước mỗi bước, và báo đường link khi trang đã chạy."
      },
      {
        layout: "steps", screen: "code", eyebrow: "Diễn ra thế nào", title: "Claude làm, bạn chỉ cần đăng nhập",
        steps: [
          "Claude kiểm tra ==git== và ==GitHub CLI==, thiếu thì xin phép cài.",
          "==Bạn tự đăng nhập GitHub== trong trình duyệt.",
          "Claude tạo kho, đẩy các file của trang lên (không kèm `ho-so.md`) và bật ==GitHub Pages==.",
          "Mở `https://<tên-github>.github.io` trên ==điện thoại==."
        ],
        after: ["Lần đầu mất vài phút vì phải cài công cụ, những lần sau chỉ vài giây. Kho `<tên-github>.github.io` là ==kho công khai==: ai cũng đọc được mọi file, nên lời nhắc mới dặn không đưa `ho-so.md` (bản ghi nguyên văn câu trả lời phỏng vấn) lên."],
        note: "Vừa đưa lên đã thấy lỗi 404? GitHub Pages có thể cần vài phút để trang chạy. Đợi một chút rồi nhờ Claude kiểm tra trạng thái Pages."
      },
      {
        layout: "prompt", screen: "code", eyebrow: "Việc 3 · Bước 7 · Thử một thay đổi", title: "Sửa, lưu mốc, tự cập nhật",
        label: "Dán vào thẻ Code",
        prompt: "Đổi màu chủ đạo của website sang xanh lá đậm, lưu một mốc với ghi chú ngắn bằng tiếng Việt, rồi đẩy lên GitHub. Báo mình khi trang trên mạng đã cập nhật.",
        after: ["Muốn quay lại? Nói: \"Quay lại bản trước khi đổi màu, rồi đẩy lên.\" Đây chính là cỗ máy thời gian."]
      },
      {
        layout: "list", eyebrow: "Vì sao dùng Code", title: "Vì sao việc này cần Claude Code",
        items: [
          { k: "01", text: "==Git== và ==GitHub CLI== là công cụ cài trên máy bạn." },
          { k: "02", text: "Cần một agent ==chạy các công cụ đó thay bạn== và hỏi bạn trước mỗi bước." },
          { k: "03", text: "Website nằm trong ==thư mục của bạn==, sửa lúc nào cũng được." }
        ]
      },
      {
        layout: "tips", eyebrow: "Bài tập sau buổi học", title: "Thử ngay",
        try: "Sau buổi học, làm lại Bước 5 tới 7 với website của bạn, rồi gửi đường link vào nhóm chat của lớp.",
        ask: "\"Commit là gì? Push là gì? Giải thích cho mình bằng ví dụ quản lý hồ sơ hợp đồng bảo hiểm.\""
      }
    ]
  });
})();
