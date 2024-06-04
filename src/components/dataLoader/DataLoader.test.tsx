import { render, screen } from '@testing-library/react';
import DataLoader from './DataLoader';

describe('DataLoader', () => {
  it('renders loading message when loading is true', () => {
    render(<DataLoader loading={true}>Children Content</DataLoader>);
    expect(screen.getByText('Fetching data...')).toBeInTheDocument();
  });

  it('renders children when loading is false', () => {
    render(<DataLoader loading={false}>Children Content</DataLoader>);
    expect(screen.queryByText('Fetching data...')).not.toBeInTheDocument();
    expect(screen.getByText('Children Content')).toBeInTheDocument();
  });
});
