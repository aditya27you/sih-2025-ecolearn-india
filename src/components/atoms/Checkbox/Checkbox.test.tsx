import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox Atom', () => {
  it('renders with label', () => {
    render(<Checkbox label="Accept Terms" />);
    expect(screen.getByText('Accept Terms')).toBeInTheDocument();
  });

  it('handles toggle', () => {
    const onChange = vi.fn();
    render(<Checkbox label="Accept Terms" onChange={onChange} />);
    const checkbox = screen.getByLabelText('Accept Terms');
    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalled();
    expect(checkbox).toBeChecked();
  });
});
