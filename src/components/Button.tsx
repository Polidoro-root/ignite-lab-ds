import clsx from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  asChild?: boolean
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'flex items-center justify-center py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
