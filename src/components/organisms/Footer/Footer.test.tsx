import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from './Footer';
import { MemoryRouter } from 'react-router';

describe('Footer Organism', () => {
  it('renders copyright and platform links', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    
    // EcoLearn India appears in header and copyright
    expect(screen.getAllByText(/EcoLearn India/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/2025/)).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});