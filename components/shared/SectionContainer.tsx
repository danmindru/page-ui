import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  type?: 'narrow' | 'wide' | 'ultrawide';
}

export default function SectionContainer({
  children,
  type = 'narrow',
  className,
}: Props) {
  return (
    <section className={clsx(className, 'w-full', `container-${type}`)}>
      {children}
    </section>
  );
}
