import { clsx } from 'clsx';
import { CheckIcon, XIcon, InfoIcon, CircleDashedIcon } from 'lucide-react';

/**
 * A component meant to be used to show a comparison item in the landing page,
 * typically used with LandingPriceComparisonColumn.
 */
export const LandingPriceComparisonItem = ({
  className,
  icon,
  iconComponent,
  text,
  textComponent,
  description,
  descriptionComponent,
  state = 'neutral',
  showText = false,
  showDescription = false,
}: {
  className?: string;
  icon?: React.ReactNode;
  iconComponent?: React.ReactNode;
  text?: string | React.ReactNode;
  textComponent?: React.ReactNode;
  description?: string | React.ReactNode;
  descriptionComponent?: React.ReactNode;
  state?: 'check' | 'cross' | 'neutral' | 'custom';
  showText?: boolean;
  showDescription?: boolean;
}) => {
  const renderIcon = () => {
    if (icon || iconComponent) {
      return icon || iconComponent;
    }

    switch (state) {
      case 'check':
        return (
          <CheckIcon
            className="h-5 w-5 text-green-500 dark:text-green-400"
            aria-hidden="true"
          />
        );
      case 'cross':
        return (
          <XIcon
            className="h-5 w-5 text-red-500 dark:text-red-400"
            aria-hidden="true"
          />
        );
      case 'neutral':
        return (
          <CircleDashedIcon
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
          />
        );
      default:
        return null;
    }
  };

  const renderContent = () => (
    <div className="flex gap-3 items-center w-full px-3">
      <div
        className={clsx(
          'flex-shrink-0',
          !showText ? 'w-full flex justify-center' : '',
        )}
      >
        {renderIcon()}
      </div>

      {showText && (text || textComponent) && (
        <div className="w-full text-sm line-clamp-2">
          {text ? <span>{text}</span> : textComponent}
        </div>
      )}

      {!showText && (text || textComponent) && (
        <div className="sr-only">
          {text ? <span>{text}</span> : textComponent}
        </div>
      )}

      {(description || descriptionComponent) && showDescription && (
        <div className="flex-shrink-0 relative group/price-desc">
          <button
            className="p-1"
            title={
              typeof description === 'string' ? description : 'More information'
            }
          >
            <InfoIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
            <span className="sr-only">More information</span>
          </button>

          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-md opacity-0 invisible group-hover/price-desc:opacity-100 group-hover/price-desc:visible transition-all duration-200 pointer-events-none z-10 w-max max-w-xs whitespace-normal">
            {description ? <span>{description}</span> : descriptionComponent}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div
      className={clsx(
        'flex items-center py-3 px-2 h-14',
        !showText
          ? 'bg-gray-50 dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800'
          : '',
        className,
      )}
    >
      {renderContent()}
    </div>
  );
};
