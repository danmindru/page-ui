'use client';
import { useRef, useState } from 'react';
import { PlayIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const VideoPlayer = ({
  autoPlay = true,
  controls = true,
  maxWidth = '700px',
  poster,
  src,
  width,
  height,
  loop,
  preload = 'metadata',
  variant = 'primary',
  className,
}: {
  autoPlay?: boolean;
  controls?: boolean;
  maxWidth?: string;
  poster?: string;
  src: string;
  width?: string;
  height?: string;
  loop?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  variant?: 'primary' | 'secondary';
  className?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const togglePlay = () => {
    if (!videoRef.current) {
      return;
    }

    if (!isPlaying) {
      setIsPlaying(true);
      videoRef.current.play();

      const shouldLoop = typeof loop === 'boolean' ? loop : true;

      if (shouldLoop) {
        videoRef.current.setAttribute('loop', '');
      }
    }
  };

  return (
    <div
      style={{ maxWidth }}
      className={cn(className, 'rounded-lg overflow-hidden shadow-md')}
    >
      <div className="relative bg-white dark:bg-black rounded-md">
        {!isPlaying ? (
          <button
            onClick={togglePlay}
            className={cn(
              'w-full h-full flex items-center justify-center absolute inset-0 bg-gradient-to-r group',
              variant === 'primary'
                ? 'from-primary-900/30 to-black/70'
                : 'from-secondary-900/40 to-black/70',
            )}
          >
            <PlayIcon
              className={cn(
                'relative z-10 inset-0 w-28 h-28 group-hover:scale-110',
                variant === 'primary'
                  ? 'stroke-primary-200/50 fill-primary-200'
                  : 'stroke-secondary-200/50 fill-secondary-200',
              )}
            />
          </button>
        ) : null}

        <video
          ref={videoRef}
          src={src}
          width={width}
          height={height}
          controls={autoPlay || isPlaying || controls}
          autoPlay={autoPlay}
          loop={loop}
          className={className}
          poster={poster}
          muted
          onClick={togglePlay}
          playsInline
          preload={preload}
        >
          <track kind="captions" />
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
