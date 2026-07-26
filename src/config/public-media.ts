import { getPublicMediaUrl } from "@/lib/supabase/storage";

const blogCoverBySlug: Record<string, { path: string; alt: string }> = {
  "hsk-la-gi-va-nen-bat-dau-tu-cap-do-nao": {
    path: "post/HSK_la_gi.jpg",
    alt: "Minh họa các cấp độ HSK dành cho người mới học tiếng Trung",
  },
  "lo-trinh-hoc-tieng-trung-cho-nguoi-mat-goc": {
    path: "post/Lo_trinh_hoc_mat_goc.png",
    alt: "Lộ trình học tiếng Trung dành cho người mất gốc",
  },
  "cach-tao-thoi-quen-hoc-tieng-trung-moi-ngay": {
    path: "post/Tao_thoi_quen.jpg",
    alt: "Minh họa thói quen học tiếng Trung mỗi ngày",
  },
  "hoc-tu-vung-tieng-trung-de-nho-lau": {
    path: "post/Tu_vung_tieng_trung.jpg",
    alt: "Minh họa phương pháp học từ vựng tiếng Trung hiệu quả",
  },
  "hoc-tieng-trung-mo-rong-co-hoi-nghe-nghiep-nhu-the-nao": {
    path: "post/tieng-trung-mo-rong-cong-viec.jpg",
    alt: "Người đi làm sử dụng tiếng Trung để mở rộng cơ hội nghề nghiệp",
  },
  "7-loi-ich-cua-viec-hoc-tieng-trung-doi-voi-sinh-vien": {
    path: "post/loi-ich-tieng-tung-voi-sinh-vien.jpg",
    alt: "Sinh viên học tiếng Trung để phát triển kiến thức và kỹ năng",
  },
  "vi-sao-nguoi-di-lam-nen-hoc-tieng-trung": {
    path: "post/vi-sao-len-hoc-tieng-trung.jpg",
    alt: "Người đi làm học tiếng Trung phục vụ công việc",
  },
  "hoc-tieng-trung-giup-tiep-can-van-hoa-sau-hon": {
    path: "post/van_hoa_trung_hoa.png",
    alt: "Văn hóa Trung Hoa được khám phá thông qua việc học tiếng Trung",
  },
  "tieng-trung-giup-ich-gi-khi-di-du-lich": {
    path: "post/tieng_trung_khi_du_lich.webp",
    alt: "Du khách sử dụng tiếng Trung trong chuyến đi",
  },
  "hoc-chu-han-co-the-ren-su-tap-trung-ra-sao": {
    path: "post/hoc_chu_han.webp",
    alt: "Người học luyện viết chữ Hán và khả năng tập trung",
  },
  "loi-ich-cua-viec-hoc-tieng-trung-tu-som-cho-tre": {
    path: "post/hoc_tieng_trung_tu_be.jpg",
    alt: "Trẻ em làm quen với tiếng Trung từ sớm",
  },
  "hoc-tieng-trung-giup-mo-rong-nguon-tai-lieu-nhu-the-nao": {
    path: "post/Mo_rong_nguon_tai_lieu.jpg",
    alt: "Người học tiếp cận thêm tài liệu bằng tiếng Trung",
  },
  "tieng-trung-va-loi-ich-trong-kinh-doanh-thuong-mai": {
    path: "post/Tieng_trung_trong_thuong_mai.png",
    alt: "Tiếng Trung được sử dụng trong kinh doanh và thương mại",
  },
  "hoc-tieng-trung-co-giup-hoc-them-ngon-ngu-khac-khong": {
    path: "post/hoc-tieng-trung-giup-hoc-ngon-ngu-khac.webp",
    alt: "Người học sử dụng kinh nghiệm tiếng Trung để tiếp cận ngôn ngữ khác",
  },
  "hoc-tieng-trung-ren-tu-duy-he-thong-qua-bo-thu-va-cau-tao-chu": {
    path: "post/bo-thu.webp",
    alt: "Các bộ thủ và cấu tạo chữ Hán giúp rèn tư duy hệ thống",
  },
  "tieng-trung-giup-ket-noi-voi-nhieu-cong-dong-hon": {
    path: "post/da-ngon-ngu.jpg",
    alt: "Tiếng Trung giúp kết nối với cộng đồng đa ngôn ngữ",
  },
  "hoc-tieng-trung-giup-tang-su-tu-tin-trong-giao-tiep": {
    path: "post/tang-tu-tin.jpg",
    alt: "Người học tự tin hơn khi giao tiếp bằng tiếng Trung",
  },
  "loi-ich-cua-tieng-trung-voi-nganh-du-lich-va-dich-vu": {
    path: "post/du-lich-va-dich-vu.webp",
    alt: "Tiếng Trung được ứng dụng trong ngành du lịch và dịch vụ",
  },
  "hoc-tieng-trung-de-hieu-ro-hon-ve-am-thuc-va-doi-song": {
    path: "post/am-thuc-va-loi-song.jpg",
    alt: "Ẩm thực và đời sống được khám phá qua tiếng Trung",
  },
  "tieng-trung-ho-tro-muc-tieu-du-hoc-nhu-the-nao": {
    path: "post/ho-tro-du-hoc.jpg",
    alt: "Tiếng Trung hỗ trợ người học chuẩn bị mục tiêu du học",
  },
  "hoc-tieng-trung-tao-thoi-quen-hoc-tap-ben-vung": {
    path: "post/tao-thoi-quen-hoc.jpg",
    alt: "Người học xây dựng thói quen học tiếng Trung bền vững",
  },
  "tieng-trung-giup-nang-cao-kha-nang-lang-nghe": {
    path: "post/ho-tro-nghe.jpg",
    alt: "Luyện nghe tiếng Trung giúp nâng cao khả năng lắng nghe",
  },
  "hoc-tieng-trung-giup-hieu-cong-nghe-va-san-pham-tu-nguon-goc": {
    path: "post/hieu-nguon-goc.webp",
    alt: "Tiếng Trung giúp tìm hiểu công nghệ và sản phẩm từ nguồn gốc",
  },
  "vi-sao-hoc-tieng-trung-la-mot-khoan-dau-tu-dai-han": {
    path: "post/dau-tu-dai-han.webp",
    alt: "Học tiếng Trung là một khoản đầu tư kiến thức dài hạn",
  },
};

