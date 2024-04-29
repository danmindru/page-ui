import { LandingFaqSection } from '@/components/landing/LandingFaq';

export default function Component() {
  const faqItems = [
    {
      question: 'Can I integrate my existing systems?',
      answer:
        'Absolutely! Our app seamlessly integrates with various other tools and systems.',
    },
    {
      question: 'Do I need coding skills?',
      answer:
        'Nope! Our user-friendly interface empowers anyone to create and manage their own app.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Absolutely! We take data security seriously, employing robust measures to keep your information safe.',
    },
  ];

  return (
    <LandingFaqSection
      title="FAQ"
      description="Looking to learn more about our product? Here are some of the most common questions."
      faqItems={faqItems}
      withBackground
    />
  );
}
