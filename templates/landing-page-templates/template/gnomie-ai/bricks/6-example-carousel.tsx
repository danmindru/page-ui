import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/shared/ui/carousel';
import Image from '@/components/shared/Image';
import { Button } from '@/components/shared/ui/button';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';

const exampleItems = [
  {
    imageSrc: 'https://picsum.photos/id/15/800/800',
    name: 'Michael Thompson',
    location: 'Phoenix, AZ',
    socials: [FacebookIcon, InstagramIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/701/800/800',
    name: 'Sophia Turner',
    location: 'Orlando, FL',
    socials: [LinkedinIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/253/800/800',
    name: 'Oliver Smith',
    location: 'Nashville, TN',
    socials: [InstagramIcon, FacebookIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/112/800/800',
    name: 'Emily Davis',
    location: 'Dallas, TX',
    socials: [LinkedinIcon, InstagramIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/110/800/800',
    name: 'Liam Johnson',
    location: 'Charlotte, NC',
    socials: [FacebookIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/106/800/800',
    name: 'Isabella Martinez',
    location: 'San Diego, CA',
    socials: [InstagramIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/98/800/800',
    name: 'Noah Brown',
    location: 'Columbus, OH',
    socials: [FacebookIcon, LinkedinIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/89/800/800',
    name: 'Ava Wilson',
    location: 'Las Vegas, NV',
    socials: [LinkedinIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/71/800/800',
    name: 'Lucas Garcia',
    location: 'Baltimore, MD',
    socials: [InstagramIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/59/800/800',
    name: 'Mia Rodriguez',
    location: 'Kansas City, MO',
    socials: [FacebookIcon, LinkedinIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/33/800/800',
    name: 'Ethan Lee',
    location: 'Indianapolis, IN',
    socials: [LinkedinIcon],
  },
  {
    imageSrc: 'https://picsum.photos/id/206/800/800',
    name: 'Charlotte White',
    location: 'Louisville, KY',
    socials: [InstagramIcon, FacebookIcon],
  },
];

const avatarItems = [
  {
    imageSrc: 'https://picsum.photos/id/64/100/100',
    name: 'John Doe',
  },
  {
    imageSrc: 'https://picsum.photos/id/65/100/100',
    name: 'Jane Doe',
  },
  {
    imageSrc: 'https://picsum.photos/id/669/100/100',
    name: 'Alice Doe',
  },
];

export default function Component() {
  return (
    <>
      <div className="flex flex-col items-center p-4 mt-12">
        <h2 className="text-5xl font-semibold leading-tight text-center">
          Transform Your Space with Gnomie
        </h2>
        <p className="mt-4 md:text-xl max-w-3xl text-center">
          Join thousands of satisfied users who have transformed their gardens
          into beautiful, personalized outdoor retreats.
        </p>

        <div className="w-full mt-6 flex justify-center gap-4">
          <Button size="xl" variant="secondary" asChild>
            <a href="#">Start free today</a>
          </Button>
        </div>

        <LandingSocialProof
          className="w-full mt-6 justify-center"
          showRating
          numberOfUsers={110000}
          suffixText="happy gardeners"
          avatarItems={avatarItems}
          size="medium"
          disableAnimation
        />
      </div>

      <Carousel
        className="w-full py-12"
        opts={{ dragFree: true, dragThreshold: 0.5 }}
      >
        <CarouselContent className="ml-0">
          {exampleItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 2xl:basis/1/5 3xl:basis-1/6 p-0 ml-1"
            >
              <div className="w-full flex flex-col">
                <Image
                  src={`${item.imageSrc}`}
                  alt={`${item.name}`}
                  width={500}
                  height={500}
                  className="object-cover rounded-xl"
                />

                <div className="p-4 flex gap-4 justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-sm opacity-50">{item.location}</p>
                  </div>

                  <div className="flex gap-2">
                    {item.socials.map((SocialIcon, index) => (
                      <div
                        key={index}
                        className="bg-neutral-100 dark:bg-neutral-900 rounded-full w-10 h-10 p-2"
                      >
                        <SocialIcon size={24} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}

          <CarouselItem key="cta" className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="w-full h-full flex flex-col gap-2 items-center justify-center bg-secondary-500/5 rounded-xl">
              <Button
                size="xl"
                className="p-7 text-xl"
                variant="secondary"
                asChild
              >
                <a href="#">Start Your Garden Today</a>
              </Button>

              <p className="text-sm opacity-50">No credit card required</p>
              <p className="text-sm opacity-50">More tools inside</p>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4" />
        <CarouselNext className="absolute right-4" />
      </Carousel>
    </>
  );
}
