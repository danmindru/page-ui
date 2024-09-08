import { LandingFaqCollapsibleSection } from '@/components/landing/LandingFaqCollapsible';

export default function Component() {
  return (
    <LandingFaqCollapsibleSection
      title="FAQ"
      description="Get answers to your questions about transforming your garden with Gnomie."
      faqItems={[
        {
          question: 'How does Gnomie work?',
          answer:
            'Gnomie uses AI to analyze photos of your garden and provides customized recommendations for plants, flowers, and landscaping that suit your region and preferences.',
        },
        {
          question: 'Is Gnomie suitable for beginners?',
          answer:
            'Absolutely! Whether you’re new to gardening or have some experience, Gnomie offers tools and suggestions that make it easy to enhance your garden.',
        },
        {
          question: 'Can I use Gnomie for large gardens?',
          answer:
            'Yes, Gnomie can handle garden designs for any size, from small balconies to large yards. Just provide photos of your space, and we’ll help you design it.',
        },
        {
          question: 'What types of plants does Gnomie recommend?',
          answer:
            'Gnomie recommends plants that thrive in your specific region and climate. Our AI ensures that the suggestions are tailored to your local environment.',
        },
        {
          question: 'How often should I update my garden design?',
          answer:
            'It’s a good idea to revisit your garden design seasonally to incorporate new plants or landscaping ideas. Gnomie can help you make updates easily.',
        },
        {
          question: 'Do I need to pay for the full version?',
          answer:
            'Gnomie offers both free and paid plans. The free plan provides basic features, while the paid plans offer more advanced features and personalized recommendations.',
        },
        {
          question: 'Can I try Gnomie before purchasing?',
          answer:
            'Yes, we offer a free trial so you can explore Gnomie’s features and see how it works for your garden before committing to a paid plan.',
        },
        {
          question: 'Is my data secure with Gnomie?',
          answer:
            'Absolutely. We take your privacy seriously and ensure that all your data is encrypted and securely stored. Your garden photos and designs are safe with us.',
        },
        {
          question: 'How do I contact customer support?',
          answer:
            'You can reach our customer support team via email, live chat on our website, or through our social media channels. We’re here to help with any questions or issues.',
        },
        {
          question: 'What if I’m not satisfied with Gnomie?',
          answer:
            'If you’re not satisfied with Gnomie, we offer a satisfaction guarantee. You can contact our support team for assistance or to discuss any concerns you might have.',
        },
      ]}
      withBackground
    />
  );
}
