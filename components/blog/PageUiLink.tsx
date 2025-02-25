import Image from 'next/image';

export const PageUiLink = ({ className }: { className?: string }) => {
  return (
    <a
      href="https://pageui.dev"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 justify-between p-4 bg-primary-500/10 rounded-lg not-prose hover:bg-primary-500/20 transition-colors"
    >
      <span className="max-w-md text-sm">
        <span className="font-semibold">
          Build a beautiful landing page from examples
        </span>
        <br />
        Landing page UI components for React & Next.js, <br />
        built on top of TailwindCSS. Free and open-source.
      </span>

      <div className="inline-flex items-center justify-center gap-4">
        <span className="text-2xl">Page UI</span>

        <Image
          src="/static/images/page-ui-log.webp"
          width={128}
          height={128}
          className="w-16 h-16"
          alt="Page UI Landing page components Logo"
        />
      </div>
    </a>
  );
};
