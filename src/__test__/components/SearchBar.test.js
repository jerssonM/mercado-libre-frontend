import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import SearchBar from 'components/SearchBar';

const mockPush = jest.fn();
jest.mock('next/router', () => ({ useRouter: () => ({ push: mockPush }) }));

describe('Item', () => {
  it('should change input text', () => {
    render(<SearchBar />);
    const input = screen.getByTestId('searchBar-input');
    fireEvent.change(input, { target: { value: 'Product test' } });
    expect(input.value).toBe('Product test');
  });
  it('should call push route', () => {
    render(<SearchBar />);
    const input = screen.getByTestId('searchBar-input');
    fireEvent.change(input, { target: { value: 'Product test' } });
    screen.getByTestId('searchBar-button').click();
    expect(mockPush).toHaveBeenCalled();
    jest.resetAllMocks();
  });
  it('should call push route with press invalid key', () => {
    render(<SearchBar />);
    const input = screen.getByTestId('searchBar-input', 'input');
    fireEvent.keyDown(input, { code: 'e' });
    expect(mockPush).toHaveBeenCalledTimes(0);
  });
});
