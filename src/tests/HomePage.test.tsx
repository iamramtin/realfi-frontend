import { render, screen, fireEvent} from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

import HomePage from '../app/home/page';

describe('HomePage', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  
  it('renders HomePage and tabs', () => {
    render(<HomePage />);
    expect(screen.getByRole('button', { name: /Table tab/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Dashboard tab/i })).toBeInTheDocument();
  });

  it('switches to Dashboard component when dashboard button is clicked', () => {
    render(<HomePage />);
    const dashboardButton = screen.getByRole('button', { name: /Dashboard tab/i });
    fireEvent.click(dashboardButton);
    expect(dashboardButton).toBeInTheDocument();
  });

  it('switches back to Table component when table button is clicked', () => {
    render(<HomePage />);
    const tableButton = screen.getByRole('button', { name: /Table tab/i });
    fireEvent.click(tableButton);
    expect(tableButton).toBeInTheDocument();
  });
});
