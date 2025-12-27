import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Select } from './Select';

describe('Select Atom', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ];

  it('renders with label and options', () => {
    render(<Select label="Choices" options={options} />);
    expect(screen.getByText('Choices')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('handles value change', () => {
    const onChange = vi.fn();
    render(<Select label="Choices" options={options} onChange={onChange} />);
    const select = screen.getByLabelText('Choices');
    fireEvent.change(select, { target: { value: '2' } });
    expect(onChange).toHaveBeenCalled();
  });
});
