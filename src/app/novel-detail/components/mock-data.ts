/* ================= MOCK DATA ================= */

export const mockNovel = {
  id: 'van-co-de-nhat-than',
  title: 'Vạn Cổ Đệ Nhất Thần (Full)',
  author: 'Phong Thanh Dương',
  genres: ['Tiên Hiệp', 'Huyền Huyễn', 'Dị Giới', 'Hài Hước', 'Linh Dị'],
  totalChapters: 6507,
  source: 'Sưu tầm',
  status: 'Đang cập nhật',
  poster: '/demo/dune.jpg',
  description: `"Diên nhỉ, Tiểu Thiên Nhất, bên này."  
  
An Tuyết Thiên như là hòa tan đông tuyết, kêu vô cùng thân mật, còn ngoắc.  
  
"“Cất, Không biết xấu hố." Ngụy Ôn Lan trợn mắt một cái, thầm thăm mãng một câu.  
  
"Đồng cảm." An Nịnh cũng nói.  
  
Tựa hồ tại chán ghét hai nữ nhân này phương diện, mẹ con các nàng lại đã đạt thành nhất trí.  
  
Làm Mộc Đông Diên cùng An Thiên Nhất đến lúc, tại chỗ 3000 bộ lạc dự tiệc người, cơ hồ đều ngừng tự mình nói chuyện với nhau, mắt lộ ra vẻ sùng kính, nhìn về phía cái này quý phụ cùng quý tử.  
  
"Cô cô." Mộc Đông Diên ôn nhu mim cười, thanh âm rất dễ nghe, cũng làm cho rất thân mật, mang theo thiểu niên kia An Thiên Nhất, leo lên Tuyết Tĩnh hào.  
  
"Thiên Nhất." An Sương, An Huyền Minh, An Như Yên chờ Cố bảng thiên tài, đều hướng thiếu niên tóc vàng kia gật đầu.`,
};

