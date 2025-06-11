// pages/users.tsx
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { GetStaticProps } from 'next';

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}

interface UsersPageProps {
  users: User[];
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return {
    props: {
      users,
    },
  };
};

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <>
      <Header />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">User List</h1>
        <div className="grid gap-4">
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              email={user.email}
              address={`${user.address.street}, ${user.address.city}`}
            />
          ))}
        </div>
      </main>
    </>
  );
}
