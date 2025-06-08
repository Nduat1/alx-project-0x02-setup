import Card from '@/components/common/Card';
import Header from '@/components/layout/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <Card title="Card 1" content="This is the first card." />
      <Card title="Card 2" content="This is the second card." />
    </>
  );
}
