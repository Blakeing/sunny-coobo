// button.tsx
import { type VariantProps, cva } from 'class-variance-authority'

// ⚠️ Disclaimer: Use of Tailwind CSS is optional
const button = cva('button', {
  variants: {
    intent: {
      primary: [
        'bg-accent uppercase font-display font-bold text-white hover:opacity-90',
      ],
      secondary: [
        'bg-white uppercase font-display font-bold text-accent   hover:opacity-90',
      ],
      accent: [
        'bg-accentGray  font-display font-bold text-white text-xl  hover:opacity-90',
      ],
      web: [
        'bg-web  font-display font-bold text-white text-xl  hover:opacity-90',
      ],
      outline: [
        'bg-transparent text-white uppercase font-display font-bold border-4 border-white  hover:opacity-90',
      ],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-4', 'px-5'],
    },
  },
  compoundVariants: [
    {
      intent: 'primary',
      size: 'medium',
    },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
})

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  ...props
}) => (
  <button className={button({ intent, size, class: className })} {...props} />
)
