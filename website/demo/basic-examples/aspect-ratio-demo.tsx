import Image from 'next/image';

import { AspectRatio } from '@/components/shared/ui/aspect-ratio';

export default function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <Image
        src="https://picsum.photos/800/400?random=1"
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio>
  );
}
