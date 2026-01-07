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
    
    // PrakritiPath appears in header and copyright
    expect(screen.getAllByText(/PrakritiPath/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/2025/)).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});