// Tạo danh sách chương mẫu
export const mockChapters = Array.from({ length: 100 }).map((_, i) => ({
  id: i + 1,
  title: i === 0 
    ? 'Chiến Hồn Thánh Thú 1' 
    : i === 1 
    ? 'Chiến Hồn Thánh Thú 2'
    : i === 2
    ? 'Luyện Ngục Vĩnh Hằng Phượng Hoàng 1'
    : i === 3
    ? 'Luyện Ngục Vĩnh Hằng Phượng Hoàng 2'
    : i === 4
    ? 'Luyện Ngục Vĩnh Hằng Phượng Hoàng 3'
    : i === 5
    ? 'Tờ Giấy Ly Hôn'
    : i === 6
    ? 'Tờ Giấy Ly Hôn 2'
    : i === 7
    ? 'Heo Nái Leo Cây'
    : i === 8
    ? 'Heo Nái Leo Cây 2'
    : i === 9
    ? 'Gông Xiềng Huyết Mạch1'
    : i === 10
    ? 'Gông Xiềng Huyết Mạch2'
    : i === 11
    ? 'Tử Đồng Trọng Minh Điểu1'
    : i === 12
    ? 'Tử Đồng Trọng Minh Điểu2'
    : i === 13
    ? 'Cánh Tay Hắc Ám 1'
    : i === 14
    ? 'Cánh Tay Hắc Ám 2'
    : i === 15
    ? 'Hồng Nhan Họa Thủy'
    : i === 16
    ? 'Cơn Điên Của Thiếu Niên'
    : i === 17
    ? 'Thú Bản Mệnh Nhất Giai 1'
    : i === 18
    ? 'Thủ Bản Mệnh Nhất Giai 2'
    : i === 19
    ? 'Huyết Hỏa Thứ 1'
    : i === 20
    ? 'Huyết Hỏa Thứ 2'
    : i === 21
    ? 'Nghịch Tử!!!'
    : i === 22
    ? 'Liễu Thiên Dương'
    : i === 23
    ? 'Liễu Thiên Dương 2'
    : i === 24
    ? 'Hỏa Lăng Sơn'
    : i === 25
    ? 'Hỏa Lăng Sơn 2'
    : i === 26
    ? 'Tiên Giáng Trần 1'
    : i === 27
    ? 'Tiên Giáng Trần 2'
    : i === 28
    ? 'Khương Phi Linh'
    : i === 29
    ? 'Lam Vĩ Độc Hạt'
    : i === 30
    ? 'Lam Vĩ Độc Hạt 2'
    : i === 31
    ? 'Trương Tử Hiên 1'
    : i === 32
    ? 'Trương Tử Hiên 2'
    : i === 33
    ? 'Thanh Công Chúa'
    : i === 34
    ? 'Lời Thề Của Thiếu Niên'
    : i === 35
    ? 'Lời Thề Của Thiếu Niên 2'
    : i === 36
    ? 'Ngạc Ngư Lưng Đạo Khổng Lồ'
    : i === 37
    ? 'Phi Lưu Kiếm Pháp'
    : i === 38
    ? 'Núi Hoang Đồi Vắng'
    : i === 39
    ? 'Giếng Vô Danh'
    : i === 40
    ? 'Mê Linh Chi Đồng 1'
    : i === 41
    ? 'Mê Linh Chi Đồng 2'
    : i === 42
    ? 'Mạch Huyễn Linh'
    : i === 43
    ? 'Mạch Huyễn Linh 2'
    : i === 44
    ? 'Vô Phong Khách Điếm'
    : i === 45
    ? 'Lấy Một Chọi Bảy'
    : i === 46
    ? 'Xiềng Xích Lôi Hỏa 1'
    : i === 47
    ? 'Xiềng Xích Lôi Hỏa 2'
    : i === 48
    ? 'Đệ Nhất Đệ Tử 1'
    : i === 49
    ? 'Đệ Nhất Đệ Tử 2'
    : i === 50
    ? 'Đệ Nhất Đệ Tử 3'
    : i === 51
    ? 'Tinh Phủ Thần Cung'
    : i === 52
    ? 'Hiện Thực 1'
    : i === 53
    ? 'Hiện Thực 2'
    : i === 54
    ? 'Lời Thề'
    : i === 55
    ? 'Tinh Thần Thiên Cung'
    : i === 56
    ? 'Tinh Thần Thiên Cung 2'
    : i === 57
    ? 'Minh Hỏa Quỷ Trảo'
    : i === 58
    ? 'Ngự Thú Sư Song Sinh 1'
    : i === 59
    ? 'Ngự Thú Sư Song Sinh 2'
    : i === 60
    ? 'Viêm Hoàng Chiến Trường'
    : i === 61
    ? 'Mộ Uyển Thượng Sư'
    : i === 62
    ? 'Hào Quang Óng Ánh'
    : i === 63
    ? 'Sí Liệt Hỏa Điểu'
    : i === 64
    ? 'Lâm Tiêu Tiêu'
    : i === 65
    ? 'Tinh Ma Bằng'
    : i === 66
    ? 'Sí Tinh Chi Nhãn!'
    : i === 67
    ? 'Linh Nguyên Thần Thông'
    : i === 68
    ? 'Bạch Liên Hoa'
    : i === 69
    ? 'Đợi Không Được 10 Năm'
    : i === 70
    ? 'Phong Linh Hạc'
    : i === 71
    ? 'Linh Phong Đao Nhận'
    : i === 72
    ? 'Phượng Hoàng Điện Chủ'
    : i === 73
    ? 'Giết Hắn! !'
    : i === 74
    ? 'Luyện Ngục Chi Nguyên!'
    : i === 75
    ? 'Khinh Nhờn'
    : i === 76
    ? 'Viêm Hoàng Bảng!'
    : i === 77
    ? 'Hắn, Trở Về'
    : i === 78
    ? 'Để Thần Diệu Lăn Xuống Đến!'
    : i === 79
    ? 'Tinh Thần Chi Tử'
    : i === 80
    ? 'Lưu Tinh Phi Kiếm Quyết!'
    : i === 81
    ? 'Khí Huyết Ngút Trời! !'
    : i === 82
    ? 'Thần Phong Thành Thiếu Nữ'
    : i === 83
    ? 'Chúc Ngươi Đoạn Tử Tuyệt Tôn'
    : i === 84
    ? 'Thiên Chi Dực'
    : i === 85
    ? 'Thổi Bạo Diễm Đô!'
    : i === 86
    ? 'Lôi Minh Cung, Điện Quang Tiễn'
    : i === 87
    ? 'Điện Huyền Tiễn Pháp!'
    : i === 88
    ? 'Duy Ta Độc Tôn! !'
    : i === 89
    ? '1 Đường Đi Tốt'
    : i === 90
    ? 'Thiên Phủ Thiên Sư'
    : i === 91
    ? 'Sinh Mệnh Bảo Tàng!'
    : i === 92
    ? 'Ông Ngoại'
    : i === 93
    ? 'Tương Lai Phủ Chủ'
    : i === 94
    ? '4 Đại Thiên Vương'
    : i === 95
    ? 'Vệ Quốc Hào'
    : i === 96
    ? 'Mộ Dương'
    : i === 97
    ? 'Cố Nhân Chi Tử'
    : i === 98
    ? 'Ẩn Thế Hào Môn'
    : i === 99
    ? 'Mộ Dương Quà Sinh Nhật'
    : `Chương ${i + 1}`,
  number: i + 1,
}));

export const latestChapters = [
  { id: 6507, title: 'Thái Vũ Đỉnh!' },
  { id: 6506, title: 'Hoàng kim cự giản' },
  { id: 6505, title: 'đi ra đơn đấu' },
  { id: 6504, title: 'Ngươi không có đế hoàng mệnh' },
  { id: 6503, title: 'Ta mượn dùng một chút' },
];
