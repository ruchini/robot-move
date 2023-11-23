/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table';

describe('Table Component', () => {
  it('should render without errors', () => {
    const { container } = render(<Table position={{ x: 0, y: 0 }} />);
    expect(container).toBeInTheDocument();
  });

  it('should handle teleporting when a cell is clicked', async () => {
    const onTeleportMock = jest.fn();
    const position = { x: 2, y: 2 }; // Provide a mock position

    const { getByTestId } = render(
      <Table position={position} onTeleport={onTeleportMock} />
    );

    const cell = getByTestId('cell-2-2');

    fireEvent.click(cell);

    // Assuming teleport delay is set to 500 milliseconds
    await waitFor(() => {
      expect(onTeleportMock).toHaveBeenCalledWith({ x: 2, y: 2 });
    });
  });
});
