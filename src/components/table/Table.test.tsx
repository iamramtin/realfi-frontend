import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';

import Table from './Table';

fetchMock.enableMocks();

describe('Table Component', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('fetches and displays user data', async () => {
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

    render(<Table />);

    // Ensure the data is fetched and displayed
    expect(await screen.findByText('Table')).toBeInTheDocument();
    expect(await screen.findByText('John')).toBeInTheDocument();
    expect(await screen.findByText('Doe')).toBeInTheDocument();
  });

  it('toggles between simple and full table views', async () => {
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

    render(<Table />);

    // Ensure the data is fetched and displayed
    expect(await screen.findByText('Table')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Show Full Table'));

    await waitFor(() => {
      expect(screen.getByText('Show Simple Table')).toBeInTheDocument();
    });

    expect(screen.getByText('Number')).toHaveClass('md:table-cell hidden');
    expect(screen.getByText('Gender')).toHaveClass('md:table-cell hidden');
    expect(screen.getByText('Country')).toHaveClass('md:table-cell hidden');
    expect(screen.getByText('Dependants')).toHaveClass('md:table-cell hidden');
    expect(screen.getByText('BirthDate')).toHaveClass('md:table-cell hidden');

    fireEvent.click(screen.getByText('Show Simple Table'));

    await waitFor(() => {
      expect(screen.getByText('Show Full Table')).toBeInTheDocument();
    });

    expect(screen.getByText('Number')).not.toHaveClass('md:table-cell hidden');
    expect(screen.getByText('Gender')).not.toHaveClass('md:table-cell hidden');
    expect(screen.getByText('Country')).not.toHaveClass('md:table-cell hidden');
    expect(screen.getByText('Dependants')).not.toHaveClass('md:table-cell hidden');
    expect(screen.getByText('BirthDate')).not.toHaveClass('md:table-cell hidden');
  });
});
