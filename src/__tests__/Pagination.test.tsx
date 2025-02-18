// src/__tests__/Pagination.test.tsx
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination';

test('renders correctly', () => {
  const onPageChange = jest.fn();
  render(<Pagination currentPage={1} totalPages={10} onPageChange={onPageChange} />);

  // Użyj dokładnego tekstu, który jest renderowany w komponencie
  expect(screen.getByText('Strona 1 z 10')).toBeInTheDocument();
});