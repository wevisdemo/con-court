import { twMerge } from 'tailwind-merge';

type Props = {
  borderColor?: string;
  color?: string;
  className?: string;
};

export default function Quote({
  borderColor,
  color = 'white',
  className,
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="124"
      height="87"
      viewBox="0 0 124 87"
      fill="none"
      className={twMerge('h-auto', className)}
    >
      <path
        d="M7.40121 79.4796C7.41242 79.4914 7.42392 79.5029 7.43569 79.5141C11.5053 83.39 17.7868 85.2239 26.0573 85.2239C34.3223 85.2239 40.5295 83.3923 44.4248 79.4971C48.425 75.4968 50.4233 70.5291 50.4233 64.6618V57.8693C50.4233 52.9568 49.0024 48.5813 46.1547 44.7805C43.4338 40.9767 39.3005 38.5001 33.8745 37.2814C35.9997 30.9201 39.0033 25.1255 42.8844 19.8925C47.1902 14.3319 52.3096 8.85227 58.2469 3.45478C58.5526 3.17688 58.6559 2.73959 58.5069 2.35425C58.3579 1.9689 57.9873 1.71484 57.5742 1.71484H32.3064C32.083 1.71484 31.866 1.78965 31.6901 1.92734C27.4672 5.23218 23.5248 9.08347 19.8619 13.4779C16.1959 17.6949 12.9885 22.2778 10.2399 27.2253C10.2352 27.2337 10.2307 27.2421 10.2263 27.2507C7.66088 32.1982 5.55472 37.4185 3.90715 42.9103L3.90099 42.9318C2.42894 48.2679 1.69141 53.6101 1.69141 58.9561V64.6618C1.69141 70.5141 3.58851 75.4763 7.40121 79.4796ZM71.25 79.4797C71.2612 79.4914 71.2727 79.5029 71.2845 79.5141C75.3541 83.39 81.6355 85.2239 89.9061 85.2239C98.1711 85.2239 104.378 83.3923 108.274 79.4971C112.274 75.4968 114.272 70.5291 114.272 64.6618V57.8693C114.272 52.9568 112.851 48.5814 110.004 44.7805C107.283 40.9767 103.149 38.5001 97.7233 37.2814C99.8485 30.92 102.852 25.1254 106.733 19.8924C111.039 14.3318 116.158 8.85223 122.096 3.45478C122.401 3.17688 122.505 2.73959 122.356 2.35425C122.207 1.9689 121.836 1.71484 121.423 1.71484H96.1552C95.9318 1.71484 95.7148 1.78965 95.5389 1.92734C91.3161 5.23214 87.3737 9.08338 83.7108 13.4777C80.0447 17.6948 76.8373 22.2778 74.0886 27.2253C74.0869 27.2285 74.0851 27.2317 74.0834 27.2349C74.0806 27.2402 74.0778 27.2454 74.075 27.2507C71.5097 32.1982 69.4035 37.4185 67.7559 42.9103L67.7498 42.9318C66.2777 48.2679 65.5402 53.6101 65.5402 58.9561V64.6618C65.5402 70.5141 67.4373 75.4763 71.25 79.4797Z"
        fill={color}
        stroke={borderColor}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
