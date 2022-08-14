import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Bullet from './Bullet';

describe('<Bullet />', () => {
  test('it should mount', () => {
    render(<Bullet />);
    
    const bullet = screen.getByTestId('Bullet');

    expect(bullet).toBeInTheDocument();
  });
});