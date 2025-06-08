import { useState } from 'react';

interface PostModalProps {
  onAddPost: (title: string, content: string) => void;
}

const PostModal = ({ onAddPost }: PostModalProps) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-lg font-bold mb-2">New Post</h2>
        <input className="border p-2 mb-2 w-full" placeholder="Title" onChange={e => setTitle(e.target.value)} />
        <textarea className="border p-2 mb-2 w-full" placeholder="Content" onChange={e => setContent(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2" onClick={() => onAddPost(title, content)}>Submit</button>
      </div>
    </div>
  );
};

export default PostModal;
