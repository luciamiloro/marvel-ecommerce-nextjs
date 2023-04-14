import { render, screen, fireEvent } from '@testing-library/react';
import PaymentForm from './paymentForm';

describe('PaymentForm component', () => {
    it('renders the component', () => {
        render(<PaymentForm activeStep={1} handleNext={() => { }} setActiveStep={() => { }} handleApiSubmit={() => { }} />);
        const paymentFormTitle = screen.getByText(/Payment Information/i);
        expect(paymentFormTitle).toBeInTheDocument();
    });

    it('fails to submit the form with invalid data', async () => {
        const handleNext = jest.fn();
        const setActiveStep = jest.fn();
        const handleApiSubmit = jest.fn();

        render(<PaymentForm activeStep={1} handleNext={handleNext} setActiveStep={setActiveStep} handleApiSubmit={handleApiSubmit} />);

        const cardNumberField = screen.getByLabelText(/Card Number/i);
        const cardNameField = screen.getByLabelText(/Name on Card/i);
        const expDateField = screen.getByLabelText(/Expiration Date/i);
        const securityCodeField = screen.getByLabelText(/CVV/i);
        const submitButton = screen.getByText(/next/i);

        fireEvent.change(cardNumberField, { target: { value: '4242424242424241' } });
        fireEvent.change(cardNameField, { target: { value: '' } });
        fireEvent.change(expDateField, { target: { value: '0228' } });
        fireEvent.change(securityCodeField, { target: { value: '12' } });

        fireEvent.click(submitButton);

        expect(handleNext).not.toHaveBeenCalled();
        expect(handleApiSubmit).not.toHaveBeenCalled();
        expect(setActiveStep).not.toHaveBeenCalled();
    });
});
