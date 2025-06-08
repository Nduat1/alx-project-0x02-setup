import { useState } from 'react';
import PostModal from '../components/common/PostModal';
import Card from '../components/common/Card';
import Header from '../components/layout/Header';

export default function HomePage() {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
    setShowModal(false);
  };

  return (
    <>
      <Header />
      <button className="bg-green-500 text-white p-2 my-4" onClick={() => setShowModal(true)}>Add Post</button>
      {showModal && <PostModal onAddPost={handleAddPost} />}
      {posts.map((post, index) => <Card key={index} title={post.title} content={post.content} />)}
    </>
  );
}
