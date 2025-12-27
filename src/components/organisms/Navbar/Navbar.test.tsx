import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Navbar } from './Navbar';
import { MemoryRouter } from 'react-router';

describe('Navbar Organism', () => {
  it('renders branding and navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    
    expect(screen.getByText('EcoLearn India')).toBeInTheDocument();
    // Dashboard appears twice (mobile and desktop)
    expect(screen.getAllByText('Dashboard').length).toBeGreaterThan(0);
  });

  it('highlights the active link', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Navbar />
      </MemoryRouter>
    );
    
    // Find the link in the desktop menu (hidden lg:flex)
    const dashboardLinks = screen.getAllByText('Dashboard');
    const activeLink = dashboardLinks.find(el => el.classList.contains('active'));
    expect(activeLink).toBeDefined();
  });
});