/* Bài 01 · Tư duy: ba kỹ năng của người "giỏi AI" */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("hieu-ai-tuong-doi", function () {
    var s = "";
    // nhóm người xung quanh
    var ppl = [[120, 210], [190, 230], [260, 214], [330, 232], [400, 212], [470, 228], [540, 210], [610, 226]];
    s += V.g(1, ppl.map(function (p) { return V.icon("user", p[0] - 16, p[1] - 16, 32); }).join("") + V.t(360, 282, "Đồng nghiệp · sếp · khách hàng", "sm mut"));
    s += V.g(2, '<path d="M60 70 L660 70" class="v-dash"/>' + V.t(664, 66, "chuyên gia AI thế giới", "xs mut", "end") + V.icon("spark", 340, 34, 26, "acc"), "fade");
    s += V.g(3, '<path d="M330 196 L330 150" class="v-acc-s" marker-end="url(#aha)"/>' + '<circle cx="330" cy="128" r="22" fill="url(#gz)"/>' + V.icon("user", 318, 116, 24, "dk") + V.t(330, 92, "Bạn: hiểu hơn người xung quanh một bậc", "sm acc"), "pop");
    s += V.g(4, V.box(470, 104, 200, 62, { cls: "v-box2" }) + V.t(570, 128, "3 giờ  →  20 phút", "lg acc") + V.t(570, 150, "mọi người tìm tới bạn", "xs mut"));
    s += V.g(5, V.box(60, 104, 200, 62, { cls: "v-box2" }) + V.icon("table", 74, 120, 26, "acc") + V.t(112, 128, "Như Excel ngày trước", "sm", "start") + V.t(112, 148, "nhanh hơn thành chuẩn mới", "xs mut", "start"));
    return V.svg(720, 300, s);
  });

  C.register({
    id: "L01",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 01 · Tư duy",
        lines: ["Làm ra một thứ bằng AI", "đang ngày càng ==rẻ==."],
        sub: "Người biết nên làm gì với AI thì vẫn hiếm.",
        after: ["Một bản nháp email, một bảng tổng hợp, một bộ slide: AI làm trong vài phút. Khi ai cũng làm ra được những thứ đó, giá trị dịch chuyển sang người ==biết nên làm gì, chọn bản nào, và sửa chỗ nào==. Với teamlead, đó cũng chính là việc bạn vẫn làm với team của mình."]
      },
      {
        layout: "cards", eyebrow: "Ba kỹ năng", title: "Ba kỹ năng của người \"giỏi AI\"",
        text: ["Ba kỹ năng này bền hơn việc thuộc lòng một công cụ, vì công cụ đổi hằng tháng."],
        cards: [
          { tag: "Kỹ năng 1", title: "Hiểu về AI", text: "Không cần hiểu nhất thế giới, chỉ cần hiểu hơn những người quanh bạn một bậc, và cho họ thấy việc mất 3 giờ giờ chỉ còn 20 phút." },
          { tag: "Kỹ năng 2", title: "Có gu và chuyên môn sâu", text: "AI làm ra bản nháp, bạn quyết định bản nào đủ tốt để gửi sếp, gửi đối tác, gửi khách. Muốn chọn đúng, bạn cần hiểu sâu kiến thức chuyên môn của mình, vị trí của mình, team của mình." },
          { tag: "Kỹ năng 3", title: "Thử và cải thiện nhanh", text: "Làm nhanh một bản, xem chỗ nào chưa ổn, góp ý, làm lại. Ai xử lý các vòng lặp này nhanh hơn thì có kết quả tốt sớm hơn." }
        ]
      },
      {
        layout: "visual", eyebrow: "Kỹ năng 1 · Hiểu về AI", title: "Kiến thức về AI mang ==tính tương đối==",
        visual: "hieu-ai-tuong-doi",
        captions: [
          "Nhìn vào những người quanh bạn: ==đồng nghiệp, sếp, đại lý, khách hàng==.",
          "Bạn ==không cần hiểu AI bằng chuyên gia== hàng đầu thế giới.",
          "Chỉ cần ==hiểu hơn những người quanh mình một bậc==.",
          "Cho mọi người thấy việc từng mất 3 giờ giờ còn 20 phút. Khi công ty cần người lo chuyện AI, ==họ sẽ tìm tới bạn==.",
          "Giống Excel ngày trước: ai thạo sớm thì nhanh hơn hẳn, rồi tốc độ đó ==trở thành chuẩn mới== của cả nghề."
        ],
        after: ["Bắt đầu nhỏ: chọn ==một công cụ== (ở đây là Claude) và ==một việc== bạn làm mỗi tuần, ví dụ tổng hợp doanh thu cho buổi giao ban. Ghi lại trước và sau khi dùng Claude: mất bao lâu, chỗ nào vẫn cần bạn. Có con số trước và sau, bạn có câu chuyện cụ thể để kể với sếp và với team."]
      },
      {
        layout: "outputs", eyebrow: "Kỹ năng 2 · Ví dụ 1: báo cáo", title: "Chuyên môn tạo ra khác biệt",
        text: ["Sản phẩm làm bằng AI, nhưng người gửi đi là bạn. Báo cáo tốt thì bạn được ghi nhận; báo cáo \"không bắt mắt\"/sai thông tin thì bạn cũng là người chịu trách nhiệm."],
        items: [
          { label: "Bản Claude viết lần đầu", heading: "Báo cáo doanh thu quý 3/2026", text: ["Doanh thu quý 3 ghi nhận nhiều tín hiệu tích cực. Các dòng sản phẩm nhìn chung tăng trưởng tốt, kênh App tiếp tục phát huy hiệu quả. Trong thời gian tới cần tiếp tục đẩy mạnh bán hàng và nâng cao chất lượng dịch vụ…"] },
          { label: "Bản sau khi bạn góp ý", good: true, heading: "Quý 3: 2,33 tỷ phí đã thu, tháng nào cũng tăng khoảng 25%", items: [
            "Tháng 7: 611 triệu → tháng 9: 954 triệu (vượt mục tiêu 900 triệu).",
            "Vật chất ô tô dẫn đầu: 1,11 tỷ (48%). Tháng 9 tăng 74% sau khi mở bán trên App ngày 16/9 và thưởng thêm 2% cho đại lý.",
            "TNDS xe máy: 44% số đơn nhưng chưa tới 2% doanh thu, nên dùng để kéo khách rồi bán chéo.",
            "Việc cần làm: đối soát đơn \"Chờ thanh toán\", tìm nguyên nhân huỷ đơn ở kênh Đối tác liên kết."] }
        ],
        after: ["Bản bên trái không sai, nhưng không ai dùng được: toàn câu chung chung, không một con số. Bản bên phải có số liệu, có lý giải, có việc cần làm. Nó tốt hơn ==nhờ người góp ý hiểu ngành==: biết App vừa mở bán vật chất ô tô, biết đại lý đang được thưởng, biết TNDS xe máy là sản phẩm kéo khách. Claude không tự biết những điều đó về công việc của bạn."],
        note: "Số liệu trong ví dụ lấy từ đúng các file Excel giả lập trong thư mục thực hành, bạn sẽ tự làm lại ở [[L08|Việc 1]]."
      },
      {
        layout: "outputs", eyebrow: "Kỹ năng 2 · Ví dụ 2: email cho khách", title: "Gu là biết thế nào là \"đủ tốt\"",
        items: [
          { label: "Bản Claude viết lần đầu", heading: "V/v: Hồ sơ bồi thường của Quý khách", text: ["Kính gửi Quý khách, chúng tôi chân thành cảm ơn Quý khách đã tin tưởng sử dụng dịch vụ. Hồ sơ của Quý khách đang được xử lý và chúng tôi sẽ phản hồi trong thời gian sớm nhất. Trân trọng!"] },
          { label: "Bản sau khi bạn góp ý", good: true, heading: "Hồ sơ sức khoẻ của anh còn thiếu 2 giấy tờ", items: [
            "Nói rõ đang thiếu gì: hoá đơn viện phí bản gốc, giấy ra viện.",
            "Nói rõ nộp ở đâu: mục \"Giấy tờ cần nộp\" trên App, chụp ảnh là đủ.",
            "Nói rõ khi nào có kết quả: phản hồi trong 24 giờ làm việc sau khi nhận đủ.",
            "Một số điện thoại hỗ trợ, không lời chào dài dòng."] }
        ],
        after: ["Gu không phải năng khiếu bẩm sinh. Gu đến từ việc xem nhiều thứ tốt, nói được vì sao chúng tốt, rồi đòi hỏi kết quả của mình cũng phải như vậy. Chuyên môn cũng thế: càng hiểu quy trình bồi thường, bạn càng nhanh nhận ra email nào sẽ khiến khách gọi lại hỏi thêm."]
      },
      {
        layout: "list", eyebrow: "Kỹ năng 3 · Thử và cải thiện nhanh", title: "Như dạy trẻ con đi xe đạp",
        text: ["Claude hiếm khi đúng ý ngay lần đầu, và điều đó hoàn toàn bình thường. Người dùng giỏi cải thiện qua nhiều vòng nhỏ, thay vì cố viết một lời nhắc hoàn hảo."],
        items: [
          { k: "01", text: "Không ai đặt đứa trẻ lên xe rồi bỏ đi. Bạn giữ yên xe, chỉnh từng chút, rồi ==buông dần==." },
          { k: "02", text: "Với AI cũng vậy: ==làm nhanh một bản nháp==, chỉ ra chỗ chưa ổn, rồi để Claude sửa." },
          { k: "03", text: "Biết lúc dừng: trước khi làm, nói rõ ==thế nào là xong==, tốt nhất bằng một con số hay một tiêu chí kiểm tra được." },
          { k: "04", text: "==Nói thay vì gõ== và dùng phím tắt để mỗi vòng nhanh hơn (trang [[K3]])." }
        ]
      },
      {
        layout: "tips", eyebrow: "Trước khi sang bài sau", title: "Làm ngay hôm nay",
        try: "Chọn một việc bạn làm mỗi tuần và ghi lại: mất bao lâu, thế nào thì gọi là \"xong\". [[L03]] sẽ giúp bạn lập danh sách việc nên giao cho Claude.",
        ask: "\"Trong ngành phân phối bảo hiểm phi nhân thọ, những việc nào AI đang làm tốt nhất? Cho mình 5 ví dụ cụ thể cho cấp teamlead.\""
      }
    ]
  });
})();
