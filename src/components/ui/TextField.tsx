import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import * as React from 'react'
import { FieldError } from 'react-hook-form'

export type TextFieldOwnProps = {
  label?: string
  error?: FieldError | undefined
}

type TextFieldProps = TextFieldOwnProps &
  React.ComponentPropsWithoutRef<'input'>

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    { label, id, name, type = 'text', className, error, ...rest },
    forwardedRef
  ) => {
    return (
      <div>
        {label && (
          <label
            htmlFor={id || name}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            {...rest}
            ref={forwardedRef}
            id={id || name}
            name={name}
            type={type}
            className={clsx(
              'block w-full rounded-md  sm:text-sm',
              error?.message
                ? 'border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500'
                : ' border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 ',

              className
            )}
          />
          {error?.message && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon
                className="h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            </div>
          )}
        </div>

        <p
          role="alert"
          aria-label={error?.message}
          className={clsx(
            ' mt-2 text-sm text-red-600',
            error?.message ? 'visable' : 'invisable',

            className
          )}
          id="email-error"
        >
          {error?.message}
        </p>
      </div>
    )
  }
)

TextField.displayName = 'TextField'
