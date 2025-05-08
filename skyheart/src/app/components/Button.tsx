import { tv } from 'tailwind-variants';

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tan";
  text: string;
};

export default function Button({ text, variant = 'tan', className, onClick }: ButtonProps) {
  const button = tv({
    base: 'font-semibold text-white rounded-full active:opacity-80',
    variants: {
      color: {
        primary: 'bg-blue-500 hover:bg-blue-700',
        secondary: 'bg-purple-500 hover:bg-purple-700',
        tan: 'bg-[var(--color-lightTan)] hover:bg-[var(--color-darkTan)]',
      },
      size: {
        sm: 'py-1 px-3 text-xs',
        md: 'py-1.5 px-4 text-sm',
        lg: 'py-2 px-6 text-md',
      },
    },
  });

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${button({ color: variant, size: 'md' })} ${className}`}
    >
      {text}
    </button>
  );
}
