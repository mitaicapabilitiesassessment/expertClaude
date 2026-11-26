/* Bài 06 · Giao việc */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("nam-phan-giao-viec", function () {
    var parts = [
      { s: 2, t: "Bối cảnh", d: "bạn là ai, việc này để làm gì" },
      { s: 2, t: "Mục tiêu", d: "cần ra kết quả gì" },
      { s: 3, t: "Ràng buộc", d: "điều bắt buộc phải giữ" },
      { s: 3, t: "Ví dụ", d: "một mẫu, nếu có" },
      { s: 4, t: "Thế nào là xong", d: "làm sao biết là đạt" }
    ];
    var s = V.g(1, V.box(30, 20, 660, 60, { cls: "v-box2", r: 14 }) + V.icon("chat", 46, 36, 28, "acc") + V.t(90, 56, "Lời giao việc của bạn", "lg", "start"));
    parts.forEach(function (p, i) {
      var x = 30 + i * 134;
      s += V.g(p.s, V.box(x, 104, 122, 120, { cls: i === 4 ? "v-box" : "v-box", style: i === 4 ? "stroke:#d97757;stroke-width:2.5" : "" }) +
        V.t(x + 61, 140, String(i + 1).padStart(2, "0"), "sm m acc") + V.t(x + 61, 168, p.t, "sm") + V.tl(x + 61, 192, p.d.length > 18 ? [p.d.slice(0, p.d.lastIndexOf(" ", 18)), p.d.slice(p.d.lastIndexOf(" ", 18) + 1)] : [p.d], "xs mut", "middle", 15), "pop");
    });
    s += V.g(4, '<path d="M640 226 L640 262" class="v-acc-s" marker-end="url(#aha)"/>' + V.t(632, 284, "Claude tự kiểm tra được kết quả", "sm acc", "end"));
    return V.svg(720, 300, s);
  });

  C.register({
    id: "L06",
    blocks: [
      {
        layout: "statement", eyebrow: "Bài 06 · Giao việc",
        lines: ["Giao việc cho Claude", "như cho ==một nhân viên giỏi==", "mới vào làm."],
        sub: "Người đó giỏi, nhưng chưa biết gì về công ty/công việc của bạn.",
        after: ["Một nhân viên mới dù giỏi tới đâu cũng chưa biết sếp bạn thích báo cáo dài hay ngắn, đại lý hay hỏi gì, file nào là bản mới nhất. Claude cũng vậy. ==Phần lớn kết quả dở là do lời giao việc thiếu thông tin==, chứ không phải do Claude kém."]
      },
      {
        layout: "visual", eyebrow: "Một lời giao việc tốt", title: "Năm phần của một lời giao việc",
        visual: "nam-phan-giao-viec",
        captions: [
          "Một lời giao việc tốt có ==năm phần==.",
          "==Bối cảnh== và ==mục tiêu==: bạn là ai, cần kết quả gì, để làm gì.",
          "==Ràng buộc== và ==ví dụ==: điều phải giữ, một mẫu (one-shot) nếu có.",
          "==Thế nào là xong==: tiêu chí để biết là đạt. Có phần này, Claude tự kiểm tra được kết quả."
        ],
        after: ["Mỗi phần chỉ cần một hai câu. Quan trọng là có đủ, nhất là phần cuối."]
      },
      {
        layout: "prompts", eyebrow: "Cùng một việc, hai cách giao", title: "Giao sơ sài và giao đủ",
        items: [
          { label: "Giao sơ sài", tone: "bad", text: "Tóm tắt mấy biên bản họp trong thư mục tai-lieu." },
          { label: "Giao đủ năm phần", tone: "good", text: "Bối cảnh: mình là trưởng phòng kinh doanh, sáng thứ Hai cần gửi cập nhật cho Ban giám đốc.\nMục tiêu: tóm tắt 3 biên bản họp trong thư mục `tai-lieu` thành một bản cập nhật.\nRàng buộc: tối đa 1 trang; viết cho người không dự họp; giữ nguyên tên người và ngày tháng; không thêm thông tin ngoài biên bản.\nVí dụ: chia 3 mục giống `tom-tat-hop.md` (Đã chốt · Việc cần làm · Còn bỏ ngỏ).\nThế nào là xong: mỗi việc cần làm đều có người phụ trách và hạn chót; mục \"Còn bỏ ngỏ\" ghi rõ cần ai quyết. Lưu thành `cap-nhat-ban-giam-doc.md`." }
        ],
        after: ["Lời đầu vẫn chạy được, nhưng Claude phải tự đoán hoặc hỏi lại - mất thời gian: tóm tắt cho ai, dài bao nhiêu, chia phần thế nào. Lời thứ hai trả lời sẵn hết các câu đó, nên ==kết quả dùng được ngay từ lần đầu==."]
      },
      {
        layout: "prompt", eyebrow: "Khung để chép", title: "Khung giao việc năm phần",
        label: "Khung giao việc",
        prompt: "Bối cảnh: [mình là ai, việc này phục vụ ai, để làm gì]\nMục tiêu: [cần ra kết quả gì, ở định dạng nào, lưu ở đâu]\nRàng buộc: [độ dài, giọng văn, điều không được làm, dữ liệu nào không được dùng]\nVí dụ: [một mẫu có sẵn, hoặc file mẫu để Claude bắt chước]\nThế nào là xong: [tiêu chí kiểm tra được, ví dụ: tổng khớp với file gốc, đủ 5 mục, dưới 300 chữ]",
        after: ["Không cần học thuộc. Lưu khung này ở chỗ dễ lấy (hoặc bảng lệnh [[K4]]), mỗi lần giao việc mới thì điền từ trên xuống, xoá dòng nào không cần."]
      },
      {
        layout: "list", eyebrow: "Việc lớn", title: "Lập kế hoạch trước, làm sau",
        text: ["Với việc nhiều bước, hãy chuyển sang chế độ ==Plan== (ô chọn chế độ dưới khung nhập) trước khi giao. Claude sẽ đọc file và trình kế hoạch, chưa động vào gì."],
        items: [
          { k: "01", text: "Đọc kỹ kế hoạch: Claude ==hiểu đúng đề bài== chưa, có bỏ sót bước nào không." },
          { k: "02", text: "Sửa kế hoạch bằng lời: \"Bước 3 làm thêm biểu đồ theo kênh bán\"." },
          { k: "03", text: "Kế hoạch ổn mới ==duyệt cho làm==. Sửa kế hoạch rẻ hơn nhiều so với sửa kết quả." }
        ]
      },
      {
        layout: "list", eyebrow: "Khi góp ý", title: "Góp ý để Claude sửa nhanh và đúng",
        items: [
          { k: "01", text: "==Góp ý bằng con số==: \"rút còn 5 slide\" thay vì \"ngắn bớt\"; \"tiêu đề to hơn 20%\" thay vì \"to hơn chút\"." },
          { k: "02", text: "==Mỗi tin nhắn một thay đổi==, để biết thay đổi nào sửa được gì." },
          { k: "03", text: "==Làm nhỏ trước, thêm dần==. Bạn góp ý, Claude làm." },
          { k: "04", text: "==Nói thay vì gõ==: nhanh hơn, và bạn kể được nhiều bối cảnh hơn (trang [[K3]])." }
        ]
      },
      {
        layout: "tips", eyebrow: "Bài tập", title: "Thử ngay",
        try: "Chọn một việc trong danh sách 5 việc ở [[L03]], viết lại thành lời giao việc năm phần, rồi giao cho Claude bằng giọng nói.",
        ask: "\"Lời giao việc này của mình còn thiếu gì? Hỏi lại mình những gì bạn cần biết.\""
      }
    ]
  });
})();
