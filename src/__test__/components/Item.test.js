import React from 'react';
import { render, screen } from '@testing-library/react';

import Item from 'components/Item';
import itemMock from '__mocks__/components/item.mock';

describe('Item', () => {
  it('render render content', () => {
    render(<Item {...itemMock} />);
    expect(screen.getByText(itemMock.title)).toBeInTheDocument();
    expect(screen.getByText(itemMock.address.city_name)).toBeInTheDocument();
  });
  it('should call onClick', () => {
    const spy = jest.fn();
    render(<Item {...itemMock} onClick={spy} />);
    screen.getByText(itemMock.title).click();
    expect(spy).toHaveBeenCalled();
  });
});
