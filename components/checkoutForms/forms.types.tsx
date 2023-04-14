import * as yup from "yup";

/********************** FORM 1 Personal */

export const personalDataSchema = yup
  .object({
    firstname: yup.string().required('Firstname is required').min(3, 'Username should have at least 3 chars'),
    lastname: yup.string().required('Lastname is required').min(3, 'Lastname should have at least 3 chars'),
    email: yup
      .string()
      .required('Email is required')
      .email("Email is not valid"),
  })
  .required();

  export type PersonalFormData = {
    firstname: string,
    lastname: string,
    email: string
}

export type PersonalFormProps = {
    activeStep: number,
    handleNext: (data: PersonalFormData) => void;
}


/**********************FORM 2 Delivery */

export const deliverySchema = yup
  .object({
    address: yup.string().required("Address is required"),
    department: yup.string(),
    city: yup.string().required("City is required"),
    province: yup.string().required("Province is required"),
    postalcode: yup.string().required("Postal Code is required"),
  })
  .required();

  export type DeliveryFormData = {
    address: string;
    department: string;
    city: string;
    province: string;
    postalcode: string;
}

export type DeliveryFormProps = {
    activeStep: number,
    handleNext: (data: DeliveryFormData) => void;
    setActiveStep: (num: number) => void;
}

/**********************FORM 3 Payment*/

export const paySchema = yup
    .object({
        cardnumber: yup.string().required("Card number is required"),
        cardname: yup.string().required("Card name is required"),
        expdate: yup.string().required("Expiration date is required"),
        securitycode: yup.number().required("Security code is required"),
    })
    .required();

    export type PaymentFormData = {
      cardnumber: string;
      cardname: string;
      expdate: string;
      securitycode: string;
  }
  
  export type PaymentFormProps = {
      activeStep: number,
      handleNext: (data: PaymentFormData) => void;
      setActiveStep: (num: number) => void;
      handleApiSubmit: () => void;
  }

  /**********************FORM general fusion index*/

  export type LastStepProps = {
    activeStep: number,
    setActiveStep: (num: number) => void;
    handleApiSubmit: () => void;
}