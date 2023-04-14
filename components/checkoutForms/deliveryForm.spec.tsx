import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeliveryForm from './deliveryForm';
import { useRouter } from 'next/router';



describe('DeliveryForm', () => {
    const handleNext = jest.fn();
    const setActiveStep = jest.fn();

    beforeEach(() => {
        render(<DeliveryForm activeStep={1} handleNext={handleNext} setActiveStep={setActiveStep} />);
    });

    it('renders the form with default values', () => {
        expect(screen.getByLabelText('Address')).toHaveValue('Calle falsa 123');
        expect(screen.getByLabelText('Department')).toHaveValue('');
        expect(screen.getByLabelText('City')).toHaveValue('Esquel');
        expect(screen.getByLabelText('Province/State')).toHaveValue('Chubut');
        expect(screen.getByLabelText('Postal Code')).toHaveValue('9200');
    });

    it('calls the setActiveStep function when the "Previous" button is clicked', () => {
        fireEvent.click(screen.getByText('Previous'));

        expect(setActiveStep).toHaveBeenCalledWith(0);
    });

    
});
