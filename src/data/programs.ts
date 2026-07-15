export const programGroupsContent = {
  eyebrow: "Chương trình đào tạo",
  title: "Khám phá các hướng học tại Vũ Thịnh",
  description:
    "Bảy nhóm chương trình được sắp xếp theo định hướng hiện tại, với tiếng Trung là trọng tâm và các năng lực phát triển con người là phần bổ trợ.",
  groups: [
    {
      title: "Tiếng Trung thiếu nhi",
      area: "Tiếng Trung",
      description:
        "Hướng học ngôn ngữ dành cho trẻ em, tạo cơ hội làm quen và xây nền tảng tiếng Trung phù hợp với độ tuổi.",
    },
    {
      title: "Tiếng Trung giao tiếp",
      area: "Tiếng Trung",
      description:
        "Hướng tới nhu cầu nghe, nói và sử dụng tiếng Trung trong những tình huống giao tiếp thường gặp.",
    },
    {
      title: "HSK",
      area: "Tiếng Trung",
      description:
        "Định hướng học tập theo nhu cầu tìm hiểu và chuẩn bị cho các cấp độ năng lực tiếng Trung HSK.",
    },
    {
      title: "Tiếng Trung thương mại",
      area: "Tiếng Trung",
      description:
        "Hướng học dành cho nhu cầu sử dụng tiếng Trung trong môi trường công việc và giao tiếp thương mại.",
    },
    {
      title: "Kỹ năng sống",
      area: "Năng lực sống",
      description:
        "Các chủ đề hỗ trợ người học phát triển kỹ năng cần thiết trong học tập, giao tiếp và đời sống.",
    },
    {
      title: "Quản trị cảm xúc",
      area: "Năng lực sống",
      description:
        "Hướng tới việc nhận diện, thấu hiểu và từng bước quản lý cảm xúc trong những tình huống phù hợp.",
    },
    {
      title: "Giá trị sống và hạnh phúc",
      area: "Phát triển con người",
      description:
        "Mở ra các chủ đề về giá trị sống, nội lực và sự phát triển con người trong hành trình trưởng thành.",
    },
  ],
  note: "Thông tin khóa học cụ thể chỉ được bổ sung khi có dữ liệu được xác nhận; trang hiện chưa có danh sách khóa học.",
} as const;

export const programGroupFilters = [
  { label: "Tất cả", value: "all" },
  { label: "Tiếng Trung", value: "Tiếng Trung" },
  { label: "Năng lực sống", value: "Năng lực sống" },
  { label: "Phát triển con người", value: "Phát triển con người" },
] as const;
