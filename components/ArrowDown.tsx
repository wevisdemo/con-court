import { twMerge } from 'tailwind-merge';

type Props = {
  color?: string;
  className?: string;
};

export default function ArrowDown({ color = 'white', className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="29"
      viewBox="0 0 23 29"
      fill="none"
      className={twMerge('h-auto', className)}
    >
      <path
        d="M13.2969 1.87305C13.2969 1.04462 12.6253 0.373047 11.7969 0.373047C10.9684 0.373047 10.2969 1.04462 10.2969 1.87305L13.2969 1.87305ZM10.7362 27.8712C11.322 28.457 12.2717 28.457 12.8575 27.8712L22.4035 18.3253C22.9893 17.7395 22.9893 16.7897 22.4035 16.2039C21.8177 15.6182 20.8679 15.6182 20.2822 16.2039L11.7969 24.6892L3.31159 16.2039C2.72581 15.6182 1.77606 15.6182 1.19027 16.2039C0.604485 16.7897 0.604485 17.7395 1.19027 18.3253L10.7362 27.8712ZM10.2969 1.87305L10.2969 26.8105L13.2969 26.8105L13.2969 1.87305L10.2969 1.87305Z"
        fill={color}
      />
    </svg>
  );
}
