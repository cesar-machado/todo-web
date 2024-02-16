/** @jest-environment jsdom */

/**
 * @jest-environment node
 */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import '@testing-library/jest-dom';

import HelloComponent from './components/HelloComponent';

jest.mock('axios');

describe('HelloComponent', () => {
  it('fetches successfully data from an API and renders it', async () => {
    const mockData = { id: 1, content: 'Hello, World' };
    axios.get.mockResolvedValueOnce({ data: mockData });

    render(<HelloComponent />);

    await waitFor(() => {
      expect(screen.getByText('Hello, World')).toBeInTheDocument();
    });
  });
});
