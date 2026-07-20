# Hướng dẫn vận hành và bàn giao production

## Production

- Domain chính: `https://vuthinh.io.vn`.
- Hosting: Vercel.
- Source: GitHub repository `Coffee2205/vuthinh`.
- Database, Auth và Storage: Supabase.

## Biến môi trường bắt buộc trên Vercel

Thiết lập cho môi trường Production, sau đó redeploy:

```text
NEXT_PUBLIC_SITE_URL=https://vuthinh.io.vn
NEXT_PUBLIC_SUPABASE_URL=<Supabase project URL>
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=<Supabase publishable key>
```

Không thêm service-role key vào biến môi trường của website public.

## Kiểm tra sau mỗi lần deploy

1. Mở trang chủ và các route chính trên desktop và điện thoại.
2. Kiểm tra `https://vuthinh.io.vn/robots.txt` và `https://vuthinh.io.vn/sitemap.xml` trả HTTP 200.
3. Gửi một đăng ký thật đã được chủ sở hữu cho phép, xác nhận trạng thái thành công và đối chiếu bản ghi trong Supabase/admin.
4. Mở `/admin` ở cửa sổ ẩn danh để xác nhận redirect đăng nhập; sau đó đăng nhập bằng tài khoản admin và kiểm tra quyền đọc/cập nhật.
5. Kiểm tra một URL không tồn tại trả HTTP 404 và hiển thị trang hướng dẫn quay lại website.
6. Xóa bản ghi QA nếu có sau khi đối chiếu.

## Tài khoản và quyền sở hữu

Chủ sở hữu cần giữ quyền Owner hoặc quyền quản trị phù hợp tại GitHub, Vercel, Supabase và nhà cung cấp domain. Không ghi mật khẩu, recovery code hoặc secret key vào repository hay tài liệu bàn giao.

Khi bàn giao cho người vận hành mới, mời tài khoản riêng vào từng dịch vụ, kiểm tra đăng nhập thành công rồi mới thu hồi quyền của tài khoản cũ.

## Vận hành nội dung

- Chỉ publish khóa học, bài viết, tài liệu và câu chuyện đã được duyệt.
- Chỉ publish cảm nhận khi đã xác nhận consent.
- Kiểm tra URL và quyền phân phối trước khi công bố ảnh hoặc tài liệu.
- Đăng ký học, liên hệ và yêu cầu tư vấn là dữ liệu riêng tư; không chia sẻ qua kênh công khai.

## Hoàn tác khi deploy lỗi

Trong Vercel, chọn deployment production ổn định gần nhất và dùng chức năng rollback/promote của Vercel. Sau đó kiểm tra lại domain, các form và admin protection trước khi tiếp tục sửa source.
