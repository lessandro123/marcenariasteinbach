'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface MaskedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  mask?: 'phone';
  onValueChange?: (value: string) => void;
}

const MaskedInput = React.forwardRef<HTMLInputElement, MaskedInputProps>(
  ({ className, mask, onValueChange, onChange, ...props }, ref) => {
    const applyPhoneMask = (value: string): string => {
      // Remove tudo que não é número
      const numbers = value.replace(/\D/g, '');

      // Aplica a máscara (XX) XXXXX-XXXX
      if (numbers.length <= 2) {
        return numbers;
      } else if (numbers.length <= 7) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
      } else if (numbers.length <= 11) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
      }

      // Limita a 11 dígitos
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let newValue = e.target.value;

      if (mask === 'phone') {
        newValue = applyPhoneMask(newValue);
        e.target.value = newValue;
      }

      if (onValueChange) {
        onValueChange(newValue);
      }

      if (onChange) {
        onChange(e);
      }
    };

    return (
      <input
        type="text"
        className={cn(
          'flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base transition-colors',
          'placeholder:text-gray-400',
          'focus:outline-none focus:ring-2 focus:ring-[var(--red-primary)] focus:border-transparent',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        onChange={handleChange}
        {...props}
      />
    );
  }
);

MaskedInput.displayName = 'MaskedInput';

export { MaskedInput };
