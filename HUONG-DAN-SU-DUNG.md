# Claude Thực Chiến · Hướng dẫn sử dụng cho trainer

Website khoá học 4 giờ (học + thực hành) về Claude Chat và Claude Code cho đội ngũ teamlead, quản lý.
Trình bày: **Trainer Trịnh Đức**. Cập nhật theo công bố của Anthropic tới 25/11/2026.

## 1. Mở trang

- Bấm đúp **`index.html`**. Trang chạy ngay trên trình duyệt (Edge, Chrome), **không cần cài gì, không cần server**.
- Cần Internet để tải font chữ (Fraunces, Be Vietnam Pro, JetBrains Mono). Không có mạng thì trang vẫn chạy với font dự phòng của máy.
- Mở thẳng chế độ trình chiếu: thêm `?trinh-chieu` vào địa chỉ, ví dụ `index.html?trinh-chieu#/L07`. Thêm `&toi` để dùng giao diện tối.

## 2. Khi giảng

| Phím | Tác dụng |
|---|---|
| `P` | Bật/tắt **chế độ trình chiếu** (mỗi khối nội dung thành một slide toàn màn hình) |
| `→` `Space` | Trình chiếu: minh hoạ chạy tới bước tiếp theo, hết bước thì sang slide sau, hết bài thì sang bài sau |
| `←` | Lùi lại |
| `F` | Toàn màn hình |
| `T` | Đổi giao diện sáng/tối |
| `M` | Mở mục lục |
| `H` | Về trang chủ |
| `Esc` | Thoát trình chiếu |
| `?` | Xem danh sách phím tắt |

- Ở chế độ trình chiếu, bấm vào đồng hồ ⏱ ở góc dưới để đếm giờ buổi học.

## 3. Cấu trúc thư mục

```
index.html                 Trang chính (mở file này)
HUONG-DAN-SU-DUNG.md       Tài liệu này
assets/css/course.css      Giao diện
assets/js/course-data.js   Tên khoá, tên trainer, logo, danh sách bài, thời lượng, kho lệnh
assets/js/render.js        Bộ dựng nội dung
assets/js/app.js           Điều hướng, trình chiếu, hiệu ứng
assets/img/                Logo công ty (bản chữ đen và chữ trắng)
bai-hoc/                   Nội dung từng bài (L00…L20, M1…M3, K1, K3, K4)
thuc-hanh/                 Tài nguyên thực hành
  hoc-claude-code/         Thư mục thực hành cho học viên (dữ liệu giả)
  hoc-claude-code.zip      Bản nén để học viên tải về
  phong-van-website.zip    Skill phỏng vấn làm website (Bài 16)
  DAP-AN-CHO-TRAINER.md    Đáp án số liệu Việc 1 (không phát cho học viên)
```

## 4. Sửa nội dung

- **Tên trainer, logo, tên khoá học**: sửa mục `brand` trong `assets/js/course-data.js`. Logo: thay 2 file trong `assets/img/` (giữ nguyên tên file): `logo-cong-ty.png` (chữ đen, nền trong suốt, dùng trên nền sáng) và `logo-cong-ty-trang.png` (chữ trắng, dùng trên nền tối); `favicon.png` là biểu tượng trên tab trình duyệt.
- **Nội dung một bài**: mở file tương ứng trong `bai-hoc/` (ví dụ `L07.js`). Mỗi khối có `eyebrow` (dòng nhỏ), `title` (tiêu đề), `text`/`after` (đoạn văn), và phần nội dung theo `layout`.
- Cú pháp trong chữ: `==tô sáng==`, `**in đậm**`, `` `mã` ``, `[chữ](https://link)`, `[[L07]]` (liên kết tới bài).
- Lưu file rồi tải lại trang (F5).

## 5. Trước buổi học

1. Gửi học viên trang **K1 · Chuẩn bị trước khi học** (`index.html#/K1`) và file `thuc-hanh/hoc-claude-code.zip`.
2. Học viên cần: tài khoản **Claude Pro hoặc Max**, ứng dụng Claude trên máy tính, thư mục thực hành đã giải nén.
3. Trainer chuẩn bị sẵn tài khoản GitHub để làm mẫu Bài 18 (go live).
4. Đọc `thuc-hanh/DAP-AN-CHO-TRAINER.md` để đối chiếu số liệu Việc 1 của học viên.

## 6. Nguồn và lưu ý

- Thông tin sản phẩm (giá, model, lệnh, tính năng) đối chiếu với tài liệu chính thức của Anthropic ngày 25/11/2026; mỗi bài có mục "Nguồn chính thống". Claude thay đổi nhanh: nên kiểm tra lại giá và tên model trước mỗi khoá.
- Toàn bộ dữ liệu thực hành là **dữ liệu giả**; tên công ty "Bảo Nhanh", nhân viên, đối tác đều hư cấu.
