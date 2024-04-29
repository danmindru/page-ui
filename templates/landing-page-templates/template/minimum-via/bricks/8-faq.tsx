import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';

export default function Component() {
  const faqItems = [
    {
      question: 'Is this suitable for beginners?',
      answer:
        'Absolutely! Our learning center caters to learners of all levels, from absolute beginners to experienced developers.',
    },
    {
      question: 'How much time do I need to invest?',
      answer:
        'You can progress at your own pace, but dedicating a few hours each week will help you see significant improvement in your skills.',
    },
    {
      question: 'Will I receive a certificate?',
      answer:
        "Yes, upon completion of certain courses or tracks, you'll receive a certificate to showcase your achievement.",
    },
  ];

  return (
    <LandingFaqCollapsibleSection
      title="FAQ"
      description="Find answers to common inquiries about our front-end learning center."
      faqItems={faqItems}
      withBackground
    />
  );
}
