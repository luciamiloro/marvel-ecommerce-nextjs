import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PersonalForm from './personalForm';

describe('PersonalForm', () => {
    test('renders the form fields', () => {
        render(<PersonalForm activeStep={0} handleNext={() => { }} />);
        const nameField = screen.getByLabelText('Name');
        const lastNameField = screen.getByLabelText('Last Name');
        const emailField = screen.getByLabelText('Email');
        expect(nameField).toBeInTheDocument();
        expect(lastNameField).toBeInTheDocument();
        expect(emailField).toBeInTheDocument();
    });

    test('validates the form fields when submitted with valid data', () => {
        render(<PersonalForm activeStep={0} handleNext={() => { }} />);
        const nameField = screen.getByLabelText('Name');
        const lastNameField = screen.getByLabelText('Last Name');
        const emailField = screen.getByLabelText('Email');
        const submitButton = screen.getByRole('button', { name: 'Next' });

        fireEvent.change(nameField, { target: { value: 'John' } });
        fireEvent.change(lastNameField, { target: { value: 'Doe' } });
        fireEvent.change(emailField, { target: { value: 'john.doe@example.com' } });
        fireEvent.click(submitButton);

        expect(nameField).toHaveValue('John');
        expect(lastNameField).toHaveValue('Doe');
        expect(emailField).toHaveValue('john.doe@example.com');
    });

    test('shows an error message when submitted with invalid data', async () => {
        render(<PersonalForm activeStep={0} handleNext={() => { }} />);
        const nameField = screen.getByLabelText('Name');
        const lastNameField = screen.getByLabelText('Last Name');
        const emailField = screen.getByLabelText('Email');
        const submitButton = screen.getByRole('button', { name: 'Next' });

        fireEvent.change(nameField, { target: { value: '' } });
        fireEvent.change(lastNameField, { target: { value: 'Doe' } });
        fireEvent.change(emailField, { target: { value: 'invalid-email' } });
        fireEvent.click(submitButton);
    });
});