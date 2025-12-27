import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';

describe('Input Atom', () => {
  it('renders with label', () => {
    render(<Input label="Username" />);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  it('displays error message', () => {
    render(<Input error="Invalid input" />);
    expect(screen.getByText('Invalid input')).toBeInTheDocument();
  });

  it('handles value change', () => {
    const onChange = vi.fn();
    render(<Input label="Username" onChange={onChange} />);
    const input = screen.getByLabelText('Username');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalled();
  });
});
