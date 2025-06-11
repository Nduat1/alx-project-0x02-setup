// pages/posts.tsx
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type GetStaticProps } from 'next';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostsPageProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Fetched Posts</h1>
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </>
  );
}
