import clsx from 'clsx'
import * as React from 'react'

import { Spinner } from '@/components/ui/Spinner'

const variants = {
  primary:
    'bg-orange-500 text-white shadow-lg hover:bg-orange-400 focus:bg-orange-400 focus:ring-orange-500',
  secondary:
    'bg-slate-200 text-slate-800 shadow hover:bg-slate-300 focus:bg-slate-300 focus:ring-slate-500',
  danger:
    'bg-red-500 text-white shadow-lg uppercase tracking-wider hover:bg-red-400 focus:bg-red-400 focus:ring-red-500',
  text: 'text-slate-700 uppercase underline hover:text-slate-600 hover:bg-slate-900/5 focus:text-slate-600 focus:ring-slate-500',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm focus:ring-2 focus:ring-offset-1',
  md: 'px-5 py-3 focus:ring-2 focus:ring-offset-2',
  lg: 'px-8 py-4 text-lg focus:ring focus:ring-offset-2',
}

type IconProps =
  | { startIcon: React.ReactElement; endIcon?: never }
  | { endIcon: React.ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined }

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  isLoading?: boolean
} & IconProps

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      startIcon,
      endIcon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          'flex items-center justify-center rounded-md font-medium focus:outline-none ',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {!isLoading && startIcon}
        <span className="mx-2">{props.children}</span>
        {isLoading && (
          <Spinner
            size="sm"
            variant="light"
            className={clsx(
              'text-current ',
              isLoading ? 'visable ' : 'invisible'
            )}
          />
        )}

        {!isLoading && endIcon}
      </button>
    )
  }
)

Button.displayName = 'Button'
