export const heroContent = {
  eyebrow: "Tiếng Trung là trọng tâm",
  title: {
    prefix: "Nuôi dưỡng",
    emphasis: "ngôn ngữ",
    suffix: "tư duy và nội lực cho mỗi gia đình.",
  },
  description:
    "Vũ Thịnh đồng hành cùng trẻ em, người trẻ và phụ huynh qua chương trình tiếng Trung, kỹ năng sống và phát triển nội tâm.",
  primaryAction: {
    href: "/trial-registration",
    label: "Đăng ký học thử",
  },
  secondaryAction: {
    href: "/programs",
    label: "Khám phá chương trình",
  },
  focusAreas: [
    {
      label: "Trọng tâm đào tạo",
      title: "Tiếng Trung",
      description: "Thiếu nhi · Giao tiếp · HSK · Thương mại",
      tone: "blue",
    },
    {
      label: "Phát triển toàn diện",
      title: "Kỹ năng & nội lực",
      description: "Tư duy · Cảm xúc · Giá trị sống",
      tone: "green",
    },
  ],
} as const;

export const trustContent = {
  eyebrow: "Đồng hành có định hướng",
  title: "Điều phụ huynh có thể kỳ vọng trong hành trình học",
  description:
    "Mỗi chương trình được định hướng để người học phát triển ngôn ngữ song song với tư duy, cảm xúc và những giá trị bền vững.",
  principles: [
    {
      number: "01",
      title: "Mục tiêu học tập rõ ràng",
      description:
        "Chương trình được giới thiệu theo độ tuổi, nhu cầu và mục tiêu để gia đình dễ lựa chọn hướng học phù hợp.",
    },
    {
      number: "02",
      title: "Tiếng Trung là nền tảng trọng tâm",
      description:
        "Nội dung ngôn ngữ được ưu tiên, từ thiếu nhi, giao tiếp đến HSK và tiếng Trung thương mại.",
    },
    {
      number: "03",
      title: "Phát triển vượt ra ngoài ngôn ngữ",
      description:
        "Tư duy, kỹ năng sống và quản trị cảm xúc được kết nối để hỗ trợ sự trưởng thành toàn diện.",
    },
    {
      number: "04",
      title: "Gia đình được lắng nghe",
      description:
        "Phụ huynh và người học có thể đăng ký học thử hoặc tư vấn trước khi lựa chọn chương trình đồng hành.",
    },
  ],
} as const;

export const programsContent = {
  eyebrow: "Chương trình học",
  title: "Bắt đầu từ ngôn ngữ, mở rộng đến năng lực sống",
  description:
    "Khám phá các hướng học được xây dựng cho nhiều độ tuổi và mục tiêu, trong đó tiếng Trung là nền tảng đào tạo trọng tâm.",
  action: {
    href: "/programs",
    label: "Xem tất cả chương trình",
  },
  groups: [
    {
      key: "chinese",
      symbol: "中",
      label: "Trọng tâm",
      title: "Tiếng Trung",
      description:
        "Phát triển năng lực ngôn ngữ theo nhu cầu học tập, giao tiếp và công việc.",
      topics: ["Thiếu nhi", "Giao tiếp", "HSK", "Thương mại"],
      featured: true,
    },
    {
      key: "life-skills",
      symbol: "心",
      label: "Năng lực sống",
      title: "Kỹ năng & cảm xúc",
      description:
        "Bồi dưỡng tư duy, kỹ năng sống và khả năng nhận diện, quản trị cảm xúc.",
      topics: ["Kỹ năng sống", "Quản trị cảm xúc"],
      featured: false,
    },
    {
      key: "inner-growth",
      symbol: "光",
      label: "Phát triển con người",
      title: "Giá trị sống & hạnh phúc",
      description:
        "Nuôi dưỡng nhận thức, giá trị tích cực và sự phát triển nội tâm bền vững.",
      topics: ["Giá trị sống", "Phát triển nội tâm"],
      featured: false,
    },
  ],
} as const;
