import { LandingSocialProofBand } from '@/components/landing/social-proof/LandingSocialProofBand';
import { LandingSocialProofBandItem } from '@/components/landing/social-proof/LandingSocialProofBandItem';

export default function Component() {
  return (
    <LandingSocialProofBand invert={false} className="hidden md:flex">
      <LandingSocialProofBandItem graphic="gift">
        Sign up today for a 50% discount
      </LandingSocialProofBandItem>
    </LandingSocialProofBand>
  );
}
