import { type PostProps } from '@/interfaces';

const PostCard = ({ title, content, userId }: PostProps) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="mb-2">{content}</p>
      <span className="text-sm text-gray-600">User ID: {userId}</span>
    </div>
  );
};

export default PostCard;
