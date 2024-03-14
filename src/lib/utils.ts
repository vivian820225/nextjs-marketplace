import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: 'TWD' | 'JPY' | 'USD'
    notation?: Intl.NumberFormatOptions['notation']
  } = {}
) {
  const { currency = 'TWD', notation = 'compact' } = options

  const numericPrice = typeof price === 'string' ? parseFloat(price) : price

  return new Intl.NumberFormat('zh-Hant', {
    style: 'currency',
    currency,
    notation,
  }).format(numericPrice)
}
