export type BaseProps<T> = {
  className?: string;
} & Omit<T, 'className'>;

export type UserT = {
  id: number;
  name: string;
  imageUrl?: string;
};
