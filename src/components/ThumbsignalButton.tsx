'use client';

/*
 * TODO: 
    - has been clicked-style
    - emoji as unicode
 */

type ThumbsignalVariant = 'THUMB_UP' | 'THUMB_DOWN';

export type ThumbsignalButtonProps = {
  thumbsignalVariant: ThumbsignalVariant;
  thumbsignalAmount: number;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const variantClassName: Record<ThumbsignalVariant, string> = {
  THUMB_UP: 'rounded-l-full pl-4',
  THUMB_DOWN: 'rounded-r-full pr-4',
};
const buttonLightColorsClassName: string =
  'bg-neutral-200 border-neutral-200 hover:bg-neutral-300 hover:border-neutral-300 hover:dark:border-neutral-950 disabled:border-neutral-300 disabled:bg-neutral-300 disabled:text-neutral-500';
const buttonDarkColorsClassName: string =
  'dark:bg-neutral-900 dark:border-neutral-900 hover:dark:bg-neutral-950 hover:dark:border-neutral-950 disabled:dark:border-neutral-900 disabled:dark:bg-neutral-900 disabled:dark:text-neutral-500';

const ThumbsignalButton = ({
  thumbsignalVariant,
  thumbsignalAmount,
  disabled,
  onClick,
}: ThumbsignalButtonProps) => {
  const thumbSignalUp: boolean = thumbsignalVariant == 'THUMB_UP';
  return (
    <div>
      <button
        className={`${variantClassName[thumbsignalVariant]} ${buttonLightColorsClassName} ${buttonDarkColorsClassName} m max-w-max border-2 px-1 py-2 text-sm`}
        type="button"
        title={thumbSignalUp ? 'Vote thumb up' : 'Vote thumb down'}
        disabled={disabled}
        onClick={onClick}
      >
        {thumbsignalVariant == 'THUMB_UP' ? '👍' : '👎'} {thumbsignalAmount}
      </button>

      {thumbSignalUp && <div className="w-px bg-black" />}
    </div>
  );
};

export default ThumbsignalButton;
