import { LandingMarquee } from '@/components/landing/LandingMarquee';
import {
  ChromeIcon,
  FigmaIcon,
  GithubIcon,
  FramerIcon,
  TwitchIcon,
  TwitterIcon,
  GitlabIcon,
  InstagramIcon,
  SlackIcon,
} from 'lucide-react';

export default function Component() {
  return (
    <LandingMarquee withBackground>
      <ChromeIcon className="w-12 h-12 mx-8" />
      <FigmaIcon className="w-12 h-12 mx-8" />
      <GithubIcon className="w-12 h-12 mx-8" />
      <FramerIcon className="w-12 h-12 mx-8" />
      <TwitchIcon className="w-12 h-12 mx-8" />
      <TwitterIcon className="w-12 h-12 mx-8" />
      <GitlabIcon className="w-12 h-12 mx-8" />
      <InstagramIcon className="w-12 h-12 mx-8" />
      <SlackIcon className="w-12 h-12 mx-8" />
    </LandingMarquee>
  );
}
