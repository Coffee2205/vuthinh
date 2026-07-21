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
