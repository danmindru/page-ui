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
            Superb garden designs.
            <br />
            Created in minutes.
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
            <p className="text-xl font-bold">Automatic plant suggestions</p>
            <p>
              Make your garden redesigns easier to execute while ensuring all
              plants thrive in your environment.
            </p>
          </LandingProductTourTrigger>

          <LandingProductTourTrigger value="feature-2">
            <p className="text-xl font-bold">Region-specific recommendations</p>
            <p>
              Gnomie automatically recommends plants and features that are
              perfect for your local climate.
            </p>
          </LandingProductTourTrigger>

          <LandingProductTourTrigger value="feature-3">
            <p className="text-xl font-bold">Manual customization</p>
            <p>
              You can also manually include/exclude specific plants and
              features.
            </p>
          </LandingProductTourTrigger>

          <LandingProductTourTrigger value="feature-4">
            <p className="text-xl font-bold">Easy editing</p>
            <p>
              Simply drag and drop elements onto your garden design. All the
              heavy lifting is done automatically, requiring no manual work.
            </p>
          </LandingProductTourTrigger>
        </LandingProductTourList>
        <LandingProductTourContent value="feature-1">
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
        <LandingProductTourContent value="feature-2">
          <VideoPlayer
            className={'w-full rounded-md'}
            src={'https://cache.shipixen.com/features/21-run-locally.mp4'}
            autoPlay={true}
            controls={false}
            loop={true}
          />
        </LandingProductTourContent>
        <LandingProductTourContent value="feature-3">
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
        <LandingProductTourContent value="feature-4">
          <VideoPlayer
            className={'w-full rounded-md'}
            src={'https://cache.shipixen.com/features/20-mobile-optimized.mp4'}
            autoPlay={true}
            controls={false}
            loop={true}
          />
        </LandingProductTourContent>
      </LandingProductTourSection>
    </>
  );
}
