/* Bài 05 · Dữ liệu và quyền riêng tư */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("duong-di-du-lieu", function () {
    var s = "";
    s += V.g(1, V.box(20, 30, 250, 250, { cls: "v-box2", r: 16 }) + V.icon("laptop", 34, 42, 26, "acc") + V.t(68, 60, "Máy của bạn", "lg", "start") +
      V.box(450, 30, 250, 250, { cls: "v-box2", r: 16 }) + V.icon("server", 464, 42, 26, "acc") + V.t(498, 60, "Anthropic", "lg", "start") + V.t(575, 270, "nơi Claude xử lý", "xs mut"));
    // các file
    var files = [[50, 100, "bien-ban.docx"], [50, 150, "doanh-thu.xlsx"], [50, 200, "khach-hang.xlsx"]];
    files.forEach(function (f, i) {
      s += V.g(1, V.icon("file", f[0], f[1], 26) + V.t(f[0] + 34, f[1] + 18, f[2], "xs", "start"));
    });
    s += V.g(2, '<path d="M190 112 C 300 90, 380 90, 470 110" class="v-flow" marker-end="url(#aha)"/>' + V.tl(360, 66, ["chỉ file Claude mở", "mới được gửi đi"], "xs acc", "middle", 14) +
      '<path d="M470 140 C 380 160, 300 160, 200 140" class="v-line" marker-end="url(#ah)"/>' + V.t(330, 170, "kết quả quay về", "xs mut"));
    s += V.g(3, V.box(480, 90, 200, 70, { cls: "v-box" }) + V.t(580, 115, "Công tắc huấn luyện", "sm") +
      '<rect x="540" y="126" width="44" height="22" rx="11" fill="#3b4d66"/><circle cx="552" cy="137" r="9" fill="#f0e8d5"/>' + V.t(596, 142, "Tắt", "xs acc", "start"));
    s += V.g(4, V.box(40, 236, 210, 34, { cls: "v-box", r: 17 }) + V.icon("lock", 50, 241, 22, "acc") + V.t(80, 258, "Mật khẩu, mã truy cập: ở lại", "xs", "start"));
    s += V.g(5, V.box(480, 180, 200, 70, { cls: "v-box" }) + V.t(580, 205, "Khách hàng: KH-0012", "sm") + V.t(580, 228, "tên, SĐT, CCCD đã thay bằng mã", "xs mut"));
    return V.svg(720, 300, s);
  });

  C.register({
    id: "L05",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 05 · Dữ liệu và quyền riêng tư",
        lines: ["Claude đọc file nào,", "file đó ==rời khỏi máy bạn==."],
        sub: "Được gửi đi xử lý, rồi kết quả quay về. Biết vậy là đủ để dùng an toàn.",
        after: [
          "Claude không chạy trên máy tính của bạn. Mỗi khi Claude đọc một file, nội dung file đó được gửi tới máy chủ của Anthropic để xử lý, rồi câu trả lời mới quay về. File nào Claude không mở thì vẫn nằm yên trên máy.",
          "Với ngành bảo hiểm, điều này đặc biệt quan trọng: hồ sơ khách hàng có ==họ tên, số điện thoại, CCCD, biển số xe, thông tin sức khoẻ==. Bài này không thay thế quy định bảo mật dữ liệu của công ty; nó chỉ là vài thói quen thực tế để bạn dùng Claude với file công việc mà không lộ thứ không nên lộ."
        ]
      },
      {
        layout: "visual", eyebrow: "Cái gì đi, cái gì ở lại", title: "Đường đi của dữ liệu",
        visual: "duong-di-du-lieu",
        captions: [
          "Bên trái là ==máy của bạn==, bên phải là ==Anthropic==, nơi Claude xử lý.",
          "Chỉ ==những file Claude mở== mới được gửi đi. File khác vẫn ở yên trên máy.",
          "Tài khoản cá nhân (Pro, Max): ==tự quyết định== có cho dùng dữ liệu để huấn luyện model hay không.",
          "==Mật khẩu, mã truy cập== không bao giờ nên nằm ở chỗ Claude đọc được.",
          "Dữ liệu khách hàng: ==thay bằng mã trước==, rồi mới đưa cho Claude phân tích."
        ]
      },
      {
        layout: "table", eyebrow: "Tài khoản cá nhân Pro/Max", title: "Công tắc huấn luyện và thời gian lưu dữ liệu",
        text: ["Với các gói cá nhân (Free, Pro, Max, Ultra), Anthropic để ==bạn tự chọn== có cho dùng cuộc trò chuyện và phiên Claude Code để cải thiện model hay không. Bảng giá ghi rõ chế độ này là \"Opt-out\": muốn không tham gia, bạn phải tự tắt."],
        head: ["Tình huống", "Điều xảy ra"],
        widths: ["38%", "62%"],
        rows: [
          ["Công tắc **Help improve our AI models** đang bật", "Cuộc trò chuyện và phiên Claude Code mới (hoặc mở lại) có thể được dùng để huấn luyện; dữ liệu lưu tới ==5 năm== (đã tách khỏi danh tính)."],
          ["Công tắc đang tắt", "Không dùng để huấn luyện; giữ thời hạn lưu ==30 ngày== như trước."],
          ["Chat ẩn danh (Incognito)", "Không bao giờ dùng để huấn luyện, kể cả khi công tắc đang bật; không đưa vào bộ nhớ."],
          ["Xoá một cuộc trò chuyện", "Biến mất khỏi lịch sử ngay, xoá khỏi hệ thống trong vòng 30 ngày, không dùng cho các lần huấn luyện sau."],
          ["Bấm 👍 / 👎 góp ý", "Toàn bộ cuộc trò chuyện đó được lưu kèm góp ý tới 5 năm (đã tách khỏi danh tính)."]
        ],
        note: "Đường dẫn: **Settings > Privacy**, mục về cải thiện model (đường tắt: claude.ai/settings/data-privacy-controls). Tên công tắc có thể hơi khác giữa các phiên bản ứng dụng. Gói Team và Enterprise mặc định ==không== dùng dữ liệu để huấn luyện.",
        sources: [
          { label: "Anthropic · Updates to our consumer terms", url: "https://www.anthropic.com/news/updates-to-our-consumer-terms" },
          { label: "Privacy Center · Change model improvement settings", url: "https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings" },
          { label: "Privacy Center · How long do you store my data?", url: "https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data" },
          { label: "Privacy Center · Is my data used for model training?", url: "https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training" }
        ]
      },
      {
        layout: "list", eyebrow: "Hình thành thói quen", title: "Sáu thói quen an toàn",
        items: [
          { k: "01", text: "Nhớ rằng: ==Claude đọc file nào, file đó được gửi ra khỏi tổ chức== để xử lý." },
          { k: "02", text: "Tài khoản Pro/Max: ==kiểm tra công tắc Cho phép sử dụng dữ liệu để huấn luyện== trước khi dùng với file công việc. Tắt nó không làm Claude kém đi." },
          { k: "03", text: "==Mật khẩu, mã truy cập (API key)== để trong file riêng (ví dụ `.env`) và dặn Claude không đọc. Và bạn cũng không bao giờ dán vào khung chat." },
          { k: "04", text: "Chỉ mở ==đúng thư mục== việc cần, không mở cả Desktop hay cả ổ đĩa." },
          { k: "05", text: "==Ẩn danh dữ liệu khách hàng trước khi đưa cho Claude==: thay họ tên, số điện thoại, email, CCCD, biển số xe bằng mã (masking data, ví dụ KH-0012). Việc ẩn danh phải làm ==ngoài Claude== (trong Excel, hoặc bằng script chạy trên máy bạn), vì để Claude mở file gốc rồi mới ẩn danh thì dữ liệu thật đã bị gửi đi. Dữ liệu sức khoẻ càng phải cẩn thận." },
          { k: "06", text: "Chỉ cài connector và MCP từ ==nguồn đáng tin==, và tuân theo quy định công nghệ thông tin của công ty. [[L14]] nói kỹ hơn." }
        ],
        after: ["**API key** là một loại mật khẩu cho phép phần mềm dùng một dịch vụ bằng tài khoản của bạn (thường có tính phí). Ai có key là dùng được, nên phải giữ như giữ mật khẩu."]
      },
      {
        layout: "steps", eyebrow: "Cách A · Không cần AI", title: "Ẩn danh ngay trong Excel",
        steps: [
          "Mở file gốc bằng Excel, ==lưu thành bản sao== `[tên-file]-an-danh.xlsx` rồi chỉ làm trên bản sao.",
          "Xoá các cột số điện thoại, email, CCCD. Với biển số xe, giữ 3 số cuối bằng công thức `=RIGHT(ô, 3)` rồi dán thành giá trị.",
          "Thay họ tên bằng mã: thêm cột mã `KH-0001`, `KH-0002`… rồi xoá cột họ tên.",
          "Lưu bảng đối chiếu mã và tên ở một file riêng, ==không để trong thư mục làm việc với Claude==.",
          "Từ đây, chỉ cho Claude mở bản ẩn danh."
        ],
        note: "Cách này chậm hơn với file lớn, nhưng không có dữ liệu thật nào đi qua AI."
      },
      {
        layout: "prompt", eyebrow: "Cách B · Nhờ Claude viết công cụ", label: "Viết script ẩn danh, bạn tự chạy",
        text: ["Với file lớn hoặc việc lặp lại hằng tháng: ==chỉ đưa cho Claude tên cột và vài dòng giả==, nhờ viết script. Bạn tự chạy script trên máy, Claude không nhìn thấy dữ liệu thật."],
        prompt: "Mình cần một script Python ẩn danh file Excel khách hàng. KHÔNG mở hay đọc bất kỳ file dữ liệu thật nào trong thư mục; chỉ dựa vào mô tả sau.\nCác cột: Họ tên, Số điện thoại, Email, CCCD, Biển số xe, Sản phẩm, Phí bảo hiểm, Ngày hiệu lực.\nYêu cầu: thay Họ tên bằng mã KH-0001, KH-0002…; xoá cột Số điện thoại, Email, CCCD; Biển số xe chỉ giữ 3 số cuối; giữ nguyên các cột còn lại. Ghi kết quả ra file `[tên-file]-an-danh.xlsx`, ghi bảng đối chiếu mã và tên ra file riêng. Cho mình lệnh để tự chạy, và không chạy script trên dữ liệu thật hộ mình.",
        note: "Cả hai cách giảm rủi ro nhưng không thay cho quy định của công ty. Với dữ liệu khách hàng thật, hỏi bộ phận phụ trách bảo mật dữ liệu trước khi đưa cho bất kỳ công cụ AI nào.", noteTone: "warn"
      },
      {
        layout: "tips", eyebrow: "Bài tập", title: "Thử ngay",
        try: "Mở **Settings > Privacy** trong ứng dụng Claude, xem công tắc cải thiện model đang bật hay tắt, và chọn theo quy định của công ty.",
        ask: "\"Mình có một file khách hàng với các cột: Họ tên, SĐT, Email, CCCD, Biển số xe, Sản phẩm, Phí. Cột nào không nên gửi ra ngoài công ty, và nên ẩn danh thế nào?\" (chỉ nêu tên cột, đừng đính kèm file thật)"
      }
    ]
  });
})();
