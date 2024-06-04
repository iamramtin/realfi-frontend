import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import userEvent from '@testing-library/user-event';

import Dashboard from './Dashboard';

describe('Dashboard', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('fetches and renders data', () => {
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

    render(<Dashboard />);

    // Verify that the data is rendered
    expect(screen.getByText('John')).toBeInTheDocument();

    // Verify that the fetch function is called with the correct URL
    expect(fetchMock).toHaveBeenCalledWith('/api/mock');

    expect(screen.getByText('Dependents by Country')).toBeInTheDocument();
    expect(screen.getByText('Age Groups')).toBeInTheDocument();
    expect(screen.getByText('Age vs Dependents')).toBeInTheDocument();
  });
  
  it('filters users by gender using GenderFilterDropdown', async () => {
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
        },
        {
          Name: 'Jane',
          Surname: 'Doe',
          Number: 2,
          Gender: 'Female',
          Country: 'Canada',
          Dependants: 1,
          BirthDate: '1990-01-01'
        },
      ])
    );

    render(<Dashboard />);

    // Filter data by gender
    const genderDropdown = screen.getByTestId('select-option');
    expect(genderDropdown).toBeInTheDocument();
    userEvent.click(genderDropdown);

    // Select gender filter and check if data is filtered
    fireEvent.change(genderDropdown, { target: { value: 'Female' } });
    await waitFor(() => {
      expect(screen.queryByText('John')).not.toBeInTheDocument();
      expect(screen.getByText('Jane')).toBeInTheDocument();
    });
  });
});
