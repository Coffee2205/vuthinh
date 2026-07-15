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

export const learningJourneyContent = {
  eyebrow: "Hành trình học tập",
  title: "Mỗi hành trình bắt đầu từ việc hiểu đúng nhu cầu",
  description:
    "Một quy trình đơn giản giúp gia đình và người học có thêm thông tin trước khi lựa chọn chương trình phù hợp.",
  steps: [
    {
      number: "01",
      title: "Chia sẻ nhu cầu",
      description:
        "Cho biết độ tuổi, mục tiêu học tập và điều người học đang quan tâm hoặc gặp khó khăn.",
    },
    {
      number: "02",
      title: "Học thử hoặc tư vấn",
      description:
        "Trải nghiệm buổi học thử hoặc đăng ký trao đổi để hiểu thêm về hướng học phù hợp.",
    },
    {
      number: "03",
      title: "Lựa chọn chương trình",
      description:
        "Cân nhắc nội dung, mục tiêu và hình thức học trước khi quyết định đồng hành.",
    },
    {
      number: "04",
      title: "Bắt đầu và trao đổi",
      description:
        "Tham gia chương trình đã chọn và duy trì trao đổi với trung tâm trong quá trình học.",
    },
  ],
} as const;

export const expertContent = {
  eyebrow: "Chuyên gia đồng hành",
  title: "Kết nối giáo dục với sự thấu hiểu mỗi gia đình",
  description:
    "Chuyên gia đồng hành trong việc lắng nghe nhu cầu, định hướng chương trình và kết nối ngôn ngữ với kỹ năng sống, cảm xúc và giá trị con người.",
  status: "Thông tin hồ sơ chuyên gia đang được cập nhật",
  note: "Tên, hình ảnh, kinh nghiệm và chứng chỉ sẽ chỉ hiển thị sau khi được xác nhận.",
  focusAreas: ["Định hướng học tập", "Tiếng Trung", "Kỹ năng & cảm xúc"],
  profileAction: { href: "/expert", label: "Xem trang chuyên gia" },
  consultationAction: { href: "/consultation", label: "Đăng ký tư vấn" },
} as const;

export const studentOutcomesContent = {
  eyebrow: "Thành quả học viên",
  title: "Ghi nhận hành trình bằng những câu chuyện có thật",
  description: "Khu vực này sẽ chỉ công bố kết quả và hình ảnh đã được học viên, phụ huynh cùng trung tâm xác nhận.",
  status: "Dữ liệu thành quả đang được cập nhật",
  note: "Chúng tôi không sử dụng số liệu, hình ảnh hoặc kết quả minh họa chưa được kiểm chứng.",
  action: { href: "/success-stories", label: "Xem trang thành quả" },
} as const;

export const parentTestimonialsContent = {
  eyebrow: "Cảm nhận phụ huynh",
  title: "Lắng nghe những chia sẻ được xác nhận từ gia đình",
  description:
    "Phản hồi từ phụ huynh giúp hành trình đồng hành trở nên rõ ràng và đáng tin cậy hơn.",
  status: "Cảm nhận phụ huynh đang được cập nhật",
  note: "Chúng tôi chỉ đăng tải chia sẻ, tên và hình ảnh khi nội dung đã được phụ huynh xác nhận và đồng ý công bố.",
} as const;

export const featuredContent = {
  eyebrow: "Góc kiến thức",
  title: "Nội dung đồng hành cùng việc học và nuôi dưỡng gia đình",
  description:
    "Blog và tài liệu miễn phí sẽ chia sẻ kiến thức về tiếng Trung, kỹ năng sống và phát triển con người.",
  channels: [
    {
      symbol: "文",
      title: "Bài viết nổi bật",
      status: "Các bài viết đã được biên tập và xuất bản đang được cập nhật.",
      action: { href: "/blog", label: "Khám phá Blog" },
    },
    {
      symbol: "本",
      title: "Tài liệu miễn phí",
      status: "Các tài liệu có link xem hoặc tải hợp lệ đang được cập nhật.",
      action: { href: "/resources", label: "Xem Tài liệu" },
    },
  ],
  note: "Chỉ nội dung đã được xác nhận trạng thái xuất bản và quyền sử dụng mới xuất hiện tại đây.",
} as const;
