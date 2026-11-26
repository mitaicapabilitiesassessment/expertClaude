/* Bài M2 · Cá nhân hoá Claude: model, mức suy nghĩ, Projects và bộ nhớ (Phần 0 – mới) */
(function () {
  var C = window.Course, V = C.V;

  C.addVisual("lop-ca-nhan-hoa", function () {
    var layers = [
      { s: 1, t: "Model", d: "Opus · Sonnet · Haiku · Fable", icon: "spark" },
      { s: 2, t: "Mức suy nghĩ", d: "low → max (mặc định medium)", icon: "gear" },
      { s: 3, t: "Chỉ dẫn cá nhân", d: "bạn là ai, muốn trả lời ra sao", icon: "user" },
      { s: 4, t: "Project / thư mục", d: "tài liệu + chỉ dẫn riêng cho một mảng việc", icon: "folder" },
      { s: 5, t: "Bộ nhớ", d: "Claude tự ghi nhớ qua các lần làm việc", icon: "brain" }
    ];
    var s = "";
    layers.forEach(function (L, i) {
      var y = 18 + i * 56, w = 400 - i * 30, x = 40 + i * 15;
      s += V.g(L.s, V.box(x, y, w, 46, { cls: i % 2 ? "v-box2" : "v-box", r: 10 }) + V.icon(L.icon, x + 14, y + 11, 24, "acc") + V.t(x + 50, y + 22, L.t, "sm", "start") + V.t(x + 50, y + 38, L.d, "xs mut", "start"));
    });
    s += V.g(6, '<path d="M450 150 C 500 150, 510 150, 545 150" class="v-flow" marker-end="url(#aha)"/>' + V.box(552, 96, 140, 108, { cls: "v-box", r: 16 }) +
      '<circle cx="622" cy="128" r="16" fill="url(#gz)"/>' + V.icon("check", 612, 118, 20, "dk") + V.tl(622, 166, ["Câu trả lời", "đúng ý bạn"], "sm", "middle", 18), "pop");
    return V.svg(720, 300, s);
  });

  C.register({
    id: "M2",
    blocks: [
      {
        layout: "statement", eyebrow: "Phần 0 · Bài M2",
        lines: ["Claude làm đúng ý hơn", "khi ==biết bạn là ai==."],
        sub: "Năm thiết lập có ở cả Chat lẫn Code, làm một lần, sử dụng trong cả dự án.",
        after: ["Mỗi lần mở cuộc trò chuyện mới mà phải giới thiệu lại \"mình là teamlead, team mình có x members, hãy tạo báo cáo theo mẫu này…\" là mỗi lần mất vài phút. Bài này chỉ cho bạn những chỗ để Claude ==nhớ sẵn== những điều đó."]
      },
      {
        layout: "visual", eyebrow: "Năm lớp cá nhân hoá", title: "Từ chọn model tới bộ nhớ",
        visual: "lop-ca-nhan-hoa",
        captions: [
          "==Model==: chọn \"bộ não\" cho việc. Model mạnh hơn thì chậm hơn và tốn hạn mức (token) hơn. Hạn chế đổi model trong 1 phiên làm việc",
          "==Mức suy nghĩ== (effort): việc khó thì cho Claude nghĩ kỹ hơn, việc nhỏ thì hạ xuống cho nhanh.",
          "==Chỉ dẫn cá nhân==: vai trò của bạn, cách xưng hô, văn phong, định dạng ưa thích. Áp dụng cho mọi cuộc trò chuyện.",
          "==Project== (trong Chat) hay ==thư mục làm việc== (trong Code): gom tài liệu và chỉ dẫn riêng cho một mảng việc.",
          "==Bộ nhớ==: Claude tự ghi lại những gì đáng nhớ để lần sau không phải hỏi lại.",
          "Kết quả: ngay câu hỏi đầu tiên, Claude đã ==trả lời đúng bối cảnh== của bạn."
        ]
      },
      {
        layout: "table", eyebrow: "Ở Chat và ở Code", title: "Cùng một nhiệm vụ, hai chỗ thực thi",
        head: ["Thiết lập", "Trong Chat", "Trong Claude Code", "Học sâu"],
        widths: ["17%", "37%", "34%", "12%"],
        rows: [
          ["Model", "Ô chọn model cạnh nút gửi.", "Ô chọn model, hoặc gõ `/model`. Mặc định: ==Opus 5.5==.", "[[L13]]"],
          ["Mức suy nghĩ", "Có trong ứng dụng, mặc định ==Medium==.", "Gõ `/effort`: low, medium, high, xhigh, max. Mặc định ==medium==.", "[[L13]]"],
          ["Chỉ dẫn cá nhân", "**Settings > Your Claude** > ô \"Instructions for Claude\".", "File `CLAUDE.md` cá nhân ở `~/.claude/CLAUDE.md`.", "[[L10]]"],
          ["Theo mảng việc", "**Projects**: tải tài liệu lên làm kiến thức nền, viết chỉ dẫn riêng. Mỗi project có bộ nhớ riêng.", "Mỗi ==thư mục== là một không gian; file `CLAUDE.md` trong thư mục là chỉ dẫn riêng.", "[[L10]]"],
          ["Bộ nhớ tự động", "Bật \"Generate memory from chats\" ở **Settings > Your Claude** (mặc định bật). Chat ẩn danh (Incognito) không được ghi nhớ.", "==Auto memory==: Claude tự ghi chú vào máy bạn, bật sẵn; xem và tắt bằng `/memory`.", "[[L10]]"]
        ],
        note: "Tên mục trong phần cài đặt có thể đổi theo bản cập nhật ứng dụng. Các nhãn trên được đối chiếu với trang hỗ trợ của Anthropic ngày " + C.facts.checked + ".",
        sources: [
          { label: "Using Claude's chat search and memory", url: "https://support.claude.com/en/articles/11817273-using-claude-s-chat-search-and-memory-to-build-on-previous-context" },
          { label: "What are projects?", url: "https://support.claude.com/en/articles/9517075-what-are-projects" },
          { label: "Claude Code docs · Model configuration", url: "https://code.claude.com/docs/en/model-config" },
          { label: "Claude Code docs · Memory", url: "https://code.claude.com/docs/en/memory" }
        ]
      },
      {
        layout: "compare", eyebrow: "Model và mức suy nghĩ", title: "Chọn nhanh trong 10 giây",
        cols: [
          { who: "Mặc định, dùng hằng ngày", title: "Opus 5.5", items: ["Anthropic khuyên bắt đầu từ đây", "Hợp phần lớn việc của teamlead: phân tích, báo cáo, soạn thảo", "Mức suy nghĩ mặc định: medium"] },
          { who: "Khi cần nhanh, nhẹ", title: "Sonnet 5.5 · Haiku 5.5", items: ["Viết nháp tin nhắn, đổi định dạng, tóm tắt ngắn", "Nhanh hơn, tốn ít hạn mức hơn", "Hạ mức suy nghĩ xuống low cho việc vặt"] },
          { who: "Khi việc rất khó, rất dài", title: "Fable 5.2", items: ["Model mạnh nhất mở cho mọi người (ra mắt 9/11/2026)", "Gói Pro: trả bằng usage credits", "Gói Max: dùng tới một nửa hạn mức tuần"] }
        ],
        thumb: "Quy tắc cần nhớ: ==giữ mặc định==, chỉ đổi khi việc quá nhỏ (cho nhanh) hoặc quá khó (cho kỹ). [[L13]] đi sâu hơn.==Hạn chế đổi model giữa chừng trong phiên== để tránh mất prompt cache, trước tiên hãy thử ==tăng effort==.",
        sources: [
          { label: "Introducing Claude Fable 5.2 and Mythos 5.2", url: "https://www.anthropic.com/claude-fable-and-mythos-5-2" },
          { label: "Choosing a model", url: "https://platform.claude.com/docs/en/about-claude/models/choosing-a-model" }
        ]
      },
      {
        layout: "prompt", eyebrow: "Mẫu để dán", title: "==Cá nhân hóa== chỉ dẫn cá nhân cho Claude",
        text: ["Dán mẫu này vào **Settings > Your Claude > Instructions for Claude**, rồi sửa phần trong ngoặc vuông cho đúng với bạn. Viết ngắn thôi: những gì luôn đúng với mọi cuộc trò chuyện."],
        label: "Instructions for Claude",
        prompt: "Mình là [chức danh], phụ trách [team/kênh bán] tại một công ty phân phối bảo hiểm phi nhân thọ qua ứng dụng di động (bảo hiểm xe, sức khoẻ, du lịch, nhà ở).\n- Luôn trả lời bằng tiếng Việt, xưng \"mình\" và gọi mình là \"bạn\".\n- Ưu tiên ngắn gọn: kết luận trước, chi tiết sau, dùng gạch đầu dòng và con số cụ thể.\n- Khi thiếu thông tin quan trọng, hỏi lại tối đa 3 câu trước khi làm.\n- Không tự bịa số liệu, điều khoản hay quy định; chỗ nào không chắc thì ghi rõ \"cần kiểm tra\".\n- Không đưa thông tin cá nhân của khách hàng vào ví dụ."
      },
      {
        layout: "steps", screen: "chat", eyebrow: "Thực hành 5 phút", title: "Tạo một Project cho team",
        steps: [
          "Ở thanh bên, mở **Projects**, tạo project mới tên \"Team kinh doanh\".",
          "Tải lên 3 biên bản họp trong thư mục `hoc-claude-code/tai-lieu` làm kiến thức nền của project.",
          "Ở phần chỉ dẫn của project, viết: \"Đây là không gian làm việc của team kinh doanh. Khi trả lời, ưu tiên các quyết định và hạn chót trong biên bản họp.\"",
          "Mở cuộc trò chuyện mới trong project và hỏi: \"Tuần này team mình còn những việc nào chưa xong, ai phụ trách?\"",
          "So sánh với một cuộc trò chuyện ngoài project: Claude ngoài project không biết gì về biên bản họp của bạn."
        ],
        note: "Làm việc với thông tin nhạy cảm? Dùng **chat ẩn danh** (biểu tượng hình bóng ma ở góc phải cuộc trò chuyện mới): cuộc trò chuyện đó không được đưa vào bộ nhớ. [[L05]] nói kỹ hơn về dữ liệu."
      },
      {
        layout: "tips", eyebrow: "Trước khi sang bài sau", title: "Thử ngay",
        try: "Dán mẫu chỉ dẫn cá nhân ở trên vào tài khoản của bạn, rồi mở một cuộc trò chuyện mới và hỏi \"Bạn biết gì về mình?\" để xem Claude đã đọc chỉ dẫn chưa.",
        ask: "\"Đọc chỉ dẫn cá nhân hiện tại của mình và góp ý 3 điểm để nó ngắn hơn mà vẫn đủ ý.\""
      }
    ]
  });
})();
