import React from 'react';
import { render, screen } from '@testing-library/react';

import ItemDetail from 'components/ItemDetail';
import { productConditions } from 'config/constants';
import itemDetailMock from '__mocks__/components/itemDetail.mock';

describe('ItemDetail', () => {
  it('should render content', () => {
    render(<ItemDetail {...itemDetailMock} />);
    expect(screen.getByText(itemDetailMock.title)).toBeInTheDocument();
    expect(
      screen.getByText(itemDetailMock.description.plain_text)
    ).toBeInTheDocument();
  });
  it('should render used conditon', () => {
    render(
      <ItemDetail {...itemDetailMock} condition={productConditions.USED} />
    );
    expect(screen.getByText('Usado')).toBeInTheDocument();
  });
  it('should render without condition', () => {
    render(<ItemDetail {...itemDetailMock} condition={undefined} />);
    expect(screen.getByText('Nuevo')).toBeInTheDocument();
  });
});
