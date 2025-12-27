import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FormField } from './FormField';

describe('FormField Molecule', () => {
  it('renders with label and children', () => {
    render(
      <FormField label="Email">
        <input type="text" />
      </FormField>
    );
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('displays error message', () => {
    render(
      <FormField error="Email is required">
        <input type="text" />
      </FormField>
    );
    expect(screen.getByText('Email is required')).toBeInTheDocument();
  });
});
