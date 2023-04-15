import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CheckoutStepper from "./index.page";
import { PersonalFormData } from '../../components/checkoutForms/forms.types';
import comic from "dh-marvel/test/mocks/comic";
import PersonalForm from "dh-marvel/components/checkoutForms/personalForm";
import { createMocks } from 'node-mocks-http';
import handleCheckout, {validCard} from "dh-marvel/pages/api/checkout.route";
import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";

// Mock the useRouter hook
jest.mock("next/router", () => ({
    useRouter() {
        return {
            push: jest.fn(),
        }
    }
}))
/*
describe('handleSubmitPersonalForm', () => {
    it('updates order and active step on form submission', () => {
        const setOrder = jest.fn();
        const setActiveStep = jest.fn();
        const initialValues = {};

        const { getByRole } = render(
            <PersonalForm activeStep={0} handleNext={function (data: PersonalFormData): void {
                throw new Error("Function not implemented.");
            }}
            />,
        );

        const firstNameInput = getByRole('textbox', { name: /first name/i });
        const lastNameInput = getByRole('textbox', { name: /last name/i });

        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        fireEvent.change(lastNameInput, { target: { value: 'Doe' } });

        const form = getByRole('form');
        fireEvent.submit(form);

        expect(setOrder).toHaveBeenCalledWith({
            ...initialValues,
            firstName: 'John',
            lastName: 'Doe',
        });

        expect(setActiveStep).toHaveBeenCalledWith(1);
    });
});
*/
describe("onSubmit", () => {

    it("should trigger handleSubmit", async () => {
        render(<CheckoutStepper />);

        //First Step
        const firstNameInput = screen.getByLabelText("Name");
        const lastNameInput = screen.getByLabelText("Last Name");
        const emailInput = screen.getByLabelText("Email");
        const nextButton = screen.getByText("Next");

        fireEvent.change(firstNameInput, { target: { value: "Test" } });
        fireEvent.change(lastNameInput, { target: { value: "User" } });
        fireEvent.change(emailInput, { target: { value: "test@user.com" } });
        fireEvent.click(nextButton);

        //Second Step
        await waitFor(() => {
            const addressInput = screen.getByLabelText("Address");
            const cityInput = screen.getByLabelText("City");
            const provinceInput = screen.getByLabelText("Province/State");
            const postalCodeInput = screen.getByLabelText("Postal Code");


            fireEvent.change(addressInput, { target: { value: "Calle falsa 123" } });
            fireEvent.change(cityInput, { target: { value: "Esquel" } });
            fireEvent.change(provinceInput, { target: { value: "Chubut" } });
            fireEvent.change(postalCodeInput, { target: { value: "9200" } });

        })
        const nextButton2 = screen.getByText("Next");
        fireEvent.click(nextButton2);

        //Third Step
        await waitFor(() => {
            const number = screen.getByLabelText("Card Number");
            const nameOnCard = screen.getByLabelText("Name on Card");
            const expDate = screen.getByLabelText("Expiration Date");
            const cvc = screen.getByLabelText("CVV");


            fireEvent.change(number, { target: { value: "4242424242424242" } });
            fireEvent.change(nameOnCard, { target: { value: "TEST USER" } });
            fireEvent.change(expDate, { target: { value: "02/28" } });
            fireEvent.change(cvc, { target: { value: "123" } });

        })
        const nextButton3 = screen.getByText("Next");
        fireEvent.click(nextButton3);

        //Last Step
        await waitFor(() => {
            const confirmText = screen.getByText("Data correctly loaded, confirm your purchase")
            expect(confirmText).toBeInTheDocument();

        })
        const submitButton = screen.getByRole("submit");
        fireEvent.click(submitButton);

        //Back to third step
        const back = screen.getByRole('back3');
        fireEvent.click(back);
        fireEvent.click(nextButton3);


    });

})


describe('Checkout error messages handleCheckout', () => {
    describe('valid POST, customer and card data', () => {
        it('should return a successful checkout response', async () => {
            const order = { customer: { address: {} }, card: { number: validCard } } as CheckoutInput
            const { req, res } = createMocks({
                method: 'POST',
                body: order
            });
            await handleCheckout(req, res);
            expect(res._getStatusCode()).toBe(200)
            expect(JSON.parse(res._getData())).toEqual(
                expect.objectContaining({ data: order }),
            );
        })
    })
})