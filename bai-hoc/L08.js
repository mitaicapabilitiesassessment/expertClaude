/* Bài 08 · Việc 1: Excel doanh thu thành báo cáo, rồi thành skill */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("tu-file-tho-toi-lenh", function () {
    var s = "";
    s += V.g(1, [0, 1, 2].map(function (i) { return V.box(30 + i * 14, 40 + i * 14, 120, 150, { cls: "v-box2", r: 8 }); }).join("") +
      V.icon("table", 70, 96, 40, "acc") + V.t(118, 230, "T7 · T8 · T9", "sm m") + V.t(118, 250, "file xuất thô", "xs mut"));
    s += V.g(2, '<path d="M190 120 L246 120" class="v-flow" marker-end="url(#aha)"/>' + V.box(252, 60, 150, 120) + V.icon("user", 272, 76, 26, "acc") + V.icon("spark", 352, 76, 26, "acc") +
      V.t(327, 130, "Bạn + Claude", "sm") + V.t(327, 150, "lập kế hoạch · làm", "xs mut") + V.t(327, 166, "· kiểm tra", "xs mut"));
    s += V.g(3, '<path d="M402 120 L456 120" class="v-flow" marker-end="url(#aha)"/>' + '<rect x="462" y="74" width="74" height="96" rx="8" fill="#f0e8d5"/><rect x="462" y="74" width="74" height="20" rx="8" fill="#d97757"/>' +
      V.t(499, 136, "SKILL", "xs m dk") + V.t(499, 194, "bao-cao-doanh-thu", "xs m acc"), "pop");
    s += V.g(4, V.box(250, 232, 300, 40, { cls: "v-box", r: 20 }) + V.t(400, 257, "/bao-cao-doanh-thu …thang-10.xlsx", "xs m"));
    s += V.g(5, '<path d="M550 252 L600 252 L600 200" class="v-flow" marker-end="url(#aha)"/>' + V.box(570, 60, 130, 130) + V.icon("slides", 612, 80, 46, "acc") + V.t(635, 160, "Báo cáo", "sm") + V.t(635, 178, "cùng mẫu, đã đối chiếu", "xs mut"));
    return V.svg(720, 290, s);
  });

  C.register({
    id: "L08",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 08 · Việc 1",
        lines: ["Ba file Excel thô", "thành ==báo cáo quý 3==,", "rồi lưu thành một skill."],
        sub: "Lần đầu bạn làm cùng Claude. Từ tháng sau, chỉ cần xử lý bằng một dòng lệnh.",
        after: [
          "Đây là việc lớn đầu tiên của khoá, dùng mọi thứ từ Bài 04 tới 07: file trong thư mục, chế độ quyền, lời giao việc tốt, và skill. Kết quả là một bộ slide có link riêng (artifact, [[L09]]).",
          "Dữ liệu là doanh thu phí bảo hiểm của một công ty phân phối bảo hiểm qua App I (tên công ty và số liệu đều là ==giả lập==), nằm trong thư mục `01-ban-hang`."
        ]
      },
      {
        layout: "visual", eyebrow: "Việc 1 đi qua những bước nào", title: "Từ file thô tới một dòng lệnh",
        visual: "tu-file-tho-toi-lenh",
        captions: [
          "Bắt đầu từ ==ba file xuất thô== tháng 7, 8, 9 của hệ thống bán hàng.",
          "Lần đầu, ==bạn và Claude== cùng lập kế hoạch, làm, và kiểm tra.",
          "Biến cả quy trình thành skill `bao-cao-doanh-thu` rồi ==cất lên kệ==.",
          "Tháng 10, chỉ cần ==một dòng lệnh==.",
          "Ra ==báo cáo cùng mẫu==, đã tự đối chiếu số liệu."
        ]
      },
      {
        layout: "list", eyebrow: "Trước khi bắt đầu", title: "File thô trông thế nào",
        text: ["Các file được cố ý làm lộn xộn, giống file xuất từ hệ thống ngoài đời. Báo cáo làm vội sẽ dính những lỗi này, nên bước kiểm tra phía sau rất quan trọng."],
        items: [
          { k: "01", text: "Mỗi file ==520 tới 640 dòng==, mỗi dòng là một đơn bảo hiểm: ngày, mã đơn, sản phẩm, kênh, khu vực, team, phí, hoa hồng, trạng thái." },
          { k: "02", text: "Tháng 9 và 10 có ==dòng tiêu đề ở dòng 4== (bên trên là tên báo cáo). Tháng 8 ==đặt tên cột khác== (\"Số HĐ\", \"Phí bảo hiểm\", \"TT\") và ghi trạng thái là OK / Huỷ / Chờ." },
          { k: "03", text: "Tên sản phẩm ==viết không thống nhất== (\"TNDS xe máy\", \"tnds xe may\", \"BH TNDS xe máy\") và có ==khoảng trắng thừa==; vài ô phí ==lưu dạng chữ== (\"1.250.000đ\"); có dòng trống." },
          { k: "04", text: "Mỗi file có ==một đơn bị lặp== và ==một đơn thiếu khu vực==." },
          { k: "!", text: "Dòng ==Tổng cộng== gõ tay ở cuối file bị ==sai==: cộng cả đơn huỷ, đơn chờ thanh toán và đơn lặp." }
        ]
      },
      {
        layout: "prompt", anchor: "cac-buoc", screen: "code", eyebrow: "Bước 1 · Ở chế độ Plan", title: "Giao việc và duyệt kế hoạch",
        text: ["Chọn chế độ ==Plan== trước khi dán. Sau đó đọc kỹ kế hoạch: Claude có định bỏ dòng Tổng cộng không, có nhắc tới đơn lặp và đơn huỷ không. Kế hoạch đúng thì duyệt."],
        label: "Dán vào thẻ Code (chế độ Plan)",
        prompt: "Bối cảnh: mình là trưởng phòng kinh doanh, cần báo cáo quý 3 cho buổi giao ban với Ban giám đốc.\nMục tiêu: từ 3 file trong `01-ban-hang` (tháng 7, 8, 9), làm bộ slide báo cáo gồm: tổng phí bảo hiểm theo tháng; theo sản phẩm; theo kênh bán và theo team; 3 nhận xét chính và 3 việc nên làm.\nRàng buộc: chỉ tính đơn đã thanh toán. File có thể lộn xộn: tự tìm dòng tiêu đề, gộp các tên sản phẩm viết khác nhau, bỏ dòng tổng gõ tay, bỏ đơn trùng mã. Tính bằng một script và lưu số liệu sạch ra `bao-cao-quy-3.csv`.\nThế nào là xong: tổng của từng tháng đối chiếu được với file gốc; bộ slide đưa lên thành artifact (chưa chia sẻ).\nTrước khi làm, trình kế hoạch để mình duyệt."
      },
      {
        layout: "output", eyebrow: "Kế hoạch mẫu", bar: "Kế hoạch Claude đưa ra",
        lines: [
          "1. Đọc 3 file, tự tìm dòng tiêu đề (tháng 9 ở dòng 4; tháng 8 tên cột khác).",
          "2. Chuẩn hoá: gộp tên sản phẩm, quy đổi OK/Huỷ/Chờ, chuyển phí dạng chữ sang số, cắt khoảng trắng.",
          "3. Loại dòng Tổng cộng, đơn trùng mã, đơn huỷ và chờ thanh toán.",
          "4. Tính bằng script, lưu `bao-cao-quy-3.csv`.",
          "5. Làm slide: Tổng quan · Theo tháng · Sản phẩm · Kênh và team · Nhận xét và việc cần làm.",
          "6. Đối chiếu với file gốc, rồi đưa bộ slide lên thành artifact."
        ]
      },
      {
        layout: "steps", screen: "code", eyebrow: "Bước 2 · Lúc kẹt", title: "Claude xin cài công cụ đọc Excel",
        steps: [
          "Claude báo cần ==Python== và một thư viện để đọc file Excel, rồi xin phép cài.",
          "Nếu bạn thắc mắc Python là gì. Hỏi: ==\"Python là gì? Cài nó có ảnh hưởng gì tới máy mình không?\"==",
          "Claude giải thích: Python là ngôn ngữ để chạy các script nhỏ, cài như một ứng dụng bình thường.",
          "Hiểu rồi thì ==cho phép==, Claude cài và làm tiếp."
        ],
        after: ["Gần như chắc chắn bạn sẽ gặp tình huống này. Đây chính là vòng \"làm, kẹt, hỏi, hiểu\" ở [[L03]]."],
        note: "Máy công ty không cho cài phần mềm? Mở file bằng Excel, **Lưu thành CSV**, rồi nhờ Claude làm từ file CSV. Hoặc làm Việc 1 trong thẻ **Chat** (chạy trên máy chủ của Anthropic) bằng cách đính kèm 3 file."
      },
      {
        layout: "cards", eyebrow: "Kết quả đúng", title: "Báo cáo quý 3: số liệu chuẩn để đối chiếu",
        dark: true,
        cards: [
          { tag: "Tổng quan quý 3", big: "2.329.739.000đ", text: "1.541 đơn đã thanh toán · trung bình 1.511.836đ mỗi đơn" },
          { tag: "Theo tháng", title: "Tháng nào cũng tăng", text: "T7: 610.601.000đ · T8: 765.359.000đ · T9: 953.779.000đ (vượt mục tiêu 900 triệu)" },
          { tag: "Top sản phẩm", title: "Vật chất ô tô", text: "1.113.818.000đ (48%) · Sức khoẻ cá nhân 772.172.000đ · TNDS ô tô 149.128.000đ" },
          { tag: "Kênh và team", title: "App · Team Hà Nội", text: "App 1.099.929.000đ · Team Hà Nội 871.945.000đ" }
        ],
        after: ["Đây là số đúng của thư mục thực hành. Nếu báo cáo của bạn ra số khác, ==đừng sửa tay==: hỏi Claude vì sao, như ở bước tiếp theo."]
      },
      {
        layout: "prompt", screen: "code", eyebrow: "Bước 3 · Nghiệm thu", title: "Đừng tin con số chưa kiểm tra",
        label: "Dán sau khi có bộ slide",
        prompt: "Trước khi mình dùng báo cáo này: lập bảng đối chiếu cho từng file gồm số dòng gốc, số dòng bị loại (đơn huỷ, đơn chờ thanh toán, đơn trùng, dòng tổng), số đơn còn lại và tổng phí. So với dòng \"Tổng cộng\" trong file gốc thì lệch bao nhiêu, vì sao? Liệt kê mã các đơn bị trùng và các đơn thiếu khu vực.",
        after: ["Lời nhắc này bắt Claude ==chỉ ra cách nó kiểm tra==, cũng như những dòng đã bỏ hoặc sửa."]
      },
      {
        layout: "table", eyebrow: "Kết quả nghiệm thu mẫu", title: "Claude phát hiện dòng Tổng cộng bị sai",
        head: ["File", "Đơn đã thanh toán", "Tổng phí đúng", "File gốc ghi", "Đơn bị lặp"],
        rows: [
          ["Tháng 7", "466", "610.601.000đ", "710.115.000đ", "BN070343"],
          ["Tháng 8", "495", "765.359.000đ", "873.545.000đ", "BN080094"],
          ["Tháng 9", "580", "953.779.000đ", "1.045.464.000đ", "BN090047"]
        ],
        after: ["Dòng Tổng cộng trong cả 3 file đều sai vì đã cộng cả đơn huỷ, đơn chờ thanh toán và đơn lặp. Đơn thiếu khu vực (BN070150, BN080075, BN090610) ==vẫn tính vào tổng==, chỉ ghi chú lại."]
      },
      {
        layout: "prompt", screen: "code", eyebrow: "Bước 4 · Tạo skill", title: "Lưu cả quy trình lên kệ",
        label: "Dán khi đã hài lòng với báo cáo",
        prompt: "Lưu toàn bộ quy trình vừa làm thành một skill tên `bao-cao-doanh-thu` trong thư mục `.claude/skills` của dự án này. Skill gồm: các bước làm sạch dữ liệu (tìm dòng tiêu đề, gộp tên sản phẩm, quy đổi trạng thái, bỏ dòng tổng gõ tay, bỏ đơn trùng, chuyển phí dạng chữ sang số); một script tính toán để lần nào cũng tính giống nhau; mẫu bộ slide như vừa làm; và bước tự đối chiếu với file gốc ở cuối. Đầu vào là một hoặc nhiều file Excel.",
        after: ["Script là phần quan trọng nhất: phần tính toán nằm trong một file chương trình nhỏ, nên tháng nào cũng tính theo cùng một cách thay vì để Claude tự tính lại mỗi lần."]
      },
      {
        layout: "output", eyebrow: "Skill mẫu", bar: ".claude/skills/bao-cao-doanh-thu/SKILL.md",
        lines: [
          "# ---",
          "# name: bao-cao-doanh-thu",
          "# description: Làm báo cáo doanh thu phí bảo hiểm từ file Excel xuất từ hệ thống bán hàng",
          "# ---",
          "1. Tìm dòng tiêu đề (ô chứa \"Ngày\" hoặc \"Ngày cấp\").",
          "2. Làm sạch theo các quy tắc bên dưới.",
          "3. Chạy `scripts/bao_cao.py` để tính, rồi làm bộ slide theo `mau-slide.md`.",
          "4. Đối chiếu tổng với file gốc, báo các dòng đã loại."
        ]
      },
      {
        layout: "commands", screen: "code", eyebrow: "Bước 5 · Tháng sau", title: "Mở phiên mới, gõ một dòng lệnh",
        text: ["Gõ `/clear` để mở phiên mới (cho chắc Claude không dựa vào cuộc trò chuyện cũ), rồi gõ dòng lệnh này."],
        commands: ["C15"]
      },
      {
        layout: "cards", eyebrow: "Kết quả", title: "Báo cáo tháng 10, từ một dòng lệnh",
        dark: true,
        cards: [
          { tag: "Tổng quan tháng 10", big: "1.171.915.000đ", text: "533 đơn · tăng 22,9% so với tháng 9" },
          { tag: "Dẫn đầu", title: "Vật chất ô tô", text: "764.913.000đ (65%), tiếp tục tăng sau khi mở bán trên App" },
          { tag: "Đáng chú ý", title: "Kênh Website", text: "246.134.000đ, gấp hơn 2,5 lần tháng 9" }
        ],
        after: ["File tháng 10 cũng có dòng Tổng cộng sai (ghi 1.341.710.000đ) và một đơn lặp (BN100226). Skill tự phát hiện và báo lại, đúng như lần đầu."]
      },
      {
        layout: "tips", eyebrow: "Bài tập", title: "Thử ngay",
        try: "Chạy skill với `doanh-thu-thang-10.xlsx`. Sau buổi học, thử với một file xuất từ hệ thống của chính team bạn (đã ẩn danh theo [[L05]]).",
        ask: "\"Script bạn vừa viết làm những bước nào? Nếu tháng sau hệ thống đổi tên cột thì skill có còn chạy đúng không?\""
      }
    ]
  });
})();
