import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';

export default function Component() {
  const faqItems = [
    {
      question: 'Can I get a refund?',
      answer:
        'Yes, you can get a refund within 30 days of your purchase. No questions asked.',
    },
    {
      question: 'What technologies are used?',
      answer: 'We use Next.js, Tailwind CSS, and Vercel for the deployment.',
    },
    {
      question: 'What do I get if I pre-order?',
      answer:
        'With the pre-order, you get a 50% discount on the final price and a lifetime license for the generated code.',
    },
  ];

  return (
    <LandingFaqCollapsibleSection
      title="FAQ"
      description="Looking to learn more about our product? Here are some of the most common
    questions."
      faqItems={faqItems}
    />
  );
}
