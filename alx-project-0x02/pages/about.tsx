import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="space-x-4 p-4">
        <Button size="small" shape="rounded-sm">Small</Button>
        <Button size="medium" shape="rounded-md">Medium</Button>
        <Button size="large" shape="rounded-full">Large</Button>
      </div>
    </>
  );
}
