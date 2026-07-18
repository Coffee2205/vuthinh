import type { Course, ProgramCategory } from "@/types/course";

const programIds = {
  children: "10000000-0000-4000-8000-000000000001",
  communication: "10000000-0000-4000-8000-000000000002",
  hsk: "10000000-0000-4000-8000-000000000003",
  business: "10000000-0000-4000-8000-000000000004",
  lifeSkills: "10000000-0000-4000-8000-000000000005",
  emotions: "10000000-0000-4000-8000-000000000006",
  happiness: "10000000-0000-4000-8000-000000000007",
} as const;

export const fallbackPrograms: ProgramCategory[] = [
  [programIds.children, "Tiếng Trung thiếu nhi", "tieng-trung-thieu-nhi", "Nền tảng tiếng Trung phù hợp với lứa tuổi.", "Trẻ em bắt đầu làm quen với tiếng Trung qua lộ trình có cấu trúc.", "Trẻ em", true],
  [programIds.communication, "Tiếng Trung giao tiếp", "tieng-trung-giao-tiep", "Phát triển khả năng sử dụng tiếng Trung trong đời sống.", "Các chương trình tập trung vào nghe, nói và phản xạ giao tiếp.", "Người học có nhu cầu giao tiếp", true],
  [programIds.hsk, "Luyện thi HSK", "luyen-thi-hsk", "Lộ trình học và ôn tập theo các cấp độ HSK.", "Các khóa xây nền tảng và chuẩn bị kiến thức theo cấp độ HSK.", "Người học có mục tiêu HSK", true],
  [programIds.business, "Tiếng Trung thương mại", "tieng-trung-thuong-mai", "Tiếng Trung cho bối cảnh công việc và thương mại.", "Hướng học phục vụ nhu cầu giao tiếp trong môi trường nghề nghiệp.", "Người đi làm", true],
  [programIds.lifeSkills, "Kỹ năng sống", "ky-nang-song", "Các năng lực thiết thực cho học tập và đời sống.", "Chương trình bổ trợ giúp người học phát triển kỹ năng cá nhân.", "Trẻ em và gia đình", false],
  [programIds.emotions, "Quản trị cảm xúc", "quan-tri-cam-xuc", "Nhận diện và từng bước quản lý cảm xúc.", "Các chủ đề bổ trợ về nhận diện, diễn đạt và quản trị cảm xúc.", "Trẻ em và gia đình", false],
  [programIds.happiness, "Giá trị sống và hạnh phúc", "gia-tri-song-va-hanh-phuc", "Nuôi dưỡng nội lực và giá trị sống tích cực.", "Các chủ đề về giá trị sống, hạnh phúc và phát triển nội tâm.", "Cá nhân và gia đình", false],
].map(([id, name, slug, shortDescription, description, targetAudience, isCore], index) => ({
  id: String(id), name: String(name), slug: String(slug), shortDescription: String(shortDescription),
  description: String(description), imageUrl: null, targetAudience: String(targetAudience),
  displayOrder: index + 1, courseCount: index < 3 ? (index === 2 ? 2 : 1) : 0, isCore: Boolean(isCore),
}));

function category(id: string, name: string, slug: string, programSlug: string) {
  const program = fallbackPrograms.find((item) => item.slug === programSlug)!;
  return { id, name, slug, program: { id: program.id, name: program.name, slug: program.slug } };
}

const shared = {
  thumbnailUrl: null,
  currency: "VND",
  status: "published",
  textbookSummary: "Giáo trình phát triển nội bộ đang ở trạng thái demo và cần đội ngũ chuyên môn duyệt trước khi công bố.",
  expectedOutcomesSummary: "Kết quả phụ thuộc vào đầu vào, mức độ tham gia và quá trình luyện tập của từng người học.",
} as const;

