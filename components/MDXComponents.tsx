import TOCInline from '@shipixen/pliny/ui/TOCInline';
import Pre from '@shipixen/pliny/ui/Pre';
import BlogNewsletterForm from '@shipixen/pliny/ui/BlogNewsletterForm';
import type { MDXComponents } from 'mdx/types';
import Image from './shared/Image';
import CustomLink from './shared/Link';
import { Protip } from '@/components/blog/Protip';
import { DemoTitle } from '@/components/blog/DemoTitle';
import { DemoSubtitle } from '@/components/blog/DemoSubtitle';
import { DemoReadMoreWrapper } from '@/components/blog/DemoReadMoreWrapper';
import { ComponentExample } from '@/components/blog/CodePreview';

import { Button } from '@/components/shared/ui/button';

import { LandingFeature } from '@/components/landing/feature/LandingFeature';
import { LandingProductVideoFeature } from '@/components/landing/LandingProductVideoFeature';
import { LandingBandSection } from '@/components/landing/LandingBand';
import { LandingFaqSection } from '@/components/landing/LandingFaq';
import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';
import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeaturesGrid } from '@/components/landing/LandingProductFeaturesGrid';
import { LandingSaleCtaSection } from '@/components/landing/cta/LandingSaleCta';
import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';
import { LandingTestimonialListSection } from '@/components/landing/testimonial/LandingTestimonialList';
import { LandingTestimonial } from '@/components/landing/testimonial/LandingTestimonial';
import { LandingTestimonialInline } from '@/components/landing/testimonial/LandingTestimonialInline';
import { LandingTestimonialInlineItem } from '@/components/landing/testimonial/LandingTestimonialInlineItem';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';
import { LandingSocialProofBand } from '@/components/landing/social-proof/LandingSocialProofBand';
import { LandingSocialProofBandItem } from '@/components/landing/social-proof/LandingSocialProofBandItem';
import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingPrimaryTextCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingDiscount } from '@/components/landing/discount/LandingDiscount';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
import { LandingRating } from '@/components/landing/rating/LandingRating';
import { LandingMarquee } from '@/components/landing/LandingMarquee';
import { LandingAvatar } from '@/components/landing/social-proof/LandingAvatar';
import { LandingShowcase } from '@/components/landing/showcase/LandingShowcase';
import { LandingShowcaseItem } from '@/components/landing/showcase/LandingShowcaseItem';
import {
  LandingProductTourSection,
  LandingProductTourList,
  LandingProductTourTrigger,
  LandingProductTourContent,
} from '@/components/landing/LandingProductTour';

import { GuideCard } from '@/components/blog/GuideCard';
import { StepCard } from '@/components/blog/StepCard';
import { StepCode } from '@/components/blog/StepCode';
import { WrappedVideoPlayer } from '@/components/blog/WrappedVideoPlayer';
import { ToolsGrid } from '@/components/blog/ToolsGrid';
import { LandingPageGrid } from '@/components/blog/LandingPageGrid';
import { Tippy } from '@/components/blog/Tippy';

const LandingMarqueeWrapper = (props) => {
  return <LandingMarquee {...props} />;
};

const LandingProductTourTriggerWrapper = (props) => {
  return <LandingProductTourTrigger {...props} />;
};

const LandingProductTourContentWrapper = (props) => {
  return <LandingProductTourContent {...props} />;
};

const LandingProductTourListWrapper = (props) => {
  return <LandingProductTourList {...props} />;
};

const LandingProductTourSectionWrapper = (props) => {
  return <LandingProductTourSection {...props} />;
};

import {
  ChromeIcon,
  FigmaIcon,
  FramerIcon,
  GithubIcon,
  LayersIcon,
  LineChartIcon,
  SparklesIcon,
  TwitchIcon,
  TwitterIcon,
  GitlabIcon,
  InstagramIcon,
  SlackIcon,
} from 'lucide-react';

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm,
  Protip,
  Tippy,
  DemoTitle,
  DemoSubtitle,
  ToolsGrid,
  LandingPageGrid,
  ComponentExample,
  GuideCard,
  StepCard,
  StepCode,

  Button,
  WrappedVideoPlayer,

  DemoReadMoreWrapper,
  LandingPrimaryImageCtaSection,
  LandingPrimaryTextCtaSection,
  LandingFeature,
  LandingTestimonial,
  LandingBandSection,
  LandingFaqSection,
  LandingFeatureList,
  LandingProductFeature,
  LandingProductFeaturesGrid,
  LandingSaleCtaSection,
  LandingTestimonialGrid,
  LandingTestimonialListSection,
  LandingTestimonialInline,
  LandingTestimonialInlineItem,
  LandingProductVideoFeature,
  LandingSocialProof,
  LandingSocialProofBand,
  LandingSocialProofBandItem,
  LandingFaqCollapsibleSection,
  LandingDiscount,
  LandingProductHuntAward,
  LandingProductFeatureKeyPoints,
  LandingRating,
  LandingMarquee: LandingMarqueeWrapper,
  LandingAvatar,
  LandingShowcase,
  LandingShowcaseItem,
  LandingProductTourSection: LandingProductTourSectionWrapper,
  LandingProductTourList: LandingProductTourListWrapper,
  LandingProductTourTrigger: LandingProductTourTriggerWrapper,
  LandingProductTourContent: LandingProductTourContentWrapper,

  ChromeIcon,
  FigmaIcon,
  FramerIcon,
  GithubIcon,
  LayersIcon,
  LineChartIcon,
  SparklesIcon,
  TwitchIcon,
  TwitterIcon,
  GitlabIcon,
  InstagramIcon,
  SlackIcon,
};
