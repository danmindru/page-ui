import clsx from 'clsx';
import Image from 'next/image';
import style from '@/components/shared/backdrop-image.module.css';

export default function BackdropImage({
  src,
  alt,
  width = 1400,
  height = 1400,
  fill,
  className,
  imgClassName,
  captionText,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  imgClassName?: string;
  captionText?: string;
}) {
  const blurDataURL = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAAJNJREFUGFcFwdEKgjAAQNG7MplamL4EvfRFWT1bfUAQ/XMQEYHJ2nTaxjpH3K6X4Jzj21tUN2D9SCQmLGRMEseI87EO3nlUP9CaDm0ts0hQpJJ5EiOq3T78Rk+jDfe35mkGCgmbPKXMJaKuT2EcPB/d82oUjenJZlNWhWSZpYhtdQjOO1pleTSapzKUcso6T1jmkj8C7EWMue4QsgAAAABJRU5ErkJggg==`;

  return (
    <div
      className={clsx(
        'flex items-center justify-center relative overflow-hidden',
        className,
      )}
    >
      <figure
        className={clsx(
          'flex items-center justify-center rounded-md overflow-hidden shadow-md bg-cover relative',
          style.figure,
          imgClassName,
        )}
        style={{
          backgroundImage: "url('/static/images/backdrop-3.jpg')",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          quality={100}
          blurDataURL={blurDataURL}
          className={clsx(
            'relative rounded-md overflow-hidden h-full w-auto lg:max-h-lg',
            style.image,
          )}
        />

        {captionText ? <figcaption>{captionText}</figcaption> : ''}
      </figure>
    </div>
  );
}