export const fallbackCourses: Course[] = [
  {
    ...shared, id: "30000000-0000-4000-8000-000000000001", title: "Tiếng Trung thiếu nhi cơ bản", slug: "tieng-trung-thieu-nhi-co-ban",
    shortDescription: "Khóa học demo giúp trẻ làm quen với âm thanh, từ vựng và mẫu câu tiếng Trung cơ bản trong những chủ đề gần gũi.",
    description: "Nội dung phát triển dành cho việc kiểm tra giao diện. Khóa học tổ chức kiến thức theo từng chặng ngắn, ưu tiên sự phù hợp với độ tuổi và thói quen học đều đặn.",
    category: category("20000000-0000-4000-8000-000000000001", "Thiếu nhi cơ bản", "thieu-nhi-co-ban", "tieng-trung-thieu-nhi"),
    levelLabel: "Nhập môn", levelFrom: "Chưa biết", levelTo: "Cơ bản", sessionCount: 36, sessionDurationMinutes: 60, durationText: "Khoảng 4–5 tháng", classSizeText: "Liên hệ để được tư vấn", studyFormat: "hybrid",
    originalPrice: null, price: null, priceDisplay: "Liên hệ", discountPercent: null, isFeatured: true, publishedAt: "2026-07-01T00:00:00Z", displayOrder: 1,
    audiences: [{ id: "a11", content: "Trẻ bắt đầu làm quen với tiếng Trung.", displayOrder: 1 }, { id: "a12", content: "Gia đình cần một lộ trình nền tảng có cấu trúc.", displayOrder: 2 }],
    roadmapStages: [{ id: "r11", title: "Làm quen âm thanh", description: "Nhận biết âm và nhịp điệu tiếng Trung.", objective: "Tạo nền tảng phát âm ban đầu.", sessionCount: 12, displayOrder: 1 }, { id: "r12", title: "Từ vựng và mẫu câu", description: "Học theo các chủ đề gần gũi.", objective: "Sử dụng mẫu câu ngắn trong ngữ cảnh quen thuộc.", sessionCount: 24, displayOrder: 2 }],
    curriculumItems: [{ id: "c11", title: "Chủ đề bản thân và gia đình", description: "Từ vựng, mẫu câu cơ bản.", materialType: "Module", note: "Dữ liệu demo", displayOrder: 1 }, { id: "c12", title: "Chủ đề trường lớp", description: "Tình huống giao tiếp gần gũi.", materialType: "Module", note: "Dữ liệu demo", displayOrder: 2 }],
    outcomes: [{ id: "o11", content: "Nhận biết và sử dụng một số từ, mẫu câu cơ bản đã học.", displayOrder: 1 }],
  },
  {
    ...shared, id: "30000000-0000-4000-8000-000000000002", title: "Tiếng Trung giao tiếp cơ bản", slug: "tieng-trung-giao-tiep-co-ban",
    shortDescription: "Khóa học demo xây nền nghe nói và phản xạ trong các tình huống giao tiếp thông dụng dành cho người mới bắt đầu.",
    description: "Lộ trình tập trung vào phát âm, từ vựng và hội thoại thực hành. Thông tin hiện dùng để kiểm tra module và cần được xác nhận trước production.",
    category: category("20000000-0000-4000-8000-000000000002", "Giao tiếp cơ bản", "giao-tiep-co-ban", "tieng-trung-giao-tiep"),
    levelLabel: "Cơ bản", levelFrom: "Chưa biết", levelTo: "Giao tiếp nền tảng", sessionCount: 40, sessionDurationMinutes: 90, durationText: "Khoảng 5 tháng", classSizeText: "Liên hệ để được tư vấn", studyFormat: "online",
    originalPrice: null, price: 4200000, priceDisplay: null, discountPercent: null, isFeatured: true, publishedAt: "2026-07-05T00:00:00Z", displayOrder: 2,
    audiences: [{ id: "a21", content: "Người mới bắt đầu học tiếng Trung.", displayOrder: 1 }, { id: "a22", content: "Người ưu tiên khả năng giao tiếp thực tế.", displayOrder: 2 }],
    roadmapStages: [{ id: "r21", title: "Phát âm nền tảng", description: "Làm quen hệ thống âm và thanh điệu.", objective: "Đọc và nghe phân biệt âm cơ bản.", sessionCount: 10, displayOrder: 1 }, { id: "r22", title: "Giao tiếp theo chủ đề", description: "Thực hành hội thoại thông dụng.", objective: "Phản xạ trong tình huống quen thuộc.", sessionCount: 30, displayOrder: 2 }],
    curriculumItems: [{ id: "c21", title: "Phát âm và thanh điệu", description: "Nền tảng ngữ âm.", materialType: "Module", note: "Dữ liệu demo", displayOrder: 1 }, { id: "c22", title: "Hội thoại đời sống", description: "Chào hỏi, giới thiệu, mua sắm và di chuyển.", materialType: "Module", note: "Dữ liệu demo", displayOrder: 2 }],
    outcomes: [{ id: "o21", content: "Thực hiện hội thoại ngắn trong một số tình huống đã luyện tập.", displayOrder: 1 }],
  },
  {
    ...shared, id: "30000000-0000-4000-8000-000000000003", title: "Từ mất gốc đến HSK 3", slug: "tu-mat-goc-den-hsk-3",
    shortDescription: "Lộ trình demo nhiều giai đoạn dành cho người cần xây lại nền tảng và định hướng kiến thức tới cấp độ HSK 3.",
    description: "Khóa học minh họa cách tổ chức một lộ trình dài theo từng chặng. Đây không phải cam kết thi đỗ hay đầu ra; dữ liệu cần chuyên môn duyệt trước khi sử dụng thực tế.",
    category: category("20000000-0000-4000-8000-000000000003", "Lộ trình HSK", "lo-trinh-hsk", "luyen-thi-hsk"),
    levelLabel: "Cơ bản → HSK 3", levelFrom: "Mất gốc", levelTo: "HSK 3", sessionCount: 68, sessionDurationMinutes: 90, durationText: "Khoảng 8–9 tháng", classSizeText: "Liên hệ để được tư vấn", studyFormat: "hybrid",
    originalPrice: 7200000, price: 6480000, priceDisplay: null, discountPercent: 10, isFeatured: true, publishedAt: "2026-07-10T00:00:00Z", displayOrder: 3,
    audiences: [{ id: "a31", content: "Người học bị hổng kiến thức nền tảng.", displayOrder: 1 }, { id: "a32", content: "Người có mục tiêu học theo cấu trúc kiến thức HSK 3.", displayOrder: 2 }],
    roadmapStages: [{ id: "r31", title: "Khôi phục nền tảng", description: "Ôn phát âm, từ vựng và cấu trúc căn bản.", objective: "Củng cố kiến thức đầu vào.", sessionCount: 16, displayOrder: 1 }, { id: "r32", title: "Xây năng lực sơ cấp", description: "Phát triển bốn kỹ năng theo chủ đề.", objective: "Sử dụng kiến thức trong bài tập và giao tiếp cơ bản.", sessionCount: 28, displayOrder: 2 }, { id: "r33", title: "Củng cố theo HSK 3", description: "Hệ thống hóa kiến thức và làm quen dạng bài.", objective: "Hiểu cấu trúc kiến thức của cấp độ.", sessionCount: 24, displayOrder: 3 }],
    curriculumItems: [{ id: "c31", title: "Ngữ âm và chữ Hán", description: "Kiến thức nền.", materialType: "Module", note: "Dữ liệu demo", displayOrder: 1 }, { id: "c32", title: "Từ vựng và ngữ pháp sơ cấp", description: "Nội dung theo cấp độ.", materialType: "Module", note: "Dữ liệu demo", displayOrder: 2 }, { id: "c33", title: "Luyện tập tổng hợp", description: "Bài tập nghe, đọc và viết.", materialType: "Module", note: "Dữ liệu demo", displayOrder: 3 }],
    outcomes: [{ id: "o31", content: "Hệ thống lại kiến thức nền và làm quen phạm vi kiến thức HSK 3.", displayOrder: 1 }, { id: "o32", content: "Xác định điểm cần tiếp tục luyện tập sau khóa học.", displayOrder: 2 }],
  },
  {
    ...shared, id: "30000000-0000-4000-8000-000000000004", title: "Luyện thi HSK 4", slug: "luyen-thi-hsk-4",
    shortDescription: "Khóa học demo hệ thống hóa kiến thức và phương pháp làm bài cho người đang chuẩn bị theo định hướng HSK 4.",
    description: "Chương trình minh họa gồm rà soát nền tảng, củng cố kiến thức và luyện tập. Không kèm cam kết điểm số hoặc tỷ lệ thi đỗ.",
    category: category("20000000-0000-4000-8000-000000000004", "Luyện thi HSK", "luyen-thi-hsk", "luyen-thi-hsk"),
    levelLabel: "HSK 4", levelFrom: "Tương đương HSK 3", levelTo: "HSK 4", sessionCount: 48, sessionDurationMinutes: 90, durationText: "Khoảng 6 tháng", classSizeText: "Liên hệ để được tư vấn", studyFormat: "offline",
    originalPrice: null, price: 5600000, priceDisplay: null, discountPercent: null, isFeatured: false, publishedAt: "2026-07-12T00:00:00Z", displayOrder: 4,
    audiences: [{ id: "a41", content: "Người có nền tảng tương đương HSK 3.", displayOrder: 1 }, { id: "a42", content: "Người cần hệ thống hóa kiến thức theo định hướng HSK 4.", displayOrder: 2 }],
    roadmapStages: [{ id: "r41", title: "Đánh giá và củng cố", description: "Rà soát kiến thức nền.", objective: "Xác định phần kiến thức cần bổ sung.", sessionCount: 12, displayOrder: 1 }, { id: "r42", title: "Hệ thống kiến thức", description: "Ôn theo các nhóm nội dung.", objective: "Củng cố phạm vi kiến thức cấp độ.", sessionCount: 24, displayOrder: 2 }, { id: "r43", title: "Luyện tập", description: "Làm quen cấu trúc và quản lý thời gian.", objective: "Hoàn thiện chiến lược làm bài cá nhân.", sessionCount: 12, displayOrder: 3 }],
    curriculumItems: [{ id: "c41", title: "Từ vựng và ngữ pháp HSK 4", description: "Hệ thống kiến thức.", materialType: "Module", note: "Dữ liệu demo", displayOrder: 1 }, { id: "c42", title: "Kỹ năng làm bài", description: "Bài tập theo dạng.", materialType: "Bài luyện", note: "Dữ liệu demo", displayOrder: 2 }],
    outcomes: [{ id: "o41", content: "Hiểu rõ hơn cấu trúc kiến thức và dạng bài cần luyện tập.", displayOrder: 1 }],
  },
];
