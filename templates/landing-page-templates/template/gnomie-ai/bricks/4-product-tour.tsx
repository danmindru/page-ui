import {
  LandingProductTourSection,
  LandingProductTourList,
  LandingProductTourTrigger,
  LandingProductTourContent,
} from '@/components/landing/LandingProductTour';
import { VideoPlayer } from '@/components/shared/VideoPlayer';

export default function Component() {
  return (
    <>
      <LandingProductTourSection
        titleComponent={
          <h2 className="text-5xl font-semibold leading-tight">
            Save $1000s on your garden.
          </h2>
        }
        descriptionComponent={
          <div className="flex flex-col max-w-xl">
            <p className="mt-4 md:text-xl">
              Gnomie is an intuitive garden design tool that makes your outdoor
              space look beautiful.
            </p>

            <p className="mt-4 md:text-xl opacity-50">
              It automatically suggests plants, flowers, and landscaping
              features based on your region's climate and soil conditions.
            </p>
          </div>
        }
        defaultValue="feature-1"
      >
        <LandingProductTourList>
          <LandingProductTourTrigger value="feature-1">
            <p className="text-xl font-bold">
              Capture photos and get recommendations
            </p>
            <p>
              Gnomie makes it easy to create comprehensive garden redesigns,
              whether for personal use or professional landscaping.
            </p>
          </LandingProductTourTrigger>

          <LandingProductTourTrigger value="feature-2">
            <p className="text-xl font-bold">Generate a garden plan</p>
            <p>
              Generate a detailed plan for your garden and export it as a PDF.
            </p>
          </LandingProductTourTrigger>

          <LandingProductTourTrigger value="feature-3">
            <p className="text-xl font-bold">
              Ongoing Consultation and Adjustments
            </p>
            <p>
              Make unlimited adjustments to your garden with a click of a
              button.
            </p>
          </LandingProductTourTrigger>

          <LandingProductTourTrigger value="feature-4">
            <p className="text-xl font-bold">Guided Assistance</p>
            <p>
              Not sure where to start? Gnomie's AI chat guides you step by step,
              from selecting the right plants to planning the layout.
            </p>
          </LandingProductTourTrigger>

          <LandingProductTourTrigger value="feature-5">
            <p className="text-xl font-bold">Personalized Recommendations</p>
            <p>
              The AI learns from your inputs, offering suggestions that match
              your taste, whether you prefer a lush, vibrant space or a
              minimalist, low-maintenance garden.
            </p>
          </LandingProductTourTrigger>
        </LandingProductTourList>
        <LandingProductTourContent value="feature-1">
          <VideoPlayer
            className={'w-full rounded-md'}
            src={'https://cache.shipixen.com/features/20-mobile-optimized.mp4'}
            autoPlay={true}
            controls={false}
            loop={true}
          />
        </LandingProductTourContent>
        <LandingProductTourContent value="feature-2">
          <VideoPlayer
            className={'w-full rounded-md'}
            src={
              'https://cache.shipixen.com/features/11-pricing-page-builder.mp4'
            }
            autoPlay={true}
            controls={false}
            loop={true}
          />
        </LandingProductTourContent>
        <LandingProductTourContent value="feature-3">
          <VideoPlayer
            className={'w-full rounded-md'}
            src={'https://cache.shipixen.com/features/21-run-locally.mp4'}
            autoPlay={true}
            controls={false}
            loop={true}
          />
        </LandingProductTourContent>
        <LandingProductTourContent value="feature-4">
          <VideoPlayer
            className={'w-full rounded-md'}
            src={
              'https://cache.shipixen.com/features/22-landing-page-components.mp4'
            }
            autoPlay={true}
            controls={false}
            loop={true}
          />
        </LandingProductTourContent>
        <LandingProductTourContent value="feature-5">
          <VideoPlayer
            className={'w-full rounded-md'}
            src={'https://cache.shipixen.com/features/5-powerful-blog.mp4'}
            autoPlay={true}
            controls={false}
            loop={true}
          />
        </LandingProductTourContent>
      </LandingProductTourSection>
    </>
  );
}
