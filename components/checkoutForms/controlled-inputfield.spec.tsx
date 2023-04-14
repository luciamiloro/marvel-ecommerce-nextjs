

import { screen } from '@testing-library/react';

import ControlledInputField from './controlled-inputfield';
import { renderWithReactHookForm } from './utils/testing.helpers';

describe('controlled input field', () => {
    describe('when rendering default', () => {
        it('shoud render a textbox', () => {
            renderWithReactHookForm(<ControlledInputField name="name" label="Name" />)

            const textbox = screen.getByRole(/textbox/i, { name: "Name" });
            expect(textbox).toBeInTheDocument();
            expect(textbox).toHaveValue("");
        });


    });
})
