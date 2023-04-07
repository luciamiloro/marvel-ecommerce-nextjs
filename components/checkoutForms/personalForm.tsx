/* import React, { FC, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


export const loginSchema = yup.object({
    username: yup.string().required('Username is required').min(3, 'Username should have at least 3 chars'),
    password: yup.string().required('Password is required')
  }).required();

export type PersonalFormData ={
    firstname: string,
    lastname: string,
    email: string
}

export type PersonalFormProps ={
    activeStep:number,
    handleNext: (data: PersonalFormData) => void;
}

const PersonalForm:FC<PersonalFormProps> = (faqsData) => {

    const {control, register, setFocus, handleSubmit} = useForm<FormData>({resolver: yupResolver(loginSchema)});

    const methods = useForm<PersonalFormData>({
       
        // resolver: yupResolver(registerFormSchema)
    })

    useEffect(() => {
        setFocus("username");
    },[])

  return (
    <form>PersonalForm
                <Controller 
                    name="username"
                    control={control}
                    defaultValue={""}
                    // rules={usernameRules}
                    render={({field: {onChange, value, ref}, formState: {errors}}) => (
                        <TextField 
                            onChange={onChange}
                            value={value}
                            label={"Username:"} 
                            inputRef={ref}
                            fullWidth 
                            error={!!errors.username}
                            helperText={`${errors.username?.message || ''}`}
                        />
                    )}
                />
    </form>
  )
}

export default PersonalForm */