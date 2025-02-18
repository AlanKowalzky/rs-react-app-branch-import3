import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from '../components/Pagination'; // Załóżmy, że tak wygląda ścieżka do komponentu
import '@testing-library/jest-dom';

test('renders correctly', () => {
  const onPageChange = jest.fn();
  render(<Pagination currentPage={1} totalPages={10} onPageChange={onPageChange} />);

  expect(screen.getByText('Strona 1 z 10')).toBeInTheDocument();
});