export type BaseProps<T> = {
  className?: string;
} & Omit<T, 'className'>;

export type UserId = number;

export type UserT = {
  id: UserId;
  name: string;
  imageUrl?: string;
};

export type MessageT = {
  id: number;
  text: string;
  userId: number;
};