const courseThumbnailBySlug: Record<string, { path: string; alt: string }> = {
  "tieng-trung-thieu-nhi-co-ban": {
    path: "courses/Tieng_trung_thieu_nhi.png",
    alt: "Khóa học tiếng Trung thiếu nhi cơ bản",
  },
  "tieng-trung-giao-tiep-co-ban": {
    path: "courses/Tieng_trung_giao_tiep.png",
    alt: "Khóa học tiếng Trung giao tiếp cơ bản",
  },
  "mat-goc-den-hsk-3": {
    path: "courses/Lo_trinh_mat_goc.png",
    alt: "Lộ trình khóa học tiếng Trung từ mất gốc đến HSK 3",
  },
  "luyen-thi-hsk-4": {
    path: "courses/Luyen_thi_HSK4.png",
    alt: "Khóa luyện thi HSK 4",
  },
  "luyen-thi-hsk-5": {
    path: "courses/hsk5.jpg",
    alt: "Khóa luyện thi HSK 5",
  },
  "luyen-thi-hsk-6": {
    path: "courses/hsk6.jpg",
    alt: "Khóa luyện thi HSK 6",
  },
};

export function getBlogCoverMedia(slug: string) {
  const media = blogCoverBySlug[slug];
  if (!media) return null;

  const url = getPublicMediaUrl(media.path);
  return url ? { url, alt: media.alt } : null;
}

export function getCourseThumbnailMedia(slug: string) {
  const media = courseThumbnailBySlug[slug];
  if (!media) return null;

  const url = getPublicMediaUrl(media.path);
  return url ? { url, alt: media.alt } : null;
}
