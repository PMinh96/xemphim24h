import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

interface Comment {
  id: number;
  author: string;
  avatar?: string;
  content: string;
  time: string;
  likes?: number;
}

interface CommentsProps {
  comments: Comment[];
}

export const Comments = ({ comments }: CommentsProps) => {
  return (
    <div className="mt-6 bg-gray-800 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-4">
        <ChatBubbleLeftIcon className="w-5 h-5 text-white" />
        <h2 className="text-lg font-semibold text-white">Bình luận</h2>
        <span className="text-sm text-gray-300">({comments.length})</span>
      </div>

      {/* Comment Input */}
      <div className="mb-6">
        <textarea
          placeholder="Viết bình luận..."
          className="w-full p-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none placeholder-gray-400"
          rows={3}
        />
        <div className="flex justify-end mt-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Gửi
          </button>
        </div>
      </div>

      {/* Comments List */}
      {comments.length > 0 ? (
        <>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-3 pb-4 border-b border-gray-700 last:border-0">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  {comment.avatar ? (
                    <img
                      src={comment.avatar}
                      alt={comment.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold">
                      {comment.author.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Comment Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-white">{comment.author}</span>
                    <span className="text-xs text-gray-400">{comment.time}</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-2">{comment.content}</p>
                  <div className="flex items-center gap-4">
                    <button className="text-xs text-gray-400 hover:text-blue-400">
                      Thích
                    </button>
                    <button className="text-xs text-gray-400 hover:text-blue-400">
                      Phản hồi
                    </button>
                    {comment.likes !== undefined && comment.likes > 0 && (
                      <span className="text-xs text-gray-400">
                        {comment.likes} lượt thích
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-4 text-center">
            <button className="text-sm text-blue-400 hover:text-blue-300">
              Xem thêm bình luận
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-8 text-gray-400">
          <p>Chưa có bình luận nào. Hãy là người đầu tiên bình luận!</p>
        </div>
      )}
    </div>
  );
};
