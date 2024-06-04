import { render, screen, fireEvent, act } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';

import HomePage from '../app/home/page';

describe('HomePage', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  
  it('renders table and dashboard buttons', () => {
    render(<HomePage />);
    expect(screen.getByRole('button', { name: /Table tab/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Dashboard tab/i })).toBeInTheDocument();
  });

  it('renders Table component by default', async () => {
    render(<HomePage />);
    expect(await screen.findByText('Table')).toBeInTheDocument();
  });

  it('renders the HomePage with Table initially and allows tab switching', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([
        {
          Name: 'John',
          Surname: 'Doe',
          Number: 1,
          Gender: 'Male',
          Country: 'USA',
          Dependants: 0,
          BirthDate: '1990-01-01'
        }
      ])
    );

    render(<HomePage />);
    
    // Check initial render with Table component
    const tableButton = screen.getByText('Table');
    expect(tableButton).toBeInTheDocument();
    const dashboardButton = screen.getByText('Dashboard');
    expect(dashboardButton).toBeInTheDocument();
    
    const tableComponent = await screen.findByText('Table');
    expect(tableComponent).toBeInTheDocument();

    // Switch to Dashboard tab
    fireEvent.click(dashboardButton);
    
    const dashboardComponent = await screen.findByText('User Overview');
    expect(dashboardComponent).toBeInTheDocument();
    
    // Switch back to Table tab
    fireEvent.click(tableButton);

    expect(await screen.findByText('Table')).toBeInTheDocument();
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
