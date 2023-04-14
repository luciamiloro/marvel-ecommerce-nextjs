import { fireEvent, render, screen } from '@testing-library/react';
import StepperNavigation from './stepperNavigation';


describe('StepperNavigation', () => {
  it('renders the "Previous" button when activeStep is not 0', () => {
    render(
      <StepperNavigation
        activeStep={1}
        onPrevClick={() => {}}
        onNextClick={() => {}}
      />
    );
    expect(screen.getByText('Previous')).toBeInTheDocument();
  });

  it('does not render the "Previous" button when activeStep is 0', () => {
    render(
      <StepperNavigation
        activeStep={0}
        onPrevClick={() => {}}
        onNextClick={() => {}}
      />
    );
    expect(screen.queryByText('Previous')).toBeNull();
  });

  it('renders the "Next" button when activeStep is less than 3', () => {
    render(
      <StepperNavigation
        activeStep={2}
        onPrevClick={() => {}}
        onNextClick={() => {}}
      />
    );
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('renders the "BUY COMIC" button when activeStep is 3', () => {
    render(
      <StepperNavigation
        activeStep={3}
        onPrevClick={() => {}}
        onNextClick={() => {}}
      />
    );
    expect(screen.getByText('BUY COMIC')).toBeInTheDocument();
  });

  it('calls onPrevClick when the "Previous" button is clicked', () => {
    const onPrevClick = jest.fn();
    render(
      <StepperNavigation
        activeStep={1}
        onPrevClick={onPrevClick}
        onNextClick={() => {}}
      />
    );
    fireEvent.click(screen.getByText('Previous'));
    expect(onPrevClick).toHaveBeenCalledTimes(1);
  });

  it('calls onNextClick when the "Next" button is clicked', () => {
    const onNextClick = jest.fn();
    render(
      <StepperNavigation
        activeStep={2}
        onPrevClick={() => {}}
        onNextClick={onNextClick}
      />
    );
    fireEvent.click(screen.getByText('Next'));
    expect(onNextClick).toHaveBeenCalledTimes(1);
  });


});