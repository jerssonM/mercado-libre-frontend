import React from 'react';
import { render, screen } from '@testing-library/react';

import Breadcrumbs from 'components/Breadcrumbs';

describe('Breadcrumbs', () => {
  it('render all items', () => {
    render(
      <Breadcrumbs
        items={[
          { id: 'test-1', name: 'breadcrumb-test-1' },
          { id: 'test-2', name: 'breadcrumb-test-2' }
        ]}
      />
    );
    expect(screen.getByText('breadcrumb-test-1')).toBeInTheDocument();
    expect(screen.getByText('breadcrumb-test-2')).toBeInTheDocument();
  });
  it('render without items', () => {
    const { container } = render(<Breadcrumbs items={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
