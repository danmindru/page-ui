import TOCInline from '@shipixen/pliny/ui/TOCInline';
import Pre from '@shipixen/pliny/ui/Pre';
import BlogNewsletterForm from '@shipixen/pliny/ui/BlogNewsletterForm';
import type { MDXComponents } from 'mdx/types';
import ThemeSwitch from '@/components/shared/ThemeSwitch';
import Image from './shared/Image';
import CustomLink from './shared/Link';
import { CodebaseFilelistNav } from '@/components/blog/CodebaseFilelistNav';
import { Protip } from '@/components/blog/Protip';
import { DemoTitle } from '@/components/blog/DemoTitle';
import { DemoSubtitle } from '@/components/blog/DemoSubtitle';
import { DemoReadMoreWrapper } from '@/components/blog/DemoReadMoreWrapper';
import { ComponentExample } from '@/components/blog/CodePreview';

import { Button } from '@/components/shared/ui/button';
import { Badge } from '@/components/shared/ui/badge';

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
import { LandingPrimaryVideoCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
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
import { LandingHeaderMenuItem } from '@/components/landing/navigation/LandingHeaderMenuItem';
import { LandingHeader } from '@/components/landing/navigation/LandingHeader';
import { LandingNewsletterSection } from '@/components/landing/newsletter/LandingNewsletterSection';
import { LandingNewsletterInput } from '@/components/landing/newsletter/LandingNewsletterInput';
import { LandingFooter } from '@/components/landing/footer/LandingFooter';
import { LandingFooterColumn } from '@/components/landing/footer/LandingFooterColumn';
import { LandingFooterLink } from '@/components/landing/footer/LandingFooterLink';
import { LandingPricingSection } from '@/components/landing/pricing/LandingPricingSection';
import { LandingPricingPlan } from '@/components/landing/pricing/LandingPricingPlan';
import { LandingAppStoreButton } from '@/components/landing/app-store-button/LandingAppStoreButton';
import { LandingBlogList } from '@/components/landing/blog/LandingBlogList';
import { LandingBlogPost } from '@/components/landing/blog/LandingBlogPost';
import { LandingProductSteps } from '@/components/landing/LandingProductSteps';
import { LandingProblemAgitator } from '@/components/landing/problem-agitator/LandingProblemAgitator';
import { LandingProblemAgitatorItem } from '@/components/landing/problem-agitator/LandingProblemAgitatorItem';
import { LandingProblemAgitatorComment } from '@/components/landing/problem-agitator/LandingProblemAgitatorComment';
import { LandingProductProblemSolution } from '@/components/landing/LandingProductProblemSolution';
import { LandingStatsSection } from '@/components/landing/stats/LandingStatsSection';
import { LandingStatItem } from '@/components/landing/stats/LandingStatItem';
import { LandingVisionMissionSection } from '@/components/landing/about/LandingVisionMissionSection';
import { LandingAboutSection } from '@/components/landing/about/LandingAboutSection';
import { LandingTeamSection } from '@/components/landing/team/LandingTeamSection';
import { LandingTeamMember } from '@/components/landing/team/LandingTeamMember';
import { LandingBentoGridSection } from '@/components/landing/bento-grid/LandingBentoGridSection';
import { LandingBentoGridItem } from '@/components/landing/bento-grid/LandingBentoGridItem';
import { LandingBentoGridIconItem } from '@/components/landing/bento-grid/LandingBentoGridIconItem';
import { LandingBentoGridNumberItem } from '@/components/landing/bento-grid/LandingBentoGridNumberItem';
import { LandingBentoGridImageItem } from '@/components/landing/bento-grid/LandingBentoGridImageItem';
import { LandingProductCardSection } from '@/components/landing/card/LandingProductCardSection';
import { LandingProductCard } from '@/components/landing/card/LandingProductCard';
import { LandingPriceComparisonSection } from '@/components/landing/pricing-comparison/LandingPriceComparisonSection';
import { LandingPriceComparisonColumn } from '@/components/landing/pricing-comparison/LandingPriceComparisonColumn';
import { LandingPriceComparisonItem } from '@/components/landing/pricing-comparison/LandingPriceComparisonItem';
import { LandingDotParticleCtaBg } from '@/components/landing/cta-backgrounds/LandingDotParticleCtaBg';
import { LandingMouseHighlightCtaBg } from '@/components/landing/cta-backgrounds/LandingMouseHighlightCtaBg';
import { LandingConicCtaBg } from '@/components/landing/cta-backgrounds/LandingConicCtaBg';
import { LandingBlobCtaBg } from '@/components/landing/cta-backgrounds/LandingBlobCtaBg';
import { LandingGridPatternCtaBg } from '@/components/landing/cta-backgrounds/LandingGridPatternCtaBg';
import { LandingFlyingParticleCtaBg } from '@/components/landing/cta-backgrounds/LandingFlyingParticleCtaBg';
import { LandingCurvedLinesCtaBg } from '@/components/landing/cta-backgrounds/LandingCurvedLinesCtaBg';
import { LandingStraightLinesCtaBg } from '@/components/landing/cta-backgrounds/LandingStraightLinesCtaBg';
import { LandingEllipseSideCtaBg } from '@/components/landing/cta-backgrounds/LandingEllipseSideCtaBg';
import { LandingFlickeringGridCtaBg } from '@/components/landing/cta-backgrounds/LandingFlickeringGridCtaBg';
import { LandingWavesCtaBg } from '@/components/landing/cta-backgrounds/LandingWavesCtaBg';
import { LandingPathsCtaBg } from '@/components/landing/cta-backgrounds/LandingPathsCtaBg';
import { LandingShapesCtaBg } from '@/components/landing/cta-backgrounds/LandingShapesCtaBg';
import { LandingDiagonalCtaBg } from '@/components/landing/cta-backgrounds/LandingDiagonalCtaBg';
import { LandingLeadingPill } from '@/components/landing/leading/LandingLeadingPill';

import { WrappedVideoPlayer } from '@/components/blog/WrappedVideoPlayer';
import { GettingStartedGrid } from '@/components/blog/GettingStartedGrid';
import { ToolsGrid } from '@/components/blog/ToolsGrid';
import { LandingPageGrid } from '@/components/blog/LandingPageGrid';
import { Tippy } from '@/components/blog/Tippy';
import { PageUiLink } from '@/components/blog/PageUiLink';
import { InstallBlurb } from '@/components/blog/InstallBlurb';
import { StepCard } from '@/components/blog/StepCard';
import { GuideCard } from '@/components/blog/GuideCard';
import { StepCode } from '@/components/blog/StepCode';

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

const LandingHeaderWrapper = (props) => {
  return <LandingHeader {...props} />;
};

const LandingNewsletterSectionWrapper = (props) => {
  return <LandingNewsletterSection {...props} />;
};

const LandingNewsletterInputWrapper = (props) => {
  return <LandingNewsletterInput {...props} />;
};

const LandingPricingPlanWrapper = (props) => {
  return <LandingPricingPlan {...props} />;
};

const LandingDotParticleCtaBgWrapper = (props) => {
  return <LandingDotParticleCtaBg {...props} />;
};

const LandingMouseHighlightCtaBgWrapper = (props) => {
  return <LandingMouseHighlightCtaBg {...props} />;
};

const LandingConicCtaBgWrapper = (props) => {
  return <LandingConicCtaBg {...props} />;
};

const LandingBlobCtaBgWrapper = (props) => {
  return <LandingBlobCtaBg {...props} />;
};

const LandingGridPatternCtaBgWrapper = (props) => {
  return <LandingGridPatternCtaBg {...props} />;
};

const LandingFlyingParticleCtaBgWrapper = (props) => {
  return <LandingFlyingParticleCtaBg {...props} />;
};

const LandingCurvedLinesCtaBgWrapper = (props) => {
  return <LandingCurvedLinesCtaBg {...props} />;
};

const LandingStraightLinesCtaBgWrapper = (props) => {
  return <LandingStraightLinesCtaBg {...props} />;
};

const LandingEllipseSideCtaBgWrapper = (props) => {
  return <LandingEllipseSideCtaBg {...props} />;
};

const LandingFlickeringGridCtaBgWrapper = (props) => {
  return <LandingFlickeringGridCtaBg {...props} />;
};

const LandingWavesCtaBgWrapper = (props) => {
  return <LandingWavesCtaBg {...props} />;
};

const LandingPathsCtaBgWrapper = (props) => {
  return <LandingPathsCtaBg {...props} />;
};

const LandingShapesCtaBgWrapper = (props) => {
  return <LandingShapesCtaBg {...props} />;
};

const LandingDiagonalCtaBgWrapper = (props) => {
  return <LandingDiagonalCtaBg {...props} />;
};

const LandingLeadingPillWrapper = (props) => {
  return <LandingLeadingPill {...props} />;
};

import {
  SearchIcon,
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
  CodebaseFilelistNav,
  Protip,
  Tippy,
  PageUiLink,
  DemoTitle,
  DemoSubtitle,
  GettingStartedGrid,
  ToolsGrid,
  LandingPageGrid,
  ComponentExample,
  InstallBlurb,
  ThemeSwitch,
  GuideCard,
  StepCard,
  StepCode,

  Button,
  Badge,
  WrappedVideoPlayer,

  DemoReadMoreWrapper,
  LandingAppStoreButton,
  LandingPrimaryImageCtaSection,
  LandingPrimaryTextCtaSection,
  LandingPrimaryVideoCtaSection,
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
  LandingHeader: LandingHeaderWrapper,
  LandingHeaderMenuItem,
  LandingNewsletterSection: LandingNewsletterSectionWrapper,
  LandingNewsletterInput: LandingNewsletterInputWrapper,
  LandingFooter,
  LandingFooterColumn,
  LandingFooterLink,
  LandingPricingSection,
  LandingPricingPlan: LandingPricingPlanWrapper,
  LandingBlogList,
  LandingBlogPost,
  LandingProductSteps,
  LandingProblemAgitator,
  LandingProblemAgitatorItem,
  LandingProblemAgitatorComment,
  LandingProductProblemSolution,
  LandingStatsSection,
  LandingStatItem,
  LandingVisionMissionSection,
  LandingAboutSection,
  LandingTeamSection,
  LandingTeamMember,
  LandingBentoGridSection,
  LandingBentoGridItem,
  LandingBentoGridIconItem,
  LandingBentoGridNumberItem,
  LandingBentoGridImageItem,
  LandingProductCardSection,
  LandingProductCard,
  LandingPriceComparisonSection,
  LandingPriceComparisonColumn,
  LandingPriceComparisonItem,
  LandingDotParticleCtaBg: LandingDotParticleCtaBgWrapper,
  LandingMouseHighlightCtaBg: LandingMouseHighlightCtaBgWrapper,
  LandingConicCtaBg: LandingConicCtaBgWrapper,
  LandingBlobCtaBg: LandingBlobCtaBgWrapper,
  LandingGridPatternCtaBg: LandingGridPatternCtaBgWrapper,
  LandingFlyingParticleCtaBg: LandingFlyingParticleCtaBgWrapper,
  LandingCurvedLinesCtaBg: LandingCurvedLinesCtaBgWrapper,
  LandingStraightLinesCtaBg: LandingStraightLinesCtaBgWrapper,
  LandingEllipseSideCtaBg: LandingEllipseSideCtaBgWrapper,
  LandingFlickeringGridCtaBg: LandingFlickeringGridCtaBgWrapper,
  LandingWavesCtaBg: LandingWavesCtaBgWrapper,
  LandingPathsCtaBg: LandingPathsCtaBgWrapper,
  LandingShapesCtaBg: LandingShapesCtaBgWrapper,
  LandingDiagonalCtaBg: LandingDiagonalCtaBgWrapper,
  LandingLeadingPill: LandingLeadingPillWrapper,

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
  SearchIcon,
};
