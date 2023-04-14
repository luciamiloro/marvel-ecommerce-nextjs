import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PersonalForm from './personalForm';

describe('PersonalForm component', () => {
  test('submits form with valid input', () => {
    const handleNext = jest.fn();
    render(<PersonalForm activeStep={0} handleNext={handleNext} />);
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'User' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@user.com' } });
    fireEvent.click(screen.getByText('Next'));
    expect(handleNext).toHaveBeenCalledWith({
      firstname: 'Test',
      lastname: 'User',
      email: 'test@user.com',
    });
  });

  test('does not submit form with invalid input', () => {
    const handleNext = jest.fn();
    render(<PersonalForm activeStep={0} handleNext={handleNext} />);
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: '' } });
    fireEvent.change(screen.getByLabelText('Last Name'), { target: { value: 'User' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@user' } });
    fireEvent.click(screen.getByText('Next'));
    expect(handleNext).not.toHaveBeenCalled();
    expect(screen.getByText(/must be a valid email/i)).toBeInTheDocument();
    expect(screen.getByText(/name is a required field/i)).toBeInTheDocument();
  });
});
