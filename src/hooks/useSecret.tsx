// src/hooks/useSecretInput.ts
import { useState, type ChangeEvent, type SubmitEvent } from 'react';

type SecretSubmitHandler = (value: string) => void;

export function useSecretInput(
  initialValue: string = '',
  onSubmit: SecretSubmitHandler = (v) => console.log('Descubra:', v)
) {
  const [value, setValue] = useState<string>(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e?: SubmitEvent) => {
    if (e) e.preventDefault();
    onSubmit(value);
  };

  return {
    value,
    bind: { value, onChange: handleChange },
    handleSubmit,
  };
}