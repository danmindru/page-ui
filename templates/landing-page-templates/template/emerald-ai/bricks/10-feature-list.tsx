import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import {
  GithubIcon,
  LayersIcon,
  LineChartIcon,
  SparklesIcon,
  ThumbsUpIcon,
  ZapIcon,
} from 'lucide-react';

export default function Component() {
  const featureItems = [
    {
      title: 'Intuitive Interface',
      description:
        'Design and customize your app easily with our simple drag-and-drop interface.',
      icon: <SparklesIcon />,
    },
    {
      title: 'Seamless Integration',
      description:
        'Connect your app with other tools effortlessly for a smoother workflow.',
      icon: <GithubIcon />,
    },
    {
      title: 'Smart Analytics',
      description:
        'Gain valuable insights into user behavior and trends with our advanced analytics tools.',
      icon: <LineChartIcon />,
    },
    {
      title: 'Rock-Solid Security',
      description:
        'Rest assured, your data is safe with our top-notch security measures.',
      icon: <ThumbsUpIcon />,
    },
    {
      title: 'Automatic Updates',
      description:
        'Never miss out on the latest features - our app updates itself automatically!',
      icon: <ZapIcon />,
    },
    {
      title: 'Scalability on Demand',
      description:
        'Grow your app along with your business needs, effortlessly expanding to meet demand.',
      icon: <LayersIcon />,
    },
  ];

  return (
    <LandingFeatureList
      title={'Nothing quite like it.'}
      description={
        'Shipixen sets up everything you need to start working on your blog, website or product.'
      }
      featureItems={featureItems}
    />
  );
}
