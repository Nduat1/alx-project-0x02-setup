import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-gray-100 p-4 flex justify-center">
      <div className="flex space-x-12">
        <Link href="/home" className="text-gray-800 hover:text-gray-600">Home</Link>
        <Link href="/about" className="text-gray-800 hover:text-gray-600">About</Link>
        <Link href="/posts" className="text-gray-800 hover:text-gray-600">Posts</Link>
      </div>
    </nav>
  );
}
