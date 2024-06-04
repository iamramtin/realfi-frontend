import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import userEvent from '@testing-library/user-event';

import Dashboard from './Dashboard';

export function setup(tsx: any) {
  const { container } = render(tsx);
  return {
    user: userEvent.setup(),
    container
  };
}

describe('Dashboard', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('renders without crashing', () => {
    render(<Dashboard />);
    
    expect(screen.getByText('Dependents by Country')).toBeInTheDocument();
    expect(screen.getByText('Age Groups')).toBeInTheDocument();
    expect(screen.getByText('Age vs Dependents')).toBeInTheDocument();
  });
});
