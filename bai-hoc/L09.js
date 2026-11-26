/* Bài 09 · Artifacts: kết quả có đường link riêng */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("ket-qua-thanh-link", function () {
    var s = "";
    s += V.g(1, V.box(30, 70, 170, 150, { cls: "v-box2" }) + V.icon("laptop", 92, 92, 46, "acc") + V.t(115, 170, "Kết quả trên", "sm") + V.t(115, 190, "máy bạn / trong chat", "xs mut"));
    s += V.g(2, '<path d="M200 145 L270 145" class="v-flow" marker-end="url(#aha)"/>' + V.box(276, 50, 200, 190, { cls: "v-box" }) + V.t(376, 76, "claude.ai/…/artifact", "xs m acc") +
      '<rect x="294" y="92" width="164" height="94" rx="6" fill="#f0e8d5"/><rect x="306" y="104" width="90" height="10" rx="3" fill="#d97757"/><rect x="306" y="124" width="140" height="7" rx="3" fill="#9eabbc"/><rect x="306" y="138" width="120" height="7" rx="3" fill="#9eabbc"/><rect x="306" y="152" width="70" height="24" rx="3" fill="#0e2139"/>' +
      V.t(376, 216, "một trang có link riêng", "xs mut"));
    s += V.g(3, '<circle cx="476" cy="62" r="18" fill="#0e2139" stroke="#d97757" stroke-width="2"/>' + V.icon("lock", 466, 52, 20, "acc") + V.t(500, 40, "chỉ bạn xem", "xs acc", "start"), "pop");
    s += V.g(4, '<path d="M476 145 L540 110 M476 145 L540 145 M476 145 L540 180" class="v-line"/>' + V.icon("user", 548, 96, 26) + V.icon("user", 548, 132, 26) + V.icon("user", 548, 168, 26) +
      V.t(584, 114, "sếp", "xs", "start") + V.t(584, 150, "đồng nghiệp", "xs", "start") + V.t(584, 186, "đối tác", "xs", "start"));
    s += V.g(5, V.box(300, 256, 380, 38, { cls: "v-box2", r: 19 }) + V.icon("file", 314, 264, 22, "acc") + V.t(500, 280, "Tải về: PowerPoint · PDF · Word", "sm"));
    return V.svg(720, 300, s);
  });

  C.register({
    id: "L09",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 09 · Artifacts",
        lines: ["File nằm trên máy bạn,", "còn ==artifact== có đường link."],
        sub: "Gửi một đường link thay vì một file đính kèm.",
        after: ["Ở Việc 1, Claude đã đưa báo cáo quý 3 lên thành một bộ slide có link riêng: đó là một ==artifact==. Có những kết quả bạn làm ra để người khác xem: báo cáo cho sếp, kế hoạch cho cả team, slide cho buổi họp. Với chúng, artifact là một trang trên claude.ai, mở bằng link là xem được ngay, trên máy tính hay điện thoại."]
      },
      {
        layout: "visual", eyebrow: "Artifact hoạt động thế nào", title: "Từ kết quả tới một đường link",
        visual: "ket-qua-thanh-link",
        captions: [
          "Claude làm xong kết quả ==trên máy bạn== (Code) hoặc ==trong cuộc trò chuyện== (Chat).",
          "Rồi đưa lên thành ==một trang trên claude.ai==, có đường link riêng.",
          "Mặc định ==chỉ bạn xem được== cho tới khi bạn chia sẻ.",
          "Bạn chọn ==người được xem==: sếp, đồng nghiệp, đối tác.",
          "Cần file thì ==tải về==: slide ra PowerPoint, PDF; tài liệu ra Word, PDF."
        ]
      },
      {
        layout: "table", eyebrow: "Các loại artifact", title: "Sáu mẫu, mỗi mẫu một việc",
        head: ["Loại", "Giống như", "Hợp để làm", "Gói"],
        widths: ["17%", "17%", "50%", "16%"],
        rows: [
          ["==Docs==", "Word, Google Docs", "Biên bản, quy trình, đề xuất: viết và sửa cùng Claude, cùng đồng nghiệp.", "Mọi gói"],
          ["==Slides==", "PowerPoint", "Báo cáo giao ban, buổi đào tạo. Sửa trực tiếp từng slide và trình chiếu ngay trong Claude.", "Mọi gói"],
          ["==Design==", "Figma, Canva", "Bản mẫu màn hình, trang đích, tờ rơi một trang, theo màu và font của công ty.", "Mọi gói"],
          ["==Data==", "Dashboard", "Báo cáo dựng từ số liệu hoặc ứng dụng đã kết nối. Mỗi biểu đồ cho xem câu truy vấn và lần cập nhật gần nhất.", "Từ Pro"],
          ["==Sheets== (beta)", "Excel", "Bảng tính có công thức nối giữa các tab; bạn và Claude sửa chung các ô.", "Từ Pro"],
          ["==Whiteboards== (beta)", "Miro, FigJam", "Bảng chung để nghĩ ý tưởng cùng Claude và team trước khi chốt thành tài liệu.", "Từ Pro"]
        ],
        note: "Có thêm **Motion** (beta): làm video giải thích rồi xuất MP4, nhưng chỉ có ở gói Team và Enterprise nên khoá học này không đề cập tới. Ngoài sáu mẫu, Claude còn dựng được trang web hay công cụ nhỏ tương tác khi bạn mô tả.",
        sources: [
          { label: "What are artifacts and how do I use them?", url: "https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them" },
          { label: "Claude apps · Release notes", url: "https://support.claude.com/en/articles/12138966-release-notes" }
        ]
      },
      {
        layout: "list", eyebrow: "Làm tiếp cùng Claude", title: "Sửa, xuất, kết nối, lưu dữ liệu",
        items: [
          { k: "01", text: "==Sửa bằng lời hoặc sửa trực tiếp.== Gõ vào tài liệu, sửa từng slide, kéo các thành phần trên thiết kế. Với tài liệu, bôi đen đoạn cần đổi, chọn **Edit with Claude** rồi gõ yêu cầu: Claude chỉ sửa đúng chỗ bạn đánh dấu." },
          { k: "02", text: "==Design system:== màu, font chữ và logo của công ty lưu một lần, các thiết kế và slide sau lấy đúng phong cách đó." },
          { k: "03", text: "==Xuất ra file.== Docs ra Word, PDF, Markdown hoặc Google Docs. Slides ra PowerPoint, PDF hoặc Google Slides. Design ra .zip, PDF, PowerPoint hoặc HTML độc lập." },
          { k: "04", text: "==Kết nối ứng dụng== (từ gói Pro): artifact đọc và ghi được vào các ứng dụng bạn đã kết nối như Google Calendar, Slack. Lần đầu Claude cho xem sẽ dùng công cụ nào và hỏi bạn đồng ý." },
          { k: "05", text: "==Lưu dữ liệu giữa các lần mở== (từ gói Pro): dạng riêng từng người hoặc chung cho mọi người. Trước khi nhập thông tin nhạy cảm, hỏi xem artifact đang lưu ==chung== hay ==riêng==." },
          { k: "06", text: "==Trong Claude Code==: đưa kết quả của phiên làm việc lên một trang có link riêng, và cập nhật tại chỗ khi phiên tiếp tục. Gõ `/design` để làm thiết kế." }
        ],
        after: ["Từ 24/11/2026, Anthropic còn thử nghiệm (beta) cho phép ==cài một artifact thành ứng dụng== trên máy Mac hoặc Windows. Artifact tạo trong chat trước 16/9/2026 là bản cũ: vẫn mở và chia sẻ được, nhưng không tạo thêm được."],
        sources: [
          { label: "What are artifacts and how do I use them?", url: "https://support.claude.com/en/articles/17153992-what-are-artifacts-and-how-do-i-use-them" }
        ]
      },
      {
        layout: "compare", eyebrow: "Nên chọn cái nào", title: "File hay artifact?",
        cols: [
          { who: "File trên máy", title: "Để làm tiếp", items: ["Mở và sửa trong Excel, Word, PowerPoint", "Gửi qua email, Zalo nội bộ", "Nằm trên máy bạn"] },
          { who: "Artifact", title: "Để người khác xem", items: ["Một đường link, mở trên mọi thiết bị", "Riêng tư cho tới khi bạn chia sẻ", "Tải về file khi cần"] }
        ],
        thumb: "Cần sửa tiếp thì giữ ==file==. Làm ra để người khác xem thì dùng ==artifact==."
      },
      {
        layout: "statement", eyebrow: "Riêng tư",
        lines: ["Chỉ bạn xem được,", "cho tới khi ==bạn chia sẻ==."],
        sub: "Nhưng nội dung vẫn được lưu trên claude.ai.",
        after: ["Artifact mặc định riêng tư: không ai mở được link cho tới khi bạn chia sẻ. Tuy vậy nội dung vẫn nằm trên claude.ai, nên những gì đã quyết không đưa cho Claude ở [[L05]] (mật khẩu, dữ liệu khách hàng chưa ẩn danh) thì ==cũng đừng đưa vào artifact==. Trước khi chia sẻ ra ngoài công ty, đọc lại một lượt. Với artifact có lưu dữ liệu, kiểm tra nó dùng lưu trữ riêng hay chung trước khi nhập gì nhạy cảm."]
      },
      {
        layout: "prompt", anchor: "vi-du", screen: "both", eyebrow: "Ví dụ thật · Biên bản thành bộ slide", title: "Một bộ slide cho buổi giao ban",
        label: "Dán vào Chat hoặc Code",
        prompt: "Dựa trên 3 biên bản họp trong `tai-lieu`, làm một bộ slide 5 trang cho buổi giao ban thứ Hai: 1) các quyết định đã chốt trong tháng 9; 2) tiến độ ra mắt vật chất ô tô trên App; 3) vấn đề phản hồi bồi thường và cam kết 24 giờ; 4) bảng việc cần làm (ai, hạn chót); 5) những việc còn chờ quyết. Đưa lên thành artifact dạng Slides, chưa chia sẻ.",
        after: ["Kết quả là một đường link tới bộ slide, chỉ mình bạn xem được. Mở thử trên điện thoại, rồi tải về PowerPoint để so sánh."]
      },
      {
        layout: "prompt", screen: "both", eyebrow: "Ví dụ 2 · Whiteboards (beta, từ gói Pro)", title: "Viết hết ý kiến lên một tấm bảng",
        label: "Dán vào Chat hoặc Code",
        text: ["Trước khi viết tài liệu, hãy bày hết ý ra bảng để nhìn tổng thể và sắp xếp lại."],
        prompt: "Đọc 3 biên bản họp trong `tai-lieu` và bày lên một bảng trắng gồm 4 khu: 1) quyết định đã chốt; 2) việc cần làm (ai, hạn chót); 3) vấn đề còn bỏ ngỏ; 4) ý kiến của khách hàng và đại lý. Mỗi thẻ một ý, chữ to, ít chữ, giữa các khu để khoảng trống. Chỉ dùng thông tin có trong biên bản; chỗ nào thiếu thì ghi [cần bổ sung].",
        after: ["Kéo thẻ bằng tay để sắp lại, hoặc chọn một khu rồi hỏi riêng: \"Ở khu này, việc nào gấp nhất?\". Mẫu này còn ở dạng beta nên bố cục đôi khi còn hơi hỏi chấm."]
      },
      {
        layout: "prompt", screen: "both", eyebrow: "Ví dụ 3 · Data (từ gói Pro)", title: "Báo cáo số liệu mà mỗi con số đều kiểm tra được",
        label: "Dán vào Chat hoặc Code",
        text: ["Dùng lại số liệu ở Việc 1, nhưng lần này kết quả là một báo cáo có biểu đồ."],
        prompt: "Đọc file `01-ban-hang/doanh-thu-thang-09.xlsx`. Chỉ tính đơn đã thanh toán, bỏ đơn trùng mã và dòng tổng gõ tay. Làm một báo cáo dữ liệu (Data) cho buổi giao ban: thẻ số lớn cho tổng phí và số đơn; biểu đồ cột phí theo sản phẩm; bảng xếp hạng các team; biểu đồ phí theo kênh. Với mỗi con số, cho mình xem được cách tính, và liệt kê những dòng đã loại. Chưa chia sẻ.",
        after: ["Đối chiếu tổng phí với con số bạn tính ở Việc 1: hai bên phải khớp. Nếu lệch, mở câu truy vấn kèm theo biểu đồ và hỏi Claude đã tính từ những dòng nào."]
      },
      {
        layout: "tips", eyebrow: "Trước khi sang phần sau", title: "Làm ngay hôm nay",
        try: "Mở bộ slide báo cáo quý 3 ở Việc 1 trên điện thoại. Sau đó vào mục **Artifacts** ở thanh bên để xem lại mọi artifact bạn đã tạo.",
        ask: "\"Với 5 việc mình làm nhiều nhất, việc nào hợp với Docs, Slides, Design, Data, Sheets hay Whiteboards? Khi nào mình nên chia sẻ link, khi nào nên gửi file?\""
      }
    ]
  });
})();
