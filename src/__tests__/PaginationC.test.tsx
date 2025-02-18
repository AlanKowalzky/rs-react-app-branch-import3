import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination';

describe('Pagination', () => {
  test('renders correctly', () => {
    const onPageChange = jest.fn();
    render(<Pagination currentPage={1} totalPages={10} onPageChange={onPageChange} />);
    
    expect(screen.getByText('Strona 1 z 10')).toBeInTheDocument();
  });

  test('calls onPageChange when next button is clicked', () => {
    const onPageChange = jest.fn();
    render(<Pagination currentPage={1} totalPages={10} onPageChange={onPageChange} />);
    
    const nextButton = screen.getByText('Następna');
    fireEvent.click(nextButton);
    
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  test('calls onPageChange when previous button is clicked', () => {
    const onPageChange = jest.fn();
    render(<Pagination currentPage={2} totalPages={10} onPageChange={onPageChange} />);
    
    const previousButton = screen.getByText('Poprzednia');
    fireEvent.click(previousButton);
    
    expect(onPageChange).toHaveBeenCalledWith(1);
  });
});