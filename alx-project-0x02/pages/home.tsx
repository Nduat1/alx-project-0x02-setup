// pages/home.tsx
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

export default function HomePage() {
  // Initial hardcoded cards
  const [posts, setPosts] = useState([
    { title: 'First Card', content: 'This is the first card.' },
    { title: 'Second Card', content: 'This is the second card.' },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>

        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        >
          Add New Post
        </button>

        <div className="grid gap-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        {modalOpen && (
          <PostModal
            onClose={() => setModalOpen(false)}
            onSubmit={handleAddPost}
          />
        )}
      </main>
    </>
  );
}
