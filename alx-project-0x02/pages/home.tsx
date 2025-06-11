import React, { useState } from 'react';
import PostModal from '@/components/common/PostModal';
import Card from '@/components/common/Card';
import Header from '@/components/layout/Header';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>
        <button
          onClick={() => setModalOpen(true)}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Post
        </button>
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
        {modalOpen && (
          <PostModal
            onClose={() => setModalOpen(false)}
            onSubmit={handleAddPost}
          />
        )}
      </div>
    </>
  );
}
