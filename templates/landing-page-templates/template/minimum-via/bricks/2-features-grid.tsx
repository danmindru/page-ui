import {
  HeartHandshakeIcon,
  LibraryIcon,
  PenIcon,
  UsersIcon,
} from 'lucide-react';

import { LandingProductFeaturesGrid } from '@/components/landing/LandingProductFeaturesGrid';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';

export default function Component() {
  return (
    <LandingProductFeaturesGrid
      title="All you ever needed"
      description="We specialize in creative, clear, and cohesive communications solutions that build memorable experiences."
    >
      <LandingProductFeature
        title={
          <span className="flex gap-4 items-center">
            <PenIcon className="w-7 h-7" /> Editing
          </span>
        }
        description="Give your eyes a break. Whether you need a quick proofread or a round of deep copy editing, we're here for you."
      />

      <LandingProductFeature
        title={
          <span className="flex gap-4 items-center">
            <LibraryIcon className="w-8 h-8" /> Copywriting
          </span>
        }
        description="Want words, but don’t want to write them? Let’s chat. We offer a wide range of copywriting services that deliver your message without compromising your unique voice."
      />

      <LandingProductFeature
        title={
          <span className="flex gap-4 items-center">
            <HeartHandshakeIcon className="w-8 h-8" /> Brand Support
          </span>
        }
        description="We love the details that make brands happen. We’ll dive into your brand's voice, strategy, design, customer touchpoints, and customer journey to create engaging, memorable experiences for your audience."
      />

      <LandingProductFeature
        title={
          <span className="flex gap-4 items-center">
            <UsersIcon className="w-8 h-8" /> Collaborations
          </span>
        }
        description="Have something else in the works? If your project type isn't listed here, but you’d like to partner up with Monograph, let’s chat! Drop us a line to share your details and vision, and we’ll go from there."
      />
    </LandingProductFeaturesGrid>
  );
}
