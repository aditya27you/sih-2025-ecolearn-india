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
    
    expect(screen.getByText('PrakritiPath')).toBeInTheDocument();
    expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Login').length).toBeGreaterThan(0);
  });

  it('highlights the active link', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>
    );
    
    // Find the link in the desktop menu (hidden lg:flex)
    const homeLinks = screen.getAllByText('Home');
    const activeLink = homeLinks.find(el => el.classList.contains('active'));
    expect(activeLink).toBeDefined();
  });
});