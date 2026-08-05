export const expertPhoto = {
  src: "/images/expert/vu-thinh.png",
  alt: "Giảng viên Huỳnh Anh Ngữ hướng dẫn học viên trong một buổi học tiếng Trung",
} as const;

export const lecturerProfile = {
  fullName: "Huỳnh Anh Ngữ",
  alternateName: "Vũ Thịnh",
  jobTitle: "Giảng viên tiếng Trung",
  shortBio:
    "Giảng viên Huỳnh Anh Ngữ, tên thường gọi là Vũ Thịnh, có nhiều năm kinh nghiệm trong giảng dạy, đào tạo, huấn luyện tiếng Trung và xây dựng hoạt động kinh doanh, đào tạo trong và ngoài nước.",
  biography: [
    "18 năm kinh nghiệm giảng dạy, đào tạo và huấn luyện.",
    "15 năm công tác và kinh nghiệm chuyên môn trong lĩnh vực tiếng Trung.",
    "10 năm kinh nghiệm kinh doanh và đào tạo trong và ngoài nước.",
    "Từng là Co-founder và Co-manager, tham gia xây dựng 3 công ty quốc tế.",
  ].join("\n\n"),
  education: {
    degree: "Cử nhân Ngữ văn Trung",
    institution: "Trường Đại học Khoa học Xã hội và Nhân văn – ĐHQG TP.HCM",
  },
  teachingAreas: [
    "Tiếng Trung",
    "Định hướng học tập",
    "Kỹ năng sống và cảm xúc",
    "Đào tạo và huấn luyện",
  ],
} as const;

export const consultationProcess = [
  {
    title: "Gửi yêu cầu",
    description: "Chia sẻ mục tiêu, hiện trạng và dịch vụ bạn quan tâm.",
  },
  {
    title: "Xác nhận lịch",
    description:
      "Trung tâm liên hệ để thống nhất thời gian và hình thức phù hợp.",
  },
  {
    title: "Đánh giá hiện trạng",
    description:
      "Trao đổi về điểm xuất phát, điều kiện học và khó khăn hiện tại.",
  },
  {
    title: "Đề xuất lộ trình",
    description: "Làm rõ hướng đi và kế hoạch học tập phù hợp với mục tiêu.",
  },
  {
    title: "Theo dõi và điều chỉnh",
    description: "Tiếp tục rà soát tiến độ khi sử dụng dịch vụ định kỳ.",
  },
] as const;
