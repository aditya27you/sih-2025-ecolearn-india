import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SearchBar } from './SearchBar';

describe('SearchBar Molecule', () => {
  it('renders placeholder', () => {
    render(<SearchBar onSearch={vi.fn()} placeholder="Find challenges" />);
    expect(screen.getByPlaceholderText('Find challenges')).toBeInTheDocument();
  });

  it('triggers search on button click', () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'climate' } });
    const button = screen.getByRole('button', { name: /search/i });
    fireEvent.click(button);
    expect(onSearch).toHaveBeenCalledWith('climate');
  });
});
