import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from '../components/Search';

describe('Search', () => {
  const mockSearch = jest.fn();

  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    // Zamockowanie localStorage.setItem
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: jest.fn(),
        getItem: jest.fn(),
        clear: jest.fn(),
      },
      writable: true,
    });
  });

  it('updates input value', async () => {
    render(<Search onSearch={mockSearch} />);
    const input = screen.getByPlaceholderText('Enter your search term...');
    await userEvent.type(input, 'test');
    expect(input).toHaveValue('test');
  });

  it('triggers search with trimmed value', async () => {
    render(<Search onSearch={mockSearch} />);
    const input = screen.getByPlaceholderText('Enter your search term...');
    await userEvent.type(input, '  test  ');
    await userEvent.click(screen.getByText('Search'));
    expect(mockSearch).toHaveBeenCalledWith('test');
  });

  it('saves to localStorage', async () => {
    render(<Search onSearch={mockSearch} />);
    const input = screen.getByPlaceholderText('Enter your search term...');
    await userEvent.type(input, 'local-storage-test');
    await userEvent.click(screen.getByText('Search'));
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'searchTerm',
      'local-storage-test'
    );
  });
});
