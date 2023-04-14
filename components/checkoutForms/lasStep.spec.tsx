
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LastStep from './lastStep';

describe('LastStep component', () => {
    const setActiveStep = jest.fn();
    const handleApiSubmit = jest.fn();

    beforeEach(() => {
        render(<LastStep activeStep={3} setActiveStep={setActiveStep} handleApiSubmit={handleApiSubmit} />);
    });

    it('renders the confirmation message', () => {
        const confirmationMessage = screen.getByText(/data correctly loaded, confirm your purchase/i);
        expect(confirmationMessage).toBeInTheDocument();
    });

});