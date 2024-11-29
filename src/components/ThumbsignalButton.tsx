'use client';

type ThumbsignalVariant = 'THUMB_UP' | 'THUMB_DOWN';

type ThumbsignalData = {
  unicode: number;
  label: string;
  title: string;
};

export type ThumbsignalButtonProps = {
  thumbsignalVariant: ThumbsignalVariant;
  thumbsignalAmount: number;
  className?: string;
  disabled?: boolean;
  clicked?: boolean;
  onClick?: () => void;
};

const variantClassName: Record<ThumbsignalVariant, string> = {
  THUMB_UP: 'rounded-l-full pl-4',
  THUMB_DOWN: 'rounded-r-full pr-4',
};

const signals: Record<ThumbsignalVariant, ThumbsignalData> = {
  THUMB_UP: {
    unicode: 0x1f44d,
    label: 'thumb up',
    title: 'vote thumbs up',
  },
  THUMB_DOWN: {
    unicode: 0x1f44e,
    label: 'thumb down',
    title: 'vote thumbs down',
  },
};

const buttonLightColorsClassName: string =
  'bg-neutral-200 hover:bg-neutral-300 disabled:border-neutral-300 disabled:bg-neutral-300 disabled:text-neutral-500';
const buttonDarkColorsClassName: string =
  'dark:bg-neutral-900 hover:dark:bg-neutral-950 disabled:dark:border-neutral-900 disabled:dark:bg-neutral-900 disabled:dark:text-neutral-500';
const buttonClickedClassName: string = 'border-red-200 dark:border-red-800';
const buttonNotClickedClassName: string =
  'border-neutral-200 hover:border-neutral-300 dark:border-neutral-900 hover:dark:border-neutral-950';

const ThumbsignalButton = ({
  thumbsignalVariant,
  thumbsignalAmount,
  disabled,
  clicked,
  onClick,
}: ThumbsignalButtonProps) => {
  const thumbsignal = signals[thumbsignalVariant];

  return (
    <div>
      <button
        className={`${variantClassName[thumbsignalVariant]} ${clicked ? buttonClickedClassName : buttonNotClickedClassName} ${buttonLightColorsClassName} ${buttonDarkColorsClassName} m max-w-max border-2 px-1 py-2 text-sm`}
        type="button"
        title={thumbsignal.title}
        disabled={disabled}
        onClick={onClick}
      >
        <span
          style={{ marginRight: 8 }}
          role="img"
          aria-label={thumbsignal.label}
        >
          {String.fromCodePoint(thumbsignal.unicode)}
        </span>
        {thumbsignalAmount}
      </button>
    </div>
  );
};

export default ThumbsignalButton;
