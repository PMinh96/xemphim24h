/* ================= MOCK DATA ================= */

// Hàm lấy nội dung chương dựa trên chapterId
export const getChapterContent = (novelId: string, chapterId: number) => {
  const totalChapters = 6507;
  
  // Mock nội dung chương
  const chapterContents: Record<number, { title: string; content: string }> = {
    1: {
      title: 'Chiến Hồn Thánh Thú 1',
      content: `anh minh bếu

anh minh bếu là một câu chuyện kỳ lạ về cuộc sống của một người đàn ông tên là Anh Minh Bếu. Anh ta sống trong một thế giới đầy những điều bí ẩn và kỳ diệu.

Mỗi ngày, Anh Minh Bếu thức dậy và bắt đầu một hành trình mới. Anh ta không biết mình sẽ đi đâu, nhưng anh ta biết rằng mình phải tiếp tục bước đi.

Trong thế giới của Anh Minh Bếu, mọi thứ đều có thể xảy ra. Có những người bạn kỳ lạ, những cuộc phiêu lưu đầy thú vị, và những bí mật chưa được khám phá.

Anh Minh Bếu không phải là một người bình thường. Anh ta có khả năng nhìn thấy những điều mà người khác không thể thấy. Anh ta có thể cảm nhận được những rung động của vũ trụ, và anh ta biết rằng mình có một sứ mệnh đặc biệt.

Nhưng sứ mệnh đó là gì? Anh Minh Bếu vẫn chưa biết. Anh ta chỉ biết rằng mình phải tiếp tục tìm kiếm, tiếp tục khám phá, và tiếp tục sống.

Trong hành trình của mình, Anh Minh Bếu đã gặp rất nhiều người. Có những người tốt, có những người xấu, và có những người ở giữa. Nhưng tất cả họ đều dạy cho Anh Minh Bếu một điều gì đó.

Anh Minh Bếu học được rằng cuộc sống không phải là một đường thẳng. Nó là một con đường quanh co, đầy những ngã rẽ và những bất ngờ. Và điều quan trọng nhất là phải luôn giữ được tinh thần lạc quan và niềm tin vào tương lai.

Vì vậy, Anh Minh Bếu tiếp tục bước đi. Anh ta không biết mình sẽ đi đâu, nhưng anh ta biết rằng mình sẽ tìm thấy câu trả lời. Và khi đó, anh ta sẽ hiểu được ý nghĩa thực sự của cuộc sống.

anh minh bếu - đó là câu chuyện của một người đàn ông đang tìm kiếm ý nghĩa của cuộc sống. Và có lẽ, đó cũng là câu chuyện của tất cả chúng ta.`,
    },
  };

  const chapter = chapterContents[chapterId] || {
    title: `Chương ${chapterId}`,
    content: `Nội dung chương ${chapterId} đang được cập nhật...\n\nanh minh bếu`,
  };

  return {
    novelId,
    chapterId,
    chapterTitle: chapter.title,
    novelTitle: 'Vạn Cổ Đệ Nhất Thần (Full)',
    content: chapter.content,
    prevChapter: chapterId > 1 ? chapterId - 1 : null,
    nextChapter: chapterId < totalChapters ? chapterId + 1 : null,
    totalChapters,
  };
};

// Export default cho chương 1
export const mockChapterContent = getChapterContent('van-co-de-nhat-than', 1);
