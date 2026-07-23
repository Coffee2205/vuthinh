-- Cập nhật hồ sơ public hiện hữu theo slug đã xác minh; giữ nguyên schema/tên bảng expert để tương thích.
update public.experts
set
  full_name = 'Huỳnh Anh Ngữ',
  professional_title = 'Giảng viên tiếng Trung',
  short_bio = 'Giảng viên Huỳnh Anh Ngữ, tên thường gọi là Vũ Thịnh, có nhiều năm kinh nghiệm trong giảng dạy, đào tạo, huấn luyện tiếng Trung và xây dựng hoạt động kinh doanh, đào tạo trong và ngoài nước.',
  biography = E'18 năm kinh nghiệm giảng dạy, đào tạo và huấn luyện.\n\n15 năm công tác và kinh nghiệm chuyên môn trong lĩnh vực tiếng Trung.\n\n10 năm kinh nghiệm kinh doanh và đào tạo trong và ngoài nước.\n\nTừng là Co-founder và Co-manager, tham gia xây dựng 3 công ty quốc tế.',
  updated_at = now()
where slug = 'vu-thinh';

update public.expert_qualifications
set
  title = 'Cử nhân Ngữ văn Trung',
  institution = 'Trường Đại học Khoa học Xã hội và Nhân văn – Đại học Quốc gia Thành phố Hồ Chí Minh',
  description = null,
  updated_at = now()
where expert_id = (select id from public.experts where slug = 'vu-thinh')
  and qualification_type = 'degree'
  and display_order = 1;

update public.expert_faqs
set
  question = replace(replace(question, 'Chuyên gia', 'Giảng viên'), 'chuyên gia', 'giảng viên'),
  answer = replace(replace(answer, 'Chuyên gia', 'Giảng viên'), 'chuyên gia', 'giảng viên'),
  updated_at = now()
where expert_id = (select id from public.experts where slug = 'vu-thinh');
