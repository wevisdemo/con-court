import { twMerge } from 'tailwind-merge';

type Props = {
  color?: string;
  className?: string;
};

export default function Paper({ color = 'white', className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="46"
      viewBox="0 0 36 46"
      fill="none"
      className={twMerge('h-auto', className)}
    >
      <path
        d="M34.9979 45.5V0.5H6.59785L1.10547 6.61136V45.5H34.9979Z"
        fill={color}
        stroke="black"
        strokeLinejoin="round"
      />
      <path
        d="M6.56545 0.5L1.10547 6.64248H6.56545V0.5Z"
        fill={color}
        stroke="black"
        strokeLinejoin="round"
      />
    </svg>
  );
}
