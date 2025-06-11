export interface CardProps {
  title: string;
  content: string
}

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonShape = 'rounded-sm' | 'rounded-md' | 'rounded-full';

export interface ButtonProps {
  size: ButtonSize;
  shape: ButtonShape;
  children: React.ReactNode;
}

export interface PostProps{
  title: string;
  content: string;
  userId: number;
}