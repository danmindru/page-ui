import clsx from 'clsx';
import { colors } from '@/data/config/colors';

export const GlowBg = ({
  className,
  variant = 'primary',
}: {
  className?: string;
  variant?: 'primary' | 'secondary';
}) => {
  const stopColor =
    variant === 'primary'
      ? 'var(--primary-lighter-hex)'
      : 'var(--secondary-lighter-hex)';
  const stopColorTwo =
    variant === 'primary'
      ? 'var(--primary-dark-hex)'
      : 'var(--secondary-dark-hex)';

  return (
    <svg
      viewBox="0 0 1024 1024"
      aria-hidden="true"
      className={clsx(className, 'absolute -z-10')}
    >
      <circle
        cx="512"
        cy="512"
        r="512"
        fill={`url(#gradient-${variant})`}
        fillOpacity="0.7"
      ></circle>
      <defs>
        <radialGradient
          id={`gradient-${variant}`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(512 512) rotate(90) scale(512)"
        >
          <stop stopColor={stopColor} stopOpacity="0.5"></stop>
          <stop offset="1" stopColor={stopColorTwo} stopOpacity="0"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
};
