import { TestimonialItem } from '@/components/home/twitter';

/* TODO dan not implemented */
export const LandingTestimonialPortal = ({
  className,
  containerClassName,
  title,
  titleComponent,
  description,
  descriptionComponent,
  testimonialItems,
  featuredTestimonial,
  withBackground = true,
}: {
  className?: string;
  containerClassName?: string;
  title?: string | React.ReactNode;
  titleComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  testimonialItems: Array<Array<Array<TestimonialItem>>>;
  featuredTestimonial?: TestimonialItem;
  withBackground?: boolean;
}) => {
  // TODO

  // TODO dan: vertical | horizontal

  // extend: {
  //       animation: {
  //         "loop": "loop 10s linear infinite",
  //       },

  //       keyframes: {
  //         loop: {
  //           from: { transform: "translateX(0)" },
  //           to: { transform: "translateX(calc(-50% - var(--gap)/2))" },
  //         },
  //       }
  //     },

  return (
    <div className="relative flex h-screen w-screen items-center">
      <div className="relative flex max-w-[100vw] overflow-hidden">
        <div className="animate-loop flex w-max items-stretch gap-[--gap] [--gap:theme(spacing.5)] hover:[animation-play-state:paused]">
          <div className="h-16 w-64 rounded-lg bg-slate-400"></div>
          <div className="h-16 w-64 rounded-lg bg-cyan-400"></div>
          <div className="h-16 w-64 rounded-lg bg-rose-400"></div>
          <div className="h-16 w-64 rounded-lg bg-violet-400"></div>

          <div className="h-16 w-64 rounded-lg bg-slate-400"></div>
          <div className="h-16 w-64 rounded-lg bg-cyan-400"></div>
          <div className="h-16 w-64 rounded-lg bg-rose-400"></div>
          <div className="h-16 w-64 rounded-lg bg-purple-400"></div>
        </div>
      </div>
    </div>
  );
};
