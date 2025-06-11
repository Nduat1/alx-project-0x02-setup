import { type UserProps } from '@/interfaces';

const UserCard = ({ name, email, address }: UserProps) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-700">Email: {email}</p>
      <p className="text-sm text-gray-500">Address: {address}</p>
    </div>
  );
};

export default UserCard;
