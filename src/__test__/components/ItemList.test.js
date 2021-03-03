import React from 'react';
import { render, screen } from '@testing-library/react';

import ItemList from 'components/ItemList';
import itemMock from '__mocks__/components/item.mock';

const mockPush = jest.fn();
jest.mock('next/router', () => ({ useRouter: () => ({ push: mockPush }) }));

describe('ItemList', () => {
  it('render render content', () => {
    render(<ItemList items={[itemMock]} />);
    expect(screen.getByText(itemMock.title)).toBeInTheDocument();
    expect(screen.getByText(itemMock.city_name)).toBeInTheDocument();
  });
  it('should call onClick', () => {
    render(<ItemList items={[itemMock]} />);
    screen.getByText(itemMock.title).click();
    expect(mockPush).toHaveBeenCalled();
  });
});
