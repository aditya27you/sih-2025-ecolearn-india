import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the copyright notice', () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright © 2026 - All right reserved by EcoLearn/i)).toBeInTheDocument();
  });
});
