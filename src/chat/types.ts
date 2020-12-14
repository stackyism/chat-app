export type BaseProps<T> = {
  className?: string;
} & Omit<T, 'className'>;
